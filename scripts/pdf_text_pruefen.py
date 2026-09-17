"""PDF-Textpruefung fuer die Marketing-Unterlagen.

Wozu
----
Die PDF unter docs/marketing/ werden aus den HTML-Quellen daneben gedruckt
(Headless-Chromium). Wer eine Preisangabe aendert, muss pruefen koennen, dass
die alte Angabe wirklich aus dem PDF verschwunden ist - eine Preisangabe, die
nicht mehr stimmt, waere irrefuehrende Werbung (Paragraf 5 UWG).

Warum nicht einfach grep
------------------------
Chromium schreibt Text als Hex-Strings mit Subset-Fonts. Ein `grep "0,99"`
auf der PDF-Datei findet deshalb NIE etwas - auch dann nicht, wenn die Angabe
gut sichtbar auf der Seite steht. Am 2026-09-16 ist genau dieser Fehler
passiert: Die erste Pruefung meldete "sauber", obwohl sie nichts gelesen
hatte. Dieses Skript loest die /ToUnicode-Tabellen auf und bricht ab, wenn
keine gefunden wird - lieber kein Ergebnis als ein falsches.

Aufruf
------
    python3 scripts/pdf_text_pruefen.py <datei.pdf> [suchbegriff ...]

Die Zeile ZEICHEN: n zeigt, wie viel Text tatsaechlich gelesen wurde. Steht
dort 0, ist das Ergebnis wertlos, egal was darunter steht.

Neu drucken nach einer Aenderung an der HTML-Quelle:
    <chromium> --headless --no-sandbox --disable-gpu --no-pdf-header-footer \
      --print-to-pdf=<ziel.pdf> --virtual-time-budget=5000 file://<quelle.html>
Danach die Kopie unter apps/mobile/web/marketing/ mitziehen - sie wird mit
dem Web-Build ausgeliefert.
"""
import re, sys, zlib

def objects(data):
    """Alle indirekten Objekte als {nummer: (dict_text, stream_bytes|None)}."""
    out = {}
    for m in re.finditer(rb'(\d+)\s+(\d+)\s+obj(.*?)endobj', data, re.S):
        num = int(m.group(1)); body = m.group(3)
        sm = re.search(rb'stream\r?\n(.*?)endstream', body, re.S)
        raw = None
        if sm:
            raw = sm.group(1)
            if b'/FlateDecode' in body:
                try: raw = zlib.decompress(raw)
                except Exception:
                    try: raw = zlib.decompressobj().decompress(raw)
                    except Exception: raw = b''
        out[num] = (body.decode('latin-1', 'replace'), raw)
    return out

def parse_tounicode(text):
    """bfchar/bfrange -> {code:int -> str}."""
    cmap = {}
    for blk in re.findall(r'beginbfchar(.*?)endbfchar', text, re.S):
        for src, dst in re.findall(r'<([0-9A-Fa-f]+)>\s*<([0-9A-Fa-f]+)>', blk):
            cmap[int(src, 16)] = _utf16(dst)
    for blk in re.findall(r'beginbfrange(.*?)endbfrange', text, re.S):
        for lo, hi, dst in re.findall(
                r'<([0-9A-Fa-f]+)>\s*<([0-9A-Fa-f]+)>\s*<([0-9A-Fa-f]+)>', blk):
            lo, hi, base = int(lo, 16), int(hi, 16), int(dst, 16)
            for i in range(lo, hi + 1):
                cmap[i] = chr(base + (i - lo))
    return cmap

def _utf16(h):
    b = bytes.fromhex(h if len(h) % 2 == 0 else '0' + h)
    try: return b.decode('utf-16-be')
    except Exception: return ''

def extract(path):
    data = open(path, 'rb').read()
    objs = objects(data)
    # Alle ToUnicode-CMaps zusammenfassen. Fuer eine reine Suche nach
    # Zeichenfolgen genuegt die Vereinigung; Font-Wechsel sind dafuer egal,
    # solange wir keine exakte Reihenfolge brauchen.
    cmap = {}
    for num, (body, raw) in objs.items():
        if raw and (b'beginbfchar' in raw or b'beginbfrange' in raw):
            cmap.update(parse_tounicode(raw.decode('latin-1', 'replace')))
    if not cmap:
        raise SystemExit('FEHLER: keine /ToUnicode-Tabelle gefunden - '
                         'Extraktion waere wertlos, Pruefung abgebrochen.')
    chunks = []
    for num, (body, raw) in objs.items():
        if not raw: continue
        t = raw.decode('latin-1', 'replace')
        if 'Tj' not in t and 'TJ' not in t: continue
        for hexs in re.findall(r'<([0-9A-Fa-f\s]+)>', t):
            h = re.sub(r'\s', '', hexs)
            if len(h) % 4: continue
            chunks.append(''.join(
                cmap.get(int(h[i:i+4], 16), '') for i in range(0, len(h), 4)))
    # OHNE Trennzeichen zusammensetzen. Chromium schreibt je nach Schriftgrad
    # und Kerning mal ganze Woerter, mal einzelne Buchstaben als eigenen
    # Hex-String. Ein Leerzeichen dazwischen zerlegte "Kuendigung" in
    # "K u e n d i g u n g", und jede Suche liefe ins Leere - der zweite
    # Fehlschlag derselben Art am 2026-09-16/17. Echte Wortabstaende stehen
    # als eigene Glyphe im Strom und bleiben erhalten.
    return ''.join(chunks)

def main(argv):
    if len(argv) < 2:
        raise SystemExit(__doc__)
    erwartet = None
    args = []
    it = iter(argv[1:])
    for a in it:
        if a == '--erwartet':
            erwartet = next(it, None)
        else:
            args.append(a)

    txt = extract(args[0])
    print('ZEICHEN:', len(txt))

    # Gegenprobe: Ein Suchbegriff, der drin sein MUSS. Ohne ihn ist die
    # Extraktion nicht belegt, und ein "nicht gefunden" waere wertlos.
    if erwartet is not None:
        if erwartet not in txt:
            raise SystemExit(
                f'ABBRUCH: Gegenprobe {erwartet!r} nicht gefunden. Die '
                f'Extraktion ist nicht verlaesslich, das Ergebnis waere '
                f'wertlos.')
        print(f'GEGENPROBE ok: {erwartet!r} gefunden')

    fehler = 0
    for probe in args[1:]:
        drin = probe in txt
        print(('GEFUNDEN  ' if drin else 'nicht da  ') + repr(probe))
    return fehler


if __name__ == '__main__':
    raise SystemExit(main(sys.argv))
