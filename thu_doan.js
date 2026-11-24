(function(){
var s=document.createElement('style');s.textContent='.wpHop{display:none!important}.wpKhoa,.wpKhoa body{overflow:visible!important}';document.head.appendChild(s);
var mc=new MessageChannel(),hang=[];mc.port1.onmessage=function(){var f=hang.shift();if(f)f()};function tick(){return new Promise(r=>{hang.push(r);mc.port2.postMessage(0)})}
var w=async function(ms){var het=Date.now()+Math.round(ms*(window.__k||1));if(!document.hidden){await new Promise(r=>setTimeout(r,het-Date.now()));return}while(Date.now()<het)await tick()};window.__w=w;
var tg=el=>el.tagName.toLowerCase()+(el.id?'#'+el.id:'')+(typeof el.className==='string'&&el.className.trim()?'.'+el.className.trim().split(/\s+/).slice(0,2).join('.'):'')+' "'+(el.innerText||el.placeholder||'').trim().replace(/\n/g,' / ').slice(0,40)+'"';
function tatCa(){var a=[...document.querySelectorAll('body *')];var h=document.getElementById('glHost');if(h&&h.shadowRoot)a=a.concat([...h.shadowRoot.querySelectorAll('*')]);return a}
function anc(el){for(var p=el.parentElement;p&&p!==document.body;p=p.parentElement){var o=getComputedStyle(p).overflowX;if(o==='auto'||o==='scroll'||o==='hidden')return true}return false}
window.__chk=function(){var out=[],W=document.documentElement.clientWidth;if(document.documentElement.scrollWidth>W+1)out.push('Trang cuộn ngang '+document.documentElement.scrollWidth);
 for(var el of tatCa()){var st=getComputedStyle(el);if(st.display==='none'||st.visibility==='hidden')continue;var dd=el.closest('details');if(dd&&!dd.open&&!el.closest('summary'))continue;var rc=el.getBoundingClientRect();if(!rc.width||!rc.height)continue;var tx=(el.innerText||el.textContent||'').trim();
  if(rc.right>W+1&&!anc(el)&&tx)out.push('Tràn màn: '+tg(el));
  if(el.children.length===0&&tx&&el.scrollWidth>el.clientWidth+1&&st.textOverflow!=='ellipsis'&&!['auto','scroll'].includes(st.overflowX)&&!['INPUT','SELECT','TEXTAREA'].includes(el.tagName))out.push('Chữ khuất: '+tg(el));
  if(['INPUT','SELECT','TEXTAREA'].includes(el.tagName)&&parseFloat(st.fontSize)<16&&!['checkbox','radio','file','range'].includes(el.type))out.push('Ô gõ <16px: '+tg(el));
  if(el.tagName==='INPUT'&&el.placeholder&&!el.value){var cv=window.__cv||(window.__cv=document.createElement('canvas').getContext('2d'));cv.font=st.fontWeight+' '+st.fontSize+' '+st.fontFamily;var cw=rc.width-parseFloat(st.paddingLeft)-parseFloat(st.paddingRight)-(el.type==='search'?18:0);if(cv.measureText(el.placeholder).width>cw+1)out.push('Gợi ý bị cắt: '+tg(el));}
  // chu nhay dong: nhan/tieu de ngan (<=48 ky tu, khong phai cau giai thich .cau) bi xuong 2 dong
  if(el.closest('.cau,.note,.empty,.wpHop,.tai,svg,table,.bmoi,.yL,.yG'))continue;
  if(st.display.indexOf('flex')>=0||st.display.indexOf('grid')>=0)continue;
  var inl=true;for(var c of el.children){var d=getComputedStyle(c).display;if(d!=='inline'&&d!=='inline-block'&&d!=='none'){inl=false;break}}if(!inl)continue;
  var t=(el.innerText||'').trim();if(!t||t.length>48||t.indexOf('\n')>=0)continue;
  var r=document.createRange();r.selectNodeContents(el);var tops=[];for(var q of r.getClientRects()){if(q.width<1||q.height<1)continue;var y=Math.round(q.top+q.height/2);if(!tops.some(v=>Math.abs(v-y)<5))tops.push(y)}
  if(tops.length>1)out.push('Chữ nhảy dòng: '+tg(el));}
 var tt=document.body.innerText;for(var k of ['NaN','undefined','[object','{KH}','Infinity'])if(tt.includes(k))out.push('Chữ lỗi: '+k);
 var m=tt.match(/\d{1,3}(,\d{3})+(?![\d])|(?<![\d.,\/:])\d+\.\d{1,2}(?![\d.,])/g);if(m)out.push('Số kiểu Mỹ: '+m.slice(0,3).join(' '));
 var f=document.querySelector('.fab');if(f&&f.getBoundingClientRect().width){var fr=f.getBoundingClientRect(),nv=document.querySelector('.nav').getBoundingClientRect();if(fr.bottom>nv.top+1||fr.left<0||fr.right>W)out.push('Thanh nút lệch');}
 return out};
window.__rong=function(on){var e=document.getElementById('__rg');if(on&&!e){e=document.createElement('style');e.id='__rg';e.textContent='*{font-family:Verdana,"DejaVu Sans",sans-serif!important}';document.head.appendChild(e);var h=document.getElementById('glHost');if(h&&h.shadowRoot){var e2=e.cloneNode(true);e2.id='__rg2';h.shadowRoot.appendChild(e2)}}else if(!on){if(e)e.remove();var h2=document.getElementById('glHost');if(h2&&h2.shadowRoot){var x=h2.shadowRoot.getElementById('__rg2');if(x)x.remove()}}};
window.__tab=function(t){__dong();for(var i=0;i<3;i++){var bk=document.getElementById('bk')||[...document.querySelectorAll('.top button')].find(x=>x.innerText.trim()=='‹');if(!bk)break;bk.click()}var b=[...document.querySelectorAll('.nav button')].find(b=>b.innerText.trim().split('\n')[0]===t);if(b)b.click();scrollTo(0,0);return !!b};
window.__clk=function(t,goc){var b=[...(goc||document).querySelectorAll('button,a,[onclick],summary,.it')].filter(e=>e.getBoundingClientRect().width).find(b=>(b.innerText||'').trim().indexOf(t)>=0);if(b)b.click();return !!b};
window.__dong=function(){document.querySelectorAll('.sheet,.bmoi').forEach(e=>e.remove())};
window.__cty=async function(ma){var c2=document.getElementById('ctyChon');if(c2){c2.click();await w(300);var bb=document.querySelector('#ctyDs [data-c="'+ma+'"]');if(bb)bb.click();else __dong()}else{var sb=document.querySelector('#ctySeg [data-c="'+ma+'"],#htSeg [data-c="'+ma+'"]');if(sb)sb.click()}await w(3000)};
window.__run=async function(theme,phan){document.documentElement.setAttribute('data-theme',theme);var R={};
 window.__da=[];async function ghi(ten){window.__da.push(ten);for(var r of [0,1]){__rong(r);await w(200);for(var x of __chk()){(R[x]=R[x]||[]).push(ten+(r?'/rộng':''))}}__rong(0)}
 if(phan===1){__tab('Lao động');await w(1500);await __cty('HOJEONG');await ghi('Lao động');var it=document.querySelector('#list .it');if(it){it.click();await w(2600);await ghi('Hồ sơ tuần');__clk('Bảng công');await w(1300);await ghi('Hồ sơ công');__clk('Phiếu tháng');await w(2000);await ghi('Hồ sơ tháng');if(__clk('Ghi ứng')){await w(700);await ghi('Ghi ứng');__dong()}__tab('Lao động');await w(1800)}
  var bl=document.getElementById('moBL');if(bl){bl.click();await w(1500);await ghi('Bảng lương');__dong()}
  var ut=document.getElementById('moUT');if(ut){ut.click();await w(1800);await ghi('Ứng/trả gần đây');__dong();__tab('Lao động');await w(1500)}
  __tab('Thu chi');await w(2600);__clk('Xem các khoản tạo nên');await w(300);await ghi('Thu chi');var g=document.getElementById('gso');if(g){g.click();await w(700);await ghi('Ghi khoản');__dong()}}
 else if(phan===2){try{localStorage.setItem('vlta_tqn','ln')}catch(e){}__tab('Tổng quan');await w(1500);__clk('Quay lại báo cáo');await w(3000);__clk('Lợi nhuận');await w(600);await ghi('TQ lợi nhuận');__clk('Tiền & công nợ');await w(700);await ghi('TQ tiền');__clk('Vendor & sale');await w(700);await ghi('TQ vendor');
  if(__clk('Lương sale')){await w(1500);await ghi('Lương sale');__clk('Quay lại Tổng quan');await w(2000)}
  if(__clk('Giả lập tài chính')){await w(2500);await ghi('Giả lập');__clk('Quay lại báo cáo');await w(800)}
  __tab('Giấy tờ');await w(1800);__clk('In CCCD');await w(500);await ghi('In CCCD');if(__clk('Tìm ảnh trong kho')){await w(1500);await ghi('Kho CCCD');__clk('Đóng')}__clk('Thẻ HOJEONG');await w(900);await ghi('Thẻ');__clk('Danh sách');await w(2500);await ghi('Danh sách');
  __tab('Content');await w(1800);await ghi('Kịch bản');__clk('Video đã dựng');await w(1500);await ghi('Video');var ch=document.getElementById('chuong');if(ch){ch.click();await w(500);await ghi('Chuông');__dong()}var me=document.getElementById('me');if(me)me.click();await w(600);await ghi('Tài khoản');if(__clk('Có gì mới')){await w(600);await ghi('Có gì mới')}__dong()}
 else{__tab('Lao động');await w(2500);var cc=document.getElementById('ctyChon'),ds=[];if(cc){cc.click();await w(400);ds=[...document.querySelectorAll('#ctyDs [data-c]')].map(b=>b.getAttribute('data-c'));__dong()}else ds=[...document.querySelectorAll('#ctySeg button,#htSeg button')].map(b=>b.getAttribute('data-c'));
  for(var ma of ds.slice(0,6)){var c2=document.getElementById('ctyChon');if(c2){c2.click();await w(300);var bb=document.querySelector('#ctyDs [data-c="'+ma+'"]');if(bb)bb.click();else __dong()}else{var sb=document.querySelector('#ctySeg [data-c="'+ma+'"],#htSeg [data-c="'+ma+'"]');if(sb)sb.click()}await w(3200);await ghi('Lao động '+ma);var bl2=document.getElementById('moBL');if(bl2){bl2.click();await w(1800);await ghi('Bảng lương '+ma);__dong()}}}
 R['(đã xem: '+(window.__da||[]).join(', ')+')']=[];var o={};for(var k in R)o[k]=[...new Set(R[k])].join(', ');return {w:innerWidth,theme:theme,phan:phan,n:Object.keys(o).length,loi:o}};
window.__all=async function(theme){var out=[];for(var p of [1,2,3]){try{out.push(await __run(theme,p))}catch(e){out.push({phan:p,err:String(e)})}}return out};


window.__doan=function(){var out=[],HOA=/[.!?:;] [A-ZĐÁÀẢÃẠÂẤẦẨẪẬĂẮẰẲẴẶÉÈẺẼẸÊẾỀỂỄỆÍÌỈĨỊÓÒỎÕỌÔỐỒỔỖỘƠỚỜỞỠỢÚÙỦŨỤƯỨỪỬỮỰÝỲỶỸỴ]/g;
 function khoi(n){var d=getComputedStyle(n).display;return d!=='inline'&&d!=='contents'}
 for(var el of tatCa()){if(/^(SCRIPT|STYLE|INPUT|TEXTAREA|SELECT|OPTION|svg|BUTTON)$/i.test(el.tagName))continue;
  var st=getComputedStyle(el);if(st.display==='none'||st.visibility==='hidden'||!khoi(el))continue;
  var dd=el.closest('details');if(dd&&!dd.open&&!el.closest('summary'))continue;
  var rc=el.getBoundingClientRect();if(!rc.width||!rc.height)continue;
  var segs=[[]],w=document.createTreeWalker(el,5,{acceptNode:function(n){if(n===el)return 3;if(n.nodeType===1){if(n.tagName==='BR')return 1;if(khoi(n))return 2;return 3}return 1}}),n;
  while((n=w.nextNode())){if(n.nodeType===1){segs.push([]);continue}if(n.nodeValue.trim())segs[segs.length-1].push(n)}
  for(var sg of segs){if(!sg.length)continue;var tops=[],t='';var pre=/^pre/.test(getComputedStyle(sg[0].parentElement).whiteSpace);if(pre){var rs=[];for(var tn of sg){var off=0;for(var ln of tn.nodeValue.split('\n')){if(ln.trim())rs.push([tn,off,off+ln.length]);off+=ln.length+1}}}var wy={};for(var tn of sg){t+=tn.nodeValue;if(pre)continue;var r=document.createRange();r.selectNodeContents(tn);for(var q of r.getClientRects()){if(q.width<2)continue;var y=Math.round(q.top+q.height/2);var y0=tops.find(x=>Math.abs(x-y)<6);if(y0===undefined){tops.push(y);y0=y}wy[y0]=(wy[y0]||0)+q.width}}if(pre){var mx=0;for(var z of rs){var r2=document.createRange();r2.setStart(z[0],z[1]);r2.setEnd(z[0],z[2]);var tt=[];for(var q of r2.getClientRects()){if(q.width<2)continue;var y=Math.round(q.top+q.height/2);if(!tt.some(x=>Math.abs(x-y)<6))tt.push(y)}mx=Math.max(mx,tt.length)}tops=new Array(mx).fill(0)}
   t=t.replace(/\s+/g,' ').trim();var k=tops.length,cau=(t.match(HOA)||[]).length,cham=(t.match(/·/g)||[]).length;
   if(k>=3||(k>=2&&(cau>=1||cham>=2||/\(.{12,}\)/.test(t))))out.push('Đoạn gộp ý '+k+' dòng | '+t.slice(0,110));else if(k===2&&!pre){var yl=Math.max.apply(null,tops),cw=el.getBoundingClientRect().width;if(wy[yl]<cw*0.28)out.push('Chữ mồ côi '+k+' dòng | '+t.slice(0,90))}}}
 return out};
window.__cauNoi=function(){var out=[],HOA='A-ZĐÁÀẢÃẠÂẤẦẨẪẬĂẮẰẲẴẶÉÈẺẼẸÊẾỀỂỄỆÍÌỈĨỊÓÒỎÕỌÔỐỒỔỖỘƠỚỜỞỠỢÚÙỦŨỤƯỨỪỬỮỰÝỲỶỸỴ',RE=new RegExp('[^\\s\\d.]{3}[.!?]\\s+['+HOA+']'),gs=[document.body],h=document.getElementById('glHost');if(h&&h.shadowRoot)gs.push(h.shadowRoot);
 for(var g of gs){var w=document.createTreeWalker(g,4),n;while((n=w.nextNode())){var p=n.parentElement;if(!p||!RE.test(n.nodeValue)||p.closest('.kbvBox,input,textarea,script,style,#phieu'))continue;var rc=p.getBoundingClientRect();if(!rc.width||!rc.height)continue;var st=getComputedStyle(p);if(st.visibility==='hidden')continue;var dd=p.closest('details');if(dd&&!dd.open&&!p.closest('summary'))continue;out.push('Câu nối đuôi | '+n.nodeValue.replace(/\s+/g,' ').trim().slice(0,90))}}return out};
window.__tuTach=function(){var out=[],GH=new Set('chủ nhật|công ty|công nhân|thanh toán|tăng ca|hành chính|chuyên cần|doanh thu|lợi nhuận|phiếu lương|bảng công|bảng lương|giờ công|ca ngày|ca đêm|tuần sau|tháng sau|hôm nay|hôm qua|vân tay|thông báo|cập nhật|danh sách|kịch bản|giấy tờ|chi phí|pháp nhân|tiền ăn|hỗ trợ|đi làm|đi muộn|nhận việc|trở lên|cơ chế|tâm an|thu chi|ngày thường|lao động|trình duyệt|cài đặt|điện thoại|giữ lại|trả lương|kỳ công|đơn giá|chiết khấu|tạm tính'.split('|')),UN=/^(giờ|phút|công|ngày|tuần|tháng|năm|người|đ|%|bài|lần|khoản|tiếng|triệu|tr)[,.;:)]*$/i,gs=[document.body],hh=document.getElementById('glHost');if(hh&&hh.shadowRoot)gs.push(hh.shadowRoot);
 var sach=function(x){return x.replace(/[,.;:()"“”!?·]/g,'').toLowerCase()};
 for(var g of gs){var w=document.createTreeWalker(g,4),n;while((n=w.nextNode())){var v=n.nodeValue;if(!v||v.length<8||!/ /.test(v))continue;var p=n.parentElement;if(!p||p.closest('.kbvBox,input,textarea,script,style,#phieu,.bmoi details'))continue;var rc=p.getBoundingClientRect();if(!rc.width||!rc.height)continue;var st=getComputedStyle(p);if(st.whiteSpace==='nowrap'||st.visibility==='hidden')continue;var dd=p.closest('details');if(dd&&!dd.open&&!p.closest('summary'))continue;
  var re=/[^ \t\n]+/g,m,ws=[];while((m=re.exec(v))){var r=document.createRange();r.setStart(n,m.index);r.setEnd(n,m.index+m[0].length);var q=r.getClientRects()[0];if(!q)continue;ws.push([m[0],Math.round(q.top+q.height/2)])}
  if(ws.length<2)continue;var dong=0;for(var i=1;i<ws.length;i++){if(Math.abs(ws[i][1]-ws[i-1][1])<6)continue;dong++;var a=ws[i-1][0],b=ws[i][0];
   if(/\d$/.test(a)&&UN.test(b))out.push('Số tách đơn vị | '+a+' / '+b+' | '+v.trim().slice(0,60));
   if(GH.has(sach(a.split(/\u00a0/).pop()+' '+b.split(/\u00a0/)[0])))out.push('Từ ghép bị tách | '+a+' / '+b+' | '+v.trim().slice(0,60))}
  if(dong>=1){var cuoi=ws[ws.length-1][1],k=ws.filter(function(x){return Math.abs(x[1]-cuoi)<6}).length;if(k===1&&ws[ws.length-1][0].replace(/\u00a0/g,' ').split(' ').length===1)out.push('Chữ mồ côi | '+ws[ws.length-2][0]+' / '+ws[ws.length-1][0]+' | '+v.trim().slice(0,60))}}}
 return out};
var __goc=window.__chk;window.__chk=function(){return __goc().concat(__doan(),__cauNoi(),__tuTach())};


return 'harness ok '+(window.PB&&PB.so);
})()
