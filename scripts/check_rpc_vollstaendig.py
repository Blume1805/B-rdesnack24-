#!/usr/bin/env python3
"""Prüft, dass jede aufgerufene Datenbankfunktion im Repository steht.

WARUM ES DIESE PRÜFUNG GIBT
---------------------------
Am 03.08.2026 stellte sich heraus, dass die produktive Datenbank elf
Funktionen enthielt, die in KEINER Migration definiert waren. Aufgerufen
wurden sie trotzdem — aus der Flutter-App und aus Edge Functions.

Zwei Folgen, beide unangenehm:

1. Wer die Datenbank aus den Migrationen neu aufbaut, bekommt eine App,
   die beim Öffnen der Freigaben scheitert. Das Repository beschrieb die
   Datenbank nicht vollständig.

2. Schwerer wiegt: Acht dieser elf trugen eine Sicherheitslücke (die
   NULL-Falle in der Rollenprüfung, siehe check_rollenpruefung.py). Weil
   ihr Quelltext nirgends im Repository stand, konnte KEINE Codeprüfung
   sie je finden — weder ein Mensch noch ein Werkzeug. Migration 0079
   hatte dieselbe Klasse repariert und diese Stellen zwangsläufig
   übersehen.

Diese Prüfung sucht deshalb den Auslöser, nicht das Symptom: Ruft der
Code eine Funktion auf, die keine Migration anlegt, ist entweder die
Migration vergessen worden — oder jemand hat direkt in der Datenbank
gearbeitet. Beides gehört bemerkt, bevor es Monate liegen bleibt.

GRENZEN
-------
Statisch geprüft wird nur, was in DIESEM Repository aufgerufen wird. Die
Lovable-Anwendungen liegen woanders; deren Aufrufe sieht diese Prüfung
nicht. Für den umgekehrten Weg — Funktionen, die in der Datenbank stehen
und von niemandem aufgerufen werden — braucht es einen Abgleich gegen die
laufende Datenbank; der ist bewusst nicht Teil der CI, weil dafür
Zugangsdaten nötig wären.
"""

from __future__ import annotations

import re
import sys
from pathlib import Path

WURZEL = Path(__file__).resolve().parent.parent
MIGRATIONEN = WURZEL / "supabase" / "migrations"
FLUTTER = WURZEL / "apps" / "mobile" / "lib"
FUNCTIONS = WURZEL / "supabase" / "functions"

# `rpc('name'` (Dart) und `.rpc("name"` (TypeScript).
AUFRUF_DART = re.compile(r"""\brpc\(\s*'([a-z_][a-z0-9_]*)'""", re.IGNORECASE)
AUFRUF_TS = re.compile(r"""\.rpc\(\s*"([a-z_][a-z0-9_]*)\"""", re.IGNORECASE)

# `create [or replace] function [public.]name(`
DEFINITION = re.compile(
    r"\bcreate\s+(?:or\s+replace\s+)?function\s+(?:public\.)?([a-z_][a-z0-9_]*)\s*\(",
    re.IGNORECASE,
)


def sammle_aufrufe() -> dict[str, set[str]]:
    """Aufgerufene Funktionsnamen -> Dateien, in denen sie vorkommen."""
    treffer: dict[str, set[str]] = {}

    def merke(name: str, datei: Path) -> None:
        treffer.setdefault(name, set()).add(str(datei.relative_to(WURZEL)))

    if FLUTTER.is_dir():
        for datei in FLUTTER.rglob("*.dart"):
            for name in AUFRUF_DART.findall(datei.read_text(encoding="utf-8")):
                merke(name, datei)

    if FUNCTIONS.is_dir():
        for datei in FUNCTIONS.rglob("*.ts"):
            # Testdateien rufen bewusst erfundene Namen auf.
            if datei.name.endswith("_test.ts"):
                continue
            for name in AUFRUF_TS.findall(datei.read_text(encoding="utf-8")):
                merke(name, datei)

    return treffer


def sammle_definitionen() -> set[str]:
    namen: set[str] = set()
    for datei in MIGRATIONEN.glob("*.sql"):
        text = datei.read_text(encoding="utf-8")
        # Kommentare raus, damit ein zitiertes Beispiel nicht als
        # Definition zählt.
        ohne_kommentar = "\n".join(z.split("--", 1)[0] for z in text.splitlines())
        namen.update(n.lower() for n in DEFINITION.findall(ohne_kommentar))
    return namen


def main() -> int:
    if not MIGRATIONEN.is_dir():
        print(f"Verzeichnis nicht gefunden: {MIGRATIONEN}", file=sys.stderr)
        return 2

    aufrufe = sammle_aufrufe()
    definiert = sammle_definitionen()

    fehlend = {
        name: dateien
        for name, dateien in aufrufe.items()
        if name.lower() not in definiert
    }

    if not fehlend:
        print(
            f"OK — {len(aufrufe)} aufgerufene Datenbankfunktionen, "
            f"alle in den Migrationen definiert "
            f"({len(definiert)} Definitionen gefunden)."
        )
        return 0

    print(
        "FEHLER — aufgerufen, aber in keiner Migration definiert:\n",
        file=sys.stderr,
    )
    for name in sorted(fehlend):
        print(f"  {name}()", file=sys.stderr)
        for datei in sorted(fehlend[name]):
            print(f"      aufgerufen in {datei}", file=sys.stderr)
    print(
        "\nEntweder fehlt die Migration, oder es wurde direkt in der\n"
        "Datenbank gearbeitet. Beides ist ein Problem: Wer die Datenbank\n"
        "aus den Migrationen neu aufbaut, bekommt eine App, die an dieser\n"
        "Stelle scheitert — und der Quelltext der Funktion entzieht sich\n"
        "jeder Codeprüfung.\n\n"
        "Hintergrund: Migrationen 0027b, 0027c, 0093 und 0094.",
        file=sys.stderr,
    )
    return 1


if __name__ == "__main__":
    raise SystemExit(main())
