#!/bin/bash
# Baut den Stand der Produktion (10.09.2026) nach, spielt die Sperre vom 15.11.
# ein und danach alle fehlenden Migrationen in Reihenfolge. Dann alle Prüfskripte.
SP=/tmp/claude-0/-home-user-B-rdesnack24-/e506c47e-39d2-58f4-bdaa-be9b7018738e/scratchpad; R=$SP/prodrepo; B=/var/tmp/bs24pg
PSQL="psql -h $B/run -p 55432 -U postgres -v ON_ERROR_STOP=1 -q"
$SP/build_db.sh p2 20260910183000_sortiment_popcorn_premium_caramel.sql 2>&1 | tail -1
$PSQL -d p2 -f $SP/runbookL/sperre.sql && echo "Sperre ok"
for f in $R/supabase/migrations/*.sql; do b=$(basename $f); [[ "$b" > "20260910183000_sortiment_popcorn_premium_caramel.sql" ]] || continue
  if sed -E 's/^\s*create extension if not exists\s+"?pg_cron"?.*$/select 1;/I' "$f" | $PSQL -d p2 >/dev/null 2>$SP/runbookL/err_$b.log; then echo "OK      $b"; else echo "FEHLER  $b: $(grep -m1 -E 'ERROR|FEHLER' $SP/runbookL/err_$b.log | cut -c1-200)"; exit 1; fi
done
$SP/suite.sh p2 > $SP/runbookL/suite_p2.txt 2>&1
echo "Suite fertig: $(grep -c '^[0-9]' $SP/runbookL/suite_p2.txt) Skripte"
grep "^[0-9]" $SP/runbookL/suite_p2.txt | grep -v " OK " | grep -v -E "^(40_lese|94_loesch|95_loesch)"
echo ENDE
