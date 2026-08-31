# Migrationen — Konvention

Dieses Verzeichnis ist ein **Spiegel des Migrationsregisters der
Live-Datenbank** (`supabase_migrations.schema_migrations` im Projekt
`nnfsyuglkqycwenwxmuw`). Es enthält 182 Dateien: genau die SQL-Anweisungen,
die tatsächlich auf die Produktionsdatenbank angewendet wurden — byte-genau,
gegen die MD5-Summe der Datenbank verifiziert.

## Dateinamen

```
<version>_<name>.sql        z. B. 20260828122732_werbenetzwerk_funktionen.sql
```

`version` und `name` sind exakt die Werte aus dem Register. Die
lexikografische Reihenfolge der Dateinamen entspricht damit der
chronologischen Anwendungsreihenfolge — `supabase db reset` spielt sie
korrekt ab und stellt den Produktionsstand her.

**Dateinamen nicht ändern.** Weicht ein Name vom Register ab, hält das CLI
die Migration für neu und wendet sie erneut an.

## Regel für alle künftigen Änderungen

> Keine Schemaänderung ohne Migration in diesem Verzeichnis.

Konkret:

1. Migration hier als Datei anlegen (Zeitstempel als Version).
2. Über den üblichen Weg anwenden (`supabase db push` bzw.
   `apply_migration` mit demselben Namen).
3. Datei committen — im selben Commit wie die Anwendung.

Wer eine Änderung direkt an der Datenbank vornimmt, ohne sie hier
abzulegen, erzeugt genau den Zustand, der im August 2026 aufgeräumt werden
musste: 119 Migrationen aus fünf Wochen Arbeit existierten ausschließlich
in der laufenden Datenbank — nicht reviewbar, nicht rückrollbar, nicht
wiederherstellbar.

## Verhältnis zu `docs/migrations-legacy/`

Bis August 2026 lagen hier 61 handgepflegte Dateien mit den Namen
`0001_…` bis `0063_…`. Sie waren eine **redigierte Fassung**, nicht die
angewendete Historie: Beim Prüfsummenabgleich stimmte nur eine einzige von
61 mit dem überein, was tatsächlich lief. Sie enthielten teils zusätzliches
DDL (etwa `set search_path` auf Trigger-Funktionen) und `comment on`-
Anweisungen, die so nie angewendet wurden.

Diese Dateien sind nach `docs/migrations-legacy/` verschoben. Sie sind als
Dokumentation weiterhin lesenswert — als Schemaquelle sind sie es nicht.

## Wiederherstellung

Der Spiegel lässt sich jederzeit gegen die Live-Datenbank prüfen:

```sql
select version, name, md5(array_to_string(statements, E'\n'))
from supabase_migrations.schema_migrations order by version;
```

Die MD5-Summe muss dem Inhalt der zugehörigen Datei ohne abschließenden
Zeilenumbruch entsprechen.
