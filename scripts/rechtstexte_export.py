#!/usr/bin/env python3
"""Exportiert die Rechtstexte der App nach docs/legal/.

Wozu
----
Am 17.09.2026 fiel auf, dass fuer dasselbe Angebot ZWEI verschiedene
Nutzungsbedingungen existierten: eine in der Flutter-App, eine in der
Lovable-Landingpage. Bei widersprechenden Bedingungen gilt die fuer den
Verwender unguenstigere Auslegung (Paragraf 305c Abs. 2 BGB) - man ist also an
die jeweils kundenfreundlichere Variante gebunden, ohne es zu wollen.

Die Loesung ist nicht Disziplin, sondern eine einzige Quelle:

    apps/mobile/lib/features/legal/presentation/legal_texts.dart

Dieses Skript zieht daraus Markdown-Dateien nach docs/legal/. Die Landingpage
bekommt ihren Text aus diesen Dateien, nicht aus dem Gedaechtnis.

Aufruf
------
    python3 scripts/rechtstexte_export.py            # schreibt docs/legal/
    python3 scripts/rechtstexte_export.py --pruefen  # prueft nur auf Drift

--pruefen endet mit Code 1, wenn die Dateien nicht mehr zur Quelle passen.
Damit laesst es sich in die CI haengen, sobald das gewuenscht ist.
"""
from __future__ import annotations

import pathlib
import re
import sys

WURZEL = pathlib.Path(__file__).resolve().parent.parent
QUELLE = WURZEL / "apps/mobile/lib/features/legal/presentation/legal_texts.dart"
ZIEL = WURZEL / "docs/legal"

# Konstantenname -> (Dateiname, Ueberschrift)
TEXTE = {
    "imprint": ("impressum.md", "Impressum"),
    "privacy": ("datenschutzerklaerung.md", "Datenschutzerklärung"),
    "terms": ("nutzungsbedingungen.md", "Nutzungsbedingungen"),
}

KOPF = """<!-- ERZEUGT - NICHT VON HAND AENDERN.
     Quelle: apps/mobile/lib/features/legal/presentation/legal_texts.dart
     Neu erzeugen: python3 scripts/rechtstexte_export.py
     Aenderungen gehoeren in die Dart-Datei, sonst laufen App und Landingpage
     auseinander (docs/COMPLIANCE.md, V-009). -->

"""


def lies_quelle() -> tuple[str, dict[str, str]]:
    if not QUELLE.exists():
        sys.exit(f"Quelle nicht gefunden: {QUELLE}")
    dart = QUELLE.read_text(encoding="utf-8")

    m = re.search(r"static const version = '([^']+)';", dart)
    if not m:
        sys.exit("version-Konstante nicht gefunden")
    version = m.group(1)

    texte: dict[str, str] = {}
    for name in TEXTE:
        m = re.search(
            r"static const " + name + r" = '''\n(.*?)''';", dart, re.S
        )
        if not m:
            sys.exit(f"Konstante {name} nicht gefunden")
        # Dart-Interpolation aufloesen; mehr als $version kommt nicht vor.
        texte[name] = m.group(1).replace("$version", version)
    return version, texte


def markdown(name: str, inhalt: str, version: str) -> str:
    _, ueberschrift = TEXTE[name]
    return f"{KOPF}# {ueberschrift}\n\nFassung {version}\n\n```\n{inhalt}```\n"


def main() -> int:
    pruefen = "--pruefen" in sys.argv
    version, texte = lies_quelle()
    ZIEL.mkdir(parents=True, exist_ok=True)

    abweichungen = []
    for name, inhalt in texte.items():
        dateiname, _ = TEXTE[name]
        pfad = ZIEL / dateiname
        neu = markdown(name, inhalt, version)
        if pruefen:
            alt = pfad.read_text(encoding="utf-8") if pfad.exists() else ""
            if alt != neu:
                abweichungen.append(dateiname)
        else:
            pfad.write_text(neu, encoding="utf-8")
            print(f"geschrieben: docs/legal/{dateiname}")

    if pruefen:
        if abweichungen:
            print("ABWEICHUNG zur Quelle in: " + ", ".join(abweichungen))
            print("Beheben mit: python3 scripts/rechtstexte_export.py")
            return 1
        print(f"docs/legal/ stimmt mit der Quelle ueberein (Fassung {version})")
    else:
        print(f"Fassung {version}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
