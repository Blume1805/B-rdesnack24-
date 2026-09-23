# Auftragstext für Lovable — 22.09.2026

**Erledigt.** Der Auftrag wurde am 23.09.2026 abgesendet, sobald wieder
Guthaben vorhanden war, und in Commit `505fd40` umgesetzt (4,3 Credits). Die
Abnahme steht in `docs/abnahme-landingpage-2026-09-20.md`, Durchlauf 4. Der
Text bleibt als Nachweis dessen stehen, was beauftragt wurde.

Die Anleitung unten wird nicht mehr gebraucht; sie bleibt als Muster für den
nächsten Fall, in dem das Guthaben nicht reicht.

Das dauerhafte Projektwissen (Sprache, Wortwahl beim Geld, alle
Scroll-Bausteine und ihre Grenzen) ist bereits im Lovable-Projekt hinterlegt —
das kostet kein Guthaben und gilt ab sofort für jeden Auftrag.

---

## So fügt Philipp den Auftrag selbst ein

**Warum.** Der Auftrag beschreibt, was sich auf der Internetseite ändern soll.
Ohne ihn bleibt die Seite auf dem alten Stand — mit der überholten Aussage, dass
Standortgeber einen Anteil für ihren Verein bekommen.

**Was dabei passiert.** Lovable ändert die Seite in der Vorschau. Die Seite ist
noch nicht öffentlich; es sieht also niemand von außen etwas. Guthaben wird
verbraucht, wenn der Auftrag läuft.

**Schritt für Schritt.**

1. Öffnen Sie `https://lovable.dev/settings/billing` und legen Sie Guthaben nach.
2. Öffnen Sie das Projekt „Bördesnack24 Landingpage".
3. Kopieren Sie den gesamten Text unten zwischen den beiden Linien — von
   „Inhaltlicher Umbau." bis zum letzten Satz.
4. Fügen Sie ihn unten im Chatfeld des Projekts ein und schicken Sie ihn ab.
5. Warten Sie, bis der Agent fertig ist (einige Minuten).

**So sieht Erfolg aus.** Der Agent antwortet mit einer Liste, was er geändert
hat, und die Vorschau zeigt die neuen Abschnitte „Fünf Prozent bleiben in der
Region" und „Für Unternehmen: Werbung".

**Wenn etwas schiefgeht.** Nichts ist verloren: Die Seite ist nicht
veröffentlicht, und jede Änderung lässt sich in Lovable zurücknehmen. Sagen Sie
mir Bescheid, dann sehe ich mir das Ergebnis im Quelltext an. Es eilt nicht.

---

Inhaltlicher Umbau. Der Gesellschafter hat das Geschäftsmodell präzisiert; dadurch ändert sich die Kernaussage der Seite, und es kommen zwei Abschnitte hinzu. Ich habe dem Projekt außerdem dauerhaftes Projektwissen hinterlegt (Sprache, Wortwahl beim Geld, alle Scroll-Bausteine und ihre Grenzen) — bitte vorher lesen und einhalten.

Vorab die wichtigste Änderung: **Standortgeber bekommen nichts aus den 5 %.** Sie erhalten eine normale Vergütung — Festmiete oder prozentuale Umsatzbeteiligung. Die 5 % des Nettoerlöses sind davon völlig getrennt und gehen als Spende an gemeinnützige Vereine und Organisationen der Region; wer sie bekommt, entscheidet die Kundschaft in der App. „Spende" gilt nur für die 5 %, niemals für die Standortvergütung.

=== 1. Abschnitt „Für Standortgeber" inhaltlich korrigieren (Stage.tsx)

Die jetzige Überschrift „Andere Betreiber zahlen Ihnen Miete. Wir erwirtschaften für Ihren Verein." ist inhaltlich überholt und muss weg.

- Neue Überschrift: „Sie stellen die Fläche. Wir tragen den Rest."
- Der Einleitungsabsatz darunter wird ersetzt durch: „Wir vereinbaren mit Ihnen eine Vergütung, die zum Ort passt — eine feste Miete oder einen Anteil am Umsatz. Was besser passt, besprechen wir im Gespräch."
- Die drei Zusagen in PROMISES:
  1. „Was Sie bekommen." → „Eine Vergütung, die zum Ort passt — feste Miete oder ein Anteil am Umsatz."
  2. „Was es Sie kostet." → unverändert („Nichts. Kein Kaufpreis, keine Wartung und keine Befüllung.")
  3. „Was wir brauchen." → unverändert
- Darunter, vor der Schaltfläche, ein Satz als Brücke zum nächsten Abschnitt: „Unabhängig von Ihrer Vergütung gehen 5 % des Nettoerlöses jedes Automaten an einen gemeinnützigen Empfänger in der Region."
- Keine Zahl zur Höhe der Miete oder der Beteiligung. Die wird je Standort verhandelt.

=== 2. Neuer Abschnitt „Fünf Prozent bleiben in der Region" (die Hook)

Kommt zwischen den Standortgeber-Abschnitt und den Kundenabschnitt und ersetzt den bisherigen Nachweis-Abschnitt an dieser Stelle inhaltlich: ShareScene gehört jetzt hierher.

- Eyebrow: „Der Anteil"
- Überschrift: „Fünf Prozent bleiben in der Region."
- Text: „5 % des Nettoerlöses jedes Automaten spenden wir an gemeinnützige Vereine und Organisationen aus der Umgebung. Nettoerlös heißt: der Umsatz ohne Umsatzsteuer. Wer das Geld bekommt, entscheiden nicht wir — in der App schlägt die Kundschaft Empfänger vor und stimmt darüber ab. Jede Auszahlung weisen wir öffentlich nach."
- Vorbehalt, nur solange site.betriebsstatus === "vorbereitung", als caveat-Kasten: „Noch ist kein Automat in Betrieb. Es gibt deshalb bisher nichts auszuzahlen; die erste Abstimmung startet mit dem ersten Automaten. Wie oft ausgezahlt wird, legen wir vorher fest und schreiben es hier hin."
- Bewegung: ShareScene (der Balken wächst beim Scrollen), davor SceneColorTransition aus SceneMotion.tsx als Farbübergang.

Die vier Angaben Höhe, Bezugsgröße, Empfänger und Zeitraum müssen alle im Text stehen bleiben. Bitte nichts davon kürzen — eine Werbeaussage über einen Spendenanteil muss vollständig und nachprüfbar sein.

=== 3. Kundenkachel: achter Stichpunkt und die fehlende Bewegung

- Neuer Stichpunkt an zweiter Stelle, direkt nach dem Dauerrabatt: „Mitentscheiden, wohin die 5 % gehen: Empfänger vorschlagen und abstimmen". Passendes Symbol davor.
- Die gestaffelte Einblendung der Kachelzeilen kommt beim Scrollen bisher nicht sichtbar an. Bitte prüfen, ob sie tatsächlich auslöst, und so einstellen, dass die Zeilen beim Hereinscrollen nacheinander erscheinen. Ohne Bewegung ist die vollständige Kachel sofort da.
- Daneben kommt die Szene PhysicalDigital aus SceneMotion.tsx zum Einsatz — sie liegt fertig im Projekt und wird von keiner Seite aufgerufen. Sie zeigt beim Scrollen, wie aus dem Automaten die App mit der Frage „Wohin sollen 5 % gehen?" herauswächst. Genau das ist der Punkt dieses Abschnitts.

=== 4. Neuer Abschnitt „Für Unternehmen: Werbung"

Kommt nach dem Kundenabschnitt, vor „Wer dahintersteht".

- Eyebrow: „Für Unternehmen"
- Überschrift: „Werbung, die im Ort ankommt."
- Zwei Karten:
  - „Digital in der App." → „Anzeigenfläche in der Bördesnack24-App — sichtbar für die Menschen, die an unseren Automaten kaufen."
  - „Analog am Automaten." → „Fläche direkt am Gerät, dort, wo gekauft wird."
- Vorbehalt, zwingend und nicht abschwächen: „Buchbar ist das noch nicht. Solange kein Automat steht, gibt es keine Reichweite zu verkaufen. Wir nehmen Interessenten auf und melden uns, sobald die ersten Geräte in Betrieb sind."
- Schaltfläche „Werbung anfragen" als mailto-Link an kontakt@boerdesnack24.de mit dem Betreff „Werbung bei Bördesnack24". Kein Formular.
- Keine Preise, keine Pakete, keine Reichweitenzahlen — es gibt weder eine Preisliste noch Nutzungszahlen.
- Bewegung: MachineZoom aus SceneMotion.tsx (der Automat wird beim Scrollen herangezoomt), die beiden Karten daneben.

=== 5. Nachbesserung von gestern (noch offen)

In SiteFooter.tsx steht die Firmenzeile als {"Bördesnack24 GbR\nOsterweddingen"} mit className="addr". Der Umbruch greift dort nicht: Die Regel `.prose .addr { white-space: pre-line }` gilt nur innerhalb von `.prose`, und die Fußzeile liegt außerhalb davon. Im Browser steht deshalb beides in einer Zeile. Bitte als zwei getrennte Zeilen im Markup lösen, nicht über white-space. Die Regel `.prose .addr` unverändert lassen — das Impressum hängt daran.

=== Reihenfolge der Seite danach

Kopf → Für Standortgeber → Fünf Prozent bleiben in der Region → Für Kundinnen und Kunden → Für Unternehmen: Werbung → Wer dahintersteht → Fußbereich.

Bitte am Schluss je Punkt eine Zeile, was tatsächlich geändert wurde, und ausdrücklich nennen, was nicht umgesetzt wurde.
