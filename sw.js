const CACHE_NAME = 'phone-contract-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/manifest.json',
  '/images/page1.jpg',
  '/images/page2.jpg',
  '/images/page3.jpg'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
