# GESAMTAUDIT — PHASE 2: umgesetzt, mit Nachweis

Stand: 05.09.2026 · Freigabe des Auftraggebers liegt vor
Bezug: `GESAMTAUDIT-2026-09-05-PHASE1.md` (Befunde) und dessen Nachtrag 0a

## Was angefasst wurde — und was ausdrücklich nicht

| Befund | Entscheidung | Zustand |
|---|---|---|
| **H-2** `app`-Schema vom Client trennen | umgesetzt | ✅ produktiv, nachgewiesen |
| **M-6** Kundenart ist keine Selbstbedienung | umgesetzt | ✅ produktiv, nachgewiesen |
| **M-5** `app.werbe_nil` bekommt `search_path` | umgesetzt | ✅ produktiv |
| **M-4** Deploy ohne `ENV_FILE` bricht ab | umgesetzt | ✅ im Repo |
| Wachhund gegen künftige Grants | neu gebaut | ✅ 7 Prüfungen |
| **H-1** `net.http_*` entziehen | **nicht möglich** | ⛔ Plattformgrenze, belegt |
| **M-1** View auf `security_invoker` | **zurückgenommen** | ⛔ Empfehlung war falsch |
| **M-3** Spaltenrechte `unit_cost` | **bewusst nicht** | 🟡 begründet aufgeschoben |

---

## Drei Dinge, bei denen die Prüfung mich korrigiert hat

Diese drei stehen an erster Stelle, weil sie der eigentliche Ertrag der Phase
sind. Zwei davon sind Fehler in **meinem eigenen Auditbericht**.

### 1. Der erste Entzug hat nicht gewirkt — und das fiel nur durch den Test auf

Der erste Entwurf lautete:

```sql
revoke all on all functions in schema app from anon, authenticated;
```

Im lokalen Nachweis ließ sich `app.purge_nach_frist()` danach **immer noch**
als angemeldeter Kunde aufrufen — und der Aufruf hat den Löschlauf
tatsächlich gestartet:

```
-- N2: Der Loeschjob ist fuer einen angemeldeten Kunden gesperrt (MUSS scheitern)
 {"geloescht": {}, "gelaufen_am": "2026-09-05T07:02:54...", "uebersprungen": false}
```

Ursache: Postgres vergibt `EXECUTE` auf Funktionen standardmäßig an
**PUBLIC**. Das Recht kam nie von `anon` oder `authenticated`, also entzog der
REVOKE auch nichts. Richtig ist:

```sql
revoke all on all functions in schema app from public, anon, authenticated;
```

Ein Entzug, den man nicht nachprüft, ist eine Behauptung. Hätte ich die
Migration ohne lokalen Nachweis auf Produktion gegeben, stünde jetzt eine
erledigte Maßnahme im Verlauf, die nichts tut.

Damit der Fehler nicht wiederkehrt, setzt die Migration zusätzlich:

```sql
alter default privileges in schema app revoke execute on functions from public;
```

### 2. H-1 ist von der Datenbank aus nicht behebbar — belegt, nicht vermutet

Derselbe Entzug für `net` blieb wirkungslos. Die ACL sagt warum:

```
schema net   Eigentuemer supabase_admin
             anon=U/supabase_admin   authenticated=U/supabase_admin
net.http_*   Eigentuemer supabase_admin
             =X/supabase_admin        (EXECUTE an PUBLIC)
```

Alle Rechte wurden von `supabase_admin` vergeben. Ein REVOKE entfernt nur,
was die ausführende Rolle selbst vergeben hat. Wir laufen als `postgres`, und
`postgres` ist hier **weder Superuser noch Mitglied von `supabase_admin`**
(beides abgefragt).

Die wirkungslosen Zeilen sind aus der Migration entfernt worden. Ein REVOKE,
der nichts tut, aber im Migrationsverlauf wie eine erledigte Maßnahme
aussieht, ist schlimmer als gar keiner.

**Was stattdessen schützt:** `net` steht nicht in den Exposed Schemas. Diese
Einstellung ist damit die eigentliche Schranke — und sie darf nicht angetastet
werden. Offen als Anfrage an den Supabase-Support oder als Entscheidung, `pg_net`
zu entfernen, falls es entbehrlich wird (derzeit nicht: der Cron-Job
`weather-sync` ruft `net.http_post` auf).

### 3. Meine M-1-Empfehlung hätte die Produktbewertung zerstört

Der Bericht empfahl, `product_rating_summary` auf `security_invoker = true`
umzustellen. Die Policy auf `product_ratings` lautet aber:

```
(customer_id = auth.uid()) OR is_internal()
```

Mit `security_invoker` sähe ein Kunde den Durchschnitt **nur seiner eigenen**
Bewertungen. Die View ist absichtlich eine Aggregat-Sicht über Zeilen, die der
Aufrufer einzeln nicht sehen darf — ein zulässiges Muster, kein Leck. Der
Supabase-Advisor meldet sie weiter als ERROR; das ist hier ein Fehlalarm.
**Nicht geändert.**

---

## M-6 war kein Fehlalarm — anders als die erste Auskunft nahelegte

Auf die Frage, was `customer_type` steuert, lautete die Antwort: „Business
Kunde wird ansonsten identisch wie ein Private Kunde behandelt." Für die
Oberfläche stimmt das. Der Code sagt an zwei Stellen etwas anderes:

```sql
-- create_invoice_for_purchase
if v_customer.customer_type <> 'business' then
  raise exception 'Rechnung nur für Unternehmer-Kunden erlaubt';

-- Buchhaltungs-Export
where c.customer_type = 'business';
```

Ein Privatkunde hätte sich also selbst zum Unternehmer erklären, sich eine
Rechnung mit ausgewiesener Umsatzsteuer erzeugen und mit einer selbst
eingetippten Steuernummer im Buchhaltungs-Export erscheinen können. Kein
fremder Datenzugriff — ein Buchführungsmangel, und der ist im Zweifel teurer.

Behoben durch `app.guard_customer_update()`, das Gegenstück zum bereits
vorhandenen `app.guard_profile_update()`. Die App **liest** `customer_type`
nur (geprüft: kein Schreibpfad); gesetzt wird er bei der Registrierung durch
`app.handle_new_user`, und INSERTs berührt der Trigger nicht.

---

## Nachweise

### Lokal, gegen die Replik (`/var/tmp/bs24pg`, 120 Tabellen)

| Test | Erwartung | Ergebnis |
|---|---|---|
| T1 Kunde setzt `customer_type = business` | scheitert (42501) | ✅ `Die Kundenart wird von der Verwaltung gesetzt` |
| T2 **Gegenprobe** derselbe Kunde ändert `billing_city` | geht | ✅ 1 Zeile geändert |
| T3 Kunde ändert die eigene Kennung | scheitert | ✅ `Die Kundenkennung ist unveraenderlich` |
| T4 `system_admin` setzt `customer_type` | geht | ✅ `is_admin() = true`, Kundenart `business` |
| N2 Kunde ruft `app.purge_nach_frist()` | scheitert | ✅ `permission denied for function` |
| N3 **Gegenprobe** Firmen-Admin sieht seine Firma | 1 | ✅ 1 Firma, 2 Mitgliedschaften |
| N4 **Gegenprobe** fremde Firma | 0 | ✅ 0 |
| N5 **Gegenprobe** Kunde liest eigene Käufe | kein Fehler | ✅ |

T4 scheiterte im ersten Anlauf an meinem Testaufbau, nicht am Produkt: Der
`profiles`-Guard blockierte die Vorbereitung. Nebenbei ein unabhängiger Beleg,
dass er auch für den Tabelleneigentümer greift.

### Produktion, nach dem Anwenden

| Prüfung | Erwartung | Ergebnis |
|---|---|---|
| `app`-Funktionen für `authenticated` | nur `is_business_member` | ✅ `is_business_member` |
| `anon` USAGE auf `app` | false | ✅ false |
| `service_role` kommt heran | true | ✅ true |
| `is_business_member` für `authenticated` | true | ✅ true |
| SECURITY DEFINER ohne `search_path` | 0 | ✅ 0 |
| public-Tabellen ohne RLS | 0 | ✅ 0 |
| `trg_customers_guard` | vorhanden | ✅ true |

---

## Der Wachhund, der beide Befunde verhindert hätte

`scripts/pruefumgebung/103_grants_wachhund.sql`, sieben Prüfungen, alle grün.
Er hätte H-2 bei der Entstehung gemeldet: Der Grant kam nicht aus einem
falschen `GRANT`, sondern aus dem Postgres-Standard, und **es gab keinen
Test, der so etwas sieht.** Jetzt gibt es einen — samt Gegenproben, damit er
nicht durch ein pauschales Zusperren „grün" wird.

---

## Was offen bleibt

| Punkt | Warum offen | Wer |
|---|---|---|
| **H-3** 15 Functions nicht aus dem Repo ausgerollt | Abgleich läuft; erst vergleichen, dann neu ausrollen | ich |
| **H-1** `net` | Plattformgrenze; Schutz ist die Exposed-Schemas-Einstellung | Supabase-Support / später |
| **M-2** Passwortprüfung serverseitig | Supabase Pro kommt vor der Live-Schaltung | Philipp |
| **M-3** Spaltenrechte `unit_cost` | erst nachweisen, dass jeder interne Lesepfad über RPC läuft | offen |
| **H-4b** `send-push` nicht ausgerollt | in `AUTOMAT-INBETRIEBNAHME.md` geführt | Philipp |
| „Automatically expose new tables" abschalten | zusammen mit expliziten Grants in künftigen Migrationen | offen |
| Zweiter Prüfdurchgang | Finanzlogik, FIFO/MHD, Art.-15-Export, KI-Register, DATEV | ich |
