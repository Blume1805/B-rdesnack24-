#!/usr/bin/env python3
"""Neue Abhängigkeiten brauchen eine datenschutzrechtliche Einordnung.

Warum dieser Wächter existiert
------------------------------
Am 09.08.2026 ergab die Prüfung, dass die Datenschutzerklärung vier
Verarbeitungen beschrieb, die es nicht gab, und die vier Empfänger nicht
nannte, die es gab. Der Code war gewandert, die Texte waren stehen
geblieben.

Der häufigste Auslöser für so eine Drift ist eine neue Abhängigkeit: Wer
`sentry_flutter`, `firebase_messaging` oder ein Zahlungs-SDK einträgt,
ändert damit, welche Daten an wen fliessen — und denkt in dem Moment
nicht an die Datenschutzerklärung. Genau dort setzt dieses Skript an.

Was es NICHT kann
-----------------
Es kennt Paketnamen, nicht Bedeutung. Es merkt nicht, wenn eine neue
Datenbankspalte personenbezogen ist, wenn eine Angebotslogik zu Profiling
wird oder wenn ein Preis sich ändert. Dafür gibt es die Prüfliste in
CLAUDE.md, und die muss ein Mensch anwenden.

Dieses Skript deckt einen Fall ab, dafür zuverlässig. Es ist ein Netz mit
bekannten Maschen, keine Rundumsicherung — und es behauptet auch nichts
anderes.
"""

from __future__ import annotations

import re
import sys
from pathlib import Path

WURZEL = Path(__file__).resolve().parent.parent
PUBSPEC = WURZEL / "apps" / "mobile" / "pubspec.yaml"

# Jede produktive Abhängigkeit mit ihrer datenschutzrechtlichen Einordnung.
# Stand 09.08.2026, geprüft am Code.
#
# „keine Übermittlung" heisst: Das Paket schickt von sich aus nichts nach
# aussen. „Empfänger" heisst: Es gehört in die Datenschutzerklärung.
EINGEORDNET: dict[str, str] = {
    "flutter": "Rahmenwerk, keine Übermittlung",
    "flutter_localizations": "Übersetzungen, keine Übermittlung",
    "flutter_riverpod": "Zustandsverwaltung, keine Übermittlung",
    "go_router": "Navigation, keine Übermittlung",
    "supabase_flutter": "EMPFÄNGER Supabase (Frankfurt) — in der DSE genannt",
    "crypto": "Hashfunktionen lokal, keine Übermittlung",
    "http": "HTTP-Client. Übermittlung hängt an der aufgerufenen Adresse, "
            "nicht am Paket",
    "printing": "Druck/PDF lokal, keine Übermittlung",
    "google_fonts": "Laufzeitabruf ist per allowRuntimeFetching=false und "
                    "zusätzlich per Shim in web/index.html unterbunden — "
                    "keine Übermittlung an Google",
    "url_launcher": "Öffnet externe Ziele. Der Aufruf von Google Maps im "
                    "Automatenfinder ist in der DSE benannt",
    "qr_flutter": "QR-Code lokal erzeugt, keine Übermittlung",
    "fl_chart": "Diagramme lokal, keine Übermittlung",
    "image_picker": "Zugriff auf Galerie/Kamera nach Systemabfrage, "
                    "keine Übermittlung an Dritte",
    "file_picker": "Dateiauswahl, keine Übermittlung an Dritte",
    "signature": "Unterschriftenfeld lokal, keine Übermittlung",
    "connectivity_plus": "Verbindungsstatus, keine Übermittlung",
    "shared_preferences": "Lokale Einstellungen — § 25 Abs. 2 Nr. 2 TDDDG, "
                          "auf der Cookie-Seite benannt",
    "equatable": "Wertevergleich, keine Übermittlung",
    "intl": "Formatierung, keine Übermittlung",
    "web": "Browser-Schnittstellen, keine Übermittlung",
}

ABHAENGIGKEIT = re.compile(r"^  (\w[\w_]*):", re.MULTILINE)


def produktive_abhaengigkeiten() -> set[str]:
    """Liest den `dependencies:`-Block, ohne dev_dependencies."""
    text = PUBSPEC.read_text(encoding="utf-8")
    start = text.find("\ndependencies:")
    if start == -1:
        print("FEHLER: kein dependencies-Block in pubspec.yaml", file=sys.stderr)
        sys.exit(1)
    ende = text.find("\ndev_dependencies:", start)
    block = text[start : ende if ende != -1 else len(text)]
    return set(ABHAENGIGKEIT.findall(block))


def main() -> int:
    vorhanden = produktive_abhaengigkeiten()
    neu = sorted(vorhanden - EINGEORDNET.keys())
    verschwunden = sorted(EINGEORDNET.keys() - vorhanden)

    fehler = False

    if neu:
        fehler = True
        print("Neue Abhängigkeiten ohne datenschutzrechtliche Einordnung:\n",
              file=sys.stderr)
        for name in neu:
            print(f"  * {name}", file=sys.stderr)
        print(
            "\nBevor das eingebaut wird, bitte klären:\n"
            "  1. Übermittelt das Paket Daten nach aussen? An wen, in welches Land?\n"
            "  2. Greift es auf das Endgerät zu (§ 25 TDDDG)? Einwilligung nötig?\n"
            "  3. Gehört ein neuer Empfänger in die Datenschutzerklärung?\n"
            "  4. Braucht es einen AV-Vertrag nach Art. 28 DSGVO?\n"
            "\nAntwort in scripts/check_rechtstexte.py → EINGEORDNET eintragen\n"
            "und die betroffenen Rechtstexte nachziehen. Prüfliste: CLAUDE.md,\n"
            "Abschnitt „Rechtstexte mitziehen\".",
            file=sys.stderr,
        )

    if verschwunden:
        fehler = True
        print("\nEntfernte Abhängigkeiten — stehen sie noch in den Rechtstexten?\n",
              file=sys.stderr)
        for name in verschwunden:
            print(f"  * {name}  ({EINGEORDNET[name]})", file=sys.stderr)
        print(
            "\nEntfernen wird beim Nachziehen regelmässig vergessen. Ein Text,\n"
            "der einen Empfänger nennt, den es nicht mehr gibt, ist genauso\n"
            "falsch wie einer, der einen verschweigt. Bitte prüfen, dann den\n"
            "Eintrag hier löschen.",
            file=sys.stderr,
        )

    if fehler:
        return 1

    print(
        f"Rechtstexte-Wächter: {len(vorhanden)} Abhängigkeiten, alle eingeordnet.\n"
        "Hinweis: Das Skript kennt nur Abhängigkeiten. Datenfelder, "
        "Angebotslogik,\nPreise und Kontaktangaben prüft die Liste in CLAUDE.md — "
        "von Hand."
    )
    return 0


if __name__ == "__main__":
    sys.exit(main())
