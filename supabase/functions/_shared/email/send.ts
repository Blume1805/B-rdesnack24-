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

/// Taugt der Wert als HTTP-Header-Wert?
///
/// Liefert `null`, wenn alles in Ordnung ist, sonst eine Beschreibung des
/// Problems — ausdrücklich OHNE den Wert selbst, weil hier ein Geheimnis
/// durchläuft. Stelle und Codepunkt genügen; ein Zeichen, das hier
/// auffällt, gehört ohnehin nicht zu einem gültigen Schlüssel.
///
/// Anlass (05.08.2026): Im hinterlegten RESEND_API_KEY steckte ein Zeichen
/// jenseits von Latin-1. `fetch` wirft dann beim Bauen der Anfrage mit
/// „not a valid ByteString" — einer Meldung, die weder den Header noch die
/// Ursache nennt. Registrierung und Passwort-Reset standen still, und der
/// Weg von der Meldung zum eigentlichen Fehler (ein verunglücktes Einfügen
/// im Dashboard) war unnötig weit.
export function headerProblem(wert: string): string | null {
  for (let i = 0; i < wert.length; i++) {
    const c = wert.charCodeAt(i);
    const stelle = `Stelle ${i + 1} von ${wert.length}`;
    const punkt = `U+${c.toString(16).toUpperCase().padStart(4, "0")}`;
    if (c > 0xFF) return `Zeichen ausserhalb Latin-1 an ${stelle} (${punkt})`;
    if (c === 0x00 || c === 0x0A || c === 0x0D) {
      return `Steuerzeichen an ${stelle} (${punkt})`;
    }
  }
  return null;
}

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
  /// `false` = Betreff, Empfänger und Status protokollieren, den KÖRPER
  /// aber nicht. Siehe die Begründung an `sendMail`.
  logBody?: boolean;
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
        html: row.logBody === false ? null : row.html,
        text_body: row.logBody === false ? null : (row.text ?? null),
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
  /// Antwortadresse. Standard: die Support-Adresse aus `mailConfig`.
  ///
  /// Warum überhaupt: Der Absender ist `noreply@` — eine Adresse, die
  /// niemand liest. Kunden antworten trotzdem, weil „Antworten" der
  /// naheliegende Knopf ist. Ohne `Reply-To` läuft diese Antwort ins
  /// Leere: Der Kunde hält seine Frage für gestellt, bei uns kommt nie
  /// etwas an. Mit `Reply-To` landet sie im Support-Postfach, das im
  /// Fuß jeder Mail ohnehin schon genannt wird.
  ///
  /// Nebeneffekt, wegen dem es hier eingebaut wurde: Eine Mail ohne
  /// jeden Rückweg ist für Spamfilter ein (schwaches) negatives Signal.
  /// Der grosse Hebel gegen den Spam-Ordner ist es nicht — das sind die
  /// Ziel-Domains der Links und DMARC.
  replyTo?: string | string[];
  /// Soll der Mailkörper mitprotokolliert werden? Standard: ja.
  ///
  /// `false` setzt, wer eine Mail verschickt, die ein Geheimnis TRÄGT —
  /// derzeit ausschliesslich die Aktionsmails aus `auth-email-hook`
  /// (Passwort zurücksetzen, Anmeldelink, Einladung, Registrierung,
  /// Adresswechsel, erneute Anmeldung). Deren Körper enthält den
  /// `token_hash` in der Bestätigungs-URL und den Einmalcode im Klartext.
  ///
  /// Warum das nötig ist: `email_log` ist für interne Rollen lesbar. Ein
  /// mitprotokollierter Körper macht aus jeder Passwort-Zurücksetzung
  /// einen ablesbaren Zugang zu genau dem Konto, für das sie ausgelöst
  /// wurde — und auslösen kann sie jeder, unangemeldet, für jede
  /// registrierte Adresse. Das ist kein Protokoll mehr, das ist ein
  /// Schlüsselbrett.
  ///
  /// Was erhalten bleibt: Empfänger, Betreff, Zeitpunkt, Status,
  /// `provider_id` und Fehlertext. Die Frage „ist die Mail rausgegangen
  /// und was sagt Resend dazu?" — der Zweck des Protokolls — bleibt
  /// beantwortbar.
  logBody?: boolean;
}): Promise<SendResult> {
  // `trim()` ist Hygiene, kein Schutz: Umschliessende Leerzeichen entfernt
  // die Header-Verarbeitung ohnehin selbst (nachgemessen). Ein Umbruch
  // MITTEN im Wert lässt `fetch` dagegen sofort werfen, noch vor jedem
  // Netzverkehr — dagegen hilft nur der gefangene Aufruf weiter unten.
  const key = Deno.env.get("RESEND_API_KEY")?.trim();
  const to = Array.isArray(opts.to) ? opts.to : [opts.to];

  if (!key) {
    console.log(
      `[${opts.tag}] RESEND_API_KEY fehlt — Simulation:`,
      { from: mailConfig.from, to, subject: opts.subject },
    );
    await logMail({ ...opts, to, status: "dev" });
    return "dev";
  }

  // Den Schlüssel prüfen, bevor er in einen Header geht. Sonst wirft
  // `fetch` mit „not a valid ByteString" — ohne zu sagen, welcher Header
  // gemeint ist oder woran es liegt. Der gefangene Aufruf unten würde das
  // zwar protokollieren, aber niemand könnte etwas damit anfangen.
  const schluesselProblem = headerProblem(key);
  if (schluesselProblem) {
    const grund = `RESEND_API_KEY ist als Header unbrauchbar: ${schluesselProblem}. ` +
      "Der Schlüssel wurde vermutlich verunglückt eingefügt — im " +
      "Supabase-Dashboard unter Edge Functions → Secrets neu eintragen.";
    console.error(`[${opts.tag}] ${grund}`);
    await logMail({ ...opts, to, status: "failed", error: grund });
    return "failed";
  }

  // Der Aufruf ist abgesichert, weil die Zusage oben — „wirft bewusst
  // nicht" — sonst nicht gilt. `fetch` wirft bei unbrauchbarem Header,
  // DNS-/TLS-Problem oder Abbruch der Verbindung; ungefangen reisst das
  // den Aufrufer mit, obwohl dessen fachlicher Vorgang längst gespeichert
  // ist. Genau das ist am 05.08.2026 passiert: Der Passwort-Reset lief in
  // einen 500, `email_log` blieb leer und bei Resend kam nie etwas an —
  // also gab es keine einzige Stelle, an der man den Grund hätte ablesen
  // können. Ein gefangener Wurf landet dagegen als `failed` mit Wortlaut
  // im Protokoll.
  let res: Response;
  let raw: string;
  try {
    res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${key}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: mailConfig.from,
        to,
        // Feldname bewusst in Schlangenschrift: Die REST-Schnittstelle
        // von Resend erwartet `reply_to`. Die Kamelschrift `replyTo`
        // gehört dem MCP-Werkzeug, nicht der HTTP-Schnittstelle — dort
        // heissen auch `idempotency_key`, `scheduled_at` und `topic_id`
        // so. Nachgeprüft werden konnte das hier nicht: resend.com ist
        // aus der Arbeitsumgebung gesperrt. Falls es doch falsch ist,
        // antwortet Resend mit 422, und der Wortlaut steht als `failed`
        // samt Fehlertext in `email_log` — sichtbar beim ersten Versand.
        reply_to: opts.replyTo ?? mailConfig.supportEmail,
        subject: opts.subject,
        html: opts.html,
        text: opts.text,
      }),
    });
    raw = await res.text();
  } catch (e) {
    const grund = e instanceof Error ? `${e.name}: ${e.message}` : String(e);
    console.error(`[${opts.tag}] resend_unerreichbar`, grund);
    await logMail({
      ...opts,
      to,
      status: "failed",
      error: `Aufruf an Resend fehlgeschlagen — ${grund}`.slice(0, 2000),
    });
    return "failed";
  }

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
