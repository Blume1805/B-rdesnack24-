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
import { fallbackKonto, findeKontoCode, parseVoucher, belegProbe } from "./mapping.ts";

const SEITE = 100;
const MAX_SEITEN = 50; // 5.000 Belege — für einen Betrieb dieser Größe reichlich.

/** Holt alle Belege. `embed` wird versucht und bei Ablehnung fallengelassen. */
async function fetchVouchers(
  baseUrl: string,
  token: string,
): Promise<{ belege: Record<string, unknown>[]; embedGenutzt: boolean }> {
  const embed = "embed=voucherPos,voucherPos.accountingType,accountingType";
  let embedGenutzt = true;
  const belege: Record<string, unknown>[] = [];
  let offset = 0;

  for (let seite = 0; seite < MAX_SEITEN; seite++) {
    const basis = `${baseUrl}/Voucher?limit=${SEITE}&offset=${offset}`;
    let res = await fetch(embedGenutzt ? `${basis}&${embed}` : basis, {
      headers: { Authorization: token, Accept: "application/json" },
    });
    // Ein abgelehntes `embed` darf den Sync nicht kosten — dann eben ohne.
    if (!res.ok && embedGenutzt) {
      embedGenutzt = false;
      res = await fetch(basis, {
        headers: { Authorization: token, Accept: "application/json" },
      });
    }
    if (!res.ok) {
      throw new Error(`sevDesk HTTP ${res.status}: ${await res.text()}`);
    }
    const body = await res.json();
    const objects: Record<string, unknown>[] = body.objects ?? [];
    belege.push(...objects);
    if (objects.length < SEITE) break;
    offset += SEITE;
  }
  return { belege, embedGenutzt };
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

    const { belege, embedGenutzt } = await fetchVouchers(sevBase, sevToken);

    let ohneDatum = 0;
    let ausserhalb = 0;
    let ausSevdesk = 0;
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
      const sevKonto = findeKontoCode(beleg, bekannt);
      if (sevKonto) ausSevdesk++;
      rows.push({
        booking_date: r.booking_date,
        account_code: sevKonto ?? fallbackKonto(r.direction, r.tax_rate),
        description: r.description,
        amount_net: r.amount_net,
        amount_tax: r.amount_tax,
        tax_rate: r.tax_rate,
        direction: r.direction,
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
      embed_genutzt: embedGenutzt,
      belege_gesamt: belege.length,
      ohne_verwertbares_datum: ohneDatum,
      ausserhalb_zeitraum: ausserhalb,
      im_zeitraum: rows.length,
      konto_aus_sevdesk: ausSevdesk,
      konto_aus_sammelkonto: rows.length - ausSevdesk,
      kontenstamm_groesse: bekannt.size,
      // Nur der erste Beleg, und davon nur Feldnamen + Buchungswerte.
      strukturprobe: belege.length > 0 ? belegProbe(belege[0]) : null,
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
