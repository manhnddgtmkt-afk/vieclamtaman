// Luôn hỏi máy chủ có bản mới chưa (bỏ qua bộ nhớ đệm 10 phút của GitHub Pages).
// Giữ sẵn khung app để mở nhanh; luôn hỏi mạng trước (bản mới nhất), mất mạng mới dùng bản đã lưu. Số liệu không lưu ở đây.
var KHO = 'vlta-v141', FILE = ['./', 'index.html', 'config.js', 'jsqr.js', 'manifest.json', 'icon-192.png', 'icon-512.png', 'apple-touch-icon.png'];
self.addEventListener('install', function (e) { e.waitUntil(caches.open(KHO).then(function (c) { return c.addAll(FILE); })); self.skipWaiting(); });
self.addEventListener('activate', function (e) { e.waitUntil(caches.keys().then(function (ks) { return Promise.all(ks.filter(function (k) { return k !== KHO; }).map(function (k) { return caches.delete(k); })); })); self.clients.claim(); });
self.addEventListener('fetch', function (e) {
  var u = new URL(e.request.url);
  if (e.request.method !== 'GET' || u.origin !== location.origin) return;
  e.respondWith(fetch(e.request.url, { cache: 'no-cache' }).then(function (r) { var c = r.clone(); caches.open(KHO).then(function (k) { k.put(e.request, c); }); return r; }).catch(function () { return caches.match(e.request); }));
});
// bản 140: thông báo đẩy (máy chủ báo video mới dựng xong) – nội dung đã mã hoá: {t: tiêu đề, m: lời, n: số video, tag, u: trang mở khi bấm}
self.addEventListener('push', function (e) {
  var d = {}; try { d = e.data ? e.data.json() : {}; } catch (x) { d = { m: e.data ? e.data.text() : '' }; }
  var vc = [self.registration.showNotification(d.t || 'Tâm An', { body: d.m || 'Có video mới. Bấm để mở app.', icon: 'icon-192.png', badge: 'icon-192.png', tag: d.tag || 'vdo', renotify: true, data: { u: d.u || './?tab=vdo' } })];
  try { if (d.n && self.navigator && self.navigator.setAppBadge) vc.push(self.navigator.setAppBadge(d.n).catch(function () { })); } catch (x) { }
  e.waitUntil(Promise.all(vc));
});
self.addEventListener('notificationclick', function (e) {
  e.notification.close();
  var u = new URL((e.notification.data && e.notification.data.u) || './', self.registration.scope).href;
  e.waitUntil(self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then(function (cs) {
    for (var i = 0; i < cs.length; i++) if (cs[i].url.indexOf(self.registration.scope) === 0 && 'focus' in cs[i]) { cs[i].postMessage({ moTab: 'vdo' }); return cs[i].focus(); }
    return self.clients.openWindow(u);
  }));
});
