# Lokale Prüfumgebung — Datenisolation nachweisen, ohne Produktion zu berühren

Diese Skripte bauen aus den Migrationen dieses Repositories eine
vollständige Kopie der Autorisierungsfläche auf einem **lokalen**
PostgreSQL 16 auf. Sie existieren, weil zwei Dinge gleichzeitig gelten:

* Ein Nachweis ist etwas, das ausgeführt wurde. Eine Codelektüre ist kein
  Test.
* Tests gegen die Produktionsdatenbank sind untersagt.

Ohne eine dritte Umgebung ist beides zusammen unerfüllbar. Diese Skripte
sind diese dritte Umgebung.

## Warum das Ergebnis überhaupt etwas über die Produktion aussagt

Eine lokale Nachbildung ist nur so viel wert wie ihre Gleichheit mit dem
Original. Deshalb wird die Gleichheit **gemessen**, nicht behauptet.
Stand nach dem Ausrollen der Korrekturen S-1 bis S-12 und ihres Nachzugs
am 02.09.2026:

Stand nach dem Ausrollen von CUST-018 sowie S-23 und S-24 am 02.09.2026.
Die lokale Spalte stammt aus einem **Neubau von Null** über alle 202
Migrationen des Repositories — nicht aus einer fortgeschriebenen
Datenbank:

| Merkmal | Produktion | Neubau aus dem Repository | Fingerabdruck |
| --- | --- | --- | --- |
| RLS-Policies | 189 | 189 | `a44cb08bf9c4dcb3de3a8224dbed366b` (identisch) |
| Tabellenrechte für anon/authenticated/service_role | 1575 | 1575 | `98a96151ba93bfcea06773c6cad5bec8` (identisch) |
| Ausführungsrechte `anon` | 4 | 4 | `fd7d91d85d4bb23c8e786fc430e772bf` (identisch) |
| Ausführungsrechte `authenticated` | 139 | 139 | `de2ba940c1690120d4bd7d11ebf0f3b3` (identisch) |
| Ausführungsrechte `service_role` | 157 | 157 | `9d6a87944be388aad57f7eaed6372385` (identisch) |
| Löschregeln, davon offen | 36 / 0 | 36 / 0 | — |
| `execute_account_deletion` | — | — | `e52044e1ce790c9b22c23a2f1ef7048a` (identisch) |
| `app.purge_nach_frist` | — | — | `94c52c5d176ff7f3bc6dbd1ce24a1980` (identisch) |

Die beiden letzten Zeilen sind MD5 über den Funktionsrumpf. Sie sagen
mehr als jeder Rechtevergleich: Was hier geprüft wurde, ist **byteweise**
dasselbe, was in der Produktion läuft.

Vor dem Ausrollen lauteten die beiden ersten Fingerabdrücke
`6d300aabed59a0c1065ac2100e0701fb` (186 Policies) und
`d29b4dccf48c09cf6914e325f597f429` (1568 Rechte) — ebenfalls beidseitig
identisch. Der Vergleich hat sich unmittelbar bezahlt gemacht: Nach dem
Ausrollen standen 1581 Rechte in der Produktion gegen 1573 lokal. Die
acht zusätzlichen waren die Standardrechte, die Supabase einer neu
angelegten Tabelle automatisch für `anon` und `authenticated` gibt —
sichtbar nur im Abgleich, nicht in der Migration. Der Nachzug (Entzug
der Schreibrechte auf der Aggregatsicht) führte beide Seiten auf 1561.

Die Fingerabdrücke sind MD5 über die vollständige, sortierte Auflistung
(Tabelle, Policy, Kommando, Rolle, `USING`, `WITH CHECK` bzw. Rolle,
Tabelle, Recht). Stimmen sie überein, ist jede Zugriffsregel dieselbe.
Ein Testergebnis von hier gilt damit auch dort — und ein abweichender
Fingerabdruck ist das Signal, dass die Umgebung neu gebaut werden muss,
bevor irgendein Ergebnis zählt.

## Aufbau

```bash
BASE=/var/tmp/bs24pg
/usr/lib/postgresql/16/bin/initdb -D $BASE/data -U postgres --auth=trust
/usr/lib/postgresql/16/bin/pg_ctl -D $BASE/data -l $BASE/server.log \
  -o "-p 55432 -c unix_socket_directories=$BASE/run" start
psql -h $BASE/run -p 55432 -U postgres -c "create database bs24;"
psql -h $BASE/run -p 55432 -U postgres -d bs24 \
  -c "alter database bs24 set search_path to public, extensions;" \
  -f 01_supabase_nachbau.sql

# Migrationen in Reihenfolge einspielen (pg_cron wird übersprungen)
for f in ../../supabase/migrations/*.sql; do
  sed -E 's/^\s*create extension if not exists\s+"?pg_cron"?.*$/select 1;/I' "$f" \
  | psql -h $BASE/run -p 55432 -U postgres -d bs24 -v ON_ERROR_STOP=1 -q
done

psql ... -f 10_pruefdaten.sql -f 20_werkzeug.sql
```

Voraussetzung: `postgresql-16`, `postgresql-contrib-16`, `postgresql-16-pgtap`.

Die Tabellen- und Funktionsrechte werden **aus der Produktion ausgelesen**
(nur Metadaten, keine Inhalte) und lokal angewandt; sonst würden
Negativtests aus dem falschen Grund bestehen — nämlich weil ein `GRANT`
fehlt statt weil eine Policy greift.

### Reproduzierbarkeit — seit 02.09.2026 gegeben

Bis dahin liefen 179 von 185 Migrationen auf einer leeren Datenbank; sechs
setzten einen Zwischenzustand der Produktion voraus. Sie sind repariert
(Befund S-14, `docs/SECURITY.md` Abschnitt 13). Der vollständige Neuaufbau
ergibt jetzt **202 von 202** und denselben Stand wie die Produktion.

Die Rechte werden dabei **nicht mehr aus der Produktion importiert**: Der
Nachbau setzt die Supabase-Standardrechte selbst (`alter default
privileges`, abgelesen aus `pg_default_acl` der Produktion). Das ist der
Unterschied zwischen „gleich, weil abgeschrieben" und „gleich, weil
dieselben Regeln gelten" — und nur die zweite Variante findet Fehler.

### Der vollständige Durchlauf — und was er am 14.09.2026 zutage brachte

Der Neuaufbau ergibt inzwischen **233 von 233** Migrationen. Am
14.09.2026 sind zum ersten Mal seit Längerem **alle 24 Prüfskripte
nacheinander** gegen einen solchen Neubau gelaufen. Ergebnis: **0
psql-Fehler in 24 von 24 Skripten.**

Dass dieser Satz jetzt dasteht, ist der eigentliche Ertrag — denn beim
ersten Versuch stimmte er nicht:

* **`pruef.lies()` war nirgends definiert.** Acht Skripte rufen die
  Funktion auf; im Repository stand sie nicht. Die betroffenen Prüfungen
  brachen mitten im Skript ab. Weil die Skripte ohne `ON_ERROR_STOP`
  laufen, sah der Durchlauf trotzdem unauffällig aus. Ergänzt in
  `20_werkzeug.sql`.
* **`10_pruefdaten.sql` legte den Automaten und den Werbekunden nicht
  an**, die `102` und `100` voraussetzen. Beide scheiterten am
  Fremdschlüssel. Ergänzt — mit genau den Kennungen, die dort erwartet
  werden.
* **Der Wächter auf `profiles` schlug bei der Fixture zu.** Erst seit
  `auth.users` im Nachbau ein `invited_at` hat, entsteht für den
  Gesellschafter überhaupt ein Profil — und damit greift
  `app.guard_profile_update()` beim Aktivieren. Vorher traf das `UPDATE`
  null Zeilen. Die Fixture legt den Trigger für diese eine Anweisung
  still.

**Daraus folgt eine Regel, die vorher niemand aufgeschrieben hatte:** Ein
Prüfwerkzeug verfällt genauso wie der Code, den es prüft — nur merkt es
niemand, weil ein verfallenes Werkzeug keine roten Zeilen erzeugt,
sondern gar keine. Der vollständige Durchlauf gehört deshalb zu jeder
Änderung an den Migrationen, nicht nur das eine neue Skript.

Der Durchlauf in der Reihenfolge, in der er gemeint ist:

```bash
for f in 40 50 60 70 80 81 90 91 92 93 94 95 96 97 98 99 \
         100 101 102 103 104 105 106 107; do
  d=$(ls ${f}_*.sql | head -1)
  psql -h $BASE/run -p 55432 -U postgres -d bs24 -q -f "$d"
done
```

`105`, `106` und `107` sind **absichtlich nicht wiederholbar**: Sie schreiben
Ereignisse in eine Kette, die sich nicht zurücksetzen lässt, ohne genau
das kaputtzumachen, was sie beweisen sollen. Sie gehören ans Ende und
brauchen davor einen Neubau.

## Prüfskripte

| Datei | Prüft |
| --- | --- |
| `40_lese_isolation.sql` | Zeilenzahl je Tabelle aus Sicht von anon, Kunde A, Kunde B, Gesellschafter — gegen die Wahrheit |
| `50_schreib_isolation.sql` | T2 ID-Tausch, T3 Ändern, T4 Löschen fremder Daten, Gegenprobe auf eigene Daten, Mass Assignment |
| `60_abo_und_finanzen.sql` | Altersprüfung beim Abo, Preis- und Punktemanipulation |
| `70_vertikal.sql` | Kunde gegen Gesellschafterdaten und -funktionen |
| `80_verwaltungs_rpc.sql` | alle 48 Verwaltungs-RPCs, die `authenticated` aufrufen darf |
| `90_nachweis_korrekturen.sql` | die Korrekturen S-1 bis S-12, jede mit Gegenprobe |
| `91_b2b_pruefdaten.sql` | zwei Firmenkunden mit spiegelbildlichem Bestand |
| `92_b2b_matrix.sql` | Firma A gegen Firma B über alle B2B- und Werbe-RPCs |
| `93_b2b_gegenprobe.sql` | was der Firmen-Admin auf der eigenen Firma darf — und was bewusst intern bleibt |
| `94_loeschung.sql` | was mit einem gelöschten Konto noch geschieht |
| `95_loeschung_gegenprobe.sql` | dieselben Prüfungen gegen ein aktives Konto |
| `81_weitere_rpc.sql` | die 32 Verwaltungsfunktionen, die in `80` fehlten — DATEV-Export, Finanzbilanz, Dokumentenfreigaben, Maillog, Telemetrie-Schlüssel — samt Gegenprobe mit vorhandener Maillog-Zeile |
| `107_abo_angebotszeitraum.sql` | Ob ein kostenpflichtiges Abo gewählt werden kann, entscheidet der Server: offener, abgelaufener und künftiger Zeitraum, Gegenprobe auf Dauerangebot und Altersschranke, Zeiträume für Kunden nicht lesbar. 10 Urteile, **nicht wiederholbar**. Hat den Befund S-28 nachgewiesen |
| `105_automat_bezahlung.sql` | MHD-Preisstufen, Unveränderbarkeit und Hashkette der Terminal-Ereignisse, Einmaligkeit der Freigabecodes, Lückenerkennung, Auszahlungsabgleich, Kassensturz bar, Preisausspielung — 28 Urteile, **nicht wiederholbar** |
| `106_automat_isolation.sql` | IDOR/BOLA über die fünf neuen Tabellen mit zwei echten Kundenkonten: Lesen, ID-Tausch, Ändern, Löschen, direkter Zugriff — plus Gegenprobe auf eigene Daten. 22 Urteile. Hat den Befund S-25 erzeugt (Supabase-Standardrechte für `authenticated`) |
| `96_loeschprozess.sql` | wer löschen darf, was gelöscht wird, was bleibt, dass ein unbeteiligtes Konto unberührt bleibt — und seit S-23/S-24, dass das Änderungsprotokoll die Löschung nicht zurückträgt und die Frist erst mit dem Ende des Vorgangs beginnt |

Ergebnisse stehen in `pruef.ergebnis`. Ausgewertete Läufe:
`/docs/SECURITY.md`.

## Zwei Fallen, die hier bewusst umgangen werden

1. **Rolle nach einer Ausnahme.** Ein Fehler im Testkommando rollt die
   Untertransaktion zurück und mit ihr `set local role`. Wer danach ohne
   `reset role` weitermisst, misst als falsche Rolle. `pruef.zaehle` und
   `pruef.schreibe` setzen die Rolle deshalb in **jedem** Pfad zurück und
   geben ihr Ergebnis als Wert zurück, statt es selbst zu protokollieren.
2. **Statuscode statt Zustand.** RLS wirft keinen Fehler, sie liefert
   keine Zeilen. Gemessen wird deshalb die Zeilenzahl, und nach jedem
   Schreibversuch wird der **gespeicherte** Zustand erneut gelesen.

## Drei Fallen, die hier bewusst umgangen werden

Zu den beiden oben genannten kam am 02.09.2026 eine dritte:

3. **Der Lauf, der nur einmal stimmt.** Fünf Skripte maßen Reste des
   Vorlaufs statt der Sache — eine feste Zahl statt der Veränderung,
   eine kumulierte Warteschlange, eine Voraussetzung aus einem fremden
   Skript, ein Testkonto, das verändert zurückblieb. Ein Regressionstest,
   der beim zweiten Lauf rot wird, ohne dass sich etwas geändert hat,
   wird nicht gelesen, sondern übergangen — und das ist schlimmer, als
   ihn gar nicht zu haben.

   Deshalb gilt jetzt: Jedes Skript stellt seine Voraussetzungen selbst
   her, räumt hinter sich auf, und misst Veränderungen statt Stände. Der
   Nachweis ist der dreifache Lauf mit identischem Ergebnis.

## Der vollständige Lauf

Zwölf Skripte, jedes für sich zurückgesetzt (`91_b2b_pruefdaten.sql` ist
Datenaufbau, kein Test):

```
gruen=221   rot=0   Messung ohne Wertung=118
```

Dreimal hintereinander, jedes Mal dieselbe Zahl. Die 118 ohne Wertung
sind die Tabellensicht aus `40_lese_isolation.sql` — eine Aufnahme, kein
Urteil.
