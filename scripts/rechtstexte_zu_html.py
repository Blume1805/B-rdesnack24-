#!/usr/bin/env python3
"""Erzeugt die Rechtsseiten der Landingpage aus docs/rechtstexte/.

Eine Quelle, zwei Ausgaben. Die Texte liegen zeichengenau in
docs/rechtstexte/ und sind mit der Produktionsdatenbank abgeglichen
(siehe supabase/migrations/20260903110000_rechtstexte_ins_repository.sql).
Wer sie in apps/landing/ von Hand nachpflegt, hat nach der ersten Aenderung
zwei Staende und weiss nicht mehr, welcher gilt.

Aufruf:  python3 scripts/rechtstexte_zu_html.py
Ergebnis wird committet -- die Landingpage braucht bewusst kein Bauwerkzeug.
"""

from __future__ import annotations

import html
import pathlib
import re
import sys

WURZEL = pathlib.Path(__file__).resolve().parent.parent
QUELLE = WURZEL / "docs" / "rechtstexte"
ZIEL = WURZEL / "apps" / "landing"

SEITEN = [
    ("impressum.md", "impressum.html", "Impressum"),
    ("datenschutz.md", "datenschutz.html", "Datenschutzerklärung"),
]

RAHMEN = """<!DOCTYPE html>
<html lang="de">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{titel} — Bördesnack24</title>
<meta name="robots" content="index, follow">
<link rel="stylesheet" href="assets/styles.css">
<style>
  .rechtstext {{ padding-block: var(--s12) var(--s16); }}
  .rechtstext h1 {{ font-size: clamp(1.8rem, 5vw, 2.6rem); margin-bottom: var(--s8); }}
  .rechtstext h2 {{ font-size: 1.25rem; margin-top: var(--s10); }}
  .rechtstext h3 {{ font-size: 1.05rem; margin-top: var(--s6); }}
  .rechtstext p, .rechtstext li {{ font-size: 0.98rem; }}
  .rechtstext .tiefer {{ padding-left: var(--s5); border-left: 2px solid var(--linie); }}
  .zurueck {{ display: inline-block; margin-bottom: var(--s6); font-weight: 700; }}
</style>
</head>
<body>
<main class="eng rechtstext">
<a class="zurueck" href="index.html">← Zurück zur Startseite</a>
<h1>{titel}</h1>
{inhalt}
</main>
<footer class="fuss">
  <div class="bahn fuss__zeilen">
    <div>
      <h3>Bördesnack24 GbR</h3>
      <p>Sülldorfer Str. 3A<br>39171 Sülzetal OT Osterweddingen</p>
    </div>
    <div>
      <h3>Rechtliches</h3>
      <ul>
        <li><a href="impressum.html">Impressum</a></li>
        <li><a href="datenschutz.html">Datenschutzerklärung</a></li>
      </ul>
    </div>
  </div>
</footer>
</body>
</html>
"""


def inline(text: str) -> str:
    """Fett, Links und E-Mail-Adressen — sonst nichts."""
    s = html.escape(text)
    s = re.sub(r"\*\*(.+?)\*\*", r"<strong>\1</strong>", s)
    s = re.sub(
        r"(?<![\"=>])(https?://[^\s<)\"]+)",
        r'<a href="\1" rel="noopener">\1</a>',
        s,
    )
    s = re.sub(
        r"(?<![\">])\b([\w.+-]+@[\w-]+\.[\w.-]+)\b",
        r'<a href="mailto:\1">\1</a>',
        s,
    )
    return s


def bloecke(roh: str):
    block: list[str] = []
    for zeile in roh.splitlines():
        if zeile.strip():
            block.append(zeile)
        elif block:
            yield block
            block = []
    if block:
        yield block


def zu_html(roh: str) -> str:
    teile: list[str] = []
    for block in bloecke(roh):
        einzug = len(block[0]) - len(block[0].lstrip())
        klasse = ' class="tiefer"' if einzug >= 5 else ""
        gestrafft = [z.strip() for z in block]

        # Ueberschrift: eine einzelne, vollstaendig fett gesetzte Zeile.
        if len(gestrafft) == 1 and re.fullmatch(r"\*\*.+\*\*", gestrafft[0]):
            stufe = "h3" if einzug >= 2 else "h2"
            teile.append(f"<{stufe}>{inline(gestrafft[0][2:-2])}</{stufe}>")
            continue

        # Aufzaehlung: jede Zeile beginnt mit * oder -.
        if all(re.match(r"[*-]\s", z) for z in gestrafft):
            punkte = "".join(
                f"<li>{inline(z[2:])}</li>" for z in gestrafft
            )
            teile.append(f"<ul{klasse}>{punkte}</ul>")
            continue

        # Sonst ein Absatz. Die Quelle ist bei rund 92 Zeichen umbrochen;
        # solche Umbrueche sind Satzformatierung und werden zusammengefuehrt.
        # Ein deutlich kuerzerer Zeilenschluss ist dagegen gewollt --
        # Anschriften und Kontaktzeilen wuerden sonst zu einer einzigen
        # Zeile verschmelzen ("Boerdesnack24 GbR Suelldorfer Str. 3A ...").
        satz = ""
        for i, zeile in enumerate(gestrafft):
            satz += inline(zeile)
            if i == len(gestrafft) - 1:
                break
            satz += "<br>" if len(zeile) < 72 else " "
        teile.append(f"<p{klasse}>{satz}</p>")
    return "\n".join(teile)


def main() -> int:
    if not QUELLE.is_dir():
        print(f"✗ {QUELLE} fehlt", file=sys.stderr)
        return 1
    for datei, ausgabe, titel in SEITEN:
        pfad = QUELLE / datei
        if not pfad.is_file():
            print(f"✗ {pfad} fehlt", file=sys.stderr)
            return 1
        roh = pfad.read_text(encoding="utf-8")
        # Die erste Zeile ist in beiden Quellen die Ueberschrift selbst; sie
        # steht schon im Rahmen und wuerde sonst doppelt erscheinen.
        ohne_titel = re.sub(r"^\*\*[^\n]*\*\*\s*\n+", "", roh, count=1)
        ziel = ZIEL / ausgabe
        ziel.write_text(
            RAHMEN.format(titel=titel, inhalt=zu_html(ohne_titel)),
            encoding="utf-8",
        )
        print(f"  ✓ {ziel.relative_to(WURZEL)} ({len(roh)} Zeichen Quelle)")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
