// Mails, die Supabase Auth auslöst — Bestätigung, Passwort-Reset,
// Adresswechsel, Einladung, sowie die reinen Benachrichtigungen.
//
// Zwei Sorten:
//   * Aktionsmails tragen einen Link (und zusätzlich den Zifferncode als
//     Rückfallebene, falls der Link im Mailclient zerschossen wird).
//   * Benachrichtigungen informieren nur — sie sind der sicherheits-
//     relevante Teil: Wer eine „Passwort geändert"-Mail bekommt, ohne es
//     selbst getan zu haben, merkt an dieser Stelle, dass etwas nicht
//     stimmt. Deshalb enthalten sie immer den Weg zum Support.
import { button, heading, infoBox, page, paragraph, warningBox } from "../components.ts";
import { escapeHtml, render, renderText } from "../render.ts";
import type { MailContent } from "../send.ts";
import { mailConfig } from "../config.ts";

/// Aktionstypen laut Supabase-Doku (Send Email Hook, `email_action_type`).
export const AUTH_ACTIONS = [
  "signup",
  "invite",
  "magiclink",
  "recovery",
  "email_change",
  "email",
  "reauthentication",
] as const;

export const AUTH_NOTIFICATIONS = [
  "password_changed_notification",
  "email_changed_notification",
  "phone_changed_notification",
  "identity_linked_notification",
  "identity_unlinked_notification",
  "mfa_factor_enrolled_notification",
  "mfa_factor_unenrolled_notification",
] as const;

interface ActionCopy {
  subject: string;
  title: string;
  intro: string;
  cta: string;
  /// Zusatzhinweis unter dem Button.
  note: string;
}

const ACTION_COPY: Record<string, ActionCopy> = {
  signup: {
    subject: "Bördesnack24: Bitte bestätige deine E-Mail-Adresse",
    title: "Willkommen bei Bördesnack24",
    intro: "Schön, dass du dabei bist. Bestätige noch kurz deine " +
      "E-Mail-Adresse, dann ist dein Konto startklar.",
    cta: "E-Mail-Adresse bestätigen",
    note: "Ohne Bestätigung bleibt das Konto gesperrt. Der Link gilt " +
      "24 Stunden.",
  },
  invite: {
    subject: "Bördesnack24: Du wurdest eingeladen",
    title: "Einladung zu Bördesnack24",
    intro: "Du wurdest zu Bördesnack24 eingeladen. Über den Button " +
      "richtest du dein Konto ein und vergibst dein Passwort.",
    cta: "Konto einrichten",
    note: "Der Link gilt 24 Stunden. Danach bitte eine neue Einladung " +
      "anfordern.",
  },
  magiclink: {
    subject: "Bördesnack24: Dein Anmeldelink",
    title: "Anmelden ohne Passwort",
    intro: "Mit dem Button meldest du dich direkt an — kein Passwort nötig.",
    cta: "Jetzt anmelden",
    note: "Der Link gilt eine Stunde und funktioniert nur einmal.",
  },
  recovery: {
    subject: "Bördesnack24: Passwort zurücksetzen",
    title: "Neues Passwort vergeben",
    intro: "Du hast angefordert, dein Passwort zurückzusetzen. Über den " +
      "Button legst du ein neues fest.",
    cta: "Passwort zurücksetzen",
    note: "Der Link gilt eine Stunde. Solange du ihn nicht benutzt, " +
      "bleibt dein bisheriges Passwort gültig.",
  },
  email_change: {
    subject: "Bördesnack24: Änderung deiner E-Mail-Adresse bestätigen",
    title: "E-Mail-Adresse ändern",
    intro: "Bitte bestätige die Änderung deiner E-Mail-Adresse.",
    cta: "Änderung bestätigen",
    note: "Erst nach der Bestätigung wird die neue Adresse aktiv.",
  },
  email: {
    subject: "Bördesnack24: Bitte bestätige deine E-Mail-Adresse",
    title: "E-Mail-Adresse bestätigen",
    intro: "Bitte bestätige deine E-Mail-Adresse.",
    cta: "E-Mail-Adresse bestätigen",
    note: "Der Link gilt 24 Stunden.",
  },
  reauthentication: {
    subject: "Bördesnack24: Bestätigungscode",
    title: "Bitte bestätige, dass du es bist",
    intro: "Für diesen Schritt brauchen wir eine erneute Bestätigung. " +
      "Gib den folgenden Code in der App ein.",
    cta: "",
    note: "Der Code gilt fünf Minuten.",
  },
};

const NOTIFICATION_COPY: Record<string, { subject: string; title: string; text: string }> = {
  password_changed_notification: {
    subject: "Bördesnack24: Dein Passwort wurde geändert",
    title: "Passwort geändert",
    text: "Das Passwort deines Bördesnack24-Kontos wurde soeben geändert.",
  },
  email_changed_notification: {
    subject: "Bördesnack24: Deine E-Mail-Adresse wurde geändert",
    title: "E-Mail-Adresse geändert",
    text: "Die E-Mail-Adresse deines Bördesnack24-Kontos wurde geändert.",
  },
  phone_changed_notification: {
    subject: "Bördesnack24: Deine Telefonnummer wurde geändert",
    title: "Telefonnummer geändert",
    text: "Die Telefonnummer deines Bördesnack24-Kontos wurde geändert.",
  },
  identity_linked_notification: {
    subject: "Bördesnack24: Neue Anmeldemethode verknüpft",
    title: "Anmeldemethode verknüpft",
    text: "Mit deinem Konto wurde eine weitere Anmeldemethode verknüpft.",
  },
  identity_unlinked_notification: {
    subject: "Bördesnack24: Anmeldemethode entfernt",
    title: "Anmeldemethode entfernt",
    text: "Von deinem Konto wurde eine Anmeldemethode entfernt.",
  },
  mfa_factor_enrolled_notification: {
    subject: "Bördesnack24: Zwei-Faktor-Authentifizierung eingerichtet",
    title: "Zwei-Faktor-Authentifizierung aktiv",
    text: "Für dein Konto wurde ein zweiter Faktor eingerichtet.",
  },
  mfa_factor_unenrolled_notification: {
    subject: "Bördesnack24: Zwei-Faktor-Authentifizierung entfernt",
    title: "Zwei-Faktor-Authentifizierung entfernt",
    text: "Für dein Konto wurde ein zweiter Faktor entfernt.",
  },
};

/// Baut die Bestätigungs-URL. Der Link zeigt auf den Verify-Endpunkt von
/// Supabase, der den Token einlöst und danach auf [redirectTo] weiterleitet.
export function buildVerifyUrl(opts: {
  supabaseUrl: string;
  tokenHash: string;
  action: string;
  redirectTo: string;
}): string {
  const url = new URL(`${opts.supabaseUrl.replace(/\/+$/, "")}/auth/v1/verify`);
  url.searchParams.set("token", opts.tokenHash);
  url.searchParams.set("type", opts.action);
  if (opts.redirectTo) url.searchParams.set("redirect_to", opts.redirectTo);
  return url.toString();
}

function codeBlock(code: string): string {
  return infoBox(
    `<p class="bs-text" style="margin:0 0 4px;font-size:12px;">` +
      `Oder gib diesen Code in der App ein:</p>` +
      `<p class="bs-text" style="margin:0;font-size:24px;font-weight:800;` +
      `letter-spacing:4px;font-family:monospace;">{{code}}</p>`,
  );
}

/// Aktionsmail mit Link und Code. Gibt `null` für unbekannte Aktionstypen —
/// der Hook lässt den Vorgang dann durchlaufen, statt ihn abzubrechen.
export function authActionEmail(opts: {
  action: string;
  verifyUrl: string;
  code: string;
}): MailContent | null {
  const copy = ACTION_COPY[opts.action];
  if (!copy) return null;

  const parts = [heading(copy.title), paragraph(copy.intro)];
  if (copy.cta) {
    parts.push(button({ href: opts.verifyUrl, label: copy.cta }));
  }
  if (opts.code) parts.push(codeBlock(opts.code));
  parts.push(paragraph(copy.note, { muted: true }));
  if (copy.cta) {
    parts.push(
      paragraph(
        "Falls der Button nicht funktioniert, kopiere diese Adresse in " +
          `deinen Browser:<br><span style="word-break:break-all;">` +
          `${escapeHtml(opts.verifyUrl)}</span>`,
        { muted: true },
      ),
    );
  }
  parts.push(
    paragraph(
      "Du hast das nicht angefordert? Dann ignoriere diese E-Mail — " +
        "ohne Bestätigung passiert nichts. Bei Zweifeln melde dich unter " +
        `${mailConfig.supportEmail}.`,
      { muted: true },
    ),
  );

  const values = { code: opts.code };

  return {
    subject: copy.subject,
    html: render(
      page({ title: copy.title, preheader: copy.intro, content: parts.join("\n            ") }),
      values,
    ),
    text: renderText(
      [
        "BÖRDESNACK24",
        "",
        copy.title,
        "",
        copy.intro,
        "",
        ...(copy.cta ? [opts.verifyUrl, ""] : []),
        ...(opts.code ? [`Code für die App: {{code}}`, ""] : []),
        copy.note,
        "",
        "Du hast das nicht angefordert? Dann ignoriere diese E-Mail —",
        "ohne Bestätigung passiert nichts. Bei Zweifeln melde dich unter",
        mailConfig.supportEmail + ".",
        "",
        "--",
        `${mailConfig.company.legalName} · ${mailConfig.company.street} · ${mailConfig.company.city}`,
        `Impressum: ${mailConfig.links.imprint}`,
        `Datenschutz: ${mailConfig.links.privacy}`,
      ].join("\n"),
      values,
    ),
  };
}

/// Reine Benachrichtigung ohne Link. `null` bei unbekanntem Typ.
export function authNotificationEmail(opts: {
  action: string;
}): MailContent | null {
  const copy = NOTIFICATION_COPY[opts.action];
  if (!copy) return null;

  const warning = "Warst du das nicht? Dann melde dich sofort unter " +
    `${mailConfig.supportEmail} — wir sperren das Konto und helfen beim ` +
    "Zurückholen.";

  const content = [
    heading(copy.title),
    paragraph(copy.text + " Wenn du das selbst veranlasst hast, ist alles " +
      "in Ordnung und du musst nichts tun."),
    warningBox(
      `<p class="bs-text" style="margin:0;font-size:13px;line-height:1.5;">` +
        `${warning}</p>`,
    ),
  ].join("\n            ");

  return {
    subject: copy.subject,
    html: page({ title: copy.title, preheader: copy.text, content }),
    text: [
      "BÖRDESNACK24",
      "",
      copy.title,
      "",
      copy.text,
      "Wenn du das selbst veranlasst hast, musst du nichts tun.",
      "",
      warning,
      "",
      "--",
      `${mailConfig.company.legalName} · ${mailConfig.company.street} · ${mailConfig.company.city}`,
      `Impressum: ${mailConfig.links.imprint}`,
      `Datenschutz: ${mailConfig.links.privacy}`,
    ].join("\n"),
  };
}
