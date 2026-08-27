self.addEventListener('install', (event) => {
    console.log('Service Worker instalado correctamente.');
});

self.addEventListener('fetch', (event) => {
    // Permite que la app funcione de forma fluida
    event.respondWith(fetch(event.request).catch(() => caches.match(event.request)));
});