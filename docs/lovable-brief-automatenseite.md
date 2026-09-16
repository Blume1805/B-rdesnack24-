# Briefing für Lovable — öffentliche Automatenseite

Dieses Dokument ist zugleich die Projektanweisung für Lovable und die
Abnahmegrundlage für den zurückkommenden Entwurf.

## Was gebaut wird

Eine **öffentliche Webseite je Verkaufsautomat**, erreichbar über einen QR-Code
am Gerät. Eine Route je Automat: `/automat/:code`, zum Beispiel
`/automat/sporthalle-suelzetal`. Dazu eine schlichte Startseite, die erklärt,
worum es geht, und alle Automaten auflistet.

**Kein Konto. Keine Anmeldung. Kein Warenkorb. Kein Bezahlvorgang.**

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
2. **Was dieser Automat bewirkt.** Der Kern der Seite: Welcher Verein oder
   welche Einrichtung erhält einen Anteil des Umsatzes dieses Geräts, und
   wie viel ist im laufenden Jahr zusammengekommen. Mit Bezugsgröße und Stand:
   „5 % vom Nettoerlös · stand 30.09.2026". Ohne Stand und Bezugsgröße ist die
   Zahl wertlos und rechtlich angreifbar.
3. **Was drin ist.** Eine einfache Liste der Produkte im Automaten. Wenn später
   Bestandsdaten vorliegen, wird daraus eine Verfügbarkeitsanzeige — dafür
   Platz vorsehen, aber noch nichts erfinden.
4. **Problem mit dem Kauf.** Ein kurzes Formular: Was ist passiert, welches
   Fach, wie erreichen wir dich. Drei Felder, nicht mehr.
5. **Beleg.** Ein Hinweis, wie man einen Beleg bekommt.
6. **Fußbereich.** Impressum, Datenschutz, Kontakt. Pflicht, nicht Beiwerk.

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

**Sprache** — durchgehend deutsch, konsequente **Kleinschreibung**, „du"-Form.
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

## Was ausdrücklich nicht gebaut wird

Anmeldung, Benutzerkonto, Abo, Rabatte, Gutscheine, Punkte, Abzeichen,
Fortschrittsbalken, Push-Nachrichten, Chat, Empfehlungen, personalisierte
Inhalte, Kartenansicht mit Fremdanbieter, Bezahlfunktion.

## Abnahme

Der Entwurf gilt als brauchbar, wenn er diese Fragen mit ja beantwortet:

* Steht die Seite bei gedrosselter Verbindung in wenigen Sekunden?
* Erkennt man in fünf Sekunden, welcher Automat das ist und was er bewirkt?
* Trägt die Impact-Angabe Bezugsgröße und Stand?
* Kommt man ohne Konto zu jeder Funktion?
* Sind Impressum und Datenschutz von jeder Seite aus erreichbar?
* Hält die Seite die Kontrastwerte ein?
* Lässt sich ein neuer Automat ohne Codeänderung ergänzen?
