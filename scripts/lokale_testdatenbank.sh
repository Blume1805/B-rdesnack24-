#!/usr/bin/env bash
# ============================================================================
# Lokale Testdatenbank ohne Docker und ohne Supabase-CLI.
#
# Warum es das gibt: Die pgTAP-Tests unter supabase/tests/ liefen bis zum
# 17.09.2026 nirgends — in der Arbeitsumgebung fehlte pgTAP, und in der CI
# verschluckte ein `|| true` das Ergebnis (docs/ARCHITECTURE.md, A-4 und A-6).
# Dieses Skript baut die Datenbank aus den Migrationen auf, ersetzt die Teile
# von Supabase, die eine reine PostgreSQL-Installation nicht mitbringt
# (Schema auth, storage, die Rollen anon/authenticated/service_role und deren
# Grundrechte) und führt die Tests aus.
#
# Voraussetzungen (Debian/Ubuntu):
#   apt-get install -y postgresql-16 postgresql-16-pgtap
#
# Aufruf:
#   scripts/lokale_testdatenbank.sh            # aufbauen und alle Tests fahren
#   scripts/lokale_testdatenbank.sh --nur-aufbau
#   PGPORT=5433 scripts/lokale_testdatenbank.sh
# ============================================================================
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
PGBIN="${PGBIN:-/usr/lib/postgresql/16/bin}"
PGPORT="${PGPORT:-5433}"
PGSOCK="${PGSOCK:-/tmp/pgrun}"
PGDATA_DIR="${PGDATA_DIR:-/var/lib/postgresql/bs24_test}"
DBNAME="${DBNAME:-bs24_test}"
export PATH="$PGBIN:$PATH"

psql_db() { psql -h "$PGSOCK" -p "$PGPORT" -U postgres -d "$DBNAME" "$@"; }

# ── 1. Server starten, falls er nicht läuft ────────────────────────────────
if ! pg_isready -h "$PGSOCK" -p "$PGPORT" >/dev/null 2>&1; then
  echo "» PostgreSQL-Instanz wird angelegt ($PGDATA_DIR)"
  rm -rf "$PGDATA_DIR"; mkdir -p "$PGDATA_DIR" "$PGSOCK"
  chown postgres "$PGDATA_DIR" "$PGSOCK" 2>/dev/null || true
  su postgres -c "PATH=$PGBIN:\$PATH initdb -D $PGDATA_DIR -U postgres --auth=trust" >/dev/null
  su postgres -c "PATH=$PGBIN:\$PATH pg_ctl -D $PGDATA_DIR \
      -o '-k $PGSOCK -p $PGPORT -c listen_addresses=' -l $PGDATA_DIR/log start" >/dev/null
  sleep 2
fi

# ── 2. Datenbank neu aufbauen ──────────────────────────────────────────────
psql -h "$PGSOCK" -p "$PGPORT" -U postgres -q \
  -c "drop database if exists $DBNAME;" -c "create database $DBNAME;"

echo "» Supabase-Ersatzteile"
psql_db -q -v ON_ERROR_STOP=1 -f "$ROOT/scripts/sql/supabase_ersatz.sql"

echo "» Migrationen"
for f in "$ROOT"/supabase/migrations/*.sql; do
  psql_db -q -v ON_ERROR_STOP=1 -f "$f" \
    || { echo "ABBRUCH in $(basename "$f")"; exit 1; }
done
echo "  $(ls "$ROOT"/supabase/migrations/*.sql | wc -l) Migrationen eingespielt"

# seed.sql laeuft bei `supabase db reset` nach den Migrationen; die Tests
# setzen die dort vergebenen Rollenrechte (z. B. shareholder -> inventory.view)
# voraus. Ohne diesen Schritt schluegen sie aus dem falschen Grund fehl.
# MIT_SEED=0 laesst die Seed-Datei bewusst weg. Damit laesst sich pruefen, ob
# ein Test nur deshalb besteht, weil Beispieldaten vorhanden sind.
if [ "${MIT_SEED:-1}" = "1" ] && [ -f "$ROOT/supabase/seed/seed.sql" ]; then
  psql_db -q -v ON_ERROR_STOP=1 -f "$ROOT/supabase/seed/seed.sql"
  echo "  seed.sql geladen"
fi

psql_db -q -c "create extension if not exists pgtap;" >/dev/null 2>&1 || {
  echo "!! pgTAP fehlt — apt-get install -y postgresql-16-pgtap"; exit 1; }

[ "${1:-}" = "--nur-aufbau" ] && { echo "» Aufbau fertig."; exit 0; }

# ── 3. Tests ───────────────────────────────────────────────────────────────
echo "» pgTAP"
rc=0
for t in "$ROOT"/supabase/tests/*.sql; do
  out="$(psql_db -tA -f "$t" 2>&1)"
  if echo "$out" | grep -qE "^not ok|^psql:.*ERROR"; then
    echo "  FEHLGESCHLAGEN: $(basename "$t")"
    echo "$out" | grep -E "^not ok|ERROR" | head -5 | sed 's/^/      /'
    rc=1
  else
    echo "  bestanden:      $(basename "$t") ($(echo "$out" | grep -c '^ok ') Zusicherungen)"
  fi
done
exit $rc
