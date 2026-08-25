// Minimal service worker — exists purely so Chrome/Android treats the admin
// portal as installable. Deliberately does NOT cache anything, since this
// tool manages live orders, stock and pricing and should never show stale
// offline data.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', event => event.waitUntil(self.clients.claim()));
self.addEventListener('fetch', event => {
  event.respondWith(fetch(event.request));
});
