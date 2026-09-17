# Briefing für Lovable — Landingpage boerdesnack24.de

Projektanweisung und Abnahmegrundlage für den Umbau des bestehenden Projekts
**„Bördesnack24 Landingpage"** (Lovable, angelegt am 07.09.2026). Es wird kein
neues Projekt angelegt; Schriften, Rechtsseiten und Komponenten bleiben, wo sie
tragen.

Stand: 17.09.2026.

## Warum die Seite umgebaut wird

Zwei Gründe, beide zwingend:

1. **Das Abo gibt es nicht mehr.** Die App ist seit dem 16.09.2026 kostenlos
   (`docs/COMPLIANCE.md`, V-007). Die Seite bewirbt in `Plans.tsx` weiterhin
   0,99 €/Monat und 9,99 €/Jahr. Eine Preisangabe für etwas, das es nicht gibt,
   ist irreführend (§ 5 UWG).
2. **Die Seite spricht die falsche Zielgruppe zuerst an.** Sie erklärt das
   Produkt der Kundschaft. Die Kundschaft ist aber nicht der Engpass.

## Wer zuerst gelesen werden muss: der Standortgeber

Das Fundament des Geschäfts steht in
`docs/strategy/2026-09-15-fundament-und-finanzlogik.md`, Abschnitt 1. Kurz:

> Bördesnack24 ist ein Automatenbetrieb, der seine knappste Ressource — gute
> Standorte — mit einer anderen Währung bezahlt als seine Wettbewerber. Diese
> bieten dem Standortgeber Miete oder Umsatzprovision. Bördesnack24 bietet
> stattdessen einen zweckgebundenen Anteil am Umsatz seines Automaten, der an
> eine Sache fließt, die dem Ort gehört: den Verein, der die Halle nutzt, den
> Förderverein des Bades.

Daraus folgt die Reihenfolge der Seite. Wer entscheidet, ob ein Automat in
einer Sporthalle stehen darf, ist der Hallenwart, der Vereinsvorstand, die
Gemeinde. Diese Person muss auf der Startseite in zehn Sekunden verstehen, was
sie davon hat. Alles andere kommt danach.

Die Kundschaft erreicht uns ohnehin über den Automaten und die Automatenseite
(eigenes Projekt „Börde Snack Connect"). Sie braucht die Landingpage nicht, um
zu kaufen.

## Aufbau, in dieser Reihenfolge

1. **Kopf.** Was Bördesnack24 ist, in einem Satz. Ehrlich zum Betriebsstand
   (siehe unten).
2. **Für Standortgeber.** Der wichtigste Abschnitt, entsprechend groß.
   * Der Kern als Aussage, nicht als Frage: „andere betreiber zahlen ihnen
     miete. wir zahlen ihrem verein."
   * Was der Standortgeber bekommt: einen festen Anteil am Umsatz *dieses*
     Automaten, zweckgebunden an einen Empfänger am Ort, nachweisbar über eine
     eigene Seite je Automat.
   * Was es ihn kostet: nichts. Kein Kaufpreis, keine Wartung, keine Befüllung.
   * Was wir brauchen: Stellfläche, Stromanschluss, Zugang zum Befüllen.
   * Was als Nächstes passiert: ein Gespräch, unverbindlich.
   * Schaltfläche: „gespräch vereinbaren" (E-Mail-Link, kein Formular mit
     Datenspeicherung).
   * **Keine Prozentzahl nennen.** Der Anteil wird je Standort vereinbart, und
     seine rechtliche Einordnung ist offen (`docs/COMPLIANCE.md`, V-002). Eine
     Zahl hier wäre ein Versprechen, das wir noch nicht halten können.
3. **Wie der Nachweis funktioniert.** Der Unterschied zu einer Provision: Jeder
   Automat hat eine öffentliche Seite, auf der steht, was er erwirtschaftet
   hat, mit Bezugsgröße und Stand. Der Empfänger kann es prüfen, seine
   Mitglieder auch. Das ist der eigentliche Beleg für die Ernsthaftigkeit.
4. **Für Kundinnen und Kunden.** Die App: kostenlos, 5 % an jedem Automaten,
   Stufen 6 % ab 150 €, 7,5 % ab 500 €, 10 % ab 1.000 € Gesamtumsatz. Ein
   Knopf in die App. Kurz halten, drei bis vier Sätze.

   **Der Knopf heißt „app öffnen", nicht „app herunterladen".** Die App ist
   eine PWA: Es gibt keine Installationsdatei und keinen Store. Wer sie öffnet,
   kann sie über das Browsermenü auf den Startbildschirm legen; danach startet
   sie im eigenen Fenster. Ein Text, der „Download" verspricht, erzeugt eine
   falsche Erwartung und lässt die Seite unseriös wirken, wenn nichts
   heruntergeladen wird. Ein kurzer Satz darf erklären, wie die Ablage geht.
5. **Wer dahintersteht.** Bördesnack24 GbR aus Osterweddingen, zwei Personen.
   Keine Kette, kein Investorengeld. Das ist für einen Vereinsvorstand ein
   Argument, kein Makel.
6. **Fußbereich.** Impressum, Datenschutz, AGB, Widerruf, Kündigung.

## Ehrlichkeit über den Betriebsstand

**Ein einziger Schalter** in einer Datendatei, zum Beispiel
`src/data/site.ts` mit `betriebsstatus: "vorbereitung" | "live"`.

* `vorbereitung`: Die Seite sagt klar, dass noch kein Automat in Betrieb ist
  und wir gerade Standorte suchen. Kein Konjunktiv, kein „bald schon".
* `live`: Die Seite spricht im Präsens und verlinkt die Automatenseiten.

Warum ein Schalter und keine feste Aussage: Der Stand ändert sich, und eine
Seite, die Betrieb behauptet, den es nicht gibt, ist irreführend. Eine, die
nach dem ersten Automaten noch von Vorbereitung spricht, ist peinlich. Beides
lässt sich mit einem Wort vermeiden.

**Der Schalter steht auf `vorbereitung`.** Der Gesellschafter hat am
17.09.2026 bestätigt: **Es ist noch kein Automat in Betrieb.** Das ist keine
Vorsichtsannahme mehr, sondern der festgestellte Stand. Die Seite darf deshalb
an keiner Stelle im Präsens von laufenden Automaten sprechen.

## Was gelöscht oder ersetzt wird

* `Plans.tsx` **entfällt vollständig.** Kein Abo, keine Preistabelle, keine
  Break-even-Rechnung. Ersetzt durch den kurzen Kundenabschnitt (Punkt 4).
* Die Liste „Das bekommst du kostenlos" behauptet Funktionen ohne Anmeldung
  (Kundenkarte, Kaufhistorie). Das ist falsch: Die App ist ohne Konto
  verschlossen (`docs/ARCHITECTURE.md`, A-8). Ersatzlos streichen.
* Aussagen zu App Store und Google Play entfallen. Es wird keine Store-App
  geben; die App läuft im Browser und lässt sich auf den Startbildschirm legen.

## Sprache

Deutsch, konsequente Kleinschreibung, du-Form gegenüber Kundschaft, **Sie-Form
gegenüber Standortgebern** — ein Vereinsvorstand wird nicht geduzt.
Überschriften enden mit einem Punkt. Keine Emoji, keine Ausrufezeichen, keine
Superlative.

**Verbindliche Wortwahl:** „erwirtschaftet für", niemals „gespendet", „Spende"
oder „wir spenden". Die rechtliche Einordnung des Anteils ist offen; die
falsche Vokabel würde ihr vorgreifen. Die bestehende Seite verstößt an
mehreren Stellen dagegen und ist entsprechend zu bereinigen.

## Gestaltung

Farben, Schriften und Tonlage wie im Projekt „Börde Snack Connect", damit beide
Seiten als eine Marke erkennbar sind:

| Zweck | Wert |
|---|---|
| Primär, Hervorhebungen, Schaltflächen | Gold `#FDC102` |
| Text, Überschriften, dunkle Flächen | Ink `#202321` |
| Flächen, Karten | Cream `#FBF8F4` |
| Linien | Börde-Grau `#DCD8D3` |
| Positive Zustände | Frisch-Grün `#5C9A3F` |

Überschriften *Bricolage Grotesque*, Fließtext *Hanken Grotesk*, **selbst
ausgeliefert** aus `public/fonts` — liegt in diesem Projekt bereits richtig vor
und bleibt so. Keine Schrift über ein CDN nachladen.

Die vorhandene Bewegungssteuerung (`MotionToggle`, `Reveal`, `SceneMotion`)
bleibt, einschließlich der Rücksicht auf `prefers-reduced-motion`. Animation
darf den Inhalt nicht verzögern: Was zum Verständnis nötig ist, steht auch ohne
Bewegung sofort da.

## Technik und Recht

* Kein Tracking, keine Analysewerkzeuge, keine Cookies, keine externen
  Einbettungen. Die Seite kommt ohne Einwilligungsbanner aus.
* Kontaktaufnahme über `mailto:`, kein Formular, das Daten speichert.
* Barrierefreiheit WCAG 2.1 AA: Kontrast ≥ 4,5:1 für Text, Bedienelemente
  ≥ 3:1, Schaltflächen mindestens 44 × 44 px, volle Tastaturbedienung,
  sichtbarer Fokus.
* **Die Rechtstexte müssen mit der App übereinstimmen.** Maßgeblich ist
  `apps/mobile/lib/features/legal/presentation/legal_texts.dart`, Fassung
  `v2 · 2026-09`. Zwei unterschiedliche AGB-Fassungen für dasselbe Angebot sind
  ein Fehler, kein Versehen.
* Ziel für den ersten Aufruf: unter 400 KB komprimiert. Die Landingpage darf
  etwas schwerer sein als die Automatenseite, weil niemand mit ihr vor einem
  Gerät steht — aber nicht beliebig.

## Abnahme

* Versteht ein Vereinsvorstand in zehn Sekunden, was er davon hat?
* Steht der Standortabschnitt vor dem Kundenabschnitt?
* Wird nirgends ein Abo, ein Preis oder ein Store genannt?
* Wird nirgends behauptet, die App sei ohne Anmeldung nutzbar?
* Kommt das Wort „Spende" in keiner Form vor?
* Sagt die Seite die Wahrheit über den Betriebsstand, und hängt das an genau
  einem Schalter?
* Enthält das ausgelieferte HTML und CSS keine externe Adresse?
* Stimmen die Rechtstexte mit der Fassung `v2 · 2026-09` überein?
