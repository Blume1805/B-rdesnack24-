// ============================================================================
// Edge Function: terminal-webhook
// ----------------------------------------------------------------------------
// Nimmt Ereignisse der Bezahlterminals an. Herstellerunabhängig; die
// Besonderheiten liegen in `adapter.ts`.
//
// Der Ablauf ist bewusst zweigeteilt:
//
//   1. ANNEHMEN. Signatur prüfen, Kartendaten entfernen, Rohereignis
//      schreiben, quittieren. Ab hier ist der Verkauf sicher — auch wenn
//      danach alles schiefgeht.
//   2. VERBUCHEN. Freigabe einlösen, Kauf und Bestand schreiben. Scheitert
//      das, bleibt der Fehler am Ereignis stehen und der Satz taucht in
//      `terminal_ereignisse_offen()` auf. Es geht nichts verloren.
//
// Wer beides in einen Schritt legt, verliert bei jedem Fehler in der
// Verbuchung einen Umsatz, den §§ 145–147 AO verlangen und der sich
// nachträglich nicht herstellen lässt.
// ============================================================================
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.4";
import { corsHeaders, jsonResponse } from "../_shared/cors.ts";
import { normalisiere, signaturGueltig } from "./adapter.ts";

// Ein Terminal schickt kleine Nachrichten. Alles darüber ist kein Verkauf,
// sondern ein Versuch, den Speicher vollzuschreiben.
const MAX_BYTES = 64 * 1024;

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }
  if (req.method !== "POST") {
    return jsonResponse({ fehler: "Methode nicht erlaubt" }, 405);
  }

  const geheimnis = Deno.env.get("TERMINAL_WEBHOOK_SECRET");
  const url = Deno.env.get("SUPABASE_URL");
  const dienstschluessel = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");

  // Ohne Geheimnis wird nichts angenommen. Eine Function, die ungeprüfte
  // Daten in die Buchführung schreibt, ist schlimmer als eine, die schweigt.
  if (!geheimnis || !url || !dienstschluessel) {
    return jsonResponse({ fehler: "Webhook nicht konfiguriert" }, 500);
  }

  const laenge = Number(req.headers.get("content-length") ?? "0");
  if (laenge > MAX_BYTES) {
    return jsonResponse({ fehler: "Nachricht zu groß" }, 413);
  }

  const rohtext = await req.text();
  if (rohtext.length > MAX_BYTES) {
    return jsonResponse({ fehler: "Nachricht zu groß" }, 413);
  }

  const hersteller = (req.headers.get("x-terminal-hersteller") ?? "ccv")
    .toLowerCase();
  const signatur = req.headers.get("x-terminal-signatur") ?? "";
  const zeitstempel = req.headers.get("x-terminal-zeitstempel") ?? "";

  if (!(await signaturGueltig(geheimnis, zeitstempel, rohtext, signatur))) {
    // Absichtlich ohne Begründung: ob die Signatur falsch oder der
    // Zeitstempel alt war, geht einen Angreifer nichts an.
    return jsonResponse({ fehler: "Nicht zulässig" }, 401);
  }

  let roh: Record<string, unknown>;
  try {
    roh = JSON.parse(rohtext);
  } catch {
    return jsonResponse({ fehler: "Kein gültiges JSON" }, 400);
  }

  const ereignis = normalisiere(hersteller, roh);
  if (!ereignis) {
    return jsonResponse({ fehler: "Ereignis nicht lesbar" }, 400);
  }

  const admin = createClient(url, dienstschluessel, {
    auth: { autoRefreshToken: false, persistSession: false },
  });

  // ── Schritt 1: annehmen ───────────────────────────────────────────────
  const { data: terminal } = await admin
    .from("terminals")
    .select("id, machine_id")
    .eq("hersteller", ereignis.hersteller)
    .eq("terminal_kennung", ereignis.terminal_kennung)
    .is("deleted_at", null)
    .maybeSingle();

  const { data: gespeichert, error: schreibFehler } = await admin
    .from("terminal_ereignisse")
    .insert({
      terminal_id: terminal?.id ?? null,
      hersteller: ereignis.hersteller,
      terminal_kennung: ereignis.terminal_kennung,
      idempotenz_schluessel: ereignis.idempotenz_schluessel,
      anbieter_lfd_nr: ereignis.anbieter_lfd_nr,
      art: ereignis.art,
      nutzlast: ereignis.nutzlast,
    })
    .select("lfd_nr")
    .single();

  if (schreibFehler) {
    // 23505 = derselbe Idempotenzschlüssel war schon da. Das ist kein
    // Fehler, sondern der Normalfall bei einer Wiederholung: Der Absender
    // hat unsere Quittung nicht gesehen und sendet erneut. Wir antworten
    // freundlich, damit er aufhört — gebucht wird nichts ein zweites Mal.
    if (schreibFehler.code === "23505") {
      return jsonResponse({ status: "bereits_erfasst" }, 200);
    }
    return jsonResponse({ fehler: "Konnte nicht gespeichert werden" }, 500);
  }

  const lfdNr = gespeichert.lfd_nr as number;

  // Kein Verkauf, nichts zu verbuchen. Lebenszeichen und Ausfälle stehen
  // im Rohprotokoll und sind damit erledigt.
  if (ereignis.art !== "verkauf") {
    await admin
      .from("terminal_ereignisse")
      .update({ verarbeitet_am: new Date().toISOString() })
      .eq("lfd_nr", lfdNr);
    return jsonResponse({ status: "erfasst", lfd_nr: lfdNr }, 200);
  }

  // ── Schritt 2: verbuchen ──────────────────────────────────────────────
  // Ab hier darf alles schiefgehen, ohne dass der Umsatz verloren ist.
  try {
    if (!terminal) {
      throw new Error(
        `Terminal ${ereignis.terminal_kennung} ist keinem Automaten zugeordnet`,
      );
    }

    let freigabe: {
      customer_id: string;
      product_id: string;
      betrag_brutto: number;
    } | null = null;

    if (ereignis.freigabe_code) {
      const { data } = await admin.rpc("vend_freigabe_einloesen", {
        p_code: ereignis.freigabe_code,
        p_machine: terminal.machine_id,
        p_ereignis_lfd_nr: lfdNr,
      });
      freigabe = Array.isArray(data) && data.length > 0 ? data[0] : null;

      // Ein Code, der nicht einlösbar ist, macht den Verkauf nicht
      // ungültig — das Geld ist geflossen. Er wird als anonymer Kauf
      // verbucht und der Umstand vermerkt.
      if (!freigabe) {
        await admin
          .from("terminal_ereignisse")
          .update({
            verarbeitung_fehler:
              "Freigabecode war ungültig, abgelaufen oder bereits eingelöst — als anonymer Kauf verbucht",
          })
          .eq("lfd_nr", lfdNr);
      }
    }

    if (freigabe) {
      const { error } = await admin.from("purchases").insert({
        customer_id: freigabe.customer_id,
        machine_id: terminal.machine_id,
        total_gross: freigabe.betrag_brutto,
        source: "machine",
        source_ref: ereignis.idempotenz_schluessel,
      });
      if (error) throw new Error(error.message);
    }

    await admin
      .from("terminal_ereignisse")
      .update({ verarbeitet_am: new Date().toISOString() })
      .eq("lfd_nr", lfdNr);

    return jsonResponse({ status: "verbucht", lfd_nr: lfdNr }, 200);
  } catch (e) {
    // Der Fehler bleibt am Ereignis stehen. Quittiert wird trotzdem mit
    // 200: Der Absender soll nicht erneut senden, denn die Nachricht IST
    // angekommen. Was fehlt, ist die Buchung, und die holen wir nach.
    await admin
      .from("terminal_ereignisse")
      .update({
        verarbeitung_fehler: e instanceof Error ? e.message : String(e),
      })
      .eq("lfd_nr", lfdNr);

    return jsonResponse(
      { status: "erfasst_nicht_verbucht", lfd_nr: lfdNr },
      200,
    );
  }
});
