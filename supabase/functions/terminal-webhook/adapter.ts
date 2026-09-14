// ============================================================================
// Herstellerschicht — die einzige Stelle, an der ein Gerätehersteller vorkommt
// ----------------------------------------------------------------------------
// Alles darunter (Datenbank, Preise, Buchungen, Bestand) kennt nur die Form
// `Terminalereignis`. Wechselt der Hersteller, wird hier ein Adapter ergänzt
// und sonst nichts angefasst.
//
// WAS HIER NIEMALS ANKOMMEN DARF: Kartennummer, Ablaufdatum, Prüfziffer,
// Inhabername, Magnetspur, PIN-Block. `entferneKartendaten` wirft solche
// Felder weg, BEVOR irgendetwas gespeichert wird — auch dann, wenn der
// Hersteller sie entgegen der Erwartung mitschickt. Was nicht gespeichert
// wird, kann nicht gestohlen werden, und PCI DSS gilt für einen Betrieb,
// der keine Kartendaten verarbeitet, nicht.
// ============================================================================

export type Ereignisart = "verkauf" | "storno" | "ausfall" | "lebenszeichen";

export interface Terminalereignis {
  hersteller: "ccv" | "nayax" | "sonstige";
  terminal_kennung: string;
  idempotenz_schluessel: string;
  anbieter_lfd_nr: number | null;
  art: Ereignisart;
  betrag_brutto: number | null;
  waehrung: string;
  zeitpunkt: string;
  /** Einmalcode einer App-Freigabe, falls der Kauf über die App lief. */
  freigabe_code: string | null;
  nutzlast: Record<string, unknown>;
}

/**
 * Felder, die nie gespeichert werden — egal, wie sie heißen.
 *
 * Die Einträge werden auf dieselbe Form gebracht wie die geprüften
 * Feldnamen (nur Kleinbuchstaben und Ziffern). Ohne diesen Schritt ging
 * `holderName` durch, weil in der Liste `holder_name` stand und der
 * Unterstrich beim Vergleich schon entfernt war. Gefunden am 14.09.2026
 * durch den Test, nicht durch Lesen.
 */
const VERBOTEN_ROH = [
  "pan", "primaryaccountnumber", "cardnumber", "card_number", "kartennummer",
  "track1", "track2", "track_data", "magstripe", "expiry", "expirydate",
  "expiration", "cvv", "cvc", "cvv2", "cid", "pin", "pinblock", "pin_block",
  "cardholder", "cardholdername", "holder_name", "holdername", "karteninhaber",
  "name_on_card", "sicherheitscode", "kartenpruefnummer",
];

const VERBOTEN = VERBOTEN_ROH.map(normalisiereFeldname);

/** Beide Seiten des Vergleichs auf dieselbe Form bringen. */
function normalisiereFeldname(s: string): string {
  return s.toLowerCase().replace(/[^a-z0-9]/g, "");
}

/**
 * Entfernt Kartendaten rekursiv. Bewusst über eine Sperrliste auf
 * Feldnamenbasis plus eine Mustererkennung für lange Ziffernfolgen: Ein
 * Hersteller, der ein Feld `kartendaten_neu` erfindet, soll trotzdem nicht
 * durchkommen.
 */
export function entferneKartendaten(wert: unknown, tiefe = 0): unknown {
  if (tiefe > 12) return null;

  if (Array.isArray(wert)) {
    return wert.map((v) => entferneKartendaten(v, tiefe + 1));
  }

  if (wert !== null && typeof wert === "object") {
    const aus: Record<string, unknown> = {};
    for (const [k, v] of Object.entries(wert as Record<string, unknown>)) {
      const schluessel = normalisiereFeldname(k);
      if (VERBOTEN.some((b) => schluessel.includes(b))) {
        aus[k] = "[entfernt]";
        continue;
      }
      aus[k] = entferneKartendaten(v, tiefe + 1);
    }
    return aus;
  }

  if (typeof wert === "string") {
    // 13 bis 19 zusammenhängende Ziffern sieht aus wie eine Kartennummer.
    // Lieber eine Belegnummer zu viel verworfen als eine PAN gespeichert.
    const nurZiffern = wert.replace(/[\s-]/g, "");
    if (/^\d{13,19}$/.test(nurZiffern) && luhn(nurZiffern)) return "[entfernt]";
  }

  return wert;
}

/** Luhn-Prüfziffer. Trennt Kartennummern von gleich langen Belegnummern. */
function luhn(ziffern: string): boolean {
  let summe = 0;
  let doppelt = false;
  for (let i = ziffern.length - 1; i >= 0; i--) {
    let z = ziffern.charCodeAt(i) - 48;
    if (doppelt) {
      z *= 2;
      if (z > 9) z -= 9;
    }
    summe += z;
    doppelt = !doppelt;
  }
  return summe % 10 === 0;
}

function zahl(v: unknown): number | null {
  if (v === null || v === undefined || v === "") return null;
  const n = typeof v === "number" ? v : Number(String(v).replace(",", "."));
  return Number.isFinite(n) ? n : null;
}

/**
 * CCV-Adapter.
 *
 * ACHTUNG — hier steht eine ANNAHME, keine geprüfte Tatsache. Die
 * Feldbenennung des CCV IM30 ist am 14.09.2026 nicht belegt: Die
 * Produktseite war aus der Entwicklungsumgebung nicht abrufbar, und eine
 * Integrationsdokumentation liegt nicht vor. Deshalb werden mehrere
 * gebräuchliche Schreibweisen akzeptiert, und `art` fällt auf
 * `lebenszeichen` zurück, statt einen Verkauf zu erfinden.
 *
 * Sobald die echte Dokumentation vorliegt: NUR DIESE FUNKTION anpassen,
 * dazu den Test in `adapter_test.ts`. Alles andere bleibt, wie es ist.
 */
export function ausCcv(roh: Record<string, unknown>): Terminalereignis | null {
  const kennung = String(
    roh.terminalId ?? roh.TerminalId ?? roh.terminal_id ??
      roh.deviceId ?? roh.serialNumber ?? "",
  ).trim();

  const referenz = String(
    roh.transactionId ?? roh.TransactionId ?? roh.transaction_id ??
      roh.stan ?? roh.receiptNumber ?? "",
  ).trim();

  if (!kennung || !referenz) return null;

  const artRoh = String(roh.type ?? roh.messageType ?? roh.eventType ?? "")
    .toLowerCase();

  let art: Ereignisart = "lebenszeichen";
  if (/sale|purchase|payment|verkauf/.test(artRoh)) art = "verkauf";
  else if (/refund|reversal|void|storno/.test(artRoh)) art = "storno";
  else if (/error|fail|fehler|ausfall/.test(artRoh)) art = "ausfall";

  // Beträge kommen je nach Hersteller in Cent oder in Euro. Ein Faktor, der
  // falsch geraten wird, verhundertfacht Umsätze — deshalb wird der
  // angegebene Exponent ausgewertet und nicht geschätzt.
  const roherBetrag = zahl(roh.amount ?? roh.Amount ?? roh.betrag);
  const exponent = zahl(roh.currencyExponent ?? roh.amountExponent);
  const betrag = roherBetrag === null
    ? null
    : exponent !== null
    ? roherBetrag / Math.pow(10, exponent)
    : Number.isInteger(roherBetrag) && Math.abs(roherBetrag) >= 100
    ? roherBetrag / 100
    : roherBetrag;

  return {
    hersteller: "ccv",
    terminal_kennung: kennung,
    idempotenz_schluessel: `ccv:${kennung}:${referenz}`,
    anbieter_lfd_nr: zahl(roh.sequenceNumber ?? roh.seq ?? roh.trace) ?? null,
    art,
    betrag_brutto: betrag,
    waehrung: String(roh.currency ?? roh.Currency ?? "EUR").toUpperCase(),
    zeitpunkt: String(roh.timestamp ?? roh.dateTime ?? new Date().toISOString()),
    freigabe_code: roh.freigabeCode != null
      ? String(roh.freigabeCode)
      : roh.reference != null
      ? String(roh.reference)
      : null,
    nutzlast: entferneKartendaten(roh) as Record<string, unknown>,
  };
}

/** Wählt den Adapter. Unbekannte Hersteller werden abgewiesen, nicht geraten. */
export function normalisiere(
  hersteller: string,
  roh: Record<string, unknown>,
): Terminalereignis | null {
  switch (hersteller) {
    case "ccv":
      return ausCcv(roh);
    default:
      return null;
  }
}

/**
 * HMAC-SHA256 über den Rohtext, zeitkonstant verglichen.
 *
 * Der Zeitstempel gehört mit in die Signatur: Ohne ihn lässt sich eine
 * mitgeschnittene Nachricht beliebig oft erneut senden. Der Idempotenz-
 * schlüssel fängt das zwar auch ab, aber erst in der Datenbank — die
 * Signaturprüfung ist die günstigere und frühere Stelle.
 */
export async function signaturGueltig(
  geheimnis: string,
  zeitstempel: string,
  rohtext: string,
  signatur: string,
  maxAlterSekunden = 300,
): Promise<boolean> {
  if (!signatur || !zeitstempel) return false;

  const t = Number(zeitstempel);
  if (!Number.isFinite(t)) return false;
  const alter = Math.abs(Date.now() / 1000 - t);
  if (alter > maxAlterSekunden) return false;

  const schluessel = await crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(geheimnis),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"],
  );
  const roh = await crypto.subtle.sign(
    "HMAC",
    schluessel,
    new TextEncoder().encode(`${zeitstempel}.${rohtext}`),
  );
  const erwartet = Array.from(new Uint8Array(roh))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");

  return zeitkonstantGleich(erwartet, signatur.trim().toLowerCase());
}

/** Vergleich ohne frühen Abbruch — sonst verrät die Laufzeit die Signatur. */
export function zeitkonstantGleich(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  let unterschied = 0;
  for (let i = 0; i < a.length; i++) {
    unterschied |= a.charCodeAt(i) ^ b.charCodeAt(i);
  }
  return unterschied === 0;
}
