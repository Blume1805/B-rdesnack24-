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

echo "▶︎ Post-Build-Patch: lokales CanvasKit + Service-Worker deaktivieren"
python3 - <<PY
import re, sys
p = "$BOOT"
s = open(p).read()
# 1) Aufruf des Loaders mit unserem config-Block ersetzen — inklusive
#    komplettem Entfernen der serviceWorkerSettings.  Der bisher registrierte
#    Flutter-Service-Worker cached HTML/JS aggressiv und liefert nach einem
#    Deploy auf zukünftigen Besuchen immer noch die alte Version aus, bevor
#    unser HTML-Loader ihn wieder abmelden kann → Safari zeigt Ghost-Inhalte.
#    Für die Demo brauchen wir keinen Offline-Cache — deshalb ganz raus.
pattern = re.compile(r"_flutter\.loader\.load\(\{[^}]*serviceWorkerSettings[^}]*\}[^)]*\}\);", re.S)
replacement = "_flutter.loader.load({ config: { canvasKitBaseUrl: 'canvaskit/' } });"
if not pattern.search(s):
    if "canvasKitBaseUrl" in s:
        print("  (bereits gepatcht)")
    else:
        sys.exit("  ! _flutter.loader.load-Muster nicht gefunden — Flutter-Version prüfen")
else:
    s2 = pattern.sub(replacement, s, count=1)
    open(p, "w").write(s2)
    print("  ✓ canvasKitBaseUrl gesetzt, serviceWorkerSettings entfernt")
PY

echo "▶︎ flutter_service_worker.js entschärfen (harte Auto-Deregistrierung)"
cat > "$BUILD_DIR/flutter_service_worker.js" <<'JS'
// Kein aktives Service-Worker-Caching in der Web-Demo. Wenn Safari diese
// Datei aus altem Cache lädt, meldet sie den Worker sofort ab und leert
// den Cache — die nächste Navigation kommt garantiert vom Server.
self.addEventListener('install', (event) => { self.skipWaiting(); });
self.addEventListener('activate', (event) => {
  event.waitUntil((async () => {
    try {
      const keys = await caches.keys();
      await Promise.all(keys.map((k) => caches.delete(k)));
      await self.registration.unregister();
      const clients = await self.clients.matchAll();
      for (const c of clients) c.navigate(c.url);
    } catch (_) {}
  })());
});
JS
echo "  ✓ neutralisiert"

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
