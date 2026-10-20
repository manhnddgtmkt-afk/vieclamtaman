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
s = s.replace('<base target="_top">\n', head, 1)
i = s.rindex('</body>')   # the cuoi trang (trong ma JS co the co chuoi '</body>')
s = s[:i] + "<script>if ('serviceWorker' in navigator) navigator.serviceWorker.register('sw.js').catch(function () { });</script>\n" + s[i:]
open('index.html', 'w', encoding='utf-8').write(s)
