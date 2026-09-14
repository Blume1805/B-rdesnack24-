# Bördesnack24 — Unternehmensplattform

Produktionsreife, plattformübergreifende (Android + iOS) Unternehmenssoftware der
**Bördesnack24 GbR** zur Digitalisierung sämtlicher Geschäftsprozesse rund um den Betrieb von
Snack- und Getränkeautomaten.

Die Anwendung gliedert sich in drei logisch getrennte Bereiche mit eigenen Rollen/Rechten:

1. **Finanzdashboard** (nur Gesellschafter) — sevDesk-Anbindung, Zeitraum-Auswertungen, PDF-Export.
2. **Unternehmensverwaltung** (Gesellschafter + freigegebene Mitarbeiter) — HACCP, Reinigung,
   Temperatur, Vernichtung, Wartung, Inventur in Echtzeit, Dokumentenmanagement (GoBD-revisionssicher).
3. **Kundenbereich** (Kunden) — Profil, individuelle Preise, Angebote, Kaufhistorie,
   Automatenfinder, Echtzeit-Produktverfügbarkeit.

## Tech-Stack

| Schicht        | Technologie |
|----------------|-------------|
| Frontend       | Flutter (stable), Dart, Material 3, Riverpod, go_router, freezed, drift |
| Backend        | Supabase (PostgreSQL, Auth, Storage, Realtime, Edge Functions / Deno) |
| Integrationen  | Nayax (Automaten-Telemetrie), sevDesk (Finanzen), Firebase FCM (Push) |
| Observability  | Sentry (Errors), PostHog (Analytics, consent-gated) |
| CI/CD          | GitHub Actions |
| Hosting        | Supabase (EU), Hostinger (Domain/Web) |

## Offene Punkte

Was noch zu tun ist und bei wem es liegt:
[`docs/betrieb/AUFGABEN-PHILIPP.md`](docs/betrieb/AUFGABEN-PHILIPP.md).

## Architektur

Clean Architecture + Feature-First + DDD. Siehe [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md) und die
Architecture Decision Records unter [`docs/adr/`](docs/adr/).

```
apps/kunden-app/          Kunden-App (Store-App; domain / data / presentation je Feature)
apps/gesellschafter-app/  Gesellschafter-App (nicht im Store, Direktinstallation)
apps/landing/             Landingpage boerdesnack24.de (statisch, ohne Bauwerkzeug)
packages/bs24_kern/       Gemeinsamer Kern: Anmeldung, Sicherheit, Design-System,
                          Rechtstexte, Lokalisierung
supabase/                 Migrationen, Edge Functions, Seeds
packages/                 weitere geteilte Pakete
docs/                     Architektur, ADRs, Berechtigungskonzept, Deployment
.github/                  CI/CD-Workflows, PR-Template
```

## Entwicklung

Voraussetzungen: Flutter (stable), Dart, Supabase CLI, Deno, Node ≥ 20.

```bash
# Gemeinsamer Kern zuerst (erzeugt die Lokalisierung, die beide Apps nutzen)
cd packages/bs24_kern && flutter pub get && flutter gen-l10n && cd -

# Kunden-App
cd apps/kunden-app
flutter pub get
flutter run

# Gesellschafter-App
cd ../gesellschafter-app
flutter pub get
flutter run

# Supabase (lokaler Stack)
supabase start
supabase db reset            # wendet Migrationen + Seeds an
```

Details: [`docs/DEPLOYMENT.md`](docs/DEPLOYMENT.md) · Branch-Strategie & Beiträge:
[`CONTRIBUTING.md`](CONTRIBUTING.md).

## Compliance

DSGVO · GoBD (§§ 146/147 AO, BMF v. 28.11.2019) · HACCP (VO (EG) 852/2004) · OWASP Top 10.
Revisionssicherheit: **keine physischen Löschungen** — Korrekturen ausschließlich über neue
Versionen; lückenloser Audit-Trail. Siehe [`docs/BERECHTIGUNGSKONZEPT.md`](docs/BERECHTIGUNGSKONZEPT.md).

## Status

Alle Phasen des Pflichtenhefts code-/schemaseitig umgesetzt:

- ✅ **Phase 0** — Fundament (Auth, RBAC/ABAC, Audit, RLS, CI/CD)
- ✅ **Phase 1** — Finanzdashboard (sevDesk, Zeitraum-Auswertung, PDF, Dual-Control)
- ✅ **Phase 2** — Unternehmensverwaltung (Inventur/Realtime, HACCP-Protokolle, Nayax, Dokumente)
- ✅ **Phase 3** — Kundenbereich (Angebote, Automatenfinder, Echtzeit-Verfügbarkeit, Profil/Consent)
- ✅ **Phase 4** — Go-Live (FCM-Push, Foto-/Datei-Upload, Offline-Outbox, Release-Pipeline, Store/Privacy-Doku)

Ausstehend: Live-Verifikation gegen ein Supabase-Projekt (RLS-/Integrationstests scharf schalten),
Bereitstellung der Zugänge (sevDesk, Nayax, Firebase, Apple/Google) und finale Store-Assets.
Siehe `docs/` (ARCHITECTURE, FINANCE, MANAGEMENT, CUSTOMER, PRIVACY, OPERATIONS, DEPLOYMENT).
