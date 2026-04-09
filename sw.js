const CACHE_NAME = 'rhythm-trainer-v11-cache';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './manifest.json',
  './lib/react.min.js',
  './lib/react-dom.min.js',
  './lib/babel.min.js',
  './lib/tone.js',
  './images/a1.gif',
  './images/a11.gif',
  './images/a2.gif',
  './images/a21.gif',
  './images/a22.gif',
  './images/a3.gif',
  './images/a31.gif',
  './images/a32.gif',
  './images/a33.gif',
  './images/a34.gif',
  './images/a4.gif',
  './images/a43.gif',
  './images/a5.gif',
  './images/a51.gif',
  './images/a6.gif',
  './images/a62.gif',
  './images/a7.gif',
  './images/a8.gif',
  './images/a9.gif',
  './images/a91.gif',
  './images/a92.gif',
  './images/a93.gif',
  './images/icon-192.png',
  './images/icon-512.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('Caching assets...');
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
