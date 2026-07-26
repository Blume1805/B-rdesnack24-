# Beitragen & Branch-Strategie

## Branch-Modell

| Branch        | Zweck |
|---------------|-------|
| `main`        | Produktionsstand, immer deploybar, geschützt (nur via PR). |
| `develop`     | Integrationsbranch der laufenden Entwicklung. |
| `feature/*`   | Einzelne Features/Module (`feature/finance-dashboard`). |
| `fix/*`       | Bugfixes. |
| `chore/*`     | Tooling/Infra/Doku ohne Produktcode. |

> Hinweis: Die initiale Plattformentwicklung läuft auf
> `claude/bordesnack24-platform-setup-qtqvho` und wird nach Review nach `develop`/`main` integriert.

## Commit-Konventionen (Conventional Commits)

```
<type>(<scope>): <kurzbeschreibung>

[optionaler body]
```

Typen: `feat`, `fix`, `refactor`, `test`, `docs`, `chore`, `perf`, `build`, `ci`, `security`.
Beispiel: `feat(auth): E-Mail-Login mit MFA-Vorbereitung`

## Pull-Request-Workflow

1. Branch von `develop` abzweigen.
2. Tests + `flutter analyze` lokal grün.
3. PR gegen `develop` öffnen, PR-Template ausfüllen.
4. CI muss grün sein (analyze · format · test · migration-lint).
5. Mindestens ein Review; danach Squash-Merge.

## Definition of Done (je Modul, lt. Pflichtenheft)

- [ ] Tests zuerst (TDD): Unit · Widget · Integration · ggf. E2E.
- [ ] Code-Review durchgeführt.
- [ ] Sicherheitstest (OWASP-Top-10-Checkliste, RLS-Negativtests).
- [ ] Performanceanalyse.
- [ ] Dokumentation aktualisiert (inkl. ADR bei Architekturentscheidungen).
- [ ] Keine Secrets im Code; alle privilegierten Operationen serverseitig.

## Codequalität

Clean Architecture, SOLID, DRY, KISS, DDD, Repository-Pattern, DI. Keine Quick-Fixes,
keine Workarounds. Domain-Layer bleibt frei von Infrastruktur-Abhängigkeiten.
