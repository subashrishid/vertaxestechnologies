/* ===== VIONIX TECHNOLOGIES — MAIN JAVASCRIPT ===== */
(function(){
'use strict';

/* --- PRELOADER --- */
window.addEventListener('load',function(){
  const p=document.getElementById('preloader');
  if(p){setTimeout(()=>{p.classList.add('hidden');setTimeout(()=>p.remove(),600)},1200)}
});

/* --- STICKY NAVBAR --- */
const navbar=document.getElementById('navbar');
function handleScroll(){
  if(!navbar)return;
  if(window.scrollY>50)navbar.classList.add('scrolled');
  else navbar.classList.remove('scrolled');
  // Back to top
  const btt=document.getElementById('backToTop');
  if(btt){if(window.scrollY>600)btt.classList.add('visible');else btt.classList.remove('visible')}
}
window.addEventListener('scroll',handleScroll,{passive:true});
handleScroll();

/* --- BACK TO TOP --- */
const backToTop=document.getElementById('backToTop');
if(backToTop)backToTop.addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}));

/* --- HAMBURGER MENU --- */
const hamburger=document.getElementById('hamburger');
const mobileMenu=document.getElementById('mobileMenu');
if(hamburger&&mobileMenu){
  hamburger.addEventListener('click',()=>{
    hamburger.classList.toggle('active');
    mobileMenu.classList.toggle('open');
    document.body.style.overflow=mobileMenu.classList.contains('open')?'hidden':'';
  });
  mobileMenu.querySelectorAll('.mobile-link,.mobile-actions .nav-btn').forEach(l=>{
    l.addEventListener('click',()=>{
      hamburger.classList.remove('active');
      mobileMenu.classList.remove('open');
      document.body.style.overflow='';
    });
  });
}

/* --- SMOOTH SCROLL --- */
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click',function(e){
    const id=this.getAttribute('href');
    if(id==='#')return;
    const el=document.querySelector(id);
    if(el){e.preventDefault();el.scrollIntoView({behavior:'smooth',block:'start'})}
  });
});

/* --- SCROLL ANIMATIONS (IntersectionObserver) --- */
function initAnimations(){
  const els=document.querySelectorAll('[data-animate]');
  if(!els.length)return;
  const observer=new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        const delay=parseInt(entry.target.dataset.delay)||0;
        setTimeout(()=>entry.target.classList.add('animated'),delay);
        observer.unobserve(entry.target);
      }
    });
  },{threshold:0.1,rootMargin:'0px 0px -40px 0px'});
  els.forEach(el=>observer.observe(el));
}
document.addEventListener('DOMContentLoaded',initAnimations);

/* --- COUNTER ANIMATION --- */
function animateCounters(){
  const counters=document.querySelectorAll('[data-count]');
  if(!counters.length)return;
  const observer=new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        const el=entry.target;
        const target=parseInt(el.dataset.count);
        const duration=2000;
        const start=performance.now();
        function update(now){
          const elapsed=now-start;
          const progress=Math.min(elapsed/duration,1);
          const eased=1-Math.pow(1-progress,3);
          el.textContent=Math.floor(eased*target);
          if(progress<1)requestAnimationFrame(update);
          else el.textContent=target;
        }
        requestAnimationFrame(update);
        observer.unobserve(el);
      }
    });
  },{threshold:0.3});
  counters.forEach(c=>observer.observe(c));
}
document.addEventListener('DOMContentLoaded',animateCounters);

/* --- PROJECT FILTERS --- */
function initFilters(){
  const btns=document.querySelectorAll('.filter-btn');
  const cards=document.querySelectorAll('.project-card');
  if(!btns.length||!cards.length)return;
  btns.forEach(btn=>{
    btn.addEventListener('click',()=>{
      btns.forEach(b=>b.classList.remove('active'));
      btn.classList.add('active');
      const filter=btn.dataset.filter;
      cards.forEach(card=>{
        if(filter==='all'||card.dataset.category===filter){
          card.classList.remove('hidden');
          card.style.animation='slideIn .4s ease forwards';
        }else{
          card.classList.add('hidden');
        }
      });
    });
  });
}
document.addEventListener('DOMContentLoaded',initFilters);

/* --- FORM HANDLING --- */
function initForms(){
  document.querySelectorAll('form[data-netlify]').forEach(form=>{
    form.addEventListener('submit',function(e){
      e.preventDefault();
      const btn=form.querySelector('button[type="submit"]');
      const success=form.querySelector('.form-success');
      if(btn){btn.disabled=true;btn.innerHTML='<i class="fas fa-spinner fa-spin"></i> Sending...';}

      const formData=new FormData(form);
      fetch('/',{method:'POST',headers:{'Content-Type':'application/x-www-form-urlencoded'},
        body:new URLSearchParams(formData).toString()
      }).then(res=>{
        if(res.ok){
          if(success)success.style.display='block';
          form.reset();
          if(btn){btn.innerHTML='<i class="fas fa-check"></i> Sent Successfully';btn.style.background='#22C55E';}
          setTimeout(()=>{
            if(success)success.style.display='none';
            if(btn){btn.disabled=false;btn.innerHTML='<i class="fas fa-paper-plane"></i> Send Request';btn.style.background='';}
          },5000);
        }else{
          if(btn){btn.disabled=false;btn.innerHTML='<i class="fas fa-paper-plane"></i> Send Request';}
          alert('Oops! Something went wrong. Please try again or contact us via WhatsApp.');
        }
      }).catch(()=>{
        if(btn){btn.disabled=false;btn.innerHTML='<i class="fas fa-paper-plane"></i> Send Request';}
        alert('Network error. Please try again or contact us via WhatsApp.');
      });
    });
  });
}
document.addEventListener('DOMContentLoaded',initForms);

/* --- HERO PARTICLES --- */
function initParticles(){
  const container=document.getElementById('heroParticles');
  if(!container)return;
  for(let i=0;i<40;i++){
    const dot=document.createElement('div');
    dot.className='particle-dot';
    const size=Math.random()*4+2;
    dot.style.cssText=`width:${size}px;height:${size}px;left:${Math.random()*100}%;top:${Math.random()*100}%;opacity:${Math.random()*.3+.1};animation:drift${Math.random()>.5?'1':'2'} ${Math.random()*8+4}s ease-in-out infinite;animation-delay:${Math.random()*4}s;`;
    container.appendChild(dot);
  }
}
document.addEventListener('DOMContentLoaded',initParticles);

/* --- ACTIVE NAV LINK --- */
function setActiveNav(){
  const path=window.location.pathname.split('/').pop()||'index.html';
  document.querySelectorAll('.nav-link,.mobile-link').forEach(link=>{
    link.classList.remove('active');
    const href=link.getAttribute('href');
    if(href===path||(path===''&&href==='index.html'))link.classList.add('active');
  });
}
document.addEventListener('DOMContentLoaded',setActiveNav);

})();
