#!/usr/bin/env python3
"""Jede Tabelle mit Firmenbezug braucht eine Regel, die die Firma prüft.

Warum dieser Wächter existiert
------------------------------
Seit Migration 0117 beantwortet die Zeilensicherheit zwei Fragen statt einer:
Gehört diese Zeile dem angemeldeten Menschen — und gehört sie einer
Organisation, in der er eine Rolle hat? Die zweite Antwort steht an genau
einer Stelle: `app.is_business_member()`.

Eine neue Tabelle mit `business_id` ohne Regel, die diese Funktion aufruft,
ist keine Tabelle mit fehlender Absicherung. Sie ist eine Tabelle, in der
jeder Angemeldete die Daten JEDES Firmenkunden sieht — der Standardfall bei
aktivem RLS ohne passende Policy ist zwar „nichts sichtbar", aber sobald
jemand die übliche Lesepolicy `using (true)` oder eine reine
`auth.uid()`-Regel danebenschreibt, ist die Trennung weg, ohne dass etwas
kaputtgeht. Es fällt niemandem auf. Genau deshalb prüft es der Bauablauf
und nicht ein Dokument.

Derselbe Mechanismus wie bei den vier vorhandenen Wächtern: blockierend,
über ein nachvollziehbares Muster. Wer das Muster umgeht, umgeht es
sichtbar.

Was geprüft wird
----------------
Alle Tabellen in `supabase/migrations`, die eine Spalte auf `business_id`
bekommen (auch `payer_business_id` und Ähnliches), müssen mindestens eine
`create policy` haben, in deren Text `is_business_member` vorkommt.

Grenzen dieses Skripts, ehrlich benannt
---------------------------------------
Es liest Text, nicht Bedeutung. Es sieht, DASS die Funktion aufgerufen wird,
nicht ob der Aufruf richtig ist — eine Regel `using (is_business_member(...)
or true)` würde durchgehen. Gegen falsche Ausdrücke hilft nur der Nachweis
unter echten Identitäten, wie er zu Migration 0117 geführt wurde. Dieses
Skript fängt den häufigeren Fall ab: dass die Prüfung schlicht vergessen
wurde.
"""

from __future__ import annotations

import re
import sys
from pathlib import Path

WURZEL = Path(__file__).resolve().parent.parent
MIGRATIONEN = WURZEL / "supabase" / "migrations"

# Ausnahmen mit Begründung. Ohne Begründung hat hier nichts zu suchen.
KEINE_MANDANTENPRUEFUNG: dict[str, str] = {
    "business_members": (
        "Die Tabelle IST die Mitgliedschaft. Ihre Leseregel muss die eigene "
        "Zeile ohne Mitgliedschaft freigeben, sonst könnte niemand feststellen, "
        "zu welchem Unternehmen er gehört. Sie ruft die Funktion trotzdem auf — "
        "steht hier nur, falls das je zerfällt."
    ),
    "leads": (
        "Rein internes Vertriebsprotokoll (0154). business_id verweist erst "
        "auf das Unternehmen, sobald aus der Anfrage ein Vertrag wird — der "
        "Werbekunde selbst darf diese Zeile nie sehen, sonst bekäme er "
        "unser eigenes Vertriebsprotokoll über sich zu Gesicht. Die Regel "
        "gibt deshalb ausschliesslich leads.manage frei, absichtlich ohne "
        "is_business_member."
    ),
}

# `create table … public.<name> ( … )` — Körper bis zur schliessenden Klammer
# am Zeilenanfang, so wie die Migrationen dieses Projekts formatiert sind.
TABELLE = re.compile(
    r"create\s+table\s+(?:if\s+not\s+exists\s+)?public\.(\w+)\s*\((.*?)^\s*\)\s*;",
    re.IGNORECASE | re.DOTALL | re.MULTILINE,
)

SPALTE_NACHTRAG = re.compile(
    r"alter\s+table\s+(?:only\s+)?public\.(\w+)\s+add\s+column\s+"
    r"(?:if\s+not\s+exists\s+)?(\w*business_id)\b",
    re.IGNORECASE,
)

FIRMENSPALTE = re.compile(r"^\s*(\w*business_id)\s+\w", re.IGNORECASE | re.MULTILINE)

# Policies enthalten kein Semikolon, deshalb ist das nicht-gierige `.*?;` hier
# zuverlässig.
POLICY = re.compile(
    r"create\s+policy\s+\w+\s+on\s+public\.(\w+)(.*?);",
    re.IGNORECASE | re.DOTALL,
)


def migrationstexte() -> list[str]:
    if not MIGRATIONEN.is_dir():
        print(f"FEHLER: {MIGRATIONEN} fehlt.", file=sys.stderr)
        sys.exit(1)
    return [d.read_text(encoding="utf-8") for d in sorted(MIGRATIONEN.glob("*.sql"))]


def tabellen_mit_firmenbezug(texte: list[str]) -> dict[str, str]:
    """Tabellenname -> Name der Spalte, die den Firmenbezug herstellt."""
    treffer: dict[str, str] = {}
    for text in texte:
        for name, koerper in TABELLE.findall(text):
            spalte = FIRMENSPALTE.search(koerper)
            if spalte:
                treffer.setdefault(name, spalte.group(1))
        for name, spalte in SPALTE_NACHTRAG.findall(text):
            treffer.setdefault(name, spalte)
    return treffer


def tabellen_mit_pruefung(texte: list[str]) -> set[str]:
    geprueft: set[str] = set()
    for text in texte:
        for name, koerper in POLICY.findall(text):
            if "is_business_member" in koerper:
                geprueft.add(name)
    return geprueft


def main() -> int:
    texte = migrationstexte()
    mit_bezug = tabellen_mit_firmenbezug(texte)
    mit_pruefung = tabellen_mit_pruefung(texte)

    fehlend = [
        (name, spalte)
        for name, spalte in sorted(mit_bezug.items())
        if name not in mit_pruefung and name not in KEINE_MANDANTENPRUEFUNG
    ]

    if fehlend:
        print(
            "Diese Tabellen tragen einen Firmenbezug, aber keine einzige Regel\n"
            "ruft `app.is_business_member` auf:\n",
            file=sys.stderr,
        )
        for name, spalte in fehlend:
            print(f"  * public.{name}  (Spalte {spalte})", file=sys.stderr)
        print(
            "\nOhne diese Prüfung hängt die Trennung zwischen Firmenkunden an\n"
            "nichts. Ergänze eine Regel nach dem Muster aus Migration 0117:\n\n"
            "    create policy t_read on public.<tabelle> for select to authenticated\n"
            "      using (app.is_business_member(business_id));\n\n"
            "    create policy t_write on public.<tabelle> for all to authenticated\n"
            "      using      (app.is_business_member(business_id, 'admin'))\n"
            "      with check (app.is_business_member(business_id, 'admin'));\n\n"
            "Gehört die Tabelle wirklich nicht dazu, trag sie mit Begründung in\n"
            "  scripts/check_mandantentrennung.py → KEINE_MANDANTENPRUEFUNG\n"
            "ein.",
            file=sys.stderr,
        )
        return 1

    print(
        f"Mandantentrennung: {len(mit_bezug)} Tabelle(n) mit Firmenbezug, "
        "alle mit Prüfung auf die Mitgliedschaft."
    )
    return 0


if __name__ == "__main__":
    sys.exit(main())
