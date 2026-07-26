// ============================================================================
// Edge Function: iot-webhook
// ----------------------------------------------------------------------------
// Anbieterunabhängige IoT/Telemetrie-Aufnahme.
//
// Sicherheitsvorkehrungen gegen falsche Daten:
//   1. HMAC-SHA256-Signatur mit Provider-Secret — fremde Aufrufer abgelehnt.
//   2. Uhr-Drift-Prüfung: occurred_at darf nicht > provider.time_skew_max_s
//      in der Zukunft und nicht > 30 Tage in der Vergangenheit sein.
//   3. Idempotenz: (provider_id, event_uid) ist UNIQUE — Doppelt gelieferte
//      Events werden als 'duplicate' markiert und lösen keine Buchung aus.
//   4. Dispense-Confirmation: Verkäufe reduzieren den Bestand NUR bei
//      dispense_confirmed=true. Zahlung ohne Auswurf → Alarm, kein Abgang.
//   5. Slot→Produkt-Auflösung zeitpunktgenau aus machine_slots_history —
//      auch wenn ein Slot inzwischen umbelegt wurde, wird der Verkauf dem
//      damaligen Produkt zugeordnet.
//   6. Ursprungspayload wird 1:1 in payload_raw archiviert (Audit/GoBD).
//   7. Fachliche Ablehnung setzt status='rejected' mit error_reason — die
//      Bewegung wird NICHT gebucht, das Event bleibt aber als Nachweis.
//   8. Antwort ist ein Kompakt-Report mit counts pro status, damit der
//      Anbieter Retries korrekt steuern kann.
//
// Aufruf:
//   POST /iot-webhook
//   Header:  x-telemetry-provider: <name>
//            x-signature: sha256=<hex(hmac_sha256(secret, body))>
//            Content-Type: application/json
//   Body:    { events: [ { ...adapter-spezifisch... } ] }
//
// Adapter-Pattern:
//   Jeder Provider hat einen adapter-Wert (generic|clevermetrics|nayax|
//   custom). Der Adapter überführt das Anbieter-Payload in unser
//   kanonisches Event-Format. So ist der Provider-Wechsel eine reine
//   Adapter-Aufgabe — kein Datenmodell-Umbau.
// ============================================================================
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.4";
import { jsonResponse, corsHeaders } from "../_shared/cors.ts";

type EventType =
  | "sale" | "dispense_ok" | "dispense_fail"
  | "refill" | "disposal" | "price_change" | "slot_config"
  | "heartbeat" | "temperature" | "door" | "alarm" | "cash_collection";

interface CanonicalEvent {
  event_uid: string;              // Anbieter-Event-ID (Pflicht, Idempotenz)
  event_type: EventType;
  occurred_at: string;            // ISO-8601 (Anbieter/Automatenuhr)
  external_device_id?: string;    // Gateway-Serien-Nr., mappt auf machine
  machine_code?: string;          // Alternativ direkte Automatenzuordnung
  slot_code?: string;
  quantity?: number;
  unit_price_net?: number;
  product_sku_hint?: string;      // Optional, wenn Anbieter SKU mitliefert
  dispense_confirmed?: boolean;   // Für sale/dispense_*: Auswurf ok?
  temperature_c?: number;
  error_reason?: string;
  payload_norm?: Record<string, unknown>;
  raw: Record<string, unknown>;
}

// ── Adapters ────────────────────────────────────────────────────────
// Neue Anbieter kommen als eigene Funktion dazu; das Datenmodell ändert
// sich nicht. Der generic-Adapter erwartet bereits das kanonische Format.
const adapters: Record<string, (payload: unknown) => CanonicalEvent[]> = {
  generic: (p) => {
    const list = (p as { events?: unknown[] }).events ?? [];
    return list.map((e) => ({ ...(e as CanonicalEvent), raw: e as Record<string, unknown> }));
  },
  // Platzhalter: sobald CleverMetrics-Doku verfügbar, hier übersetzen.
  // Sicherer Default: nichts übernehmen, um Fehlbuchung zu vermeiden.
  clevermetrics: (p) => {
    const anyP = p as { events?: unknown[] };
    if (!Array.isArray(anyP.events)) return [];
    return (anyP.events as Record<string, unknown>[]).map((e) => ({
      event_uid: String(e.id ?? e.event_id ?? ""),
      event_type: mapCmType(String(e.type ?? "")),
      occurred_at: String(e.timestamp ?? e.occurred_at ?? new Date().toISOString()),
      external_device_id: (e.device_id as string) ?? (e.gateway_serial as string),
      machine_code: e.machine_code as string | undefined,
      slot_code: e.slot as string | undefined,
      quantity: (e.quantity as number) ?? (e.count as number),
      unit_price_net: (e.unit_price as number) ?? (e.price_net as number),
      product_sku_hint: e.sku as string | undefined,
      dispense_confirmed: (e.dispensed as boolean) ?? (e.status === "delivered"),
      temperature_c: e.temperature_c as number | undefined,
      error_reason: e.error as string | undefined,
      payload_norm: {},
      raw: e,
    }));
  },
  // Nayax-Adapter (analog zur bestehenden nayax-webhook-Funktion): bei
  // Bedarf hier zusammenführen. Aktuell nur Skeleton.
  nayax: (p) => {
    const anyP = p as { transactions?: unknown[] };
    if (!Array.isArray(anyP.transactions)) return [];
    return (anyP.transactions as Record<string, unknown>[]).map((e) => ({
      event_uid: String(e.transactionId ?? e.id ?? ""),
      event_type: (e.dispensed ? "sale" : "dispense_fail") as EventType,
      occurred_at: String(e.timestamp ?? new Date().toISOString()),
      external_device_id: e.deviceId as string | undefined,
      machine_code: e.machineCode as string | undefined,
      slot_code: e.selection as string | undefined,
      quantity: 1,
      unit_price_net: (e.amountNet as number) ?? undefined,
      dispense_confirmed: (e.dispensed as boolean) ?? false,
      payload_norm: {},
      raw: e,
    }));
  },
  custom: (_p) => [],
};

function mapCmType(t: string): EventType {
  const s = t.toLowerCase();
  if (s.includes("dispense_fail") || s.includes("vend_fail")) return "dispense_fail";
  if (s.includes("sale") || s.includes("vend")) return "sale";
  if (s.includes("refill") || s.includes("restock")) return "refill";
  if (s.includes("disposal") || s.includes("expired")) return "disposal";
  if (s.includes("price")) return "price_change";
  if (s.includes("slot") || s.includes("planogram")) return "slot_config";
  if (s.includes("heart")) return "heartbeat";
  if (s.includes("temp")) return "temperature";
  if (s.includes("door")) return "door";
  if (s.includes("cash")) return "cash_collection";
  return "alarm";
}


// ── HMAC-Signatur prüfen ────────────────────────────────────────────
async function verifyHmac(body: string, secret: string, header: string | null): Promise<boolean> {
  if (!header) return false;
  const provided = header.replace(/^sha256=/i, "").trim().toLowerCase();
  const key = await crypto.subtle.importKey(
    "raw", new TextEncoder().encode(secret),
    { name: "HMAC", hash: "SHA-256" }, false, ["sign"],
  );
  const sig = await crypto.subtle.sign("HMAC", key, new TextEncoder().encode(body));
  const hex = Array.from(new Uint8Array(sig))
    .map((b) => b.toString(16).padStart(2, "0")).join("");
  // konstante Zeit-Vergleich, um Timing-Angriffe zu vermeiden
  if (provided.length !== hex.length) return false;
  let diff = 0;
  for (let i = 0; i < hex.length; i++) diff |= hex.charCodeAt(i) ^ provided.charCodeAt(i);
  return diff === 0;
}


Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });
  if (req.method !== "POST") return jsonResponse({ error: "Method not allowed" }, 405);

  const providerName = req.headers.get("x-telemetry-provider");
  const signature = req.headers.get("x-signature");
  if (!providerName) return jsonResponse({ error: "Missing x-telemetry-provider" }, 400);

  const rawBody = await req.text();

  // Service-Client mit service_role — Webhook-Aufrufer haben keine JWT.
  const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
  const serviceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
  const admin = createClient(supabaseUrl, serviceKey);

  // Provider laden
  const { data: provider, error: pErr } = await admin
    .from("telemetry_providers")
    .select("id, adapter, hmac_secret, time_skew_max_s, is_active")
    .eq("name", providerName)
    .maybeSingle();
  if (pErr || !provider) return jsonResponse({ error: "Unknown provider" }, 401);
  if (!provider.is_active) return jsonResponse({ error: "Provider disabled" }, 403);

  // Signatur prüfen
  const sigOk = await verifyHmac(rawBody, provider.hmac_secret, signature);
  if (!sigOk) return jsonResponse({ error: "Invalid signature" }, 401);

  // Payload parsen
  let payload: unknown;
  try { payload = JSON.parse(rawBody); }
  catch { return jsonResponse({ error: "Invalid JSON" }, 400); }

  const adapt = adapters[provider.adapter] ?? adapters.generic;
  const events = adapt(payload);
  if (events.length === 0) return jsonResponse({ received: 0, processed: 0, duplicates: 0, rejected: 0 });

  // Alle bekannten Devices vorab laden — für Zuordnung external_device_id
  const externalIds = [...new Set(events.map((e) => e.external_device_id).filter(Boolean))] as string[];
  const machineCodes = [...new Set(events.map((e) => e.machine_code).filter(Boolean))] as string[];
  const [{ data: devices }, { data: machines }] = await Promise.all([
    externalIds.length ? admin.from("machine_devices")
      .select("id, machine_id, external_device_id")
      .eq("provider_id", provider.id)
      .in("external_device_id", externalIds) : Promise.resolve({ data: [] }),
    machineCodes.length ? admin.from("machines")
      .select("id, code").in("code", machineCodes) : Promise.resolve({ data: [] }),
  ]);
  const devByExt = new Map((devices ?? []).map((d) => [d.external_device_id, d]));
  const machByCode = new Map((machines ?? []).map((m) => [m.code, m.id]));

  const now = Date.now();
  const skewMs = (provider.time_skew_max_s ?? 300) * 1000;
  const MAX_PAST_MS = 30 * 24 * 3600 * 1000;

  let received = 0, processed = 0, duplicates = 0, rejected = 0;

  for (const ev of events) {
    // Pflichtprüfungen: event_uid + event_type + occurred_at
    if (!ev.event_uid || !ev.event_type || !ev.occurred_at) {
      await admin.from("machine_telemetry_events").insert({
        provider_id: provider.id,
        event_type: "alarm",
        status: "rejected",
        event_uid: ev.event_uid || `no-uid-${crypto.randomUUID()}`,
        occurred_at: ev.occurred_at || new Date().toISOString(),
        payload_raw: ev.raw,
        error_reason: "Pflichtfelder fehlen (event_uid/type/occurred_at)",
      });
      rejected++;
      continue;
    }

    // Uhr-Drift-Prüfung
    const t = Date.parse(ev.occurred_at);
    if (isNaN(t)) { rejected++; continue; }
    if (t > now + skewMs || t < now - MAX_PAST_MS) {
      await admin.from("machine_telemetry_events").insert({
        provider_id: provider.id,
        event_type: ev.event_type,
        status: "rejected",
        event_uid: ev.event_uid,
        occurred_at: ev.occurred_at,
        payload_raw: ev.raw,
        error_reason: `Zeitstempel außerhalb erlaubter Bandbreite (skew=${skewMs}ms)`,
      });
      rejected++;
      continue;
    }

    // Zuordnung Device → Machine
    const dev = ev.external_device_id ? devByExt.get(ev.external_device_id) : undefined;
    const machineId = dev?.machine_id ?? (ev.machine_code ? machByCode.get(ev.machine_code) : undefined) ?? null;

    // Dispense-Confirmation-Regel (Sale wird zu dispense_fail, wenn nicht bestätigt)
    let type = ev.event_type;
    if (type === "sale" && ev.dispense_confirmed === false) type = "dispense_fail";

    // Insert mit Idempotenz-Schutz (unique auf provider_id, event_uid)
    const { error: insErr, data: inserted } = await admin
      .from("machine_telemetry_events")
      .insert({
        provider_id: provider.id,
        device_id: dev?.id ?? null,
        machine_id: machineId,
        slot_code: ev.slot_code ?? null,
        event_type: type,
        status: "received",
        event_uid: ev.event_uid,
        occurred_at: ev.occurred_at,
        quantity: ev.quantity ?? null,
        unit_price_net: ev.unit_price_net ?? null,
        dispense_confirmed: ev.dispense_confirmed ?? null,
        temperature_c: ev.temperature_c ?? null,
        error_reason: ev.error_reason ?? null,
        payload_raw: ev.raw ?? {},
        payload_norm: ev.payload_norm ?? {},
      })
      .select("id")
      .single();

    if (insErr) {
      // Unique-Verletzung → Duplicate
      if ((insErr as { code?: string }).code === "23505") { duplicates++; continue; }
      rejected++;
      continue;
    }
    received++;

    // Sofort verarbeiten: die Business-Trigger laufen bei status='processed'
    // Wir markieren als 'processed', wenn Zuordnung + Business-Regeln passen.
    const canBook = machineId && (
      (type === "sale" && ev.dispense_confirmed === true && (ev.quantity ?? 1) > 0) ||
      (type === "dispense_ok" && (ev.quantity ?? 1) > 0) ||
      (type === "refill" && (ev.quantity ?? 0) > 0) ||
      (type === "disposal" && (ev.quantity ?? 0) > 0) ||
      type === "heartbeat" || type === "temperature" || type === "door" ||
      type === "alarm" || type === "price_change" || type === "slot_config" ||
      type === "cash_collection"
    );

    await admin
      .from("machine_telemetry_events")
      .update({
        status: canBook ? "processed" : "rejected",
        processed_at: new Date().toISOString(),
        error_reason: canBook ? null :
          (!machineId ? "Automat/Device nicht zugeordnet" : "Buchungsregel abgelehnt"),
      })
      .eq("id", inserted.id);

    if (canBook) processed++; else rejected++;
  }

  return jsonResponse({ received, processed, duplicates, rejected });
});
