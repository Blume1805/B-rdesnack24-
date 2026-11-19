# Modul: Unternehmensverwaltung (Kategorie 2)

Zugriff für **Gesellschafter/Admin** und **Mitarbeiter mit individuell freigegebenen
Berechtigungen** (ABAC). Alle Protokolle sind **revisionssicher**: kein UPDATE/DELETE
(append-only), Korrekturen erfolgen über neue Einträge/Versionen; lückenloser Audit-Trail.

## Datenmodell (Migrationen 0006–0009)

- **Stammdaten:** `machines` (Automaten, `nayax_terminal_id`), `locations` (Standorte, seit
  Migration `20260821203014`; `machines.location_id`), `products` (Sortiment). Geprüft gegen das
  Schema am 19.11.2026: Die Doku nannte bis dahin `machines` als Ort der Standorte.
- **Inventur:** `inventory` (Bestand je Automat+Produkt), `inventory_movements` (append-only;
  Trigger `apply_inventory_movement` schreibt den Bestand fort), View `machine_stock`
  (`available` / `low` / `out`). `nayax_sales` (Roh-Telemetrie, dedupliziert).
- **HACCP-/Betriebsprotokolle:** `temperature_logs` (≤ 7 °C, generierte `within_limit`),
  `cleaning_logs`, `disposal_logs`, `filling_logs`, `maintenance_logs`, `cash_collection_logs`,
  `signatures`. Befüllung/Vernichtung erzeugen automatisch Inventur-Bewegungen.
- **Dokumente:** `documents` + `document_versions` (RPC `add_document_version` zählt hoch,
  unveränderlich). **IfSG/Schulung:** `ifsg_briefings`, `employee_trainings`.

## Berechtigungen (ABAC für Mitarbeiter)

`inventory.view/edit`, `haccp.fill/temperature/cleaning/disposal/maintenance`, `cash.collect`,
`documents.view/edit`, `employees.manage`. Gesellschafter besitzen alle; Mitarbeiter nur die
individuell zugewiesenen. UI-Gating via RPC `my_permissions()` (Autorisierung bleibt in der RLS).

## Automaten und Standorte pflegen (seit 19.11.2026)

Inventur → Bestand je Automat, für alle mit `inventory.edit`:

* **＋** oben rechts legt einen Automaten an (Name, Kennung, Art, gekühlt, Standort,
  Betrieb). Die Kennung wird als nächste freie „A…"-Nummer vorgeschlagen.
* **⋮** je Automat: *Bearbeiten* (auch Umbenennen und Standort wechseln), *Stilllegen*
  bzw. *Wieder in Betrieb nehmen*. Stilllegen setzt `status = 'inactive'`; der Automat
  verschwindet aus dem Kunden-Finder, Bestand, Protokolle und Verkäufe bleiben.
* **Standort:** aus der Liste wählen oder „Neuen Standort anlegen" (Name, Straße, PLZ,
  Ort, Zugang; Kennung `STO-nnn` automatisch). „Adresse dieses Standorts ändern" gilt für
  alle Automaten an diesem Standort. Die Adresse wird auf `machines` gespiegelt
  (`location_name`, `street`, `zip`, `city`, `access_hours`), weil Liste, Finder und
  Belege sie dort lesen.
* **Löschen gibt es nicht** (Migration `20261119120000`: Regeln `machines_insert/_update`,
  `locations_insert/_update`, kein DELETE-Recht für anon/authenticated). Am Automaten
  hängen Aufzeichnungen nach § 147 AO; einige Tabellen löschten kaskadierend mit.
* Code: `features/management/data/automaten_verwaltung.dart`,
  `presentation/widgets/automat_formular.dart`, `presentation/screens/inventory_screen.dart`.
  Nachweis: Prüfskript `121_automaten_verwalten.sql` (24 Urteile), App-Test
  `test/features/management/automaten_verwalten_test.dart` (12 Fälle).

## Echtzeit-Inventur (Nayax)

```
Nayax  ──POST(HMAC)──►  Edge: nayax-webhook  ──►  nayax_sales (Dedupe)
                                              └──►  inventory_movements(type=sale, −qty)
                                                         └─(Trigger)─► inventory  ─(Realtime)─► App/Kunde
```

`nayax-webhook` verifiziert `x-nayax-signature` (HMAC-SHA256, `NAYAX_WEBHOOK_SECRET`), mappt
Terminal→Automat (`nayax_terminal_id`) und Produkt→SKU. Parser-Logik in `parse.ts` (getestet).

> ⚠️ Das reale Nayax-Event-Format ist vor Produktivbetrieb zu verifizieren; Feldnamen in
> `parse.ts` sind defensiv und ggf. anzupassen.

## PDF-Nachweise (VLÜA/GoBD)

`protocol-export-pdf` rendert die Nachweise für Temperatur, Reinigung, Vernichtung,
Schulung, Befüllung, Wartung und Geldentnahme für einen Zeitraum (geprüft gegen
`PROTOCOLS` im Code, 19.11.2026). Liest mit der **Aufrufer-Identität** → RLS erzwingt die
Berechtigung (nur sichtbare Zeilen landen im PDF).

**Formatierung und Seitenumbruch aller PDF-Belege (seit 19.11.2026, COMPLIANCE V-023):**

* Zeiten in deutscher Zeit, Datum `TT.MM.JJJJ`, Zahlen mit Komma.
* Freitexte werden umbrochen, nie gekürzt (`_shared/pdf_format.ts`).
* Zeilen füllen jede Seite. Der Unterschriften- bzw. Schlussblock steht nie
  allein, sondern nimmt die letzten drei Zeilen mit (`_shared/seiten.ts`).
* Belege aus der App (PKW-Anlage, FIFO-Inventur, Rechnung) entstehen seit
  19.11.2026 als echte PDF-Datei in der App (`apps/mobile/lib/core/druck/
  pdf_hausstil.dart` und `*_pdf.dart`) mit denselben Regeln. Grund: In der
  Home-Bildschirm-App auf dem iPhone ignoriert iOS den Druckbefehl einer
  Webseite (COMPLIANCE V-023, Punkt 5).
* Ausgabe aller PDFs (auch Protokoll, Kassenbon, Finanzauswertung) über ein
  Blatt (`core/druck/pdf_ausgabe.dart`): „Teilen oder drucken" (Teilen-Menü
  des Systems), im Browser zusätzlich „PDF öffnen" und „Herunterladen".
* Prüfen: `DRUCK_AUSGABE=<ordner> flutter test test/druck` legt die PDFs ab
  (`pdftoppm` zum Ansehen). Die früheren HTML-Druckansichten samt
  `druck_regeln.dart` und `scripts/druck_pruefen.mjs` sind am 19.11.2026
  gelöscht (Freigabe Philipp).

## Secrets

```
NAYAX_WEBHOOK_SECRET=...
SUPABASE_SERVICE_ROLE_KEY=...
```
