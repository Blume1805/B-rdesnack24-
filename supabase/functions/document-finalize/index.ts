// ============================================================================
// Edge Function: document-finalize
// ----------------------------------------------------------------------------
// Erzeugt das finale, signierte PDF eines freigegebenen Dokuments und legt
// es in Supabase Storage (Bucket 'signed-documents') ab.
// ============================================================================
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.4";
import { PDFDocument, StandardFonts, rgb } from "https://esm.sh/pdf-lib@1.17.1";
import { jsonResponse, corsHeaders } from "../_shared/cors.ts";

const ISSUER = {
  name: "Bördesnack24 GbR (Pia & Philipp Blume)",
  street: "Sülldorfer Str. 3A",
  cityLine: "39171 Sülzetal OT Osterweddingen",
  taxNumber: "102/178/01635",
  vatId: "DE 458804058",
};

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
  const ink = rgb(0.08, 0.07, 0.05);
  const gold = rgb(0.99, 0.76, 0.01);
  const muted = rgb(0.44, 0.42, 0.35);
  const positive = rgb(0.36, 0.60, 0.25);

  // Aussteller-Block rechts oben (auf jeder Seite identisch).
  const drawIssuer = (p: ReturnType<typeof pdf.addPage>) => {
    const hy = 800;
    p.drawText(ISSUER.name, { x: 320, y: hy, size: 9, font: bold, color: ink });
    p.drawText(ISSUER.street, { x: 320, y: hy - 11, size: 8, font, color: muted });
    p.drawText(ISSUER.cityLine, { x: 320, y: hy - 22, size: 8, font, color: muted });
    p.drawText(`Steuernummer: ${ISSUER.taxNumber}`, { x: 320, y: hy - 34, size: 8, font, color: muted });
    p.drawText(`USt-IdNr.: ${ISSUER.vatId}`, { x: 320, y: hy - 45, size: 8, font, color: muted });
  };

  // Deckblatt
  let page = pdf.addPage([595, 842]);
  drawIssuer(page);
  let y = 800 - 70;
  page.drawText("Bördesnack24 – Freigegebenes Dokument", { x: 40, y, size: 15, font: bold, color: gold });
  y -= 20;
  page.drawText(approval.title ?? "", { x: 40, y, size: 12, font: bold, color: ink });
  y -= 16;
  page.drawText(`Dokument-Typ: ${approval.document_kind}`, { x: 40, y, size: 10, font, color: ink });
  y -= 13;
  page.drawText(`Zeitraum: ${approval.period_from} bis ${approval.period_to}`, { x: 40, y, size: 10, font, color: ink });
  y -= 13;
  page.drawText(`Approval-ID: ${approval.id}`, { x: 40, y, size: 8, font, color: muted });
  y -= 14;

  // Trennlinie zwischen Header und Inhalt
  page.drawLine({ start: { x: 40, y }, end: { x: 555, y }, thickness: 0.8, color: ink });
  y -= 24;

  page.drawRectangle({
    x: 40, y: y - 90, width: 515, height: 90,
    borderColor: positive, borderWidth: 1,
    color: rgb(0.94, 0.98, 0.90),
  });
  page.drawText("FREIGEGEBEN", { x: 55, y: y - 22, size: 14, font: bold, color: positive });
  page.drawText("Beide Gesellschafter haben nach Prüfung digital signiert.",
    { x: 55, y: y - 40, size: 9, font, color: ink });

  const approvedAt = new Date().toISOString().substring(0, 10);
  let lineY = y - 60;
  for (const d of decisions ?? []) {
    const name = (d.approver as { full_name?: string })?.full_name ?? "?";
    const dec = (d.decision as string) === "approved" ? "freigegeben" : "abgelehnt";
    const decidedAt = d.decided_at ? String(d.decided_at).substring(0, 10) : approvedAt;
    page.drawText(`- ${name}: ${dec}  (${decidedAt})`,
      { x: 55, y: lineY, size: 9, font, color: ink });
    lineY -= 12;
  }
  y -= 110;

  page.drawText("Snapshot-Zusammenfassung", { x: 40, y, size: 11, font: bold, color: ink });
  y -= 16;
  const snap = approval.snapshot as Record<string, unknown> | null;
  if (snap && typeof snap === "object") {
    const keys = Object.keys(snap);
    for (const k of keys) {
      const v = (snap as Record<string, unknown>)[k];
      let vs = "";
      if (Array.isArray(v)) vs = `${v.length} Einträge`;
      else if (typeof v === "object") vs = "Objekt";
      else vs = String(v).substring(0, 60);
      page.drawText(`${k}: ${vs}`,
        { x: 40, y, size: 9, font, color: ink });
      y -= 12;
      if (y < 260) break;
    }
  }

  // Signaturen-Seite — gleicher Kopf, Trennlinie, dann Signatur-Karten
  page = pdf.addPage([595, 842]);
  drawIssuer(page);
  y = 800 - 70;
  page.drawText("Bördesnack24 – Digitale Signaturen", { x: 40, y, size: 15, font: bold, color: gold });
  y -= 20;
  page.drawText("Die folgenden Signaturen wurden digital eingeholt und als Freigabe-Stempel",
    { x: 40, y, size: 9, font, color: muted });
  y -= 11;
  page.drawText("auf dieses Dokument aufgebracht.",
    { x: 40, y, size: 9, font, color: muted });
  y -= 16;

  page.drawLine({ start: { x: 40, y }, end: { x: 555, y }, thickness: 0.8, color: ink });
  y -= 24;

  let sy = y;
  for (const d of decisions ?? []) {
    const name = (d.approver as { full_name?: string })?.full_name ?? "?";
    const decidedAt = d.decided_at ? String(d.decided_at).substring(0, 10) : approvedAt;
    const sigUrl = d.signature_url as string | null | undefined;

    page.drawRectangle({
      x: 40, y: sy - 130, width: 515, height: 130,
      borderColor: muted, borderWidth: 0.5, color: rgb(0.98, 0.96, 0.92),
    });

    if (sigUrl) {
      try {
        const res = await fetch(sigUrl);
        if (res.ok) {
          const buf = new Uint8Array(await res.arrayBuffer());
          const ct = res.headers.get("content-type") ?? "";
          const img = ct.includes("png")
            ? await pdf.embedPng(buf).catch(() => null)
            : await pdf.embedJpg(buf).catch(() => null);
          if (img) {
            const maxW = 200, maxH = 60;
            const scale = Math.min(maxW / img.width, maxH / img.height, 1);
            const w = img.width * scale, h = img.height * scale;
            page.drawImage(img, { x: 60, y: sy - 90, width: w, height: h });
          } else {
            page.drawLine({
              start: { x: 60, y: sy - 60 }, end: { x: 260, y: sy - 60 },
              thickness: 0.6, color: ink,
            });
          }
        }
      } catch {
        page.drawLine({
          start: { x: 60, y: sy - 60 }, end: { x: 260, y: sy - 60 },
          thickness: 0.6, color: ink,
        });
      }
    } else {
      page.drawLine({
        start: { x: 60, y: sy - 60 }, end: { x: 260, y: sy - 60 },
        thickness: 0.6, color: ink,
      });
    }

    page.drawText(name, { x: 60, y: sy - 100, size: 10, font: bold, color: ink });
    page.drawText(`Gesellschafter – freigegeben am ${decidedAt}`,
      { x: 60, y: sy - 114, size: 8, font, color: muted });

    sy -= 145;
    if (sy < 200) break;
  }

  page.drawText(`Erstellt am ${new Date().toISOString().substring(0, 10)}`,
    { x: 40, y: 40, size: 8, font, color: muted });

  const pdfBytes = await pdf.save();

  const path = `${approval.id}.pdf`;
  const uploadRes = await admin.storage.from("signed-documents").upload(
    path, pdfBytes,
    { contentType: "application/pdf", upsert: true },
  );
  if (uploadRes.error) {
    return jsonResponse({ error: uploadRes.error.message }, 500);
  }

  await admin.from("document_approvals")
    .update({ final_pdf_path: path })
    .eq("id", approval.id);

  const { data: signed } = await admin.storage
    .from("signed-documents")
    .createSignedUrl(path, 3600 * 24);
  return jsonResponse({ ok: true, path, signed_url: signed?.signedUrl });
});
