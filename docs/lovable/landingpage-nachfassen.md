# Offener Auftrag an Lovable (08.09.2026)

**Status: nicht abgesendet — der Workspace hat keine Credits mehr.**
Sobald aufgeladen ist, geht der Text unten unverändert an das Projekt
`Bördesnack24 Landingpage` (0c068d85-ef58-4450-a511-3e7ac1d0446d).

## Was schon steht

Der erste Auftrag ist zur Hälfte umgesetzt:

| | Stand |
|---|---|
| `/impressum`, `/datenschutz` gefüllt | erledigt |
| `/agb`, `/widerruf`, `/kuendigung` neu | erledigt |
| `LegalPage.tsx` ohne Bewegung | erledigt |
| `/kuendigung` ohne Schein-Formular | erledigt |
| `Plans.tsx` (Abo-Vergleich) gebaut | erledigt |
| **`Plans` in die Startseite eingehängt** | **fehlt** |
| **Fußbereich: AGB, Widerruf, Kündigung** | **fehlt** |
| **„GbR" aus der Kopfzeile** | **fehlt** |
| **Szene 03 mit Sortimentszahlen** | **fehlt** |

Die drei neuen Rechtstextseiten sind dadurch **von der Website aus nicht
erreichbar**. Sie existieren, aber kein Link führt hin.

---

## Der Nachfasstext

NACHFASSEN. Die fünf Rechtstextseiten sind gut geworden — wortgetreu,
LegalPage ohne Bewegung, /kuendigung richtig ohne Schein-Formular. Danke.

Vom Auftrag fehlen aber vier Dinge. `src/routes/index.tsx` und
`SiteFooter.tsx` sind unverändert, und `Plans.tsx` ist gebaut, aber
nirgends eingebunden — die Abo-Szene steht also auf keiner Seite. Bitte
genau diese vier Punkte, sonst nichts.

**1. Fußbereich: drei Links fehlen.**

In `SiteFooter.tsx` stehen nur Startseite, Impressum, Datenschutz. Die
drei neuen Seiten sind dadurch von der Website aus nicht erreichbar —
eine Widerrufsbelehrung, die niemand findet, ist keine. Die Reihenfolge
lautet:

    Startseite · Impressum · Datenschutz · AGB · Widerruf · Abo kündigen

**2. `Plans` in die Startseite einhängen.**

`import { Plans } from "@/components/bs24/Plans";` und die Komponente
**zwischen Szene 05 („Gutes tun") und `<Stage />`** setzen. Dort gehört
sie hin: Szene 05 sagt gerade, dass die Mitbestimmung kostenlos ist, die
Tabelle belegt es unmittelbar danach.

**3. „GbR" aus der Kopfzeile.**

In `index.tsx`, drei Stellen:

- die Augenbraue in Szene 01: `Bördesnack24 GbR · Sülzetal` →
  `Bördesnack24 · Sülzetal`
- `DESC`: „Bördesnack24 GbR baut Automaten-Standorte…" →
  „Bördesnack24 baut Automaten-Standorte…"
- `TITLE` enthält kein GbR, bleibt wie er ist.

Der Fußbereich („Bördesnack24 GbR · Sülzetal, Sachsen-Anhalt") und alle
Rechtstexte bleiben unverändert — dort ist die Rechtsform vorgeschrieben
(§ 5 DDG).

**4. Szene 03 „Genießen": Zahlen statt Aufzählung.**

Die Konstante `SORTIMENT` in `index.tsx` wird ersetzt. Die vier
Warengruppen kommen aus der Produktionsdatenbank, nicht aus der
bisherigen Liste — **Süßwaren statt Heißgetränke**:

    Getränke   26   „Gekühlt, für den Weg."
    Eis        20   „Saisonal — vor allem dort, wo im Sommer etwas los ist."
    Süßwaren   13   „Schokolade, Riegel, Gummizeug."
    Snacks      3   „Herzhaftes für zwischendurch."

Die Zahl gehört sichtbar auf die Karte (etwa als kleine Zeile über oder
unter dem Namen der Warengruppe) — nicht nur in den Fließtext.

Der Einleitungssatz der Szene wird zu:

    62 Produkte sind für den Start vorgesehen, verteilt auf vier Warengruppen.
    Was am Ende in welchem Automaten liegt, entscheidet sich mit dem Standort —
    ein Bahnhof braucht anderes als ein Freibad.

Darunter, als Fließtext nach den Karten:

    Kaffee und Kakao sind für den Standort Bahnhof vorgesehen. Dafür ist ein
    eigener Automat geplant; ein Produkt steht dort noch nicht fest.

Heißgetränke bekommen **keine Zahl** — es gibt null Produkte in der
Kategorie. Eine Zahl wäre erfunden.

Der Hinweiskasten am Ende der Szene sagt derzeit „keine Produktzahl" und
wäre damit ein Widerspruch zur Szene selbst. Neuer Wortlaut:

    Die Liste ist Planung. Nichts davon ist gekauft, nichts liegt in einem
    Automaten. Was am Ende in welchem Automaten liegt, entscheidet sich mit
    dem Standort — und welche Marken es werden, steht nicht fest.

Erinnerung zur Zeitform: „62 Produkte **sind vorgesehen**" ist erlaubt,
„wir führen 62 Produkte" nicht. Keine Herstellernamen.

**5. Eine Korrektur an /kuendigung.**

Der Abschnitt „Was dann passiert" beschreibt ein Absenden auf der Seite.
Da das Formular noch nicht existiert, beschreibt er etwas, das es nicht
gibt. Ersetze den ganzen Abschnitt (beide Absätze) durch:

    Den Zugang deiner Kündigung bestätigen wir dir per E-Mail — mit Datum und
    Uhrzeit des Eingangs und dem Termin, zu dem der Vertrag endet. Heb die
    Bestätigung auf.

    Kommt sie nicht an, prüfe bitte den Spam-Ordner. Deine Kündigung ist
    trotzdem wirksam — massgeblich ist der Eingang bei uns, nicht der Empfang
    der Bestätigung bei dir.

„Datum und Uhrzeit des Eingangs" bleibt fett.

Melde zurück, wenn die vier Punkte stehen — und ob die Vergleichstabelle
bei 360 Punkten Breite ohne waagerechtes Scrollen auskommt.
