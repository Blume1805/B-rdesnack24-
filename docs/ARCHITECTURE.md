# Architektur — Bördesnack24

## Leitprinzipien

Clean Architecture · Feature-First · Domain Driven Design · SOLID · DRY · KISS ·
Repository-Pattern · Dependency Injection · Test Driven Development.

Der **Domain-Layer ist frei von Infrastruktur** (kein Supabase-Import in `domain/`). Dadurch
bleibt ein späterer Wechsel des Backends/Hostings (Stichwort Hostinger) ohne Bruch der
Geschäftslogik möglich.

## Schichten (je Feature)

```
features/<feature>/
  domain/        Entities, Value Objects, Repository-Interfaces, UseCases  (rein, testbar)
  data/          DTOs, DataSources (Supabase/REST), Repository-Implementierungen, Mapper
  presentation/  Riverpod-Controller (State), Screens, Widgets
```

Abhängigkeitsrichtung: `presentation → domain ← data`. Die Domain kennt weder Presentation
noch Data; Data implementiert Domain-Interfaces; Presentation nutzt UseCases.

## Monorepo-Layout

```
apps/mobile/                Flutter-App (Android/iOS/Web)
  lib/
    core/                   config · di · error · network · theme · l10n · security · widgets · router
    features/<feature>/     domain · data · presentation
packages/                   geteilte Dart-Packages (design_system, validators, …)
supabase/
  migrations/               versionierte SQL (Schema, RLS, Trigger, Funktionen)
  functions/                Edge Functions (Deno/TS): sevdesk-sync, nayax-webhook, pdf-export …
  seed/                     Referenzdaten (Rollen, Permissions, SKR03-Konten)
docs/                       Architektur, ADRs, Berechtigungskonzept, Deployment, API, DB
.github/workflows/          CI/CD
```

## State-Management & DI

- **Riverpod** als State- und DI-Container. Provider liefern UseCases/Repositories; Tests
  überschreiben Provider mit Fakes/Mocks.
- **go_router** für deklaratives Routing inkl. rollenbasierter Redirects (Auth-Guards).
- **freezed** + **json_serializable** für unveränderliche Modelle & DTOs.
- **drift** (SQLite) für Offline-Cache und eine **Outbox** zur Synchronisation.

## Backend (Supabase)

- **PostgreSQL** als normalisierte, historisierte Quelle der Wahrheit.
- **Row Level Security (RLS)** auf allen fachlichen Tabellen — Autorisierung primär in der DB.
- **Edge Functions (Deno/TS)** für alle privilegierten Operationen: sevDesk-Sync,
  Nayax-Webhooks/Polling, PDF-Erzeugung, Freigabe-Workflows, Einladungen. Secrets bleiben
  ausschließlich serverseitig.
- **Realtime** für Live-Bestände/Verfügbarkeit. **Storage** mit Signed URLs für Uploads.

## Sicherheit (Querschnitt)

Siehe [BERECHTIGUNGSKONZEPT.md](BERECHTIGUNGSKONZEPT.md) und ADRs. Kernpunkte: Auth mit
MFA-Vorbereitung, serverseitige RBAC+ABAC-Prüfung, AES für sensible Felder (pgcrypto/Vault),
unveränderlicher Audit-Trail, Soft-Delete + Versionierung (GoBD), TLS erzwungen.

## Observability

Sentry (Fehler/Crashes), PostHog (Produktanalyse, **erst nach Einwilligung** aktiv), strukturierte
Server-Logs. Keine personenbezogenen Rohdaten in Logs.

## Teststrategie

TDD: Unit (Domain/UseCases) → Widget → Integration (Repos gegen lokalen Supabase) → E2E
(`integration_test`). Edge Functions via `deno test`. CI erzwingt analyze, format, Coverage-Schwelle
und Migrations-Lint.
