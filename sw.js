var CACHE_VERSION = 'extra-muros V1';
var CACHE_FILES = [        
    'html/etape1.html',
    'html/etape2.html',
    'html/etape3.html',
    'html/etape4.html',
    'html/etape5.html',
    'img/icon/acces.png',
    'img/icon/badge.png',
    'img/icon/batimentGC.png',
    'img/icon/batimentUIT.png',
    'img/icon/Card.png',
    'img/icon/entree.png',
    'img/icon/fitness.png',
    'img/icon/popov.png',
    'img/icon/romana.png',
    'img/icon/smoke-place.png',
    'img/thumbnail/Video3_thumbnail.jpg',
    'img/background.png',
    'img/billetAvion.png',
    'img/billetMobile.png',
    'img/bus-icone.png',
    'img/tram-icone.png',   
    'js/jquery-3.3.1.min.js',
    'js/main.js',
    'js/map.js',
    'js/materialize.min.js',        
    'styles/fa-solid-900.ttf',
    'styles/fontawesome-all.css',
    'styles/main.css',
    'styles/materialize.min.css',
    'sw.js',
    'manup.js',
    'manifest.json',
    'index.php'
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

  
function loadVideosInCache(){
    
    caches.open(CACHE_VERSION).then(function(cache) {
        if (document.URL.indexOf("html/etape2.html") != -1) {
            console.log("caching video1...");
            cache.add('../videos/Video1.mp4');  
     } else  if (document.URL.indexOf("html/etape3.html") != -1) {
         console.log("caching video2...");
         cache.add('../videos/Video2.mp4');  
     } else  if (document.URL.indexOf("html/etape4.html") != -1) {
         console.log("caching video3...");
         cache.add('../videos/Video3.mp4');
     }    
        
    }); 
     
}