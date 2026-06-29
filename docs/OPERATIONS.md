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
2. `supabase functions deploy invite-user sevdesk-sync finance-export-pdf nayax-webhook protocol-export-pdf send-push`.
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
