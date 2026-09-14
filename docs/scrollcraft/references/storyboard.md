# Storyboard

## Szenenvorlage — zwölf Pflichtfelder

Ohne vollständigen Satz kein G2. Fehlt ein Feld, ist die Szene nicht
entschieden, sondern nur geahnt.

```yaml
scene:
  id:                 # kurz, sprechend
  audience:           # 1 Standort | 2 Kunde | 3 Werbung | 4 Abo
  purpose:            # verstehen | fühlen | handeln
  message:            # ein Satz, ohne Marketingfloskel
  emotional_goal:     # was hängenbleiben soll
  information_goal:   # was man danach weiß
  visual_anchor:      # das Objekt, das die Szene trägt
  visual_metaphor:    # warum genau diese Bewegung das erzählt
  motion:             # Pattern-ID aus patterns.md + Parameter
  cta:                # genau einer oder ausdrücklich "keiner"
  variants:           # desktop | tablet | mobil | quer | reduced | no-js | low-bandwidth
  budget:             # KB, gleichzeitige Bewegungen, Scrollstrecke
```

**Prüfsatz:** Streiche gedanklich jede Animation. Ist die Geschichte noch
vollständig verständlich? Wenn nein, ist die Szene falsch gebaut — nicht die
Animation zu schwach.

---

## Signature Story — Vorab-Phase

Leitidee: **Ein Automat kann mehr.**
Aufhänger: der Claim liefert die Dreiteilung.

| # | Szene | Zielgruppe | Kernbotschaft | Anker | Bewegung |
|---|---|---|---|---|---|
| 01 | Ankunft | alle | Genießen. Geben. Gutes tun. | Claim + Bördeumriss | 01 Reveal |
| 02 | Der Automat | 2 | Dort versorgen, wo abends nichts offen hat | Automat | 12 Maskenreveal / 10 Zoom |
| 03 | Genießen | 2 | Snacks, Getränke, Eis, Heißgetränke — geplantes Sortiment | Produkte | 13 Produktwechsel, später 14 360° |
| 04 | Geben | 2 | 5 % jedes Warenverkaufs bleiben im Sülzetal | Anteilsbalken | 18 Anteil + 04 Text-Highlight |
| 05 | Gutes tun | 2 → 4 | Wer mitmacht, entscheidet mit — Abstimmung im Abo | App + Region | 17 physisch → digital |
| 06 | Ein Automat kann mehr | 1 + 3 | Fläche wird Versorgung und Sichtbarkeit | Automat mit Ebenen | 06 Sticky-Bühne |
| 07 | Ihre Fläche | **1** | Versorgung ohne eigenes Personal | Standortkarte | 07 Horizontale Sequenz |
| 08 | Abschluss | 1 + 2 | zwei klare Wege | Automat + CTA | 05 Mikrointeraktion |

**Warum diese Reihenfolge:** Der Claim führt (02–05), damit die Marke steht,
bevor etwas verlangt wird. Erst danach öffnet Szene 06 die Geschäftssicht und
Szene 07 den Standortpfad — die Priorität-1-Gruppe kommt zum Zug, nachdem sie
verstanden hat, wofür Bördesnack24 steht. Ein Standortangebot ganz oben wirkt
wie Kaltakquise.

**Szene 06 zeigt drei Stränge** (Verkauf, Werbung, Abo) und nennt keine Zahl —
siehe `truth.md` Abschnitt 3.

**Szene 04 ist der Höhepunkt.** Sie bekommt die längste Haltezeit und den
einzigen Text-Highlight der Seite.

---

## Was nicht ins Storyboard darf

- Eine Szene ohne Zielgruppe. „Für alle" heißt für niemanden.
- Eine Szene, deren `information_goal` leer ist — dann ist es Dekoration.
- Zwei Szenen mit derselben Botschaft in anderer Verpackung.
- Ein CTA, der nicht aus der Szene folgt.
- Mehr als drei Sticky-Szenen auf der Seite.
- Eine Szene, die es nur gibt, weil ein Pattern hübsch ist.

---

## Übergänge

Ein Übergang stellt die Beziehung zweier Aussagen dar, nicht den Wechsel
zweier Abschnitte.

| Von → Nach | Beziehung | Mittel |
|---|---|---|
| 02 → 03 | Objekt gibt seinen Inhalt frei | Zoom in den Automaten |
| 03 → 04 | Kauf erzeugt Wirkung | Produkt löst Anteilsbalken aus |
| 04 → 05 | Wirkung wird Beteiligung | Balken wandert in die App |
| 05 → 06 | Kundensicht wird Systemsicht | Farbwechsel hell → dunkel |
| 06 → 07 | System braucht Ort | Automat wandert auf die Karte |

Fehlt die Beziehung, ist der Übergang ein Schnitt — dann lieber ein sauberer
Schnitt als eine erfundene Animation.
