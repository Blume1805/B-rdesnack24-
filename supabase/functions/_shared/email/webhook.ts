// Signaturprüfung für den Supabase Send-Email-Hook (Standard Webhooks).
//
// Supabase ruft den Hook ohne JWT auf und weist sich stattdessen über eine
// HMAC-Signatur aus. Wer diese Prüfung wegließe, hätte einen offenen
// Endpunkt, über den sich beliebige Mails mit unserem Absender verschicken
// ließen — also Phishing im Namen der Marke.
//
// Bewusst ohne Fremdbibliothek: Das offizielle Beispiel zieht
// `standardwebhooks` von esm.sh nach. Die Prüfung sind dreißig Zeilen
// Web Crypto, und eine externe Abhängigkeit ausgerechnet im
// sicherheitskritischen Pfad wäre ein schlechter Tausch — zumal sie sich
// so auch testen lässt.
//
// Spezifikation: https://www.standardwebhooks.com
//   signierter Inhalt = `{webhook-id}.{webhook-timestamp}.{payload}`
//   Signatur          = base64(HMAC-SHA256(secret, signierter Inhalt))
//   Header            = "v1,<sig>" (mehrere durch Leerzeichen getrennt)

export class WebhookError extends Error {}

/// Zeitfenster, in dem eine Signatur gilt. Schützt gegen das erneute
/// Einspielen einer einmal mitgeschnittenen Anfrage.
const DEFAULT_TOLERANCE_SECONDS = 300;

function base64ToBytes(b64: string): Uint8Array {
  const bin = atob(b64);
  const out = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) out[i] = bin.charCodeAt(i);
  return out;
}

function bytesToBase64(bytes: ArrayBuffer): string {
  const view = new Uint8Array(bytes);
  let bin = "";
  for (let i = 0; i < view.length; i++) bin += String.fromCharCode(view[i]);
  return btoa(bin);
}

/// Vergleich ohne frühen Abbruch, damit die Laufzeit nichts über die
/// Anzahl übereinstimmender Zeichen verrät.
function timingSafeEqual(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return diff === 0;
}

/// Nimmt das Secret in der Form, in der Supabase es ausgibt
/// (`v1,whsec_<base64>`), und liefert die rohen Schlüsselbytes.
export function parseHookSecret(secret: string): Uint8Array {
  const trimmed = secret.trim();
  const marker = "whsec_";
  const at = trimmed.indexOf(marker);
  const b64 = at >= 0 ? trimmed.slice(at + marker.length) : trimmed;
  if (!b64) throw new WebhookError("Hook-Secret ist leer");
  try {
    return base64ToBytes(b64);
  } catch {
    throw new WebhookError("Hook-Secret ist kein gültiges Base64");
  }
}

/// Prüft die Signatur der Anfrage. Wirft [WebhookError], wenn etwas nicht
/// stimmt — der Aufrufer antwortet darauf mit 401.
export async function verifyWebhookSignature(opts: {
  payload: string;
  headers: Headers;
  secret: string;
  /// Nur für Tests: fester „Jetzt"-Zeitpunkt in Sekunden seit Epoche.
  nowSeconds?: number;
  toleranceSeconds?: number;
}): Promise<void> {
  const id = opts.headers.get("webhook-id");
  const timestamp = opts.headers.get("webhook-timestamp");
  const signatureHeader = opts.headers.get("webhook-signature");
  if (!id || !timestamp || !signatureHeader) {
    throw new WebhookError("Signatur-Header unvollständig");
  }

  const ts = Number(timestamp);
  if (!Number.isFinite(ts)) throw new WebhookError("webhook-timestamp ungültig");
  const now = opts.nowSeconds ?? Math.floor(Date.now() / 1000);
  const tolerance = opts.toleranceSeconds ?? DEFAULT_TOLERANCE_SECONDS;
  if (Math.abs(now - ts) > tolerance) {
    throw new WebhookError("Zeitstempel außerhalb des zulässigen Fensters");
  }

  const key = await crypto.subtle.importKey(
    "raw",
    parseHookSecret(opts.secret) as unknown as ArrayBuffer,
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"],
  );
  const signed = `${id}.${timestamp}.${opts.payload}`;
  const mac = await crypto.subtle.sign(
    "HMAC",
    key,
    new TextEncoder().encode(signed) as unknown as ArrayBuffer,
  );
  const expected = bytesToBase64(mac);

  // Der Header kann mehrere Signaturen enthalten (Schlüsselwechsel).
  // Eine passende genügt.
  const ok = signatureHeader
    .split(" ")
    .filter((part) => part.startsWith("v1,"))
    .some((part) => timingSafeEqual(part.slice(3), expected));
  if (!ok) throw new WebhookError("Signatur stimmt nicht");
}
