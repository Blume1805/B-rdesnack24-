#!/usr/bin/env python3
"""Fettmarkierungen in den Rechtstexten dürfen nicht über Zeilenumbrüche laufen.

Warum dieser Wächter existiert
------------------------------
Die Rechtstexte werden von `legal_rich_text.dart` gerendert, und der Parser
dort lautet:

    final RegExp _fett = RegExp(r'\\*\\*([^*\\n]+)\\*\\*');

`[^*\\n]` schliesst den Zeilenumbruch ausdrücklich aus. Eine Markierung, die
über zwei Zeilen läuft, wird deshalb NICHT erkannt — sie erscheint dem
Kunden als literale Sternchen mitten im Satz:

    **Sie können ihr jederzeit
    widersprechen (Art. 21 DSGVO)**

Das ist zweimal passiert: am 21.08.2026 beim Absatz zum Profiling und am
22.08.2026 bei den Aufgaben-Prämien. Beide Male in einem Absatz, der eine
Pflichtangabe hervorheben sollte — also genau dort, wo die Hervorhebung
nicht schmückt, sondern gefordert ist.

Beim Schreiben fällt es nicht auf, weil die Quelle völlig richtig aussieht.
Es fällt erst auf, wenn jemand die Seite in der App öffnet. Also prüft es
der Bauablauf.

Was geprüft wird
----------------
Jedes `**…**`-Paar in `legal_texts.dart`. Findet die zeilenweise Fassung des
Parsers es nicht, während eine zeilenübergreifende Suche es sehr wohl
findet, ist die Stelle kaputt.

Beheben lässt es sich immer durch Umbrechen: die Markierung ganz auf eine
Zeile ziehen. Der Text bleibt gleich, nur der Umbruch wandert.
"""

from __future__ import annotations

import re
import sys
from pathlib import Path

WURZEL = Path(__file__).resolve().parent.parent
TEXTE = (
    WURZEL / "apps" / "mobile" / "lib" / "features" / "legal" / "presentation"
    / "legal_texts.dart"
)
PARSER = (
    WURZEL / "apps" / "mobile" / "lib" / "features" / "legal" / "presentation"
    / "legal_rich_text.dart"
)

# Exakt das Muster aus legal_rich_text.dart.
WIE_DER_PARSER = re.compile(r"\*\*([^*\n]+)\*\*")
# Dasselbe ohne Zeilenbeschränkung.
UEBER_ZEILEN = re.compile(r"\*\*([^*]+)\*\*", re.DOTALL)


def parser_unveraendert(text: str) -> bool:
    """Warnt, falls der Parser umgebaut wurde und dieses Skript veraltet."""
    return r"[^*\n]+" in text


def main() -> int:
    if not TEXTE.exists():
        print(f"FEHLER: {TEXTE.relative_to(WURZEL)} fehlt.", file=sys.stderr)
        return 1

    if PARSER.exists() and not parser_unveraendert(PARSER.read_text(encoding="utf-8")):
        print(
            f"HINWEIS: {PARSER.relative_to(WURZEL)} benutzt nicht mehr das Muster,\n"
            "gegen das dieses Skript prüft. Beides muss zusammenpassen —\n"
            "bitte den Wächter nachziehen.",
            file=sys.stderr,
        )
        return 1

    quelle = TEXTE.read_text(encoding="utf-8")
    erkannt = {(m.start(), m.end()) for m in WIE_DER_PARSER.finditer(quelle)}
    alle = list(UEBER_ZEILEN.finditer(quelle))
    kaputt = [m for m in alle if (m.start(), m.end()) not in erkannt]

    if kaputt:
        print(
            "Diese Fettmarkierungen laufen über einen Zeilenumbruch. Der Parser\n"
            "in legal_rich_text.dart erkennt sie nicht — dem Kunden erscheinen\n"
            "literale Sternchen im Text:\n",
            file=sys.stderr,
        )
        for m in kaputt:
            zeile = quelle[: m.start()].count("\n") + 1
            inhalt = m.group(1).replace("\n", " ⏎ ")
            if len(inhalt) > 90:
                inhalt = inhalt[:90] + "…"
            print(
                f"  {TEXTE.relative_to(WURZEL)}:{zeile}\n      **{inhalt}**",
                file=sys.stderr,
            )
        print(
            "\nBehebung: die Markierung ganz auf eine Zeile ziehen. Der Text\n"
            "bleibt gleich, nur der Umbruch wandert.",
            file=sys.stderr,
        )
        return 1

    print(
        f"Rechtstext-Auszeichnung: {len(alle)} Fettmarkierung(en), "
        "alle einzeilig und damit sichtbar."
    )
    return 0


if __name__ == "__main__":
    sys.exit(main())
