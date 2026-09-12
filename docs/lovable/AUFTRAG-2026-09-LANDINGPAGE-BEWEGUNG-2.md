# Auftrag an Lovable: die fehlenden Bewegungsmuster (11.09.2026)

**Status: abgesendet am 12.09.2026, alle sechs Punkte umgesetzt.**
Ergebnis und Nachprüfung stehen unten unter „Was daraus wurde“.
Ziel: `Bördesnack24 Landingpage` (`0c068d85-ef58-4450-a511-3e7ac1d0446d`).

## Warum es diesen Auftrag gibt

Philipp am 11.09.: die Scroll-Funktionen aus dem Skill sind nicht
eingebaut. Nachgemessen am Code — teils richtig, teils nicht.

## Ist-Stand: sechs von achtzehn Mustern stehen

| Muster | Gebaut? | Wo |
|---|---|---|
| 01 Reveal | **ja** | `Reveal.tsx`, `IntersectionObserver`, `rootMargin -4%` |
| 02 Stagger | **ja** | `Reveal`-Prop `delay`, 60 ms Versatz, bei 4 gedeckelt |
| 03 Zähler | nein | — |
| 04 Text-Highlight | **ja** | `.hl` in `ShareBar.tsx`, Szene 04, genau einmal |
| 05 Mikrointeraktion | **rudimentär** | nur `.btn:active { translateY(1px) }` |
| 06 Sticky-Bühne | **ja** | `Stage.tsx`, Szene 06, `phase(p, n, 0.56)` |
| 07 Horizontale Sequenz | **ja** | `Sequence.tsx`, Szene 07 — **nur ab 1101 px** |
| 08 Kartenstapel | nein | im Storyboard keiner Szene zugewiesen |
| 09 Szenen-Farbwechsel | nein | Szenen haben feste Gründe, kein Übergang |
| 10 Zoomfahrt | nein | für Szene 02 vorgesehen |
| 11 Parallax-Tiefe | nein | — |
| 12 Maskenreveal | **gesperrt** | „Erst mit echtem Automatenfoto einsetzen." Es gibt nur die SVG-Zeichnung |
| 13 Produktwechsel | nein | für Szene 03 vorgesehen |
| 14 Produkt 360° | **gesperrt** | braucht 24 Produktaufnahmen, es gibt keine |
| 15 Objekt-Label | nein | für Szene 03 vorgesehen |
| 16 Tageszeit-Erzählung | **gesperrt** | siehe unten |
| 17 Physisch → digital | nein | für Szene 05 vorgesehen |
| 18 Anteilsdarstellung | **ja** | `.share__fill` in `ShareBar.tsx`, Szene 04 |

## Drei Punkte, die vor dem Auftrag zu klären waren

**Das Text-Highlight ist gebaut.** Es steht in Szene 04 auf „5 % vom
Nettopreis" und füllt sich über `--hl` bis 60 % der Scrollstrecke. Genau
so, wie der Kanon es vorschreibt: einmal pro Seite, reserviert für diese
Aussage.

**Die Tageszeit-Erzählung ist durch die Wahrheitsschicht gesperrt.**
Muster 16, wörtlich: „Gesperrt, solange kein Automat in Betrieb ist — die
Aussage, die sie transportiert, ist Verfügbarkeit." Ein Himmel, der von
Tag auf Nacht wechselt, behauptet: hier kannst du rund um die Uhr kaufen.
Es gibt keinen Automaten. Das ist keine Geschmacksfrage, sondern
dieselbe Regel, die auch „62 Produkte im Sortiment" verbietet. Freigabe:
sobald der erste Automat läuft.

**Auf dem Telefon fällt die horizontale Sequenz weg.** `Sequence.tsx`
schaltet sie erst ab 1101 px Breite ein; darunter greift der Fallback
(umbrechende Liste). Das ist so vorgesehen und richtig — erklärt aber,
warum auf dem Telefon weniger passiert als erwartet.

## Ein Nebenbefund

`MotionToggle` setzt `aria-pressed={!on}`. Ist die Bewegung an, meldet der
Knopf dem Screenreader „nicht gedrückt", während er „Bewegung aus"
beschriftet ist. Genau verkehrt herum. Dazu steht er nur im Fußbereich —
wer ihn sucht, hat die Seite schon durchgescrollt.

## Das Budget

Der Kanon: **„Mehr als acht aktive Muster auf einer Seite gelten als
Befund im AI-Look-Audit."** Es können also nicht alle achtzehn hinein.
Sechs stehen. Der Auftrag unten fügt drei hinzu und baut zwei aus, die
zur Grundlage gehören — der Agent zählt am Ende und meldet die Zahl.

---

## Der Auftragstext

Du hast beim letzten Mal zweimal in einem Durchgang geliefert. Diesmal
geht es um Bewegung, und da ist die Reihenfolge wichtiger als die Menge.

**Vorab drei Dinge, die NICHT gebaut werden, damit du sie nicht
vorschlägst:**

- **Muster 16 Tageszeit-Erzählung** ist gesperrt, solange kein Automat
  läuft. Ein wechselnder Himmel behauptet Verfügbarkeit rund um die Uhr.
  Die gibt es nicht.
- **Muster 12 Maskenreveal** braucht ein echtes Automatenfoto. Es gibt
  nur die schematische Zeichnung.
- **Muster 14 Produkt 360°** braucht 24 Aufnahmen je Produkt. Es gibt
  keine Produktfotos.

Und: **Muster 04 Text-Highlight ist bereits gebaut** (Szene 04). Nicht
doppeln, nicht auf eine zweite Stelle ausdehnen — der Kanon erlaubt es
genau einmal pro Seite.

Arbeite **von oben nach unten**. Hör sauber nach einem fertigen Muster
auf, wenn das Guthaben endet.

**1) Muster 05 Mikrointeraktion — ausbauen. Fang hiermit an.**

Heute gibt es genau eine: `.btn:active` senkt sich um einen Pixel. Der
Kanon sagt zu diesem Muster: „Entscheidet mehr über den Qualitätseindruck
als jede große Szene." Eine reicht nicht.

Reines CSS, keine neue Abhängigkeit, Touch-Ziel mindestens 44 px:

- Karten (`.card`): beim Überfahren und Berühren eine spürbare, ruhige
  Reaktion — Rand, Schatten oder ein Hauch Anhebung. Nicht alles drei.
- Links im Fußbereich und in der Navigation: Unterstreichung, die
  wächst, statt hart zu erscheinen.
- `:focus-visible` ist gesetzt, aber überall gleich. Auf dunklem Grund
  braucht der Fokusring einen eigenen Ton.
- Der Hinweiskasten (`.caveat`) bekommt keine Reaktion. Er ist kein
  Bedienelement.

**2) Muster 09 Szenen-Farbwechsel — der Übergang 05 → 06.**

Im Storyboard steht dieser Übergang bereits: „Kundensicht wird
Systemsicht — Farbwechsel hell → dunkel." Heute springt die Seite hart
von Creme auf Nacht.

Der Wechsel soll über die Scrollstrecke laufen, nicht an einer Kante.
**Die Bedingung aus dem Kanon ist die eigentliche Arbeit:** Der Kontrast
muss in **jeder Zwischenstufe** mindestens 4,5:1 betragen, nicht nur am
Anfang und am Ende. Eine Überblendung, die in der Mitte grau wird, ist
unbrauchbar. Rechne die Zwischenstufen nach und nenne den schlechtesten
Wert in der Rückmeldung.

**3) Muster 10 Zoomfahrt — Szene 02.**

Das Storyboard sieht für Szene 02 „12 Maskenreveal / 10 Zoom" vor. Die
Maske fällt aus (kein Foto), also die Zoomfahrt: Die Automatenzeichnung
wächst beim Scrollen, als führe eine Kamera heran. Desktop bis 2,4×,
mobil bis 1,3×, **nur `transform`**.

Der Übergang 02 → 03 lautet im Storyboard „Objekt gibt seinen Inhalt
frei — Zoom in den Automaten". Die Fahrt soll also auf die Glasfront
zulaufen und dort enden, wo Szene 03 das Sortiment aufnimmt.

**4) Muster 13 Produktwechsel — Szene 03.**

Heute stehen vier Karten im Raster. Vorgesehen ist, dass die
Warengruppen im Fokus wechseln statt nebeneinander zu liegen:
`phase(p, n, 0.56)`, Überblendung 0,6 s.

**Das Sortiment muss zusätzlich als Text lesbar bleiben** — das schreibt
der Kanon vor, und ohne Bewegung ist es sonst weg. Die vier Zahlen
(Getränke 26, Eis 20, Süßwaren 13, Snacks 7) stehen vollständig im HTML,
nicht nur im aktiven Zustand.

**5) Muster 17 Physisch → digital — Szene 05.**

Der Automat gibt eine digitale Ebene frei. Der Kanon ist hier
ungewöhnlich deutlich darin, was **nicht** gemeint ist: „Kein
schwebendes Telefon neben dem Automaten, sondern eine Ebene, die aus ihm
hervorgeht." Mittel: `clip-path`, gemeinsame Position, FLIP-artige
Übergabe.

Inhaltlich passt das zur Szene: Wer mitmacht, entscheidet mit — die
Abstimmung findet in der App statt, und die App kommt aus dem Automaten,
nicht von daneben.

**6) Zum Schluss: der Knopf im Fußbereich.**

`MotionToggle` setzt `aria-pressed={!on}`. Das ist verkehrt herum: Ist
die Bewegung an, meldet der Knopf „nicht gedrückt" und ist zugleich mit
„Bewegung aus" beschriftet. Bitte richtigstellen.

---

**Für jedes Muster gilt:**

- Drei Varianten: Desktop, Mobil, reduzierte Bewegung. **Ein Muster ohne
  Fallback wird nicht eingebaut.**
- Der Grundzustand ist der Endzustand. Ohne Skript und bei „Bewegung aus"
  muss die Seite vollständig lesbar sein — kein Inhalt, der nur in
  Bewegung erscheint.
- Kein GSAP, keine neue Abhängigkeit. `prog()` und `phase()` aus
  `src/lib/scroll.ts`, der eine globale Scroll-Handler bleibt der eine.
- Max. 2 große Bewegungen gleichzeitig im Viewport, max. 3 Sticky-Szenen.

**Melde bitte zurück:**

1. Welche Muster jetzt aktiv sind, mit Nummer — und wie viele es
   zusammen sind. Über acht gilt als Befund.
2. Beim Farbwechsel: der schlechteste Kontrastwert über die gesamte
   Überblendung, nicht nur an den Endpunkten.
3. Wo du ein Muster weggelassen hast, weil der Fallback nicht trug.


---

## Was daraus wurde (12.09.2026)

Abgesendet am 12.09.2026. Der Agent hat **alle sechs Punkte** gebaut,
Commit `a4811f5c` im Lovable-Projekt.

### Zwei Dinge, die beim Absenden Geld gekostet haben

Der erste Durchgang hat **1,8 Credits** verbraucht, ohne eine Zeile Code
zu ändern: Der Agent hat die Dateien gelesen und dann — trotz der
ausdrücklichen Vorgabe „keine Rückfragen“ — einen Plan zur Freigabe
vorgelegt und angehalten. In seinem eigenen Denkprotokoll steht, dass er
den Widerspruch gesehen hat und sich fest an seine Plan-Pflicht gehalten
hat.

**Daraus die Regel für künftige Aufträge:** Der Satz „keine Rückfragen“
reicht nicht. Dazuschreiben: *„Kein Plan-Schritt, keine Freigabe
abwarten — direkt umsetzen.“* Sonst kostet der Plan allein rund zwei
Credits.

### Gebaut

| Punkt | Umsetzung | Prüfung am Quelltext |
|---|---|---|
| 05 Mikrointeraktion | `.card:hover/:active` Randwechsel 0,25 s; Fußzeilen-Links mit wachsender Unterstreichung (44 px Ziel); eigener Fokuston Gold auf dunklem Grund | in `styles.css` vorhanden, `.caveat` blieb unberührt — wie verlangt |
| 09 Szenen-Farbwechsel | **anders gelöst als beauftragt**: kein Farbverlauf, sondern ein 62 svh hohes Band ohne Text, das beim Scrollen per `clip-path` von Creme auf Nacht zuläuft | s. Befund 1 |
| 10 Zoomfahrt | `MachineZoom`, Desktop 2,4×, mobil 1,3×, nur `transform`, `transform-origin: 38% 41%` (Glasfront) | korrekt; s. Befund 3 |
| 13 Produktwechsel | `ProductFocus` + `ProductCards`, `phase(p, 4, 0.56)`, 0,6 s Überblendung, Sticky-Bühne nur ab 761 px und nur bei Bewegung an | alle vier Warengruppen stehen vollständig im HTML — Auflage erfüllt |
| 17 Physisch → digital | `PhysicalDigital` in Szene 05, App-Ebene wächst per `clip-path` von unten aus dem Automaten | s. Befund 4 |
| `aria-pressed` | von `{!on}` auf `{on}` geändert | **meine Vorgabe war falsch** — s. Befund 2 |

Zusätzlich hat der Agent `window.dispatchEvent(new Event("resize"))`
beim Umschalten der Bewegung ergänzt, damit die Layout-Rechnung sofort
neu läuft. Das ist eine sinnvolle Zutat, die nicht beauftragt war.

### Vier Befunde aus der Nachprüfung

**Befund 1 — der Farbwechsel ist ein Wischband, kein Farbwechsel.**
Der Kanon zu Muster 09: „Grundstimmung wechselt beim Scrollen. Gliedert
lange Seiten. Kontrast muss in jeder Zwischenstufe ≥ 4,5:1 bleiben.“ Der
Agent hat die Kontrastauflage dadurch erfüllt, dass er jede Mischfarbe
vermeidet: Das Band enthält keinen Text, und jeder Punkt darin ist
entweder Creme oder Nacht. Formal sauber — die gemeldeten „12,02:1“ sind
aber kein Messwert der Überblendung, sondern der Kontrast der beiden
Endzustände. Der Preis: **62 svh leere Seite** zwischen Abo-Szene und
Sticky-Bühne, auch auf dem Telefon, und bei „Bewegung aus“ ein einfarbig
schwarzes Band gleicher Höhe. Zu entscheiden: so lassen, kürzen (etwa
34 svh) oder den Übergang am Szenenrand statt in einem eigenen Band
führen.

**Befund 2 — Punkt 6 des Auftrags war meine Fehldiagnose.**
Der Knopf trägt einen wechselnden Text: „Bewegung aus“, wenn Bewegung
läuft. Mit `aria-pressed={!on}` meldete er „Bewegung aus — nicht
gedrückt“, also: der Aus-Zustand ist nicht aktiv. Das war richtig. Jetzt
meldet er „Bewegung aus — gedrückt“, während die Bewegung läuft. Das
ist schlechter als vorher.

Der eigentliche Fehler ist die Kombination: Ein Umschaltknopf hat
entweder einen **festen** Namen plus `aria-pressed` — oder einen
wechselnden Namen **ohne** `aria-pressed`. Beides zusammen widerspricht
sich immer. Richtige Fassung: Beschriftung fest auf „Bewegung“,
`aria-pressed={on}`. Nachzuholen, 0,2–0,3 Credits.

**Befund 3 — der Zoom läuft über rund 220 px Scrollweg.**
`prog()` rechnet `Höhe − 0,38 × Fensterhöhe`. Die Automatenzeichnung ist
rund 645 px hoch, das Fenster 900 px — bleiben 303 px Weg, abzüglich der
26 % Haltezeit rund 224 px. Der Zoom ist also eher ein zügiges Heranfahren
als eine Kamerafahrt, und danach steht der Automat dauerhaft auf 2,4×
beschnitten. Nicht falsch, aber nicht das, was das Storyboard mit „Zoom
in den Automaten“ meint. Sauber wäre eine eigene, höhere Szene für die
Fahrt. Ohne Browser nicht abschließend zu beurteilen — die Vorschau ist
aus dieser Umgebung nicht erreichbar (Netzrichtlinie).

**Befund 4 — die Automatenzeichnung steht jetzt zweimal auf der Seite,
die KI-Kennzeichnung nur einmal.** `PhysicalDigital` in Szene 05
verwendet dieselbe SVG-Zeichnung noch einmal, ohne den Hinweis „KI —
Schematische Zeichnung, mit KI erzeugt“. Der Projektwissens-Eintrag
verlangt den Hinweis „sichtbar daneben“. Da es dieselbe Zeichnung ist
und der Hinweis auf derselben Seite steht, ist das kein
Veröffentlichungshindernis — aber es ist eine Abweichung von der eigenen
Regel und gehört geschlossen.

### Das Budget ist überschritten — der Agent meldet es selbst

Aktiv sind jetzt **zehn** Muster: 01, 04, 05, 06, 07, 09, 10, 13, 17, 18.
Der Kanon: „Mehr als acht aktive Muster auf einer Seite gelten als Befund
im AI-Look-Audit.“ Der Agent hat das ungefragt ausgewiesen, statt es zu
verschweigen.

Die Ebenenbudgets sind dagegen eingehalten:

* Ebene 2 (max. 3): 06, 07, 09 — **genau 3**
* Ebene 3 (max. 2): nur 10 — 1
* Sticky-Szenen (max. 3): Produktwechsel, Sticky-Bühne, Sequenz — **genau 3**

Zwei Muster müssen also weg, um unter acht zu kommen. Der billigste
Schnitt ist Befund 1: Fällt das Wischband (09), sind es neun — und die
leere halbe Seite ist gleich mit erledigt. Für den zweiten Schnitt kommt
10 (Zoomfahrt) in Frage, solange sie nur über 220 px läuft.

Das ist eine Gestaltungsentscheidung, keine Pflicht: Der Kanon nennt es
einen **Befund**, keinen Release-Blocker.
