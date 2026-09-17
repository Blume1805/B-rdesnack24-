# ADR 0006 — Zwei getrennte PWAs, ein gemeinsames Supabase-Projekt

- **Status:** Akzeptiert
- **Datum:** 2026-09-17
- **Löst ab:** ADR 0004, soweit dort festgelegt ist, dass der interne Bereich
  „vorerst in Flutter" bleibt

## Kontext

ADR 0004 hat das Kundenfrontend auf React festgelegt und den internen Bereich
(Verwaltung, Finanzen, Freigaben) bewusst in Flutter belassen — mit der
Begründung, er werde am Schreibtisch benutzt, nicht am Automaten bei schlechtem
Empfang. Der Nachtrag vom selben Tag hat den Umfang präzisiert: Von 107
Feature-Dateien wandern 56 (`customer` 41, `auth` 11, `legal` 3, `home` 1),
51 bleiben (`management` 35, `finance` 10, `approvals` 6). „Eine Technologie
für alles" wird damit nicht erreicht.

Am 17.09.2026 hat der Gesellschafter zwei Fragen gestellt:

1. Kann die Gesellschafter-App ebenfalls eine PWA sein — eigenständig, mit
   eigenem Symbol auf dem Telefon, ohne Verbindung zur Kunden-App außer über
   eine Schnittstelle?
2. Muss dafür ein **zweites Supabase-Projekt** angelegt werden, damit die
   beiden Anwendungen „über API-Schlüssel miteinander interagieren" können?

Die zweite Frage beruht auf einer verbreiteten Verwechslung: Der Supabase-
`anon key` ist keine Berechtigung, sondern eine Adresse. Er benennt das Projekt
und ist öffentlich — er steht heute schon im ausgelieferten Web-Bundle. Wer was
sehen darf, entscheidet die Datenbank anhand des angemeldeten Kontos.
Nachgezählt am 17.09.2026: 35 Tabellen mit Row Level Security, 98 Policies,
124 Rollenprüfungen darin, 149 Bezüge auf `auth.uid()`.

Gegen ein zweites Projekt sprechen drei geprüfte Punkte:

* **Zwei Projekte sind zwei getrennte Datenbanken.** Beide Bereiche arbeiten
  auf denselben Tabellen: `profiles`, `products`, `machines` und
  `purchase_complaints` werden direkt von beiden benutzt. Die Fremdschlüssel
  darauf zählen 20 (`profiles`), 16 (`machines`), 14 (`products`) und 10
  (`customers`) — jeder davon zerrisse an der Projektgrenze.
* **Die Verbindung wäre entweder langsam oder gefährlich.** Entweder ein
  Dauerabgleich, der immer hinterherhinkt und die Inventur unzuverlässig macht,
  oder der `service_role`-Schlüssel im Browser. Dieser Schlüssel hebelt sämtliche
  Policies aus; er liegt heute ausschließlich serverseitig in den 22 Edge
  Functions. Im Browser wäre er von jedem auslesbar — ein meldepflichtiger
  Vorfall nach Art. 33 DSGVO.
* **Kosten ohne Gegenwert.** Zweite Migrationskette (64 Dateien), zweite
  Auth-Konfiguration, zweites Backup, zweite Geheimnisse, doppelte laufende
  Kosten — für ein Ergebnis, das ein Projekt ebenso liefert.

Die Prüfung hat zusätzlich zwei Befunde ans Licht gebracht, die unabhängig von
dieser Entscheidung bestehen und in `docs/ARCHITECTURE.md` als A-9 und A-10
geführt werden: Kunden- und Gesellschafterbereich liegen heute in **einem**
Web-Bundle unter **einer** Adresse, und die Zwei-Faktor-Anmeldung war nur eine
Erinnerung im Client.

## Entscheidung

**1. Der interne Bereich wird eine eigene PWA**, getrennt von der Kunden-PWA.
Zwei Adressen, zwei Symbole auf dem Telefon, zwei Bundles. Die Kunden-PWA lädt
keinen Verwaltungscode mehr, die interne PWA keinen Kundencode.

**2. Beide PWAs arbeiten gegen dasselbe Supabase-Projekt.** Ein zweites Projekt
wird nicht angelegt. Die „Schnittstelle zwischen den beiden Apps" existiert
bereits: dieselbe Datenbank, dieselben RPCs, dieselben Policies.

**3. Beide PWAs verwenden denselben `anon key`.** Das ist bestimmungsgemäß und
unkritisch; die Trennung leistet die Datenbank, nicht der Schlüssel.

**4. Ein zweites Supabase-Projekt wird als Testumgebung angelegt**, nicht als
zweite Anwendung. Heute gibt es nur die Produktivumgebung; jede Migration und
jede Preisänderung geht ungetestet an echte Daten. Anleitung:
`docs/OPERATIONS.md`, Runbook I.

**5. Die Zwei-Faktor-Anmeldung wird für `system_admin`, `shareholder` und
`employee` serverseitig verpflichtend** (Migration `0066`, Schalter
`app.security_settings.require_mfa_internal`). Die Trennung in zwei Adressen
verkleinert die Angriffsfläche, ersetzt diese Pflicht aber nicht.

## Konsequenzen

### Was besser wird

- Der interne Bereich taucht in keinem Kundenlink mehr auf. Wer den QR-Code am
  Automaten scannt, landet in einer Anwendung, die Verwaltungscode gar nicht
  enthält.
- Beide Bundles werden kleiner. Der `deferred`-Umweg in `home_shell.dart`
  entfällt mitsamt seinem Ladezustand.
- Eine Änderung am Kundenbereich kann den Innenbereich nicht mehr versehentlich
  mitverändern — und umgekehrt.
- Eine Technologie für alle Oberflächen wird nun doch erreicht: React für
  Landingpage, Automatenseite, Kunden-PWA und interne PWA.

### Was es kostet

- Die 51 Feature-Dateien des internen Bereichs müssen ebenfalls portiert werden.
  ADR 0004 hatte sie ausgenommen; dieser Aufwand kommt hinzu.
- Zwei Auslieferungswege statt einem (zwei Adressen, zwei Manifeste, zwei
  Build-Schritte).
- Gemeinsame Bausteine (Design-Tokens, Supabase-Client, Auth-Hülle) brauchen
  einen gemeinsamen Ort, sonst driften sie auseinander.

### Was ausdrücklich nicht gilt

- Kein zweites Supabase-Projekt für die Anwendung.
- Kein `service_role`-Schlüssel in einer der beiden PWAs — in keiner Ausbaustufe.
- Keine Berechtigungsprüfung, die nur im Client stattfindet. Dass die interne
  PWA unter einer eigenen Adresse liegt, ist Bequemlichkeit und
  Angriffsflächenverkleinerung, kein Schutz.

## Reihenfolge

Die Entscheidung ändert nichts an der Dringlichkeit: Der Engpass bleiben die
drei Standortgespräche, nicht die Technik. Die Umstellung beginnt erst, wenn
die Kunden-PWA steht — vorher wäre sie eine Baustelle neben einer Baustelle.
