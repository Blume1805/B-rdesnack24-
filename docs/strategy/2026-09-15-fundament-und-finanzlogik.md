# Fundament und Finanzlogik — Bördesnack24

Stand: 2026-09-15 · Status: **Arbeitsstand, nicht beschlossen** · Keine Umsetzung
Vorgänger: `2026-09-14-stufe-2-produktkern.md`, `2026-09-15-konzeptstand-v1.md`
Kennzeichnung: **FAKT** · **ANNAHME** · **HYPOTHESE** · **ZU VERIFIZIEREN**

## 0. Rücknahmen früherer Aussagen

Die verschärfte Deckungsbeitragsrechnung hat vier eigene frühere Zahlen widerlegt.
Sie werden hier ausdrücklich zurückgenommen, damit sie nicht weiterzitiert werden.

| Frühere Aussage | Status | Korrektur |
|---|---|---|
| „Der Automat verdient 2.256 €/Jahr" | zurückgenommen als Allgemeinaussage | gilt nur bei 950 € Umsatz, Fall A, USt 12 %, Wareneinsatz 40 %, 7.000 € Anschaffung, 25 €/h. Reale Bandbreite **−310 € bis +3.520 €** |
| „Die Website trägt sich durch einen Standort" | falsch | nur bei 1.200-€-Standorten; bei 950 € 1,2 und bei 700 € 2,8 Standorte |
| „Der Impact ersetzt sicher die Standortprovision" | unbelegt | Break-even liegt bei exakt 5 % |
| „Routendichte bringt 600–700 €/Jahr je Automat" | Rechenfehler | Befüllzeit war mitgekürzt, obwohl nur die Fahrzeit geteilt wird. Korrekt ≈ **396 €/Jahr**, davon 96 € zahlungswirksam |
| „25 Automaten erzeugen 71.000 €" | zurückgenommen | korrigiert auf ≈ 42.800 € bei 20 Automaten unter ausgewiesenen Annahmen |

### Nachtrag 16.09.2026 — vier weitere Korrekturen nach Schlussprüfung

| Stelle | Fehler | Korrektur |
|---|---|---|
| 7.4, Fall-B-Spalten | Impact von 5 % war nicht zusätzlich zur Standortvergütung belastet; alle Werte um eine Stufe zu günstig | Tabelle ersetzt; Defizitschwelle 12,7 / 22,0 / 27,4 % statt 17 / 27 % |
| 7.8, Fall-B-Spalte | erbte den Fehler aus 7.4 | neu berechnet |
| 7.1 / 7.3 | Zins in der Definition genannt, in keiner Tabelle abgezogen | als offene Position ausgewiesen, ZU VERIFIZIEREN |
| 7.2 | Nettoerlös-Differenz als DB-Differenz dargestellt | 546 €/Jahr statt 1.074 €, rund 24 % statt „Hälfte" |
| 7.12 | DB mit Einzelanfahrt, Arbeitszeit mit Routendichte | Widerspruch benannt, konservative Variante beibehalten |
| 9 | Standortregel als ODER-Verknüpfung | durch gemeinsame Amortisationsbedingung ersetzt |

Bestätigt und unverändert: Tabelle 7.3 vollständig, 7.6, 7.7, 7.9, 7.10, die
Pauschalzeile in 7.4 sowie die Szenarien Konservativ und Basis.

## 1. Fundamentale Erkenntnis

Bördesnack24 ist kein Automatenbetrieb mit App und kein digitales Produkt mit
Automaten. Es ist ein Automatenbetrieb, der seine knappste Ressource — gute
Standorte — mit einer anderen Währung bezahlt als seine Wettbewerber. Diese
bieten dem Standortgeber Miete oder Umsatzprovision. Bördesnack24 bietet
stattdessen einen zweckgebundenen Anteil am Umsatz **seines** Automaten, der an
eine Sache fließt, die dem Ort gehört: den Verein, der die Halle nutzt, den
Förderverein des Bades. Dieser Anteil ist billiger als die marktübliche
Provision und für bestimmte Standortgeber attraktiver als Geld in einem
Haushalt. Er erzeugt zugleich etwas, das keine Provision erzeugt: Der Empfänger
bewirbt den Automaten bei seinen Mitgliedern, weil er direkt profitiert. Der
Impact ist damit kein Marketingaufwand, sondern belegbar der Ersatz **eines**
Kostenblocks: des Standortentgelts. Dass er zusätzlich Kundengewinnungskosten
ersetzt, ist HYPOTHESE und geht in keine Rechnung ein. Die digitale Ebene hat
genau eine Aufgabe:
den Nachweis zu führen, dass dieser Anteil tatsächlich geflossen ist.

## 2. Das Gesamtmodell

Der Kreislauf trägt nur über den Standort, nicht über den Kunden — der
individuelle Beitrag liegt bei rund neun Cent je Kauf und bewegt niemanden.

```
Zweckgebundener Anteil (statt Miete)
  → Standortgeber sagt zu, Empfänger hat Eigeninteresse
  → Empfänger bewirbt den Automaten bei seinen Mitgliedern
  → höherer Umsatz je Automat ohne Werbekosten
  → höherer Anteil, sichtbar belegt
  → Referenz für den nächsten Standort gleicher Art
  → dichteres Netz, günstigere Route, größeres Werbeinventar
  → B2B-Erlöse finanzieren Service und Sortiment
  → attraktiveres Angebot, nächster Standort
```

Der Kunde ist nicht der Motor. Er muss nichts installieren und nichts wissen.

**Grenze:** Am Bahnhof gibt es keinen ortseigenen Empfänger, und der Flächengeber
verlangt Entgelt. Der Bahnhof bleibt gewöhnliches Automatengeschäft und ist
nicht Teil des Mechanismus.

## 3. Die fünf Perspektiven

**Kunde** — funktionierender Automat, marktübliche Preise, ein Teil bleibt am
Ort. Kein Rabatt, keine Punkte, keine Mitgliedschaft.

**Standortpartner** — Versorgung ohne eigene Investition, plus ein Beitrag für
die eigene Sache statt einer Provision im Haushalt.

**Regionaler Empfänger** — planbare Einnahme, die mit der Nutzung der eigenen
Anlage wächst, plus Sichtbarkeit. Einziger Punkt echter Selbstverstärkung.

**Werbepartner** — kauft die Verbindung mit Ort und Sache, nicht Reichweite.
Zahlungsbereitschaft ist HYPOTHESE und vor jeder Planung zu validieren.

**Bördesnack24** — verdient am Automatenrohertrag. Werbung und Sponsoring sind
Zusatzerlöse ab einer gewissen Dichte. Die digitale Ebene erzeugt keinen Umsatz,
sondern senkt die Kosten der Standortgewinnung.

## 4. Rolle der digitalen Ebene

1. belegen, wie viel ein Automat für einen Empfänger erwirtschaftet hat
2. diesen Beleg teilbar machen — das ist der Kundengewinnungskanal
3. am Automaten erreichbar sein, ohne Installation und Konto
4. Einzelbeleg liefern können
5. Störung entgegennehmen
6. dem Standortgeber eine Übersicht geben
7. nichts personalisieren
8. keine Identität am Automaten herstellen
9. keine Frequenz erzeugen
10. so wenig kosten, dass ihr Nutzen nicht bewiesen werden muss

**Entscheidung: keine App — eine Website mit einer öffentlichen Seite je
Automat**, erreichbar über QR am Gerät, ohne Login. Keine der zehn Anforderungen
verlangt persistenten persönlichen Zustand. Die bestehende Flutter-App bleibt
als internes Betriebswerkzeug erhalten.

## 5. Der zentrale Mechanismus

**Der Automat finanziert den Ort, an dem er steht — und der Ort holt ihn deshalb.**

Ein fester Anteil des Nettoerlöses jedes einzelnen Automaten fließt an einen
diesem Standort zugeordneten Empfänger, wird je Automat ausgewiesen und ersetzt
die übliche Standortprovision.

## 6. Wettbewerbsvorteil

Mit jedem Standort wertvoller: Routendichte, Referenzliste, Beziehungen zu
Vereinen und Kommunen, belegte Auszahlungshistorie, Werbeinventar.
Schwer kopierbar: Beziehungen und Historie. Leicht kopierbar: Idee, Website,
Prozentzahl, Claim. Der Vorsprung ist zeitlich — früh binden, lange Verträge,
Historie sichtbar machen.

## 7. Finanzlogik nach Deckungsbeitragsrechnung

### 7.1 Drei Ebenen, strikt getrennt

| Ebene | enthält | enthält **nicht** |
|---|---|---|
| 1 — Cash | Sachkosten, Kfz-Kilometer, Zahlungsgebühren, Tilgung, Zins | Gesellschafterzeit, Abschreibung |
| 2 — wirtschaftlicher DB | Ebene 1 ohne Tilgung, plus kalkulatorische Befüllzeit und Abschreibung. **Zins gehört hierher, ist mangels Konditionen aber in keiner Tabelle angesetzt** (bei 7.000 € und beispielhaft 4 % rund 280 €/Jahr im ersten Jahr, fallend) — ZU VERIFIZIEREN | Verwaltungs- und Akquisezeit, zentrale Gemeinkosten |
| 3 — Unternehmensergebnis | Summe Ebene 2, B2B-DB, zentrale Gemeinkosten, digitale Ebene, restliche Gesellschaftertätigkeit | — |

Befüllzeit erscheint nur auf Ebene 2, Verwaltungszeit nur auf Ebene 3.
Keine Position doppelt.

### 7.2 Umsatzsteuer

Ein Pauschalsatz ist **nicht sachgerecht**. Bei 950 € brutto liegt der
Nettoerlös zwischen 887,85 € (7 %) und 798,32 € (19 %) — rund 1.074 €
Unterschied im Jahr. Auf den Deckungsbeitrag wirkt davon der Faktor 0,508
(Rohertrag abzüglich der netto-abhängigen Positionen Wartung, Warenverlust und
Impact), also rund **546 €/Jahr** oder etwa 24 % des Jahres-DB — nicht die
Hälfte. Gerechnet wird mit 12 % als ANNAHME.
**Erforderlich:** Produktmix nach Umsatzanteil je Steuersatz sowie die
Einordnung von Heißgetränken aus dem Automaten — ZU VERIFIZIEREN.

### 7.3 Unit Economics je Automat und Monat

Wareneinsatz 40 % vom Netto (FAKT: Zielkorridor 30–40 %). Kostenpositionen
ANNAHME, soweit nicht anders bezeichnet.

| Position | 700 € | 950 € | 1.200 € |
|---|---|---|---|
| Bruttoumsatz | 700,00 | 950,00 | 1.200,00 |
| − Umsatzsteuer 12 % (ANNAHME) | −75,00 | −101,79 | −128,57 |
| **Nettoerlös** | **625,00** | **848,21** | **1.071,43** |
| − Wareneinsatz 40 % | −250,00 | −339,29 | −428,57 |
| **Rohertrag** | **375,00** | **508,93** | **642,86** |
| − Zahlungsgebühren 2,5 % brutto (ZU VERIFIZIEREN) | −17,50 | −23,75 | −30,00 |
| − Telemetrie/Software (ZU VERIFIZIEREN) | −20,00 | −20,00 | −20,00 |
| − Strom (entfällt, wenn Standort trägt) | −25,00 | −25,00 | −25,00 |
| − Wartungsrückstellung 3 % netto | −18,75 | −25,45 | −32,14 |
| − Versicherung, Vandalismus | −10,00 | −10,00 | −10,00 |
| − Warenverlust 3 % vom Wareneinsatz | −7,50 | −10,18 | −12,86 |
| − Kfz-Kilometer (60 km à 0,30 €) | −18,00 | −18,00 | −18,00 |
| **vor Standort, Impact, Zeit, Kapital** | **258,25** | **376,55** | **494,86** |
| − Impact 5 % netto | −31,25 | −42,41 | −53,57 |
| **Cash-DB (Ebene 1, vor Kapitaldienst)** | **227,00** | **334,14** | **441,29** |
| − kalkulatorische Befüllzeit 3 h à 25 € | −75,00 | −75,00 | −75,00 |
| − Abschreibung 7.000 €/96 Monate (ZU VERIFIZIEREN) | −72,92 | −72,92 | −72,92 |
| **wirtschaftlicher DB (Ebene 2)** | **79,08** | **186,22** | **293,37** |
| **je Jahr** | **949 €** | **2.235 €** | **3.520 €** |

Werte in Fall A (Impact ersetzt die Standortvergütung).

### 7.4 Standortkosten-Sensitivität — wirtschaftlicher DB je Automat und Jahr

| Standortvergütung | 700 A | 700 B | 950 A | 950 B | 1.200 A | 1.200 B |
|---|---|---|---|---|---|---|
| 0 % | 949 | 949 | 2.235 | 2.235 | 3.520 | 3.520 |
| 5 % | 949 | 574 | 2.235 | 1.726 | 3.520 | 2.878 |
| 10 % | 949 | 199 | 2.235 | 1.217 | 3.520 | 2.235 |
| 15 % | 949 | **−176** | 2.235 | 708 | 3.520 | 1.592 |
| 20 % | 949 | **−551** | 2.235 | 199 | 3.520 | 949 |
| 25 % | 949 | **−926** | 2.235 | **−310** | 3.520 | 306 |
| Pauschale 100 €/Monat | 949 | −251 | 2.235 | 1.035 | 3.520 | 2.320 |

Fall A: Impact ersetzt die Vergütung, der DB ist deshalb von p unabhängig.
Fall B: Impact **plus** Vergütung; bei p = 0 sind beide Fälle notwendig gleich.
In Fall B wird der wirtschaftliche DB negativ ab **p ≈ 12,7 %** (700 €),
**p ≈ 22,0 %** (950 €) und **p ≈ 27,4 %** (1.200 €).

### 7.5 Wert des Mechanismus und Break-even

Wert = vermiedene Standortvergütung − Impact = **(p − 5) % × Nettoerlös**

| | p = 10 % | p = 15 % | p = 20 % |
|---|---|---|---|
| 700 € | 375 €/Jahr | 750 €/Jahr | 1.125 €/Jahr |
| 950 € | 509 €/Jahr | 1.018 €/Jahr | 1.527 €/Jahr |
| 1.200 € | 643 €/Jahr | 1.286 €/Jahr | 1.929 €/Jahr |

**Break-even: p = 5 %, unabhängig vom Umsatz.** Bei Pauschale liegt die
Gleichwertigkeitsschwelle bei 31 € (700er), 42 € (950er), 54 € (1.200er) im
Monat. Zu validieren ist deshalb nicht „akzeptiert ein Verein den Anteil",
sondern **„was hätte er sonst verlangt"**.

### 7.6 Routendichte, korrigiert

Geteilt wird nur die Fahrt, nicht die Befüllung.

| | einzeln | 3 Automaten auf einer Tour |
|---|---|---|
| km je Automat und Monat | 60 | 33 |
| Zeit je Automat und Monat | 3,0 h | 2,0 h |
| Kfz-Kosten | 18,00 € | 10,00 € |
| kalkulatorische Zeit | 75,00 € | 50,00 € |
| **Summe** | **93,00 €** | **60,00 €** |

Ersparnis 33 €/Monat = **396 €/Jahr je Automat**, davon 96 € zahlungswirksam.

### 7.7 Break-even in Umsatz

| Standortmodell | Bruttoumsatz/Monat |
|---|---|
| Fall A (Impact ersetzt) | **515 €** |
| Fall B, p = 15 % | **750 €** |
| Fall B, p = 20 % | **884 €** |
| Fall B, p = 25 % | **1.076 €** |
| Cash ohne Zeit und Abschreibung | 170 € |
| Cash inkl. Tilgung und Zins (6 Jahre) | ≈ 397 € |

### 7.8 Digitale Ebene

Vollkosten: Cash ≈ 300 €/Jahr, kalkulatorische Zeit ≈ 2.400 €/Jahr,
wirtschaftlich ≈ 2.700 €/Jahr. Native App ≈ 6.000 €/Jahr.

Erforderliche Standorte = Vollkosten ÷ DB je Standort:

| | Fall A | Fall B, p = 15 % |
|---|---|---|
| 700 € | **2,8** | rechnerisch nicht erreichbar (DB negativ) |
| 950 € | **1,2** | 3,8 |
| 1.200 € | **0,8** | 1,7 |
| native App | 6,3 / 2,7 / 1,7 | — |

Auf Cash-Basis ist die Website trivial. Der eigentliche Wettbewerb ist
**Website-Stunden gegen Akquise-Stunden**.

### 7.9 Investitionslogik

DB **vor** Abschreibung ansetzen, sonst Doppelzählung.

| | DB vor AfA/Jahr | Amortisation bei 7.000 € |
|---|---|---|
| 700 € Fall A | 1.824 € | 3,8 Jahre |
| 950 € Fall A | 3.110 € | 2,3 Jahre |
| 1.200 € Fall A | 4.395 € | 1,6 Jahre |
| 700 € Fall B p=15 % | 699 € | **10,0 Jahre** |
| 950 € Fall B p=15 % | 1.583 € | 4,4 Jahre |
| 1.200 € Fall B p=15 % | 2.467 € | 2,8 Jahre |

**Investitionsregel: Amortisation unter drei Jahren.**
31.000 € ÷ 7.000 € = 4,4 Automaten — das Fünf-Automaten-Szenario überschreitet
das Budget. Anschaffungspreis und Finanzierung ZU VERIFIZIEREN; die 7.000 € sind
aus den 31.000 € nicht ableitbar.

### 7.10 Fixkostendeckung

Zentrale Gemeinkosten (ANNAHME, ZU VERIFIZIEREN): Buchhaltung und
Steuerberatung 1.500 €, Versicherungen 600 €, Software 500 €, Kfz-Fixkosten
1.200 €, Sonstiges 500 € = 4.300 €, plus digitale Ebene 2.700 € ≈ **7.000 €/Jahr**.

| Benötigte Automaten | Fall A | Fall B, p = 15 % |
|---|---|---|
| 700 € | 7,4 | praktisch nie (35) |
| 950 € | **3,1** | 9,9 |
| 1.200 € | **2,0** | 4,4 |

### 7.11 Gesamtformel

```
Unternehmens-DB (Ebene 3)
 = Σ [ Nettoerlös − Wareneinsatz − variable Automatenkosten
       − Standortvergütung − Impactanteil
       − kalkulatorische Befüllzeit − Abschreibung − Zins ]   je Automat
 + B2B-Deckungsbeitrag
 − digitale Vollkosten
 − zentrale Gemeinkosten
 − Verwaltungs- und Akquisezeit der Gesellschafter
```
Impact nur auf Automatenebene. Tilgung nur in der Cash-Rechnung.

### 7.12 Szenarien

| | Konservativ | Basis | Ausbau |
|---|---|---|---|
| Automaten | 4 (Budgetgrenze) | 8 | 20 |
| Ø Brutto/Monat | 750 € | 950 € | 1.000 € |
| Standortmodell | Fall A | Fall A | Fall A |
| wirtschaftlicher DB je Automat | 1.206 € | 2.235 € | 2.492 € |
| Summe Automaten-DB | 4.825 € | 17.880 € | 49.840 € |
| B2B (**Zielgröße, kein Fakt**) | 0 € | 0 € | 8.000 € |
| − zentrale Gemeinkosten | −4.300 € | −4.300 € | −10.000 € |
| − digitale Ebene | −2.700 € | −2.700 € | −5.000 € |
| **Ergebnis Ebene 3** | **−2.175 €** | **≈ 10.880 €** | **≈ 42.840 €** |
| *Cash vor Kapitaldienst* | *≈ 7.300 €* | *≈ 25.900 €* | *≈ 82.000 €* |

Konservativ ist das Unternehmen **cash-positiv, wirtschaftlich negativ** — die
Gesellschafter arbeiten, ohne dass ihre Zeit verdient wird. Für eine
Aufbauphase vertretbar, aber kein Gewinn.

**Zum Ausbauszenario:** Der DB von 2.492 € je Automat ist mit Einzelanfahrt
gerechnet (3 h, 60 km). Dann beträgt der Befüllaufwand 20 × 3 h = **60 Stunden
im Monat** plus Verwaltung — das übersteigt die Leistungsfähigkeit zweier
nebenberuflicher Personen. Gilt stattdessen die Routendichte aus 7.6 (2 h,
33 km), sind es 40 Stunden, der DB steigt auf **2.888 €** je Automat und das
Ergebnis auf **≈ 50.800 €**. Beides zugleich ist nicht möglich; welche der
beiden Annahmen gilt, entscheidet die Messung des tatsächlichen
Routenaufwands (ZU VERIFIZIEREN). Die Tabelle führt bewusst die konservative
Variante.

### 7.13 Wird B2B-Werbung gebraucht?

**Nein in Fall A** — das Basisszenario trägt sich mit null Werbeerlösen. Das ist
ein strategischer Vorteil, weil keine Abhängigkeit von einem ungeprüften Markt
entsteht. **Ja in Fall B** — dort wird Werbung zur Notwendigkeit.
Planungswert bleibt 0 €; die wirtschaftliche Realität ist ZU VERIFIZIEREN.

## 8. Was bewusst entfällt

Kostenpflichtiges Abo, Dauerrabatt, Prepaid, Kundenidentifikation am Automaten,
native App, Punkte und Challenges, tägliche Nutzungsgewohnheit. Jeder Punkt
entfällt, weil der zentrale Mechanismus ohne ihn funktioniert.

## 9. Die fundamentale Entscheidung

**Das Fundament von Bördesnack24 ist ein dichtes regionales Automatennetz mit
einer harten Aufnahmeschwelle je Standort: **Amortisation = 7.000 € ÷
(wirtschaftlicher DB + Abschreibung) unter drei Jahren**, geprüft aus der
Kombination von Umsatz, Standortvergütung, Marge, Arbeitszeit, Fahrtkosten,
Strom und Gebühren. Die frühere Formulierung „mindestens 950 € **oder**
höchstens 10 %" war logisch unzulässig: Bei 950 € und 10 % Vergütung beträgt
die Amortisation 3,3 Jahre und verletzt die eigene Regel. Die
Drei-Jahres-Grenze ist ein Managementziel (ANNAHME), kein Rechenergebnis. Der zweckgebundene Anteil bleibt das Akquiseinstrument, ist
aber nur vorteilhaft, wenn er eine Vergütung über 5 % ersetzt. Die digitale
Ebene bleibt eine Website und wird an Akquisestunden gemessen.**

Die Rechnung hat den Kern präzisiert, nicht widerlegt: Der Mechanismus ist keine
Ertragsquelle, sondern eine Einkaufskondition im Wert von (p − 5) % des
Nettoerlöses. Die größte Gefahr ist nicht ein falsches Produktkonzept, sondern
ein schwacher Standort mit zehn Jahren Amortisation. Die zweitgrößte ist die
Umsatzsteuerstruktur, die den Jahres-DB um bis zur Hälfte verschiebt.

## 10. Entscheidungsreife — fehlende Größen

| Fehlende Größe | Wer liefert | Konkrete Frage | Status |
|---|---|---|---|
| Standortvergütungsmodelle | Standortgeber, drei Gespräche | „Welche Beteiligung oder Miete haben Ihnen andere Betreiber angeboten, und in welcher Form?" — **nicht** „Wären Sie mit einer Spende einverstanden?" | ZU VALIDIEREN |
| Umsatzkorridor je Standorttyp | Standortgeber, ggf. Vergleichsautomat | Mitglieder-, Besucher-, Trainingszahlen, Betriebstage im Jahr | ZU VALIDIEREN |
| Routen- und Arbeitsaufwand | eigene Messung an Automat 1 | Fahrt- und Befüllzeit über acht Wochen protokollieren | ZU VALIDIEREN |
| Anschaffungspreis und Finanzierung | Automatenland, KfW | Gerätepreis je Typ, Zahlungs- und Telemetriegebühren, Tilgungsplan | ZU VERIFIZIEREN |
| Konstruktion des 5-%-Mechanismus, Produktmix-USt | Steuerberatung | Sponsoring oder Spende; Steuersätze je Warengruppe inkl. Heißgetränke | ZU VERIFIZIEREN |

Das Geschäftsmodell wird bis zur Beschaffung dieser fünf Größen **nicht weiter
verändert**.

## Anhang A — Prüfbericht nach `boerdesnack24-verify`

**Betriebsmodus:** Repo-Modus.
**Änderung:** Hinzufügen dieses Dokuments und von `docs/COMPLIANCE.md`.
**Datenklasse:** D0 — reine Konzeptdokumentation, keine personenbezogenen Daten,
keine Zahlungs- oder Belegdaten, kein Code, keine Konfiguration.
**Änderungsklasse:** K1 — additiv.
**Impact-Analyse:** Keine Funktion teilt mit dieser Änderung eine Aufruf-,
Tabellen-, Endpunkt-, Policy- oder Integrationsbeziehung. Betroffene Funktionen: keine.
**Security-Regression:** nicht einschlägig (D0, kein Code, keine API, keine RLS).
**Legal Impact:** siehe `docs/COMPLIANCE.md`, Zeile „Strategiedokumentation".

### Codelöschung — geprüft und abgelehnt

Auftrag war, obsoleten Code zu entfernen, falls vorhanden. Ergebnis der
Suche (nicht der Erinnerung):

`nayax` ist **keine isolierte Altlast**, sondern teilt tragende Ressourcen mit
aktiven Funktionen:

- `app.purchase_source` (Enum `'nayax','manual','import'`, Migration 0010) — verwendet von `purchases`
- `app.movement_source` (Enum, Migration 0006)
- `public.nayax_sales` samt RLS-Policy `nayax_read` und Index (Migration 0006)
- `machines.nayax_terminal_id` (Migration 0006)
- Migration 0059 schreibt auf `nayax_sales`
- Migration 0054 nennt die Tabelle im Performance-Kontext
- `iot-webhook/index.ts` enthält einen eigenen `nayax`-Adapter
- **kundensichtbar:** `receipts_screen.dart` bildet `'nayax'` auf „Automat" ab; `receipt.dart` führt das Feld; `receipts_screen_test.dart` prüft es
- `telemetry_hub_screen.dart` bietet `nayax` als Providerwert an

Ein Entfernen wäre **K4 (destruktiv)**: Enumwerte lassen sich in PostgreSQL nicht
ohne Typneuanlage entfernen, angewandte Migrationen werden nicht nachträglich
gelöscht, und das Belegarchiv der Kunden-App würde brechen.

Hinzu kommt der fachliche Grund: Die Entscheidung, die diesen Code obsolet
machen würde, ist nach Abschnitt 10 ausdrücklich **nicht entscheidungsreif**.
Bis dahin ist jede Löschung eine Wertvernichtung vor der Entscheidung.

**Ergebnis: nichts gelöscht.** Kandidatenliste für eine spätere, ausdrücklich
freizugebende Bereinigung:

| Kandidat | Voraussetzung für Entfernung |
|---|---|
| `supabase/functions/nayax-webhook/` | schriftliche Bestätigung, dass CleverPay nicht auf einem Nayax-Backend aufsetzt |
| `nayax`-Adapter in `iot-webhook/index.ts` | dito |
| Abo-, Status- und Challenge-Logik (Migration 0058, `subscription_*`-Screens) | Beschluss, dass das Abo dauerhaft entfällt, plus Migrationspfad für bestehende Daten |
| Flutter-Kundenbereich insgesamt | Beschluss „keine App", plus Klärung, was die Gesellschafter-App davon übernimmt |

**Status dieser Änderung: 🟢 GRÜN** — D0/K1, keine betroffenen Funktionen,
Legal-Matrix vollständig geführt, keine Codeänderung.
Zählstand: 🔴 0 · 🟡 0 · 🟢 1.

**Offen bleibt davon unberührt** der Gesamtstatus des Geschäftsmodells: fünf
Größen nach Abschnitt 10 sind ZU VERIFIZIEREN bzw. ZU VALIDIEREN.

---

## Nachtrag 2 (16.09.2026) — Querfinanzierungsthese des Gründers

### Die Aussage

Philipp hat die Absicht hinter dem Abo präzisiert. **FAKT (Angabe des Gründers):**

1. Der 5-%-Dauerrabatt bezieht sich auf **Automatenverkäufe**, nicht auf
   Abo-Umsätze.
2. Die 0,99 € sind **bewusst niedrig angesetzt**, um möglichst viele Kunden zum
   Abschluss zu bewegen. Die Gebühr ist kein Ertragsziel.
3. Der eigentliche Zweck ist **Querfinanzierung**: Viele App-Nutzer machen das
   B2B-Angebot — digitale und analoge Werbung — wertvoll. Dort soll der Umsatz
   entstehen.

### Was davon die bisherige Rechnung bestätigt

Punkt 1 war in der Unit-Economics-Rechnung bereits so angesetzt: Der Rabatt
mindert den Rohertrag je Automatenverkauf, nicht die Abogebühr. Die Zeile
„entgangener Rohertrag durch 5 % Dauerrabatt bei Ø-Warenkorb 1–3 €" rechnet
genau das. An den Zahlen ändert sich dadurch nichts.

### Was neu ist und geprüft werden muss

Punkt 2 und 3 verschieben den Zweck des Abos: Es ist kein Erlösprodukt, sondern
ein Mittel, um eine Nutzerbasis aufzubauen, die B2B vermarktbar macht. Damit ist
die Frage nicht mehr „trägt sich das Abo", sondern **„erzeugt das Abo eine
Nutzerbasis, die genug Werbeerlös trägt".**

### Die Rechnung dazu

ANNAHME, Szenario aus Abschnitt 7.12: 300 aktive Nutzer, vier App-Öffnungen im
Monat. Das ergibt **1.200 Sichtkontakte im Monat, rund 14.400 im Jahr**.

Damit In-App-Werbung die im Ausbauszenario angesetzten 8.000 € im Jahr trägt,
müsste der Tausenderkontaktpreis bei rund **555 €** liegen. Selbst bei einem für
regionale Verhältnisse ambitionierten Tausenderkontaktpreis von 20 € (ANNAHME,
ZU VERIFIZIEREN — kein belastbarer Marktwert erhoben) ergäben 14.400 Kontakte
etwa **288 € im Jahr**. Zwischen beiden Werten liegt der Faktor 28.

**Ergebnis:** Digitale In-App-Werbung trägt bei dieser Nutzerzahl keine Säule des
Geschäftsmodells. Nicht, weil die These falsch wäre, sondern weil die
Reichweite dafür um eine Größenordnung zu klein ist.

### Der Widerspruch im Instrument

Die Querfinanzierungsthese verlangt **maximale Reichweite**. Die 0,99 € sind das
größte Hindernis dafür: Der Schritt von kostenlos auf einen beliebigen
Positivbetrag kostet erfahrungsgemäß den weitaus größten Teil potenzieller
Nutzer — der Schritt von 0,99 € auf 1,99 € kostet vergleichsweise wenig
(HYPOTHESE, in der Produktpraxis gut gestützt, hier nicht gemessen).

Dazu kommen drei Kosten, die eine kostenpflichtige App auslöst und eine
kostenlose nicht:

* Verbraucherrechtliche Pflichten: Widerruf, Kündigungsschaltfläche,
  Laufzeitgrenzen, Preisangaben.
* Store-Abwicklung mit 15 bis 30 % Provision und Review-Aufwand.
* Minderjährigenproblematik, die an den Standorten Sporthalle und Schwimmbad
  besonders wiegt.

**Damit ist das Abo für den erklärten Zweck das falsche Instrument:** Es
reduziert genau die Größe, die es steigern soll, und erkauft damit einen Erlös,
der nach der Rechnung in Abschnitt 7 ohnehin deckungsbeitragsnegativ ist.

### Wo die These dagegen trägt

Die Unterscheidung liegt nicht zwischen „Werbung ja" und „Werbung nein",
sondern zwischen zwei völlig verschiedenen Produkten:

| | digitale In-App-Werbung | Werbefläche und Sponsoring am Automaten |
|---|---|---|
| verkauft wird | Reichweite, Kontakte | Präsenz an einem Ort und Verbindung mit einer lokalen Sache |
| Preislogik | Tausenderkontaktpreis | Jahrespauschale wie bei Bandenwerbung im Vereinssport |
| skaliert mit | Nutzerzahl der App | Zahl und Qualität der Standorte |
| bei 300 Nutzern | ≈ 288 €/Jahr | unabhängig von der Nutzerzahl |
| braucht ein kostenpflichtiges Abo | nein | nein |

Fünf Standorte mit je einem lokalen Partner zu einer Jahrespauschale von 500 €
(ANNAHME, ZU VALIDIEREN) ergäben 2.500 € im Jahr — und zwar **ohne einen
einzigen App-Nutzer**. Das ist die tragfähige Form der Querfinanzierung.

### Offene Entscheidung

Die These des Gründers ist in der Richtung richtig und in der Wahl des Trägers
zu prüfen. Zu entscheiden ist:

**Wird das Abo abgeschafft, um Reichweite zu maximieren — oder wird die
Querfinanzierung von der App auf den Automaten als Werbeträger umgestellt, womit
das Abo für diesen Zweck entbehrlich wird?**

Beides führt zum selben Ergebnis für das Abo. Die Entscheidung liegt beim
Gesellschafterkreis, nicht in der Technik. Sie ist mit derselben
Datenbeschaffung verbunden wie Abschnitt 10: Was zahlt ein regionales
Unternehmen tatsächlich, und wofür? Drei Gespräche mit möglichen Werbepartnern
beantworten das schneller als jede weitere Rechnung.
