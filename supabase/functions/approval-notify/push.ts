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

// ── Testmitteilung (Wunsch Philipp 19.11.2026) ─────────────────────────────
// Prüft, ob Push auf einem Gerät ankommt, ohne eine echte Freigabe
// anzulegen. Der Inhalt und der Empfänger stehen in einem Eintrag der
// Benachrichtigungsliste (`notifications`, data.art = "probe"). Anlegen kann
// ihn nur der Server bzw. der Betreiber in der Datenbank: Für angemeldete
// Nutzer gibt es keine Einfüge-Regel. Der Aufruf selbst wählt weder Inhalt
// noch Empfänger; er stellt nur zu, was ansteht, jeden Eintrag einmal und
// nur innerhalb von 15 Minuten nach dem Anlegen.

export interface Probe {
  id: string;
  user_id: string;
  title: string;
  body: string | null;
}

export interface ProbeDb {
  /** Offene Testmitteilungen (art = probe, nicht zugestellt, < 15 Minuten). */
  offeneProben(): Promise<Probe[]>;
  /** Web-Abonnements dieser Konten. */
  abos(konten: string[]): Promise<{ id: string; user_id: string; token: string }[]>;
  /** Beansprucht einen Eintrag atomar (nur der erste Aufruf bekommt true),
   *  damit zwei gleichzeitige Aufrufe nicht doppelt zustellen. */
  beanspruche(probe: string): Promise<boolean>;
  /** Vermerkt das Ergebnis der Zustellung. */
  vermerke(probe: string, ergebnis: { zugestellt: number; geraete: number }): Promise<void>;
  loescheAbo(id: string): Promise<void>;
}

export interface ProbeErgebnis {
  proben: number;
  geraete: number;
  zugestellt: number;
}

export async function probenZustellen(db: ProbeDb, senden: Senden, appUrl: string): Promise<ProbeErgebnis> {
  const proben = await db.offeneProben();
  let geraete = 0;
  let zugestellt = 0;
  let bearbeitet = 0;
  for (const p of proben) {
    if (!(await db.beanspruche(p.id))) continue;
    bearbeitet++;
    const abos = await db.abos([p.user_id]);
    let ok = 0;
    for (const a of abos) {
      const abo = leseAbo(a.token);
      if (!abo) continue;
      geraete++;
      try {
        const status = await senden(abo, { titel: p.title, text: p.body ?? "", url: appUrl, tag: `probe-${p.id}` });
        if (status >= 200 && status < 300) ok++;
        if (status === 404 || status === 410) await db.loescheAbo(a.id);
      } catch (_) {
        // weiter mit dem nächsten Gerät
      }
    }
    zugestellt += ok;
    await db.vermerke(p.id, { zugestellt: ok, geraete: abos.length });
  }
  return { proben: bearbeitet, geraete, zugestellt };
}
