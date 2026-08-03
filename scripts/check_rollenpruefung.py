#!/usr/bin/env python3
"""Sucht in neuen Migrationen nach Rollenprüfungen mit der NULL-Falle.

WARUM ES DIESE PRÜFUNG GIBT
---------------------------
In SQL ergibt ein Vergleich mit NULL nicht `false`, sondern NULL — und
`if NULL then` ist unwahr. Eine Prüfung der Form

    select role into v_role from public.profiles where id = auth.uid();
    if v_role not in ('system_admin','shareholder') then
      raise exception 'Nicht autorisiert';
    end if;

lässt deshalb jeden durch, der KEINE Profilzeile hat: `v_role` ist NULL,
die Bedingung ergibt NULL, die Ausnahme bleibt aus. Dasselbe gilt für
`v_role <> 'system_admin'`.

Das war in diesem Projekt kein theoretisches Problem. Am 03.08.2026 liess
sich damit nachweislich die Unterschrift eines Gesellschafters ersetzen
und die vollständige Freigabeliste auslesen. Migration 0079 hatte die
Klasse schon einmal bearbeitet und dabei siebzehn Stellen übersehen;
gefunden wurden sie erst durch eine Suche über den gesamten Bestand
(0093, 0094, 0095).

Damit das nicht ein drittes Mal passiert, sucht diese Prüfung das Muster
bei jedem CI-Lauf — eine neue Migration mit derselben Falle lässt die CI
rot werden, statt still produktiv zu gehen.

WAS ALS RICHTIG GILT
--------------------
    select role into v_role from public.profiles
     where id = auth.uid() and status = 'active' and deleted_at is null;
    if v_role is null or v_role not in ('system_admin','shareholder') then

Also: NULL ausdrücklich abfangen, und die Rolle nur aus aktiven, nicht
gelöschten Konten laden.

WARUM ERST AB 0096
------------------
Die Migrationen bis 0095 sind angewandte Geschichte. Sie enthalten das
alte Muster in seiner ursprünglichen Form — das ist korrekt so und darf
nicht nachträglich umgeschrieben werden, denn genau diese Datei ist es,
die damals gelaufen ist. Repariert wurde der Bestand mit 0095, und zwar
zur Laufzeit über `pg_get_functiondef`, ohne die Altdateien anzufassen.

Der geltende Zustand der Datenbank ist deshalb sauber, obwohl die alten
Dateien es nicht sind. Eine Prüfung, die die Geschichte anmeckert, wäre
dauerhaft rot — und eine dauerhaft rote Prüfung wird abgeschaltet. Sie
gilt daher ab der ersten Migration NACH der Reparatur.

Gegenprobe für den geltenden Zustand ist nicht diese Datei, sondern die
Abfrage am Ende von 0095: keine Funktion in `public` darf eine
Rollenprüfung ohne NULL-Abfangung tragen.
"""

from __future__ import annotations

import re
import sys
from pathlib import Path

WURZEL = Path(__file__).resolve().parent.parent
MIGRATIONEN = WURZEL / "supabase" / "migrations"

# Ab dieser Nummer gilt die Prüfung. Siehe „WARUM ERST AB 0096" oben.
AB_NUMMER = 96

# Eine Rollenprüfung: `if v_role not in (…)` oder `if v_role <> …`.
# Beide Formen verhalten sich bei NULL gleich.
PRUEFUNG = re.compile(r"\bif\s+(\w*role\w*)\s*(not\s+in\s*\(|<>|!=)", re.IGNORECASE)

# Die Absicherung dagegen, in derselben Bedingung.
ABGESICHERT = re.compile(r"\bif\s+\w*role\w*\s+is\s+null\s+or\b", re.IGNORECASE)

NUMMER = re.compile(r"^(\d+)")


def ohne_kommentar(zeile: str) -> str:
    """Schneidet einen `--`-Kommentar ab.

    Ohne das meldet die Prüfung jede Migration, die das falsche Muster
    zitiert, um davor zu warnen — also ausgerechnet die Dokumentation.
    Zeichenketten mit `--` darin gibt es in diesen Migrationen nicht;
    sollte sich das ändern, ist hier ein richtiger Parser fällig.
    """
    return zeile.split("--", 1)[0]


def dateinummer(name: str) -> int | None:
    treffer = NUMMER.match(name)
    return int(treffer.group(1)) if treffer else None


def zeilen_mit_falle(text: str) -> list[tuple[int, str]]:
    treffer: list[tuple[int, str]] = []
    for nr, roh in enumerate(text.splitlines(), start=1):
        zeile = ohne_kommentar(roh)
        if PRUEFUNG.search(zeile) and not ABGESICHERT.search(zeile):
            treffer.append((nr, roh.strip()))
    return treffer


def main() -> int:
    if not MIGRATIONEN.is_dir():
        print(f"Verzeichnis nicht gefunden: {MIGRATIONEN}", file=sys.stderr)
        return 2

    befunde: list[tuple[Path, int, str]] = []
    geprueft = 0
    for datei in sorted(MIGRATIONEN.glob("*.sql")):
        nummer = dateinummer(datei.name)
        if nummer is None or nummer < AB_NUMMER:
            continue
        geprueft += 1
        for nr, zeile in zeilen_mit_falle(datei.read_text(encoding="utf-8")):
            befunde.append((datei, nr, zeile))

    if not befunde:
        print(
            f"OK — {geprueft} Migration(en) ab {AB_NUMMER:04d} geprüft, "
            "keine Rollenprüfung mit offener NULL-Falle."
        )
        return 0

    print("FEHLER — Rollenprüfung ohne NULL-Abfangung gefunden:\n", file=sys.stderr)
    for datei, nr, zeile in befunde:
        print(f"  {datei.relative_to(WURZEL)}:{nr}", file=sys.stderr)
        print(f"      {zeile}", file=sys.stderr)
    print(
        "\nIn SQL ergibt `NULL not in (...)` nicht true, sondern NULL, und\n"
        "`if NULL then` ist unwahr. Wer keine Profilzeile hat, kommt damit\n"
        "durch. Bitte so schreiben:\n\n"
        "    select role into v_role from public.profiles\n"
        "     where id = auth.uid() and status = 'active' and deleted_at is null;\n"
        "    if v_role is null or v_role not in ('system_admin','shareholder') then\n\n"
        "Hintergrund: Migrationen 0079, 0093, 0094 und 0095.",
        file=sys.stderr,
    )
    return 1


if __name__ == "__main__":
    raise SystemExit(main())
