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
# GitHub-Pages-Repo-Präfix. Repo liegt unter https://<user>.github.io/<REPO>/.
REPO="${REPO:-B-rdesnack24-}"
# Wenn SUBPATH leer/unset → App liegt am Root des Repos (empfohlen):
# https://<user>.github.io/<REPO>/ zeigt direkt die App, kein Redirect nötig.
# Ein Sub-Path wird nur noch benutzt, wenn explizit gesetzt (SUBPATH=demo o. ä.).
SUBPATH="${SUBPATH-}"

# Eigene Domain (GitHub Pages Custom Domain).
#
# Leer  → App liegt unter https://<user>.github.io/<REPO>/, base-href
#         braucht deshalb das Repo-Präfix.
# Gesetzt → App liegt an der Wurzel der eigenen Domain, base-href ist "/",
#         und gh-pages braucht eine CNAME-Datei mit dem Domainnamen.
#
# WICHTIG, Reihenfolge: Erst müssen die DNS-Einträge stehen und auf GitHub
# zeigen. Wird hier vorher umgestellt, sucht der alte github.io-Aufruf seine
# Dateien unter "/" statt unter "/<REPO>/" und die App lädt nicht mehr —
# weiss geladene Seite, keine Fehlermeldung. Deshalb ist der Schalter
# standardmässig AUS und wird bewusst gesetzt:
#
#   CUSTOM_DOMAIN=boerdesnack24.de bash scripts/deploy_web.sh
CUSTOM_DOMAIN="${CUSTOM_DOMAIN-}"

if [ -n "$CUSTOM_DOMAIN" ]; then
  BASE_HREF="/"
  OEFFENTLICHE_URL="https://$CUSTOM_DOMAIN/"
elif [ -z "$SUBPATH" ]; then
  BASE_HREF="/$REPO/"
  OEFFENTLICHE_URL="https://blume1805.github.io/$REPO/"
else
  BASE_HREF="/$REPO/$SUBPATH/"
  OEFFENTLICHE_URL="https://blume1805.github.io/$REPO/$SUBPATH/"
fi

echo "▶︎ Flutter Web-Build ($ENV_FILE, base=$BASE_HREF)"
# APP_PUBLIC_URL muss zur ausgelieferten Adresse passen: Der Wert landet in
# Empfehlungslinks und in verlinkten PDFs. Steht dort die alte Adresse,
# verschickt ein Kunde Links, die auf die Vorgängerdomain zeigen.
( cd "$MOBILE" && flutter build web --release \
    --base-href="$BASE_HREF" \
    --dart-define=APP_PUBLIC_URL="$OEFFENTLICHE_URL" \
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

TS=$(date +%s)

echo "▶︎ flutter_service_worker.js: versionierter Offline-Cache (PWA)"
# Ersetzt den Flutter-Standard-SW durch einen kleinen, deterministischen
# Worker: HTML läuft IMMER Network-First (offline: Cache-Fallback), statische
# Assets Cache-First innerhalb eines pro-Deploy versionierten Caches. Beim
# Aktivieren einer neuen Version werden alle Alt-Caches gelöscht — das
# Ghost-Content-Problem des früheren Flutter-SW kann so nicht auftreten.
# SICHERHEITSREGELN dieses Workers (Lehre aus dem iOS-Boot-Hänger):
#  * KEIN clients.claim() — der Worker übernimmt eine bereits ladende Seite
#    nie mitten im Boot; er kontrolliert erst die nächste Navigation.
#  * Cache-API-Fehler dürfen NIE eine Response verhindern: jeder Pfad endet
#    notfalls in einem nativen fetch(req); cache.put läuft fire-and-forget.
#    (iOS Safari wirft bei Quota/Private-Mode/In-App-Kontext — der alte
#    Worker awaited put() und brach damit den main.dart.js-Download ab.)
cat > "$BUILD_DIR/flutter_service_worker.js" <<JS
// Bördesnack24 Web — Offline-Cache v${TS} (generiert von deploy_web.sh).
const CACHE = 'bs24-${TS}';
self.addEventListener('install', () => { self.skipWaiting(); });
self.addEventListener('activate', (event) => {
  event.waitUntil((async () => {
    try {
      const keys = await caches.keys();
      await Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)));
    } catch (_) {}
  })());
});
function stash(req, res) {
  try {
    const copy = res.clone();
    caches.open(CACHE).then((c) => c.put(req, copy)).catch(() => {});
  } catch (_) {}
}
self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;
  let sameOrigin = false;
  try { sameOrigin = new URL(req.url).origin === location.origin; } catch (_) {}
  if (!sameOrigin) return;
  if (req.mode === 'navigate') {
    event.respondWith((async () => {
      try {
        const fresh = await fetch(req);
        stash(req, fresh);
        return fresh;
      } catch (_) {
        try {
          const hit = await caches.match(req);
          if (hit) return hit;
        } catch (_) {}
        return fetch(req);
      }
    })());
    return;
  }
  event.respondWith((async () => {
    try {
      const hit = await caches.match(req);
      if (hit) return hit;
    } catch (_) {}
    const res = await fetch(req);
    if (res && res.ok) stash(req, res);
    return res;
  })());
});
JS
echo "  ✓ generiert (Cache bs24-${TS})"

echo "▶︎ Cache-Buster: $TS"
sed -i "s/__BUILD_V__/$TS/g" "$BUILD_DIR/index.html"
# main.dart.js im Bootstrap versionieren, damit Safari/Chrome die neue
# Version garantiert lädt, auch wenn die alte main.dart.js im HTTP-Cache
# liegt. flutter_bootstrap.js selbst hat schon ?v= aus dem HTML.
sed -i "s|\"mainJsPath\":\"main.dart.js\"|\"mainJsPath\":\"main.dart.js?v=$TS\"|g" "$BOOT"

echo "▶︎ Deploy nach gh-pages"
CURRENT_BRANCH=$(git -C "$ROOT" rev-parse --abbrev-ref HEAD)
STAGE="$(mktemp -d)"
cp -r "$BUILD_DIR"/. "$STAGE/"

git -C "$ROOT" checkout gh-pages

if [ -z "$SUBPATH" ]; then
  # App direkt am Repo-Root — kein Redirect nötig, kein In-App-Browser-
  # blockiert-Redirect-Problem.  Alte Sub-Path-Deploys (app-live/app/live/
  # go/v2/…) bleiben liegen; wir überschreiben sie nicht, damit Bookmarks
  # zu älteren Versionen weiter funktionieren.
  # Alte Kern-Dateien am Root wegräumen, damit unser Build sie ersetzt:
  find "$ROOT" -maxdepth 1 -type f \( -name '*.html' -o -name '*.js' -o -name '*.json' -o -name '*.png' -o -name '*.ico' -o -name '*.txt' -o -name '.last_build_id' \) -delete
  rm -rf "$ROOT/assets" "$ROOT/canvaskit" "$ROOT/icons" "$ROOT/marketing"
  # Neuen Build am Root ablegen.
  cp -r "$STAGE/." "$ROOT/"
  # Cache-Buster über eine sichtbare Version-Datei:
  echo "$TS" > "$ROOT/version.txt"
  # CNAME teilt GitHub Pages die eigene Domain mit. Ohne die Datei fällt
  # Pages nach dem nächsten Deploy auf die github.io-Adresse zurück und die
  # eigene Domain liefert 404 — die Datei gehört deshalb in JEDEN Deploy,
  # nicht einmalig von Hand angelegt.
  if [ -n "$CUSTOM_DOMAIN" ]; then
    echo "$CUSTOM_DOMAIN" > "$ROOT/CNAME"
    echo "  ✓ CNAME: $CUSTOM_DOMAIN"
  fi
  # WICHTIG: NIEMALS `git add -A` verwenden — sonst landen untracked Sources
  # (apps/, .dart_tool/, scripts/ …) im gh-pages-Commit. Explizit nur die
  # Build-Artefakte stagen, plus `git add -u` für gelöschte Alt-Dateien.
  # -f zwingt neue Assets an .gitignore vorbei: die .gitignore aus dem
  # Feature-Branch trägt `/assets/`, damit Build-Artefakte dort nicht liegen
  # bleiben — ohne -f würden neue Bilder (z. B. brand_hero_wide.png) beim
  # gh-pages-Commit still verschluckt.
  # Jede Datei einzeln stagen: git add bricht bei EINEM fehlenden Pathspec
  # komplett ab und fügt dann GAR NICHTS hinzu — das hat schon einmal die
  # dart2js-part-Dateien still vom Deploy ausgeschlossen. Einzeln + laut.
  ( cd "$ROOT" && \
    for f in index.html 404.html manifest.json favicon.png flutter.js \
      flutter_bootstrap.js flutter_service_worker.js main.dart.js \
      main.dart.js_*.part.js \
      version.json version.txt assets canvaskit icons marketing .last_build_id \
      roboto-regular.ttf CNAME; do
      [ -e "$f" ] && git add -f -- "$f" || echo "  (skip: $f fehlt)"
    done; \
    git add -u )
else
  # Sub-Path-Deploy (Legacy / Preview).  Neben der Root-App liegen lassen.
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
fi

git -C "$ROOT" commit -m "deploy: web build v=${TS}" || echo "  (nichts zu committen)"
git -C "$ROOT" push origin gh-pages
git -C "$ROOT" checkout "$CURRENT_BRANCH"
rm -rf "$STAGE"

# Aufräumen: git checkout löscht keine untracked Files. Die Deploy-Artefakte
# (assets/, canvaskit/, icons/, version.txt …) am Repo-Root sind aber Reste
# vom gh-pages-Build und dürfen NICHT im Feature-Branch liegen bleiben —
# sonst meldet der Stop-Hook untracked Files. Alles wegräumen, was der
# Feature-Branch nicht tracked.
if [ -z "$SUBPATH" ]; then
  ( cd "$ROOT" && \
    rm -rf assets canvaskit icons marketing && \
    rm -f  index.html 404.html main.dart.js main.dart.js_*.part.js \
           flutter.js flutter_bootstrap.js \
           flutter_service_worker.js manifest.json favicon.png version.json \
           version.txt .last_build_id roboto-regular.ttf )
fi

echo "✓ Deploy fertig — ${OEFFENTLICHE_URL} (v=${TS})"
