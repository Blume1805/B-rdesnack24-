# Betrieb & Wartung — Bördesnack24

## Umgebungen

- **dev** — lokaler Supabase-Stack + Flutter (`env/dev.json`).
- **prod** — Supabase EU-Projekt; Builds via Release-Pipeline.

## Secrets (Supabase Function Secrets, niemals im Client)

```
SUPABASE_SERVICE_ROLE_KEY   # serverseitige Schreibzugriffe (Edge Functions)
SEVDESK_API_TOKEN           # Finanzdashboard-Sync
NAYAX_WEBHOOK_SECRET        # Signaturprüfung in nayax-webhook
FCM_SERVICE_ACCOUNT         # Push (Firebase HTTP v1, vollständiges JSON)
```

**Achtung, zwei getrennte Geheimnisse für Telemetrie:** `nayax-webhook` prüft gegen
das Function Secret `NAYAX_WEBHOOK_SECRET`. `iot-webhook` prüft dagegen gegen
`public.telemetry_providers.hmac_secret` — also gegen einen Wert **in der
Datenbank**, einen je Provider. Beide Wege sind getrennt zu pflegen und getrennt
zu rotieren.

GitHub Actions (Release) Secrets:
`SUPABASE_URL`, `SUPABASE_ANON_KEY`, `ANDROID_KEYSTORE_BASE64`, `ANDROID_KEY_PROPERTIES`,
Apple-Signing (Zertifikat/Provisioning via Fastlane match o. Ä.).

## Deploy-Reihenfolge

1. `supabase db push` (Stand 2026-09-16: Migrationen 0001–0064) und `supabase db reset`
   lokal verifizieren, anschließend `supabase test db`.
2. Edge Functions ausrollen. Es sind **21** Stück; sie werden nicht einzeln von Hand
   aufgezählt, sondern über den Workflow `deploy-functions.yaml` ausgerollt
   (Tag `functions-deploy-*`), der die Liste selbst ermittelt. Manuell:
   `supabase functions deploy <name> --project-ref <ref>`.
3. `supabase secrets set ...` (s. o.).
4. Flutter-Release über `Release`-Workflow (Tag `vX.Y.Z`).

## Wiederkehrende Aufgaben

- **Backups:** Supabase-PITR/Backups aktiv; regelmäßig Restore testen.
- **Advisors:** `get_advisors` (Security/Performance) nach jeder Migration prüfen.
- **sevDesk-Abgleich:** Kennzahlen periodisch gegen sevDesk gegenprüfen (UWG/GoBD).
- **Token-Hygiene:** verwaiste `device_tokens` (FCM-Fehler) entfernen.
- **Audit-Review:** `audit_log` stichprobenartig kontrollieren.
- **RLS-Abdeckung:** nach jeder Migration prüfen, ob neue Tabellen in `public`
  ohne `enable row level security` angelegt wurden — der Befund vom 2026-09-16
  entstand genau so:

  ```sql
  select c.relname
    from pg_class c join pg_namespace n on n.oid = c.relnamespace
   where n.nspname = 'public' and c.relkind = 'r' and not c.relrowsecurity;
  ```
- **Secret-Rotation:** Provider-Geheimnisse turnusmäßig wechseln, siehe Runbook
  weiter unten.

## Runbook: Rotation eines Telemetrie-Provider-Geheimnisses

Gilt für `public.telemetry_providers.hmac_secret`, geprüft von `iot-webhook`.
Ein HMAC-Secret ist ein **geteiltes** Geheimnis: Es wird auf unserer Seite und
beim absendenden System gleichzeitig gewechselt. Wird es einseitig geändert,
schlägt ab sofort jede Signaturprüfung fehl und der Telemetrie-Eingang steht.

**Auslöser**
Verdacht auf Offenlegung, Personalwechsel beim Dienstleister, turnusmäßige
Rotation, oder nach einem Sicherheitsbefund — zuletzt am 2026-09-16, weil die
Tabelle bis dahin ohne RLS lag (siehe `docs/ARCHITECTURE.md`, Abweichung A-1).

**Vorbedingung**
Migration `0064_iot_telemetry_rls.sql` ist eingespielt. Sonst ist auch das neue
Geheimnis wieder für jedes Konto lesbar.

```bash
supabase db push                 # oder: supabase migration up --linked
supabase test db                 # RLS-Nachweis, muss grün sein
```

**Schritt 1 — Betroffenheit feststellen** (SQL-Editor des Projekts)

```sql
select id, name, adapter, is_active, created_at from public.telemetry_providers;
select role, count(*) from public.profiles group by role;
```

Existiert nur ein Platzhalter und hat nie ein fremdes Konto bestanden, genügt es,
das Geheimnis vor dem Produktivstart einmal sauber zu setzen.

**Schritt 2 — Neues Geheimnis erzeugen**

```bash
openssl rand -hex 32
```

**Schritt 3 — Übergabe an den Dienstleister**
Über einen sicheren Kanal, nicht per E-Mail im Klartext. Umstellungsfenster
vereinbaren; außerhalb der Stoßzeiten der Automaten legen.

**Schritt 4 — Wert setzen**
Im SQL-Editor mit privilegiertem Zugriff. **Nicht** aus der App heraus: Seit
Migration 0064 darf keine Clientrolle diese Tabelle schreiben.

```sql
update public.telemetry_providers
   set hmac_secret = '<neuer Wert>', updated_at = now()
 where id = '<provider-id>';
```

**Schritt 5 — Nachweis**
Testereignis senden lassen, dann prüfen:

```sql
select event_uid, status, received_at
  from public.machine_telemetry_events
 order by received_at desc limit 5;
```

Erwartet: neuer Eintrag mit Status `received`. Zusätzlich die Function-Logs auf
`Invalid signature` (401) kontrollieren — dort dürfen nach der Umstellung keine
neuen Einträge auflaufen.

**Schritt 6 — Dokumentation**
Datum, Provider, Anlass und ausführende Person festhalten. **Der alte und der
neue Wert gehören nicht ins Protokoll.** Der Vorgang ist für die
Verfahrensdokumentation aufzubewahren.

**Rollback**
Schlägt die Prüfung fehl, den alten Wert zurückschreiben und das Fenster neu
ansetzen. Deshalb den alten Wert bis zum bestandenen Nachweis griffbereit halten
— außerhalb des Repositorys.

## Monitoring

- **Sentry** (Fehler/Crashes), **PostHog** (Nutzung, consent-gated).
- Edge-Function-Logs via `supabase functions logs <name>`.

## Verifikation vor Go-Live

Siehe `docs/DEPLOYMENT.md` (Go-Live-Checkliste) und die Verifikationsabschnitte in
`docs/FINANCE.md`, `docs/MANAGEMENT.md`, `docs/CUSTOMER.md`.
