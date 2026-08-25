import { assertEquals } from "https://deno.land/std@0.224.0/assert/mod.ts";
import {
  belegIdAusPosition,
  belegProbe,
  bezeichnung,
  datevIdAusPosition,
  fallbackKonto,
  kontonameAusDatev,
  kontonummerAusDatev,
  parseVoucher,
  richtungAusCreditDebit,
  richtungAusKonto,
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
Deno.test("kontonummerAusDatev: SKR 03 schlaegt SKR 04", () => {
  // Das AccountDatev-Objekt fuehrt BEIDE Kontenrahmen. Der Betrieb bucht
  // nach SKR 03 — `number03` gilt, `number` ist der SKR 04.
  assertEquals(
    kontonummerAusDatev({ id: "27", number: "6815", number03: "4930" }),
    { nummer: "4930", skr03: true },
  );
});

Deno.test("kontonummerAusDatev: ohne SKR 03 der Rueckfall, aber markiert", () => {
  // Eine Nummer aus dem falschen Rahmen ist immer noch brauchbarer als ein
  // Sammelkonto — sie muss nur als solche erkennbar bleiben.
  assertEquals(
    kontonummerAusDatev({ id: "27", number: "6815" }),
    { nummer: "6815", skr03: false },
  );
  // Dreistellige Konten werden auf vier Stellen aufgefuellt.
  assertEquals(
    kontonummerAusDatev({ id: "27", number03: "480" }),
    { nummer: "0480", skr03: true },
  );
});

Deno.test("kontonummerAusDatev: `id` gilt nie als Konto", () => {
  // Die id ist die sevDesk-Objektkennung. Waere sie zugelassen, bekaeme jede
  // Position ein plausibel aussehendes, falsches Konto.
  assertEquals(kontonummerAusDatev({ id: "4930", objectName: "AccountDatev" }), null);
  assertEquals(kontonummerAusDatev(null), null);
  assertEquals(kontonummerAusDatev("4930"), null);
});

Deno.test("kontonameAusDatev: `name03` zum SKR-03-Konto", () => {
  const konto = { name: "Telefon (SKR04)", name03: "Telefon" };
  assertEquals(kontonameAusDatev(konto, true), "Telefon");
  assertEquals(kontonameAusDatev(konto, false), "Telefon (SKR04)");
  assertEquals(kontonameAusDatev({ id: "27" }), null);
});

Deno.test("datevIdAusPosition: gebucht vor geschaetzt", () => {
  const pos = {
    accountDatev: { id: "27", objectName: "AccountDatev" },
    estimatedAccountDatev: { id: "99", objectName: "AccountDatev" },
  };
  assertEquals(datevIdAusPosition(pos, false), "27");
  assertEquals(datevIdAusPosition(pos, true), "99");
  assertEquals(datevIdAusPosition({}, false), null);
  // Liefert sevDesk ausnahmsweise die Nummer direkt statt eines Verweises:
  assertEquals(datevIdAusPosition({ accountDatev: "4930" }, false), "4930");
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
