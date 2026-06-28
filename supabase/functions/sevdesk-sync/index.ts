// ============================================================================
// Edge Function: sevdesk-sync
// ----------------------------------------------------------------------------
// Holt Belege/Buchungen aus sevDesk für einen Zeitraum, mappt sie auf
// SKR-03-Konten und schreibt normalisierte Zeilen nach public.finance_bookings.
//
// Sicherheit:
//  - Aufrufer muss 'finance.view' besitzen (nur Gesellschafter/Admin).
//  - sevDesk-Token liegt ausschließlich serverseitig (SEVDESK_API_TOKEN).
//  - Schreiben via Service-Role (RLS lässt keine Client-Schreibzugriffe zu).
//
// ⚠️ Verifikationspflicht (UWG/GoBD, vgl. Projekt-README): Die Feld- und
//    Kontozuordnung unten MUSS einmalig gegen das echte sevDesk-Konto geprüft
//    werden, bevor die Zahlen produktiv/öffentlich genutzt werden.
// ============================================================================
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.4";
import { jsonResponse, corsHeaders } from "../_shared/cors.ts";
import { mapToAccount, parseVoucher } from "./mapping.ts";

async function fetchVouchers(
  baseUrl: string,
  token: string,
  from: string,
  to: string,
): Promise<Record<string, unknown>[]> {
  const out: Record<string, unknown>[] = [];
  const limit = 100;
  let offset = 0;
  // sevDesk-Filter: startDate/endDate als ISO-Datum. Paginierung via limit/offset.
  for (let page = 0; page < 100; page++) {
    const url = `${baseUrl}/Voucher?startDate=${from}&endDate=${to}` +
      `&limit=${limit}&offset=${offset}`;
    const res = await fetch(url, {
      headers: { Authorization: token, Accept: "application/json" },
    });
    if (!res.ok) {
      throw new Error(`sevDesk HTTP ${res.status}: ${await res.text()}`);
    }
    const body = await res.json();
    const objects: Record<string, unknown>[] = body.objects ?? [];
    out.push(...objects);
    if (objects.length < limit) break;
    offset += limit;
  }
  return out;
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
    const vouchers = await fetchVouchers(sevBase, sevToken, from, to);
    const rows = vouchers
      .map(parseVoucher)
      .filter((r): r is NonNullable<typeof r> => r !== null)
      .map((r) => ({
        booking_date: r.booking_date,
        account_code: mapToAccount(r.direction, r.tax_rate),
        description: r.description,
        amount_net: r.amount_net,
        amount_tax: r.amount_tax,
        tax_rate: r.tax_rate,
        direction: r.direction,
        source: "sevdesk",
        source_ref: r.source_ref,
        sync_run_id: runId,
        created_by: userData.user.id,
      }));

    let upserted = 0;
    if (rows.length > 0) {
      const { error: upErr, count } = await admin
        .from("finance_bookings")
        .upsert(rows, { onConflict: "source,source_ref", count: "exact" });
      if (upErr) throw upErr;
      upserted = count ?? rows.length;
    }

    await admin.from("sevdesk_sync_runs").update({
      status: "success",
      inserted_count: upserted,
      finished_at: new Date().toISOString(),
    }).eq("id", runId);

    return jsonResponse({ ok: true, processed: rows.length, upserted });
  } catch (e) {
    await admin.from("sevdesk_sync_runs").update({
      status: "error",
      error: String(e),
      finished_at: new Date().toISOString(),
    }).eq("id", runId);
    return jsonResponse({ error: String(e) }, 502);
  }
});
