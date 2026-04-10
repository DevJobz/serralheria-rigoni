/* ======================================================
   SERRALHERIA RIGONI — main.js
   ====================================================== */
'use strict';

const WPP_NUM  = '5514996245896';
const WPP_BASE = 'https://wa.me/' + WPP_NUM + '?text=';

const $  = (s, c) => (c || document).querySelector(s);
const $$ = (s, c) => [...(c || document).querySelectorAll(s)];

function wppLink(msg) { return WPP_BASE + encodeURIComponent(msg); }
function estrelas(n)  { return '★'.repeat(n) + '☆'.repeat(5 - n); }

/* ── SVG icons ─────────────────────────────────────── */
const SVG = {
  wpp:  `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.126.558 4.121 1.533 5.849L.057 23.5l5.797-1.522A11.933 11.933 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.891 0-3.659-.501-5.188-1.376l-.371-.22-3.441.904.92-3.362-.241-.387A9.945 9.945 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/></svg>`,
  map:  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>`,
  clk:  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,
  phn:  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.07 1.16 2 2 0 012 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92z"/></svg>`,
  mail: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>`,
  soc:  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>`,
  ig:   `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>`,
  fb:   `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>`,
  shld: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
  card: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>`,
  eye:  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94"/><path d="M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19"/><line x1="1" y1="1" x2="23" y2="23"/></svg>`,
  awd:  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>`,
  arL:  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15,18 9,12 15,6"/></svg>`,
  arR:  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9,18 15,12 9,6"/></svg>`,
  zoom: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/></svg>`,
  play: `<svg viewBox="0 0 24 24" fill="currentColor"><polygon points="5,3 19,12 5,21"/></svg>`,
  cls:  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`,
};

const ICONES_DIF = { shield: SVG.shld, 'credit-card': SVG.card, 'eye-off': SVG.eye, award: SVG.awd };

/* ── fetch all JSON ─────────────────────────────────── */
async function carregarDados() {
  const urls = ['/dados/navbar.json','/dados/hero.json','/dados/historia.json',
    '/dados/diferenciais.json','/dados/servicos.json','/dados/portfolio.json',
    '/dados/depoimentos.json','/dados/empresa.json','/dados/servicos_extraordinarios.json'];
  try {
    const rs = await Promise.all(urls.map(u => fetch(u)));
    const ds = await Promise.all(rs.map(r => { if(!r.ok) throw new Error(r.url); return r.json(); }));
    return { navbar:ds[0], hero:ds[1], historia:ds[2], diferenciais:ds[3],
             servicos:ds[4], portfolio:ds[5], depoimentos:ds[6], empresa:ds[7], servExt:ds[8] };
  } catch(e) { console.error('[Rigoni]', e); return null; }
}

/* ── NAVBAR ─────────────────────────────────────────── */
function renderNavbar(d) {
  const el = $('#navbar'); if (!el||!d) return;
  el.innerHTML = `<div class="container"><div class="navbar-inner">
    <a href="#hero" class="navbar-logo" aria-label="${d.logo_alt || d.nome}">
      <img class="navbar-logo-img" src="${d.logo_url}" alt="${d.logo_alt}"
           onerror="this.style.display='none'">
    </a>
    <nav>
      <div class="nav-overlay" id="navOverlay"></div>
      <ul class="navbar-menu" id="navMenu">
        ${d.links.map(l=>`<li><a class="navbar-link" href="${l.href}">${l.label}</a></li>`).join('')}
        <li><a class="navbar-cta" href="${wppLink(d.cta_whatsapp)}" target="_blank" rel="noopener">${d.cta_label}</a></li>
      </ul></nav>
    <button class="nav-burger" id="navBurger" aria-label="Menu" aria-expanded="false">
      <span></span><span></span><span></span></button>
  </div></div>`;
}

function initNavbar() {
  const nb=$('#navbar'), burger=$('#navBurger'), menu=$('#navMenu'), ov=$('#navOverlay');
  if (!nb) return;
  const onScroll=()=>nb.classList.toggle('scrolled',scrollY>50);
  window.addEventListener('scroll',onScroll,{passive:true}); onScroll();
  if (burger&&menu&&ov) {
    const tog=(o)=>{ burger.classList.toggle('aberto',o); menu.classList.toggle('aberto',o);
      ov.classList.toggle('ativo',o); burger.setAttribute('aria-expanded',String(o));
      document.body.style.overflow=o?'hidden':''; };
    burger.addEventListener('click',()=>tog(!menu.classList.contains('aberto')));
    ov.addEventListener('click',()=>tog(false));
    $$('.navbar-link',menu).forEach(l=>l.addEventListener('click',()=>tog(false)));
  }
}

/* ── HERO ───────────────────────────────────────────── */
function renderHero(d) {
  const el=$('#hero'); if(!el||!d) return;
  el.innerHTML=`
    <div class="hero-bg" style="background-image:url('${d.imagem_fundo}')"></div>
    <div class="hero-overlay"></div>
    <canvas id="spark-canvas" aria-hidden="true"></canvas>
    <div class="hero-content">
      <span class="hero-badge">${d.badge}</span>
      <h1 class="hero-titulo">${d.titulo_linha1}<em>${d.titulo_linha2}</em></h1>
      <p class="hero-sub">${d.subtitulo}</p>
      <div class="hero-divider"><span class="hero-divider-icon">✦ ✦ ✦</span></div>
      <div class="hero-acoes">
        <a class="btn btn-primario" href="${d.cta_principal_href}"><span>${d.cta_principal_label}</span></a>
        <a class="btn btn-fantasma" href="${wppLink(d.cta_secundario_whatsapp)}" target="_blank" rel="noopener">
          ${SVG.wpp} ${d.cta_secundario_label}</a>
      </div></div>
    <div class="hero-stats"><div class="hero-stat-wrap">
      <div class="hero-stat"><div class="hero-stat-num">${d.stat_anos}<em>+</em></div><div class="hero-stat-label">${d.stat_anos_label}</div></div>
      <div class="hero-stat"><div class="hero-stat-num">${d.stat_projetos}</div><div class="hero-stat-label">${d.stat_projetos_label}</div></div>
      <div class="hero-stat"><div class="hero-stat-num">${d.stat_cidade}</div><div class="hero-stat-label">${d.stat_cidade_label}</div></div>
    </div></div>
    <div class="hero-scroll-cue" aria-hidden="true">
      <div class="hero-scroll-cue-line"></div><span class="hero-scroll-cue-txt">Scroll</span></div>`;
  requestAnimationFrame(()=>el.classList.add('loaded'));
}

/* ── SPARKS (Canvas) ────────────────────────────────── */
function initSparks() {
  const canvas=$('#spark-canvas'); if(!canvas) return;
  const ctx=canvas.getContext('2d'); let sparks=[],raf;
  const resize=()=>{ canvas.width=canvas.offsetWidth; canvas.height=canvas.offsetHeight; };
  class Spark {
    constructor() {
      this.x=canvas.width*(0.35+Math.random()*0.3);
      this.y=canvas.height*(0.45+Math.random()*0.25);
      const a=-(Math.PI/2)+(Math.random()-0.5)*Math.PI*0.85;
      const sp=Math.random()*7+2.5;
      this.vx=Math.cos(a)*sp; this.vy=Math.sin(a)*sp;
      this.g=0.18; this.life=Math.random()*90+50; this.age=0;
      this.r=Math.random()*2.2+0.5;
      this.color=`hsl(${Math.random()*38+12},96%,${50+Math.random()*22}%)`;
      this.trail=[];
    }
    get alpha(){ return Math.max(0,1-this.age/this.life); }
    get dead() { return this.age>=this.life||this.y>canvas.height+30; }
    update() {
      this.trail.push({x:this.x,y:this.y});
      if(this.trail.length>6) this.trail.shift();
      this.x+=this.vx; this.y+=this.vy; this.vy+=this.g; this.vx*=0.985; this.age++;
    }
    draw() {
      for(let i=0;i<this.trail.length;i++) {
        ctx.save(); ctx.globalAlpha=(i/this.trail.length)*this.alpha*0.35;
        ctx.fillStyle=this.color; ctx.beginPath();
        ctx.arc(this.trail[i].x,this.trail[i].y,this.r*0.45,0,Math.PI*2); ctx.fill(); ctx.restore();
      }
      ctx.save(); ctx.globalAlpha=this.alpha; ctx.fillStyle=this.color;
      ctx.shadowColor=this.color; ctx.shadowBlur=7;
      ctx.beginPath(); ctx.arc(this.x,this.y,this.r,0,Math.PI*2); ctx.fill(); ctx.restore();
    }
  }
  function frame() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
    if(Math.random()<0.45) for(let i=0;i<Math.floor(Math.random()*4)+1;i++) sparks.push(new Spark());
    sparks=sparks.filter(s=>!s.dead); sparks.forEach(s=>{s.update();s.draw();});
    raf=requestAnimationFrame(frame);
  }
  window.addEventListener('resize',resize,{passive:true}); resize();
  const obs=new IntersectionObserver(([e])=>{ e.isIntersecting?frame():cancelAnimationFrame(raf); });
  const hero=$('#hero'); if(hero) obs.observe(hero); else frame();
}

/* ── HISTÓRIA ───────────────────────────────────────── */
function renderHistoria(d) {
  const el=$('#historia'); if(!el||!d) return;
  const pars=d.texto.split('\n\n').filter(Boolean).map(p=>`<p>${p.trim()}</p>`).join('');
  el.innerHTML=`<div class="container"><div class="grid-2">
    <div class="historia-texto-col anim-left">
      <span class="secao-badge">${d.subtitulo}</span>
      <h2 class="secao-titulo">${d.titulo}</h2>
      <div class="historia-corpo">${pars}</div>
      <div class="historia-assinatura">
        <span class="historia-assinatura-linha"></span>
        <span class="historia-assinatura-nome">${d.assinatura}</span>
      </div></div>
    <div class="historia-img-col anim-right">
      <div class="historia-img-moldura">
        <img class="historia-img" src="${d.imagem}" alt="${d.imagem_alt}" loading="lazy"
             onerror="this.src='https://picsum.photos/seed/craftsmen/800/600'">
        <div class="historia-badge">
          <em class="historia-badge-num">${d.anos_experiencia}</em>
          <span class="historia-badge-txt">Anos de<br>Experiência</span>
        </div></div></div>
  </div></div>`;
}

/* ── DIFERENCIAIS ───────────────────────────────────── */
function renderDiferenciais(d) {
  const el=$('#diferenciais'); if(!el||!d) return;
  const cards=d.items.map((item,i)=>`
    <div class="dif-card anim-fade delay-${i+1}">
      <div class="dif-icone">${ICONES_DIF[item.icone]||SVG.awd}</div>
      <div class="dif-titulo">${item.titulo}</div>
      <p class="dif-texto">${item.texto}</p>
      <span class="dif-num">${String(i+1).padStart(2,'0')}</span>
    </div>`).join('');
  el.innerHTML=`<div class="container">
    <div class="secao-header anim-fade">
      <span class="secao-badge">${d.subtitulo}</span>
      <h2 class="secao-titulo">${d.titulo}</h2></div>
    <div class="diferenciais-grid">${cards}</div>
  </div>`;
}

/* ── SERVIÇOS ───────────────────────────────────────── */
function renderServicos(d) {
  const el=$('#servicos'); if(!el||!d) return;
  const cards=d.items.map(item=>`
    <article class="srv-card anim-fade">
      <div class="srv-img-wrap">
        <img class="srv-img" src="${item.imagem}" alt="${item.titulo}" loading="lazy"
             onerror="this.src='https://picsum.photos/seed/${encodeURIComponent(item.titulo)}/600/400'">
      </div>
      <div class="srv-body">
        <h3 class="srv-titulo">${item.titulo}</h3>
        <p class="srv-desc">${item.descricao}</p>
        <a class="btn-wpp" href="${wppLink(item.whatsapp_msg)}" target="_blank" rel="noopener"
           aria-label="Orçamento: ${item.titulo}">${SVG.wpp} Saber Mais</a>
      </div></article>`).join('');
  el.innerHTML=`<div class="container">
    <div class="secao-header anim-fade">
      <span class="secao-badge">${d.subtitulo}</span>
      <h2 class="secao-titulo">${d.titulo}</h2></div>
    <div class="servicos-grid">${cards}</div>
  </div>`;
}

/* ── SERVIÇOS EXTRAORDINÁRIOS ───────────────────────── */
function renderServicosExtraordinarios(d) {
  const el=$('#servicos-extraordinarios'); if(!el||!d) return;
  const cards=(d.items||[]).map((item,i)=>`
    <article class="srv-ext-item anim-fade delay-${i+1}"
             data-src="${item.video}" data-legenda="${item.titulo}"
             role="button" tabindex="0" aria-label="Assistir: ${item.titulo}">
      <div class="srv-ext-video-wrap">
        <video class="srv-ext-thumb" src="${item.video}#t=0.001"
               preload="metadata" muted playsinline></video>
        <div class="srv-ext-overlay">
          <div class="srv-ext-play">${SVG.play}</div>
        </div>
      </div>
      <div class="srv-ext-body">
        <h3 class="srv-ext-titulo">${item.titulo}</h3>
        ${item.descricao?`<p class="srv-ext-desc">${item.descricao}</p>`:''}
      </div>
    </article>`).join('');
  el.innerHTML=`<div class="container">
    <div class="secao-header anim-fade">
      <span class="secao-badge">${d.subtitulo||'Criações Especiais'}</span>
      <h2 class="secao-titulo">${d.titulo||'Serviços Extraordinários'}</h2></div>
    <div class="srv-ext-grid">${cards}</div>
  </div>`;

  /* Abre lightbox ao clicar */
  $$('.srv-ext-item',el).forEach(card=>{
    const abrir=()=>{
      const lb=$('#lightbox'), video=$('#lb-video'),
            img=$('#lb-img'), iframe=$('#lb-iframe'),
            cap=$('.lb-caption',lb);
      if(!lb) return;
      img.style.display='none';
      iframe.classList.remove('ativo'); iframe.src='';
      video.src=card.dataset.src; video.classList.add('ativo'); video.play();
      if(cap) cap.textContent=card.dataset.legenda||'';
      lb.classList.add('ativo'); document.body.style.overflow='hidden';
    };
    card.addEventListener('click', abrir);
    card.addEventListener('keydown', e=>{ if(e.key==='Enter') abrir(); });
  });
}

/* ── PORTFÓLIO ──────────────────────────────────────── */
let _portItems = [];

function renderPortfolio(d) {
  const el=$('#portfolio'); if(!el||!d) return;
  _portItems=d.items;
  
  const items=d.items.map((item,i)=>{
    // Identifica se é YouTube ou Vídeo Local
    const isYt = item.tipo === 'video';
    const isLocal = item.tipo === 'video_local';
    const isV = isYt || isLocal;
    
    let midiaHTML = '';
    
    // Se for vídeo local, usamos a tag <video> para gerar a miniatura automática
    if (isLocal) {
      // O '#t=0.001' é o truque para forçar a renderização do 1º frame no iOS/Safari
      midiaHTML = `<video class="port-img" src="${item.url}#t=0.001" preload="metadata" muted playsinline></video>`;
    } 
    // Se for imagem ou YouTube, mantemos a tag <img>
    else {
      const imgSrc = isYt ? '/assets/images/uploads/portfolio-video-thumb.jpg' : item.url;
      midiaHTML = `<img class="port-img" src="${imgSrc}" alt="${item.legenda}" loading="lazy" onerror="this.src='https://picsum.photos/seed/rigoni${i}/600/430'">`;
    }

    return `<div class="port-item" data-index="${i}" role="button" tabindex="0" aria-label="${item.legenda}">
      ${isV ? '<span class="port-video-badge">▶ Vídeo</span>' : ''}
      
      ${midiaHTML}
      
      <div class="port-overlay">
        <div class="port-overlay-icon">${isV ? SVG.play : SVG.zoom}</div></div>
      <div class="port-label">${item.legenda}</div>
    </div>`;
  }).join('');
  
  el.innerHTML=`<div class="container">
    <div class="secao-header anim-fade">
      <span class="secao-badge">${d.subtitulo}</span>
      <h2 class="secao-titulo">${d.titulo}</h2></div>
    <div class="portfolio-container">
      <div class="portfolio-track-wrap">
        <div class="portfolio-track" id="portTrack">${items}</div></div>
      <div class="carousel-ctrl">
        <button class="carousel-btn" id="portPrev" aria-label="Anterior">${SVG.arL}</button>
        <div class="carousel-dots" id="portDots"></div>
        <button class="carousel-btn" id="portNext" aria-label="Próximo">${SVG.arR}</button>
      </div></div></div>`;
}

function initPortfolioCarousel() {
  const track=$('#portTrack'), prev=$('#portPrev'), next=$('#portNext'), dotsEl=$('#portDots');
  if (!track) return;
  let idx=0;
  const getV=()=>innerWidth<=768?1:innerWidth<=1024?2:3;
  function setup() {
    const items=$$('.port-item',track), vis=getV(), pages=Math.ceil(items.length/vis);
    if (!dotsEl) return;
    dotsEl.innerHTML='';
    for(let i=0;i<pages;i++){
      const b=document.createElement('button');
      b.className='c-dot'+(i===0?' ativo':'');
      b.setAttribute('aria-label',`Página ${i+1}`);
      b.addEventListener('click',()=>{idx=i*vis;move();});
      dotsEl.appendChild(b);
    }
    move();
  }
  function move() {
    const items=$$('.port-item',track); if(!items.length) return;
    const vis=getV(), w=items[0].offsetWidth+16, max=Math.max(0,items.length-vis);
    idx=Math.min(Math.max(0,idx),max);
    track.style.transform=`translateX(-${idx*w}px)`;
    $$('.c-dot',dotsEl).forEach((d,i)=>d.classList.toggle('ativo',Math.floor(idx/vis)===i));
  }
  if(prev) prev.addEventListener('click',()=>{idx--;move();});
  if(next) next.addEventListener('click',()=>{idx++;move();});
  let sx=0;
  track.addEventListener('touchstart',e=>{sx=e.touches[0].clientX;},{passive:true});
  track.addEventListener('touchend',e=>{
    const diff=sx-e.changedTouches[0].clientX;
    if(Math.abs(diff)>50){diff>0?idx++:idx--;move();}},{passive:true});
  window.addEventListener('resize',setup,{passive:true});
  setup();
}

/* ── LIGHTBOX ───────────────────────────────────────── */
function initLightbox() {
  const box=$('#lightbox'), img=$('#lb-img'), iframe=$('#lb-iframe'),
        video=$('#lb-video'), // <-- Adicionamos a variável do vídeo aqui
        cls=$('.lb-close',box), lp=$('.lb-prev',box), ln=$('.lb-next',box),
        cap=$('.lb-caption',box);
  if(!box) return;
  let cur=0;
  
  function abrir(i) {
    cur=i; const item=_portItems[i]; if(!item) return;
    
    // Reseta/Esconde todos os 3 antes de abrir o correto
    img.style.display='none'; 
    iframe.classList.remove('ativo'); iframe.src=''; 
    video.classList.remove('ativo'); video.pause(); video.src='';

    // Verifica qual é o tipo de mídia e mostra o correto
    if(item.tipo==='video') { // YouTube
      iframe.src=item.url+'?autoplay=1'; iframe.classList.add('ativo');
    } else if (item.tipo==='video_local') { // Arquivo .mp4 (Assets)
      video.src=item.url; video.classList.add('ativo'); video.play();
    } else { // Imagem
      img.style.display=''; img.src=item.url; img.alt=item.legenda;
    }
    
    if(cap) cap.textContent=item.legenda||'';
    box.classList.add('ativo'); document.body.style.overflow='hidden';
  }
  
  function fechar() { 
    box.classList.remove('ativo'); 
    iframe.src=''; iframe.classList.remove('ativo'); 
    video.pause(); video.src=''; video.classList.remove('ativo'); // Para o vídeo ao fechar
    document.body.style.overflow=''; 
  }
  
  function nav(d)   { cur=(cur+d+_portItems.length)%_portItems.length; abrir(cur); }
  document.addEventListener('click',e=>{ const it=e.target.closest('.port-item'); if(it) abrir(+it.dataset.index); });
  document.addEventListener('keydown',e=>{
    const it=e.target.closest?.('.port-item'); if(it&&e.key==='Enter') abrir(+it.dataset.index);
    if(!box.classList.contains('ativo')) return;
    if(e.key==='Escape') fechar(); if(e.key==='ArrowRight') nav(1); if(e.key==='ArrowLeft') nav(-1);
  });
  if(cls) cls.addEventListener('click',fechar);
  if(lp)  lp.addEventListener('click',()=>nav(-1));
  if(ln)  ln.addEventListener('click',()=>nav(1));
  box.addEventListener('click',e=>{ if(e.target===box) fechar(); });
}

/* ── DEPOIMENTOS ────────────────────────────────────── */
function renderDepoimentos(d) {
  const el=$('#depoimentos'); if(!el||!d) return;
  const items=d.items.map(dep=>`
    <div class="dep-item">
      <div class="dep-card">
        <div class="dep-estrelas" aria-label="${dep.estrelas} estrelas">${estrelas(dep.estrelas)}</div>
        <blockquote class="dep-texto">"${dep.texto}"</blockquote>
        <div class="dep-autor">
          <img class="dep-foto" src="${dep.foto}" alt="${dep.nome}" loading="lazy"
               onerror="this.src='https://i.pravatar.cc/100?u=${encodeURIComponent(dep.nome)}'">
          <div><div class="dep-nome">${dep.nome}</div><div class="dep-cargo">${dep.cargo}</div></div>
        </div></div></div>`).join('');
  el.innerHTML=`<div class="container">
    <div class="secao-header anim-fade">
      <span class="secao-badge">${d.subtitulo}</span>
      <h2 class="secao-titulo">${d.titulo}</h2></div>
    <div class="dep-carousel">
      <div class="dep-track" id="depTrack">${items}</div></div>
    <div class="carousel-ctrl" style="margin-top:32px">
      <button class="carousel-btn" id="depPrev" aria-label="Anterior">${SVG.arL}</button>
      <div class="carousel-dots" id="depDots"></div>
      <button class="carousel-btn" id="depNext" aria-label="Próximo">${SVG.arR}</button>
    </div></div>`;
}

function initDepoimentosCarousel() {
  const track=$('#depTrack'), prev=$('#depPrev'), next=$('#depNext'), dotsEl=$('#depDots');
  if(!track) return;
  const items=$$('.dep-item',track), total=items.length; let idx=0, timer;
  if(!total) return;
  function buildDots() {
    if(!dotsEl) return; dotsEl.innerHTML='';
    for(let i=0;i<total;i++){
      const b=document.createElement('button');
      b.className='c-dot'+(i===0?' ativo':'');
      b.setAttribute('aria-label',`Depoimento ${i+1}`);
      b.addEventListener('click',()=>{go(i);reset();});
      dotsEl.appendChild(b);
    }
  }
  function go(i) {
    idx=(i+total)%total;
    track.style.transform=`translateX(-${idx*100}%)`;
    $$('.c-dot',dotsEl).forEach((d,j)=>d.classList.toggle('ativo',j===idx));
  }
  function reset() { clearInterval(timer); timer=setInterval(()=>go(idx+1),6000); }
  if(prev) prev.addEventListener('click',()=>{go(idx-1);reset();});
  if(next) next.addEventListener('click',()=>{go(idx+1);reset();});
  track.addEventListener('mouseenter',()=>clearInterval(timer));
  track.addEventListener('mouseleave',reset);
  let sx=0;
  track.addEventListener('touchstart',e=>{sx=e.touches[0].clientX;clearInterval(timer);},{passive:true});
  track.addEventListener('touchend',e=>{
    const d=sx-e.changedTouches[0].clientX;
    if(Math.abs(d)>50){d>0?go(idx+1):go(idx-1);}reset();},{passive:true});
  buildDots(); reset();
}

/* ── EMPRESA / CONTATO ──────────────────────────────── */
function renderEmpresa(d) {
  const el=$('#contato'); if(!el||!d) return;
  el.innerHTML=`<div class="container">
    <div class="secao-header anim-fade">
      <span class="secao-badge">${d.subtitulo}</span>
      <h2 class="secao-titulo">${d.titulo}</h2></div>
    <div class="contato-grid">
      <div class="contato-info anim-left">
        <div class="contato-item">
          <div class="contato-icone">${SVG.map}</div>
          <div><div class="contato-item-titulo">Endereço</div>
          <div class="contato-item-valor">${d.endereco}</div></div></div>
        <div class="contato-item">
          <div class="contato-icone">${SVG.clk}</div>
          <div><div class="contato-item-titulo">Horário de Funcionamento</div>
          <div class="contato-item-valor">${d.horario_semana}<br>${d.horario_sabado}<br>${d.horario_domingo}</div></div></div>
        <div class="contato-item">
          <div class="contato-icone">${SVG.phn}</div>
          <div><div class="contato-item-titulo">Telefone / WhatsApp</div>
          <div class="contato-item-valor">
            <a href="tel:+${d.whatsapp||'5514996245896'}">${d.nome_wagner||'Wagner Rigoni'} — ${d.telefone||'(14) 99624-5896'}</a><br>
            <a href="tel:+${d.whatsapp_wellington||'5514997543182'}">${d.nome_wellington||'Wellington Rigoni'} — ${d.telefone_wellington||'(14) 99754-3182'}</a>
          </div></div></div>
        ${d.email?`<div class="contato-item">
          <div class="contato-icone">${SVG.mail}</div>
          <div><div class="contato-item-titulo">E-mail</div>
          <div class="contato-item-valor"><a href="mailto:${d.email}">${d.email}</a></div></div></div>`:''}
        <div class="contato-item">
          <div class="contato-icone">${SVG.soc}</div>
          <div><div class="contato-item-titulo">Redes Sociais</div>
          <div class="contato-redes" style="margin-top:10px">
            ${d.instagram?`<a class="contato-rede" href="${d.instagram}" target="_blank" rel="noopener" aria-label="Instagram">${SVG.ig}</a>`:''}
            ${d.facebook?`<a class="contato-rede" href="${d.facebook}" target="_blank" rel="noopener" aria-label="Facebook">${SVG.fb}</a>`:''}
            <a class="contato-rede" href="${wppLink(d.whatsapp_contato_msg)}" target="_blank" rel="noopener" aria-label="WhatsApp">${SVG.wpp}</a>
          </div></div></div>
        <a class="contato-wpp-btn" href="${wppLink(d.whatsapp_contato_msg)}" target="_blank" rel="noopener">
          ${SVG.wpp} Falar no WhatsApp</a>
      </div>
      <div class="contato-mapa anim-right">
        <iframe title="Localização Serralheria Rigoni" src="${d.google_maps_embed}"
          allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div></div></div>`;
}

/* ── FOOTER ─────────────────────────────────────────── */
function renderFooter(navbar, empresa) {
  const el=$('footer'); if(!el) return;
  const n=navbar||{}, e=empresa||{};
  el.innerHTML=`<div class="container">
    <div class="footer-grid">
      <div>
        <div class="footer-marca-nome">Serralheria Rigoni</div>
        <div class="footer-marca-sub">Bauru · SP · Desde 1997</div>
        <p class="footer-desc">Transformando metal em excelência desde 1997. Qualidade, tradição e comprometimento com cada projeto entregue em Bauru e região.</p>
      </div>
      <div>
        <div class="footer-col-titulo">Navegação</div>
        <ul class="footer-links">
          ${(n.links||[]).map(l=>`<li><a class="footer-link" href="${l.href}">${l.label}</a></li>`).join('')}
        </ul>
      </div>
      <div>
        <div>
        <div class="footer-col-titulo">Contato</div>
        <ul class="footer-links">
          <li><a class="footer-link" href="tel:+${e.whatsapp||'5514996245896'}">${e.nome_wagner||'Wagner Rigoni'} — ${e.telefone||'(14) 99624-5896'}</a></li>
          <li><a class="footer-link" href="tel:+${e.whatsapp_wellington||'5514997543182'}">${e.nome_wellington||'Wellington Rigoni'} — ${e.telefone_wellington||'(14) 99754-3182'}</a></li>
          ${e.email?`<li><a class="footer-link" href="mailto:${e.email}">${e.email}</a></li>`:''}
          ${e.instagram?`<li><a class="footer-link" href="${e.instagram}" target="_blank" rel="noopener">Instagram</a></li>`:''}
          ${e.facebook?`<li><a class="footer-link" href="${e.facebook}" target="_blank" rel="noopener">Facebook</a></li>`:''}
          <li><a class="footer-link" href="${wppLink('Olá! Vim pelo site.')}" target="_blank" rel="noopener">WhatsApp</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <span class="footer-copy">© ${new Date().getFullYear()} <strong>Serralheria Rigoni</strong>. Todos os direitos reservados.</span>
      <span class="footer-dev">Desenvolvido com ♥ em Bauru · SP</span>
    </div></div>`;
}

/* ── SCROLL ANIMATIONS ──────────────────────────────── */
function initScrollAnimations() {
  const obs=new IntersectionObserver((entries)=>{
    entries.forEach(e=>{ if(e.isIntersecting) { e.target.classList.add('visivel'); obs.unobserve(e.target); }});
  },{threshold:0.12});
  $$('.anim-fade,.anim-left,.anim-right').forEach(el=>obs.observe(el));
}

/* ── LIGHTBOX HTML inject ───────────────────────────── */
function injectLightboxHTML() {
  const div=document.createElement('div'); div.id='lightbox';
  div.innerHTML=`
    <div class="lb-inner">
      <button class="lb-close" aria-label="Fechar">${SVG.cls}</button>
      <img id="lb-img" alt="Imagem ampliada">
      <iframe id="lb-iframe" allowfullscreen title="Vídeo do YouTube"></iframe>
      <video id="lb-video" controls playsinline title="Vídeo do portfólio"></video>
      <div class="lb-caption"></div>
    </div>
    <button class="lb-nav lb-prev" aria-label="Anterior">${SVG.arL}</button>
    <button class="lb-nav lb-next" aria-label="Próximo">${SVG.arR}</button>`;
  document.body.appendChild(div);
}

/* ── INIT ───────────────────────────────────────────── */
async function init() {
  const dados = await carregarDados();
  if (!dados) { console.warn('[Rigoni] Dados não carregados'); return; }

  renderNavbar(dados.navbar);
  renderHero(dados.hero);
  renderHistoria(dados.historia);
  renderDiferenciais(dados.diferenciais);
  renderServicos(dados.servicos);
  renderServicosExtraordinarios(dados.servExt);
  renderPortfolio(dados.portfolio);
  renderDepoimentos(dados.depoimentos);
  renderEmpresa(dados.empresa);
  renderFooter(dados.navbar, dados.empresa);
  injectLightboxHTML();

  // Init interativos (aguardar render)
  requestAnimationFrame(()=>{
    initNavbar();
    initSparks();
    initPortfolioCarousel();
    initLightbox();
    initDepoimentosCarousel();
    initScrollAnimations();
  });
}

document.addEventListener('DOMContentLoaded', init);
