// Zugangsbestätigung einer Kündigung (§ 312k Abs. 2 S. 3 BGB).
//
// Inhaltlich unverändert gegenüber der bisherigen Inline-Fassung in
// `subscription-cancel/index.ts` — der Wortlaut ist rechtlich relevant und
// wurde bewusst 1:1 übernommen. Neu sind nur Gerüst (Tabellen statt divs),
// Textfassung und das Escaping der E-Mail-Adresse.
import { heading, infoBox, keyValue, page, paragraph } from "../components.ts";
import { render, renderText } from "../render.ts";
import type { MailContent } from "../send.ts";
import { mailConfig } from "../config.ts";

export function subscriptionCancelConfirmation(vars: {
  email: string;
  kind: string;
  cancelAt: string;
  receivedAt: string;
}): MailContent {
  const kindLabel = vars.kind === "ausserordentlich"
    ? "Außerordentliche Kündigung"
    : "Ordentliche Kündigung";

  const content = [
    heading("Bestätigung des Zugangs Ihrer Kündigung"),
    paragraph(
      "Ihre Kündigungserklärung ist bei uns eingegangen " +
        "(Bestätigung gemäß § 312k Abs. 2 BGB).",
    ),
    infoBox([
      keyValue("Eingegangen am", "{{receivedAt}} Uhr"),
      keyValue("Art", "{{kindLabel}}"),
      keyValue("Beendigung", "{{cancelAt}}"),
      keyValue("E-Mail", "{{email}}"),
    ].join("\n            ")),
    paragraph(
      "Wir prüfen Ihre Kündigung und melden uns, falls Rückfragen " +
        "bestehen. Bitte bewahren Sie diese E-Mail als Nachweis auf.",
      { muted: true },
    ),
  ].join("\n            ");

  const values = { ...vars, kindLabel };

  return {
    subject: "Bördesnack24: Bestätigung des Zugangs Ihrer Kündigung",
    html: render(
      page({
        title: "Bestätigung des Zugangs Ihrer Kündigung",
        preheader: "Ihre Kündigung ist bei uns eingegangen — " +
          "diese E-Mail ist Ihr Nachweis.",
        content,
      }),
      values,
    ),
    text: renderText(
      [
        "BÖRDESNACK24",
        "",
        "Bestätigung des Zugangs Ihrer Kündigung",
        "",
        "Ihre Kündigungserklärung ist bei uns eingegangen",
        "(Bestätigung gemäß § 312k Abs. 2 BGB).",
        "",
        "Eingegangen am: {{receivedAt}} Uhr",
        "Art: {{kindLabel}}",
        "Beendigung: {{cancelAt}}",
        "E-Mail: {{email}}",
        "",
        "Wir prüfen Ihre Kündigung und melden uns, falls Rückfragen",
        "bestehen. Bitte bewahren Sie diese E-Mail als Nachweis auf.",
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
