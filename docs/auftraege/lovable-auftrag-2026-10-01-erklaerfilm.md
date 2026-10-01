# Lovable-Auftrag 01.10.2026: Erklärfilm im Abschnitt „Für Standortgeber"

**Status:** Entwurf, **nicht gesendet**. Fassung 2 (20 s, Markenbild-Automat, Slogan
„Genießen. Geben. Gutes tun.") liegt vor. Wartet auf die Sichtfreigabe durch Philipp. Danach werden die vier Filmdateien und zwei Poster an die
Nachricht gehängt und der Text unten gesendet.

**Film:** `motion/video/standortgeber/` (Quellen jeder Aussage in der README).
**Gesperrt:** das Referenzvideo `src/assets/videos/standortgeber-referenz.mp4`
(`motion/ABWEICHUNGEN.md` R-10, `docs/COMPLIANCE.md` V-017-c).

**Warum unter der gepinnten Bühne und nicht darin:** `motion/MOTION.md` Regel 1
erlaubt eine Hero-Bewegung pro Viewport. Die Bühne (`Stage`) ist schon
scroll-gesteuert. Der Film steht deshalb danach, als eigener Block.

## Text an Lovable

```
Auftrag 01.10.2026: Erklärfilm für Standortgeber einbauen. Nur das Folgende, sonst keine Änderungen.

Angehängt: standortgeber-16x9.mp4, standortgeber-16x9.webm, standortgeber-9x16.mp4, standortgeber-9x16.webm, poster-16x9.jpg, poster-9x16.jpg.

1. Dateien als Assets ablegen unter src/assets/videos/ (gleiche Dateinamen). Das vorhandene Asset standortgeber-referenz.mp4 NICHT verwenden und nirgends einbinden.

2. Neue Komponente src/components/bs24/ExplainerFilm.tsx, eingebunden in src/components/bs24/Stage.tsx direkt NACH dem Element <div className="stage">…</div>, noch innerhalb der <section id="standortgeber-section">. Aufbau:
   <figure className="explainer wrap">
     <video …/>
     <figcaption className="assetnote"><b>KI</b>Erklärfilm. Automat mit KI visualisiert, Gegenstände als 3D-Darstellung.</figcaption>
   </figure>
   - Quelle nach Breite: unter 768 px das 9:16-Video und poster-9x16.jpg, sonst 16:9 und poster-16x9.jpg. Je Format <source type="video/webm"> zuerst, dann <source type="video/mp4">. Wechsel per matchMedia, ohne Neuladen der Seite.
   - Attribute: muted, playsInline, loop, preload="metadata", poster, width/height passend zum Format (kein Layout Shift, aspect-ratio 16/9 bzw. 9/16). Unter 768 px max-height: 80svh, zentriert.
   - Abspielen nur, wenn der Film zu mindestens 40 % sichtbar ist (IntersectionObserver), sonst pausieren. Bei document.hidden pausieren.
   - Bewegung aus: Wenn prefers-reduced-motion: reduce gilt oder <html data-motion> nicht "on" ist, kein Autoplay; stattdessen controls anzeigen und nur das Poster zeigen. Der Schalter MotionToggle muss live wirken (MutationObserver auf data-motion, wie in Stage.tsx).
   - aria-label am <video>: "Erklärfilm ohne Ton, 20 Sekunden: So funktioniert ein Standort mit Bördesnack24". Der Film hat keine Tonspur; keine Untertiteldatei nötig, alle Aussagen stehen im Abschnitt als Text.
   - Rahmen: border-radius wie die Karten im Abschnitt, kein Schatten. Der Film ist dunkel; Hintergrund des Rahmens wie die dunkle Szene (scene--night), damit beim Laden kein heller Blitz entsteht. Keine neuen Farben, Dauern oder Kurven (motion-tokens.css).

3. Sonst nichts ändern. Insbesondere die Texte in Stage.tsx bleiben, wie sie sind.

4. Prüfen und im Bericht zitieren: Bildschirmfoto bei 390 px und 1440 px, je einmal mit Bewegung an und aus. Lighthouse: CLS 0 im Abschnitt, Videos werden erst geladen, wenn der Abschnitt in die Nähe kommt (preload="metadata"). Netzwerk: Es wird je Breite nur EIN Video geladen.

Am Ende je Punkt 1 bis 4 eine Zeile, was geändert wurde.
```

## Abnahme (nach dem Lauf)

| # | Prüfung | Ergebnis |
|---|---|---|
| 1 | Referenzvideo nirgends eingebunden (`read_file` aller `src/`-Dateien, Suche nach `standortgeber-referenz`) | offen |
| 2 | Formatwechsel 16:9 / 9:16 an der 768-px-Grenze | offen |
| 3 | Bewegung aus → kein Autoplay, Poster sichtbar | offen |
| 4 | KI-Bildunterschrift sichtbar | offen |
| 5 | CLS 0, ein Video je Breite geladen | offen |
