// Prüft die Herstellerschicht — vor allem das, was NICHT durchkommen darf.
//
// Ausführen: deno test supabase/functions/terminal-webhook/adapter_test.ts
import { assert, assertEquals } from "https://deno.land/std@0.224.0/assert/mod.ts";
import {
  ausCcv,
  entferneKartendaten,
  normalisiere,
  signaturGueltig,
  zeitkonstantGleich,
} from "./adapter.ts";

Deno.test("Kartennummer wird entfernt, auch tief verschachtelt", () => {
  const roh = {
    amount: 250,
    card: { pan: "4111111111111111", expiry: "12/28", holderName: "M Muster" },
    nested: [{ Track2: "4111111111111111=2812101" }],
  };
  const sauber = JSON.stringify(entferneKartendaten(roh));

  assert(!sauber.includes("4111111111111111"), "PAN ist durchgekommen");
  assert(!sauber.includes("12/28"), "Ablaufdatum ist durchgekommen");
  assert(!sauber.includes("M Muster"), "Inhabername ist durchgekommen");
  assert(sauber.includes("250"), "Der Betrag muss erhalten bleiben");
});

Deno.test("eine unbenannte Kartennummer im Freitext wird auch entfernt", () => {
  // Der Hersteller erfindet ein Feld, das auf keiner Sperrliste steht.
  const sauber = JSON.stringify(
    entferneKartendaten({ hinweisText: "5555 5555 5555 4444" }),
  );
  assert(!sauber.includes("5555"), "Kartennummer im Freitext ist geblieben");
});

Deno.test("eine Belegnummer gleicher Länge bleibt stehen", () => {
  // 16 Ziffern ohne gültige Luhn-Prüfziffer ist keine Kartennummer.
  const sauber = JSON.stringify(entferneKartendaten({ beleg: "1234567890123456" }));
  assert(sauber.includes("1234567890123456"), "Belegnummer wurde verworfen");
});

Deno.test("CCV: Cent werden nicht mit Euro verwechselt", () => {
  const mitExponent = ausCcv({
    terminalId: "T1", transactionId: "A1", type: "SALE",
    amount: 250, currencyExponent: 2,
  });
  assertEquals(mitExponent?.betrag_brutto, 2.5);

  const ohneExponent = ausCcv({
    terminalId: "T1", transactionId: "A2", type: "SALE", amount: 250,
  });
  assertEquals(ohneExponent?.betrag_brutto, 2.5);

  const schonEuro = ausCcv({
    terminalId: "T1", transactionId: "A3", type: "SALE", amount: 2.5,
  });
  assertEquals(schonEuro?.betrag_brutto, 2.5);
});

Deno.test("CCV: unbekannte Art wird nicht zum Verkauf erfunden", () => {
  const e = ausCcv({ terminalId: "T1", transactionId: "B1", type: "WASAUCHIMMER" });
  assertEquals(e?.art, "lebenszeichen");
});

Deno.test("CCV: ohne Terminal oder Referenz kein Ereignis", () => {
  assertEquals(ausCcv({ transactionId: "C1" }), null);
  assertEquals(ausCcv({ terminalId: "T1" }), null);
});

Deno.test("Idempotenzschlüssel ist stabil und gerätebezogen", () => {
  const a = ausCcv({ terminalId: "T1", transactionId: "X", type: "SALE" });
  const b = ausCcv({ terminalId: "T1", transactionId: "X", type: "SALE" });
  const c = ausCcv({ terminalId: "T2", transactionId: "X", type: "SALE" });

  assertEquals(a?.idempotenz_schluessel, b?.idempotenz_schluessel);
  assert(a?.idempotenz_schluessel !== c?.idempotenz_schluessel);
});

Deno.test("unbekannter Hersteller wird abgewiesen, nicht geraten", () => {
  assertEquals(normalisiere("irgendwer", { terminalId: "T1", transactionId: "Y" }), null);
});

Deno.test("Signatur: gültig, verfälscht, veraltet", async () => {
  const geheimnis = "prüfgeheimnis";
  const jetzt = String(Math.floor(Date.now() / 1000));
  const text = '{"terminalId":"T1"}';

  const schluessel = await crypto.subtle.importKey(
    "raw", new TextEncoder().encode(geheimnis),
    { name: "HMAC", hash: "SHA-256" }, false, ["sign"],
  );
  const roh = await crypto.subtle.sign(
    "HMAC", schluessel, new TextEncoder().encode(`${jetzt}.${text}`),
  );
  const sig = Array.from(new Uint8Array(roh))
    .map((b) => b.toString(16).padStart(2, "0")).join("");

  assert(await signaturGueltig(geheimnis, jetzt, text, sig), "gültige Signatur abgelehnt");

  assert(
    !(await signaturGueltig(geheimnis, jetzt, text + " ", sig)),
    "verfälschter Inhalt wurde angenommen",
  );

  // Wiedereinspielung einer alten, echt signierten Nachricht.
  const alt = String(Math.floor(Date.now() / 1000) - 3600);
  assert(
    !(await signaturGueltig(geheimnis, alt, text, sig)),
    "veraltete Nachricht wurde angenommen",
  );

  assert(!(await signaturGueltig(geheimnis, jetzt, text, "")), "leere Signatur angenommen");
});

Deno.test("Vergleich bricht nicht früh ab", () => {
  assert(zeitkonstantGleich("abc", "abc"));
  assert(!zeitkonstantGleich("abc", "abd"));
  assert(!zeitkonstantGleich("abc", "abcd"));
});
