# Auftrag: Landingpage als Scroll-Erzählung

An den Lovable-Agenten, Projekt A. Stand 05.09.2026.
**Ersetzt** `AUFTRAG-2026-09-LANDINGPAGE-BEWEGUNG.md` und
`NACHTRAG-2026-09-LANDINGPAGE-SECHS-PUNKTE.md` — was dort steht, ist in
diesem Auftrag aufgegangen oder ausdrücklich zurückgenommen.

Einzusetzende Skills: **`scrollcraft`** (führend), `boerdesnack24-design`,
`frontend-taste`, `impeccable`, `humanizer`.

> **Vor dem ersten Handgriff:** `scrollcraft` muss im Workspace liegen. Die
> übertragbare Fassung ist
> `docs/lovable/skills-uebertragen/scrollcraft-SKILL.md` — alle
> Begleitdateien sind dort eingebettet, weil `create_workspace_skill` keine
> Unterordner nimmt. Ohne diese Fassung fehlt dem Skill seine Faktenquelle
> und er prüft nichts.

---

## 0. Warum dieser Auftrag anders aussieht als der Masterprompt

Der Betreiber hat einen ausführlichen Masterprompt geschrieben („ScrollCraft
Experience Architecture", 38 Abschnitte). Er ist die Absicht. Verbindlich ist
aber `scrollcraft` — und der Skill widerspricht dem Masterprompt an **acht**
Stellen. Wo das der Fall ist, gilt der Skill. Die Abweichungen stehen hier
offen, damit niemand sie für Nachlässigkeit hält.

| # | Masterprompt | Verbindlich (scrollcraft) | Grund |
|---|---|---|---|
| 1 | 14 Szenen (01 Hero … 14 Footer) | **8 Szenen**, Storyboard in Anhang C | Höchstens 3 Sticky-Szenen je Seite, höchstens 2 große Bewegungen gleichzeitig. 14 Szenen mit je eigener Dramaturgie sind damit nicht baubar. |
| 2 | Zielgruppenfolge: Privatkunde → Werbepartner → Standortpartner → Abonnent | **Standortpartner ist Hauptstrang**, Privatkunde trägt die Marke | „Ohne Standortzusage kein Automat, ohne Automat keine echten Fotos, ohne Fotos keine glaubwürdige Seite." Nach dem ersten Automaten kehrt sich die Reihenfolge um. |
| 3 | „Der Automat verkauft", „Ich sehe, wie er verkauft" | **Kein Präsens über den Betrieb** | 0 Automaten, 0 Verkäufe, 0 Standorte. Präsens über einen nicht bestehenden Betriebszustand ist ein Release-Blocker und irreführende Werbung nach § 5 UWG. |
| 4 | „Die drei aktuellen Geschäftsbereiche … Diese Definition ist verbindlich" | **Vier belegte Erlösquellen, drei werden erzählt, keine Zahl wird genannt** | „Drei" wäre falsch (es gibt vier), „vier" unverständlich (nur drei werden gezeigt). Sponsoring bleibt bewusst draußen. Zeigen, nicht zählen. |
| 5 | Hero: „echter Bördesnack24-Automat / authentisches Markenasset" | **Es gibt keine echten Fotos** von Automat oder Standort | Siehe Abschnitt 4 dieses Auftrags — das ist die größte offene Frage. |
| 6 | Branching Story / Audience Path, WebGL, Morph, Camera Transition, Object Tracking, Image Sequence | **gestrichen** (Anhang D) | Ein Onepager mit einem Primärziel braucht zwei Abzweigungen, keine Engine. WebGL: Rechenlast ohne erzählerischen Gewinn. Morphing setzt Vektorgrafik voraus — mit Fotos unmöglich. |
| 7 | „Ein Automat kann mehr." als zentrale Idee | **Claim führt, Satz ist der Wendepunkt in Szene 06** | Deckt sich mit der Korrektur des Betreibers. Hier nur zur Klarstellung, dass der Skill dasselbe sagt. |
| 8 | „Gutes tun" als Story-Ebene | erlaubt — **aber nur mit Offenlegung** | Die Abstimmung über den Spendenempfänger ist an das **kostenpflichtige Abo** gekoppelt. Das muss an derselben Stelle stehen, nicht in den AGB. „Die Community entscheidet" ohne diesen Zusatz ist unzulässig. |

---

## 1. Eine Frage muss der Betreiber vorher beantworten

`scrollcraft` beschreibt als Zielumgebung einen **statischen Onepager bei
Hostinger, ohne Build-System, Formular über PHPMailer** und schließt daraus
jede Animationsbibliothek aus.

Projekt A ist ein React-Projekt mit Build-Schritt. Das sind zwei verschiedene
Ziele.

**Bis zur Klärung gilt:** Die *technischen Regeln* des Skills werden
vollständig übernommen — sie lassen sich eins zu eins übersetzen (siehe
Abschnitt 5). Die *Deployment-Annahmen* (Hostinger, PHPMailer, kein Build)
gelten für Projekt A nicht.

Nicht selbst entscheiden. Wenn der Betreiber die Landingpage aus Projekt A
herauslösen will, ist das eine andere Aufgabe als dieser Auftrag.

---

## 2. Was die Seite erzählt

Zwei Ebenen, die nie vermischt werden:

```
MARKENEBENE            Genießen.  Geben.  Gutes tun.
                       beantwortet: wofür steht Bördesnack24?

SYSTEMEBENE            Verkauf → Werbung → Abo → Ökosystem
                       beantwortet: wie funktioniert es?
```

Die Markenebene führt. Erst wenn sie steht, öffnet Szene 06 die Systemsicht.
Ein Standortangebot ganz oben wirkt wie Kaltakquise.

### Das verbindliche Storyboard — acht Szenen

| # | Szene | Zielgruppe | Kernbotschaft | Anker | Bewegung |
|---|---|---|---|---|---|
| 01 | Ankunft | alle | Genießen. Geben. Gutes tun. | Claim + Bördeumriss | Reveal |
| 02 | Der Automat | Kunde | Dort versorgen, wo abends nichts offen hat | Automat | Maskenreveal / Zoom |
| 03 | Genießen | Kunde | Snacks, Getränke, Eis, Heißgetränke — **geplantes** Sortiment | Produkte | Produktwechsel |
| 04 | Geben | Kunde | 5 % jedes Warenverkaufs bleiben im Sülzetal | Anteilsbalken | Anteil + Text-Highlight |
| 05 | Gutes tun | Kunde → Abo | Wer mitmacht, entscheidet mit — **Abstimmung im Abo** | App + Region | physisch → digital |
| 06 | Ein Automat kann mehr | Standort + Werbung | Fläche wird Versorgung und Sichtbarkeit | Automat mit Ebenen | Sticky-Bühne |
| 07 | Ihre Fläche | **Standort** | Versorgung ohne eigenes Personal | Standortkarte | Horizontale Sequenz |
| 08 | Abschluss | Standort + Kunde | zwei klare Wege | Automat + CTA | Mikrointeraktion |

**Szene 04 ist der Höhepunkt.** Längste Haltezeit, einziger Text-Highlight der
Seite. Nicht Szene 06, nicht der Hero.

Die Übergänge stellen jeweils eine Beziehung dar, keinen Abschnittswechsel —
die Tabelle dazu steht in Anhang C. Fehlt die Beziehung, ist ein sauberer
Schnitt besser als eine erfundene Animation.

---

## 3. Was gesagt werden darf — und was nicht

Vollständig in Anhang A. Das Wichtigste:

**Erlaubt**
* „Genießen. Geben. Gutes tun." als Haltungsversprechen
* „Ab 2027 in Osterweddingen" — als Plan gekennzeichnet
* „5 % gehen an eine gemeinnützige Organisation aus dem Sülzetal" — mit Bezugsgröße
* Standorte als **Absicht** („geplant für"), nie als Bestand

**Verboten — jedes einzelne ist ein Release-Blocker**
* „24/7 verfügbar", „62 Produkte im Sortiment", „App herunterladen"
* Reichweiten, Passantenzahlen, Werbepreise ohne vertragliche Quelle
* Kundenstimmen, Bewertungen, Nutzerzahlen — es gibt keine
* Fresh Food als Geschäftsbereich
* der frühere Hunger-Claim — endgültig abgelöst, auch nach Inbetriebnahme
  nicht wieder verwendbar
* eine **Zahl** von Erlösquellen
* Namen realer Partner oder Marken ohne schriftliche Freigabe
* Fotos eines Automaten an einem Standort

Steht eine Aussage nicht in Anhang A, wird sie **nicht geschrieben, sondern
erfragt**. Auch dann nicht, wenn sie schon auf der jetzigen Seite steht.

---

## 4. Die Assets — hier liegt das größte Risiko

Es gibt **keine echten Fotos** von Automat oder Standort. Der Masterprompt
verlangt den Automaten als visuellen Hauptdarsteller über acht Szenen hinweg.
Beides zusammen geht nicht ohne eine Entscheidung des Betreibers.

Drei Wege, in dieser Reihenfolge zu prüfen:

1. **Herstellerfotos** des tatsächlich geplanten Automatenmodells — Nutzungs-
   rechte schriftlich klären. Sauberste Lösung.
2. **Eigene Illustration / technische Zeichnung** des Automaten. Trägt eine
   Marke, altert gut, ist rechtlich unproblematisch und funktioniert als
   Anker über acht Szenen besser als ein Foto.
3. **Generiertes Bild** — nur mit sichtbarer KI-Kennzeichnung nach Art. 50
   EU AI Act. Das ist im Projekt Pflicht und keine Ermessensfrage.

**Nicht zulässig:** Stockfotos fremder Automaten, Bilder mit fremden Marken
im Bild, Testassets, Base64-Platzhalter. Ein verbliebenes Testasset ist ein
Release-Blocker.

Bis zur Entscheidung: Szenen so bauen, dass der Anker **austauschbar** ist —
ein `<picture>` mit einer Quelle, nicht acht fest verdrahtete Bildpfade.

---

## 5. Technik

Diese Regeln gelten unverändert, auch in React:

* **Keine Animationsbibliothek.** Kein GSAP, ScrollTrigger, Lenis, Framer
  Motion, Locomotive. Nicht als Geschmacksfrage — sie kosten Datenbudget im
  ländlichen Mobilfunk und lösen ein Problem, das CSS bereits löst.
* Erlaubt: `position: sticky`, `clip-path`, `mask`, Custom Properties,
  `IntersectionObserver`, `animation-timeline: view()` als Progressive
  Enhancement.
* **Genau ein** globaler Scroll-Handler, rAF-gedrosselt, `{passive:true}`.
  Nicht keiner, nicht drei.
* `overflow-x: clip`, **niemals** `hidden` — letzteres macht den Body zum
  Scrollcontainer und bricht `position: sticky`.
* Kein `display: grid` um Sticky-Karten — der Bezugsrahmen wird die Zelle,
  und es gibt keinen Klebeweg.
* `will-change` nur während der Animation.
* Inhalte vollständig im HTML. Bewegung ändert nur Sichtbarkeit.
* Text und Zahlen in einer eigenen Datenschicht, nie im Animationscode.

**Zeitgesetz** (erprobt, verbindlich): Anlauf 0,62 Bildschirmhöhen vor dem
Andocken · Zustände vollständig nach 56 % der Strecke · Haltezeit 26 % ·
Auslösezone `rootMargin: '0px 0px -4% 0px'` · max. 3 Bildschirmhöhen je Szene.
Die beiden Rechenkerne `prog()` und `phase()` stehen in Anhang E und werden
**nicht** kopiert oder variiert.

**Budgets:** LCP ≤ 2,5 s · CLS ≤ 0,05 · INP ≤ 200 ms · JS ≤ 40 KB
komprimiert · Hero-Bild ≤ 180 KB · DOM ≤ 1500 Knoten. Gemessen auf einem
Mid-Tier-Android im gedrosselten Mobilnetz — Zielgerät ist ein Telefon am
Bahnhof, nicht der Desktop im Vorschaufenster.

**Vor der ersten Änderung:** Ist-Werte messen und ablegen. Ohne Ausgangswert
ist „keine Regression" eine Behauptung.

**Jede Szene in sieben Varianten:** Desktop, Tablet, Telefon hoch, **Telefon
quer**, reduzierte Bewegung, ohne JS, langsames Netz. Zusätzlich zu
`prefers-reduced-motion` gehört ein **sichtbarer Schalter** auf die Seite.

**Kontrast:** Fließtext ≥ 4,5:1. Verbindlich dunkles Ink auf Gold, **nicht**
Weiß auf Gold — das ergibt rund 1,7:1 und fällt durch.

---

## 6. Was du zuerst lieferst — und dann anhältst

Keine Umsetzung, bevor der Betreiber freigegeben hat. Liefere:

**A** Bestandsaufnahme: Route `/`, vorhandene Komponenten (`FadeIn`,
`Reveal`, `SignatureBoerde`), Routing, Tokens, Schriften, vorhandene
Bewegung, Abhängigkeiten, aktuelle Messwerte als Baseline.

**B** Asset-Inventar nach Anhang F: was existiert, in welcher Qualität, mit
welcher Herkunft, mit welchen Rechten. Fehlende Assets ausdrücklich als
fehlend ausweisen, nicht ersetzen.

**C** Abgleich jeder heute auf der Seite stehenden Aussage gegen Anhang A.
Jede Aussage, die dort nicht steht, listen — auch die, die schon lange dort
steht.

**D** Storyboard: die acht Szenen mit allen **zwölf** Pflichtfeldern aus
Anhang C. Fehlt ein Feld, ist die Szene nicht entschieden, sondern geahnt.

**E** Muster je Szene aus dem Kanon (Anhang D), mit Begründung, warum genau
dieses Muster diese Aussage erzählt.

**F** Übergangskonzept: für jeden der sieben Übergänge die Beziehung der
beiden Aussagen.

**G** Varianten-Konzept: die sieben Varianten je Szene, dazu die
Fallback-Ketten.

**H** Budgetplan je Szene: KB, gleichzeitige Bewegungen, Scrollstrecke.

**I** Risiken und offene Punkte, getrennt nach „du kannst es lösen" und „der
Betreiber muss entscheiden".

**J** Priorisierung P0–P3.

**Dann STOP.** Warte auf Freigabe.

Nach der Freigabe: **eine** Szene als Prototyp, und zwar Szene 06 („Ein
Automat kann mehr") — sie trägt Sticky-Bühne, Ebenenwechsel und den Übergang
von der Marken- in die Systemsicht. Erst wenn sie gegen die Baseline gemessen
ist, folgen die übrigen sieben.

---

## 7. Fünf Fragen nach jeder Szene

1. Was soll der Besucher hier verstehen?
2. Warum muss sich etwas bewegen?
3. Was erzählt die Bewegung?
4. Was passiert, wenn man die Bewegung streicht — ist die Geschichte noch
   vollständig?
5. Führt die Szene zur nächsten Erkenntnis?

Keine klare Antwort heißt: Szene überarbeiten, nicht Animation verstärken.

---

## 8. Was der Betreiber noch klären muss

Diese Punkte kann der Agent nicht entscheiden. Sie stehen auch in Anhang A
unter „Offene Punkte".

- [ ] **Zielumgebung**: Landingpage in Projekt A oder statischer Onepager bei
      Hostinger? (Abschnitt 1)
- [ ] **Automaten-Darstellung**: Herstellerfoto, Illustration oder
      generiertes Bild mit KI-Kennzeichnung? (Abschnitt 4)
- [ ] **Bezugsgröße der 5 %**: brutto oder netto, Waren- oder Gesamtumsatz —
      ohne diese Angabe darf die Zahl nicht auf die Seite
- [ ] **Nachweisform** der Spende gegenüber Kunden
- [ ] Erste **Standortzusage** — bis dahin kein Partnername
- [ ] **Store-Termin** der App und tatsächlich ausgelieferter Funktionsumfang
- [ ] Werbeflächen: was ohne Reichweitenangabe zusagbar ist

---

## 9. Oberste Regel

Die Seite soll nicht zeigen, wie gut animiert werden kann. Sie soll zeigen,
wofür Bördesnack24 steht und wie es funktioniert.

Zeig das Geschäftsmodell. Erklär es nicht.
Und: keine Tatsache erfinden — auch keine belegte Tatsache ins falsche Tempus
setzen.
