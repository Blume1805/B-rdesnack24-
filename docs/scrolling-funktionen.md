# Scroll-Funktionen der Landingpage — vollständige Übergabedatei

Stand: 22.09.2026. Diese Datei ist die verbindliche Vorgabe für **welche**
18 Muster es gibt, wo sie eingesetzt werden und welche Grenzen gelten. Sie
wird Lovable als Projektwissen übergeben, damit die Bausteine nicht bei
jedem Umbau erneut verlorengehen.

**Seit dem 27.09.2026 gilt zusätzlich `motion/MOTION.md`** (Motion & Scroll
System v1.0, Patterns M01–M11, aus Claude Design) mit den Werten in
`motion/motion-tokens.css`. Neue Bewegungen werden nach dieser Spezifikation
gebaut. Die hier umgesetzten Muster bleiben bestehen. Wo sich beide
widersprechen (Zahl der Muster je Seite, Werte der bestehenden
App-Bausteine), steht der Punkt offen in `motion/ABWEICHUNGEN.md`.

**Der Anlass:** Beim Umbau am 20.09.2026 wurde die Seite auf schlichte
Abschnitte reduziert. Die Bewegungsbausteine blieben im Projekt liegen und
werden seither **von keiner Seite mehr aufgerufen** — geprüft am 22.09.2026:
`src/routes/index.tsx` importiert weder `SceneMotion` noch seine vier
Exporte. Vier fertige, funktionierende Szenen liegen also ungenutzt im Code.
Das ist der Grund, warum die Scroll-Funktionen „fehlen": Sie sind da, sie
werden nur nicht benutzt.

## 1. Was bereits im Projekt liegt

| Baustein | Datei | Was er tut |
|---|---|---|
| `prog(el)` | `src/lib/scroll.ts` | Fortschritt 0…1 einer Szene, beginnt beim Hereinkommen, hält am Ende. |
| `phase(p, n, spread)` | `src/lib/scroll.ts` | Verteilt `n` Zustände auf die ersten `spread` des Fortschritts; der Rest hält den letzten Zustand. |
| `subscribe({frame, layout})` | `src/lib/scroll.ts` | **Ein** globaler Scroll-Handler für die ganze Seite, per `requestAnimationFrame` gedrosselt und passiv. Jede neue Szene hängt sich hier ein — niemals ein eigener `scroll`-Listener. |
| `Reveal` | `src/components/bs24/Reveal.tsx` | Einblenden beim Hereinscrollen über einen gemeinsamen `IntersectionObserver`. `delay` staffelt bis zu acht Elemente in Schritten von 60 ms. |
| `Stage` + `Sequence` | `Stage.tsx`, `Sequence.tsx` | Klebende Bühne: Der Automat bleibt stehen, während mehrere Aussagen nacheinander hervortreten. Höhe wird seit dem 22.09.2026 gemessen, nicht geraten. |
| `ShareScene` | `ShareBar.tsx` | Ein Balken, der beim Scrollen wächst — zeigt einen Anteil, der entsteht, statt ihn zu behaupten. |
| `MachineZoom` | `SceneMotion.tsx` | Der Automat wird beim Scrollen herangezoomt (Telefon 1,3-fach, Schreibtisch 2,4-fach). **Ungenutzt.** |
| `ProductFocus` + `ProductCards` | `SceneMotion.tsx` | Klebender Abschnitt, in dem Karten nacheinander in den Vordergrund treten. Nur ab 600 px Breite aktiv. **Ungenutzt.** |
| `PhysicalDigital` | `SceneMotion.tsx` | Aus dem Automaten wächst beim Scrollen die App heraus, mit der Frage „Wohin sollen 5 % gehen?" und den beiden Auswahlfeldern. **Ungenutzt — und genau die Darstellung, die für die Spenden-Mitbestimmung gebraucht wird.** |
| `SceneColorTransition` | `SceneMotion.tsx` | Farbübergang Creme → Nacht über die Scrollstrecke, ohne Text. **Ungenutzt.** |
| `MotionToggle` | `MotionToggle.tsx` | Schalter „Bewegung"; setzt `data-motion` am `html`-Element. Alle Bewegungen hängen daran. |

## 2. Welcher Abschnitt welche Bewegung bekommt

Reihenfolge der Seite nach der Entscheidung vom 22.09.2026:

| Abschnitt | Bewegung | Was sie erklären soll |
|---|---|---|
| 1. Kopf | nur `Reveal` | Der erste Eindruck darf nicht warten. |
| 2. Für Standortgeber | `Stage` + `Sequence` | Dass es drei getrennte Zusagen sind, nicht ein Absatz. |
| 3. Fünf Prozent für die Region | `ShareScene`, davor `SceneColorTransition` | Der Anteil entsteht aus dem Umsatz — er wird nicht behauptet, er wächst. |
| 4. Für Kundinnen und Kunden | `PhysicalDigital` neben der Vorteilskachel; Kachelzeilen gestaffelt mit `Reveal` | Aus dem Gerät wird die App, in der man mitentscheidet. |
| 5. Für Unternehmen (Werbung) | `MachineZoom` | Heranzoomen zeigt die Werbefläche am Gerät; digital und analog werden als zwei Karten daneben gestellt. |
| 6. Wer dahintersteht | nur `Reveal` | Nebenschauplatz. |
| 7. Fußbereich | keine | — |

`ProductFocus`/`ProductCards` bleiben vorerst ungenutzt: Ein Sortiment lässt
sich erst zeigen, wenn ein Automat bestückt ist.

## 3. Feste Grenzen — nicht verhandelbar

* **Ohne Bewegung ist die Seite vollständig.** Kein Satz, keine Zahl und kein
  Knopf existiert nur innerhalb einer Animation. Wer `prefers-reduced-motion`
  gesetzt hat oder den Schalter umlegt, sieht denselben Inhalt.
* **Kein Scroll-Hijacking.** Das Rad bewegt die Seite weiter wie überall sonst.
  Ein klebender Abschnitt hält höchstens zwei Bildschirmhöhen fest.
* **Auf dem Telefon höchstens zwei klebende Abschnitte insgesamt.** Sonst wird
  aus einer Seite ein Tunnel.
* **Klebende Höhen werden gemessen, nicht gerechnet.** Ist der klebende Inhalt
  höher als der Bildschirm, wird gar nicht geklebt (Fehler vom 21.09.2026: eine
  fest gerechnete Höhe von zwei Bildschirmhöhen ließ die Schaltfläche über den
  nächsten Abschnitt laufen).
* **Ein einziger Scroll-Handler.** Neue Szenen hängen sich in `subscribe` aus
  `src/lib/scroll.ts` ein. Kein zweiter `scroll`-Listener, keine zusätzliche
  Animationsbibliothek.
* **Der Bewegungsschalter wirkt sofort**, ohne Neuladen, und bleibt erreichbar.
* Bewegung erklärt oder sie entfällt. Zierde wird gestrichen.

## 4. Staffelplan aller 18 Muster (Entscheidung vom 26.09.2026)

Der Gesellschafter hat entschieden: **alle 18 Muster des Kanons `scrollcraft`
werden eingeplant, gestaffelt.** Der Kanon selbst setzt die Grenze von
höchstens acht aktiven Mustern je Seite; mehr gilt im AI-Look-Audit als
Befund. Deshalb verteilen sich die Muster auf drei Oberflächen, und drei
schalten sich erst frei, wenn ihre Voraussetzung erfüllt ist.

| # | Muster | Wo | Stufe | Voraussetzung |
|---|---|---|---|---|
| 01 | Reveal | Landingpage, App | jetzt | — |
| 02 | Stagger | App (Listen, Vorteile) | jetzt | — |
| 03 | Zähler | App (Punkte, eigener Spendenanteil) | jetzt | nur echte Werte aus der Datenbank |
| 04 | Text-Highlight | Landingpage, Abschnitt „Der Anteil", **genau einmal** | jetzt | — |
| 05 | Mikrointeraktion | Landingpage, App (Tasten, Karten) | jetzt | — |
| 06 | Sticky-Bühne | Landingpage, Standortgeber (`Stage`) | besteht | — |
| 07 | Horizontale Sequenz | App, Treuestufen in ihrer natürlichen Reihenfolge | jetzt | — |
| 08 | Kartenstapel | App, persönliche Coupons (höchstens 4) | jetzt | — |
| 09 | Szenen-Farbwechsel | Landingpage, Creme → Nacht (`SceneColorTransition`) | besteht | — |
| 10 | Zoomfahrt | Landingpage, Werbung (`MachineZoom`) | besteht | — |
| 11 | Parallax-Tiefe | App, Punktekarte der Startseite | jetzt | — |
| 12 | Maskenreveal | Landingpage, Standortgeber und Werbung | **gesperrt** | echtes Foto von Automat oder Standort |
| 13 | Produktwechsel | App, Wochenangebote der Startseite | jetzt | nur Angebote aus der Datenbank; ein Sortiment ohne laufenden Automaten wäre als „geplant" zu kennzeichnen |
| 14 | Produkt 360° | App, Produktdetail | **gesperrt** | Produktsequenzen (24 Aufnahmen je Produkt) |
| 15 | Objekt-Label | App, zusammen mit 13 | jetzt | — |
| 16 | Tageszeit-Erzählung | Landingpage | **gesperrt** | erster Automat in Betrieb |
| 17 | Physisch → digital | Landingpage, Kundschaft (`PhysicalDigital`) | besteht | — |
| 18 | Anteilsdarstellung | Landingpage, „Der Anteil" (`ShareScene`) | besteht | — |

**Landingpage, aktiv:** 01, 04, 05, 06, 09, 10, 17, 18, also genau acht.
Die Vorteilsliste der Kundschaft wird deshalb als ein Block eingeblendet,
nicht mehr Zeile für Zeile (02 wandert in die App).

**Gesperrte Muster sind vorbereitet, nicht versteckt eingebaut.** Für 12
gibt es in `src/data/site.ts` einen Bildplatz (`bilder.automat`,
`bilder.standort`); solange er leer ist, bleibt die gekennzeichnete
KI-Zeichnung stehen und nichts deutet auf ein fehlendes Bild hin. Ein
sichtbarer Platzhalter auf der öffentlichen Seite wäre ein Release-Blocker.
In der App zeigen Produktkacheln bis zu echten Fotos die getönte Kachel „Bild".

In der App gelten die Regeln des Kanons sinngemäß: höchstens acht Muster je
Bildschirm, Rücksicht auf die Systemeinstellung „Bewegung reduzieren", kein
Inhalt nur in einer Animation.

### 4.1 Umsetzung in der App (Stand 27.09.2026, gegen den Code geprüft)

Alle Bausteine liegen in `apps/mobile/lib/core/widgets/motion/motion.dart`.
Jeder springt bei „Bewegung reduzieren" sofort in den Endzustand, keiner
verändert die Scrollposition.

| # | Baustein | Eingesetzt in |
|---|---|---|
| 01 | `Reveal` | Startseite (Kennzahlen, Deals, Aktionen, Neuigkeiten, Punktekarte, Favoriten), Belohnungen, Spenden |
| 02 | `Reveal(index:)`, 60 ms je Stufe, höchstens fünf | Favoriten, Herausforderungen, Top-3-Spendenzwecke |
| 03 | `CountUp`, Endwert immer in der Semantik | Kennzahlen, Punktestand, Dauerrabatt, eigener Spendenbeitrag, Spendentopf |
| 05 | `Pressable`, Verkleinerung auf 98 % | jede antippbare `AppCard`, jede antippbare `OfferCard` |
| 07 | `ScrollLinkedStrip`, zusätzlich von Hand wischbar | Stufenkacheln Bronze → Silber → Gold (`TierTiles`) |
| 08 | `CardStack`, höchstens vier Karten, sonst normale Liste | persönliche Coupons (Sonderangebote, Bonus, Dein Angebot) |
| 11 | `ParallaxLayer`, Amplitude 210 px × 0,14 | Börde-Umriss hinter der Punktekarte, rein dekorativ |
| 13 · 15 | `FocusCarousel` | Wochenangebote; Name und „X von N" unter dem Karussell. Seit 27.09.2026 mit Option `tilt` (M07 aus `motion/MOTION.md`) zusätzlich „Eure Favoriten" |

**Muster je Bildschirm:** Startseite 01, 02, 03, 05, 08, 11, 13, 15, also
genau acht. Belohnungen 01, 02, 03, 05, 07. Spenden 01, 02, 03, 05.

**Nachweise:** `flutter analyze` ohne Befund, `flutter test` 144 von 144
bestanden, Kontrasttest (`test/core/theme/contrast_test.dart`) mit 54
Paaren, darunter die abgeblendete Nachbarkarte im Karussell (80 %).
Bildschirmfotos mit automatischer Kontrastmessung jedes Textes
(`tool/screens/screens_test.dart`): 0 Befunde auf allen sieben Ansichten.
