// Bördesnack24 Web — Offline-Cache v1787734831 (generiert von deploy_web.sh).
const CACHE = 'bs24-1787734831';
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
