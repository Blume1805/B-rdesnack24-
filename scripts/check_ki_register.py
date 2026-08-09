#!/usr/bin/env python3
"""Jede angebotserzeugende Funktion muss im KI-Register stehen.

Warum dieser Wächter existiert
------------------------------
Die Compliance-Vorgabe verlangt, dass keine neue algorithmische oder
KI-gestützte Funktion ohne vorherige Einstufung produktiv geht. Eine
Regel, die nur in einem Dokument steht, hält das nicht durch: Wer eine
Funktion ergänzt, liest das Dokument nicht — er schreibt SQL.

Also prüft dieser Schritt es beim Bauen, blockierend, wie schon
`check_rollenpruefung.py` und `check_rpc_vollstaendig.py`.

Was geprüft wird
----------------
Alle `create ... function public.<name>` in `supabase/migrations`, deren
Name auf Angebots-, Empfehlungs- oder Personalisierungslogik hindeutet,
müssen einen Eintrag in `0105_ki_register.sql` haben.

Bewusst über Namensmuster: Eine inhaltliche Erkennung wäre raterei, ein
Namensmuster ist nachvollziehbar und lässt sich hier unten erweitern.
Wer ein Muster umgeht, umgeht es sichtbar — das fällt beim Lesen auf.

Falsch positiv? Dann gehört die Funktion entweder ins Register oder ihr
Name in `NICHT_EINSTUFUNGSPFLICHTIG` — mit Begründung.
"""

from __future__ import annotations

import re
import sys
from pathlib import Path

WURZEL = Path(__file__).resolve().parent.parent
MIGRATIONEN = WURZEL / "supabase" / "migrations"
REGISTER = MIGRATIONEN / "0105_ki_register.sql"

# Namensteile, die auf eine einstufungspflichtige Funktion hindeuten.
MUSTER = re.compile(
    r"(generate_\w*offer|\w*recommend\w*|personal_offer|\w*_offers?$"
    r"|suggest_\w*product|\w*ranking\w*|\w*score\w*)",
    re.IGNORECASE,
)

# Ausnahmen mit Begründung. Ohne Begründung hat hier nichts zu suchen.
NICHT_EINSTUFUNGSPFLICHTIG: dict[str, str] = {
    "activate_offer": "Einlösen eines bereits erzeugten Angebots, keine Auswahl",
    "deactivate_offer": "Rücknahme, keine Auswahl",
    "activate_personal_offer": "Einlösen, keine Auswahl",
    "deactivate_personal_offer": "Rücknahme, keine Auswahl",
    "redeem_personal_offer": "Einlösen am Automaten, keine Auswahl",
    "my_active_personal_offer": "Leseabfrage der eigenen Angebote",
    "my_active_personal_offers": "Leseabfrage der eigenen Angebote",
    "run_daily_special_offers": "Sammelaufruf, ruft nur eingestufte Funktionen",
    "ensure_my_special_offers": "Sammelaufruf, ruft nur eingestufte Funktionen",
    "grant_anniversary_offer": "Wie grant_birthday_offer eingestuft, dort mitgeführt",
}

FUNKTIONSKOPF = re.compile(
    r"create\s+(?:or\s+replace\s+)?function\s+public\.(\w+)", re.IGNORECASE
)


def registrierte_schluessel() -> set[str]:
    """Liest die Schlüssel aus den INSERT-Werten der Registermigration."""
    if not REGISTER.exists():
        print(f"FEHLER: {REGISTER.relative_to(WURZEL)} fehlt.", file=sys.stderr)
        sys.exit(1)
    text = REGISTER.read_text(encoding="utf-8")
    # Die Schlüssel stehen als erstes Feld jeder Wertezeile: ('name',
    return set(re.findall(r"^\('(\w+)'", text, re.MULTILINE))


def gefundene_funktionen() -> dict[str, str]:
    """Alle Funktionsnamen aus den Migrationen, samt Fundstelle."""
    treffer: dict[str, str] = {}
    for datei in sorted(MIGRATIONEN.glob("*.sql")):
        for name in FUNKTIONSKOPF.findall(datei.read_text(encoding="utf-8")):
            treffer.setdefault(name, datei.name)
    return treffer


def main() -> int:
    registriert = registrierte_schluessel()
    fehlend: list[tuple[str, str]] = []

    for name, datei in gefundene_funktionen().items():
        if not MUSTER.search(name):
            continue
        if name in NICHT_EINSTUFUNGSPFLICHTIG or name in registriert:
            continue
        fehlend.append((name, datei))

    if fehlend:
        print(
            "Diese Funktionen sehen nach Angebots-, Empfehlungs- oder\n"
            "Personalisierungslogik aus, stehen aber nicht im KI-Register:\n",
            file=sys.stderr,
        )
        for name, datei in sorted(fehlend):
            print(f"  * public.{name}  ({datei})", file=sys.stderr)
        print(
            "\nJede solche Funktion braucht VOR dem Produktivgang eine\n"
            "Einstufung nach der Ampellogik. Trag sie in\n"
            f"  {REGISTER.relative_to(WURZEL)}\n"
            "ein — oder, falls sie nichts auswählt, in\n"
            "  scripts/check_ki_register.py → NICHT_EINSTUFUNGSPFLICHTIG\n"
            "mit einer Begründung.",
            file=sys.stderr,
        )
        return 1

    anzahl = len(registriert)
    print(f"KI-Register vollständig: {anzahl} eingestufte Funktionen, keine offenen.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
