# Briefing für Lovable — öffentliche Automatenseite

Dieses Dokument ist zugleich die Projektanweisung für Lovable und die
Abnahmegrundlage für den zurückkommenden Entwurf.

**Stand 17.09.2026.** Das Projekt existiert bereits in Lovable als
**„Börde Snack Connect"** (angelegt am 16.09.2026, TanStack Start, React,
TypeScript, Tailwind). Der Entwurf setzt die Abschnitte 1 bis 6 unten bereits
um. Ergänzt wurde am 17.09.2026 Abschnitt 2a, der Einstieg in die App — er
fehlte, und ohne ihn erfüllt die Seite ihren Hauptzweck nicht. Gehostet wird
später über Hostinger, wie die Landingpage.

## Was gebaut wird

Eine **öffentliche Webseite je Verkaufsautomat**, erreichbar über einen QR-Code
am Gerät. Eine Route je Automat: `/automat/:code`, zum Beispiel
`/automat/sporthalle-suelzetal`. Dazu eine schlichte Startseite, die erklärt,
worum es geht, und alle Automaten auflistet.

**Auf dieser Seite selbst: kein Konto, keine Anmeldung, kein Warenkorb, kein
Bezahlvorgang.** Die Seite *verweist* auf die App, in der man sich anmelden
kann — sie baut diese Anmeldung aber nicht nach.

## Wer davorsteht

Jemand mit dem Telefon in der Hand, direkt vor dem Automaten — in einer
Sporthalle, einem Schwimmbad oder am Bahnhof. Oft bei schlechtem Empfang, oft
in Eile, oft mit einer Hand. Entweder will diese Person wissen, was der Automat
für den Ort tut, oder sie hat gerade ein Problem mit einem Kauf.

**Daraus folgt die erste Anforderung: Geschwindigkeit.** Die Seite muss beim
ersten Aufruf unter schlechtem Netz in wenigen Sekunden stehen. Alles, was das
gefährdet, entfällt — große Bibliotheken, Animationsframeworks, eingebettete
Karten, Videos, Web-Fonts in vielen Schnitten.

## Die Inhalte, in dieser Reihenfolge

1. **Welcher Automat.** Name des Standorts, eine Zeile Orientierung
   („sporthalle sülzetal, eingang süd").
2. **Der Weg in die App.** Der eigentliche Grund, warum diese Seite
   existiert. Wer hier landet, steht vor dem Automaten und ist im Begriff zu
   kaufen. Genau jetzt, und zu keinem späteren Zeitpunkt, ist der Hinweis auf
   den Rabatt etwas wert.

   Ein kompakter Block, hoch auf der Seite, direkt unter dem Standort:
   * „5 % sparen." als Aussage, nicht als Werbespruch.
   * Ein Satz dazu: kostenlos, kein Abo, keine Laufzeit, keine Kündigung.
   * Die Stufen, weil sie belegbar sind: 6 % ab 150 €, 7,5 % ab 500 €,
     10 % ab 1.000 € Gesamtumsatz, lebenslang und ohne Reset.
   * Eine Schaltfläche, die in die App führt, mit dem Automatencode als
     Parameter (`?a=<code>`), damit später erkennbar ist, welcher Automat
     Konten bringt. Der Parameter ist kein Personenbezug, setzt kein Cookie
     und löst keine Einwilligungspflicht aus.

   **Ehrlich bleiben.** Die App verlangt ein Konto; ohne Anmeldung ist dort
   nichts nutzbar (`docs/ARCHITECTURE.md`, Befund A-8). Der Block muss das
   sagen, statt Funktionen ohne Anmeldung zu versprechen. „anmelden dauert
   eine minute" ist erlaubt, „ohne anmeldung nutzbar" ist falsch.

3. **Was dieser Automat bewirkt.** Der Kern der Seite: wie viel dieses Gerät
   bisher zum Spendentopf beigetragen hat, und dass die Kundschaft in der App
   über die Empfänger abstimmt. Mit Bezugsgröße und Stand: „5 % vom Nettoerlös · Stand
   30.09.2026". Ohne Stand und Bezugsgröße ist die Zahl wertlos und rechtlich
   angreifbar.

   **Geändert am 22.09.2026 — bitte nicht nach der alten Fassung bauen.** Hier
   stand bisher, welcher Verein einen Anteil am Umsatz *dieses* Geräts erhält.
   Das ist überholt: Der Empfänger ist nicht mehr standortgebunden. Alle
   Automaten zahlen in denselben Topf, und über den Empfänger stimmt die
   Kundschaft in der App ab (ADR 0007). Die Seite zeigt deshalb den **Beitrag
   dieses Automaten**, nicht einen eigenen Empfänger.
4. **Was drin ist.** Eine einfache Liste der Produkte im Automaten. Wenn später
   Bestandsdaten vorliegen, wird daraus eine Verfügbarkeitsanzeige — dafür
   Platz vorsehen, aber noch nichts erfinden.
5. **Problem mit dem Kauf.** Ein kurzes Formular: Was ist passiert, welches
   Fach, wie erreichen wir dich. Drei Felder, nicht mehr.
6. **Beleg.** Ein Hinweis, wie man einen Beleg bekommt.
7. **Fußbereich.** Impressum, Datenschutz, Kontakt. Pflicht, nicht Beiwerk.

## Gestaltung

**Farben** — als CSS-Variablen anlegen, nicht hart schreiben:

| Zweck | Wert |
|---|---|
| Primär, Hervorhebungen, Schaltflächen | Gold `#FDC102` |
| Text, Überschriften, dunkle Flächen | Ink `#202321` |
| Flächen, Karten | Cream `#FBF8F4` |
| Linien, feine Trenner | Börde-Grau `#DCD8D3` |
| Verfügbar, positiver Zustand | Frisch-Grün `#5C9A3F` |

**Schrift** — Überschriften *Bricolage Grotesque* (700–800, eng gesetzt, `-0.02em`),
Fließtext *Hanken Grotesk*. Nur die tatsächlich benutzten Schnitte laden.

**Sprache** — durchgehend deutsch, „du"-Form, **Groß- und Kleinschreibung nach
den Regeln der deutschen Rechtschreibung**. Die frühere Vorgabe der
durchgehenden Kleinschreibung ist mit der Entscheidung des Gesellschafters vom
21.09.2026 aufgehoben. 🔴 **Offen:** Die Automatenseite trägt sie noch und ist
beim nächsten Durchlauf nachzuziehen, damit sie nicht anders schreibt als die
Landingpage.
Überschriften enden mit einem Punkt. Keine Emoji. Eyebrows (kleine Vorzeilen
über Überschriften) ebenfalls klein und mit Punkt, etwa „dein automat.".

**Ton** — sachlich und warm, nie werblich aufgeregt. Der Impact wird berichtet,
nicht gefeiert: „dieser automat hat in diesem jahr 128,40 € für den sv sülzetal
erwirtschaftet." Kein Ausrufezeichen, keine Superlative.

## Technische Vorgaben

* React, TypeScript, Tailwind. Nur Komponenten, die auch gebraucht werden.
* **Zielgröße: unter 250 KB** für den ersten Aufruf, komprimiert.
* Mobil zuerst. Alle Schaltflächen mindestens 44 × 44 Pixel.
* Barrierefreiheit nach WCAG 2.1 AA: Textkontrast mindestens 4,5:1,
  Bedienelemente 3:1, alles mit Tastatur erreichbar, sichtbarer Fokus.
* **Kein Tracking, keine Analysewerkzeuge, keine externen Schriften-CDNs ohne
  Not, keine Cookies.** Die Seite kommt ohne Einwilligungsbanner aus — das ist
  Absicht und Teil der Anforderung.
* Inhalte je Automat aus einer einfachen Datenstruktur lesen (JSON oder eine
  Tabelle), damit ein neuer Automat ohne Codeänderung ergänzt werden kann.
* **Die Adresse der App steht an genau einer Stelle** in dieser Datenstruktur,
  nicht verstreut im Code. Sie ändert sich, sobald `app.boerdesnack24.de`
  eingerichtet ist (`docs/OPERATIONS.md`, Runbook F). Bis dahin zeigt sie auf
  die heutige GitHub-Pages-Adresse.

## Was ausdrücklich nicht gebaut wird

Anmeldeformular, Benutzerkonto, Abo, Gutscheineinlösung, Punktestand,
Abzeichen, Fortschrittsbalken, Push-Nachrichten, Chat, Empfehlungen,
personalisierte Inhalte, Kartenansicht mit Fremdanbieter, Bezahlfunktion.

Zur Abgrenzung: Der Rabatt wird **genannt** (Abschnitt 2) und verlinkt, aber
nicht auf dieser Seite gewährt, berechnet oder eingelöst. Das passiert in der
App und am Automaten. Eine Zahl, die hier steht, ist eine Angabe über ein
bestehendes Angebot, keine Funktion.

## Abnahme

Der Entwurf gilt als brauchbar, wenn er diese Fragen mit ja beantwortet:

* Steht die Seite bei gedrosselter Verbindung in wenigen Sekunden?
* Erkennt man in fünf Sekunden, welcher Automat das ist und was er bewirkt?
* Trägt die Impact-Angabe Bezugsgröße und Stand?
* Kommt man ohne Konto zu jeder Funktion?
* Sind Impressum und Datenschutz von jeder Seite aus erreichbar?
* Hält die Seite die Kontrastwerte ein?
* Lässt sich ein neuer Automat ohne Codeänderung ergänzen?
* Führt die Seite sichtbar und in einem Schritt in die App?
* Steht die Adresse der App an genau einer Stelle?
* Wird **nirgends** behauptet, die App sei ohne Anmeldung nutzbar?


## Nachtrag 22.09.2026 — zwei Vorgaben, die diesen Auftrag überholen

Dieses Briefing stammt aus der Zeit vor zwei Entscheidungen. Beide gelten auch
hier, obwohl der Text oben stellenweise noch anders klingt.

**1. Groß- und Kleinschreibung nach den Regeln der deutschen Rechtschreibung.**
Die durchgehende Kleinschreibung ist am 21.09.2026 abgeschafft worden. Alle
Beispieltexte oben, die klein geschrieben sind („stand 30.09.2026", „5 %
sparen."), sind entsprechend groß zu schreiben. Das gilt auch für Eyebrows,
Schaltflächen und Navigationspunkte. Die Landingpage ist bereits umgestellt;
beide Seiten dürfen nicht auseinanderlaufen.

**2. Spende und Standortvergütung sind getrennt** (ADR 0007). Auf dieser Seite
heißen die 5 % „Spende". Eine Standortvergütung wird auf der Automatenseite
überhaupt nicht erwähnt — sie ist eine Sache zwischen Bördesnack24 und dem
Flächengeber und geht die Kundschaft nichts an. Der Empfänger der Spende darf
nicht als „Empfänger dieses Automaten" dargestellt werden.

**Weiterhin gilt:** Solange kein Automat in Betrieb ist, gibt es keine
Automatenseite zu veröffentlichen. Der Auftrag wird erst ausgelöst, wenn das
erste Gerät steht (`docs/COMPLIANCE.md`, V-010).

**Korrektur 24.09.2026:** Die Fassung vom 22.09.2026 sprach in Punkt 3 davon,
„wer den Topf im laufenden Quartal erhält". Das war vorschnell: Ein
Auszahlungsrhythmus ist nicht entschieden, und im System stehen drei
widersprüchliche Regeln (`docs/COMPLIANCE.md`, V-012, Befund D-1). Die Seite
nennt deshalb weder einen Rhythmus noch einen „aktuellen Empfänger", bis die
Regel feststeht.
