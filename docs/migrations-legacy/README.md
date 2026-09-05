# Handgepflegte Migrationen (Stand bis August 2026)

Diese 61 Dateien lagen bis zum Audit im August 2026 unter
`supabase/migrations/`. Sie werden hier aufbewahrt, weil ihre Kommentare
und Begründungen dokumentarischen Wert haben.

**Sie sind nicht die angewendete Schemahistorie.** Ein Abgleich per
MD5-Prüfsumme gegen das Migrationsregister der Live-Datenbank ergab: von
61 Dateien stimmte **genau eine** mit dem überein, was tatsächlich
angewendet wurde.

Beispiel `0001_extensions_and_conventions.sql` — 2 192 Bytes hier gegen
723 Bytes angewendet. Der Unterschied ist nicht nur Kommentar: die
Repo-Fassung setzt zusätzlich `set search_path = public, app` auf
`app.set_updated_at()` und `app.set_created_by()` und enthält
`comment on function`-Anweisungen. Beides wurde in dieser Migration nie
ausgeführt.

Wer wissen will, **was die Datenbank kann**, liest
`supabase/migrations/`. Wer wissen will, **wie es gemeint war**, kann hier
nachschlagen — mit dem Vorbehalt, dass der Text vom ausgeführten Stand
abweichen kann.
