// ============================================================================
// Edge Function: finance-balance-sync
// ----------------------------------------------------------------------------
// Holt Bilanz-Eckwerte aus sevDesk und schreibt einen Bilanz-Snapshot
// (public.finance_balance_snapshots, source='sevdesk') für den Stichtag.
// Speist Liquidität 1/2/3, EK-Quote und ROI im Finanzdashboard.
//
// FALLBACK-/MOCK-MODUS (Stand jetzt): Ohne SEVDESK_API_TOKEN antwortet die
// Funktion mit { configured:false } — das Dashboard zeigt dann den Weg über
// die manuelle Erfassung bzw. den BWA/CSV-Import. Sobald das Secret gesetzt
// ist, läuft der echte Abruf ohne weitere Code-Änderung.
//
// Sicherheit:
//  - Aufrufer muss 'finance.view' besitzen (nur Gesellschafter/Admin).
//  - sevDesk-Token liegt ausschließlich serverseitig (SEVDESK_API_TOKEN).
//  - Schreiben via Service-Role-RPC upsert_finance_balance_synced.
//
// ⚠️ Verifikationspflicht (UWG/GoBD, vgl. sevdesk-sync): Die Zuordnung der
//    sevDesk-Felder auf Bilanzpositionen MUSS einmalig gegen das echte
//    sevDesk-Konto geprüft werden, bevor die Zahlen produktiv/öffentlich
//    genutzt werden. Vorräte/Anlagevermögen/Verbindlichkeiten/EK werden aus
//    sevDesk nur teilweise geliefert; bereits erfasste (manuelle) Werte des
//    Stichtags bleiben erhalten (Merge), sofern der Sync sie nicht füllt.
// ============================================================================
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.4";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};
function jsonResponse(body: unknown, status = 200): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders, "Content-Type": "application/json" },
  });
}

const num = (v: unknown): number => {
  const n = typeof v === "string" ? parseFloat(v) : (v as number);
  return Number.isFinite(n) ? n : 0;
};

// Summe der Kontostände aller CheckAccounts (Bank/Kasse) → flüssige Mittel.
async function fetchCash(base: string, token: string): Promise<number> {
  const res = await fetch(`${base}/CheckAccount?limit=100`, {
    headers: { Authorization: token, Accept: "application/json" },
  });
  if (!res.ok) throw new Error(`CheckAccount HTTP ${res.status}`);
  const body = await res.json();
  const accounts: Record<string, unknown>[] = body.objects ?? [];
  // sevDesk liefert je Konto zuletzt bekannten Saldo im Feld `balance`.
  return accounts.reduce((sum, a) => sum + num(a.balance), 0);
}

// Offene (unbezahlte) Ausgangsrechnungen → kurzfristige Forderungen.
async function fetchReceivables(base: string, token: string): Promise<number> {
  // status 100 = Entwurf, 200 = offen, 1000 = bezahlt (sevDesk-Konvention).
  const res = await fetch(
    `${base}/Invoice?status=200&limit=250`,
    { headers: { Authorization: token, Accept: "application/json" } },
  );
  if (!res.ok) throw new Error(`Invoice HTTP ${res.status}`);
  const body = await res.json();
  const invoices: Record<string, unknown>[] = body.objects ?? [];
  return invoices.reduce((sum, i) => sum + num(i.sumGross), 0);
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }
  if (req.method !== "POST") {
    return jsonResponse({ error: "Method not allowed" }, 405);
  }

  const authHeader = req.headers.get("Authorization");
  if (!authHeader) return jsonResponse({ error: "Missing Authorization" }, 401);

  const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
  const anonKey = Deno.env.get("SUPABASE_ANON_KEY")!;
  const serviceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
  const sevToken = Deno.env.get("SEVDESK_API_TOKEN");
  const sevBase = Deno.env.get("SEVDESK_BASE_URL") ??
    "https://my.sevdesk.de/api/v1";

  // 1) Aufrufer + Berechtigung prüfen (RLS-konform).
  const caller = createClient(supabaseUrl, anonKey, {
    global: { headers: { Authorization: authHeader } },
  });
  const { data: userData, error: userErr } = await caller.auth.getUser();
  if (userErr || !userData.user) {
    return jsonResponse({ error: "Unauthorized" }, 401);
  }
  const { data: canView } = await caller.rpc("auth_has_permission", {
    perm: "finance.view",
  });
  if (canView !== true) return jsonResponse({ error: "Forbidden" }, 403);

  // 2) Fallback-Modus: ohne Token kein Abruf — sauber melden.
  if (!sevToken) {
    return jsonResponse({
      ok: true,
      configured: false,
      message:
        "sevDesk ist noch nicht verbunden. Bitte Bilanzwerte manuell erfassen " +
        "oder per BWA/CSV importieren. Sobald der API-Token hinterlegt ist, " +
        "übernimmt der Sync die Werte automatisch.",
    });
  }

  // 3) Stichtag lesen (Default: heute).
  let asOf = new Date().toISOString().slice(0, 10);
  try {
    const body = await req.json();
    if (typeof body.as_of === "string" && /^\d{4}-\d{2}-\d{2}$/.test(body.as_of)) {
      asOf = body.as_of;
    }
  } catch {
    // Body optional — Default-Stichtag bleibt.
  }

  const admin = createClient(supabaseUrl, serviceKey, {
    auth: { autoRefreshToken: false, persistSession: false },
  });

  try {
    // 4) Bereits erfasste Werte des Stichtags lesen (Merge, nichts verlieren).
    const { data: existing } = await admin
      .from("finance_balance_snapshots")
      .select("*")
      .eq("as_of", asOf)
      .maybeSingle();

    // 5) sevDesk-Eckwerte holen (verifikationspflichtig!).
    const cash = await fetchCash(sevBase, sevToken);
    const receivables = await fetchReceivables(sevBase, sevToken);

    // 6) Nicht aus sevDesk gelieferte Positionen aus dem Bestand übernehmen.
    const e = (existing ?? {}) as Record<string, unknown>;
    const { data: row, error: rpcErr } = await admin.rpc(
      "upsert_finance_balance_synced",
      {
        p_as_of: asOf,
        p_cash_and_bank: cash,
        p_receivables: receivables,
        p_inventory_value: num(e.inventory_value),
        p_other_current_assets: num(e.other_current_assets),
        p_fixed_assets: num(e.fixed_assets),
        p_current_liabilities: num(e.current_liabilities),
        p_long_term_liabilities: num(e.long_term_liabilities),
        p_equity: num(e.equity),
      },
    );
    if (rpcErr) throw new Error(rpcErr.message);

    return jsonResponse({
      ok: true,
      configured: true,
      as_of: asOf,
      cash_and_bank: cash,
      receivables,
      note:
        "Vorräte, Anlagevermögen, Verbindlichkeiten und Eigenkapital wurden " +
        "aus der bestehenden Erfassung übernommen — bei Bedarf manuell ergänzen.",
      row,
    });
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    return jsonResponse({ ok: false, configured: true, error: msg }, 502);
  }
});
