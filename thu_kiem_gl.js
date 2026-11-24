(async function(){
var mc=new MessageChannel(),hang=[];mc.port1.onmessage=function(){var f=hang.shift();if(f)f()};function tick(){return new Promise(r=>{hang.push(r);mc.port2.postMessage(0)})}
var w=async function(ms){var het=Date.now()+ms;if(!document.hidden){await new Promise(r=>setTimeout(r,ms));return}while(Date.now()<het)await tick()};
var s0=document.createElement('style');s0.textContent='.wpHop{display:none!important}.wpKhoa,.wpKhoa body{overflow:visible!important}';document.head.appendChild(s0);
function tab(t){var b=[...document.querySelectorAll('.nav button')].find(b=>b.innerText.trim().split('\n')[0]===t);if(b)b.click();scrollTo(0,0)}
tab('Tổng quan');await w(2500);var g=[...document.querySelectorAll('button')].find(b=>/Giả lập tài chính/.test(b.innerText));if(g)g.click();await w(3000);
var h=document.getElementById('glHost'),R=h.shadowRoot,W=innerWidth,out={};
var cv=document.createElement('canvas').getContext('2d');
function tg(el){return el.tagName.toLowerCase()+(el.id?'#'+el.id:'')+(typeof el.className==='string'&&el.className.trim()?'.'+el.className.trim().split(/\s+/).slice(0,2).join('.'):'')+' "'+(el.textContent||el.placeholder||'').trim().replace(/\s+/g,' ').slice(0,40)+'"'}
function chk(ten){for(var el of R.querySelectorAll('*')){var st=getComputedStyle(el);if(st.display==='none'||st.visibility==='hidden')continue;var rc=el.getBoundingClientRect();if(!rc.width||!rc.height)continue;var tx=(el.textContent||'').trim();var k=[];
 if(rc.right>W+1&&tx)k.push('Tràn màn');
 if(el.children.length===0&&tx&&el.scrollWidth>el.clientWidth+1&&st.textOverflow!=='ellipsis'&&!['auto','scroll'].includes(st.overflowX)&&el.tagName!=='INPUT')k.push('Chữ khuất');
 if(el.tagName==='INPUT'&&parseFloat(st.fontSize)<16&&!['checkbox','radio'].includes(el.type))k.push('Ô gõ <16px');
 if(!el.closest('.cau,.note,.empty,.tai,svg,table,.ghi,.trong')&&st.display.indexOf('flex')<0&&st.display.indexOf('grid')<0){var inl=true;for(var c of el.children){var d=getComputedStyle(c).display;if(d!=='inline'&&d!=='inline-block'&&d!=='none'){inl=false;break}}var t=tx;if(inl&&t&&t.length<=48&&t.indexOf('\n')<0){var r=document.createRange();r.selectNodeContents(el);var tops=[];for(var q of r.getClientRects()){if(q.width<1||q.height<1)continue;var y=Math.round(q.top+q.height/2);if(!tops.some(v=>Math.abs(v-y)<5))tops.push(y)}if(tops.length>1)k.push('Chữ nhảy dòng')}}
 for(var x of k){var key=x+': '+tg(el);(out[key]=out[key]||[]).push(ten)}}}
async function quet(ten){for(var rg of [0,1]){var e=R.getElementById('__rg');if(rg&&!e){e=document.createElement('style');e.id='__rg';e.textContent='*{font-family:Verdana,"DejaVu Sans",sans-serif!important}';R.appendChild(e)}if(!rg&&e)e.remove();await w(250);chk(ten+(rg?'/rộng':''))}var e2=R.getElementById('__rg');if(e2)e2.remove()}
for(var th of ['light','dark']){document.documentElement.setAttribute('data-theme',th);
 var chips=[...R.querySelectorAll('#chips button,#chips [data-c],#chips .chip')];var n=Math.max(1,chips.length);
 for(var i=0;i<Math.min(n,5);i++){chips=[...R.querySelectorAll('#chips button,#chips [data-c],#chips .chip')];if(chips[i])chips[i].click();await w(900);await quet(th+' '+(chips[i]?chips[i].textContent.trim():'?'))}}
var o={};for(var k in out)o[k]=[...new Set(out[k])].join(', ');window.__KG={w:W,n:Object.keys(o).length,loi:o};return 'xong'})().catch(e=>{window.__KG='LOI '+e});
