const K='itsupport-progress',L=['ยังไม่ได้ทำ','กำลังดำเนินการ','เสร็จสิ้น'],$=s=>document.querySelector(s);
let S={},F=0,hl=null;
try{S=JSON.parse(localStorage.getItem(K))||{}}catch(e){S={}}
const sv=()=>{try{localStorage.setItem(K,JSON.stringify(S))}catch(e){}};
const g=(c,i)=>S[c+'_'+i]||0,done=c=>c.s.filter((_,i)=>g(c.id,i)==2).length;
const tot=C.reduce((a,c)=>a+c.s.length,0),dn=()=>C.reduce((a,c)=>a+done(c),0);
const pc=c=>Math.round(done(c)/c.s.length*100);
function bdg(c){const d=done(c);return d==c.s.length?'<span class="badge d">เสร็จสิ้น</span>':d?'<span class="badge">กำลังดำเนินการ</span>':'<span class="badge">ยังไม่ได้ทำ</span>'}
function nav(h){$('#nav').innerHTML=`<button class="nv ${h=='home'?'on':''}" data-h="home"><span class="i">🏠</span>หน้าแรก</button>`+C.map(c=>`<button class="nv ${h==c.id?'on':''}" data-h="${c.id}"><span class="i">${c.ic}</span>${c.t.replace('การ','')}<span class="c">${done(c)}/${c.s.length}</span></button>`).join('')}
function home(){const p=Math.round(dn()/tot*100);return`<section class="hero"><div><span class="tag">IT SUPPORT</span><h1>คู่มือการติดตั้ง Windows เครื่องสาขา</h1><p>แนวทางสำหรับเจ้าหน้าที่ IT ในการติดตั้ง Windows ตั้งค่าระบบ และติดตั้งโปรแกรมให้เครื่องคอมพิวเตอร์ของแต่ละสาขา พร้อม Checklist ติดตามความคืบหน้า</p><a class="btn" href="#cat1">เริ่มต้นใช้งาน</a></div>
<svg viewBox="0 0 240 180" aria-hidden="true"><rect x="30" y="14" width="180" height="116" rx="12" fill="#0b2545" stroke="#8fd0ff" stroke-width="4"/><rect x="42" y="26" width="156" height="92" rx="6" fill="#1d5fd1"/><path d="M60 50h50M60 66h80M60 82h64" stroke="#fff" stroke-width="6" stroke-linecap="round" opacity=".8"/><circle cx="168" cy="84" r="16" fill="#8fd0ff"/><path d="M161 84l5 5 9-10" stroke="#0b2545" stroke-width="4" fill="none" stroke-linecap="round"/><path d="M100 130h40l8 24H92z" fill="#8fd0ff"/><rect x="74" y="154" width="92" height="9" rx="4.5" fill="#fff"/></svg></section>
<div class="stats"><div class="stat"><b>${C.length}</b><span>หมวดหมู่คู่มือ</span></div><div class="stat"><b>${tot}</b><span>ขั้นตอนทั้งหมด</span></div><div class="stat"><b>${p}%</b><span>ความคืบหน้ารวม</span><div class="bar" style="margin-top:6px"><i style="width:${p}%"></i></div></div></div>
<h2>หมวดหมู่คู่มือ</h2><div class="grid">${C.map(c=>`<button class="cc" data-h="${c.id}"><div class="ic">${c.ic}</div><h4>${c.t}</h4><p>${c.ds} • ${c.s.length} ขั้นตอน</p><div class="bar"><i style="width:${pc(c)}%"></i></div>${bdg(c)}</button>`).join('')}</div>`}
function cat(c){const i=C.indexOf(c),pv=C[i-1],nx=C[i+1];
const st=c.s.map((s,k)=>({s,k})).filter(o=>F==0||g(c.id,o.k)==F-1);
return`<div class="chead"><div class="ic">${c.ic}</div><div><h1>${c.t}</h1><div class="bar" style="margin-top:8px"><i style="width:${pc(c)}%"></i></div><small>${done(c)} จาก ${c.s.length} ขั้นตอน (${pc(c)}%)</small></div><button class="back" data-h="home">← กลับหน้าหมวดหมู่</button></div>
<div class="sp"><div class="bar"><i style="width:${pc(c)}%"></i></div><b>${done(c)} จาก ${c.s.length} ขั้นตอน (${pc(c)}%)</b></div>
<div class="chips">${['ทั้งหมด',...L].map((l,x)=>`<button class="chip ${F==x?'on':''}" data-f="${x}">${l}</button>`).join('')}</div>
${st.map(({s,k})=>{const v=g(c.id,k);return`<article class="step s${v}" id="s-${c.id}-${k}"><div class="sh"><div class="num">${k+1}</div><h3>${s.t}</h3></div><div class="sg">${L.map((l,x)=>`<button class="st s${x}${v==x?' on':''}" data-c="${c.id}" data-k="${k}" data-v="${x}">${['○','◐','✔'][x]} ${l}</button>`).join('')}</div>
<ol>${s.d.map(x=>`<li>${x}</li>`).join('')}</ol>${s.c?`<pre>${s.c}</pre>`:''}${s.n?`<div class="note">💡 คำแนะนำ: ${s.n}</div>`:''}${s.w?`<div class="warn">⚠️ ข้อควรระวัง: ${s.w}</div>`:''}
<div class="shots" data-p="${c.id}-${k+1}" data-l="${(s.imgs||(s.img?[s.img]:[])).join('|')}"><figure class="shot">ภาพหน้าจอตัวอย่าง ขั้นตอนที่ ${k+1}</figure></div></article>`}).join('')||'<p>ไม่มีขั้นตอนในสถานะนี้</p>'}
<div class="pn">${pv?`<button data-h="${pv.id}">← ${pv.t}</button>`:'<span></span>'}${nx?`<button data-h="${nx.id}">${nx.t} →</button>`:`<button data-h="home">เสร็จสิ้นทุกหมวด กลับหน้าแรก</button>`}</div>`}
function render(){const h=(location.hash.slice(1)||'home'),c=C.find(x=>x.id==h);nav(c?h:'home');$('#m').innerHTML=c?cat(c):home();
shots();document.title=(c?c.t+' – ':'')+'IT SUPPORT – คู่มือการติดตั้ง Windows และตั้งค่าเครื่องสาขา';
if(hl){const e=document.getElementById(hl);hl=null;if(e){e.classList.add('hl');e.scrollIntoView({block:'center'});setTimeout(()=>e.classList.remove('hl'),2200)}}}
function go(h){closeM();if(location.hash=='#'+h){render();window.scrollTo(0,0)}else{location.hash=h;window.scrollTo(0,0)}}
function closeM(){$('#sd').classList.remove('on');$('#ov').classList.remove('on')}
addEventListener('hashchange',()=>{F=0;render();if(!hl)window.scrollTo(0,0)});
document.addEventListener('click',e=>{
const b=e.target.closest('[data-h]');if(b){go(b.dataset.h);return}
const f=e.target.closest('[data-f]');if(f){F=+f.dataset.f;render();return}
const s=e.target.closest('[data-c]');if(s){const k=s.dataset.c+'_'+s.dataset.k;S[k]=+s.dataset.v;sv();render();return}
if(!e.target.closest('.sw'))$('#res').classList.remove('on')});
$('#mb').onclick=()=>{$('#sd').classList.toggle('on');$('#ov').classList.toggle('on')};
$('#ov').onclick=closeM;
$('#rs').onclick=()=>{if(confirm('ล้างความคืบหน้าทั้งหมดใช่หรือไม่?')){S={};sv();render()}};
$('#top').onclick=()=>scrollTo({top:0});
addEventListener('scroll',()=>{$('#top').style.display=scrollY>400?'block':'none'});
$('#q').oninput=e=>{const q=e.target.value.trim().toLowerCase(),r=$('#res');if(!q){r.classList.remove('on');return}
const out=[];C.forEach(c=>c.s.forEach((s,k)=>{if((s.t+' '+s.d.join(' ')+' '+(s.c||'')+' '+(s.n||'')).toLowerCase().includes(q))out.push(`<button data-r="${c.id}-${k}">${s.t}<small>${c.t}</small></button>`)}));
r.innerHTML=out.length?out.join(''):'<p>ไม่พบคู่มือที่ตรงกับคำค้นหา ลองใช้คำอื่น</p>';r.classList.add('on')};
$('#res').onclick=e=>{const b=e.target.closest('[data-r]');if(!b)return;const[c,k]=b.dataset.r.split('-');hl='s-'+c+'-'+k;F=0;$('#res').classList.remove('on');$('#q').value='';closeM();if(location.hash=='#'+c)render();else location.hash=c};
render();

/* โหลดรูปประกอบ: ถ้าระบุ imgs/img ใน data.js จะใช้ตามนั้น ไม่เช่นนั้นค้นหาอัตโนมัติ
   cat1-1.png, cat1-1-2.png, cat1-1-3.png ... (นามสกุล png/jpg/jpeg/webp, สูงสุด 12 รูป) */
function probe(base){return new Promise(r=>{const x=['png'];let i=0;(function t(){if(i>=x.length)return r(null);const im=new Image(),u=base+'.'+x[i++];im.onload=()=>r(u);im.onerror=t;im.src=u})()})}
function shots(){document.querySelectorAll('.shots').forEach(async b=>{
const fig=u=>{const f=document.createElement('figure');f.className='shot';f.innerHTML='<img alt="ภาพหน้าจอ">';f.firstChild.src=u;return f};
const put=l=>{if(l.length)b.replaceChildren(...l.map(fig))};
if(b.dataset.l){put(b.dataset.l.split('|'));return}
const l=[];for(let n=1;n<=12;n++){const u=await probe('images/'+b.dataset.p+(n>1?'-'+n:''));if(!u)break;l.push(u)}put(l)})}

/* โหมดมืด/สว่าง: ครั้งแรกตามค่าของเครื่อง หลังจากกดปุ่มจะจำค่าที่เลือกไว้ */
const TK='itsupport-theme';
function theme(t){document.documentElement.dataset.theme=t;const b=$('#th');b.textContent=t=='dark'?'☀️':'🌙';b.title=b.ariaLabel=t=='dark'?'สลับเป็นโหมดสว่าง':'สลับเป็นโหมดมืด'}
let t0=null;try{t0=localStorage.getItem(TK)}catch(e){}
theme(t0||(matchMedia('(prefers-color-scheme:dark)').matches?'dark':'light'));
$('#th').onclick=()=>{const t=document.documentElement.dataset.theme=='dark'?'light':'dark';theme(t);try{localStorage.setItem(TK,t)}catch(e){}};
