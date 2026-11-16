// Eingangsbestätigung eines Löschantrags (Art. 17 DSGVO).
//
// Art. 12 Abs. 3 DSGVO: Die verantwortliche Stelle unterrichtet die
// betroffene Person unverzüglich, spätestens innerhalb eines Monats, über
// die auf den Antrag ergriffenen Maßnahmen. Diese Mail ist der erste Teil
// davon — sie bestätigt den Eingang mit Zeitstempel und nennt die Frist.
//
// Der Hinweis auf §§ 147 AO / 257 HGB entspricht wörtlich dem, was in der
// Datenschutzerklärung (`legal_texts.dart`, Abschnitt 4) und im
// Antragsdialog der App steht — die drei Stellen müssen zusammenpassen.
import { heading, infoBox, keyValue, page, paragraph } from "../components.ts";
import { render, renderText } from "../render.ts";
import type { MailContent } from "../send.ts";
import { mailConfig } from "../config.ts";

const RETENTION_NOTE = "Wegen handels- und steuerrechtlicher " +
  "Aufbewahrungspflichten (§§ 147 AO, 257 HGB) können einzelne Daten erst " +
  "nach Ablauf dieser Fristen gelöscht werden; bis dahin werden sie " +
  "gesperrt oder anonymisiert.";

export function accountDeletionRequestReceived(vars: {
  /// Anrede. Leer ⇒ „Kundin/Kunde".
  firstName: string;
  /// Zeitpunkt des Antrags, bereits formatiert (Europe/Berlin).
  receivedAt: string;
  /// Frist nach Art. 12 Abs. 3 DSGVO, bereits formatiert.
  deadline: string;
  /// Vom Kunden angegebener Grund. Leerstring ⇒ Zeile entfällt.
  reason: string;
}): MailContent {
  const reasonRow = vars.reason
    ? "\n            " + keyValue("Angegebener Grund", "{{reason}}")
    : "";

  const content = [
    heading("Dein Löschantrag ist eingegangen"),
    paragraph(
      "Hallo {{firstName}},<br><br>wir haben deinen Antrag auf Löschung " +
        "deines Bördesnack24-Kontos erhalten und bearbeiten ihn.",
    ),
    infoBox(
      keyValue("Eingegangen am", "{{receivedAt}} Uhr") + reasonRow + "\n            " +
        keyValue("Rückmeldung spätestens bis", "{{deadline}}"),
    ),
    paragraph(
      "Wir melden uns bis zu diesem Datum mit dem Ergebnis " +
        "(Art. 12 Abs. 3 DSGVO). " + RETENTION_NOTE,
      { muted: true },
    ),
    paragraph(
      "Du hast den Antrag nicht gestellt oder möchtest ihn zurückziehen? " +
        `Antworte auf diese E-Mail oder schreib an ${mailConfig.supportEmail} ` +
        "— solange wir ihn nicht ausgeführt haben, lässt er sich stoppen.",
      { muted: true },
    ),
  ].join("\n            ");

  const values = {
    firstName: vars.firstName || "Kundin/Kunde",
    receivedAt: vars.receivedAt,
    deadline: vars.deadline,
    reason: vars.reason,
  };

  return {
    subject: "Bördesnack24: Dein Löschantrag ist eingegangen",
    html: render(
      page({
        title: "Dein Löschantrag ist eingegangen",
        preheader: "Wir bearbeiten deinen Antrag und melden uns bis " +
          `${vars.deadline}.`,
        content,
      }),
      values,
    ),
    text: renderText(
      [
        "BÖRDESNACK24",
        "",
        "Dein Löschantrag ist eingegangen",
        "",
        "Hallo {{firstName}},",
        "",
        "wir haben deinen Antrag auf Löschung deines Bördesnack24-Kontos",
        "erhalten und bearbeiten ihn.",
        "",
        "Eingegangen am: {{receivedAt}} Uhr",
        ...(vars.reason ? ["Angegebener Grund: {{reason}}"] : []),
        "Rückmeldung spätestens bis: {{deadline}}",
        "",
        "Wir melden uns bis zu diesem Datum mit dem Ergebnis",
        "(Art. 12 Abs. 3 DSGVO). " + RETENTION_NOTE,
        "",
        "Du hast den Antrag nicht gestellt oder möchtest ihn zurückziehen?",
        `Antworte auf diese E-Mail oder schreib an ${mailConfig.supportEmail}`,
        "— solange wir ihn nicht ausgeführt haben, lässt er sich stoppen.",
        "",
        "--",
        `${mailConfig.company.legalName} · ${mailConfig.company.street} · ${mailConfig.company.city}`,
        `Steuernummer: ${mailConfig.company.taxNumber} · USt-IdNr.: ${mailConfig.company.vatId}`,
        `Impressum: ${mailConfig.links.imprint}`,
        `Datenschutz: ${mailConfig.links.privacy}`,
        `Kontakt: ${mailConfig.supportEmail}`,
      ].join("\n"),
      values,
    ),
  };
}

/// Interne Benachrichtigung an die Verwaltung. Ohne sie merkt niemand, dass
/// die Monatsfrist läuft — die Anträge stehen sonst nur in der Tabelle.
export function accountDeletionRequestInternal(vars: {
  email: string;
  receivedAt: string;
  deadline: string;
  reason: string;
}): MailContent {
  const content = [
    heading("Neuer Löschantrag"),
    paragraph(
      "Ein Kunde hat die Löschung seines Kontos beantragt. Die Frist nach " +
        "Art. 12 Abs. 3 DSGVO läuft.",
    ),
    infoBox([
      keyValue("Konto", "{{email}}"),
      keyValue("Eingegangen am", "{{receivedAt}} Uhr"),
      keyValue("Frist", "{{deadline}}"),
      keyValue("Grund", "{{reason}}"),
    ].join("\n            ")),
    paragraph(
      "Bearbeitung in der Verwaltung unter „Kunden“. Bitte vor der Löschung " +
        "die Aufbewahrungspflichten (§§ 147 AO, 257 HGB) prüfen.",
      { muted: true },
    ),
  ].join("\n            ");

  const values = {
    email: vars.email,
    receivedAt: vars.receivedAt,
    deadline: vars.deadline,
    reason: vars.reason || "—",
  };

  return {
    subject: `Löschantrag: ${vars.email} (Frist ${vars.deadline})`,
    html: render(
      page({
        title: "Neuer Löschantrag",
        preheader: `${vars.email} · Frist ${vars.deadline}`,
        content,
      }),
      values,
    ),
    text: renderText(
      [
        "Neuer Löschantrag",
        "",
        "Konto: {{email}}",
        "Eingegangen am: {{receivedAt}} Uhr",
        "Frist (Art. 12 Abs. 3 DSGVO): {{deadline}}",
        "Grund: {{reason}}",
        "",
        "Bearbeitung in der Verwaltung unter „Kunden“.",
        "Vor der Löschung Aufbewahrungspflichten (§§ 147 AO, 257 HGB) prüfen.",
      ].join("\n"),
      values,
    ),
  };
}
