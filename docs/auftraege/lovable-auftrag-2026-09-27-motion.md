# Auftrag an Lovable — Motion-System in die Landingpage, 27.09.2026

Projekt: Bördesnack24 Landingpage (`0c068d85-ef58-4450-a511-3e7ac1d0446d`).
Grundlage: `motion/MOTION.md`, `motion/motion-tokens.css`, `motion/ABWEICHUNGEN.md`
(Repository `B-rdesnack24-`, Stand `9e1dbbe`), Projektwissen vom 26.09.2026,
Code-Stand bei Lovable `1c030fb`.

**Status:** gesendet am 27.09.2026, `message_id` `umsg_01m3j91ycyeyjb0wahkzhyw2p0`. Teilweise umgesetzt (A–E mit Regressionen), Abnahme und Nachtrag am Ende dieser Datei; Nachtrag wartet auf Lovable-Credits.
Das Projektwissen wurde vorher am selben Tag nachgezogen (Abschnitt „Nach dem
Auftrag" unten ist damit erledigt).

---

Motion-System einbauen: Tokens, ein gemeinsamer Scroll-Fortschritt und sieben Patterns aus der Motion-Spezifikation (M01, M02, M03, M05, M06, M10, M11). Neu ist ein Abschnitt „Sortiment" mit echten Startpreisen. Inhalt und Rechtstexte bleiben sonst, bis auf die ausdrücklich genannten Stellen. Arbeite die Teile in der Reihenfolge A bis I ab und prüfe nach jedem Teil, dass die Seite baut.

## Vorrang vor dem Projektwissen

Für diesen Auftrag und danach gilt, abweichend vom Projektwissen:

1. Das npm-Paket **`motion`** (Framer Motion) ist erlaubt, **nur** für Layout-Animationen (Teil E, Nav-Indikator). Nicht für Scroll, nicht für Einblendungen. Mit `LazyMotion` und `domMax` einbinden, damit nur das Nötige ausgeliefert wird.
2. **Preise:** Der Gesellschafter beauftragt am 27.09.2026 die Startpreise des Sortiments (Teil H). Sie stehen ausschließlich in `src/data/sortiment.ts` und nirgends sonst auf der Seite. Alle übrigen Regeln zu Preisen gelten weiter.
3. Klebende Abschnitte haben feste Höhen: 3 Szenen = `400vh`, unter 768 px Breite `300vh`. Die Sicherung bleibt: **Ist der klebende Inhalt höher als der Bildschirm, wird nicht geklebt**, dann erscheinen die Szenen untereinander.
4. Unverändert: höchstens acht aktive Muster auf der Startseite, höchstens zwei klebende Abschnitte auf dem Telefon, **ein einziger** `scroll`-Listener (`src/lib/scroll.ts`), Kontrast mindestens 4,5:1 auch in Zwischenstufen, keine Cookies, kein Tracking.

## A. Tokens

1. Neue Datei `src/styles/motion-tokens.css` mit genau diesem Inhalt:

```css
/* Bördesnack24 Motion-Tokens. Quelle: motion/motion-tokens.css (Repository B-rdesnack24-).
   Nicht hier ändern, sondern dort, dann hierher übernehmen. */
:root {
  --ease-out:    cubic-bezier(0.22, 1, 0.36, 1);
  --ease-in-out: cubic-bezier(0.65, 0, 0.35, 1);
  --ease-bounce: cubic-bezier(0.34, 1.56, 0.64, 1);
  --ease-snap:   cubic-bezier(0.2, 0.9, 0.1, 1);

  --dur-fast:    140ms;
  --dur-base:    220ms;
  --dur-slow:    420ms;
  --dur-reveal:  700ms;
  --dur-hero:    1200ms;

  --stagger-letter: 35ms;
  --stagger-word:   60ms;
  --stagger-item:   80ms;

  --scroll-lerp:      0.12;
  --scroll-pin-short: 200vh;
  --scroll-pin-long:  400vh;

  --reveal-y:        24px;
  --hover-lift:      -3px;
  --press-scale:     0.96;
  --press-scale-add: 0.9;
  --tilt-max:        8deg;
  --skew-max:        6deg;
  --magnet-strength: 0.35;
  --magnet-radius:   120px;

  --marquee-duration: 38s;
}

/* Systemeinstellung „Bewegung reduzieren" und Schalter „Bewegung" aus: dieselben Werte. */
@media (prefers-reduced-motion: reduce) {
  :root {
    --dur-reveal: 0ms; --dur-hero: 0ms; --dur-slow: 0ms;
    --stagger-letter: 0ms; --stagger-word: 0ms; --stagger-item: 0ms;
    --reveal-y: 0px; --tilt-max: 0deg; --skew-max: 0deg; --magnet-strength: 0;
  }
}
html[data-motion="off"] {
  --dur-reveal: 0ms; --dur-hero: 0ms; --dur-slow: 0ms;
  --stagger-letter: 0ms; --stagger-word: 0ms; --stagger-item: 0ms;
  --reveal-y: 0px; --tilt-max: 0deg; --skew-max: 0deg; --magnet-strength: 0;
}
```

2. In `src/styles.css` direkt nach `@import "tailwindcss" …` einbinden: `@import "./styles/motion-tokens.css";`. Die Namen `--ease-out` und `--ease-in-out` überschreiben bewusst die Tailwind-Vorgaben.
3. Bestehende Bewegungswerte in `src/styles.css` auf die Tokens umstellen, **ohne neue Zahlen**:
   - `.reveal`: Dauer `var(--dur-reveal)`, Kurve `var(--ease-out)`, Weg `translateY(var(--reveal-y))`. In `Reveal.tsx` die Staffel auf `delay × var(--stagger-item)` umstellen (statt 60 ms).
   - `.card`, `.btn`: Übergänge `var(--dur-fast)` bzw. `var(--dur-base)` mit `var(--ease-out)`, Anheben `translateY(var(--hover-lift))`, Drücken `scale(var(--press-scale))`.
   - `.layer`, `.location-sequence__item`, `.product-card`, `.machine-photo-reveal`: `var(--dur-slow)` bzw. `var(--dur-reveal)` mit `var(--ease-in-out)`.
4. **Nur `transform`, `opacity`, `filter`, `clip-path`, `background-color` animieren.** Der Anteilsbalken (`.share__fill`) animiert heute `width`: auf volle Breite setzen und stattdessen `transform: scaleX(var(--w-num))` mit `transform-origin: left` verwenden. Prüfe dasselbe für `.hl` (`background-size`); wird `.hl` nirgends benutzt, entfernen.

## B. Ein gemeinsamer Scroll-Fortschritt: `useScrollProgress`

Neue Datei `src/hooks/useScrollProgress.ts`. **Kein eigener `scroll`-Listener**: Der Hook hängt sich in `subscribe()` aus `src/lib/scroll.ts` ein.

- Signatur: `useScrollProgress<T extends HTMLElement>(opts?: { source?: (el: HTMLElement) => number; steps?: number; onFrame?: (p: number) => void })`, Rückgabe `{ ref, step }`.
- Zielwert je Frame: `source(el)`, sonst der Abschnittsfortschritt aus der Spezifikation: `d = rect.height - innerHeight; target = clamp(d > 0 ? -rect.top / d : 1 - rect.top / innerHeight)`.
- Glättung: `cur += (target - cur) * lerp`, `lerp` einmal aus `--scroll-lerp` gelesen (Rückfall 0.12). Nachlaufen in einer eigenen rAF-Schleife, die **stoppt**, sobald `|target - cur| < 0.0005`. Keine Dauerschleife.
- Bei „Bewegung aus" (`data-motion` nicht `on`): `cur = target` sofort, kein Nachlaufen.
- Jeder Frame schreibt `--p` auf das Element und ruft `onFrame(cur)`. React-State **nur** für `step = min(steps - 1, floor(cur × steps))`, und nur wenn sich `step` ändert. Keine Re-Renders pro Frame.
- Umstellen: `ShareScene`, `SceneColorTransition`, `PhysicalDigital` und `MachineZoom` nutzen den Hook mit `source: prog`. So behalten sie ihre bisherige Zeitkurve (ENTRY/TAIL, `phase`) und werden nur geglättet. Ihre CSS-Übergänge auf scrollgetriebenen Werten entfallen, weil die Glättung jetzt im Hook liegt.
- SSR-sicher: `window`, `matchMedia`, `getComputedStyle` nur in Effekten.

## C. M01 Kinetische Überschrift im Kopf

Nur die Überschrift `h1#claim` „Versorgung vor Ort. Wert für den Ort.". Das Bild im Kopf bleibt unverändert, Überzeile und Absatz behalten ihr `Reveal`.

- In Wörter teilen. Jedes Wort ein `span` mit `display:inline-block; overflow:hidden; vertical-align:bottom` (Maskenkante), darin ein `span`, der von `translateY(110%) rotate(6deg)` auf `none` läuft: `var(--dur-reveal)`, `var(--ease-out)`, Versatz `i × var(--stagger-word)`. Bei sieben Wörtern endet das nach 1 060 ms, also innerhalb von `--dur-hero`. Wörter brechen nie mitten im Wort um.
- **Wörter statt Buchstaben:** M01 ist für eine kurze Wortmarke gedacht. Bei einem Satz aus 37 Zeichen würde die Buchstabenstaffel die Überschrift fast zwei Sekunden lang unvollständig lassen.
- **Einmal pro Seitenaufruf, ohne Speicherung auf dem Gerät.** Kein `sessionStorage`, kein `localStorage`: Ein Merker, der nicht vom Besucher angefordert wurde, bräuchte nach § 25 TDDDG eine Einwilligung. Stattdessen eine Modul-Variable, die beim ersten Abspielen gesetzt wird. Eine Rückkehr zur Startseite in derselben Sitzung spielt dann nicht erneut.
- Kein Aufblitzen: Der Ausgangszustand wird nur gesetzt, wenn die Intro tatsächlich läuft. Ohne JavaScript, bei „Bewegung aus" und beim zweiten Aufruf steht die Überschrift sofort vollständig.
- Barrierefrei: `aria-label` mit dem ganzen Satz am `h1`, die Wort-Spans `aria-hidden`.
- Kein Scroll-Teil (kein Hochskalieren, kein Kleben): Das Budget für klebende Abschnitte gehört Teil D.

## D. M06 Gepinnte Szenen im Abschnitt „Für Standortgeber"

Das bestehende `Stage` + `Sequence` wird umgebaut, **nicht** daneben ein zweiter Baustein. Inhalt wortgleich: Überzeile, Überschrift „Sie stellen die Fläche. Wir tragen den Rest.", Einleitung, die drei Zusagen, Zeichnung mit KI-Kennzeichnung, Satz zur Spende, Schaltfläche „Gespräch vereinbaren".

- Höhe `var(--scroll-pin-long)`, unter 768 px `300vh`. Bühne `position: sticky; top: 0; min-height: 100svh`, oben so viel Innenabstand, dass die Navigation (Teil E) nichts verdeckt. Die Sicherung aus dem bestehenden `Stage` (`canStick`, gemessen) bleibt.
- Aktive Szene `step` aus `useScrollProgress({ steps: 3 })`.
- **Hintergrund je Szene: Gold `#FDC102` → Gold-hell `#FEE7A0` (`--gold-soft`) → Creme `#FBF8F4`.** Das weicht bewusst von der Spezifikation ab, die auch Ink vorsieht. Schrift ist in allen drei Szenen Ink `#202321`, deshalb bleibt der Kontrast auch mitten im Überblenden über 4,5:1 (Ink auf Gold 9,7:1). Ein Wechsel auf Ink würde für einen Moment helle Schrift auf hellem Grund erzeugen. Außerdem endet die Bühne so auf Creme, und der folgende Übergang Creme → Nacht schließt nahtlos an. Überblenden über `background-color`, `var(--dur-slow)`, `var(--ease-in-out)`.
- Auf der Bühne ist alles Ink: Überzeile, KI-Hinweis (die leise Farbe `#6E6A66` erreicht auf Gold nur 3,27:1), Fokusring. Die Schaltfläche „Gespräch vereinbaren" wird auf der Bühne eine Ink-Schaltfläche mit Creme-Schrift, weil Gold auf Gold unsichtbar wäre.
- Links die drei Titel untereinander, Bricolage 800, `clamp(40px, 5vw, 80px)`. Der aktive gefüllt, die anderen als Umriss (`-webkit-text-stroke: 1.5px currentColor; color: transparent`).
- Mitte: die bestehende Zeichnung, `rotate(calc((var(--p) - 0.5) * 10deg))` und `translateY(calc((var(--p) - 0.5) * -20px))`. **Kein Endlos-Schweben**: Loops sind nur für Dekoration erlaubt und hier nicht nötig.
- Rechts: Nummer („01" bis „03") und Satz der aktiven Szene mit dem bestehenden Symbol, eingeblendet mit `var(--stagger-item)`.
- Rechts außen drei Punkte als Schaltflächen, die zur jeweiligen Szene scrollen. `aria-label` „Zusage 1 von 3: Was Sie bekommen." usw., `aria-current` am aktiven Punkt, per Tastatur bedienbar.
- Unter 768 px: Titel als Chips oben, Satz unter der Zeichnung.
- **Ohne Bewegung** (Schalter aus oder Systemeinstellung): kein Kleben, die drei Szenen untereinander, weißer Grund mit goldener Oberkante wie heute.

## E. M02 Navigation mit Scroll-Spy

- Feste Pill-Navigation oben mittig: `top: 16px`, Hintergrund `rgba(251,248,244,.8)` mit `backdrop-filter: blur(12px)`; ohne Unterstützung `rgba(251,248,244,.96)`. Radius 999 px, weicher Schatten.
- Sechs Links zu den Abschnitten: **„Standortgeber"**, **„Der Anteil"**, **„Sortiment"** (Teil H), **„Vorteile"**, **„Werbung"**, **„Wer wir sind"**. Groß- und Kleinschreibung wie hier, ohne Punkt. Die Abschnitte bekommen `id`s und `scroll-margin-top`, damit die Navigation keine Überschrift verdeckt.
- Aktiver Abschnitt über `IntersectionObserver` (`rootMargin: "-45% 0px -50% 0px"`), kein Scroll-Listener.
- **Ein** Ink-Indikator (`#202321`, Linkschrift auf dem aktiven Link Creme) gleitet mit `motion` `layoutId` zum aktiven Link: `var(--dur-slow)`, `var(--ease-snap)`. Bei „Bewegung aus" springt er.
- Klick scrollt weich zum Abschnitt (bei „Bewegung aus" ohne Weichzeichnung), `aria-current="true"` am aktiven Link, `nav` mit `aria-label="Seitenbereiche"`.
- **Fokusring `#856A00`** (Gold-Text), nicht `#FDC102`: Gold auf der cremefarbenen Pill erreicht nur 1,55:1 und wäre als Fokusanzeige unsichtbar.
- Unter 768 px: innerhalb der Pill waagrecht scrollbar, der aktive Link wird über `scrollLeft` in die Mitte geholt (nicht `scrollIntoView`). Berührungsflächen mindestens 44 × 44 px.
- Die Navigation darf nichts verschieben (CLS 0). Das Kopfbild behält seine Lage.

## F. M05 Scroll-Hervorhebung im Abschnitt „Der Anteil"

`TextHighlight` wird durch M05 ersetzt, **an derselben Stelle**, weiterhin genau einmal auf der Seite.

- Satz, **korrigiert**: **„Wer das Geld bekommt, entscheidest Du mit."** Die Kundschaft stimmt gemeinsam ab, und die drei Zwecke mit den meisten Stimmen bekommen den Topf. Ohne „mit" überzeichnet der Satz den Einfluss des Einzelnen (§ 5 UWG). In der App ist das seit heute ebenso korrigiert.
- Wort-Spans, Wort `i` ist aktiv, wenn `p > i / n` (`useScrollProgress` am Satz).
- Farben auf Nacht `#202321`: inaktiv **`#A9A39A`** (6,3:1, lesbar), aktiv Creme `#FBF8F4`, das Wort „Du" aktiv Gold `#FDC102`. **Nicht `#4C4842`** aus der Spezifikation: Das erreicht 1,75:1, und die noch nicht erreichten Wörter wären unlesbar. Farbwechsel je Wort `var(--dur-base)`.
- Schrift Bricolage 700, `clamp(32px, 4.4vw, 64px)`, höchstens 22 Zeichen je Zeile.
- **Nicht gepinnt**, abweichend von M05. Der Satz ist eine Zeile, zwei Bildschirmhöhen Kleben wären Leerlauf, und der zweite klebende Abschnitt auf dem Telefon bleibt frei.
- Für Bildschirmleser ein normaler Satz. Ohne Bewegung sind alle Wörter sofort aktiv.

## G. M10 und M11 im Fußbereich

Wortlaut, Links und Reihenfolge des Fußbereichs bleiben. Neu kommen nur diese beiden Bausteine dazu.

**M11 Copy-Pill** für `kontakt@boerdesnack24.de`: Die Adresse bleibt ein `mailto:`-Link, daneben kommt eine Schaltfläche „Kopieren" (Gold, Schrift Ink).
- Klick: `navigator.clipboard.writeText`, Rückfall über ein verstecktes `textarea` mit `execCommand("copy")`.
- Danach „Kopiert" mit Haken, der Rand der Pill blendet über `opacity` gold ein, die Pill federt `scale(var(--press-scale)) → 1` mit `var(--ease-bounce)`, `var(--dur-base)`. Nach 1,8 s zurück.
- Schlägt das Kopieren fehl: „Fehler" statt Erfolg.
- **Die Schaltfläche behält ihre Breite:** alle Beschriftungen übereinander im Layout, nur eine sichtbar. Keine Breitenanimation.
- `aria-live="polite"` meldet „In die Zwischenablage kopiert" bzw. „Kopieren nicht möglich".
- Ohne Bewegung: Bestätigung sofort, kein Federn.

**M10 Nach oben:** runde Schaltfläche, 96 px (unter 768 px 56 px), Hintergrund Creme `#FBF8F4`, Pfeil **Ink `#202321`**. Nicht Gold-600 `#DBA200`: Das erreicht nur 2,0:1. `aria-label="Nach oben"`.
- **Magnet** nur bei `(hover: hover) and (pointer: fine)` und „Bewegung an": Innerhalb `var(--magnet-radius)` folgt die Schaltfläche dem Zeiger um `var(--magnet-strength)` der Distanz, der Pfeil um das 1,5-fache. Zurück mit `var(--dur-slow)` und `var(--ease-bounce)`. `pointermove` nur auf dem Fußbereich, rAF-gedrosselt.
- **Hover und Fokus:** Gold `#FDC102` wächst als `clip-path: circle()` von unten, der Pfeil läuft einmal oben hinaus und unten wieder herein.
- Klick: `scrollTo({ top: 0 })`, weich nur bei „Bewegung an".

## H. M03 Sortiment mit Startpreisen (neuer Abschnitt)

Neuer Abschnitt **zwischen „Der Anteil" und „Für Kundinnen und Kunden"**, `id="sortiment"`.

**Daten.** Neue Datei `src/data/sortiment.ts`, genau diese Werte, keine anderen:

```ts
/**
 * Sortiment zum Start. Quelle: Produktkatalog der App (Supabase `products`,
 * Migration `product_catalog_price_list` vom 28.07.2026), geprüft am 27.09.2026.
 * `ab` = niedrigster Verkaufspreis der Kategorie am Automaten, brutto in Euro.
 * Bei einer Preisänderung im Katalog hier nachziehen. Keine Einzelpreise.
 */
export const sortiment = [
  { id: "snacks", name: "Snacks & Süßes", ab: 0.8, beispiele: ["Kinderriegel", "Haribo Goldbären", "BiFi XXL"] },
  { id: "kalt", name: "Kaltgetränke", ab: 1.5, beispiele: ["Durstlöscher", "Vio Wasser", "Paulaner Spezi"] },
  { id: "heiss", name: "Heißgetränke", ab: 1.3, beispiele: ["Espresso", "Cappuccino", "Latte Macchiato"] },
  { id: "eis", name: "Eis", ab: 1.0, beispiele: ["Calippo", "Magnum", "Cornetto"] },
] as const;
```

Preise deutsch formatieren: „ab 0,80 €", „ab 1,50 €", „ab 1,30 €", „ab 1,00 €".

**Texte** (wörtlich):
- Überzeile „Sortiment", Überschrift „Das kommt in die Automaten."
- Unter den Panels, als Hinweiskasten: „Startpreise am Automaten. Nicht jeder Automat führt jedes Produkt. Mit kostenlosem Konto in der App 5 % günstiger."
- Schaltfläche je Panel: „In der App ansehen", Link auf `https://app.boerdesnack24.de`.

**Keine Einzelpreise für Getränke und keine Pfandangabe.** Die „ab"-Preise beziehen sich auf Produkte ohne Pfand (Kaltgetränke: Durstlöscher im Karton). Die Katalogpreise enthalten den Pfand; nach § 7 PAngV muss er aber neben dem Preis stehen, nicht darin. Bis der Katalog getrennte Pfandbeträge führt, erscheint deshalb kein Preis eines Getränks in Pfandflasche oder Dose.

**Aufbau.** Vier Panels nebeneinander, volle Höhe (mindestens 520 px). Oben links der Name der Kategorie (Bricolage 800), darunter „ab …". Mittig ein großes `lucide`-Symbol, **kein Bild und kein Platzhalter**: `Cookie`, `CupSoda`, `Coffee`, `IceCreamCone`, jeweils `aria-hidden`. Farben, alle gemessen:

| Panel | Fläche | Schrift | Schaltfläche |
|---|---|---|---|
| Snacks & Süßes | Gold `#FDC102` | Ink (9,7:1) | Ink, Schrift Creme |
| Kaltgetränke | Ink `#202321` | Creme (15:1) | Gold, Schrift Ink |
| Heißgetränke | Gold-hell `#FEE7A0` (`--gold-soft`) | Ink (13:1) | Ink, Schrift Creme |
| Eis | Grün `#5C9A3F` | **Ink (4,65:1)** | Ink, Schrift Creme |

Auf Grün **Ink statt Creme**: Creme erreicht dort nur 3,23:1. Statt `#FFEDAF` aus der Spezifikation wird `--gold-soft` verwendet, das es im Designsystem schon gibt. Fokusring je Fläche sichtbar: Ink auf Gold, Gold-hell und Grün, Gold auf Ink.

**Bewegung, bei Hover und bei `focus-within`:**
- Symbol `scale(1.06) rotate(-3deg)`, `var(--dur-slow)`, `var(--ease-out)`.
- Die drei Beispiele erscheinen als kleine Chips um das Symbol: von `scale(0)` und `opacity 0` auf 1, `var(--ease-bounce)`, Versatz `var(--stagger-item)`.
- Die Schaltfläche fährt von `translateY(16px)` und `opacity 0` ein, `var(--dur-slow)`.
- **Das Panel wächst nicht**, abweichend von M03. `grid-template-columns` zu animieren verstößt gegen Regel 1, und die Nachbarpanels würden bei jedem Überfahren umbrechen: Das ist Layout-Verschiebung ohne Eingabe, CLS größer als 0. Chips und Schaltfläche sind immer im Layout, nur unsichtbar; nichts verschiebt sich.
- Kein runder „+"-Knopf: Es gibt nichts in einen Warenkorb zu legen.

**Touch, Tastatur, ohne Bewegung:**
- Auf Geräten ohne Hover (`@media (hover: none)`) und unter 768 px sind Chips und Schaltfläche **immer sichtbar**. So gibt es keinen Inhalt, der nur per Hover erreichbar ist. Unter 768 px stehen die Panels untereinander.
- Per Tab erreichbar: `focus-within` zeigt dasselbe wie Hover.
- Bei „Bewegung aus": Chips und Schaltfläche sofort sichtbar, kein Skalieren, kein Einfahren.

## I. Nicht umsetzen

Diese Patterns aus der Spezifikation **nicht** bauen und auch keine Platzhalter dafür anlegen:

| Pattern | Grund |
|---|---|
| M04 Text auf Pfad | Wäre der dritte klebende Abschnitt auf dem Telefon und das neunte Muster. |
| M07 Geneigtes Karussell | Wird in der App umgesetzt („Eure Favoriten"), nicht auf der Landingpage. |
| M08 Bewertungs-Karten | Es gibt keine Bewertungen. Erfundene Bewertungen sind nach UWG stets unlauter. |
| M09 Marquee | Rein dekorativ; die Grenze von acht Mustern ist erreicht. Der Ticker nennt zudem Orte ohne Automaten. |

## Am Ende

Je Teil A bis I eine Zeile, was geändert wurde. Wird ein Punkt nicht oder anders umgesetzt, das ausdrücklich sagen. Dazu ausführen und die Ausgabe nennen:

1. `rg -n 'addEventListener\("scroll"' src`: erwartet genau ein Treffer, in `src/lib/scroll.ts`.
2. `rg -n "transition[^;]*\b(width|height|top|left)\b" src/styles.css`: erwartet keine Treffer.
3. `rg -n "sessionStorage|Hunger kommt|hallo@" src`: erwartet keine Treffer.
4. `rg -n "—|–| · " src/routes/index.tsx src/components/bs24/*.tsx`: nur Code-Kommentare.
5. `rg -n "\b(du|dich|dir|dein|deine)\b" src/routes/index.tsx src/components/bs24/*.tsx`: keine Treffer im sichtbaren Text.
6. Browser bei 390 × 844 und 1280 × 800, jeweils mit Bewegung an und aus: kein waagrechter Überlauf, kein Konsolenfehler, alle Texte vollständig. Bildschirmfotos von Kopf, Standortgeber-Bühne (Szene 1 und 3), „Der Anteil", Sortiment (ein Panel geöffnet) und Fußbereich.
7. Liste der aktiven Muster auf der Startseite. Erwartet acht: 01 (mit M01), 04 (jetzt M05), 05 (mit M02, M03, M10, M11), 06 (jetzt M06), 09, 10, 17, 18. M03 zählt als Mikrointeraktion, weil es nur auf Hover und Fokus reagiert, nicht auf Scrollen.
8. `rg -n "[0-9],[0-9]{2} €" src --glob '!src/data/sortiment.ts'`: erwartet keine festen Preise außerhalb von `sortiment.ts` (die Anzeige liest nur aus der Datei).

---

## Nach dem Auftrag (für Claude Code, nicht Teil der Nachricht)

Projektwissen bei Lovable nachziehen, damit spätere Aufträge nicht gegen
diesen laufen:

* Zeile „keine zusätzliche Animationsbibliothek" → „`motion` nur für
  Layout-Animationen (Nav-Indikator); keine weitere".
* „Ein klebender Abschnitt hält höchstens zwei Bildschirmhöhen fest" →
  „Klebende Abschnitte: 3 Szenen `400vh`, Telefon `300vh`; ist der Inhalt höher
  als der Bildschirm, wird nicht geklebt".
* Tabelle der Bausteine: `TextHighlight` → M05 mit dem Satz „Wer das Geld
  bekommt, entscheidest Du mit."; `useScrollProgress` und `motion-tokens.css`
  ergänzen; Verweis auf `motion/MOTION.md` und `motion/ABWEICHUNGEN.md`.
* Neue Regel: „Nichts auf dem Gerät des Besuchers speichern, was er nicht
  selbst eingestellt hat (§ 25 TDDDG). Erlaubt ist nur der Bewegungsschalter."
* Regel „keine Preise": ergänzen um „außer den Startpreisen in
  `src/data/sortiment.ts` (beauftragt 27.09.2026). Keine Einzelpreise, kein
  Getränkepreis mit Pfand, bis die Pfandfrage geklärt ist."
* `ProductFocus`/`ProductCards` (Muster 13, „ungenutzt bis ein Automat bestückt
  ist"): durch M03 ersetzt; die Zeile in der Bausteintabelle anpassen.

---

## Abnahme 27.09.2026 (Claude Code, gegen den Code geprüft)

Geprüft: Antwort `umsg_01m3j91ycyeyjb0wahkzhyw2p0` (Commit `bb47899`), Diff
aller zwölf geänderten Dateien, aktueller Stand von `index.tsx`,
`SceneMotion.tsx`, `ShareBar.tsx`, `MotionToggle.tsx`, Vorschau-Bildschirmfoto
1920 px. Lovable meldet selbst: A bis E umgesetzt, F bis H offen, Abnahme
nicht durchgeführt.

| Teil | Befund | Status |
|---|---|---|
| A Tokens | `src/styles/motion-tokens.css` wertgleich mit `motion/motion-tokens.css` (Diff ohne Kommentare: nur zusätzlicher Block `html[data-motion="off"]`, wie beauftragt). Bestehende Übergänge auf Tokens umgestellt. | 🟢 |
| B `useScrollProgress` | Hängt an `subscribe()`, kein zweiter Scroll-Listener, lerp aus `--scroll-lerp`. **Fehler:** Ohne Bewegung liefert er den rohen Scroll-Fortschritt statt 1. Folge: `PhysicalDigital` (App-Hälfte je nach Scrollstelle verdeckt) und `SceneColorTransition` hängen auch ohne Bewegung am Scrollen; vorher galt ohne Bewegung der Endzustand. | 🔴 Regression |
| C M01 | `HeroClaim` je Wort, einmal pro Seitenaufruf (Modulvariable, nichts gespeichert), `aria-label` am `h1`. | 🟢 |
| D M06 | Szenen Gold → Gold-hell → Creme, Schrift Ink, Kleben nur wenn Inhalt ≤ Bildschirmhöhe, 400vh/300vh. **Fehler:** `.stage__art-motion` dreht auch ohne Bewegung; `.stage { background: #fff }` ist eine eigene Farbe. | 🔴 |
| E M02 | Sechs Links, `IntersectionObserver` statt Scroll-Listener, Indikator über `motion`. **Fehler:** „Standortgeber" ist schon im Kopfbereich aktiv; `#sortiment` zeigt ins Leere (Teil H fehlt). | 🔴 |
| F M05 | Nicht umgesetzt. Satz lautet weiter „entscheidest Du." Zusätzlich beim Umbau die `.hl`-Stile entfernt und die Farbe der hervorgehobenen Wörter auf Creme gesetzt. | 🔴 |
| G M10, M11 | Nicht umgesetzt. | 🔴 |
| H M03 | Nicht umgesetzt. `ProductFocus`/`ProductCards` mit Artikelzahlen noch im Code (derzeit nicht eingebunden). | 🔴 |
| I | Keine ausgeschlossenen Muster angelegt. | 🟢 |

Der Nachtrag steht unten. Am 27.09.2026 nicht sendbar (keine Credits);
**gesendet am 28.09.2026**, `message_id` `umsg_01m3k51ewte8d9fszwm14knadn`,
zusammen mit dem Projektwissen aus `lovable-projektwissen.md` (Zeile
„… und ohne Pfand"). Punkt 6 in der Vorschau, veröffentlicht wird erst nach
Runbook M.

### Nachtrag (Text zum Einfügen in Lovable)

```
Nachtrag zum Motion-Auftrag vom 27.09.2026. A bis E sind da, danke. Bitte jetzt in dieser Reihenfolge, ohne Rückfrage:

1. Regressionen aus A bis E beheben (vor allem anderen):
   a) PhysicalDigital und SceneColorTransition: Ist die Bewegung aus (data-motion ungleich "on" oder prefers-reduced-motion), muss der Endzustand gelten, also --digital 100 % und --transition 100 %, wie vor dem Umbau. Derzeit hängen beide auch ohne Bewegung am Scroll-Fortschritt. Am besten in useScrollProgress: ohne Bewegung onFrame(1) bzw. --p = 1 liefern, dann gilt es für alle Verbraucher.
   b) Stage: .stage__art-motion dreht und verschiebt über --p auch ohne Bewegung. Die Transformation nur unter html[data-motion="on"] setzen.
   c) Stage: `.stage { background: #fff }` ist eine eigene Farbe. Bitte eine vorhandene Farbvariable verwenden (Creme).
   d) SectionNav: Solange der Kopfbereich sichtbar ist, ist kein Link aktiv (kein aria-current, kein Indikator).
   e) SectionNav verlinkt #sortiment, das es noch nicht gibt. Wird mit Punkt 4 behoben; bis dahin keinen toten Link ausliefern.

2. Teil F (M05): Satz ändern zu „Wer das Geld bekommt, entscheidest Du mit." (auch HIGHLIGHT_WORDS). Die Hervorhebung wurde beim Umbau entfernt (.hl-Stile gelöscht, .text-highlight span jetzt Creme). Bitte gemäß Auftrag Teil F umsetzen; Kontrast der nicht hervorgehobenen Wörter auf Nacht mindestens 4,5:1, auch in Zwischenstufen.

3. Teil G (M10 Nach oben, M11 Copy-Pill im Fußbereich) laut Auftrag.

4. Teil H (M03 Sortiment) laut Auftrag: src/data/sortiment.ts mit genau diesen Startpreisen: Snacks & Süßes ab 0,80 €, Kaltgetränke ab 1,50 €, Heißgetränke ab 1,30 €, Eis ab 1,00 €. Abschnitt mit id="sortiment". Keine Einzelpreise, kein Preis eines Getränks in Pfandflasche oder Dose. ProductFocus/ProductCards (GROUPS mit Artikelzahlen) entfernen, damit es nur ein Sortiment gibt.

5. Abnahme, bitte wirklich ausführen und im Bericht zitieren:
   - rg -n "addEventListener\(\s*['\"]scroll" src   (erwartet: nur src/lib/scroll.ts)
   - rg -n "entscheidest Du\." src   (erwartet: keine Treffer)
   - rg -n "localStorage|sessionStorage|document.cookie" src   (erwartet: nur MotionToggle)
   - in src/styles.css keine Übergänge oder Animationen auf width, height, top, left
   - Bildschirmfotos 390 px und 1440 px, je mit Bewegung an und aus: Kopf, Standortgeber, Anteil, Sortiment, Fußbereich.

6. Der Anteil (ShareBar): Die Spende wird künftig ohne Pfand gerechnet (Freigabe 27.09.2026). Den Satz „Nettoerlös heißt: Umsatz ohne Umsatzsteuer." ändern zu „Nettoerlös heißt: Umsatz ohne Umsatzsteuer und ohne Pfand." Sonst nichts an diesem Abschnitt ändern.

Am Ende je Punkt 1a bis 6 eine Zeile, was geändert wurde. Nicht Umgesetztes ausdrücklich nennen.
```

### Für Philipp: Nachtrag an Lovable schicken

1. **Warum:** Lovable hat die Hälfte des Auftrags erledigt und dabei drei
   Dinge verschlechtert, die ohne Bewegung sichtbar sind. Solange der Nachtrag
   nicht läuft, darf die Vorschau nicht veröffentlicht werden.
2. **Was passiert:** Lovable repariert die drei Fehler und baut Sortiment,
   Hervorhebung und Fußbereich. Es kostet Lovable-Credits; an der
   veröffentlichten Seite ändert sich nichts, bis Du veröffentlichst.
3. **Schritt für Schritt:**
   1. Öffne https://lovable.dev/settings/billing und lade Credits nach
      (oder wechsle den Tarif).
   2. Sag mir hier im Chat „Lovable hat wieder Credits". Ich schicke den
      Nachtrag dann selbst und prüfe das Ergebnis.
   3. Alternativ: Öffne das Projekt „Bördesnack24 Landingpage", füge den
      Text aus dem grauen Kasten oben ins Chatfeld ein und schicke ihn ab.
4. **Erfolg:** Lovable antwortet mit einer Zeile je Punkt 1a bis 6.
5. **Wenn etwas schiefgeht:** Nicht veröffentlichen. Es eilt nicht; die
   veröffentlichte Seite ist vom Umbau nicht betroffen.
6. **Reihenfolge:** Punkt 6 (Satz „… und ohne Pfand") stimmt erst, wenn die
   Datenbank den Pfand aus der Spende herausrechnet (Runbook M in
   `docs/OPERATIONS.md`). Die Vorschau darf ihn vorher enthalten,
   **veröffentlicht wird erst nach Runbook M**.

## Abnahme des Nachtrags 28.09.2026 (Claude Code, gegen den Code geprüft)

Geprüft: Antwort `umsg_01m3k51ewte8d9fszwm14knadn` (Commit `b759d0a`, 5 Credits),
Diff aller elf geänderten Dateien, vollständige `src/styles.css`, `src/lib/scroll.ts`,
`Stage.tsx`, `SiteFooter.tsx`, `Reveal.tsx`, `LegalPage.tsx`, `__root.tsx`,
`use-mobile.tsx`, `error-capture.ts`, `lovable-error-reporting.ts`; Beispielprodukte
und Startpreise gegen den Produktkatalog (Produktions-Nachbau); Kontrast nach WCAG
berechnet. **Nicht selbst geprüft:** das Aussehen im Browser. Die Vorschau ist aus
der Arbeitsumgebung gesperrt (Proxy 403); Lovable meldet Bildschirmfotos 390/1440 px
mit Bewegung an und aus ohne Überlauf und ohne Seitenfehler.

| Punkt | Befund am Code | Status |
|---|---|---|
| 1a | `useScrollProgress` liefert ohne Bewegung (Schalter aus **oder** `prefers-reduced-motion`) `p = 1`; reagiert auch auf eine Änderung der Systemeinstellung. Gilt für alle Verbraucher. | 🟢 |
| 1b | Drehung der Bühne nur unter `html[data-motion="on"]`, zusätzlich aus bei `prefers-reduced-motion`. | 🟢 |
| 1c | `.stage` nutzt `var(--cream)`. | 🟢 |
| 1d | Startzustand ohne aktiven Link; der Kopfbereich wird beobachtet und setzt „kein Link". | 🟢 |
| 1e | `#sortiment` existiert (neuer Abschnitt). | 🟢 |
| 2 M05 | Satz „Wer das Geld bekommt, entscheidest Du mit."; „Du" in Gold. Kontrast gedimmt 6,34:1, hell 14,98:1, Gold 9,67:1 auf Nacht; Zwischenstufen liegen dazwischen. | 🟢 |
| 3 M10/M11 | Kopieren mit Rückfall ohne Clipboard-API, 1,8 s Rückmeldung, feste Breite, Statusansage für Bildschirmleser, 44 px. „Nach oben" 96/56 px, Magnet nur mit Maus und Bewegung, sonst ohne Animation. Keine Speicherung. | 🟢 |
| 4 M03 | `src/data/sortiment.ts`: 0,80 / 1,50 / 1,30 / 1,00 € — stimmen mit dem Katalog. Alle zwölf Beispielprodukte existieren im Katalog. Alte Artikelzahlen und `ProductFocus`/`ProductCards` entfernt. Kontrast der Tafeln ≥ 4,65:1 (Eis, Ink auf Grün, knapp über 4,5). Ohne Hover (Telefon, Tastatur, Bewegung aus) sind Beispiele und Link immer sichtbar. | 🟢 |
| 5 Abnahme | Von Lovable nicht vollständig wiederholt. Selbst nachgeprüft: genau **ein** `scroll`-Listener (`src/lib/scroll.ts`); Speicherung nur im Bewegungsschalter (`localStorage`), den Cookie-Schreiber in `sidebar.tsx` hat Lovable entfernt; `entscheidest Du.` kommt nicht mehr vor; keine Übergänge auf `width`, `height`, `top`, `left`. Sichtprüfung siehe oben. | 🟢 Code, Sicht durch Philipp |
| 6 | „Nettoerlös heißt: Umsatz ohne Umsatzsteuer und ohne Pfand." | 🟢, **erst nach Runbook M veröffentlichen** |

Nebenbefunde (keine Nacharbeit beauftragt):

* `Sequence.tsx` wird nicht mehr verwendet (die Bühne baut die Zusagen selbst).
  Totes Bauteil; das Projektwissen nennt es noch.
* Der Anteilsbalken steht im ausgelieferten HTML voll und springt beim Laden mit
  Bewegung auf 5 %, bevor er wächst. Nur `transform`, kein Layoutsprung (CLS 0).
* **P-3 (neu):** Nach Runbook M kostet Vio Wasser 1,25 € zzgl. 0,25 € Pfand.
  „Kaltgetränke ab 1,50 €" ist dann nicht mehr der niedrigste Preis. Siehe
  `motion/ABWEICHUNGEN.md`.
