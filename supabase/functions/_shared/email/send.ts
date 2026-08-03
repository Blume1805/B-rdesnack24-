// Versand über Resend — eine Stelle statt drei.
//
// Bisher hatte jede versendende Function denselben Vorspann (FROM,
// RESEND_KEY, Dev-Fallback, fetch auf api.resend.com) als Kopie. Das Modul
// bündelt das; Verhalten und Log-Format bleiben gleich.
import { mailConfig } from "./config.ts";

/// Was ein Template liefert: Betreff, HTML-Fassung, Textfassung.
export interface MailContent {
  subject: string;
  html: string;
  text: string;
}

/// "sent"   — Resend hat angenommen
/// "dev"    — kein RESEND_API_KEY gesetzt, nur geloggt
/// "failed" — Resend hat abgelehnt (wird geloggt, wirft nicht)
export type SendResult = "sent" | "dev" | "failed";

/// Schreibt eine Zeile nach `public.email_log`.
///
/// Warum hier und nicht in den einzelnen Functions: Weil jede ausgehende
/// Mail durch `sendMail` läuft, ist die Vollständigkeit des Protokolls
/// eine Eigenschaft des Aufbaus und nicht der Disziplin. Wer später eine
/// neue Versandstelle baut, kann das Protokoll nicht vergessen — er
/// müsste den Sammelpunkt umgehen, und das fällt beim Lesen auf.
///
/// Fehler beim Protokollieren werden geschluckt. Eine Kündigung darf
/// nicht daran scheitern, dass die Protokollzeile nicht geschrieben
/// werden konnte; der Vorgang ist zu diesem Zeitpunkt bereits gespeichert.
async function logMail(row: {
  tag: string;
  to: string[];
  subject: string;
  html: string;
  text?: string;
  status: SendResult;
  providerId?: string | null;
  error?: string | null;
}): Promise<void> {
  const url = Deno.env.get("SUPABASE_URL");
  const key = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");
  if (!url || !key) {
    console.warn(`[${row.tag}] email_log übersprungen — SUPABASE_URL/SERVICE_ROLE_KEY fehlt`);
    return;
  }
  try {
    const res = await fetch(`${url}/rest/v1/email_log`, {
      method: "POST",
      headers: {
        "apikey": key,
        "Authorization": `Bearer ${key}`,
        "Content-Type": "application/json",
        "Prefer": "return=minimal",
      },
      body: JSON.stringify({
        direction: "out",
        tag: row.tag,
        from_address: mailConfig.from,
        to_addresses: row.to,
        subject: row.subject,
        html: row.html,
        text_body: row.text ?? null,
        status: row.status,
        provider_id: row.providerId ?? null,
        error: row.error ?? null,
      }),
    });
    if (!res.ok) {
      console.error(`[${row.tag}] email_log fehlgeschlagen [${res.status}]`, await res.text());
    }
  } catch (e) {
    console.error(`[${row.tag}] email_log fehlgeschlagen:`, e instanceof Error ? e.message : e);
  }
}

/// Verschickt eine Mail. Wirft bewusst nicht: der Aufrufer hat seinen
/// fachlichen Vorgang (Kündigung, Abo-Wechsel) zu dem Zeitpunkt schon
/// gespeichert. Ein Mailproblem darf diesen Vorgang nicht rückabwickeln —
/// der Status wandert stattdessen in die Antwort.
export async function sendMail(opts: {
  to: string | string[];
  subject: string;
  html: string;
  /// Reine Textfassung. Verbessert die Zustellbarkeit und ist die
  /// Rückfallebene für Clients ohne HTML.
  text?: string;
  /// Präfix für die Logzeile, üblicherweise der Function-Name.
  tag: string;
}): Promise<SendResult> {
  const key = Deno.env.get("RESEND_API_KEY");
  const to = Array.isArray(opts.to) ? opts.to : [opts.to];

  if (!key) {
    console.log(
      `[${opts.tag}] RESEND_API_KEY fehlt — Simulation:`,
      { from: mailConfig.from, to, subject: opts.subject },
    );
    await logMail({ ...opts, to, status: "dev" });
    return "dev";
  }

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${key}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: mailConfig.from,
      to,
      subject: opts.subject,
      html: opts.html,
      text: opts.text,
    }),
  });

  const raw = await res.text();

  if (!res.ok) {
    console.error(`[${opts.tag}] resend_error`, raw);
    await logMail({ ...opts, to, status: "failed", error: raw.slice(0, 2000) });
    return "failed";
  }

  // Resend antwortet mit { id }. Die Id ist der Faden zur Zustellung beim
  // Anbieter — ohne sie lässt sich eine Beschwerde später nicht nachverfolgen.
  let providerId: string | null = null;
  try {
    const payload = JSON.parse(raw) as { id?: unknown };
    if (typeof payload.id === "string") providerId = payload.id;
  } catch {
    /* Resend antwortet normalerweise mit JSON — sonst bleibt die Id leer. */
  }

  await logMail({ ...opts, to, status: "sent", providerId });
  return "sent";
}
