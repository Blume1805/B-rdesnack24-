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
Original. Deshalb wird die Gleichheit **gemessen**, nicht behauptet. Am
01./02.09.2026 ergab der Vergleich:

| Merkmal | Produktion | lokal | Fingerabdruck |
| --- | --- | --- | --- |
| Tabellen in `public` | 111 | 111 | — |
| RLS-Policies | 186 | 186 | `6d300aabed59a0c1065ac2100e0701fb` (identisch) |
| Tabellenrechte für anon/authenticated/service_role | 1568 | 1568 | `d29b4dccf48c09cf6914e325f597f429` (identisch) |
| Ausführungsrechte `anon` | 5 | 5 | `0a706e4f08ab64b9aaaf7a795db534b6` (identisch) |
| Ausführungsrechte `authenticated` | 138 | 138 | `c5f00ccba46d3fdd0ce473c34aa2b81d` (identisch) |
| Ausführungsrechte `service_role` | 156 | 156 | `7056df4ed6abfded2d474057f36de9dc` (identisch) |
| Funktionen in `public` (ohne Erweiterungen) | 156 | 156 | — |

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

### Sechs Migrationen sind nicht wiederholbar

Von 185 Migrationen laufen 179 auf einer leeren Datenbank durch. Sechs
scheitern, weil sie einen Zwischenzustand der Produktion voraussetzen
(entfernte Hilfstabellen `app._sig_upload`/`app._pia_sig`, eine geänderte
Rückgabesignatur, Bestandsdaten, die eine später ergänzte Prüfregel noch
nicht erfüllen). Für die Prüfumgebung werden sie nachgezogen; als Befund
bleibt: **das Verzeichnis ist ein Protokoll, kein von Null reproduzierbarer
Bauplan.** Für die Verfahrensdokumentation ist das der wichtigere Satz.

## Prüfskripte

| Datei | Prüft |
| --- | --- |
| `40_lese_isolation.sql` | Zeilenzahl je Tabelle aus Sicht von anon, Kunde A, Kunde B, Gesellschafter — gegen die Wahrheit |
| `50_schreib_isolation.sql` | T2 ID-Tausch, T3 Ändern, T4 Löschen fremder Daten, Gegenprobe auf eigene Daten, Mass Assignment |
| `60_abo_und_finanzen.sql` | Altersprüfung beim Abo, Preis- und Punktemanipulation |
| `70_vertikal.sql` | Kunde gegen Gesellschafterdaten und -funktionen |
| `80_verwaltungs_rpc.sql` | alle 48 Verwaltungs-RPCs, die `authenticated` aufrufen darf |

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
