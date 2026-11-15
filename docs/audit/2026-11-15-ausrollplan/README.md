# Ausrollplan für die 14 offenen Änderungen (Stand 15.11.2026)

> **Nachtrag vom selben Tag:** Die Abweichungen N-1 bis N-3 sind gleichgezogen
> (`docs/audit/2026-11-15-nachzug/`). Nachbau und Produktion stimmen seitdem in
> allen geprüften Merkmalen überein; der Abschnitt 1 beschreibt den Stand davor.

**Status: getestet, nicht ausgerollt.** Das Ausrollen braucht die ausdrückliche
Freigabe von Philipp. Grundlage: Messung an der Produktion vom 15.11.2026
(`docs/audit/AUDIT-2026-11-PHASE1-BESTANDSAUFNAHME.md`, Abschnitt 5).

## 1. Ist der lokale Nachbau die Produktion?

Verglichen wurden Nachbau (Produktionszweig bis einschließlich
`sortiment_popcorn_premium_caramel`, PostgreSQL 16) und Produktion (PostgreSQL
17.6), nur über den Katalog, ohne Kundendaten (`fingerabdruck.sql`).

| Merkmal | Ergebnis |
|---|---|
| Spalten (1272) | identisch |
| Auslöser (93) | identisch |
| Aufzählungswerte | identisch |
| Aufrufrechte aller Funktionen für `anon` und `authenticated` | identisch (ohne die drei am 15.11. gesperrten) |
| Funktionen (247) | 237 identisch. 8 unterscheiden sich nur in Kommentaren. 2 sind in der Produktion **weiter** als im Repository (siehe N-1) |
| Zeilenschutz-Regeln | Produktion hat alle Regeln des Nachbaus und 8 zusätzliche auf 6 Tabellen (N-2) |
| Dateispeicher | Produktion hat einen Bereich und 2 Regeln mehr (N-3) |

### Abweichungen (neu, für das Audit-Protokoll)

| Nr. | Befund | Bewertung |
|---|---|---|
| N-1 | `request_document_review` und `set_document_valid_until` tragen in der Produktion `#variable_conflict use_column` und voll benannte Spalten (`profiles.id` statt `id`). Diese Korrektur fehlt im Repository | Niedrig. Die Produktion ist richtig; das Repository nachziehen, sonst geht die Korrektur bei einem Neuaufbau verloren. Keine der 14 offenen Migrationen fasst die beiden Funktionen an |
| N-2 | Regeln `machine_devices_read/_insert/_update`, `machine_health_read`, `machine_slots_read`, `machine_slots_history_read`, `machine_telemetry_events_read`, `telemetry_providers_read` stehen nur in der Produktion. Sie erlauben den Zugriff, wenn `is_admin()` oder das Recht `inventory.view` bzw. `inventory.edit` vorliegt | Niedrig. Diese Rechte tragen nur `shareholder` und `system_admin`; die Kundenrolle hat kein einziges Recht. Kein Kundenzugriff. Herkunft unbekannt (nicht in den Migrationen beider Linien) |
| N-3 | Bereich `employee-signatures` mit den Regeln `es_read_own` und `es_upload` steht nur in der Produktion (0 Dateien). `es_upload` lässt **jedes angemeldete Konto**, auch Kundenkonten, Dateien in den eigenen Unterordner hochladen | Mittel. Kein Datenabfluss, aber unnötige Angriffsfläche (Speicher füllen, beliebige Dateien ablegen). In Phase 2 auf interne Rollen beschränken oder entfernen |
| N-4 | Nachbau läuft auf PostgreSQL 16, Produktion auf 17.6 | Niedrig. Die Migrationen nutzen nichts, was sich zwischen 16 und 17 geändert hätte, soweit geprüft. Rest-Risiko wird durch das Vorgehen unten (einzeln, mit Kontrolle nach jedem Schritt) aufgefangen |

## 2. Getestete Reihenfolge

`reihenfolge_test.sh`: Nachbau auf dem Stand der Produktion, dann die Sperre vom
15.11.2026, dann alle fehlenden Migrationen. **Alle 14 fehlerfrei**, danach alle
29 Prüfskripte ohne Fehlurteil (bis auf die drei bekannten Bestandsmeldungen in
`40`, `94`, `95`).

| # | Migration | Was sie bringt |
|---|---|---|
| 1 | `popcorn_zutaten_naehrwerte_ek` | Zutaten, Nährwerte, Einkaufspreis Popcorn |
| 2 | `popcorn_verkaufspreis` | Verkaufspreis Popcorn |
| 3 | `bundles` | Kombi-Angebote |
| 4 | `rabattdeckel_generatoren` | Obergrenze für Rabatte in den Angebots-Erzeugern |
| 5 | `bundle_verwaltung` | Pflege der Kombi-Angebote |
| 6 | `bundle_coupon_darstellung` | Darstellung von Coupons und Kombis |
| 7 | `automat_bezahlung_und_dynamische_preise` | Bezahlen per App am Automaten, Kundenpreis |
| 8 | `bargeld_und_preisausspielung` | Bargeld-Soll, Preisausspielung |
| 9 | `abo_angebotszeitraeume` | Abo nur in festgelegten Zeiträumen wählbar |
| 10 | `scheinkaeufe_sperren` | Rest von Runbook L, darunter der Schutz der Bargeld-Anzeige (B-3) |
| 11 | `terminal_webhook_anbindung` | Anbindung des Kartenterminals |
| 12 | `pfand_getrennt` | Pfand neben dem Preis (V-016) |
| 13 | `verfuegbarkeit_fuer_kunden` | Verfügbarkeit im Automatenfinder ohne Stückzahlen |
| 14 | `vorteile_ohne_abo` | Vorteile für jedes kostenlose Konto, Abo geschlossen (V-018-a) |

## 3. Verträglichkeit mit der ausgelieferten App

Ausgeliefert ist der Stand `main` vom 26.09.2026 (`gh-pages` `7e61e78`). Diese
App ruft 59 Datenbankfunktionen und liest 24 Tabellen direkt. Verglichen vor
und nach den 14 Schritten:

* Alle 59 Funktionen bleiben, mit gleichen Aufrufparametern.
* `product_detail` und `top_products_by_category` liefern **zusätzliche**
  Spalten (`ingredients`, `deposit`). Zusätzliche Spalten stören die App nicht.
* Keine Spalte der 24 Tabellen entfällt; fünf kommen hinzu.
* `dev_add_demo_purchase` ist gesperrt. Die Schaltfläche dazu zeigt die App nur
  im Entwicklermodus, nicht in der ausgelieferten Fassung.

**Folge für die Anzeige:** Bis zum App-Update zeigt die alte App bei Getränken
mit Pfand nur den Warenpreis (z. B. 2,05 €) ohne den Zusatz „zzgl. 0,25 €
Pfand". Rechtlich relevant (§ 7 PAngV) erst, wenn verkauft wird; derzeit ist
kein Automat in Betrieb. Das App-Update liegt auf
`claude/bordesnack24-app-strategy-sf5yzy` (35 Commits vor `main`) und braucht
für `main` die Freigabe von Philipp.

## 4. Vorgehen beim Ausrollen (nach Freigabe)

1. Jede Migration einzeln einspielen; nach jeder die Kontrollabfrage.
2. Bricht eine ab, wird angehalten und berichtet, nicht improvisiert. Dass
   eine abgebrochene Migration keine Teiländerung hinterlässt, ist das übliche
   Verhalten von PostgreSQL bei einem Befehlsblock, für den Weg über die
   Supabase-Anbindung aber **noch nicht nachgewiesen**. Es wird vor Schritt 1
   mit einer harmlosen Probe geprüft (Hilfstabelle anlegen, absichtlicher
   Fehler, nachsehen, ob die Tabelle existiert).
3. Nach Schritt 14: Kontrollabfragen aus Runbook M und N, Fingerabdruck gegen
   den Nachbau, Sicherheitshinweise von Supabase erneut abrufen.
4. Danach in Lovable die Schalter `pfandGetrennt` und `bestandLive` umlegen.

**Rückweg:** Die Schritte 1 bis 11 und 13 bis 14 legen nur Neues an oder
ersetzen Funktionen. Schritt 12 (Pfand) rechnet Preise um; ein Zurück hieße
Spalten entfernen und Preise zurückrechnen und ist nur gemeinsam mit Philipp
vorgesehen. Im Tarif Free gibt es keine Sicherung zum Zurückspielen; vor dem
Ausrollen werden deshalb die betroffenen Preisspalten als Kopie in eine
Hilfstabelle gesichert.

## 5. Ausrollen: durchgeführt am 15.11.2026 (Freigabe Philipp „Ja, alle 14 ausrollen")

**Verfahren, wie tatsächlich angewandt.** Jede Migration wurde zuerst als Text
in `ausrollen_20261115.migration` in der Produktion abgelegt und dort per
Prüfsumme mit der Datei im Repository verglichen (`pruefsummen.txt`). Erst
danach führte ein kurzer Block genau diesen Text aus, als Ganzes. Das Schema
ist nicht über die API erreichbar und trägt keine Rechte für `anon` oder
`authenticated`. Es enthält außerdem `products_vorher`, die Sicherung der 67
Produktpreise vor allen Schritten.

**Übertragung der Texte.** Schritt 1 und 2 wurden als Text übergeben. Beim
dritten lief eine Rückfrage der Supabase-Anbindung an Philipp unbeantwortet ab.
Die Schritte 3 bis 14 hat die Datenbank deshalb selbst von GitHub geholt
(`pg_net`, feste Commit-Stände `437dadb…` und `1a94e4d…`, Tabelle
`ausrollen_20261115.abruf`). Für jede Datei galt dieselbe Bedingung: Ausgeführt
wurde nur, was per Prüfsumme zeichengleich mit dem getesteten Stand war.

**Vorab am Nachbau geprüft:** Blockweise eingespielt ergibt denselben
Fingerabdruck wie Befehl für Befehl; alle 29 Prüfskripte bestehen. In der
Produktion lagen 90 Angebote, alle abgelaufen und archiviert; der Pfand-Schritt
hat keines umgerechnet.

| # | Migration | Stand |
|---|---|---|
| 0 | `ausrollen_20261115_hilfsschema` | ✅ |
| 1 bis 11 | Popcorn, Kombi-Angebote, Rabattdeckel, Automatenbezahlung, Bargeld, Abo-Zeiträume, Rest von Runbook L, Terminal-Anbindung | ✅ Zwischenkontrolle nach Schritt 11: sechs Fingerabdrücke gleich dem Nachbau |
| 12 | `pfand_getrennt` | ✅ 18 Produkte mit Pfand, Cola 2,05 € + 0,25 €, Durstlöscher 0,00; bei keinem Produkt weicht Ware + Pfand vom gesicherten bisherigen Preis ab; kein Produkt ohne Pfand hat seinen Preis geändert |
| 13 | `verfuegbarkeit_fuer_kunden` | ✅ |
| 14 | `vorteile_ohne_abo` | ✅ `vorteile_fuer_alle = true`, Monats- und Jahresabo nicht angeboten, Löschregel `n`, 1 Konto mit Abo-Eintrag (Testkonto) |
| danach | `unterschrift_erneut_hochladen` | ✅ siehe `docs/audit/2026-11-15-nachzug/` |

### Schlusskontrolle

| Merkmal | Produktion | Neuaufbau aus dem Produktionszweig (241 Migrationen) |
|---|---|---|
| Zeilenschutz-Regeln mit Bedingungen | 231 `b8ffbbf5…` | gleich |
| Funktionen ohne Kommentare, mit Aufrufrechten | 278 `a9644c1f…` | gleich |
| Spalten | 1379 `82ab5f18…` | gleich |
| Auslöser | 103 `7b1fc14a…` | gleich |
| Produktkatalog (Preis, Steuersatz, Einkauf, Rabattfähigkeit, Allergene) | 67 `4ee7d4d2…` | gleich |
| Aufzählungswerte | 238 `49d57759…` | gleich |

Abfrage: `fingerabdruck_sechs_merkmale.sql`. Weitere Messwerte der Produktion:
Scheinkauf gesperrt, Bargeld-Anzeige geschützt (B-3), Verfügbarkeit vorhanden,
0 Käufe, 252 Migrationen verzeichnet.

### Sicherheitshinweise von Supabase nach dem Ausrollen (alle 189 Einzelbefunde gelesen)

| Hinweis | vorher | nachher | Einordnung |
|---|---|---|---|
| Funktion ohne festen Suchpfad | 0 | 5: `app.benefits_free_for_all`, `app.darf_bundles_pflegen`, `app.dauerrabatt_prozent`, `app.kassenzaehlung_unveraenderbar`, `app.terminal_ereignis_unveraenderbar` | Niedrig, neu durch das Ausrollen. ✅ Behoben am selben Tag: Migration `suchpfad_fuenf_funktionen`, in der Produktion 0 Funktionen ohne festen Suchpfad, Fingerabdruck unverändert gleich dem Neuaufbau (242 Migrationen, 29 Prüfskripte ohne Fehlurteil) |
| Funktionen mit Eigentümerrechten für jedes Konto | 145 | 161 | 19 neue aus den neuen Funktionen, 3 entfallen durch die Sperre. Prüfschwerpunkt Phase 2 |
| Funktionen mit Eigentümerrechten ohne Anmeldung | 7 | 8 | neu: `abo_angebote` (zeigt, welche Tarife wählbar sind; gewollt) |
| Tabellen mit Zeilenschutz ohne Regel | 8 | 12 | neu: `app.abo_angebotszeitraeume` und die drei Hilfstabellen; alles gesperrt, gewollt |
| Sicht mit Eigentümerrechten, `pg_net` in `public`, Passwortschutz aus | je 1 | je 1 | unverändert, Phase 2 |

### Offen nach dem Ausrollen

* **Produktionszweig auf GitHub:** Die drei Commits (`8111917`, `736b1d0`,
  `489dd5e`) liegen lokal und als Patch hier (`produktionslinie-489dd5e.patch`
  und die beiden älteren unter `docs/audit/`). Der Push auf
  `claude/bordesnack24-audit-architecture-7xd3d6` wurde von der
  Arbeitsumgebung zweimal abgelehnt (zuletzt am 15.11.2026 nach dem Auftrag,
  alle offenen Punkte zu erledigen). Er braucht eine ausdrückliche Erlaubnis
  von Philipp für genau diesen Zweig. Inzwischen vier Commits, der vierte
  (`cb0e373`, Suchpfad) liegt als `produktionslinie-cb0e373.patch` hier.
* **App-Update:** Die ausgelieferte App (Stand 26.09.2026) zeigt den Pfand
  nicht getrennt und hat die Verfügbarkeitsanzeige nicht. Das Update liegt auf
  `claude/bordesnack24-app-strategy-sf5yzy` und braucht die Freigabe für `main`.
* **Hilfsschema `ausrollen_20261115`:** bleibt als Nachweis und Preissicherung
  stehen. Entfernen ist ein Löschvorgang und nur mit Freigabe vorgesehen.
* **Landingpage:** Schalter `pfandGetrennt` steht seit dem 15.11.2026 auf `true`
  (Lovable `46aaa80`, `docs/auftraege/lovable-auftrag-2026-11-15-pfandschalter.md`).
  `bestandLive` erst, wenn das App-Update ausgeliefert ist.
