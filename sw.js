var CACHE_VERSION = '12';
var CACHE_FILES = [
    '/',
];

self.addEventListener('install', function(event) {    
    console.log('Install');    
    event.waitUntil(
        caches.open(CACHE_VERSION).then(function(cache) {
            console.log('Caching files: ' + JSON.stringify(CACHE_FILES));
            cache.addAll(CACHE_FILES);            
        })                
    );
});

self.addEventListener("fetch", function(event) {            
    console.log('Fetch');
    event.respondWith(
        caches.match(event.request).then(function(cached) {
            if (cached) {
                console.log('Loaded from cache: ' + event.request.url);
                return cached;
            } else {
                console.log('Loaded from network: ' + event.request.url);
                return fetch(event.request).then(function(response) {                                      
                    if(!response || response.status !== 200 || response.type !== 'basic' || event.request.method != 'GET') {
                        return response;
                    }
                    var responseToCache = response.clone();
                    caches.open(CACHE_VERSION).then(function(cache) {
                        console.log('Caching file: ' + event.request.url);
                        cache.put(event.request, responseToCache);
                    });
                    return response;
                });
            }
        }) 
    );
});

self.addEventListener('activate', function(event) {
    console.log('Activate');
    event.waitUntil(
        caches.keys().then(function(cacheVersions) {            
            cacheVersions.map(function(cacheVersion) {          
                if (cacheVersion == CACHE_VERSION) return;
                console.log('Cleaning ' + cacheVersion);
                return caches.delete(cacheVersion);
            })
        })
    );
});