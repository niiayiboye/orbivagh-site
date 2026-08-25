// Minimal service worker — exists purely so Chrome/Android treats this page
// as installable. Deliberately does NOT cache anything: this tool is
// data-sensitive (orders, prices, balance), so every load should always
// fetch fresh rather than risk showing stale offline data.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', event => event.waitUntil(self.clients.claim()));
self.addEventListener('fetch', event => {
  event.respondWith(fetch(event.request));
});
