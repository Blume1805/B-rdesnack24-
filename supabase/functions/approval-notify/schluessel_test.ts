import { assertEquals } from "https://deno.land/std@0.224.0/assert/mod.ts";
import { neuesPaar, type Paar, type SchluesselAblage, vapidPaar } from "./schluessel.ts";
import { importiere, vapidKopf, vonB64u } from "./webpush.ts";

/** Ablage wie die Datenbank: legt nur an, wenn leer; liefert das gespeicherte Paar. */
function fakeAblage(start: Paar | null = null) {
  let gespeichert = start;
  let angelegt = 0;
  const ablage: SchluesselAblage = {
    async holen() {
      return gespeichert;
    },
    async anlegen(p) {
      angelegt++;
      if (!gespeichert) gespeichert = p;
      return gespeichert;
    },
  };
  return { ablage, angelegt: () => angelegt };
}

const A: Paar = { oeffentlich: "a".repeat(87), privat_d: "a".repeat(43) };
const B: Paar = { oeffentlich: "b".repeat(87), privat_d: "b".repeat(43) };

Deno.test("Geheimnisse haben Vorrang, Datenbank bleibt unberührt", async () => {
  const f = fakeAblage(B);
  const p = await vapidPaar({ oeffentlich: A.oeffentlich, privat_d: A.privat_d }, f.ablage);
  assertEquals(p, A);
  assertEquals(f.angelegt(), 0);
});

Deno.test("Nur ein Geheimnis gesetzt: zählt nicht, gespeichertes Paar gilt", async () => {
  const f = fakeAblage(B);
  assertEquals(await vapidPaar({ oeffentlich: A.oeffentlich }, f.ablage), B);
});

Deno.test("Gespeichertes Paar wird benutzt, nichts neu erzeugt", async () => {
  const f = fakeAblage(B);
  let erzeugt = 0;
  const p = await vapidPaar({}, f.ablage, async () => (erzeugt++, A));
  assertEquals(p, B);
  assertEquals(erzeugt, 0);
  assertEquals(f.angelegt(), 0);
});

Deno.test("Leer: einmal erzeugen und ablegen, danach immer dasselbe Paar", async () => {
  const f = fakeAblage();
  const p1 = await vapidPaar({}, f.ablage);
  const p2 = await vapidPaar({}, f.ablage);
  assertEquals(p1, p2);
  assertEquals(f.angelegt(), 1);
});

Deno.test("Gleichzeitiger erster Aufruf: die Ablage entscheidet, beide erhalten ihr Paar", async () => {
  const f = fakeAblage();
  // Beide sehen „leer"; der zweite legt ein anderes Paar an, bekommt aber das erste.
  const gespeichert1 = await f.ablage.anlegen(A);
  const gespeichert2 = await f.ablage.anlegen(B);
  assertEquals(gespeichert1, A);
  assertEquals(gespeichert2, A);
});

Deno.test("Erzeugtes Paar: Längen passen zur Datenbank, Signatur ist gültig", async () => {
  const p = await neuesPaar();
  assertEquals(p.oeffentlich.length, 87);
  assertEquals(p.privat_d.length, 43);
  const vapid = await importiere(vonB64u(p.oeffentlich), p.privat_d, "ecdsa");
  const kopf = await vapidKopf("https://web.push.apple.com/x", vapid, "mailto:test@example.invalid");
  const m = /^vapid t=([^,]+), k=(.+)$/.exec(kopf)!;
  assertEquals(m[2], p.oeffentlich);
  const [h, n, s] = m[1].split(".");
  const pub = await crypto.subtle.importKey(
    "raw",
    vonB64u(p.oeffentlich),
    { name: "ECDSA", namedCurve: "P-256" },
    false,
    ["verify"],
  );
  const ok = await crypto.subtle.verify(
    { name: "ECDSA", hash: "SHA-256" },
    pub,
    vonB64u(s),
    new TextEncoder().encode(`${h}.${n}`),
  );
  assertEquals(ok, true);
});
