# Erklärfilm „Für Standortgeber"

Stand: 01.10.2026, **Fassung 2**. Erklärfilm für den Abschnitt „Für Standortgeber"
der Landingpage (`src/components/bs24/Stage.tsx` im Lovable-Projekt). Er ist
ohne Ton verständlich, weil jede Aussage als Text im Bild steht.

Fassung 2 setzt die Vorgaben von Philipp vom 01.10.2026 um:

* höchstens 20 Sekunden,
* der Automat aus dem Markenbild statt einer gezeichneten Grafik,
* Bilder statt Zeichnungen für Schlüssel, Steckdose, Vertrag und Fläche,
* am Ende der Slogan „Genießen. Geben. Gutes tun.".

Fassung 1 (39 s, gezeichnet) liegt in der Git-Historie (Commit `52e04fa`).

| Datei | Zweck |
|---|---|
| `index.html` | Der Film als HTML. `window.render(t)` zeichnet den Zustand zur Sekunde `t` |
| `render.mjs` | Rendert Bild für Bild mit Playwright (Chromium) und kodiert mit ffmpeg |
| `media/automat.png` | Automat, freigestellt aus `apps/mobile/assets/images/brand_hero_wide.webp` |
| `media/brand_hero_wide.webp` | Markenbild (Kopie), für die Abschlusskarte im Querformat |
| `media/{flaeche,steckdose,schluessel,vertrag,muenzen}.png` | 3D-Aufnahmen (Platzhalter für echte Fotos) |
| `renders/prepare-automat.py` | Freistellen des Automaten, entfernt die „24" vor der Scheibe |
| `renders/scene.html`, `renders/render-objects.mjs` | Erzeugen die 3D-Aufnahmen (three.js) |
| `out/standortgeber-16x9.mp4` / `.webm` | Querformat 1920×1080, für den Desktop |
| `out/standortgeber-9x16.mp4` / `.webm` | Hochformat 1080×1920, für das Handy und Social Media |
| `out/poster-16x9.jpg` / `out/poster-9x16.jpg` | Standbild der Abschlusskarte |

Länge 20,0 s, 30 Bilder/s, ohne Tonspur.

## Ablauf

| Zeit | Bild | Text im Bild |
|---|---|---|
| 0,0–3,2 s | Automat taucht aus dem Dunkel auf | „Für Standortgeber" · „Sie stellen die Fläche." |
| 3,2–7,2 s | Drei Bilder: Fläche, Steckdose, Schlüssel | „Was wir brauchen." · Stellfläche · Stromanschluss · Zugang zum Befüllen |
| 7,2–10,6 s | Vertrag mit Füller | „Was Sie bekommen" · „Feste Miete oder Anteil am Umsatz." · „Was passt, klären wir im Gespräch." |
| 10,6–13,6 s | Automat | „Wir tragen den Rest." · Anschaffung · Wartung · Befüllung · Stromkosten |
| 13,6–16,8 s | Münzen | „Gut zu wissen" · „5 % des Nettoerlöses spenden wir an Vereine der Region." · „Ihre Vergütung bleibt davon unberührt." |
| 16,8–20,0 s | Markenbild | „Genießen. Geben. Gutes tun." · „Gespräch vereinbaren" · kontakt@boerdesnack24.de |

Durchgehend klein unten: „Darstellung. Automat mit KI visualisiert."

## Bilder: Herkunft und Austausch gegen echte Fotos

**Automat:** Er stammt aus dem Markenbild `brand_hero_wide.webp` im
Repository, demselben Bild wie das Schlüsselbild vom 01.10.2026, nur doppelt so
groß. Das Markenbild ist KI-generiert. Es zeigt kein reales Gerät, deshalb die
Kennzeichnung im Film. Im Markenbild steht die gelbe „24" der Wortmarke vor der
Scheibe. `prepare-automat.py` ersetzt sie durch die Regalreihen darüber und
darunter.

**Schlüssel, Steckdose, Vertrag, Fläche, Münzen:** Das sind **keine Fotos**,
sondern fotorealistische 3D-Aufnahmen, mit three.js erzeugt. Freie
Fotodatenbanken (Unsplash, Pexels, Pixabay, Wikimedia Commons, Openverse) sind
aus der Arbeitsumgebung nicht erreichbar (Netzwerkrichtlinie, geprüft am
01.10.2026). Die Aufnahmen enthalten keine fremden Marken, keine Personen und
keine echten Euro-Münzmotive (die Münzen tragen nur eine „1").

**Echte Fotos einsetzen:**

1. Foto unter genau diesem Namen ablegen: `media/flaeche.jpg`,
   `media/steckdose.jpg`, `media/schluessel.jpg`, `media/vertrag.jpg` oder
   `media/muenzen.jpg`. Querformat, mindestens 2000 Pixel breit.
2. `node render.mjs 16x9` und `node render.mjs 9x16` erneut ausführen.
   `render.mjs` erkennt die Fotos selbst und nimmt sie statt der 3D-Aufnahme.
3. Herkunft und Lizenz des Fotos hier unten in die Tabelle eintragen. Eigene
   Handyfotos sind am einfachsten. Ohne Personen braucht es dann keine
   Einwilligung.

| Bild | Quelle | Lizenz |
|---|---|---|
| Automat | `brand_hero_wide.webp`, KI-generiert, Bördesnack24 | eigenes Markenbild |
| Fläche, Steckdose, Schlüssel, Vertrag, Münzen | 3D-Aufnahmen, `renders/scene.html` | eigene Erstellung |

## Inhalte: Herkunft jeder Aussage (geprüft am 01.10.2026)

| Aussage im Film | Quelle |
|---|---|
| „Sie stellen die Fläche." / „Wir tragen den Rest." | Landingpage `Stage.tsx`, Überschrift, hier auf zwei Szenen verteilt |
| „Stellfläche, Strom, Zugang zum Befüllen" | `Stage.tsx` |
| „Feste Miete oder Anteil am Umsatz. Was passt, klären wir im Gespräch." | `Stage.tsx` und ADR 0007 |
| Anschaffung, Wartung, Befüllung | `Stage.tsx`: „Kein Kaufpreis, keine Wartung, keine Befüllung." |
| Stromanschluss (Standort) und Stromkosten (Bördesnack24) | Entscheidung Philipp, 01.10.2026: „Den Strom zahlen wir." (ADR 0007, Nachtrag) |
| „5 % des Nettoerlöses spenden wir an Vereine der Region." | Landingpage `index.tsx` (Einleitung) und Projektwissen (Vollständigkeit nach § 5 UWG) |
| „Ihre Vergütung bleibt davon unberührt." | `Stage.tsx` und ADR 0007 |
| „Genießen. Geben. Gutes tun." | **Vorgabe Philipp, 01.10.2026**, für diesen Film. Auf der Landingpage steht weiter der Claim „Versorgung vor Ort. Wert für den Ort." (Projektwissen, 27.09.2026). Ob der Slogan den Claim überall ablöst, ist offen (`motion/ABWEICHUNGEN.md` P-5) |

Der Vertrag im Bild („Standortvereinbarung") ist ein Schaubild. Sein Text
enthält nur Aussagen aus der Tabelle oben. Bei der Vergütung sind beide Kästchen
leer, weil das im Gespräch geklärt wird. Er ist nicht unterschrieben.

Bewusst **nicht** übernommen aus dem Referenzvideo
(`standortgeber-referenz.mp4`, Lovable-Asset): „Anteil an den Standortgeber
5 %" (widerspricht ADR 0007), „Bahnhof" (kein solcher Standort, R-3) und
„Mietvertrag" (bei Umsatzbeteiligung nicht zwingend). Das Referenzvideo darf
nicht auf die Seite (R-10).

Keine laufenden Automaten, Umsätze oder Auszahlungen im Präsens
(`betriebsstatus = "vorbereitung"`), kein Pfand, keine Preise. Anrede „Sie".
Keine Gedankenstriche oder Mittelpunkte im Bild.

**Strom (S-1, entschieden 01.10.2026):** Bördesnack24 zahlt den Strom. Der
Film zeigt deshalb „Stromanschluss" bei dem, was wir brauchen, und
„Stromkosten" bei dem, was wir tragen. Die Erstattung muss noch in den
Standortvertrag (`docs/COMPLIANCE.md` V-017-b).

## KI-Kennzeichnung (Art. 50 Abs. 4 KI-Verordnung)

Der Automat ist ein KI-generiertes, fotorealistisches Bild eines Geräts, das es
so nicht gibt. Ohne Hinweis könnte man ihn für das echte Gerät halten.
Deshalb steht **im Film selbst** durchgehend „Darstellung. Automat mit KI
visualisiert.". So bleibt der Hinweis auch dann sichtbar, wenn das Hochformat
allein geteilt wird, etwa in einem Status oder einer Story. Auf der Landingpage
kommt zusätzlich die Bildunterschrift „Erklärfilm. Automat mit KI
visualisiert, Gegenstände als 3D-Darstellung." dazu.

## Barrierefreiheit (für den Einbau)

* `muted`, `playsinline`, `loop`, `autoplay` nur ohne `prefers-reduced-motion`
  und nur bei `data-motion="on"`. Sonst Standbild (`poster`) mit
  Abspielknopf (`controls`).
* Der Film hat keinen Ton, deshalb sind keine Untertitel nötig. Die gleichen
  Aussagen stehen als echter Text im Abschnitt.
* Kein Blinken. Alle Übergänge sind Überblendungen von mindestens 0,5 s.
* Kontrast gemessen am 01.10.2026:

  | Text | Hintergrund | Kontrast |
  |---|---|---|
  | Creme `#FBF8F4` | Nacht `#0B0A08` | 18,7:1 |
  | Gold `#FDC102` | Nacht `#0B0A08` | 12,1:1 |
  | Hellgrau `#D9D3C9` | Nacht `#0B0A08` | 13,3:1 |
  | Hinweis `#A9A39A` | Nacht `#0B0A08` | 7,9:1 |
  | Ink | Gold (Schaltfläche) | 9,67:1 |

  Auf den Bildflächen liegt hinter dem Text ein dunkler Verlauf (mindestens
  85 % Deckkraft).

## Neu rendern

```bash
cd motion/video/standortgeber
python3 renders/prepare-automat.py                 # nur nötig, wenn sich das Markenbild ändert
THREE_DIR=…/node_modules/three node renders/render-objects.mjs   # nur für neue 3D-Aufnahmen
node render.mjs 16x9                               # → out/standortgeber-16x9.mp4
node render.mjs 9x16                               # → out/standortgeber-9x16.mp4
node render.mjs 16x9 --stills 2.6,9.8              # nur Standbilder zur Kontrolle
ffmpeg -i out/standortgeber-16x9.mp4 -c:v libvpx-vp9 -b:v 0 -crf 33 -row-mt 1 out/standortgeber-16x9.webm
ffmpeg -ss 19.5 -i out/standortgeber-16x9.mp4 -frames:v 1 -q:v 3 out/poster-16x9.jpg
```

Vorschau im Browser: `index.html?play=1` oder `index.html?f=9x16&play=1`.
Schriften aus `apps/mobile/assets/fonts` (OFL), Bewegungskurven aus
`motion/motion-tokens.css`.
