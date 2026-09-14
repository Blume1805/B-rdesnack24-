# Pattern-Kanon

Achtzehn Muster. Nicht fünfundvierzig. Was fehlt, fehlt mit Begründung.

Referenzimplementierung aller Muster: `scrollcraft-musterbibliothek.html`.
Rechenkerne `prog()` und `phase()`: `tech.md`.

Jedes Muster hat drei Varianten: Desktop, Mobil, reduzierte Bewegung. Ein
Muster ohne Fallback wird nicht eingebaut.

---

## Ebene 1 — Grundlage (immer erlaubt)

**01 Reveal** — Inhalt steigt beim Eintreten leicht auf.
`opacity` + `translateY(14px)`, 0,5 s, `cubic-bezier(.16,1,.3,1)`.
Auslösung `rootMargin: '0px 0px -4% 0px'`. Fallback: sofort sichtbar.

**02 Stagger** — mehrere Elemente kurz nacheinander.
Versatz 60 ms, **max. 5 Elemente**, sonst wirkt es zäh.

**03 Zähler** — Zahl läuft von null hoch. Dauer 900 ms, `1-(1-k)³`.
**Nur für Zahlen mit Eintrag in `truth.md`.** Bewegung verleiht einer Zahl
Autorität, die sie belegen muss. Der Endwert steht immer im HTML.

**04 Text-Highlight** — ein Satz färbt sich beim Lesen ein.
**Genau einmal pro Seite.** Reserviert für Szene 04 (5 %).
Letztes Wort bei 60 % der Strecke. Text vollständig im HTML.

**05 Mikrointeraktion** — Reaktion auf Berührung. Reines CSS.
Entscheidet mehr über den Qualitätseindruck als jede große Szene.
Touch-Ziel mindestens 44 px.

---

## Ebene 2 — Scroll-Erzählung (max. 3 pro Seite)

**06 Sticky-Bühne mit Zuständen** — Motiv bleibt stehen, Erzählung baut
Ebenen auf. Führt frühere Muster 04 und 07 zusammen: Fortschrittsanzeige und
Kapitelmarken sind Teil der Bühne, kein eigenes Muster.
Kernmuster für Szene 06. `phase(p, n, 0.56)`.
Fallback: gestapelte Abschnitte, alle Ebenen sichtbar.

**07 Horizontale Sequenz** — vertikales Scrollen bewegt einen Streifen.
**Max. 1 pro Seite.** Für Reihen mit natürlicher Ordnung: Standorte, Jahre.
Scrollstrecke aus der Streifenbreite berechnen, nicht fest setzen:
`hoehe = innerHeight + weite * 1.45 + innerHeight * 0.3`.
Fallback mobil: umbrechende Liste.

**08 Kartenstapel** — Karten bleiben stehen, die nächste schiebt sich darüber.
**Max. 4 Karten.** Reines CSS. Blockfluss, **niemals Grid**.
Karten 50 svh, Versätze 5 / 7,5 / 10 / 12,5 vh.

**09 Szenen-Farbwechsel** — Grundstimmung wechselt beim Scrollen.
Gliedert lange Seiten. Kontrast muss in **jeder Zwischenstufe** ≥ 4,5:1
bleiben, nicht nur an den Endpunkten.

---

## Ebene 3 — Kamera und Raum (max. 2 pro Seite)

**10 Zoomfahrt** — Motiv wächst, als führe eine Kamera heran.
Desktop bis 2,4×, mobil bis 1,3×. Nur `transform`.

**11 Parallax-Tiefe** — Ebenen unterschiedlich schnell.
Amplitude 420 px Desktop, 210 px mobil, Tiefen 0,06 bis 0,62.
Zu schwach dosiert ist es unsichtbar, zu stark das sicherste Kennzeichen
einer Baukastenseite.

**12 Maskenreveal** — Bild wird aufgedeckt statt eingeblendet.
`clip-path: inset()`, 0,8 s. Verstärkt die Qualität eines guten Bildes und
die Schwäche eines schlechten. Erst mit echtem Automatenfoto einsetzen.

---

## Ebene 4 — Produkt

**13 Produktwechsel** — Produkte wechseln im Fokus statt im Raster.
`phase(p, n, 0.56)`, Überblendung 0,6 s.
Sortiment zusätzlich als Text anbieten.

**14 Produkt 360°** — volle Umdrehung aus einer Bildsequenz.
24 Bilder (15°) als Standard, 36 (10°) für Heldenprodukte.
6×6-Blatt als WebP, `background-position` je Bild.
Fallbackkette: Sequenz → Zylindersimulation aus einem Foto → Einzelbild.
Zylindersimulation: `rotateY(a) scaleX(1/cos a)` hält die Silhouette gleich
breit, dazu feste Zylinderschattierung und mitlaufender Reflex; trägt bis ±22°.
**Max. 2 gleichzeitig sichtbar**, lazy, mobil kleinere Auflösung.

**15 Objekt-Label** *(neu)* — ein Text folgt einem bewegten Objekt.
Für Szene 03: Produkt löst sich, Bezeichnung wandert mit.
Label muss auch ohne Bewegung dem Objekt zugeordnet bleiben (`aria-describedby`).

---

## Ebene 5 — Bördesnack24-spezifisch

**16 Tageszeit-Erzählung** — Himmel und Uhrzeit verändern sich beim Scrollen.
**Gesperrt, solange kein Automat in Betrieb ist** — die Aussage, die sie
transportiert, ist Verfügbarkeit. Siehe `truth.md`.

**17 Physisch → digital** *(neu)* — der Automat gibt eine digitale Ebene frei.
Für Szene 05. Kein schwebendes Telefon neben dem Automaten, sondern eine
Ebene, die aus ihm hervorgeht. Mittel: `clip-path`, gemeinsame Position,
FLIP-artige Übergabe.

**18 Anteilsdarstellung** — 5 % lösen sich aus 100 % und wandern zur Region.
Höhepunkt der Seite, längste Haltezeit.
Die Grafik muss die wirtschaftliche Aussage korrekt abbilden: Bezugsgröße
sichtbar, sobald sie in `truth.md` bestätigt ist.

---

## Gestrichen — mit Begründung

| Muster | Warum nicht |
|---|---|
| Video-Scrubbing | auf iOS unzuverlässig, sprengt das Datenbudget |
| WebGL / 3D-Objekte | Rechenlast und Pflegeaufwand ohne erzählerischen Gewinn |
| Morphing-Engine | setzt Vektorgrafik voraus; mit echten Fotos nicht möglich |
| Branching Story | ein Onepager mit einem Primärziel braucht zwei Abzweigungen, keine Engine |
| Data Story | null dokumentierte Verkäufe — es gibt keine Daten |
| Object Tracking als System | Muster 15 deckt den einen realen Fall ab |
| Perspective / Depth / Focus einzeln | Varianten von 10 und 11, keine eigenen Muster |
| Ladeanimation, Cursor-Verfolger, Einrasten | siehe Verbotsliste in `SKILL.md` |

---

## Auswahl für die aktuelle Seite

Aktiv: **01, 05, 06, 07, 08, 13, 18** und **04 genau einmal**.
Sobald echte Fotos vorliegen zusätzlich **12** und **14**.
Gesperrt bis Inbetriebnahme: **16**.

Mehr als acht aktive Muster auf einer Seite gelten als Befund im AI-Look-Audit.
