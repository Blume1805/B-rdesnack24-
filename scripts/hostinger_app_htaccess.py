#!/usr/bin/env python3
"""Schreibt die .htaccess für die App bei Hostinger (Apache).

Aufruf:  python3 scripts/hostinger_app_htaccess.py apps/mobile/build/web

Warum ein Skript: Die Sicherheitsregel für Skripte (Content-Security-Policy)
erlaubt Inline-Skripte nicht pauschal, sondern nur die drei aus
apps/mobile/web/index.html, jeweils über ihre SHA-256-Prüfsumme. Die
Prüfsummen hängen vom Wortlaut ab und werden deshalb bei jedem Bau neu aus
der fertigen index.html berechnet. Ändert jemand ein Inline-Skript, stimmt
die Regel trotzdem.

Erlaubte fremde Adressen (Stand 16.11.2026, im Code gesucht):
  * Supabase-Projekt (Daten, Anmeldung, Echtzeit über wss)
  * api.pwnedpasswords.com (Passwortprüfung, nur Präfix der Prüfsumme)
Google Maps und die Marketing-PDFs öffnen sich als neue Seite, nicht als
Abruf aus der App, und brauchen deshalb keinen Eintrag.
"""
import base64
import hashlib
import re
import sys
from pathlib import Path

SUPABASE = "https://nnfsyuglkqycwenwxmuw.supabase.co"


def inline_hashes(html: str) -> list[str]:
    hashes = []
    for m in re.finditer(r"<script(?P<attr>[^>]*)>(?P<body>.*?)</script>", html, re.S | re.I):
        if re.search(r"\bsrc\s*=", m.group("attr"), re.I):
            continue
        digest = hashlib.sha256(m.group("body").encode("utf-8")).digest()
        hashes.append("'sha256-" + base64.b64encode(digest).decode() + "'")
    return hashes


def csp(hashes: list[str]) -> str:
    wss = SUPABASE.replace("https://", "wss://")
    teile = [
        "default-src 'self'",
        # wasm-unsafe-eval: CanvasKit ist WebAssembly; ohne das startet die App nicht.
        "script-src 'self' 'wasm-unsafe-eval' " + " ".join(hashes),
        "script-src-attr 'none'",
        # Flutter setzt Stil-Attribute zur Laufzeit.
        "style-src 'self' 'unsafe-inline'",
        "img-src 'self' data: blob: " + SUPABASE,
        "font-src 'self' data:",
        "connect-src 'self' " + SUPABASE + " " + wss + " https://api.pwnedpasswords.com",
        "worker-src 'self' blob:",
        "manifest-src 'self'",
        "media-src 'self' blob:",
        "frame-src 'none'",
        "frame-ancestors 'none'",
        "object-src 'none'",
        "base-uri 'self'",
        "form-action 'self'",
        "upgrade-insecure-requests",
    ]
    return "; ".join(teile)


def htaccess(policy: str) -> str:
    return f"""# Erzeugt von scripts/hostinger_app_htaccess.py — nicht von Hand ändern.
Options -Indexes -MultiViews
DirectoryIndex index.html

RewriteEngine On
RewriteCond %{{HTTPS}} !=on
RewriteRule ^ https://%{{HTTP_HOST}}%{{REQUEST_URI}} [R=301,L,NE]
# Unbekannte Pfade an die App geben (wie 404.html auf GitHub Pages).
RewriteCond %{{REQUEST_FILENAME}} !-f
RewriteCond %{{REQUEST_FILENAME}} !-d
RewriteRule ^ index.html [L]

Header always set Strict-Transport-Security "max-age=31536000; includeSubDomains"
Header always set X-Content-Type-Options "nosniff"
Header always set Referrer-Policy "strict-origin-when-cross-origin"
Header always set Permissions-Policy "camera=(self), microphone=(), geolocation=(), payment=()"
Header always set X-Frame-Options "DENY"
Header always set Content-Security-Policy "{policy}"

AddType application/wasm .wasm
AddType application/manifest+json .webmanifest

# Startdateien nie zwischenspeichern, sonst sehen Nutzer alte Versionen.
<FilesMatch "^(index\\.html|flutter_bootstrap\\.js|flutter_service_worker\\.js|version\\.json|manifest\\.json)$">
  Header always set Cache-Control "no-cache, no-store, must-revalidate"
</FilesMatch>
<FilesMatch "\\.(?:woff2?|ttf|otf|png|jpe?g|webp|svg|ico|wasm)$">
  Header always set Cache-Control "public, max-age=604800"
</FilesMatch>
"""


def main() -> int:
    if len(sys.argv) != 2:
        print(__doc__)
        return 2
    ziel = Path(sys.argv[1])
    html = (ziel / "index.html").read_text(encoding="utf-8")
    hashes = inline_hashes(html)
    if not hashes:
        print("Keine Inline-Skripte gefunden — ungewöhnlich, bitte prüfen.", file=sys.stderr)
        return 1
    policy = csp(hashes)
    (ziel / ".htaccess").write_text(htaccess(policy), encoding="utf-8")
    print(f".htaccess geschrieben ({len(hashes)} Inline-Skripte erlaubt)")
    print("Content-Security-Policy:", policy)
    return 0


if __name__ == "__main__":
    sys.exit(main())
