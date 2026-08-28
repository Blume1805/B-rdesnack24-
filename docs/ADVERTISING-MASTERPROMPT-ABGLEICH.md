# Werbenetzwerk: Abgleich des Masterprompts mit dem Bestand

**Stand: 27.08.2026 · Fassung 5 · Schritt 16, Datenmodell umgesetzt**

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

**Datenmodell (Punkt 42): sechs neue Tabellen statt siebzehn.**
Neu: `leads`, `lead_activities`, `advertising_campaigns`,
`advertising_creatives`, `sponsorships` und ein Zähler für Weiterleitungen
(eine Zeile je Kampagne und Tag).
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

## Werbeangebot: digital, analog, komplett

**Fassung 3, 27.08.2026.** Der Auftraggeber hat zwei Vorgaben nachgereicht:
Coupons werden **nicht nach Einlösung** abgerechnet, sondern als **Logoplatz auf
einem Anlass** vergeben; und der Kunde wählt zuerst zwischen **digitaler Werbung
(App)** und **analoger Werbung (Automat)**, mit Einzel- und Komplettpreisen je
Welt.

### Der Coupon-Anlass als Werbeplatz

Bördesnack24 gibt ohnehin Gutscheine aus. Der Werbekunde kauft nicht die
Einlösung, sondern das Logo darauf: „Dein Geburtstagsgutschein, präsentiert von
Autohaus Müller." Das ist ein Platz, kein Erfolgsversprechen, und damit ohne jede
Reichweitenzahl verkäuflich. **Je Anlass gibt es genau einen Partner
gleichzeitig**, das ist Knappheit aus der Sache und nicht aus einem Zähler.

Welche Anlässe es gibt, am Code geprüft:

| Anlass | Leistung | Stand |
|---|---|---|
| Tagesangebot | Angebot des Tages, für alle | **gebaut**, `offers.kind = daily`, 64 Einträge |
| Geburtstag | 50 % auf ein Produkt der Wahl, 14 Tage | **gebaut**, `PersonalOfferSource.birthday` |
| Meilenstein | 5, 10, 15 oder 25 % bei erreichter Stufe | **gebaut**, `loyalty` |
| Jahrestag der Anmeldung | 30 % auf ein Produkt der Wahl, 14 Tage | **gebaut**, `anniversary` |
| Persönliches Angebot | 10 % aus dem bisherigen Einkauf | **gebaut**, `auto` |
| Wochenangebot | vom Auftraggeber genannt | **fehlt**, `offers.kind` kennt nur `daily` |

Das Wochenangebot lässt sich in einem Tag ergänzen, verkaufen kann man es erst
danach.

**Folge für die Kennzeichnung:** Vier der fünf Anlässe wählen das Produkt
regelbasiert aus und tragen deshalb bereits das Kennzeichen für algorithmische
Auswahl. Kommt ein Sponsorenlogo dazu, steht auf derselben Karte zusätzlich
„Anzeige". Zwei Kennzeichen auf einer Karte sind kein Fehler, sie müssen nur
gestaltet werden.

### Die Dauer bestimmt die Zahl der Anlässe

| Laufzeit | Anlässe | Auswahl |
|---|---|---|
| 3 Monate | 1 | ein Anlass nach Wahl |
| 6 Monate | 2 | zwei Anlässe nach Wahl |
| 12 Monate | alle | exklusiv, kein zweiter Partner auf irgendeinem Anlass |

Längere Bindung bringt mehr Fläche statt Rabatt. Der Kunde bekommt etwas
Sichtbares, wir behalten den Preis.

### Digital, in der App

| Leistung | Preis |
|---|---|
| Logo auf einem Coupon-Anlass | 15 € je Monat, ab 3 Monaten |
| Logo auf allen Anlässen, exklusiv | 45 € je Monat, ab 12 Monaten |
| Unternehmensprofil in der App | 12 € je Monat |
| Beitrag unter „Neues", etwa Stellenanzeige | 49 € für 30 Tage |
| Social Media, Beitrag mit Story | 49 € (Story 25 €, Reel 99 €) |
| **Digital komplett** | **99 € je Monat**, einzeln 122,33 €, rund 19 % weniger |

### Analog, am Automaten

| Leistung | Preis |
|---|---|
| Teilfläche Front, etwa DIN A3 | 15 € je Monat, ab 6 Monaten |
| Front komplett | 39 € je Monat |
| Seitenfläche, je Seite | 25 € je Monat |
| Aushang A5 mit QR an allen Automaten | 19 € je Monat, Druck enthalten |
| Namensrecht am Standort | 49 € je Monat, nicht Teil der Pakete |
| **Analog komplett** | **89 € je Monat**, einzeln 108 €, rund 18 % weniger |

### Beides zusammen

| Paket | Preis |
|---|---|
| **Komplett, digital und analog** | **149 € je Monat**, einzeln 188 €, rund 21 % weniger |
| Starter, Logo auf einem Anlass plus Unternehmensprofil | 25 € je Monat, ab 3 Monaten |
| Einmalig: Logo für die App aufbereiten | 39 €, entfällt ab 12 Monaten und in jedem Paket |
| Einmalig: Produktion und Montage je Fläche | 90 €, offen ausgewiesen |

### Reichweitenstaffel, nur für die digitale Hälfte

| Stufe | Aktive Konten im Vormonat | Faktor |
|---|---|---|
| **Pionier**, aktuell gültig | unter 100 | 1,0 |
| Aufbau | 100 bis 499 | 1,5 |
| Etabliert | ab 500 | 2,5 |

„Aktiv" heißt mindestens eine Öffnung in 30 Tagen, gezählt. Die Flächenpreise am
Automaten bleiben unberührt, sie hängen an der Fläche. Pionierverträge behalten
Stufe 1 für 24 Monate.

### Was im Angebot stehen muss, damit es hält

* Die Zahl der aktiven Konten des Vormonats, ausgeschrieben. Heute zwei, beide
  intern.
* Kein Wort über Impressionen oder Sichtkontakte.
* Jede bezahlte Platzierung trägt sichtbar **„Anzeige"** als Text. Auf einem
  Gutschein, der aussieht wie eine Wohltat des Hauses, gilt das besonders.
* **Der Gutschein bleibt unser Gutschein.** Der Sponsor bekommt einen Platz
  darauf, aber keinen Einfluss darauf, wer ihn bekommt und wofür er gilt. Sonst
  würde aus dem Logoplatz eine Auswahl nach Werbeinteresse.
* Der Sponsor erfährt nicht, wer einen Gutschein bekommen hat. Keine Namen, keine
  Geburtstage, keine Kaufhistorie.

### Der Bericht am Ende der Laufzeit

Vorgabe des Auftraggebers: Nach Vertragsende erhält der Werbekunde eine
Übersicht mit **zwei Angaben**, anonym, nur Anzahlen, keine Kundendaten.

**Die erste Zahl heißt je nach Anlass etwas Verschiedenes**, und das ist der
Unterschied zwischen zählbar und geschätzt:

| Anlass | Was im Bericht steht | Woher |
|---|---|---|
| Geburtstag, Meilenstein, Jahrestag, persönliches Angebot | „An **47** Kundinnen und Kunden ausgegeben" | Zeilen in `personal_offers`, je Kunde eine |
| Tagesangebot | „Von **31** Kundinnen und Kunden aktiviert", dazu die Zahl der Tage | `offer_activations`, existiert bereits |
| alle | „**23** Aufrufe Deiner Website über den Gutschein" | Zähler je Kampagne und Tag |

Das Tagesangebot ist eine Zeile für alle. Wie viele Menschen sie gesehen haben,
wissen wir nicht und würden es nur erfahren, wenn wir jeden Blick mitschreiben.
Das wollen wir nicht.

**Zwei Wörter, die im Bericht nicht vorkommen:** „gesehen" und „Personen". Wir
wissen nicht, wer hingesehen hat, und ein Aufruf ist kein Mensch. Wer denselben
Link dreimal antippt, erzeugt drei Aufrufe. Das steht als Satz unter der Zahl.

**Der Klick wird gezählt, ohne dass ein Klick gespeichert wird.** Der Link führt
über eine eigene Weiterleitungsadresse. Dort wird kein Ereignis abgelegt, sondern
ein Zähler erhöht: eine Zeile je Kampagne und Tag. Kein Nutzerkennzeichen, keine
IP, keine Sitzung, kein Cookie. Damit gibt es nichts zu anonymisieren, weil nie
etwas Personenbezogenes entsteht. Das ist der Unterschied zwischen „wir werten
anonymisiert aus" und „es ist anonym"; nur das Zweite hält einer Prüfung stand.
Was wir nicht verhindern können und deshalb im Angebot steht: Der Server des
Werbekunden sieht die IP des Besuchers, sobald er dort ankommt.

**Mindestzahl 30 je ausgewiesener Angabe.** Bei zwei aktiven Konten wäre „an 2
Kunden ausgegeben, 1 Aufruf" kein Bericht, sondern ein Steckbrief. Darunter steht:
„Weniger als 30, wir weisen die Zahl nicht aus." Kein Näherungswert, keine Spanne,
keine Grafik ohne Achse. Der erste Bericht dieses Jahres wird voraussichtlich genau
so aussehen. Das entwertet das Angebot nicht: Verkauft wurde ein Platz, kein
Ergebnis.

**Was dafür entsteht:** der Zähler als sechste Tabelle, ein Feld an Gutschein und
Angebot für die Kampagne, eine Weiterleitung als Edge Function, die nichts
protokolliert, auch nicht versehentlich über die Serverprotokolle des Anbieters.
**Datenschutzerklärung und Verarbeitungsverzeichnis werden fällig** — auch eine
Zählung ohne Personenbezug ist eine Verarbeitung, die beschrieben gehört, schon
damit nachvollziehbar ist, dass sie ohne Personenbezug arbeitet.

Die Einlösung wird bereits gezählt und steht bewusst **nicht** im Bericht, weil
zwei Zahlen vereinbart sind. Sie ließe sich ohne Zusatzaufwand ergänzen.

**Nicht möglich:** Push-Benachrichtigungen, `device_tokens` hat 0 Zeilen.
**Weiter zurückgehalten:** Premium-Partner beim App-Start, weil Exklusivität dort
die ganze Leistung ist und sich einmal vergeben nicht neu verkaufen lässt.

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

## Antworten vom 27.08.2026

3. **Bestätigt: Display, Regional Takeover, Marktplatz, Gewinnspiele
   entfallen.** Nicht gebaut, nicht in der Roadmap.
4. **Standortnamen werden nachgetragen** — vom Auftraggeber, nicht von hier
   aus geraten.
5. **Dritte Zahl im Bericht: Einlösungen.** `advertising_campaign_report`
   liefert jetzt Ausgabe/Aktivierung, Einlösung und Aufrufe — alle mit der
   Mindestzahl 30.
6. **Kein Wochenangebot.** Es bleibt bei den fünf bestehenden Anlässen
   (Tagesangebot, Geburtstag, Meilenstein, Jahrestag, persönliches Angebot).
7. **Umsetzung begonnen.** Migrationen 0154–0155.

Weiterhin offen: die Preisliste (Punkt 1) und die Pionierklausel (Punkt 2) —
beides Vertragsinhalt, nicht Code, blockiert die Umsetzung deshalb nicht.

## Was gebaut ist (Migrationen 0154–0155)

Sieben neue Tabellen: `leads`, `lead_activities`, `advertising_campaigns`,
`advertising_creatives`, `sponsorships`, `advertising_coupon_sponsorships`,
`advertising_redirect_counts` — mehr als die sechs aus der ersten Schätzung
vom 27.08.2026, weil der Weiterleitungszähler als eigene Tabelle dazukam.
Vier neue Rechte: `leads.manage`, `advertising.manage`,
`creatives.approve`, `sponsorship.manage`. **Keine neue Spalte auf
`businesses`** — ein Unternehmen ist Werbekunde, weil es eine Kampagne hat,
und Sponsor, weil es eine Zeile in `sponsorships` hat; das erfüllt Punkt 62
(ein Konto, mehrere Aktivitäten) ohne eine Eigenschaftsspalte, die denselben
Sachverhalt zweimal sagen würde.

**Der Coupon-Anlass als Werbeplatz** ist über einen Datenbank-Ausschluss
abgesichert (`exclude using gist (anlass with =, laufzeit with &&) where
(status in ('zur_unterschrift','aktiv'))`) — dieselbe Mechanik wie die
Doppelbelegung von Werbeflächen (0145). Nachgestellt: zwei Kampagnen
verschiedener Werbekunden auf denselben Anlass, überlappender Zeitraum,
beide als Entwurf zulässig, beim Verbindlichmachen des zweiten `23P01`.

**Der Abschlussbericht** (`advertising_campaign_report`) leitet Ausgabe,
Aktivierung und Einlösung rückwirkend aus `personal_offers` und
`offer_activations` her, ohne dass diese je eine Kampagnen-Spalte bekommen
hätten — der Ausschluss garantiert, dass während der gebuchten Zeit nur ein
Logo auf dem Anlass stand. Dabei aufgefallen und korrigiert: `personal_
offers.source` speichert englische Werte (`birthday`, `loyalty`,
`anniversary`, `auto`), der neue `app.coupon_anlass`-Typ ist deutsch
benannt. Ein textgleicher Vergleich hätte für vier von fünf Anlässen
dauerhaft 0 Treffer ergeben, ohne dass ein Fehler aufgetreten wäre — jetzt
bildet `app.coupon_anlass_zu_offer_source()` explizit ab.

**Der Weiterleitungszähler** (`advertising_redirect_count`) ist für `anon`
freigegeben und kann ausschliesslich hochzählen, nichts lesen — der Aufruf
kommt von einem angetippten Link ohne Anmeldung.

Alles mit echten Kennungen nachgestellt: Firmenadmin sieht die eigene
Kampagne, nicht die fremde; interne Leads bleiben dem Werbekunden
verschlossen (`leads.manage`, nicht `is_business_member`); der Bericht
verweigert sich einer fremden Kennung.

### Ein Fund unterwegs, außerhalb dieses Auftrags

Beim Nachstellen der Zeilensicherheit für den Bericht zeigte eine Kennung
ohne aktives Profil vollen Zugriff auf einen fremden Bericht — die Ursache
lag nicht im neuen Code, sondern in `public.is_admin()` selbst, die für ein
gesperrtes oder gelöschtes Konto NULL statt `false` lieferte und damit jede
Prüfung der Form `is_admin() or X` unbemerkt umging, in 23 bestehenden
Migrationen. Geschlossen mit Migration 0156, gegengeprüft über alle
booleschen `security definer`-Funktionen im Schema. Ausführlich in
`docs/VERARBEITUNGSVERZEICHNIS.md` Abschnitt 4 und `CLAUDE.md`.

## Noch nicht gebaut

* **Die Edge Function für die Weiterleitung selbst** — die Tabelle und die
  RPC stehen, der öffentliche Umleitungsendpunkt (`/w/<campaign>` o. ä.)
  noch nicht.
* **Jede Oberfläche.** Weder ein interner Bildschirm für Leads/Kampagnen/
  Sponsoring in der Verwaltung noch etwas im Firmenportal bei Lovable. Reine
  Backend-Migration, wie Werbeflächen (0145/0146) es vor dem 27.08.2026 auch
  war.
* **Die Landing Page** „Werbung bei Bördesnack24".
* **Das Wochenangebot** — bewusst nicht gebaut, siehe Antwort 6 oben.
