// ============================================================================
// Edge Function: sevdesk-sync
// ----------------------------------------------------------------------------
// Holt Belege/Buchungen aus sevDesk, mappt sie auf SKR-03-Konten und schreibt
// normalisierte Zeilen nach public.finance_bookings.
//
// Sicherheit:
//  - Aufrufer muss 'finance.view' besitzen (nur Gesellschafter/Admin).
//  - sevDesk-Token liegt ausschließlich serverseitig (SEVDESK_API_TOKEN).
//  - Schreiben via Service-Role (RLS lässt keine Client-Schreibzugriffe zu).
//
// ⚠️ Verifikationspflicht (UWG/GoBD, vgl. Projekt-README): Die Feld- und
//    Kontozuordnung MUSS einmalig gegen das echte sevDesk-Konto geprüft
//    werden, bevor die Zahlen produktiv/öffentlich genutzt werden. Die
//    Strukturprobe in `sevdesk_sync_runs.diagnostics` ist die Grundlage
//    dafür — sie ersetzt die Prüfung nicht.
//
// ----------------------------------------------------------------------------
// WAS DER ERSTE ECHTE LAUF GEZEIGT HAT (25.08.2026, 44 Belege)
//
// Die Strukturprobe im Sync-Protokoll hat drei Fehler aufgedeckt, die sich
// vorher nicht nachweisen liessen — api.sevdesk.de ist von hier aus gesperrt,
// und ohne echte Belege war jede Annahme eine Annahme:
//
// 1. `embed=voucherPos,...` wird von sevDesk STILL IGNORIERT. Die Antwort kam
//    mit 200 und ohne Positionen; im Beleg steht kein einziges Kontofeld.
//    Ergebnis: 44 von 44 Buchungen auf einem Sammelkonto. Die Positionen
//    werden jetzt ueber /VoucherPos einzeln geholt.
// 2. `creditDebit` war genau falsch herum zugeordnet (siehe mapping.ts).
// 3. `description` ist nicht die Beschreibung, sondern die Belegnummer. Der
//    Geschaeftspartner steht in `supplierName`.
//
// ----------------------------------------------------------------------------
// ZEITRAUM: warum clientseitig gefiltert wird (24.08.2026)
//
// Vorher hing der Filter an `?startDate=&endDate=` mit ISO-Datum. Fünf Läufe
// über vier verschiedene Zeiträume meldeten „success / 0 Belege", ohne Fehler
// und ohne HTTP-Auffälligkeit — sevDesk antwortete mit 200 und einer leeren
// Liste. Ob das Format der beiden Parameter stimmt, lässt sich von hier aus
// nicht nachprüfen: api.sevdesk.de ist aus der Arbeitsumgebung nicht
// erreichbar, die Dokumentation ebenso wenig.
//
// Statt zu raten wird der Filter weggelassen und `voucherDate` hier verglichen.
// Das ist unter jeder Annahme über die Parameter korrekt, und `fetched_count`
// im Protokoll trennt endlich die beiden Fälle: „sevDesk hat nichts" von
// „sevDesk hat etwas, der Zeitraum passte nur nicht".
// ============================================================================
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.4";
import { jsonResponse, corsHeaders } from "../_shared/cors.ts";
import {
  belegIdAusPosition,
  belegProbe,
  fallbackKonto,
  findeKontoCode,
  parseVoucher,
  richtungAusKonto,
  sammleKontoKandidaten,
} from "./mapping.ts";

const SEITE = 100;
const MAX_SEITEN = 50; // 5.000 Belege — für einen Betrieb dieser Größe reichlich.

/** Holt eine Sammlung seitenweise ab. Wirft, wenn sevDesk nicht mitspielt. */
async function holeAlle(
  url: string,
  token: string,
  was: string,
): Promise<Record<string, unknown>[]> {
  const raus: Record<string, unknown>[] = [];
  let offset = 0;
  for (let seite = 0; seite < MAX_SEITEN; seite++) {
    const res = await fetch(`${url}?limit=${SEITE}&offset=${offset}`, {
      headers: { Authorization: token, Accept: "application/json" },
    });
    if (!res.ok) {
      throw new Error(`sevDesk ${was} HTTP ${res.status}: ${await res.text()}`);
    }
    const body = await res.json();
    const objects: Record<string, unknown>[] = body.objects ?? [];
    raus.push(...objects);
    if (objects.length < SEITE) break;
    offset += SEITE;
  }
  return raus;
}

/**
 * Holt die Belegpositionen und ordnet sie den Belegen zu.
 *
 * Am Beleg selbst steht kein Konto — nachgewiesen am ersten echten Lauf.
 * Es steht an der Position. Schlaegt der Abruf fehl, ist das kein Grund, den
 * ganzen Sync fallenzulassen: Dann greift wie bisher das Sammelkonto, und im
 * Protokoll steht, warum.
 */
async function holePositionen(
  baseUrl: string,
  token: string,
): Promise<{ nachBeleg: Map<string, Record<string, unknown>[]>; fehler: string | null }> {
  const nachBeleg = new Map<string, Record<string, unknown>[]>();
  try {
    const positionen = await holeAlle(`${baseUrl}/VoucherPos`, token, "VoucherPos");
    for (const p of positionen) {
      const belegId = belegIdAusPosition(p);
      if (!belegId) continue;
      const liste = nachBeleg.get(belegId);
      if (liste) liste.push(p);
      else nachBeleg.set(belegId, [p]);
    }
    return { nachBeleg, fehler: null };
  } catch (e) {
    return { nachBeleg, fehler: String(e) };
  }
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });
  if (req.method !== "POST") return jsonResponse({ error: "Method not allowed" }, 405);

  const authHeader = req.headers.get("Authorization");
  if (!authHeader) return jsonResponse({ error: "Missing Authorization" }, 401);

  const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
  const anonKey = Deno.env.get("SUPABASE_ANON_KEY")!;
  const serviceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
  const sevToken = Deno.env.get("SEVDESK_API_TOKEN");
  const sevBase = Deno.env.get("SEVDESK_BASE_URL") ?? "https://my.sevdesk.de/api/v1";

  if (!sevToken) return jsonResponse({ error: "sevDesk nicht konfiguriert" }, 500);

  // 1) Aufrufer + Berechtigung prüfen (RLS-konform).
  const caller = createClient(supabaseUrl, anonKey, {
    global: { headers: { Authorization: authHeader } },
  });
  const { data: userData, error: userErr } = await caller.auth.getUser();
  if (userErr || !userData.user) return jsonResponse({ error: "Unauthorized" }, 401);

  const { data: canView } = await caller.rpc("auth_has_permission", {
    perm: "finance.view",
  });
  if (canView !== true) return jsonResponse({ error: "Forbidden" }, 403);

  // 2) Zeitraum lesen.
  let from: string, to: string;
  try {
    const body = await req.json();
    from = String(body.from);
    to = String(body.to);
    if (!/^\d{4}-\d{2}-\d{2}$/.test(from) || !/^\d{4}-\d{2}-\d{2}$/.test(to)) {
      throw new Error("invalid");
    }
  } catch {
    return jsonResponse({ error: "from/to (YYYY-MM-DD) erforderlich" }, 400);
  }

  const admin = createClient(supabaseUrl, serviceKey, {
    auth: { autoRefreshToken: false, persistSession: false },
  });

  // 3) Sync-Lauf protokollieren.
  const { data: run } = await admin
    .from("sevdesk_sync_runs")
    .insert({ from_date: from, to_date: to, status: "running", triggered_by: userData.user.id })
    .select("id")
    .single();
  const runId = run?.id as string | undefined;

  try {
    // 4) Kontenstamm laden — er ist zugleich der Prüfer für Kontonummern
    //    aus sevDesk (siehe findeKontoCode).
    const { data: konten, error: kontenErr } = await admin
      .from("finance_accounts")
      .select("code");
    if (kontenErr) throw kontenErr;
    const bekannt = new Set<string>((konten ?? []).map((k) => String(k.code)));

    const belege = await holeAlle(`${sevBase}/Voucher`, sevToken, "Voucher");
    const { nachBeleg, fehler: positionsFehler } = await holePositionen(
      sevBase,
      sevToken,
    );

    let ohneDatum = 0;
    let ausserhalb = 0;
    let ausSevdesk = 0;
    let richtungAusKontoZahl = 0;
    let ohnePositionen = 0;
    const unbekannteKonten = new Map<string, number>();
    let positionsProbe: Record<string, unknown> | null = null;

    const rows: Record<string, unknown>[] = [];
    for (const beleg of belege) {
      const r = parseVoucher(beleg);
      if (r === null) {
        ohneDatum++;
        continue;
      }
      if (r.booking_date < from || r.booking_date > to) {
        ausserhalb++;
        continue;
      }

      const positionen = nachBeleg.get(r.source_ref) ?? [];
      if (positionen.length === 0) ohnePositionen++;
      if (positionsProbe === null && positionen.length > 0) {
        positionsProbe = belegProbe(positionen[0]);
      }

      // Konto zuerst an der Position suchen, dann am Beleg. Die Position ist
      // die Stelle, an der sevDesk kontiert — der Beleg trägt kein Konto.
      const sevKonto = findeKontoCode(positionen, bekannt) ??
        findeKontoCode(beleg, bekannt);
      if (sevKonto) ausSevdesk++;

      // Was sevDesk an Konten nennt, das wir NICHT führen: zählen statt
      // verschweigen. Sonst bliebe unklar, um welche Konten der Stamm zu
      // ergänzen ist, und das Sammelkonto wäre der Dauerzustand.
      if (!sevKonto) {
        for (const code of sammleKontoKandidaten(positionen)) {
          unbekannteKonten.set(code, (unbekannteKonten.get(code) ?? 0) + 1);
        }
      }

      // Steht ein eindeutiges SKR-03-Konto am Beleg, ist es die bessere
      // Quelle für die Richtung als ein Kennbuchstabe: Es kommt aus der
      // Buchhaltung selbst.
      const ausKonto = richtungAusKonto(sevKonto);
      if (ausKonto !== null && ausKonto !== r.direction) richtungAusKontoZahl++;
      const direction = ausKonto ?? r.direction;

      rows.push({
        booking_date: r.booking_date,
        account_code: sevKonto ?? fallbackKonto(direction, r.tax_rate),
        description: r.description,
        amount_net: r.amount_net,
        amount_tax: r.amount_tax,
        tax_rate: r.tax_rate,
        direction,
        source: "sevdesk",
        source_ref: r.source_ref,
        source_account_code: sevKonto,
        sync_run_id: runId,
        created_by: userData.user.id,
      });
    }

    let upserted = 0;
    if (rows.length > 0) {
      const { error: upErr, count } = await admin
        .from("finance_bookings")
        .upsert(rows, { onConflict: "source,source_ref", count: "exact" });
      if (upErr) throw upErr;
      upserted = count ?? rows.length;
    }

    const diagnostics = {
      belege_gesamt: belege.length,
      positionen_belege: nachBeleg.size,
      positionen_fehler: positionsFehler,
      ohne_verwertbares_datum: ohneDatum,
      ausserhalb_zeitraum: ausserhalb,
      im_zeitraum: rows.length,
      konto_aus_sevdesk: ausSevdesk,
      konto_aus_sammelkonto: rows.length - ausSevdesk,
      belege_ohne_positionen: ohnePositionen,
      richtung_vom_konto_korrigiert: richtungAusKontoZahl,
      kontenstamm_groesse: bekannt.size,
      // Konten, die sevDesk nennt und der Stamm nicht kennt — genau die
      // Liste, um die der Stamm zu ergänzen ist.
      unbekannte_konten: Object.fromEntries(unbekannteKonten),
      // Nur je ein Objekt, und davon nur Feldnamen + Buchungswerte.
      strukturprobe: belege.length > 0 ? belegProbe(belege[0]) : null,
      strukturprobe_position: positionsProbe,
    };

    await admin.from("sevdesk_sync_runs").update({
      status: "success",
      inserted_count: upserted,
      fetched_count: belege.length,
      diagnostics,
      finished_at: new Date().toISOString(),
    }).eq("id", runId);

    return jsonResponse({
      ok: true,
      fetched: belege.length,
      processed: rows.length,
      upserted,
      diagnostics,
    });
  } catch (e) {
    await admin.from("sevdesk_sync_runs").update({
      status: "error",
      error: String(e),
      finished_at: new Date().toISOString(),
    }).eq("id", runId);
    return jsonResponse({ error: String(e) }, 502);
  }
});
