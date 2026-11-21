/* ===================== IKONOS ===================== */
const IC={
 home:'<path d="M3 11l9-7 9 7"/><path d="M5 10v10h14V10"/>',
 sun:'<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
 bolt:'<path d="M13 2L4 14h7l-1 8 9-12h-7z"/>',
 battery:'<rect x="2.5" y="7" width="16" height="10" rx="2"/><path d="M21.5 11v2M6 10v4M9.5 10v4M13 10v4"/>',
 thermo:'<path d="M14 14.8V5a2 2 0 0 0-4 0v9.8a4 4 0 1 0 4 0z"/>',
 snow:'<path d="M12 2v20M4 6l16 12M20 6L4 18"/>',
 shield:'<path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z"/>',
 car:'<path d="M5 17h14M6.5 17L8 12h8l1.5 5M4 17v3M20 17v3M8 12l1.5-4h5L16 12"/><circle cx="8" cy="17" r="1"/><circle cx="16" cy="17" r="1"/>',
 chart:'<path d="M4 20V11M10 20V5M16 20v-6M22 20H2"/>',
 wind:'<path d="M3 8h11a3 3 0 1 0-3-3M3 12h16a3 3 0 1 1-3 3M3 16h8"/>',
 light:'<path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-4 10.5c.8.8 1 1.5 1 2.5h6c0-1 .2-1.7 1-2.5A6 6 0 0 0 12 3z"/>',
 cam:'<rect x="3" y="7" width="12" height="10" rx="2"/><path d="M15 10l6-3v10l-6-3"/>',
 drop:'<path d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11z"/>',
 lock:'<rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/>',
 plug:'<path d="M9 2v6M15 2v6M6 8h12v4a6 6 0 0 1-12 0zM12 18v4"/>',
 tv:'<rect x="3" y="5" width="18" height="12" rx="2"/><path d="M8 21h8"/>',
 cpu:'<rect x="7" y="7" width="10" height="10" rx="1.5"/><path d="M10 2v3M14 2v3M10 19v3M14 19v3M2 10h3M2 14h3M19 10h3M19 14h3"/>',
 blinds:'<path d="M4 4h16M5 4v15M19 4v15M5 8h14M5 12h14M5 16h14"/>',
 sensor:'<circle cx="12" cy="12" r="1.6"/><path d="M8.5 15.5a5 5 0 0 1 0-7M15.5 8.5a5 5 0 0 1 0 7M5.6 18.4a9 9 0 0 1 0-12.8M18.4 5.6a9 9 0 0 1 0 12.8"/>',
 gauge:'<path d="M12 14l4-4M3.5 18a9 9 0 1 1 17 0"/>',
 washer:'<rect x="5" y="3" width="14" height="18" rx="2"/><path d="M5 7h14"/><circle cx="12" cy="14" r="3.5"/>',
 bell:'<path d="M6 16v-5a6 6 0 0 1 12 0v5l2 2H4zM10 21h4"/>',
 mail:'<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/>',
 phone:'<path d="M5 3h4l2 5-2.5 1.5a11 11 0 0 0 6 6L16 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 5a2 2 0 0 1 2-2"/>',
 pin:'<path d="M12 21s7-6 7-12a7 7 0 0 0-14 0c0 6 7 12 7 12z"/><circle cx="12" cy="9" r="2.5"/>',
 clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
 check:'<path d="M5 12l5 5L20 7"/>',
 x:'<path d="M6 6l12 12M18 6L6 18"/>',
 grid:'<rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/>',
 eye:'<path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>',
 cloud:'<path d="M7 18a4.5 4.5 0 0 1-.6-8.96A6 6 0 0 1 18 8.5a4.5 4.5 0 0 1-.5 9.5z"/>',
 euro:'<path d="M17 6.5A7 7 0 1 0 17 17.5M4 10h9M4 14h9"/>'
};
const PVT={std:1,ind:2,wall:3};
const ic=n=>`<svg class="i" viewBox="0 0 24 24">${IC[n]||IC.grid}</svg>`;
const $=s=>document.querySelector(s);
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const eur=n=>n.toLocaleString('lt-LT',{minimumFractionDigits:0,maximumFractionDigits:0})+' €';
function fillIcons(root=document){root.querySelectorAll('[data-ic]').forEach(el=>{if(!el.dataset.done){el.insertAdjacentHTML('afterbegin',ic(el.dataset.ic));el.dataset.done=1}})}
/* ===================== PLATFORMA (DEMO) ===================== */
function renderDash(){
  $('#kpis').innerHTML=[['sun','Pagaminta šiandien','24,6','kWh'],['home','Suvartota','18,2','kWh'],['battery','Baterija','82','%'],['euro','Sutaupyta šį mėn.','47','€']]
   .map(k=>`<div class="tile"><div class="k">${ic(k[0])}${k[1]}</div><div class="v">${k[2]}<small>${k[3]}</small></div></div>`).join('');
  // grafikas
  const W=600,H=220,pad=20,sol=[],use=[],pr=[];
  for(let h=0;h<24;h++){sol.push(Math.max(0,7.2*Math.sin(Math.PI*(h-6.5)/13))*(h>6&&h<20?1:0));use.push(0.6+(h>=6&&h<=8?1.6:0)+(h>=17&&h<=21?2.2:0)+(h>=10&&h<=15?3.4:0)*0.5+Math.sin(h)*0.2);pr.push(0.08+0.06*Math.sin(Math.PI*(h-4)/12)+(h>=17&&h<=20?0.07:0))}
  const x=i=>pad+i*(W-2*pad)/23,y=v=>H-pad-v*(H-2*pad)/8,yp=v=>H-pad-v*(H-2*pad)/0.25;
  const path=(a,f)=>a.map((v,i)=>(i?'L':'M')+x(i).toFixed(1)+','+f(v).toFixed(1)).join('');
  let g='';for(let i=0;i<=4;i++){const yy=pad+i*(H-2*pad)/4;g+=`<line x1="${pad}" x2="${W-pad}" y1="${yy}" y2="${yy}" stroke="rgba(255,255,255,.18)" stroke-width="1"/>`}
  [0,6,12,18,23].forEach(h=>g+=`<text x="${x(h)}" y="${H-4}" fill="rgba(255,255,255,.7)" font-size="11" text-anchor="middle">${h}:00</text>`);
  $('#chart').innerHTML=`<defs><linearGradient id="gs" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffd877" stop-opacity=".35"/><stop offset="1" stop-color="#ffd877" stop-opacity="0"/></linearGradient></defs>${g}
   <path d="${path(sol,y)}L${x(23)},${y(0)}L${x(0)},${y(0)}Z" fill="url(#gs)"/>
   <path d="${path(sol,y)}" fill="none" stroke="#ffd877" stroke-width="2"/>
   <path d="${path(use,y)}" fill="none" stroke="#ffffff" stroke-width="2"/>
   <path d="${path(pr,yp)}" fill="none" stroke="#ece6ff" stroke-width="1.5" stroke-dasharray="4 4"/>`;
  $('#devs').innerHTML=[['thermo','Šilumos siurblys','Šildymas · 21,5 °C','on'],['wind','Rekuperatorius','2 greitis · 18 °C pritekamas','on'],['sun','Solis inverteris','6,8 kW · krauna bateriją','on'],['battery','Baterija','82 % · +2,4 kW','on'],['car','EV įkroviklis','3,6 kW iš pertekliaus','on'],['shield','Apsauga','Išjungta (namie)','off'],['cam','Kiemo kamera','Įrašo','on'],['drop','Drėkintuvas','Drėgmė 38 % · vandens mažai','warn'],['blinds','Žaliuzės','Svetainė 60 %','on']]
   .map(d=>`<div class="dev"><div class="ico">${ic(d[0])}</div><div><div class="dn">${d[1]}</div><div class="ds">${d[2]}</div></div><span class="dot ${d[3]==='on'?'':d[3]}"></span></div>`).join('');
  $('#autos').innerHTML=[['Baterijos krovimas pigiausiomis nakties valandomis','Jei rytdienos saulės prognozė maža',1],['EV krovimas iš saulės pertekliaus','Nuo 1,4 kW pertekliaus, 6–16 A',1],['Šildymo pakėlimas pigiomis valandomis','+1 °C, kai kaina žemiau vidurkio',1],['Rekuperatoriaus boost režimas','Kai CO₂ viršija 1000 ppm',1],['Žaliuzės pagal saulę','Vasarą uždaro pietinę pusę po 12:00',0],['Režimas „Išvykstu“','Išjungia šviesas, įjungia apsaugą',1]]
   .map(a=>`<div class="dev"><div><div class="dn">${a[0]}</div><div class="ds">${a[1]}</div></div><label class="sw"><input type="checkbox" ${a[2]?'checked':''}><span></span></label></div>`).join('');
  $('#ntfs').innerHTML=[['bolt','Baterija bus kraunama 02:00–05:00 (kaina 0,06 €/kWh)','Šiandien, 21:05'],['drop','Drėkintuve baigiasi vanduo','Šiandien, 13:12'],['sun','Rekordinė lapkričio gamyba: 24,6 kWh','Šiandien, 12:40'],['shield','Sistemos atnaujinimas įdiegtas sėkmingai','Vakar, 03:00']]
   .map(n=>`<div class="ntf">${ic(n[0])}<div><div>${n[1]}</div><div class="t">${n[2]}</div></div></div>`).join('');
  $('#ords').innerHTML=[['2026-11-04','Energijos optimizavimas (Nord Pool + baterija)','250 €','prog','Vykdoma'],['2026-10-12','EV įkroviklio integracija','110 €','done','Atlikta'],['2026-09-20','Home Assistant Green + 9 įrenginiai','964 €','done','Atlikta'],['2026-09-20','Priežiūra „Standartinė“','19 €/mėn.','done','Aktyvi']]
   .map(o=>`<tr><td>${o[0]}</td><td>${o[1]}</td><td>${o[2]}</td><td><span class="st ${o[3]}">${o[4]}</span></td></tr>`).join('');
}
let authed=false;
$('#loginForm').addEventListener('submit',e=>{e.preventDefault();authed=true;$('#lPass').value='';showPlatform()});
$('#logout').onclick=()=>{authed=false;showPlatform()};
function showPlatform(){$('#loginView').style.display=authed?'none':'';$('#dashView').style.display=authed?'':'none';if(authed)renderDash()}
$('#dtabs').addEventListener('click',e=>{const t=e.target.closest('.tab');if(!t)return;document.querySelectorAll('.tab').forEach(x=>x.classList.toggle('on',x===t));document.querySelectorAll('.tp').forEach(p=>p.classList.toggle('on',p.id===t.dataset.t))});

/* ===================== KONTAKTAI ===================== */
$('#cForm').addEventListener('submit',e=>{
  e.preventDefault();const ok=$('#cOk');
  ok.style.display='block';
  ok.innerHTML='<b>Užklausa paruošta.</b> Tai pirmoji svetainės versija – automatinis siuntimas bus prijungtas kitame etape. Kol kas nusiųskite užklausą el. paštu <b>info@protingesninamai.lt</b>. <button type="button" class="btn btn-g btn-sm" id="copyMsg" style="margin-top:10px">Kopijuoti užklausos tekstą</button>';
  $('#copyMsg').onclick=async ev=>{const txt=`${$('#cName').value} · ${$('#cEmail').value} · ${$('#cPhone').value} · ${$('#cCity').value}\n\n${$('#cMsg').value}`;try{await navigator.clipboard.writeText(txt);ev.target.textContent='Nukopijuota'}catch(_){ev.target.textContent='Nepavyko nukopijuoti'}};
});
const cg=$('#contactGrid');const mq=matchMedia('(max-width:860px)');const lay=()=>cg.style.gridTemplateColumns=mq.matches?'1fr':'1.4fr 1fr';mq.addEventListener('change',lay);lay();

/* ===================== MARŠRUTIZAVIMAS ===================== */
const PAGES=['pradzia','privalumai','kaip-veikia','paslaugos','skaiciuotuvas','platforma','apie','kontaktai','dizainas'];
let serviceToolsLoading = false;
let serviceToolsReady = false;
function loadServiceTools() {
  if (serviceToolsReady || serviceToolsLoading) return;
  serviceToolsLoading = true;
  const status = document.getElementById('service-tools-status');
  const pages = ['p-skaiciuotuvas', 'p-paslaugos'].map(id => document.getElementById(id));
  pages.forEach(page => { page.inert = true; });
  status.textContent = 'Įkeliama…';
  const script = document.createElement('script');
  script.src = 'service-tools.js?v=4.30';
  script.onload = () => {
    serviceToolsReady = true;
    serviceToolsLoading = false;
    pages.forEach(page => { page.inert = false; });
    status.replaceChildren();
  };
  script.onerror = () => {
    serviceToolsLoading = false;
    script.remove();
    const retry = document.createElement('button');
    retry.type = 'button';
    retry.className = 'btn btn-g';
    retry.textContent = 'Nepavyko įkelti. Bandyti dar kartą';
    retry.onclick = loadServiceTools;
    status.replaceChildren(retry);
  };
  document.head.append(script);
}
function route(){
 const h=location.hash.slice(1);
 const alias={'lokalumas':'privalumai','v14-showcase':'kaip-veikia','skydeliai':'paslaugos','demo':'paslaugos','iranga':'skaiciuotuvas'};
 const p=alias[h]||(PAGES.includes(h)?h:'pradzia');
 document.querySelectorAll('.page').forEach(el=>el.classList.toggle('on',el.id==='p-'+p));
 document.querySelectorAll('.links a,.pn-journey-nav a').forEach(el=>{const active=el.getAttribute('href')==='#'+p;el.classList.toggle('on',active);if(active)el.setAttribute('aria-current','page');else el.removeAttribute('aria-current')});
 if(typeof pvOpen!=='undefined'&&pvOpen&&p!=='skaiciuotuvas')closePreview();
 $('#links').classList.remove('open');$('#menuBtn').setAttribute('aria-expanded','false');$('#menuBtn').setAttribute('aria-label','Atidaryti meniu');
 const needsTools = p === 'skaiciuotuvas' || p === 'paslaugos';
 $('#service-tools-status').hidden = !needsTools;
 if (needsTools) loadServiceTools();
 if (p === 'kaip-veikia') {
   const frame = document.querySelector('.pn-device-iframe');
   if (!frame.hasAttribute('src')) frame.src = frame.dataset.src;
 }
 if(p==='platforma')showPlatform();
 if(h==='iranga'){setTimeout(()=>document.getElementById('pn-buy-section')?.scrollIntoView({behavior:'smooth',block:'start'}),80)}
 if(h==='v14-showcase'){const detail=document.getElementById('pn-film-expand');if(detail)detail.open=true;}
 if(h==='lokalumas'||h==='v14-showcase'||h==='skydeliai'||h==='demo'||h==='iranga'){
  const target=h==='skydeliai'||h==='demo'?'demo':h;
  if(h!=='iranga')setTimeout(()=>document.getElementById(target)?.scrollIntoView({behavior:'smooth',block:'start'}),70);
 }else window.scrollTo(0,0);
}
addEventListener('hashchange',route);
document.querySelectorAll('.links a,.pn-journey-nav a').forEach(link=>link.addEventListener('click',()=>{if(location.hash===link.getAttribute('href'))route()}));
$('#menuBtn').onclick=()=>{
 const nav=$('#links'),open=nav.classList.toggle('open'),btn=$('#menuBtn');
 btn.setAttribute('aria-expanded',String(open));
 btn.setAttribute('aria-label',open?'Uždaryti meniu':'Atidaryti meniu');
};
document.addEventListener('pointerdown',e=>{
 const nav=$('#links'),btn=$('#menuBtn');
 if(nav.classList.contains('open')&&!nav.contains(e.target)&&!btn.contains(e.target)){
  nav.classList.remove('open');btn.setAttribute('aria-expanded','false');btn.setAttribute('aria-label','Atidaryti meniu');
 }
});
document.addEventListener('keydown',e=>{
 if(e.key==='Escape'&&$('#links').classList.contains('open')){
  $('#links').classList.remove('open');$('#menuBtn').setAttribute('aria-expanded','false');
  $('#menuBtn').setAttribute('aria-label','Atidaryti meniu');$('#menuBtn').focus();
 }
});
$('#yr').textContent=new Date().getFullYear();

fillIcons();
document.querySelectorAll('.tile .k[data-ic]').forEach((el,i)=>el.insertAdjacentText('beforeend',['Saulė','Baterija','Namai','Elektromobilis'][i]));
route();

;

/* v1.4 showcase: isolated from existing calculator and dashboards */
(function(){
 const root=document.getElementById('v14-showcase');if(!root)return;
 const by=id=>document.getElementById(id),sun=by('v14-sun'),wind=by('v14-wind'),temp=by('v14-temp'),home=by('v14-home');
 const presets={autumn:[9,20,11,true],spring:[38,6,18,true],winter:[3,8,-14,true]};
 const esc=x=>String(x).replace(/&/g,'&amp;').replace(/</g,'&lt;');
 function render(){
 const s=+sun.value,w=+wind.value,t=+temp.value,h=home.checked;
 by('v14-sun-out').textContent=s+' kWh';by('v14-wind-out').textContent=w+' m/s';by('v14-temp-out').textContent=t+' °C';
 const decisions=[
 ['Baterija',w>=14?'Rezervas pirmiausia':s<=15?'Svarstyti naktinį krovimą':'Pirmenybė rytojaus saulei',w>=14?'Artėjant stipriam vėjui atsargos prioritetas aukštesnis už įprastą optimizavimą.':s<=15?'Maža saulės prognozė: tikrinti SOC, kainą ir numatomą vartojimą.':'Saulės prognozė palanki: palikti vietos dienos gamybai, jei leidžia rezervas.'],
 ['Elektromobilis',s>=25?'Planuoti saulės laiką':'Vertinti pigesnes valandas','Įkrovimą lemia išvykimo laikas, reikiamas energijos kiekis ir galios ribos.'],
 ['Šildymas',t<8?'Šildymo poreikis didesnis':t>16?'Šildymo poreikis mažesnis':'Palaikyti komfortą','Temperatūra '+t+' °C; galutinį režimą lemia pastato šilumos poreikis ir šilumos siurblio kreivė.'],
 ['Karštas vanduo',h?'Paruošti pagal poreikį':'Taupyti, jei leidžia higiena',h?'Planuoti vandens ruošimą pagal naudojimą ir galimą saulės perteklių.':'Kai namuose nieko nėra, mažinti nereikalingą ruošimą nepažeidžiant higienos reikalavimų.']
 ];
 by('v14-decisions').innerHTML=decisions.map(d=>'<div class="v14-result"><strong>'+esc(d[0])+' <span class="v14-pill">'+esc(d[1])+'</span></strong><small>'+esc(d[2])+'</small></div>').join('');
 }
 root.querySelectorAll('[data-v14-preset]').forEach(b=>b.addEventListener('click',()=>{const p=presets[b.dataset.v14Preset];sun.value=p[0];wind.value=p[1];temp.value=p[2];home.checked=p[3];root.querySelectorAll('[data-v14-preset]').forEach(x=>x.setAttribute('aria-pressed',String(x===b)));render()}));
 [sun,wind,temp,home].forEach(x=>x.addEventListener('input',()=>{root.querySelectorAll('[data-v14-preset]').forEach(b=>b.setAttribute('aria-pressed','false'));render()}));render();
 const toggle=by('v14-theme-toggle');if(toggle){toggle.addEventListener('click',()=>{const dark=document.body.classList.toggle('v14-dark');toggle.textContent=dark?'☀ Šviesi tema':'☾ Tamsi tema';toggle.setAttribute('aria-pressed',String(dark));try{localStorage.setItem('pn-theme',dark?'dark':'light')}catch(e){}});try{if(localStorage.getItem('pn-theme')==='dark'){document.body.classList.add('v14-dark');toggle.textContent='☀ Šviesi tema';toggle.setAttribute('aria-pressed','true')}}catch(e){}}
})();

;

/* v1.5 interactive charts and timeline */
(function(){
 const $=id=>document.getElementById(id);if(!$('v15-energy-svg'))return;
 const sun=$('v14-sun'),wind=$('v14-wind'),temp=$('v14-temp'),hour=$('v15-hour');
 const NS='http://www.w3.org/2000/svg',mk=(tag,attrs,txt)=>{const n=document.createElementNS(NS,tag);Object.entries(attrs||{}).forEach(([k,v])=>n.setAttribute(k,v));if(txt!==undefined)n.textContent=txt;return n};
 const px=i=>58+i*(620/23),py=v=>226-v*(188/6);
 function series(){const total=+sun.value;let weights=Array.from({length:24},(_,i)=>Math.max(0,Math.sin((i-6)*Math.PI/13)));const sum=weights.reduce((a,b)=>a+b,0)||1;const solar=weights.map(x=>x/sum*total);const load=Array.from({length:24},(_,i)=>0.35+(i>=6&&i<=8?.55:0)+(i>=17&&i<=22?.8:0)+(+temp.value<0?.45:0));let soc=40;const battery=solar.map((v,i)=>{soc=Math.max(15,Math.min(95,soc+(v-load[i])*2.8));return soc});return {solar,load,battery}}
 const path=a=>a.map((v,i)=>(i?'L':'M')+px(i).toFixed(1)+','+py(v).toFixed(1)).join(' ');
 function render(){
 const {solar,load,battery}=series(),g=$('v15-grid');g.replaceChildren();
 [0,2,4,6].forEach(v=>{g.append(mk('line',{x1:58,y1:py(v),x2:678,y2:py(v),stroke:'currentColor','stroke-opacity':'.14'}));g.append(mk('text',{x:48,y:py(v)+4,'text-anchor':'end'},v+' kW'))});
 [0,6,12,18,23].forEach(i=>g.append(mk('text',{x:px(i),y:254,'text-anchor':'middle'},String(i).padStart(2,'0')+':00')));
 $('v15-solar-line').setAttribute('d',path(solar));$('v15-solar-area').setAttribute('d',path(solar)+'L'+px(23)+','+py(0)+'L'+px(0)+','+py(0)+'Z');
 $('v15-load-line').setAttribute('d',path(load));$('v15-battery-line').setAttribute('d',path(battery.map(v=>v*.06)));
 const h=+hour.value,c=$('v15-cursor');c.replaceChildren(mk('line',{x1:px(h),y1:25,x2:px(h),y2:226,stroke:'currentColor','stroke-opacity':'.45','stroke-dasharray':'4 4'}),mk('circle',{cx:px(h),cy:py(solar[h]),r:5,fill:'#e3a91e',stroke:'#fff','stroke-width':2}));
 $('v15-hour-label').textContent=String(h).padStart(2,'0')+':00';
 const note=solar[h]>load[h]?'Saulės gamyba viršija vartojimą: galimas baterijos krovimas arba kitas naudingas pertekliaus panaudojimas.':h<7?'Nakties valandos: krovimo sprendimas priklausytų nuo tarifo, SOC ir rytojaus prognozės.':'Namų vartojimas viršija saulės gamybą: trūkumas dengiamas baterija arba tinklu pagal nustatytas taisykles.';
 $('v15-hour-detail').textContent=String(h).padStart(2,'0')+':00 · Saulė '+solar[h].toFixed(1)+' kW · Vartojimas '+load[h].toFixed(1)+' kW · Baterija ~'+Math.round(battery[h])+' %. '+note;
 }
 function timeline(){
 [['v15-energy-lane',i=>i>=8&&i<=18?'solar':i<7?'night':'idle'],['v15-comfort-lane',i=>i>=5&&i<=8||i>=18&&i<=22?'comfort':'idle'],['v15-ev-lane',i=>i>=23||i<=5?'ev':'idle']].forEach(([id,kind])=>{const el=$(id);el.replaceChildren();for(let i=0;i<24;i++){const b=document.createElement('button');b.type='button';b.className='v15-bar v15-bar--'+kind(i);b.title=String(i).padStart(2,'0')+':00 – rodyti sprendimą';b.setAttribute('aria-label',b.title);b.onclick=()=>{hour.value=i;render();$('v15-energy-svg').scrollIntoView({behavior:'smooth',block:'center'})};el.append(b)}})
 }
 hour.addEventListener('input',render);[sun,wind,temp].forEach(el=>el.addEventListener('input',render));document.querySelectorAll('[data-v14-preset]').forEach(el=>el.addEventListener('click',()=>requestAnimationFrame(render)));timeline();render();
})();

;

(function(){
 const root=document.getElementById('pn-cinema');if(!root)return;
 const el=id=>document.getElementById(id),slider=el('pn-film-hour'),play=el('pn-film-play');
 const fmt=n=>n.toFixed(1).replace('.',','),clock=h=>String(h).padStart(2,'0')+':00';
 let storm=false,timer=null;
 function stop(){if(timer!==null){clearInterval(timer);timer=null}play.textContent='▶ Paleisti parą';play.setAttribute('aria-pressed','false')}
 function render(){
  const h=+slider.value,night=h>=20||h<6,dawn=h>=6&&h<=9,phase=storm?'storm':night?'night':dawn?'dawn':'day';
  const pv=storm?0:(h<6||h>=20?0:Math.max(0,7.4*Math.sin((h-6)*Math.PI/14)));
  const use=h>=18?1.8:h<=8?1.4:1.5;
  const soc=Math.round(storm?73:h<7?53:h<12?53+(h-7)*6:h<18?Math.min(93,83+(h-12)*1.5):Math.max(40,92-(h-18)*8));
  const charging=!storm&&pv>use+1.1,ev=charging&&pv>4.7;
  const title=storm?'Dingo tinklo elektra':night?'Naktį gali padėti baterija':dawn?'Saulė pradeda gaminti':charging?'Saulės perteklius naudojamas sumaniai':'Namai naudoja saulės energiją';
  const info=storm?'Jeigu yra tinkamai įrengtas rezervinis maitinimas, baterija gali aprūpinti svarbiausius prietaisus.':night?'Namai gali naudoti sukauptą energiją iki nustatytos rezervinės ribos.':dawn?'Kylanti saulė pradeda gaminti elektrą ir mažina poreikį iš tinklo.':charging?'Energija pirmiausia naudojama namams, o perteklių galima skirti baterijai ir elektromobiliui.':'Saulės elektrinė padeda mažinti energijos poreikį iš tinklo.';
  root.dataset.phase=phase;root.dataset.solar=pv>.13?'on':'off';
  root.dataset.battery=storm||pv<use?'out':charging?'in':'off';
  root.dataset.ev=ev?'on':'off';root.dataset.grid='off';
  el('pn-film-clock').textContent=clock(h)+' · '+(storm?'Audra':night?'Naktis':dawn?'Aušra':'Saulėta');
  el('pn-film-grid').textContent=storm?'● Tinklas nutrūkęs':'● Tinklas veikia';
  el('pn-film-hour-label').textContent=clock(h);
  el('pn-film-pv').innerHTML=fmt(pv)+' <small>kW</small>';
  el('pn-film-load').innerHTML=fmt(use)+' <small>kW</small>';
  el('pn-film-soc').innerHTML=soc+' <small>%</small>';
  el('pn-film-net').textContent=storm?'Atsijungęs':'Veikia';
  el('pn-film-title').textContent=title;el('pn-film-explain').textContent=info;
  el('pn-film-caption-icon').textContent=storm?'⛈️':night?'🔋':dawn?'🌅':'☀️';
  el('pn-film-caption').textContent=storm?'Avarinis rezervas':night?'Energija iš baterijos':dawn?'Saulėtekis':'Namus maitina saulė';
  const sy=phase==='night'?550:Math.round(250-210*Math.max(0,Math.sin((h-6)*Math.PI/14)));
  el('pnfilm-sun').style.transform='translate('+Math.round(90+(h-5)*36)+'px,'+sy+'px)';
  const chosen=storm?'storm':night?'night':dawn?'dawn':'day';
  root.querySelectorAll('[data-scene]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.scene===chosen)));
 }
 root.querySelectorAll('[data-scene]').forEach(btn=>btn.addEventListener('click',()=>{stop();storm=btn.dataset.scene==='storm';slider.value=btn.dataset.scene==='dawn'?7:btn.dataset.scene==='day'?13:btn.dataset.scene==='storm'?16:22;render()}));
 slider.addEventListener('input',()=>{stop();storm=false;render()});
 play.addEventListener('click',()=>{if(timer!==null){stop();return}storm=false;slider.value=5;render();play.textContent='⏸ Sustabdyti';play.setAttribute('aria-pressed','true');timer=setInterval(()=>{const h=+slider.value+1;if(h>23){stop();return}slider.value=h;render()},950)});
 document.addEventListener('visibilitychange',()=>{if(document.hidden)stop()});
 render();
})();

;
document.addEventListener('DOMContentLoaded',function(){
 const colors=[["blue","Mėlyna","#285CBA","#B5D6FF","#E6F1FF"],["cobalt","Kobaltas","#2356C6","#A7C9FF","#E1EDFF"],["royal","Karališka","#224EC0","#BCD0FF","#E9EFFF"],["sapphire","Safyras","#1D60A5","#ACD7FF","#E4F2FF"],["azure","Žydra","#0879B7","#A2E0FF","#E3F6FF"],["ocean","Vandenynas","#09679B","#9FD7EC","#DBF0F8"],["navy","Tamsiai mėlyna","#274883","#B5C8EB","#E9EEFA"],["ice","Ledo mėlyna","#367C9C","#B9EAF3","#EBFBFD"],["sky","Dangaus","#3281CA","#BEE5FF","#EAF7FF"],["denim","Džinso","#38699B","#AFD0EF","#EAF2FA"],["electric","Elektrinė","#1954E4","#B0C8FF","#E8EEFF"],["indigo","Indigo mėlyna","#4859A8","#C2CAFF","#ECEEFF"],["lagoon","Lagūna","#087F9B","#A5E7ED","#DFF7F8"],["steel","Plieno mėlyna","#3F648B","#B5D1E5","#EAF2F7"],["fjord","Fiordas","#225C81","#A9D4E4","#E5F3F7"],["arctic","Arkties","#237CA9","#C8ECFA","#EDF9FD"],["twilight","Sutemų","#455C9A","#BFCBF0","#ECEFFD"],["marine","Jūrinė","#18608B","#A9D9EC","#E5F3FA"],["periwinkle","Rugiagėlių","#6472BB","#D5D9FF","#F0F1FF"],["deepblue","Gilioji mėlyna","#184A83","#A9C5EA","#E6F0FC"]],styles=[["aurora","Aurora","Subtilus poliarinis švytėjimas",140,24,16,0.12,"drift"],["aurora-ice","Aurora Ice","Ledinis stiklas ir šalti atspindžiai",170,28,24,0.18,"frost"],["aurora-ocean","Aurora Ocean","Gylis ir bangų formos",115,22,18,0.19,"wave"],["aurora-glass","Aurora Glass","Stiklo sluoksniai",158,30,29,0.22,"glass"],["aurora-mist","Aurora Mist","Miglotos šviesos",185,34,33,0.1,"soft"],["aurora-crystal","Aurora Crystal","Ryškūs kristalo kraštai",50,13,12,0.2,"prism"],["aurora-prism","Aurora Prism","Daugialypiai spalvų lūžiai",62,23,16,0.32,"prism"],["aurora-wave","Aurora Wave","Judėjimo ir bangų ritmas",107,30,18,0.27,"wave"],["aurora-halo","Aurora Halo","Šviesos aureolės",132,40,26,0.3,"halo"],["aurora-neon","Aurora Neon","Intensyvūs švytintys akcentai",125,19,14,0.34,"neon"],["aurora-pearl","Aurora Pearl","Šviesūs perlamutro paviršiai",156,32,19,0.09,"pearl"],["aurora-deep","Aurora Deep","Gilūs mėlyni paviršiai",218,17,16,0.22,"deep"],["aurora-silk","Aurora Silk","Švelnios šilkinės perėjos",164,31,17,0.12,"soft"],["aurora-horizon","Aurora Horizon","Šviesos horizontas",95,22,14,0.19,"horizon"],["aurora-cosmos","Aurora Cosmos","Kosminio ūko sluoksniai",246,27,25,0.31,"cosmos"],["aurora-cloud","Aurora Cloud","Plūduriuojančios kortelės",148,38,23,0.13,"cloud"],["aurora-cloud-soft","Aurora Cloud Soft","Švelnesni matiniai debesys",150,39,22,0.1,"cloud"],["aurora-cloud-breeze","Aurora Cloud Breeze","Lengvas ir gaivus švytėjimas",143,36,18,0.12,"cloud"],["aurora-cloud-pearl","Aurora Cloud Pearl","Perlamutriniai atspindžiai",154,40,26,0.12,"pearl"],["aurora-cloud-sunset","Aurora Cloud Sunset","Šiltas saulėlydžio atspindys",138,38,24,0.14,"cloud"],["aurora-cloud-glass","Aurora Cloud Glass","Subtilus stiklinių kortelių gylis",157,35,30,0.16,"glass"],["aurora-luxe","Aurora Luxe","Prabangus mėlyno stiklo paviršius",131,21,18,0.24,"luxe"],["aurora-frost","Aurora Frost","Matinis stiklas ir subtili tekstūra",171,23,36,0.15,"frost"],["aurora-midnight","Aurora Midnight","Nakties šviesos efektai",235,16,22,0.29,"deep"],["aurora-minimal","Aurora Minimal","Švytėjimas be vizualinio triukšmo",152,14,9,0.07,"minimal"]],fonts=[["outfit","Outfit","Outfit"],["jakarta","Plus Jakarta Sans","Plus Jakarta Sans"],["manrope","Manrope","Manrope"],["dm","DM Sans","DM Sans"],["inter","Inter","Inter"],["figtree","Figtree","Figtree"],["nunito","Nunito Sans","Nunito Sans"],["poppins","Poppins","Poppins"],["sora","Sora","Sora"],["urbanist","Urbanist","Urbanist"],["jost","Jost","Jost"],["rubik","Rubik","Rubik"],["lexend","Lexend","Lexend"],["quicksand","Quicksand","Quicksand"],["montserrat","Montserrat","Montserrat"],["mulish","Mulish","Mulish"],["raleway","Raleway","Raleway"],["work","Work Sans","Work Sans"],["space","Space Grotesk","Space Grotesk"],["onest","Onest","Onest"]];
 const gradients=[["northern","Šiaurės pašvaistė","radial-gradient(ellipse 70% 55% at 16% 5%,color-mix(in srgb,var(--pn-accent-light) 67%,transparent),transparent 72%),radial-gradient(ellipse 76% 65% at 96% 17%,color-mix(in srgb,var(--pn-accent) 18%,transparent),transparent 73%),linear-gradient(138deg,var(--pn-base-a),var(--pn-base-b))"],["ocean","Vandenyno gelmė","radial-gradient(ellipse at 78% 16%,color-mix(in srgb,var(--pn-accent) 21%,transparent),transparent 60%),linear-gradient(158deg,var(--pn-base-a) 5%,var(--pn-base-b) 52%,var(--pn-base-a))"],["ice","Ledynas","linear-gradient(125deg,var(--pn-base-a) 10%,color-mix(in srgb,var(--pn-accent-soft) 47%,var(--pn-base-b)) 55%,var(--pn-base-a))"],["nebula","Ūkas","radial-gradient(circle at 16% 18%,color-mix(in srgb,var(--pn-accent-light) 57%,transparent),transparent 43%),radial-gradient(circle at 88% 63%,color-mix(in srgb,var(--pn-accent) 30%,transparent),transparent 50%),linear-gradient(120deg,var(--pn-base-a),var(--pn-base-b))"],["horizon","Horizontas","linear-gradient(180deg,var(--pn-base-a) 0%,color-mix(in srgb,var(--pn-accent-soft) 28%,var(--pn-base-b)) 48%,var(--pn-base-b) 100%)"],["sky","Dangus","radial-gradient(circle at 63% 8%,color-mix(in srgb,var(--pn-accent-light) 60%,transparent),transparent 46%),linear-gradient(160deg,var(--pn-base-a),var(--pn-base-b))"],["prism","Prizmė","linear-gradient(115deg,var(--pn-base-a),color-mix(in srgb,var(--pn-accent-soft) 46%,var(--pn-base-b)),var(--pn-base-a) 92%)"],["wave","Bangos","radial-gradient(ellipse 90% 30% at 15% 30%,color-mix(in srgb,var(--pn-accent-light) 44%,transparent),transparent),radial-gradient(ellipse 85% 39% at 86% 73%,color-mix(in srgb,var(--pn-accent) 22%,transparent),transparent),linear-gradient(170deg,var(--pn-base-a),var(--pn-base-b))"],["silk","Šilkas","linear-gradient(130deg,var(--pn-base-a),color-mix(in srgb,var(--pn-accent-soft) 42%,var(--pn-base-b)) 36%,var(--pn-base-a) 72%,var(--pn-base-b))"],["halo","Aureolė","radial-gradient(circle 320px at 50% 23%,color-mix(in srgb,var(--pn-accent-light) 70%,transparent),transparent),linear-gradient(145deg,var(--pn-base-a),var(--pn-base-b))"],["deep","Gylis","linear-gradient(210deg,var(--pn-base-b),color-mix(in srgb,var(--pn-accent) 25%,var(--pn-base-a)),var(--pn-base-a))"],["clean","Švarus","linear-gradient(135deg,var(--pn-base-a),var(--pn-base-b))"]],shadows=[["soft","Lengvas","0 9px 28px rgba(15,47,92,.10)"],["none","Be šešėlių","0 0 0 transparent"],["float","Plūduriavimas","0 15px 36px rgba(18,57,107,.17)"],["deep","Gilus","0 24px 58px rgba(13,36,78,.27)"],["layered","Sluoksniai","0 6px 13px rgba(14,37,82,.1),0 22px 55px rgba(24,69,121,.17)"],["fine","Subtilus","0 5px 15px rgba(29,68,93,.08)"],["cinema","Kinematografinis","0 30px 75px rgba(10,37,75,.25)"],["edge","Kontūrinis","0 0 0 1px rgba(55,110,176,.17),0 13px 32px rgba(13,49,83,.14)"]],glows=[["subtle","Subtilus",".13","25px"],["none","Be švytėjimo","0","0px"],["soft","Švelnus",".20","35px"],["aura","Aura",".28","52px"],["neon","Neoninis",".38","48px"],["halo","Aureolė",".24","70px"],["crystal","Kristalinis",".16","17px"],["cinema","Kino šviesa",".30","90px"]];
 const dualGradients=[["duo-blue-orange","Mėlyna → oranžinė","linear-gradient(135deg,#77aaf0 0%,#ffbc86 100%)"],["duo-blue-purple","Mėlyna → violetinė","linear-gradient(135deg,#76adf0 0%,#d9b7ee 100%)"],["duo-blue-mint","Mėlyna → mėtinė","linear-gradient(135deg,#76b4ef 0%,#9be4c9 100%)"],["duo-blue-pink","Mėlyna → rožinė","linear-gradient(135deg,#7ab0ed 0%,#fac1d3 100%)"],["duo-navy-gold","Jūrinė → auksinė","linear-gradient(135deg,#849dc9 0%,#f8d496 100%)"],["duo-turquoise-peach","Turkio → persikinė","linear-gradient(135deg,#84d8d4 0%,#ffbca2 100%)"],["duo-lavender-yellow","Violetinė → geltona","linear-gradient(135deg,#c1a8ee 0%,#ffe4a3 100%)"],["duo-green-blue","Žalia → mėlyna","linear-gradient(135deg,#a0d5b2 0%,#88b8ef 100%)"],["duo-coral-indigo","Koralinė → indigo","linear-gradient(135deg,#ffb49f 0%,#94a2ec 100%)"],["duo-sky-lime","Žydra → laimo","linear-gradient(135deg,#92d4ec 0%,#d6eaa0 100%)"],["duo-blue-peach","Mėlyna → persikinė","linear-gradient(135deg,#86ace9 0%,#fac5af 100%)"],["duo-blue-apricot","Mėlyna → abrikosinė","linear-gradient(135deg,#8cb8ed 0%,#fbd0a4 100%)"],["duo-sky-coral","Žydra → koralinė","linear-gradient(135deg,#8cc9ee 0%,#f5aca8 100%)"],["duo-lavender-peach","Levanda → persikinė","linear-gradient(135deg,#afaeea 0%,#fac4a9 100%)"],["duo-blue-champagne","Mėlyna → šampaninė","linear-gradient(135deg,#8daee8 0%,#f5d8bb 100%)"]];
 gradients.push(...dualGradients);
 const groups={color:colors,design:styles,font:fonts,gradient:gradients,shadow:shadows,glow:glows};
 const labels={color:'Spalva',design:'Stilius',font:'Šriftas',gradient:'Gradientas',shadow:'Šešėlis',glow:'Glow'};
 const defaults={"color":"blue","design":"aurora","font":"outfit","gradient":"northern","shadow":"soft","glow":"subtle","radius":24,"intensity":48,"fontSize":100};
 const $=id=>document.getElementById(id);
 const body=document.body;
 if(!$('pn-design-drawer')||!$('pn-ds-colors'))return;
 let selected={...defaults};
 try{const saved=JSON.parse(localStorage.getItem('pn-design-v4')||'null');if(saved&&typeof saved==='object'){for(const k of Object.keys(defaults))if(saved[k]!==undefined)selected[k]=saved[k]}}catch(e){}
 const valid=(k,v)=>groups[k].some(x=>x[0]===v)?v:defaults[k];
 const safeNumber=(v,min,max,fallback)=>Number.isFinite(Number(v))?Math.min(max,Math.max(min,Number(v))):fallback;
 function fontLoad(face){
  const id='pn-ds-font-stylesheet';let node=$(id);if(!node){node=document.createElement('link');node.id=id;node.rel='stylesheet';document.head.append(node)}
  if (node.dataset.face === face) return;
  node.dataset.face = face;
  node.href='https://fonts.googleapis.com/css2?family='+encodeURIComponent(face).replace(/%20/g,'+')+':wght@400;500;600;700;800&display=swap';
 }
 function setControls(){
   document.querySelectorAll('[data-pn-choice]').forEach(b=>b.setAttribute('aria-pressed',String(selected[b.dataset.pnChoice]===b.dataset.pnValue)));
   for(const k of Object.keys(groups)){
    const o=groups[k].find(v=>v[0]===selected[k]);const el=$('pn-mini-'+k);
    if(el)el.textContent=o?o[1]:'';
   }
   for(const type of ['radius','intensity']){
    const unit=type==='radius'?' px':' %';
    for(const prefix of ['pn-ds-','pn-mini-']){
     const el=$(prefix+type),out=$(prefix+type+'-out');
     if(el)el.value=selected[type];
     if(out)out.textContent=selected[type]+unit;
    }
   }
   for(const prefix of ['pn-ds-','pn-mini-']){
    const slider=$(prefix+'font-size'),out=$(prefix+'font-size-out');
    if(slider)slider.value=selected.fontSize;
    if(out)out.textContent=selected.fontSize+' %';
   }
   document.querySelectorAll('[data-pn-font-preset]').forEach(button=>button.setAttribute('aria-pressed',String(+button.dataset.pnFontPreset===selected.fontSize)));
   $('pn-ds-summary').textContent=[selected.color,selected.design,selected.font].map((v,i)=>groups[['color','design','font'][i]].find(x=>x[0]===v)[1]).join(' · ')+' · '+selected.fontSize+' % tekstas';
 }
 function apply(save=true){
  for(const k of Object.keys(groups))selected[k]=valid(k,selected[k]);
  selected.radius=safeNumber(selected.radius,8,44,defaults.radius);
  selected.intensity=safeNumber(selected.intensity,0,100,defaults.intensity);
  selected.fontSize=Math.round(safeNumber(selected.fontSize,85,125,defaults.fontSize)/5)*5;
  const c=colors.find(x=>x[0]===selected.color),f=fonts.find(x=>x[0]===selected.font);
  const gradient=gradients.find(x=>x[0]===selected.gradient);
  const shadow=shadows.find(x=>x[0]===selected.shadow);
  const glow=glows.find(x=>x[0]===selected.glow);
  body.dataset.pnColor=selected.color;body.dataset.pnDesign=selected.design;body.dataset.pnFont=selected.font;
  body.dataset.pnGradient=selected.gradient;body.dataset.pnShadow=selected.shadow;body.dataset.pnGlow=selected.glow;
  body.style.setProperty('--pn-accent',c[2]);
  body.style.setProperty('--pn-accent-light',c[3]);
  body.style.setProperty('--pn-accent-soft',c[4]);
  body.style.setProperty('--pn-custom-font',"'"+f[2]+"',system-ui,sans-serif");
  body.dataset.pnTextSize=String(selected.fontSize);
  body.style.setProperty('--pn-font-scale',String(selected.fontSize/100));
  body.style.setProperty('--pn-canvas-bg',gradient[2]);
  body.style.setProperty('--pn-custom-radius',selected.radius+'px');
  body.style.setProperty('--pn-intensity',String(selected.intensity/100));
  body.style.setProperty('--pn-shadow-choice',shadow[2]);
  body.style.setProperty('--pn-glow-choice','0 0 '+glow[3]+' color-mix(in srgb,var(--pn-accent) '+Math.round(Number(glow[2])*selected.intensity)+'%,transparent)');
  fontLoad(f[2]);setControls();
  if(save){try{localStorage.setItem('pn-design-v4',JSON.stringify(selected))}catch(e){}}
 }
 function choose(type,value){selected[type]=value;apply()}
 function advance(type,dir){
  const a=groups[type],i=a.findIndex(x=>x[0]===selected[type]);
  choose(type,a[(i+dir+a.length)%a.length][0]);
 }
 function buildOption(hostId,type,arr){
  const host=$(hostId);if(!host)return;host.replaceChildren();
  arr.forEach((x,i)=>{
    const b=document.createElement('button');b.type='button';b.className='pn-ds-option';b.dataset.pnChoice=type;b.dataset.pnValue=x[0];b.setAttribute('aria-pressed','false');
    const sw=document.createElement('span');sw.className='pn-ds-swatch';sw.textContent=type==='font'?'Aa':type==='design'?String(i+1).padStart(2,'0'):type==='color'?'●':type==='gradient'?'◒':type==='shadow'?'▣':'✦';
    sw.style.setProperty('--swatch',(type==='color'||type==='gradient')?x[2]:'#3b608e');
    if(type==='font')sw.style.fontFamily="'"+x[2]+"',system-ui";
    const copy=document.createElement('span');copy.className='pn-ds-text';
    const strong=document.createElement('strong');strong.textContent=x[1];
    const small=document.createElement('small');small.textContent=type==='design'?x[2]:type==='font'?'Į Outfit panašus šriftas':i===0?'Rekomenduojama':'';
    copy.append(strong,small);b.append(sw,copy);b.addEventListener('click',()=>choose(type,x[0]));host.append(b);
  });
 }
 function buildDesignOptions(){
  if(location.hash !== '#dizainas' || $('pn-ds-colors').childElementCount) return;
  [['pn-ds-colors','color',colors],['pn-ds-styles','design',styles],['pn-ds-fonts','font',fonts],
  ['pn-ds-gradients','gradient',gradients.filter(x=>!x[0].startsWith('duo-'))],['pn-ds-duos','gradient',dualGradients],['pn-ds-shadows','shadow',shadows],['pn-ds-glows','glow',glows]].forEach(([id,type,list])=>buildOption(id,type,list));
  setControls();
 }
 window.addEventListener('hashchange',buildDesignOptions);
 const drawer=$('pn-design-drawer'),trigger=$('pn-design-toggle');
 function setDrawer(open){drawer.hidden=!open;trigger.setAttribute('aria-expanded',String(open));if(open){const close=$('pn-design-close');if(close)close.focus()}}
 trigger.addEventListener('click',()=>setDrawer(drawer.hidden));
 $('pn-design-close').addEventListener('click',()=>setDrawer(false));
 $('pn-ds-open-drawer').addEventListener('click',()=>setDrawer(true));
 $('pn-design-full').addEventListener('click',()=>setDrawer(false));
 document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!drawer.hidden)setDrawer(false)});
 document.addEventListener('pointerdown',e=>{if(!drawer.hidden&&!e.target.closest('#pn-float-tools')&&!e.target.closest('#pn-ds-open-drawer'))setDrawer(false)});
 const mini=$('pn-design-navs');
 const duoQuick=document.createElement('button');
 duoQuick.type='button';duoQuick.className='pn-design-duo-quick';
 duoQuick.textContent='🌈 Kitas dvispalvis gradientas';
 duoQuick.setAttribute('aria-label','Pasirinkti kitą dviejų spalvų perėjimą');
 duoQuick.addEventListener('click',()=>{
   const i=dualGradients.findIndex(x=>x[0]===selected.gradient);
   choose('gradient',dualGradients[(i+1)%dualGradients.length][0]);
 });
 mini.append(duoQuick);
 Object.keys(groups).forEach(type=>{
  const row=document.createElement('div');row.className='pn-design-cycle';
  const title=document.createElement('span');title.textContent=labels[type];title.className='pn-design-cycle-title';
  const prev=document.createElement('button');prev.type='button';prev.textContent='‹';prev.setAttribute('aria-label',labels[type]+' ankstesnis');prev.addEventListener('click',()=>advance(type,-1));
  const val=document.createElement('strong');val.id='pn-mini-'+type;val.setAttribute('aria-live','polite');
  const next=document.createElement('button');next.type='button';next.textContent='›';next.setAttribute('aria-label',labels[type]+' kitas');next.addEventListener('click',()=>advance(type,1));
  row.append(title,prev,val,next);mini.append(row);
 });
 for(const type of ['radius','intensity']){
  for(const prefix of ['pn-mini-','pn-ds-']){
   const control=$(prefix+type);if(control)control.addEventListener('input',()=>{selected[type]=Number(control.value);apply()});
  }
 }
 for(const prefix of ['pn-ds-','pn-mini-']){
  const slider=$(prefix+'font-size');
  if(slider)slider.addEventListener('input',()=>{selected.fontSize=Number(slider.value);apply()});
 }
 document.querySelectorAll('[data-pn-font-preset]').forEach(button=>button.addEventListener('click',()=>{selected.fontSize=Number(button.dataset.pnFontPreset);apply()}));
 function reset(){selected={...defaults};apply()}
 $('pn-design-reset').addEventListener('click',reset);
 $('pn-ds-reset').addEventListener('click',reset);
 $('pn-ds-preview-apply').addEventListener('click',()=>{location.hash='pradzia'});
 apply(false);
 buildDesignOptions();
});
;

/* v4.4 motion controller. Independent of calculator and design-studio logic. */
(function(){
 const $=id=>document.getElementById(id);
 const reduced=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
 const saveData=Boolean(navigator.connection&&navigator.connection.saveData);
 const progress=$('pn-scroll-progress');
 let progressFrame=0;
 function updateProgress(){
   progressFrame=0;
   const max=Math.max(0,document.documentElement.scrollHeight-innerHeight);
   if(progress)progress.style.transform='scaleX('+(max>0?Math.min(1,Math.max(0,scrollY/max)):0)+')';
 }
 function progressQueued(){if(!progressFrame)progressFrame=requestAnimationFrame(updateProgress)}
 addEventListener('scroll',progressQueued,{passive:true});
 addEventListener('resize',progressQueued,{passive:true});
 requestAnimationFrame(updateProgress);

 // Reveal static sections only. Dynamic calculator items and dashboard controls are not hidden.
 let revealObserver=null;
 if(!reduced&&!saveData&&'IntersectionObserver' in window){
   revealObserver=new IntersectionObserver(entries=>{
     entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('pn-visible');revealObserver.unobserve(e.target)}})
   },{threshold:.08,rootMargin:'0px 0px -18px 0px'});
 }
 function revealActive(){
   const page=document.querySelector('.page.on');
   if(revealObserver&&page){
     const els=page.querySelectorAll('.pn-simple-card,.v17-services>a,.pn-inlife-grid>.card,.pn-local .card,#services>.card,#p-apie .card,#p-kontaktai .card');
     els.forEach((el,i)=>{
       if(el.classList.contains('pn-reveal'))return;
       el.classList.add('pn-reveal');
       el.style.setProperty('--pn-reveal-delay',Math.min(i%4,3)*75+'ms');
       revealObserver.observe(el);
     });
   }
   progressQueued();
 }
 requestAnimationFrame(revealActive);
 addEventListener('hashchange',()=>requestAnimationFrame(revealActive));
 addEventListener('pageshow',()=>requestAnimationFrame(revealActive));

 // A small tactile reaction on buttons; does not intercept their native actions.
 if(!reduced&&!saveData){
   document.addEventListener('pointerdown',event=>{
     const el=event.target.closest&&event.target.closest('.btn,.pn-journey-nav a,.pn-home-scenarios button');
     if(!el||event.button!==0)return;
     const rect=el.getBoundingClientRect();
     if(!rect.width||!rect.height)return;
     const circle=document.createElement('span');
     circle.className='pn-ripple';
     circle.style.setProperty('--pn-ripple-x',(event.clientX-rect.left)+'px');
     circle.style.setProperty('--pn-ripple-y',(event.clientY-rect.top)+'px');
     circle.style.setProperty('--pn-ripple-size',String(Math.ceil(Math.max(rect.width,rect.height)/9)+3));
     circle.setAttribute('aria-hidden','true');
     el.append(circle);
     circle.addEventListener('animationend',()=>circle.remove(),{once:true});
   },{passive:true});
 }
 const preview=document.querySelector('.v17-preview[data-pn-scene]');
 const group=document.querySelector('.pn-home-scenarios');
 if(!preview||!group)return;
 const switches=Array.from(group.querySelectorAll('button[data-pn-scene]'));
 const autoplay=$('pn-demo-play');
 const metrics=[
   {el:$('v17-pv'),unit:'kW',digits:1},
   {el:$('v17-soc'),unit:'%',digits:0},
   {el:$('v17-load'),unit:'kW',digits:1}
 ];
 const scenarios={
   day:{values:[6.8,82,1.9],fill:[70,82,25],insight:'Saulės energija pirmiausia naudojama namuose.'},
   evening:{values:[0.7,74,2.4],fill:[8,74,36],insight:'Saulei leidžiantis, baterija padeda padengti namų poreikį.'},
   night:{values:[0,63,1.3],fill:[0,63,20],insight:'Naktį namai gali naudoti baterijoje sukauptą energiją.'}
 };
 const format=(num,digits)=>num.toLocaleString('lt-LT',{minimumFractionDigits:digits,maximumFractionDigits:digits});
 let current='day',values=scenarios.day.values.slice(),frame=0,autoTimer=0;
 function writeNumbers(list){
   metrics.forEach((metric,i)=>{
     if(!metric.el)return;
     const first=metric.el.firstChild;
     if(first&&first.nodeType===3)first.nodeValue=format(list[i],metric.digits)+' ';
   });
 }
 function changeScene(id){
   if(!scenarios[id])return;
   const next=scenarios[id];
   preview.dataset.pnScene=id;
   switches.forEach(btn=>btn.setAttribute('aria-pressed',String(btn.dataset.pnScene===id)));
   const insight=$('v17-insight-text');
   if(insight)insight.textContent=next.insight;
   metrics.forEach((m,i)=>{const bar=m.el?.parentElement?.querySelector('.v17-meter');if(bar)bar.style.setProperty('--fill',next.fill[i]+'%')});
   cancelAnimationFrame(frame);
   if(reduced||saveData){values=next.values.slice();writeNumbers(values)}
   else{
     const start=values.slice(),end=next.values.slice(),started=performance.now(),duration=560;
     const tick=now=>{
       const t=Math.min(1,(now-started)/duration);
       const ease=1-Math.pow(1-t,3);
       values=start.map((v,i)=>v+(end[i]-v)*ease);
       writeNumbers(values);
       if(t<1)frame=requestAnimationFrame(tick);
     };
     frame=requestAnimationFrame(tick);
   }
   current=id;
 }
 switches.forEach(btn=>btn.addEventListener('click',()=>changeScene(btn.dataset.pnScene)));
 function stopAuto(){
   clearInterval(autoTimer);autoTimer=0;
   if(autoplay){autoplay.setAttribute('aria-pressed','false');autoplay.textContent='▶ Automatiškai'}
 }
 function startAuto(){
   if(reduced||saveData||document.hidden)return;
   stopAuto();
   autoTimer=setInterval(()=>{
     if(document.hidden||!document.querySelector('#p-pradzia.on')){stopAuto();return}
     const keys=Object.keys(scenarios),next=keys[(keys.indexOf(current)+1)%keys.length];
     changeScene(next);
   },5000);
   autoplay.setAttribute('aria-pressed','true');
   autoplay.textContent='Ⅱ Sustabdyti';
 }
 if(autoplay)autoplay.addEventListener('click',()=>autoTimer?stopAuto():startAuto());
 document.addEventListener('visibilitychange',()=>{if(document.hidden)stopAuto()});
 addEventListener('hashchange',()=>{if(location.hash&&location.hash!=='#pradzia')stopAuto()});
 changeScene('day');
})();

;

(function(){
 document.querySelectorAll('.pn-news-home-card img').forEach(function(img){
  let attempt=0,orig=img.getAttribute('src');
  function fallback(){
   const m=orig.match(/^(.*\/thumb\/[^/]+\/[^/]+\/)\d+px-([^/]+)$/);
   if(m && attempt===0){attempt=1;img.src=m[1]+'500px-'+m[2];return}
   if(m && attempt===1){attempt=2;img.src=m[1]+'330px-'+m[2];return}
   img.dataset.imgFailed='true';img.removeEventListener('error',fallback);
  }
  img.addEventListener('error',fallback);
  if(img.complete && img.naturalWidth===0)fallback();
 });
})();

;

/* PN_COMPARE_MOTION_V2: izoliuota demonstracijos logika */
(function(){
  "use strict";
  var section=document.querySelector('#p-pradzia .pn-compare-showcase');
  if(!section)return;
  var demo=section.querySelector('.pn-cmp-internet-demo');
  var toggle=section.querySelector('.pn-cmp-internet-toggle');
  if(demo && toggle){
    var label=toggle.querySelector('.pn-cmp-toggle-label');
    var cloud=demo.querySelector('[data-net-cloud]');
    var local=demo.querySelector('[data-net-local]');
    var offline=false;
    function render(){
      demo.dataset.offline=offline?'1':'0';
      toggle.setAttribute('aria-pressed',String(offline));
      label.textContent=offline?'Įjungti internetą':'Išjungti internetą';
      cloud.textContent=offline?'Debesijos funkcijos be interneto nepasiekiamos':'Interneto paslaugos pasiekiamos';
      local.textContent=offline?'Vietinis suderinamų įrenginių valdymas veikia toliau':'Vietinis suderinamų įrenginių valdymas veikia';
    }
    toggle.addEventListener('click',function(){offline=!offline;render()});
    render();
  }
  if('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches){
    var targets=section.querySelectorAll('.pn-compare-head,.pn-compare-visual,.pn-cmp-internet-demo,.pn-cmp-energy,.pn-compare-table-wrap');
    targets.forEach(function(el){el.classList.add('pn-cmp-reveal')});
    var obs=new IntersectionObserver(function(entries){
      entries.forEach(function(entry){if(entry.isIntersecting){entry.target.classList.add('pn-cmp-visible');obs.unobserve(entry.target)}});
    },{rootMargin:'0px 0px -25px 0px',threshold:.08});
    targets.forEach(function(el){obs.observe(el)});
  }
})();

;

/* PN_HA_DEVICE_PREVIEW_V3 — nesukuria nauju skydeliu, keicia tik iframe isore */
(function(){
 "use strict";
 var root=document.getElementById("pn-ha-demo-embed");
 if(!root)return;
 var stage=root.querySelector(".pn-device-stage");
 var sizer=root.querySelector(".pn-device-scale-box");
 var shell=root.querySelector(".pn-device-shell");
 var title=root.querySelector(".pn-device-profile-title");
 var description=root.querySelector(".pn-device-profile-description");
 var buttons=[].slice.call(root.querySelectorAll("button[data-pn-device]"));
 var devices={
  phone:{width:390,height:844,title:"Telefonas",desc:"Vertikalus telefono ekranas · 390 × 844 (peržiūros proporcijos)"},
  tablet:{width:960,height:600,title:"Samsung Galaxy Tab S12+",desc:"Horizontalus 16:10 ekranas · juodas rėmelis pagal pateiktą nuotrauką"},
  sonoff86:{width:480,height:480,title:"Sonoff NSPanel Pro 86",desc:"Kvadratinis 480 × 480 formato ekranas"},
  sonoff120:{width:375,height:667,title:"Sonoff NSPanel Pro 120",desc:"Vertikalus ekranas, atitinka 750 × 1334 proporcijas"},
  shelly:{width:900,height:450,title:"Shelly Wall Display X2i",desc:"Horizontalus ekranas, atitinka 1440 × 720 proporcijas"}
 };
 var selected="phone";
 function render(){
  var device=devices[selected];
  if(!device)return;
  var styles=window.getComputedStyle(stage);
  var freeWidth=stage.clientWidth-parseFloat(styles.paddingLeft||0)-parseFloat(styles.paddingRight||0)-8;
  if(freeWidth<=0)return;
  var scale=Math.min(1,freeWidth/device.width);
  shell.style.width=device.width+"px";
  shell.style.height=device.height+"px";
  shell.style.transform="scale("+scale+")";
  shell.setAttribute("data-pn-screen",selected);
  sizer.style.width=(device.width*scale)+"px";
  sizer.style.height=(device.height*scale)+"px";
  sizer.setAttribute("data-pn-profile",selected);
  title.textContent=device.title;
  description.textContent=device.desc;
  buttons.forEach(function(btn){
   var active=btn.getAttribute("data-pn-device")===selected;
   btn.classList.toggle("is-active",active);
   btn.setAttribute("aria-pressed",String(active));
  });
 }
 buttons.forEach(function(button){button.addEventListener("click",function(){
  selected=button.getAttribute("data-pn-device");
  render();
 })});
 if("ResizeObserver" in window){new ResizeObserver(render).observe(stage)}
 window.addEventListener("resize",render);
 document.addEventListener("click",function(e){if(e.target.closest('a[href="#kaip-veikia"]'))requestAnimationFrame(render)});
 window.addEventListener("hashchange",function(){if(location.hash==="#kaip-veikia")requestAnimationFrame(render)});
 if(location.hash==="#kaip-veikia")requestAnimationFrame(render);
 render();
})();
