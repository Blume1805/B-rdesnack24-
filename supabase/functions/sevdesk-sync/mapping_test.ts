import { assertEquals } from "https://deno.land/std@0.224.0/assert/mod.ts";
import {
  belegIdAusPosition,
  belegProbe,
  bezeichnung,
  fallbackKonto,
  findeKontoCode,
  parseVoucher,
  richtungAusCreditDebit,
  richtungAusKonto,
  sammleKontoKandidaten,
  steuersatz,
} from "./mapping.ts";

// ---------------------------------------------------------------------------
// Richtung
// ---------------------------------------------------------------------------
Deno.test("richtungAusCreditDebit: D ist die Einnahme, C die Ausgabe", () => {
  // Am 25.08.2026 an 44 echten Belegen nachgewiesen: Die Eingangsrechnungen
  // tragen C, die Vorsteuer-Erstattungen tragen D. Vorher war es vertauscht,
  // und 34 Ausgaben standen als Erlös im Dashboard.
  assertEquals(richtungAusCreditDebit("D"), "revenue");
  assertEquals(richtungAusCreditDebit("C"), "expense");
  assertEquals(richtungAusCreditDebit("d"), "revenue");
  assertEquals(richtungAusCreditDebit(""), "expense");
  assertEquals(richtungAusCreditDebit(undefined), "expense");
});

Deno.test("richtungAusKonto: nur 3, 4 und 8 sind eindeutig", () => {
  assertEquals(richtungAusKonto("3300"), "expense");
  assertEquals(richtungAusKonto("4240"), "expense");
  assertEquals(richtungAusKonto("8400"), "revenue");
  // Finanz- und Bestandskonten sagen nichts über die Richtung.
  assertEquals(richtungAusKonto("1200"), null);
  assertEquals(richtungAusKonto("9000"), null);
  assertEquals(richtungAusKonto(null), null);
  assertEquals(richtungAusKonto("33"), null);
});

// ---------------------------------------------------------------------------
// Steuersatz
// ---------------------------------------------------------------------------
Deno.test("steuersatz: rastet auf den Regelsatz ein", () => {
  // Genau die Werte aus dem ersten echten Lauf: 1,94 / 10,24 = 18,95 %.
  assertEquals(steuersatz(undefined, 10.24, 1.94), 19);
  assertEquals(steuersatz(undefined, 4.19, 0.8), 19);
  assertEquals(steuersatz(undefined, 56.04, 10.65), 19);
  assertEquals(steuersatz(undefined, 100, 7), 7);
  assertEquals(steuersatz(undefined, 100, 0), 0);
  assertEquals(steuersatz(undefined, 100, 16), 16);
});

Deno.test("steuersatz: 5 und 7 werden nicht verwechselt", () => {
  // Der kleinste Abstand zweier Regelsätze ist 2 Punkte; die Toleranz von
  // 0,75 darf ihn nicht überbrücken.
  assertEquals(steuersatz(undefined, 100, 5.5), 5);
  assertEquals(steuersatz(undefined, 100, 6.5), 7);
  assertEquals(steuersatz(undefined, 100, 6), 6);
});

Deno.test("steuersatz: Feld schlaegt Herleitung", () => {
  assertEquals(steuersatz(19, 100, 0), 19);
  assertEquals(steuersatz(null, 0, 0), 0);
  assertEquals(steuersatz(-5, 0, 0), 0);
});

// ---------------------------------------------------------------------------
// Bezeichnung
// ---------------------------------------------------------------------------
Deno.test("bezeichnung: Lieferant vor Belegnummer", () => {
  // `description` ist bei sevDesk die Belegnummer, nicht die Beschreibung.
  assertEquals(
    bezeichnung({ supplierName: "Getraenke Mueller", description: "50012634" }),
    "Getraenke Mueller · 50012634",
  );
  assertEquals(bezeichnung({ description: "50012634" }), "50012634");
  assertEquals(bezeichnung({ supplierName: "Finanzamt" }), "Finanzamt");
  assertEquals(bezeichnung({}), null);
  assertEquals(bezeichnung({ supplierName: "  ", description: "  " }), null);
});

// ---------------------------------------------------------------------------
// Beleg
// ---------------------------------------------------------------------------
Deno.test("parseVoucher: Eingangsrechnung wird zur Ausgabe", () => {
  const r = parseVoucher({
    id: "130418218",
    creditDebit: "C",
    voucherDate: "2026-08-20T00:00:00+02:00",
    sumNet: "56.04",
    sumTax: "10.65",
    supplierName: "Lieferant",
    description: "50012634",
  });
  assertEquals(r?.direction, "expense");
  assertEquals(r?.booking_date, "2026-08-20");
  assertEquals(r?.tax_rate, 19);
  assertEquals(r?.amount_net, 56.04);
  assertEquals(r?.description, "Lieferant · 50012634");
});

Deno.test("parseVoucher: Vorsteuer-Erstattung wird zur Einnahme", () => {
  const r = parseVoucher({
    id: "134089278",
    creditDebit: "D",
    voucherDate: "2026-01-09",
    sumNet: "35.43",
    sumTax: "0",
    description: "UStVA-Q4.2025",
  });
  assertEquals(r?.direction, "revenue");
  assertEquals(r?.tax_rate, 0);
});

Deno.test("parseVoucher: ohne id oder ohne brauchbares Datum => null", () => {
  assertEquals(parseVoucher({ creditDebit: "C" }), null);
  assertEquals(parseVoucher({ id: "7", voucherDate: "" }), null);
  assertEquals(parseVoucher({ id: "7", voucherDate: "15.06.2026" }), null);
});

// ---------------------------------------------------------------------------
// Konto
// ---------------------------------------------------------------------------
const STAMM = new Set(["3300", "3400", "4240", "8300", "8400"]);

Deno.test("findeKontoCode: Konto an der Belegposition", () => {
  const positionen = [{ accountingType: { accountNumber: "4240" } }];
  assertEquals(findeKontoCode(positionen, STAMM), "4240");
});

Deno.test("findeKontoCode: unbekanntes Konto wird NICHT uebernommen", () => {
  assertEquals(findeKontoCode({ accountDatev: "9999" }, STAMM), null);
});

Deno.test("findeKontoCode: interne IDs gelten nicht als Konto", () => {
  // `id` und `objectName` tragen keinen Kontoschluessel im Namen; die 3400
  // hier ist eine sevDesk-Objekt-ID und darf nicht als Konto durchgehen.
  assertEquals(
    findeKontoCode({ supplier: { id: "3400", objectName: "Contact" } }, STAMM),
    null,
  );
});

Deno.test("sammleKontoKandidaten: meldet auch unbekannte Konten", () => {
  const positionen = [
    { accountingType: { accountNumber: "6815" } },
    { accountDatev: "4930" },
  ];
  assertEquals(sammleKontoKandidaten(positionen), ["6815", "4930"]);
  // …und genau die tauchen dann als "unbekannt" im Protokoll auf.
  assertEquals(findeKontoCode(positionen, STAMM), null);
});

Deno.test("belegIdAusPosition: verschachtelt und flach", () => {
  assertEquals(belegIdAusPosition({ voucher: { id: "42" } }), "42");
  assertEquals(belegIdAusPosition({ voucher: { id: 42 } }), "42");
  assertEquals(belegIdAusPosition({ voucherId: "42" }), "42");
  assertEquals(belegIdAusPosition({}), null);
});

Deno.test("fallbackKonto: unveraenderte grobe Zuordnung", () => {
  assertEquals(fallbackKonto("revenue", 0), "8300");
  assertEquals(fallbackKonto("revenue", 19), "8400");
  assertEquals(fallbackKonto("expense", 7), "3300");
  assertEquals(fallbackKonto("expense", 19), "3400");
});

// ---------------------------------------------------------------------------
// Diagnose
// ---------------------------------------------------------------------------
Deno.test("belegProbe: nennt Feldnamen, aber keine Freitexte", () => {
  const probe = belegProbe({
    id: "5",
    creditDebit: "D",
    sumNet: 12,
    description: "Rechnung Meier, Musterweg 3",
    supplierName: "Meier",
  });
  const felder = probe.felder as string[];
  assertEquals(felder.includes("description"), true);
  assertEquals(felder.includes("supplierName"), true);
  assertEquals(JSON.stringify(probe).includes("Musterweg"), false);
  assertEquals(JSON.stringify(probe).includes("Meier"), false);
  assertEquals((probe.werte as Record<string, unknown>).sumNet, 12);
});
