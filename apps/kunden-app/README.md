# Bördesnack24 — Flutter-App

Clean-Architecture-App (Android/iOS/Web) für die Bördesnack24-Plattform.

## Struktur

```
lib/
  core/        config · di · error · theme · router · utils · widgets
  l10n/        ARB-Quellen (+ generierte Lokalisierung unter l10n/generated)
  features/<feature>/
    domain/    Entities, Repository-Interfaces, UseCases (infrastrukturfrei)
    data/      DTOs, DataSources, Repository-Implementierungen
    presentation/  Riverpod-Controller, Screens, Widgets
```

## Erststart

```bash
flutter pub get
flutter gen-l10n                      # generiert lib/l10n/generated/

# Plattform-Projekte einmalig erzeugen (nicht im Repo enthalten):
flutter create --platforms=android,ios,web .

# App starten (client-sichere Werte injizieren):
flutter run --dart-define-from-file=env/dev.json
```

## Umgebungs-Definitionen

`env/<stage>.json` (nicht committen, siehe `env/dev.example.json`):

```json
{
  "SUPABASE_URL": "https://<projekt>.supabase.co",
  "SUPABASE_ANON_KEY": "<anon-key>",
  "APP_ENV": "dev",
  "SENTRY_DSN": "",
  "POSTHOG_API_KEY": ""
}
```

## Tests

```bash
flutter test                # Unit + Widget
flutter test integration_test
```

## Konventionen

- Domain-Layer importiert **kein** Supabase/Flutter-Infrastrukturpaket.
- Autorisierung ist serverseitig (RLS); Client-Checks dienen nur der UX.
- Keine Secrets im Code (`--dart-define`, Server-Secrets in Supabase).
