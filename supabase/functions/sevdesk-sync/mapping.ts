// Reine, testbare Hilfsfunktionen des sevDesk-Connectors (ohne Seiteneffekte).
export type Direction = "revenue" | "expense";

// ============================================================================
// RICHTUNG: creditDebit, und warum die Zuordnung am 25.08.2026 gedreht wurde
// ----------------------------------------------------------------------------
// Bis dahin galt hier `C = Einnahme`. Der erste echte Lauf mit 44 Belegen hat
// gezeigt, dass es genau umgekehrt ist — nachgewiesen an den Zahlen, nicht
// vermutet:
//
//   * 34 Belege trugen "C" und landeten als Erlös. Es sind Eingangsrechnungen
//     mit `supplierName` und Vorsteuer.
//   * 10 Belege trugen "D" und landeten als Aufwand. Darunter drei
//     Umsatzsteuer-Voranmeldungen: UStVA-Q4.2025 = 35,43 €, Q1.2026 = 74,27 €,
//     Q2.2026 = 36,96 €.
//   * Und 35,43 € ist auf den Cent genau die Vorsteuer des Belegs vom
//     01.12.2025 (netto 186,48 €, Steuer 35,43 €). Eine
//     Vorsteuer-Erstattung ist eine EINNAHME.
//
// Beide Klassen waren also falsch herum. „D" ist die Einnahme.
// ============================================================================
export function richtungAusCreditDebit(wert: unknown): Direction {
  return String(wert ?? "").trim().toUpperCase() === "D" ? "revenue" : "expense";
}

/**
 * Sammelkonten für den Fall, dass sich aus dem Beleg kein Konto ableiten
 * lässt. Bewusst grob: Diese Zuordnung ist eine Notlösung, keine Buchung.
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
 * Sammelt ALLE vierstelligen Werte, die unter einem kontoartigen Schlüssel
 * stehen — auch die, die im Kontenstamm fehlen.
 *
 * Getrennt von der Auswahl, damit das Sync-Protokoll melden kann, welche
 * Konten sevDesk benutzt, die wir noch nicht führen. Ohne diese Liste müsste
 * man raten, welche Konten der Stamm noch braucht.
 */
export function sammleKontoKandidaten(
  wert: unknown,
  tiefe = 0,
  raus: string[] = [],
): string[] {
  if (tiefe > 5 || wert === null || typeof wert !== "object") return raus;

  if (Array.isArray(wert)) {
    for (const element of wert) sammleKontoKandidaten(element, tiefe + 1, raus);
    return raus;
  }

  for (const [schluessel, v] of Object.entries(wert as Record<string, unknown>)) {
    if (
      KONTO_SCHLUESSEL.test(schluessel) &&
      (typeof v === "string" || typeof v === "number")
    ) {
      const code = String(v).trim();
      if (VIERSTELLIG.test(code) && !raus.includes(code)) raus.push(code);
    }
    sammleKontoKandidaten(v, tiefe + 1, raus);
  }
  return raus;
}

/**
 * Wählt aus den Kandidaten das erste Konto, das im Kontenstamm steht.
 *
 * Der Kontenstamm ist hier der Prüfer: Nur was in `public.finance_accounts`
 * steht, wird übernommen. Damit kann diese Suche nicht „danebengreifen" —
 * im schlimmsten Fall findet sie nichts und der Aufrufer nimmt das
 * Sammelkonto.
 */
export function findeKontoCode(
  wert: unknown,
  bekannt: ReadonlySet<string>,
): string | null {
  for (const code of sammleKontoKandidaten(wert)) {
    if (bekannt.has(code)) return code;
  }
  return null;
}

/**
 * Richtung aus der Kontonummer, wo sie eindeutig ist.
 *
 * Im SKR 03 ist die erste Ziffer aussagekräftig: 3 = Wareneingang,
 * 4 = betriebliche Aufwendungen, 8 = Erlöse. Steht ein solches Konto am
 * Beleg, ist es die bessere Quelle als ein Kennbuchstabe — es kommt aus der
 * Buchhaltung selbst. Alles andere (0–2, 5–7, 9) bleibt offen; dort
 * entscheidet weiter `creditDebit`.
 */
export function richtungAusKonto(code: string | null): Direction | null {
  if (!code || !VIERSTELLIG.test(code)) return null;
  if (code.startsWith("3") || code.startsWith("4")) return "expense";
  if (code.startsWith("8")) return "revenue";
  return null;
}

// Regelsätze der deutschen Umsatzsteuer, die hier vorkommen können.
const NORMSAETZE = [0, 5, 7, 16, 19];

/**
 * Steuersatz aus dem Feld, sonst aus Steuer/Netto — und danach auf den
 * nächsten Regelsatz eingerastet.
 *
 * Das Einrasten ist kein Schönheitsfehler-Fix: Der erste echte Lauf lieferte
 * 18,9 % und 19,1 %, weil sevDesk `taxRate` am Beleg gar nicht mitschickt und
 * der Satz aus gerundeten Cent-Beträgen hergeleitet werden muss (1,94 / 10,24
 * = 18,95 %). Zwei Belege mit demselben Steuersatz landeten so in zwei
 * verschiedenen Gruppen, und die USt-Auswertung stimmte nicht mehr.
 */
export function steuersatz(feld: unknown, netto: number, steuer: number): number {
  const ausFeld = Number(feld);
  const roh = Number.isFinite(ausFeld) && ausFeld > 0
    ? ausFeld
    : (netto !== 0 ? (Math.abs(steuer) / Math.abs(netto)) * 100 : 0);
  if (!Number.isFinite(roh) || roh < 0) return 0;

  const begrenzt = Math.min(Math.abs(roh), 99.9);
  for (const satz of NORMSAETZE) {
    // 0,75 Prozentpunkte Toleranz: deckt die Rundung aus Cent-Beträgen ab,
    // ohne zwei echte Sätze zu verwechseln — der kleinste Abstand zwischen
    // zwei Regelsätzen ist 2 Punkte (5 und 7).
    if (Math.abs(begrenzt - satz) <= 0.75) return satz;
  }
  return Math.round(begrenzt * 10) / 10;
}

/**
 * Bezeichnung für die Buchung.
 *
 * `description` ist bei sevDesk NICHT die Beschreibung, sondern die
 * Belegnummer — im ersten echten Lauf standen dort Werte wie „50012634" und
 * „M26012655351". Für sich genommen sagt das niemandem etwas. Der Name des
 * Geschäftspartners steht in `supplierName`; beides zusammen ergibt eine
 * Zeile, die man lesen kann.
 */
export function bezeichnung(v: Record<string, unknown>): string | null {
  const lieferant = typeof v.supplierName === "string" ? v.supplierName.trim() : "";
  const nummer = typeof v.description === "string" ? v.description.trim() : "";
  if (lieferant && nummer) return `${lieferant} · ${nummer}`;
  return lieferant || nummer || null;
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

  const dateRaw = String(v.voucherDate ?? v.payDate ?? v.create ?? "");
  const booking_date = dateRaw ? dateRaw.substring(0, 10) : "";
  if (!/^\d{4}-\d{2}-\d{2}$/.test(booking_date)) return null;

  const net = Number(v.sumNet ?? v.sumnet ?? 0);
  const tax = Number(v.sumTax ?? v.sumtax ?? 0);

  return {
    source_ref: id,
    booking_date,
    direction: richtungAusCreditDebit(v.creditDebit ?? v.creditdebit),
    tax_rate: steuersatz(v.taxRate, net, tax),
    amount_net: Math.abs(net),
    amount_tax: Math.abs(tax),
    description: bezeichnung(v),
  };
}

/** Zieht die Beleg-Kennung aus einer Belegposition (für die Zuordnung). */
export function belegIdAusPosition(p: Record<string, unknown>): string | null {
  const beleg = p.voucher;
  if (beleg && typeof beleg === "object") {
    const id = (beleg as Record<string, unknown>).id;
    if (typeof id === "string" || typeof id === "number") return String(id);
  }
  const flach = p.voucherId ?? p.voucher_id;
  if (typeof flach === "string" || typeof flach === "number") return String(flach);
  return null;
}

/**
 * Strukturprobe eines Objekts für das Sync-Protokoll: Feldnamen und die
 * buchungsrelevanten Werte. Bewusst OHNE Freitextfelder (description,
 * supplierName, Adressen) — die können personenbezogen sein und haben
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
  "accountDatev",
  "accountNumber",
  "accountingType",
  "net",
  "sum",
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
