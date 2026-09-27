# ADR 0008 — Redesign in der bestehenden App, dunkles Design, „Du" groß

- **Status:** Akzeptiert
- **Datum:** 2026-09-26
- **Stellt zurück:** ADR 0004 (Kundenfrontend auf React). Nicht verworfen,
  sondern mit einer Wiedervorlage versehen (unten).
- **Entschieden von:** Claude, im ausdrücklichen Auftrag des Gesellschafters
  („Da ich kein Fachmann bin, möchte ich, dass Du entscheidest", 26.09.2026).

## Kontext

Der Gesellschafter hat am 26.09.2026 ein Redesign der App verlangt:
dynamisch, modern, hochprofessionell, intuitiv, klar strukturiert; kurze
Hooks, wenig Text, Icons, Scroll-Effekte. Dazu drei Vorgaben:

1. Die App bleibt eine Web-App (PWA), die ohne App-Store im Browser läuft
   (bestätigt ADR 0005).
2. Dunkles Design nach dem Skill `boerdesnack24-app-design`.
3. Die Kundschaft wird überall mit „Du" angesprochen, großgeschrieben.

Offen war, **welche** App umgebaut wird. ADR 0004 hatte am 17.09.2026
beschlossen, den Kundenbereich in React neu zu bauen. Stand heute, geprüft am
26.09.2026:

| Frage | Befund |
| --- | --- |
| Ist der React-Neubau begonnen? | Nein. Im Lovable-Arbeitsbereich gibt es kein Projekt dafür. Der ältere React-Prototyp „BÖRDESNACK Hub" ist unveröffentlicht und seit dem 14.09. unverändert. |
| Was läuft live? | Die Flutter-App unter `app.boerdesnack24.de`, 41 Dateien Kundenbereich, zuletzt am 26.09. ausgeliefert. |
| Wie schwer ist der Erstaufruf? | `main.dart.js` 4,41 MB und `canvaskit.wasm` 6,9 MB, jeweils unkomprimiert (gemessen am `gh-pages`-Stand vom 26.09.2026). Danach aus dem Zwischenspeicher. |
| Wo landet der QR-Code am Automaten? | Auf der leichten Automatenseite (React), nicht in der App. Wer die App öffnet, hat sich dafür entschieden. |
| Wie sicher ist die Datenanbindung? | Heute am Produktions-Nachbau geprüft (Bericht `docs/audit/AUDIT-2026-09-BACKEND.md`). Ein Neubau müsste jeden Datenweg neu nachweisen. |

## Entscheidung

**1. Das Redesign findet in der bestehenden App statt.** Ein Neubau würde
Wochen dauern, Lovable-Guthaben in erheblichem Umfang kosten und jeden
Datenweg neu der Sicherheitsprüfung unterwerfen. Das Redesign wirkt sofort in
der App, die Kunden heute nutzen.

**2. ADR 0004 wird zurückgestellt.** Seine Begründungen bleiben richtig, zwei
davon haben aber an Gewicht verloren:

* Das Ladegewicht trifft den Einstieg am Automaten nicht mehr, weil der
  QR-Code auf die Automatenseite führt.
* Der doppelte Entwurfsweg (erst Lovable, dann Flutter) entfällt, weil das
  Redesign direkt im Code entsteht.

**Wiedervorlage**, sobald eine der drei Bedingungen eintritt:
(a) der erste Automat läuft und die Messung zeigt, dass Besucher beim
Erstaufruf der App abspringen; (b) Oberflächen der App sollen künftig in
Lovable entworfen werden; (c) der interne Bereich zieht nach ADR 0006 in eine
eigene App um, sodass der Kundenbereich allein steht.

**3. Dunkles Design für die ganze App.** Kunden- und interner Bereich teilen
Farben und Bausteine. Zwei Designs in einer Codebasis würden jede Komponente
doppelt verlangen. Grundlage:

* **Farben:** die Markenpalette bleibt unverändert (Gold `#FDC102`, Ink
  `#202321`, Börde-Grau, Cream, Frisch-Grün). Im dunklen Design ist Ink der
  Grund, Gold der Akzent, Cream die Schrift.
* **Semantische Namen statt Farbwerte.** Jede Verwendung sagt, *wofür* eine
  Farbe steht (Fläche, Schrift, Rand, Status), nicht welche es ist. Das ist die
  Voraussetzung dafür, dass sich das Design später an einer Stelle ändern
  lässt.
* **Kontrast** nach WCAG 2.1 AA: Text mindestens 4,5:1, Bedienelemente 3:1 —
  gemessen, nicht geschätzt.

**4. Anrede „Du", großgeschrieben**, in App und Landingpage, für die
Kundschaft. Standortgeber und Unternehmen werden weiter gesiezt.

**5. Scroll-Effekte nach dem Kanon `scrollcraft`** (18 Muster,
`docs/scrolling-funktionen.md`). Die Web-Muster gelten für Landingpage und
Automatenseite. In der App werden die Muster als Flutter-Gegenstücke
umgesetzt, wo sie der Bedienung dienen; die Regeln des Kanons gelten
sinngemäß (höchstens acht je Seite, Rücksicht auf „Bewegung reduzieren").

## Konflikte zwischen den Skills, und wie sie aufgelöst sind

| Punkt | `boerdesnack24-design` | `boerdesnack24-app-design` | Gilt |
| --- | --- | --- | --- |
| Anrede | „du", Kleinschreibung | „Du", großgeschrieben | **„Du" groß** (Entscheidung des Gesellschafters) |
| Überzeilen | klein, mit Punkt („schnelle lieferung.") | korrekte Großschreibung | **korrekte Großschreibung** |
| Schrift auf Gold | Weiß | — | **Ink.** Weiß auf Gold erreicht rund 1,6:1 und verfehlt WCAG deutlich; Ink auf Gold liegt bei rund 10:1 |
| Gedankenstrich, Mittelpunkt als Trenner | nicht geregelt | verboten | **verboten** |
| Zahlen | Beispiele wie „500+ Standorte" | nur echte Zahlen | **nur echte Zahlen** (es läuft noch kein Automat) |

**Lücke:** Der Skill `boerdesnack24-app-design` ist in dieser Umgebung nur als
Kurzfassung vorhanden. Die darin angekündigten Dateien `README.md`, `tokens/`,
`components/` und `assets/` fehlen, ein Design-System ist im Konto nicht
hinterlegt. Umgesetzt werden deshalb seine fünf verbindlichen Regeln und die
Markenpalette aus `boerdesnack24-design`. Sobald die vollständigen Dateien
vorliegen, wird das Ergebnis dagegen abgeglichen.

## Konsequenzen

* Der Erstaufruf der App bleibt schwer. Gegenmittel ohne Neubau: der
  Zwischenspeicher der PWA und der dunkle Ladebildschirm mit Fortschrittsbalken,
  den `web/index.html` schon heute sofort zeigt.
* Die Referenzbilder der Oberflächentests (Golden-Tests) müssen neu erzeugt
  werden. Der Kontrasttest bleibt und wird auf die dunklen Farben umgestellt.
* Entwürfe entstehen im Code und werden mit Bildschirmfotos abgenommen, nicht
  vorab in Lovable.
* Das Briefing `docs/lovable-brief-pwa.md` (React-Neubau) ruht mit ADR 0004.

## Umsetzungsstand (27.09.2026)

* **Farben:** semantische Rollen in `app_tokens.dart`, `AppTheme.dark()`,
  App fest im dunklen Modus. Seitengrund `#151716` auch im Ladebildschirm,
  in der Browserleiste und im Manifest.
* **Schrift:** Bricolage Grotesque (Überschriften) und Hanken Grotesk
  (Text) liegen im App-Paket (`assets/fonts/`, Lizenz OFL). Das Paket
  `google_fonts` ist entfernt.
* **Sprache:** „Du" groß im Kundenbereich und in `app_de.arb`; Überzeilen in
  korrekter Groß- und Kleinschreibung; keine Gedankenstriche und Mittelpunkte
  als Trenner im Kundenbereich. Rechtstexte (`legal_texts.dart`) unberührt.
  Der interne Bereich behält Mittelpunkte und Bis-Striche in Tabellen.
* **Bewegung:** neun Muster, siehe `docs/scrolling-funktionen.md`
  Abschnitt 4.1.
* **Nachweis:** Kontrasttest mit 54 Paaren, Bildschirmfotos mit
  Kontrastmessung jedes Textes (`tool/screens/screens_test.dart`, läuft
  nicht in der CI, weil es Bilder erzeugt), `flutter test` 144/144.
* **Offen:** Auslieferung nach `main` (Freigabe), Kopfbild mit altem Claim,
  echte Produktfotos (Muster 12 und 14).
