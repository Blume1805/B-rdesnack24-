Neuer Auftrag: das Designsystem in Code überführen. **Teil 1 von 5 — nur die Foundations. Keine Screens, keine Komponenten.**

Vorweg, damit du nichts doppelt machst: Die Analyse ist gelaufen, drei Designrichtungen wurden entwickelt, und der Auftraggeber hat **Richtung A — Premium Editorial** bestätigt. Du sollst sie nicht neu herleiten, sondern ausbauen. Teile davon stehen schon in `styles.css` unter „Richtung A — Premium Editorial".

Der tragende Grund für A, damit du ihn beim Bauen im Kopf hast: In der Datenbank stehen 62 aktive Produkte und **null** davon hat ein `image_url`. A ist die einzige Richtung, die ohne Bildflächen auskommt — die Karte wird zur Textzeile, statt einen leeren Rahmen zu zeigen.

## Die Farbwelt bleibt unverändert

Gold `#FDC102`, Ink `#202321`, Cream `#FBF8F4`, Börde-Grau, Frisch-Grün `#5C9A3F`. Nichts davon wird angefasst. Die Modernisierung passiert über Anwendung und Komposition, nicht über neue Farben.

Die einzige Ergänzung ist bereits drin: `--border-strong` aus dem letzten Durchgang. Die gilt weiter.

**Zwei Farbregeln, die verbindlich sind:**

- Gold trägt **nur auf Ink**. Auf Cream gilt `--gold-ink`, nie das reine Gold.
- **Eine goldene Fläche pro Bildschirm.** Mehr entwertet sie.

## Was in diesem Durchgang entsteht

**1) Typo-Skala vervollständigen.** `type-display-xl/lg/md`, `type-eyebrow` und `type-num` existieren. Ergänze eine Fließtext-Ebene: 15 px, Zeilenhöhe 1,55, und eine Hilfstext-Ebene bei 13 px. **Darunter wird nichts kleiner** — 13 px ist die Grenze. Prüf beim Durchgehen, ob irgendwo 11 oder 12 px für Fließtext benutzt werden, und heb das an.

**2) Abstandsskala festschreiben.** 4 · 8 · 12 · 16 · 20 · 24 · 32 · 40. Seitenrand mobil 20 px, Abstand zwischen Abschnitten 24 px. Als Utilities oder dokumentierte Konvention — wichtig ist, dass es eine Skala gibt und nicht freihändige Werte.

**3) Bewegungs-Token.** Es gibt eine Hauskurve, `cubic-bezier(0.22, 1, 0.36, 1)`, sie steht in `card-lift`. Zieh sie als benannte Größe heraus, zusammen mit vier Dauern: Druck 0,2 s · Einblenden 0,35 s · geteiltes Element 0,45 s · Zahlenlauf 0,9 s. **Nichts über 0,6 s ausser dem Zahlenlauf.**

**4) Die Listenzeile als Komponente.** Das ist der tragende Baustein von Richtung A und ersetzt die Kachel: Verfügbarkeitspunkt, Kategorie-Eyebrow, Produktname, rechts der Bruttopreis und darunter der Abo-Preis. Trennlinie statt Kartenrahmen, Druckzustand über `row-press`. Bau sie einmal sauber; die Umstellung der Listen kommt in Teil 2.

**5) Barrierefreiheit als Regel, nicht als Nacharbeit.** Tippfläche mindestens 44 × 44 px, auch wenn das Symbol kleiner ist. Zustand nie allein über Farbe — immer plus Form, Symbol oder Text. Sichtbarer Fokusring auf jedem Bedienelement.

## Was ausdrücklich nicht passiert

Keine Screens umbauen. Keine Conversion-Bausteine. Keine Paywall. Keine Bilder. Kein „Premium" als Wort — die Bezahlebene heisst durchgehend **Abo-Vorteile**, weil die Rechtstexte Monats-, Jahres- und Lifetime-Abo kennen und ein neuer Produktname drei Dokumente nach sich ziehen würde.

---

Zum Schluss: sag mir, welche Token du neu angelegt hast und wo du beim Durchgehen Fließtext unter 13 px gefunden hast.

Danach folgen einzeln: Teil 2 Listen und Screens, Teil 3 Conversion-Bausteine, Teil 4 Abo-Ebene, Teil 5 Landingpage.
