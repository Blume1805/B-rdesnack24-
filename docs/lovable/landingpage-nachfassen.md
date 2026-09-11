# Offener Auftrag an Lovable (10.09.2026)

**Status: gesendet am 11.09.2026, 04:42 UTC** an das Projekt
`Bördesnack24 Landingpage` (0c068d85-ef58-4450-a511-3e7ac1d0446d).

Mit dem Hinweis vorweg, dass nur noch fünf Credits da sind: alles in
einem Durchgang, keine Rückfragen, keine Build-Läufe. Der Punkt „im
gebauten Ergebnis prüfen" ist deshalb auf eine Quelltextprüfung
zurückgenommen worden — ein Build hätte Credits gekostet, die für die
übrigen Aufträge fehlen.

## Was an diesem Tag erledigt wurde

Zwei Läufe, beide nachgeprüft am Code:

| | Stand |
|---|---|
| Die sieben Punkte vom 08.09. | erledigt, alle am Code bestätigt |
| Datenschutzerklärung auf Hostinger-Fassung | erledigt, wortgetreu |
| Markenschriften selbst ausliefern | **nicht wirksam** — siehe unten |

## Warum die Schriften nicht wirken

`public/fonts/fonts.css` und vier woff2-Dateien liegen im Projekt, aber
**nichts bindet sie ein**: `__root.tsx` verlinkt nur `styles.css`, und
`styles.css` importiert `fonts.css` nicht. Die Seite rendert weiter die
System-Schrift.

Zusätzlich sind in `fonts.css` vier Gewichte deklariert, welche die
zugehörige Datei nicht enthält (Bricolage 800 → 700er Datei, Hanken
700 → 400er Datei). Wären die Schriften geladen, erschiene **fetter
Fließtext in normaler Strichstärke** — schlechter als der jetzige
Zustand.

---

## Der Auftragstext

Die Datenschutzerklärung ist richtig geworden — wortgetreu, elf
Abschnitte, Hostinger und Frankfurt drin, Supabase und Formular raus.
Danke.

Bei den Schriften stimmt es noch nicht. Ich habe den Code gelesen, nicht
die Meldung, und dabei fünf Punkte gefunden. Die ersten drei betreffen
den Auftrag selbst, die letzten beiden sind mir dabei aufgefallen.

**1) Die Schriften werden gar nicht geladen.**

`public/fonts/fonts.css` existiert, aber nichts bindet sie ein. In
`src/routes/__root.tsx` steht nur `appCss`, und `src/styles.css` enthält
keinen Import darauf. Die vier woff2-Dateien liegen im Projekt und
werden nie abgerufen — die Seite rendert weiter die System-Schrift.

Passend dazu steht in `styles.css` immer noch der alte Kommentar:

    /* Self-hosted woff2 liegen noch nicht im Projekt: vollständiger
       System-Stack, kein externer Font-Aufruf (kein Google-Fonts-CDN). */

Bitte einbinden und den Kommentar auf den neuen Stand bringen.

**2) Die Gewichte sind falsch zugeordnet.**

In `fonts.css` steht viermal ein Gewicht, das die Datei nicht enthält:

- `font-weight: 800` für Bricolage Grotesque zeigt auf die **700er** Datei
- `font-weight: 700` für Hanken Grotesk zeigt auf die **400er** Datei

Damit sagst du dem Browser: „diese Datei ist Gewicht 800" — und er
glaubt es. Er wird deshalb nichts nachrechnen, sondern die 700er
Zeichnung als 800 ausgeben und die 400er als 700.

Die Folge ist nicht theoretisch. `styles.css` setzt `font-weight: 700`
an vielen Stellen im Fließtext: `.eyebrow`, `.btn`, `.field label`,
`.prose strong`, `.compare .yes`. Alle diese Stellen würden nach dem
Laden in normaler Strichstärke erscheinen. Fett sähe aus wie nicht fett
— schlechter als der jetzige Zustand mit der System-Schrift, die echte
Fettschnitte hat.

Ich hatte angeboten, bei knappem Budget nur je einen Schnitt zu nehmen.
Gemeint war: weniger Schnitte deklarieren, nicht falsche.

**So bitte:** Beide Familien gibt es als variable Schrift, die den ganzen
Gewichtsbereich in einer Datei trägt. Nimm die — dann stimmen 400, 700
und 800 alle, und es sind weniger Dateien als jetzt:

    @font-face {
      font-family: 'Hanken Grotesk';
      font-weight: 100 900;   /* Bereich, nicht Einzelwert */
      font-display: swap;
      src: url('/fonts/…-variable.woff2') format('woff2-variations');
    }

Falls eine der beiden nicht als variable Datei zu bekommen ist, lade die
echten Schnitte: Bricolage 800, Hanken 400 und 700. Deklariere niemals
ein Gewicht, das die Datei nicht hat.

**3) Die Lizenzdatei fehlt.**

Beide Schriften stehen unter der SIL Open Font License 1.1. Die erlaubt
das Mitliefern ausdrücklich, verlangt aber, dass der Lizenztext
mitgeliefert wird. Leg ihn als `public/fonts/OFL.txt` ab (oder je
Familie eine Datei, wenn die Fassungen sich unterscheiden).

**4) Die Seite sagt dem Browser, sie sei englisch.**

In `__root.tsx` steht `<html lang="en">`. Die Seite ist durchgehend
deutsch.

Das ist kein Schönheitsfehler: Ein Screenreader spricht deutschen Text
mit englischer Aussprache vor, die Silbentrennung greift falsch, und
Übersetzungsdienste bieten unsinnige Übersetzungen an. WCAG 2.1 verlangt
unter 3.1.1 die richtige Sprachauszeichnung.

Bitte `<html lang="de">`.

**5) Im Kopf jeder Seite steht noch Lovable.**

Die Vorgaben in `__root.tsx` sind die Werkseinstellung:

    { title: "Lovable App" }
    { name: "description", content: "Lovable Generated Project" }
    { name: "author", content: "Lovable" }
    { property: "og:title", content: "Lovable App" }
    { property: "og:description", content: "Lovable Generated Project" }
    { name: "twitter:site", content: "@Lovable" }

Titel und Beschreibung überschreiben die einzelnen Seiten. `author` und
`twitter:site` überschreibt niemand — die stehen also auf jeder Seite
der Website. Auf einer Unternehmensseite mit Impressum ist
„verantwortlich: Lovable" schlicht falsch.

Bitte:

- `author` → `Bördesnack24 GbR`
- `twitter:site` → ganz entfernen (es gibt kein Konto)
- die vier Vorgaben für Titel/Beschreibung → auf Bördesnack24-Texte
  ändern, damit auch eine Seite ohne eigene Angabe nichts Fremdes zeigt.
  Vorschlag: Titel „Bördesnack24", Beschreibung „Automaten-Standorte im
  Sülzetal, geplant ab 2027."

**Melde bitte drei Dinge zurück:**

1. Wie viel Kilobyte die Schriften zusammen ausmachen und wie das zum
   Budget des Skills steht.
2. Dass im **gebauten** Ergebnis (`dist/client`) kein Aufruf an
   fonts.googleapis.com oder fonts.gstatic.com vorkommt. Prüf das im
   Build, nicht im Quelltext.
3. Dass fett gesetzter Fließtext nach dem Laden sichtbar fetter ist als
   normaler — der Punkt, an dem die falsche Zuordnung aufgefallen wäre.
