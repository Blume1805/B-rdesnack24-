# Auftrag an Lovable — Landingpage-Redesign, 26.09.2026

Projekt: Bördesnack24 Landingpage (`0c068d85-ef58-4450-a511-3e7ac1d0446d`).
Grundlage: ADR 0008, Staffelplan in `docs/scrolling-funktionen.md` Abschnitt 4,
Projektwissen vom 26.09.2026.

Der Text unten ging wörtlich an Lovable: gesendet am 26.09.2026,
`message_id` `umsg_01m3fjz6tbe7ars3947x712zh1`.

---

Redesign der Startseite: kürzer, klarer, mit Symbolen, ohne neue Aussagen. Die Rechtstexte bleiben unberührt. Das Projektwissen ist aktualisiert (Anrede „Du" groß, keine Gedankenstriche, Musterliste) und gilt für alles unten.

## A. Sprache, überall auf der Startseite

1. Die Kundschaft wird mit „Du" angesprochen, **großgeschrieben**: Du, Dich, Dir, Dein, Deine. Standortgeber und Unternehmen bleiben beim „Sie".
2. **Keine Gedankenstriche (—, –) und keine Mittelpunkte (·) als Trenner** im sichtbaren Text, auch nicht in Bildunterschriften. Stattdessen Punkt, Komma oder Doppelpunkt.
3. Überschriften enden mit Punkt. Überzeilen (Eyebrows) in korrekter Groß- und Kleinschreibung, ohne Punkt.

## B. Texte je Abschnitt (wörtlich übernehmen)

**1. Kopf** (`src/routes/index.tsx`)
- Überzeile und Überschrift bleiben.
- Absatz darunter: „Wir planen Verkaufsautomaten für Osterweddingen und Umgebung. 5 % des Nettoerlöses spenden wir an gemeinnützige Vereine und Organisationen der Region, und Du entscheidest mit, wer sie bekommt."
- Darunter drei kleine Hinweise mit Symbol (lucide, `aria-hidden`), nebeneinander, auf dem Telefon untereinander:
  - `MapPin` „Osterweddingen und Umgebung"
  - `Smartphone` „App kostenlos im Browser"
  - `Vote` „Du entscheidest mit"
- Hinweiskasten bei `vorbereitung`: „Noch ist kein Automat in Betrieb. Wir suchen Standorte in Osterweddingen und den Nachbarorten."
  Bei `live`: „Unsere Automaten sind in Betrieb. Die Nachweise findest Du auf der Seite des jeweiligen Automaten."

**2. Für Standortgeber** (`Stage.tsx`)
- Überschrift bleibt: „Sie stellen die Fläche. Wir tragen den Rest."
- Einleitung: „Feste Miete oder Anteil am Umsatz. Was passt, klären wir im Gespräch."
- Die drei Zusagen bekommen je ein Symbol links neben dem Titel:
  - `Banknote` „Was Sie bekommen." / „Miete oder Umsatzanteil, passend zum Ort."
  - `CircleSlash` „Was es Sie kostet." / „Nichts. Kein Kaufpreis, keine Wartung, keine Befüllung."
  - `Plug` „Was wir brauchen." / „Stellfläche, Strom und Zugang zum Befüllen."
- Satz über der Schaltfläche: „Die Spende an die Region zahlen wir. Ihre Vergütung bleibt davon unberührt."
- Bildunterschrift der Zeichnung: „Schematische Zeichnung, mit KI erzeugt. Kein Foto."

**3. Der Anteil** (`ShareBar.tsx`)
- Überschrift bleibt: „Fünf Prozent bleiben in der Region." Balken bleibt.
- Den langen Absatz ersetzen durch **vier Zeilen mit Symbol** (Liste, `aria-hidden` an den Symbolen):
  - `Percent` „5 % des Nettoerlöses" / „Nettoerlös heißt: Umsatz ohne Umsatzsteuer."
  - `Lightbulb` „Du schlägst vor" / „Vereine und Organisationen aus der Region, in der App."
  - `Vote` „Die Kundschaft stimmt ab" / „Die drei Zwecke mit den meisten Stimmen bekommen den Topf."
  - `CalendarCheck` „Einmal im Jahr" / „Zu gleichen Teilen ausgezahlt und öffentlich nachgewiesen."
- Darunter **ein** Satz mit dem neuen Muster Text-Highlight (Teil C): „Wer das Geld bekommt, entscheidest Du."
- Hinweiskasten bei `vorbereitung` bleibt wortgleich.

**4. Für Kundinnen und Kunden**
- Überschrift: „Deine Vorteile. Kostenlos."
- Die acht Vorteile werden **kurz**: fetter Titel, darunter eine leise Zeile. Symbole wie bisher, Reihenfolge wie bisher:
  1. `Percent` „5 % Dauerrabatt" / „Auf jeden Kauf, kostenloses Konto genügt."
  2. `HandCoins` „Du bestimmst mit" / „Empfänger der Spende vorschlagen und abstimmen."
  3. `BadgePercent` „Bis 10 % mit Statusstufen" / „6 % ab 150 €, 7,5 % ab 500 €, 10 % ab 1.000 € Gesamtumsatz."
  4. `TicketPercent` „Deals bis 14,5 %" / „10 % Aktionsrabatt zusätzlich."
  5. `Ticket` „Coupons bis 25 %" / „5, 10, 15 und 25 % aus dem Treueprogramm."
  6. `CakeSlice` „Geschenke für Dich" / „Zum Geburtstag und zum Jahrestag Deiner Anmeldung."
  7. `ReceiptText` „Beleg digital" / „Kundenkarte und Kaufhistorie."
  8. `MapPinned` „Automatenfinder" / „Echtzeit-Bestand, Nährwerte und Allergene."
- **Die Liste wird als ein Block eingeblendet**, nicht mehr Zeile für Zeile (`Reveal` einmal um die ganze Karte, kein `delay` je Zeile). Grund: Höchstgrenze von acht Bewegungsmustern, siehe Projektwissen.
- Hinweis unter der Karte: „Coupons lassen sich nicht mit anderen Aktionen kombinieren. Bei mehreren Vorteilen gilt automatisch der günstigste Preis."
- Absatz vor der Schaltfläche: „Läuft im Browser. Über das Browsermenü legst Du die App auf Deinen Startbildschirm."
- Schaltfläche bleibt „App öffnen".

**5. Für Unternehmen**
- Überschrift bleibt.
- Karten mit Symbol:
  - `Smartphone` „Digital in der App." / „Ihre Anzeige in der Bördesnack24-App."
  - `PanelTop` „Analog am Automaten." / „Ihre Fläche direkt am Gerät."
- Hinweiskasten: „Noch nicht buchbar. Ohne laufenden Automaten gibt es keine Reichweite. Wir merken Sie vor und melden uns."

**6. Wer dahintersteht**
- Absatz: „Pia und Philipp Blume, eine GbR aus dem Ort. Keine Kette, kein Investorengeld."

## C. Neues Muster 04: Text-Highlight (genau einmal auf der Seite)

- Neuer Baustein `TextHighlight` (z. B. in `SceneMotion.tsx`) für den Satz „Wer das Geld bekommt, entscheidest Du." im Abschnitt „Der Anteil".
- Jedes Wort ein `<span>`; der vollständige Satz steht im HTML.
- Beim Scrollen färben sich die Wörter nacheinander in Gold `#FDC102`. Fortschritt über `prog()` aus `src/lib/scroll.ts`, eingehängt in `subscribe`, **kein zusätzlicher Scroll-Handler**. Das letzte Wort ist bei 60 % der Strecke erreicht.
- Noch nicht eingefärbte Wörter: helle Schrift mit **mindestens 4,5:1** Kontrast auf dem Nachtgrund, also lesbar, nur ohne Gold. Keine halbtransparente Schrift darunter.
- Bei ausgeschalteter Bewegung (`data-motion` nicht `on`) und bei `prefers-reduced-motion`: sofort vollständig gold.
- Schriftgröße wie eine kleine Überschrift, eigene Zeile.

## D. Muster 05: Mikrointeraktion

- Schaltflächen und Karten reagieren auf Berührung: beim Drücken leicht verkleinert (`scale(.98)`), beim Überfahren mit der Maus minimal angehoben, sichtbarer Fokusrahmen bei Tastaturbedienung. Nur `transform` und Schatten, Dauer 150 bis 200 ms.
- Bei ausgeschalteter Bewegung entfällt die Verkleinerung, der Fokusrahmen bleibt.
- Berührungsflächen mindestens 44 × 44 px.

## E. Vorbereitete Bildplätze (Muster 12, noch gesperrt)

- `src/data/site.ts` bekommt:
  ```ts
  bilder: {
    automat: null as string | null,   // Pfad zu einem echten Foto des Automaten
    standort: null as string | null,  // Pfad zu einem echten Foto eines Standorts
  },
  ```
- Ist `bilder.automat` gesetzt, zeigt `Stage` statt der KI-Zeichnung das Foto, aufgedeckt mit Maskenreveal (`clip-path: inset()` von 100 % auf 0, 0,8 s, beim Hereinscrollen über den bestehenden `Reveal`-Beobachter). Die KI-Kennzeichnung entfällt dann für dieses Bild. `MachineZoom` nutzt dasselbe Foto.
- Solange beide `null` sind, **ändert sich nichts Sichtbares**: kein Platzhalter, kein leerer Rahmen, kein Hinweis auf fehlende Bilder.

## F. Nicht ändern

- Rechtstexte, Fußbereich, Bild im Kopf, `betriebsstatus`-Schalter, bestehende Bausteine `Stage`, `ShareScene`, `SceneColorTransition`, `PhysicalDigital`, `MachineZoom`, `MotionToggle`.
- Keine neue Bibliothek, kein zweiter Scroll-Handler.

## G. Abschluss

Je Punkt A bis F eine Zeile, was geändert wurde. Dazu bitte ausführen und das Ergebnis nennen:
`rg -n "—|–| · " src/routes/index.tsx src/components/bs24/*.tsx` (erwartet: keine Treffer außerhalb von Code-Kommentaren) und
`rg -n "\b(du|dich|dir|dein|deine|deinen|deinem|deiner)\b" src/routes/index.tsx src/components/bs24/*.tsx` (erwartet: keine Treffer im sichtbaren Text).
