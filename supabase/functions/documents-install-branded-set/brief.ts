import { PDFDocument, rgb } from "https://esm.sh/pdf-lib@1.17.1";
import { Ctx, INK, GOLD, MUTED, DARK_BG } from "./helpers.ts";

export async function buildBriefvorlagePdf(ctx: Ctx, heroBytes: Uint8Array | null): Promise<Uint8Array> {
  const page = ctx.pdf.addPage([595, 842]);
  // Header-Streifen im Ink-Dunkel
  const headerH = 130;
  page.drawRectangle({
    x: 0, y: 842 - headerH, width: 595, height: headerH,
    color: DARK_BG,
  });
  // Titel links auf dunklem Ground
  page.drawText("Bördesnack24 GbR", {
    x: 40, y: 842 - 55, size: 22, font: ctx.bold, color: GOLD,
  });
  page.drawText("Immer da, wenn der Hunger kommt.", {
    x: 40, y: 842 - 80, size: 11, font: ctx.italic, color: rgb(0.97, 0.94, 0.85),
  });
  // Hero-Bild oben rechts
  if (heroBytes) {
    try {
      const img = await ctx.pdf.embedJpg(heroBytes);
      const maxW = 190, maxH = headerH - 20;
      const scale = Math.min(maxW / img.width, maxH / img.height, 1);
      const w = img.width * scale, h = img.height * scale;
      page.drawImage(img, { x: 595 - w - 30, y: 842 - h - 10, width: w, height: h });
    } catch (_) { /* image ignore */ }
  }
  // Absenderzeile unter dem Header (kleine graue Linie)
  page.drawText("Bördesnack24 GbR · Sülldorfer Str. 3A · 39171 Sülzetal", {
    x: 40, y: 842 - headerH - 20, size: 8, font: ctx.font, color: MUTED,
  });

  // Anschriftenfeld links (DIN 5008)
  let y = 842 - headerH - 55;
  const addrBlock = [
    "[Empfänger-Firma]",
    "[Straße Hausnummer]",
    "[PLZ Ort]",
  ];
  for (const line of addrBlock) {
    page.drawText(line, { x: 40, y, size: 11, font: ctx.font, color: INK });
    y -= 14;
  }

  // Kontaktblock rechts
  let yR = 842 - headerH - 55;
  const contact: Array<[string, string]> = [
    ["Adresse", "Sülldorfer Str. 3A · 39171 Sülzetal"],
    ["Telefon", "0157 30065762"],
    ["", "0151 21076771"],
    ["E-Mail", "Boerdesnack24@gmail.com"],
  ];
  for (const [label, txt] of contact) {
    page.drawText(label, { x: 355, y: yR, size: 8, font: ctx.bold, color: GOLD });
    page.drawText(txt, { x: 395, y: yR, size: 9, font: ctx.font, color: INK });
    yR -= 12;
  }

  // Ort + Datum + Betreff-Zeile
  y -= 30;
  page.drawText("Sülzetal, den [TT.MM.JJJJ]", {
    x: 40, y, size: 10, font: ctx.font, color: INK,
  });
  y -= 24;
  page.drawText("Betreff: [Kurzbeschreibung]", {
    x: 40, y, size: 12, font: ctx.bold, color: INK,
  });
  y -= 20;
  page.drawText("Sehr geehrte Damen und Herren,", {
    x: 40, y, size: 11, font: ctx.font, color: INK,
  });
  y -= 22;
  // Text-Platzhalter mit Linien
  const bodyLines = 18;
  for (let i = 0; i < bodyLines; i++) {
    page.drawLine({
      start: { x: 40, y }, end: { x: 555, y },
      thickness: 0.3, color: rgb(0.85, 0.85, 0.82),
    });
    y -= 20;
  }

  // Grußformel + Unterschriftszeile
  y -= 4;
  page.drawText("Mit freundlichen Grüßen", {
    x: 40, y, size: 11, font: ctx.font, color: INK,
  });
  y -= 40;
  page.drawLine({
    start: { x: 40, y }, end: { x: 240, y }, thickness: 0.6, color: INK,
  });
  page.drawLine({
    start: { x: 320, y }, end: { x: 520, y }, thickness: 0.6, color: INK,
  });
  page.drawText("Pia Blume", {
    x: 40, y: y - 12, size: 10, font: ctx.bold, color: INK,
  });
  page.drawText("Philipp Blume", {
    x: 320, y: y - 12, size: 10, font: ctx.bold, color: INK,
  });

  // Fußzeile
  const footerY = 90;
  page.drawLine({ start: { x: 40, y: footerY + 60 }, end: { x: 555, y: footerY + 60 }, thickness: 0.3, color: MUTED });
  const footBold = ctx.bold;
  const footFont = ctx.font;
  const col1 = 40, col2 = 210, col3 = 400;
  page.drawText("Bördesnack24 GbR", { x: col1, y: footerY + 45, size: 8, font: footBold, color: INK });
  page.drawText("Sülldorfer Str. 3A", { x: col1, y: footerY + 33, size: 8, font: footFont, color: INK });
  page.drawText("39171 Sülzetal", { x: col1, y: footerY + 21, size: 8, font: footFont, color: INK });
  page.drawText("Telefon 0157 30065762", { x: col2, y: footerY + 45, size: 8, font: footFont, color: INK });
  page.drawText("             0151 21076771", { x: col2, y: footerY + 33, size: 8, font: footFont, color: INK });
  page.drawText("E-Mail   Boerdesnack24@gmail.com", { x: col2, y: footerY + 21, size: 8, font: footFont, color: INK });
  page.drawText("Steuernummer  102/178/01635", { x: col2, y: footerY + 9, size: 8, font: footFont, color: INK });
  page.drawText("Fyrst Complete", { x: col3, y: footerY + 45, size: 8, font: footBold, color: INK });
  page.drawText("IBAN DE94 1307 0405 0081 3782 00", { x: col3, y: footerY + 33, size: 8, font: footFont, color: INK });
  page.drawText("BIC DEUTDEBBP35", { x: col3, y: footerY + 21, size: 8, font: footFont, color: INK });
  page.drawText("USt-IdNr. DE 458804058", { x: col3, y: footerY + 9, size: 8, font: footFont, color: INK });

  return await ctx.pdf.save();
}

