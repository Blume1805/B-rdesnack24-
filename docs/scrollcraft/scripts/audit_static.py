#!/usr/bin/env python3
"""
scrollcraft — statischer Audit einer HTML-Datei.

Prueft maschinell, was maschinell pruefbar ist. Ersetzt keine Sichtpruefung.
Aufruf:  python3 audit_static.py seite.html
Rueckgabe: 1 bei mindestens einem BLOCKER, sonst 0.
"""
import re, sys, os, json

BLOCK, WARN, INFO = "BLOCKER", "WARNUNG", "HINWEIS"

VERBOTENE_AUSSAGEN = [
    (r"Immer da,\s*wenn der Hunger", "Abgeloester Claim"),
    (r"\b(drei|vier|3|4)\s+(Erloesquellen|Erlösquellen|Umsatzquellen|Quellen verdienen)",
     "Zahl von Erlösquellen genannt"),
    (r"\b24/7\b(?!.{0,40}(geplant|ab 20))", "24/7 ohne Planhinweis"),
    (r"Fresh\s?Food", "Fresh Food ist nicht Teil des Geschäftsmodells"),
    (r"\bjetzt herunterladen\b|\bApp herunterladen\b", "Download ohne Store-Freigabe"),
    (r"Lorem ipsum|Platzhaltertext|TODO|FIXME|XXX", "Platzhalter im Text"),
]

def pruefe(pfad):
    s = open(pfad, encoding="utf-8", errors="replace").read()
    befunde = []
    def f(stufe, titel, detail=""):
        befunde.append((stufe, titel, detail))

    # --- Testassets ---
    b64 = re.findall(r"data:image/[a-z+]+;base64,([A-Za-z0-9+/=]{200,})", s)
    if b64:
        kb = sum(len(x) for x in b64) * 3 // 4 // 1024
        f(BLOCK, f"{len(b64)} eingebettete Base64-Bilder ({kb} KB)",
          "Testassets vor Release entfernen")
    for marke in ("TESTBILD", "TESTSPIN", "TEMP-", "DEMO-ASSET", "PLATZHALTER"):
        if marke in s:
            f(BLOCK, f"Testasset-Markierung '{marke}' gefunden")

    # --- Verbotene Aussagen ---
    for muster, titel in VERBOTENE_AUSSAGEN:
        if re.search(muster, s, re.I):
            f(BLOCK, "Verbotene Aussage: " + titel)

    # --- Sticky-Fallen ---
    if re.search(r"(body|html)\s*\{[^}]*overflow-x\s*:\s*hidden", s, re.S):
        f(BLOCK, "overflow-x: hidden auf body/html",
          "bricht position:sticky — 'clip' verwenden")
    if re.search(r"display\s*:\s*grid[^}]*\}[^{]*\.[\w-]*card[^{]*\{[^}]*position\s*:\s*sticky", s, re.S):
        f(WARN, "Sticky-Element moeglicherweise in einem Grid-Container")

    # --- Fallbacks ---
    if "prefers-reduced-motion" not in s:
        f(BLOCK, "Keine Variante fuer reduzierte Bewegung")
    if "no-js" not in s and "<noscript" not in s:
        f(WARN, "Kein erkennbarer Fallback ohne JavaScript")

    # --- Bewegungs- und Handlerbudget ---
    handler = len(re.findall(r"addEventListener\(\s*['\"]scroll['\"]", s))
    if handler == 0:
        f(INFO, "Kein Scroll-Handler gefunden")
    elif handler > 1:
        f(WARN, f"{handler} Scroll-Handler — genau einer ist vorgesehen")
    if re.search(r"addEventListener\(\s*['\"]scroll['\"][^)]*\)(?!.{0,80}passive)", s, re.S):
        f(WARN, "Scroll-Handler moeglicherweise nicht passiv")
    if "requestAnimationFrame" not in s and handler:
        f(WARN, "Scroll-Handler ohne requestAnimationFrame-Drosselung")

    wc = len(re.findall(r"will-change\s*:", s))
    if wc:
        f(INFO, f"{wc}x will-change — nur waehrend der Animation setzen")

    anim = len(re.findall(r"@keyframes", s)) + len(re.findall(r"transition\s*:", s))
    if anim > 60:
        f(WARN, f"{anim} Bewegungsdefinitionen — Verdacht auf Ueberanimation")

    # --- Ausloesung ---
    for m in re.finditer(r"threshold\s*:\s*([0-9.]+)", s):
        if float(m.group(1)) > 0.25:
            f(WARN, f"IntersectionObserver threshold {m.group(1)} — loest bei hohen Elementen zu spaet aus")

    # --- Groessen ---
    js = "".join(re.findall(r"<script[^>]*>(.*?)</script>", s, re.S))
    if len(js) > 60000:
        f(WARN, f"JavaScript {len(js)//1024} KB unkomprimiert — Budget 40 KB komprimiert")
    knoten = len(re.findall(r"<[a-zA-Z]", s))
    if knoten > 1500:
        f(WARN, f"{knoten} DOM-Knoten — Budget 1500")

    # --- Zugaenglichkeit ---
    for m in re.finditer(r"<img\b(?![^>]*\balt=)[^>]*>", s):
        f(BLOCK, "Bild ohne alt-Attribut", m.group(0)[:70]); break
    if not re.search(r":focus-visible", s):
        f(WARN, "Keine sichtbaren Fokuszustaende definiert")
    if "Impressum" not in s:
        f(WARN, "Kein Impressum-Verweis gefunden")
    if re.search(r"color\s*:\s*(#fff|#ffffff|white)\s*;[^};]{0,90}background\s*:\s*#FDC102", s, re.I) or \
       re.search(r"background\s*:\s*#FDC102[^};]{0,90}color\s*:\s*(#fff|#ffffff|white)\b", s, re.I):
        f(BLOCK, "Weiss auf Gold — Kontrast rund 1,7:1")

    return befunde

def main():
    if len(sys.argv) < 2:
        print("Aufruf: python3 audit_static.py <datei.html>"); sys.exit(2)
    gesamt = 0
    for pfad in sys.argv[1:]:
        if not os.path.exists(pfad):
            print(f"nicht gefunden: {pfad}"); continue
        befunde = pruefe(pfad)
        print(f"\n=== {pfad} ===")
        if not befunde:
            print("  keine Befunde")
        for stufe in (BLOCK, WARN, INFO):
            for s2, titel, detail in [b for b in befunde if b[0] == stufe]:
                print(f"  [{s2}] {titel}" + (f"  — {detail}" if detail else ""))
        n = len([b for b in befunde if b[0] == BLOCK])
        gesamt += n
        print(f"  → {n} Blocker, "
              f"{len([b for b in befunde if b[0]==WARN])} Warnungen")
    print(f"\nErgebnis: {'RELEASE GESPERRT' if gesamt else 'keine Blocker'}")
    sys.exit(1 if gesamt else 0)

if __name__ == "__main__":
    main()
