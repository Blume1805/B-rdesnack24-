// Bestätigung der Abo-Wahl bzw. des Abo-Wechsels.
//
// Wortlaut 1:1 aus der bisherigen Inline-Fassung in
// `subscription-choose/index.ts`. Die Hinweise zu § 356 Abs. 5 BGB
// (Widerrufsrecht beim Lifetime-Abo) und §§ 106 ff. BGB (Volljährigkeit)
// sind Pflichtinformationen und bleiben unverändert.
import { heading, infoBox, page, paragraph } from "../components.ts";
import { render, renderText } from "../render.ts";
import type { MailContent } from "../send.ts";
import { mailConfig } from "../config.ts";

export function subscriptionChooseConfirmation(vars: {
  firstName: string;
  planName: string;
  billingLabel: string;
  previousPlanName: string | null;
  lifetime: boolean;
}): MailContent {
  const switched = vars.previousPlanName !== null;

  const intro = switched
    ? "dein Abo wurde vom <strong>{{previousPlanName}}</strong> auf das " +
      "<strong>{{planName}}</strong> umgestellt."
    : "du hast das <strong>{{planName}}</strong> gewählt.";

  const note = vars.lifetime
    ? "Hinweis: Das Lifetime-Abo ist Teil der auf 20 Konten limitierten " +
      "Founders Edition und endgültig — ein späterer Wechsel in ein anderes " +
      "Modell ist nicht mehr möglich. Du hast der sofortigen Bereitstellung " +
      "ausdrücklich zugestimmt und bestätigt, dass dein Widerrufsrecht mit " +
      "vollständiger Bereitstellung erlischt (§ 356 Abs. 5 BGB)."
    : "Du kannst dein Abo-Modell jederzeit im Kundenbereich unter " +
      "&bdquo;Mein Abo&ldquo; wechseln.";

  const content = [
    heading(switched ? "Abo-Wechsel bestätigt" : "Abo-Auswahl bestätigt"),
    paragraph(`Hallo {{firstName}},<br><br>${intro}`),
    infoBox(
      `<p class="bs-text" style="margin:0;font-size:14px;line-height:1.5;">` +
        `<strong>{{planName}}</strong> &middot; {{billingLabel}}</p>`,
    ),
    paragraph(note, { muted: true }),
    paragraph(
      "Du hast beim Abschluss bestätigt, volljährig zu sein oder mit " +
        "Zustimmung deiner gesetzlichen Vertreter zu handeln " +
        "(§§ 106 ff. BGB).",
      { muted: true },
    ),
    paragraph(
      "Die Abrechnung erfolgt über den App Store bzw. Google Play, sobald " +
        "die App dort veröffentlicht ist.",
      { muted: true },
    ),
  ].join("\n            ");

  const values = {
    firstName: vars.firstName,
    planName: vars.planName,
    billingLabel: vars.billingLabel,
    previousPlanName: vars.previousPlanName ?? "",
  };

  const noteText = vars.lifetime
    ? "Hinweis: Das Lifetime-Abo ist Teil der auf 20 Konten limitierten\n" +
      "Founders Edition und endgültig — ein späterer Wechsel in ein anderes\n" +
      "Modell ist nicht mehr möglich. Du hast der sofortigen Bereitstellung\n" +
      "ausdrücklich zugestimmt und bestätigt, dass dein Widerrufsrecht mit\n" +
      "vollständiger Bereitstellung erlischt (§ 356 Abs. 5 BGB)."
    : "Du kannst dein Abo-Modell jederzeit im Kundenbereich unter\n" +
      "„Mein Abo“ wechseln.";

  return {
    subject: switched
      ? `Bördesnack24: Wechsel zum ${vars.planName} bestätigt`
      : `Bördesnack24: Dein ${vars.planName} ist aktiv`,
    html: render(
      page({
        title: switched ? "Abo-Wechsel bestätigt" : "Abo-Auswahl bestätigt",
        preheader: `${vars.planName} · ${vars.billingLabel}`,
        content,
      }),
      values,
    ),
    text: renderText(
      [
        "BÖRDESNACK24",
        "",
        switched ? "Abo-Wechsel bestätigt" : "Abo-Auswahl bestätigt",
        "",
        "Hallo {{firstName}},",
        "",
        switched
          ? "dein Abo wurde vom {{previousPlanName}} auf das {{planName}} umgestellt."
          : "du hast das {{planName}} gewählt.",
        "",
        "{{planName}} · {{billingLabel}}",
        "",
        noteText,
        "",
        "Du hast beim Abschluss bestätigt, volljährig zu sein oder mit",
        "Zustimmung deiner gesetzlichen Vertreter zu handeln (§§ 106 ff. BGB).",
        "",
        "Die Abrechnung erfolgt über den App Store bzw. Google Play, sobald",
        "die App dort veröffentlicht ist.",
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
