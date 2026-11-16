#!/usr/bin/env python3
"""Sucht in einem fertigen Web-Bau nach Server-Schlüsseln.

Aufruf:  python3 scripts/schluessel_im_bau_suchen.py apps/mobile/build/web
Rückgabe 1, wenn ein echter Schlüssel gefunden wird:
  * neuer Server-Schlüssel  sb_secret_<mindestens 16 Zeichen>
  * altes JWT mit "role": "service_role" in den Nutzdaten
Der öffentliche Schlüssel (sb_publishable_… bzw. JWT mit role anon) ist
erlaubt; er steht absichtlich in der App. Reiner Bibliothekstext wie der
Vergleich auf das Präfix "sb_secret_" zählt nicht.
"""
import base64, json, re, sys
from pathlib import Path

GEHEIM = re.compile(rb"sb_secret_[A-Za-z0-9_-]{16,}")
JWT = re.compile(rb"eyJ[A-Za-z0-9_-]{8,}\.(eyJ[A-Za-z0-9_-]{8,})\.[A-Za-z0-9_-]{8,}")

def rolle(nutzlast: bytes) -> str:
    try:
        roh = base64.urlsafe_b64decode(nutzlast + b"=" * (-len(nutzlast) % 4))
        return str(json.loads(roh).get("role", ""))
    except Exception:
        return ""

funde = []
for datei in Path(sys.argv[1]).rglob("*"):
    if not datei.is_file() or datei.stat().st_size > 50_000_000:
        continue
    inhalt = datei.read_bytes()
    if GEHEIM.search(inhalt):
        funde.append(f"{datei}: sb_secret_-Schlüssel")
    for m in JWT.finditer(inhalt):
        if rolle(m.group(1)) == "service_role":
            funde.append(f"{datei}: JWT mit Rolle service_role")
if funde:
    print("Server-Schlüssel im Bau gefunden:\n  " + "\n  ".join(funde))
    sys.exit(1)
print("Kein Server-Schlüssel im Bau.")
