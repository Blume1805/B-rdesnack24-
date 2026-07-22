// ============================================================================
// Edge Function: document-finalize
// ----------------------------------------------------------------------------
// Erzeugt das finale, signierte PDF eines freigegebenen Dokuments.
// Rendert je nach document_kind den tatsächlichen Dokument-Inhalt
// (Inventur, HACCP-Protokoll, Finanzauswertung) und hängt eine
// FREIGEGEBEN-Stempel-/Signatur-Seite an. Ablage in Bucket
// 'signed-documents'; anschließend document_approvals.final_pdf_path.
// ============================================================================
import { createClient, type SupabaseClient } from "https://esm.sh/@supabase/supabase-js@2.45.4";
import { PDFDocument, PDFPage, StandardFonts, rgb, type PDFFont } from "https://esm.sh/pdf-lib@1.17.1";
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
const POSITIVE = rgb(0.36, 0.60, 0.25);

// ── Hilfsformatierer ──────────────────────────────────────────────
const fmt = (v: unknown): string => {
  if (v === null || v === undefined) return "";
  if (typeof v === "boolean") return v ? "Ja" : "Nein";
  if (typeof v === "string" && v.length > 19 && v.includes("T")) {
    return v.replace("T", " ").substring(0, 16);
  }
  return String(v);
};
const fmtEur = (n: number | null | undefined): string =>
  n === null || n === undefined
    ? ""
    : n.toLocaleString("de-DE", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

interface Approval {
  id: string;
  title: string;
  document_kind: string;
  period_from: string;
  period_to: string;
  status: string;
  snapshot: Record<string, unknown> | null;
}

interface Decision {
  approver_id: string;
  decision: string;
  decided_at: string | null;
  signature_url: string | null;
  approver: { full_name?: string } | null;
}

interface Ctx {
  pdf: PDFDocument;
  font: PDFFont;
  bold: PDFFont;
  italic: PDFFont;
  approval: Approval;
  decisions: Decision[];
  caller: SupabaseClient;
  headerDrawn?: boolean; // Stammdaten-Adressblock nur auf der ersten Seite des Dokuments
}

// ── Header im One-Pager-Look: Gold-Topbar, Wortmarke, Stammdaten ────
// Der volle Stammdaten-/Adressblock (Ausstelleradresse) erscheint nur auf
// der allerersten Seite des Dokuments; Folgeseiten tragen weiterhin die
// schlanke Topbar zur Wiedererkennung, ohne die Adresse zu wiederholen.
function drawPageHeader(page: PDFPage, ctx: Ctx, title: string, subtitle?: string): number {
  page.drawRectangle({ x: 0, y: 842 - 6, width: 595, height: 6, color: GOLD });
  page.drawText("BÖRDESNACK24", { x: 40, y: 842 - 30, size: 11, font: ctx.bold, color: INK });
  page.drawText("Freigabe-Dokument", { x: 40, y: 842 - 43, size: 8, font: ctx.font, color: MUTED });
  if (!ctx.headerDrawn) {
    const hy = 842 - 22;
    page.drawText(ISSUER.name, { x: 320, y: hy, size: 8, font: ctx.bold, color: INK });
    page.drawText(ISSUER.street, { x: 320, y: hy - 10, size: 7.5, font: ctx.font, color: MUTED });
    page.drawText(ISSUER.cityLine, { x: 320, y: hy - 20, size: 7.5, font: ctx.font, color: MUTED });
    page.drawText(`Steuernummer: ${ISSUER.taxNumber}`, { x: 320, y: hy - 30, size: 7.5, font: ctx.font, color: MUTED });
    page.drawText(`USt-IdNr.: ${ISSUER.vatId}`, { x: 320, y: hy - 40, size: 7.5, font: ctx.font, color: MUTED });
    ctx.headerDrawn = true;
  }
  page.drawLine({ start: { x: 40, y: 842 - 82 }, end: { x: 555, y: 842 - 82 }, thickness: 0.7, color: GOLD });

  let ty = 842 - 104;
  page.drawText(title, { x: 40, y: ty, size: 15, font: ctx.bold, color: GOLD });
  ty -= 18;
  if (subtitle) {
    page.drawText(subtitle, { x: 40, y: ty, size: 10, font: ctx.font, color: INK });
    ty -= 12;
  }
  page.drawLine({
    start: { x: 40, y: ty }, end: { x: 555, y: ty },
    thickness: 1.4, color: GOLD,
  });
  ty -= 18;
  // Bewusste Leerzeile vor dem eigentlichen Inhalt (Tabellenkopf o. ä.)
  ty -= 10;
  return ty;
}

// ── Generisch: Tabelle mit Header-Wiederholung über mehrere Seiten ──
interface TableColumn { label: string; x: number; maxChars: number; align?: "right" }
function drawTable(
  ctx: Ctx,
  title: string,
  subtitle: string,
  columns: TableColumn[],
  rows: (string | number | null | undefined)[][],
): void {
  const FOOT_Y_LIMIT = 100;
  let page = ctx.pdf.addPage([595, 842]);
  let y = drawPageHeader(page, ctx, title, subtitle);

  // Tabellenkopf als Ink-Band mit Cream-Text + Zebra-Zeilen (One-Pager).
  const CREAM = rgb(0.98, 0.96, 0.92);
  const drawColumnHeaders = (p: PDFPage, yPos: number) => {
    p.drawRectangle({ x: 40, y: yPos - 4, width: 515, height: 16, color: INK });
    for (let i = 0; i < columns.length; i++) {
      const c = columns[i];
      if (c.align === "right") {
        const nextX = columns[i + 1]?.x ?? 555;
        const w = ctx.bold.widthOfTextAtSize(c.label, 8.5);
        p.drawText(c.label, { x: nextX - 8 - w, y: yPos, size: 8.5, font: ctx.bold, color: CREAM });
      } else {
        p.drawText(c.label, { x: c.x + 4, y: yPos, size: 8.5, font: ctx.bold, color: CREAM });
      }
    }
  };

  drawColumnHeaders(page, y);
  y -= 18;
  let zebra = false;

  for (const row of rows) {
    if (y < FOOT_Y_LIMIT) {
      page = ctx.pdf.addPage([595, 842]);
      y = drawPageHeader(page, ctx, title, subtitle);
      drawColumnHeaders(page, y);
      y -= 18;
      zebra = false;
    }
    if (zebra) {
      page.drawRectangle({ x: 40, y: y - 3.5, width: 515, height: 13, color: CREAM });
    }
    zebra = !zebra;
    for (let i = 0; i < columns.length; i++) {
      const c = columns[i];
      const text = fmt(row[i]).substring(0, c.maxChars);
      if (c.align === "right") {
        const nextX = columns[i + 1]?.x ?? 555;
        const w = ctx.font.widthOfTextAtSize(text, 8);
        page.drawText(text, { x: nextX - 8 - w, y, size: 8, font: ctx.font, color: INK });
      } else {
        page.drawText(text, { x: c.x + 4, y, size: 8, font: ctx.font, color: INK });
      }
    }
    y -= 13;
  }

  if (rows.length === 0) {
    page.drawText("Keine Datensätze im Zeitraum.",
      { x: 40, y: y - 4, size: 9, font: ctx.italic, color: MUTED });
  }
}

// ── Renderer: Inventur (FIFO-Lots aus dem Snapshot) ────────────────
function renderInventoryFifo(ctx: Ctx): void {
  const snapshot = ctx.approval.snapshot ?? {};
  const lots = (snapshot.lots as Array<Record<string, unknown>>) ?? [];
  const movements = (snapshot.movements as Array<Record<string, unknown>>) ?? [];

  const subtitle =
    `Zeitraum: ${ctx.approval.period_from} bis ${ctx.approval.period_to} · ` +
    `${lots.length} Lots · ${movements.length} Bewegungen`;

  // Seite 1: FIFO-Lot-Bestand
  const lotCols: TableColumn[] = [
    { label: "Produkt",   x: 40,  maxChars: 22 },
    { label: "Rechnung",  x: 190, maxChars: 14 },
    { label: "EK-Preis",  x: 275, maxChars: 8,  align: "right" },
    { label: "MHD",       x: 335, maxChars: 10 },
    { label: "Menge",     x: 395, maxChars: 6,  align: "right" },
    { label: "MHD-%",     x: 435, maxChars: 4,  align: "right" },
    { label: "Netto EUR", x: 480, maxChars: 10, align: "right" },
  ];
  const lotRows = lots.map((l) => [
    (l.product_name as string) ?? "",
    (l.invoice_number as string) ?? "",
    fmtEur(l.unit_cost as number),
    (l.lot_expiry as string) ?? "",
    l.remaining_qty ?? "",
    l.mhd_pct !== null && l.mhd_pct !== undefined ? `${l.mhd_pct}%` : "0%",
    fmtEur(l.lot_net as number),
  ]);
  drawTable(ctx,
    "Bördesnack24 – Inventur (FIFO-Bestand)",
    subtitle,
    lotCols,
    lotRows,
  );

  // Optionale zweite Sektion: Bewegungen im Zeitraum
  if (movements.length > 0) {
    const moveCols: TableColumn[] = [
      { label: "Zeitpunkt",   x: 40,  maxChars: 16 },
      { label: "Produkt",     x: 140, maxChars: 20 },
      { label: "Automat",     x: 265, maxChars: 10 },
      { label: "Typ",         x: 335, maxChars: 8 },
      { label: "Menge",       x: 385, maxChars: 6, align: "right" },
      { label: "EK",          x: 425, maxChars: 8, align: "right" },
      { label: "Rechnung",    x: 480, maxChars: 12 },
    ];
    const moveRows = movements.map((m) => [
      (m.occurred_at as string) ?? "",
      (m.product_name as string) ?? "",
      (m.machine_code as string) ?? "",
      (m.type as string) ?? "",
      m.quantity_delta ?? "",
      fmtEur(m.unit_cost as number),
      (m.invoice_number as string) ?? "",
    ]);
    drawTable(ctx,
      "Bördesnack24 – Inventur-Bewegungen",
      subtitle,
      moveCols,
      moveRows,
    );
  }

  // Bilanz-Summenzeile am Fuß der Lot-Seite (kompakt am Ende)
  const totalNet = lots.reduce(
    (s, l) => s + (Number(l.lot_net) || 0), 0);
  const totalGross = lots.reduce(
    (s, l) => s + (Number(l.lot_gross) || 0), 0);
  const totalDiscount = lots.reduce(
    (s, l) => s + (Number(l.lot_discount) || 0), 0);

  // Bilanz-Zusammenfassung als eigene Seite (wenn Zahlen vorliegen)
  if (lots.length > 0) {
    const bilanzTitle = "Bördesnack24 – Bilanz-Zusammenfassung";
    let page = ctx.pdf.addPage([595, 842]);
    let y = drawPageHeader(page, ctx, bilanzTitle, subtitle);
    const rows: Array<[string, string]> = [
      ["Anschaffungskosten (Brutto)", fmtEur(totalGross) + " EUR"],
      ["MHD-Abschlag",                fmtEur(totalDiscount) + " EUR"],
      ["Bilanz-Netto (§253 HGB)",     fmtEur(totalNet) + " EUR"],
      ["Anzahl Lots",                 String(lots.length)],
    ];
    const FOOT_Y_LIMIT = 100;
    for (const [k, v] of rows) {
      if (y < FOOT_Y_LIMIT) {
        page = ctx.pdf.addPage([595, 842]);
        y = drawPageHeader(page, ctx, bilanzTitle, subtitle);
      }
      page.drawText(k, { x: 40, y, size: 11, font: ctx.bold, color: INK });
      page.drawText(v, { x: 400, y, size: 11, font: ctx.font, color: INK });
      y -= 20;
    }
  }
}

// ── Renderer: HACCP-Protokoll ──────────────────────────────────────
interface ProtocolDef {
  table: string;
  dateCol: string;
  title: string;
  columns: { key: string; label: string; x: number; maxChars: number; align?: "right" }[];
}
const HACCP_PROTOCOLS: Record<string, ProtocolDef> = {
  haccp_temperature: {
    table: "temperature_logs", dateCol: "measured_at",
    title: "Temperaturkontrolle (CCP 2: ≤ 7 °C)",
    columns: [
      { key: "measured_at",       label: "Zeitpunkt",  x: 40,  maxChars: 16 },
      { key: "temperature_c",     label: "Ist °C",     x: 160, maxChars: 8, align: "right" },
      { key: "within_limit",      label: "i.O.",       x: 250, maxChars: 6 },
      { key: "corrective_action", label: "Korrektur",  x: 340, maxChars: 30 },
    ],
  },
  haccp_cleaning: {
    table: "cleaning_logs", dateCol: "cleaned_at",
    title: "Reinigungsprotokoll",
    columns: [
      { key: "cleaned_at",    label: "Zeitpunkt",  x: 40,  maxChars: 16 },
      { key: "cleaning_type", label: "Art",        x: 160, maxChars: 14 },
      { key: "agent",         label: "Mittel",     x: 250, maxChars: 14 },
      { key: "notes",         label: "Bemerkung",  x: 340, maxChars: 32 },
    ],
  },
  haccp_disposal: {
    table: "disposal_logs", dateCol: "disposed_at",
    title: "Vernichtungsprotokoll",
    columns: [
      { key: "disposed_at",   label: "Zeitpunkt",  x: 40,  maxChars: 16 },
      { key: "product_label", label: "Produkt",    x: 160, maxChars: 18 },
      { key: "quantity",      label: "Menge",      x: 285, maxChars: 6, align: "right" },
      { key: "reason",        label: "Grund",      x: 335, maxChars: 20 },
      { key: "mhd_date",      label: "MHD",        x: 470, maxChars: 12 },
    ],
  },
  haccp_training: {
    table: "employee_trainings", dateCol: "training_date",
    title: "Schulungs-/Unterweisungsnachweis",
    columns: [
      { key: "training_date", label: "Datum",  x: 40,  maxChars: 12 },
      { key: "topic",         label: "Thema",  x: 140, maxChars: 40 },
    ],
  },
  haccp_filling: {
    table: "filling_logs", dateCol: "filled_at",
    title: "Befüllungsprotokoll",
    columns: [
      { key: "filled_at",       label: "Zeitpunkt", x: 40,  maxChars: 16 },
      { key: "machine_id",      label: "Automat",   x: 160, maxChars: 12 },
      { key: "product_id",      label: "Produkt",   x: 250, maxChars: 14 },
      { key: "quantity",        label: "Menge",     x: 340, maxChars: 6, align: "right" },
      { key: "removed_spoiled", label: "Verderb",   x: 400, maxChars: 8 },
    ],
  },
  haccp_maintenance: {
    table: "maintenance_logs", dateCol: "reported_at",
    title: "Wartungsprotokoll",
    columns: [
      { key: "reported_at", label: "Zeitpunkt", x: 40,  maxChars: 16 },
      { key: "machine_id",  label: "Automat",   x: 160, maxChars: 12 },
      { key: "issue",       label: "Meldung",   x: 250, maxChars: 20 },
      { key: "action",      label: "Maßnahme",  x: 380, maxChars: 20 },
      { key: "resolved",    label: "Erledigt",  x: 500, maxChars: 6 },
    ],
  },
  haccp_cash: {
    table: "cash_collection_logs", dateCol: "collected_at",
    title: "Geldentnahmeprotokoll (§146 AO)",
    columns: [
      { key: "collected_at",  label: "Zeitpunkt",    x: 40,  maxChars: 16 },
      { key: "machine_id",    label: "Automat",      x: 160, maxChars: 12 },
      { key: "amount_gross",  label: "Brutto EUR",   x: 250, maxChars: 10, align: "right" },
      { key: "change_amount", label: "Wechselgeld",  x: 335, maxChars: 10, align: "right" },
      { key: "net_amount",    label: "Netto EUR",    x: 420, maxChars: 10, align: "right" },
    ],
  },
};

async function renderHaccp(ctx: Ctx): Promise<void> {
  const def = HACCP_PROTOCOLS[ctx.approval.document_kind];
  if (!def) return;
  const from = ctx.approval.period_from;
  const to = ctx.approval.period_to;
  const { data: rows } = await ctx.caller
    .from(def.table)
    .select("*")
    .gte(def.dateCol, from)
    .lte(def.dateCol, `${to}T23:59:59`)
    .order(def.dateCol, { ascending: true });

  const subtitle = `Zeitraum: ${from} bis ${to} · ${(rows ?? []).length} Einträge`;
  const cols: TableColumn[] = def.columns.map((c) =>
    ({ label: c.label, x: c.x, maxChars: c.maxChars, align: c.align }));
  const tableRows = (rows ?? []).map((r: Record<string, unknown>) =>
    def.columns.map((c) => r[c.key] as string | number | null | undefined));
  drawTable(ctx, `Bördesnack24 – ${def.title}`, subtitle, cols, tableRows);
}

// ── Renderer: Finanz-Auswertung ────────────────────────────────────
async function renderFinance(ctx: Ctx): Promise<void> {
  const from = ctx.approval.period_from;
  const to = ctx.approval.period_to;
  const subtitle = `Zeitraum: ${from} bis ${to}`;
  // finance_summary_range RPC liefert Kennzahlen. Fallback: nur Titel.
  let summary: Record<string, unknown> | null = null;
  try {
    const { data } = await ctx.caller.rpc(
      "finance_summary_range", { p_from: from, p_to: to });
    summary = Array.isArray(data) ? data[0] : data;
  } catch (_) { /* RPC nicht vorhanden — Placeholder */ }

  const financeTitle = "Bördesnack24 – Finanzauswertung";
  let page = ctx.pdf.addPage([595, 842]);
  let y = drawPageHeader(page, ctx, financeTitle, subtitle);
  if (!summary) {
    page.drawText(
      "Keine Kennzahlen im Snapshot — Auswertung im Live-Dashboard einsehbar.",
      { x: 40, y, size: 10, font: ctx.italic, color: MUTED });
    return;
  }
  const rows: Array<[string, string]> = [
    ["Umsatz gesamt (Netto)",   fmtEur(summary.revenue_net as number) + " EUR"],
    ["– davon 7 %",              fmtEur(summary.revenue_net_7 as number) + " EUR"],
    ["– davon 19 %",             fmtEur(summary.revenue_net_19 as number) + " EUR"],
    ["Wareneinsatz",             fmtEur(summary.cogs as number) + " EUR"],
    ["Rohertrag",                fmtEur(summary.gross_profit as number) + " EUR"],
    ["Sonstige Kosten",          fmtEur(summary.other_costs as number) + " EUR"],
    ["Ergebnis",                 fmtEur(summary.result as number) + " EUR"],
  ];
  const FOOT_Y_LIMIT = 100;
  for (const [k, v] of rows) {
    if (y < FOOT_Y_LIMIT) {
      page = ctx.pdf.addPage([595, 842]);
      y = drawPageHeader(page, ctx, financeTitle, subtitle);
    }
    page.drawText(k, { x: 40, y, size: 11, font: ctx.bold, color: INK });
    page.drawText(v, { x: 400, y, size: 11, font: ctx.font, color: INK });
    y -= 20;
  }
}

// ── Freigabe-Stempel + Signaturen (immer als letzte Seite(n)) ────────
async function renderApprovalStamp(ctx: Ctx): Promise<void> {
  const stampTitle = "Bördesnack24 – Freigabe & digitale Signaturen";
  const stampSubtitle = `Approval-ID: ${ctx.approval.id}`;
  let page = ctx.pdf.addPage([595, 842]);
  let y = drawPageHeader(page, ctx, stampTitle, stampSubtitle);

  // FREIGEGEBEN-Stempel-Kasten
  page.drawRectangle({
    x: 40, y: y - 90, width: 515, height: 90,
    borderColor: POSITIVE, borderWidth: 1,
    color: rgb(0.94, 0.98, 0.90),
  });
  page.drawText("FREIGEGEBEN", { x: 55, y: y - 22, size: 14, font: ctx.bold, color: POSITIVE });
  page.drawText("Beide Gesellschafter haben nach Prüfung digital signiert.",
    { x: 55, y: y - 40, size: 9, font: ctx.font, color: INK });

  const approvedAt = new Date().toISOString().substring(0, 10);
  let lineY = y - 60;
  for (const d of ctx.decisions) {
    const name = d.approver?.full_name ?? "?";
    const dec = d.decision === "approved" ? "freigegeben" : "abgelehnt";
    const decidedAt = d.decided_at
      ? String(d.decided_at).substring(0, 10) : approvedAt;
    page.drawText(`- ${name}: ${dec}  (${decidedAt})`,
      { x: 55, y: lineY, size: 9, font: ctx.font, color: INK });
    lineY -= 12;
  }
  y -= 110;

  // Signatur-Karten — Platzprüfung VOR jeder Karte: reicht der Platz auf
  // der aktuellen Seite nicht, wird eine neue Seite begonnen, statt die
  // Karte (und damit eine rechtsgültige Unterschrift) wegzulassen.
  let sy = y;
  const CARD_H = 130;
  const CARD_GAP = 145;
  const CARD_FOOT_Y_LIMIT = 60;
  for (const d of ctx.decisions) {
    if (sy - CARD_H < CARD_FOOT_Y_LIMIT) {
      page = ctx.pdf.addPage([595, 842]);
      sy = drawPageHeader(page, ctx, stampTitle, `${stampSubtitle} (Fortsetzung)`);
    }

    const name = d.approver?.full_name ?? "?";
    const decidedAt = d.decided_at
      ? String(d.decided_at).substring(0, 10) : approvedAt;
    const sigUrl = d.signature_url;

    page.drawRectangle({
      x: 40, y: sy - 130, width: 515, height: 130,
      borderColor: MUTED, borderWidth: 0.5,
      color: rgb(0.98, 0.96, 0.92),
    });

    if (sigUrl) {
      try {
        const res = await fetch(sigUrl);
        if (res.ok) {
          const buf = new Uint8Array(await res.arrayBuffer());
          const ct = res.headers.get("content-type") ?? "";
          const img = ct.includes("png")
            ? await ctx.pdf.embedPng(buf).catch(() => null)
            : await ctx.pdf.embedJpg(buf).catch(() => null);
          if (img) {
            const maxW = 200, maxH = 60;
            const scale = Math.min(maxW / img.width, maxH / img.height, 1);
            const w = img.width * scale, h = img.height * scale;
            page.drawImage(img, { x: 60, y: sy - 90, width: w, height: h });
          } else {
            page.drawLine({
              start: { x: 60, y: sy - 60 }, end: { x: 260, y: sy - 60 },
              thickness: 0.6, color: INK,
            });
          }
        }
      } catch {
        page.drawLine({
          start: { x: 60, y: sy - 60 }, end: { x: 260, y: sy - 60 },
          thickness: 0.6, color: INK,
        });
      }
    } else {
      page.drawLine({
        start: { x: 60, y: sy - 60 }, end: { x: 260, y: sy - 60 },
        thickness: 0.6, color: INK,
      });
    }

    page.drawText(name, { x: 60, y: sy - 100, size: 10, font: ctx.bold, color: INK });
    page.drawText(`Gesellschafter – freigegeben am ${decidedAt}`,
      { x: 60, y: sy - 114, size: 8, font: ctx.font, color: MUTED });

    sy -= CARD_GAP;
  }
}

// ── Footer auf jeder Seite (Stammdaten + Seitenzahl) ─────────────────
// Analog zu finance-export-pdf/protocol-export-pdf/documents-*: jede Seite
// bleibt für sich identifizierbar, auch wenn Seiten getrennt werden.
function drawFooterOnAllPages(ctx: Ctx): void {
  const pages = ctx.pdf.getPages();
  const createdAt = new Date().toISOString().substring(0, 10);
  for (let i = 0; i < pages.length; i++) {
    const pg = pages[i];
    pg.drawLine({
      start: { x: 40, y: 46 }, end: { x: 555, y: 46 },
      thickness: 0.4, color: MUTED,
    });
    pg.drawText(
      `${ISSUER.name} · ${ISSUER.street}, ${ISSUER.cityLine} · St-Nr. ${ISSUER.taxNumber} · USt-IdNr. ${ISSUER.vatId}`,
      { x: 40, y: 34, size: 6.5, font: ctx.font, color: MUTED },
    );
    pg.drawText(`Erstellt am ${createdAt}`,
      { x: 40, y: 24, size: 7, font: ctx.italic, color: MUTED });
    pg.drawText(`Seite ${i + 1} von ${pages.length}`,
      { x: 555 - 90, y: 34, size: 8, font: ctx.font, color: MUTED });
  }
}

// ── Router ─────────────────────────────────────────────────────────
Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });
  if (req.method !== "POST") return jsonResponse({ error: "Method not allowed" }, 405);
  const authHeader = req.headers.get("Authorization");
  if (!authHeader) return jsonResponse({ error: "Missing Authorization" }, 401);

  const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
  const anonKey = Deno.env.get("SUPABASE_ANON_KEY")!;
  const serviceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
  const caller = createClient(supabaseUrl, anonKey, {
    global: { headers: { Authorization: authHeader } },
  });
  const admin = createClient(supabaseUrl, serviceKey);

  let body: { approval_id: string };
  try { body = await req.json(); }
  catch { return jsonResponse({ error: "Invalid JSON" }, 400); }

  const { data: approval, error: aErr } = await caller
    .from("document_approvals")
    .select("id, title, document_kind, period_from, period_to, status, snapshot")
    .eq("id", body.approval_id)
    .maybeSingle();
  if (aErr || !approval) return jsonResponse({ error: "Approval nicht gefunden" }, 404);
  if (approval.status !== "approved") {
    return jsonResponse({ error: "Nur freigegebene Dokumente werden finalisiert" }, 400);
  }

  const { data: decisions } = await caller
    .from("document_approval_decisions")
    .select("approver_id, decision, decided_at, signature_url, "
          + "approver:profiles(full_name)")
    .eq("approval_id", body.approval_id)
    .order("created_at");

  const pdf = await PDFDocument.create();
  const font = await pdf.embedFont(StandardFonts.Helvetica);
  const bold = await pdf.embedFont(StandardFonts.HelveticaBold);
  const italic = await pdf.embedFont(StandardFonts.HelveticaOblique);
  const ctx: Ctx = {
    pdf, font, bold, italic,
    approval: approval as Approval,
    decisions: (decisions ?? []) as Decision[],
    caller,
    headerDrawn: false,
  };

  // 1) Inhaltsseiten je nach Dokument-Typ
  const kind = ctx.approval.document_kind;
  if (kind === "inventory_fifo") {
    renderInventoryFifo(ctx);
  } else if (kind.startsWith("haccp_")) {
    await renderHaccp(ctx);
  } else if (kind === "finance_period") {
    await renderFinance(ctx);
  } else {
    // Unbekannter Typ — nur eine Info-Seite
    const p = pdf.addPage([595, 842]);
    let y = drawPageHeader(p, ctx,
      `Bördesnack24 – ${ctx.approval.title}`,
      `Zeitraum: ${ctx.approval.period_from} bis ${ctx.approval.period_to}`);
    p.drawText(`Dokument-Typ: ${kind}`,
      { x: 40, y, size: 10, font, color: INK });
  }

  // 2) Freigabe-Stempel + Signaturen (immer als letzte Seite(n))
  await renderApprovalStamp(ctx);

  // 3) Footer (mit Seitenzahl) auf jeder Seite des fertigen PDFs
  drawFooterOnAllPages(ctx);

  const pdfBytes = await pdf.save();
  const path = `${ctx.approval.id}.pdf`;
  const uploadRes = await admin.storage.from("signed-documents").upload(
    path, pdfBytes,
    { contentType: "application/pdf", upsert: true },
  );
  if (uploadRes.error) {
    return jsonResponse({ error: uploadRes.error.message }, 500);
  }

  await admin.from("document_approvals")
    .update({ final_pdf_path: path })
    .eq("id", ctx.approval.id);

  const { data: signed } = await admin.storage
    .from("signed-documents")
    .createSignedUrl(path, 3600 * 24);
  return jsonResponse({ ok: true, path, signed_url: signed?.signedUrl });
});
