# Auftrag an Lovable — Motion-System in die Landingpage, 27.09.2026

Projekt: Bördesnack24 Landingpage (`0c068d85-ef58-4450-a511-3e7ac1d0446d`).
Grundlage: `motion/MOTION.md`, `motion/motion-tokens.css`, `motion/ABWEICHUNGEN.md`
(Repository `B-rdesnack24-`, Stand `9e1dbbe`), Projektwissen vom 26.09.2026,
Code-Stand bei Lovable `1c030fb`.

**Status:** erstellt, noch nicht gesendet. Nach dem Senden hier `message_id`
und Datum eintragen und das Projektwissen nachziehen (Abschnitt „Nach dem
Auftrag" unten).

---

Motion-System einbauen: Tokens, ein gemeinsamer Scroll-Fortschritt und sechs Patterns aus der Motion-Spezifikation (M01, M02, M05, M06, M10, M11). Inhalt und Rechtstexte bleiben, bis auf die ausdrücklich genannten Stellen. Arbeite die Teile in der Reihenfolge A bis H ab und prüfe nach jedem Teil, dass die Seite baut.

## Vorrang vor dem Projektwissen

Für diesen Auftrag und danach gilt, abweichend vom Projektwissen:

1. Das npm-Paket **`motion`** (Framer Motion) ist erlaubt, **nur** für Layout-Animationen (Teil E, Nav-Indikator). Nicht für Scroll, nicht für Einblendungen. Mit `LazyMotion` und `domMax` einbinden, damit nur das Nötige ausgeliefert wird.
2. Klebende Abschnitte haben feste Höhen: 3 Szenen = `400vh`, unter 768 px Breite `300vh`. Die Sicherung bleibt: **Ist der klebende Inhalt höher als der Bildschirm, wird nicht geklebt**, dann erscheinen die Szenen untereinander.
3. Unverändert: höchstens acht aktive Muster auf der Startseite, höchstens zwei klebende Abschnitte auf dem Telefon, **ein einziger** `scroll`-Listener (`src/lib/scroll.ts`), Kontrast mindestens 4,5:1 auch in Zwischenstufen, keine Cookies, kein Tracking.

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
- Fünf Links zu den bestehenden Abschnitten: **„Standortgeber"**, **„Der Anteil"**, **„Vorteile"**, **„Werbung"**, **„Wer wir sind"**. Groß- und Kleinschreibung wie hier, ohne Punkt. Die Abschnitte bekommen `id`s und `scroll-margin-top`, damit die Navigation keine Überschrift verdeckt.
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

## H. Nicht umsetzen

Diese Patterns aus der Spezifikation **nicht** bauen und auch keine Platzhalter dafür anlegen:

| Pattern | Grund |
|---|---|
| M03 Sortiments-Panels | Es gibt noch kein Sortiment und keinen Preis. „ab 1,50 €" wäre eine Preisangabe ohne Grundlage. |
| M04 Text auf Pfad | Wäre der dritte klebende Abschnitt auf dem Telefon und das neunte Muster. |
| M07 Geneigtes Karussell „Heute beliebt." | „Beliebt" braucht Verkaufsdaten, ohne Automaten gibt es keine. |
| M08 Bewertungs-Karten | Es gibt keine Bewertungen. Erfundene Bewertungen sind nach UWG stets unlauter. |
| M09 Marquee | Rein dekorativ; die Grenze von acht Mustern ist erreicht. Der Ticker nennt zudem Orte ohne Automaten. |

## Am Ende

Je Teil A bis H eine Zeile, was geändert wurde. Wird ein Punkt nicht oder anders umgesetzt, das ausdrücklich sagen. Dazu ausführen und die Ausgabe nennen:

1. `rg -n 'addEventListener\("scroll"' src`: erwartet genau ein Treffer, in `src/lib/scroll.ts`.
2. `rg -n "transition[^;]*\b(width|height|top|left)\b" src/styles.css`: erwartet keine Treffer.
3. `rg -n "sessionStorage|Hunger kommt|hallo@" src`: erwartet keine Treffer.
4. `rg -n "—|–| · " src/routes/index.tsx src/components/bs24/*.tsx`: nur Code-Kommentare.
5. `rg -n "\b(du|dich|dir|dein|deine)\b" src/routes/index.tsx src/components/bs24/*.tsx`: keine Treffer im sichtbaren Text.
6. Browser bei 390 × 844 und 1280 × 800, jeweils mit Bewegung an und aus: kein waagrechter Überlauf, kein Konsolenfehler, alle Texte vollständig. Bildschirmfotos von Kopf, Standortgeber-Bühne (Szene 1 und 3), „Der Anteil" und Fußbereich.
7. Liste der aktiven Muster auf der Startseite. Erwartet acht: 01 (mit M01), 04 (jetzt M05), 05 (mit M02, M10, M11), 06 (jetzt M06), 09, 10, 17, 18.

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
