# Tạo index.html từ APP_TAM_AN.html (bản chạy trong Google) + thẻ PWA
import sys
s = open(sys.argv[1], encoding='utf-8').read()
head = '''<title>Việc Làm Tâm An</title>
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, viewport-fit=cover">
<meta name="theme-color" content="#F4F6F9">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="default">
<meta name="apple-mobile-web-app-title" content="Tâm An">
<link rel="manifest" href="manifest.json">
<link rel="apple-touch-icon" href="apple-touch-icon.png">
<link rel="icon" href="icon-192.png">
<script src="config.js"></script>
'''
import re, datetime
kho = re.search(r"vlta-v(\d+)", open('sw.js', encoding='utf-8').read()).group(1)
luc = (datetime.datetime.utcnow() + datetime.timedelta(hours=7)).strftime('%d/%m %H:%M')
head += '<script>window.PB = { so: %s, luc: "%s" };</script>\n' % (kho, luc)
s = s.replace('<base target="_top">\n', head, 1)
i = s.rindex('</body>')   # the cuoi trang (trong ma JS co the co chuoi '</body>')
s = s[:i] + "<script>if ('serviceWorker' in navigator) navigator.serviceWorker.register('sw.js').catch(function () { });</script>\n" + s[i:]
open('index.html', 'w', encoding='utf-8').write(s)
# ban thu hien thi (chi de so sanh chuyen mo o mep tren tren iPhone): A bo viewport-fit=cover, B thanh gio/pin trong suot
nut = '<a href="index.html" style="position:fixed;left:50%;transform:translateX(-50%);bottom:calc(150px + env(safe-area-inset-bottom,0px));z-index:99;background:#C2410C;color:#fff;padding:8px 14px;border-radius:999px;font:600 14px sans-serif;text-decoration:none">BAN THU %s · ve ban thuong</a>'
i = s.rindex('</body>')
a_ = s.replace(', viewport-fit=cover', '', 1)
open('index-a.html', 'w', encoding='utf-8').write(a_[:a_.rindex('</body>')] + nut.replace('BAN THU %s · ve ban thuong', 'Bản thử A · về bản thường') + a_[a_.rindex('</body>'):])
b_ = s.replace('content="default"', 'content="black-translucent"', 1)
open('index-b.html', 'w', encoding='utf-8').write(b_[:b_.rindex('</body>')] + nut.replace('BAN THU %s · ve ban thuong', 'Bản thử B · về bản thường') + b_[b_.rindex('</body>'):])
