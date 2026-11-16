#!/usr/bin/env bash
# ============================================================================
# Stillgelegt am 16.11.2026 zusammen mit der main-Datenbanklinie (0001–0070).
# Die Datenbank wird jetzt aus der Produktionslinie aufgebaut; die Werkzeuge
# dafür liegen in scripts/pruefumgebung/ (README dort). Dieses Skript leitet
# nur noch weiter, damit alte Aufrufe nicht ins Leere laufen.
#
# Früheres Verhalten (bis Commit f08e63b): eigene Supabase-Nachbildung in
# scripts/sql/supabase_ersatz.sql, Aufbau aus 0001–0070, dann pgTAP.
# ============================================================================
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
DB="${BS24_TESTDB:-bs24_tap}"
"$ROOT/scripts/pruefumgebung/aufbauen.sh" "$DB" --ohne-pruefdaten
[ "${1:-}" = "--nur-aufbau" ] && exit 0
"$ROOT/scripts/pruefumgebung/fingerabdruck_vergleichen.sh" "$DB"
"$ROOT/scripts/pruefumgebung/pgtap.sh" "$DB"
