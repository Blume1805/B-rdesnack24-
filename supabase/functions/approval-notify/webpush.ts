// Web Push ohne Fremdpaket (Wunsch Philipp 19.11.2026: Push an den anderen
// Gesellschafter, wenn eine Freigabe ansteht).
//
// * Verschlüsselung nach RFC 8291 (aes128gcm, RFC 8188): Der Inhalt ist
//   Ende-zu-Ende verschlüsselt; Apple/Google/Mozilla leiten nur weiter.
// * Absenderausweis nach RFC 8292 (VAPID, ES256-JWT).
// Nur WebCrypto. Geprüft gegen das Beispiel aus RFC 8291, Anhang A
// (webpush_test.ts).

const te = new TextEncoder();

/** Byte-Folge mit gewöhnlichem Speicher. WebCrypto und fetch nehmen seit
 *  TypeScript 5.7 nur solche an (CI-Befund 19.11.2026). */
export type Bytes = Uint8Array<ArrayBuffer>;

export function b64u(bytes: Uint8Array): string {
  let s = "";
  for (const b of bytes) s += String.fromCharCode(b);
  return btoa(s).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

export function vonB64u(s: string): Bytes {
  const t = s.replace(/-/g, "+").replace(/_/g, "/");
  const bin = atob(t + "===".slice((t.length + 3) % 4));
  return Uint8Array.from(bin, (c) => c.charCodeAt(0));
}

function verbinde(...teile: Uint8Array[]): Bytes {
  const out = new Uint8Array(teile.reduce((n, t) => n + t.length, 0));
  let i = 0;
  for (const t of teile) {
    out.set(t, i);
    i += t.length;
  }
  return out;
}

async function hmac(schluessel: Bytes, daten: Bytes): Promise<Bytes> {
  const k = await crypto.subtle.importKey("raw", schluessel, { name: "HMAC", hash: "SHA-256" }, false, ["sign"]);
  return new Uint8Array(await crypto.subtle.sign("HMAC", k, daten));
}

/** HKDF in den zwei Schritten aus RFC 5869 (Länge ≤ 32). */
async function hkdf(salz: Bytes, ikm: Bytes, info: Bytes, laenge: number): Promise<Bytes> {
  const prk = await hmac(salz, ikm);
  const okm = await hmac(prk, verbinde(info, new Uint8Array([1])));
  return okm.slice(0, laenge);
}

/** Öffentlicher Punkt (65 Byte, unkomprimiert) → JWK ohne d. */
function punktZuJwk(punkt: Uint8Array): JsonWebKey {
  return { kty: "EC", crv: "P-256", x: b64u(punkt.slice(1, 33)), y: b64u(punkt.slice(33, 65)), ext: true };
}

export interface Schluesselpaar {
  /** 65 Byte, unkomprimiert. */
  oeffentlich: Uint8Array;
  privat: CryptoKey;
}

/** Schlüsselpaar aus öffentlichem Punkt und privatem Skalar d (base64url). */
export async function importiere(oeffentlich: Uint8Array, d: string, nutzung: "ecdh" | "ecdsa"): Promise<Schluesselpaar> {
  const jwk = { ...punktZuJwk(oeffentlich), d };
  const privat = await crypto.subtle.importKey(
    "jwk",
    jwk,
    nutzung === "ecdh" ? { name: "ECDH", namedCurve: "P-256" } : { name: "ECDSA", namedCurve: "P-256" },
    false,
    nutzung === "ecdh" ? ["deriveBits"] : ["sign"],
  );
  return { oeffentlich, privat };
}

async function neuesEcdhPaar(): Promise<Schluesselpaar> {
  const p = await crypto.subtle.generateKey({ name: "ECDH", namedCurve: "P-256" }, true, ["deriveBits"]);
  const roh = new Uint8Array(await crypto.subtle.exportKey("raw", p.publicKey));
  return { oeffentlich: roh, privat: p.privateKey };
}

/**
 * Verschlüsselt [inhalt] für ein Abonnement (p256dh, auth) nach RFC 8291.
 * [test] setzt Salz und Server-Schlüssel fest (nur für den Abgleich mit
 * dem RFC-Beispiel).
 */
export async function verschluessele(
  inhalt: Uint8Array,
  p256dh: Uint8Array,
  auth: Bytes,
  test?: { salz: Bytes; server: Schluesselpaar },
): Promise<Bytes> {
  const salz = test?.salz ?? crypto.getRandomValues(new Uint8Array(16));
  const server = test?.server ?? await neuesEcdhPaar();
  const uaKey = await crypto.subtle.importKey("jwk", punktZuJwk(p256dh), { name: "ECDH", namedCurve: "P-256" }, false, []);
  const geteilt = new Uint8Array(
    await crypto.subtle.deriveBits({ name: "ECDH", public: uaKey }, server.privat, 256),
  );
  const keyInfo = verbinde(te.encode("WebPush: info\0"), p256dh, server.oeffentlich);
  const ikm = await hkdf(auth, geteilt, keyInfo, 32);
  const cek = await hkdf(salz, ikm, te.encode("Content-Encoding: aes128gcm\0"), 16);
  const nonce = await hkdf(salz, ikm, te.encode("Content-Encoding: nonce\0"), 12);
  const aes = await crypto.subtle.importKey("raw", cek, "AES-GCM", false, ["encrypt"]);
  // Ein Datensatz: Inhalt + Begrenzer 0x02 (letzter Datensatz).
  const klar = verbinde(inhalt, new Uint8Array([2]));
  const geheim = new Uint8Array(await crypto.subtle.encrypt({ name: "AES-GCM", iv: nonce }, aes, klar));
  const rs = new Uint8Array([0, 0, 16, 0]); // 4096
  return verbinde(salz, rs, new Uint8Array([server.oeffentlich.length]), server.oeffentlich, geheim);
}

/** VAPID-Kopf (RFC 8292) für den Push-Dienst des Endpunkts. */
export async function vapidKopf(endpunkt: string, vapid: Schluesselpaar, kontakt: string): Promise<string> {
  const aud = new URL(endpunkt).origin;
  const kopf = b64u(te.encode(JSON.stringify({ typ: "JWT", alg: "ES256" })));
  const nutz = b64u(te.encode(JSON.stringify({ aud, exp: Math.floor(Date.now() / 1000) + 12 * 3600, sub: kontakt })));
  const unsigniert = `${kopf}.${nutz}`;
  const sig = new Uint8Array(
    await crypto.subtle.sign({ name: "ECDSA", hash: "SHA-256" }, vapid.privat, te.encode(unsigniert)),
  );
  return `vapid t=${unsigniert}.${b64u(sig)}, k=${b64u(vapid.oeffentlich)}`;
}

export interface Abo {
  endpoint: string;
  keys: { p256dh: string; auth: string };
}

/** Liest ein gespeichertes Abonnement (JSON aus PushSubscription.toJSON()). */
export function leseAbo(text: string): Abo | null {
  try {
    const a = JSON.parse(text);
    if (typeof a?.endpoint !== "string" || !a.endpoint.startsWith("https://")) return null;
    if (typeof a?.keys?.p256dh !== "string" || typeof a?.keys?.auth !== "string") return null;
    return a as Abo;
  } catch {
    return null;
  }
}

/** Sendet eine Nachricht; liefert den HTTP-Status des Push-Dienstes. */
export async function sendeWebPush(
  abo: Abo,
  nachricht: Record<string, unknown>,
  vapid: Schluesselpaar,
  kontakt: string,
  holen: typeof fetch = fetch,
): Promise<number> {
  const body = await verschluessele(
    te.encode(JSON.stringify(nachricht)),
    vonB64u(abo.keys.p256dh),
    vonB64u(abo.keys.auth),
  );
  const res = await holen(abo.endpoint, {
    method: "POST",
    headers: {
      Authorization: await vapidKopf(abo.endpoint, vapid, kontakt),
      "Content-Encoding": "aes128gcm",
      "Content-Type": "application/octet-stream",
      TTL: String(24 * 3600),
      Urgency: "high",
    },
    body,
  });
  return res.status;
}
