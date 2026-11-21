// Coordinates follow the room photograph, including perspective and the rug edge.
function roomMotion(canvas, statusChanged) {
  const ctx = canvas.getContext('2d');
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const dock = [42, 365];
  const route = [dock, [48,374], [207,374], [213,378], [209,384],
    [36,384], [30,391], [36,398], [195,398], [197,405], [190,413],
    [36,413], [31,421], [38,429], [175,429], [179,436], [170,446],
    [40,446], [32,452], [39,460], [175,460], [180,454], [171,447],
    [50,448], [41,437], [42,379], dock];
  let x=dock[0], y=dock[1], target=1, facing=0, elapsed=0;
  let ac='off', cleaning=false, mode='dock', visible=true, frame=0, last=0, trail=[];
  const sizeCanvas=()=>{
    const scale=Math.min(2,canvas.clientWidth/720*(devicePixelRatio||1));
    if(scale<=0)return;
    canvas.width=Math.round(720*scale);canvas.height=Math.round(480*scale);
    draw();
  };
  function ellipse(cx,cy,rx,ry,color) {
    ctx.fillStyle=color;ctx.beginPath();ctx.ellipse(cx,cy,rx,ry,0,0,Math.PI*2);ctx.fill();
  }
  function makeWisp(rgb){
    const img=document.createElement('canvas');
    img.width=img.height=64;
    const brush=img.getContext('2d');
    const g=brush.createRadialGradient(32,32,0,32,32,32);
    g.addColorStop(0,'rgba('+rgb+',1)');
    g.addColorStop(.42,'rgba('+rgb+',.58)');
    g.addColorStop(1,'rgba('+rgb+',0)');
    brush.fillStyle=g;brush.fillRect(0,0,64,64);
    return img;
  }
  const wisps={heat:makeWisp('255,196,127'),cool:makeWisp('173,222,249')};
  function airflow(){
    if(ac==='off')return;
    const warm=ac==='heat';
    ctx.save();ctx.globalCompositeOperation='screen';
    // Each thin cross-section fades towards both sides of the moving air mass.
    for(let stream=0;stream<5;stream++){
      const phase=stream*1.37;
      for(let j=0;j<47;j++){
        const t=j/46;
        const fade=Math.pow(1-t,1.1)*Math.min(1,t*18+.22);
        const ripple=Math.sin(11*t-elapsed*2.2+phase);
        const cx=563+stream*14-(warm?94:122)*t*t+(5+10*t)*t*ripple;
        const cy=103+(warm?238:110)*t+(warm?7:59)*Math.sin(t*Math.PI*.91)+3*t*Math.sin(phase+elapsed);
        const radius=4+(warm?33:24)*t;
        ctx.globalAlpha=fade*(.128+.074*Math.sin(12*t-elapsed*2.8+phase));
        ctx.drawImage(wisps[ac],cx-radius,cy-radius*1.4,radius*2,radius*2.8);
      }
    }
    ctx.restore();
  }
  // Separate cutouts let the wash station stay in place while the vacuum leaves its bay.
  function loadCutout(url){
    const image=new Image();
    image.onload=draw;
    image.src=url;
    return image;
  }
  const stationImage=loadCutout('stotele.webp');
  const vacuumImage=loadCutout('robotas.webp');

  function robot(){
    ctx.save();
    ctx.imageSmoothingQuality='high';
    ellipse(46,361,28,4,'rgba(20,17,16,.23)');
    if(stationImage.naturalWidth){
      const width=55;
      const height=width*stationImage.naturalHeight/stationImage.naturalWidth;
      ctx.drawImage(stationImage,18,365-height,width,height);
    }
    if(vacuumImage.naturalWidth){
      const width=43+(y-dock[1])*.22;
      const height=width*vacuumImage.naturalHeight/vacuumImage.naturalWidth;
      ctx.translate(x,y);
      ellipse(1,0,width*.47,width*.091,'rgba(20,17,16,.30)');
      // The two front-quarter views blend as the round chassis changes direction.
      ctx.drawImage(vacuumImage,-width/2,-height,width,height);
      if(facing>0){
        ctx.scale(-1,1);
        ctx.globalAlpha=facing;
        ctx.drawImage(vacuumImage,-width/2,-height,width,height);
      }
    }
    ctx.restore();
  }
  function draw(){
    ctx.setTransform(canvas.width/720,0,0,canvas.height/480,0,0);
    ctx.clearRect(0,0,720,480);
    airflow();
    if(trail.length>1){
      ctx.lineCap='round';
      for(let i=1;i<trail.length;i++){
        const p=trail[i-1],q=trail[i],age=elapsed-q.time;
        ctx.strokeStyle='rgba(182,208,218,'+(.13*Math.max(0,1-age/5))+')';
        ctx.lineWidth=13+(q.y-361)*.08;
        ctx.beginPath();ctx.moveTo(p.x,p.y);ctx.lineTo(q.x,q.y);ctx.stroke();
      }
    }
    robot();
  }
  function changeMode(next){if(mode!==next){mode=next;statusChanged(mode)}}
  function advance(dt){
    if(mode==='dock')return;
    const goal=cleaning?route[target]:dock;
    const dx=goal[0]-x,dy=goal[1]-y,dist=Math.hypot(dx,dy);
    const step=Math.min(dist,dt*(cleaning?19:32));
    if(dist){
      const turn=mode==='return'?0:(dx/dist+1)/2;
      facing+=(turn-facing)*Math.min(1,dt*5);
      x+=dx*step/dist;y+=dy*step/dist;
    }
    if(cleaning && (!trail.length||elapsed-trail[trail.length-1].time>.16))trail.push({x,y,time:elapsed});
    if(dist<=step){if(cleaning)target=target%(route.length-1)+1;else changeMode('dock')}
  }
  function tick(time){
    frame=0;const dt=last?Math.min((time-last)/1000,.08):0;last=time;elapsed+=dt;
    advance(dt);trail=trail.filter(p=>elapsed-p.time<5);draw();schedule();
  }
  function schedule(){
    if(visible&&!document.hidden&&!reduced.matches&&(ac!=='off'||mode!=='dock'||trail.length)){if(!frame)frame=requestAnimationFrame(tick)}
    else {cancelAnimationFrame(frame);frame=0;last=0}
  }
  function applyMotionPreference(){
    if(reduced.matches){[x,y]=cleaning?route[2]:dock;trail=[];if(!cleaning)changeMode('dock')}
    draw();schedule();
  }
  new ResizeObserver(sizeCanvas).observe(canvas);
  new IntersectionObserver(entries=>{visible=entries[0].isIntersecting;schedule()}).observe(canvas);
  document.addEventListener('visibilitychange',schedule);
  reduced.addEventListener('change',applyMotionPreference);
  return (air,wash)=>{
    ac=air;
    if(wash!==cleaning){
      cleaning=wash;target=1;changeMode(wash?'wash':'return');
      if(!wash&&Math.hypot(x-dock[0],y-dock[1])<.1)changeMode('dock');
    }
    applyMotionPreference();
  };
}
