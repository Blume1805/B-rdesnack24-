# Migrationen — Konvention

Dieses Verzeichnis ist ein **Spiegel des Migrationsregisters der
Live-Datenbank** (`supabase_migrations.schema_migrations` im Projekt
`nnfsyuglkqycwenwxmuw`) — und seit dem 02.09.2026 zusätzlich ein
**von Null reproduzierbarer Bauplan**.

Beides ist nicht dasselbe, und der Unterschied ist der Grund für diesen
Abschnitt. Bis dahin galt nur das Erste: Die Dateien entsprachen
byte-genau dem, was auf der Produktion gelaufen ist. Auf einer leeren
Datenbank liefen sie trotzdem nicht durch — sechs von ihnen setzten einen
Zwischenzustand voraus, den keine Migration herstellt (von Hand angelegte
Arbeitstabellen, eine von Hand gesetzte Datenänderung).

## Nachweis der Reproduzierbarkeit

Ein vollständiger Neuaufbau aus diesem Verzeichnis auf einer leeren
Datenbank ergibt seit dem 02.09.2026 **197 von 197** erfolgreichen
Migrationen und in allen neun gemessenen Merkmalen denselben Stand wie
die Produktion — 112 Tabellen, 186 Policies (`c8fbc1d9…`), 1561
Tabellenrechte (`da069539…`), die Ausführungsrechte je Rolle
(`bdc07832…` / `c5f00ccb…` / `7056df4e…`) und null Funktionen mit
PUBLIC-Ausführungsrecht.

Der Ablauf steht in `scripts/pruefumgebung/README.md`. **Er gehört vor
jedes Release einmal ausgeführt**: Weicht ein Fingerabdruck ab, ist
entweder an der Produktion vorbei gearbeitet worden oder eine Migration
tut nicht, was sie zu tun vorgibt.

## Sechs Dateien tragen einen datierten Nachtrag

Die sechs nicht wiederholbaren Migrationen haben einen kommentierten
Zusatz bekommen (`-- NACHTRAG 02.09.2026 (Befund S-14, …)`), der ihren
Lauf auf einer leeren Datenbank möglich macht. An der Wirkung auf die
bereits bespielte Produktion ändert er nichts; der ursprüngliche Wortlaut
steht weiterhin im Register der Datenbank. Damit weicht bei diesen sechs
Dateien die MD5-Summe vom Register ab — bewusst, und hier vermerkt.

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
4. **Neuaufbau laufen lassen und die Fingerabdrücke vergleichen.** Was
   dabei auffällt, fällt sonst nirgends auf: Am 02.09.2026 hat genau
   dieser Vergleich zwei Rechteausweitungen sichtbar gemacht, die eine
   grüne Regression nicht gezeigt hat.

Zwei Fallen, die dabei schon zugeschlagen haben:

* **Eine neue Tabelle bekommt automatisch Rechte.** Supabase vergibt
  `anon` und `authenticated` volle DML-Rechte auf jede neu angelegte
  Tabelle in `public`. Soll sie nur über eine RPC erreichbar sein, gehört
  ein ausdrückliches `revoke all … from anon, authenticated` in dieselbe
  Migration.
* **`grant execute on all functions` ist fast nie gemeint.** Der Blankett-
  Grant öffnet auch alles, was bewusst zu war.

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
