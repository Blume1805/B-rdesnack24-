// ============================================================================
// Edge Function: documents-zip-export
// ----------------------------------------------------------------------------
// Bündelt alle Dokumente (optional gefiltert nach Kategorie) als ZIP für
// den Prüfer-Export (Betriebsprüfung, VLÜA). Jede aktuelle Version wird
// aus Storage geholt und mit einem menschenlesbaren Dateinamen abgelegt.
//
// Aufruf:  POST { category?: string }
// Antwort: { filename, mime, base64 }
// ============================================================================
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.4";
import JSZip from "https://esm.sh/jszip@3.10.1";
import { encodeBase64 } from "https://deno.land/std@0.224.0/encoding/base64.ts";
import { jsonResponse, corsHeaders } from "../_shared/cors.ts";

// Sanitize für Dateinamen im ZIP
function safeName(s: string): string {
  return s.replace(/[^\w\-\_\.äöüÄÖÜß ]+/g, "_").substring(0, 80);
}

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

  let category: string | null = null;
  try {
    const body = await req.json();
    if (typeof body?.category === "string" && body.category.trim().length > 0) {
      category = body.category.trim();
    }
  } catch { /* leerer Body ist ok */ }

  // Reihenliste holen — RLS via SECURITY-DEFINER-RPC
  const { data: docs, error } = await caller.rpc("list_documents");
  if (error) return jsonResponse({ error: error.message }, 403);

  const rows = ((docs ?? []) as Array<Record<string, unknown>>)
    .filter((d) => !category || d.category === category)
    .filter((d) => typeof d.latest_file_path === "string" &&
      (d.latest_file_path as string).length > 0);

  if (rows.length === 0) {
    return jsonResponse({ error: "Keine Dokumente im Filter" }, 404);
  }

  const zip = new JSZip();
  const index: string[] = [
    `Bördesnack24 – Prüfer-Export`,
    `Erstellt: ${new Date().toISOString().substring(0, 19).replace("T", " ")}`,
    `Kategorie-Filter: ${category ?? "(alle)"}`,
    `Dokumente: ${rows.length}`,
    "",
    "Inhalt:",
  ];

  for (let i = 0; i < rows.length; i++) {
    const r = rows[i];
    const path = String(r.latest_file_path);
    const title = safeName(String(r.title ?? "dokument"));
    const cat = safeName(String(r.category ?? "sonstige"));
    const ver = r.current_version ?? 1;
    // Endung aus dem Storage-Pfad extrahieren, sonst .bin
    const ext = (path.match(/\.[a-zA-Z0-9]+$/) ?? [".bin"])[0];
    const filename = `${String(i + 1).padStart(3, "0")}_${title}_v${ver}${ext}`;

    try {
      const dl = await caller.storage.from("documents").download(path);
      if (dl.error || !dl.data) {
        index.push(`${filename}  — FEHLER: ${dl.error?.message ?? "leer"}`);
        continue;
      }
      const buf = new Uint8Array(await dl.data.arrayBuffer());
      zip.folder(cat)?.file(filename, buf);
      const valid = r.valid_until ? `gültig bis ${r.valid_until}` : "unbefristet";
      index.push(
        `${cat}/${filename}  (v${ver}, ${r.status}, ${valid})`,
      );
    } catch (e) {
      index.push(`${filename}  — EXCEPTION: ${e}`);
    }
  }

  zip.file("INDEX.txt", index.join("\n"));

  const bytes = await zip.generateAsync({ type: "uint8array" });
  const today = new Date().toISOString().substring(0, 10);
  const name = `boerdesnack24-dokumente_${category ?? "alle"}_${today}.zip`;
  return jsonResponse({
    filename: name,
    mime: "application/zip",
    base64: encodeBase64(bytes),
  });
});
