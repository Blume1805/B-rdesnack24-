#!/usr/bin/env bash
# Führt die pgTAP-Tests aus supabase/tests gegen eine Datenbank aus, die mit
# aufbauen.sh --ohne-pruefdaten gebaut wurde (die Tests legen ihre eigenen
# Konten an; die Prüfdaten würden mit deren Kennungen kollidieren).
#   scripts/pruefumgebung/pgtap.sh <datenbank>
set -uo pipefail
DB=${1:?Name der Datenbank fehlt}
WURZEL=$(cd "$(dirname "$0")/../.." && pwd)
psql -X -q -v ON_ERROR_STOP=1 -d "$DB" <<'SQL' || exit 1
create schema if not exists tap;
create extension if not exists pgtap with schema tap;
grant usage on schema tap to anon, authenticated, service_role;
grant execute on all functions in schema tap to anon, authenticated, service_role;
SQL
export PGOPTIONS="-c search_path=public,extensions,tap"
fehler=0; n=0
for f in "$WURZEL"/supabase/tests/*.sql; do
  n=$((n+1)); b=$(basename "$f")
  aus=$(psql -X -At -d "$DB" -f "$f" 2>&1)
  plan=$(echo "$aus" | grep -m1 -oE '^1\.\.[0-9]+' | cut -d. -f3)
  ok=$(echo "$aus" | grep -c '^ok ')
  nicht=$(echo "$aus" | grep '^not ok' | cut -c1-160)
  fehl=$(echo "$aus" | grep -m1 'ERROR' | cut -c1-200)
  if [ -n "$nicht" ] || [ -n "$fehl" ] || [ -z "$plan" ] || [ "$ok" != "$plan" ]; then
    echo "FEHLER  $b: $ok von ${plan:-?} ${nicht:+| $nicht} ${fehl:+| $fehl}"; fehler=$((fehler+1))
  else
    echo "ok      $b ($ok von $plan)"
  fi
done
echo "$n pgTAP-Dateien, $fehler mit Fehler"
[ $fehler -eq 0 ]
