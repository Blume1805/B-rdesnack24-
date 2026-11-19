// Push an die anderen Gesellschafter, wenn eine Freigabe angefordert wurde
// (Wunsch Philipp 19.11.2026). Getrennt vom Aufruf, damit es ohne Netz und
// Datenbank testbar ist (push_test.ts).
import { type Abo, leseAbo } from "./webpush.ts";

export interface PushDb {
  /** Aktive interne Konten (Admin, Gesellschafter) außer [ausser]. */
  empfaenger(ausser: string): Promise<string[]>;
  /** Web-Abonnements dieser Konten. */
  abos(konten: string[]): Promise<{ id: string; user_id: string; token: string }[]>;
  /** Abgelaufenes Abonnement entfernen (Push-Dienst meldet 404/410). */
  loescheAbo(id: string): Promise<void>;
  /** Eintrag in der In-App-Liste der Benachrichtigungen. */
  hinweis(konto: string, titel: string, text: string, daten: Record<string, string>): Promise<void>;
}

export type Senden = (abo: Abo, nachricht: Record<string, unknown>) => Promise<number>;

export interface Freigabe {
  id: string;
  title: string;
  requested_by: string;
  status: string;
}

export interface PushErgebnis {
  empfaenger: number;
  zugestellt: number;
  entfernt: number;
}

export async function pushAnAndere(
  db: PushDb,
  freigabe: Freigabe,
  senden: Senden,
  appUrl: string,
): Promise<PushErgebnis> {
  if (freigabe.status !== "pending") return { empfaenger: 0, zugestellt: 0, entfernt: 0 };
  const konten = await db.empfaenger(freigabe.requested_by);
  const titel = "Freigabe angefordert";
  // Nur der Titel des Dokuments, keine Inhalte: Er erscheint auf dem
  // Sperrbildschirm.
  const text = `${freigabe.title} – bitte prüfen und freigeben.`;
  const daten = { art: "freigabe", approval_id: freigabe.id, url: appUrl };
  for (const k of konten) await db.hinweis(k, titel, text, daten);

  let zugestellt = 0;
  let entfernt = 0;
  for (const a of await db.abos(konten)) {
    const abo = leseAbo(a.token);
    if (!abo) continue;
    try {
      const status = await senden(abo, { titel, text, url: appUrl, tag: `freigabe-${freigabe.id}` });
      if (status >= 200 && status < 300) zugestellt++;
      if (status === 404 || status === 410) {
        await db.loescheAbo(a.id);
        entfernt++;
      }
    } catch (_) {
      // Ein Gerät ohne Antwort darf die anderen nicht aufhalten.
    }
  }
  return { empfaenger: konten.length, zugestellt, entfernt };
}
