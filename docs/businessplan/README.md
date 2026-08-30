# Businessplan & Infografik — Quellen zum Nachbauen

**Stand 30.08.2026.** Dieser Ordner enthält den vollständigen Rechenweg und
den Seitenaufbau für zwei PDF-Dokumente, die im Chat an den Auftraggeber
geliefert wurden (nicht in diesem Repo als PDF abgelegt — Binärdateien
gehören nicht ins Git, der Rechenweg schon). Wer die Zahlen ändern will,
ändert die Annahmen hier und baut neu, statt im PDF von Hand zu redigieren.

## Was hier liegt

| Datei | Zweck |
|---|---|
| `businessplan_model.py` | Das Finanzmodell, 2027–2036, als Funktion `berechne(umsatz_faktor=1.0)`. Direkt ausgeführt (`python3 businessplan_model.py`) rechnet es das Planungsszenario (Faktor 1.0) und schreibt `businessplan_zahlen.json`. Alle Annahmen stehen als benannte Konstanten oben im Skript, mit Quellenkommentar. |
| `make_szenarien.py` | Ruft `berechne()` mit 0.6 bzw. 1.4 auf und schreibt `businessplan_zahlen_pessimistisch.json` / `businessplan_zahlen_optimistisch.json`. Ersetzt seit 30.08.2026 eine frühere Monkeypatch-Technik (Quelltext per Regex ändern, dann `exec()`), die vor dem dritten Szenario noch als Einmal-Skript existierte, nirgends im Repo lag und deshalb nicht reproduzierbar war. |
| `businessplan_zahlen.json` / `businessplan_zahlen_pessimistisch.json` / `businessplan_zahlen_optimistisch.json` | Ergebnis des Modells in drei Szenarien: Planungsszenario (Basis), pessimistisch (−40 % Bruttoumsatz/Automat) und optimistisch (+40 %) — siehe unten, „Szenariovergleich“. |
| `make_businessplan.py` | Baut `Boerdesnack24_Businessplan.pdf` aus den JSON-Zahlen, über den `boerdesnack24-pdf`-Skill (`pdf_builder.py`). Baut **zweimal** hintereinander (siehe unten, „Inhaltsverzeichnis“) — das ist kein Fehler. |
| `make_ebit_balken.py` / `make_umsatz_balken.py` | Erzeugen `ebit_balken.png` / `umsatz_balken.png` aus `businessplan_zahlen.json`, über dieselbe `_erzeuge_diagramm()`-Funktion wie `make_businessplan.py`s eigene PDF-Diagramme — nur als eigenständige Dateien, weil `build_docx.js` (kein `pdf_builder.py`) sie braucht. Nach jeder Änderung an `businessplan_model.py` **beide** ausführen, bevor `build_docx.js` läuft, sonst zeigt die docx-Fassung veraltete Balken. |
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

# 2) Pessimistisches/optimistisches Szenario (±40 % Umsatz/Automat) --
#    schreibt businessplan_zahlen_pessimistisch.json / _optimistisch.json
python3 make_szenarien.py

# 2b) Eigenstaendige Diagramme fuer die docx-Fassung (nur diese beiden --
#     die uebrigen entstehen inline beim PDF-Bau bzw. direkt in
#     make_businessplan.py)
python3 make_ebit_balken.py
python3 make_umsatz_balken.py

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
- **Preissteigerung 3 % p.a.** (Angabe des Auftraggebers, 30.08.2026) auf
  Automatenpreise, Werbeflächen-Mischpreis und Sponsoring-Durchschnittspaket
  — zusammengesetzt ab 2027 (`preissteigerung_faktor(jahr)` in
  `businessplan_model.py`, `(1,03)^(Jahr−2027)`). **App-Abo-Preise (0,99 €/
  9,99 €) ausdrücklich ausgenommen**, bleiben über den ganzen Zeitraum
  konstant — auf Nachfrage vom Auftraggeber so entschieden, nicht diesem
  Plan zur eigenen Auslegung überlassen. Kosten (Wareneinsatz, Nayax-
  Gebühr, Strom/Wartung/Versicherung, Standortprovision, Personal) sind
  nicht Teil dieser Vorgabe und bleiben nominal unverändert; Wareneinsatz/
  Standortprovision/Kartengebühr wachsen als Prozentsätze vom (jetzt
  höheren) Bruttoumsatz trotzdem automatisch mit.
- **Wareneinsatzquote** 34,0 % (Snacks/Getränke) bzw. 16,5 %
  (Heißgetränke) — aus der aktuellen Preisliste berechnet (Ø aller
  Positionen je Kategorie), nicht geschätzt.
- **Automatenausbau**: 3 Automaten zum Start (2 in 2027, 1 in 2028), 4. bis
  2029, danach +1 pro Jahr — Vorgabe des Auftraggebers. Die Zuordnung der
  ersten drei Standorte zu den Jahren (Bahnhof Osterweddingen 2027, Freibad
  Langenweddingen 2028, Sporthalle Langenweddingen 2029) ist ein
  **Vorschlag dieses Plans**, keine Vorgabe.
- **Anschaffung je Automat 10.000 € netto, Abschreibungsdauer 6 Jahre
  linear, Minijob-Grenze 603 €/Monat** — alle drei Angabe des
  Auftraggebers (30.08.2026), vorher 6.000 €/8 Jahre/556 €. Die Änderung
  wirkt sich auf jedes EBIT im Modell aus (mehr Investition, kürzere
  Abschreibungsdauer → höhere jährliche AfA).
- **KfW-Gründerkredit für Automat 1–3** (Angabe des Auftraggebers,
  30.08.2026): 3 % Zinsen, 2 Jahre tilgungsfrei, Laufzeit 3 Jahre je
  Tranche, endfällig (volle Tilgung im letzten Laufzeitjahr). Zwei
  Tranchen, exakt entlang der `MACHINES`-Reihenfolge: 20.000 € 2027
  (2 Automaten), 10.000 € 2028 (1 Automat) — `KFW_TRANCHEN` in
  `businessplan_model.py`, berechnet über `kfw_jahreswerte(jahr)`.
  Automat 4–11 werden sofort aus dem Cashflow bezahlt, ohne Kredit.
  **Zinsen wirken sich NICHT auf EBIT aus** (EBIT bleibt per Definition
  vor Zinsen) — neues Feld `jahresueberschuss` (= EBIT − Zinsen) trägt
  die Zinslast, damit EBIT als Kennzahl über alle bisherigen Runden
  hinweg konsistent bleibt, ohne rückwirkend jede EBIT-Aussage im
  Dokument neu zu formulieren.
- **Gewinnmarge, Zielkorridor 38–42 %** (Angabe des Auftraggebers,
  30.08.2026) — **bewusst nicht ins Modell einkalibriert.** Nachgerechnet
  (EBIT/Umsatz je Jahr) schwankt die tatsächliche Marge zwischen −19,5 %
  (2027, pessimistisch) und 50,6 % (2036, optimistisch); kumuliert über
  10 Jahre liegt nur das Planungsszenario im Korridor (38,3 %),
  pessimistisch darunter (29,8 %), optimistisch knapp darüber (42,8 %).
  Auf Rückfrage hat der Auftraggeber entschieden: **ehrlich ausweisen,
  nicht erzwingen** — keine der einzeln belegten Kostenannahmen wurde
  verändert, um eine unbelegte Zielzahl zu treffen. Vgl. „Behauptungen
  vorher prüfen“ in `CLAUDE.md`.
- **Einwohnerzahlen**: öffentliche Vergleichszahlen statt der gerundeten
  Schätzung des Auftraggebers — Bördekreis 170.984 (Statistisches
  Landesamt Sachsen-Anhalt, Stand 31.12.2025), Sülzetal 8.841 (Gemeinde
  Sülzetal / citypopulation.de, Stand 01.01.2026).
- **Szenariovergleich**: alle Bruttoumsatz-Annahmen je Automat symmetrisch
  um ±40 % verschoben (pessimistisch/optimistisch), alle übrigen Annahmen
  unverändert. **2027 ist einzig im pessimistischen Szenario leicht
  negativ** (−1.004 €), alle übrigen Jahre bleiben in allen drei Szenarien
  positiv — beide Dokumente formulieren das bedingt (`negative_jahre_pess`
  in `make_businessplan.py` / `negPess` in `build_docx.js`), nicht als
  pauschale „durchgehend positiv“-Behauptung. Kumuliertes EBIT, 10 Jahre:
  134.348 € (pessimistisch) / 247.770 € (Planungsszenario) / 361.191 €
  (optimistisch) — Stand nach Einführung der 3-%-Preissteigerung
  (30.08.2026); vorher 85.136 € / 180.526 € / 275.915 €. Diese Zahlen bei
  jeder Modelländerung neu aus `businessplan_zahlen*.json` ablesen, nicht
  aus diesem README zitieren — sie veralten hier zuverlässig schneller als
  im Dokument selbst.
- **Erlösmix nach Szenario, je Jahr**: von den vier Geschäftsbereichen
  skaliert der Bruttoumsatz-Faktor (pessimistisch/optimistisch, ±40 %) nur
  den Automatenumsatz (Snack-/Getränkeverkauf) — App-Abo (38.578 €),
  Werbeflächen (34.892 €) und Sponsoring (83.687 €, alle drei kumuliert
  10 Jahre, Planungsszenario, Stand nach Einführung der 3-%-
  Preissteigerung) hängen an eigenen, vom Szenario-Faktor unabhängigen
  Planzahlen und sind über alle drei Szenarien hinweg **exakt identisch**.
  **Nicht dasselbe wie zeitlich konstant:** Werbeflächen und Sponsoring
  wachsen jetzt mit der 3-%-Preissteigerung Jahr für Jahr (App-Abo nicht,
  siehe „Zentrale Annahmen“ oben) — das ist unabhängig vom
  Szenario-Vergleich hier und ändert nichts an der Aussage, nur an den
  absoluten Zahlen. Nachgerechnet, nicht vermutet: `_erlösmix_jahre()`
  in `make_businessplan.py` summiert `app_erlös`/`werbeflaechen_erlös`/
  `sponsoring_erlös` unabhängig vom Szenario-Faktor, weil
  `businessplan_model.py`s `berechne(umsatz_faktor)` diesen nur auf
  `REVENUE_BRUTTO_PRO_MONAT` anwendet. Tabelle und Grafik zeigen deshalb
  **je Jahr** nur noch die eine Zeile, die sich zwischen den Szenarien
  tatsächlich unterscheidet (Snack-/Getränkeverkauf) — nicht mehr nur die
  10-Jahres-Summe aller vier Bereiche wie in der ersten Fassung
  (30.08.2026, Auftraggeber: „nicht nur die Summe nach 10 Jahren …
  sondern für [jedes] Jahr, um transparenter die Entwicklung zu
  überprüfen“).

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
| `build_docx.js` | Baut `Boerdesnack24_Businessplan.docx` mit dem npm-Paket `docx` (docx-js). Eigenständiges Skript, dieselben Inhalte/Zahlen wie `make_businessplan.py`, aber als editierbares Word-Dokument statt PDF. Ruft für die Silbentrennung in Tabellen `python3` per `child_process` auf (siehe „Silbentrennung“ unten) — Node braucht dafür kein eigenes Hyphenation-Paket. |
| `automatennetz_linie.png`, `umsatz_balken.png`, `ebit_balken.png` | Die Diagramme, die im PDF über `pdf_builder.py`s interne `diagramm()`-Funktion entstehen (dort nicht als eigene Datei erreichbar) — für die docx-Fassung als eigenständige PNGs neu erzeugt (gleicher matplotlib-Stil, gleiche Zahlen aus `businessplan_zahlen.json`). |
| `szenariovergleich.png` | Gruppierter Balkenchart, EBIT je Jahr in allen drei Szenarien nebeneinander (grau/gold/grün) — erzeugt von `szenario_diagramm()` in `make_businessplan.py`, dieselbe Datei wird auch von `build_docx.js` eingebettet. |
| `erloesmix_szenario.png` | Drei Erlösmix-Charts nebeneinander (pessimistisch/Planungsszenario/optimistisch), jeweils wie `erloesmix.png`, aber mit gemeinsamer y-Achse — erzeugt von `erlösmix_szenario_diagramm()`. Zeigt die Entwicklung über die zehn Jahre UND den Unterschied zwischen den Szenarien gleichzeitig, nicht nur eine 10-Jahres-Summe je Bereich. |
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
acht unbeschädigt). Ein Blick in echtem Word/LibreOffice Writer auf
einem Rechner ohne diesen Sandbox-Defekt ersetzt das nicht vollständig.

**Silbentrennung in Tabellen (Vorgabe des Auftraggebers, 30.08.2026):**
kein einzelnes Zeichen auf einer neuen Zeile. Erster Versuch war Words
eigene Funktion (`hyphenation: { autoHyphenation: true }` in der
`Document`-Konfiguration von docx-js) — verworfen, weil die erzeugte
`settings.xml` dabei laut OOXML-Schema ungültig ist (`w:autoHyphenation`
an falscher Position in der Element-Reihenfolge; `validate.py` schlägt
fehl, Word hätte beim Öffnen eine Reparatur angeboten). Stattdessen
dieselbe Technik wie im PDF: weiche Trennzeichen (U+00AD) direkt im
Zellentext, berechnet mit `pyphen` — `build_docx.js` ruft dafür kurz
`python3` auf (`trenn()`/`trennZeilen()` im Skript), statt eine zweite
deutsche Silbentrennung in JavaScript zu pflegen.

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
- **Abschnitt 3 („Die vier Erlösquellen“) ist Überschrift + Grafik auf
  einer einzigen Querseite**, ohne Fließtext davor oder danach — auf
  Wunsch des Auftraggebers (30.08.2026), weil der Text in der Grafik
  selbst schon steht und sonst doppelt stünde. Löst `abschnitt_bild_quer()`
  statt der Kombination `abschnitt()` + `doc.bild()`: schreibt Überschrift
  und Goldlinie direkt auf die Querseite, bevor das Bild folgt (reportlab
  bietet dafür keine öffentliche API, die Funktion nutzt `doc._nach_quer()`
  direkt). Die Grafik trägt seither **keine eigene Bildunterschrift** mehr
  — eine „Abb. 0“-Beschriftung hätte exakt den Satz wiederholt, den der
  Auftraggeber aus der Grafik selbst schon entfernen liess. Dadurch beginnt
  die Abbildungsnummerierung der übrigen Grafiken bei „Abb. 1“
  (Standortnetz), nicht bei „Abb. 2“.
- **Die ursprüngliche Abschnitt „7. Risiken und offene Punkte“ existiert
  nicht mehr** (PDF und DOCX gleichermaßen, entfernt 30.08.2026 auf
  Wunsch des Auftraggebers — siehe „Bekannte Grenzen“ unten für den
  einzigen Punkt, der dadurch nicht mehr im Businessplan selbst steht).
  **Die Nummer 7 ist seit 30.08.2026 wieder vergeben**, an einen völlig
  neuen Abschnitt „7. Wachstumsraten und Marge“ (siehe unten) — reiner
  Zufall der Reihenfolge, kein Zusammenhang mit dem entfernten Original.
- **Abschnitt 6 heißt „Szenariovergleich“**, nicht mehr „Konservatives
  Szenario“ (30.08.2026, Auftraggeber: „ein pessimistisch, normales und
  optimistisches Szenario einarbeiten“). Vier-Spalten-Tabelle (Jahr +
  drei EBIT-Spalten) plus `szenariovergleich.png`, ein gruppierter
  Balkenchart aus `szenario_diagramm()` — eigene Funktion, nicht
  `doc.diagramm()` aus dem Skill, weil die nur eine Datenreihe je Chart
  kann.
- **Neuer Abschnitt „7. Wachstumsraten und Marge“** (30.08.2026,
  Auftraggeber: Wachstumsraten je Szenario ergänzen, KfW-Gründerkredit
  für die ersten drei Automaten einrechnen, Gewinnmarge gegen einen
  38–42-%-Zielkorridor abgleichen). Vier Tabellen und ein Chart, in
  dieser Reihenfolge: Umsatzwachstum % p.a. (3 Szenarien, ab 2028 — 2027
  hat kein Vorjahr), Gewinnwachstum % p.a. (EBIT-basiert, dieselbe
  Struktur, mit „n. a.“ dort, wo das EBIT das Vorzeichen wechselt — eine
  Prozentzahl wäre dort irreführend, siehe `_wachstum_prozent()` /
  `wachstumProzent()`), die KfW-Kredittabelle (Jahr × Kredit offen/
  Zinsen/Tilgung, szenariounabhängig) mit einer `kennzahlen_reihe()` für
  den kumulierten Jahresüberschuss nach Zinsen je Szenario, und die
  EBIT-Marge-Tabelle mit `marge_verlauf.png` (Linienchart, Zielkorridor
  als schattiertes Band). Die Marge-Aussage ist bewusst **nicht** auf
  38–42 % kalibriert — siehe „Zentrale Annahmen“ oben, Abschnitt
  „Gewinnmarge“, für die Begründung und die Entscheidung des
  Auftraggebers dazu.
- **Erlösmix je Jahr, Planungsszenario, direkt nach „Abb. 3“ in
  Abschnitt 5** (30.08.2026, Auftraggeber: „aus dem Diagramm sind die
  absoluten Zahlen der einzelnen Geschäftsfelder schwer abzulesen“) —
  die genauen Zahlen zum gestapelten Balkendiagramm, als Tabelle: Jahr ×
  vier Geschäftsbereiche plus Summenspalte (die exakt `summe_erloese`
  entspricht, kein separat gerundeter Wert — Cross-Check eingebaut, nicht
  behauptet). Nur Planungsszenario, weil `erloesmix.png` selbst auch nur
  das Planungsszenario zeigt; die Szenario-Unterschiede stehen bereits in
  der Tabelle direkt darunter (nächster Punkt).
- **Erlösmix nach Szenario, je Jahr, direkt bei „Abb. 3“ in Abschnitt 5**
  (nach demselben Auftrag wie oben; **Stand 30.08.2026 präzisiert**: erst
  nur die 10-Jahres-Summe je Bereich, auf Wunsch des Auftraggebers
  „nicht nur die Summe … sondern für [jedes] Jahr, um transparenter die
  Entwicklung zu überprüfen“ dann auf Jahreswerte umgestellt): Vier-
  Spalten-Tabelle (Jahr + drei Szenario-Spalten, plus Summenzeile am
  Ende) nur noch für Snack-/Getränkeverkauf — die einzige Zeile, die sich
  zwischen den Szenarien unterscheidet, siehe „Zentrale Annahmen“ oben —
  und `erloesmix_szenario.png` (drei nebeneinander gestellte
  Erlösmix-Charts, gemeinsame y-Achse, aus `erlösmix_szenario_diagramm()`
  statt eines einzelnen gruppierten Balkendiagramms), direkt im Anschluss
  an `erloesmix.png`. Verschiebt die Abbildungsnummerierung ab dort um
  eins: EBIT-Chart in Abschnitt 5 ist seither „Abb. 5“ (vorher „Abb. 4“),
  der Szenariovergleich-Chart in Abschnitt 6 „Abb. 6“ (vorher „Abb. 5“)
  — bei einer künftigen Änderung an der Abbildungsreihenfolge IMMER beide
  Dateien (`make_businessplan.py` und `build_docx.js`) gemeinsam
  durchnummerieren, sie laufen unabhängig auseinander sonst.
- **Silbentrennung in allen Tabellen** (`trenn_tabelle()` in
  `make_businessplan.py`, `pyphen`-basiert, weiche Trennzeichen U+00AD).
  **Wichtige Nebenwirkung, die dabei auffiel:** `doc.tabelle()`s
  Breitenschätzung (`_spaltenbreiten()` im `boerdesnack24-pdf`-Skill)
  misst die rohe Zeichenkette inklusive der weichen Trennzeichen und
  schätzt Zellen dadurch zu breit — eine Tabelle mit Silbentrennung
  kippte dadurch fälschlich ins Querformat. Gepatcht per Monkeypatch
  (`pb._spaltenbreiten = ...` in `make_businessplan.py`, entfernt die
  U+00AD-Zeichen nur für die Breitenschätzung, nicht für den
  tatsächlichen Zellentext) statt am Skill selbst — wer den Skill in
  einer neuen Sitzung neu synct, bekommt den Patch automatisch wieder
  mit, weil er in `make_businessplan.py` steht, nicht im Skill.
- **Tabellen laufen nie über zwei Seiten** (Vorgabe des Auftraggebers,
  30.08.2026: passt eine Tabelle nicht mehr auf die aktuelle Seite,
  beginnt eine neue Seite, statt sie zu zerschneiden). Im PDF exakt
  umgesetzt über `tabelle_seite(doc, daten, **kwargs)` in
  `make_businessplan.py` (Ersatz für jeden direkten `doc.tabelle()`-
  Aufruf): nimmt eine Momentaufnahme von `doc.story`, ruft `doc.tabelle()`
  auf, und packt alles, was neu dazukam, in `KeepTogether` — reportlab
  verschiebt die ganze Tabelle geschlossen auf die nächste Seite, wenn
  sie nicht mehr passt. Ein von `doc.tabelle()` selbst ausgelöster
  Format-Wechsel (Hoch-/Querformat, eigene `NextPageTemplate`/
  `PageBreak`-Flowables) bleibt dabei bewusst außerhalb des
  `KeepTogether`, sonst verwechselt reportlab die Seitenumbruch-Logik.
  **In der docx-Fassung nur angenähert, nicht exakt gleich — ehrlich
  benannt:** OOXML kennt kein Attribut, das eine ganze Tabelle geschlossen
  auf eine Seite zwingt (Word layoutet dynamisch beim Öffnen, nicht wie
  reportlab beim Erzeugen). Gesetzt ist stattdessen `cantSplit: true` auf
  jeder `TableRow` in `build_docx.js`s `tabelle()`-Helfer — verhindert,
  dass eine einzelne Zeile mitten im Text über zwei Seiten bricht, zwingt
  aber nicht die ganze Tabelle auf eine Seite.
- **Preissteigerung 3 % p.a. (30.08.2026)** wirkt sich auf jede Zahl aus,
  die von `summe_erloese`/`ebit` abhängt — praktisch das ganze Dokument.
  **Nach dieser Änderung betroffen und neu geprüft:** Section-1-
  Kennzahlen, Finanzplan-Tabelle, alle drei Szenario-Tabellen/-Charts,
  die Erlösmix-Tabellen/-Charts (Werbeflächen/Sponsoring jetzt höher,
  App-Abo unverändert — siehe „Zentrale Annahmen“), Spenden/Investition-
  Kennzahlen. **Nicht betroffen, absichtlich unverändert:**
  `automatennetz_linie.png` (reine Automatenzahl, keine Erlöse) und die
  Annahmen zu Automatenausbau/Standorten. Wer `businessplan_model.py`
  künftig wieder ändert: `make_ebit_balken.py` und `make_umsatz_balken.py`
  laufen NICHT automatisch mit `make_businessplan.py` mit — vor jedem
  docx-Bau beide von Hand neu ausführen, sonst zeigt `build_docx.js`
  aktuelle Tabellenzahlen neben veralteten Balkendiagrammen.

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
  als Ziel mit sichtbarem Hinweis auf den heutigen Stand. Der Businessplan
  nannte diesen Punkt bisher unter „7. Risiken und offene Punkte“; dieser
  Abschnitt wurde am 30.08.2026 auf Wunsch des Auftraggebers entfernt
  („sind keine Risiken“) und stand seither nirgends mehr im Businessplan
  selbst — festgehalten hier, damit der Punkt nicht ganz aus dem Blick
  gerät.
