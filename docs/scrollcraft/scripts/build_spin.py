#!/usr/bin/env python3
"""
scrollcraft — Produktsequenz aus Einzelfotos bauen.

Liest einen Ordner mit 24 oder 36 Aufnahmen (alphabetisch = Drehreihenfolge),
ermittelt einen GEMEINSAMEN Bildausschnitt ueber alle Aufnahmen, normalisiert
den Weisspunkt und schreibt ein Sprite-Blatt als WebP.

Der gemeinsame Ausschnitt ist der entscheidende Punkt: Bei individuellem
Zuschnitt zittert das Produkt beim Drehen.

Aufruf:  python3 build_spin.py <ordner> [--out sprite.webp] [--breite 400]
"""
import sys, os, glob, argparse
from PIL import Image

def bbox_nichtweiss(im, schwelle=232):
    px = im.convert("RGB").load()
    w, h = im.size
    minx, miny, maxx, maxy = w, h, 0, 0
    for y in range(0, h, 3):
        for x in range(0, w, 3):
            r, g, b = px[x, y]
            if not (r > schwelle and g > schwelle and b > schwelle):
                minx = min(minx, x); maxx = max(maxx, x)
                miny = min(miny, y); maxy = max(maxy, y)
    return (minx, miny, maxx, maxy)

def main():
    p = argparse.ArgumentParser()
    p.add_argument("ordner")
    p.add_argument("--out", default="sprite.webp")
    p.add_argument("--breite", type=int, default=400)
    p.add_argument("--qualitaet", type=int, default=72)
    a = p.parse_args()

    dateien = sorted(sum([glob.glob(os.path.join(a.ordner, e))
                          for e in ("*.jpg", "*.jpeg", "*.png", "*.JPG", "*.PNG")], []))
    if len(dateien) not in (24, 36):
        print(f"Warnung: {len(dateien)} Aufnahmen gefunden — vorgesehen sind 24 oder 36")
    if not dateien:
        sys.exit("keine Bilder gefunden")

    print(f"{len(dateien)} Aufnahmen, ermittle gemeinsamen Ausschnitt …")
    boxen = [bbox_nichtweiss(Image.open(f)) for f in dateien]
    minx = min(b[0] for b in boxen); miny = min(b[1] for b in boxen)
    maxx = max(b[2] for b in boxen); maxy = max(b[3] for b in boxen)
    rand = int(max(maxx - minx, maxy - miny) * 0.04)
    box = (max(0, minx - rand), max(0, miny - rand), maxx + rand, maxy + rand)
    print(f"gemeinsamer Ausschnitt: {box}")

    hoehe = int(a.breite * 4 / 3)
    rahmen = []
    for f in dateien:
        im = Image.open(f).convert("RGB").crop(box)
        leinwand = Image.new("RGB", (a.breite, hoehe), (255, 255, 255))
        im.thumbnail((int(a.breite * 0.86), int(hoehe * 0.92)), Image.LANCZOS)
        leinwand.paste(im, ((a.breite - im.size[0]) // 2, (hoehe - im.size[1]) // 2))
        rahmen.append(leinwand)

    spalten = 6
    zeilen = (len(rahmen) + spalten - 1) // spalten
    blatt = Image.new("RGB", (a.breite * spalten, hoehe * zeilen), (255, 255, 255))
    for i, r in enumerate(rahmen):
        blatt.paste(r, ((i % spalten) * a.breite, (i // spalten) * hoehe))
    blatt.save(a.out, "WEBP", quality=a.qualitaet, method=6)

    kb = os.path.getsize(a.out) // 1024
    print(f"\ngeschrieben: {a.out}  {blatt.size[0]}x{blatt.size[1]}  {kb} KB")
    if kb > 250:
        print("ACHTUNG: Budget 250 KB je Produkt ueberschritten — Breite oder Qualitaet senken")
    print(f"""
CSS:
  background-size: {spalten*100}% {zeilen*100}%;
JS (Bild i von {len(rahmen)}):
  const c=i%{spalten}, r=Math.floor(i/{spalten});
  el.style.backgroundPosition = (c*{100//(spalten-1)})+'% '+(r*{100//max(1,zeilen-1)})+'%';""")

if __name__ == "__main__":
    main()
