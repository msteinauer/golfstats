// GolfLog service worker — intentionally does NOT cache anything.
// Its only job is to exist with a fetch handler so Android/Chrome treats
// this as an installable app. Every request just passes straight through
// to the network, so there is zero risk of ever serving stale content.

self.addEventListener("install", (event) => {
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener("fetch", (event) => {
  event.respondWith(fetch(event.request));
});
