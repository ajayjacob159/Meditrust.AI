// Meditrust AI — Offline Service Worker (PWA)
const CACHE_NAME = 'meditrust-cache-v1'
const PRECACHE_ASSETS = [
  '/',
  '/manifest.json',
  '/logo.png',
  '/dr_arya.jpg',
  '/symptom-checker',
  '/government-schemes',
  '/medication-comparison',
  '/lab-test-comparison'
]

// Install Event
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(PRECACHE_ASSETS)
    }).then(() => self.skipWaiting())
  )
})

// Activate Event
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
      )
    }).then(() => self.clients.claim())
  )
})

// Fetch Event: Network-First with Offline Fallback
self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return

  event.respondWith(
    fetch(event.request)
      .then((response) => {
        // Clone and cache valid GET responses
        if (response && response.status === 200 && response.type === 'basic') {
          const responseToCache = response.clone()
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache)
          })
        }
        return response
      })
      .catch(() => {
        return caches.match(event.request).then((cachedResponse) => {
          if (cachedResponse) return cachedResponse
          // If HTML request fails, return cached home
          if (event.request.headers.get('accept')?.includes('text/html')) {
            return caches.match('/')
          }
        })
      })
  )
})
