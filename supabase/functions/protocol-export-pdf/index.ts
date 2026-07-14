// ============================================================================
// Edge Function: protocol-export-pdf
// ----------------------------------------------------------------------------
// Erzeugt VLÜA-/GoBD-taugliche PDF-Nachweise für ein Protokoll über einen
// Zeitraum. RLS des Aufrufers gilt; Rendering serverseitig via pdf-lib.
// Header: Aussteller-Block (Anschrift, Steuernummer, USt-IdNr.).
// Footer: Freigabe-Signaturzeilen der Gesellschafter.
// ============================================================================
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.4";
import { PDFDocument, StandardFonts, rgb } from "https://esm.sh/pdf-lib@1.17.1";
import { encodeBase64 } from "https://deno.land/std@0.224.0/encoding/base64.ts";
import { jsonResponse, corsHeaders } from "../_shared/cors.ts";

interface ProtocolDef {
  table: string;
  dateCol: string;
  title: string;
  columns: { key: string; label: string }[];
}

const ISSUER = {
  name: "Bördesnack24 GbR (Pia & Philipp Blume)",
  street: "Sülldorfer Str. 3A",
  cityLine: "39171 Sülzetal OT Osterweddingen",
  taxNumber: "102/178/01635",
  vatId: "DE 458804058",
};

const PROTOCOLS: Record<string, ProtocolDef> = {
  temperature: { table: "temperature_logs", dateCol: "measured_at", title: "Temperaturkontrolle (CCP 2: ≤ 7 °C)",
    columns: [{ key: "measured_at", label: "Zeitpunkt" },{ key: "temperature_c", label: "Ist °C" },{ key: "within_limit", label: "i.O." },{ key: "corrective_action", label: "Korrektur" }] },
  cleaning: { table: "cleaning_logs", dateCol: "cleaned_at", title: "Reinigungsprotokoll",
    columns: [{ key: "cleaned_at", label: "Zeitpunkt" },{ key: "cleaning_type", label: "Art" },{ key: "agent", label: "Mittel" },{ key: "notes", label: "Bemerkung" }] },
  disposal: { table: "disposal_logs", dateCol: "disposed_at", title: "Vernichtungsprotokoll",
    columns: [{ key: "disposed_at", label: "Zeitpunkt" },{ key: "product_label", label: "Produkt" },{ key: "quantity", label: "Menge" },{ key: "reason", label: "Grund" },{ key: "mhd_date", label: "MHD" }] },
  training: { table: "employee_trainings", dateCol: "training_date", title: "Schulungs-/Unterweisungsnachweis",
    columns: [{ key: "training_date", label: "Datum" },{ key: "topic", label: "Thema" }] },
  filling: { table: "filling_logs", dateCol: "filled_at", title: "Befüllungsprotokoll",
    columns: [{ key: "filled_at", label: "Zeitpunkt" },{ key: "machine_id", label: "Automat" },{ key: "product_id", label: "Produkt" },{ key: "quantity", label: "Menge" },{ key: "removed_spoiled", label: "Verderb" }] },
  maintenance: { table: "maintenance_logs", dateCol: "reported_at", title: "Wartungsprotokoll",
    columns: [{ key: "reported_at", label: "Zeitpunkt" },{ key: "machine_id", label: "Automat" },{ key: "issue", label: "Meldung" },{ key: "action", label: "Maßnahme" },{ key: "resolved", label: "Erledigt" }] },
  cash: { table: "cash_collection_logs", dateCol: "collected_at", title: "Geldentnahmeprotokoll (§146 AO)",
    columns: [{ key: "collected_at", label: "Zeitpunkt" },{ key: "machine_id", label: "Automat" },{ key: "amount_gross", label: "Brutto EUR" },{ key: "change_amount", label: "Wechselgeld" },{ key: "net_amount", label: "Netto EUR" }] },
};

const fmt = (v: unknown): string => {
  if (v === null || v === undefined) return "";
  if (typeof v === "boolean") return v ? "Ja" : "Nein";
  if (typeof v === "string" && v.length > 19 && v.includes("T")) return v.replace("T", " ").substring(0, 16);
  return String(v);
};

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });
  if (req.method !== "POST") return jsonResponse({ error: "Method not allowed" }, 405);
  const authHeader = req.headers.get("Authorization");
  if (!authHeader) return jsonResponse({ error: "Missing Authorization" }, 401);
  const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
  const anonKey = Deno.env.get("SUPABASE_ANON_KEY")!;
  const caller = createClient(supabaseUrl, anonKey, { global: { headers: { Authorization: authHeader } } });
  let kind: string, from: string, to: string;
  try {
    const body = await req.json();
    kind = String(body.protocol); from = String(body.from); to = String(body.to);
    if (!PROTOCOLS[kind]) throw new Error("unknown protocol");
    if (!/^\d{4}-\d{2}-\d{2}$/.test(from) || !/^\d{4}-\d{2}-\d{2}$/.test(to)) throw new Error("invalid range");
  } catch (e) { return jsonResponse({ error: `Ungültige Anfrage: ${e}` }, 400); }
  const def = PROTOCOLS[kind];
  const { data: rows, error } = await caller.from(def.table).select("*").gte(def.dateCol, from).lte(def.dateCol, `${to}T23:59:59`).order(def.dateCol, { ascending: true });
  if (error) return jsonResponse({ error: error.message }, 403);
  const pdf = await PDFDocument.create();
  const font = await pdf.embedFont(StandardFonts.Helvetica);
  const bold = await pdf.embedFont(StandardFonts.HelveticaBold);
  const ink = rgb(0.08, 0.07, 0.05);
  const gold = rgb(0.99, 0.76, 0.01);
  const muted = rgb(0.44, 0.42, 0.35);
  const colX = [40, 160, 250, 340, 470];
  // Räume auf jeder Seite: Header (Aussteller + Titel + Zeitraum +
  // Spaltenköpfe) 800 -> ~720; Fußraum für "Eintraege" + Signatur-Block:
  // Signaturen ab y=170, "Eintraege" bei y=40. Ab y < FOOT_Y_LIMIT muss
  // eine neue Seite beginnen, damit die letzte Zeile nicht im Signatur-
  // Bereich landet.
  const FOOT_Y_LIMIT = 220;

  // Zeichnet Aussteller-Block (oben rechts), darunter Titel + Zeitraum,
  // dann eine horizontale Trennlinie und die Spaltenköpfe.
  // Rückgabe: aktuelles y unter dem Header (ready für Datenzeilen).
  const drawHeader = (p: ReturnType<typeof pdf.addPage>): number => {
    // Aussteller-Block rechts (5 Zeilen, y=800..755)
    let hy = 800;
    p.drawText(ISSUER.name, { x: 320, y: hy, size: 9, font: bold, color: ink });
    p.drawText(ISSUER.street, { x: 320, y: hy - 11, size: 8, font, color: muted });
    p.drawText(ISSUER.cityLine, { x: 320, y: hy - 22, size: 8, font, color: muted });
    p.drawText(`Steuernummer: ${ISSUER.taxNumber}`, { x: 320, y: hy - 34, size: 8, font, color: muted });
    p.drawText(`USt-IdNr.: ${ISSUER.vatId}`, { x: 320, y: hy - 45, size: 8, font, color: muted });

    // Titel links, unterhalb des Aussteller-Blocks, damit nichts überlappt
    let ty = hy - 70;
    p.drawText("Bördesnack24 – " + def.title, { x: 40, y: ty, size: 15, font: bold, color: gold });
    ty -= 20;
    p.drawText(`Zeitraum: ${from} bis ${to}`, { x: 40, y: ty, size: 10, font, color: ink });
    ty -= 14;

    // Horizontale Trennlinie zwischen Header und Tabellen-Kopf
    p.drawLine({
      start: { x: 40, y: ty }, end: { x: 555, y: ty },
      thickness: 0.8, color: ink,
    });
    ty -= 16;

    // Spaltenköpfe
    def.columns.forEach((c, i) => {
      p.drawText(c.label, { x: colX[i] ?? 40, y: ty, size: 9, font: bold, color: ink });
    });
    ty -= 14;
    return ty;
  };

  let page = pdf.addPage([595, 842]);
  let y = drawHeader(page);

  for (const row of (rows ?? [])) {
    // Vor jeder Zeile prüfen: reicht der Platz oberhalb des Footer-Bereichs?
    // Wenn nicht, neue Seite + Header wiederholen. Damit steht nie eine
    // einzelne Zeile am Seitenanfang und der Signatur-Block wird nie
    // überschrieben.
    if (y < FOOT_Y_LIMIT) {
      page = pdf.addPage([595, 842]);
      y = drawHeader(page);
    }
    def.columns.forEach((c, i) => {
      const text = fmt((row as Record<string, unknown>)[c.key]).substring(0, 22);
      page.drawText(text, { x: colX[i] ?? 40, y, size: 8, font, color: ink });
    });
    y -= 12;
  }

  // Signatur-Block: braucht ca. 100 pt Höhe (Überschrift + Linie + Name +
  // Datum). Wenn nicht mehr genug Platz auf der aktuellen Seite ist,
  // wird eine neue Seite mit Header angelegt — die letzte Datenzeile
  // bleibt aber auf ihrer Ursprungs-Seite.
  const { data: sigs } = await caller.from("partner_signatures").select("full_name,role_label,image_url").order("sort_order", { ascending: true });
  if (y < FOOT_Y_LIMIT) {
    page = pdf.addPage([595, 842]);
    y = drawHeader(page);
  }
  const sigY = 120;
  const slotW = 260;
  let sx = 40;
  page.drawText("Freigabe / Unterschriften:", { x: 40, y: sigY + 50, size: 10, font: bold, color: ink });
  const today = new Date().toISOString().substring(0, 10);
  for (const s of (sigs ?? [])) {
    page.drawLine({ start: { x: sx, y: sigY + 22 }, end: { x: sx + slotW - 30, y: sigY + 22 }, thickness: 0.5, color: ink });
    const nm = String((s as { full_name?: unknown }).full_name ?? "");
    const rl = String((s as { role_label?: unknown }).role_label ?? "");
    page.drawText(nm, { x: sx, y: sigY + 8, size: 9, font: bold, color: ink });
    page.drawText(`${rl} - Datum: ${today}`, { x: sx, y: sigY - 4, size: 7, font, color: ink });
    sx += slotW;
  }
  page.drawText(`Einträge: ${(rows ?? []).length}`, { x: 40, y: 40, size: 8, font, color: ink });
  const bytes = await pdf.save();
  return jsonResponse({ filename: `${kind}_${from}_${to}.pdf`, mime: "application/pdf", base64: encodeBase64(bytes) });
});
