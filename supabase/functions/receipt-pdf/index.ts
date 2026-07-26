// ============================================================================
// Edge Function: receipt-pdf
// ----------------------------------------------------------------------------
// Digitaler Kassenbon zu einem einzelnen Kauf des angemeldeten Kunden.
// RLS des Aufrufers gilt (eigene Käufe; Gesellschafter sehen alle).
// Layout: One-Pager-Design + Skill-Typografie (Fließtext 11 pt, Leading
// 14 pt, graue Zusatzinfos 9 pt kursiv), Stammdaten-Header auf Seite 1,
// Positionstabelle mit rechtsbündigen Beträgen, USt-Ausweis 7 % / 19 %.
// ============================================================================
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.4";
import { PDFDocument, StandardFonts, rgb } from "https://esm.sh/pdf-lib@1.17.1";
import { encodeBase64 } from "https://deno.land/std@0.224.0/encoding/base64.ts";
import { jsonResponse, corsHeaders } from "../_shared/cors.ts";

const ISSUER = {
  name: "Bördesnack24 GbR (Pia & Philipp Blume)",
  street: "Sülldorfer Str. 3A",
  cityLine: "39171 Sülzetal OT Osterweddingen",
  taxNumber: "102/178/01635",
  vatId: "DE 458804058",
};

const INK = rgb(0.08, 0.07, 0.05);
const GOLD = rgb(0.99, 0.76, 0.01);
const MUTED = rgb(0.44, 0.42, 0.35);
const CREAM = rgb(0.98, 0.96, 0.92);

const eur = (n: number) =>
  `${n.toLocaleString("de-DE", { minimumFractionDigits: 2, maximumFractionDigits: 2 })} EUR`;

const PAYMENT_LABELS: Record<string, string> = {
  cash: "Barzahlung",
  card_ec: "EC-Karte",
  card_credit: "Kreditkarte",
  card_contactless: "Kontaktlos",
  other: "Andere",
};

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });
  if (req.method !== "POST") return jsonResponse({ error: "Method not allowed" }, 405);
  const authHeader = req.headers.get("Authorization");
  if (!authHeader) return jsonResponse({ error: "Missing Authorization" }, 401);

  try {
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const anonKey = Deno.env.get("SUPABASE_ANON_KEY")!;
    const caller = createClient(supabaseUrl, anonKey, {
      global: { headers: { Authorization: authHeader } },
    });

    let purchaseId = "";
    try {
      const body = await req.json();
      purchaseId = String(body.purchase_id);
      if (!/^[0-9a-f-]{36}$/i.test(purchaseId)) throw new Error("invalid");
    } catch {
      return jsonResponse({ error: "purchase_id (uuid) erforderlich" }, 400);
    }

    // Kauf laden — RLS: nur eigener Kauf bzw. Gesellschafter/Systemadmin.
    const { data: purchase, error: pErr } = await caller
      .from("purchases")
      .select("id, purchased_at, total_gross, payment_method, machine_id, customer_id")
      .eq("id", purchaseId)
      .maybeSingle();
    if (pErr || !purchase) return jsonResponse({ error: "Kauf nicht gefunden" }, 404);

    const { data: items } = await caller
      .from("purchase_items")
      .select("product_label, quantity, unit_price, product:products(name, tax_rate)")
      .eq("purchase_id", purchaseId);

    let machineLabel = "";
    if (purchase.machine_id) {
      const { data: m } = await caller
        .from("machines").select("name, code").eq("id", purchase.machine_id).maybeSingle();
      if (m) machineLabel = `${m.name ?? ""}${m.code ? ` (${m.code})` : ""}`.trim();
    }
    const { data: cust } = await caller
      .from("customers").select("customer_number").eq("id", purchase.customer_id).maybeSingle();

    // ── PDF (A4, One-Pager-Look, Skill-Typografie) ──────────────────────
    const pdf = await PDFDocument.create();
    const font = await pdf.embedFont(StandardFonts.Helvetica);
    const bold = await pdf.embedFont(StandardFonts.HelveticaBold);
    const italic = await pdf.embedFont(StandardFonts.HelveticaOblique);
    const page = pdf.addPage([595, 842]);

    // Stammdaten-Header (Seite 1) — identisch zu allen übrigen PDFs.
    page.drawRectangle({ x: 0, y: 842 - 6, width: 595, height: 6, color: GOLD });
    page.drawText("BÖRDESNACK24", { x: 40, y: 842 - 30, size: 11, font: bold, color: INK });
    page.drawText("Kassenbon", { x: 40, y: 842 - 43, size: 8, font, color: MUTED });
    const hy = 842 - 22;
    page.drawText(ISSUER.name, { x: 320, y: hy, size: 8, font: bold, color: INK });
    page.drawText(ISSUER.street, { x: 320, y: hy - 10, size: 7.5, font, color: MUTED });
    page.drawText(ISSUER.cityLine, { x: 320, y: hy - 20, size: 7.5, font, color: MUTED });
    page.drawText(`Steuernummer: ${ISSUER.taxNumber}`, { x: 320, y: hy - 30, size: 7.5, font, color: MUTED });
    page.drawText(`USt-IdNr.: ${ISSUER.vatId}`, { x: 320, y: hy - 40, size: 7.5, font, color: MUTED });
    page.drawLine({ start: { x: 40, y: 842 - 82 }, end: { x: 555, y: 842 - 82 }, thickness: 0.7, color: GOLD });

    let y = 842 - 104;
    page.drawText("Kassenbon (Digitaler Beleg)", { x: 40, y, size: 15, font: bold, color: GOLD });
    y -= 10;
    page.drawLine({ start: { x: 40, y }, end: { x: 555, y }, thickness: 1.4, color: GOLD });
    y -= 24;

    // Kopf-Daten (Fließtext 11 pt / Leading 14 pt lt. Skill).
    const purchasedAt = String(purchase.purchased_at ?? "")
      .replace("T", " ").substring(0, 16);
    const bonNo = purchaseId.substring(0, 8).toUpperCase();
    const payLabel = PAYMENT_LABELS[String(purchase.payment_method ?? "cash")] ?? "—";
    const headRows: Array<[string, string]> = [
      ["Beleg-Nr.", bonNo],
      ["Datum / Uhrzeit", `${purchasedAt} Uhr`],
      ["Automat / Standort", machineLabel || "—"],
      ["Zahlungsart", payLabel],
      ["Kundennummer", String(cust?.customer_number ?? "—")],
    ];
    for (const [k, v] of headRows) {
      page.drawText(k, { x: 40, y, size: 11, font: bold, color: INK });
      page.drawText(v, { x: 220, y, size: 11, font, color: INK });
      y -= 14;
    }
    y -= 12;

    // Positionstabelle: Ink-Kopfband + Zebra, Beträge rechtsbündig.
    const cols = [
      { label: "Position", x: 40, w: 255 },
      { label: "Menge", x: 295, w: 60, right: true },
      { label: "Einzelpreis", x: 355, w: 95, right: true },
      { label: "Summe", x: 450, w: 105, right: true },
    ];
    page.drawRectangle({ x: 40, y: y - 4, width: 515, height: 16, color: INK });
    for (const c of cols) {
      const tx = c.right
        ? c.x + c.w - 6 - bold.widthOfTextAtSize(c.label, 8.5)
        : c.x + 4;
      page.drawText(c.label, { x: tx, y, size: 8.5, font: bold, color: CREAM });
    }
    y -= 18;

    let sumGross = 0;
    let net7 = 0, net19 = 0, tax7 = 0, tax19 = 0;
    let zebra = false;
    for (const raw of (items ?? [])) {
      const it = raw as {
        product_label?: string; quantity?: number; unit_price?: number;
        product?: { name?: string; tax_rate?: number } | null;
      };
      const label = (it.product_label ?? it.product?.name ?? "Artikel").substring(0, 48);
      const qty = Number(it.quantity ?? 1);
      const unit = Number(it.unit_price ?? 0);
      const gross = qty * unit;
      sumGross += gross;
      // USt-Aufteilung nach hinterlegtem Steuersatz (7 % / 19 %); Preise
      // am Automaten sind Bruttopreise.
      const rate = Number(it.product?.tax_rate ?? 19);
      const net = gross / (1 + rate / 100);
      if (Math.round(rate) === 7) { net7 += net; tax7 += gross - net; }
      else { net19 += net; tax19 += gross - net; }

      if (zebra) {
        page.drawRectangle({ x: 40, y: y - 3.5, width: 515, height: 14, color: CREAM });
      }
      zebra = !zebra;
      page.drawText(label, { x: 44, y, size: 10, font, color: INK });
      const cells: Array<[number, string]> = [
        [1, `${qty}x`], [2, eur(unit)], [3, eur(gross)],
      ];
      for (const [i, text] of cells) {
        const c = cols[i];
        page.drawText(text, {
          x: c.x + c.w - 6 - font.widthOfTextAtSize(text, 10),
          y, size: 10, font, color: INK,
        });
      }
      y -= 14;
    }

    y -= 6;
    page.drawLine({ start: { x: 40, y }, end: { x: 555, y }, thickness: 0.5, color: MUTED });
    y -= 18;

    // Summe + USt-Ausweis. Gesamtsumme aus purchases.total_gross (führend),
    // Positionssumme dient als Kontrolle.
    const total = Number(purchase.total_gross ?? sumGross) || sumGross;
    page.drawText("Gesamt (brutto)", { x: 40, y, size: 13, font: bold, color: INK });
    const totalTxt = eur(total);
    page.drawText(totalTxt, {
      x: 555 - bold.widthOfTextAtSize(totalTxt, 13), y, size: 13, font: bold, color: INK,
    });
    y -= 20;
    const vatRows: Array<[string, string]> = [];
    if (net7 > 0)  vatRows.push([`Netto 7 %: ${eur(net7)}`,  `USt 7 %: ${eur(tax7)}`]);
    if (net19 > 0) vatRows.push([`Netto 19 %: ${eur(net19)}`, `USt 19 %: ${eur(tax19)}`]);
    for (const [l, r] of vatRows) {
      page.drawText(l, { x: 40, y, size: 10, font, color: MUTED });
      page.drawText(r, { x: 555 - font.widthOfTextAtSize(r, 10), y, size: 10, font, color: MUTED });
      y -= 14;
    }
    if (vatRows.length === 0) {
      page.drawText("Betrag inkl. gesetzlicher Umsatzsteuer.", { x: 40, y, size: 10, font, color: MUTED });
      y -= 14;
    }
    y -= 12;

    // Skill: graue Zusatzinfo 9 pt kursiv.
    page.drawText(
      "Dieser digitale Beleg wurde automatisch zu deinem Automaten-Kauf erstellt und ist",
      { x: 40, y, size: 9, font: italic, color: MUTED });
    y -= 14;
    page.drawText(
      "jederzeit im Kundenbereich unter „Verlauf“ abrufbar. Kein Anspruch auf Vorsteuerabzug —",
      { x: 40, y, size: 9, font: italic, color: MUTED });
    y -= 14;
    page.drawText(
      "Unternehmer erhalten zusätzlich eine Rechnung nach § 14 UStG.",
      { x: 40, y, size: 9, font: italic, color: MUTED });

    // Footer (eine Seite — Stammdatenzeile + Erstellungsdatum).
    page.drawLine({ start: { x: 40, y: 46 }, end: { x: 555, y: 46 }, thickness: 0.4, color: MUTED });
    page.drawText(
      `${ISSUER.name} · ${ISSUER.street}, ${ISSUER.cityLine} · St-Nr. ${ISSUER.taxNumber} · USt-IdNr. ${ISSUER.vatId}`,
      { x: 40, y: 34, size: 6.5, font, color: MUTED });
    page.drawText(`Erstellt am ${new Date().toISOString().substring(0, 10)}`,
      { x: 40, y: 24, size: 7, font: italic, color: MUTED });
    page.drawText("Seite 1 / 1", { x: 555 - 45, y: 34, size: 8, font, color: MUTED });

    const bytes = await pdf.save();
    return jsonResponse({
      filename: `kassenbon_${bonNo}.pdf`,
      mime: "application/pdf",
      base64: encodeBase64(bytes),
    });
  } catch (e) {
    const msg = e instanceof Error ? e.message : String(e);
    return jsonResponse({ error: msg }, 500);
  }
});
