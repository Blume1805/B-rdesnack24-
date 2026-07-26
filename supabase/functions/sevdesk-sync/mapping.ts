// Reine, testbare Hilfsfunktionen des sevDesk-Connectors (ohne Seiteneffekte).
export type Direction = "revenue" | "expense";

/** SKR-03-Zuordnung nach Richtung + USt-Satz (Verfahrensdokumentation 2.6 / 5.4). */
export function mapToAccount(direction: Direction, taxRate: number): string {
  if (direction === "revenue") return taxRate >= 19 ? "8400" : "8300";
  return taxRate >= 19 ? "3400" : "3300";
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
  if (!booking_date) return null;

  const net = Number(v.sumNet ?? v.sumnet ?? 0);
  const tax = Number(v.sumTax ?? v.sumtax ?? 0);
  const taxRate = Number(v.taxRate ?? (net > 0 ? Math.round((tax / net) * 100) : 0));

  return {
    source_ref: id,
    booking_date,
    direction,
    tax_rate: taxRate >= 19 ? 19 : taxRate >= 7 ? 7 : taxRate,
    amount_net: Math.abs(net),
    amount_tax: Math.abs(tax),
    description: (v.description as string) ?? null,
  };
}
