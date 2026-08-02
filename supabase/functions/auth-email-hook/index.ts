// ============================================================================
// Edge Function: auth-email-hook
// ----------------------------------------------------------------------------
// Supabase Send-Email-Hook: Statt die Auth-Mails selbst zu verschicken,
// ruft Supabase diese Function auf. Damit laufen Registrierungs-,
// Passwort- und Adressänderungsmails über unser Template-Modul und liegen
// versioniert im Repo statt als Textfeld im Dashboard.
//
// ACHTUNG — DIESE FUNCTION LIEGT IM KRITISCHEN PFAD.
// Antwortet sie nicht mit 200, bricht Supabase den Auth-Vorgang ab: keine
// Registrierung, kein Passwort-Reset. Deshalb:
//   * Signaturfehler → 401 (richtig so, dann ruft ein Fremder auf).
//   * Unbekannter Aktionstyp → 200 ohne Versand. Lieber eine Mail zu
//     wenig als eine blockierte Registrierung; alle Typen mit Link sind
//     abgedeckt, offen bleiben höchstens neue Benachrichtigungsarten.
//   * Resend-Ausfall → 500, damit Supabase dem Nutzer einen Fehler zeigt.
//     Eine stillschweigend verschluckte Bestätigungsmail wäre schlimmer:
//     der Nutzer wartet dann ewig auf eine Mail, die nie kommt.
//
// Kein verify_jwt — Supabase ruft ohne JWT auf und weist sich über die
// HMAC-Signatur aus (siehe _shared/email/webhook.ts).
//
// Aktivierung: siehe docs/EMAIL_TEMPLATES.md.
// ============================================================================
import { corsHeaders } from "../_shared/cors.ts";
import { sendMail } from "../_shared/email/send.ts";
import {
  authActionEmail,
  authNotificationEmail,
  buildVerifyUrl,
} from "../_shared/email/templates/auth.ts";
import { verifyWebhookSignature, WebhookError } from "../_shared/email/webhook.ts";

const TAG = "auth-email-hook";

interface HookPayload {
  user: { email?: string; new_email?: string };
  email_data: {
    token?: string;
    token_hash?: string;
    token_new?: string;
    token_hash_new?: string;
    redirect_to?: string;
    email_action_type?: string;
    site_url?: string;
  };
}

function jsonError(message: string, status: number): Response {
  // Supabase wertet dieses Format aus und zeigt die Meldung dem Nutzer.
  return new Response(
    JSON.stringify({ error: { http_code: status, message } }),
    { status, headers: { ...corsHeaders, "Content-Type": "application/json" } },
  );
}

function ok(): Response {
  return new Response("{}", {
    status: 200,
    headers: { ...corsHeaders, "Content-Type": "application/json" },
  });
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });
  if (req.method !== "POST") return jsonError("Method not allowed", 405);

  const secret = Deno.env.get("SEND_EMAIL_HOOK_SECRET");
  if (!secret) {
    // Ohne Secret ließe sich der Endpunkt von jedem aufrufen — dann lieber
    // gar nicht arbeiten.
    console.error(`[${TAG}] SEND_EMAIL_HOOK_SECRET fehlt`);
    return jsonError("Hook ist nicht konfiguriert", 500);
  }

  const payload = await req.text();
  try {
    await verifyWebhookSignature({ payload, headers: req.headers, secret });
  } catch (e) {
    const msg = e instanceof WebhookError ? e.message : "Signaturprüfung fehlgeschlagen";
    console.error(`[${TAG}] ${msg}`);
    return jsonError(msg, 401);
  }

  let body: HookPayload;
  try {
    body = JSON.parse(payload) as HookPayload;
  } catch {
    return jsonError("Ungültiges JSON", 400);
  }

  const action = body.email_data?.email_action_type ?? "";
  const supabaseUrl = Deno.env.get("SUPABASE_URL") ?? body.email_data?.site_url ?? "";
  const redirectTo = body.email_data?.redirect_to ?? "";

  try {
    // --- Reine Benachrichtigungen (kein Link) ------------------------------
    const notification = authNotificationEmail({ action });
    if (notification) {
      const to = body.user?.email;
      if (!to) return ok();
      const status = await sendMail({
        to,
        subject: notification.subject,
        html: notification.html,
        text: notification.text,
        tag: `${TAG}/${action}`,
      });
      return status === "failed" ? jsonError("Versand fehlgeschlagen", 500) : ok();
    }

    // --- Adresswechsel: bis zu zwei Mails ---------------------------------
    // Vorsicht, die Feldnamen sind laut Supabase-Doku vertauscht:
    // token_hash_new gehört zur BISHERIGEN Adresse, token_hash zur NEUEN.
    if (action === "email_change") {
      const current = body.user?.email;
      const next = body.user?.new_email;
      const d = body.email_data;
      const targets: Array<{ to: string; hash: string; code: string }> = [];

      if (current && d.token_hash_new) {
        targets.push({ to: current, hash: d.token_hash_new, code: d.token ?? "" });
      }
      if (next && d.token_hash) {
        targets.push({ to: next, hash: d.token_hash, code: d.token_new ?? d.token ?? "" });
      }
      // Ohne „Secure Email Change" kommt nur ein Paar — dann geht die Mail
      // an die neue Adresse, ersatzweise an die bisherige.
      if (targets.length === 0 && d.token_hash) {
        const to = next ?? current;
        if (to) targets.push({ to, hash: d.token_hash, code: d.token ?? "" });
      }
      if (targets.length === 0) {
        console.warn(`[${TAG}] email_change ohne verwertbare Token`);
        return ok();
      }

      for (const t of targets) {
        const mail = authActionEmail({
          action,
          verifyUrl: buildVerifyUrl({
            supabaseUrl,
            tokenHash: t.hash,
            action,
            redirectTo,
          }),
          code: t.code,
        });
        if (!mail) continue;
        const status = await sendMail({
          to: t.to,
          subject: mail.subject,
          html: mail.html,
          text: mail.text,
          tag: `${TAG}/${action}`,
        });
        if (status === "failed") return jsonError("Versand fehlgeschlagen", 500);
      }
      return ok();
    }

    // --- Alle übrigen Aktionsmails ----------------------------------------
    const mail = authActionEmail({
      action,
      verifyUrl: buildVerifyUrl({
        supabaseUrl,
        tokenHash: body.email_data?.token_hash ?? "",
        action,
        redirectTo,
      }),
      code: body.email_data?.token ?? "",
    });
    if (!mail) {
      // Unbekannter Typ: durchwinken statt den Auth-Vorgang abzubrechen.
      console.warn(`[${TAG}] unbekannter email_action_type: ${action}`);
      return ok();
    }

    const to = body.user?.email;
    if (!to) {
      console.warn(`[${TAG}] ${action} ohne Empfängeradresse`);
      return ok();
    }

    const status = await sendMail({
      to,
      subject: mail.subject,
      html: mail.html,
      text: mail.text,
      tag: `${TAG}/${action}`,
    });
    return status === "failed" ? jsonError("Versand fehlgeschlagen", 500) : ok();
  } catch (e) {
    const msg = e instanceof Error ? e.message : String(e);
    console.error(`[${TAG}] ${msg}`);
    return jsonError("Unerwarteter Fehler beim Mailversand", 500);
  }
});
