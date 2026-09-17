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

---

## V-005 · Rechenkorrekturen am Strategiedokument (2026-09-16)

**Sachverhalt.** Korrektur von sechs Stellen in
`docs/strategy/2026-09-15-fundament-und-finanzlogik.md` nach interner
Schlussprüfung: Sensitivitätstabelle 7.4 und die daraus abgeleitete Tabelle 7.8,
fehlende Zinsposition, Verwechslung von Nettoerlös- und
Deckungsbeitragsdifferenz bei der Umsatzsteuer, Widerspruch im Ausbauszenario,
logisch unzulässige ODER-Verknüpfung der Standortregel. Datenklasse D0,
Änderungsklasse K1. Keine Codeänderung, keine Außenwirkung, keine
personenbezogenen Daten.

**Rechtliche Würdigung.** Keiner der sechzehn Bereiche der Matrix ist berührt;
die Korrekturen betreffen ausschließlich interne Planungsrechnungen. Die unter
V-002 bis V-004 geführten offenen Punkte bleiben unverändert bestehen.

**Ergebnis.** Keine Anpassung erforderlich. **Status 🟢** für diese Änderung.

---

## V-006 · Öffentliche Automatenseite (Phase 1) — OFFEN

### Sachverhalt

Geplant ist eine öffentliche, ohne Anmeldung erreichbare Webseite je Automat,
aufgerufen über einen QR-Code am Gerät. Inhalte: Standortbezeichnung, Empfänger
und bisher erwirtschafteter Betrag des zweckgebundenen Anteils, Produktliste,
ein Formular zur Meldung von Störungen, Hinweise zum Beleg, Impressum und
Datenschutz. Kein Konto, kein Bezahlvorgang, kein Tracking, keine Cookies.

Datenklasse: **D3**, sobald das Störungsformular Kontaktdaten erhebt. Der
übrige Inhalt ist D0. Änderungsklasse **K3** (Außenwirkung, personenbezogene
Daten).

### Rechtliche Würdigung

**Impressum.** Eine geschäftsmäßige öffentliche Seite unterliegt der
Anbieterkennzeichnung. Die maßgebliche Vorschrift ist seit 2024 im Gesetz über
digitale Dienste verortet, das an die Stelle des Telemediengesetzes getreten
ist; die genaue Fundstelle ist vor Veröffentlichung gegenzuprüfen. Die Angaben
der GbR sind vollständig zu übernehmen, einschließlich beider Gesellschafter,
Kontakt und Umsatzsteuer-Identifikationsnummer. `ZU VERIFIZIEREN` (Fundstelle)

**Datenschutz.** Das Störungsformular verarbeitet personenbezogene Daten.
Erforderlich sind: Rechtsgrundlage (Vertragsanbahnung bzw. berechtigtes
Interesse), Informationen nach Art. 13 DSGVO **auf der Seite selbst**,
Zweckbindung, eine festgelegte Löschfrist für erledigte Meldungen, sowie ein
Auftragsverarbeitungsvertrag mit dem Hoster und ein Eintrag im Verzeichnis der
Verarbeitungstätigkeiten. Serverstandort prüfen. `ZU VERIFIZIEREN`

**Kein Einwilligungsbanner.** Die Seite kommt ohne Cookies, ohne Tracking und
ohne eingebettete Fremdinhalte aus. Das ist eine bewusste Entwurfsvorgabe und
der Grund, warum keine Einwilligung eingeholt werden muss. Wird später ein
Analysewerkzeug, eine Kartenansicht oder eine externe Schriftquelle ergänzt,
fällt diese Grundlage und der Vorgang ist neu zu bewerten.

**Werbliche Aussage zum Impact (UWG).** Die Angabe, dieser Automat habe einen
Betrag für einen benannten Empfänger erwirtschaftet, ist eine geschäftliche
Aussage. Sie muss zutreffend, klar und nachprüfbar sein und **Empfänger,
Bezugsgröße, Zeitraum und Stand** nennen. Solange die Beträge nicht automatisch
aus Transaktionsdaten berechnet werden, ist der Stand als Datum auszuweisen und
die Berechnung nachvollziehbar zu dokumentieren. `ZU VERIFIZIEREN`

**Wortwahl und Konstruktion.** Die Einordnung des Anteils als Sponsoring,
Entgelt oder Spende ist unter V-002 offen. Die Seite darf dieser Klärung nicht
vorgreifen: Formulierungen wie „gespendet" sind bis zur Klärung zu vermeiden;
neutral ist „für … erwirtschaftet". `ZU VERIFIZIEREN`

**Lebensmittelrecht.** Die Produktliste dient der Information, nicht der
Bestellung; ein Fernabsatzangebot entsteht dadurch nicht. Die Abgrenzung hängt
daran, dass über die Seite weder bestellt noch reserviert werden kann — diese
Eigenschaft ist bei jeder Erweiterung erneut zu prüfen, weil Kennzeichnungs-
pflichten an die Bestellmöglichkeit anknüpfen. `ZU VERIFIZIEREN`

**Barrierefreiheit.** Anwendbarkeit des BFSG und die Kleinstunternehmensausnahme
sind gesondert zu prüfen. Unabhängig davon gilt WCAG 2.1 AA als
Qualitätsanforderung des Briefings. `ZU VERIFIZIEREN`

**Entwurfsphase bei Lovable.** In den Entwurf gehören ausschließlich erfundene
Beispieldaten. Echte Kundendaten, echte Spendenbeträge oder Klarnamen von
Vereinen werden dem Dienst nicht übergeben, solange die Vereinbarung mit dem
jeweiligen Empfänger nicht steht.

### Ergebnis / Handlungsbedarf

- [ ] Impressum und Datenschutzerklärung für die Seite erstellen — **vor** der
      ersten Veröffentlichung, nicht danach
- [ ] Auftragsverarbeitungsvertrag mit dem Hoster, Eintrag ins Verzeichnis
- [ ] Löschfrist für Störungsmeldungen festlegen und technisch umsetzen
- [ ] Berechnungsweg des Impact-Betrags dokumentieren (UWG-Nachweis)
- [ ] Einordnung des Anteils klären (V-002) und Wortwahl daran ausrichten
- [x] Keine Anpassung an AGB und Widerrufsbelehrung: Die Seite begründet keinen
      Vertrag und berührt die Abo-Regelungen nicht.

**Status 🔴** · Verantwortlich: Philipp Blume · Fällig: vor Veröffentlichung
der ersten Automatenseite.

---

## V-007 · Umstellung der App auf unentgeltliche Nutzung (2026-09-16)

### Sachverhalt

Beschluss des Gesellschafters vom 2026-09-16: Die Bördesnack24-App wird **nicht
mehr kostenpflichtig** angeboten. Dauerrabatt (5 %), Coupons, Treue-Meilensteine
und Statusstufen stehen allen registrierten Kundinnen und Kunden offen. Die drei
Abo-Modelle (0,99 € monatlich, 9,99 € jährlich, 79,99 € Lifetime „Founders
Edition") werden eingestellt.

Umsetzung im Code über den Schalter `Pricing.benefitsFreeForAll = true`
(`apps/mobile/lib/core/pricing/pricing.dart`). Die Abo-Logik, die Server-RPC
`choose_subscription_plan` (Migration 0061), die Abo-Tabellen und die
Preiskonstanten bleiben **unverändert erhalten**, damit die Entscheidung bis zum
Abschluss der Standortgespräche umkehrbar ist. Der Kundenbereich erreicht diese
Pfade nicht mehr: `SubscriptionScreen.build` kehrt vor dem Verkaufsweg zurück,
die Vorteilsprüfung läuft über den neuen `hasBenefitsProvider`.

**Serverseitiges Gating (nachträglich gefunden und behoben).** Die erste
Umsetzung betraf nur den Client. Eine Prüfung der Migrationen ergab, dass
Migration 0048 die Vorteile **serverseitig** an ein Abo bindet: `activate_offer`
und `activate_personal_offer` werfen ohne Abo einen Fehler, und
`app.grant_loyalty_bonuses` steigt mit `return 0` aus. Ein angemeldeter Kunde
hätte in der App gelesen, Coupons stünden ihm zu — und beim Aktivieren die
Meldung „Abo erforderlich" bekommen. Das wäre nicht nur ein Fehler, sondern nach
§ 5 UWG eine irreführende Angabe über die Bedingungen einer Vergünstigung.

Behoben mit Migration `0065_free_benefits_for_all.sql`:
`app.benefits_free_for_all()` ist der Schalter (Spiegel von
`Pricing.benefitsFreeForAll`), `app.has_app_benefits()` das neue Gate der drei
Funktionen. `app.has_subscription()` bleibt unverändert und meldet weiterhin
wahrheitsgemäß, ob ein Abo gewählt wurde.

Datenklasse D5 (Zahlung und Abo), Änderungsklasse K3 (Außenwirkung, Rechtstexte
betroffen). Kein Datenverlust, keine Tabellen- oder Spaltenänderung, keine
destruktive Operation.

**Nachweis (ausgeführt am 2026-09-16, nicht nur behauptet).** Gegen eine lokale
PostgreSQL-16-Instanz mit den Tabellen aus 0048:

| Prüfung | Vor 0065 | Nach 0065 |
|---|---|---|
| Coupon aktivieren (Konto ohne Abo) | abgelehnt („Abo erforderlich") | erlaubt |
| Persönliches Angebot aktivieren | abgelehnt | erlaubt |
| Treue-Meilensteine vergeben | 0 Coupons | 3 Coupons |
| Schalter auf `false` zurückgesetzt | — | wieder abgelehnt |
| Mit Abo trotz `false` | — | erlaubt |
| Fremdes Angebot aktivieren | — | keine Zeile geändert (Isolation hält) |
| Meilensteine ohne eigene Käufe | — | 0 Coupons |

Die letzten beiden Zeilen sind die Regressionsprüfung nach
`boerdesnack24-security-regression`: Die Öffnung der Vorteile darf die
Mandantentrennung nicht aufweichen. Sie tut es nicht — die Funktionen filtern
weiterhin auf `auth.uid()` bzw. den übergebenen Kunden.

`supabase/tests/free_benefits_test.sql` hält dieselben Prüfungen als pgTAP-Test
fest. **Dieser Test wurde nicht ausgeführt**: pgTAP steht in der Arbeitsumgebung
nicht zur Verfügung. Der Nachweis oben stammt aus einem manuellen SQL-Durchlauf
derselben Fälle.

**Nachtrag zur Preisangabe (2026-09-16).** Die Prüfung der Marketing-PDF war
zunächst wertlos: Chromium bettet Text als Hex-Strings mit Subset-Fonts ein,
weshalb eine Suche nach „0,99" im PDF **immer** erfolglos bleibt — auch wenn
die Angabe gut sichtbar auf der Seite steht. Die erste Prüfung meldete „sauber",
ohne ein einziges Zeichen gelesen zu haben. Wiederholt mit einem Extraktor, der
die `/ToUnicode`-Tabellen auflöst (`scripts/pdf_text_pruefen.py`, bricht ab,
wenn keine Tabelle gefunden wird): 4.322 bzw. 3.716 bzw. 7.373 Zeichen gelesen,
keine der Zeichenfolgen „0,99", „9,99", „79,99", „Lifetime" enthalten, die
Statusstaffel dagegen vorhanden. Erst damit ist die Aussage belegt.

Sachlage zum Bestandsschutz: Nach dem Stand vom 2026-09-16 wurde über die App
kein Entgelt vereinnahmt; die Auswahl eines Modells war eine unverbindliche
Vormerkung ohne Abbuchung (Store-Billing war nie aktiv). Die Datenbank enthält
zwei Kundenkonten. **Diese Aussage ist nicht durch eine Abfrage der Tabelle
`public.customer_subscriptions` belegt** — sie stützt sich auf die Vormerkungs-Klausel der
bisherigen AGB Ziffer 4 f) und darauf, dass keine Zahlungsanbindung existiert.
`ZU VERIFIZIEREN` (siehe Handlungsbedarf).

### Rechtliche Würdigung

**Verbraucherrecht, Wegfall der Entgeltlichkeit.** Der Übergang von einem
entgeltlichen zu einem unentgeltlichen Angebot ist für Verbraucher ausschließlich
vorteilhaft. Eine Zustimmung ist dafür nicht erforderlich. Umgekehrt gilt: Ein
späteres Zurückschalten auf ein Entgelt wäre **keine** bloße Rückkehr, sondern
ein neues Angebot, das erneut aktiv angenommen werden muss (§ 312a Abs. 3 BGB
sperrt stillschweigende Entgeltvereinbarungen). Der technische Schalter darf
darüber nicht hinwegtäuschen.

**§ 312k BGB (Kündigungsschaltfläche).** Die Vorschrift setzt einen entgeltlichen
Vertrag im elektronischen Geschäftsverkehr voraus. Mit dem Wegfall des Entgelts
entfällt die Pflicht. Die Schaltfläche „Verträge hier kündigen" bleibt bewusst
erhalten — als freiwillige Leistung und weil sie bei einer Rücknahme des
Beschlusses sofort wieder gebraucht wird. In AGB und Formular ist sie jetzt als
freiwillig gekennzeichnet; sie darf nicht als gesetzlich geschuldet dargestellt
werden.

**§ 312j Abs. 3 BGB (Button-Lösung).** Entfällt aus demselben Grund. Es gibt
keine zahlungspflichtige Bestellung mehr, für die eine Beschriftung
„zahlungspflichtig bestellen" nötig wäre.

**§§ 327 ff. BGB (Verträge über digitale Produkte).** Diese Vorschriften gelten
nach § 327 Abs. 3 BGB **auch dann, wenn der Verbraucher statt eines Preises
personenbezogene Daten bereitstellt**. Genau das ist bei der Registrierung der
Fall. Die Pflichten zur Mangelfreiheit und zur Aktualisierung der App bleiben
also bestehen. Die Unentgeltlichkeit ist hier kein Haftungsausschluss — das
wurde in AGB Ziffer 6 d) ausdrücklich klargestellt, statt es wegzulassen.

**Widerrufsrecht.** §§ 312g, 355 BGB knüpfen im Ausgangspunkt an entgeltliche
Verbraucherverträge an. Über § 312 Abs. 1a BGB kann der Anwendungsbereich auch
Verträge erfassen, bei denen personenbezogene Daten bereitgestellt werden; die
Einordnung ist nicht zweifelsfrei. Gewählt wurde die für den Verbraucher
günstigere Variante: 14 Tage Widerrufsrecht ab Registrierung, ausdrücklich
„vorsorglich und unabhängig von der rechtlichen Einordnung". Wertersatz entfällt
mangels Zahlungspflicht. Das ist der sichere Weg, weil ein zu weit gewährtes
Widerrufsrecht kein Risiko begründet, ein zu eng gefasstes dagegen schon.

**Jugendschutz und Minderjährige.** Die bisherige Volljährigkeitsklausel war an
das kostenpflichtige Abo geknüpft (§§ 106 ff., 110 BGB) und ist gegenstandslos.
An ihre Stelle tritt eine Altersgrenze von 16 Jahren für die **Registrierung**,
begründet über Art. 8 DSGVO: Deutschland hat die dort vorgesehene Altersgrenze
nicht abgesenkt, sodass Einwilligungen in Dienste der Informationsgesellschaft
erst ab 16 allein wirksam erteilt werden können. Der Kauf am Automaten bleibt
davon unberührt. **Diese Klausel ist neu und verschärft** gegenüber der bisherigen
Fassung, die das Bonusprogramm ohne Abo „allen Altersgruppen" öffnete — der
Widerspruch zum Datenschutzrecht wird damit aufgelöst, nicht ignoriert.

**UWG § 5 (irreführende Werbung) und PAngV.** Preisangaben, die es nicht mehr
gibt, dürfen nicht weiter beworben werden. Betroffen sind sämtliche Stellen mit
„0,99 €", „9,99 €", „79,99 €" und den Break-even-Rechnungen. Im Code sind sie
ersetzt. Ebenso in den drei Marketing-Unterlagen: `abo-rechnet-sich`,
`app-mehrwert` und `sachbezug-steuerfrei` liegen als HTML-Quelle unter
`docs/marketing/` und wurden am 2026-09-16 aus dieser Quelle neu als PDF
gedruckt (Headless-Chromium) und in `docs/marketing/` sowie
`apps/mobile/web/marketing/` ersetzt. Geprüft wurde anschließend der
**Textinhalt der erzeugten PDF-Dateien**, nicht nur die HTML-Quelle: keine der
Zeichenfolgen „0,99", „9,99", „79,99", „Lifetime" kommt darin noch vor.

Anmerkung zum Vorgehen: Eine frühere Fassung dieses Eintrags hielt fest, für die
PDF-Dateien existiere keine Quelle im Repository, weshalb der Link in der App
ausgeblendet werde. Das war falsch — die HTML-Quellen lagen unter
`docs/marketing/` und wurden bei der ersten Suche übersehen. Der Link ist wieder
sichtbar, weil das PDF jetzt stimmt. Der Dateiname `abo-rechnet-sich.pdf` bleibt
aus Gründen der Verlinkbarkeit erhalten; sein Inhalt nennt kein Abo mehr.

**Store-Regeln.** Der Wegfall von In-App-Käufen vereinfacht die Store-Prüfung
(keine IAP-Pflicht nach Apple-Richtlinie 3.1.1, keine Google-Play-Billing-
Pflicht). Die Store-Metadaten dürfen keine Preise mehr nennen; sie sind vor der
Einreichung zu prüfen.

**Steuerrecht.** Ohne Abo-Erlöse entfällt die umsatzsteuerliche Behandlung der
Abo-Entgelte (elektronische Dienstleistung, 19 %). Der Dauerrabatt mindert das
Entgelt des Automatenkaufs und teilt dessen Steuersatz (7 % bzw. 19 % je
Produkt); das ist keine Änderung, sondern die Fortführung der bisherigen
Behandlung. Die Gewährung von Coupons an alle Registrierten statt an Abonnenten
ändert daran nichts. Offen bleibt V-003 (Produktmix).

### Matrix

| Bereich | Geprüft | Ergebnis | Anpassung nötig | Status |
|---|---|---|---|---|
| Impressum | ✓ | unberührt | Nein | 🟢 |
| AGB / Nutzungsbedingungen | ✓ | Ziffern 4, 5, 6 vollständig neu gefasst, Version v1 → v2 | **Ja, erledigt** | 🟢 |
| Datenschutzerklärung | ✓ | keine neue Verarbeitung; Altersgrenze 16 ergänzt die Einwilligungslogik | Nein | 🟢 |
| DSGVO Art. 8 (Kinder) | ✓ | Altersgrenze 16 neu aufgenommen | **Ja, erledigt** | 🟢 |
| Verbraucherrecht § 312k BGB | ✓ | Pflicht entfällt, Funktion bleibt freiwillig | **Ja, erledigt** | 🟢 |
| Verbraucherrecht § 312j Abs. 3 BGB | ✓ | Button-Lösung gegenstandslos | Nein | 🟢 |
| §§ 327 ff. BGB (digitale Produkte) | ✓ | gelten weiter (Daten statt Preis), klargestellt | **Ja, erledigt** | 🟢 |
| Widerrufsrecht §§ 312g, 355 BGB | ✓ | vorsorglich 14 Tage eingeräumt | **Ja, erledigt** | 🟢 |
| Preisangaben (PAngV) | ✓ | keine Preisangabe mehr im Kundenbereich | **Ja, erledigt** | 🟢 |
| UWG § 5 (Irreführung) | ✓ | Code und alle drei Marketing-PDF neu erzeugt und im Textinhalt geprüft | **Ja, erledigt** | 🟢 |
| Jugendschutz | ✓ | Volljährigkeitsklausel ersetzt durch Altersgrenze 16 | **Ja, erledigt** | 🟢 |
| Steuer und Buchführung | ✓ | keine Abo-Erlöse mehr; Rabattbehandlung unverändert | Nein | 🟢 |
| Store-Regeln | ✓ | keine IAP mehr; Metadaten zu prüfen | Ja, offen | 🟡 |
| Barrierefreiheit (BFSG) | ✗ | nicht geprüft | unbekannt | ⬜ |
| EU AI Act Art. 50 | ✓ | keine neue algorithmische Auswahl; Coupons und Empfehlungen waren bereits gekennzeichnet | Nein | 🟢 |

### Ergebnis / Handlungsbedarf

- [x] AGB Ziffern 4, 5, 6 neu gefasst, Version auf `v2 · 2026-09` gehoben
- [x] Kündigungsformular sprachlich und rechtlich neu eingeordnet
- [x] Alle Preisangaben aus dem Kundenbereich entfernt
- [x] Alle drei Marketing-PDF aus ihrer HTML-Quelle neu erzeugt; Textinhalt
      auf Preisnennungen geprüft; Link in der App bleibt sichtbar
- [ ] **Bestand an Abonnements durch Abfrage belegen** — Anleitung in
      `docs/OPERATIONS.md`, Runbook E. Die Tabelle heißt
      `public.customer_subscriptions` (nicht `app.subscriptions`, wie hier bis
      zum 2026-09-16 falsch stand — die Abfrage wäre mit „relation does not
      exist" fehlgeschlagen). Ergibt die Abfrage Zeilen, ist AGB Ziffer 4 f)
      (Erstattungszusage) der maßgebliche Maßstab und jede betroffene Person
      ist aktiv zu informieren.
- [ ] Store-Metadaten auf Preisangaben prüfen — vor der ersten Einreichung
- [x] Befund P-1 aufgelöst — er beruhte auf einer veralteten Migration und
      ist zurückgezogen (`docs/ARCHITECTURE.md`, A-7). Die Statusstaffel
      (5 / 6 / 7,5 / 10 % ab 0 / 150 / 500 / 1.000 €) ist vom Gesellschafter
      am 2026-09-16 bestätigt, in Client und Server identisch und durch
      Ausführen belegt. Die konkreten Schwellen stehen deshalb wieder im
      Chatbot und in den Marketing-Unterlagen.

**Status 🟡** · Verantwortlich: Philipp Blume · Fällig: Bestandsabfrage und
Store-Metadaten vor der ersten Veröffentlichung der App.

**Nachgeprüft am 2026-09-16:** `docs/CUSTOMER.md`, `docs/LEGAL_AUDIT.md` und
`docs/PRIVACY.md` enthalten keine Aussagen zu Abo-Modellen, Abo-Preisen oder zur
Kündigungsschaltfläche (Volltextsuche nach „Abo", „Abonn", den drei Preisen,
„Lifetime", „312k", „kostenpflicht"). Der einzige Treffer in `CUSTOMER.md` ist
das Wort „abonniert" in seiner technischen Bedeutung (Realtime-Kanal
`inventory`). Damit besteht dort kein Anpassungsbedarf — geprüft, nicht bloß
vermutet.

---

## V-008 · Öffentliche Automatenseite: Entwurf geprüft (2026-09-17)

### Sachverhalt

Der Lovable-Entwurf der öffentlichen Automatenseite („Börde Snack Connect",
angelegt am 16.09.2026) wurde am 17.09.2026 gegen das Briefing
`docs/lovable-brief-automatenseite.md` und gegen die geltende Rechtslage
geprüft. Die Seite ist noch nicht veröffentlicht.

Ergänzt wurde in derselben Prüfung der Einstieg in die App („5 % sparen" mit
Link), der bisher fehlte und ohne den die Seite ihren Hauptzweck verfehlt
(Befund A-8 in `docs/ARCHITECTURE.md`).

Datenklasse D0 bis D1 (keine personenbezogenen Daten auf der Seite selbst),
Änderungsklasse K2.

### Rechtliche Würdigung

**🔴 Google Fonts vom CDN, bei gleichzeitiger gegenteiliger Zusage.** Der
Entwurf lud „Bricolage Grotesque" und „Hanken Grotesk" über
`fonts.googleapis.com` und `fonts.gstatic.com`. Damit wird beim bloßen Aufruf
die IP-Adresse jeder Besucherin und jedes Besuchers an Google übertragen, ohne
Einwilligung und ohne Erforderlichkeit. Im Fußbereich stand zugleich: „diese
seite nutzt keine cookies, kein tracking, keine externen einbettungen."

Das ist in zweifacher Hinsicht angreifbar: als Verarbeitung ohne Rechtsgrundlage
(Art. 6 Abs. 1 DSGVO; LG München I, Urteil vom 20.01.2022, 3 O 17493/20, das
einen Unterlassungs- und Schadensersatzanspruch bejaht hat) und als unwahre
Angabe über eine Eigenschaft der Dienstleistung.

**Nicht die Zusage wurde abgeschwächt, sondern der Code korrigiert.** Die
Schriften werden selbst ausgeliefert, die Google-Verweise entfernt. Das
entspricht der Regel aus `CLAUDE.md`: Beschreibt die Doku eine
Compliance-Eigenschaft, die der Code nicht erfüllt, ist der Code der Fehler.

**Einwilligungsbanner.** Ohne externe Verbindungen, ohne Cookies und ohne
Speicherzugriff greift § 25 TDDDG nicht. Die Seite kommt ohne Banner aus. Das
ist keine Nachlässigkeit, sondern die Voraussetzung dafür, dass jemand vor dem
Automaten in wenigen Sekunden an seine Information kommt. Jede spätere
Erweiterung, die einen Banner nötig machte, müsste sich an diesem Zweck messen
lassen.

**Fehlerbericht an Lovable geprüft, unkritisch.** `lovable-error-reporting.ts`
ruft ausschließlich `window.__lovableEvents` und
`window.__lovableReportRuntimeError` auf. Beide existieren nur in der
Editor-Vorschau; im veröffentlichten Stand läuft die Funktion ins Leere. Es
verlässt also kein Datum die Seite. Geprüft durch Lesen der Datei, nicht
angenommen.

**Beispieldaten.** Alle Inhalte sind als Beispiel gekennzeichnet („Bördesnack24
(Beispieldaten)", „sv beispiel sülzetal (beispiel)", `hallo@example.org`). Damit
ist die Auflage aus V-006 eingehalten, dem Dienst keine echten Kunden-, Spenden-
oder Vereinsdaten zu übergeben, solange die Vereinbarungen nicht stehen.

**Impact-Angabe.** Der Entwurf nennt Betrag, Bezugsgröße und Stand
(„5 % vom nettoerlös · stand 30.09.2026") und sagt ausdrücklich: „die rechtliche
einordnung des beitrags ist noch offen." Das entspricht V-002 und der
UWG-Anforderung aus V-006.

**Rabattangabe.** Die drei Stufen (6 % ab 150 €, 7,5 % ab 500 €, 10 % ab
1.000 €) sind durch Ausführung belegt (`docs/ARCHITECTURE.md`, A-7). Der Block
sagt ausdrücklich, dass für die Rabatte ein kostenloses Konto nötig ist, und
behauptet nirgends eine Nutzung ohne Anmeldung.

### Matrix

| Bereich | Geprüft | Ergebnis | Status |
|---|---|---|---|
| Datenschutz, externe Verbindungen | ✓ | Google Fonts entfernt, Schriften selbst ausgeliefert | 🟢 |
| § 25 TDDDG (Einwilligung) | ✓ | keine Cookies, kein Speicherzugriff, kein Banner nötig | 🟢 |
| UWG § 5 (Impact- und Rabattangaben) | ✓ | Bezugsgröße, Stand und Kontopflicht genannt | 🟢 |
| Beispieldaten statt echter Daten | ✓ | durchgehend gekennzeichnet | 🟢 |
| Impressum, Datenschutz erreichbar | ✓ | aus jedem Fußbereich | 🟢 |
| Barrierefreiheit (Bedienelemente) | ✓ | `knopf` und `feld` mit `min-height: 44px`, sichtbarer Fokus | 🟢 |
| Sprache der Fehlerseiten | ✓ | auf Deutsch übersetzt, Klasse `knopf` verwendet | 🟢 |
| Kontrastwerte WCAG 2.1 AA | ✗ | nicht gemessen | ⬜ |
| Barrierefreiheit gesamt (BFSG) | ✗ | nicht geprüft | ⬜ |

### Ergebnis / Handlungsbedarf

- [x] Einstieg in die App ergänzt, mit Kontopflicht-Hinweis
- [x] App-Adresse an genau einer Stelle, damit der Wechsel auf
      `app.boerdesnack24.de` eine einzige Änderung bleibt
- [x] **Google Fonts selbst ausliefern** — erledigt am 17.09.2026, Commit
      `d4349c5`. **Nachgeprüft, nicht geglaubt:** Die drei Google-Verweise sind
      aus `__root.tsx` verschwunden, `styles.css` enthält zwei `@font-face`-
      Regeln mit `font-display: swap` und `unicode-range` für Latin, und
      `public/fonts/hanken.woff2` beginnt mit der Signatur `wOF2` — es ist also
      eine echte Schriftdatei und kein leerer Platzhalter. Diese letzte Prüfung
      war nötig, weil die Dateiliste die woff2-Dateien fälschlich als
      nicht-binär auswies.
- [x] Fehlerseiten auf Deutsch — erledigt, mit Klasse `knopf` (44 px)
- [x] `@tanstack/react-query` entfernt (die Seite lädt keine Daten nach)
- [ ] Kontrastwerte messen, nicht schätzen
- [ ] Vor Veröffentlichung: Impressum und Datenschutzerklärung mit echten
      Angaben füllen (aktuell Beispieldaten), Auftragsverarbeitung mit dem
      Hoster klären (V-006)

**Status 🟡** · Verantwortlich: Philipp Blume · Fällig: vor der ersten
Veröffentlichung.

**Dauervorgaben nachgezogen.** Die Projektanweisungen in Lovable verboten
pauschal „Rabatte" und widersprachen damit dem neuen Block. Sie sind am
17.09.2026 neu gefasst: Der Rabatt darf genannt und verlinkt, aber nicht auf
dieser Seite gewährt oder berechnet werden. Zusätzlich aufgenommen: das Verbot
von Schriften über ein CDN mit Begründung, die belegten Stufenwerte, das Verbot
der Behauptung „ohne Anmeldung nutzbar" und die Regel, dass die App-Adresse nur
an einer Stelle steht. Ohne diese Anpassung hätte die nächste Sitzung den Block
als Regelverstoß behandeln können.

---

## V-009 · Zwei unterschiedliche Nutzungsbedingungen für dasselbe Angebot (2026-09-17)

### Sachverhalt

Beim Umbau der Landingpage ist aufgefallen, dass für ein und dasselbe Angebot
**zwei verschiedene Fassungen der Nutzungsbedingungen** existieren:

| Ort | Fassung | Umfang | Stand |
|---|---|---|---|
| App: `apps/mobile/lib/features/legal/presentation/legal_texts.dart` | `v2 · 2026-09` | 11 Abschnitte | am 16.09.2026 auf die kostenlose App umgestellt |
| Landingpage (Lovable, `src/routes/agb.tsx`) | ohne Versionsangabe | 16 Abschnitte | beschreibt noch die Abo-Modelle |

Beide sind nicht veröffentlicht (`is_published: false`, App nicht im Store und
ohne öffentliche Bewerbung). Es ist also noch kein Kunde betroffen.

### Rechtliche Würdigung

**Zwei Fassungen sind ein Fehler, kein Detail.** Bei widersprüchlichen
Bedingungen für dieselbe Leistung gilt im Zweifel die für den Verwender
ungünstigere Auslegung (§ 305c Abs. 2 BGB). Praktisch hieße das: Wir wären an
die jeweils kundenfreundlichere Variante gebunden, ohne es zu wollen, und
könnten im Streitfall nicht sagen, was eigentlich vereinbart war.

**Die Landingpage-Fassung ist inhaltlich die bessere.** Sie regelt Dinge, die
in der App-Fassung fehlen: Bewertungen, Kontolöschung mit Frist, Verfügbarkeit
und Änderungsvorbehalt, unzulässige Nutzung, Rechte an der App, ausdrücklicher
TDDDG-Hinweis, ODR-Plattform, salvatorische Klausel. Sie ist zugleich die
veraltete: Abschnitt 6 beschreibt die Abo-Modelle, Abschnitt 7 die Kündigung
von Abos.

**Sie enthält zusätzlich denselben Fehler wie Befund A-8**: „Kostenlose
Nutzung, Bonusprogramm und Rabatte stehen allen Altersgruppen offen" — die App
ist ohne Konto vollständig verschlossen, und seit dem 17.09.2026 gilt eine
Altersgrenze von 16 Jahren für die Registrierung (Art. 8 DSGVO, V-007).

**Vokabel.** Die Landingpage verwendet an mehreren Stellen „Spende" und
„Spendenempfänger". Das greift der offenen Einordnung des Anteils vor (V-002)
und widerspricht der für die Automatenseite verbindlichen Wortwahl
„erwirtschaftet für".

### Ergebnis / Handlungsbedarf

- [ ] **Eine einzige maßgebliche Fassung herstellen.** Empfehlung: Struktur und
      Detailtiefe der Landingpage-Fassung übernehmen, die Abo-Abschnitte durch
      die Regelungen aus `v2 · 2026-09` ersetzen (Unentgeltlichkeit,
      Vorteilsprogramm, Beendigung statt Kündigung, Widerruf vorsorglich,
      Altersgrenze 16). Ergebnis als `v3` in **beiden** Oberflächen ausspielen.
- [ ] Widerrufsbelehrung und Kündigungsseite der Landingpage entsprechend
      nachziehen (beide beschreiben heute Abo-Sachverhalte).
- [ ] „Spende" in jeder Form aus der Landingpage entfernen.
- [ ] Vor Go-Live: anwaltliche Prüfung der zusammengeführten Fassung. Die
      Texte tragen weiterhin den Hinweis, dass sie technische Vorlagen sind.

**Status 🟡** · Verantwortlich: Philipp Blume · Fällig: bevor eine der beiden
Oberflächen öffentlich erreichbar ist. Solange beide unveröffentlicht sind,
besteht kein akutes Risiko.

---

## V-010 · Kein Automat in Betrieb — Sperre für jede Veröffentlichung (2026-09-17)

### Sachverhalt

Auf Nachfrage am 17.09.2026 hat der Gesellschafter bestätigt: **Es ist bislang
kein Automat in Betrieb.** Das Unternehmen sucht Standorte; der erste Automat
steht noch nicht.

Mehrere Texte sprechen jedoch im Präsens von vorhandenen Automaten, unter
anderem das Store-Listing („Die App zu den Bördesnack24-Automaten in Sülzetal
und Umgebung") und die Marketing-Unterlagen („an jedem Automaten, bei jedem
Kauf").

### Rechtliche Würdigung

Solange nichts davon veröffentlicht ist, entsteht **kein Verstoß**. Weder App
noch Landingpage noch Automatenseite sind öffentlich erreichbar, es gibt keine
Adressaten und keine geschäftliche Handlung gegenüber Verbrauchern.

Mit der ersten Veröffentlichung ändert sich das. Wer für ein Angebot wirbt, das
es nicht gibt, handelt irreführend (§ 5 Abs. 1 Satz 2 Nr. 1 UWG: Angaben über
die Verfügbarkeit der Ware). Der Satz „die App zu den Automaten in Sülzetal"
behauptet die Existenz von Automaten. Ein Rabattversprechen „an jedem
Automaten" setzt voraus, dass es Automaten gibt, an denen er eingelöst werden
kann.

Nicht betroffen ist die Beschreibung des Angebots als solches: Dass die App
kostenlos ist und 5 % Rabatt gewährt, bleibt richtig. Falsch wird erst die
Behauptung, es stünden bereits Geräte.

### Ergebnis / Handlungsbedarf

- [x] Landingpage: Betriebsstand hängt an einem einzigen Schalter, der auf
      `vorbereitung` steht (`docs/lovable-brief-landingpage.md`)
- [ ] **Vor der ersten Veröffentlichung irgendeiner Oberfläche** sämtliche
      Präsensaussagen über vorhandene Automaten prüfen. Betroffen mindestens:
      `docs/store-assets/store-listing.md`, `docs/marketing/*.html` und die
      zugehörigen PDF, der Automatenfinder in der App.
- [ ] Automatenseite: Der Aufkleber kommt erst mit dem ersten Gerät zum
      Einsatz; die Seite selbst zeigt bis dahin nur Beispieldaten und ist nicht
      zu veröffentlichen.

**Status 🟡** · Verantwortlich: Philipp Blume · Fällig: vor der ersten
Veröffentlichung. Kein akutes Risiko, solange nichts online ist.
