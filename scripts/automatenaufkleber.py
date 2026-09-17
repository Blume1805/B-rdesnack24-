#!/usr/bin/env python3
"""Erzeugt den QR-Aufkleber fuer die Automaten.

Wozu
----
Boerdesnack24 wird als Web-App ausgeliefert, nicht ueber die App-Stores. Der
Einstieg ist deshalb der Aufkleber am Automaten: scannen, App oeffnet, fertig.
Jede Sekunde Huerde an dieser Stelle kostet Kunden, die bereits vor dem
Automaten stehen.

Aufruf
------
    python3 scripts/automatenaufkleber.py --url https://app.boerdesnack24.de
    python3 scripts/automatenaufkleber.py --url ... --entwurf   (Wasserzeichen)

Erzeugt eine HTML-Datei neben dem Ziel-PDF. Das PDF wird daraus gedruckt:

    /opt/pw-browsers/chromium-1194/chrome-linux/chrome --headless --no-sandbox \\
      --disable-gpu --no-pdf-header-footer --print-to-pdf=<ziel.pdf> \\
      --virtual-time-budget=5000 file://<pfad zur html>

Abhaengigkeit: segno (reine Python-Bibliothek, kein Systempaket noetig)
    pip install segno

Warum die URL ein Pflichtparameter ist
--------------------------------------
Ein gedruckter Aufkleber laesst sich nicht aendern. Steht dort eine Adresse,
die spaeter umzieht, ist jeder geklebte Automat tot. Deshalb gibt es hier
keinen Standardwert: Die Adresse muss bewusst gesetzt werden und vorher
erreichbar sein.
"""
from __future__ import annotations

import argparse
import io
import pathlib
import re
import sys

try:
    import segno
except ImportError:
    sys.exit('segno fehlt. Installieren mit:  pip install segno')

# Markenfarben (Branding Guide v1.0). Nicht aendern.
GOLD = '#FDC102'
INK = '#202321'
CREAM = '#FBF8F4'


def qr_svg(url: str) -> str:
    """QR-Code als eingebettetes SVG.

    Fehlerkorrektur 'H' (rund 30 Prozent): Der Aufkleber klebt im Freien an
    einem Automaten, wird angefasst, verschmutzt und zerkratzt. Mit der
    hoechsten Stufe bleibt er auch mit Beschaedigung lesbar.
    """
    qr = segno.make(url, error='h')
    # segno schreibt SVG als Bytes, deshalb BytesIO und anschliessend dekodieren.
    buf = io.BytesIO()
    qr.save(buf, kind='svg', scale=10, border=2,
            dark=INK, light=None, svgclass=None, lineclass=None,
            xmldecl=False, svgns=True)
    svg = buf.getvalue().decode('utf-8')

    # segno setzt width und height in Pixeln, aber KEINE viewBox. Sobald das
    # CSS die Groesse auf Millimeter zwingt, skaliert der Rahmen mit, die
    # Pfadkoordinaten aber nicht: Der Code wird beschnitten und ist nicht mehr
    # lesbar. Der Fehler faellt am Bildschirm kaum auf, weil die Grafik noch
    # "wie ein QR-Code" aussieht.
    # Deshalb: width/height durch eine viewBox ersetzen.
    m = re.search(r'<svg([^>]*)>', svg)
    if not m:
        raise RuntimeError('unerwartete SVG-Ausgabe von segno')
    attrs = m.group(1)
    size = re.search(r'width="(\d+(?:\.\d+)?)"', attrs)
    if not size:
        raise RuntimeError('SVG ohne width, viewBox nicht ableitbar')
    n = size.group(1)
    neu = re.sub(r'\s*(width|height)="[^"]*"', '', attrs)
    svg = svg.replace(m.group(0), f'<svg{neu} viewBox="0 0 {n} {n}">', 1)
    return svg


def html(url: str, entwurf: bool) -> str:
    anzeige_url = url.replace('https://', '').replace('http://', '').rstrip('/')
    wasserzeichen = ''
    if entwurf:
        wasserzeichen = (
            '<div class="entwurf">ENTWURF<br>'
            '<span>Adresse noch nicht final, nicht drucken</span></div>'
        )
    return f'''<!doctype html>
<html lang="de"><head><meta charset="utf-8">
<title>Bördesnack24 Automatenaufkleber</title>
<style>
  /* 74 x 105 mm — passt auf gaengige Etikettenbogen und ist am Automaten
     aus etwa einem Meter Entfernung lesbar. */
  @page {{ size: 74mm 105mm; margin: 0; }}
  * {{ box-sizing: border-box; margin: 0; padding: 0; }}
  body {{ font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; }}
  .sticker {{
    width: 74mm; height: 105mm; background: {CREAM}; color: {INK};
    padding: 6mm 5mm; display: flex; flex-direction: column;
    align-items: center; text-align: center; position: relative;
    border: 1.2mm solid {INK};
  }}
  .brand {{ font-weight: 900; letter-spacing: 1.6px; font-size: 12pt; }}
  .rule {{ width: 26mm; height: 1.2mm; background: {GOLD}; margin: 2mm 0 3mm; }}
  h1 {{ font-size: 19pt; font-weight: 900; line-height: 1.08; }}
  h1 .gold {{ color: #8A6A02; }}
  .sub {{ font-size: 9.5pt; line-height: 1.35; margin-top: 2mm; }}
  .qr {{ margin: 3.5mm 0 2mm; background: #fff; padding: 2.5mm;
         border-radius: 2mm; }}
  .qr svg {{ width: 34mm; height: 34mm; display: block; }}
  .url {{ font-size: 10pt; font-weight: 800; letter-spacing: .2px; }}
  .steps {{ margin-top: 3mm; font-size: 8.5pt; line-height: 1.5;
            text-align: left; width: 100%; }}
  .steps b {{ color: #8A6A02; }}
  .foot {{ margin-top: auto; font-size: 6.5pt; line-height: 1.3;
           color: #6F6A5E; }}
  .entwurf {{
    position: absolute; inset: 0; display: flex; flex-direction: column;
    align-items: center; justify-content: center; transform: rotate(-24deg);
    color: rgba(200, 40, 40, .30); font-size: 26pt; font-weight: 900;
    letter-spacing: 2px; pointer-events: none;
  }}
  .entwurf span {{ font-size: 8pt; letter-spacing: 0; font-weight: 700; }}
</style></head><body>
<div class="sticker">
  {wasserzeichen}
  <div class="brand">BÖRDESNACK24</div>
  <div class="rule"></div>
  <h1>Hier scannen und<br><span class="gold">5 % sparen.</span></h1>
  <div class="sub">An jedem Automaten, bei jedem Kauf.<br>
    Kostenlos, kein Abo, keine Kündigung.</div>
  <div class="qr">{qr_svg(url)}</div>
  <div class="url">{anzeige_url}</div>
  <div class="steps">
    <b>1.</b> Code scannen oder Adresse eintippen<br>
    <b>2.</b> Kostenlos anmelden, ab 16 Jahren<br>
    <b>3.</b> Kundenkarte am Automaten vorzeigen
  </div>
  <div class="foot">
    Bördesnack24 GbR, Sülldorfer Str. 3A, 39171 Sülzetal OT Osterweddingen.
    Rabatt gilt für angemeldete Kundinnen und Kunden auf den Automatenpreis.
    Höhere Stufen ab 150 € Gesamtumsatz. Es gilt der in der App
    angezeigte Preis.
  </div>
</div>
</body></html>'''


def main() -> None:
    ap = argparse.ArgumentParser(description=__doc__)
    ap.add_argument('--url', required=True,
                    help='Adresse, auf die der QR-Code zeigt')
    ap.add_argument('--out', default='docs/marketing/automatenaufkleber.html',
                    help='Zieldatei (HTML)')
    ap.add_argument('--entwurf', action='store_true',
                    help='Wasserzeichen ENTWURF aufdrucken')
    args = ap.parse_args()

    if not args.url.startswith('https://'):
        sys.exit('Die Adresse muss mit https:// beginnen. Ein Aufkleber mit '
                 'unverschluesselter Adresse ist nicht vertretbar.')

    ziel = pathlib.Path(args.out)
    ziel.parent.mkdir(parents=True, exist_ok=True)
    ziel.write_text(html(args.url, args.entwurf), encoding='utf-8')
    print(f'geschrieben: {ziel}')
    print(f'QR zeigt auf: {args.url}')
    if args.entwurf:
        print('ENTWURF-Wasserzeichen gesetzt, nicht zum Druck geeignet.')


if __name__ == '__main__':
    main()
