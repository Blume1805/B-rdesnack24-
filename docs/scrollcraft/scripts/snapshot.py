#!/usr/bin/env python3
"""
scrollcraft — Screenshots einer Seite in allen Groessenklassen.

Belegt den Ist-Zustand vor einer Aenderung (Baseline) und danach.
Ohne Baseline ist "keine Regression" eine Behauptung.

Aufruf:  python3 snapshot.py seite.html --label vorher
Benoetigt wkhtmltoimage.
"""
import subprocess, sys, os, argparse, shutil

KLASSEN = {"desktop": (1440, 900), "tablet": (900, 1200),
           "mobil": (390, 844), "mobil-quer": (844, 390)}

def main():
    p = argparse.ArgumentParser()
    p.add_argument("datei")
    p.add_argument("--label", default="snapshot")
    p.add_argument("--out", default="snapshots")
    a = p.parse_args()

    if not shutil.which("wkhtmltoimage"):
        sys.exit("wkhtmltoimage nicht gefunden")
    os.makedirs(a.out, exist_ok=True)
    quelle = a.datei if a.datei.startswith("http") else "file://" + os.path.abspath(a.datei)

    for name, (b, h) in KLASSEN.items():
        ziel = os.path.join(a.out, f"{a.label}-{name}.png")
        subprocess.run(["wkhtmltoimage", "--width", str(b), "--height", str(h),
                        "--enable-javascript", "--javascript-delay", "1200",
                        "--quality", "88", quelle, ziel], check=False)
        print(("ok   " if os.path.exists(ziel) else "FEHLT ") + ziel)

    print("\nHinweis: Screenshots erfassen nur den Ausgangszustand der Seite.")
    print("Scrollabhaengige Zustaende sind von Hand zu pruefen (scene-qa.md).")

if __name__ == "__main__":
    main()
