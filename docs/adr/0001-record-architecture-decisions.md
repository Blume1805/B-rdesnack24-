# ADR 0001 — Architecture Decision Records verwenden

- **Status:** Akzeptiert
- **Datum:** 2026-06-28

## Kontext

Das Pflichtenheft fordert, jede Architektur- und sicherheitsrelevante Entscheidung nachvollziehbar
zu dokumentieren. Wir brauchen ein leichtgewichtiges, versioniertes Format direkt im Repository.

## Entscheidung

Wir führen **Architecture Decision Records (ADRs)** unter `docs/adr/` als fortlaufend nummerierte
Markdown-Dateien (`NNNN-titel.md`). Jede ADR enthält: Status, Datum, Kontext, Entscheidung,
Konsequenzen. ADRs sind unveränderlich; eine Änderung erfolgt über eine neue ADR, die die alte
als „abgelöst" markiert.

## Konsequenzen

- Entscheidungen sind für Audits (DSGVO/GoBD) und neue Teammitglieder nachvollziehbar.
- Minimaler Pflegeaufwand, eng am Code.
