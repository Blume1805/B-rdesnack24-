# Auftrag an Lovable: die Restarbeiten an der Landingpage (12.09.2026)

**Status: Teil A und Teil B abgesendet und umgesetzt am 13.09.2026.**
Teil C wartet auf Philipps Entscheidung (siehe dort). Ergebnis unten.
Ziel: `Bördesnack24 Landingpage` (`0c068d85-ef58-4450-a511-3e7ac1d0446d`).
Grundlage: `docs/lovable/LANDINGPAGE-SZENENBUCH.md`.

Dieser Auftrag ersetzt die verstreuten Einzelpunkte aus
`LANDINGPAGE-OFFENE-PUNKTE.md`. Er ist gegen die Prüfliste des
Szenenbuchs geprüft: Für jede berührte Szene sind die zwölf Pflichtfelder
gefüllt, und jeder Übergang nennt die Beziehung, nicht nur das Mittel.

**Umfang:** Teil A rund 1 Credit, Teil B rund 1,5, Teil C rund 2 bis 3.
In dieser Reihenfolge, einzeln beauftragbar.

---

## Der Auftragstext — Teil A: vier kleine Dinge

**Kein Plan-Schritt, keine Freigabe abwarten — direkt umsetzen.** Vier
Änderungen, alle klein, alle unabhängig voneinander.

**1) Der Bewegungsschalter ist seit gestern falsch ausgezeichnet — meine
Schuld, nicht deine.**

Ich hatte dich gebeten, `aria-pressed={!on}` auf `{on}` zu ändern. Das
war falsch. Ein Umschaltknopf hat entweder einen **festen** Namen plus
`aria-pressed` — oder einen wechselnden Namen **ohne** `aria-pressed`.
Beides zusammen widerspricht sich immer: Heute meldet der Knopf
„Bewegung aus — gedrückt", während die Bewegung läuft.

Bitte so: Beschriftung **fest auf „Bewegung"**, `aria-pressed={on}`.
Der Zustand steht dann in der Auszeichnung, nicht im Text. Dazu ein
`aria-label`, das den Zweck nennt („Bewegung auf der Seite").

**2) Szene 03b („Warum die App") bekommt Cremegrund.**

Sie steht heute zwischen zwei hellen Szenen; der Rhythmus der Seite ist
hell / creme / hell. `scene--cream`, sonst nichts.

**3) Die Automatenzeichnung trägt den KI-Hinweis nur einmal.**

Sie steht an drei Stellen: Szene 02 (`MachineZoom`), Szene 05
(`PhysicalDigital`) und Szene 06 (`Stage`). Der Hinweis „KI —
Schematische Zeichnung, mit KI erzeugt" steht nur an der ersten.

Bitte **nicht** dreimal denselben Kasten setzen — das würde die Seite
zukleistern. Stattdessen: An den beiden weiteren Stellen genügt der
Kurzhinweis „KI-Zeichnung" als kleines Label an der Grafik, das auf die
ausführliche Fassung in Szene 02 verweist. Die ausführliche Fassung
bleibt, wo sie ist.

**4) Die Geräteschwellen sind zu hoch.**

`ProductFocus` schaltet bei 761 px, `Sequence` bei 1101 px. Auf einem
Telefon fallen damit die zwei auffälligsten Muster der Seite aus, und
1101 px erwischt auch kleinere Notebooks.

Bitte auf **600 px** und **900 px**. Falls die horizontale Sequenz bei
900 px nicht mehr trägt (zu wenig Breite für vier Karten à 20 rem), sag
es und lass sie bei 1101 — aber prüfe es, statt es anzunehmen.

---

## Teil B: der Abo-Vergleich

Das ist die einzige Stelle der Seite, an der nichts gestaltet ist. Sie
sieht aus wie eine Tabellenkalkulation, weil sie als Markdown-Tabelle in
ein Inhaltsdokument geschrieben wurde und eins zu eins als HTML-Tabelle
übernommen worden ist.

**Der eigentliche Befund:** Die Tabelle hat dreizehn Zeilen, **acht davon
sagen „ja / ja"**. Der tatsächliche Unterschied zwischen kostenlos und
Abo sind fünf Punkte. Eine Vergleichstabelle, die zu zwei Dritteln aus
Gleichstand besteht, versteckt ihre eigene Aussage.

**Bitte umbauen — ohne neues Bewegungsmuster.** Das Musterbudget der
Seite ist mit zehn aktiven Mustern bereits überschritten; diese Szene
bekommt `Reveal` und sonst nichts.

Der Aufbau:

1. **„Das bekommst du kostenlos."** Die acht gemeinsamen Punkte,
   **einmal** genannt, als ruhige Liste. Darunter groß: **0 €**.
2. **„Das kommt mit dem Abo dazu."** Die fünf echten Zusatzpunkte,
   sichtbar abgesetzt. Darunter: **0,99 €/Monat oder 9,99 €/Jahr**.
3. Der Break-even-Absatz (17 € / 20 €) bleibt unverändert stehen.
4. Der Vorbehalt („noch nicht im Store") bleibt unverändert stehen.
5. Die Szene bekommt Cremegrund.

**Die Inhalte sind unverändert zu übernehmen**, in dieser Zuordnung:

*Kostenlos (acht):* Automatenfinder und Navigation · Bestand in Echtzeit
· Nährwerte und Allergene · Kundenkarte und Kaufhistorie · Nachrichten
und Favoriten · Kontakt und Reklamation · Über den Spendenempfänger
mitbestimmen · Belege als PDF.

*Mit Abo zusätzlich (fünf):* 5 % Dauerrabatt · Status: bis +5 %
obendrauf · Deals und Angebote −10 % · Bonuspunkte und Coupons 5–25 % ·
Geburtstagsgutschein.

**Kein Knopf.** Es lässt sich kein Abo abschließen; ein Knopf wäre eine
Zusage ins Leere.

**Die Reihenfolge ist nicht Geschmack.** Zuerst steht, was kostenlos ist,
und die Zusatzleistung wird nicht größer dargestellt, als sie ist — das
ist der Fall des § 5 Abs. 1, Abs. 2 Nr. 1 UWG, an der Stelle, an der
sonst zum Abschluss aufgefordert würde. Die Mitbestimmung beim
Spendenempfänger bleibt im **kostenlosen** Block.

---

## Teil C: die Übergänge

Hier liegt der eigentliche Unterschied zwischen acht Szenen und einer
Erzählung. Das Storyboard beschreibt fünf Übergänge; drei sind nie
gebaut worden, weil sie in keinem Auftrag standen.

**Ein Übergang stellt die Beziehung zweier Aussagen dar, nicht den
Wechsel zweier Abschnitte.** Die Beziehung steht unten jeweils zuerst;
das Mittel ist mein Vorschlag und darf begründet abweichen.

**1) 03 → 04 — „Kauf erzeugt Wirkung."**

Beziehung: Das Produkt, das jemand kauft, ist der Grund, warum etwas in
der Region bleibt. Nicht andersherum.

Mittel: Die letzte Produktkarte aus Szene 03 gibt beim Verlassen den
Anteilsbalken frei — dieselbe Position, dieselbe Breite, der Balken
wächst aus der Karte heraus statt separat einzublenden.

**Vorher zu klären, bitte melde dich dazu:** Zwischen Szene 03 und 04
steht heute Szene 03b („Warum die App"). Ein Übergang zwischen zwei
Szenen, die nicht aneinandergrenzen, ist keiner. Zwei Möglichkeiten —
**entscheide nicht selbst, sondern sag, welche du für richtig hältst**:
entweder 03b wandert hinter Szene 04, oder der Übergang wird auf
03 → 03b umgeschrieben.

**2) 04 → 05 — „Wirkung wird Beteiligung."**

Beziehung: Wer sieht, dass etwas bleibt, will mitreden, wohin es geht.

Mittel: Der Anteilsbalken aus Szene 04 wandert in die App-Ebene von
Szene 05 — er endet dort, wo `PhysicalDigital` die App freigibt.
Dieselbe Einschränkung wie oben: Szene 05b steht heute dazwischen.

**3) 06 → 07 — „System braucht Ort."**

Beziehung: Ein Automat, der mehr kann, braucht trotzdem eine Fläche.

**Diesen Übergang bitte NICHT bauen.** Das Storyboard nennt als Mittel
„Automat wandert auf die Karte" — dafür bräuchte es eine Standortkarte,
und es gibt keinen bestätigten Standort. Eine Karte mit Nadeln wäre eine
Aussage über die Wirklichkeit (§ 5 UWG), derselbe Grund, aus dem die
Tageszeit-Erzählung gesperrt ist. Bis zum ersten bestätigten Standort
bleibt hier ein sauberer Schnitt.

**4) 05 → 06 — das Wischband ersetzen.**

Gebaut ist heute ein 62 svh hohes Band ohne Inhalt, das beim Scrollen
von Creme auf Nacht zuläuft. Die Kontrastauflage ist damit erfüllt — es
gibt keine Mischfarben, weil es keinen Text gibt —, aber der Preis ist
eine halbe leere Bildschirmhöhe, auf dem Telefon auch.

Bitte auf **höchstens 30 svh** kürzen und den Satz aus Szene 06
(„Der Wendepunkt") hineinziehen, damit das Band etwas trägt. Wenn der
Text mitwandert, muss der Kontrast in **jeder** Zwischenstufe ≥ 4,5:1
bleiben — dann ist die Auflage wieder scharf, und du musst den
schlechtesten Wert nennen.

---

**Melde bitte zurück:**

1. Welche Muster nach diesem Auftrag aktiv sind, mit Nummer und Anzahl.
   Über acht gilt als Befund — es sind heute zehn.
2. Beim Wischband: der schlechteste Kontrastwert über die gesamte
   Überblendung, sobald Text darin steht.
3. Bei den Übergängen 03 → 04 und 04 → 05: welche der beiden
   Möglichkeiten du für richtig hältst — **entschieden wird das hier,
   nicht von dir.**
4. Ob die horizontale Sequenz bei 900 px noch trägt.


---

## Was daraus wurde (13.09.2026)

Teil A und Teil B in **einer** Nachricht abgesendet, in **einem**
Durchgang umgesetzt, **kein Plan-Schritt** — der Satz „Kein Plan-Schritt,
keine Freigabe abwarten“ hat gewirkt. Verbrauch: rund **4,4 Credits**.

Alle sechs Punkte am Quelltext nachgeprüft, nicht nur der Rückmeldung
geglaubt:

| Punkt | Stand | Beleg |
|---|---|---|
| Bewegungsschalter | erledigt | `MotionToggle.tsx`: Text fest „Bewegung“, `aria-pressed={on}`, `aria-label` gesetzt |
| Szene 03b Cremegrund | erledigt | `index.tsx`: `scene scene--cream` — **aber siehe Befund unten** |
| KI-Hinweis an allen drei Zeichnungen | erledigt | `.ai-label` in `PhysicalDigital` und als `figcaption` in `Stage`, hell- und dunkelvariante in `styles.css` |
| Schwellen 600 / 900 | erledigt | `ProductFocus`: `innerWidth >= 600`, `Sequence`: `innerWidth >= 900` |
| Sequenz trägt bei 900 px | geprüft | der Agent hat es im Browser gemessen (Karte 320 px, rund 2,6 Karten sichtbar, kein Seitenüberlauf) |
| Abo-Vergleich | erledigt | `Plans.tsx` zwei Blöcke, `.plans` / `.plan-panel` in `styles.css`, ab 700 px einspaltig |

Der Abo-Vergleich ist wirklich gestaltet worden und nicht nur umgebaut:
zwei Karten mit Häkchenlisten, Preis unten bündig (`margin-top: auto`),
der Abo-Block mit goldener Oberkante abgesetzt.

### Ein Befund, und er geht auf meine Vorgabe zurück

**Ich habe zweimal Cremegrund bestellt, wo schon Creme war.**

Szene 03 (Sortiment) ist Creme, und ich habe für 03b Creme verlangt.
Szene 05 (Gutes tun) ist Creme, und ich habe für 05b Creme verlangt.
Ergebnis: zweimal zwei Cremeflächen hintereinander. Der Rhythmus lautet
jetzt

    02 hell · 03 creme · 03b creme · 04 hell · 05 creme · 05b creme

Beide Paare verschmelzen optisch zu einer langen Cremefläche, und die
Überschrift „Was du davon hast.“ sieht aus wie ein Unterabschnitt von
„Das geplante Sortiment“. Die Szenengrenze ist weg.

Richtig wäre: **Creme nur auf 03, 05 und 08** — so steht es im
Projektwissen. 03b und 05b gehören auf Weiß. Das ist der Zustand vor
diesem Auftrag für 03b; für 05b eine Rücknahme von Punkt 5 des Teils B.

Kosten der Korrektur: eine Nachricht, geschätzt 0,3 Credits. **Nicht
ungefragt ausgeführt** — es ist eine Gestaltungsfrage, und ich habe sie
schon einmal falsch beantwortet.

### Zwei Kleinigkeiten, die dabei aufgefallen sind

* `MachineZoom` schaltet die Zoomstärke weiterhin bei **760 px** um
  (1,3× statt 2,4×), während der Produktwechsel jetzt bei 600 px
  schaltet. Zwei verschiedene Gerätegrenzen auf derselben Seite.
  Kosmetisch, nicht dringend.
* Das Wischband steht unverändert bei **62 svh**. Es gehört zu Teil C
  und wartet mit den Übergängen.

Aktiv bleiben **zehn** Bewegungsmuster — der Kanon nennt mehr als acht
einen Befund im AI-Look-Audit. Unverändert offen.
