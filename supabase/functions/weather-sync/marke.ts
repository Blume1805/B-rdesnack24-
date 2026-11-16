// Einmalmarke aus dem Aufruf lesen (Audit A2-02).
//
// Die Datenbank schickt bei jedem geplanten Aufruf eine zufällige Marke im
// Kopf `x-bs24-marke` mit (app.wetter_abruf_ausloesen). Hier wird nur das
// Format geprüft; ob die Marke gültig ist, entscheidet die Datenbank beim
// Einlösen. Alles, was keine UUID ist, wird gar nicht erst an die Datenbank
// weitergereicht.

const UUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

export const MARKEN_KOPF = 'x-bs24-marke';

export function markeAusKopf(headers: Headers): string | null {
  const wert = headers.get(MARKEN_KOPF)?.trim() ?? '';
  return UUID.test(wert) ? wert.toLowerCase() : null;
}
