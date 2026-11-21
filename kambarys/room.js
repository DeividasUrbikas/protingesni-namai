const scene=document.querySelector('.scene');
const devices=[
 ['main','Šviestuvas','Įjungtas','Išjungtas','<path d="M6 10a6 6 0 1 1 12 0c0 3-3 4-3 7H9c0-3-3-4-3-7Z"/><path d="M10 20h4"/>'],
 ['accent','Užuolaidų LED','Šviečia','Išjungtas','<path d="M3 6h18M4 9h16M6 13l-2 4m7-4v5m6-5 2 4"/>'],
 ['closed','Užuolaidos','Užtrauktos','Atitrauktos','<path d="M3 4h18M4 5v15h6l-3-7c3-1 4-5 4-8m9 0v15h-6l3-7c-3-1-4-5-4-8"/>'],
 ['cool','Kondicionierius','Pučia orą','Išjungtas','<rect x="2" y="3" width="20" height="9" rx="2"/><path d="M5 9h14M7 15q1 2-1 5m6-5q1 2-1 6m6-6q1 2-1 5"/>']
];
devices.push(['wash','Grindų robotas','Plauna grindis','Stotelėje','<ellipse cx="12" cy="13" rx="9" ry="6"/><path d="M3 13v3c0 3 4 5 9 5s9-2 9-5v-3"/><ellipse cx="12" cy="11" rx="3" ry="1.5"/>']);
let airMode='off', lastAirMode='cool', robotStatus='dock';
const motion=roomMotion(document.querySelector('.motion'), status=>{
  robotStatus=status;
  const label=document.querySelector('[data-k="wash"] small');
  if(label)label.textContent=robotText();
});
function robotText(){return {dock:'Stotelėje',return:'Grįžta į stotelę',wash:'Plauna grindis'}[robotStatus]}
const presets={'Sugrįžtu':[true,false,false,false,false],'Jaukus vakaras':[false,true,true,false,false],'Išvykstu':[false,false,true,false,true]};
let state=[...presets['Sugrįžtu']];
function render(){
 motion(airMode,state[4]);
 scene.dataset.cleaning=String(state[4]);
 scene.classList.toggle('heat',airMode==='heat');
 document.querySelectorAll('[data-mode]').forEach(b=>b.setAttribute('aria-pressed',b.dataset.mode===airMode));
 devices.forEach(([key,label,on,off],i)=>{scene.classList.toggle(key,key==='cool'?airMode==='cool':state[i]);document.querySelectorAll('[data-k="'+key+'"]').forEach(b=>{b.setAttribute('aria-pressed',state[i]);const status=key==='wash'?robotText():key==='cool'?({off:'Išjungtas',cool:'Vėsina',heat:'Šildo'}[airMode]):state[i]?on:off;b.title=label+' · '+status;if(b.querySelector('small'))b.querySelector('small').textContent=status})});
 const active=Object.keys(presets).find(name=>presets[name].every((v,i)=>v===state[i]));
 document.querySelector('.caption').textContent=active||'Mano nustatymai';
 document.querySelectorAll('.preset').forEach(b=>b.setAttribute('aria-pressed',b.textContent===active));
}
for(const [name,values] of Object.entries(presets)){const b=document.createElement('button');b.className='preset';b.textContent=name;b.onclick=()=>{state=[...values];airMode='off';render()};document.querySelector('.presets').append(b)}
devices.forEach(([key,label,on,off,path],i)=>{for(const type of (key==='wash'?['device']:['pin','device'])){const b=document.createElement('button');b.className=type;b.dataset.k=key;b.setAttribute('aria-label',label);b.innerHTML='<svg aria-hidden="true" viewBox="0 0 24 24">'+path+'</svg>'+(type==='device'?'<span>'+label+'<small></small></span><i class="switch"></i>':'');b.onclick=()=>{state[i]=!state[i];if(key==='cool')airMode=state[i]?lastAirMode:'off';render()};(type==='pin'?scene:document.querySelector('.devices')).append(b)}});
document.querySelectorAll('[data-mode]').forEach(b=>b.onclick=()=>{
  airMode=b.dataset.mode;
  if(airMode!=='off')lastAirMode=airMode;
  state[3]=airMode!=='off';
  render();
});
render();
if(parent!==window){document.body.classList.add('embed');new ResizeObserver(()=>parent.postMessage({roomHeight:Math.ceil(document.querySelector('main').getBoundingClientRect().height)},location.origin)).observe(document.querySelector('main'))}
