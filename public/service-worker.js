const CACHED_FILES = [
  "./",
  "./index.html",
  "./styles.css",
  "./index.js",
  "./db.js",
  "./icons/icon-192x192.png",
  "./icons/icon-512x512.png",
];

// install event handler
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open("static").then((cache) => {
      return cache.addAll(CACHED_FILES);
    })
  );
  console.log("Install");
  self.skipWaiting();
});

// retrieve assets from cache
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
