# Bördesnack24 — Motion & Scroll System v1.0

Verbindliche Spezifikation für Animationen, Scroll-Effekte und Micro-Interactions auf
**Website** (Next.js / React) und **App** (Flutter). Gedacht als Übergabe an
**Claude Code** und **Lovable**: Jedes Pattern hat eine ID (M01–M11), eine technische
Spezifikation und einen fertigen Prompt.

Dateien:
- `motion/MOTION.md` — diese Spezifikation (Single Source of Truth)
- `motion/motion-tokens.css` — Motion-Tokens (CSS Custom Properties)
- `Motion System.dc.html` — Live-Bibliothek mit allen Patterns zum Ausprobieren

Referenzen (vom Nutzer geliefert, Screen-Recordings 27.09.2026): Portfolio mit
Pill-Nav & Blob-Wortmarke · Getränke-Shop mit Farb-Panels & Text-auf-Pfad ·
Studio-Footer mit Marquee-Wortmarke & Back-to-Top · Möbel-Launch mit Scroll-Storytelling ·
Bier-Dosen-Karussell · Vitamin-Produkt mit gepinntem Produkt & Szenenwechsel.
**Übernommen wird das Bewegungsprinzip — nicht Farben, Inhalte oder Illustrationen.**
Alles wird in Gold / Ink / Creme / Grün übersetzt (keine Blau-/Lila-Verläufe).

> **Vor jeder Umsetzung `motion/ABWEICHUNGEN.md` lesen** (Stand 27.09.2026). Dort stehen
> Kontrastwerte, die WCAG verfehlen, Beispieltexte mit Aussagen, die es noch nicht gibt, und
> gesperrte Patterns. Ein ⚠️ in einem Prompt verweist auf den jeweiligen Punkt. Geändert wurde
> in dieser Datei nur: der alte Claim (Entscheidung vom 27.09.2026) und die Kontaktadresse.

---

## 0. Master-Prompt (immer zuerst mitgeben)

<!-- prompt:MASTER -->
```text
Du arbeitest am Bördesnack24-Projekt (24/7-Snackautomaten, Magdeburger Börde).
Lies zuerst motion/MOTION.md und motion/motion-tokens.css vollständig — das ist die
verbindliche Motion-Spezifikation. Halte Dich an die globalen Regeln aus Abschnitt 1:

- Nur transform, opacity, filter, clip-path und background-color animieren. Nie width/height/top/left.
- Scroll-Effekte über EINEN gemeinsamen Scroll-Progress (0..1 pro Section, per rAF,
  lerp 0.12) — kein Scroll-Listener pro Element, keine GSAP-/ScrollTrigger-Abhängigkeit.
- Web: React + Next.js (Lovable: React + Vite + Tailwind). Für Enter/Exit/Layout-
  Animationen das Paket "motion" (Framer Motion) verwenden, für Scroll den Hook
  useScrollProgress aus Abschnitt 2.
- App: Flutter, nur Bordmittel (AnimationController, ScrollController,
  CustomScrollView/Slivers, HapticFeedback).
- prefers-reduced-motion (Web) bzw. MediaQuery.disableAnimations (Flutter) respektieren:
  Endzustand ohne Bewegung zeigen, Loops stoppen.
- Tokens: Farben/Radien aus dem Design System, Motion-Werte aus motion-tokens.css.
  Keine neuen Easings, Dauern oder Farben erfinden.
- Hover-Inhalte müssen auf Touch per Tap erreichbar sein; alles per Tastatur bedienbar.
- Performance: 60 fps auf Mittelklasse-Android, kein Layout Shift (CLS 0).

Setze jetzt folgendes Pattern um: [Pattern-ID + Prompt aus MOTION.md einfügen]
Ziel-Screen/Section: [z. B. Landingpage → Sortiment]
Liefere: Komponente(n), kurze Erklärung, wie reduced-motion gelöst ist.
```

---

## 1. Globale Regeln

1. **Eine Hero-Bewegung pro Viewport.** Nie zwei scroll-gescrubbte Patterns gleichzeitig
   sichtbar. Micro-Interactions (M10, M11) sind davon ausgenommen.
2. **Scroll scrubbt, er springt nicht.** Scroll-gekoppelte Werte laufen über einen
   geglätteten Progress (`lerp 0.12`). Diskrete Zustände (aktive Szene, aktiver Nav-Punkt)
   wechseln mit `--dur-slow` + `--ease-in-out`.
3. **Pinned Sections** (`position: sticky`) haben feste Höhen: 2 Beats = `200vh`,
   3–4 Szenen = `400vh`. Mobile (< 768px): Höhe × 0.75.
4. **Loops** nur dekorativ (Marquee M09), pausieren bei Hover/Focus, bei
   `document.hidden` und bei reduced-motion.
5. **Reduced Motion:** Scroll-Transforms → 0, Reveals sofort sichtbar, Karussell ohne
   Skew/Blur, Marquee statisch. Inhalte bleiben vollständig lesbar.
6. **Einmaligkeit:** Intro-Animationen (M01) laufen einmal pro Session
   (`sessionStorage 'bs24-intro'`).
7. **Farbe:** Szenenwechsel nur zwischen den vier Flächen Creme `#FBF8F4`, Weiß,
   Ink `#202321`, Gold `#FDC102` (plus Gold-Tints 50–200). Grün `#5C9A3F` nur als Akzent.
8. **Typo in Bewegung:** Display immer Bricolage Grotesque 800, Tracking −0.03em.

### Tokens (Kurzfassung)

| Token | Wert | Einsatz |
|---|---|---|
| `--ease-out` | cubic-bezier(.22,1,.36,1) | Standard |
| `--ease-in-out` | cubic-bezier(.65,0,.35,1) | Szenen, Farbflächen |
| `--ease-bounce` | cubic-bezier(.34,1.56,.64,1) | Pops, Add, Toast |
| `--ease-snap` | cubic-bezier(.2,.9,.1,1) | Nav-Indikator |
| `--dur-fast / base / slow` | 140 / 220 / 420ms | Press / Hover / Panels |
| `--dur-reveal / hero` | 700 / 1200ms | Headlines / Intro |
| `--stagger-letter / word / item` | 35 / 60 / 80ms | Staffelung |
| `--tilt-max / skew-max` | 8deg / 6deg | Karussell, Cards |
| `--magnet-strength / radius` | 0.35 / 120px | M10 |

Flutter-Mapping: `Curves.easeOutQuint ≈ --ease-out`, `Cubic(0.34,1.56,0.64,1)` für
Bounce, `Cubic(0.2,0.9,0.1,1)` für Snap; Dauern identisch als `Duration(milliseconds: …)`.

---

## 2. Basis-Bausteine (einmal pro Codebase anlegen)

### Web — `useScrollProgress`
```tsx
// hooks/useScrollProgress.ts
import { useEffect, useRef, useState } from "react";
export function useScrollProgress<T extends HTMLElement>(lerp = 0.12) {
  const ref = useRef<T>(null);
  const [p, setP] = useState(0);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const rm = matchMedia("(prefers-reduced-motion: reduce)").matches;
    let cur = 0, raf = 0;
    const target = () => {
      const r = el.getBoundingClientRect();
      const d = r.height - innerHeight;           // für sticky Sections
      return Math.min(1, Math.max(0, d > 0 ? -r.top / d : 1 - r.top / innerHeight));
    };
    const tick = () => {
      const t = target();
      cur = rm ? t : cur + (t - cur) * lerp;
      el.style.setProperty("--p", cur.toFixed(4));
      setP(cur);
      raf = Math.abs(t - cur) > 0.0005 ? requestAnimationFrame(tick) : 0;
    };
    const kick = () => { if (!raf) raf = requestAnimationFrame(tick); };
    addEventListener("scroll", kick, { passive: true });
    addEventListener("resize", kick); kick();
    return () => { removeEventListener("scroll", kick); removeEventListener("resize", kick); cancelAnimationFrame(raf); };
  }, [lerp]);
  return { ref, p };
}
```
Styles lesen `var(--p)` direkt: `transform: translateY(calc(var(--p) * -40px))`.
State `p` nur für diskrete Wechsel nutzen (aktive Szene), nicht für jede Transform.

### Web — Reveal (Einblenden beim Eintritt)
```tsx
<motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.7, ease: [0.22,1,0.36,1] }} />
```

### Flutter — Scroll-Progress
```dart
// Progress einer Section innerhalb eines CustomScrollView
double sectionProgress(ScrollController c, double start, double length) =>
    ((c.offset - start) / length).clamp(0.0, 1.0);
// In einem AnimatedBuilder(animation: controller, builder: …) konsumieren.
final reduce = MediaQuery.of(context).disableAnimations;
```

---

## 3. Pattern-Katalog

Legende Einsatz: **W** = Website · **A** = App · **W+A** = beide.

### M01 — Kinetische Wortmarke · W+A
**Referenz:** große Headline, deren Buchstaben einzeln einlaufen und die beim Scrollen
auf volle Breite wächst („FLAVO → FLAVORS"), Name hinter organischer Blob-Maske.
**Einsatz:** Website-Hero („Bördesnack24" / „Versorgung vor Ort. Wert für den Ort."), App-Splash.
**Spezifikation:**
- Text in Buchstaben-Spans splitten (`aria-label` am Wrapper, Spans `aria-hidden`).
- Intro: jeder Buchstabe `translateY(110%) rotate(6deg) → 0`, `--dur-reveal`,
  `--ease-out`, Stagger `--stagger-letter`. Container `overflow: hidden` (Maskenkante).
- Scroll (Hero-Section 200vh sticky): `scale(1 + p*0.35)`, `letter-spacing` NICHT
  animieren — stattdessen Buchstaben per `translateX((i - mid) * p * 0.6vw)` spreizen.
- Farbakzent: „24" in Gold; ab p > 0.6 wechselt Hintergrund Creme → Ink (`--ease-in-out`).
- App-Splash: nur Intro, danach 300ms Hold, dann Crossfade in Home.

<!-- prompt:M01 -->
```text
Pattern M01 „Kinetische Wortmarke" aus motion/MOTION.md umsetzen.
Baue eine Hero-Section (200vh, Inhalt sticky 100vh) mit der Wortmarke „Bördesnack24"
in Bricolage Grotesque 800, clamp(64px, 16vw, 240px), Tracking -0.03em, "24" in #FDC102.
Intro einmal pro Session: Buchstaben einzeln von translateY(110%) rotate(6deg) auf 0,
700ms, cubic-bezier(.22,1,.36,1), 35ms Stagger, Wrapper overflow:hidden.
Scroll (useScrollProgress): Wortmarke scale(1 + p*0.35), Buchstaben per translateX
((i - mitte) * p * 0.6vw) spreizen, ab p>0.6 Hintergrund #FBF8F4 → #202321 und Text → Creme.
Screenreader: aria-label="Bördesnack24" am Wrapper, Buchstaben aria-hidden.
Reduced motion: statische Wortmarke, keine Spreizung, Hintergrund bleibt Creme.
Flutter-Variante für den Splash: gleiche Staffelung mit AnimationController + Interval pro Buchstabe.
```

### M02 — Scroll-Spy Pill-Nav · W (A: Segment-Tabs)
**Referenz:** schwebende Pill-Navigation oben mittig, aktiver Abschnitt als dunkle Pill,
die beim Scrollen zum nächsten Punkt gleitet.
**Einsatz:** Landingpage-Nav, lange Info-Seiten (Standorte, FAQ). App: Sortiment-Kategorien.
**Spezifikation:**
- Nav `position: fixed; top: 16px`, Creme 80 % + `backdrop-filter: blur(12px)`,
  `--radius-pill`, `--shadow-sm`.
- Aktiver Punkt über `IntersectionObserver` (rootMargin `-45% 0px -50% 0px`).
- Indikator ist EIN absolut positioniertes Element (Ink), das per
  `transform: translateX(x)` + `width` via `motion` `layoutId` gleitet, `--ease-snap`, 420ms.
- Klick → `scrollTo({behavior:'smooth'})`; `aria-current="true"` am aktiven Link.
- Mobile < 768px: Nav wird horizontal scrollbar, aktiver Punkt wird in Sicht gescrollt
  (`scrollLeft`, nicht scrollIntoView).
- App: `TabBar` mit eigenem Indicator (Pill, Gold), Tab-Wechsel synchron zur Liste.

<!-- prompt:M02 -->
```text
Pattern M02 „Scroll-Spy Pill-Nav" aus motion/MOTION.md umsetzen.
Fixierte Pill-Navigation oben mittig (top 16px), Hintergrund rgba(251,248,244,.8) mit
backdrop-filter: blur(12px), Radius 999px, weicher Schatten. Links: Automaten, Sortiment,
So geht's, Standorte, FAQ. Aktiver Abschnitt per IntersectionObserver
(rootMargin "-45% 0px -50% 0px"). Ein einziger Ink-Indikator (#202321, Text Creme)
gleitet mit motion layoutId zum aktiven Link, 420ms cubic-bezier(.2,.9,.1,1).
Klick scrollt smooth zur Section, aria-current am aktiven Link, fokussierbar mit
sichtbarem 3px Gold-Fokusring. Mobile: horizontal scrollbar, aktiven Link per scrollLeft
zentrieren. Reduced motion: Indikator springt ohne Gleiten.
```

### M03 — Sortiments-Panels mit Hover-Reveal · W+A
**Referenz:** vollflächige Farb-Spalten nebeneinander, Produkt mittig; beim Hover
erscheinen Illustrationen um das Produkt und ein „Produkt entdecken"-CTA fährt ein.
**Einsatz:** Sortiment (Snacks · Kaltgetränke · Heißgetränke · Eis).
**Spezifikation:**
- 4 Panels als Grid; Flächen: Gold `#FDC102`, Ink `#202321`, Gold-100 `#FFEDAF`, Grün `#5C9A3F`.
- Hover/Focus-within: aktives Panel `flex-grow 1 → 1.6` (via Grid-Template-Transition
  oder `motion` layout), Produktbild `scale(1.06) rotate(-3deg)`, Deko-Elemente
  (Börde-Karte, Ring-Bildzeichen) poppen mit `--ease-bounce` + `--stagger-item` von scale 0.
- CTA-Pill „Sortiment ansehen" + runder „+"-Button fahren von `translateY(16px)` +
  opacity 0 ein (`--dur-slow`).
- Touch: erstes Tap öffnet Panel, zweites Tap folgt CTA. Mobile < 768px: Panels vertikal
  gestapelt, aktives Panel per Scroll-Position (Mitte des Viewports).

<!-- prompt:M03 -->
```text
⚠️ Vor Umsetzung motion/ABWEICHUNGEN.md, Punkt A-3, R-2 beachten.
Pattern M03 „Sortiments-Panels mit Hover-Reveal" aus motion/MOTION.md umsetzen.
4 nebeneinanderliegende, volle Höhe (min 520px) Panels: Snacks (#FDC102, Text Ink),
Kaltgetränke (#202321, Text Creme), Heißgetränke (#FFEDAF, Text Ink), Eis (#5C9A3F, Text Creme).
Oben links Kategorie-Name (Bricolage 800) + Meta "ab 1,50 €", mittig Produktbild (Platzhalter).
Hover oder focus-within: Panel wächst (grid-template-columns 1fr → 1.6fr, 420ms
cubic-bezier(.22,1,.36,1)), Produkt scale(1.06) rotate(-3deg), 3 Deko-Elemente
(Börde-Karte, Ring-Bildzeichen aus assets/) poppen gestaffelt (80ms) mit
cubic-bezier(.34,1.56,.64,1) von scale 0 auf 1. CTA-Pill "Sortiment ansehen" + runder
"+"-Button fahren von translateY(16px)/opacity 0 ein.
Touch: 1. Tap öffnet, 2. Tap navigiert. Mobile <768px: vertikal gestapelt.
Reduced motion: nur Farbwechsel/Opacity, kein Wachsen und kein Pop.
```

### M04 — Text auf Pfad · W
**Referenz:** Satz läuft auf einer geschwungenen Linie durchs Bild und wandert mit dem
Scroll („You would drink it every day").
**Einsatz:** Übergang zwischen Sortiment und App-Teaser, z. B. „Versorgung vor Ort. Wert für den Ort."
**Spezifikation:**
- SVG `<path>` (weiche S-Kurve, volle Breite) + `<textPath>`; Pfad selbst unsichtbar.
- `startOffset` = `100% - p * 140%` (Text läuft von rechts nach links durch).
- Wörter alternieren Ink / Gold-600; Schrift Bricolage 800, 6–9vw.
- Section 200vh sticky. Mobile: Kurve flacher, Schrift 12vw.
- Screenreader: Satz zusätzlich als visuell versteckte `<p>`, SVG `aria-hidden`.

<!-- prompt:M04 -->
```text
⚠️ Vor Umsetzung motion/ABWEICHUNGEN.md, Punkt A-1 beachten.
Pattern M04 „Text auf Pfad" aus motion/MOTION.md umsetzen.
Sticky Section (200vh, Creme #FBF8F4). Vollbreites SVG mit unsichtbarer S-Kurve
(viewBox 0 0 1440 600) und <textPath>: "Versorgung vor Ort. Wert für den Ort. Versorgung vor Ort. Wert für den Ort."
in Bricolage Grotesque 800, ca. 8vw, Wörter abwechselnd #202321 und #DBA200.
startOffset per useScrollProgress: (100 - p*140)%. Glättung lerp 0.12.
SVG aria-hidden, Satz zusätzlich als sr-only <p>. Mobile: flachere Kurve, 12vw.
Reduced motion: Text statisch mittig auf dem Pfad (startOffset 10%).
```

### M05 — Scroll-gescrubbte Text-Hervorhebung · W+A
**Referenz:** Absatz, dessen Wörter beim Scrollen von grau zu voller Farbe „aufleuchten"
(„The world's first 8-millimetre …").
**Einsatz:** Markenversprechen, „Warum Bördesnack24", App-Onboarding.
**Spezifikation:**
- Absatz in Wort-Spans; Wort i ist aktiv, wenn `p > i / n`.
- Inaktiv: Farbe `--text-faint` (hell) bzw. `--neutral-700` (auf Ink); aktiv:
  `--text-strong` bzw. Creme. Übergang pro Wort `--dur-base`.
- Ein Schlüsselwort (z. B. „Börde") wird aktiv Gold.
- Section 200vh sticky, Text max. 22ch pro Zeile, 40–64px.
- App: gleiche Logik über `ScrollController` in einer PageView-Onboarding-Seite.

<!-- prompt:M05 -->
```text
⚠️ Vor Umsetzung motion/ABWEICHUNGEN.md, Punkt A-2, R-3 beachten.
Pattern M05 „Scroll-gescrubbte Text-Hervorhebung" aus motion/MOTION.md umsetzen.
Sticky Section 200vh auf Ink (#202321). Ein Absatz (Bricolage 700, clamp(32px,4.4vw,64px),
max-width 22ch): "Nach der Spätschicht hat hier nichts mehr offen. Außer dem Automaten am
Bahnhof. Frisch befüllt, mitten in der Börde." In Wort-Spans splitten; Wort i wird aktiv,
wenn Scroll-Progress p > i/n. Inaktiv #4C4842, aktiv #FBF8F4, "Börde" aktiv #FDC102;
color-Transition 220ms. Kein Layout-Shift. Absatz bleibt für Screenreader ein normaler Text.
Reduced motion: alle Wörter sofort aktiv.
Flutter: RichText mit TextSpans, Farbe je Span aus sectionProgress().
```

### M06 — Gepinntes Produkt · Szenenwechsel · W
**Referenz:** Produkt bleibt mittig stehen, rundherum wechseln Hintergrundfarbe,
Deko-Objekte und Benefit-Listen; eine Outline-Liste links zeigt die aktive Zeile gefüllt.
**Einsatz:** „So funktioniert's" (Automat finden → Auswählen → Bezahlen → Genießen)
oder Automaten-Features.
**Spezifikation:**
- Section 400vh, Stage sticky 100vh; n Szenen, aktive Szene `floor(p * n)`.
- Hintergrund pro Szene: Gold → Gold-100 → Creme → Ink (Crossfade, `--dur-slow`, `--ease-in-out`).
- Links: Liste der Szenen-Titel, inaktiv als Outline-Text (`-webkit-text-stroke: 1.5px`,
  `color: transparent`), aktiv gefüllt.
- Mitte: Produkt/Automat, leichte Rotation `rotate((p-0.5) * 10deg)` + Float `translateY`.
- Rechts: nummerierte Benefit-Liste der aktiven Szene, Zeilen staffeln ein (`--stagger-item`).
- Fortschritts-Dots rechts, klickbar.
- Mobile: Liste oben als Chips, Benefits unter dem Produkt.

<!-- prompt:M06 -->
```text
Pattern M06 „Gepinntes Produkt · Szenenwechsel" aus motion/MOTION.md umsetzen.
Section 400vh, Stage sticky 100vh, 4 Szenen: "Finden", "Wählen", "Bezahlen", "Genießen".
Aktive Szene = floor(p*4) aus useScrollProgress. Hintergrund crossfadet pro Szene
#FDC102 → #FFEDAF → #FBF8F4 → #202321 (420ms cubic-bezier(.65,0,.35,1), Textfarbe passend).
Links: Szenen-Titel untereinander, Bricolage 800 clamp(40px,5vw,80px); inaktiv als Outline
(-webkit-text-stroke 1.5px currentColor, color transparent), aktiv gefüllt.
Mitte: Automaten-Bild (Platzhalter), rotate((p-0.5)*10deg) und sanftes Schweben.
Rechts: nummerierte Liste (01–03) der aktiven Szene, Zeilen staffeln mit 80ms ein.
Rechts außen klickbare Fortschritts-Dots. Mobile: Titel als Chips oben, Liste unter Bild.
Reduced motion: Szenen als normale, untereinander gestapelte Blöcke ohne Pinning.
```

### M07 — Geneigtes Produkt-Karussell · W+A
**Referenz:** Dosen in einer Reihe, schräg gestellt, laufen beim Scrollen/Wischen
seitwärts; bei Tempo leichte Bewegungsunschärfe und stärkere Neigung.
**Einsatz:** „Beliebt am Automaten", App-Home „Heute beliebt".
**Spezifikation:**
- Horizontale Reihe, `translateX(-p * (trackWidth - viewport))` (Web: vertikaler Scroll
  wird in horizontale Bewegung übersetzt; Section 300vh sticky).
- Jede Karte Grundneigung abwechselnd ±`--tilt-max`; zusätzlich Skew aus Scroll-Velocity
  `clamp(v * 0.02, -6deg, 6deg)`, zurückfedernd mit lerp.
- Bei |v| hoch: `filter: blur(min(|v|*0.004, 2px))` — nur Desktop.
- Drag/Wisch zusätzlich möglich (`motion` drag="x", Trägheit).
- App: `PageView` mit `viewportFraction 0.62`, Neigung aus page-Differenz.

<!-- prompt:M07 -->
```text
⚠️ Vor Umsetzung motion/ABWEICHUNGEN.md, Punkt R-4 beachten.
Pattern M07 „Geneigtes Produkt-Karussell" aus motion/MOTION.md umsetzen.
Section 300vh, Stage sticky 100vh, weißer Grund, große Headline oben "Heute beliebt."
Darunter eine horizontale Reihe von 8 Produktkarten (Platzhalterbilder, 260×380, Radius 18px),
die per useScrollProgress seitwärts laufen: translateX(-p * (trackWidth - viewportWidth)).
Grundneigung abwechselnd rotate(±8deg). Scroll-Velocity v (px/Frame) erzeugt zusätzlich
skewX(clamp(v*0.02, -6deg, 6deg)), mit lerp 0.12 zurück auf 0; Desktop bei hohem Tempo
filter blur bis max 2px. Zusätzlich per Maus/Touch ziehbar (motion drag="x").
Karten sind Links (Tastatur: Tab scrollt Karte in Sicht). Reduced motion: normale,
horizontal scrollbare Liste ohne Neigung/Blur.
Flutter: PageView(viewportFraction: 0.62), Transform.rotate nach (page - index).
```

### M08 — Schwebende Bewertungs-Karten · W
**Referenz:** Testimonial-Karten leicht verdreht, verteilt um ein Produkt, bewegen sich
mit unterschiedlichen Geschwindigkeiten (Parallax).
**Einsatz:** Bewertungen / „Das sagen Pendler".
**Spezifikation:**
- 4–6 Karten absolut verteilt, je eigene Tiefe `d ∈ [0.3, 1]`:
  `translateY((0.5 - p) * 160px * d) rotate(r)`, r ∈ ±`--tilt-max`.
- Hover: Karte dreht auf 0deg, hebt sich (`--hover-lift`, `--shadow-lg`), z-index nach vorn.
- Mobile: Karten als horizontale Snap-Liste, ohne Parallax.

<!-- prompt:M08 -->
```text
⚠️ Vor Umsetzung motion/ABWEICHUNGEN.md, Punkt R-1 (gesperrt) beachten.
Pattern M08 „Schwebende Bewertungs-Karten" aus motion/MOTION.md umsetzen.
Section (min 100vh, Creme) mit Headline "Das sagt die Börde." links oben.
5 Bewertungskarten (weiß, 1px Border #E2DBCF, Radius 18px, Sterne in #FDC102, Zitat, Name + Ort)
absolut verteilt, jede mit Tiefe d (0.3–1) und Grundrotation ±8deg.
Parallax über useScrollProgress: translateY((0.5 - p) * 160px * d).
Hover/Focus: Rotation auf 0, translateY(-3px), stärkerer Schatten, nach vorn (220ms).
Mobile <768px: horizontale scroll-snap-Liste ohne Parallax. Reduced motion: statisches Raster.
```

### M09 — Marquee-Wortmarke im Footer · W (A: Ticker)
**Referenz:** riesige Wortmarke läuft endlos durch den Footer, getrennt durch einen
weißen Punkt/Blob; Laufband mit Claims zwischen Sektionen.
**Einsatz:** Footer „Bördesnack24 ● Versorgung vor Ort ●", Ticker mit Standorten.
**Spezifikation:**
- Zwei identische Tracks hintereinander, `translateX(0 → -50%)`, linear, `--marquee-duration`.
- Richtung und Tempo reagieren auf Scroll: Scroll nach oben kehrt Richtung um,
  Velocity erhöht Tempo kurzzeitig (max ×3), federt zurück.
- Trenner: Ring-Bildzeichen oder Gold-Punkt, dreht sich pro Durchlauf 360°.
- Hover über Footer: Marquee verlangsamt auf 0.3×; Pause bei Focus und `document.hidden`.
- Ticker-Variante (48px Höhe, Gold auf Ink, Uppercase-frei, 16px): Standorte
  „Wanzleben · Oschersleben · Haldensleben · Eilsleben".
- App: nur Ticker, max. einmal pro Screen.

<!-- prompt:M09 -->
```text
⚠️ Vor Umsetzung motion/ABWEICHUNGEN.md, Punkt R-5 beachten.
Pattern M09 „Marquee-Wortmarke" aus motion/MOTION.md umsetzen.
Footer auf Ink (#202321). Oben: Kontakt-Headline "Fragen, Wünsche, neuer Standort?"
und E-Mail als Copy-Pill (Pattern M11). Unten: endlose Marquee
"Bördesnack24 ● Versorgung vor Ort. Wert für den Ort. ●" in Bricolage 800, clamp(80px,14vw,220px),
Creme, "●" in #FDC102. Zwei identische Tracks, translateX 0 → -50%, linear, 38s.
Scroll-Richtung nach oben kehrt die Laufrichtung um, Scroll-Tempo beschleunigt kurz (max 3×,
lerp zurück). Hover verlangsamt auf 0.3×; Pause bei focus-within und document.hidden.
Marquee aria-hidden, Text zusätzlich einmal sr-only. Reduced motion: statisch, eine Zeile.
Zusätzlich Ticker-Variante (48px, Gold-Text auf Ink): Standorte der Börde.
```

### M10 — Magnetischer Back-to-Top · W
**Referenz:** großer runder Button mit Pfeil im Footer, zieht sich zum Cursor und
füllt sich beim Hover.
**Einsatz:** Footer, lange Seiten.
**Spezifikation:**
- Kreis 96px (Desktop) / 56px (Mobile), Creme-Tint, Pfeil Gold-600.
- Innerhalb `--magnet-radius`: `translate(dx * --magnet-strength, dy * --magnet-strength)`,
  Pfeil zusätzlich × 1.5; Rückkehr mit `--ease-bounce`, 420ms.
- Hover: Fläche füllt sich Gold (Clip-Circle von unten), Pfeil wird Ink und
  läuft einmal nach oben raus und von unten wieder rein.
- Klick: smooth scroll nach oben; nur auf Pointer-Geräten magnetisch.

<!-- prompt:M10 -->
```text
⚠️ Vor Umsetzung motion/ABWEICHUNGEN.md, Punkt A-4 beachten.
Pattern M10 „Magnetischer Back-to-Top" aus motion/MOTION.md umsetzen.
Runder Button (96px, Mobile 56px), Hintergrund #F4EFE8, Pfeil-nach-oben in #DBA200,
aria-label "Nach oben". Nur bei (hover:hover) and (pointer:fine): innerhalb 120px Radius
folgt der Button dem Cursor mit translate(dx*0.35, dy*0.35), der Pfeil mit Faktor 0.5;
beim Verlassen zurück mit 420ms cubic-bezier(.34,1.56,.64,1).
Hover: Gold-Füllung (#FDC102) wächst als clip-path circle von unten, Pfeil wird #202321 und
fährt einmal oben raus und unten wieder rein. Klick: window.scrollTo({top:0, behavior:'smooth'}).
Fokus: 3px Gold-Ring. Reduced motion: kein Magnet, nur Farbwechsel.
```

### M11 — Copy-Pill · W+A
**Referenz:** E-Mail-Adresse in einer Pill mit „Copy"-Button; Klick kopiert und
bestätigt direkt in der Pill.
**Einsatz:** Kontakt, Gutschein-Codes in der App, Automaten-ID beim Störungsmelder.
**Spezifikation:**
- Pill mit Text + Button „Kopieren"; Klick → Clipboard API, Fallback `execCommand`.
- Bestätigung: Button-Label morpht zu „Kopiert ✓" (Breite via `motion` layout),
  Pill-Border kurz Gold, `scale(0.96 → 1)` mit `--ease-bounce`; nach 1.8s zurück.
- `aria-live="polite"` meldet „In die Zwischenablage kopiert".
- App: `Clipboard.setData` + `HapticFeedback.lightImpact()` + SnackBar-freie Inline-Bestätigung.

<!-- prompt:M11 -->
```text
Pattern M11 „Copy-Pill" aus motion/MOTION.md umsetzen.
Pill (Radius 999px, 1px Border, Padding 8px 8px 8px 20px): links der Wert
(z. B. kontakt@boerdesnack24.de), rechts Button "Kopieren" (Gold #FDC102, Text Ink).
Klick: navigator.clipboard.writeText, Fallback über verstecktes textarea + execCommand.
Danach Label-Morph zu "Kopiert ✓" (motion layout, 220ms), Pill scale 0.96 → 1
(cubic-bezier(.34,1.56,.64,1)), Border kurz Gold; nach 1.8s Rückkehr.
aria-live="polite" Region mit "In die Zwischenablage kopiert".
Flutter: Clipboard.setData + HapticFeedback.lightImpact, gleiche Label-Morph via AnimatedSwitcher.
```

---

## 4. Wo welches Pattern hingehört

**Website (Landingpage, Reihenfolge):** M02 Nav (global) → M01 Hero → M05 Versprechen →
M03 Sortiment → M04 Übergang → M06 So funktioniert's → M07 Beliebt → M08 Bewertungen →
Footer mit M09 + M10 + M11.

**App (Flutter):** M01 Splash · M02 Kategorie-Tabs im Sortiment · M03 Kategorie-Kacheln
(Tap-Expand) · M05 Onboarding · M07 „Heute beliebt" · M09 Ticker (Hinweise) ·
M11 Gutschein-/Automaten-Code.

## 5. Abnahme-Checkliste (pro Pattern)

- [ ] Nur transform/opacity/filter/clip-path/background-color animiert
- [ ] 60 fps im Performance-Profil (Chrome DevTools, 4× CPU-Throttling)
- [ ] reduced-motion geprüft: Endzustand vollständig, nichts versteckt
- [ ] Touch: keine hover-only Inhalte
- [ ] Tastatur: alles erreichbar, Fokusring sichtbar
- [ ] Screenreader: gesplittete Texte haben aria-label / sr-only Fassung
- [ ] Keine neuen Farben, Easings oder Dauern außerhalb der Tokens
