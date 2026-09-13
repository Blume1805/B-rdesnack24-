#!/usr/bin/env bash
# Vergleicht die Rechtstexte einer Datenbank gegen die Dateien im Repository.
#
# Warum es das gibt: Die Migration schreibt einen Rechtstext nur, wenn er
# fehlt — sie ueberschreibt nie einen laufenden Text. Damit kann der Stand im
# Betrieb vom Stand im Repository abweichen, ohne dass es jemand bemerkt.
# Dieses Skript macht die Abweichung sichtbar.
#
# Aufruf:  scripts/pruefumgebung/prueffe_rechtstexte.sh [psql-Argumente]
# Beispiel: PGHOST=/var/tmp/bs24pg/run PGPORT=55432 PGUSER=postgres \
#           scripts/pruefumgebung/prueffe_rechtstexte.sh -d bs24
set -euo pipefail

hier="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
repo="$(cd "$hier/../.." && pwd)"
soll="$hier/rechtstexte.pruefsummen"

# Soll aus den Dateien neu rechnen statt der Liste zu vertrauen — sonst
# prueft man die Liste gegen sich selbst.
tmp_soll="$(mktemp)"; tmp_ist="$(mktemp)"
trap 'rm -f "$tmp_soll" "$tmp_ist"' EXIT

for datei in "$repo"/docs/rechtstexte/*.md; do
  slug="$(basename "$datei" .md)"
  printf '%s|%s\n' "$slug" "$(md5sum < "$datei" | cut -d' ' -f1)"
done | sort > "$tmp_soll"

if ! diff -q "$tmp_soll" <(sort "$soll") >/dev/null; then
  echo "ACHTUNG: rechtstexte.pruefsummen passt nicht mehr zu den Dateien."
  echo "Wer eine Datei aendert, aendert auch den Rechtstext im Betrieb —"
  echo "und dafuer braucht es eine eigene Migration, nicht nur eine Datei."
  diff <(sort "$soll") "$tmp_soll" || true
  exit 2
fi

psql -At -F'|' -c "select slug, pruefsumme from app.rechtstext_pruefsummen();" "$@" \
  | sort > "$tmp_ist"

if diff -q "$tmp_soll" "$tmp_ist" >/dev/null; then
  echo "OK — alle $(wc -l < "$tmp_soll") Rechtstexte stimmen mit dem Repository ueberein."
  exit 0
fi

echo "ABWEICHUNG zwischen Repository und Datenbank:"
echo
diff --label "Repository (docs/rechtstexte/)" --label "Datenbank" -u "$tmp_soll" "$tmp_ist" || true
echo
echo "Eine Abweichung heisst: der Text im Betrieb ist ein anderer als der"
echo "versionierte. Das ist zu klaeren, bevor irgendetwas anderes passiert —"
echo "im Streitfall gilt der Text, der ausgeliefert wurde."
exit 1
