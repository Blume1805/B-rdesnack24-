// ============================================================================
// Edge Function: nayax-webhook
// ----------------------------------------------------------------------------
// Empfängt Verkaufsereignisse der Nayax-Telemetrie und schreibt sie in
// nayax_sales (dedupliziert) sowie als Inventur-Bewegung (type=sale, negativ).
// Der DB-Trigger app.apply_inventory_movement aktualisiert den Bestand; Clients
// erhalten die Aktualisierung in Echtzeit (Realtime auf inventory).
//
// Auth: HMAC-SHA256-Signatur (Header x-nayax-signature) gegen NAYAX_WEBHOOK_SECRET.
// Schreiben mit Service-Role (Webhook ist kein angemeldeter Nutzer).
// ============================================================================
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.4";
import { corsHeaders, jsonResponse } from "../_shared/cors.ts";
import { normalizeSale, verifySignature } from "./parse.ts";

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });
  if (req.method !== "POST") return jsonResponse({ error: "Method not allowed" }, 405);

  const secret = Deno.env.get("NAYAX_WEBHOOK_SECRET");
  const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
  const serviceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
  if (!secret) return jsonResponse({ error: "Webhook nicht konfiguriert" }, 500);

  const raw = await req.text();
  const signature = req.headers.get("x-nayax-signature") ?? "";
  if (!(await verifySignature(secret, raw, signature))) {
    return jsonResponse({ error: "Invalid signature" }, 401);
  }

  let payload: Record<string, unknown>;
  try {
    payload = JSON.parse(raw);
  } catch {
    return jsonResponse({ error: "Invalid JSON" }, 400);
  }

  const sales = normalizeSale(payload);
  if (sales.length === 0) return jsonResponse({ error: "Kein gültiges Ereignis" }, 400);

  const admin = createClient(supabaseUrl, serviceKey, {
    auth: { autoRefreshToken: false, persistSession: false },
  });

  let processed = 0;
  for (const s of sales) {
    // Terminal -> Automat
    const { data: machine } = await admin
      .from("machines")
      .select("id")
      .eq("nayax_terminal_id", s.terminal_id)
      .maybeSingle();

    // Produkt -> Stammprodukt (per SKU); optional.
    let productId: string | null = null;
    if (s.product_ref) {
      const { data: product } = await admin
        .from("products")
        .select("id")
        .eq("sku", s.product_ref)
        .maybeSingle();
      productId = product?.id ?? null;
    }

    // Rohverkauf protokollieren (dedupliziert über source_ref).
    await admin.from("nayax_sales").upsert({
      terminal_id: s.terminal_id,
      machine_id: machine?.id ?? null,
      product_id: productId,
      product_ref: s.product_ref,
      quantity: s.quantity,
      amount_gross: s.amount_gross,
      sold_at: s.sold_at,
      source_ref: s.source_ref,
      raw: payload,
    }, { onConflict: "source_ref", ignoreDuplicates: true });

    // Bestand reduzieren (nur wenn Automat + Produkt bekannt).
    if (machine?.id && productId) {
      await admin.from("inventory_movements").upsert({
        machine_id: machine.id,
        product_id: productId,
        type: "sale",
        quantity_delta: -Math.abs(s.quantity),
        reason: "Nayax-Verkauf",
        source: "nayax",
        source_ref: s.source_ref,
        occurred_at: s.sold_at,
      }, { onConflict: "source,source_ref", ignoreDuplicates: true });
    }
    processed++;
  }

  return jsonResponse({ ok: true, processed });
});
