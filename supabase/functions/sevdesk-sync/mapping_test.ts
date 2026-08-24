import { assertEquals } from "https://deno.land/std@0.224.0/assert/mod.ts";
import {
  belegProbe,
  fallbackKonto,
  findeKontoCode,
  mapToAccount,
  parseVoucher,
  steuersatz,
} from "./mapping.ts";

Deno.test("mapToAccount: SKR-03-Zuordnung nach Richtung/USt", () => {
  assertEquals(mapToAccount("revenue", 7), "8300");
  assertEquals(mapToAccount("revenue", 19), "8400");
  assertEquals(mapToAccount("expense", 7), "3300");
  assertEquals(mapToAccount("expense", 19), "3400");
});

Deno.test("parseVoucher: Einnahme korrekt normalisiert", () => {
  const r = parseVoucher({
    id: "123",
    creditDebit: "C",
    voucherDate: "2026-06-15T00:00:00.000Z",
    sumNet: 100,
    sumTax: 7,
    taxRate: 7,
    description: "Verkauf",
  });
  assertEquals(r?.direction, "revenue");
  assertEquals(r?.booking_date, "2026-06-15");
  assertEquals(r?.tax_rate, 7);
  assertEquals(r?.amount_net, 100);
});

Deno.test("parseVoucher: ohne id => null", () => {
  assertEquals(parseVoucher({ creditDebit: "D" }), null);
});

Deno.test("parseVoucher: Ausgabe und USt aus Beträgen abgeleitet", () => {
  const r = parseVoucher({
    id: "9",
    creditDebit: "D",
    voucherDate: "2026-01-02",
    sumNet: 100,
    sumTax: 19,
  });
  assertEquals(r?.direction, "expense");
  assertEquals(r?.tax_rate, 19);
});

Deno.test("parseVoucher: unbrauchbares Datum => null", () => {
  assertEquals(parseVoucher({ id: "7", creditDebit: "D", voucherDate: "" }), null);
  assertEquals(parseVoucher({ id: "7", creditDebit: "D", voucherDate: "15.06.2026" }), null);
});

Deno.test("parseVoucher: Steuersatz wird nicht auf 7/19 zurechtgebogen", () => {
  const r = parseVoucher({
    id: "16",
    creditDebit: "D",
    voucherDate: "2020-07-01",
    sumNet: 100,
    sumTax: 16,
    taxRate: 16,
  });
  assertEquals(r?.tax_rate, 16);
});

Deno.test("steuersatz: Feld schlaegt Herleitung, Rundung auf eine Stelle", () => {
  assertEquals(steuersatz(19, 100, 0), 19);
  assertEquals(steuersatz(undefined, 100, 7), 7);
  assertEquals(steuersatz(null, 0, 0), 0);
  assertEquals(steuersatz(undefined, 3, 0.57), 19);
  assertEquals(steuersatz(-5, 0, 0), 0);
});

const STAMM = new Set(["3300", "3400", "4240", "8300", "8400"]);

Deno.test("findeKontoCode: Konto am Beleg wird uebernommen", () => {
  assertEquals(findeKontoCode({ id: "1", accountDatev: "4240" }, STAMM), "4240");
});

Deno.test("findeKontoCode: Konto in einer Belegposition wird gefunden", () => {
  const beleg = {
    id: "2",
    voucherPos: [{ accountingType: { accountNumber: "3300" } }],
  };
  assertEquals(findeKontoCode(beleg, STAMM), "3300");
});

Deno.test("findeKontoCode: unbekanntes Konto wird NICHT uebernommen", () => {
  // 9999 sieht aus wie ein Konto, steht aber nicht im Stamm — dann lieber
  // nichts liefern und den Aufrufer das Sammelkonto nehmen lassen.
  assertEquals(findeKontoCode({ id: "3", accountDatev: "9999" }, STAMM), null);
});

Deno.test("findeKontoCode: interne IDs gelten nicht als Konto", () => {
  // `id` und `objectName` tragen keinen Kontoschluessel im Namen; die 3400
  // hier ist eine sevDesk-Objekt-ID und darf nicht als Konto durchgehen.
  const beleg = { id: "4", supplier: { id: "3400", objectName: "Contact" } };
  assertEquals(findeKontoCode(beleg, STAMM), null);
});

Deno.test("belegProbe: nennt Feldnamen, aber keine Freitexte", () => {
  const probe = belegProbe({
    id: "5",
    creditDebit: "D",
    sumNet: 12,
    description: "Rechnung Meier, Musterweg 3",
    supplier: { id: "8", name: "Meier" },
  });
  const felder = probe.felder as string[];
  assertEquals(felder.includes("description"), true);
  assertEquals(JSON.stringify(probe).includes("Musterweg"), false);
  assertEquals(JSON.stringify(probe).includes("Meier"), false);
  assertEquals((probe.werte as Record<string, unknown>).sumNet, 12);
});

Deno.test("fallbackKonto: unveraenderte grobe Zuordnung", () => {
  assertEquals(fallbackKonto("revenue", 0), "8300");
  assertEquals(fallbackKonto("expense", 19), "3400");
});
