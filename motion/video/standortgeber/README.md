# Erklärfilm „Für Standortgeber"

Stand: 01.10.2026. Motion-Graphics-Film für den Abschnitt „Für Standortgeber"
der Landingpage (`src/components/bs24/Stage.tsx` im Lovable-Projekt). Er ist
ohne Ton verständlich, weil jede Aussage als Text im Bild steht.

| Datei | Zweck |
|---|---|
| `index.html` | Der Film als HTML/SVG. `window.render(t)` zeichnet den Zustand zur Sekunde `t` |
| `render.mjs` | Rendert Bild für Bild mit Playwright (Chromium) und kodiert mit ffmpeg |
| `out/standortgeber-16x9.mp4` / `.webm` | Querformat 1920×1080, für Desktop |
| `out/standortgeber-9x16.mp4` / `.webm` | Hochformat 1080×1920, für Handy und Social Media |
| `out/poster-16x9.jpg` / `out/poster-9x16.jpg` | Standbild der Abschlusskarte, für `poster` und reduzierte Bewegung |

Länge 39 s, 30 Bilder/s, ohne Tonspur.

## Ablauf

| Zeit | Szene | Text im Bild |
|---|---|---|
| 0,0–4,6 s | Logo und Leitsatz | „Sie stellen die Fläche. Wir tragen den Rest." · „Wir suchen Standorte in Osterweddingen und den Nachbarorten." |
| 4,6–10,0 s | 01 Der Ort | „Der passende Ort." · Betrieb, Sporthalle, Treffpunkt · „Wir stellen auf." |
| 10,0–16,2 s | 02 Was wir brauchen | „Stellfläche, Strom und Zugang zum Befüllen." · Kabel steckt, Automat geht an |
| 16,2–22,4 s | 03 Was Sie bekommen | „Feste Miete oder Anteil am Umsatz. Was passt, klären wir im Gespräch." |
| 22,4–27,8 s | 04 Was wir übernehmen | „Wir tragen den Rest." · Sie: Stellfläche, Strom, Zugang · Wir: Anschaffung, Wartung, Befüllung |
| 27,8–33,4 s | Gut zu wissen | „Die Spende an die Region zahlen wir." · „Ihre Vergütung bleibt davon unberührt." · „5 % des Nettoerlöses an Vereine der Region. Die Kundschaft entscheidet mit." |
| 33,4–39,0 s | Abschluss | „Versorgung vor Ort. Wert für den Ort." · „Gespräch vereinbaren" · kontakt@boerdesnack24.de |

Die Kapitel 01–04 folgen der Erzählreihenfolge: aufstellen, anschließen,
vergüten, übernehmen. Auf der Landingpage stehen die drei Zusagen in der
Reihenfolge bekommen, kosten, brauchen. Inhaltlich decken sich beide.

## Inhalte: Herkunft jeder Aussage (geprüft am 01.10.2026)

| Aussage im Film | Quelle |
|---|---|
| Leitsatz „Sie stellen die Fläche. Wir tragen den Rest." | Landingpage `Stage.tsx`, Überschrift |
| „Wir suchen Standorte in Osterweddingen und den Nachbarorten." | Landingpage `index.tsx`, Hinweis bei `betriebsstatus = "vorbereitung"` |
| „Feste Miete oder Anteil am Umsatz. Was passt, klären wir im Gespräch." | `Stage.tsx` und ADR 0007 |
| „Stellfläche, Strom und Zugang zum Befüllen." | `Stage.tsx` |
| Anschaffung, Wartung, Befüllung bei Bördesnack24 | `Stage.tsx`: „Kein Kaufpreis, keine Wartung, keine Befüllung." |
| Spende getrennt, Vergütung unberührt | `Stage.tsx` und ADR 0007 |
| „5 % des Nettoerlöses" | Projektwissen (Vollständigkeit nach § 5 UWG: jede Erwähnung mit Zahl nennt „5 % des Nettoerlöses") |
| Claim | Projektwissen, Entscheidung vom 27.09.2026 |

Bewusst **nicht** übernommen aus dem Referenzvideo
(`standortgeber-referenz.mp4`, liegt seit 01.10.2026 auch als Asset im
Lovable-Projekt):

* „Anteil an den Standortgeber 5 %". Das widerspricht ADR 0007: Die 5 % sind
  die Spende, der Standortgeber bekommt daraus nichts, und die Höhe von Miete
  oder Umsatzbeteiligung wird nie genannt. **Das Referenzvideo darf deshalb
  nicht auf die Seite.**
* „Bahnhof" als Ortsbeispiel. Es gibt keinen beschlossenen Bahnhofsstandort
  (vgl. `motion/ABWEICHUNGEN.md` R-3).
* „Mietvertrag" als Kopf des Vertrags. Bei Umsatzbeteiligung ist es nicht
  zwingend ein Mietvertrag. Im Film steht neutral „Vertrag."

Keine laufenden Automaten, keine Umsätze, keine Auszahlungen im Präsens
(`betriebsstatus = "vorbereitung"`). Kein Pfand, keine Preise. Anrede „Sie".
Keine Gedankenstriche oder Mittelpunkte im Bild, Überschriften mit Punkt.

**Offener Punkt S-1 (Strom):** Die Landingpage sagt unter „Was es Sie kostet."
„Nichts.", verlangt aber Strom vom Standort. Laut Finanzrechnung
(`docs/strategy/2026-09-15-fundament-und-finanzlogik.md`, Zeile „Strom
(entfällt, wenn Standort trägt)") kann der Strom beim Standortgeber liegen.
Dann stimmt „Nichts." nicht. Der Film vermeidet die Aussage deshalb und zeigt
stattdessen, was wer trägt. Geführt in `motion/ABWEICHUNGEN.md` R-9 und P-4.

## KI-Kennzeichnung

Die Grafiken sind schematisch und wurden mit KI-Unterstützung (Claude Code)
erstellt. Sie zeigen kein reales Gerät und keinen realen Ort. Auf der Seite
bekommt der Film dieselbe Bildunterschrift wie die Automatenzeichnung im
selben Abschnitt: „Animierte Erklärgrafik, mit KI erstellt. Kein Foto."

## Barrierefreiheit (für den Einbau)

* `muted`, `playsinline`, `loop`, `autoplay` nur ohne `prefers-reduced-motion`
  und nur bei `data-motion="on"`. Sonst Standbild (`poster`) mit
  Abspielknopf (`controls`).
* Der Film hat keinen Ton. Untertitel sind nicht nötig, weil alles als Text im
  Bild steht. Die gleichen Aussagen stehen als echter Text direkt im
  Abschnitt, der Film ist also nur Ergänzung (`aria-hidden` am Video, oder
  `aria-label="Erklärfilm: so funktioniert ein Standort mit Bördesnack24"`).
* Kein Blinken über 3 Hz. Der Funke beim Einstecken dauert 0,45 s.
* Kontrast gemessen am 01.10.2026: Ink auf Creme 14,98:1, Ink auf Gold 9,67:1, Grau `#5E5A54` auf Creme 6,47:1, Creme-Schrift auf Ink 12,54:1. Gold-Flächen nur mit Ink-Schrift.

## Neu rendern

```bash
# einmalig: Playwright (Node) und ffmpeg müssen vorhanden sein
cd motion/video/standortgeber
node render.mjs 16x9          # → out/standortgeber-16x9.mp4
node render.mjs 9x16          # → out/standortgeber-9x16.mp4
node render.mjs 16x9 --stills 2.5,13.8   # nur Standbilder zur Kontrolle
```

Vorschau im Browser: `index.html?play=1` (Querformat) oder
`index.html?f=9x16&play=1` (Hochformat). Schriften kommen aus
`apps/mobile/assets/fonts` (Bricolage Grotesque, Hanken Grotesk, OFL).
Bewegungskurven aus `motion/motion-tokens.css`.

WebM (VP9) und Poster entstehen aus dem MP4:

```bash
ffmpeg -i out/standortgeber-16x9.mp4 -c:v libvpx-vp9 -b:v 0 -crf 34 -row-mt 1 out/standortgeber-16x9.webm
ffmpeg -ss 38.5 -i out/standortgeber-16x9.mp4 -frames:v 1 -q:v 3 out/poster-16x9.jpg
```
