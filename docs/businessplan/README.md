# Businessplan & Infografik — Quellen zum Nachbauen

**Stand 30.08.2026.** Dieser Ordner enthält den vollständigen Rechenweg und
den Seitenaufbau für zwei PDF-Dokumente, die im Chat an den Auftraggeber
geliefert wurden (nicht in diesem Repo als PDF abgelegt — Binärdateien
gehören nicht ins Git, der Rechenweg schon). Wer die Zahlen ändern will,
ändert die Annahmen hier und baut neu, statt im PDF von Hand zu redigieren.

## Was hier liegt

| Datei | Zweck |
|---|---|
| `businessplan_model.py` | Das Finanzmodell, 2027–2036. Läuft eigenständig, schreibt `businessplan_zahlen.json`. Alle Annahmen stehen als benannte Konstanten oben im Skript, mit Quellenkommentar. |
| `businessplan_zahlen.json` / `businessplan_zahlen_konservativ.json` | Ergebnis des Modells: Planungsszenario und das Szenario mit 40 % niedrigerem Umsatz je Automat (siehe README unten, „Konservatives Szenario“). |
| `make_businessplan.py` | Baut `Boerdesnack24_Businessplan.pdf` aus den JSON-Zahlen, über den `boerdesnack24-pdf`-Skill (`pdf_builder.py`). Baut **zweimal** hintereinander (siehe unten, „Inhaltsverzeichnis“) — das ist kein Fehler. |
| `infografik.html` | Die A3-quer-Infografik. Wird mit einem headless Chrome zu PDF gedruckt (kein Playwright-Paket nötig, das Chromium-Binary reicht). |
| `iconstrip.html` | Vier-Icon-Leiste (dieselben Icons wie in der Infografik), wird zu `iconstrip_trim.png` gerendert und im Businessplan eingebettet. |
| `boerdekreis_umriss.png` | Aus `apps/mobile/assets/images/brand_hero.jpg` extrahierte Umriss-Silhouette (nur der obere Glow-Bogen, per Helligkeitsschwelle isoliert). Kein eigenständig gezeichneter Umriss — echte Bildinformation aus dem vorhandenen Marken-Asset. Der Umriss ist **nicht geschlossen**: Der Automat verdeckt im Originalfoto einen Teil der Kontur, das lässt sich aus dem Foto nicht rekonstruieren. |
| `brand_icon.png` | Kopie von `apps/mobile/assets/images/brand_icon.png` (das kreisrunde Automat-Icon), hier nur zur Selbstständigkeit dieses Ordners dupliziert. |
| `zusammenspiel_v2.html` | Die Zusammenspiel-Grafik (wie die vier Erlösquellen sich gegenseitig verstärken, als ansteigende Diagonale statt symmetrischer Kreisgrafik — erste Fassung wirkte zu generisch, siehe Chatverlauf 30.08.2026). Referenziert `boerdekreis_umriss.png`, `brand_icon.png` und `fonts_local.css`. |
| `zusammenspiel_pdf.png` | Gerenderte 2×-Fassung von `zusammenspiel_v2.html` (3600×2920 px), die `make_businessplan.py` als Vollformat-Grafik auf einer eigenen Querseite einbettet. |
| `fonts_local.css` + `font_*.woff2` | Selbst gehostete Bricolage-Grotesque-/Hanken-Grotesk-Schnitte für `zusammenspiel_v2.html`. Selbst gehostet, weil Chrome im Headless-Betrieb dieser Sitzung der Proxy-CA für `fonts.googleapis.com` nicht vertraute (SSL-Handshake schlug fehl) — mit den lokalen Dateien braucht der Druckvorgang kein Netz mehr. |

## Neu bauen, Schritt für Schritt

Umgebung: Python 3 mit `pip install reportlab pyphen matplotlib`, plus ein
Chromium-Binary für den Infografik-Druck (in dieser Sitzung lag es unter
`/opt/pw-browsers/chromium-*/chrome-linux/chrome`; in einer neuen Umgebung
den tatsächlichen Pfad prüfen).

```bash
cd docs/businessplan

# 1) Finanzmodell rechnen (Planungsszenario)
python3 businessplan_model.py

# 2) Konservatives Szenario (−40 % Umsatz/Automat) — eigener Lauf,
#    schreibt businessplan_zahlen_konservativ.json (siehe Kopf des Skripts
#    für den Patch-Mechanismus über den Quelltext, kein Extra-Flag)

# 3) Icon-Leiste rendern
<chrome-binary> --headless --disable-gpu --no-sandbox \
  --screenshot=iconstrip.png --window-size=1160,250 \
  --default-background-color=00ffffff --hide-scrollbars \
  file://$(pwd)/iconstrip.html
# danach auf den Inhalt zuschneiden (siehe Kommentar/Code, der das beim
# ersten Bauen gemacht hat) -> iconstrip_trim.png

# 3b) Zusammenspiel-Grafik rendern (2x fuer Druckschaerfe, dann auf den
#     Inhalt zugeschnitten -- das exakte Crop-Mass steht im Chatverlauf,
#     pragmatisch: Screenshot deutlich hoeher als noetig nehmen und mit
#     PIL auf den sichtbaren Inhalt zurechtschneiden, siehe Hinweis unten)
<chrome-binary> --headless --disable-gpu --no-sandbox \
  --screenshot=zusammenspiel_raw.png --window-size=1800,1700 \
  --force-device-scale-factor=2 --default-background-color=fffbf8f4 \
  --hide-scrollbars --virtual-time-budget=3000 \
  file://$(pwd)/zusammenspiel_v2.html
python3 -c "from PIL import Image; Image.open('zusammenspiel_raw.png').crop((0,0,3600,2920)).save('zusammenspiel_pdf.png')"

# 4) Businessplan-PDF
python3 make_businessplan.py
# ACHTUNG: Zeile 3 in make_businessplan.py verweist auf den
# boerdesnack24-pdf-Skill über einen sitzungsspezifischen Pfad unter
# /root/.claude/skills/synced/<hash>/boerdesnack24-pdf/scripts — dieser
# Hash ändert sich zwischen Sitzungen. Vor dem Lauf den echten Pfad des
# Skills in der neuen Sitzung nachsehen und die sys.path.insert-Zeile
# anpassen.

# 5) Infografik-PDF
<chrome-binary> --headless --disable-gpu --no-sandbox --no-pdf-header-footer \
  --print-to-pdf=Boerdesnack24_Infografik.pdf --print-to-pdf-no-header \
  --run-all-compositor-stages-before-draw --virtual-time-budget=5000 \
  file://$(pwd)/infografik.html
```

## Zentrale Annahmen (Kurzfassung, Details im Modell-Kopf)

- **62 Produkte im Sortiment** — direkt an der Datenbank geprüft
  (`select count(*) from public.products` auf `nnfsyuglkqycwenwxmuw` → 62),
  nicht aus einer Liste abgezählt. Die alte Zahl 115 kam aus
  `docs/marketing/preisliste_2026-03.csv`, einer **veralteten** Preisliste;
  die Migration `cd709d4` vom 28.07.2026 hat den Produktkatalog durch die
  „verbindliche Preisübersicht“ mit 62 Artikeln ersetzt
  (`docs/marketing/preisliste_2026-07.csv`). Wer künftig eine Produktzahl
  nennt, prüft sie an der Datenbank, nicht an einer CSV-Datei im Ordner
  `marketing` — dort können mehrere Stände nebeneinander liegen.
- **App-Abo: nur 0,99 €/Monat und 9,99 €/Jahr.** Ein Lifetime-Zugang
  (79,99 € einmalig) steht als drittes Modell in `app.subscription_plans`,
  wird aber laut Auftraggeber (30.08.2026) zum Start nicht angeboten. Der
  im Modell verwendete Mischerlös je zahlendem Abonnenten (0,90 €/Monat)
  geht von 60 % Jahresabo zu 40 % Monatsabo aus — eine Annahme, keine
  Messung.
- **Wareneinsatzquote** 34,0 % (Snacks/Getränke) bzw. 16,5 %
  (Heißgetränke) — aus der aktuellen Preisliste berechnet (Ø aller
  Positionen je Kategorie), nicht geschätzt.
- **Automatenausbau**: 3 Automaten zum Start (2 in 2027, 1 in 2028), 4. bis
  2029, danach +1 pro Jahr — Vorgabe des Auftraggebers. Die Zuordnung der
  ersten drei Standorte zu den Jahren (Bahnhof Osterweddingen 2027, Freibad
  Langenweddingen 2028, Sporthalle Langenweddingen 2029) ist ein
  **Vorschlag dieses Plans**, keine Vorgabe.
- **Konservatives Szenario**: alle Bruttoumsatz-Annahmen je Automat um 40 %
  gesenkt, alle übrigen Annahmen unverändert. Bleibt in jedem der zehn
  Planjahre operativ profitabel.

Alle weiteren Annahmen (Nayax-Gebühren, Standortprovision, Strom/Wartung,
Personal, Werbeflächen-Auslastung, digitale Werbekunden) stehen mit Quelle
oder Begründung direkt im Kopf von `businessplan_model.py`.

## Editierbare Fassung (.docx)

**Stand 30.08.2026.** Auf Wunsch des Auftraggebers gibt es den Plan auch
als Word-Dokument, das er selbst punktuell ändern kann — die PDF-Fassung
oben ist dafür nicht gedacht, sie wird über `pdf_builder.py` gebaut und
lässt sich nicht in Word öffnen und bearbeiten.

| Datei | Zweck |
|---|---|
| `build_docx.js` | Baut `Boerdesnack24_Businessplan.docx` mit dem npm-Paket `docx` (docx-js). Eigenständiges Skript, dieselben Inhalte/Zahlen wie `make_businessplan.py`, aber als editierbares Word-Dokument statt PDF. |
| `automatennetz_linie.png`, `umsatz_balken.png`, `ebit_balken.png` | Die drei Diagramme, die im PDF über `pdf_builder.py`s interne `diagramm()`-Funktion entstehen (dort nicht als eigene Datei erreichbar) — für die docx-Fassung als eigenständige PNGs neu erzeugt (gleicher matplotlib-Stil, gleiche Zahlen aus `businessplan_zahlen.json`). |
| `erloesmix.png`, `iconstrip_trim.png` | Dieselben Grafiken wie in der PDF-Fassung, hier zusätzlich für die docx-Fassung im Repo gesichert. |

**Neu bauen:**
```bash
cd docs/businessplan
npm install docx image-size   # einmalig
node build_docx.js
```

**Das Inhaltsverzeichnis ist ein echtes Word-Feld** (`TableOfContents`),
kein fest eingetragener Text wie in der PDF-Fassung. Es zeigt beim ersten
Öffnen ggf. veraltete oder keine Seitenzahlen — in Word: Rechtsklick auf
das Verzeichnis → Felder aktualisieren (oder die ganze Datei markieren
und F9 drücken). Das ist der Vorteil gegenüber der PDF: Wer Text
hinzufügt oder löscht, muss das Verzeichnis nicht von Hand nachführen.

**Bekannte Lücke, ehrlich benannt:** Diese Sitzung konnte die docx-Datei
nicht visuell rendern, um sie vor dem Versand anzusehen — LibreOffice
scheiterte in dieser Sandbox an jeder Konvertierung, auch an einer
leeren `.txt`-Datei und einem docx-js-Minimalbeispiel ohne meinen
Inhalt (`Error: source file could not be loaded`, unabhängig vom
Dateiinhalt) — ein Sandbox-Defekt, kein Hinweis auf einen Fehler in der
erzeugten Datei. Geprüft wurde stattdessen: vollständige OOXML-Schema-
Validierung (`scripts/office/validate.py`, „All validations PASSED!“),
Inhaltsextraktion mit `pandoc -t markdown` (alle Abschnitte, Tabellen und
Bildverweise vollständig und in der richtigen Reihenfolge) und eine
Pixel-Prüfung aller eingebetteten PNGs (`PIL.Image.verify()`, alle
sechs unbeschädigt). Ein Blick in echtem Word/LibreOffice Writer auf
einem Rechner ohne diesen Sandbox-Defekt ersetzt das nicht vollständig.

## Seitenaufbau (Stand 30.08.2026)

- **Kein Logo im Kopf.** Auf Wunsch des Auftraggebers entfernt — die Datei
  liegt nicht mehr unter dem `boerdesnack24-pdf`-Skill in
  `assets/logo/`. Wird dort künftig wieder ein Bild abgelegt, erscheint es
  automatisch wieder im Header (Skill-Verhalten, nicht dieses Skripts).
- **Jede Überschrift ist mit ihrem einleitenden Satz in einem
  `KeepTogether`-Block** (`abschnitt()` in `make_businessplan.py`) — eine
  Überschrift steht nie allein am Seitenende mit dem Text erst auf der
  nächsten Seite. Neue Abschnitte immer über `abschnitt(doc, titel, ebene,
  intro)` anlegen, nicht über das nackte `doc.ueberschrift()` aus dem Skill.
- **Die Annahmen-Tabelle (Abschnitt 4) bleibt absichtlich im Hochformat**
  (`doc.tabelle(ANNAHMEN_TABELLE, quer=False)`), dafür sind die
  „Quelle/Begründung“-Texte kurz gehalten. Wer dort wieder ausführlichere
  Begründungen einträgt, riskiert, dass die Tabelle nicht mehr ins
  Hochformat passt und automatisch quer geht — das war vorher der Fall.
- **Inhaltsverzeichnis auf Seite 1** (zusammen mit dem Dokumenttitel).
  Da die echten Seitenzahlen erst nach dem Satz feststehen, baut das
  Skript das Dokument **zweimal**: einmal mit Platzhalter-Seitenzahlen
  (`/tmp/_bp_entwurf.pdf`), liest die echten Seitenzahlen per `pdftotext`
  aus (nur auf Seiten NACH dem Inhaltsverzeichnis suchen, sonst findet die
  Suche die Zeile im Verzeichnis selbst statt der echten Überschrift),
  und baut dann das finale PDF mit den richtigen Zahlen. Neue Abschnitte
  gehören zusätzlich in die `TOC_ABSCHNITTE`-Liste am Kopf des Skripts,
  mit exakt demselben Text wie im `abschnitt()`-Aufruf.

## Bekannte Grenzen

- **Chrome-Screenshot mit exakt passendem `--window-size` kann den unteren
  Rand des Inhalts abschneiden** (in dieser Sitzung beobachtet: die
  Fußzeile fehlte komplett, obwohl die CSS-Höhe rechnerisch passte). Fix:
  immer mit spürbar mehr Höhe screenshotten, als der Inhalt braucht, und
  danach mit PIL auf das gewünschte Maß zurechtschneiden — nicht versuchen,
  `--window-size` pixelgenau an die CSS-Höhe anzupassen.

- Bördesnack24 hat zum Planungszeitpunkt **0 dokumentierte Verkäufe** — der
  gesamte Umsatzteil des Modells ist branchenüblich hergeleitet oder
  eigene Schätzung, nicht am eigenen Betrieb gemessen.
- Die Spendenabstimmung ist im heutigen System **für alle App-Konten**
  offen, nicht nur für zahlende Abonnenten — die Infografik zeigt das
  als Ziel mit sichtbarem Hinweis auf den heutigen Stand, der Businessplan
  führt es unter „Risiken und offene Punkte“.
