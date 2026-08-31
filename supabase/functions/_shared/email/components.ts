// Bausteine für Bördesnack24-E-Mails.
//
// Warum Tabellen statt divs: Outlook für Windows rendert mit der
// Word-Engine. `max-width` und moderne Layout-Eigenschaften greifen dort
// nicht, Tabellen mit festen Breiten schon. Die Bestandsmails waren
// div-basiert — im Outlook-Desktop lief die Karte deshalb über die volle
// Fensterbreite.
//
// Die Marke steht als Schrift-Wortmarke im Kopf, nicht als Bild: Bilder
// werden von vielen Clients erst nach Klick geladen, ein Text-Logo ist
// immer sichtbar, skaliert scharf und braucht keinen Alt-Text.
//
// Alle Funktionen erwarten FERTIGES HTML. Werte aus Anfragen gehören über
// `render()` und `{{platzhalter}}` hinein, nicht per String-Verkettung.
import { theme } from "./theme.ts";
import { mailConfig } from "./config.ts";
import { escapeHtml } from "./render.ts";

const TABLE = 'role="presentation" cellpadding="0" cellspacing="0" border="0"';

/// Überschrift der Mail (genau eine pro Mail).
export function heading(text: string): string {
  return `<h1 class="bs-heading" style="margin:0 0 12px;font-size:18px;` +
    `line-height:1.3;font-weight:800;color:${theme.ink};">${text}</h1>`;
}

/// Fließtext. `muted` für Nebeninformationen.
export function paragraph(html: string, opts: { muted?: boolean } = {}): string {
  const color = opts.muted ? theme.muted : theme.ink;
  const size = opts.muted ? "13px" : "14px";
  return `<p class="bs-${opts.muted ? "muted" : "text"}" style="margin:0 0 16px;` +
    `font-size:${size};line-height:1.55;color:${color};">${html}</p>`;
}

/// Zeile „Label: Wert" für die InfoBox.
export function keyValue(label: string, value: string): string {
  return `<p class="bs-text" style="margin:0 0 4px;font-size:13px;line-height:1.5;` +
    `color:${theme.ink};"><strong>${label}:</strong> ${value}</p>`;
}

function box(html: string, accent: string, background: string): string {
  return `<table ${TABLE} width="100%" style="margin:0 0 16px;">
        <tr>
          <td class="bs-box" style="background:${background};border-left:4px solid ${accent};padding:12px 16px;">${html}</td>
        </tr>
      </table>`;
}

/// Neutraler Hinweiskasten (Creme, goldene Kante) — der Look der
/// bisherigen Bestätigungsmails.
export function infoBox(html: string): string {
  return box(html, theme.brand, theme.cream);
}

/// Positiver Abschluss (grüne Kante).
export function successBox(html: string): string {
  return box(html, theme.success, theme.cream);
}

/// Warnung/Handlungsbedarf (rote Kante).
export function warningBox(html: string): string {
  return box(html, theme.warning, theme.cream);
}

export function divider(): string {
  return `<table ${TABLE} width="100%" style="margin:0 0 16px;">
        <tr><td style="height:1px;background:${theme.border};font-size:0;line-height:0;">&nbsp;</td></tr>
      </table>`;
}

/// Primäre Handlungsaufforderung. Pro Mail höchstens eine.
///
/// Als Tabelle gebaut, damit die Fläche auch in Outlook farbig ist; die
/// abgerundeten Ecken fallen dort weg, der Button bleibt aber bedienbar.
/// Höhe über Padding auf mindestens 44 px (WCAG 2.5.5).
export function button(opts: { href: string; label: string }): string {
  const padding = Math.max(0, Math.round((theme.buttonMinHeight - 20) / 2));
  return `<table ${TABLE} style="margin:0 0 16px;">
        <tr>
          <td style="background:${theme.ink};border-radius:8px;">
            <a href="${escapeHtml(opts.href)}" style="display:inline-block;` +
    `padding:${padding}px 28px;font-family:${theme.font};font-size:15px;` +
    `font-weight:800;line-height:20px;color:${theme.brand};text-decoration:none;">` +
    `${opts.label}</a>
          </td>
        </tr>
      </table>`;
}

function footerLinks(): string {
  const items = [
    `<a href="${mailConfig.links.imprint}" style="color:${theme.footer};">Impressum</a>`,
    `<a href="${mailConfig.links.privacy}" style="color:${theme.footer};">Datenschutz</a>`,
    `<a href="${mailConfig.links.terms}" style="color:${theme.footer};">AGB</a>`,
    `<a href="mailto:${mailConfig.supportEmail}" style="color:${theme.footer};">Kontakt &amp; Support</a>`,
  ];
  const social = mailConfig.social.map((s) =>
    `<a href="${escapeHtml(s.href)}" style="color:${theme.footer};">${escapeHtml(s.label)}</a>`
  );
  const rows = [items.join(" &middot; ")];
  if (social.length > 0) rows.push(social.join(" &middot; "));
  return rows.join("<br>");
}

/// Vollständiges Mail-Dokument: Kopfleiste, weiße Karte mit [content],
/// Pflichtangaben-Footer.
///
/// [preheader] ist der Vorschautext, den Postfächer neben der Betreffzeile
/// zeigen. Ohne ihn ziehen sie sich die erste sichtbare Textzeile — meist
/// die Wortmarke, was in der Liste nach nichts aussieht.
///
/// [title] und [preheader] werden maskiert. Solange hier nur feste
/// Zeichenketten ankamen, war das gleichgültig; sobald ein Betreff aus
/// einer Vorlage in der Datenbank stammt und Nutzerdaten enthält (etwa
/// einen Namen aus dem Anmeldeformular), ist es das nicht mehr. Ein
/// Kundenname wie `</title><b>` würde sonst das Gerüst der Mail
/// zerlegen. [content] wird NICHT maskiert — das ist bereits fertiges
/// HTML aus den Bausteinen dieser Datei.
export function page(opts: {
  title: string;
  preheader: string;
  content: string;
}): string {
  const c = mailConfig.company;
  return `<!doctype html>
<html lang="de">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="color-scheme" content="light dark">
<meta name="supported-color-schemes" content="light dark">
<title>${escapeHtml(opts.title)}</title>
<style>
  @media (prefers-color-scheme: dark) {
    .bs-page { background:#0F0D0B !important; }
    .bs-card { background:#1C1916 !important; border-color:#3A342C !important; }
    .bs-box  { background:#241F19 !important; }
    .bs-text, .bs-text strong, .bs-heading { color:#F4F1EA !important; }
    .bs-muted { color:#BDB6A9 !important; }
  }
  @media only screen and (max-width:600px) {
    .bs-shell { width:100% !important; }
    .bs-pad { padding:18px !important; }
  }
</style>
</head>
<body class="bs-page" style="margin:0;padding:0;background:${theme.cream};font-family:${theme.font};">
<div style="display:none;max-height:0;overflow:hidden;font-size:1px;line-height:1px;color:${theme.cream};">${escapeHtml(opts.preheader)}</div>
<table ${TABLE} width="100%" class="bs-page" style="background:${theme.cream};">
  <tr>
    <td align="center" style="padding:24px 16px;">
      <table ${TABLE} width="${theme.maxWidth}" class="bs-shell" style="width:100%;max-width:${theme.maxWidth}px;">
        <tr>
          <td style="background:${theme.ink};border-radius:12px 12px 0 0;padding:18px 24px;">
            <span style="color:${theme.brand};font-size:18px;font-weight:800;letter-spacing:1px;">BÖRDESNACK24</span>
          </td>
        </tr>
        <tr>
          <td class="bs-card bs-pad" style="background:${theme.card};border:1px solid ${theme.border};border-top:none;border-radius:0 0 12px 12px;padding:24px;">
            ${opts.content}
          </td>
        </tr>
        <tr>
          <td class="bs-muted" style="padding:16px 8px;font-size:11px;line-height:1.6;color:${theme.footer};">
            ${footerLinks()}<br><br>
            ${c.legalName} &middot; ${c.street} &middot; ${c.city}<br>
            Steuernummer: ${c.taxNumber} &middot; USt-IdNr.: ${c.vatId}<br>
            &copy; ${new Date().getFullYear()} ${c.legalName}
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>
</body>
</html>`;
}
