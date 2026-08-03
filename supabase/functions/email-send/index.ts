// ============================================================================
// Edge Function: email-send
// ----------------------------------------------------------------------------
// Generischer E-Mail-Versand über Resend (https://resend.com). Erwartet die
// Umgebungsvariable RESEND_API_KEY. Wenn nicht gesetzt, wird der Versand
// nur ins Log geschrieben (Dev-Modus).
//
// Aufruf durch andere Edge Functions oder RPCs — kein direkter Client-Zugriff
// erlaubt (verify_jwt=true, RLS-Rolle wird zusätzlich geprüft).
// ============================================================================
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.4";
import { jsonResponse, corsHeaders } from "../_shared/cors.ts";
import { sendMail } from "../_shared/email/send.ts";


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

  // Nur Admin/Gesellschafter dürfen ausserhalb von system-Kontext senden.
  //
  // ACHTUNG, hier lag eine Lücke: Die Prüfung sah bis 03.08.2026 nur auf
  // `role`. Der Trigger app.handle_new_user übernimmt die Rolle aber aus
  // den Signup-Metadaten, die bei einer Selbstregistrierung vom Browser
  // kommen — wer sich mit role: 'system_admin' anmeldete, bekam eine
  // Profilzeile mit dieser Rolle und bestand diese Prüfung. Damit ließ
  // sich beliebige Post von noreply@boerdesnack24.de verschicken: ein
  // offenes Relay unter eigener Domain.
  //
  // Geschützt hat das nur `status`, den der Trigger für interne Rollen auf
  // 'invited' setzt — und genau den hat diese Zeile nicht ausgewertet.
  // Dieselbe Lücke wurde in der Datenbank mit Migration 0079 geschlossen;
  // Edge Functions waren dort nicht erfasst.
  const { data: profile } = await caller
    .from("profiles")
    .select("role, status, deleted_at")
    .maybeSingle();
  const darfSenden = profile !== null
    && profile.deleted_at === null
    && profile.status === "active"
    && ["system_admin", "shareholder"].includes(profile.role);
  if (!darfSenden) {
    return jsonResponse({ error: "Nicht autorisiert" }, 403);
  }

  let body: {
    to: string | string[];
    subject: string;
    html?: string;
    text?: string;
  };
  try { body = await req.json(); }
  catch { return jsonResponse({ error: "Invalid JSON" }, 400); }

  if (!body.to || !body.subject || !(body.html || body.text)) {
    return jsonResponse({ error: "to/subject/html-or-text sind Pflicht" }, 400);
  }

  const to = Array.isArray(body.to) ? body.to : [body.to];

  // Versand über den gemeinsamen Sammelpunkt statt über einen eigenen
  // fetch. Vorher ging diese Function am Protokoll vorbei — damit war
  // „jede versendete E-Mail einsehbar" nicht einlösbar, weil
  // approval-notify über genau diesen Weg verschickt.
  const status = await sendMail({
    to,
    subject: body.subject,
    html: body.html ?? "",
    text: body.text,
    tag: "email-send",
  });

  if (status === "failed") {
    return jsonResponse({ error: "resend_error" }, 502);
  }
  return jsonResponse({ ok: true, mode: status });
});
