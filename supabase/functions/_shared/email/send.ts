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

  if (!res.ok) {
    console.error(`[${opts.tag}] resend_error`, await res.text());
    return "failed";
  }
  return "sent";
}
