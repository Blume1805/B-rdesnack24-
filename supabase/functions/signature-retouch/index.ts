// ============================================================================
// Edge Function: signature-retouch (Einmal-Werkzeug, idempotent)
// ----------------------------------------------------------------------------
// Korrigiert die Gesellschafter-Signaturen (User-Auftrag 19.07.2026):
//  1. Das unter "Pia Blume" hinterlegte Signaturbild ist tatsaechlich die
//     Unterschrift von Philipp Blume -> Zuordnung tauschen.
//  2. Das Bild ist ein JPEG mit weissem Hintergrund -> als PNG mit
//     transparentem Hintergrund neu erzeugen (nur der Schriftzug bleibt).
// Ausgefuehrt am 19.07.2026 (v1, request_id 26): 537.032 von 599.622 Pixeln
// transparent, Zuordnung getauscht. Bleibt als Referenz/Wiederholwerkzeug.
// ============================================================================
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.4";
import { decode, Image } from "https://deno.land/x/imagescript@1.3.0/mod.ts";
import { corsHeaders, jsonResponse } from "../_shared/cors.ts";

const SRC_ROW = "f00b9764-a7e9-4275-b64e-938357faa0de"; // Pia (trug das Bild)
const DST_ROW = "b126eb54-5ee2-4329-b20c-cafa5afc7ffa"; // Philipp (Ziel)
const SRC_OBJECT = "f00b9764-a7e9-4275-b64e-938357faa0de.jpeg";
const DST_OBJECT = "philipp-blume-transparent.png";
const BUCKET = "partner-signatures";

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

  const uid = (await caller.auth.getUser()).data.user?.id;
  if (!uid) return jsonResponse({ error: "Nicht angemeldet" }, 401);
  // Status mitprüfen: Der Trigger app.handle_new_user übernimmt die Rolle
  // aus den Signup-Metadaten, die bei Selbstregistrierung vom Browser
  // kommen. Geschützt hat bisher allein `status = 'invited'` — und den
  // wertete diese Prüfung nicht aus (vgl. Migration 0079).
  const { data: prof } = await admin.from("profiles")
    .select("role, status, deleted_at").eq("id", uid).maybeSingle();
  const p2 = prof as { role?: string; status?: string; deleted_at?: string | null } | null;
  const role = p2?.role;
  if (p2?.deleted_at != null || p2?.status !== "active"
      || (role !== "system_admin" && role !== "shareholder")) {
    return jsonResponse({ error: "Nicht autorisiert" }, 403);
  }

  // 1. Quellbild laden
  const dl = await admin.storage.from(BUCKET).download(SRC_OBJECT);
  if (dl.error || !dl.data) {
    return jsonResponse({ error: `Download fehlgeschlagen: ${dl.error?.message}` }, 500);
  }
  const srcBytes = new Uint8Array(await dl.data.arrayBuffer());

  // 2. Weiss -> transparent (weicher Verlauf an den Kanten des Schriftzugs)
  const img = (await decode(srcBytes)) as Image;
  const bmp = img.bitmap; // RGBA
  let transparent = 0;
  for (let i = 0; i < bmp.length; i += 4) {
    const lum = 0.2126 * bmp[i] + 0.7152 * bmp[i + 1] + 0.0722 * bmp[i + 2];
    if (lum >= 232) {
      bmp[i + 3] = 0;
      transparent++;
    } else if (lum > 150) {
      // Kantenglaettung: je heller, desto durchsichtiger
      bmp[i + 3] = Math.round(((232 - lum) / (232 - 150)) * 255);
    }
  }
  const pngBytes = await img.encode();

  // 3. Als PNG hochladen (Philipp-Slot)
  const up = await admin.storage.from(BUCKET).upload(DST_OBJECT, pngBytes, {
    contentType: "image/png",
    upsert: true,
  });
  if (up.error) return jsonResponse({ error: `Upload: ${up.error.message}` }, 500);
  const signed = await admin.storage.from(BUCKET)
    .createSignedUrl(DST_OBJECT, 60 * 60 * 24 * 365 * 10);
  if (signed.error || !signed.data) {
    return jsonResponse({ error: `SignedUrl: ${signed.error?.message}` }, 500);
  }

  // 4. Zuordnung tauschen: Philipp bekommt das Bild, Pias Slot wird geleert.
  const u1 = await admin.from("partner_signatures").update({
    image_url: signed.data.signedUrl,
    captured_via: "demo",
    captured_at: new Date().toISOString(),
  }).eq("id", DST_ROW);
  if (u1.error) return jsonResponse({ error: `Update Philipp: ${u1.error.message}` }, 500);
  const u2 = await admin.from("partner_signatures").update({
    image_url: null,
    captured_via: null,
    captured_at: null,
  }).eq("id", SRC_ROW);
  if (u2.error) return jsonResponse({ error: `Update Pia: ${u2.error.message}` }, 500);

  return jsonResponse({
    ok: true,
    width: img.width,
    height: img.height,
    transparent_pixels: transparent,
    total_pixels: bmp.length / 4,
    png_bytes: pngBytes.length,
    object: `${BUCKET}/${DST_OBJECT}`,
  });
});
