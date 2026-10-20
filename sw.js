// Luôn hỏi máy chủ có bản mới chưa (bỏ qua bộ nhớ đệm 10 phút của GitHub Pages).
// Giữ sẵn khung app để mở nhanh; luôn hỏi mạng trước (bản mới nhất), mất mạng mới dùng bản đã lưu. Số liệu không lưu ở đây.
var KHO = 'vlta-v19', FILE = ['./', 'index.html', 'config.js', 'manifest.json', 'icon-192.png', 'icon-512.png', 'apple-touch-icon.png'];
self.addEventListener('install', function (e) { e.waitUntil(caches.open(KHO).then(function (c) { return c.addAll(FILE); })); self.skipWaiting(); });
self.addEventListener('activate', function (e) { e.waitUntil(caches.keys().then(function (ks) { return Promise.all(ks.filter(function (k) { return k !== KHO; }).map(function (k) { return caches.delete(k); })); })); self.clients.claim(); });
self.addEventListener('fetch', function (e) {
  var u = new URL(e.request.url);
  if (e.request.method !== 'GET' || u.origin !== location.origin) return;
  e.respondWith(fetch(e.request.url, { cache: 'no-cache' }).then(function (r) { var c = r.clone(); caches.open(KHO).then(function (k) { k.put(e.request, c); }); return r; }).catch(function () { return caches.match(e.request); }));
});
