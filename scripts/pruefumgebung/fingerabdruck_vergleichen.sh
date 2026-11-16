#!/usr/bin/env bash
# Vergleicht den Fingerabdruck einer frisch (ohne Prüfdaten) aufgebauten
# Datenbank mit dem Sollwert in fingerabdruck.soll.
#   scripts/pruefumgebung/fingerabdruck_vergleichen.sh <datenbank>
set -euo pipefail
DB=${1:?Name der Datenbank fehlt}
HIER=$(cd "$(dirname "$0")" && pwd)
SOLL=$(grep -v '^#' "$HIER/fingerabdruck.soll" | grep -v '^\s*$' | tail -1)
IST=$(psql -X -At -d "$DB" -f "$HIER/fingerabdruck.sql")
if [ "$SOLL" = "$IST" ]; then echo "Fingerabdruck gleich: $IST"; exit 0; fi
echo "Fingerabdruck ABWEICHEND"
echo "  Soll: $SOLL"; echo "  Ist:  $IST"
paste -d' ' <(echo "$SOLL" | tr '|' '\n') <(echo "$IST" | tr '|' '\n') \
  | awk 'BEGIN{split("Regeln Funktionen Spalten Ausloeser Katalog Aufzaehlungen Rechte",m," ")} {printf "  %-14s %s %s\n", m[NR], ($1==$2?"gleich":"ANDERS"), $2}'
echo "Neue Migration? Dann fingerabdruck.soll im selben Commit nachziehen."
exit 1
