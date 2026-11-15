# Ausrollplan für die 14 offenen Änderungen (Stand 15.11.2026)

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
2. Bricht eine ab, läuft sie nicht teilweise: Supabase führt eine Migration
   als Ganzes aus. Dann wird angehalten und berichtet, nicht improvisiert.
3. Nach Schritt 14: Kontrollabfragen aus Runbook M und N, Fingerabdruck gegen
   den Nachbau, Sicherheitshinweise von Supabase erneut abrufen.
4. Danach in Lovable die Schalter `pfandGetrennt` und `bestandLive` umlegen.

**Rückweg:** Die Schritte 1 bis 11 und 13 bis 14 legen nur Neues an oder
ersetzen Funktionen. Schritt 12 (Pfand) rechnet Preise um; ein Zurück hieße
Spalten entfernen und Preise zurückrechnen und ist nur gemeinsam mit Philipp
vorgesehen. Im Tarif Free gibt es keine Sicherung zum Zurückspielen; vor dem
Ausrollen werden deshalb die betroffenen Preisspalten als Kopie in eine
Hilfstabelle gesichert.
