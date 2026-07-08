#!/usr/bin/env bash
# Build + deploy des Flutter-Web-Bundles nach gh-pages.
#
# Warum ein Skript und nicht nur `flutter build web`?
# Zwei Post-Build-Fixes sind erforderlich, ohne die die App auf mancher
# Mobilfunk-/WiFi-Verbindung überhaupt nicht startet:
#
# 1. **Lokales CanvasKit.** `flutter_bootstrap.js` versucht CanvasKit standard-
#    mäßig von `https://www.gstatic.com/flutter-canvaskit/…` zu laden. Ist der
#    Fetch aus irgend­einem Grund blockiert (restriktives Corporate-WiFi,
#    langsames Netz, CDN-Ausfall), wirft die Engine
#    `TypeError: Failed to fetch dynamically imported module` und der HTML-
#    Loader hängt endlos. Der Build-Ordner enthält jedoch `canvaskit/canvaskit.js`.
#    Wir patchen `flutter_bootstrap.js`, damit die Engine dieses lokale
#    Bundle statt der CDN-URL nutzt.
#
# 2. **Cache-Buster.** `index.html` enthält `__BUILD_V__`, den wir gegen
#    einen Unix-Timestamp tauschen, damit Safari die neue Version nicht
#    aus dem HTTP-Cache serviert.

set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
MOBILE="$ROOT/apps/mobile"
ENV_FILE="${ENV_FILE:-$MOBILE/env/demo.json}"
SUBPATH="${SUBPATH:-app-live}"

echo "▶︎ Flutter Web-Build ($ENV_FILE, base=/$SUBPATH/)"
( cd "$MOBILE" && flutter build web --release \
    --base-href="/$SUBPATH/" \
    --dart-define-from-file="$ENV_FILE" )

BUILD_DIR="$MOBILE/build/web"
BOOT="$BUILD_DIR/flutter_bootstrap.js"

echo "▶︎ Post-Build-Patch: lokales CanvasKit erzwingen"
python3 - <<PY
import sys
p = "$BOOT"
s = open(p).read()
needle = "_flutter.loader.load({\n  serviceWorkerSettings: {"
replacement = "_flutter.loader.load({\n  config: { canvasKitBaseUrl: 'canvaskit/' },\n  serviceWorkerSettings: {"
if needle not in s:
    if "canvasKitBaseUrl" in s:
        print("  (bereits gepatcht)")
    else:
        sys.exit("  ! Muster nicht gefunden — Flutter-Version prüfen")
else:
    open(p, "w").write(s.replace(needle, replacement, 1))
    print("  ✓ canvasKitBaseUrl gesetzt")
PY

TS=$(date +%s)
echo "▶︎ Cache-Buster: $TS"
sed -i "s/__BUILD_V__/$TS/g" "$BUILD_DIR/index.html"

echo "▶︎ Deploy nach gh-pages"
CURRENT_BRANCH=$(git -C "$ROOT" rev-parse --abbrev-ref HEAD)
STAGE="$(mktemp -d)"
cp -r "$BUILD_DIR"/. "$STAGE/"

git -C "$ROOT" checkout gh-pages
rm -rf "$ROOT/$SUBPATH"
cp -r "$STAGE" "$ROOT/$SUBPATH"

cat > "$ROOT/index.html" <<HTML
<!DOCTYPE html>
<html lang="de"><head>
<meta charset="UTF-8">
<meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate">
<meta http-equiv="refresh" content="0; url=./$SUBPATH/?v=${TS}">
<title>Bördesnack24</title>
<style>body{margin:0;background:#14110E;color:#FDC102;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif;display:flex;align-items:center;justify-content:center;min-height:100vh}a{color:#FDC102}</style>
</head><body>
<div style="text-align:center">
<div style="font-weight:700;letter-spacing:2px;font-size:18px">BÖRDESNACK24</div>
<p>Weiterleiten …</p>
<p><a href="./$SUBPATH/?v=${TS}">Direkt öffnen</a></p>
</div>
<script>location.replace('./$SUBPATH/?v=${TS}');</script>
</body></html>
HTML
cp "$ROOT/index.html" "$ROOT/404.html"

git -C "$ROOT" add "index.html" "404.html" "$SUBPATH/"
git -C "$ROOT" commit -m "deploy: web build v=${TS}" || echo "  (nichts zu committen)"
git -C "$ROOT" push origin gh-pages
git -C "$ROOT" checkout "$CURRENT_BRANCH"
rm -rf "$STAGE"

echo "✓ Deploy fertig — https://blume1805.github.io/B-rdesnack24-/ (v=${TS})"
