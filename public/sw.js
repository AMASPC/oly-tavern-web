/* eslint-disable no-restricted-globals */
const CACHE_NAME = "tavern-offline-v1";
const OFFLINE_URL = "/";

// Pre-cache the homepage shell on install
globalThis.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => cache.addAll([OFFLINE_URL, "/health.json"]))
      .then(() => globalThis.skipWaiting())
  );
});

// Clean old caches on activate
globalThis.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((names) =>
        Promise.all(
          names
            .filter((name) => name !== CACHE_NAME)
            .map((name) => caches.delete(name))
        )
      )
      .then(() => globalThis.clients.claim())
  );
});

// Network-first strategy with offline fallback
globalThis.addEventListener("fetch", (event) => {
  // Only handle GET requests for same-origin navigation
  if (event.request.method !== "GET") return;

  // Skip non-navigation requests (let browser handle JS/CSS/images normally)
  if (event.request.mode !== "navigate") return;

  event.respondWith(
    fetch(event.request)
      .then((response) => {
        // Cache a fresh copy of the page
        const clone = response.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(OFFLINE_URL, clone));
        return response;
      })
      .catch(() => {
        // Network failed — serve from cache
        return caches.match(OFFLINE_URL);
      })
  );
});
