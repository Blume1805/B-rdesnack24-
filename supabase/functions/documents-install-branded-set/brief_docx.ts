// Editierbare DIN-5008-Briefvorlage als OpenXML-Word-Dokument.
// Wir bauen die minimal notwendigen Bestandteile eines .docx-Files (ZIP)
// direkt zusammen — kein externes Library-Roulette, kein Deno-Kompat-Problem.
import JSZip from "https://esm.sh/jszip@3.10.1";

// pdf-lib-basierte Farben werden hier nicht benötigt; DOCX nimmt Hex-Werte.
const INK_HEX = "14110E";
const GOLD_HEX = "FDC102";
const MUTED_HEX = "6F6A5E";
const CREAM_HEX = "FAF5EB";

function xmlEsc(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

// Ein `w:p`-Absatz mit einem Textrun. Farbe/Fettung/Größe je Aufruf.
function para(
  text: string,
  opts?: {
    bold?: boolean;
    italic?: boolean;
    size?: number; // half-points, 22 = 11pt
    color?: string; // hex ohne #
    align?: "left" | "right" | "center";
    spaceBefore?: number; // 20ths of a point
    spaceAfter?: number;
    shading?: string; // hex background
  },
): string {
  const runProps: string[] = [];
  if (opts?.bold) runProps.push(`<w:b/>`);
  if (opts?.italic) runProps.push(`<w:i/>`);
  if (opts?.color) runProps.push(`<w:color w:val="${opts.color}"/>`);
  if (opts?.size) runProps.push(`<w:sz w:val="${opts.size}"/>`);
  const rPr = runProps.length ? `<w:rPr>${runProps.join("")}</w:rPr>` : "";
  const pProps: string[] = [];
  if (opts?.align) pProps.push(`<w:jc w:val="${opts.align}"/>`);
  if (opts?.spaceBefore !== undefined || opts?.spaceAfter !== undefined) {
    pProps.push(`<w:spacing${opts?.spaceBefore !== undefined ? ` w:before="${opts.spaceBefore}"` : ""}${opts?.spaceAfter !== undefined ? ` w:after="${opts.spaceAfter}"` : ""}/>`);
  }
  if (opts?.shading) pProps.push(`<w:shd w:val="clear" w:color="auto" w:fill="${opts.shading}"/>`);
  const pPr = pProps.length ? `<w:pPr>${pProps.join("")}</w:pPr>` : "";
  return `<w:p>${pPr}<w:r>${rPr}<w:t xml:space="preserve">${xmlEsc(text)}</w:t></w:r></w:p>`;
}

function heading(text: string, size = 44 /* 22pt */): string {
  return para(text, { bold: true, size, color: GOLD_HEX, shading: INK_HEX });
}

function subtitle(text: string): string {
  return para(text, { italic: true, size: 22, color: CREAM_HEX, shading: INK_HEX });
}

// „Leere Zeile" (Absatz ohne Inhalt, definierter Höhe).
function blank(size = 22): string {
  return `<w:p><w:pPr><w:spacing w:before="0" w:after="0"/></w:pPr><w:r><w:rPr><w:sz w:val="${size}"/></w:rPr><w:t xml:space="preserve"> </w:t></w:r></w:p>`;
}

// Volle Zeile in fetter Muted-Grau — dezenter Trenner.
function separator(): string {
  return `<w:p><w:pPr><w:pBdr><w:bottom w:val="single" w:sz="4" w:space="1" w:color="${MUTED_HEX}"/></w:pBdr></w:pPr></w:p>`;
}

// Zwei Signatur-Boxen nebeneinander via einfache 2-Spalten-Tabelle.
function signatureTable(): string {
  const cellPia = `
    <w:tc>
      <w:tcPr>
        <w:tcW w:w="4500" w:type="dxa"/>
        <w:shd w:val="clear" w:color="auto" w:fill="${CREAM_HEX}"/>
      </w:tcPr>
      ${para("Pia Blume", { bold: true, size: 22, color: INK_HEX })}
      ${para("[Ort, TT.MM.JJJJ]", { size: 18, color: MUTED_HEX })}
      ${para("[Unterschrift]", { size: 18, color: MUTED_HEX })}
      ${blank()}
    </w:tc>`;
  const cellPhilipp = `
    <w:tc>
      <w:tcPr>
        <w:tcW w:w="4500" w:type="dxa"/>
        <w:shd w:val="clear" w:color="auto" w:fill="${CREAM_HEX}"/>
      </w:tcPr>
      ${para("Philipp Blume", { bold: true, size: 22, color: INK_HEX })}
      ${para("[Ort, TT.MM.JJJJ]", { size: 18, color: MUTED_HEX })}
      ${para("[Unterschrift]", { size: 18, color: MUTED_HEX })}
      ${blank()}
    </w:tc>`;
  return `
    <w:tbl>
      <w:tblPr>
        <w:tblW w:w="9000" w:type="dxa"/>
        <w:tblBorders>
          <w:top w:val="single" w:sz="6" w:color="${MUTED_HEX}"/>
          <w:bottom w:val="single" w:sz="6" w:color="${MUTED_HEX}"/>
          <w:left w:val="single" w:sz="6" w:color="${MUTED_HEX}"/>
          <w:right w:val="single" w:sz="6" w:color="${MUTED_HEX}"/>
          <w:insideH w:val="single" w:sz="6" w:color="${MUTED_HEX}"/>
          <w:insideV w:val="single" w:sz="6" w:color="${MUTED_HEX}"/>
        </w:tblBorders>
      </w:tblPr>
      <w:tr>${cellPia}${cellPhilipp}</w:tr>
    </w:tbl>`;
}

// Header (Kopfzeile mit Aussteller rechts) und Footer (Fußzeile mit
// Bankverbindung, Steuernummer, USt-IdNr.).
function headerXml(): string {
  return `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<w:hdr xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main">
  ${para("Bördesnack24 GbR · Pia & Philipp Blume", { bold: true, size: 18, color: INK_HEX, align: "right" })}
  ${para("Sülldorfer Str. 3A · 39171 Sülzetal OT Osterweddingen", { size: 16, color: MUTED_HEX, align: "right" })}
  ${para(`Steuernummer 102/178/01635 · USt-IdNr. DE 458804058`, { size: 16, color: MUTED_HEX, align: "right" })}
</w:hdr>`;
}

function footerXml(): string {
  return `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<w:ftr xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main">
  <w:tbl>
    <w:tblPr>
      <w:tblW w:w="9000" w:type="dxa"/>
      <w:tblBorders>
        <w:top w:val="single" w:sz="4" w:color="${MUTED_HEX}"/>
      </w:tblBorders>
    </w:tblPr>
    <w:tr>
      <w:tc>
        <w:tcPr><w:tcW w:w="3000" w:type="dxa"/></w:tcPr>
        ${para("Bördesnack24 GbR", { bold: true, size: 14, color: INK_HEX })}
        ${para("Sülldorfer Str. 3A", { size: 14, color: INK_HEX })}
        ${para("39171 Sülzetal", { size: 14, color: INK_HEX })}
      </w:tc>
      <w:tc>
        <w:tcPr><w:tcW w:w="3000" w:type="dxa"/></w:tcPr>
        ${para("Telefon 0157 30065762", { size: 14, color: INK_HEX })}
        ${para("             0151 21076771", { size: 14, color: INK_HEX })}
        ${para("E-Mail  Boerdesnack24@gmail.com", { size: 14, color: INK_HEX })}
        ${para("Steuer-Nr. 102/178/01635", { size: 14, color: INK_HEX })}
      </w:tc>
      <w:tc>
        <w:tcPr><w:tcW w:w="3000" w:type="dxa"/></w:tcPr>
        ${para("Fyrst Complete", { bold: true, size: 14, color: INK_HEX })}
        ${para("IBAN DE94 1307 0405 0081 3782 00", { size: 14, color: INK_HEX })}
        ${para("BIC DEUTDEBBP35", { size: 14, color: INK_HEX })}
        ${para("USt-IdNr. DE 458804058", { size: 14, color: INK_HEX })}
      </w:tc>
    </w:tr>
  </w:tbl>
</w:ftr>`;
}

function documentXml(): string {
  const body = [
    heading("Bördesnack24 GbR"),
    subtitle("Immer da, wenn der Hunger kommt."),
    blank(),
    para("Bördesnack24 GbR · Sülldorfer Str. 3A · 39171 Sülzetal", {
      size: 16, color: MUTED_HEX,
    }),
    blank(),
    para("[Empfänger-Firma]", { size: 22, color: INK_HEX }),
    para("[Straße Hausnummer]", { size: 22, color: INK_HEX }),
    para("[PLZ Ort]", { size: 22, color: INK_HEX }),
    blank(),
    blank(),
    para("Sülzetal, den [TT.MM.JJJJ]", { size: 20, color: INK_HEX, align: "right" }),
    blank(),
    para("Betreff: [Kurzbeschreibung]", { bold: true, size: 24, color: INK_HEX }),
    blank(),
    para("Sehr geehrte Damen und Herren,", { size: 22, color: INK_HEX }),
    blank(),
    para("[Absatz 1 — hier den Anlass des Schreibens beschreiben.]", { size: 22, color: INK_HEX }),
    blank(),
    para("[Absatz 2 — Details, Anlagen, Rückfragen.]", { size: 22, color: INK_HEX }),
    blank(),
    para("[Absatz 3 — Handlungsaufforderung / Nächste Schritte.]", { size: 22, color: INK_HEX }),
    blank(),
    para("Mit freundlichen Grüßen", { size: 22, color: INK_HEX }),
    blank(),
    blank(),
    signatureTable(),
    blank(),
    para(
      "Hinweis: Alle Felder in eckigen Klammern durch die tatsächlichen Werte ersetzen und danach speichern.",
      { italic: true, size: 16, color: MUTED_HEX },
    ),
  ].join("\n");

  return `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<w:document xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main"
            xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <w:body>
    ${body}
    <w:sectPr>
      <w:headerReference w:type="default" r:id="rId4"/>
      <w:footerReference w:type="default" r:id="rId5"/>
      <w:pgSz w:w="11906" w:h="16838"/>
      <w:pgMar w:top="1134" w:right="1134" w:bottom="1417" w:left="1134"
               w:header="720" w:footer="720" w:gutter="0"/>
      <w:cols w:space="720"/>
    </w:sectPr>
  </w:body>
</w:document>`;
}

const CONTENT_TYPES = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">
  <Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>
  <Default Extension="xml"  ContentType="application/xml"/>
  <Override PartName="/word/document.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml"/>
  <Override PartName="/word/styles.xml"   ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.styles+xml"/>
  <Override PartName="/word/header1.xml"  ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.header+xml"/>
  <Override PartName="/word/footer1.xml"  ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.footer+xml"/>
</Types>`;

const ROOT_RELS = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="word/document.xml"/>
</Relationships>`;

const DOC_RELS = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/>
  <Relationship Id="rId4" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/header" Target="header1.xml"/>
  <Relationship Id="rId5" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/footer" Target="footer1.xml"/>
</Relationships>`;

const STYLES = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<w:styles xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main">
  <w:docDefaults>
    <w:rPrDefault>
      <w:rPr>
        <w:rFonts w:ascii="Arial" w:hAnsi="Arial" w:cs="Arial"/>
        <w:sz w:val="22"/>
      </w:rPr>
    </w:rPrDefault>
    <w:pPrDefault>
      <w:pPr><w:spacing w:after="120" w:line="288" w:lineRule="auto"/></w:pPr>
    </w:pPrDefault>
  </w:docDefaults>
</w:styles>`;

export async function buildBriefvorlageDocx(): Promise<Uint8Array> {
  const zip = new JSZip();
  zip.file("[Content_Types].xml", CONTENT_TYPES);
  zip.folder("_rels")!.file(".rels", ROOT_RELS);
  const wordFolder = zip.folder("word")!;
  wordFolder.file("document.xml", documentXml());
  wordFolder.file("styles.xml", STYLES);
  wordFolder.file("header1.xml", headerXml());
  wordFolder.file("footer1.xml", footerXml());
  wordFolder.folder("_rels")!.file("document.xml.rels", DOC_RELS);
  return await zip.generateAsync({ type: "uint8array", compression: "DEFLATE" });
}
