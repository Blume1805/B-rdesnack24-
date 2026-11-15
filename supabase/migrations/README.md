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

## Im Repository, in der Produktion ausstehend (Stand 27.09.2026)

Vier Dateien stehen hier, **bevor** sie auf der Produktion gelaufen sind. Bis
zum Ausrollen fehlen sie im Register der Live-Datenbank; das ist keine
Abweichung vom Spiegel, sondern der offene Schritt.

| Datei | Wirkung | Ausrollen |
|---|---|---|
| `20260926120000_scheinkaeufe_sperren.sql` | B-1 bis B-3: Scheinkäufe gesperrt, fremde Kaufbeträge und Bargeld-Soll geschützt | Runbook L (`docs/OPERATIONS.md` im Arbeitszweig) sperrt B-1 sofort per SQL-Editor; danach diese Migration regulär ausrollen, damit sie im Register steht |
| `20260926121000_terminal_webhook_anbindung.sql` | B-4/B-5: Webhook findet die Einlösefunktion, Enum-Wert `machine` | vor dem ersten Automaten mit Terminal |
| `20260927200000_pfand_getrennt.sql` | Pfand getrennt vom Preis (§ 7 PAngV, V-016), Rabatte und Spende ohne Pfand; behebt zudem `vend_freigabe_anlegen` (42702) und die 7-%-Pauschale der Spendenbasis | Runbook M (`docs/OPERATIONS.md` im Arbeitszweig): **nach** `…121000` und **nach** dem App-Update; bricht sonst bzw. im falschen Katalog ohne Änderung ab |
| `20260929100000_verfuegbarkeit_fuer_kunden.sql` | V-016-d: `machine_availability` zeigt Kunden je Produkt nur verfügbar/bald leer/ausverkauft, Preis und Pfand; `inventory` bleibt intern | Runbook M, **nach** `…200000`; bricht sonst ohne Änderung ab |
| `20261103100000_vorteile_ohne_abo.sql` | V-018-a: Vorteile (Dauerrabatt, Coupons, Treueboni, Status) für jedes registrierte Konto über `app.has_app_benefits()`; Monats- und Jahresabo nicht mehr wählbar; Löschregel für `loyalty_bonus_grants.offer_id` (V-018-d) |
| `20261115090000_runbook_l_sperre_scheinkauf_und_kaufbetraege.sql` | Runbook L für den Stand der Produktion vom 10.09.2026: Aufrufrechte für `dev_add_demo_purchase`, `purchase_net_items`, `purchase_donation_for` entzogen (B-1, B-2). In der Produktion am 15.11.2026 **vor** den Migrationen ab `20260910190000` eingespielt; wiederholbar |
| `20261115100000_nachzug_produktionsstand.sql` | Übernimmt, was nur in der Produktion stand (zwei Funktionen, 8 Regeln auf Telemetrie-Tabellen, Speicherbereich `employee-signatures`); Upload dort nur noch für interne Konten |
| `20261115110000_unterschrift_erneut_hochladen.sql` | Regel zum Ändern im Bereich `employee-signatures`, damit ein zweiter Upload derselben Unterschrift gelingt |

Nachweis am Produktions-Nachbau: Prüfskripte `108` (10/10), `109` (5/5) und
`110` (23/23, Pfand) und `111` (12/12, Verfügbarkeit), zuletzt am 29.09.2026
nach einem Neuaufbau aus allen 237 Migrationen, alle 28 Prüfskripte ohne Fehler. Bericht: `docs/audit/AUDIT-2026-09-BACKEND.md` im Zweig
`claude/bordesnack24-app-strategy-sf5yzy`.

## Stand der Produktion (15.11.2026)

Die Produktion entspricht diesem Verzeichnis: Ein Neuaufbau aus allen 241
Migrationen ergibt denselben Fingerabdruck wie die Produktion
(`scripts/pruefumgebung/fingerabdruck.sql`, sechs Merkmale). Die Versionsnummern
in `supabase_migrations.schema_migrations` der Produktion sind die Zeitpunkte
des Einspielens und weichen von den Dateinamen ab; maßgeblich ist der Name.
In der Produktion gibt es zusätzlich das Hilfsschema `ausrollen_20261115`
(geprüfte Migrationstexte und Sicherung der Produktpreise vom 15.11.2026). Es
ist nicht über die API erreichbar und gehört nicht zum fachlichen Schema.
