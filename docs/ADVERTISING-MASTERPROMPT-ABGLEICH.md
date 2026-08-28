# Werbenetzwerk: Abgleich des Masterprompts mit dem Bestand

**Stand: 27.08.2026 · Fassung 1 · Schritte 1 bis 15, noch keine Zeile Code**

Der Auftrag vom 27.08.2026 beschreibt ein regionales Medien- und Handelsnetzwerk
in 62 Punkten. Dieses Dokument hält fest, was davon schon steht, was fehlt, was
gestrichen gehört und warum. Die ausführliche Fassung mit Preisen und
Umsatzmodell liegt als Artefakt beim Auftraggeber.

## Der Befund, der die Reihenfolge bestimmt

**Es gibt null gemessene Reichweite.** Am laufenden System abgefragt:

| Gegenstand | Stand am 27.08.2026 |
|---|---|
| `purchases` | 0 Zeilen |
| `nayax_sales` | 0 Zeilen |
| `machine_sales_daily` | 93 Zeilen, **Demo-Seed** (die Migration 0023 sagt es selbst: „für die Demo mit Seed befüllt") |
| Automaten | 4 |
| Standorte | 4, alle mit dem Namen „(ANPASSEN)", alle `kind = 'public'` |
| Kundenkonten | 2, beide intern |
| Displays | keine, `machine_telemetry_events` ist leer |

Die drei Automaten liegen im Seed auf 930,12 €, 927,80 € und 924,13 € über
exakt dieselben 31 Tage. So verkauft kein echter Automat.

Zwölf der 62 Punkte verkaufen Reichweite (24, 29, 55, 58 und weitere). Dieselben
Punkte 9 und 45 verbieten erfundene Zahlen, ebenso die Hausregel „Behauptungen
vorher prüfen". Daraus folgt keine Absage, sondern eine andere Reihenfolge:
**Verkauft wird zuerst Sichtbarkeit an einem Ort, nicht Reichweite.**

## Was bereits steht

Werbeflächen als Assets, Mietverträge, Ausschluss gegen Doppelbelegung,
Motivfreigabe, Auslastung und Werbeumsatz je Automat (Migrationen 0145 und
0146), der Bildschirm dazu (27.08.), der Ort als eigene Sache mit
`location_kind` inklusive `club` und `partner` (0114), das Firmenkonto mit
Mitgliedern und geprüfter Mandantentrennung (0117, 0141), Vertrag über den
Ordner Werbeverträge mit DocuSign (0134) und die Rechnung über sevDesk
(0147 bis 0153).

Punkt 62 verlangt **ein** Konto je Unternehmen. Das existiert: `businesses`.

## Entscheidungen

**Datenmodell (Punkt 42): fünf neue Tabellen statt siebzehn.**
Neu: `leads`, `lead_activities`, `advertising_campaigns`,
`advertising_creatives`, `sponsorships`.
`businesses` bekommt eine Spalte für die Eigenschaft (Kunde, Werbekunde,
Sponsor, Verein). Es entfallen `advertising_accounts`, `clubs`, `sponsors`,
`partnerships`, `contracts`, `invoices` und `sponsorship_packages`, weil sie
Vorhandenes duplizieren oder eine Preisliste zur Datenstruktur machen.
`advertising_metrics` und `advertising_placements` kommen erst, wenn es etwas zu
messen gibt.

**Rollen (Punkt 43): keine neun Rollen, vier neue Rechte.**
`leads.manage`, `advertising.manage`, `creatives.approve`,
`sponsorship.manage`. Werbekunde, Sponsor, Verein und Firmenkunde sind Mitglied
eines `businesses` mit der Rolle `admin`, unterschieden durch die Eigenschaft
des Unternehmens. Die vier Systemrollen bleiben.

**Gestrichen, mit Begründung:** Display-Werbung (es gibt keine Displays),
Regional Takeover (verlangt 5 Automaten in einer Region, wir haben 4 im selben
Ort), Werbeflächen-Marktplatz (zeigt Reichweite je Standort an),
Gewinnspiele (hoher Rechtsaufwand, kein Umsatz), Self-Service (lohnt ab etwa 20
Anfragen im Monat), Lead Score (gewichtet nach Reichweite), AI (Punkt 54 sagt
es selbst, und jede Auswahllogik löst bei uns Kennzeichnung und
Registereintrag aus).

**Aufgeschoben mit ausdrücklicher Schwelle:** App-Werbung und Premium-Partner
beim App-Start erst ab 250 Konten mit mindestens einer Öffnung in 30 Tagen,
gemessen. Social Media erst mit belegten Followerzahlen. Reporting erst, wenn
die Automaten Verkäufe melden.

## Preisvorschlag

Hergeleitet aus eigenen Kosten und Vergleichsgrößen (Vereinsheft, Plakat,
regionale Suchanzeigen), nicht aus gemessener Leistung. Nicht im Code
festschreiben, Punkt 23.

| Leistung | Vorschlag |
|---|---|
| Teilfläche Front, etwa DIN A3 | 15 € je Monat, mindestens 6 Monate |
| Front komplett | 39 € je Monat |
| Seitenfläche, je Seite | 25 € je Monat |
| Komplettbranding, alle Flächen | 79 € je Monat |
| Namensrecht am Standort | 49 € je Monat, nur mit Zustimmung des Standortgebers |
| Produktion und Montage | 90 € einmalig je Fläche, offen ausgewiesen |
| Sponsoring eines Vereinsstandorts | ab 25 € je Monat plus Umsatzbeteiligung |

**Pionierklausel statt erfundener Knappheit:** Wer jetzt bucht, bekommt den
Preis für 24 Monate festgeschrieben, und der Vertrag sagt ausdrücklich, dass wir
heute keine Reichweite nennen, weil wir keine gemessen haben. Sobald die
Automaten Verkaufsdaten liefern, bekommt jeder laufende Vertrag den Report
kostenlos.

## Umsatzmodell

Drei Flächen je Automat, Mischpreis 28 € je vermieteter Fläche und Monat
(Summe der Einzelpreise 89 € je Automat, also 29,67 € im Schnitt; bewusst
darunter gerechnet).

| Szenario | Flächen | Auslastung | Werbung im Jahr |
|---|---|---|---|
| Nur die 4 Fronten, zum Frontpreis | 4 | 100 % | 1.872 € |
| 4 Automaten, realistisch nach 12 Monaten | 12 | 40 % | 1.613 € |
| 20 Automaten | 60 | 40 % | 8.064 € |
| 20 Automaten, gut vermietet | 60 | 70 % | 14.112 € |

Vier Automaten tragen kein Werbegeschäft. Der Grund, es trotzdem jetzt zu bauen,
ist Punkt 61: Bei vier Automaten kostet die Umstellung nichts, bei vierzig
kostet sie jede bestehende Beziehung.

## Rechtliches, vorab geklärt

* Werbekennzeichnung als **Text** („Anzeige", „Gesponsert"), nicht nur als
  Symbol. § 5a UWG.
* Keine Kundendaten an Werbekunden. Reporting nur aggregiert und erst ab einer
  Mindestzahl, Vorschlag 30 Vorgänge, sonst ist die Aggregation bei kleinen
  Standorten rückrechenbar.
* Vereinsbeteiligung ist umsatzsteuerlich in der Regel Leistungsaustausch,
  sobald Sichtbarkeit gewährt wird. **Vom Steuerberater bestätigen lassen,
  bevor der erste Vertrag läuft.**
* Namensrecht am Standort braucht die Zustimmung des Standortgebers.
* Jede neue Auswahllogik löst Eintrag im KI-Register, Kennzeichnung in der App
  und eine Ergänzung der Datenschutzerklärung aus.

## Offen, wartet auf Entscheidung

1. Die Preisliste, gemessen an Deiner Kenntnis der regionalen Betriebe.
2. Die Pionierklausel: 24 Monate Preisbindung gegen Referenznennung.
3. Die vier gestrichenen Punkte.
4. **Die Standortnamen.** Alle vier heißen „(ANPASSEN)". Ohne echte Namen lässt
   sich keine Werbefläche verkaufen, weil niemand weiß, wo sie hängt.
