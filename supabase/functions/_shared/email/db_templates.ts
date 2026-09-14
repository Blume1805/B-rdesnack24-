// Vorlage aus der Datenbank, sonst aus dem Code.
//
// Der Kern ist eine einzige Regel: Die Datenbank gewinnt, wenn sie etwas
// zu sagen hat — und schweigt sie, gilt unverändert der Code. Ein Betrieb
// soll eine Betreffzeile ändern können, ohne dass jemand ausrollt; solange
// er das nicht tut, darf sich nichts ändern.
//
// Was in der Datenbank steht, ist nur der INHALT (Betreff, Fliesstext,
// Vorschauzeile). Rahmen, Kopf und Fuss kommen weiter aus `page()`. Der
// Grund ist der Fuss: Dort stehen Impressum, Datenschutz und Widerruf.
// Lägen sie als Kopie in jeder Vorlage, müsste bei einem Umzug jede
// einzeln nachgezogen werden — und eine würde vergessen.
//
// FEHLERVERHALTEN, bewusst gewählt: Geht der Griff in die Datenbank
// schief, wird die Fassung aus dem Code verschickt. Eine Kündigungs-
// bestätigung darf nicht daran scheitern, dass eine Vorlagentabelle
// gerade nicht erreichbar ist. Derselbe Gedanke wie beim Protokoll in
// `send.ts`: Der fachliche Vorgang steht über der Bequemlichkeit.

import { page } from "./components.ts";
import { render, renderText, type TemplateVars } from "./render.ts";
import type { MailContent } from "./send.ts";

export interface VorlagenZeile {
  subject: string | null;
  body_html: string | null;
  body_text: string | null;
  preheader: string | null;
  is_active: boolean;
}

/// Entscheidet, ob eine Zeile die Fassung aus dem Code ersetzt.
///
/// Nur eine aktive Zeile MIT Betreff UND Inhalt zählt. Ein Katalogeintrag
/// ohne Inhalt beschreibt lediglich, dass es diese Mail gibt — er ist kein
/// Ersatz. Ohne diese Prüfung würde eine leere Vorlage eine leere Mail
/// verschicken, und das wäre schlimmer als gar keine Vorlagenverwaltung.
export function istVerwendbar(zeile: VorlagenZeile | null): boolean {
  if (zeile === null) return false;
  if (!zeile.is_active) return false;
  const hatBetreff = typeof zeile.subject === "string" && zeile.subject.trim() !== "";
  const hatInhalt = typeof zeile.body_html === "string" && zeile.body_html.trim() !== "";
  return hatBetreff && hatInhalt;
}

/// Baut aus einer Vorlagenzeile die fertige Mail.
///
/// Getrennt von der Datenbankabfrage, damit es sich ohne laufendes Projekt
/// testen lässt.
export function ausVorlage(zeile: VorlagenZeile, vars: TemplateVars): MailContent {
  const subject = renderText(zeile.subject ?? "", vars);
  return {
    subject,
    html: page({
      title: subject,
      preheader: renderText(zeile.preheader ?? subject, vars),
      content: render(zeile.body_html ?? "", vars),
    }),
    text: renderText(zeile.body_text ?? "", vars),
  };
}

/// Holt die Vorlage und baut die Mail — oder liefert die Fassung aus dem
/// Code zurück.
///
/// `fallback` ist absichtlich eine Funktion und kein fertiger Wert: So
/// wird die Code-Fassung nur gebaut, wenn sie auch gebraucht wird.
export async function mailInhalt(
  key: string,
  vars: TemplateVars,
  fallback: () => MailContent,
): Promise<MailContent> {
  const url = Deno.env.get("SUPABASE_URL");
  const serviceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");
  if (!url || !serviceKey) return fallback();

  try {
    const res = await fetch(
      `${url}/rest/v1/email_templates?key=eq.${encodeURIComponent(key)}` +
        `&select=subject,body_html,body_text,preheader,is_active`,
      {
        headers: {
          "apikey": serviceKey,
          "Authorization": `Bearer ${serviceKey}`,
          "Accept": "application/json",
        },
      },
    );
    if (!res.ok) {
      console.warn(`[email] Vorlage ${key} nicht abrufbar [${res.status}]`);
      return fallback();
    }
    const zeilen = await res.json() as VorlagenZeile[];
    const zeile = Array.isArray(zeilen) && zeilen.length > 0 ? zeilen[0] : null;
    if (!istVerwendbar(zeile)) return fallback();
    return ausVorlage(zeile!, vars);
  } catch (e) {
    console.warn(
      `[email] Vorlage ${key} nicht abrufbar:`,
      e instanceof Error ? e.message : e,
    );
    return fallback();
  }
}
