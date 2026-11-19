// Bördesnack24 Web — Offline-Cache v1795075838 (generiert von deploy_web.sh).
const CACHE = 'bs24-1795075838';
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
  // Cache-First NUR für Dateien mit Versionsangabe (?v=…): Ihr Inhalt ändert
  // sich nie unter derselben Adresse. Alles andere (Schriften, Bilder,
  // FontManifest, canvaskit) heißt nach jeder Auslieferung gleich, kann sich
  // aber ändern. Befund 18.11.2026: Nach einer Auslieferung lud die neue App
  // die alte Symbolschrift aus dem Cache, das neue Auto-Symbol blieb leer.
  // Darum: frisch vom Server (Prüfung per ETag, unverändert = 304, kaum
  // Daten), und nur ohne Netz aus dem Cache.
  let versioniert = false;
  try { versioniert = new URL(req.url).searchParams.has('v'); } catch (_) {}
  if (versioniert) {
    event.respondWith((async () => {
      try {
        const hit = await caches.match(req);
        if (hit) return hit;
      } catch (_) {}
      const res = await fetch(req);
      if (res && res.ok) stash(req, res);
      return res;
    })());
    return;
  }
  event.respondWith((async () => {
    try {
      const fresh = await fetch(req, { cache: 'no-cache' });
      if (fresh && fresh.ok) stash(req, fresh);
      return fresh;
    } catch (_) {
      try {
        const hit = await caches.match(req);
        if (hit) return hit;
      } catch (_) {}
      return fetch(req);
    }
  })());
});
// Push-Benachrichtigungen (19.11.2026): Freigabe angefordert. Der Inhalt
// kommt verschlüsselt vom Server (approval-notify/webpush.ts).
self.addEventListener('push', (event) => {
  let d = {};
  try { d = event.data ? event.data.json() : {}; } catch (_) {}
  event.waitUntil(self.registration.showNotification(d.titel || 'Bördesnack24', {
    body: d.text || '',
    tag: d.tag || undefined,
    icon: 'icons/Icon-192.png',
    badge: 'icons/Icon-192.png',
    data: { url: d.url || './' },
  }));
});
self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  const ziel = (event.notification.data && event.notification.data.url) || './';
  event.waitUntil((async () => {
    const fenster = await self.clients.matchAll({ type: 'window', includeUncontrolled: true });
    for (const f of fenster) { if ('focus' in f) return f.focus(); }
    return self.clients.openWindow(ziel);
  })());
});
