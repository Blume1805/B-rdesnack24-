# Legal Impact Matrix — Bördesnack24

Diese Datei existierte bis zum 2026-09-15 nicht und wurde mit dem ersten
dokumentierten Legal-Impact-Check angelegt. Frühere Änderungen sind hier **nicht**
erfasst; das ist eine offene Lücke, keine Aussage über ihre Rechtmäßigkeit.

Führung nach Skill `boerdesnack24-legal-impact`. „Nicht geprüft" und
„nicht betroffen" sind verschiedene Aussagen und werden getrennt ausgewiesen.

---

## V-001 · Strategiedokumentation Fundament und Finanzlogik (2026-09-15)

### Sachverhalt

Hinzufügen von `docs/strategy/2026-09-15-fundament-und-finanzlogik.md` sowie
dieser Datei. Rein interne Konzept- und Rechendokumentation im privaten
Repository. Keine Veröffentlichung, keine Kundenkommunikation, keine
Datenverarbeitung, keine Codeänderung, keine Konfigurationsänderung.
Datenklasse D0, Änderungsklasse K1.

### Rechtliche Würdigung

Ein internes Dokument ohne Außenwirkung löst für sich keine Pflichten aus. Es
beschreibt jedoch Vorhaben, die bei Umsetzung erhebliche Pflichten auslösen —
diese sind unter V-002 bis V-004 als offene Punkte geführt und **nicht** mit
diesem Dokument erledigt.

### Matrix

| Bereich | Geprüft | Ergebnis | Anpassung nötig | Verantwortlich |
|---|---|---|---|---|
| Impressum | ✓ | keine Außenwirkung | Nein | |
| AGB | ✓ | kein Vertragsangebot | Nein | |
| Nutzungsbedingungen | ✓ | keine Nutzung durch Dritte | Nein | |
| Datenschutzerklärung | ✓ | keine Verarbeitung personenbezogener Daten | Nein | |
| DSGVO Art. 5/6/13/17/28/30/32/35 | ✓ | kein Personenbezug im Dokument | Nein | |
| Verbraucherrecht §§ 312i–312k BGB | ✓ | kein Vertragsschluss | Nein | |
| Preisangaben (PAngV) | ✓ | keine Preisangabe gegenüber Verbrauchern | Nein | |
| Steuer und Buchführung (AO, GoBD, UStG) | ✓ | keine buchungsrelevanten Datensätze; enthält jedoch **Annahmen** zu Steuersätzen → V-003 | Nein, siehe V-003 | |
| Lebensmittelrecht (LMIV) | ✓ | keine Produktdarstellung | Nein | |
| Jugendschutz | ✓ | keine Freischaltung, kein Vertragsschluss | Nein | |
| Verpackung und Pfand | ✓ | nicht berührt | Nein | |
| Barrierefreiheit (BFSG/BFSGV, WCAG) | ✓ | keine Oberfläche | Nein | |
| EU AI Act | ✓ | keine KI-Ausgabe an Kunden | Nein | |
| UWG / Werbung | ✓ | keine geschäftliche Handlung gegenüber Marktteilnehmern; die geplante Spendenkommunikation ist jedoch UWG-relevant → V-002 | Nein, siehe V-002 | |
| Urheber- und Markenrecht | ✓ | eigene Inhalte | Nein | |
| Store-Regeln Apple/Google | ✓ | keine Store-Einreichung | Nein | |

### Ergebnis

Keine Anpassung erforderlich. **Status 🟢** für diese Änderung.

---

## V-002 · Zweckgebundener Umsatzanteil je Standort — OFFEN

**Sachverhalt.** Geplant ist, einen festen Anteil des Nettoerlöses je Automat an
einen dem Standort zugeordneten gemeinnützigen Empfänger zu zahlen, diesen
Anteil je Automat auszuweisen und ihn gegenüber Standortgebern und Kunden zu
kommunizieren. Wirtschaftlich soll er die übliche Standortvergütung ersetzen.

**Rechtliche Würdigung — nicht abschließend geklärt.** Zu klären sind
mindestens:

1. **Spende oder Sponsoring.** Wird die Zahlung für die Überlassung der Fläche
   oder für eine Werbewirkung geleistet, liegt eine Gegenleistung vor; die
   Einordnung als Spende nach § 10b EStG kommt dann nicht in Betracht. Folgen
   für Umsatzsteuer, Betriebsausgabenabzug und Belegführung sind zu bestimmen.
2. **Stellung des Empfängers.** Bei einem gemeinnützigen Verein ist zu prüfen,
   ob die Einnahme dem ideellen Bereich, der Vermögensverwaltung oder einem
   wirtschaftlichen Geschäftsbetrieb zuzuordnen ist. Das betrifft den Empfänger
   unmittelbar und ist vor jeder Zusage mit ihm zu besprechen.
3. **Empfänger ≠ Flächeneigentümer.** Gehört die Halle der Kommune und fließt
   der Anteil an den Verein, ist zu klären, auf welcher Grundlage die Fläche
   überlassen wird und ob daneben ein Entgelt verlangt wird.
4. **Werbliche Aussage (UWG).** Eine Angabe wie „5 % dieses Automaten gehen an
   …" ist eine geschäftliche Aussage und muss zutreffend, klar und nachprüfbar
   sein — Empfänger, Bezugsgröße, Zeitraum und Höhe. Die Nachweisführung ist
   technisch und organisatorisch sicherzustellen, bevor die Aussage verwendet wird.
5. **Buchführung.** Die Verpflichtung ist periodengerecht zu erfassen; der
   Ablauf gehört in die Verfahrensdokumentation.

**Anpassungskategorien:** vertraglich (Vereinbarung mit Empfänger und
Flächengeber), organisatorisch (Nachweis- und Abrechnungsprozess,
Verfahrensdokumentation), dokumentarisch (Kommunikationstexte), technisch
(automatenbezogene Zuordnung und Auswertung).

**Ergebnis.** Rechtliche Bewertung nicht abschließend geklärt — fachliche
Prüfung erforderlich.
**Status 🟡** · Verantwortlich: Philipp Blume mit Steuerberatung
· Fällig: vor der ersten Zusage gegenüber einem Standortgeber.

---

## V-003 · Umsatzsteuerlicher Produktmix — OFFEN

**Sachverhalt.** Die Wirtschaftlichkeitsrechnung arbeitet mit einem pauschalen
Umsatzsteuersatz von 12 % auf den Bruttoumsatz. Das Sortiment umfasst Eis,
Snacks, Kaltgetränke und Heißgetränke mit unterschiedlichen Steuersätzen.

**Rechtliche Würdigung.** Ein Pauschalsatz ist weder steuerlich zulässig noch
kaufmännisch belastbar. Erforderlich sind der geplante Umsatzanteil je
Steuersatz sowie die Einordnung von Heißgetränken aus dem Automaten. Die
Aufzeichnungspflichten nach § 22 UStG und §§ 145–147 AO sowie die GoBD sind
beim Aufbau der Erfassung zu berücksichtigen. Ob und in welchem Umfang
§ 146a AO mit KassenSichV einschlägig ist, hängt vom konkreten Zahlungs- und
Erfassungsaufbau ab und ist gesondert zu klären — eine pauschale Antwort ist
nicht zulässig.

**Ergebnis.** Rechenannahme bis zur Klärung als ANNAHME gekennzeichnet.
**Status 🟡** · Verantwortlich: Philipp Blume mit Steuerberatung
· Fällig: vor der ersten Preiskalkulation für den Livebetrieb.

---

## V-004 · Bestehende Kundenfunktionen ohne dokumentierten Legal-Check — OFFEN

**Sachverhalt.** Die bestehende Kunden-App enthält Abo- und Preislogik,
Loyalty- und Statusstufen, Belegarchiv, Kaufhistorie, Push, Einwilligungen,
einen regelbasierten Chatbot sowie einen Hinweis zum Arbeitgeber-Sachbezug.
Für diese Funktionen existiert kein Eintrag in dieser Matrix, weil die Datei
erst jetzt angelegt wurde.

**Rechtliche Würdigung.** Nicht geprüft ist nicht gleich nicht betroffen. Die
genannten Funktionen berühren erkennbar Verbraucherrecht, Preisangaben,
Datenschutz, Jugendschutz, Store-Regeln und Buchführung.

**Ergebnis.** Nachholende Prüfung erforderlich, sobald über den Verbleib dieser
Funktionen entschieden ist (siehe Strategiedokument Abschnitt 10). Bis dahin
gilt: keine Weiterentwicklung dieser Funktionen ohne Einzelprüfung.
**Status 🔴** · Verantwortlich: Philipp Blume · Fällig: mit der Entscheidung
über den Verbleib der Kunden-App.
