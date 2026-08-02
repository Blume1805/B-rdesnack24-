# RPC-Durchsicht: wer darf welche SECURITY-DEFINER-Funktion aufrufen

Stand: 02.08.2026 · Projekt `nnfsyuglkqycwenwxmuw` · Migrationen 0075–0078

Der Supabase-Advisor meldete 83 Funktionen unter der Regel
`authenticated_security_definer_function_executable`. Die Regel prüft die
Rechtevergabe, nicht den Code — sie kann nicht sehen, ob eine Funktion im
Rumpf die Rolle prüft. Eine Zahl allein sagt hier also wenig.

Dieses Dokument hält fest, was die Durchsicht ergeben hat, damit die
Aussage „alle 83 gesehen" nachprüfbar ist und der nächste Durchgang nicht
bei null anfängt.

**Warum das überhaupt zählt:** `authenticated` heißt hier Kundenkonto.
Die Registrierung steht offen; die Rolle sagt nichts über Zugehörigkeit
zum Betrieb aus.

## So lässt sich der Stand jederzeit neu erheben

```sql
select p.proname, pg_get_function_identity_arguments(p.oid) as args,
  case
    when p.prosrc ~* 'is_admin\(|is_internal\(|is_shareholder\(|auth_has_permission\(' then 'helfer-guard'
    when p.prosrc ~* 'Nicht autorisiert|42501' then 'inline-guard'
    when p.prosrc ~* 'auth\.uid\(\)' then 'nur-uid-filter'
    else 'KEIN-GUARD'
  end as klasse
from pg_proc p join pg_namespace n on n.oid = p.pronamespace
where n.nspname = 'public' and p.prosecdef
  and has_function_privilege('authenticated', p.oid, 'EXECUTE')
order by klasse, p.proname;
```

Die Einteilung ist eine Vorsortierung, kein Urteil. `nur-uid-filter` und
`KEIN-GUARD` mussten einzeln gelesen werden — dort entscheidet sich, ob
ein Parameter an den Aufrufer gebunden ist oder frei wählbar bleibt.

## Ergebnis der Durchsicht

### Unkritisch: Rolle wird im Rumpf geprüft (34)

`helfer-guard` (8) und `inline-guard` (26). Die Finanz- und
Verwaltungsfunktionen — `finance_kpis`, `finance_summary`,
`finance_balance_kpis`, `datev_export_rows`, `business_customers_csv`,
`inventory_report`, `inventory_fifo_lots`, `upsert_finance_balance`,
`decide_document_approval`, `rotate_provider_secret`, `set_machine_slot`
und weitere — brechen ohne die passende Rolle mit
`raise exception 'Nicht autorisiert'` ab, meist mit `errcode 42501`.
Aufrufbar, aber ohne Ertrag.

### Unkritisch: Parameter ist an den Aufrufer gebunden (26)

Stichprobenartig nicht, sondern durchgelesen. Die interessanten Fälle:

| Funktion | Warum sie hält |
|---|---|
| `activate_offer` / `deactivate_offer` | Schreibt in `offer_activations` (Zuordnung je Kunde), **nicht** in die globale `offers`. Zusätzlich Abo-Pflicht. |
| `submit_employee_signature` | `where id = p_task and employee_id = auth.uid()` — fremde Signaturaufgaben laufen ins Leere. |
| `register_referral` | Eigenwerbung wird doppelt abgefangen (gleiche ID **und** gleiche E-Mail), Werber braucht ein Abo, Geworbener darf keines haben, ein Vorgang je Geworbenem. |
| `vote_donation_cause`, `suggest_donation_cause`, `mark_notification_read`, `rate_product` | Schreiben ausschließlich mit `auth.uid()` als Schlüssel. |
| `redeem_personal_offer` | Löst nur ein, was `customer_id = auth.uid()` erfüllt — deshalb war der in 0076 behandelte Code-Abfluss nicht verwertbar. |

### Bewusst offen gelassen (12)

`catalog_facts`, `search_products`, `top_products_by_category`,
`product_availability`, `product_detail`, `list_news`,
`lifetime_founders_status`, `my_notifications_unread_count` liefern
Sortiments- und Aggregatdaten ohne Personenbezug — genau das, wofür die
Kunden-App sie braucht.

`is_admin`, `is_internal`, `app_role`, `auth_has_permission` sind die
Prüffunktionen selbst. Sie müssen für `authenticated` aufrufbar bleiben,
weil die RLS-Policies sie im Namen des aufrufenden Nutzers auswerten.

Diese zwölf bleiben im Advisor als WARN stehen. Das ist hier die richtige
Antwort, keine offene Aufgabe.

### Behoben (11) — Migration 0076

| Funktion | Befund |
|---|---|
| `list_partner_signatures` | `select *` auf eine Tabelle mit enger Policy, als DEFINER — jedes Kundenkonto konnte Namen **und Unterschriftsbilder** lesen. Jetzt INVOKER. |
| `list_document_folders` | Gleiches Muster, harmloser. Jetzt INVOKER. |
| `generate_personal_offer` | Vertraute der übergebenen Kunden-ID. Jetzt Prüfung gegen `auth.uid()`, interne Rollen ausgenommen. |
| `next_invoice_number` | Verbrannte Rechnungsnummern (§ 14 Abs. 4 Nr. 4 UStG). Jetzt `service_role`. |
| `create_invoice_for_purchase`, `generate_weekly_offers`, `generate_daily_offers`, `run_daily_special_offers`, `grant_birthday_offer`, `grant_anniversary_offer` | Server-/Cron-Funktionen ohne Aufrufer im Client. Jetzt `service_role`. Cron läuft als `postgres` und ist nicht betroffen. |

### Behoben (1) — Migrationen 0077/0078

`dev_add_demo_purchase` schrieb `source = 'manual'` — den Standardwert der
Spalte. Simulierte Käufe waren dadurch von echten nicht zu unterscheiden
und flossen in `datev_export_rows`, `finance_kpis` und `finance_summary`.
Jetzt eigene Herkunft `'demo'`, dort ausgeschlossen.

## Was danach noch offen ist

**Der Demo-Knopf selbst.** Technisch ist er für die Buchhaltung nicht mehr
relevant, aber er lässt weiterhin Treuepunkte, Spendenstände und
Gamification-Fortschritt wachsen — für jedes Kundenkonto, unbegrenzt. Das
ist beabsichtigt, solange kein echter Zahlungsweg existiert. Vor dem Start
ist zu entscheiden, ob er bleibt, intern wird oder verschwindet.

**Die acht vorhandenen Käufe** tragen alle `source = 'manual'` und stammen
sämtlich aus diesem Knopf. Sie stehen weiter in BWA und DATEV-Export.
Ob sie umgewidmet oder gelöscht werden, ist eine Entscheidung über
vorhandene Zahlen — deshalb hat 0078 sie nicht angefasst.

**`rate_product`** lässt jedes Konto jedes Produkt bewerten, auch ohne
Kauf. Kein Sicherheitsproblem, aber bevor Bewertungen im Web sichtbar
werden (A2a), sollte geklärt sein, ob eine Kaufbindung gewollt ist.
Aktuell steht die Frage nicht an: `product_ratings` hat 0 Zeilen.
