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
import { mailInhalt } from "../_shared/email/db_templates.ts";
import {
  hookSecretCount,
  verifyWebhookSignature,
  WebhookError,
} from "../_shared/email/webhook.ts";

const TAG = "auth-email-hook";

/// Schreibt den Ausgang der Signaturprüfung nach `public.auth_hook_diagnose`.
///
/// Warum eine Tabelle und nicht `console.error`: Am 05.08.2026 war die
/// Registrierung tot, und die Suche dauerte Stunden, weil beide naheliegenden
/// Quellen nichts hergaben. GoTrue schreibt JEDEN Hook-Fehler in die Meldung
/// „Hook requires authorization token" um — unabhängig davon, was der Hook
/// wirklich gesagt hat. Und das Aufruf-Protokoll der Edge Functions hat
/// Lücken: Ein nachweislich erfolgter Aufruf tauchte dort nicht auf.
///
/// Die Datenbank war am Ende die einzige Stelle, in die man verlässlich
/// hineinsehen konnte. Also schreibt die Function dorthin.
///
/// Bewusst ohne Geheimnisse: nur Längen, Anzahlen und der Grund im Klartext.
/// Schlägt das Schreiben fehl, wird das ignoriert — eine Diagnose darf den
/// kritischen Pfad niemals zusätzlich blockieren.
async function diagnose(row: {
  ok: boolean;
  grund?: string;
  secret_laenge?: number;
  secret_anzahl?: number;
  sig_anzahl?: number;
  ts_versatz?: number;
  aktion?: string;
}): Promise<void> {
  try {
    const url = Deno.env.get("SUPABASE_URL");
    const key = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");
    if (!url || !key) return;
    await fetch(`${url}/rest/v1/auth_hook_diagnose`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        apikey: key,
        Authorization: `Bearer ${key}`,
        Prefer: "return=minimal",
      },
      body: JSON.stringify(row),
    });
  } catch {
    // absichtlich still
  }
}

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

  // Kennzahlen für die Diagnose, bevor geprüft wird — sie sollen auch dann
  // vorliegen, wenn die Prüfung wirft.
  const sigHeader = req.headers.get("webhook-signature") ?? "";
  const tsHeader = Number(req.headers.get("webhook-timestamp"));
  const kennzahlen = {
    secret_laenge: secret.length,
    secret_anzahl: hookSecretCount(secret),
    sig_anzahl: sigHeader.split(" ").filter((p) => p.startsWith("v1,")).length,
    ts_versatz: Number.isFinite(tsHeader)
      ? Math.round(Date.now() / 1000 - tsHeader)
      : undefined,
  };

  try {
    await verifyWebhookSignature({ payload, headers: req.headers, secret });
  } catch (e) {
    const msg = e instanceof WebhookError ? e.message : "Signaturprüfung fehlgeschlagen";
    console.error(`[${TAG}] ${msg}`);
    await diagnose({ ok: false, grund: msg, ...kennzahlen });
    return jsonError(msg, 401);
  }
  await diagnose({ ok: true, ...kennzahlen });

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
        const verifyUrl = buildVerifyUrl({
          supabaseUrl,
          tokenHash: t.hash,
          action,
          redirectTo,
        });
        const codeFassung = authActionEmail({ action, verifyUrl, code: t.code });
        // Unbekannter Typ: die Datenbank gar nicht erst fragen. Sonst
        // könnte eine Vorlage eine Mail für einen Vorgang erzeugen, den
        // der Code bewusst durchwinkt.
        if (!codeFassung) continue;
        const mail = await mailInhalt(
          `auth_${action}`,
          { confirmUrl: verifyUrl, otp: t.code },
          () => codeFassung,
        );
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
    const verifyUrl = buildVerifyUrl({
      supabaseUrl,
      tokenHash: body.email_data?.token_hash ?? "",
      action,
      redirectTo,
    });
    const otp = body.email_data?.token ?? "";
    const codeFassung = authActionEmail({ action, verifyUrl, code: otp });
    if (!codeFassung) {
      // Unbekannter Typ: durchwinken statt den Auth-Vorgang abzubrechen.
      // Die Datenbank wird hier bewusst nicht gefragt — eine Vorlage soll
      // keine Mail für einen Vorgang erzeugen, den der Code nicht kennt.
      console.warn(`[${TAG}] unbekannter email_action_type: ${action}`);
      return ok();
    }

    // Vorlage aus der Datenbank, sonst die Fassung aus dem Code (0092).
    const mail = await mailInhalt(
      `auth_${action}`,
      { confirmUrl: verifyUrl, otp },
      () => codeFassung,
    );

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
