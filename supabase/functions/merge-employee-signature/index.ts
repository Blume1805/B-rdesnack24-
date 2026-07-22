// ============================================================================
// Edge Function: merge-employee-signature
// ----------------------------------------------------------------------------
// Nimmt eine document_employee_signatures-Task, holt Original-Dokument
// und das gezeichnete Signatur-PNG, erzeugt ein Nachweis-PDF (Original
// falls PDF + Signatur-Seite; bei DOCX/anderen nur Signatur-Seite mit
// Verweis auf das Original) und schreibt es in Storage. Setzt danach
// signed_pdf_path auf der Task-Row.
// ============================================================================
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.4";
import { PDFDocument, StandardFonts, rgb, type PDFFont } from "https://esm.sh/pdf-lib@1.17.1";
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

// Zeilenumbruch für lange Werte (z. B. E-Mail-Adressen/Namen), damit in der
// Key/Value-Liste nichts an der Seitenkante abgeschnitten wird.
function wrapText(font: PDFFont, text: string, maxWidth: number, size: number): string[] {
  const words = String(text).split(" ");
  const lines: string[] = [];
  let current = "";
  for (const word of words) {
    const test = current ? `${current} ${word}` : word;
    if (current && font.widthOfTextAtSize(test, size) > maxWidth) {
      lines.push(current);
      current = word;
    } else {
      current = test;
    }
  }
  if (current || lines.length === 0) lines.push(current);
  return lines;
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });
  if (req.method !== "POST") return jsonResponse({ error: "Method not allowed" }, 405);
  const authHeader = req.headers.get("Authorization");
  if (!authHeader) return jsonResponse({ error: "Missing Authorization" }, 401);

  const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
  const anonKey     = Deno.env.get("SUPABASE_ANON_KEY")!;
  const serviceKey  = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
  const caller = createClient(supabaseUrl, anonKey,
    { global: { headers: { Authorization: authHeader } } });
  const admin  = createClient(supabaseUrl, serviceKey);

  let body: { task_id: string };
  try { body = await req.json(); }
  catch { return jsonResponse({ error: "Invalid JSON" }, 400); }
  if (!body.task_id) return jsonResponse({ error: "task_id fehlt" }, 400);

  // Task laden (RLS via caller — Mitarbeiter darf eigene Task lesen)
  const { data: task, error: tErr } = await caller
    .from("document_employee_signatures")
    .select("id, document_id, document_version, employee_id, signature_png_path, "
          + "invited_at, signed_at, ip_hash, status, "
          + "employee:profiles!document_employee_signatures_employee_id_fkey(full_name,email)")
    .eq("id", body.task_id).maybeSingle();
  if (tErr || !task) return jsonResponse({ error: "Task nicht gefunden" }, 404);
  if (!task.signature_png_path) {
    return jsonResponse({ error: "Signatur-PNG-Pfad fehlt" }, 400);
  }

  // Dokument + aktuelle Version laden (admin — kein RLS-Problem)
  const { data: doc } = await admin.from("documents")
    .select("id, title, category").eq("id", task.document_id).maybeSingle();
  const { data: ver } = await admin.from("document_versions")
    .select("file_path").eq("document_id", task.document_id)
    .eq("version", task.document_version).maybeSingle();
  const originalPath = ver?.file_path as string | undefined;

  // Signatur-PNG holen
  const sigDl = await admin.storage.from("employee-signatures")
    .download(task.signature_png_path);
  if (sigDl.error || !sigDl.data) {
    return jsonResponse({ error: "Signatur-PNG nicht ladbar: " + (sigDl.error?.message ?? "") }, 500);
  }
  const sigBytes = new Uint8Array(await sigDl.data.arrayBuffer());

  // Original laden (falls PDF, hängen wir an — sonst nur Referenz)
  let originalPdfBytes: Uint8Array | null = null;
  const isPdf = (originalPath ?? "").toLowerCase().endsWith(".pdf");
  if (isPdf && originalPath) {
    const dl = await admin.storage.from("documents").download(originalPath);
    if (!dl.error && dl.data) {
      originalPdfBytes = new Uint8Array(await dl.data.arrayBuffer());
    }
  }

  // Ausgabe-PDF aufbauen
  const outPdf = await PDFDocument.create();
  const font = await outPdf.embedFont(StandardFonts.Helvetica);
  const bold = await outPdf.embedFont(StandardFonts.HelveticaBold);
  const italic = await outPdf.embedFont(StandardFonts.HelveticaOblique);

  // Original einbetten (nur PDF)
  if (originalPdfBytes) {
    try {
      const src = await PDFDocument.load(originalPdfBytes);
      const copied = await outPdf.copyPages(src, src.getPageIndices());
      for (const p of copied) outPdf.addPage(p);
    } catch (_) {
      // Falls Original korrupt/verschlüsselt: einfach nur Nachweis-Seite
    }
  }

  // Signatur-Nachweis-Seite anhängen
  const page = outPdf.addPage([595, 842]);
  // Aussteller oben rechts (Stammdaten-Header)
  {
    const hy = 800;
    page.drawText(ISSUER.name,      { x: 320, y: hy,      size: 9,  font: bold, color: INK });
    page.drawText(ISSUER.street,    { x: 320, y: hy - 11, size: 8,  font, color: MUTED });
    page.drawText(ISSUER.cityLine,  { x: 320, y: hy - 22, size: 8,  font, color: MUTED });
    page.drawText(`Steuernummer: ${ISSUER.taxNumber}`, { x: 320, y: hy - 34, size: 8, font, color: MUTED });
    page.drawText(`USt-IdNr.: ${ISSUER.vatId}`,        { x: 320, y: hy - 45, size: 8, font, color: MUTED });
    // Goldene Trennlinie unter dem Stammdaten-Header (analog document-finalize/finance-export-pdf)
    page.drawLine({ start: { x: 40, y: hy - 55 }, end: { x: 555, y: hy - 55 },
      thickness: 0.7, color: GOLD });
  }
  let y = 800 - 70;
  page.drawText("Bördesnack24 – Signatur-Nachweis (IfSG/Belehrung)",
    { x: 40, y, size: 15, font: bold, color: GOLD });
  y -= 8;
  // Goldene Unterstreichung unter der Überschrift
  page.drawLine({ start: { x: 40, y }, end: { x: 555, y },
    thickness: 1.4, color: GOLD });
  y -= 14;
  page.drawText(`Dokument: ${doc?.title ?? "?"}` +
    `${doc?.category ? " · Kategorie: " + doc.category : ""}` +
    ` · Version ${task.document_version}`,
    { x: 40, y, size: 10, font, color: INK });
  y -= 14;
  page.drawLine({ start: { x: 40, y }, end: { x: 555, y },
    thickness: 0.8, color: INK });
  y -= 20;

  const empName = (task.employee as { full_name?: string } | null)?.full_name ?? "?";
  const empMail = (task.employee as { email?: string } | null)?.email ?? "";
  const signedAt = task.signed_at
    ? String(task.signed_at).substring(0, 19).replace("T", " ")
    : new Date().toISOString().substring(0, 19).replace("T", " ");
  const invitedAt = task.invited_at
    ? String(task.invited_at).substring(0, 19).replace("T", " ")
    : "?";

  const rows: Array<[string, string]> = [
    ["Unterzeichner",   empName],
    ["E-Mail",          empMail],
    ["Eingeladen am",   invitedAt],
    ["Signiert am",     signedAt],
    ["Task-ID",         task.id],
    ["Auth-Kontext",    task.ip_hash ? `IP-Hash ${task.ip_hash.substring(0, 16)}…` : "-"],
  ];
  // Platzprüfung + Zeilenumbruch: lange Werte (E-Mail/Namen) sollen umbrechen
  // statt an der Seitenkante abgeschnitten zu werden.
  const VALUE_X = 200;
  const VALUE_MAX_W = 555 - VALUE_X;
  for (const [k, v] of rows) {
    const lines = wrapText(font, v, VALUE_MAX_W, 10);
    page.drawText(k, { x: 40, y, size: 10, font: bold, color: INK });
    lines.forEach((line, li) => {
      page.drawText(line, { x: VALUE_X, y: y - li * 12, size: 10, font, color: INK });
    });
    y -= 16 + Math.max(0, lines.length - 1) * 12;
  }
  // Bewusste Leerzeile vor der Signaturbox (statt der bisherigen ~8pt)
  y -= 22;

  // Signatur-Bild einbetten
  try {
    const img = await outPdf.embedPng(sigBytes).catch(async () => {
      return await outPdf.embedJpg(sigBytes);
    });
    const maxW = 260, maxH = 90;
    const scale = Math.min(maxW / img.width, maxH / img.height, 1);
    const w = img.width * scale, h = img.height * scale;
    // Kasten für die Signatur (auf beige)
    page.drawRectangle({
      x: 40, y: y - h - 14, width: 300, height: h + 24,
      borderColor: MUTED, borderWidth: 0.5,
      color: rgb(0.98, 0.96, 0.92),
    });
    page.drawImage(img, { x: 50, y: y - h - 4, width: w, height: h });
    // Name in die Box einpassen (bis 280pt Innenbreite) statt abzuschneiden.
    let nameSize = 11;
    while (nameSize > 7 && bold.widthOfTextAtSize(empName, nameSize) > 280) nameSize -= 0.5;
    page.drawText(empName, { x: 40, y: y - h - 30, size: nameSize, font: bold, color: INK });
    page.drawText(`Datum: ${signedAt}`, { x: 40, y: y - h - 44, size: 9, font, color: MUTED });
  } catch (_) {
    page.drawText("Signatur konnte nicht eingebettet werden.",
      { x: 40, y, size: 10, font, color: rgb(0.7, 0.2, 0.2) });
  }

  // Wenn Original nicht als PDF vorlag: Hinweis-Zeile
  if (!originalPdfBytes) {
    page.drawText(
      "Hinweis: Das Original-Dokument liegt als Nicht-PDF vor und ist separat abgelegt.",
      { x: 40, y: 60, size: 9, font: italic, color: MUTED });
  }
  page.drawText(`Erstellt am ${new Date().toISOString().substring(0,10)}`,
    { x: 40, y: 40, size: 8, font: italic, color: MUTED });

  const outBytes = await outPdf.save();

  // Ablage in signed-documents/employee/<task-id>.pdf
  const outPath = `employee/${task.id}.pdf`;
  const up = await admin.storage.from("signed-documents").upload(
    outPath, outBytes,
    { contentType: "application/pdf", upsert: true },
  );
  if (up.error) return jsonResponse({ error: up.error.message }, 500);

  await admin.from("document_employee_signatures")
    .update({ signed_pdf_path: outPath }).eq("id", task.id);

  const { data: signed } = await admin.storage
    .from("signed-documents").createSignedUrl(outPath, 3600 * 24);
  return jsonResponse({ ok: true, path: outPath, signed_url: signed?.signedUrl });
});
