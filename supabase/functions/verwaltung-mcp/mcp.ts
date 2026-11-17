// MCP-Logik der Verwaltungs-Verbindung (ohne Netz, damit testbar).
//
// Protokoll: JSON-RPC 2.0 über HTTP POST („Streamable HTTP", Antwort als
// application/json). Unterstützt: initialize, notifications/initialized,
// ping, tools/list, tools/call.
//
// Grundsatz (Entscheidung Philipp 17.11.2026): Was an Claude zurückgeht,
// enthält keine Daten von Beschäftigten — keine Namen, keine Kennungen, keine
// Freitexte. PDF-Inhalte gehen nie an Claude, nur ein befristeter Link.

export const SERVER_INFO = { name: "boerdesnack24-verwaltung", version: "1.0.0" };
export const PROTOKOLL_VERSIONEN = ["2025-06-18", "2025-03-26", "2024-11-05"];

/** Protokollarten, die Claude anfordern darf. Schulungsnachweise fehlen
 *  bewusst: Sie bestehen aus Daten von Beschäftigten. */
export const PROTOKOLLARTEN: Record<string, { kind: string; titel: string }> = {
  temperatur: { kind: "temperature", titel: "Temperaturkontrolle" },
  reinigung: { kind: "cleaning", titel: "Reinigungsprotokoll" },
  vernichtung: { kind: "disposal", titel: "Vernichtungsprotokoll" },
  befuellung: { kind: "filling", titel: "Befüllungsprotokoll" },
  wartung: { kind: "maintenance", titel: "Wartungsprotokoll" },
  geldentnahme: { kind: "cash", titel: "Geldentnahmeprotokoll" },
};

export const WERKZEUGE = [
  {
    name: "protokoll_pdf",
    title: "Protokoll als PDF",
    description:
      "Erstellt ein Protokoll der Bördesnack24-Automaten für einen Zeitraum als PDF " +
      "und gibt einen 24 Stunden gültigen Download-Link zurück. Der PDF-Inhalt wird " +
      "nicht übermittelt, nur der Link. Den Link NICHT selbst öffnen, abrufen oder " +
      "zusammenfassen, nur an den Nutzer weitergeben: Das PDF kann Namen von Beschäftigten " +
      "enthalten. Arten: " + Object.keys(PROTOKOLLARTEN).join(", ") + ".",
    inputSchema: {
      type: "object",
      properties: {
        art: { type: "string", enum: Object.keys(PROTOKOLLARTEN), description: "Protokollart" },
        von: { type: "string", description: "Erster Tag, Format JJJJ-MM-TT" },
        bis: { type: "string", description: "Letzter Tag, Format JJJJ-MM-TT" },
      },
      required: ["art", "von", "bis"],
      additionalProperties: false,
    },
    annotations: { readOnlyHint: true, openWorldHint: false },
  },
  {
    name: "offene_vorgaenge",
    title: "Offene Unterschriften und Freigaben",
    description:
      "Listet offene Freigaben (mit Deiner eigenen Entscheidung), offene Unterschriften " +
      "von Beschäftigten je Dokument (nur Anzahlen) und Dokumente, deren Gültigkeit in " +
      "60 Tagen endet. Enthält keine Namen.",
    inputSchema: { type: "object", properties: {}, additionalProperties: false },
    annotations: { readOnlyHint: true, openWorldHint: false },
  },
];

/** Dateien in `mcp-exporte/<uid>/` heißen `<Zeitstempel ms>_<Name>.pdf`. Liefert
 *  die Namen, deren Link abgelaufen ist (älter als `maxAlterMs`). Namen ohne
 *  Zeitstempel bleiben liegen — die räumt niemand versehentlich weg. */
export function abgelaufeneExporte(namen: string[], jetzt: number, maxAlterMs = 24 * 60 * 60 * 1000): string[] {
  return namen.filter((n) => {
    const m = /^(\d{13})_/.exec(n);
    return m !== null && Number(m[1]) < jetzt - maxAlterMs;
  });
}

export interface Werkzeugbank {
  protokollPdf(kind: string, von: string, bis: string, titel: string): Promise<{ link: string; dateiname: string }>;
  offeneVorgaenge(): Promise<unknown>;
  protokolliere(werkzeug: string, parameter: Record<string, unknown>): Promise<void>;
}

const DATUM = /^\d{4}-\d{2}-\d{2}$/;

/** Prüft einen Zeitraum. Rückgabe: Fehlertext oder null. */
export function zeitraumFehler(von: unknown, bis: unknown, heute = new Date()): string | null {
  if (typeof von !== "string" || typeof bis !== "string" || !DATUM.test(von) || !DATUM.test(bis)) {
    return "Bitte Daten im Format JJJJ-MM-TT angeben.";
  }
  const a = new Date(von + "T00:00:00Z"), b = new Date(bis + "T00:00:00Z");
  if (isNaN(a.getTime()) || isNaN(b.getTime()) || a.toISOString().slice(0, 10) !== von ||
      b.toISOString().slice(0, 10) !== bis) return "Ungültiges Datum.";
  if (b < a) return "Der Zeitraum endet vor seinem Beginn.";
  if ((b.getTime() - a.getTime()) / 86_400_000 > 366) return "Höchstens ein Jahr je PDF.";
  if (a > heute) return "Der Zeitraum liegt in der Zukunft.";
  return null;
}

type Rpc = { jsonrpc?: string; id?: string | number | null; method?: string; params?: Record<string, unknown> };

const antwort = (id: Rpc["id"], result: unknown) => ({ jsonrpc: "2.0", id: id ?? null, result });
const fehler = (id: Rpc["id"], code: number, message: string) =>
  ({ jsonrpc: "2.0", id: id ?? null, error: { code, message } });
const text = (t: string, istFehler = false) => ({ content: [{ type: "text", text: t }], isError: istFehler });

/** Bearbeitet eine JSON-RPC-Nachricht. `null` = Benachrichtigung ohne Antwort. */
export async function bearbeite(msg: Rpc, bank: Werkzeugbank, heute = new Date()): Promise<unknown | null> {
  if (!msg || msg.jsonrpc !== "2.0" || typeof msg.method !== "string") {
    return fehler(msg?.id, -32600, "Ungültige Anfrage");
  }
  const istBenachrichtigung = msg.id === undefined;
  switch (msg.method) {
    case "initialize": {
      const gewuenscht = String(msg.params?.protocolVersion ?? "");
      return antwort(msg.id, {
        protocolVersion: PROTOKOLL_VERSIONEN.includes(gewuenscht) ? gewuenscht : PROTOKOLL_VERSIONEN[0],
        capabilities: { tools: { listChanged: false } },
        serverInfo: SERVER_INFO,
        instructions:
          "Verwaltung Bördesnack24. Protokolle als PDF anfordern (Link, 24 h gültig) und " +
          "offene Unterschriften/Freigaben abfragen. Freigaben erteilen kann nur ein Mensch in der App. " +
          "PDF-Links nie selbst öffnen, nur an den Nutzer weitergeben.",
      });
    }
    case "notifications/initialized":
    case "notifications/cancelled":
      return null;
    case "ping":
      return antwort(msg.id, {});
    case "tools/list":
      return antwort(msg.id, { tools: WERKZEUGE });
    case "tools/call": {
      const name = msg.params?.name;
      const args = (msg.params?.arguments ?? {}) as Record<string, unknown>;
      if (name === "protokoll_pdf") {
        const art = PROTOKOLLARTEN[String(args.art ?? "")];
        if (!art) return antwort(msg.id, text("Unbekannte Protokollart. Erlaubt: " + Object.keys(PROTOKOLLARTEN).join(", "), true));
        const f = zeitraumFehler(args.von, args.bis, heute);
        if (f) return antwort(msg.id, text(f, true));
        await bank.protokolliere("protokoll_pdf", { art: args.art, von: args.von, bis: args.bis });
        try {
          const r = await bank.protokollPdf(art.kind, String(args.von), String(args.bis), art.titel);
          // Zwei Teile: die Meldung für Claude und der Link, der laut MCP-
          // Kennzeichnung nur für den Menschen bestimmt ist (audience: user).
          return antwort(msg.id, {
            content: [
              {
                type: "text",
                text: `${art.titel} ${args.von} bis ${args.bis} ist erstellt (Datei ${r.dateiname}). ` +
                  "Den folgenden Link bitte unverändert an den Nutzer weitergeben und nicht selbst öffnen.",
              },
              {
                type: "text",
                text: `Download (24 Stunden gültig): ${r.link}`,
                annotations: { audience: ["user"] },
              },
            ],
            isError: false,
          });
        } catch (e) {
          return antwort(msg.id, text("Das PDF konnte nicht erstellt werden: " + kurz(e), true));
        }
      }
      if (name === "offene_vorgaenge") {
        await bank.protokolliere("offene_vorgaenge", {});
        try {
          const v = await bank.offeneVorgaenge();
          return antwort(msg.id, {
            content: [{ type: "text", text: JSON.stringify(v, null, 2) }],
            structuredContent: v,
            isError: false,
          });
        } catch (e) {
          return antwort(msg.id, text("Abfrage nicht möglich: " + kurz(e), true));
        }
      }
      return fehler(msg.id, -32602, "Unbekanntes Werkzeug");
    }
    default:
      return istBenachrichtigung ? null : fehler(msg.id, -32601, "Methode nicht unterstützt");
  }
}

/** Fehlermeldungen kurz und ohne Innenleben (keine Adressen, keine Schlüssel). */
export function kurz(e: unknown): string {
  const s = e instanceof Error ? e.message : String(e);
  return s.replace(/https?:\/\/\S+/g, "[Adresse]").replace(/eyJ[\w.-]+/g, "[Token]").slice(0, 160);
}
