#!/usr/bin/env bash
# Baut die Produktionslinie in eine frische lokale Datenbank.
#   scripts/pruefumgebung/aufbauen.sh <datenbank> [--ohne-pruefdaten]
# Verbindung über die üblichen Umgebungsvariablen (PGHOST, PGPORT, PGUSER).
# Niemals gegen die Produktion richten: die Datenbank wird zuerst gelöscht.
set -euo pipefail
DB=${1:?Name der Datenbank fehlt}
MIT_DATEN=1; [ "${2:-}" = "--ohne-pruefdaten" ] && MIT_DATEN=0
WURZEL=$(cd "$(dirname "$0")/../.." && pwd)
P="psql -v ON_ERROR_STOP=1 -q -X"
case "${PGHOST:-}" in *supabase.co*|*supabase.com*) echo "Abbruch: Ziel sieht nach Supabase aus." >&2; exit 2;; esac

$P -d postgres -c "drop database if exists \"$DB\";" -c "create database \"$DB\";"
$P -d "$DB" -c "alter database \"$DB\" set search_path to public, extensions;" \
   -f "$WURZEL/scripts/pruefumgebung/01_supabase_nachbau.sql" > /dev/null
n=0
for f in "$WURZEL"/supabase/migrations/*.sql; do
  # pg_cron gibt es lokal nicht; der Nachbau stellt cron.schedule bereit.
  if ! sed -E 's/^\s*create extension if not exists\s+"?pg_cron"?.*$/select 1;/I' "$f" \
       | $P -d "$DB" > /dev/null 2> "${TMPDIR:-/tmp}/aufbau_fehler.log"; then
    echo "FEHLER in $(basename "$f")"; tail -5 "${TMPDIR:-/tmp}/aufbau_fehler.log"; exit 1
  fi
  n=$((n+1))
done
echo "$n Migrationen eingespielt in $DB"
if [ $MIT_DATEN = 1 ]; then
  $P -d "$DB" -f "$WURZEL/scripts/pruefumgebung/10_pruefdaten.sql" \
              -f "$WURZEL/scripts/pruefumgebung/20_werkzeug.sql" > /dev/null
  echo "Prüfdaten und Werkzeug geladen"
fi
