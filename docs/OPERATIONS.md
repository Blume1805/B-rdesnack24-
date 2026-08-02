# Betrieb & Wartung — Bördesnack24

## Umgebungen

- **dev** — lokaler Supabase-Stack + Flutter (`env/dev.json`).
- **prod** — Supabase EU-Projekt; Builds via Release-Pipeline.

## Secrets (Supabase Function Secrets, niemals im Client)

```
SUPABASE_SERVICE_ROLE_KEY   # serverseitige Schreibzugriffe (Edge Functions)
SEVDESK_API_TOKEN           # Finanzdashboard-Sync
NAYAX_WEBHOOK_SECRET        # Verifikation der Telemetrie
FCM_SERVICE_ACCOUNT         # Push (Firebase HTTP v1, vollständiges JSON)
```

GitHub Actions (Release) Secrets:
`SUPABASE_URL`, `SUPABASE_ANON_KEY`, `ANDROID_KEYSTORE_BASE64`, `ANDROID_KEY_PROPERTIES`,
Apple-Signing (Zertifikat/Provisioning via Fastlane match o. Ä.).

## Deploy-Reihenfolge

1. `supabase db push` (Migrationen 0001–0011) und `supabase db reset` lokal verifizieren.
2. `supabase functions deploy` für die Functions. Die Liste war unvollständig
   (es fehlten u. a. die drei mailversendenden); maßgeblich ist der Bestand in
   `supabase/functions/`. Zwei Sonderfälle beim Deploy beachten:
   * `subscription-cancel` und `iot-webhook`/`weather-sync` laufen mit
     `--no-verify-jwt`. Bei `subscription-cancel` ist das keine Bequemlichkeit,
     sondern Pflicht: § 312k BGB verlangt den Kündigungsbutton ohne Login.
     Wird die Function versehentlich mit JWT-Zwang deployed, ist der
     Kündigungsweg zu — vor und nach dem Deploy prüfen.
   * Functions, die `_shared/` importieren, brauchen das Verzeichnis im
     Deploy-Paket. Die CLI nimmt es automatisch mit, beim Deploy über das
     Supabase-MCP müssen die Dateien explizit mitgegeben werden.
3. `supabase secrets set ...` (s. o.).
4. Flutter-Release über `Release`-Workflow (Tag `vX.Y.Z`).

## Wiederkehrende Aufgaben

- **Backups:** Supabase-PITR/Backups aktiv; regelmäßig Restore testen.
- **Advisors:** `get_advisors` (Security/Performance) nach jeder Migration prüfen.
- **sevDesk-Abgleich:** Kennzahlen periodisch gegen sevDesk gegenprüfen (UWG/GoBD).
- **Token-Hygiene:** verwaiste `device_tokens` (FCM-Fehler) entfernen.
- **Audit-Review:** `audit_log` stichprobenartig kontrollieren.

## Monitoring

- **Sentry** (Fehler/Crashes), **PostHog** (Nutzung, consent-gated).
- Edge-Function-Logs via `supabase functions logs <name>`.

## Verifikation vor Go-Live

Siehe `docs/DEPLOYMENT.md` (Go-Live-Checkliste) und die Verifikationsabschnitte in
`docs/FINANCE.md`, `docs/MANAGEMENT.md`, `docs/CUSTOMER.md`.
