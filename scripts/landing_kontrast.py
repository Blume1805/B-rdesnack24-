#!/usr/bin/env python3
"""Kontrastprobe der Landingpage (WCAG 2.1 AA, 1.4.3).

Die Farbpaare stehen hier ausgeschrieben, weil ein Wert erst dann geprueft
ist, wenn jemand ihn benannt hat. Ein Automatismus, der alle CSS-Farben
gegeneinander rechnet, meldet Paare, die nie zusammen vorkommen -- und
uebersieht das eine, das zaehlt.

Aufruf:  python3 scripts/landing_kontrast.py
Rueckgabe 1, wenn ein Paar durchfaellt.
"""

from __future__ import annotations

import sys


def _linear(kanal: float) -> float:
    kanal /= 255
    return kanal / 12.92 if kanal <= 0.03928 else ((kanal + 0.055) / 1.055) ** 2.4


def leuchtdichte(hexwert: str) -> float:
    h = hexwert.lstrip("#")
    r, g, b = (int(h[i:i + 2], 16) for i in (0, 2, 4))
    return 0.2126 * _linear(r) + 0.7152 * _linear(g) + 0.0722 * _linear(b)


def kontrast(vordergrund: str, hintergrund: str) -> float:
    a, b = leuchtdichte(vordergrund), leuchtdichte(hintergrund)
    hell, dunkel = max(a, b), min(a, b)
    return (hell + 0.05) / (dunkel + 0.05)


# (Beschreibung, Vordergrund, Hintergrund, Mindestwert)
PAARE = [
    ("Fliesstext auf Weiss",              "#4A4844", "#FFFFFF", 4.5),
    ("Fliesstext auf Creme",              "#4A4844", "#F7F5F1", 4.5),
    ("Leiser Text auf Weiss",             "#6E6A66", "#FFFFFF", 4.5),
    ("Leiser Text auf Creme",             "#6E6A66", "#F7F5F1", 4.5),
    ("Augenbraue/Link auf Weiss",         "#856A00", "#FFFFFF", 4.5),
    ("Augenbraue/Link auf Creme",         "#856A00", "#F7F5F1", 4.5),
    ("Knopf: Ink auf Gold",               "#202321", "#FDC102", 4.5),
    ("Knopf im Hover: Ink auf Gold-dunkel", "#202321", "#B89A00", 4.5),
    ("Ueberschrift auf Dunkel",           "#FFFFFF", "#0C0A07", 4.5),
    ("Text auf Dunkel",                   "#FEE7A0", "#0C0A07", 4.5),
    ("Fuss-Link auf Dunkel",              "#FDC102", "#0C0A07", 4.5),
    ("Textmarker: Ink auf Gold-hell",     "#202321", "#FEE7A0", 4.5),
    ("Anteilswert auf Gold",              "#202321", "#FDC102", 4.5),
    ("Meldung: Erfolg",                   "#33591F", "#EAF3E5", 4.5),
    ("Meldung: Fehler",                   "#7A1414", "#FBE9E9", 4.5),
]


def main() -> int:
    durchgefallen = 0
    for name, vg, hg, soll in PAARE:
        wert = kontrast(vg, hg)
        gut = wert >= soll
        durchgefallen += 0 if gut else 1
        print(f"{'  ✓' if gut else '  ✗'} {wert:5.2f}:1  (mind. {soll})  {name}")
    print()
    if durchgefallen:
        print(f"✗ {durchgefallen} Farbpaar(e) unter dem Mindestkontrast.")
        return 1
    print(f"✓ Alle {len(PAARE)} Farbpaare erfuellen WCAG 2.1 AA.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
