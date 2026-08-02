// ============================================================================
// Edge Function: account-deletion-request
// ----------------------------------------------------------------------------
// Nimmt einen Löschantrag nach Art. 17 DSGVO entgegen.
//
// Warum diese Function und nicht wie bisher der direkte RPC-Aufruf aus der
// App: Der Antragsdialog verspricht „Wir melden uns per E-Mail" — versendet
// wurde bislang aber nichts. Art. 12 Abs. 3 DSGVO verlangt eine
// Unterrichtung binnen eines Monats; ohne Eingangsbestätigung hat die
// betroffene Person zudem keinen Nachweis, dass der Antrag angekommen ist.
//
// Die Function ruft dieselbe RPC wie vorher auf (request_account_deletion,
// SECURITY DEFINER, prüft auth.uid() selbst) und verschickt danach zwei
// Mails: die Eingangsbestätigung an den Kunden und eine Notiz an die
// Verwaltung, damit die Monatsfrist nicht unbemerkt läuft.
//
// Mailfehler brechen den Antrag nicht ab — er ist zu dem Zeitpunkt bereits
// revisionssicher gespeichert. Der Status geht in die Antwort.
// ============================================================================
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.4";
import { jsonResponse, corsHeaders } from "../_shared/cors.ts";
import { sendMail } from "../_shared/email/send.ts";
import {
  accountDeletionRequestInternal,
  accountDeletionRequestReceived,
} from "../_shared/email/templates/account_deletion.ts";
import { mailConfig } from "../_shared/email/config.ts";

/// Frist nach Art. 12 Abs. 3 DSGVO: unverzüglich, spätestens einen Monat.
const DEADLINE_DAYS = 30;

function formatBerlin(iso: string, withTime: boolean): string {
  return new Date(iso).toLocaleString("de-DE", {
    timeZone: "Europe/Berlin",
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    ...(withTime ? { hour: "2-digit", minute: "2-digit" } : {}),
  });
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });
  if (req.method !== "POST") return jsonResponse({ error: "Method not allowed" }, 405);

  const authHeader = req.headers.get("Authorization");
  if (!authHeader) return jsonResponse({ error: "Missing Authorization" }, 401);

  try {
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const anonKey = Deno.env.get("SUPABASE_ANON_KEY")!;
    const caller = createClient(supabaseUrl, anonKey, {
      global: { headers: { Authorization: authHeader } },
    });

    const { data: userData, error: userErr } = await caller.auth.getUser();
    if (userErr || !userData.user) return jsonResponse({ error: "Unauthorized" }, 401);
    const email = userData.user.email ?? "";

    let reason = "";
    try {
      const body = await req.json();
      reason = String(body.reason ?? "").trim();
    } catch {
      // Grund ist optional — ein leerer Body ist kein Fehler.
    }

    const { data: row, error: rpcErr } = await caller.rpc(
      "request_account_deletion",
      { p_reason: reason || null },
    );
    if (rpcErr) return jsonResponse({ error: rpcErr.message }, 400);

    const rec = row as { requested_at?: string } | null;
    const requestedAt = rec?.requested_at ?? new Date().toISOString();
    const receivedAt = formatBerlin(requestedAt, true);
    const deadline = formatBerlin(
      new Date(new Date(requestedAt).getTime() + DEADLINE_DAYS * 86_400_000)
        .toISOString(),
      false,
    );

    // Vorname für die Anrede; fehlt er, greift der Fallback im Template.
    const { data: profile } = await caller
      .from("profiles").select("first_name").maybeSingle();
    const firstName =
      String((profile as { first_name?: unknown } | null)?.first_name ?? "").trim();

    let emailStatus = "skipped";
    if (email) {
      const mail = accountDeletionRequestReceived({
        firstName,
        receivedAt,
        deadline,
        reason,
      });
      emailStatus = await sendMail({
        to: email,
        subject: mail.subject,
        html: mail.html,
        text: mail.text,
        tag: "account-deletion-request",
      });
    }

    // Interne Notiz. Scheitert sie, ist das für den Kunden folgenlos —
    // deshalb nur geloggt, nicht in der Antwort.
    const internal = accountDeletionRequestInternal({
      email: email || "(unbekannt)",
      receivedAt,
      deadline,
      reason,
    });
    await sendMail({
      to: mailConfig.supportEmail,
      subject: internal.subject,
      html: internal.html,
      text: internal.text,
      tag: "account-deletion-request/intern",
    });

    return jsonResponse({
      ok: true,
      received_at: receivedAt,
      deadline,
      email_to: email,
      email_status: emailStatus,
    });
  } catch (e) {
    const msg = e instanceof Error ? e.message : String(e);
    return jsonResponse({ error: msg }, 500);
  }
});
