<!-- Projektwissen des Lovable-Projekts „Bördesnack24 Landingpage" (0c068d85-…). Stand 01.10.2026.
     Zuletzt an Lovable übertragen: 01.10.2026 (diese Fassung; Strom, Referenzvideo). -->

# Bördesnack24 Landingpage — Dauerregeln

Diese Regeln gelten für jeden Auftrag in diesem Projekt, auch wenn die einzelne Nachricht sie nicht wiederholt. Stand 27.09.2026 (Motion-System).

## Sprache und Wahrheit

- Deutsch. Groß- und Kleinschreibung nach den Regeln der deutschen Rechtschreibung, überall, auch in Überzeilen (Eyebrows), Schaltflächen und Navigation.
- **Anrede:** Die Kundschaft wird mit „Du" angesprochen, **großgeschrieben**: Du, Dich, Dir, Dein, Deine. Standortgeber und Unternehmen werden gesiezt.
- **Keine Gedankenstriche (—, –) und keine Mittelpunkte (·) als Trenner** im sichtbaren Text. Stattdessen Punkt, Komma oder Doppelpunkt.
- Kurz: prägnante Überschriften, kurze Sätze, Symbole statt Absätze. Überschriften enden mit einem Punkt. Keine Emoji, keine Ausrufezeichen, keine Superlative.
- **Betriebsstand:** `src/data/site.ts`, `betriebsstatus`. Bei `vorbereitung` nirgends im Präsens von laufenden Automaten, Umsätzen, Auszahlungen oder Reichweite sprechen.
- Es wird nichts erfunden: keine Nutzungszahlen, keine Reichweiten, keine Bewertungen, keine Prozentsätze außer den beauftragten.
- **Preise:** nur die Startpreise in `src/data/sortiment.ts` (beauftragt 27.09.2026, Quelle Produktkatalog). Keine Einzelpreise. Pfand-Aussagen hängen **ausschließlich** am Schalter `site.pfandGetrennt` (Kaltgetränke-Startpreis mit „zzgl. 0,25 € Pfand", Rabatt-Hinweis, Nettoerlös-Definition). Solange er `false` ist, kein Preis eines Getränks in Pfandflasche oder Dose. Den Schalter nur auf ausdrücklichen Auftrag umlegen.
- Claim: „Versorgung vor Ort. Wert für den Ort." Der frühere Claim ist abgelöst.

## Wortwahl beim Geld

| Sachverhalt | Wort | Nie |
|---|---|---|
| 5 % des Nettoerlöses an gemeinnützige Vereine und Organisationen der Region | „Spende", „spenden" | — |
| Vergütung des Standortgebers für die Fläche | „Miete", „Umsatzbeteiligung" | „Spende" |

Beides ist getrennt. Der Standortgeber bekommt nichts aus den 5 %. Die Empfänger schlägt die Kundschaft in der App vor und wählt sie gemeinsam: „Du entscheidest mit", nie „Du entscheidest".

**Auszahlung:** einmal im Jahr, nach Abschluss des Kalenderjahres, zu gleichen Teilen an die drei Zwecke mit den meisten Stimmen.

**Vollständigkeit (§ 5 UWG):** Die vollständige Aussage (5 %, Nettoerlös = Umsatz ohne Umsatzsteuer, bei `pfandGetrennt` zusätzlich „und ohne Pfand", drei Zwecke mit den meisten Stimmen, einmal im Jahr) steht im Abschnitt „Der Anteil". Jede andere Erwähnung mit Zahl nennt mindestens „5 % des Nettoerlöses". Höhe von Miete oder Umsatzbeteiligung wird nie genannt.

**Strom:** Den Strom am Standort zahlt Bördesnack24 (Entscheidung 01.10.2026). Der Standortgeber stellt nur den Stromanschluss. Nie so formulieren, als trage der Standortgeber Stromkosten.

**Referenzvideo** `src/assets/videos/standortgeber-referenz.mp4`: höchstens als Stilvorlage. Inhalte nie übernehmen, es nennt „Anteil an den Standortgeber 5 %" (falsch, siehe oben), „Bahnhof" (kein solcher Standort) und „Mietvertrag" (bei Umsatzbeteiligung nicht zwingend). Nicht auf der Seite einbinden. KI-generierte oder fotorealistische Bilder und Filme von Automaten bekommen einen sichtbaren Hinweis, dass sie mit KI erstellt sind.

## Bewegung

Verbindlich: `motion/MOTION.md` (Repository B-rdesnack24-, Patterns M01–M11) mit den Abweichungen in `motion/ABWEICHUNGEN.md`. Werte ausschließlich aus `src/styles/motion-tokens.css`; keine eigenen Dauern, Kurven oder Farben.

| Baustein | Datei | Muster |
|---|---|---|
| `prog`, `phase`, `subscribe` | `src/lib/scroll.ts` | **Ein einziger** globaler Scroll-Handler |
| `useScrollProgress` | `src/hooks/useScrollProgress.ts` | Geglätteter Fortschritt (lerp 0.12) über `subscribe`, schreibt `--p` |
| `Reveal` | `Reveal.tsx` | 01 Einblenden; Kopf-Überschrift M01 (je Wort, einmal pro Seitenaufruf) |
| `Stage` | `Stage.tsx` | 06, jetzt M06 (drei Szenen Gold → Gold-hell → Creme, Schrift Ink) |
| `SceneColorTransition` | `SceneMotion.tsx` | 09 Creme → Nacht |
| `ShareScene` | `ShareBar.tsx` | 18 Anteilsbalken (`scaleX`, nicht `width`) |
| Text-Hervorhebung | `SceneMotion.tsx` | 04, jetzt M05: „Wer das Geld bekommt, entscheidest Du mit." genau einmal |
| `PhysicalDigital` | `SceneMotion.tsx` | 17 |
| `MachineZoom` | `SceneMotion.tsx` | 10 |
| `SectionNav`, `Sortiment` (Preise nur aus `src/data/sortiment.ts`), `FooterActions` (`BackToTop`, `CopyPill`), Karten, Schaltflächen | `SectionNav.tsx`, `Sortiment.tsx`, `FooterActions.tsx` | 05 Mikrointeraktion (M02, M03, M10, M11) |
| `MotionToggle` | `MotionToggle.tsx` | Schalter „Bewegung", setzt `data-motion` |

**Höchstens acht aktive Muster:** 01, 04, 05, 06, 09, 10, 17, 18. Wer ein Muster hinzufügt, nimmt ein anderes heraus.

**Gesperrt:** 12 Maskenreveal bis ein echtes Foto vorliegt (`site.bilder`; solange `null`, kein Platzhalter). 16 Tageszeit bis ein Automat läuft. M04, M08, M09 aus `MOTION.md` (Gründe in `ABWEICHUNGEN.md`). M07 gibt es nur in der App.

### Feste Grenzen

- **Ohne Bewegung ist die Seite vollständig.** `prefers-reduced-motion` und der Schalter zeigen denselben Inhalt.
- Nur `transform`, `opacity`, `filter`, `clip-path`, `background-color` animieren. Nie `width`, `height`, `top`, `left`, `grid-template-columns`. CLS 0.
- **Kein Scroll-Hijacking.** Klebende Abschnitte: 3 Szenen `400vh`, unter 768 px `300vh`. Ist der klebende Inhalt höher als der Bildschirm, wird nicht geklebt.
- **Auf dem Telefon höchstens zwei klebende Abschnitte.**
- **Ein Scroll-Handler.** Kein zweiter `scroll`-Listener. Einzige zusätzliche Bibliothek: `motion`, nur für Layout-Animationen (Nav-Indikator).
- Kontrast Fließtext mindestens 4,5:1, auch in Zwischenstufen. Fokusring auf hellen Flächen `#856A00` oder Ink, nie Gold auf Creme.
- Hover-Inhalte ohne Hover immer sichtbar. Alles per Tastatur erreichbar. Sprunglink „Zum Inhalt" bleibt erstes Element, Ziel `<main id="inhalt">`.
- Schriften werden per `preload` von der eigenen Adresse geladen (CLS 0).

## Technik und Datenschutz

- Keine externen Adressen im ausgelieferten HTML und CSS. Schriften unter `public/fonts`.
- Kein Tracking, keine Analysewerkzeuge, keine Cookies, kein Einwilligungsbanner. **Nichts auf dem Gerät speichern, was der Besucher nicht selbst eingestellt hat (§ 25 TDDDG).** Erlaubt ist nur der Bewegungsschalter.
- Symbole aus `lucide-react`, dekorative mit `aria-hidden`.
- Kontaktaufnahme über `mailto:` (`kontakt@boerdesnack24.de`).
- Rechtstexte (`/impressum`, `/datenschutz`, `/agb`, `/widerruf`, `/kuendigung`) nur in der Auszeichnung ändern, nie im Wortlaut. Fassung `v4 · 2026-09`.
- Berührungsflächen mindestens 44 × 44 px. Gold-Text auf hellem Grund `#856A00`, auf dunklem `#FDC102`. Schrift auf Gold immer Ink.
- Das Bild im Kopf (`boerdesnack24-logo.png`) bleibt unverändert.

## Am Ende jedes Auftrags

Je beauftragtem Punkt eine Zeile, was tatsächlich geändert wurde. Wird ein Punkt nicht umgesetzt, das ausdrücklich sagen.
