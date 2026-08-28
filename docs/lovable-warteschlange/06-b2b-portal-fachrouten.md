# Auftrag 06 — Fach-Routen fürs neue B2B-Portal fertigstellen

*Fortsetzung eines laufenden Projekts, kein neuer Auftrag von Grund auf.
Einzeln senden, sobald wieder Guthaben im Workspace ist.*

**Stand: 28.08.2026.** Dies ist **nicht** dasselbe Projekt wie in
`04-b2b-firmenportal.md` (Mitarbeiterkonto/Budget für Firmenkunden, älterer
Auftrag, anderes Lovable-Projekt). Es geht um das **neue, separate**
Lovable-Projekt „Bördesnack24 Partner Portal“, angelegt am 28.08.2026 für
den Werbenetzwerk-Auftrag (Migrationen 0154–0156). Details und Historie in
`docs/ADVERTISING-MASTERPROMPT-ABGLEICH.md`.

## Projekt-Zugang

- Projekt-ID: `35646ee4-142a-4017-bdb2-089951ddcc94`
- Workspace-ID: `588f8a86cd6010a58053`
- Editor: https://lovable.dev/projects/35646ee4-142a-4017-bdb2-089951ddcc94
- Preview: https://id-preview--35646ee4-142a-4017-bdb2-089951ddcc94.lovable.app

## Warum dieser Auftrag nötig ist

Zwei Nachrichten sind an dieses Projekt bereits erfolgreich gegangen und
abgeschlossen (Status `completed`, Commit `7cec597f...`, 4,4 Credits):

1. Projekt angelegt, Knowledge-Dokument gesetzt (Farben, Typografie,
   Motion, Geld-Darstellung, erlaubte RPC-Liste — siehe
   `mcp__Lovable__get_project_knowledge` für den genauen Text, oder die
   Nachricht an das Projekt vom 28.08.2026, 20:08 Uhr).
2. Grundgerüst gebaut: Design-System in `src/styles.css` (OKLCH-Token für
   Gold/Ink), `Money`/`StatCard`/`StatusBadge`-Komponenten, Supabase-Client
   mit Konfigurationserkennung, Typdefinitionen, API-Wrapper für die zehn
   freigegebenen RPCs, `auth.ts`, Demo-Modus mit klar gekennzeichneten
   Beispieldaten, `PortalShell` mit Sidebar-Navigation, Login-Seite unter
   `/`.

**Der Build ist aktuell rot.** Der `PortalShell` verweist auf Routen
(`/dashboard`, `/kontoauszug`, `/firma`, `/vertraege`, `/kampagnen`), die
noch nicht existieren. Der Lovable-Agent selbst hat um eine Fortsetzung
gebeten, bevor er weiterbaut. Ein Versuch, das am 28.08.2026 direkt
anzustoßen, scheiterte an fehlendem Guthaben im Workspace
(`Lovable can't send this message... out of credits`,
https://lovable.dev/settings/billing).

## Der Auftrag zum Einfügen (unverändert einfügbar)

> Bitte fahre fort und schließe die Implementierung ab: Erstelle das
> Portal-Layout (_portal.tsx) und die einzelnen Fach-Routen, die aktuell
> noch fehlen und die Build-Fehler verursachen — Dashboard, Kontoauszug,
> Firma & Standorte, Verträge sowie Kampagnen (inklusive Report-Ansicht mit
> den drei anonymen Kennzahlen und Upload für Kampagnen-Material), wie im
> vorherigen Auftrag beschrieben. Alle Bereiche im Demo-Modus mit klar als
> Beispieldaten gekennzeichneten Platzhaltern, bis der Supabase-Connector
> verbunden ist. Am Ende bitte wieder kurz zusammenfassen, was jetzt
> vollständig steht und was noch offen ist.

## Was daneben noch offen ist (unabhängig von Guthaben)

- **Supabase-Connector nicht verbunden.** Der Auftraggeber muss ihn selbst
  über `https://lovable.dev/dashboard?connectors` herstellen (externes
  Projekt `nnfsyuglkqycwenwxmuw`) — das kann kein Agent per MCP erledigen.
  Bis dahin bleibt das Portal im Demo-Modus.
- **Prüfen, ob `04-b2b-firmenportal.md` zusätzlich an dieses Projekt
  gehört.** Der ältere Auftrag beschreibt Mitarbeiterkonto/Budget für
  Firmenkunden über dieselben RPCs (`business_dashboard`,
  `business_statement`, `my_businesses`), aber einen anderen
  Anwendungsfall (Beschäftigte kaufen am Firmenautomaten) als der
  Werbenetzwerk-Auftrag hier (Werbekunde verwaltet Kampagnen). Beim
  Fortsetzen klären, ob beide Anwendungsfälle im selben Portal zusammen
  gehören oder getrennt bleiben — das ist noch nicht entschieden.
