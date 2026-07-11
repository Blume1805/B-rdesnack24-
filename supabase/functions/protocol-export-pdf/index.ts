// ============================================================================
// Edge Function: protocol-export-pdf
// ----------------------------------------------------------------------------
// Erzeugt VLÜA-/GoBD-taugliche PDF-Nachweise für ein Protokoll (Temperatur,
// Reinigung, Vernichtung, Belehrung) über einen Zeitraum.
// - Liest mit der Identität des Aufrufers (Caller-Client) -> RLS erzwingt die
//   Berechtigung automatisch (nur sichtbare Zeilen landen im PDF).
// - Rendering serverseitig via pdf-lib; Rückgabe als Base64-JSON.
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

const PROTOCOLS: Record<string, ProtocolDef> = {
  temperature: {
    table: "temperature_logs",
    dateCol: "measured_at",
    title: "Temperaturkontrolle (CCP 2: <= 7 °C)",
    columns: [
      { key: "measured_at", label: "Zeitpunkt" },
      { key: "temperature_c", label: "Ist °C" },
      { key: "within_limit", label: "i.O." },
      { key: "corrective_action", label: "Korrektur" },
    ],
  },
  cleaning: {
    table: "cleaning_logs",
    dateCol: "cleaned_at",
    title: "Reinigungsprotokoll",
    columns: [
      { key: "cleaned_at", label: "Zeitpunkt" },
      { key: "cleaning_type", label: "Art" },
      { key: "agent", label: "Mittel" },
      { key: "notes", label: "Bemerkung" },
    ],
  },
  disposal: {
    table: "disposal_logs",
    dateCol: "disposed_at",
    title: "Vernichtungsprotokoll",
    columns: [
      { key: "disposed_at", label: "Zeitpunkt" },
      { key: "product_label", label: "Produkt" },
      { key: "quantity", label: "Menge" },
      { key: "reason", label: "Grund" },
      { key: "mhd_date", label: "MHD" },
    ],
  },
  training: {
    table: "employee_trainings",
    dateCol: "training_date",
    title: "Schulungs-/Unterweisungsnachweis",
    columns: [
      { key: "training_date", label: "Datum" },
      { key: "topic", label: "Thema" },
    ],
  },
  filling: {
    table: "filling_logs",
    dateCol: "filled_at",
    title: "Befüllungsprotokoll",
    columns: [
      { key: "filled_at", label: "Zeitpunkt" },
      { key: "machine_id", label: "Automat" },
      { key: "product_id", label: "Produkt" },
      { key: "quantity", label: "Menge" },
      { key: "removed_spoiled", label: "Verderb" },
    ],
  },
  maintenance: {
    table: "maintenance_logs",
    dateCol: "reported_at",
    title: "Wartungsprotokoll",
    columns: [
      { key: "reported_at", label: "Zeitpunkt" },
      { key: "machine_id", label: "Automat" },
      { key: "issue", label: "Meldung" },
      { key: "action", label: "Maßnahme" },
      { key: "resolved", label: "Erledigt" },
    ],
  },
  cash: {
    table: "cash_collection_logs",
    dateCol: "collected_at",
    title: "Geldentnahmeprotokoll (§ 146 AO)",
    columns: [
      { key: "collected_at", label: "Zeitpunkt" },
      { key: "machine_id", label: "Automat" },
      { key: "amount_gross", label: "Brutto EUR" },
      { key: "change_amount", label: "Wechselgeld" },
      { key: "net_amount", label: "Netto EUR" },
    ],
  },
};

const fmt = (v: unknown): string => {
  if (v === null || v === undefined) return "";
  if (typeof v === "boolean") return v ? "Ja" : "Nein";
  if (typeof v === "string" && v.length > 19 && v.includes("T")) {
    return v.replace("T", " ").substring(0, 16);
  }
  return String(v);
};

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });
  if (req.method !== "POST") return jsonResponse({ error: "Method not allowed" }, 405);

  const authHeader = req.headers.get("Authorization");
  if (!authHeader) return jsonResponse({ error: "Missing Authorization" }, 401);

  const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
  const anonKey = Deno.env.get("SUPABASE_ANON_KEY")!;
  const caller = createClient(supabaseUrl, anonKey, {
    global: { headers: { Authorization: authHeader } },
  });

  let kind: string, from: string, to: string;
  try {
    const body = await req.json();
    kind = String(body.protocol);
    from = String(body.from);
    to = String(body.to);
    if (!PROTOCOLS[kind]) throw new Error("unknown protocol");
    if (!/^\d{4}-\d{2}-\d{2}$/.test(from) || !/^\d{4}-\d{2}-\d{2}$/.test(to)) {
      throw new Error("invalid range");
    }
  } catch (e) {
    return jsonResponse({ error: `Ungültige Anfrage: ${e}` }, 400);
  }

  const def = PROTOCOLS[kind];
  // RLS erzwingt die Berechtigung: ohne Recht kommen 0 Zeilen / Fehler zurück.
  const { data: rows, error } = await caller
    .from(def.table)
    .select("*")
    .gte(def.dateCol, from)
    .lte(def.dateCol, `${to}T23:59:59`)
    .order(def.dateCol, { ascending: true });
  if (error) return jsonResponse({ error: error.message }, 403);

  const pdf = await PDFDocument.create();
  let page = pdf.addPage([595, 842]);
  const font = await pdf.embedFont(StandardFonts.Helvetica);
  const bold = await pdf.embedFont(StandardFonts.HelveticaBold);
  const ink = rgb(0.08, 0.07, 0.05);
  const gold = rgb(0.99, 0.76, 0.01);
  let y = 800;

  page.drawText("Bordesnack24 - " + def.title, { x: 40, y, size: 15, font: bold, color: gold });
  y -= 22;
  page.drawText(`Zeitraum: ${from} bis ${to}`, { x: 40, y, size: 10, font, color: ink });
  y -= 24;

  // Kopfzeile
  const colX = [40, 160, 250, 340, 470];
  def.columns.forEach((c, i) => {
    page.drawText(c.label, { x: colX[i] ?? 40, y, size: 9, font: bold, color: ink });
  });
  y -= 14;

  for (const row of (rows ?? [])) {
    if (y < 50) {
      page = pdf.addPage([595, 842]);
      y = 800;
    }
    def.columns.forEach((c, i) => {
      const text = fmt((row as Record<string, unknown>)[c.key]).substring(0, 22);
      page.drawText(text, { x: colX[i] ?? 40, y, size: 8, font, color: ink });
    });
    y -= 12;
  }

  page.drawText(`Eintraege: ${(rows ?? []).length}`, { x: 40, y: 30, size: 8, font, color: ink });

  const bytes = await pdf.save();
  return jsonResponse({
    filename: `${kind}_${from}_${to}.pdf`,
    mime: "application/pdf",
    base64: encodeBase64(bytes),
  });
});
