# Landingpage — Szenenbuch

Stand 12.09.2026. Dieses Dokument schließt die Lücke, durch die der
Abo-Vergleich und drei Übergänge nie beauftragt wurden.

**Zweck:** Bevor ein Auftrag an Lovable geht, wird er gegen dieses
Dokument geprüft. Eine Szene, deren zwölf Pflichtfelder nicht gefüllt
sind, wird nicht beauftragt, sondern zuerst entschieden.

---

## Warum es dieses Dokument gibt

Der Skill `scrollcraft` schreibt für jede Szene zwölf Pflichtfelder vor
und sagt dazu:

> Ohne vollständigen Satz kein G2. Fehlt ein Feld, ist die Szene nicht
> entschieden, sondern nur geahnt.

Nachgezählt in den vier Landingpage-Aufträgen: **kein einziger** hat
diese Felder verwendet. Die Aufträge waren nach dem gegliedert, was
gerade aufgefallen war — ein Fehler, ein fehlendes Muster, eine falsche
Zahl — und nicht danach, ob jede Szene vollständig entschieden ist.

Für die acht Szenen des Storyboards fiel das nicht auf: Sie sind im
Skill selbst durchentschieden. Die beiden **später** hinzugefügten
Szenen 03b und 05b haben diesen Schritt nie durchlaufen. Sie sind über
Inhaltsdokumente in die Seite gekommen:

* Szene 05b entstand aus `landingpage-inhalte.md`, einem Dokument über
  **Zahlen und Wahrheit**, nicht über Gestaltung. Darin steht die
  Abo-Übersicht als Markdown-Tabelle — weil eine Tabelle die
  naheliegende Form ist, um Werte gegen eine Quelle prüfbar zu machen.
  Der Lovable-Agent hat diese Form eins zu eins als HTML-Tabelle
  übernommen. Das ist nicht sein Fehler: Eine Form, die nur zur Prüfung
  gedacht war, war die einzige Vorgabe, die er hatte.
* Szene 03b entstand aus `AUFTRAG-2026-09-LANDINGPAGE-KUNDENNUTZEN.md`,
  dort immerhin mit Inhalt, Kartenzahl und „kein CTA" — aber ohne Anker,
  ohne Bewegung, ohne Grundfarbe.

Dieselbe Ursache bei den Übergängen: Die Aufträge waren nach
**Mustern** gegliedert (`patterns.md`), nicht nach **Szenen und
Übergängen** (`storyboard.md`). Die Übergangstabelle steht am Ende des
Storyboards und ist in keinem Auftrag je aufgetaucht.

---

## Die beiden nachträglich entstandenen Szenen — jetzt entschieden

### Szene 03b — „Warum die App"

```yaml
scene:
  id:                 warum-app
  audience:           2 Kunde
  purpose:            verstehen
  message:            Die App nimmt dir drei konkrete Ärgernisse ab.
  emotional_goal:     Erleichterung — jemand hat mitgedacht.
  information_goal:   Bestand vorher sichtbar, Belege für alle, Anteil je Kauf.
  visual_anchor:      drei Karten, je ein Satz Nutzen
  visual_metaphor:    keine Bewegung nötig — die Szene beantwortet eine
                      Frage, sie erzählt keine Verwandlung
  motion:             01 Reveal, Stagger 60 ms (Ebene 1, kein neues Muster)
  cta:                keiner — die App ist nicht im Store
  variants:           alle gleich; unter 760 px einspaltig
  budget:             kein zusätzliches Muster, keine Sticky-Szene
```

**Offen:** Die Szene steht auf weißem Grund zwischen zwei hellen Szenen.
Der Rhythmus der Seite ist hell / creme / hell. Sie gehört auf
Cremegrund (`scene--cream`). Kleine Änderung, große Wirkung auf den
Eindruck „alles sieht gleich aus".

### Szene 05b — „Kostenlos gegen Abo"

```yaml
scene:
  id:                 abo
  audience:           4 Abonnent
  purpose:            handeln (später) — heute: verstehen
  message:            Kostenlos reicht. Das Abo spart, wenn du oft kaufst.
  emotional_goal:     Vertrauen — hier will dich niemand überreden.
  information_goal:   Was kostenlos ist, was das Abo dazugibt, was es
                      kostet und ab wann es sich trägt.
  visual_anchor:      zwei Blöcke, nicht eine Kreuztabelle (Begründung unten)
  visual_metaphor:    Zugabe statt Gegenüberstellung — das Abo nimmt
                      nichts weg, es legt etwas oben drauf
  motion:             01 Reveal (Ebene 1). Ausdrücklich KEIN neues Muster —
                      das Budget ist mit zehn Mustern bereits überschritten.
  cta:                ausdrücklich keiner — es lässt sich kein Abo
                      abschließen, ein Knopf wäre eine Zusage ins Leere
  variants:           alle gleich; unter 640 px untereinander
  budget:             kein zusätzliches Muster, keine Sticky-Szene
```

**Warum keine Kreuztabelle:** Die Tabelle hat dreizehn Zeilen. **Acht
davon sagen „ja / ja"** — sie tragen in einem Vergleich keine
Information. Der tatsächliche Unterschied zwischen kostenlos und Abo
sind **fünf** Punkte. Eine Tabelle, die zu zwei Dritteln aus
Gleichstand besteht, sieht nicht nur nach Tabellenkalkulation aus, sie
versteckt die Aussage auch.

Vorschlag für den Aufbau, ohne neues Muster:

1. **„Das bekommst du kostenlos."** Die acht gemeinsamen Punkte,
   **einmal** genannt, als ruhige Liste. Darunter: 0 €.
2. **„Das kommt mit dem Abo dazu."** Die fünf echten Zusatzpunkte,
   abgesetzt. Darunter: 0,99 €/Monat oder 9,99 €/Jahr.
3. Der Break-even-Absatz (17 € / 20 €) bleibt, wo er ist.
4. Der Vorbehalt („noch nicht im Store") bleibt, wo er ist.
5. Cremegrund, damit die Szene nicht als dritte helle Fläche in Folge
   steht.

Rechtlich bleibt das unverändert richtig: Die Reihenfolge nennt zuerst,
was kostenlos ist, und stellt die Zusatzleistung nicht größer dar als
sie ist (§ 5 Abs. 1, Abs. 2 Nr. 1 UWG). Die Mitbestimmung beim
Spendenempfänger steht weiterhin im **kostenlosen** Block.

Barrierefreiheit: Zwei Listen sind zugänglicher als eine Kreuztabelle,
die auf schmalen Geräten ohnehin schon per CSS in Blöcke aufgelöst wird
(`@media (max-width: 640px)` in `styles.css`).

---

## Die fünf Übergänge — Stand und Entscheidung

| Übergang | Beziehung laut Storyboard | Stand | Entscheidung |
|---|---|---|---|
| 02 → 03 | Objekt gibt seinen Inhalt frei | Zoom läuft, übergibt aber nichts | offen |
| 03 → 04 | Kauf erzeugt Wirkung | fehlt | **zu beauftragen** |
| 04 → 05 | Wirkung wird Beteiligung | fehlt | **zu beauftragen** |
| 05 → 06 | Kundensicht wird Systemsicht | leeres Wischband, 62 svh | **zu ersetzen** |
| 06 → 07 | System braucht Ort | fehlt | offen, braucht eine Karte |

Zwei Anmerkungen, die vor dem nächsten Auftrag zu klären sind:

**03 → 04 und 04 → 05 sind heute nicht mehr benachbart.** Zwischen 03
und 04 steht Szene 03b, zwischen 05 und 06 steht Szene 05b. Ein
Übergang, der zwei Szenen verbindet, die nicht aneinandergrenzen, ist
keiner. Entweder die eingeschobenen Szenen wandern, oder die Übergänge
werden auf die neue Nachbarschaft umgeschrieben. Das ist eine
Entscheidung über den Seitenaufbau, keine Umsetzungsfrage.

**06 → 07 braucht eine Standortkarte**, die es nicht gibt. Solange kein
Standort bestätigt ist, wäre eine Karte mit Nadeln eine Aussage über
die Wirklichkeit (§ 5 UWG) — derselbe Grund, aus dem Muster 16 gesperrt
ist. Der Übergang bleibt bis dahin ein sauberer Schnitt.

---

## Prüfliste vor jedem weiteren Landingpage-Auftrag

1. Welche Szenen berührt der Auftrag?
2. Sind für jede davon die zwölf Felder gefüllt? Wenn nein: erst
   entscheiden, dann beauftragen.
3. Berührt der Auftrag einen Übergang? Steht die Beziehung aus der
   Übergangstabelle darin — nicht nur das Mittel?
4. Wie viele Muster sind danach aktiv? Über acht ist ein Befund.
5. Welche Fensterbreiten schalten das Ergebnis ab, und ist das gewollt?
6. Steht im Auftrag: „Kein Plan-Schritt, keine Freigabe abwarten"?
