// Absenderschlüssel für Web-Push (VAPID), vom Server selbst erzeugt
// (Befund 19.11.2026: Das Eintragen als Geheimnis von Hand scheiterte, die
// App meldete „Push konnte nicht eingeschaltet werden").
//
// Reihenfolge: 1. Geheimnisse VAPID_PUBLIC_KEY/VAPID_PRIVATE_D, falls gesetzt.
// 2. Das in der Datenbank abgelegte Paar (app.web_push_schluessel).
// 3. Sonst ein neues Paar erzeugen und ablegen; die Datenbank behält das
//    zuerst abgelegte, damit zwei gleichzeitige erste Aufrufe dasselbe Paar
//    benutzen. Der private Teil verlässt den Server nie.
import { b64u } from "./webpush.ts";

export interface Paar {
  /** Öffentlicher Punkt, 65 Byte unkomprimiert, base64url (87 Zeichen). */
  oeffentlich: string;
  /** Privater Skalar d, base64url (43 Zeichen). */
  privat_d: string;
}

export interface SchluesselAblage {
  holen(): Promise<Paar | null>;
  /** Legt an, falls noch keins da ist; liefert das gespeicherte Paar. */
  anlegen(p: Paar): Promise<Paar>;
}

export async function neuesPaar(): Promise<Paar> {
  const p = await crypto.subtle.generateKey({ name: "ECDSA", namedCurve: "P-256" }, true, ["sign", "verify"]);
  const roh = new Uint8Array(await crypto.subtle.exportKey("raw", p.publicKey));
  const jwk = await crypto.subtle.exportKey("jwk", p.privateKey);
  return { oeffentlich: b64u(roh), privat_d: jwk.d! };
}

export async function vapidPaar(
  geheim: { oeffentlich?: string; privat_d?: string },
  ablage: SchluesselAblage,
  erzeugen: () => Promise<Paar> = neuesPaar,
): Promise<Paar> {
  if (geheim.oeffentlich && geheim.privat_d) {
    return { oeffentlich: geheim.oeffentlich, privat_d: geheim.privat_d };
  }
  const da = await ablage.holen();
  if (da) return da;
  return await ablage.anlegen(await erzeugen());
}
