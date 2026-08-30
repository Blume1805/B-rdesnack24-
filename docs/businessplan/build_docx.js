const fs = require("fs");
const {
  Document, Packer, Paragraph, TextRun, HeadingLevel, AlignmentType,
  Table, TableRow, TableCell, WidthType, BorderStyle, ShadingType,
  ImageRun, TableOfContents, PageBreak, Header, Footer, PageNumber,
  LevelFormat, convertInchesToTwip, VerticalAlign, TableLayoutType,
} = require("docx");

const daten = JSON.parse(fs.readFileSync("businessplan_zahlen.json", "utf8"));
const datenPess = JSON.parse(fs.readFileSync("businessplan_zahlen_pessimistisch.json", "utf8"));
const datenOpt = JSON.parse(fs.readFileSync("businessplan_zahlen_optimistisch.json", "utf8"));

// Silbentrennung fuer Tabellenzellen (Vorgabe des Auftraggebers, 30.08.2026:
// ordentliche Trennung, kein einzelnes Zeichen auf einer neuen Zeile).
// docx-js' Document-Option "hyphenation: { autoHyphenation: true }" wurde
// geprueft, erzeugt aber eine laut OOXML-Schema ungueltige settings.xml
// (w:autoHyphenation an falscher Position -- validate.py schlaegt fehl,
// Word wuerde beim Oeffnen eine Reparatur anbieten). Stattdessen dieselbe
// Technik wie im PDF: weiche Trennzeichen (U+00AD) direkt im Zellentext,
// per pyphen berechnet (ruft python3 -- in dieser Umgebung bereits als
// Abhaengigkeit vorhanden -- statt eine zweite Silbentrennung in JS zu
// pflegen).
const { execFileSync } = require("child_process");
function trenn(strings) {
  const out = execFileSync("python3", ["-c", `
import sys, json, pyphen
dic = pyphen.Pyphen(lang="de_DE")
data = json.loads(sys.argv[1])
def h(s):
    return " ".join(dic.inserted(w, hyphen="\\u00ad") for w in str(s).split(" "))
print(json.dumps([h(s) for s in data]))
`, JSON.stringify(strings)], { encoding: "utf8", maxBuffer: 10 * 1024 * 1024 });
  return JSON.parse(out);
}
function trennZeilen(zeilen) {
  const flach = trenn(zeilen.flat());
  let i = 0;
  return zeilen.map((zeile) => zeile.map(() => flach[i++]));
}

const de0 = (n) => Math.round(n).toLocaleString("de-DE");
const umsatz2027 = `${de0(daten[0].summe_erloese)} €`;
const umsatz2036 = `${de0(daten[daten.length - 1].summe_erloese)} €`;
const kumEbit = daten.reduce((s, r) => s + r.ebit, 0);
const kumPess = datenPess.reduce((s, r) => s + r.ebit, 0);
const kumOpt = datenOpt.reduce((s, r) => s + r.ebit, 0);

function negativeInfo(szenarioDaten) {
  const jahre = szenarioDaten.filter((r) => r.ebit < 0).map((r) => r.jahr);
  if (!jahre.length) return { jahre: [], betrag: "" };
  const erster = szenarioDaten.find((r) => r.ebit < 0).ebit;
  return { jahre, betrag: `${de0(erster)} €`.replace("-", "−") };
}
const negPess = negativeInfo(datenPess);
const negOpt = negativeInfo(datenOpt);
const jahreTextPess = negPess.jahre.join(", ");

// ---------------------------------------------------------------------
// Marke
// ---------------------------------------------------------------------
const GOLD = "F3BE21";
const GOLD_DUNKEL = "8A6E00";
const SCHWARZ = "000000";
const GRAU = "595959";
const HELLGRAU = "D9D9D9";
const FONT_TEXT = "Hanken Grotesk";
const FONT_DISPLAY = "Bricolage Grotesque";

const de = (n) => Math.round(n).toLocaleString("de-DE");

// ---------------------------------------------------------------------
// Kleine Bausteine
// ---------------------------------------------------------------------
function bold(text, opts = {}) {
  // **wort** -> fett; Rest normal. Gibt eine Liste von TextRun zurueck.
  const teile = text.split(/(\*\*.+?\*\*)/g).filter((t) => t.length);
  return teile.map((t) => {
    const istFett = t.startsWith("**") && t.endsWith("**");
    const inhalt = istFett ? t.slice(2, -2) : t;
    return new TextRun({ text: inhalt, bold: istFett, font: FONT_TEXT, size: 21, ...opts });
  });
}

function hook(text) {
  return new Paragraph({ children: bold(text), spacing: { after: 160 } });
}

function ueberschrift(titel, ebene = 1, introText = null) {
  const stil = ebene === 1 ? HeadingLevel.HEADING_1 : HeadingLevel.HEADING_2;
  const abs = [
    new Paragraph({
      heading: stil,
      keepNext: true,
      spacing: { before: 320, after: 40 },
      border: { bottom: { style: BorderStyle.SINGLE, size: ebene === 1 ? 10 : 6, color: GOLD, space: 4 } },
      children: [new TextRun({ text: titel, bold: true, font: FONT_DISPLAY, color: SCHWARZ, size: ebene === 1 ? 30 : 25 })],
    }),
  ];
  if (introText) {
    abs.push(new Paragraph({ keepNext: true, spacing: { after: 160 }, children: bold(introText) }));
  }
  return abs;
}

function hinweis(text) {
  return new Paragraph({
    spacing: { after: 160 },
    children: [new TextRun({ text, italics: true, color: GRAU, font: FONT_TEXT, size: 18 })],
  });
}

function kennzahlenReihe(werte) {
  const spalten = werte.map(([zahl, label], i) => new TableCell({
    width: { size: Math.floor(9000 / werte.length), type: WidthType.DXA },
    borders: {
      top: { style: BorderStyle.NONE }, bottom: { style: BorderStyle.NONE },
      left: i === 0 ? { style: BorderStyle.NONE } : { style: BorderStyle.SINGLE, size: 4, color: HELLGRAU },
      right: { style: BorderStyle.NONE },
    },
    verticalAlign: VerticalAlign.CENTER,
    children: [
      new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 20 },
        children: [new TextRun({ text: zahl, bold: true, color: GOLD_DUNKEL, font: FONT_DISPLAY, size: 26 })] }),
      new Paragraph({ alignment: AlignmentType.CENTER,
        children: [new TextRun({ text: label, color: GRAU, font: FONT_TEXT, size: 15 })] }),
    ],
  }));
  return new Table({
    width: { size: 9000, type: WidthType.DXA },
    layout: TableLayoutType.FIXED,
    rows: [new TableRow({ children: spalten })],
    margins: { top: 100, bottom: 100 },
  });
}

function spacer(after = 160) {
  return new Paragraph({ spacing: { after } });
}

const { imageSize } = require("image-size");

function bild(pfad, breitePx, unterschrift = null) {
  const buf = fs.readFileSync(pfad);
  const dim = imageSize(buf);
  const hoehePx = Math.round(breitePx * (dim.height / dim.width));
  const kinder = [
    new Paragraph({
      alignment: AlignmentType.CENTER,
      spacing: { before: 120, after: unterschrift ? 40 : 160 },
      children: [new ImageRun({ data: buf, type: "png", transformation: { width: breitePx, height: hoehePx } })],
    }),
  ];
  if (unterschrift) {
    kinder.push(new Paragraph({
      alignment: AlignmentType.CENTER, spacing: { after: 200 },
      children: [new TextRun({ text: unterschrift, italics: true, color: GRAU, font: FONT_TEXT, size: 16 })],
    }));
  }
  return kinder;
}

function zelle(text, { kopf = false, rechts = false, breite = null } = {}) {
  return new TableCell({
    width: breite ? { size: breite, type: WidthType.DXA } : undefined,
    shading: kopf ? { type: ShadingType.CLEAR, fill: SCHWARZ } : undefined,
    verticalAlign: VerticalAlign.CENTER,
    margins: { top: 60, bottom: 60, left: 100, right: 100 },
    children: [new Paragraph({
      alignment: rechts ? AlignmentType.RIGHT : AlignmentType.LEFT,
      children: [new TextRun({ text: String(text), font: FONT_TEXT, size: 16, bold: kopf, color: kopf ? "FFFFFF" : SCHWARZ })],
    })],
  });
}

// cantSplit auf jeder Zeile: verhindert, dass Word eine einzelne Zeile mitten
// im Text ueber zwei Seiten bricht (Vorgabe des Auftraggebers, 30.08.2026:
// Tabellen laufen nie ueber mehrere Seiten). Wichtig ehrlich benannt: das ist
// die naechstliegende OOXML-Entsprechung, keine exakte Parität zur PDF-
// Fassung -- Word kennt kein Attribut, das eine GANZE Tabelle geschlossen auf
// eine Seite zwingt (die PDF-Fassung kann das, weil reportlab die Seiten beim
// Erzeugen fest layoutet; Word layoutet dynamisch beim Oeffnen). cantSplit
// verhindert nur, dass eine Zeile selbst mitten durchgeschnitten wird.
function tabelle(kopfzeilen, zeilen, breiten, rechtsSpalten = []) {
  const rows = [];
  rows.push(new TableRow({
    tableHeader: true,
    cantSplit: true,
    children: kopfzeilen.map((k, i) => zelle(k, { kopf: true, breite: breiten[i] })),
  }));
  zeilen.forEach((z) => {
    rows.push(new TableRow({
      cantSplit: true,
      children: z.map((v, i) => zelle(v, { rechts: rechtsSpalten.includes(i), breite: breiten[i] })),
    }));
  });
  return new Table({
    width: { size: breiten.reduce((a, b) => a + b, 0), type: WidthType.DXA },
    layout: TableLayoutType.FIXED,
    rows,
    borders: {
      top: { style: BorderStyle.SINGLE, size: 4, color: HELLGRAU },
      bottom: { style: BorderStyle.SINGLE, size: 4, color: HELLGRAU },
      left: { style: BorderStyle.SINGLE, size: 4, color: HELLGRAU },
      right: { style: BorderStyle.SINGLE, size: 4, color: HELLGRAU },
      insideHorizontal: { style: BorderStyle.SINGLE, size: 4, color: HELLGRAU },
      insideVertical: { style: BorderStyle.SINGLE, size: 4, color: HELLGRAU },
    },
  });
}

// ---------------------------------------------------------------------
// Inhalt
// ---------------------------------------------------------------------
const children = [];

// Titelblock
children.push(new Paragraph({
  alignment: AlignmentType.RIGHT, spacing: { after: 40 },
  children: [new TextRun({ text: "Bördesnack24 GbR", bold: true, font: FONT_TEXT, size: 18 })],
}));
children.push(new Paragraph({
  alignment: AlignmentType.RIGHT, spacing: { after: 240 },
  children: [new TextRun({ text: "Sülldorfer Str. 3A · 39171 Sülzetal · Boerdesnack24@gmail.com", color: GRAU, font: FONT_TEXT, size: 15 })],
}));
children.push(new Paragraph({
  spacing: { after: 80 },
  border: { bottom: { style: BorderStyle.SINGLE, size: 12, color: GOLD, space: 6 } },
  children: [new TextRun({ text: "Businessplan Bördesnack24 GbR", bold: true, font: FONT_DISPLAY, size: 40 })],
}));
children.push(new Paragraph({
  spacing: { after: 400 },
  children: [new TextRun({ text: "Planungszeitraum 2027–2036 · Stand 30.08.2026 · alle Annahmen einzeln ausgewiesen und mit Quelle versehen, wo eine externe Quelle vorliegt.", italics: true, color: GRAU, font: FONT_TEXT, size: 18 })],
}));

// Inhaltsverzeichnis (Word-Feld -- aktualisiert sich beim Oeffnen/F9,
// bleibt also korrekt, auch wenn punktuelle Aenderungen den Umfang
// veraendern)
children.push(new Paragraph({
  heading: HeadingLevel.HEADING_1, keepNext: true, spacing: { before: 0, after: 120 },
  children: [new TextRun({ text: "Inhalt", bold: true, font: FONT_DISPLAY, size: 30 })],
}));
children.push(new TableOfContents("Inhaltsverzeichnis", { hyperlink: true, headingStyleRange: "1-2" }));
children.push(new Paragraph({ children: [new PageBreak()] }));

// Kennzahlen + Hook oben
children.push(hook("**Ein Automat verkauft. Vier Quellen verdienen.** Snacks und Getränke rund um die Uhr, App-Abo, eine Werbeplattform für regionale Unternehmen und Sponsoring, plus **5 % jedes Warenverkaufs** für eine regionale gemeinnützige Organisation."));
children.push(spacer(120));
children.push(kennzahlenReihe([["62", "Produkte im Sortiment"], ["4", "Erlösquellen"], ["11", "Automaten bis 2036"], ["5 %", "Spendenquote"]]));
children.push(spacer(240));
children.push(...bild("iconstrip_trim.png", 600));

// 1) Zusammenfassung
children.push(...ueberschrift("1. Zusammenfassung", 1, "**Bördesnack24 hat heute 0 dokumentierte Verkäufe.** Jede Zahl in diesem Plan ist deshalb eine Annahme, keine Messung, belegt mit der eigenen Preisliste oder einer externen Quelle."));
children.push(hook("**Start: 3 Automaten** (2 in 2027, 1 in 2028), **4. bis 2029, danach +1 pro Jahr.** Bahnhof Osterweddingen, Freibad Langenweddingen, Sporthalle Langenweddingen."));
children.push(spacer(120));
children.push(kennzahlenReihe([[umsatz2027, "Umsatz 2027"], [umsatz2036, "Umsatz 2036"], [`${de0(kumEbit)} €`, "EBIT, 10 Jahre kumuliert"], [`${de0(kumPess)} €`, "EBIT pessimistisch, 10 Jahre"]]));
children.push(spacer(240));
children.push(hook(negPess.jahre.length
  ? `**Im Planungsszenario ist das Betriebsergebnis in jedem der zehn Jahre positiv.** Im pessimistischen Szenario (Abschnitt 6) ist einzig ${jahreTextPess} leicht negativ (${negPess.betrag}), alle übrigen Jahre bleiben positiv. Im optimistischen Szenario bleibt es durchgehend positiv, kumuliert ${de0(kumOpt)} €.`
  : "**Das Betriebsergebnis bleibt in allen drei Szenarien in jedem einzelnen der zehn Planjahre positiv** — pessimistisch, Planungsszenario und optimistisch (Abschnitt 6)."));

// 2) Geschäftsmodell
children.push(...ueberschrift("2. Geschäftsmodell und Standort", 1, "**Kein Nahversorger hat nachts oder sonntags offen.** Genau diese Lücke füllt Bördesnack24, App-Abo bindet zurück statt jeden Einkauf als Einzelereignis zu behandeln."));
children.push(spacer(120));
children.push(kennzahlenReihe([["170.984", "Einwohner Bördekreis"], ["8.841", "davon Sülzetal"], ["24/7", "Öffnungszeit"]]));
children.push(spacer(120));
children.push(hinweis("Öffentliche Vergleichszahlen: Bördekreis, Statistisches Landesamt Sachsen-Anhalt (Stand 31.12.2025); Sülzetal, Gemeinde Sülzetal / citypopulation.de (Stand 01.01.2026)."));

children.push(...ueberschrift("Standort- und Ausbauplan", 2, "**Vorgabe des Auftraggebers**, wörtlich umgesetzt: 3 Automaten zum Start, 4. bis 2029, danach +1 pro Jahr. **Die Zuordnung der ersten drei Standorte zu den Jahren ist ein Vorschlag dieses Plans**, keine Vorgabe."));

const standortZeilen = [
  ["2027", "Heißgetränkeautomat", "Bahnhof Osterweddingen", "Pendlerfrequenz, kein Kühlbedarf"],
  ["2027", "Mixautomat", "Bahnhof Osterweddingen", "Snacks + gekühlte Getränke"],
  ["2028", "Kombiautomat", "Freibad Langenweddingen", "stark saisonal, Mai–September"],
  ["2029", "Kombiautomat", "Sporthalle Langenweddingen (Handball)", "Trainings- und Spielbetrieb"],
];
for (let j = 2030; j <= 2036; j++) standortZeilen.push([String(j), "Kombiautomat (Vorschlag)", "Standort noch offen", "+1 Automat/Jahr laut Vorgabe"]);
children.push(tabelle(trenn(["Jahr", "Neuer Automat", "Standort", "Besonderheit"]), trennZeilen(standortZeilen), [1000, 2200, 3000, 2800]));
children.push(spacer(200));
children.push(...bild("automatennetz_linie.png", 600, "Abb. 1: 3 Automaten zum Start, +1 pro Jahr ab 2030."));

// 3) Erlösquellen
children.push(...ueberschrift("3. Die vier Erlösquellen", 1));
children.push(...bild("zusammenspiel_pdf.png", 600));

// 4) Annahmen
children.push(...ueberschrift("4. Annahmen dieses Plans", 1, "**Planungsannahmen, keine gemessenen Werte.** Mit Quelle, wo eine externe existiert, sonst eigene, im Text begründete Schätzung."));
const annahmenZeilen = [
  ["Bruttoumsatz/Automat/Monat", "500–1.400 €, je Standort", "GTR Automaten/Maschinenpartner: 300–1.500 €/Monat typisch"],
  ["Wareneinsatz Snacks/Getränke", "34,0 % vom Nettoumsatz", "eigene Preisliste"],
  ["Wareneinsatz Heißgetränke", "16,5 % vom Nettoumsatz", "eigene Preisliste, Ø 6 Positionen"],
  ["Anschaffung je Automat", "10.000 € netto", "Angabe des Auftraggebers"],
  ["Abschreibungsdauer", "6 Jahre linear", "Angabe des Auftraggebers"],
  ["Nayax-Grundgebühr", "14 €/Monat je Terminal", "Nayax-Shop FAQ"],
  ["Kartengebühr", "3 % Kartenumsatz, 85 % Anteil", "Nayax Onyx 2,3–4 %"],
  ["Strom/Wartung/Versicherung", "40/30 €/Monat, 60 €/Jahr", ""],
  ["Standortprovision", "5 % vom Bruttoumsatz", "branchenüblich"],
  ["Zahlende App-Abonnenten", "40 (2027) bis 720 (2036)", "an Netzwachstum gekoppelt"],
  ["Ø Erlös je Abonnent", "0,90 €/Monat", "60 % Jahres-, 40 % Monatsabo"],
  ["Auslastung Werbeflächen", "0 % (27/28) bis 70 % (36)", "Obergrenze wie Advertising-Dok."],
  ["Digitale Werbekunden", "0 (27/28) bis 10 (36), Ø 60 €", "Paketpreise real"],
  ["Personal", "1 Minijob je 6 Automaten, 603 €", "Minijob-Grenze 2026"],
];
children.push(tabelle(trenn(["Größe", "Annahme", "Quelle / Begründung"]), trennZeilen(annahmenZeilen), [2600, 2400, 4000]));

// 5) Finanzplan
children.push(...ueberschrift("5. Finanzplan, Jahr 1 bis 10", 1, "**Das Planungsszenario, Jahr für Jahr.** Automatenzahl, Erlöse, Kosten ohne Abschreibung und das Betriebsergebnis."));
const fpZeilen = daten.map((r) => [String(r.jahr), String(r.automaten), `${de(r.summe_erloese)} €`, `${de(r.summe_kosten_ohne_afa)} €`, `${de(r.afa_jahr)} €`, `${de(r.ebit)} €`]);
children.push(tabelle(trenn(["Jahr", "Automaten", "Erlöse gesamt", "Kosten (o. AfA)", "Abschreibung", "EBIT"]), fpZeilen, [1000, 1400, 1700, 1700, 1600, 1600], [1, 2, 3, 4, 5]));
children.push(spacer(200));
children.push(...bild("umsatz_balken.png", 600, "Abb. 2: Summe aller vier Erlösquellen nach Abzug des Spendenanteils."));
children.push(...bild("erloesmix.png", 600, "Abb. 3: Anteil der vier Geschäftsbereiche am Erlös über den Planungszeitraum."));

function erlösmixSummen(d) {
  const produkt = d.reduce((s, r) => s + (r.produkt_netto - r.spende), 0);
  const app = d.reduce((s, r) => s + r.app_erlös, 0);
  const werbeflaeche = d.reduce((s, r) => s + r.werbeflaechen_erlös, 0);
  const sponsoring = d.reduce((s, r) => s + r.sponsoring_erlös, 0);
  return [produkt, app, werbeflaeche, sponsoring];
}
const mixPess = erlösmixSummen(datenPess);
const mixNormal = erlösmixSummen(daten);
const mixOpt = erlösmixSummen(datenOpt);
children.push(hook("**Der Erlösmix verschiebt sich mit dem Szenario — aber nur zum Teil.** Nur der Automatenumsatz (Snack-/Getränkeverkauf) skaliert mit dem Bruttoumsatz je Automat; App-Abo, Werbeflächen und Sponsoring hängen an eigenen Planzahlen (Abonnenten, Auslastung, Werbekunden) und bleiben in allen drei Szenarien unverändert."));
const mixLabels = ["Snack-/Getränkeverkauf (netto, nach Spende)", "App-Abo", "Werbeflächen am Automat", "Digitale Werbe-/Sponsoringpakete"];
const mixZeilen = mixLabels.map((label, i) => [label, `${de(mixPess[i])} €`, `${de(mixNormal[i])} €`, `${de(mixOpt[i])} €`]);
mixZeilen.push(["Summe, 10 Jahre", `${de(mixPess.reduce((a, b) => a + b, 0))} €`, `${de(mixNormal.reduce((a, b) => a + b, 0))} €`, `${de(mixOpt.reduce((a, b) => a + b, 0))} €`]);
children.push(tabelle(trenn(["Geschäftsbereich", "Pessimistisch (−40 %)", "Planungsszenario", "Optimistisch (+40 %)"]), trennZeilen(mixZeilen), [3000, 2200, 2200, 2200], [1, 2, 3]));
children.push(spacer(200));
children.push(...bild("erloesmix_szenario.png", 600, "Abb. 4: Kumulierter Erlös je Geschäftsbereich, 10 Jahre, in allen drei Szenarien."));

children.push(...bild("ebit_balken.png", 600, "Abb. 5: EBIT vor Steuern und Gesellschafterentnahmen; Delle 2031 durch die erste Teilzeitkraft ab dem 6. Automaten."));

const kumSpende = daten.reduce((s, r) => s + r.spende, 0);
const kumInvest = daten.reduce((s, r) => s + r.investition_jahr, 0);
children.push(...ueberschrift("Spenden und Investitionen im Überblick", 2, "**Drei Zahlen, die den Plan zusammenfassen:**"));
children.push(kennzahlenReihe([[`${de(kumSpende)} €`, "Spendentopf, 10 Jahre"], [`${de(kumInvest)} €`, "Investition, 11 Automaten"], [`${de(kumEbit)} €`, "EBIT kumuliert, 10 Jahre"]]));

// 6) Szenariovergleich
children.push(...ueberschrift("6. Szenariovergleich", 1, "**Was, wenn der Umsatz je Automat abweicht?** Die unsicherste Annahme in diesem Plan, in drei Szenarien durchgerechnet: pessimistisch (−40 %), Planungsszenario (Basis) und optimistisch (+40 %), alle übrigen Annahmen unverändert."));
const sensZeilen = daten.map((r, i) => [
  String(r.jahr),
  `${de(datenPess[i].ebit)} €`.replace("-", "−"),
  `${de(r.ebit)} €`.replace("-", "−"),
  `${de(datenOpt[i].ebit)} €`.replace("-", "−"),
]);
children.push(tabelle(trenn(["Jahr", "EBIT pessimistisch (−40 %)", "EBIT Planungsszenario", "EBIT optimistisch (+40 %)"]), sensZeilen, [1000, 2600, 2600, 2600], [1, 2, 3]));
children.push(spacer(200));
children.push(...bild("szenariovergleich.png", 600, "Abb. 6: EBIT je Jahr in allen drei Szenarien; die drei zusätzlichen Erlösquellen hängen nicht am Automatenumsatz, das dämpft den Ausschlag nach unten und oben."));
children.push(hook(negPess.jahre.length
  ? `**Kumuliert reicht das EBIT von ${de(kumPess)} € (pessimistisch) über ${de(kumEbit)} EUR (Planungsszenario) bis ${de(kumOpt)} € (optimistisch).** Nur im pessimistischen Szenario ist ${jahreTextPess} leicht negativ (${negPess.betrag}), alle übrigen Jahre bleiben in allen drei Szenarien positiv.`
  : `**Kumuliert reicht das EBIT von ${de(kumPess)} € (pessimistisch) über ${de(kumEbit)} EUR (Planungsszenario) bis ${de(kumOpt)} € (optimistisch), bleibt aber in allen drei Szenarien in jedem einzelnen Jahr positiv.** Die drei zusätzlichen Erlösquellen hängen nicht am Automatenumsatz, das dämpft den Ausschlag nach unten und oben.`));

// ---------------------------------------------------------------------
// Dokument zusammenbauen
// ---------------------------------------------------------------------
const doc = new Document({
  creator: "Bördesnack24 GbR",
  title: "Businessplan Bördesnack24 GbR",
  styles: {
    default: {
      document: { run: { font: FONT_TEXT, size: 21, color: SCHWARZ, language: { value: "de-DE" } } },
    },
  },
  sections: [{
    properties: {
      page: {
        margin: { top: convertInchesToTwip(0.9), bottom: convertInchesToTwip(0.9), left: convertInchesToTwip(1.0), right: convertInchesToTwip(1.0) },
      },
    },
    headers: {
      default: new Header({ children: [new Paragraph({ alignment: AlignmentType.RIGHT,
        children: [new TextRun({ text: "Businessplan Bördesnack24 GbR", color: GRAU, size: 15, font: FONT_TEXT })] })] }),
    },
    footers: {
      default: new Footer({ children: [new Paragraph({ alignment: AlignmentType.RIGHT,
        children: [new TextRun({ text: "Seite ", color: GRAU, size: 15, font: FONT_TEXT }),
                   new TextRun({ children: [PageNumber.CURRENT], color: GRAU, size: 15, font: FONT_TEXT }),
                   new TextRun({ text: " von ", color: GRAU, size: 15, font: FONT_TEXT }),
                   new TextRun({ children: [PageNumber.TOTAL_PAGES], color: GRAU, size: 15, font: FONT_TEXT })] })] }),
    },
    children,
  }],
});

Packer.toBuffer(doc).then((buf) => {
  fs.writeFileSync("Boerdesnack24_Businessplan.docx", buf);
  console.log("gespeichert: Boerdesnack24_Businessplan.docx");
});
