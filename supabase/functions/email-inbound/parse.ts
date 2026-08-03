// Zuordnung der Anbieter-Nutzlast auf unsere Protokollspalten.
//
// EINE WARNUNG VORWEG, damit niemand mehr Vertrauen in diesen Code setzt
// als er verdient: Die genaue Form der Nutzlast für eingehende Post liess
// sich beim Bau nicht nachschlagen — die Dokumentation des Anbieters war
// aus der Bauumgebung nicht erreichbar. Diese Zuordnung ist deshalb
// bewusst nachsichtig gebaut und probiert mehrere übliche Schreibweisen
// durch.
//
// Die Absicherung dagegen liegt nicht hier, sondern in der Datenbank: Die
// vollständige Nutzlast wird in `email_log.raw` mitgeschrieben (0091).
// Trifft eine Zuordnung daneben, ist nichts verloren und lässt sich
// nachträglich geraderücken. Ohne diese Rückfallebene wäre der nachsichtige
// Ansatz hier fahrlässig.
//
// Beim ersten echten Posteingang gehört `raw` angesehen und diese Datei
// gegen die Wirklichkeit geprüft.

export interface Eingang {
  from_address: string | null;
  to_addresses: string[];
  subject: string | null;
  html: string | null;
  text_body: string | null;
  provider_id: string | null;
  occurred_at: string;
}

type Unbekannt = Record<string, unknown>;

function istObjekt(v: unknown): v is Unbekannt {
  return typeof v === "object" && v !== null && !Array.isArray(v);
}

/// Erste nicht-leere Zeichenkette unter mehreren möglichen Schlüsseln.
function text(quelle: Unbekannt, ...schluessel: string[]): string | null {
  for (const k of schluessel) {
    const v = quelle[k];
    if (typeof v === "string" && v.trim() !== "") return v;
  }
  return null;
}

/// Eine Adresse kann als "a@b.de", als {address, name} oder als
/// {email} kommen. Alles drei wird auf die reine Adresse gebracht.
export function adresse(v: unknown): string | null {
  if (typeof v === "string" && v.trim() !== "") return v.trim();
  if (istObjekt(v)) {
    const a = text(v, "address", "email", "value");
    if (a) return a;
  }
  return null;
}

/// Empfänger können einzeln, als Liste oder als Objektliste kommen.
export function adressListe(v: unknown): string[] {
  if (Array.isArray(v)) {
    return v.map(adresse).filter((a): a is string => a !== null);
  }
  const einzeln = adresse(v);
  return einzeln ? [einzeln] : [];
}

/// Zeitstempel des Anbieters übernehmen, wenn er brauchbar ist — sonst
/// der Empfangszeitpunkt. Ein unlesbares Datum darf den Eingang nicht
/// scheitern lassen, aber auch nicht als „1970" im Protokoll landen.
export function zeitpunkt(v: unknown, jetzt = new Date()): string {
  if (typeof v === "string" || typeof v === "number") {
    const d = new Date(v);
    if (!Number.isNaN(d.getTime()) && d.getFullYear() > 2000) {
      return d.toISOString();
    }
  }
  return jetzt.toISOString();
}

/// Nimmt die Nutzlast, wie sie kommt, und holt heraus was zu finden ist.
///
/// `fallbackId` ist die Webhook-Id aus dem Kopf der Anfrage. Sie dient als
/// Ersatz, wenn die Nutzlast keine eigene Kennung mitbringt — ohne
/// Kennung greift die Doppelerkennung nicht, und eine wiederholte
/// Zustellung stünde zweimal im Protokoll.
export function eingangLesen(
  nutzlast: unknown,
  fallbackId: string | null = null,
  jetzt = new Date(),
): Eingang {
  const wurzel: Unbekannt = istObjekt(nutzlast) ? nutzlast : {};

  // Übliche Hülle: { type, created_at, data: { … } }. Fehlt sie, gilt die
  // Nutzlast selbst als Datenteil.
  const daten: Unbekannt = istObjekt(wurzel.data)
    ? wurzel.data as Unbekannt
    : wurzel;

  return {
    from_address: adresse(daten.from ?? daten.sender ?? daten.from_address),
    to_addresses: adressListe(daten.to ?? daten.recipient ?? daten.to_addresses),
    subject: text(daten, "subject", "betreff"),
    html: text(daten, "html", "body_html"),
    text_body: text(daten, "text", "plain", "body_plain", "text_body"),
    provider_id: text(daten, "email_id", "id", "message_id") ?? fallbackId,
    occurred_at: zeitpunkt(
      daten.created_at ?? daten.date ?? wurzel.created_at,
      jetzt,
    ),
  };
}
