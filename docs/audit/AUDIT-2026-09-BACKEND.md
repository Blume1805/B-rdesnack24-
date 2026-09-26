# Backend-Prüfung 26.09.2026

Umfang: Supabase-Datenbank (Tabellen, Zeilenschutz, Funktionen, Rechte,
Speicher-Buckets), Edge Functions, das Zusammenspiel mit der ausgelieferten
App. Skills: `boerdesnack24-verify`, `boerdesnack24-security-regression`,
`boerdesnack24-legal-impact`.

Alle Nachweise stammen aus Läufen gegen **lokale Nachbauten**. Tests gegen
die Produktion sind untersagt; die Produktion wurde weder gelesen noch
verändert.

Dateien zu diesem Bericht: `docs/audit/2026-09-26-backend/`.

---

## 1. Sachverhalt

### 1.1 Es gibt zwei Datenbank-Stände — und nur einer ist die Produktion

Das Repository führt zwei Migrationsverzeichnisse, die sich am 04.08.2026
getrennt haben:

| Linie | Ort | Stand | Was sie ist |
| --- | --- | --- | --- |
| **main** | `supabase/migrations/0001…0070` | 70 Dateien mit Nummern | Baut die CI-Testdatenbank. **Nicht** die Produktion |
| **Produktion** | Branch `claude/bordesnack24-audit-architecture-7xd3d6`, `supabase/migrations/2026…` | 233 Dateien mit Zeitstempel | Am 02.09.2026 per Fingerabdruck als identisch mit der Produktion nachgewiesen (Policies, Rechte, Funktionsrümpfe) |

Belege:

* Die ausgelieferte App (`apps/mobile`, main) ruft 14 Funktionen auf, die es in
  der main-Linie nicht gibt, wohl aber in der Produktionslinie —
  z. B. `donation_pool_summary`, `my_notifications`, `my_invoices`.
* Sechs Befunde, die ich zuerst in der main-Linie gefunden hatte, sind in der
  Produktionslinie längst behoben (Abschnitt 3.3).
* `main` und der Produktions-Branch haben seit dem gemeinsamen Vorfahren
  `6244a51` (04.08.2026) 63 bzw. 123 eigene Commits.

Nach dem 02.09.2026 sind laut Übergabe vom 14.09.2026 mehrere Migrationen der
Produktionslinie geschrieben, aber **nicht** ausgerollt (Supabase-Zugang nicht
autorisiert). Welche davon in der Produktion stehen, lässt sich von hier aus
nicht messen.

### 1.2 Vorgehen

1. Produktionslinie in einen frischen PostgreSQL 16 eingespielt: **233 von 233**
   Migrationen fehlerfrei (`scripts/pruefumgebung/README.md`).
2. Alle **24 Prüfskripte** der Prüfumgebung in der vorgesehenen Reihenfolge.
3. Katalogprüfung: Funktionen mit Eigentümerrechten ohne erkennbare
   Berechtigungsprüfung, Rechte für `anon`/`authenticated`, Tabellen ohne
   Zeilenschutz, Schreibregeln ohne Personenbezug, Speicher-Buckets,
   Spaltenrechte auf Einkaufspreisen.
4. Jeder Verdacht mit zwei echten Kundenkonten nachgestellt: Angriff und
   Gegenprobe, danach den **gespeicherten** Zustand gelesen.
5. Edge Functions gelesen: Anmeldung, Signaturprüfung, Dienstschlüssel,
   Weg der Daten bis in die Datenbank.

---

## 2. Befunde

| ID | Befund | Klasse | In Produktion? | Stand |
| --- | --- | --- | --- | --- |
| **B-1** | Jedes Kundenkonto kann Käufe erfinden | D5/D6, K3 | **ja**, seit Juli; Schaltfläche in der ausgelieferten App | behoben im Code; **Sperre in der Produktion offen** (Runbook L) |
| **B-2** | Netto- und Spendenbetrag fremder Käufe über die Kauf-ID abrufbar | D3, K3 | unbekannt (Migration vom 07.09.) | behoben im Code; Sperre offen (Runbook L) |
| **B-3** | Bargeld-Soll je Automat für jedes Konto lesbar | D2, K3 | vermutlich nein (14.09., nicht ausgerollt) | behoben im Code; Sperre offen (Runbook L) |
| **B-4** | Terminal-Webhook speichert Käufe mit unbekannter Herkunft `machine` | D5, K2 | nein | behoben in der Produktionslinie (Migration vorbereitet) |
| **B-5** | Terminal-Webhook findet die Einlösefunktion nicht | D5, K2 | nein | behoben in der Produktionslinie (Migration vorbereitet) |
| **W-1…W-6** | Fehler im Prüfwerkzeug selbst | — | — | behoben, Patch vorbereitet |

### B-1 — Scheinkäufe (kritisch)

**Was geht:** `public.dev_add_demo_purchase(p_payment_method, p_total_gross)`
ist ein Entwicklungswerkzeug, das seit Migration 0058 jedem angemeldeten
Konto ausführbar ist. Es legt einen Kauf mit **frei wählbarem Betrag** an.
In der ausgelieferten App steht dazu der Bereich „Demo-Testkauf" mit vier
Schaltflächen (je 4,99 €) auf der Beleg-Seite — sichtbar für jedes Konto.

**Nachgewiesen am Produktions-Nachbau** (Kunde A mit Abo, ein Aufruf mit 30 €):

| Folge | gemessen |
| --- | --- |
| Kauf gespeichert | ja, `source = 'demo'` |
| Treue-Coupons | **0 → 4** echte, einlösbare Coupons (5, 10, 15, 25 %), 14 Tage gültig |
| angezeigter eigener Spendenanteil | steigt (1,55 € für 30 €) |
| Kassenbon-PDF (`receipt-pdf`) | wird erzeugt — mit Steuernummer, USt-IdNr. und USt-Ausweis, ohne Hinweis auf „Demo" |

Über die App-Schaltfläche reichen **sieben Klicks** für den 25-%-Coupon
(7 × 4,99 € = 3.493 Punkte ≥ 3.000). Ein Werkzeug ist nicht nötig.

Zwölf Funktionen behandeln Demo-Käufe wie echte, darunter Treuestufen,
Spendentopf, Firmenrechnungen (`create_invoice_for_purchase`) und der
Bestandsabgang (Trigger `trg_kauf_bestandsabgang` auf `purchase_items`). Nur
Finanz-KPIs und DATEV-Export schließen sie aus (Migration vom 02.08.2026).
Beleg-Liste und Datenexport zeigen sie zu Recht.

**Warum es bisher nicht auffiel:** Prüfskript 81 wertete die Funktion als
„abgewiesen". Der Aufruf war in Wahrheit an einer fehlenden Testvoraussetzung
gescheitert (Fehler 23502, kein aktiver Automat im Prüfbestand), und das
Skript zählte **jeden** Fehler als bestandene Abweisung (W-1).

### B-2 — Fremde Kaufbeträge

`public.purchase_net_items(uuid, numeric)` und
`public.purchase_donation_for(uuid, numeric)` waren für jedes Konto
ausführbar und prüfen nicht, wem der Kauf gehört. Kunde A erhielt für die
Kauf-ID von Kunde B dessen Nettobetrag (4,21 €) und Spendenanteil (0,21 €).
Voraussetzung ist die fremde Kauf-ID; die ist für Kunden über den
Zeilenschutz nicht sichtbar. Alle vier Verwender der Funktionen laufen mit
Eigentümerrechten — für Kunden war ein direkter Aufruf nie vorgesehen.

### B-3 — Bargeld im Automaten

`public.bar_soll(uuid)` liefert, wie viel Bargeld seit der letzten Leerung in
einem Automaten liegt, und war für jedes Konto ausführbar, ohne
Berechtigungsprüfung. Nachgestellt: Kunde A sah 187,50 € in Automat
`aaaa…0001`. Das ist eine Einladung zum Aufbruch. Die Schwesterfunktion
`kassendifferenzen` prüft korrekt `cash.collect` oder `finance.view`.

### B-4 / B-5 — Terminal-Webhook verbucht keine App-Käufe

`supabase/functions/terminal-webhook/index.ts` löst den Freigabecode ein und
legt dann den Kauf an. Beides scheiterte an der Datenbank:

* **B-5:** Der Aufruf `rpc("vend_freigabe_einloesen")` sucht in `public`; die
  Funktion liegt in `app`, und `app` ist über die Schnittstelle nicht
  erreichbar. Fehler 42883 → jeder Code gilt als ungültig → jeder
  app-geführte Kauf wird anonym verbucht.
* **B-4:** Der Kauf wird mit `source = 'machine'` angelegt; der Enum kennt
  nur `nayax, manual, import, demo`. Fehler 22P02 — **nachdem** der Code
  eingelöst ist.

Prüfskript 105 prüfte die Einlösung direkt im Schema `app` als
Datenbank-Eigentümer und damit nicht den Weg, den der Webhook nimmt.
Betrifft nur nicht ausgerollten Code; kein Automat ist in Betrieb.

### W-1 … W-6 — Fehler im Prüfwerkzeug

| ID | Skript | Fehler | Folge |
| --- | --- | --- | --- |
| W-1 | 81 | Jeder Fehlercode zählte als „Abweisung" | B-1 falsch grün |
| W-2 | 81 | Eigene Gegenproben wurden nicht aufgeräumt | 34 → 36 Urteile ohne Änderung |
| W-3 | 92 | Zwei Gegenproben mit überholter Erwartung (`business_update` ist bewusst intern, `docs/SECURITY.md`) | bei jedem Lauf ROT |
| W-4 | 96 | Beleg-Protokoll nur in `old_data` gesucht; ein nie geänderter Kauf steht in `new_data` | bei jedem Lauf ROT |
| W-5 | 50 | Geburtsdatum ohne Urteil (`ok = null`) | Regel nie geprüft |
| W-6 | 70 | Rechnungs-Isolation ohne Rechnung im Prüfbestand | „0" war kein Nachweis |

Merksatz, der sich hier erneut bestätigt hat: **Ein Prüfwerkzeug verfällt wie
der Code, den es prüft** — nur erzeugt es dabei keine roten Zeilen, sondern
grüne.

---

## 3. Rechtliche Würdigung und Sicherheitsbewertung

### 3.1 Datenschutzvorfall? (Art. 33/34 DSGVO)

* **B-1** betrifft ausschließlich das **eigene** Konto des Handelnden. Kein
  Zugriff auf fremde personenbezogene Daten → keine Verletzung im Sinne von
  Art. 4 Nr. 12 DSGVO.
* **B-2** eröffnet den Zugriff auf einen Betrag, der einer anderen Person
  zugeordnet ist — ein personenbezogenes Datum. Es gibt **keinen Hinweis auf
  einen tatsächlichen Zugriff**: Die fremde Kauf-ID ist für Kunden nicht
  sichtbar, und ob die Funktion überhaupt in der Produktion steht, ist offen.
  Eine Schwachstelle ohne festgestellten Zugriff ist keine Verletzung des
  Schutzes personenbezogener Daten. Selbst bei Zugriff wäre das Risiko für
  die Betroffenen gering (ein Einzelbetrag ohne Name, ohne Produkt).
  **Ergebnis: keine Meldung an die Aufsichtsbehörde, keine Benachrichtigung.**
  Diese Entscheidung ist hiermit dokumentiert (Art. 33 Abs. 5 DSGVO analog).
  Neu zu bewerten, falls Runbook L zeigt, dass die Funktion in der
  Produktion stand **und** Protokolle einen Aufruf mit fremder ID belegen.
* **B-3** betrifft Unternehmensdaten, keine personenbezogenen. Aber: ein
  physisches Sicherheitsrisiko.

### 3.2 Steuer und Buchführung (B-1)

**§ 14c Abs. 2 UStG:** Wer wie ein leistender Unternehmer abrechnet und einen
Steuerbetrag gesondert ausweist, obwohl er eine Lieferung **nicht ausführt**,
schuldet den ausgewiesenen Betrag. Berichtigung ist nur auf schriftlichen
Antrag beim Finanzamt möglich, soweit die Gefährdung des Steueraufkommens
beseitigt ist (kein Vorsteuerabzug beim Empfänger oder zurückgezahlt).

Der Kassenbon aus `receipt-pdf` nennt Aussteller, Leistung, Entgelt,
Steuersatz und Steuerbetrag. Nach BFH, Urteil vom 09.07.2025, XI R 25/23,
reicht bei einer Kleinbetragsrechnung (bis 250 €, § 33 UStDV) die Angabe des
Leistungsempfängers nicht als Voraussetzung — ein solcher Bon **kann** eine
Rechnung im Sinne des § 14c Abs. 2 UStG sein. Zu einem Demo-Kauf liegt keine
Lieferung vor.

Einordnung: Empfänger sind ganz überwiegend Verbraucher ohne
Vorsteuerabzug; dann besteht keine Gefährdung des Steueraufkommens, und die
Berichtigung ist erreichbar. Das Risiko ist deshalb **begrenzt, aber nicht
null**, solange nicht feststeht, ob Demo-Belege heruntergeladen wurden.
`receipt-pdf` protokolliert das nicht. Ob überhaupt Demo-Käufe in der
Produktion liegen, zeigt Runbook L, Schritt 3.

Quellen (Stand 26.09.2026): § 14c UStG, Wortlaut über die Suche aus
gesetze-im-internet.de und der BMF-Umsatzsteuer-Handausgabe (Abschnitt 14c.2
UStAE) bestätigt; BFH XI R 25/23 über bundesfinanzhof.de gelistet. Der
direkte Abruf der Primärquellen ist aus der Arbeitsumgebung gesperrt.
**Vorbehalt:** keine steuerliche Beratung; bei einem Befund > 0 in Runbook L
gehört die Frage zum Steuerbüro.

**GoBD / Inventur:** Demo-Käufe lösen einen Bestandsabgang aus. Liegen in der
Produktion welche, stimmt der Soll-Bestand nicht. Solange kein Automat in
Betrieb ist, gibt es keinen realen Bestand, der verfälscht werden könnte.

### 3.3 Befunde aus der main-Linie, die in der Produktion bereits behoben sind

| main-Befund | Produktionslinie |
| --- | --- |
| `upsert_finance_balance_synced`, `generate_weekly_offers`, `run_daily_special_offers`, `grant_birthday_offer`, `grant_anniversary_offer` ohne Prüfung | für Kunden nicht ausführbar |
| `generate_personal_offer(p_customer_id)` gibt fremde Angebote heraus | prüft `auth.uid()` bzw. intern |
| `machine_sales_daily` für alle lesbar | nur Gesellschafter (Lesematrix: A=0, B=0, G=93) |
| `list_document_folders` ohne Prüfung | läuft mit Aufruferrechten, Zeilenschutz greift (A=0) |
| `app_role`/`is_internal` beurteilen fremde Konten | liefern für fremde Konten `null`/`false` |
| `donation_votes` gibt Kunden-IDs preis | nur eigene Stimmen lesbar |

### 3.4 Was ohne Befund geprüft wurde

* Keine Tabelle ohne Zeilenschutz; keine Schreibregel ohne Personenbezug.
* `products.cost_price_net` (Einkaufspreis) für Kunden nicht lesbar.
* Speicher-Buckets: interne Buckets nur intern; `werbelogos` öffentlich
  lesbar, schreibbar nur mit `advertising.manage` — so gewollt.
* Terminal-Webhook: HMAC-SHA256 mit Zeitfenster 5 Minuten und
  zeitkonstantem Vergleich; Größenlimit 64 KB.
* `receipt-pdf` liest mit den Rechten des Aufrufers (Zeilenschutz greift).
* Acht Funktionen in `public` sind ohne Anmeldung aufrufbar: Kataloge,
  Abo-Angebote, KI-Schalter, Abmeldelink, Berichts-Freigabelink (Token ab
  32 Zeichen, Ablauf, Abrufgrenze) und Werbeanfrage — so gewollt. Zwei
  weitere in `app` tragen das Recht, sind für `anon` aber mangels
  Schema-Zugriff nicht erreichbar (Prüfskript 103, T2).

### 3.5 Niedrig, nicht behoben

* `weather-sync` hat keine eigene Anmeldeprüfung und gibt interne
  Fehlermeldungen zurück. Aufrufbar mit dem öffentlichen Schlüssel; Folge
  wäre ein zusätzlicher Abruf der Wetterdaten. Kein Datenabfluss.
* `fetch_email_report_share` schreibt jeden Fehlversuch mit ≥ 32 Zeichen in
  eine Tabelle — ein Ratedurchlauf kann sie füllen. Drosselung fehlt.

---

## 4. Ergebnis — was getan wurde

### 4.1 Korrekturen

| Datei | Wirkung |
| --- | --- |
| `supabase/migrations/0070_scheinkaeufe_sperren.sql` | B-1: Recht entzogen. B-2: Recht entzogen (falls vorhanden). B-3: Prüfung `cash.collect`/`finance.view` ergänzt (falls vorhanden). Läuft unverändert in beiden Linien |
| `supabase/tests/scheinkauf_test.sql` | pgTAP, 5 Prüfungen, mit echtem Kundenkonto |
| `docs/audit/2026-09-26-backend/20260926120000_scheinkaeufe_sperren.sql` | dieselbe Migration für die Produktionslinie |
| `docs/audit/2026-09-26-backend/20260926121000_terminal_webhook_anbindung.sql` | B-4/B-5, nur Produktionslinie: Enum-Wert `machine`, Durchgang `public.vend_freigabe_einloesen` nur für `service_role` |
| `docs/audit/2026-09-26-backend/108_scheinkauf_und_bargeld.sql` | Prüfskript: B-1 bis B-3 mit zwei Kundenkonten und Gesellschafter, 10 Urteile |
| `docs/audit/2026-09-26-backend/109_terminal_webhook_weg.sql` | Prüfskript: der Weg des Webhooks als `service_role`, 5 Urteile |
| `docs/audit/2026-09-26-backend/pruefwerkzeug-korrekturen.patch` | W-1 bis W-6 |
| `supabase/functions/receipt-pdf/index.ts` | kein Beleg zu Demo-Käufen (409) |
| `apps/mobile/…/receipts_screen.dart` | Demo-Bereich nur in Entwickler-Builds; Demo-Käufe als „Demo-Kauf · kein Beleg" gekennzeichnet; PDF-Knopf dafür gesperrt |
| `docs/OPERATIONS.md`, Runbook L | Sperre in der Produktion, mit Diagnose und Kontrolle |

### 4.2 Nachweise

**main-Linie** (lokale Testdatenbank, alle Migrationen bis 0070):

* `scheinkauf_test.sql` **vor** 0070: 3 von 5 rot — darunter „der abgewiesene
  Aufruf hat keinen Kauf gespeichert: have 1, want 0". **Nach** 0070: 5 von 5.
* Alle zehn pgTAP-Dateien: **67 von 67** grün.

**Produktionslinie** (frischer Nachbau, 233 Migrationen + beide neuen):

| Lauf | Ergebnis |
| --- | --- |
| 108 am **unkorrigierten** Nachbau | 5 rot: Scheinkauf gespeichert, **Coupons 0 → 4**, fremder Nettobetrag 4,21, fremder Spendenbetrag 0,21, Bargeld 187,50 € für Kunde A |
| 108 am korrigierten Nachbau, zweimal | 10 von 10 grün, identisch |
| 109 unkorrigiert | 5 rot (42883, 22P02) |
| 109 korrigiert, zweimal | 5 von 5 grün, identisch |
| Gesamtlauf 26 Skripte mit allen Werkzeug-Korrekturen, frischer korrigierter Nachbau | **0 psql-Fehler, 368 Urteile: 238 grün, 0 rot**; 97–109 ohne ein „FEHLER" |
| Vergleich vorher/nachher über alle Urteile von 40–96 | einzige Änderung: `dev_add_demo_purchase` jetzt `ERR:42501` statt `ERR:23502`; sonst nur Zeitstempel |
| Skripte 97–107 | Ausgabe vorher/nachher identisch |
| `bar_soll` nach Korrektur | Rumpf unterscheidet sich vom Original nur durch die ergänzte Bedingung (`diff`) |
| Runbook-Text gegen Migration | Fingerabdruck des Funktionsrumpfs identisch (`8512ae80…`) |
| W-6: absichtlich eingebautes Leck auf `invoices` | Prüfung schlägt an (`A sieht 2, davon fremd 1` → falsch) |

Ohne Urteil bleiben nur die Lesematrix von 40 (von Hand ausgewertet,
Abschnitt 3.3/3.4) und zwei Informationszeilen in 94.

**Edge Function:** `deno lint` ohne Befund. `deno check` war nicht möglich —
esm.sh ist aus der Arbeitsumgebung gesperrt. Die Änderung liest ein
zusätzliches Feld und vergleicht es mit einer Zeichenkette.

**App:** `dart format` ohne Abweichung. `flutter analyze` und `flutter test`
laufen in der CI.

---

## 5. Offene Punkte

| Punkt | Wer | bis | Status |
| --- | --- | --- | --- |
| Runbook L in der Produktion ausführen (Sperre B-1 bis B-3) | Philipp | 28.09.2026 | 🔴 ⏸ EXTERN |
| Ergebnis der Diagnose (Runbook L, Schritt 3) melden; bei Demo-Käufen > 0 Entscheidung über den Altbestand (ausblenden oder entfernen — Produktionsdaten, K4) | Philipp, danach Claude | 30.09.2026 | 🔴 |
| Bei Demo-Käufen von Kundenkonten > 0: § 14c UStG mit dem Steuerbüro klären | Philipp | 15.10.2026 | 🔴 |
| App-Änderung ausliefern (Push nach `main` nur mit Freigabe) | Philipp gibt frei, Claude liefert aus | 28.09.2026 | 🔴 |
| `receipt-pdf` ausrollen (Workflow „Edge Functions ausrollen") | Philipp | 28.09.2026 | 🔴 ⏸ EXTERN |
| **Grundsatzentscheidung:** Welche Migrationslinie ist die eine Wahrheit? Bis dahin: Produktionsmigrationen und Prüfskript-Patch auf den Produktions-Branch übernehmen (Push auf einen fremden Branch nur mit Freigabe) | Philipp | 03.10.2026 | 🔴 |
| Webhook: Einlösen und Verbuchen in **eine** Transaktion | Claude, nach Linienentscheidung | vor erstem Terminal | 🔴 |
| Wer `20260914140000` ausrollt, muss `20260926120000` **danach** ausrollen — sonst kehrt B-3 zurück | wer ausrollt | — | Hinweis |

**Warnung zur main-Linie:** Die Migrationen 0001–0069 dürfen **nie** gegen die
Produktion laufen. Sie enthalten die alten Fassungen von Funktionen, die dort
längst gehärtet sind; ein `create or replace` würde die geschlossenen Lücken
aus Abschnitt 3.3 wieder öffnen.

Zählstand dieses Auftrags: `🔴 ROT: 7  🟡 GELB: 0  🟢 GRÜN: 0` — die
Korrekturen sind nachgewiesen, wirken aber erst mit der Auslieferung. Kein
Punkt ist abgeschlossen, solange die Produktion nicht gesperrt ist.

---

## 6. Optimierungsvorschläge

1. **Eine Migrationslinie.** Die Produktionslinie wird die einzige; die
   main-Linie wird eingefroren und als historisch markiert. Die CI prüft dann
   gegen denselben Stand, der ausgerollt wird — heute prüft sie etwas
   anderes.
2. **Prüfumgebung in die CI.** Die 24 (+2) Skripte laufen bisher nur von Hand.
   Ein CI-Schritt mit Neubau und Gesamtlauf hätte W-3 und W-4 bei jedem Push
   gemeldet.
3. **Demo-Funktionen gehören nicht in die Produktion.** Testdaten entstehen
   über `seed.sql` oder Prüfskripte, nicht über eine Funktion mit
   Kundenzugang. Nach der Linienentscheidung: `dev_add_demo_purchase`
   entfernen (Löschen von Code = Rückfrage).
4. **Automatisierte Grants-Wache:** eine Liste der Funktionen, die Kunden
   ausführen dürfen, als Test festschreiben. Jede neue Funktion mit
   Eigentümerrechten muss dort bewusst auftauchen — sonst bleibt sie rot.
5. **Beleg-Protokoll:** `receipt-pdf` sollte jede Erzeugung protokollieren
   (wer, welcher Kauf, wann). Dann ließe sich die Frage aus 3.2 beantworten,
   statt sie abschätzen zu müssen.
