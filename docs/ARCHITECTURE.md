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
    core/                   billing · config · di · error · pricing · router ·
                            security · services · theme · utils · widgets
    l10n/                   ARB-Dateien und generierte Lokalisierung
    features/<feature>/     domain · data · presentation
supabase/
  migrations/               versionierte SQL (Schema, RLS, Trigger, Funktionen)
  functions/                Edge Functions (Deno/TS): sevdesk-sync, nayax-webhook, pdf-export …
  seed/                     Referenzdaten (Rollen, Permissions, SKR03-Konten)
docs/                       Architektur, ADRs, Berechtigungskonzept, Compliance,
                            Strategie, Deployment
scripts/                    Hilfsskripte
.github/workflows/          CI/CD — ci, deploy-functions, deploy-web, release
```

Drei Punkte, die früher anders dokumentiert waren und hier an den Code
angeglichen wurden (Stand 2026-09-16):

* **Kein `packages/`-Verzeichnis.** Geteilte Dart-Packages existieren nicht;
  das Design-System liegt als `core/widgets/design_system/`.
* **Kein `core/network`.** Der Backend-Zugriff läuft über `core/services` und
  die Repository-Implementierungen im `data`-Layer der Features.
* **`l10n` liegt nicht unter `core/`,** sondern als `lib/l10n/` mit
  generiertem Unterordner.

## State-Management & DI

- **Riverpod** als State- und DI-Container. Provider liefern UseCases/Repositories; Tests
  überschreiben Provider mit Fakes/Mocks.
- **go_router** für deklaratives Routing inkl. rollenbasierter Redirects (Auth-Guards).
- **equatable** für Wertgleichheit in Entities und DTOs (17 Dateien). Es wird
  **keine Codegenerierung** eingesetzt — weder `freezed` noch `json_serializable`;
  Mapper sind von Hand geschrieben.
- **Offline-Outbox** für Protokoll-Schreibvorgänge in der Feldarbeit:
  `core/services/outbox_service.dart`, persistiert über **shared_preferences**
  und ausgelöst über **connectivity_plus**. Eine SQLite-Schicht (drift o. ä.)
  existiert nicht.

## Backend (Supabase)

- **PostgreSQL** als normalisierte, historisierte Quelle der Wahrheit.
- **Row Level Security (RLS)** auf den fachlichen Tabellen — Autorisierung primär in der DB.
  Stand 2026-09-16: 63 Tabellen in `public`, davon 51 mit ausdrücklicher Aktivierung und
  6 weitere über die dynamische Schleife in `0007_haccp_protocols.sql`.
  **Offen:** die sechs Tabellen aus `0031_iot_telemetry.sql` (`telemetry_providers`,
  `machine_devices`, `machine_slots`, `machine_slots_history`,
  `machine_telemetry_events`, `machine_health`) haben weder RLS noch Policy —
  siehe „Bekannte Abweichungen" am Ende.
- **Edge Functions (Deno/TS)** für alle privilegierten Operationen: sevDesk-Sync,
  Nayax-Webhooks/Polling, PDF-Erzeugung, Freigabe-Workflows, Einladungen. Secrets bleiben
  ausschließlich serverseitig.
- **Realtime** für Live-Bestände/Verfügbarkeit. **Storage** mit Signed URLs für Uploads.

## Sicherheit (Querschnitt)

Siehe [BERECHTIGUNGSKONZEPT.md](BERECHTIGUNGSKONZEPT.md) und ADRs. Kernpunkte: Auth mit
MFA-Vorbereitung (`mfa_enroll_screen.dart` und Auth-Repository vorhanden), serverseitige
RBAC+ABAC-Prüfung, unveränderlicher Audit-Trail, Soft-Delete (`deleted_at` in 16 Migrationen),
TLS erzwungen. **Nicht umgesetzt:** Feldverschlüsselung. `pgcrypto` ist als Extension
aktiviert, wird aber nur für `gen_random_uuid()` genutzt; `pgp_sym_encrypt` kommt nirgends
vor, Supabase Vault ist nicht im Einsatz.

## Observability

**Geplant, derzeit nicht aktiv:** `sentry_flutter` und `posthog_flutter` stehen in
`pubspec.yaml` auskommentiert. Produktiv existieren nur die Server-Logs der Edge Functions.
Bei Aktivierung gilt: PostHog erst nach Einwilligung, keine personenbezogenen Rohdaten in Logs.

## Teststrategie

Ziel: Unit (Domain/UseCases) → Widget → Integration → E2E.
**Stand 2026-09-16:** 20 Testdateien unter `apps/mobile/test/` (Unit und Widget),
zwei Deno-Tests (`nayax-webhook/parse_test.ts`, `sevdesk-sync/mapping_test.ts`).
Ein Verzeichnis `integration_test/` existiert nicht, E2E-Tests gibt es also nicht.

CI (`ci.yaml`) erzwingt **`dart format` und `flutter analyze`** — beide brechen den Lauf ab.
`flutter test --coverage` läuft und lädt ein Coverage-Artefakt hoch, **eine Schwelle wird
nicht geprüft**. `deno lint`, `deno test` und `supabase test db` (pgTAP) enden jeweils auf
`|| true` und können den Lauf **nicht** zum Scheitern bringen.

## Bekannte Abweichungen (Stand 2026-09-16)

Ergebnis der Gegenprüfung dieses Dokuments gegen den Code. Die ersten drei Punkte
wurden im Text bereits korrigiert; dieser Abschnitt hält fest, was **im Code** offen ist.

| Nr. | Befund | Bewertung |
|---|---|---|
| A-1 | `0031_iot_telemetry.sql` legt sechs Tabellen an, ohne RLS zu aktivieren und ohne Policy: `telemetry_providers`, `machine_devices`, `machine_slots`, `machine_slots_history`, `machine_telemetry_events`, `machine_health`. Keine spätere Migration holt das nach. | **🔴 offen** — ohne RLS kann jedes authentifizierte Konto diese Betriebsdaten lesen, auch ein Kundenkonto. Datenklasse D2. Eigener Prüfzyklus nach `boerdesnack24-security-regression` erforderlich, inklusive Cross-User-Test mit zwei Konten. |
| A-2 | Feldverschlüsselung sensibler Felder ist dokumentiert, aber nicht implementiert. | 🟡 — als Ziel führen oder streichen, nicht als Ist behaupten. |
| A-3 | Observability (Sentry, PostHog) ist auskommentiert. | 🟡 — vor Produktivstart entscheiden. |
| A-4 | Keine E2E-Tests; Deno- und pgTAP-Läufe in der CI sind nicht blockierend (`|| true`). | 🟡 — die pgTAP-Zeile ist besonders relevant, weil sie genau die RLS-Regeln prüfen soll, die unter A-1 fehlen. |

Bestätigt und unverändert: Clean-Architecture-Schichtung je Feature, Riverpod, go_router,
Realtime für Bestände (`availability_screen.dart`, `machine_stock_screen.dart`), Storage mit
Signed URLs, Audit-Trail, Soft-Delete.
