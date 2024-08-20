const CACHE_NAME = 'golf-leaderboard-cache-v1';
const urlsToCache = [
    '/',
    '/index.html',
    '/day1.html',
    '/day2.html',
    '/day3.html',
    '/player-profile.html',
    '/styles.css',
    '/app.js',
    '/images/josh.jpg',
    '/icons/icon-192x192.png',
    '/icons/icon-512x512.png'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                return cache.addAll(urlsToCache);
            })
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                if (response) {
                    return response;
                }
                return fetch(event.request);
            })
    );
});
