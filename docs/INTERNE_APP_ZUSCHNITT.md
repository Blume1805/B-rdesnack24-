# Interne App — Zuschnitt und Reihenfolge

Stand: 03.08.2026 · Grundlage: ADR 0005 (Loveable wird die Plattform,
Kunden- und interner Bereich als **getrennte** Apps)

## Warum das eine andere Art von Arbeit ist

Der Kundenbereich war ein Datentausch: sechs Seiten, die erfundene Werte
gegen echte tauschten. Das Aussehen stand, die Funktionen waren klein,
und ein Fehler kostete eine Korrekturschleife.

Hier ist es umgekehrt. 24 Screens, 8.066 Zeilen, und der Inhalt ist nicht
Anzeige, sondern **Vorgang**: HACCP-Protokolle, FIFO-Inventurbewertung,
DATEV-Export, Vier-Augen-Freigaben, Unterschriften mit DocuSign. Ein
Fehler kostet hier nicht eine Schleife, sondern im Zweifel die
Prüfungsfestigkeit einer Aufzeichnung.

Daraus folgen zwei Regeln für diesen Block:

1. **Bereichsweise portieren, nicht querbeet.** Ein Bereich ist erst
   fertig, wenn er gegen die Flutter-Fassung gegengeprüft wurde — gleiche
   Eingaben, gleiche Zahlen.
2. **Flutter bleibt in Betrieb**, bis der jeweilige Bereich abgenommen
   ist. Nicht bis „die interne App fertig ist" — bereichsweise.

## Was portiert werden muss

24 Screens, nach Umfang und fachlicher Nähe gruppiert. Die Zeilenzahlen
sind ein grobes Maß für den Aufwand, kein exaktes.

### Block I1 · Tagesgeschäft (das, was täglich läuft)

| Screen | Zeilen | Quelle |
|---|---:|---|
| `filling_screen` | 245 | `inventory`, `inventory_movements`, `machine_slots` |
| `cleaning_screen` | 140 | `cleaning_logs` |
| `maintenance_screen` | 139 | `maintenance_logs` |
| `temperature_screen` | 121 | `temperature_logs` |
| `disposal_screen` | 206 | `disposal_logs` |
| `cash_screen` | 115 | `cash_collection_logs` |
| `machine_stock_screen` | 153 | `machine_stock`, `machine_slots` |

**Zusammen rund 1.100 Zeilen.** Fachlich einfach (Formular → Protokollzeile),
aber HACCP-relevant: Temperatur, Reinigung und Entsorgung sind
Aufzeichnungspflichten. Der Zuschnitt der Felder darf sich **nicht**
ändern.

Hier anfangen. Es ist der Bereich mit dem meisten täglichen Nutzen und
dem geringsten Risiko beim Portieren.

### Block I2 · Inventur und Bewertung

| Screen | Zeilen | Quelle |
|---|---:|---|
| `inventory_report_screen` | 976 | `inventory_report`, `inventory_fifo_lots`, `inventory_fifo_movements` |
| `inventory_report_print_web` | 408 | Druckansicht (Web!) |
| `inventory_screen` | 44 | `inventory` |

**Rund 1.400 Zeilen.** Der Rechenkern liegt in der Datenbank (FIFO-Lots,
MHD-Abwertung) — das ist der gute Teil: Die App zeigt nur an, was die RPC
liefert. Die Druckansicht existiert bereits als **Web**-Variante
(`inventory_report_print_web.dart`); das Problem „drucken im Browser"
ist also schon einmal gelöst worden und muss nicht neu erfunden werden.

### Block I3 · Finanzen

| Screen | Zeilen | Quelle |
|---|---:|---|
| `finance_screen` + `kpi_dashboard` | 599 + | `finance_summary`, `finance_kpis`, `finance_balance_kpis`, `upsert_finance_balance` |
| `datev_export_screen` | 236 | `datev_export_rows` |
| `b2b_customers_screen` | 109 | `business_customers_csv` |

Auch hier: Der Rechenkern ist in der Datenbank. Zwei Edge Functions
gehören dazu (`finance-balance-sync`, `finance-export-pdf`) — die bleiben
unverändert, sie sind clientunabhängig.

**Achtung Reihenfolge:** Dieser Block sollte **nicht** portiert werden,
solange die acht Demo-Käufe als `source = 'manual'` in den Zahlen stehen
(siehe 0078). Sonst prüft man die neue Anzeige gegen falsche Werte und
merkt den Unterschied nicht.

### Block I4 · Dokumente und Freigaben

| Screen | Zeilen | Quelle |
|---|---:|---|
| `documents_screen` | 1.140 | `list_documents`, `list_document_folders`, Storage |
| `approvals_screen` | 742 | `list_document_approvals`, `decide_document_approval` |
| `my_signature_tasks_screen` | 405 | `list_my_signature_tasks`, `submit_employee_signature` |
| `signature_management_screen` | 322 | `partner_signatures`, `list_employees_for_signature` |

**Rund 2.600 Zeilen — der größte und heikelste Block.** Hier hängen
Vier-Augen-Freigaben, DocuSign und die Unterschriftenerfassung dran.

Der einzige Punkt, für den es im Web **keine** fertige Vorlage gibt: die
**Unterschriftenerfassung**. Flutter nutzt dafür das `signature`-Paket
(Zeichnen auf dem Bildschirm). Im Browser geht das mit einem
Canvas-Element, ist aber Neubau — und muss auf dem Telefon mit dem
Finger genauso funktionieren wie mit der Maus.

### Block I5 · Sonstiges

| Screen | Zeilen | Quelle |
|---|---:|---|
| `telemetry_hub_screen` | 1.204 | `machine_devices`, `machine_health`, `machine_telemetry_events`, `telemetry_providers` |
| `complaints_screen` | 309 | `purchase_complaints` |
| `cancellations_screen` | 232 | `cancellation_requests` |
| `employees_screen` | 192 | `profiles`, `invite-user` |

`telemetry_hub_screen` ist mit 1.204 Zeilen der größte Einzelscreen —
aber fachlich isoliert. Kann jederzeit, hängt an nichts anderem.

## Was zuerst geklärt werden muss

### 1. Eigene Rolle — sonst kommst du nicht rein

Dein Konto `philipp_blume@gmx.de` ist als **`customer`** geführt. Eine
interne App, die korrekt prüft, lässt dich damit nicht hinein.

Zum Testen gibt es `demo-gs@boerdesnack24.app` (shareholder) und
`demo-admin@boerdesnack24.app` (system_admin). Für den Dauerbetrieb
gehört dein eigenes Konto auf `shareholder` hochgestuft — das ist ein
`update` auf `profiles.role`, das nur ein Administrator darf
(`guard_profile_update`).

### 2. Der Rollenzugang der neuen App

Die interne App braucht **von Anfang an** eine Rollenprüfung, nicht
nachträglich. Und zwar die vollständige:

```sql
-- richtig (seit 0079):
profiles.role in ('system_admin','shareholder','employee')
  and profiles.status = 'active'
  and profiles.deleted_at is null
```

Die Prüfung `role` **allein** war genau die Lücke, die Migration 0079
geschlossen hat. In der neuen App darf sie nicht wieder entstehen.

Am einfachsten über die vorhandene Funktion: `select is_internal(auth.uid())`.

### 3. Was mit dem Demozugang passiert

Die Kunden-App hat einen Zugang ohne Anmeldung. **Die interne App darf
so etwas nicht bekommen** — nicht als Bequemlichkeit, nicht zum Testen.

## Reihenfolge

```
I1  Tagesgeschäft        ← hier anfangen: höchster Nutzen, geringstes Risiko
I2  Inventur
I5  Telemetrie/Sonstiges ← isoliert, jederzeit einschiebbar
I3  Finanzen             ← erst nach Bereinigung der Demo-Käufe
I4  Dokumente/Signaturen ← zuletzt: größter Block, einziger echter Neubau
```

Danach: native Verpackung der Kunden-App, dann Flutter abschalten — in
dieser Reihenfolge, nicht früher.

## Was sich nicht ändert

Alle Edge Functions bleiben, wie sie sind: `protocol-export-pdf`,
`finance-export-pdf`, `document-finalize`, `documents-zip-export`,
`merge-employee-signature`, `docusign-fetch-signature`,
`documents-install-haccp-set`, `documents-install-branded-set`,
`invite-user`, `iot-webhook`, `finance-balance-sync`. Sie sind
clientunabhängig und werden von der neuen App genauso aufgerufen.

Dasselbe gilt für sämtliche RPCs und die Härtungen aus 0075–0084.

## Abgleichsliste

`INTERNAL_PARITY.md` führt die neun geforderten Bereiche. Sie ist seit
ADR 0005 die **Portierungsliste**: Was dort ✅ trägt, muss drüben
entstehen, bevor Flutter abgeschaltet wird. Nach jedem Block dort
abhaken.

Die einzige echte Lücke bleibt das interne Kommunikationsmodul — bis
heute nicht entschieden, ob es überhaupt kommen soll. Empfehlung
unverändert: Notizen am Objekt statt Chat.
