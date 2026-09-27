# Motion-Spezifikation — Implementierungskonventionen

Stand: 27.09.2026. Erstellt auf Anweisung, mit der Entscheidung „auf dem
scrollcraft-Kanon aufbauen, keine zweite Musterliste".

## 0. Verhältnis zu `docs/scrolling-funktionen.md`

**Diese Datei ist nicht der Musterkatalog.** Der Musterkatalog — welche 18
Muster es gibt, welches auf welcher Fläche aktiv ist, welche Grenzen gelten
(höchstens acht je Seite, Muster 04 genau einmal) — steht ausschließlich in
`docs/scrolling-funktionen.md` und wird dort gepflegt. Diese Datei ist die
**technische Ergänzung**: *wie* ein Muster implementiert wird, mit welchem
Werkzeug, mit welchen Zahlenwerten. Widerspricht sich etwas zwischen beiden
Dateien, gilt `scrolling-funktionen.md` für das *Was*, diese Datei für das
*Wie* — und der Widerspruch wird als offener Punkt geführt, nicht still
aufgelöst.

**Kein zweites Repository, keine zweite Spec.** Es gibt in diesem Repository
(`B-rdesnack24-`) keine Next.js-Codebase. Die Landingpage ist ein
eigenständiges React+Vite-Projekt bei Lovable (`0c068d85-…`), das nur über
Aufträge (Chat-Nachrichten an den Lovable-Agenten) erreichbar ist, nicht über
lokale Dateien in diesem Repo. Web-Umsetzungen aus dieser Spezifikation gehen
deshalb als Auftragstext an Lovable — mit Verweis auf diese Datei und
`motion-tokens.css`, nicht als Copy-Paste-Code, den der Lovable-Agent dann
selbst einpassen muss. Die App-Umsetzung liegt ausschließlich in
`apps/mobile` (Flutter).

## 1. Globale Regeln (verbindlich, beide Plattformen)

1. **Nur `transform`, `opacity`, `filter`, `clip-path` und
   `background-color` animieren.** Nie `width`/`height`/`top`/`left` — das
   erzeugt Layout-Neuberechnung und verletzt die CLS-0-Vorgabe (Abschnitt 7).
   Ausnahme, die schon im Bestand existiert und nicht neu bewertet wird:
   `.share__fill { width: var(--w) }` in Lovables `ShareBar.tsx` — dort ist
   die Breite selbst die Aussage (ein wachsender Anteil), kein Layout-Element
   mit Nachbarn, die verschieben würden. Für **neue** Bausteine gilt die
   Regel ohne Ausnahme.
2. **Scroll-Effekte über einen gemeinsamen Fortschritt, nie einen
   Listener pro Element.**
   - **Web:** genau ein globaler, passiver, `requestAnimationFrame`-gedrosselter
     Scroll-Handler. Er existiert bereits: `subscribe()` in
     `src/lib/scroll.ts` (Lovable-Projekt). Jede neue Scroll-Bindung hängt
     sich dort ein — auch der neue Hook `useScrollProgress` (Abschnitt 2) tut
     das. Kein zweiter `addEventListener("scroll", …)`, keine
     Scroll-Hooks aus Animationsbibliotheken (siehe Abschnitt 3).
   - **App:** `_ScrollLinked`/`_ScrollLinkedState` in
     `apps/mobile/lib/core/widgets/motion/motion.dart` liest die
     `ScrollPosition` des nächstgelegenen `Scrollable` und baut bei Änderung
     neu; sie verändert die Position nie. Neue Bausteine erweitern diese
     Basisklasse, statt einen eigenen `ScrollController`-Listener zu öffnen.
3. **Web:** React + das Paket `motion` (Framer Motion) für **Enter/Exit- und
   Layout-Animationen** (Modal öffnet/schließt, Liste sortiert um, Karte
   erscheint/verschwindet aus dem DOM). **Nicht** für scrollgebundene
   Bewegung — `motion`s eigene Scroll-Hooks (`useScroll`, `useTransform` an
   einen Scroll-Fortschritt gebunden) würden einen zweiten Scroll-Beobachter
   öffnen und verletzen Regel 2. Für Scroll gilt ausnahmslos
   `useScrollProgress` (Abschnitt 2).
4. **App:** nur Bordmittel — `AnimationController`, `ScrollController`,
   `CustomScrollView`/Slivers, `HapticFeedback`. Kein Animationspaket von
   pub.dev. Bestehende Bausteine in `motion.dart` sind bereits so gebaut.
5. **`prefers-reduced-motion` (Web) / `MediaQuery.disableAnimations`
   (Flutter) werden befolgt:** Endzustand ohne Bewegung, Loops halten sofort
   an. Web: `html[data-motion="on"]` steuert das schon (gesetzt vom
   bestehenden `MotionToggle`, der auch `prefers-reduced-motion` abfragt) —
   jede neue CSS-Regel für Bewegung wird unter `html[data-motion="on"] …`
   geschrieben, nie unbedingt. Flutter: jeder neue Baustein prüft
   `motionAllowed(context)` aus `motion.dart`, genau wie die bestehenden.
6. **Tokens:** Farben und Radien kommen aus dem Design System
   (`boerdesnack24-design`-Skill, `app_tokens.dart`, Lovables
   `src/styles.css` `:root`). Bewegungswerte (Dauern, Kurven,
   Scroll-Konstanten) kommen ausschließlich aus `motion-tokens.css` in
   diesem Ordner. **Keine neuen Dauern, Kurven oder Farben erfinden** —
   fehlt ein Wert, wird er hier ergänzt und gegen den Bestand zitiert
   (siehe die Kopfzeile von `motion-tokens.css`), nicht ad hoc im
   Komponenten-Code gesetzt.
7. **Hover-Inhalte sind per Tap erreichbar, alles ist per Tastatur
   bedienbar.** Web: `:focus-visible` ist bereits definiert
   (`src/styles.css`, Outline `--gold-text`/`--gold` je nach Fläche) — neue
   interaktive Elemente dürfen diesen Fokusring nicht überschreiben. Ein
   Hover-Effekt ohne Tastatur-/Touch-Äquivalent ist ein Befund, kein
   Feinschliff.
8. **Performance:** 60 fps auf Mittelklasse-Android, `CLS 0`. Deshalb Regel 1
   (nur compositor-günstige Eigenschaften) und Regel 6 der Sperrliste in
   `docs/scrolling-funktionen.md` Abschnitt 3 („klebende Höhen werden
   gemessen, nicht gerechnet").

## 2. Der Hook `useScrollProgress` (Web)

Es gibt noch keinen Hook dieses Namens im Lovable-Projekt. Er wird **auf**
den bestehenden Primitiven aufgebaut, nicht daneben:

```ts
// src/hooks/useScrollProgress.ts (im Lovable-Projekt anzulegen)
import { useEffect, useRef } from "react";
import { prog, subscribe } from "@/lib/scroll";

/**
 * Liefert den scrollgebundenen Fortschritt einer Section (0…1, ENTRY/TAIL
 * aus motion-tokens.css) als CSS-Variable `--p` auf dem beobachteten
 * Element — keine React-Re-Renders pro Scroll-Frame. So machen es die
 * bestehenden Bausteine bereits (ShareScene: `el.style.setProperty("--w", …)`,
 * SceneMotion: `el.style.setProperty("--transition", …)`); dieser Hook macht
 * dasselbe Muster wiederverwendbar, statt es in jeder Komponente neu zu
 * schreiben.
 *
 * Glättung per Lerp (--motion-lerp, Default 0.12) für Bausteine, die eine
 * kontinuierliche Bewegung zeigen (Parallax, Zoomfahrt) statt eines
 * diskreten Zustands (dafür bleibt `phase()` + `Reveal` zuständig).
 */
export function useScrollProgress(
  ref: React.RefObject<HTMLElement>,
  { lerp = 0.12, cssVar = "--p" }: { lerp?: number; cssVar?: string } = {},
) {
  const smoothed = useRef(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    return subscribe({
      frame: () => {
        const raw = prog(el); // wiederverwendet ENTRY=0.62/TAIL=0.26, keine Neuberechnung
        const moving = document.documentElement.dataset["motion"] === "on";
        smoothed.current = moving
          ? smoothed.current + (raw - smoothed.current) * lerp
          : raw; // ohne Bewegung: Endzustand sofort, kein Nachlaufen
        el.style.setProperty(cssVar, smoothed.current.toFixed(4));
      },
    });
  }, [ref, lerp, cssVar]);
}
```

Verwendung in einer Komponente (Beispiel, kein neuer Baustein):

```tsx
const ref = useRef<HTMLDivElement>(null);
useScrollProgress(ref);
return <div ref={ref} className="my-parallax-layer" />;
```

```css
html[data-motion="on"] .my-parallax-layer {
  transform: translateY(calc((0.5 - var(--p, 0)) * var(--motion-parallax-amplitude) * -1));
}
```

**Warum kein Re-Render-basierter Hook (`return progress: number`):** Ein
`useState`-Update bei jedem `requestAnimationFrame`-Tick würde die ganze
Komponente (und ihre Kinder) 60-mal pro Sekunde neu rendern. Die
CSS-Variable ist der Weg, der schon im Bestand steht und der 60 fps auf
Mittelklasse-Android einhält (Regel 8).

## 3. Muster-Katalog: Werkzeug je Muster

Der Katalog selbst (Nummern, Namen, Flächen, Sperren) steht in
`docs/scrolling-funktionen.md` Abschnitt 4. Diese Tabelle ergänzt nur die
Spalte „mit welchem Werkzeug":

| # | Muster | Web-Werkzeug | Flutter-Werkzeug |
|---|---|---|---|
| 01 | Reveal | `Reveal.tsx` (IntersectionObserver, unverändert) | `Reveal` (`motion.dart`) |
| 02 | Stagger | `Reveal`-`delay`-Prop | `Reveal(index:)` |
| 03 | Zähler | `motion`-Paket, `animate()` auf einen Zahlenwert, **nicht** scrollgebunden | `CountUp` |
| 04 | Text-Highlight | `useScrollProgress` (kontinuierlich, kein `motion`-Paket) | — (nur Landingpage) |
| 05 | Mikrointeraktion | `motion`-Paket (`whileTap`, `whileHover`) **oder** die bestehenden CSS-Regeln in `styles.css` (`:active { scale(0.98) }`) — nicht beides parallel für dieselbe Fläche | `Pressable` |
| 06 | Sticky-Bühne | bestehend (`Stage`/`Sequence`, `position: sticky` + `phase()`) | — (nur Landingpage) |
| 07 | Horizontale Sequenz | — (nur App) | `ScrollLinkedStrip` |
| 08 | Kartenstapel | — (nur App) | `CardStack` |
| 09 | Szenen-Farbwechsel | bestehend (`SceneColorTransition`, `useScrollProgress` künftig statt eigenem `subscribe`-Aufruf) | — |
| 10 | Zoomfahrt | bestehend (`MachineZoom`) | — |
| 11 | Parallax-Tiefe | `useScrollProgress` | `ParallaxLayer` |
| 12 | Maskenreveal | `clip-path` + `Reveal`-Beobachter (bestehend, gesperrt) | — |
| 13 | Produktwechsel | — (aktuell nur App; `ProductFocus`/`ProductCards` bei Lovable bleiben gesperrt) | `FocusCarousel` |
| 15 | Objekt-Label | zusammen mit 13 | zusammen mit 13 |
| 17 | Physisch → digital | bestehend (`PhysicalDigital`) | — |
| 18 | Anteilsdarstellung | bestehend (`ShareScene`) | — |

Muster 14 (Produkt 360°) und 16 (Tageszeit-Erzählung) sind gesperrt (siehe
`scrolling-funktionen.md`) und haben deshalb noch kein Werkzeug zugeordnet.

## 4. `motion-tokens.css`

Liegt neben dieser Datei (`motion/motion-tokens.css`). Enthält ausschließlich
Bewegungswerte, jeder mit Zitat der Bestandsstelle, aus der er stammt. Bei
einem Web-Auftrag wird der `:root`-Block als Ergänzung zu Lovables
bestehendem `:root` in `src/styles.css` mitgegeben (nicht als neue,
zusätzliche CSS-Datei — es gibt dort noch keinen `@import`-Mechanismus für
mehrere Token-Dateien, und einen zweiten einzuführen wäre eine
Architekturänderung, keine Bewegungsaufgabe).

## 5. Bekannte Abweichung Web/App: Stagger-Obergrenze

Web (`Reveal.tsx`) erlaubt Staffelung bis Index 8 (Kommentar in
`scrolling-funktionen.md`: „bis zu acht Elemente"). Flutter (`motion.dart`,
Zeile 64) begrenzt auf Index 4, also fünf Stufen. Das ist keine
Dokumentationslücke, sondern eine tatsächliche Differenz im Code beider
Plattformen, Stand 27.09.2026. Sie wird hier benannt, nicht still
vereinheitlicht — welche Grenze richtig ist, hängt von der längsten Liste ab,
die je Plattform tatsächlich vorkommt (App: höchstens vier Herausforderungen
je Bildschirm; Web: die Vorteilsliste hatte acht Einträge, wird aber seit dem
26.09. als ein Block eingeblendet, siehe `scrolling-funktionen.md`
Abschnitt 4 — die Web-Obergrenze von acht wird dadurch aktuell nirgends mehr
ausgereizt). Vorschlag, keine Festlegung: die Web-Grenze bei nächster
Gelegenheit ebenfalls auf vier absenken, damit ein Wert gilt.

## 6. Abnahme je Umsetzung

Für jedes umgesetzte Muster gilt, was in `docs/scrolling-funktionen.md`
Abschnitt 3 als feste Grenze steht, zusätzlich:

- [ ] Nur die fünf erlaubten CSS-Eigenschaften animiert (Regel 1)
- [ ] Kein zweiter Scroll-Listener entstanden (Regel 2) — geprüft per
      `rg -n "addEventListener\(.scroll." src` im Lovable-Projekt bzw.
      `rg -n "ScrollController\(\)" apps/mobile/lib` für neue Controller
      außerhalb von `motion.dart`
- [ ] `prefers-reduced-motion`/`disableAnimations` zeigt den Endzustand
      sofort, ohne Nachlaufen
- [ ] Kontrast der ein-/ausgeblendeten Zustände geprüft (Web:
      manuell/Playwright; App: `tool/screens/screens_test.dart`)
- [ ] Keine neue Dauer/Kurve/Farbe im Komponenten-Code — alles aus
      `motion-tokens.css` bzw. dem Design System referenziert
