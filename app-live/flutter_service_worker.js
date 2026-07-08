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
