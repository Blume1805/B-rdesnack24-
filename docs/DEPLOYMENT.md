# Deployment & Installation — Bördesnack24

## Voraussetzungen

- Flutter (stable), Dart
- Supabase CLI, Deno (Edge Functions)
- Node ≥ 20 (Tooling/Skripte)
- Accounts: Supabase (EU-Region), Firebase (FCM), Sentry, PostHog, Apple Developer,
  Google Play Console, Nayax-API, sevDesk-API.

## Umgebungsvariablen

Vorlage: `.env.example` → kopieren nach `.env` (nicht committen). Clientseitig nur die
**anon/publishable** Keys; alle Secrets (sevDesk-Token, Nayax-Key, Service-Role) bleiben
**serverseitig** in Supabase Function Secrets.

```
SUPABASE_URL=
SUPABASE_ANON_KEY=
SENTRY_DSN=
POSTHOG_API_KEY=
# Server-only (Supabase Function Secrets):
# SUPABASE_SERVICE_ROLE_KEY, SEVDESK_API_TOKEN, NAYAX_API_KEY, NAYAX_WEBHOOK_SECRET
```

## Supabase

```bash
supabase start                 # lokaler Stack
supabase db reset              # Migrationen (supabase/migrations) + Seeds (supabase/seed)
supabase functions serve       # Edge Functions lokal
# Deploy:
supabase db push
supabase functions deploy <name>
supabase secrets set SEVDESK_API_TOKEN=... NAYAX_API_KEY=...
```

## Flutter-App

```bash
cd apps/mobile
flutter pub get
dart run build_runner build --delete-conflicting-outputs
flutter run                              # Entwicklung
flutter build apk --release              # Android
flutter build appbundle --release        # Play Store
flutter build ipa --release              # iOS / App Store
```

Build-Konfiguration via `--dart-define-from-file=env/<stage>.json` (dev/staging/prod).

## CI/CD

GitHub Actions (`.github/workflows/ci.yaml`): analyze · format-check · test (+coverage) ·
migration-lint. Release-Pipelines (Signing, Store-Upload) folgen in Phase 4.

## Go-Live-Checkliste (Auszug)

- [ ] Supabase EU-Region + AV-Vertrag, RLS auf allen Tabellen aktiv (Advisors grün).
- [ ] Secrets gesetzt, keine Secrets im Client-Bundle.
- [ ] sevDesk-Kennzahlen einmal manuell gegen sevDesk-Dashboard abgeglichen.
- [ ] Nayax-Bestand gegen physische Inventur eines Automaten verifiziert.
- [ ] Datenschutz-/App-Privacy-Angaben (Apple/Google) gepflegt; Rechtstexte anwaltlich geprüft.
- [ ] Backups + Restore getestet.
