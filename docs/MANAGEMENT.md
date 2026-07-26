# Modul: Unternehmensverwaltung (Kategorie 2)

Zugriff für **Gesellschafter/Admin** und **Mitarbeiter mit individuell freigegebenen
Berechtigungen** (ABAC). Alle Protokolle sind **revisionssicher**: kein UPDATE/DELETE
(append-only), Korrekturen erfolgen über neue Einträge/Versionen; lückenloser Audit-Trail.

## Datenmodell (Migrationen 0006–0009)

- **Stammdaten:** `machines` (Automaten/Standorte, `nayax_terminal_id`), `products` (Sortiment).
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

`protocol-export-pdf` rendert Temperatur-, Reinigungs-, Vernichtungs- und Schulungsnachweise
für einen Zeitraum. Liest mit der **Aufrufer-Identität** → RLS erzwingt die Berechtigung
(nur sichtbare Zeilen landen im PDF).

## Secrets

```
NAYAX_WEBHOOK_SECRET=...
SUPABASE_SERVICE_ROLE_KEY=...
```
