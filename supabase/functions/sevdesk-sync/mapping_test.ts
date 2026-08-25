import { assertEquals } from "https://deno.land/std@0.224.0/assert/mod.ts";
import type { Zahlungszeile } from "./mapping.ts";
import {
  belegIdAusPosition,
  belegProbe,
  bezeichnung,
  datevIdAusPosition,
  doppelteZahlungenFinden,
  fallbackKonto,
  istPrivatkonto,
  istUmsatzsteuerZahlkonto,
  kontonameAusDatev,
  kontonummerAusDatev,
  parseVoucher,
  partnerSchluessel,
  richtungAusCreditDebit,
  richtungAusKonto,
  selberPartner,
  steuersatz,
  zahlungsrichtung,
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

Deno.test("Privatkonten sind weder Aufwand noch Erloes", () => {
  // 1800 Privatentnahmen, 1890 Privateinlagen: Kapitalkonten. Am 25.08.2026
  // standen zwei solche Belege ueber das Sammelkonto auf 3300 Wareneingang
  // und damit im Aufwand — 347,00 EUR zu viel.
  assertEquals(richtungAusKonto("1800"), "liability");
  assertEquals(richtungAusKonto("1890"), "liability");
  // Der ganze Bereich, nicht nur die beiden bekannten Konten.
  assertEquals(richtungAusKonto("1810"), "liability"); // Privatsteuern
  assertEquals(richtungAusKonto("1840"), "liability"); // Zuwendungen, Spenden
  assertEquals(richtungAusKonto("1880"), "liability"); // Unentgeltl. Wertabgaben
  assertEquals(richtungAusKonto("1990"), "liability"); // Teilhafter
});

Deno.test("istPrivatkonto: 1800 bis 1999, und keins daneben", () => {
  assertEquals(istPrivatkonto("1800"), true);
  assertEquals(istPrivatkonto("1999"), true);
  // Die Nachbarn duerfen NICHT mitgefangen werden: 1776 ist Umsatzsteuer,
  // 2000 ist neutraler Aufwand.
  assertEquals(istPrivatkonto("1799"), false);
  assertEquals(istPrivatkonto("2000"), false);
  assertEquals(istPrivatkonto("1200"), false);
  assertEquals(istPrivatkonto(null), false);
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

// ============================================================================
// Doppelte Zahlungen — die Hausregel „immer nur eine Ein- oder Auszahlung"
// ============================================================================

const ust = (
  datum: string,
  konto: string,
  partner: string,
  betrag: number,
  ref: string,
): Zahlungszeile => ({
  booking_date: datum,
  account_code: konto,
  description: `${partner} · Beleg`,
  amount_net: betrag,
  amount_tax: 0,
  direction: "revenue",
  source_ref: ref,
});

Deno.test("Zahlungsrichtung: Privateinlage herein, Privatentnahme hinaus", () => {
  assertEquals(zahlungsrichtung("liability", "1890"), "ein");
  assertEquals(zahlungsrichtung("liability", "1800"), "aus");
  assertEquals(zahlungsrichtung("liability", "1990"), "ein");
  assertEquals(zahlungsrichtung("liability", "1810"), "aus");
  assertEquals(zahlungsrichtung("revenue", "8400"), "ein");
  assertEquals(zahlungsrichtung("expense", "4920"), "aus");
});

Deno.test("Umsatzsteuer-Zahlkonten sind 1700–1799", () => {
  assertEquals(istUmsatzsteuerZahlkonto("1780"), true);
  assertEquals(istUmsatzsteuerZahlkonto("1790"), true);
  assertEquals(istUmsatzsteuerZahlkonto("1800"), false);
  assertEquals(istUmsatzsteuerZahlkonto("4920"), false);
  assertEquals(istUmsatzsteuerZahlkonto(null), false);
});

Deno.test("Partnerschlüssel lässt Rechtsformen weg", () => {
  assertEquals(partnerSchluessel("Freenet Dls Gmbh · M2601"), "freenet dls");
  assertEquals(partnerSchluessel("Finanzamt Magdeburg · I/2026"), "finanzamt magdeburg");
  assertEquals(selberPartner("finanzamt", "finanzamt magdeburg"), true);
  // Ein reiner Textvergleich würde hier danebengreifen.
  assertEquals(selberPartner("post", "postbank"), false);
});

Deno.test("UStVA und ihre Zahlung werden zu einer Buchung", () => {
  const zeilen = [
    ust("2026-04-02", "1780", "Finanzamt", 74.27, "A"),
    ust("2026-04-08", "1780", "Finanzamt Magdeburg", 74.27, "B"),
  ];
  const b = doppelteZahlungenFinden(zeilen);
  assertEquals(b.unterdruecken.length, 1);
  // Bei gleichem Konto gewinnt das frühere Datum.
  assertEquals(b.unterdrueckt[0].source_ref, "B");
  assertEquals(b.unterdrueckt[0].zugunsten_von, "A");
});

Deno.test("Bei 1780 gegen 1790 bleibt 1780 stehen", () => {
  // Auch wenn 1790 das frühere Datum trägt: der Auftraggeber hat 1780 als
  // das richtige Konto benannt.
  const zeilen = [
    ust("2026-01-09", "1790", "Finanzamt Magdeburg", 35.43, "frueh"),
    ust("2026-01-13", "1780", "Finanzamt", 35.43, "spaet"),
  ];
  const b = doppelteZahlungenFinden(zeilen);
  assertEquals(b.unterdrueckt.length, 1);
  assertEquals(b.unterdrueckt[0].source_ref, "frueh");
  assertEquals(b.unterdrueckt[0].zugunsten_von, "spaet");
});

Deno.test("Zwei Quartale mit gleichem Betrag bleiben zwei Buchungen", () => {
  const zeilen = [
    ust("2026-04-02", "1780", "Finanzamt", 50.0, "Q1"),
    ust("2026-07-02", "1780", "Finanzamt", 50.0, "Q2"),
  ];
  assertEquals(doppelteZahlungenFinden(zeilen).unterdrueckt.length, 0);
});

Deno.test("Einlage und Entnahme über denselben Betrag bleiben beide", () => {
  // 215,00 € am 15.06.2026 auf 1890 und auf 1800. Gleicher Betrag, gleicher
  // Name, gleicher Tag — aber entgegengesetzte Zahlungsrichtung.
  const zeilen: Zahlungszeile[] = [
    {
      booking_date: "2026-06-15",
      account_code: "1890",
      description: "Philipp Blume · 15.06.26",
      amount_net: 215,
      amount_tax: 0,
      direction: "liability",
      source_ref: "einlage",
    },
    {
      booking_date: "2026-06-15",
      account_code: "1800",
      description: "Philipp Blume · 15.06.26",
      amount_net: 215,
      amount_tax: 0,
      direction: "liability",
      source_ref: "entnahme",
    },
  ];
  assertEquals(doppelteZahlungenFinden(zeilen).unterdrueckt.length, 0);
});

Deno.test("Zwei Gebühren am selben Tag bleiben zwei Buchungen", () => {
  // Gemeinde Sülzetal, zweimal 25,00 € am 25.11.2025 — verschiedene
  // Belegnummern, also zwei Vorgänge. Weder unterdrückt noch gemeldet.
  const zeilen: Zahlungszeile[] = [
    {
      booking_date: "2025-11-25",
      account_code: "4900",
      description: "Gemeinde Sülzetal · 50012634",
      amount_net: 25,
      amount_tax: 0,
      direction: "expense",
      source_ref: "a",
    },
    {
      booking_date: "2025-11-25",
      account_code: "4900",
      description: "Gemeinde Sülzetal · 50012635",
      amount_net: 25,
      amount_tax: 0,
      direction: "expense",
      source_ref: "b",
    },
  ];
  const b = doppelteZahlungenFinden(zeilen);
  assertEquals(b.unterdrueckt.length, 0);
  assertEquals(b.verdacht.length, 0);
});

Deno.test("Gleiche Rechnungsnummer wird gemeldet, nicht gelöscht", () => {
  const zeilen: Zahlungszeile[] = [
    {
      booking_date: "2026-05-06",
      account_code: "4930",
      description: "Amazon Business Eu S.À R.L. · DE62YC8JABEI",
      amount_net: 22.71,
      amount_tax: 4.31,
      direction: "expense",
      source_ref: "a",
    },
    {
      booking_date: "2026-05-15",
      account_code: "4930",
      description: "Amazon Business Eu S.À R.L. · DE62YC8JABEI",
      amount_net: 22.71,
      amount_tax: 4.31,
      direction: "expense",
      source_ref: "b",
    },
  ];
  const b = doppelteZahlungenFinden(zeilen);
  assertEquals(b.unterdrueckt.length, 0);
  assertEquals(b.verdacht.length, 1);
  assertEquals(b.verdacht[0].source_refs.sort(), ["a", "b"]);
});
