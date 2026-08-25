// Reine, testbare Hilfsfunktionen des sevDesk-Connectors (ohne Seiteneffekte).
export type Direction = "revenue" | "expense";

/** Was in `finance_bookings.direction` stehen darf. */
export type Buchungsrichtung = Direction | "asset" | "liability";

const VIERSTELLIG = /^[1-9]\d{3}$/;

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

// ============================================================================
// KONTO: die Position verweist, sie nennt nicht
// ----------------------------------------------------------------------------
// Die Strukturprobe vom 25.08.2026 zeigt es: Die Belegposition trägt
// `accountDatev` — aber als OBJEKT {id, objectName}, nicht als Nummer. Die
// Kontonummer steht am AccountDatev-Objekt selbst und muss über /AccountDatev
// aufgelöst werden.
//
// Die frühere Suche nach vierstelligen Werten unter kontoartigen Schlüsseln
// ist damit ersatzlos entfallen. Sie war eine Notlösung, solange die echten
// Feldnamen unbekannt waren, und sie hätte mit dem vollständigen
// SKR-03-Stamm sogar Schaden angerichtet: Wenn fast jede vierstellige Zahl
// ein gültiges Konto ist, taugt „steht im Kontenstamm" nicht mehr als Prüfer.
// ============================================================================

/**
 * Zieht die SKR-03-Kontonummer aus einem AccountDatev-Objekt von sevDesk.
 *
 * DAS OBJEKT FÜHRT BEIDE KONTENRAHMEN — nachgewiesen an der Strukturprobe
 * vom 25.08.2026:
 *
 *   number,   name     → SKR 04
 *   number03, name03   → SKR 03
 *
 * Der erste Anlauf nahm `number` und damit den SKR 04. In der App standen
 * dadurch 6805 „Telefon" statt 4920, 6815 „Bürobedarf" statt 4930 und 0670
 * statt 0480 — Konten, die es im SKR 03 so nicht gibt. Der Betrieb bucht
 * nach SKR 03, also gilt `number03`.
 *
 * `number` bleibt der Rückfall: Führt sevDesk zu einem Konto nur den
 * SKR 04, ist eine Nummer aus dem falschen Rahmen immer noch brauchbarer
 * als ein Sammelkonto — und `konto_aus_skr04` im Protokoll sagt, wie oft
 * das vorkam.
 */
export function kontonummerAusDatev(
  obj: unknown,
): { nummer: string; skr03: boolean } | null {
  if (!obj || typeof obj !== "object") return null;
  const o = obj as Record<string, unknown>;

  const lies = (k: string): string | null => {
    const v = o[k];
    if (typeof v !== "string" && typeof v !== "number") return null;
    const s = String(v).trim();
    return /^\d{3,5}$/.test(s) ? s.padStart(4, "0") : null;
  };

  const skr03 = lies("number03") ?? lies("accountNumber03");
  if (skr03) return { nummer: skr03, skr03: true };

  const skr04 = lies("number") ?? lies("accountNumber") ?? lies("datevNumber");
  if (skr04) return { nummer: skr04, skr03: false };

  return null;
}

/**
 * Lesbarer Name eines AccountDatev-Objekts — bevorzugt die SKR-03-Fassung.
 * `name` und `name03` unterscheiden sich: Zu 6805 heisst es „Telefon", zu
 * 4920 ebenfalls „Telefon", zu 0670/0480 aber „Geringwertige
 * Wirtschaftsgüter" gegenüber einer abweichenden SKR-03-Bezeichnung.
 */
export function kontonameAusDatev(obj: unknown, skr03 = true): string | null {
  if (!obj || typeof obj !== "object") return null;
  const o = obj as Record<string, unknown>;
  const reihe = skr03
    ? ["name03", "name", "simpleName", "description"]
    : ["name", "simpleName", "description"];
  for (const k of reihe) {
    const v = o[k];
    if (typeof v === "string" && v.trim()) return v.trim().slice(0, 120);
  }
  return null;
}

/**
 * Die referenzierte AccountDatev-Kennung einer Belegposition.
 * `geschaetzt` liest stattdessen `estimatedAccountDatev` — den Vorschlag,
 * den sevDesk macht, wenn noch nicht endgültig kontiert wurde.
 */
export function datevIdAusPosition(
  p: Record<string, unknown>,
  geschaetzt = false,
): string | null {
  const feld = geschaetzt ? p.estimatedAccountDatev : p.accountDatev;
  if (feld && typeof feld === "object") {
    const id = (feld as Record<string, unknown>).id;
    if (typeof id === "string" || typeof id === "number") return String(id);
  }
  // Manche Antworten liefern die Nummer direkt statt eines Verweises.
  if (typeof feld === "string" || typeof feld === "number") return String(feld);
  return null;
}

/**
 * Privat- und Kapitalkonten des SKR 03: 1800–1999.
 *
 * 1800 „Privatentnahmen allgemein" und 1890 „Privateinlagen" sind der
 * Kapitalanteil der Entnahmen und Einlagen — Geld, das der Gesellschafter
 * dem Betrieb entnimmt oder zuführt. Das ist WEDER Aufwand NOCH Erlös:
 * Es berührt das Kapitalkonto, nicht das Ergebnis.
 *
 * Anlass (25.08.2026): Zwei Belege des Auftraggebers auf 1890 landeten über
 * das Sammelkonto auf „3300 Wareneingang" und damit im Aufwand — 347,00 €,
 * die das Ergebnis verfälscht haben. Der Auftraggeber hat es gemeldet.
 *
 * Der ganze Bereich zählt dazu, nicht nur die beiden genannten Konten:
 * 1800–1899 für Vollhafter, 1900–1999 für Teilhafter (SKR 03, Kontenklasse
 * „Privat"). Wer nur 1800 und 1890 prüft, lässt Privatsteuern (1810),
 * Sonderausgaben (1820 ff.), Spenden (1840) und unentgeltliche Wertabgaben
 * (1880) durchrutschen.
 */
export function istPrivatkonto(code: string | null): boolean {
  if (!code || !VIERSTELLIG.test(code)) return false;
  const n = Number(code);
  return n >= 1800 && n <= 1999;
}

/**
 * Die endgültige Richtung einer Buchung.
 *
 * Vorrang hat das Konto, denn es kommt aus der Buchhaltung selbst; der
 * Kennbuchstabe `creditDebit` ist nur der Rückfall. Im SKR 03 ist die erste
 * Ziffer aussagekräftig: 3 = Wareneingang, 4 = betriebliche Aufwendungen,
 * 8 = Erlöse. 1800–1999 ist Privat und damit weder noch. Alles andere
 * (0, 2, 5–7, 9 und der Rest von 1) bleibt offen — dort entscheidet
 * `creditDebit`.
 */
export function richtungAusKonto(code: string | null): Buchungsrichtung | null {
  if (istPrivatkonto(code)) return "liability";
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

// ============================================================================
// DOPPELTE ZAHLUNGEN: „immer nur eine Ein- oder Auszahlung"
// ----------------------------------------------------------------------------
// Hausregel des Auftraggebers vom 25.08.2026, wörtlich: „Merke dir das, dass
// immer nur eine Ein- oder Auszahlung da stehen darf. Das Konto 1780 ist
// richtig."
//
// Anlass waren die Umsatzsteuer-Voranmeldungen. sevDesk führt zu jeder
// Voranmeldung ZWEI Belege — die Anmeldung und die Zahlung/Erstattung:
//
//   09.01.2026  1780  Finanzamt · UStVA-Q4.2025       35,43 €
//   13.01.2026  1790  Finanzamt Magdeburg · USt IV/25 35,43 €
//   02.04.2026  1780  Finanzamt · UStVA-Q1.2026       74,27 €
//   08.04.2026  1780  Finanzamt Magdeburg · I/2026    74,27 €
//   02.07.2026  1780  Finanzamt · UStVA-Q2.2026       36,96 €
//   06.07.2026  1780  Finanzamt Magdeburg · USt II/26 36,96 €
//
// Buchhalterisch ist das richtig; in einer Einnahmen-Übersicht steht derselbe
// Geldeingang dadurch zweimal, und die Summe ist um 146,66 € zu hoch.
//
// WARUM DIE REGEL SO ENG GEFASST IST
// Eine allgemeine Regel „gleicher Partner + gleicher Betrag + nahes Datum"
// hätte echte Vorgänge geschluckt. Im selben Bestand stehen:
//
//   * zwei Bescheide der Gemeinde Sülzetal, beide 25,00 €, beide am
//     25.11.2025 — aber mit verschiedenen Belegnummern (50012634/50012635).
//     Zwei Gebühren, kein Doppel.
//   * eine Privateinlage (1890) und eine Privatentnahme (1800) über je
//     215,00 € am selben Tag. Gleicher Betrag, gleicher Name, aber
//     ENTGEGENGESETZTE Zahlungsrichtung. Eine davon zu unterdrücken hiesse,
//     Geld verschwinden zu lassen.
//
// Automatisch unterdrückt wird deshalb nur der nachgewiesene Fall: beide
// Buchungen auf einem Umsatzsteuer-Zahlkonto (17xx), gleicher Betrag,
// gleiche Zahlungsrichtung, gleicher Partner, höchstens 14 Tage auseinander.
// Alles andere wird nur GEMELDET — Löschen ohne Beleg wäre dasselbe
// Ratespiel, nur mit schlimmeren Folgen.
// ============================================================================

/** Fliesst Geld ab (`aus`) oder herein (`ein`)? */
export type Zahlungsrichtung = "ein" | "aus";

/**
 * Zahlungsrichtung einer Buchung.
 *
 * Bei den Privat-/Kapitalkonten des SKR 03 entscheidet das Konto, nicht die
 * Buchungsrichtung: 1890/1990 ff. sind Einlagen (Geld herein), 1800–1889 und
 * 1900–1989 Entnahmen (Geld hinaus). Beide tragen `liability`.
 */
export function zahlungsrichtung(
  direction: Buchungsrichtung,
  code: string | null,
): Zahlungsrichtung {
  if (istPrivatkonto(code)) {
    return Number(code) % 100 >= 90 ? "ein" : "aus";
  }
  return direction === "revenue" ? "ein" : "aus";
}

/** Umsatzsteuer-Zahlkonten des SKR 03: 1700–1799 (u. a. 1780, 1790). */
export function istUmsatzsteuerZahlkonto(code: string | null): boolean {
  if (!code || !VIERSTELLIG.test(code)) return false;
  const n = Number(code);
  return n >= 1700 && n <= 1799;
}

// Rechtsformen und Füllwörter, die denselben Partner verschieden schreiben
// lassen: „Freenet" und „Freenet Dls Gmbh", „Finanzamt" und „Finanzamt
// Magdeburg".
const RECHTSFORMEN = new Set([
  "gmbh", "mbh", "ag", "kg", "kgaa", "ohg", "gbr", "ug", "se", "ev", "eg",
  "ltd", "limited", "llc", "inc", "corp", "pbc", "plc", "sa", "sarl", "srl",
  "sro", "bv", "nv", "as", "oy", "ab", "spa", "co", "cie", "sca", "und",
]);

/**
 * Vergleichbarer Schlüssel für den Geschäftspartner.
 *
 * `bezeichnung()` setzt „Lieferant · Belegnummer" zusammen; hier zählt nur
 * der Teil davor.
 */
export function partnerSchluessel(bez: string | null): string {
  const roh = (bez ?? "").split("·")[0];
  return roh
    .toLowerCase()
    .replace(/[^a-z0-9äöüß]+/g, " ")
    .split(" ")
    .filter((w) => w.length > 0 && !RECHTSFORMEN.has(w))
    .join(" ")
    .trim();
}

/** Belegnummer aus „Lieferant · Belegnummer", normalisiert. */
export function belegnummerSchluessel(bez: string | null): string {
  const teile = (bez ?? "").split("·");
  if (teile.length < 2) return "";
  return teile.slice(1).join("·").toLowerCase().replace(/[^a-z0-9]+/g, "");
}

/**
 * Zwei Partnernamen meinen denselben, wenn einer den anderen als
 * vollständigen Wortanfang enthält („finanzamt" ⊂ „finanzamt magdeburg").
 * Ein reiner `includes`-Vergleich wäre zu grob — „post" steckt auch in
 * „postbank".
 */
export function selberPartner(a: string, b: string): boolean {
  if (!a || !b) return false;
  return a === b || a.startsWith(`${b} `) || b.startsWith(`${a} `);
}

/** Abstand zweier ISO-Daten in Tagen (absolut). */
export function tageAbstand(a: string, b: string): number {
  const ta = Date.parse(`${a}T00:00:00Z`);
  const tb = Date.parse(`${b}T00:00:00Z`);
  if (!Number.isFinite(ta) || !Number.isFinite(tb)) {
    return Number.MAX_SAFE_INTEGER;
  }
  return Math.abs(ta - tb) / 86_400_000;
}

/** Die Felder, die für die Doppelerkennung gebraucht werden. */
export interface Zahlungszeile {
  booking_date: string;
  account_code: string;
  description: string | null;
  amount_net: number;
  amount_tax: number;
  direction: Buchungsrichtung;
  source_ref: string;
}

export interface Doppelbefund {
  /** Indizes, die NICHT gebucht werden sollen. */
  unterdruecken: number[];
  /** Was unterdrückt wurde — für das Sync-Protokoll. */
  unterdrueckt: Array<{
    source_ref: string;
    zugunsten_von: string;
    grund: string;
  }>;
  /** Verdachtsfälle, die nur gemeldet und nicht angefasst werden. */
  verdacht: Array<{ source_refs: string[]; grund: string }>;
}

const FENSTER_TAGE = 14;

/** Cent-genauer Bruttobetrag — Fliesskomma-Vergleiche taugen hier nicht. */
function cent(z: Zahlungszeile): number {
  return Math.round((z.amount_net + z.amount_tax) * 100);
}

/**
 * Findet Buchungen, die denselben Geldfluss ein zweites Mal zeigen.
 *
 * Unterdrückt wird ausschliesslich das Umsatzsteuer-Paar (siehe Kopf).
 * Welche der beiden bleibt: Vorrang hat 1780 („Das Konto 1780 ist richtig"),
 * danach das frühere Datum, danach die kleinere Belegkennung — damit das
 * Ergebnis bei jedem Lauf dasselbe ist.
 */
export function doppelteZahlungenFinden(zeilen: Zahlungszeile[]): Doppelbefund {
  const befund: Doppelbefund = {
    unterdruecken: [],
    unterdrueckt: [],
    verdacht: [],
  };

  // --- 1) Umsatzsteuer-Paare: unterdrücken ---------------------------------
  const ustGruppen = new Map<string, number[]>();
  zeilen.forEach((z, i) => {
    if (!istUmsatzsteuerZahlkonto(z.account_code)) return;
    const schl = `${zahlungsrichtung(z.direction, z.account_code)}|${cent(z)}`;
    const liste = ustGruppen.get(schl) ?? [];
    liste.push(i);
    ustGruppen.set(schl, liste);
  });

  const erledigt = new Set<number>();
  for (const liste of ustGruppen.values()) {
    if (liste.length < 2) continue;
    for (const i of liste) {
      if (erledigt.has(i)) continue;
      const gruppe = [i];
      for (const j of liste) {
        if (j === i || erledigt.has(j)) continue;
        const gleicherPartner = selberPartner(
          partnerSchluessel(zeilen[i].description),
          partnerSchluessel(zeilen[j].description),
        );
        if (!gleicherPartner) continue;
        const abstand = tageAbstand(
          zeilen[i].booking_date,
          zeilen[j].booking_date,
        );
        if (abstand > FENSTER_TAGE) continue;
        gruppe.push(j);
      }
      if (gruppe.length < 2) continue;
      for (const k of gruppe) erledigt.add(k);

      const sieger = gruppe.slice().sort((a, b) => {
        const av = zeilen[a].account_code === "1780" ? 0 : 1;
        const bv = zeilen[b].account_code === "1780" ? 0 : 1;
        if (av !== bv) return av - bv;
        if (zeilen[a].booking_date !== zeilen[b].booking_date) {
          return zeilen[a].booking_date < zeilen[b].booking_date ? -1 : 1;
        }
        return zeilen[a].source_ref < zeilen[b].source_ref ? -1 : 1;
      })[0];

      for (const k of gruppe) {
        if (k === sieger) continue;
        const abstand = tageAbstand(
          zeilen[k].booking_date,
          zeilen[sieger].booking_date,
        );
        befund.unterdruecken.push(k);
        befund.unterdrueckt.push({
          source_ref: zeilen[k].source_ref,
          zugunsten_von: zeilen[sieger].source_ref,
          grund: "Umsatzsteuer-Voranmeldung und ihre Zahlung sind derselbe " +
            `Geldfluss (gleicher Betrag, gleicher Partner, ${abstand} Tage ` +
            "Abstand).",
        });
      }
    }
  }

  // --- 2) Gleiche Belegnummer: nur melden ----------------------------------
  // Zwei Belege mit DERSELBEN Rechnungsnummer beim selben Partner sind fast
  // immer dieselbe Rechnung, zweimal erfasst. „Fast immer" reicht aber nicht,
  // um sie zu löschen — die Beträge können abweichen, und welcher davon der
  // richtige ist, weiss nur die Buchhaltung.
  const nachNummer = new Map<string, number[]>();
  zeilen.forEach((z, i) => {
    const nr = belegnummerSchluessel(z.description);
    const partner = partnerSchluessel(z.description);
    if (nr.length < 4 || !partner) return;
    const schl = `${partner.split(" ")[0]}|${nr}`;
    const liste = nachNummer.get(schl) ?? [];
    liste.push(i);
    nachNummer.set(schl, liste);
  });
  for (const liste of nachNummer.values()) {
    if (liste.length < 2) continue;
    const nah = liste.filter((j) =>
      liste.some((k) =>
        k !== j &&
        tageAbstand(zeilen[j].booking_date, zeilen[k].booking_date) <=
          FENSTER_TAGE
      )
    );
    if (nah.length < 2) continue;
    befund.verdacht.push({
      source_refs: nah.map((j) => zeilen[j].source_ref),
      grund: "Dieselbe Belegnummer beim selben Partner, innerhalb von " +
        `${FENSTER_TAGE} Tagen. In sevDesk prüfen — hier wird nichts ` +
        "unterdrückt, weil die Beträge abweichen können.",
    });
  }

  return befund;
}
