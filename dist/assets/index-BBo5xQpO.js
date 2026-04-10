(function(){const S=document.createElement("link").relList;if(S&&S.supports&&S.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))k(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const d of l.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&k(d)}).observe(document,{childList:!0,subtree:!0});function z(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function k(o){if(o.ep)return;o.ep=!0;const l=z(o);fetch(o.href,l)}})();function B(i){i.innerHTML=`
    <div id="msco-aura" style="background: #0a0a0c; color: #ffffff; min-height: 100vh; font-family: 'Inter', 'Helvetica Neue', Arial, sans-serif; display: flex; flex-direction: column; overflow-x: hidden;">
      
      <!-- Progress Bar -->
      <div id="scroll-progress" style="position: fixed; top: 0; left: 0; height: 3px; background: #e5c158; width: 0%; z-index: 1001; transition: width 0.1s;"></div>

       <!-- Minimal Sticky Header -->
      <header id="main-header" style="padding: 10px 60px; display: flex; justify-content: space-between; align-items: center; position: fixed; width: 100%; box-sizing: border-box; z-index: 2000; background: rgba(10, 10, 12, 0.85); backdrop-filter: blur(20px); border-bottom: 1px solid rgba(255, 255, 255, 0.05); transition: all 0.3s ease;">
        <div style="cursor: pointer; width: 100px; height: 100px; display: flex; align-items: center;" onclick="window.scrollTo({top: 0, behavior: 'smooth'})">
          <img src="/assets/mcso_star_badge.png" alt="MCSO Logo" style="width: 100%; height: 100%; object-fit: contain;">
        </div>
        
        <nav id="main-nav" class="desktop-nav" style="display: flex; gap: 40px; font-size: 0.75rem; letter-spacing: 2px; text-transform: uppercase; font-weight: 500; align-items: center;">
          <a href="#about" class="nav-link" style="color: #fff; text-decoration: none; opacity: 0.6; transition: all 0.3s; position: relative; padding: 10px 0;">The Owner</a>
          <a href="#pathways" class="nav-link" style="color: #fff; text-decoration: none; opacity: 0.6; transition: all 0.3s; position: relative; padding: 10px 0;">Services</a>
          <a href="#lookbook" class="nav-link" style="color: #fff; text-decoration: none; opacity: 0.6; transition: all 0.3s; position: relative; padding: 10px 0;">Gallery</a>
          <a href="#contact" class="nav-link" style="color: #e5c158; text-decoration: none; border: 1px solid #e5c158; padding: 12px 30px; border-radius: 2px; transition: all 0.3s; font-weight: 700;">Consultation</a>
        </nav>

        <div id="mobile-menu-toggle" class="mobile-only" style="cursor: pointer; padding: 10px; z-index: 2001; margin-right: -10px;">
           <div class="bar1" style="width: 24px; height: 2px; background: #e5c158; margin-bottom: 5px; transition: 0.4s;"></div>
           <div class="bar2" style="width: 24px; height: 2px; background: #e5c158; margin-bottom: 5px; transition: 0.4s;"></div>
           <div class="bar3" style="width: 24px; height: 2px; background: #e5c158; transition: 0.4s;"></div>
        </div>
      </header>

      <!-- Mobile Nav Screen -->
      <div id="mobile-nav-screen" style="position: fixed; inset: 0; background: rgba(10,10,12,0.98); z-index: 1999; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 40px; transform: translateY(-100%); transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1); backdrop-filter: blur(20px); opacity: 0;">
         <a href="#about" class="mobile-nav-link" style="color: #fff; text-decoration: none; font-size: 1.5rem; letter-spacing: 4px; text-transform: uppercase; opacity: 0; transform: translateY(20px); transition: all 0.4s ease 0.1s;">The Owner</a>
         <a href="#pathways" class="mobile-nav-link" style="color: #fff; text-decoration: none; font-size: 1.5rem; letter-spacing: 4px; text-transform: uppercase; opacity: 0; transform: translateY(20px); transition: all 0.4s ease 0.2s;">Services</a>
         <a href="#lookbook" class="mobile-nav-link" style="color: #fff; text-decoration: none; font-size: 1.5rem; letter-spacing: 4px; text-transform: uppercase; opacity: 0; transform: translateY(20px); transition: all 0.4s ease 0.3s;">Gallery</a>
         <a href="#contact" class="mobile-nav-link" style="color: #e5c158; text-decoration: none; font-size: 1.5rem; letter-spacing: 4px; text-transform: uppercase; border: 1px solid #e5c158; padding: 15px 40px; margin-top: 20px; opacity: 0; transform: translateY(20px); transition: all 0.4s ease 0.4s;">Consultation</a>
      </div>

      <main style="flex: 1;">
        <!-- Immersive Hero Section -->
        <section id="hero" style="position: relative; height: 100vh; display: flex; align-items: center; justify-content: center; overflow: hidden;">
          <div id="hero-bg" style="position: absolute; inset: 0; background: url('/assets/mcso_patrol_header.jpg') center/cover; opacity: 0.45; filter: contrast(1.1) brightness(0.85); transition: transform 1.5s cubic-bezier(0.16, 1, 0.3, 1); transform: scale(1);"></div>
          <style>
            @keyframes heroZoom { from { transform: scale(1); } to { transform: scale(1.1); } }
            @keyframes fadeInUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
            .nav-link.active { opacity: 1 !important; color: #e5c158 !important; }
            .nav-link.active::after { content: ''; position: absolute; bottom: -5px; left: 0; width: 100%; height: 1px; background: #e5c158; }
            
            #hero-bg { animation: heroZoom 20s infinite alternate cubic-bezier(0.45, 0, 0.55, 1); }

            .mobile-only { display: none; }
            
            @media (max-width: 1024px) {
               .desktop-nav { display: none !important; }
               .mobile-only { display: block; }
               #main-header { padding: 10px 30px !important; }
               #main-header > div { width: 80px !important; height: 80px !important; }
               h1 { font-size: 3.5rem !important; }
            }
            @media (max-width: 768px) {
               h1 { font-size: 2.2rem !important; margin-bottom: 25px !important; letter-spacing: -1px !important; }
               .hero-subtitle { font-size: 0.7rem !important; margin-bottom: 25px !important; }
               .hero-desc { font-size: 1rem !important; line-height: 1.6 !important; margin-bottom: 40px !important; padding: 0 10px; }
               .hero-section-padding { padding: 0 20px !important; }
               .hero-cta-container { flex-direction: column !important; gap: 15px !important; align-items: center; width: 100%; }
               .hero-cta-container a { width: 100%; padding: 18px 0 !important; max-width: 280px; }
               .consultation-grid { grid-template-columns: 1fr !important; gap: 40px !important; padding: 40px !important; }
               @keyframes heroZoom { from { transform: scale(1.05); } to { transform: scale(1.15); } }
            }
          </style>
          
          <div style="position: absolute; inset: 0; background: radial-gradient(circle at center, rgba(10, 10, 12, 0.4) 0%, rgba(10, 10, 12, 1) 100%);"></div>
          
          <div style="position: relative; z-index: 2; text-align: center; padding: 0 20px; max-width: 1000px; width: 100%;">
            <div class="hero-subtitle" style="color: #e5c158; font-size: 0.8rem; letter-spacing: 6px; text-transform: uppercase; margin-bottom: 40px; font-weight: 600; opacity: 0; animation: fadeInUp 1s forwards 0.5s;">
               Professional Security Services
            </div>
            <h1 style="font-size: 5.5rem; font-weight: 200; line-height: 1.1; margin-bottom: 40px; letter-spacing: -3px; opacity: 0; animation: fadeInUp 1s forwards 0.8s;">
              The Standard of <br>
              <span style="font-style: italic; font-family: 'Playfair Display', serif; color: #e5c158; font-weight: 400;">Professional Protection.</span>
            </h1>
            <p class="hero-desc" style="font-size: 1.2rem; color: #a0a0a0; line-height: 1.8; margin-bottom: 60px; font-weight: 300; max-width: 750px; margin-left: auto; margin-right: auto; opacity: 0; animation: fadeInUp 1s forwards 1.1s;">
              Veteran-owned and operated. We provide comprehensive private security solutions built on reliability, detailed planning, and steadfast commitment to our clients.
            </p>
            <div class="hero-cta-container" style="opacity: 0; animation: fadeInUp 1s forwards 1.4s; display: flex; gap: 20px; justify-content: center;">
              <a href="#pathways" style="background: #e5c158; color: #0a0a0c; border: 1px solid #e5c158; padding: 22px 50px; font-size: 0.9rem; letter-spacing: 3px; text-transform: uppercase; font-weight: 800; cursor: pointer; text-decoration: none; transition: all 0.4s ease; display: inline-block;">
                View Services
              </a>
              <a href="#about" style="background: transparent; color: #fff; border: 1px solid rgba(255,255,255,0.2); padding: 22px 50px; font-size: 0.9rem; letter-spacing: 3px; text-transform: uppercase; cursor: pointer; text-decoration: none; transition: all 0.4s ease; display: inline-block;">
                About Us
              </a>
            </div>
          </div>
        </section>

        <!-- Scannable Legacy Section (Editorial Design) -->
        <section id="about" style="padding: 150px 0 0 0; background: #0a0a0c; position: relative;">
          <!-- decorative blur element -->
          <div style="position: absolute; top: 0; left: 0; width: 600px; height: 600px; background: radial-gradient(circle, rgba(229,193,88,0.03) 0%, transparent 60%); filter: blur(60px); pointer-events: none;"></div>
          
          <div style="max-width: 1400px; margin: 0 auto; padding: 0 10%; position: relative; z-index: 2;">
             <div style="display: flex; align-items: center; gap: 20px; margin-bottom: 40px;">
                <div style="height: 1px; width: 60px; background: rgba(229,193,88,0.5);"></div>
                <div style="color: #e5c158; font-size: 0.75rem; letter-spacing: 5px; text-transform: uppercase; font-weight: 700;">The Legacy</div>
             </div>
             <h2 style="font-size: 4rem; font-weight: 200; line-height: 1.1; margin-bottom: 100px; letter-spacing: -1.5px;">Meet The Owner, <br /><span style="font-style: italic; font-family: 'Playfair Display', serif; color: #e5c158; font-weight: 400;">Michael Colon.</span></h2>
          </div>

          <style>
             .editorial-row { display: grid; grid-template-columns: 1fr 1fr; align-items: stretch; margin-bottom: 0; }
             .ed-image { min-height: 750px; position: relative; overflow: hidden; }
             .ed-image img { width: 100%; height: 100%; object-fit: cover; filter: grayscale(100%) brightness(0.7); transition: all 1.2s cubic-bezier(0.16, 1, 0.3, 1); position: absolute; inset: 0; }
             .editorial-row:hover .ed-image img { filter: grayscale(0%) brightness(1); transform: scale(1.05); }
             .ed-text { padding: 100px 10%; display: flex; flex-direction: column; justify-content: center; background: #0a0a0c; border-bottom: 1px solid rgba(255,255,255,0.03); border-top: 1px solid rgba(255,255,255,0.03); }
             .ed-text-alt { background: #0d0d10; }
             
             @media (max-width: 1024px) {
                .editorial-row { grid-template-columns: 1fr !important; display: flex; flex-direction: column; }
                .editorial-row.reverse-mobile { flex-direction: column-reverse; }
                .ed-image { min-height: 500px; width: 100%; }
                .ed-text { padding: 60px 10%; }
             }
             @media (max-width: 768px) {
                #about h2 { font-size: 3rem !important; }
                .ed-image { min-height: 400px; }
             }
          </style>

          <!-- Chapter 1: Foundations -->
          <div class="editorial-row">
             <div class="ed-image">
                 <img src="/assets/michael_white_shirt.jpg" alt="Michael Colon Foundations" style="object-position: center 5%;">
             </div>
             <div class="ed-text ed-text-alt">
                <div style="color: #e5c158; font-size: 0.7rem; letter-spacing: 3px; text-transform: uppercase; font-weight: 700; margin-bottom: 25px;">01. Foundations & Service</div>
                <h3 style="font-size: 2.5rem; font-weight: 200; margin-bottom: 30px; line-height: 1.2;">A Calling for <span style="font-style: italic; color: #e5c158;">Service.</span></h3>
                <p style="font-size: 1.1rem; color: #aaa; line-height: 1.8; font-weight: 300;">Michael Colon was born in Brooklyn, NY and came from humble beginnings. After enlisting at 19 years old and honorably serving our country in the United States Navy, Michael had his professional trajectory in focus, starting his career in high-profile Executive Protection.</p>
             </div>
          </div>

          <!-- Chapter 2: Leadership -->
          <div class="editorial-row reverse-mobile">
             <div class="ed-text">
                <div style="color: #e5c158; font-size: 0.7rem; letter-spacing: 3px; text-transform: uppercase; font-weight: 700; margin-bottom: 25px;">02. Law Enforcement</div>
                <h3 style="font-size: 2.5rem; font-weight: 200; margin-bottom: 30px; line-height: 1.2;">Natural Born <span style="font-style: italic; color: #e5c158;">Leader.</span></h3>
                <p style="font-size: 1.1rem; color: #aaa; line-height: 1.8; font-weight: 300; margin-bottom: 20px;">At 36 years old, Michael joined the New York City Police Department's Aux Division. Seen by his superiors as a natural born leader, he was shortly thereafter promoted to the rank of sergeant, then lieutenant.</p>
                <p style="font-size: 1.1rem; color: #aaa; line-height: 1.8; font-weight: 300;">As the Executive Officer in charge, Michael oversaw all-aux patrol officers of Manhattan North’s 23rd Precinct before transitioning to South Florida as a security manager at a major retailer corporate campus.</p>
             </div>
             <div class="ed-image">
                 <img src="/assets/michael_nypd.jpg" alt="NYPD Leadership" style="object-position: center 15%;">
             </div>
          </div>

          <!-- Chapter 3: Vision -->
          <div class="editorial-row">
             <div class="ed-image">
                 <img src="/assets/michael_tactical.jpg" alt="Strategic Operations" style="object-position: center 10%;">
             </div>
             <div class="ed-text ed-text-alt">
                <div style="color: #e5c158; font-size: 0.7rem; letter-spacing: 3px; text-transform: uppercase; font-weight: 700; margin-bottom: 25px;">03. The Vision</div>
                <h3 style="font-size: 2.5rem; font-weight: 200; margin-bottom: 30px; line-height: 1.2;">Exceeding <span style="font-style: italic; color: #e5c158;">Expectations.</span></h3>
                <p style="font-size: 1.1rem; color: #aaa; line-height: 1.8; font-weight: 300; margin-bottom: 20px;">While managing 33 armed security officers and onsite medical personnel at a high-end residential community, Michael dug deep into what was missing and truly needed in today's private security market.</p>
                <p style="font-size: 1.1rem; color: #aaa; line-height: 1.8; font-weight: 300; margin-bottom: 50px;">In 2022, he opened his own firm to set a new standard in attention to detail and elite client service.</p>
                <div style="padding-left: 30px; border-left: 2px solid #e5c158;">
                   <p style="font-size: 1.3rem; color: #fff; font-style: italic; font-family: 'Playfair Display', serif; line-height: 1.6; margin: 0;">
                      “Be the example, stand by your word and keep your promises to your employees, partners and clients.”
                   </p>
                </div>
             </div>
          </div>
        </section>

        <!-- Services Section -->
        <section id="pathways" style="padding: 150px 10%; background: #0a0a0c; border-top: 1px solid rgba(255,255,255,0.03);">
           <div style="max-width: 1400px; margin: 0 auto;">
              <header style="display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 100px; gap: 60px; flex-wrap: wrap;">
                 <div style="max-width: 600px;">
                    <div style="color: #e5c158; font-size: 0.8rem; letter-spacing: 5px; text-transform: uppercase; margin-bottom: 25px; font-weight: 700;">Security Solutions</div>
                    <h2 style="font-size: 4.5rem; font-weight: 200; line-height: 1; letter-spacing: -2px; margin: 0;">Our Specialized <br/><span style="font-style: italic; font-family: 'Playfair Display', serif; color: #e5c158;">Services.</span></h2>
                 </div>
                 <div style="max-width: 500px; padding-bottom: 10px;">
                    <p style="font-size: 1.15rem; color: #888; font-weight: 300; line-height: 1.8; margin: 0;">
                       Elite protection designed for the most demanding environments. We combine veteran expertise with strategic planning to deliver safety as a standard.
                    </p>
                 </div>
              </header>

              <style>
                 .services-container { display: grid; grid-template-columns: repeat(12, 1fr); gap: 40px; }
                 .service-card { position: relative; border-radius: 4px; overflow: hidden; cursor: pointer; transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1); background: #111; border: 1px solid rgba(255,255,255,0.05); text-decoration: none; display: flex; flex-direction: column; }
                 
                 .service-card.large { grid-column: span 8; height: 600px; }
                 .service-card.medium { grid-column: span 4; height: 600px; }
                 .service-card.small { grid-column: span 6; height: 500px; }
                 
                 .service-card .card-img { position: absolute; inset: 0; filter: grayscale(100%) brightness(0.7); transition: all 1.2s cubic-bezier(0.16, 1, 0.3, 1); }
                 .service-card:hover .card-img { filter: grayscale(0%) brightness(0.9); transform: scale(1.05); }
                 
                 .card-content { position: absolute; inset: 0; background: linear-gradient(0deg, rgba(10,10,12,0.95) 0%, rgba(10,10,12,0.4) 50%, transparent 100%); padding: 50px; display: flex; flex-direction: column; justify-content: flex-end; z-index: 2; transition: all 0.6s ease; }
                 .service-card:hover .card-content { background: linear-gradient(0deg, rgba(10,10,12,0.98) 0%, rgba(10,10,12,0.2) 100%); }
                 
                 .service-tag { color: #e5c158; font-size: 0.7rem; letter-spacing: 3px; text-transform: uppercase; font-weight: 800; margin-bottom: 20px; display: flex; align-items: center; gap: 10px; }
                 .service-tag::before { content: ''; width: 20px; height: 1px; background: #e5c158; transition: width 0.4s ease; }
                 .service-card:hover .service-tag::before { width: 40px; }
                 
                 .service-card h3 { font-size: 2.5rem; font-weight: 200; color: #fff; margin: 0 0 20px 0; line-height: 1.1; letter-spacing: -1px; }
                 .service-card p { color: #aaa; font-size: 1rem; line-height: 1.6; margin: 0; max-width: 450px; opacity: 0.8; transition: opacity 0.4s; }
                 .service-card:hover p { opacity: 1; color: #fff; }
                 
                 .service-cta { margin-top: 30px; display: flex; align-items: center; gap: 15px; color: #e5c158; font-size: 0.8rem; font-weight: 700; letter-spacing: 2px; text-transform: uppercase; opacity: 0; transform: translateY(10px); transition: all 0.4s ease 0.1s; }
                 .service-card:hover .service-cta { opacity: 1; transform: translateY(0); }

                 @media (max-width: 1100px) {
                    .service-card.large, .service-card.medium { grid-column: span 6; }
                 }
                 @media (max-width: 768px) {
                    .services-container { grid-template-columns: 1fr; gap: 20px; }
                    .service-card { grid-column: span 1 !important; height: 500px !important; }
                    .card-content { padding: 30px; }
                    .service-card h3 { font-size: 1.8rem; }
                    .service-cta { opacity: 1; transform: translateY(0); }
                    #pathways h2 { font-size: 3rem !important; }
                 }
              </style>

              <div class="services-container">
                 <!-- Card 1: Executive Protection (Large) -->
                 <div class="service-card large" onclick="document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })">
                    <div class="card-img" style="background: url('/assets/executive/exec_1.jpg') center/cover;"></div>
                    <div class="card-content">
                       <div class="service-tag">High Level</div>
                       <h3>Executive Protection <br/>& Bodyguard Services</h3>
                       <p>Discreet, multi-layered protection for executives, high-profile individuals, and private clients. We focus on risk mitigation and seamless mobility.</p>
                       <div class="service-cta">Inquire Now ➔</div>
                    </div>
                 </div>

                 <!-- Card 2: Residential (Medium) -->
                 <div class="service-card medium" onclick="document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })">
                    <div class="card-img" style="background: url('/assets/fleet/fleet_5.jpg') center/cover;"></div>
                    <div class="card-content">
                       <div class="service-tag">Domestic</div>
                       <h3>Residential Property <br/>Protection</h3>
                       <p>Ensuring absolute peace of mind for residents through elite onsite security and community patrol services.</p>
                       <div class="service-cta">Inquire Now ➔</div>
                    </div>
                 </div>

                 <!-- Card 3: Commercial (Small) -->
                 <div class="service-card small" onclick="document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })">
                    <div class="card-img" style="background: url('/assets/fleet/fleet_4.jpg') center/cover;"></div>
                    <div class="card-content">
                       <div class="service-tag">Corporate</div>
                       <h3>Commercial & Industrial <br/>Security</h3>
                       <p>Scalable infrastructure security for corporate campuses, medical facilities, and high-end retail establishments.</p>
                       <div class="service-cta">Inquire Now ➔</div>
                    </div>
                 </div>

                 <!-- Card 4: Event Security (Small) -->
                 <div class="service-card small" onclick="document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })">
                    <div class="card-img" style="background: url('/assets/field/56.jpg') center/cover;"></div>
                    <div class="card-content">
                       <div class="service-tag">Special Ops</div>
                       <h3>Special Events <br/>& Crowd Management</h3>
                       <p>Professional event security coordination ensuring safety and order for large-scale gatherings and high-stakes venues.</p>
                       <div class="service-cta">Inquire Now ➔</div>
                    </div>
                 </div>
              </div>
           </div>
        </section>

        <!-- Sectioned Gallery -->
        <section id="lookbook" style="padding: 150px 0; background: #0a0a0c; overflow: hidden; border-bottom: 1px solid rgba(255,255,255,0.03);">
           <div style="padding: 0 10%; margin-bottom: 80px;">
              <div style="color: #e5c158; font-size: 0.8rem; letter-spacing: 5px; text-transform: uppercase; margin-bottom: 20px; font-weight: 600;">Operational Standards</div>
              <h2 style="font-size: 3.5rem; font-weight: 200; letter-spacing: -1px; margin: 0; line-height: 1.1;">Precision. <span style="font-style: italic; font-family: 'Playfair Display', serif; color: #e5c158;">Operational Excellence.</span></h2>
           </div>

           <style>
             @keyframes hintPulse { 0% { opacity: 0.2; transform: translateX(0); } 50% { opacity: 0.8; transform: translateX(5px); } 100% { opacity: 0.2; transform: translateX(0); } }
             .scroll-hint { margin-left: auto; font-size: 0.6rem; color: rgba(255,255,255,0.4); letter-spacing: 2px; text-transform: uppercase; display: flex; align-items: center; gap: 8px; }
             .scroll-hint span { display: inline-block; animation: hintPulse 2s infinite ease-in-out; color: #e5c158; }

             .gallery-row { margin-bottom: 100px; }
             .gallery-row:last-child { margin-bottom: 0; }
             .gallery-row-title { padding: 0 10%; margin-bottom: 30px; color: rgba(255,255,255,0.4); font-size: 0.75rem; letter-spacing: 4px; text-transform: uppercase; font-weight: 700; display: flex; align-items: center; gap: 20px; }
             .gallery-row-title::before { content: ''; width: 30px; height: 1px; background: rgba(255,255,255,0.05); }
             
             .scroll-container { display: flex; overflow-x: auto; scroll-snap-type: x mandatory; gap: 30px; padding: 0 10% 40px 10%; scrollbar-width: none; -ms-overflow-style: none; -webkit-overflow-scrolling: touch; }
             .scroll-container::-webkit-scrollbar { display: none; }
             
             .gallery-item { flex: 0 0 450px; height: 600px; scroll-snap-align: start; position: relative; border-radius: 4px; overflow: hidden; transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1); cursor: pointer; border: 1px solid rgba(255,255,255,0.05); }
             .gallery-item:hover { border-color: rgba(229, 193, 88, 0.4); transform: translateY(-10px); }
             .gallery-item img { width: 100%; height: 100%; object-fit: cover; transition: transform 1.2s cubic-bezier(0.16, 1, 0.3, 1), filter 1.2s ease; filter: grayscale(100%) brightness(0.7); }
             .gallery-item:hover img { transform: scale(1.05); filter: grayscale(0%) brightness(1); }
             
             .item-label { position: absolute; bottom: 0; left: 0; right: 0; padding: 40px; background: linear-gradient(to top, rgba(10,10,12,0.9) 0%, transparent 100%); transform: translateY(20px); opacity: 0; transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1); pointer-events: none; }
             .gallery-item:hover .item-label { transform: translateY(0); opacity: 1; }
             .item-label h4 { color: #e5c158; font-size: 0.65rem; letter-spacing: 3px; text-transform: uppercase; margin: 0 0 10px 0; font-weight: 800; }
             .item-label p { color: #fff; font-size: 1.2rem; font-weight: 300; margin: 0; letter-spacing: 1px; }

             @media (max-width: 768px) {
                .gallery-item { flex: 0 0 85vw !important; height: 420px; }
                .scroll-container { gap: 15px; padding: 0 20px 30px 20px; }
                .gallery-row-title { padding: 0 20px; }
                .item-label { opacity: 1; transform: translateY(0); background: linear-gradient(to top, rgba(10,10,12,0.8) 0%, transparent 100%); padding: 30px; }
                .gallery-item img { filter: grayscale(0%) brightness(0.9); }
             }

             .gallery-row-progress { height: 2px; background: rgba(255,255,255,0.05); margin: 0 10% 20px 10%; position: relative; border-radius: 2px; overflow: hidden; }
             .progress-bar { height: 100%; width: 0%; background: #e5c158; position: absolute; top: 0; left: 0; transition: width 0.1s ease-out; }
             
             #lightbox { position: fixed; inset: 0; background: rgba(10,10,12,0.95); z-index: 3000; display: none; align-items: center; justify-content: center; opacity: 0; transition: opacity 0.4s ease; backdrop-filter: blur(10px); cursor: pointer; }
             #lightbox img { max-width: 90%; max-height: 90vh; object-fit: contain; border-radius: 4px; box-shadow: 0 20px 40px rgba(0,0,0,0.5); transform: scale(0.95); transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1); }
             #lightbox.active img { transform: scale(1); }

              #lightbox-prev:hover, #lightbox-next:hover { opacity: 1 !important; color: #e5c158; }
              @media (max-width: 768px) {
                 #lightbox-prev, #lightbox-next { display: none; }
              }
           </style>

           <!-- Row 1: Tactical Fleet -->
           <div class="gallery-row">
              <div class="gallery-row-title">
                 <span>Tactical Fleet</span>
                 <div class="scroll-hint">Drag to Explore <span>➔</span></div>
              </div>
              <div class="scroll-container">
                 <div class="gallery-item">
                    <img src="/assets/mcso_patrol_header.jpg" alt="Patrol Header">
                    <div class="item-label">
                       <h4>Deployment</h4>
                       <p>High-Visibility Patrol Units</p>
                    </div>
                 </div>
                 <div class="gallery-item">
                    <img src="/assets/fleet/fleet_5.jpg" alt="Fleet Unit">
                    <div class="item-label">
                       <h4>Patrol Unit</h4>
                       <p>Community Security</p>
                    </div>
                 </div>
                 <div class="gallery-item">
                    <img src="/assets/fleet/fleet_3.jpg" alt="Detail">
                    <div class="item-label">
                       <h4>Command Response</h4>
                       <p>Dedicated Vehicles</p>
                    </div>
                 </div>
                 <div class="gallery-item">
                    <img src="/assets/fleet/fleet_4.jpg" alt="Night Ops">
                    <div class="item-label">
                       <h4>Night Operations</h4>
                       <p>24/7 Vigilance</p>
                    </div>
                 </div>
                 <div class="gallery-item">
                    <img src="/assets/fleet/fleet_1.jpg" alt="Mobile Unit">
                    <div class="item-label">
                       <h4>Mobile Units</h4>
                       <p>Versatile Deployment</p>
                    </div>
                 </div>
                 <div class="gallery-item">
                    <img src="/assets/fleet/fleet_2.jpg" alt="Patrol Ready">
                    <div class="item-label">
                       <h4>Transport</h4>
                       <p>Secure Escorts</p>
                    </div>
                 </div>
              </div>
              <div class="gallery-row-progress"><div class="progress-bar"></div></div>
           </div>


           
           <!-- Row 4: Team in the Field -->
           <div class="gallery-row">
              <div class="gallery-row-title">
                 <span>Team in the Field</span>
                 <div class="scroll-hint">Drag to Explore <span>➔</span></div>
              </div>
              <div class="scroll-container">
                 <div class="gallery-item">
                    <img src="/assets/field/222.jpg" alt="Field Team Member">
                    <div class="item-label">
                       <h4>Field Ops</h4>
                       <p>On-Site Security</p>
                    </div>
                 </div>
                 <div class="gallery-item">
                    <img src="/assets/field/444.jpg" alt="Field Supervisor">
                    <div class="item-label">
                       <h4>Protection</h4>
                       <p>Active Vigilance</p>
                    </div>
                 </div>
                 <div class="gallery-item">
                    <img src="/assets/field/555.jpg" alt="Team Patrol">
                    <div class="item-label">
                       <h4>Patrol</h4>
                       <p>Mobile Units</p>
                    </div>
                 </div>
                 <div class="gallery-item">
                    <img src="/assets/field/7777.jpg" alt="Security Briefing">
                    <div class="item-label">
                       <h4>Operations</h4>
                       <p>Field Commands</p>
                    </div>
                 </div>
                 <div class="gallery-item">
                    <img src="/assets/field/56.jpg" alt="Command Unit">
                    <div class="item-label">
                       <h4>Supervision</h4>
                       <p>Event Security</p>
                    </div>
                 </div>
              </div>
              <div class="gallery-row-progress"><div class="progress-bar"></div></div>
           </div>
           
           <!-- Row 5: Executive Protection -->
           <div class="gallery-row">
              <div class="gallery-row-title">
                 <span>Executive Protection</span>
                 <div class="scroll-hint">Drag to Explore <span>➔</span></div>
              </div>
              <div class="scroll-container">
                 <div class="gallery-item">
                    <img src="/assets/executive/exec_1.jpg" alt="Executive Protection Detail">
                    <div class="item-label">
                       <h4>Close Protection</h4>
                       <p>High-Profile Security</p>
                    </div>
                 </div>
                 <div class="gallery-item">
                    <img src="/assets/executive/exec_2.jpg" alt="VIP Escort">
                    <div class="item-label">
                       <h4>VIP Escort</h4>
                       <p>Discreet Vigilance</p>
                    </div>
                 </div>
                 <div class="gallery-item">
                    <img src="/assets/executive/exec_3.jpg" alt="Personal Security">
                    <div class="item-label">
                       <h4>Personal Security</h4>
                       <p>Threat Mitigation</p>
                    </div>
                 </div>
              </div>
              <div class="gallery-row-progress"><div class="progress-bar"></div></div>
           </div>
           <!-- Lightbox -->
           <div id="lightbox">
              <div id="lightbox-close" style="position: absolute; top: 30px; right: 40px; color: #fff; font-size: 2rem; font-weight: 300; letter-spacing: 2px; z-index: 3001; cursor: pointer;">✕</div>
              <div id="lightbox-prev" style="position: absolute; left: 40px; color: #fff; font-size: 3rem; font-weight: 100; z-index: 3001; cursor: pointer; opacity: 0.5; transition: opacity 0.3s;">‹</div>
              <div id="lightbox-next" style="position: absolute; right: 40px; color: #fff; font-size: 3rem; font-weight: 100; z-index: 3001; cursor: pointer; opacity: 0.5; transition: opacity 0.3s;">›</div>
              <img src="" alt="Expanded View">
           </div>
        </section>

        <!-- Consultation Section -->
        <section id="contact" style="padding: 150px 10%; background: #08080a; position: relative;">
           <div class="consultation-grid" style="max-width: 1100px; margin: 0 auto; background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.05); border-radius: 4px; padding: 80px; display: grid; grid-template-columns: 1fr 1fr; gap: 80px;">
              <div>
                 <div style="color: #e5c158; font-size: 0.8rem; letter-spacing: 5px; text-transform: uppercase; margin-bottom: 20px; font-weight: 600;">Consultation</div>
                 <h2 style="font-size: 3.5rem; font-weight: 200; line-height: 1.1; margin-bottom: 30px; letter-spacing: -2px;">Start Your <span style="font-style: italic; font-family: 'Playfair Display', serif; color: #e5c158;">Assessment.</span></h2>
                 <p style="font-size: 1.05rem; color: #888; line-height: 1.8; margin-bottom: 50px; font-weight: 300;">
                    Contact us today for a professional review of your security needs and a personalized protection plan.
                 </p>
                 <div style="display: flex; flex-direction: column; gap: 15px;">
                    <div style="font-size: 2rem; font-weight: 300; color: #fff; letter-spacing: 1px;">561-722-2209</div>
                    <div style="font-size: 0.9rem; color: #666; letter-spacing: 3px; text-transform: uppercase;">Boynton Beach, FL</div>
                 </div>
              </div>
              
              <div style="display: flex; flex-direction: column; justify-content: center;">
                 <style>
                    .consult-input { width: 100%; background: transparent; border: none; border-bottom: 1px solid rgba(255,255,255,0.1); color: #fff; padding: 15px 0; font-size: 0.95rem; margin-bottom: 30px; outline: none; transition: border-color 0.3s; font-family: 'Inter', sans-serif; }
                    .consult-input:focus { border-bottom-color: #e5c158; }
                    .consult-btn { width: 100%; background: transparent; color: #e5c158; border: 1px solid #e5c158; padding: 20px; font-size: 0.85rem; font-weight: 800; letter-spacing: 4px; text-transform: uppercase; cursor: pointer; transition: all 0.3s; }
                    .consult-btn:hover { background: #e5c158; color: #0a0a0c; }
                 </style>
                 <input type="text" placeholder="Full Name" class="consult-input">
                 <input type="email" placeholder="Email Address" class="consult-input">
                 <input type="tel" placeholder="Phone Number" class="consult-input">
                 <textarea placeholder="How can we help?" class="consult-input" style="height: 60px; resize: none;"></textarea>
                 <button class="consult-btn">Submit Message</button>
              </div>
           </div>
        </section>
      </main>



      <footer style="padding: 100px 10% 60px 10%; border-top: 1px solid rgba(255,255,255,0.03); background: #0a0a0c; text-align: center;">
         <div style="margin-bottom: 30px; display: flex; justify-content: center;">
            <img src="/assets/mcso_star_badge.png" alt="MCSO Logo" style="width: 240px; height: 240px; object-fit: contain; opacity: 0.8;">
         </div>
         <p style="color: #444; font-size: 0.75rem; letter-spacing: 2px; text-transform: uppercase;">RESPOND // RESPECT // RESOLVE</p>
         <p style="color: #222; font-size: 0.7rem; letter-spacing: 1px; margin-top: 40px;">&copy; 2026 MICHAEL COLON SECURITY ORGANIZATION LLC // US MILITARY VETERAN OWNED.</p>
      </footer>

      <!-- Global Behavior & Interactions Handled by Theme Logic -->
    </div>
  `,setTimeout(()=>{const z=i.querySelectorAll("section"),k=i.querySelectorAll(".nav-link"),o=i.querySelector("#scroll-progress"),l=i.querySelector("#mobile-menu-toggle"),d=i.querySelector("#mobile-nav-screen"),x=i.querySelectorAll(".mobile-nav-link"),p=[i.querySelector(".bar1"),i.querySelector(".bar2"),i.querySelector(".bar3")];let y=!1;const E=()=>{y=!y,y?(d.style.transform="translateY(0)",d.style.opacity="1",p[0].style.transform="translateY(8px) rotate(45deg)",p[1].style.opacity="0",p[2].style.transform="translateY(-8px) rotate(-45deg)",x.forEach(e=>{e.style.opacity="1",e.style.transform="translateY(0)"})):(d.style.transform="translateY(-100%)",d.style.opacity="0",p[0].style.transform="translateY(0) rotate(0)",p[1].style.opacity="1",p[2].style.transform="translateY(0) rotate(0)",x.forEach(e=>{e.style.opacity="0",e.style.transform="translateY(20px)"}))};l&&(l.addEventListener("click",E),x.forEach(e=>e.addEventListener("click",E))),window.onscroll=()=>{const e=window.pageYOffset,t=document.documentElement.scrollHeight,r=window.innerHeight,s=e/(t-r)*100;o&&(o.style.width=s+"%");let h="";z.forEach(n=>{const v=n.offsetTop;pageYOffset>=v-200&&(h=n.id)}),k.forEach(n=>{n.classList.remove("active"),n.getAttribute("href").substring(1)===h&&n.classList.add("active")})};const m=Array.from(i.querySelectorAll(".gallery-item")),a=i.querySelector("#lightbox"),L=i.querySelector("#lightbox img"),Y=i.querySelector("#lightbox-prev"),M=i.querySelector("#lightbox-next"),A=i.querySelector("#lightbox-close");let g=0;const b=m.map(e=>e.querySelector("img").src),f=e=>{e<0&&(e=b.length-1),e>=b.length&&(e=0),g=e,L.src=b[g]};if(a){A.addEventListener("click",t=>{t.stopPropagation(),e()}),a.addEventListener("click",t=>{(t.target===a||t.target===L)&&e()});const e=()=>{a.style.opacity="0",a.classList.remove("active"),setTimeout(()=>a.style.display="none",400)};Y.addEventListener("click",t=>{t.stopPropagation(),f(g-1)}),M.addEventListener("click",t=>{t.stopPropagation(),f(g+1)}),window.addEventListener("keydown",t=>{a.classList.contains("active")&&(t.key==="ArrowLeft"&&f(g-1),t.key==="ArrowRight"&&f(g+1),t.key==="Escape"&&e())})}if(i.querySelectorAll(".scroll-container").forEach(e=>{var P;const t=(P=e.nextElementSibling)==null?void 0:P.querySelector(".progress-bar"),r=()=>{const c=e.scrollWidth-e.clientWidth,j=c>0?e.scrollLeft/c*100:0;t&&(t.style.width=`${j}%`),e.querySelectorAll(".gallery-item").forEach(I=>{const O=I.querySelector("img");if(!O)return;const T=I.getBoundingClientRect(),u=e.getBoundingClientRect(),D=T.left+T.width/2,q=u.left+u.width/2,N=D-q,_=u.width;let w=N/_;w=Math.max(-1,Math.min(1,w)),O.style.objectPosition=`${50+w*15}% 50%`})};e.addEventListener("scroll",r,{passive:!0}),setTimeout(r,100);let s=!1,h,n;e.addEventListener("mousedown",c=>{s=!0,e.style.cursor="grabbing",e.style.scrollSnapType="none",h=c.pageX-e.offsetLeft,n=e.scrollLeft});const v=()=>{s=!1,e.style.cursor="grab",e.style.scrollSnapType="x mandatory"};e.addEventListener("mouseleave",v),e.addEventListener("mouseup",v),e.addEventListener("mousemove",c=>{if(!s)return;c.preventDefault();const C=(c.pageX-e.offsetLeft-h)*2;e.scrollLeft=n-C})}),m.length>0&&(m.forEach((e,t)=>{const r=e.querySelector("img");r&&r.addEventListener("dragstart",s=>s.preventDefault()),window.innerWidth>768&&(e.style.cursor="grab"),e.addEventListener("click",()=>{window.innerWidth>768&&a?(f(t),a.style.display="flex",a.offsetWidth,a.style.opacity="1",a.classList.add("active")):(m.forEach(s=>s.style.borderColor="rgba(229, 193, 88, 0.05)"),e.style.borderColor="rgba(229, 193, 88, 0.8)")})}),window.innerWidth<=768)){const e=new IntersectionObserver(t=>{t.forEach(r=>{r.isIntersecting?r.target.style.borderColor="rgba(229, 193, 88, 0.8)":r.target.style.borderColor="rgba(229, 193, 88, 0.05)"})},{rootMargin:"0px -20% 0px -20%",threshold:.5});m.forEach(t=>e.observe(t))}},100)}function U(i){i.innerHTML=`
    <div id="msco-aura" style="background: #ffffff; color: #0a0a0c; min-height: 100vh; font-family: 'Inter', 'Helvetica Neue', Arial, sans-serif; display: flex; flex-direction: column; overflow-x: hidden;">
      
      <!-- Progress Bar -->
      <div id="scroll-progress" style="position: fixed; top: 0; left: 0; height: 3px; background: #e5c158; width: 0%; z-index: 1001; transition: width 0.1s;"></div>

       <!-- Minimal Sticky Header -->
      <header id="main-header" style="padding: 10px 60px; display: flex; justify-content: space-between; align-items: center; position: fixed; width: 100%; box-sizing: border-box; z-index: 2000; background: rgba(255, 255, 255, 0.85); backdrop-filter: blur(20px); border-bottom: 1px solid rgba(0, 0, 0, 0.05); transition: all 0.3s ease;">
        <div style="cursor: pointer; width: 100px; height: 100px; display: flex; align-items: center;" onclick="window.scrollTo({top: 0, behavior: 'smooth'})">
          <img src="/assets/mcso_star_badge.png" alt="MCSO Logo" style="width: 100%; height: 100%; object-fit: contain; filter: invert(0);">
        </div>
        
        <nav id="main-nav" class="desktop-nav" style="display: flex; gap: 40px; font-size: 0.75rem; letter-spacing: 2px; text-transform: uppercase; font-weight: 500; align-items: center;">
          <a href="#about" class="nav-link" style="color: #0a0a0c; text-decoration: none; opacity: 0.6; transition: all 0.3s; position: relative; padding: 10px 0;">The Owner</a>
          <a href="#pathways" class="nav-link" style="color: #0a0a0c; text-decoration: none; opacity: 0.6; transition: all 0.3s; position: relative; padding: 10px 0;">Services</a>
          <a href="#lookbook" class="nav-link" style="color: #0a0a0c; text-decoration: none; opacity: 0.6; transition: all 0.3s; position: relative; padding: 10px 0;">Gallery</a>
          <a href="#contact" class="nav-link" style="color: #c9a53d; text-decoration: none; border: 1px solid #c9a53d; padding: 12px 30px; border-radius: 2px; transition: all 0.3s; font-weight: 700;">Consultation</a>
        </nav>

        <div id="mobile-menu-toggle" class="mobile-only" style="cursor: pointer; padding: 10px; z-index: 2001; margin-right: -10px;">
           <div class="bar1" style="width: 24px; height: 2px; background: #c9a53d; margin-bottom: 5px; transition: 0.4s;"></div>
           <div class="bar2" style="width: 24px; height: 2px; background: #c9a53d; margin-bottom: 5px; transition: 0.4s;"></div>
           <div class="bar3" style="width: 24px; height: 2px; background: #c9a53d; transition: 0.4s;"></div>
        </div>
      </header>

      <!-- Mobile Nav Screen -->
      <div id="mobile-nav-screen" style="position: fixed; inset: 0; background: rgba(255,255,255,0.98); z-index: 1999; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 40px; transform: translateY(-100%); transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1); backdrop-filter: blur(20px); opacity: 0;">
         <a href="#about" class="mobile-nav-link" style="color: #0a0a0c; text-decoration: none; font-size: 1.5rem; letter-spacing: 4px; text-transform: uppercase; opacity: 0; transform: translateY(20px); transition: all 0.4s ease 0.1s;">The Owner</a>
         <a href="#pathways" class="mobile-nav-link" style="color: #0a0a0c; text-decoration: none; font-size: 1.5rem; letter-spacing: 4px; text-transform: uppercase; opacity: 0; transform: translateY(20px); transition: all 0.4s ease 0.2s;">Services</a>
         <a href="#lookbook" class="mobile-nav-link" style="color: #0a0a0c; text-decoration: none; font-size: 1.5rem; letter-spacing: 4px; text-transform: uppercase; opacity: 0; transform: translateY(20px); transition: all 0.4s ease 0.3s;">Gallery</a>
         <a href="#contact" class="mobile-nav-link" style="color: #c9a53d; text-decoration: none; font-size: 1.5rem; letter-spacing: 4px; text-transform: uppercase; border: 1px solid #c9a53d; padding: 15px 40px; margin-top: 20px; opacity: 0; transform: translateY(20px); transition: all 0.4s ease 0.4s;">Consultation</a>
      </div>

      <main style="flex: 1;">
        <!-- Immersive Hero Section -->
        <section id="hero" style="position: relative; height: 100vh; display: flex; align-items: center; justify-content: center; overflow: hidden; background: #f5f5f7;">
          <div id="hero-bg" style="position: absolute; inset: 0; background: url('/assets/mcso_patrol_header.jpg') center/cover; opacity: 0.45; filter: contrast(1.1) brightness(1); transition: transform 1.5s cubic-bezier(0.16, 1, 0.3, 1); transform: scale(1);"></div>
          <style>
            @keyframes heroZoom { from { transform: scale(1); } to { transform: scale(1.1); } }
            @keyframes fadeInUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
            .nav-link.active { opacity: 1 !important; color: #c9a53d !important; }
            .nav-link.active::after { content: ''; position: absolute; bottom: -5px; left: 0; width: 100%; height: 1px; background: #c9a53d; }
            
            #hero-bg { animation: heroZoom 20s infinite alternate cubic-bezier(0.45, 0, 0.55, 1); }

            .mobile-only { display: none; }
            
            @media (max-width: 1024px) {
               .desktop-nav { display: none !important; }
               .mobile-only { display: block; }
               #main-header { padding: 10px 30px !important; }
               #main-header > div { width: 80px !important; height: 80px !important; }
               h1 { font-size: 3.5rem !important; }
            }
            @media (max-width: 768px) {
               h1 { font-size: 2.2rem !important; margin-bottom: 25px !important; letter-spacing: -1px !important; }
               .hero-subtitle { font-size: 0.7rem !important; margin-bottom: 25px !important; }
               .hero-desc { font-size: 1rem !important; line-height: 1.6 !important; margin-bottom: 40px !important; padding: 0 10px; }
               .hero-section-padding { padding: 0 20px !important; }
               .hero-cta-container { flex-direction: column !important; gap: 15px !important; align-items: center; width: 100%; }
               .hero-cta-container a { width: 100%; padding: 18px 0 !important; max-width: 280px; }
               .consultation-grid { grid-template-columns: 1fr !important; gap: 40px !important; padding: 40px !important; }
               @keyframes heroZoom { from { transform: scale(1.05); } to { transform: scale(1.15); } }
            }
          </style>
          
          <div style="position: absolute; inset: 0; background: radial-gradient(circle at center, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 1) 100%);"></div>
          
          <div style="position: relative; z-index: 2; text-align: center; padding: 0 20px; max-width: 1000px; width: 100%;">
            <div class="hero-subtitle" style="color: #c9a53d; font-size: 0.8rem; letter-spacing: 6px; text-transform: uppercase; margin-bottom: 40px; font-weight: 600; opacity: 0; animation: fadeInUp 1s forwards 0.5s;">
               Professional Security Services
            </div>
            <h1 style="font-size: 5.5rem; font-weight: 200; line-height: 1.1; margin-bottom: 40px; letter-spacing: -3px; opacity: 0; animation: fadeInUp 1s forwards 0.8s; color: #0a0a0c;">
              The Standard of <br>
              <span style="font-style: italic; font-family: 'Playfair Display', serif; color: #c9a53d; font-weight: 400;">Professional Protection.</span>
            </h1>
            <p class="hero-desc" style="font-size: 1.2rem; color: #555; line-height: 1.8; margin-bottom: 60px; font-weight: 300; max-width: 750px; margin-left: auto; margin-right: auto; opacity: 0; animation: fadeInUp 1s forwards 1.1s;">
              Veteran-owned and operated. We provide comprehensive private security solutions built on reliability, detailed planning, and steadfast commitment to our clients.
            </p>
            <div class="hero-cta-container" style="opacity: 0; animation: fadeInUp 1s forwards 1.4s; display: flex; gap: 20px; justify-content: center;">
              <a href="#pathways" style="background: #c9a53d; color: #ffffff; border: 1px solid #c9a53d; padding: 22px 50px; font-size: 0.9rem; letter-spacing: 3px; text-transform: uppercase; font-weight: 800; cursor: pointer; text-decoration: none; transition: all 0.4s ease; display: inline-block;">
                View Services
              </a>
              <a href="#about" style="background: transparent; color: #0a0a0c; border: 1px solid rgba(0,0,0,0.1); padding: 22px 50px; font-size: 0.9rem; letter-spacing: 3px; text-transform: uppercase; cursor: pointer; text-decoration: none; transition: all 0.4s ease; display: inline-block;">
                About Us
              </a>
            </div>
          </div>
        </section>

        <!-- Scannable Legacy Section (Editorial Design) -->
        <section id="about" style="padding: 150px 0 0 0; background: #ffffff; position: relative;">
          <!-- decorative blur element -->
          <div style="position: absolute; top: 0; left: 0; width: 600px; height: 600px; background: radial-gradient(circle, rgba(201,165,61,0.05) 0%, transparent 60%); filter: blur(60px); pointer-events: none;"></div>
          
          <div style="max-width: 1400px; margin: 0 auto; padding: 0 10%; position: relative; z-index: 2;">
             <div style="display: flex; align-items: center; gap: 20px; margin-bottom: 40px;">
                <div style="height: 1px; width: 60px; background: rgba(201,165,61,0.5);"></div>
                <div style="color: #c9a53d; font-size: 0.75rem; letter-spacing: 5px; text-transform: uppercase; font-weight: 700;">The Legacy</div>
             </div>
             <h2 style="font-size: 4rem; font-weight: 200; line-height: 1.1; margin-bottom: 100px; letter-spacing: -1.5px; color: #0a0a0c;">Meet The Owner, <br /><span style="font-style: italic; font-family: 'Playfair Display', serif; color: #c9a53d; font-weight: 400;">Michael Colon.</span></h2>
          </div>

          <style>
             .editorial-row { display: grid; grid-template-columns: 1fr 1fr; align-items: stretch; margin-bottom: 0; }
             .ed-image { min-height: 750px; position: relative; overflow: hidden; }
             .ed-image img { width: 100%; height: 100%; object-fit: cover; filter: grayscale(100%) brightness(1.1); transition: all 1.2s cubic-bezier(0.16, 1, 0.3, 1); position: absolute; inset: 0; }
             .editorial-row:hover .ed-image img { filter: grayscale(0%) brightness(1); transform: scale(1.05); }
             .ed-text { padding: 100px 10%; display: flex; flex-direction: column; justify-content: center; background: #ffffff; border-bottom: 1px solid rgba(0,0,0,0.03); border-top: 1px solid rgba(0,0,0,0.03); }
             .ed-text-alt { background: #fafafa; }
             
             @media (max-width: 1024px) {
                .editorial-row { grid-template-columns: 1fr !important; display: flex; flex-direction: column; }
                .editorial-row.reverse-mobile { flex-direction: column-reverse; }
                .ed-image { min-height: 500px; width: 100%; }
                .ed-text { padding: 60px 10%; }
             }
             @media (max-width: 768px) {
                #about h2 { font-size: 3rem !important; }
                .ed-image { min-height: 400px; }
             }
          </style>

          <!-- Chapter 1: Foundations -->
          <div class="editorial-row">
             <div class="ed-image">
                 <img src="/assets/michael_white_shirt.jpg" alt="Michael Colon Foundations" style="object-position: center 5%;">
             </div>
             <div class="ed-text ed-text-alt">
                <div style="color: #c9a53d; font-size: 0.7rem; letter-spacing: 3px; text-transform: uppercase; font-weight: 700; margin-bottom: 25px;">01. Foundations & Service</div>
                <h3 style="font-size: 2.5rem; font-weight: 200; margin-bottom: 30px; line-height: 1.2; color: #0a0a0c;">A Calling for <span style="font-style: italic; color: #c9a53d;">Service.</span></h3>
                <p style="font-size: 1.1rem; color: #555; line-height: 1.8; font-weight: 300;">Michael Colon was born in Brooklyn, NY and came from humble beginnings. After enlisting at 19 years old and honorably serving our country in the United States Navy, Michael had his professional trajectory in focus, starting his career in high-profile Executive Protection.</p>
             </div>
          </div>

          <!-- Chapter 2: Leadership -->
          <div class="editorial-row reverse-mobile">
             <div class="ed-text">
                <div style="color: #c9a53d; font-size: 0.7rem; letter-spacing: 3px; text-transform: uppercase; font-weight: 700; margin-bottom: 25px;">02. Law Enforcement</div>
                <h3 style="font-size: 2.5rem; font-weight: 200; margin-bottom: 30px; line-height: 1.2; color: #0a0a0c;">Natural Born <span style="font-style: italic; color: #c9a53d;">Leader.</span></h3>
                <p style="font-size: 1.1rem; color: #555; line-height: 1.8; font-weight: 300; margin-bottom: 20px;">At 36 years old, Michael joined the New York City Police Department's Aux Division. Seen by his superiors as a natural born leader, he was shortly thereafter promoted to the rank of sergeant, then lieutenant.</p>
                <p style="font-size: 1.1rem; color: #555; line-height: 1.8; font-weight: 300;">As the Executive Officer in charge, Michael oversaw all-aux patrol officers of Manhattan North’s 23rd Precinct before transitioning to South Florida as a security manager at a major retailer corporate campus.</p>
             </div>
             <div class="ed-image">
                 <img src="/assets/michael_nypd.jpg" alt="NYPD Leadership" style="object-position: center 15%;">
             </div>
          </div>

          <!-- Chapter 3: Vision -->
          <div class="editorial-row">
             <div class="ed-image">
                 <img src="/assets/michael_tactical.jpg" alt="Strategic Operations" style="object-position: center 10%;">
             </div>
             <div class="ed-text ed-text-alt">
                <div style="color: #c9a53d; font-size: 0.7rem; letter-spacing: 3px; text-transform: uppercase; font-weight: 700; margin-bottom: 25px;">03. The Vision</div>
                <h3 style="font-size: 2.5rem; font-weight: 200; margin-bottom: 30px; line-height: 1.2; color: #0a0a0c;">Exceeding <span style="font-style: italic; color: #c9a53d;">Expectations.</span></h3>
                <p style="font-size: 1.1rem; color: #555; line-height: 1.8; font-weight: 300; margin-bottom: 20px;">While managing 33 armed security officers and onsite medical personnel at a high-end residential community, Michael dug deep into what was missing and truly needed in today's private security market.</p>
                <p style="font-size: 1.1rem; color: #555; line-height: 1.8; font-weight: 300; margin-bottom: 50px;">In 2022, he opened his own firm to set a new standard in attention to detail and elite client service.</p>
                <div style="padding-left: 30px; border-left: 2px solid #c9a53d;">
                   <p style="font-size: 1.3rem; color: #0a0a0c; font-style: italic; font-family: 'Playfair Display', serif; line-height: 1.6; margin: 0;">
                      “Be the example, stand by your word and keep your promises to your employees, partners and clients.”
                   </p>
                </div>
             </div>
          </div>
        </section>

        <!-- Services Section -->
        <section id="pathways" style="padding: 150px 10%; background: #ffffff; border-top: 1px solid rgba(0,0,0,0.03);">
           <div style="max-width: 1400px; margin: 0 auto;">
              <header style="display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 100px; gap: 60px; flex-wrap: wrap;">
                 <div style="max-width: 600px;">
                    <div style="color: #c9a53d; font-size: 0.8rem; letter-spacing: 5px; text-transform: uppercase; margin-bottom: 25px; font-weight: 700;">Security Solutions</div>
                    <h2 style="font-size: 4.5rem; font-weight: 200; line-height: 1; letter-spacing: -2px; margin: 0; color: #0a0a0c;">Our Specialized <br/><span style="font-style: italic; font-family: 'Playfair Display', serif; color: #c9a53d;">Services.</span></h2>
                 </div>
                 <div style="max-width: 500px; padding-bottom: 10px;">
                    <p style="font-size: 1.15rem; color: #666; font-weight: 300; line-height: 1.8; margin: 0;">
                       Elite protection designed for the most demanding environments. We combine veteran expertise with strategic planning to deliver safety as a standard.
                    </p>
                 </div>
              </header>

              <style>
                 .services-container { display: grid; grid-template-columns: repeat(12, 1fr); gap: 40px; }
                 .service-card { position: relative; border-radius: 4px; overflow: hidden; cursor: pointer; transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1); background: #fcfcfc; border: 1px solid rgba(0,0,0,0.05); text-decoration: none; display: flex; flex-direction: column; box-shadow: 0 10px 30px rgba(0,0,0,0.02); }
                 
                 .service-card.large { grid-column: span 8; height: 600px; }
                 .service-card.medium { grid-column: span 4; height: 600px; }
                 .service-card.small { grid-column: span 6; height: 500px; }
                 
                 .service-card .card-img { position: absolute; inset: 0; filter: grayscale(100%) brightness(1.1); transition: all 1.2s cubic-bezier(0.16, 1, 0.3, 1); opacity: 0.7; }
                 .service-card:hover .card-img { filter: grayscale(0%) brightness(1); transform: scale(1.05); opacity: 1; }
                 
                 .card-content { position: absolute; inset: 0; background: linear-gradient(0deg, rgba(255,255,255,0.98) 0%, rgba(255,255,255,0.4) 50%, transparent 100%); padding: 50px; display: flex; flex-direction: column; justify-content: flex-end; z-index: 2; transition: all 0.6s ease; }
                 .service-card:hover .card-content { background: linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0.2) 100%); }
                 
                 .service-tag { color: #c9a53d; font-size: 0.7rem; letter-spacing: 3px; text-transform: uppercase; font-weight: 800; margin-bottom: 20px; display: flex; align-items: center; gap: 10px; }
                 .service-tag::before { content: ''; width: 20px; height: 1px; background: #c9a53d; transition: width 0.4s ease; }
                 .service-card:hover .service-tag::before { width: 40px; }
                 
                 .service-card h3 { font-size: 2.5rem; font-weight: 200; color: #0a0a0c; margin: 0 0 20px 0; line-height: 1.1; letter-spacing: -1px; }
                 .service-card p { color: #666; font-size: 1rem; line-height: 1.6; margin: 0; max-width: 450px; opacity: 0.8; transition: opacity 0.4s; }
                 .service-card:hover p { opacity: 1; color: #000; }
                 
                 .service-cta { margin-top: 30px; display: flex; align-items: center; gap: 15px; color: #c9a53d; font-size: 0.8rem; font-weight: 700; letter-spacing: 2px; text-transform: uppercase; opacity: 0; transform: translateY(10px); transition: all 0.4s ease 0.1s; }
                 .service-card:hover .service-cta { opacity: 1; transform: translateY(0); }

                 @media (max-width: 1100px) {
                    .service-card.large, .service-card.medium { grid-column: span 6; }
                 }
                 @media (max-width: 768px) {
                    .services-container { grid-template-columns: 1fr; gap: 20px; }
                    .service-card { grid-column: span 1 !important; height: 500px !important; }
                    .card-content { padding: 30px; }
                    .service-card h3 { font-size: 1.8rem; }
                    .service-cta { opacity: 1; transform: translateY(0); }
                    #pathways h2 { font-size: 3rem !important; }
                 }
              </style>

              <div class="services-container">
                 <!-- Card 1: Executive Protection (Large) -->
                 <div class="service-card large" onclick="document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })">
                    <div class="card-img" style="background: url('/assets/executive/exec_1.jpg') center/cover;"></div>
                    <div class="card-content">
                       <div class="service-tag">High Level</div>
                       <h3>Executive Protection <br/>& Bodyguard Services</h3>
                       <p>Discreet, multi-layered protection for executives, high-profile individuals, and private clients. We focus on risk mitigation and seamless mobility.</p>
                       <div class="service-cta">Inquire Now ➔</div>
                    </div>
                 </div>

                 <!-- Card 2: Residential (Medium) -->
                 <div class="service-card medium" onclick="document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })">
                    <div class="card-img" style="background: url('/assets/fleet/fleet_5.jpg') center/cover;"></div>
                    <div class="card-content">
                       <div class="service-tag">Domestic</div>
                       <h3>Residential Property <br/>Protection</h3>
                       <p>Ensuring absolute peace of mind for residents through elite onsite security and community patrol services.</p>
                       <div class="service-cta">Inquire Now ➔</div>
                    </div>
                 </div>

                 <!-- Card 3: Commercial (Small) -->
                 <div class="service-card small" onclick="document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })">
                    <div class="card-img" style="background: url('/assets/fleet/fleet_4.jpg') center/cover;"></div>
                    <div class="card-content">
                       <div class="service-tag">Corporate</div>
                       <h3>Commercial & Industrial <br/>Security</h3>
                       <p>Scalable infrastructure security for corporate campuses, medical facilities, and high-end retail establishments.</p>
                       <div class="service-cta">Inquire Now ➔</div>
                    </div>
                 </div>

                 <!-- Card 4: Event Security (Small) -->
                 <div class="service-card small" onclick="document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })">
                    <div class="card-img" style="background: url('/assets/field/56.jpg') center/cover;"></div>
                    <div class="card-content">
                       <div class="service-tag">Special Ops</div>
                       <h3>Special Events <br/>& Crowd Management</h3>
                       <p>Professional event security coordination ensuring safety and order for large-scale gatherings and high-stakes venues.</p>
                       <div class="service-cta">Inquire Now ➔</div>
                    </div>
                 </div>
              </div>
           </div>
        </section>

        <!-- Sectioned Gallery -->
        <section id="lookbook" style="padding: 150px 0; background: #ffffff; overflow: hidden; border-bottom: 1px solid rgba(0,0,0,0.03);">
           <div style="padding: 0 10%; margin-bottom: 80px;">
              <div style="color: #c9a53d; font-size: 0.8rem; letter-spacing: 5px; text-transform: uppercase; margin-bottom: 20px; font-weight: 600;">Operational Standards</div>
              <h2 style="font-size: 3.5rem; font-weight: 200; letter-spacing: -1px; margin: 0; line-height: 1.1; color: #0a0a0c;">Precision. <span style="font-style: italic; font-family: 'Playfair Display', serif; color: #c9a53d;">Operational Excellence.</span></h2>
           </div>

           <style>
             @keyframes hintPulse { 0% { opacity: 0.2; transform: translateX(0); } 50% { opacity: 0.8; transform: translateX(5px); } 100% { opacity: 0.2; transform: translateX(0); } }
             .scroll-hint { margin-left: auto; font-size: 0.6rem; color: rgba(0,0,0,0.4); letter-spacing: 2px; text-transform: uppercase; display: flex; align-items: center; gap: 8px; }
             .scroll-hint span { display: inline-block; animation: hintPulse 2s infinite ease-in-out; color: #c9a53d; }

             .gallery-row { margin-bottom: 100px; }
             .gallery-row:last-child { margin-bottom: 0; }
             .gallery-row-title { padding: 0 10%; margin-bottom: 30px; color: rgba(0,0,0,0.3); font-size: 0.75rem; letter-spacing: 4px; text-transform: uppercase; font-weight: 700; display: flex; align-items: center; gap: 20px; }
             .gallery-row-title::before { content: ''; width: 30px; height: 1px; background: rgba(0,0,0,0.05); }
             
             .scroll-container { display: flex; overflow-x: auto; scroll-snap-type: x mandatory; gap: 30px; padding: 0 10% 40px 10%; scrollbar-width: none; -ms-overflow-style: none; -webkit-overflow-scrolling: touch; }
             .scroll-container::-webkit-scrollbar { display: none; }
             
             .gallery-item { flex: 0 0 450px; height: 600px; scroll-snap-align: start; position: relative; border-radius: 4px; overflow: hidden; transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1); cursor: pointer; border: 1px solid rgba(0,0,0,0.05); box-shadow: 0 20px 40px rgba(0,0,0,0.03); }
             .gallery-item:hover { border-color: rgba(201, 165, 61, 0.4); transform: translateY(-10px); box-shadow: 0 40px 80px rgba(0,0,0,0.08); }
             .gallery-item img { width: 100%; height: 100%; object-fit: cover; transition: transform 1.2s cubic-bezier(0.16, 1, 0.3, 1), filter 1.2s ease; filter: contrast(1.1) brightness(1); }
             .gallery-item:hover img { transform: scale(1.05); filter: contrast(1.1) brightness(1.05); }
             
             .item-label { position: absolute; bottom: 0; left: 0; right: 0; padding: 40px; background: linear-gradient(to top, rgba(255,255,255,0.95) 0%, transparent 100%); transform: translateY(20px); opacity: 0; transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1); pointer-events: none; }
             .gallery-item:hover .item-label { transform: translateY(0); opacity: 1; }
             .item-label h4 { color: #c9a53d; font-size: 0.65rem; letter-spacing: 3px; text-transform: uppercase; margin: 0 0 10px 0; font-weight: 800; }
             .item-label p { color: #0a0a0c; font-size: 1.2rem; font-weight: 300; margin: 0; letter-spacing: 1px; }

             @media (max-width: 768px) {
                .gallery-item { flex: 0 0 85vw !important; height: 420px; }
                .scroll-container { gap: 15px; padding: 0 20px 30px 20px; }
                .gallery-row-title { padding: 0 20px; }
                .item-label { opacity: 1; transform: translateY(0); background: linear-gradient(to top, rgba(255,255,255,0.9) 0%, transparent 100%); padding: 30px; }
             }

             .gallery-row-progress { height: 2px; background: rgba(0,0,0,0.05); margin: 0 10% 20px 10%; position: relative; border-radius: 2px; overflow: hidden; }
             .progress-bar { height: 100%; width: 0%; background: #c9a53d; position: absolute; top: 0; left: 0; transition: width 0.1s ease-out; }
             
             #lightbox { position: fixed; inset: 0; background: rgba(255,255,255,0.95); z-index: 3000; display: none; align-items: center; justify-content: center; opacity: 0; transition: opacity 0.4s ease; backdrop-filter: blur(10px); cursor: pointer; }
             #lightbox img { max-width: 90%; max-height: 90vh; object-fit: contain; border-radius: 4px; box-shadow: 0 20px 40px rgba(0,0,0,0.1); transform: scale(0.95); transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1); }
             #lightbox.active img { transform: scale(1); }
              #lightbox-prev:hover, #lightbox-next:hover { opacity: 1 !important; color: #c9a53d; }
              @media (max-width: 768px) {
                 #lightbox-prev, #lightbox-next { display: none; }
              }
           </style>

           <!-- Row 1: Tactical Fleet -->
           <div class="gallery-row">
              <div class="gallery-row-title">
                 <span>Tactical Fleet</span>
                 <div class="scroll-hint">Drag to Explore <span>➔</span></div>
              </div>
              <div class="scroll-container">
                 <div class="gallery-item">
                    <img src="/assets/mcso_patrol_header.jpg" alt="Patrol Header">
                    <div class="item-label">
                       <h4>Deployment</h4>
                       <p>High-Visibility Patrol Units</p>
                    </div>
                 </div>
                 <div class="gallery-item">
                    <img src="/assets/fleet/fleet_5.jpg" alt="Fleet Unit">
                    <div class="item-label">
                       <h4>Patrol Unit</h4>
                       <p>Community Security</p>
                    </div>
                 </div>
                 <div class="gallery-item">
                    <img src="/assets/fleet/fleet_3.jpg" alt="Detail">
                    <div class="item-label">
                       <h4>Command Response</h4>
                       <p>Dedicated Vehicles</p>
                    </div>
                 </div>
                 <div class="gallery-item">
                    <img src="/assets/fleet/fleet_4.jpg" alt="Night Ops">
                    <div class="item-label">
                       <h4>Night Operations</h4>
                       <p>24/7 Vigilance</p>
                    </div>
                 </div>
                 <div class="gallery-item">
                    <img src="/assets/fleet/fleet_1.jpg" alt="Mobile Unit">
                    <div class="item-label">
                       <h4>Mobile Units</h4>
                       <p>Versatile Deployment</p>
                    </div>
                 </div>
                 <div class="gallery-item">
                    <img src="/assets/fleet/fleet_2.jpg" alt="Patrol Ready">
                    <div class="item-label">
                       <h4>Transport</h4>
                       <p>Secure Escorts</p>
                    </div>
                 </div>
              </div>
              <div class="gallery-row-progress"><div class="progress-bar"></div></div>
           </div>
           
           <!-- Row 4: Team in the Field -->
           <div class="gallery-row">
              <div class="gallery-row-title">
                 <span>Team in the Field</span>
                 <div class="scroll-hint">Drag to Explore <span>➔</span></div>
              </div>
              <div class="scroll-container">
                 <div class="gallery-item">
                    <img src="/assets/field/222.jpg" alt="Field Team Member">
                    <div class="item-label">
                       <h4>Field Ops</h4>
                       <p>On-Site Security</p>
                    </div>
                 </div>
                 <div class="gallery-item">
                    <img src="/assets/field/444.jpg" alt="Field Supervisor">
                    <div class="item-label">
                       <h4>Protection</h4>
                       <p>Active Vigilance</p>
                    </div>
                 </div>
                 <div class="gallery-item">
                    <img src="/assets/field/555.jpg" alt="Team Patrol">
                    <div class="item-label">
                       <h4>Patrol</h4>
                       <p>Mobile Units</p>
                    </div>
                 </div>
                 <div class="gallery-item">
                    <img src="/assets/field/7777.jpg" alt="Security Briefing">
                    <div class="item-label">
                       <h4>Operations</h4>
                       <p>Field Commands</p>
                    </div>
                 </div>
                 <div class="gallery-item">
                    <img src="/assets/field/56.jpg" alt="Command Unit">
                    <div class="item-label">
                       <h4>Supervision</h4>
                       <p>Event Security</p>
                    </div>
                 </div>
              </div>
              <div class="gallery-row-progress"><div class="progress-bar"></div></div>
           </div>
           
           <!-- Row 5: Executive Protection -->
           <div class="gallery-row">
              <div class="gallery-row-title">
                 <span>Executive Protection</span>
                 <div class="scroll-hint">Drag to Explore <span>➔</span></div>
              </div>
              <div class="scroll-container">
                 <div class="gallery-item">
                    <img src="/assets/executive/exec_1.jpg" alt="Executive Protection Detail">
                    <div class="item-label">
                       <h4>Close Protection</h4>
                       <p>High-Profile Security</p>
                    </div>
                 </div>
                 <div class="gallery-item">
                    <img src="/assets/executive/exec_2.jpg" alt="VIP Escort">
                    <div class="item-label">
                       <h4>VIP Escort</h4>
                       <p>Discreet Vigilance</p>
                    </div>
                 </div>
                 <div class="gallery-item">
                    <img src="/assets/executive/exec_3.jpg" alt="Personal Security">
                    <div class="item-label">
                       <h4>Personal Security</h4>
                       <p>Threat Mitigation</p>
                    </div>
                 </div>
              </div>
              <div class="gallery-row-progress"><div class="progress-bar"></div></div>
           </div>
           <!-- Lightbox -->
           <div id="lightbox">
              <div id="lightbox-close" style="position: absolute; top: 30px; right: 40px; color: #0a0a0c; font-size: 2rem; font-weight: 300; letter-spacing: 2px; z-index: 3001; cursor: pointer;">✕</div>
              <div id="lightbox-prev" style="position: absolute; left: 40px; color: #0a0a0c; font-size: 3rem; font-weight: 100; z-index: 3001; cursor: pointer; opacity: 0.5; transition: opacity 0.3s;">‹</div>
              <div id="lightbox-next" style="position: absolute; right: 40px; color: #0a0a0c; font-size: 3rem; font-weight: 100; z-index: 3001; cursor: pointer; opacity: 0.5; transition: opacity 0.3s;">›</div>
              <img src="" alt="Expanded View">
           </div>
        </section>

        <!-- Consultation Section -->
        <section id="contact" style="padding: 150px 10%; background: #ffffff; position: relative;">
           <div class="consultation-grid" style="max-width: 1100px; margin: 0 auto; background: #fcfcfc; border: 1px solid rgba(0,0,0,0.05); border-radius: 4px; padding: 80px; display: grid; grid-template-columns: 1fr 1fr; gap: 80px; box-shadow: 0 40px 100px rgba(0,0,0,0.03);">
              <div>
                 <div style="color: #c9a53d; font-size: 0.8rem; letter-spacing: 5px; text-transform: uppercase; margin-bottom: 20px; font-weight: 600;">Consultation</div>
                 <h2 style="font-size: 3.5rem; font-weight: 200; line-height: 1.1; margin-bottom: 30px; letter-spacing: -2px; color: #0a0a0c;">Start Your <span style="font-style: italic; font-family: 'Playfair Display', serif; color: #c9a53d;">Assessment.</span></h2>
                 <p style="font-size: 1.05rem; color: #666; line-height: 1.8; margin-bottom: 50px; font-weight: 300;">
                    Contact us today for a professional review of your security needs and a personalized protection plan.
                 </p>
                 <div style="display: flex; flex-direction: column; gap: 15px;">
                    <div style="font-size: 2rem; font-weight: 300; color: #0a0a0c; letter-spacing: 1px;">561-722-2209</div>
                    <div style="font-size: 0.9rem; color: #999; letter-spacing: 3px; text-transform: uppercase;">Boynton Beach, FL</div>
                 </div>
              </div>
              
              <div style="display: flex; flex-direction: column; justify-content: center;">
                 <style>
                    .consult-input { width: 100%; background: transparent; border: none; border-bottom: 1px solid rgba(0,0,0,0.1); color: #0a0a0c; padding: 15px 0; font-size: 0.95rem; margin-bottom: 30px; outline: none; transition: border-color 0.3s; font-family: 'Inter', sans-serif; }
                    .consult-input:focus { border-bottom-color: #c9a53d; }
                    .consult-input::placeholder { color: #999; }
                    .consult-btn { width: 100%; background: transparent; color: #c9a53d; border: 1px solid #c9a53d; padding: 20px; font-size: 0.85rem; font-weight: 800; letter-spacing: 4px; text-transform: uppercase; cursor: pointer; transition: all 0.3s; }
                    .consult-btn:hover { background: #c9a53d; color: #ffffff; }
                 </style>
                 <input type="text" placeholder="Full Name" class="consult-input">
                 <input type="email" placeholder="Email Address" class="consult-input">
                 <input type="tel" placeholder="Phone Number" class="consult-input">
                 <textarea placeholder="How can we help?" class="consult-input" style="height: 60px; resize: none;"></textarea>
                 <button class="consult-btn">Submit Message</button>
              </div>
           </div>
        </section>
      </main>



      <footer style="padding: 100px 10% 60px 10%; border-top: 1px solid rgba(0,0,0,0.03); background: #ffffff; text-align: center;">
         <div style="margin-bottom: 30px; display: flex; justify-content: center;">
            <img src="/assets/mcso_star_badge.png" alt="MCSO Logo" style="width: 240px; height: 240px; object-fit: contain; opacity: 0.8; filter: invert(0);">
         </div>
         <p style="color: #999; font-size: 0.75rem; letter-spacing: 2px; text-transform: uppercase;">RESPOND // RESPECT // RESOLVE</p>
         <p style="color: #bbb; font-size: 0.7rem; letter-spacing: 1px; margin-top: 40px;">&copy; 2026 MICHAEL COLON SECURITY ORGANIZATION LLC // US MILITARY VETERAN OWNED.</p>
      </footer>

      <!-- Global Behavior & Interactions Handled by Theme Logic -->
    </div>
  `,setTimeout(()=>{const z=i.querySelectorAll("section"),k=i.querySelectorAll(".nav-link"),o=i.querySelector("#scroll-progress"),l=i.querySelector("#mobile-menu-toggle"),d=i.querySelector("#mobile-nav-screen"),x=i.querySelectorAll(".mobile-nav-link"),p=[i.querySelector(".bar1"),i.querySelector(".bar2"),i.querySelector(".bar3")];let y=!1;const E=()=>{y=!y,y?(d.style.transform="translateY(0)",d.style.opacity="1",p[0].style.transform="translateY(8px) rotate(45deg)",p[1].style.opacity="0",p[2].style.transform="translateY(-8px) rotate(-45deg)",x.forEach(e=>{e.style.opacity="1",e.style.transform="translateY(0)"})):(d.style.transform="translateY(-100%)",d.style.opacity="0",p[0].style.transform="translateY(0) rotate(0)",p[1].style.opacity="1",p[2].style.transform="translateY(0) rotate(0)",x.forEach(e=>{e.style.opacity="0",e.style.transform="translateY(20px)"}))};l&&(l.addEventListener("click",E),x.forEach(e=>e.addEventListener("click",E))),window.onscroll=()=>{const e=window.pageYOffset,t=document.documentElement.scrollHeight,r=window.innerHeight,s=e/(t-r)*100;o&&(o.style.width=s+"%");let h="";z.forEach(n=>{const v=n.offsetTop;pageYOffset>=v-200&&(h=n.id)}),k.forEach(n=>{n.classList.remove("active"),n.getAttribute("href").substring(1)===h&&n.classList.add("active")})};const m=Array.from(i.querySelectorAll(".gallery-item")),a=i.querySelector("#lightbox"),L=i.querySelector("#lightbox img"),Y=i.querySelector("#lightbox-prev"),M=i.querySelector("#lightbox-next"),A=i.querySelector("#lightbox-close");let g=0;const b=m.map(e=>e.querySelector("img").src),f=e=>{e<0&&(e=b.length-1),e>=b.length&&(e=0),g=e,L.src=b[g]};if(a){A.addEventListener("click",t=>{t.stopPropagation(),e()}),a.addEventListener("click",t=>{(t.target===a||t.target===L)&&e()});const e=()=>{a.style.opacity="0",a.classList.remove("active"),setTimeout(()=>a.style.display="none",400)};Y.addEventListener("click",t=>{t.stopPropagation(),f(g-1)}),M.addEventListener("click",t=>{t.stopPropagation(),f(g+1)}),window.addEventListener("keydown",t=>{a.classList.contains("active")&&(t.key==="ArrowLeft"&&f(g-1),t.key==="ArrowRight"&&f(g+1),t.key==="Escape"&&e())})}if(i.querySelectorAll(".scroll-container").forEach(e=>{var P;const t=(P=e.nextElementSibling)==null?void 0:P.querySelector(".progress-bar"),r=()=>{const c=e.scrollWidth-e.clientWidth,j=c>0?e.scrollLeft/c*100:0;t&&(t.style.width=`${j}%`),e.querySelectorAll(".gallery-item").forEach(I=>{const O=I.querySelector("img");if(!O)return;const T=I.getBoundingClientRect(),u=e.getBoundingClientRect(),D=T.left+T.width/2,q=u.left+u.width/2,N=D-q,_=u.width;let w=N/_;w=Math.max(-1,Math.min(1,w)),O.style.objectPosition=`${50+w*15}% 50%`})};e.addEventListener("scroll",r,{passive:!0}),setTimeout(r,100);let s=!1,h,n;e.addEventListener("mousedown",c=>{s=!0,e.style.cursor="grabbing",e.style.scrollSnapType="none",h=c.pageX-e.offsetLeft,n=e.scrollLeft});const v=()=>{s=!1,e.style.cursor="grab",e.style.scrollSnapType="x mandatory"};e.addEventListener("mouseleave",v),e.addEventListener("mouseup",v),e.addEventListener("mousemove",c=>{if(!s)return;c.preventDefault();const C=(c.pageX-e.offsetLeft-h)*2;e.scrollLeft=n-C})}),m.length>0&&(m.forEach((e,t)=>{const r=e.querySelector("img");r&&r.addEventListener("dragstart",s=>s.preventDefault()),window.innerWidth>768&&(e.style.cursor="grab"),e.addEventListener("click",()=>{window.innerWidth>768&&a?(f(t),a.style.display="flex",a.offsetWidth,a.style.opacity="1",a.classList.add("active")):(m.forEach(s=>s.style.borderColor="rgba(201, 165, 61, 0.05)"),e.style.borderColor="rgba(201, 165, 61, 0.8)")})}),window.innerWidth<=768)){const e=new IntersectionObserver(t=>{t.forEach(r=>{r.isIntersecting?r.target.style.borderColor="rgba(201, 165, 61, 0.8)":r.target.style.borderColor="rgba(201, 165, 61, 0.05)"})},{rootMargin:"0px -20% 0px -20%",threshold:.5});m.forEach(t=>e.observe(t))}},100)}const F=document.querySelector("#app");F.innerHTML='<div id="theme-root"></div>';const R=document.getElementById("theme-root");window.location.pathname==="/light"||window.location.pathname==="/light/"?U(R):B(R);
