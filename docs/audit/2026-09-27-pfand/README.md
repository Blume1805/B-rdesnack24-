# Pfand getrennt vom Preis — Dateien der Produktionslinie (27.09.2026)

Die Produktionslinie liegt im Zweig
`claude/bordesnack24-audit-architecture-7xd3d6`. Dort ist diese Arbeit als
Commit `db8cfb1` angelegt (auf `437dadb`), aber **noch nicht gepusht**: Das
Hochladen in diesen Zweig braucht eine eigene Freigabe. Bis dahin sichern die
Dateien hier den Stand.

| Datei | Inhalt |
|---|---|
| `20260927200000_pfand_getrennt.sql` | Migration, identisch mit dem Commit |
| `110_pfand.sql` | Prüfskript für die Prüfumgebung, 23 Urteile |
| `produktionslinie-db8cfb1.patch` | vollständiger Commit (auch `receipt-pdf` und beide READMEs), anwendbar mit `git am` auf `437dadb` |

Zusammenhang, Nachweise und offene Punkte: `docs/COMPLIANCE.md`, V-016.
Ausrollen: `docs/OPERATIONS.md`, Runbook M.
