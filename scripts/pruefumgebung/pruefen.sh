#!/usr/bin/env bash
# Führt alle nummerierten Prüfskripte in Zahlenreihenfolge aus.
#   scripts/pruefumgebung/pruefen.sh <datenbank>
# Fehlschlag (Rückgabewert 1), wenn ein Skript mit SQL-Fehler abbricht oder
# ein Urteil in pruef.ergebnis ausdrücklich falsch ist (ok = false). Urteile
# ohne Wertung (ok ist leer) sind Messungen und werden nur gezählt.
set -uo pipefail
DB=${1:?Name der Datenbank fehlt}
WURZEL=$(cd "$(dirname "$0")/../.." && pwd)
P="psql -X -v ON_ERROR_STOP=1 -q -d $DB"
fehler=0; skripte=0
for f in $(ls "$WURZEL"/scripts/pruefumgebung/*.sql | xargs -n1 basename \
           | grep -E '^[0-9]+_' | grep -vE '^(01|10|20)_' | sort -n); do
  skripte=$((skripte+1))
  # Urteile des vorigen Skripts nicht doppelt zählen.
  psql -X -q -d "$DB" -c "truncate pruef.ergebnis" > /dev/null 2>&1
  if ! $P -f "$WURZEL/scripts/pruefumgebung/$f" > "${TMPDIR:-/tmp}/pruef_$f.log" 2>&1; then
    echo "FEHLER  $f: $(grep -m1 -E 'ERROR|FEHLER' "${TMPDIR:-/tmp}/pruef_$f.log" | cut -c1-200)"
    fehler=$((fehler+1)); continue
  fi
  falsch=$(psql -X -At -d "$DB" -c "select string_agg(coalesce(test,'?')||' (erwartet '||coalesce(erwartet,'?')||', gemessen '||coalesce(gemessen,'?')||')', '; ') from pruef.ergebnis where ok is false" 2>/dev/null)
  stand=$(psql -X -At -d "$DB" -c "select count(*) filter (where ok)||' bestanden, '||count(*) filter (where ok is null)||' Messungen' from pruef.ergebnis" 2>/dev/null)
  if [ -n "$falsch" ]; then
    echo "FALSCH  $f: $falsch"; fehler=$((fehler+1))
  else
    echo "ok      $f (${stand:-keine Urteile})"
  fi
done
echo "$skripte Prüfskripte, $fehler mit Fehler"
[ $fehler -eq 0 ]
