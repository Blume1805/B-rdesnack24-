#!/usr/bin/env python3
"""Die Zahlungstabelle darf nicht benutzt werden, solange die Rechtstexte
behaupten, es gebe keinen Zahlungsdienstleister.

Warum dieser Wächter existiert
------------------------------
Migration 0115 legt `public.payments` an. Die Tabelle ist leer, nichts
schreibt hinein, und deshalb bleiben zwei Sätze in den Rechtstexten wahr:

    „Wir speichern weder Kartennummer noch IBAN noch Zahlungstoken und
     binden keinen Zahlungsdienstleister ein."   (Datenschutzerklärung)

    „Wir haben auch keinen Zahlungsdienstleister eingebunden."
                                                 (Zahlungsinformationen)

Ab der ersten geschriebenen Zeile sind beide Sätze falsch. `provider` und
`provider_ref` sind genau das: der eingebundene Dienstleister und die
Referenz bei ihm. Dazu kommt `payer_profile_id` — ein Personenbezug, den
die Datenschutzerklärung dann in Datenkategorien und Speicherdauer
abbilden muss.

Das ist die Drift, gegen die CLAUDE.md geschrieben wurde: Der Code wandert,
die Texte bleiben stehen. Eine Notiz im Migrationskopf hält das nicht auf —
wer die Zahlungsanbindung baut, liest den Kopf einer alten Migration nicht.
Also prüft es dieser Schritt beim Bauen, blockierend, wie schon
`check_rechtstexte.py`, `check_ki_register.py`, `check_rollenpruefung.py`
und `check_rpc_vollstaendig.py`.

Was geprüft wird
----------------
Greift Anwendungs- oder Edge-Function-Code auf `payments` zu, während die
Rechtstexte noch „kein Zahlungsdienstleister" behaupten? Dann Abbruch.

Bewusst NICHT geprüft werden die Migrationen selbst: Die Tabelle anzulegen
ist erlaubt und der Anlass dieses Skripts. Verboten ist, sie zu benutzen,
ohne die Texte nachzuziehen.

Wenn der Fall eintritt
----------------------
Erst die Texte richtigstellen, dann den Code. Zu ändern sind mindestens:

  * `LegalTexts.privacy` — Datenkategorien, Empfänger (der Dienstleister,
    samt Drittlandbezug), Rechtsgrundlage, Speicherdauer
  * `LegalTexts.payment` — die beiden zitierten Sätze
  * `LegalTexts.version` hochziehen
  * `scripts/check_rechtstexte.py`, falls ein SDK dazukommt

Danach die Sätze unten aus `VERALTETE_SAETZE` entfernen — dieses Skript
hat seinen Zweck dann erfüllt.
"""

from __future__ import annotations

import re
import sys
from pathlib import Path

WURZEL = Path(__file__).resolve().parent.parent
RECHTSTEXTE = WURZEL / "apps" / "mobile" / "lib" / "features" / "legal" / "presentation" / "legal_texts.dart"

# Verzeichnisse, in denen ein Zugriff auf `payments` den Alarm auslöst.
# Migrationen fehlen hier mit Absicht — siehe Kopf.
GEPRUEFTE_BEREICHE = (
    Path("apps") / "mobile" / "lib",
    Path("supabase") / "functions",
)

GEPRUEFTE_ENDUNGEN = {".dart", ".ts", ".tsx", ".js"}

# Die Sätze, die falsch werden, sobald Zahlungen geschrieben werden.
# Whitespace-tolerant, weil die Texte umgebrochen sind.
VERALTETE_SAETZE = {
    "Datenschutzerklärung": "binden keinen Zahlungsdienstleister ein",
    "Zahlungsinformationen": "keinen Zahlungsdienstleister eingebunden",
}

# `.from("payments")`, `from('payments')`, `rpc("...payment...")` wäre zu
# breit — geprüft wird der Tabellenzugriff, nicht jedes Wort mit „payment".
ZUGRIFF = re.compile(r"""from\(\s*['"]payments['"]\s*\)""")


def satz_vorhanden(text: str, satz: str) -> bool:
    """Findet den Satz auch über einen Zeilenumbruch hinweg."""
    muster = r"\s+".join(re.escape(w) for w in satz.split())
    return re.search(muster, text) is not None


def veraltete_zusagen() -> list[str]:
    if not RECHTSTEXTE.exists():
        print(f"FEHLER: {RECHTSTEXTE.relative_to(WURZEL)} fehlt.", file=sys.stderr)
        sys.exit(1)
    text = RECHTSTEXTE.read_text(encoding="utf-8")
    return [name for name, satz in VERALTETE_SAETZE.items() if satz_vorhanden(text, satz)]


def zugriffe() -> list[tuple[str, int, str]]:
    treffer: list[tuple[str, int, str]] = []
    for bereich in GEPRUEFTE_BEREICHE:
        wurzel = WURZEL / bereich
        if not wurzel.exists():
            continue
        for datei in sorted(wurzel.rglob("*")):
            if not datei.is_file() or datei.suffix not in GEPRUEFTE_ENDUNGEN:
                continue
            for nr, zeile in enumerate(
                datei.read_text(encoding="utf-8", errors="replace").splitlines(), 1
            ):
                if ZUGRIFF.search(zeile):
                    treffer.append((str(datei.relative_to(WURZEL)), nr, zeile.strip()))
    return treffer


def main() -> int:
    offen = veraltete_zusagen()
    gefunden = zugriffe()

    if not offen:
        # Die Zusagen wurden zurückgezogen — das Skript hat seinen Zweck erfüllt.
        print(
            "Zahlungstexte-Wächter: Die Rechtstexte behaupten nicht mehr, es sei\n"
            "kein Zahlungsdienstleister eingebunden. Dieses Skript kann entfallen."
        )
        return 0

    if gefunden:
        print(
            "Code greift auf `payments` zu, aber die Rechtstexte sagen weiterhin,\n"
            "es sei kein Zahlungsdienstleister eingebunden.\n",
            file=sys.stderr,
        )
        for datei, nr, zeile in gefunden:
            print(f"  * {datei}:{nr}  {zeile}", file=sys.stderr)
        print("\nNoch veraltet:", file=sys.stderr)
        for name in offen:
            print(f"  * {name}: „…{VERALTETE_SAETZE[name]}…\"", file=sys.stderr)
        print(
            "\nErst die Texte richtigstellen (Datenkategorien, Empfänger,\n"
            "Drittland, Rechtsgrundlage, Speicherdauer), `LegalTexts.version`\n"
            "hochziehen, dann den Code. Danach die Sätze aus\n"
            "  scripts/check_zahlungstexte.py → VERALTETE_SAETZE\n"
            "entfernen.",
            file=sys.stderr,
        )
        return 1

    print(
        "Zahlungstexte-Wächter: `payments` ist angelegt, aber unbenutzt — "
        f"die Zusage „kein Zahlungsdienstleister\" in {len(offen)} Text(en) "
        "bleibt zutreffend."
    )
    return 0


if __name__ == "__main__":
    sys.exit(main())
