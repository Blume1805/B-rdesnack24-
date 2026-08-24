// Reine, testbare Hilfsfunktionen des sevDesk-Connectors (ohne Seiteneffekte).
export type Direction = "revenue" | "expense";

/**
 * Sammelkonten für den Fall, dass sich aus dem Beleg kein Konto ableiten
 * lässt. Bewusst grob: Diese Zuordnung ist eine Notlösung, keine Buchung.
 * Sie greift nur, wenn `findeKontoCode` nichts Belastbares gefunden hat.
 */
export function fallbackKonto(direction: Direction, taxRate: number): string {
  if (direction === "revenue") return taxRate >= 19 ? "8400" : "8300";
  return taxRate >= 19 ? "3400" : "3300";
}

/** Alte Bezeichnung, bis alle Aufrufer umgestellt sind. */
export const mapToAccount = fallbackKonto;

// Schlüsselnamen, hinter denen eine Kontonummer stehen kann. Bewusst eng:
// Ein zu weiter Filter würde interne sevDesk-Objekt-IDs (ebenfalls vier
// Ziffern) als Konto durchgehen lassen.
const KONTO_SCHLUESSEL = /(account|konto|datev|skr)/i;
const VIERSTELLIG = /^[1-9]\d{3}$/;

/**
 * Sucht im Beleg nach einer Kontonummer, die im übergebenen Kontenstamm
 * tatsächlich existiert.
 *
 * Der Kontenstamm ist hier der Prüfer: Nur was in `public.finance_accounts`
 * steht, wird übernommen. Damit kann diese Suche nicht „danebengreifen" —
 * im schlimmsten Fall findet sie nichts und der Aufrufer nimmt das
 * Sammelkonto. Das ist Absicht, solange die Feldnamen der echten sevDesk-
 * Belege nicht gegen ein reales Konto verifiziert sind (Verifikations-
 * pflicht, siehe index.ts).
 */
export function findeKontoCode(
  wert: unknown,
  bekannt: ReadonlySet<string>,
  tiefe = 0,
): string | null {
  if (tiefe > 4 || wert === null || typeof wert !== "object") return null;

  if (Array.isArray(wert)) {
    for (const element of wert) {
      const treffer = findeKontoCode(element, bekannt, tiefe + 1);
      if (treffer) return treffer;
    }
    return null;
  }

  const eintraege = Object.entries(wert as Record<string, unknown>);
  // Erst die flachen Felder dieser Ebene, dann erst absteigen: Ein Konto am
  // Beleg selbst ist aussagekräftiger als eines an einem Unterobjekt.
  for (const [schluessel, v] of eintraege) {
    if (!KONTO_SCHLUESSEL.test(schluessel)) continue;
    if (typeof v !== "string" && typeof v !== "number") continue;
    const code = String(v).trim();
    if (VIERSTELLIG.test(code) && bekannt.has(code)) return code;
  }
  for (const [, v] of eintraege) {
    const treffer = findeKontoCode(v, bekannt, tiefe + 1);
    if (treffer) return treffer;
  }
  return null;
}

/** Normalisiert einen sevDesk-Voucher in eine Buchungszeile (oder null). */
export function parseVoucher(v: Record<string, unknown>): {
  source_ref: string;
  booking_date: string;
  direction: Direction;
  tax_rate: number;
  amount_net: number;
  amount_tax: number;
  description: string | null;
} | null {
  const id = String(v.id ?? "");
  if (!id) return null;

  // creditDebit: 'C' (Credit/Einnahme) vs. 'D' (Debit/Ausgabe).
  const cd = String(v.creditDebit ?? v.creditdebit ?? "").toUpperCase();
  const direction: Direction = cd === "C" ? "revenue" : "expense";

  const dateRaw = String(v.voucherDate ?? v.payDate ?? v.create ?? "");
  const booking_date = dateRaw ? dateRaw.substring(0, 10) : "";
  if (!/^\d{4}-\d{2}-\d{2}$/.test(booking_date)) return null;

  const net = Number(v.sumNet ?? v.sumnet ?? 0);
  const tax = Number(v.sumTax ?? v.sumtax ?? 0);

  return {
    source_ref: id,
    booking_date,
    direction,
    // Den tatsächlichen Satz übernehmen statt auf 7/19 zu runden. Ein Beleg
    // mit 0 % oder 16 % gehört auch mit 0 % bzw. 16 % ins Protokoll; das
    // Zurechtbiegen hätte die USt-Auswertung still verfälscht.
    tax_rate: steuersatz(v.taxRate, net, tax),
    amount_net: Math.abs(net),
    amount_tax: Math.abs(tax),
    description: typeof v.description === "string" ? v.description : null,
  };
}

/** Steuersatz aus dem Feld, sonst aus Steuer/Netto; auf eine Stelle gerundet. */
export function steuersatz(feld: unknown, netto: number, steuer: number): number {
  const ausFeld = Number(feld);
  const roh = Number.isFinite(ausFeld) && ausFeld > 0
    ? ausFeld
    : (netto !== 0 ? (steuer / netto) * 100 : 0);
  if (!Number.isFinite(roh) || roh < 0) return 0;
  return Math.min(Math.round(Math.abs(roh) * 10) / 10, 99.9);
}

/**
 * Strukturprobe eines Belegs für das Sync-Protokoll: Feldnamen und die
 * buchungsrelevanten Werte. Bewusst OHNE Freitextfelder (description,
 * Lieferantenname, Adressen) — die können personenbezogen sein und haben
 * in einem Diagnoseprotokoll nichts zu suchen.
 */
const PROBE_WERTE = [
  "creditDebit",
  "voucherDate",
  "payDate",
  "status",
  "taxRate",
  "taxType",
  "sumNet",
  "sumTax",
  "sumGross",
  "voucherType",
];

export function belegProbe(v: Record<string, unknown>): Record<string, unknown> {
  const werte: Record<string, unknown> = {};
  for (const k of PROBE_WERTE) {
    if (k in v) werte[k] = typeof v[k] === "object" ? "[objekt]" : v[k];
  }
  return {
    felder: Object.keys(v).sort(),
    werte,
    // Verschachtelte Objekte nur mit Namen und Feldnamen, ohne Inhalte.
    unterobjekte: Object.entries(v)
      .filter(([, w]) => w !== null && typeof w === "object")
      .map(([k, w]) => ({
        feld: k,
        felder: Array.isArray(w)
          ? Object.keys((w[0] ?? {}) as Record<string, unknown>).sort()
          : Object.keys(w as Record<string, unknown>).sort(),
      })),
  };
}
