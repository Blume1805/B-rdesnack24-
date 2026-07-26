# ADR 0002 — Technologiestack & State-Management

- **Status:** Akzeptiert
- **Datum:** 2026-06-28

## Kontext

Es ist eine produktionsreife, langfristig wartbare App für Android + iOS mit gemeinsamer Codebasis,
Echtzeitdaten, Offline-Fähigkeit und strengen Compliance-Anforderungen zu bauen.

## Entscheidung

- **Flutter (stable) + Dart**, Material 3, Light/Dark, responsive — eine Codebasis für beide Stores.
- **Riverpod** für State-Management & DI: compile-sicher, testbar, kein globaler Singleton-Zwang.
- **go_router** für deklaratives Routing inkl. Auth-Redirects.
- **freezed**/**json_serializable** für unveränderliche Modelle/DTOs.
- **drift** (SQLite) für Offline-Cache + Outbox-Sync.
- **Supabase** (PostgreSQL, Auth, Storage, Realtime, Edge Functions) als Backend; Autorisierung
  primär via RLS, privilegierte Logik in Edge Functions.

## Alternativen erwogen

- *Bloc* statt Riverpod: mehr Boilerplate, kein DI-Vorteil → verworfen.
- *Firebase* als Hauptbackend: schwächeres relationales Modell + RLS für GoBD-Historisierung →
  Firebase nur für FCM-Push.

## Konsequenzen

- Domain-Layer bleibt Supabase-agnostisch (Repository-Pattern) → Portabilität Richtung Hostinger.
- Codegenerierung (build_runner) ist Teil des Build-/CI-Prozesses.
