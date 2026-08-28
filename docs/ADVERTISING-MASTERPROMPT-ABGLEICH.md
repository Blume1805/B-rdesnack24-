# Werbenetzwerk: Abgleich des Masterprompts mit dem Bestand

**Stand: 27.08.2026 · Fassung 2 · Schritte 1 bis 15, noch keine Zeile Code**

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

**Aufgeschoben mit ausdrücklicher Schwelle:** Premium-Partner beim App-Start
erst ab 250 Konten mit mindestens einer Öffnung in 30 Tagen, gemessen.
Exklusivität ist bei diesem Produkt die ganze Leistung; einmal zum Pionierpreis
vergeben, lässt sie sich später nicht neu verkaufen. Reporting erst, wenn die
Automaten Verkäufe melden.

**Nicht möglich, nicht nur unverkäuflich:** Push-Benachrichtigungen.
`device_tokens` hat 0 Zeilen, es kann heute keine Push zugestellt werden.

## App-Werbung, Nachtrag vom 27.08.2026

Der Auftraggeber will App-Werbung jetzt anbieten, nicht ab 250 Konten. Das geht,
wenn der Preis nicht so tut, als gäbe es Reichweite. Zwei Konstruktionen leisten
das, und beide sind für den Werbekunden günstiger als ein Festpreis.

**Erfolgspreis statt Festpreis bei Coupons.** Einlösungen werden bereits gezählt
(`offer_activations`, heute 2 Zeilen). Der Werbekunde zahlt je Einlösung, nicht
je Anzeige. Bei zwei Konten kostet ihn das fast nichts, bei fünfhundert wird es
wertvoll. Kein Satz über Reichweite ist dafür nötig.

**Offene Reichweitenstaffel.** Die Preisliste nennt die geltende Stufe und die
darüber. „Aktiv" heißt mindestens eine Öffnung in 30 Tagen, gezählt.

| Stufe | Aktive Konten im Vormonat | Faktor |
|---|---|---|
| **Pionier**, aktuell gültig | unter 100 | 1,0 |
| Aufbau | 100 bis 499 | 1,5 |
| Etabliert | ab 500 | 2,5 |

Pionierverträge behalten Stufe 1 für 24 Monate. Damit wird die Preisbindung
bezifferbar: Wer heute unterschreibt, zahlt später weniger als die Hälfte dessen,
was ein Neukunde zahlt.

| Leistung in der App und Social | Vorschlag |
|---|---|
| Partner-Coupon | 1,50 € je Einlösung, kein Grundpreis in der Pionierstufe |
| Einrichtung eines Coupons | 39 € einmalig, entfällt im ersten Jahr und in jedem Paket |
| Stellenanzeige unter „Neues", 30 Tage | 49 € |
| Stellenanzeige plus A5-Aushang mit QR an allen Automaten | 89 €, Druck enthalten |
| Social Media, Story-Erwähnung | 25 € |
| Social Media, Beitrag mit Story | 49 € |
| Social Media, Reel | 99 € |

Die Social-Preise sind Produktionspreise, keine Reichweitenpreise. Die
Followerzahlen sind von hier nicht prüfbar und stehen deshalb auch nicht im
Angebot.

### Pakete

| Paket | Preis | Inhalt | Nachlass |
|---|---|---|---|
| Starter, nur App | 29 € je Monat | Coupon ohne Einrichtung zu 1,20 €, eine Story im Monat, Unternehmensprofil, 6 Monate | Einrichtung entfällt |
| Regional | 89 € je Monat | Front komplett, Coupon zu 1,20 €, ein Social-Beitrag im Monat, ein Beitrag unter „Neues" je Quartal | einzeln 104,33 €, rund 15 % |
| Komplett | 179 € je Monat | alle Flächen, Coupon zu 1,00 €, zwei Social-Beiträge, ein Beitrag unter „Neues" je Monat, Partnernennung | einzeln 226 €, rund 21 % |

Laufzeit 12 Monate, Montage einmalig 90 € je Fläche, offen ausgewiesen.

### Was im Angebot stehen muss, damit es ehrlich bleibt

* Die Zahl der aktiven Konten des Vormonats, ausgeschrieben. Heute sind das zwei,
  beide intern.
* Kein Wort über Impressionen, Sichtkontakte oder Reichweite in der App.
* Jede bezahlte Platzierung trägt sichtbar **„Anzeige"** als Text, auch der
  Coupon und der Beitrag unter „Neues". Für einen Beitrag, der aussieht wie
  Redaktion, gilt § 5a UWG doppelt.
* Der Coupon-Report nennt Aktivierungen und Einlösungen, keine Personen, keine
  Uhrzeiten je Person, keine Standortprofile.

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
