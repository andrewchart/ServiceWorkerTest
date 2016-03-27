console.log("hello sw.js");


/* New Cache */
var CACHE_NAME = "swkr-test";
var urlsToCache = [
	//"/ServiceWorkerTest/",
	"green.jpg",
	"styles.css",
	"offline.html"

];


/* Install Event */
self.addEventListener('install', function(event) {
	
	
	//Open a new cache
	event.waitUntil(
		caches.open(CACHE_NAME).then(function(cache) {
		
			//Kill the old cache
			function killCache() {
				console.log("Deleting cached files again...");		
				cache.delete("green.jpg");
				cache.delete("styles.css");
			}
			
						
			//Add new files to the cache
			function initCache() {
				cache.addAll(urlsToCache);
				console.log("Cache filled");
				return cache;
			}
			
		})
	);
	

	
	
});

self.addEventListener('activate', function(event) {
  console.log("New SW activated");
});

self.addEventListener('fetch', function(event) {
  
	event.respondWith(
		
		caches.match(event.request).then(function(response) {
			
			// Cache hit => return response; or fall back to network
			return response || fetch(event.request);
			
		}).catch(function(){
		
			return caches.match("offline.html");
			
		})	
			
	);

});