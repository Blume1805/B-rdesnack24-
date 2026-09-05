// Platzhalter-Interpolation für E-Mail-Templates.
//
// Regel: `{{name}}` wird HTML-escaped eingesetzt, `{{{name}}}` roh.
// Roh ist ausschließlich für Fragmente gedacht, die wir selbst erzeugt
// haben (z. B. eine fertige InfoBox) — niemals für Werte aus einer
// Anfrage. Die Bestandsmails haben Nutzereingaben (E-Mail-Adresse) direkt
// in den HTML-Body interpoliert; das Standard-Escaping schließt das.

export type TemplateVars = Record<string, string | number | null | undefined>;

/// Maskiert die fünf in HTML bedeutsamen Zeichen.
export function escapeHtml(value: unknown): string {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

/// Setzt Platzhalter ein. Ein Durchlauf über beide Formen, damit ein roh
/// eingesetztes Fragment nicht selbst nochmal als Template gelesen wird.
///
/// Fehlt ein Wert, bleibt die Stelle leer und es gibt eine Log-Warnung —
/// die Mail geht trotzdem raus. Bei einer Zugangsbestätigung nach
/// § 312k BGB ist eine unvollständige Mail allemal besser als gar keine.
/// Tippfehler in Platzhaltern fängt stattdessen der Test ab, über
/// [remainingPlaceholders].
export function render(template: string, vars: TemplateVars): string {
  return template.replace(
    /\{\{\{\s*([A-Za-z0-9_]+)\s*\}\}\}|\{\{\s*([A-Za-z0-9_]+)\s*\}\}/g,
    (_match: string, rawKey?: string, escapedKey?: string): string => {
      const key = rawKey ?? escapedKey ?? "";
      if (!(key in vars)) {
        console.warn(`[email] Platzhalter ohne Wert: {{${key}}}`);
        return "";
      }
      const value = vars[key];
      return rawKey !== undefined ? String(value ?? "") : escapeHtml(value);
    },
  );
}

/// Wie [render], aber ohne Escaping — für die Textfassung einer Mail.
/// Dort gibt es kein HTML, und ein maskiertes `&amp;` in einer Adresse wäre
/// schlicht falsch.
export function renderText(template: string, vars: TemplateVars): string {
  return template.replace(
    /\{\{\s*([A-Za-z0-9_]+)\s*\}\}/g,
    (_match: string, key: string): string => {
      if (!(key in vars)) {
        console.warn(`[email] Platzhalter ohne Wert: {{${key}}}`);
        return "";
      }
      return String(vars[key] ?? "");
    },
  );
}

/// Liefert alle Platzhalter, die nach dem Rendern noch im Text stehen.
/// Für Tests: ein nicht ersetzter Platzhalter ist immer ein Fehler.
export function remainingPlaceholders(rendered: string): string[] {
  return [...rendered.matchAll(/\{\{\{?\s*[A-Za-z0-9_]+\s*\}?\}\}/g)]
    .map((m) => m[0]);
}
