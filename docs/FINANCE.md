# Modul: Finanzdashboard (Kategorie 1)

Zugriff ausschließlich für **Gesellschafter/Admin** (`finance.view`, `finance.export`),
serverseitig per RLS und in den Edge Functions geprüft.

## Datenfluss

```
sevDesk API ──(Edge: sevdesk-sync)──► finance_bookings ──(RPC finance_summary)──► App
                                              │
                                   (Edge: finance-export-pdf) ──► PDF (base64)
```

- **`sevdesk-sync`** (Edge Function): holt Belege für einen Zeitraum, mappt auf SKR-03-Konten
  (`mapToAccount`), schreibt dedupliziert (`source` + `source_ref`) nach `finance_bookings`,
  protokolliert in `sevdesk_sync_runs`.
- **`finance_summary(p_from, p_to)`** (SQL-RPC, SECURITY DEFINER): aggregiert Kennzahlen für
  beliebige Zeiträume; trennt Umsatz nach 7 %/19 % (§ 22 UStG), liefert Aufwand, Ergebnis,
  USt-Salden und Konten-Drilldown. Prüft `finance.view`.
- **`finance-export-pdf`** (Edge Function): rendert die Auswertung serverseitig via `pdf-lib`,
  liefert Base64-PDF; Client teilt/druckt es (`printing`). Prüft `finance.export`.

## SKR-03-Mapping (Verfahrensdokumentation 2.6 / 5.4)

| Richtung | USt | Konto |
|---|---|---|
| Erlös   | 7 %  | 8300 |
| Erlös   | 19 % | 8400 |
| Aufwand | 7 %  | 3300 |
| Aufwand | 19 % | 3400 |

> ⚠️ **Verifikationspflicht (UWG/GoBD):** Feld- und Kontozuordnung des sevDesk-Connectors
> (`parseVoucher`/`mapToAccount`) muss einmalig gegen das echte sevDesk-Konto geprüft werden,
> bevor Zahlen produktiv/öffentlich genutzt werden. Connector-Felder (`creditDebit`, `sumNet`,
> `sumTax`, `taxRate`, `voucherDate`) sind defensiv implementiert und ggf. anzupassen.

## Secrets (Supabase Function Secrets — niemals im Client)

```
SEVDESK_API_TOKEN=...
SEVDESK_BASE_URL=https://my.sevdesk.de/api/v1   # optional, Default
SUPABASE_SERVICE_ROLE_KEY=...
```

## Gesellschafter-Freigabe (Dual-Control)

Neue Gesellschafter erhalten Finanzzugriff erst nach Freigabe durch einen **anderen** aktiven
Gesellschafter (`approve_shareholder`-RPC, Selbstfreigabe per Constraint verboten). UI:
`ApprovalsScreen` (Icon im Finanzdashboard).

## Tests

- Dart: `finance_period_test.dart`, `finance_summary_test.dart`.
- Deno: `sevdesk-sync/mapping_test.ts` (Konto-Mapping, Voucher-Parsing).
- pgTAP (folgt für `finance_summary`-Aggregation, sobald Live-Projekt verfügbar).
