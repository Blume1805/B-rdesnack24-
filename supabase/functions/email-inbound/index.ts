// ============================================================================
// Edge Function: email-inbound
// ----------------------------------------------------------------------------
// Nimmt eingehende Post vom Anbieter entgegen und schreibt sie als
// `direction = 'in'` ins Protokoll. Damit ist die Zusage „JEDE versendete
// und empfangene E-Mail" auch auf der Empfangsseite eingelöst.
//
// NOCH NICHT SCHARF. Eingehende Post setzt voraus, dass `boerdesnack24.de`
// bei Resend verifiziert ist und die MX-Einträge dorthin zeigen. Solange
// das nicht eingerichtet ist, ruft niemand diese Function auf — sie
// schadet aber auch nicht, weil sie ohne Secret gar nicht erst arbeitet.
//
// KEIN JWT, DESHALB SIGNATUR. Ein Webhook kann sich nicht anmelden; er
// weist sich über eine HMAC-Signatur aus. Diese Function muss deshalb mit
// `verify_jwt = false` ausgerollt werden — und trägt damit ihre
// Zugangsprüfung selbst. Genau das ist die Bauart, die bei
// `install-signature` schiefgegangen ist (siehe deren Grabstein), deshalb
// hier die drei Regeln, die dort verletzt waren:
//
//   1. KEIN Rückfallwert für das Secret. Fehlt INBOUND_WEBHOOK_SECRET,
//      antwortet die Function mit 500 und tut nichts. Ein Geheimnis mit
//      Rückfallwert ist kein Geheimnis.
//   2. Die Prüfung ist eine echte HMAC-Signatur über den Rumpf, kein
//      Vergleich eines mitgeschickten Kennworts — mitlesen genügt sonst.
//   3. Der Zeitstempel wird mitgeprüft (Fenster in webhook.ts), damit eine
//      einmal mitgeschnittene Anfrage sich nicht beliebig oft
//      wiedereinspielen lässt.
//
// Geschrieben wird mit dem Service-Role-Schlüssel — der Absender einer
// eingehenden Mail ist niemand, der bei uns angemeldet ist. Geschrieben
// wird ausschliesslich in `email_log`, nichts anderes.
// ============================================================================
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.4";
import { corsHeaders, jsonResponse } from "../_shared/cors.ts";
import { verifyWebhookSignature, WebhookError } from "../_shared/email/webhook.ts";
import { eingangLesen } from "./parse.ts";

const TAG = "email-inbound";

/// Der Anbieter verschickt die Signatur je nach Alter der Anbindung unter
/// `webhook-*` (Standard Webhooks) oder `svix-*`. Inhaltlich ist es
/// dasselbe Verfahren, nur die Namen unterscheiden sich — also übersetzen
/// wir sie, statt die geprüfte Krypto-Funktion anzufassen.
function kopfzeilenVereinheitlichen(headers: Headers): Headers {
  const vereinheitlicht = new Headers(headers);
  for (const name of ["id", "timestamp", "signature"]) {
    if (!vereinheitlicht.get(`webhook-${name}`)) {
      const svix = headers.get(`svix-${name}`);
      if (svix) vereinheitlicht.set(`webhook-${name}`, svix);
    }
  }
  return vereinheitlicht;
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });
  if (req.method !== "POST") return jsonResponse({ error: "Method not allowed" }, 405);

  const secret = Deno.env.get("INBOUND_WEBHOOK_SECRET");
  if (!secret) {
    // Bewusst kein Rückfallwert. Lieber gar nicht arbeiten als mit einem
    // Geheimnis, das im Quelltext steht.
    console.error(`[${TAG}] INBOUND_WEBHOOK_SECRET fehlt`);
    return jsonResponse({ error: "Posteingang ist nicht konfiguriert" }, 500);
  }

  // Der Rumpf muss als Text gelesen werden, bevor er ausgewertet wird —
  // signiert wurde der Text, nicht das geparste Objekt.
  const rumpf = await req.text();

  try {
    await verifyWebhookSignature({
      payload: rumpf,
      headers: kopfzeilenVereinheitlichen(req.headers),
      secret,
    });
  } catch (e) {
    const grund = e instanceof WebhookError ? e.message : "unbekannt";
    console.warn(`[${TAG}] Signatur abgelehnt: ${grund}`);
    return jsonResponse({ error: "Signatur ungültig" }, 401);
  }

  let nutzlast: unknown;
  try {
    nutzlast = JSON.parse(rumpf);
  } catch {
    console.error(`[${TAG}] Rumpf ist kein JSON`);
    return jsonResponse({ error: "Invalid JSON" }, 400);
  }

  const eingang = eingangLesen(nutzlast, req.headers.get("webhook-id") ?? req.headers.get("svix-id"));

  const url = Deno.env.get("SUPABASE_URL")!;
  const key = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
  const admin = createClient(url, key);

  const { error } = await admin.from("email_log").insert({
    direction: "in",
    tag: TAG,
    from_address: eingang.from_address,
    to_addresses: eingang.to_addresses,
    subject: eingang.subject,
    html: eingang.html,
    text_body: eingang.text_body,
    status: "received",
    provider_id: eingang.provider_id,
    occurred_at: eingang.occurred_at,
    // Die vollständige Nutzlast, damit eine danebengegangene Zuordnung
    // später zu retten ist (0091).
    raw: nutzlast,
  });

  if (error) {
    // 23505 = eindeutiger Index verletzt. Der Anbieter hat denselben
    // Eingang erneut zugestellt (übliches Verhalten nach Zeitüberschreitung).
    // Das ist kein Fehler: mit 200 antworten, damit er aufhört zu wiederholen.
    if (error.code === "23505") {
      console.log(`[${TAG}] bereits protokolliert: ${eingang.provider_id}`);
      return jsonResponse({ ok: true, doppelt: true });
    }
    console.error(`[${TAG}] Schreiben fehlgeschlagen:`, error.message);
    // 500, damit der Anbieter es erneut versucht — eine verlorene
    // eingehende Mail wäre schlimmer als ein doppelter Zustellversuch.
    return jsonResponse({ error: "Speichern fehlgeschlagen" }, 500);
  }

  return jsonResponse({ ok: true });
});
