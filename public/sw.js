// Meditrust AI — Service Worker (v2.1 - Dynamic Network First)
const CACHE_NAME = 'meditrust-cache-v2-sept2026'

// On install, skip waiting to activate immediately
self.addEventListener('install', (event) => {
  self.skipWaiting()
})

// On activate, clear all old caches immediately
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => caches.delete(key))
      )
    }).then(() => self.clients.claim())
  )
})

// Fetch Event: Network-First (Always fetch fresh content, fallback to offline only when no network)
self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return

  event.respondWith(
    fetch(event.request)
      .catch(() => {
        return caches.match(event.request)
      })
  )
})
