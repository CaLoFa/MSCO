export function renderLight(root) {
   root.innerHTML = `
    <div id="msco-aura" style="background: #ffffff; color: #0a0a0c; min-height: 100vh; font-family: 'Inter', 'Helvetica Neue', Arial, sans-serif; display: flex; flex-direction: column; overflow-x: hidden;">
      
      <!-- Progress Bar -->
      <div id="scroll-progress" style="position: fixed; top: 0; left: 0; height: 3px; background: #e5c158; width: 0%; z-index: 1001; transition: width 0.1s;"></div>

      <!-- Minimal Sticky Header -->
      <header id="main-header" style="padding: 20px 60px; display: flex; justify-content: space-between; align-items: center; position: fixed; width: 100%; box-sizing: border-box; z-index: 2000; background: rgba(255, 255, 255, 0.85); backdrop-filter: blur(20px); border-bottom: 1px solid rgba(0, 0, 0, 0.05); transition: all 0.3s ease;">
        <div style="cursor: pointer; width: 130px; height: 130px; display: flex; align-items: center;" onclick="window.scrollTo({top: 0, behavior: 'smooth'})">
          <img src="/assets/mcso_logo_lion.png" alt="MCSO Logo" style="width: 100%; height: 100%; object-fit: contain; filter: invert(0);">
        </div>
        
        <nav id="main-nav" class="desktop-nav" style="display: flex; gap: 40px; font-size: 0.75rem; letter-spacing: 2px; text-transform: uppercase; font-weight: 500; align-items: center;">
          <a href="#about" class="nav-link" style="color: #0a0a0c; text-decoration: none; opacity: 0.6; transition: all 0.3s; position: relative;">The Owner</a>
          <a href="#pathways" class="nav-link" style="color: #0a0a0c; text-decoration: none; opacity: 0.6; transition: all 0.3s; position: relative;">Services</a>
          <a href="#lookbook" class="nav-link" style="color: #0a0a0c; text-decoration: none; opacity: 0.6; transition: all 0.3s; position: relative;">Gallery</a>
          <a href="#contact" class="nav-link" style="color: #c9a53d; text-decoration: none; border: 1px solid #c9a53d; padding: 12px 30px; border-radius: 2px; transition: all 0.3s;">Consultation</a>
        </nav>

        <div id="mobile-menu-toggle" class="mobile-only" style="cursor: pointer; padding: 10px; z-index: 2001;">
           <div class="bar1" style="width: 28px; height: 2px; background: #c9a53d; margin-bottom: 6px; transition: 0.4s;"></div>
           <div class="bar2" style="width: 28px; height: 2px; background: #c9a53d; margin-bottom: 6px; transition: 0.4s;"></div>
           <div class="bar3" style="width: 28px; height: 2px; background: #c9a53d; transition: 0.4s;"></div>
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
          <div style="position: absolute; inset: 0; background: url('/assets/mcso_patrol_header.jpg') center/cover; opacity: 0.45; filter: contrast(1.1) brightness(1); transition: transform 10s ease-out; transform: scale(1.1); animation: heroZoom 20s infinite alternate;"></div>
          <style>
            @keyframes heroZoom { from { transform: scale(1.1); } to { transform: scale(1.2); } }
            @keyframes fadeInUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
            .nav-link.active { opacity: 1 !important; color: #c9a53d !important; }
            .nav-link.active::after { content: ''; position: absolute; bottom: -5px; left: 0; width: 100%; height: 1px; background: #c9a53d; }
            
            .floating-cta { position: fixed; bottom: 40px; right: 40px; z-index: 999; width: 60px; height: 60px; background: #c9a53d; border-radius: 50%; display: flex; align-items: center; justify-content: center; cursor: pointer; box-shadow: 0 10px 30px rgba(0,0,0,0.1); transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275); overflow: hidden; }
            .floating-cta:hover { width: 220px; border-radius: 30px; }
            .cta-text { white-space: nowrap; opacity: 0; margin-left: 10px; font-weight: 800; font-size: 0.75rem; letter-spacing: 2px; text-transform: uppercase; color: #ffffff; transition: opacity 0.2s; pointer-events: none; }
            .floating-cta:hover .cta-text { opacity: 1; }

            .mobile-only { display: none; }
            
            @media (max-width: 1024px) {
               .desktop-nav { display: none !important; }
               .mobile-only { display: block; }
               #main-header { padding: 15px 30px !important; }
               h1 { font-size: 3.5rem !important; }
            }
            @media (max-width: 768px) {
               h1 { font-size: 2.8rem !important; }
               .hero-section-padding { padding: 0 20px !important; }
               .consultation-grid { grid-template-columns: 1fr !important; gap: 40px !important; padding: 40px !important; }
            }
          </style>
          
          <div style="position: absolute; inset: 0; background: radial-gradient(circle at center, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 1) 100%);"></div>
          
          <div style="position: relative; z-index: 2; text-align: center; padding: 0 40px; max-width: 1000px;">
            <div style="color: #c9a53d; font-size: 0.8rem; letter-spacing: 6px; text-transform: uppercase; margin-bottom: 40px; font-weight: 600; opacity: 0; animation: fadeInUp 1s forwards 0.5s;">
               Professional Security Services
            </div>
            <h1 style="font-size: 5.5rem; font-weight: 200; line-height: 1; margin-bottom: 40px; letter-spacing: -3px; opacity: 0; animation: fadeInUp 1s forwards 0.8s; color: #0a0a0c;">
              The Standard of <br>
              <span style="font-style: italic; font-family: 'Playfair Display', serif; color: #c9a53d; font-weight: 400;">Professional Protection.</span>
            </h1>
            <p style="font-size: 1.25rem; color: #555; line-height: 2; margin-bottom: 60px; font-weight: 300; max-width: 750px; margin-left: auto; margin-right: auto; opacity: 0; animation: fadeInUp 1s forwards 1.1s;">
              Veteran-owned and operated. We provide comprehensive private security solutions built on reliability, detailed planning, and steadfast commitment to our clients.
            </p>
            <div style="opacity: 0; animation: fadeInUp 1s forwards 1.4s; display: flex; gap: 20px; justify-content: center;">
              <a href="#pathways" style="background: #c9a53d; color: #ffffff; border: 1px solid #c9a53d; padding: 22px 50px; font-size: 0.9rem; letter-spacing: 3px; text-transform: uppercase; font-weight: 800; cursor: pointer; text-decoration: none; transition: all 0.4s ease; display: inline-block;">
                View Services
              </a>
              <a href="#about" style="background: transparent; color: #0a0a0c; border: 1px solid rgba(0,0,0,0.1); padding: 22px 50px; font-size: 0.9rem; letter-spacing: 3px; text-transform: uppercase; cursor: pointer; text-decoration: none; transition: all 0.4s ease; display: inline-block;">
                About Us
              </a>
            </div>
          </div>
        </section>

        <!-- Scannable Legacy Section (Redesigned) -->
        <section id="about" style="padding: 150px 10%; background: #ffffff; position: relative; overflow: hidden;">
          <!-- decorative blur element -->
          <div style="position: absolute; top: -10%; left: -5%; width: 500px; height: 500px; background: radial-gradient(circle, rgba(201,165,61,0.05) 0%, transparent 60%); filter: blur(60px); pointer-events: none;"></div>
          
          <div style="max-width: 1200px; margin: 0 auto; position: relative; z-index: 2;">
             <div style="display: flex; align-items: center; gap: 20px; margin-bottom: 70px;">
                <div style="height: 1px; width: 60px; background: rgba(201,165,61,0.5);"></div>
                <div style="color: #c9a53d; font-size: 0.75rem; letter-spacing: 5px; text-transform: uppercase; font-weight: 700;">The Legacy</div>
             </div>
             
             <style>
                .about-grid-res { display: grid; grid-template-columns: 1fr 1.3fr; gap: 100px; align-items: center; }
                .legacy-card { background: rgba(0,0,0,0.01); border: 1px solid rgba(0,0,0,0.03); border-radius: 8px; padding: 35px; transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1); cursor: pointer; position: relative; overflow: hidden; }
                .legacy-card:hover { transform: translateX(10px); border-color: rgba(201,165,61,0.3); background: rgba(0,0,0,0.03); }
                .legacy-card-number { font-family: 'Playfair Display', serif; font-size: 2.5rem; color: rgba(201,165,61,0.1); position: absolute; top: 20px; right: 25px; transition: all 0.5s ease; }
                .legacy-card:hover .legacy-card-number { color: rgba(201,165,61,0.6); transform: scale(1.1); }
                .legacy-img-wrapper { position: relative; overflow: hidden; border-radius: 8px; border: 1px solid rgba(0,0,0,0.05); box-shadow: 0 20px 40px rgba(0,0,0,0.05); }
                .legacy-img-wrapper img { width: 100%; height: auto; display: block; filter: grayscale(100%) brightness(1.1); transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1); }
                .legacy-img-wrapper:hover img { filter: grayscale(0%) brightness(1); transform: scale(1.05); }
                .img-overlay-box { position: absolute; bottom: -20px; right: -20px; background: #ffffff; padding: 25px 35px; border-top-left-radius: 8px; border-top: 1px solid rgba(201,165,61,0.2); border-left: 1px solid rgba(201,165,61,0.2); box-shadow: -10px -10px 30px rgba(0,0,0,0.05); backdrop-filter: blur(10px); transition: transform 0.5s ease; }
                .legacy-img-wrapper:hover .img-overlay-box { transform: translate(-10px, -10px); }
                
                @media (max-width: 1024px) {
                   .about-grid-res { grid-template-columns: 1fr; gap: 60px; }
                   .img-overlay-box { bottom: 0; right: 0; }
                }
             </style>

             <div class="about-grid-res">
                
                <div class="legacy-img-wrapper">
                   <img src="/assets/about_nypd_1769556377163.png" alt="NYPD Experience" style="min-height: 500px; object-fit: cover; filter: contrast(1.05) brightness(1);">
                   <div class="img-overlay-box">
                      <div style="font-size: 1.1rem; font-weight: 300; font-style: italic; color: #0a0a0c; margin-bottom: 5px;">"Experience drives</div>
                      <div style="font-size: 1.1rem; font-weight: 300; font-style: italic; color: #c9a53d;">measurable results."</div>
                   </div>
                </div>
                
               <div>
                   <h2 style="font-size: 3.5rem; font-weight: 200; line-height: 1.1; margin-bottom: 35px; letter-spacing: -1.5px; color: #0a0a0c;">Meet The Owner, <br /><span style="font-style: italic; font-family: 'Playfair Display', serif; color: #c9a53d; font-weight: 400;">Michael Colon.</span></h2>
                   <div style="font-size: 1.05rem; color: #444; line-height: 1.8; margin-bottom: 30px; font-weight: 300; display: flex; flex-direction: column; gap: 35px;">
                      <div>
                         <div style="color: #c9a53d; font-size: 0.7rem; letter-spacing: 3px; text-transform: uppercase; font-weight: 700; margin-bottom: 15px; opacity: 0.8;">Early Foundations & Service</div>
                         <p style="margin: 0;">Michael Colon was born in Brooklyn, NY and came from humble beginnings. After enlisting at 19 years old and honorably serving our country in United States Navy, Michael had his professional trajectory in focus starting his career in high profile Executive Protection. However, Michael did not stop there as he had always had a calling for service.</p>
                      </div>
                      
                      <div>
                         <div style="color: #c9a53d; font-size: 0.7rem; letter-spacing: 3px; text-transform: uppercase; font-weight: 700; margin-bottom: 15px; opacity: 0.8;">Law Enforcement Leadership</div>
                         <p style="margin: 0;">At 36 years old, Michael Joined the New York City Police Department's Aux Division. Michael seen by his superiors as a natural born leader, was shortly there after promoted him to the rank of sergeant then lieutenant. As the Executive officer in charge, Michael was assigned to oversee the all-aux patrol officers of Manhattan North’s 23rd Precinct. After working for several years in law enforcement and the high-end luxury goods private security industries, Michael moved to South Florida where he accepted a position as a security manager at a major retailer corporate campus.</p>
                      </div>
                      
                      <div>
                         <div style="color: #c9a53d; font-size: 0.7rem; letter-spacing: 3px; text-transform: uppercase; font-weight: 700; margin-bottom: 15px; opacity: 0.8;">Strategic Management</div>
                         <p style="margin: 0;">Michael, after his ten-year, accepted a position as an executive security manager at a high-end residential community. As Michael was in charge of 33-armed security officers as well as onsite medical personnel, It was here where he really dug deep, researched and analyzed what was missing, overlooked and truly needed in today’s private security market.</p>
                      </div>
                      
                      <div>
                         <div style="color: #c9a53d; font-size: 0.7rem; letter-spacing: 3px; text-transform: uppercase; font-weight: 700; margin-bottom: 15px; opacity: 0.8;">A Vision for Excellence</div>
                         <p style="margin: 0;">In 2022, Michael decided to go on his own and open his own private security company. Michael did so only after seeing what are critical several missing elements in today's private security industry which include attention to detail as well as giving great client service. Michael Colon has set the standard exceeding any and all client expectations in both the residential and commercial environments.</p>
                      </div>
                   </div>

                   <div style="margin-top: 50px; padding: 40px; border-left: 2px solid #c9a53d; background: rgba(201,165,61,0.03);">
                      <p style="font-size: 1.4rem; color: #0a0a0c; font-style: italic; font-family: 'Playfair Display', serif; line-height: 1.6; margin: 0;">
                         “Be the example, stand by your word and keep your promises to your employees, partners and clients.”
                      </p>
                   </div>
                </div>
             </div>
          </div>
        </section>

        <!-- Services Section -->
        <section id="pathways" style="padding: 150px 10%; background: #f9f9f9; border-top: 1px solid rgba(0,0,0,0.03);">
           <div style="max-width: 1400px; margin: 0 auto;">
              <div style="text-align: center; margin-bottom: 80px;">
                 <div style="color: #c9a53d; font-size: 0.8rem; letter-spacing: 5px; text-transform: uppercase; margin-bottom: 20px; font-weight: 600;">Security Solutions</div>
                 <h2 style="font-size: 3.5rem; font-weight: 200; line-height: 1.1; margin-bottom: 30px; letter-spacing: -1px; color: #0a0a0c;">Our Security <span style="font-style: italic; font-family: 'Playfair Display', serif; color: #c9a53d;">Services.</span></h2>
                 <p style="font-size: 1.1rem; color: #666; max-width: 700px; margin: 0 auto; font-weight: 300; line-height: 1.8;">
                    At MCSO, we offer a wide variety of security service, custom tailored to fit your specific needs.
                 </p>
              </div>

              <style>
                 .capabilities-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 30px; }
                 @media (max-width: 1024px) {
                    .capabilities-grid { grid-template-columns: repeat(2, 1fr); gap: 20px; }
                 }
                 @media (max-width: 768px) {
                    .capabilities-grid { grid-template-columns: 1fr; gap: 20px; }
                 }
              </style>
              <div class="capabilities-grid">
                 <!-- Service: Personal Detal -->
                 <div style="position: relative; border: 1px solid rgba(0,0,0,0.05); border-radius: 4px; overflow: hidden; cursor: pointer; transition: all 0.4s ease; background: #fff; height: 500px;" class="capability-card">
                    <div style="position: absolute; inset: 0; background: url('/assets/fleet_sedan_side_1769556143358.png') center/cover; filter: contrast(1.1) brightness(0.95); opacity: 0.6; transition: all 0.5s ease;" class="card-bg"></div>
                    <div style="position: absolute; inset: 0; background: linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 85%); padding: 40px; display: flex; flex-direction: column; justify-content: flex-end; z-index: 2;">
                       <h3 style="font-size: 1.8rem; font-weight: 300; margin: 0 0 15px 0; color: #0a0a0c; line-height: 1.2;">Security Escorts /<br/>Bodyguard services</h3>
                       <p style="color: #666; font-size: 0.95rem; line-height: 1.6; margin: 0;">At MCSO We offer close quarter one on one executive protection, Body guarding services. Our clients range from executive professionals, to celebrities' to folks who might be receiving workplace or personal threats.</p>
                    </div>
                 </div>

                 <!-- Service: Residential -->
                 <div style="position: relative; border: 1px solid rgba(0,0,0,0.05); border-radius: 4px; overflow: hidden; cursor: pointer; transition: all 0.4s ease; background: #fff; height: 500px;" class="capability-card">
                    <div style="position: absolute; inset: 0; background: url('/assets/fleet_suv_front_1769556132620.png') center/cover; filter: contrast(1.1) brightness(0.95); opacity: 0.6; transition: all 0.5s ease;" class="card-bg"></div>
                    <div style="position: absolute; inset: 0; background: linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 85%); padding: 40px; display: flex; flex-direction: column; justify-content: flex-end; z-index: 2;">
                       <h3 style="font-size: 1.8rem; font-weight: 300; margin: 0 0 15px 0; color: #0a0a0c;">Residential property protection</h3>
                       <p style="color: #666; font-size: 0.95rem; line-height: 1.6; margin: 0;">Our highly trained and residential security experienced officers will promote the attention to detail and exceptional drive to ensure your residents peace of mind while on their property and in their homes.</p>
                    </div>
                 </div>

                 <!-- Service: Commercial -->
                 <div style="position: relative; border: 1px solid rgba(0,0,0,0.05); border-radius: 4px; overflow: hidden; cursor: pointer; transition: all 0.4s ease; background: #fff; height: 500px;" class="capability-card">
                    <div style="position: absolute; inset: 0; background: url('/assets/fleet_convoy_1769556157064.png') center/cover; filter: contrast(1.1) brightness(0.95); opacity: 0.6; transition: all 0.5s ease;" class="card-bg"></div>
                    <div style="position: absolute; inset: 0; background: linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 85%); padding: 40px; display: flex; flex-direction: column; justify-content: flex-end; z-index: 2;">
                       <h3 style="font-size: 1.8rem; font-weight: 300; margin: 0 0 15px 0; color: #0a0a0c;">Commercial property protection</h3>
                       <p style="color: #666; font-size: 0.85rem; line-height: 1.5; margin: 0;">
                          At the Michael Colon Security Organization, we understand the challenges and have the staff in place to address your company's concerns with respect to personnel safety as well as their overall safety in the work place. Having a physical security presence at your place of business and the ability to escort staff to their vehicles creates a sense of safety amongst your companies workforce as well as driving a overall positive perception. 
                       </p>
                       <div class="card-reveal" style="max-height: 0; overflow: hidden; transition: max-height 0.4s ease; margin-top: 0;">
                          <ul style="list-style: none; padding: 15px 0 0 0; margin: 0; color: #c9a53d; font-size: 0.75rem; display: grid; grid-template-columns: 1fr 1fr; gap: 5px; text-transform: uppercase; letter-spacing: 1px;">
                             <li>Hospitals</li>
                             <li>Schools</li>
                             <li>College campuses</li>
                             <li>Shopping Centers</li>
                             <li>Corporate centers and offices</li>
                             <li>Financial institutions</li>
                             <li>High end luxury good establishments</li>
                             <li>Currency-Bank drops/deposits</li>
                          </ul>
                       </div>
                    </div>
                 </div>
              </div>

              <style>
                 .capability-card:hover { border-color: rgba(201,165,61,0.5) !important; transform: translateY(-5px); box-shadow: 0 20px 40px rgba(0,0,0,0.05); }
                 .capability-card:hover .card-bg { filter: grayscale(0%) opacity(0.6) !important; transform: scale(1.05); }
                 .capability-card:hover .card-reveal { max-height: 150px !important; }
              </style>
           </div>
        </section>

        <!-- Gallery Section -->
        <section id="lookbook" style="padding: 120px 0; background: #ffffff; border-bottom: 1px solid rgba(0,0,0,0.03);">
           <div style="padding: 0 10%; margin-bottom: 60px;">
              <div style="color: #c9a53d; font-size: 0.75rem; letter-spacing: 4px; text-transform: uppercase; margin-bottom: 20px; font-weight: 600;">Operational Standards</div>
              <h2 style="font-size: 3.5rem; font-weight: 200; letter-spacing: -1px; margin: 0; color: #0a0a0c;">Precision. <span style="font-style: italic; font-family: 'Playfair Display', serif; color: #c9a53d;">Protection. Performance.</span></h2>
           </div>
           
           <style>
             .bento-gallery { display: grid; grid-template-columns: repeat(4, 1fr); grid-auto-rows: 250px; gap: 20px; padding: 0 10%; }
             .bento-item { position: relative; border-radius: 8px; overflow: hidden; border: 1px solid rgba(0,0,0,0.05); cursor: pointer; transition: transform 0.4s cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 0.4s ease, border-color 0.4s ease; background: #f0f0f0; }
             .bento-item:hover { transform: translateY(-5px) scale(1.02); box-shadow: 0 20px 40px rgba(0,0,0,0.1); z-index: 10; border-color: rgba(201, 165, 61, 0.4); }
             .bento-item img { width: 100%; height: 100%; object-fit: cover; filter: contrast(1.1) brightness(1); transition: transform 0.8s ease, filter 0.8s ease; }
             .bento-item:hover img { transform: scale(1.08); filter: grayscale(0%) brightness(1); }
             
             .bento-overlay { position: absolute; inset: 0; background: linear-gradient(to top, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.1) 60%, transparent 100%); display: flex; flex-direction: column; justify-content: flex-end; padding: 30px; opacity: 0; transition: opacity 0.4s ease; pointer-events: none; }
             .bento-item:hover .bento-overlay { opacity: 1; }
             
             .bento-cat { color: #c9a53d; font-size: 0.65rem; letter-spacing: 3px; text-transform: uppercase; font-weight: 800; margin-bottom: 8px; transform: translateY(15px); opacity: 0; transition: all 0.4s ease 0.1s; }
             .bento-title { color: #0a0a0c; font-size: 1.5rem; font-weight: 300; line-height: 1.2; transform: translateY(15px); opacity: 0; transition: all 0.4s ease 0.2s; margin: 0; }
             .bento-item:hover .bento-cat, .bento-item:hover .bento-title { transform: translateY(0); opacity: 1; }

             /* Desktop Layout Placements */
             .item-1 { grid-column: span 2; grid-row: span 2; } /* Large feature */
             .item-2 { grid-column: span 2; grid-row: span 1; } /* Wide top right */
             .item-3 { grid-column: span 1; grid-row: span 1; } /* Normal right */
             .item-4 { grid-column: span 1; grid-row: span 1; } /* Normal far right */
             .item-5 { grid-column: span 2; grid-row: span 1; } /* Wide bottom left */
             .item-6 { grid-column: span 2; grid-row: span 1; } /* Wide bottom right */
             
             /* Responsive Mobile Layout */
             @media (max-width: 1024px) {
                .bento-gallery { grid-template-columns: repeat(2, 1fr); gap: 15px; grid-auto-rows: 240px; padding: 0 5%; }
                .item-1 { grid-column: span 2; grid-row: span 2; }
                .item-2 { grid-column: span 2; grid-row: span 1; }
                .item-3 { grid-column: span 1; grid-row: span 1; }
                .item-4 { grid-column: span 1; grid-row: span 1; }
                .item-5 { grid-column: span 2; grid-row: span 1; }
                .item-6 { grid-column: span 2; grid-row: span 1; }
             }
             @media (max-width: 768px) {
                .bento-gallery { display: flex; flex-direction: column; gap: 20px; padding: 0 5%; }
                .bento-item { height: 350px; border-radius: 12px; }
                .bento-overlay { opacity: 1; background: linear-gradient(to top, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.3) 100%); }
                .bento-cat, .bento-title { transform: translateY(0); opacity: 1; }
                .bento-item img { filter: grayscale(50%) brightness(1); }
                .bento-item.mobile-active { border-color: rgba(201, 165, 61, 0.8); transform: scale(1.02); }
                .bento-item.mobile-active img { filter: grayscale(0%) brightness(1); }
             }
           </style>

           <div class="bento-gallery" id="interactive-bento">
              <div class="bento-item item-1">
                 <img src="/assets/mcso_patrol_header.jpg" alt="Patrol Vehicle">
                 <div class="bento-overlay">
                    <div class="bento-cat">Strategic Mobility</div>
                    <h3 class="bento-title">Advanced Deployment Units</h3>
                 </div>
              </div>
              <div class="bento-item item-2">
                 <img src="/assets/fleet_convoy_1769556157064.png" alt="Fleet Convoy">
                 <div class="bento-overlay">
                    <div class="bento-cat">Asset Readiness</div>
                    <h3 class="bento-title">Integrated Fleet Solutions</h3>
                 </div>
              </div>
              <div class="bento-item item-3">
                 <img src="/assets/about_navy_1769556364610.png" alt="Navy Veteran">
                 <div class="bento-overlay">
                    <div class="bento-cat">Tactical Leadership</div>
                    <h3 class="bento-title">Elite Operational Command</h3>
                 </div>
              </div>
              <div class="bento-item item-4">
                 <img src="/assets/about_nypd_1769556377163.png" alt="NYPD Veteran">
                 <div class="bento-overlay">
                    <div class="bento-cat">Proven Excellence</div>
                    <h3 class="bento-title">Advanced Protection Strategies</h3>
                 </div>
              </div>
              <div class="bento-item item-5">
                 <img src="/assets/fleet_sedan_side_1769556143358.png" alt="Executive Sedan">
                 <div class="bento-overlay">
                    <div class="bento-cat">Secure Logistics</div>
                    <h3 class="bento-title">Premium Client Transitions</h3>
                 </div>
              </div>
              <div class="bento-item item-6">
                 <img src="/assets/fleet_suv_front_1769556132620.png" alt="Command SUV">
                 <div class="bento-overlay">
                    <div class="bento-cat">Rapid Response</div>
                    <h3 class="bento-title">Technical Support Units</h3>
                 </div>
              </div>
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

      <!-- Floating CTA -->
      <div class="floating-cta" onclick="document.getElementById('contact').scrollIntoView({behavior: 'smooth'})">
          <div style="color: #ffffff; display: flex; align-items: center; justify-content: center;">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
          </div>
         <span class="cta-text">Contact Us</span>
      </div>

      <footer style="padding: 100px 10% 60px 10%; border-top: 1px solid rgba(0,0,0,0.03); background: #ffffff; text-align: center;">
         <div style="margin-bottom: 30px; display: flex; justify-content: center;">
            <img src="/assets/mcso_logo_lion.png" alt="MCSO Logo" style="width: 240px; height: 240px; object-fit: contain; opacity: 0.8; filter: invert(0);">
         </div>
         <p style="color: #999; font-size: 0.75rem; letter-spacing: 2px; text-transform: uppercase;">Integrity // Trust // Honor // Respect</p>
         <p style="color: #bbb; font-size: 0.7rem; letter-spacing: 1px; margin-top: 40px;">&copy; 2026 MICHAEL COLON SECURITY ORGANIZATION LLC // US MILITARY VETERAN OWNED.</p>
      </footer>

      <!-- Global Behavior & Interactions Handled by Theme Logic -->
    </div>
  `;

   const initAura = () => {
      const sections = root.querySelectorAll('section');
      const navLinks = root.querySelectorAll('.nav-link');
      const progressBar = root.querySelector('#scroll-progress');
      const menuToggle = root.querySelector('#mobile-menu-toggle');
      const navScreen = root.querySelector('#mobile-nav-screen');
      const mobileLinks = root.querySelectorAll('.mobile-nav-link');
      const bars = [root.querySelector('.bar1'), root.querySelector('.bar2'), root.querySelector('.bar3')];
      
      let menuOpen = false;
      
      const toggleMenu = () => {
         menuOpen = !menuOpen;
         if(menuOpen) {
            navScreen.style.transform = 'translateY(0)';
            navScreen.style.opacity = '1';
            bars[0].style.transform = 'translateY(8px) rotate(45deg)';
            bars[1].style.opacity = '0';
            bars[2].style.transform = 'translateY(-8px) rotate(-45deg)';
            mobileLinks.forEach(link => {
               link.style.opacity = '1';
               link.style.transform = 'translateY(0)';
            });
         } else {
            navScreen.style.transform = 'translateY(-100%)';
            navScreen.style.opacity = '0';
            bars[0].style.transform = 'translateY(0) rotate(0)';
            bars[1].style.opacity = '1';
            bars[2].style.transform = 'translateY(0) rotate(0)';
            mobileLinks.forEach(link => {
               link.style.opacity = '0';
               link.style.transform = 'translateY(20px)';
            });
         }
      };

      if(menuToggle) {
         menuToggle.addEventListener('click', toggleMenu);
         mobileLinks.forEach(link => link.addEventListener('click', toggleMenu));
      }

      window.onscroll = () => {
         const windist = window.pageYOffset;
         const docHeight = document.documentElement.scrollHeight;
         const winHeight = window.innerHeight;
         const scrollPercent = (windist / (docHeight - winHeight)) * 100;
         if (progressBar) progressBar.style.width = scrollPercent + '%';

         let current = '';
         sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= sectionTop - 200) {
               current = section.id;
            }
         });

         navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === current) {
               link.classList.add('active');
            }
         });
      };

      // Gallery Interactivity
      if (window.innerWidth <= 768) {
         const gallery = root.querySelector('#interactive-bento');
         if (gallery) {
            const frames = gallery.querySelectorAll('.bento-item');
            frames.forEach(frame => {
               frame.addEventListener('click', () => {
                  frames.forEach(f => f.classList.remove('mobile-active'));
                  frame.classList.add('mobile-active');
               });
            });

            const bObserver = new IntersectionObserver((entries) => {
               entries.forEach(entry => {
                  if (entry.isIntersecting) {
                     frames.forEach(f => f.classList.remove('mobile-active'));
                     entry.target.classList.add('mobile-active');
                  }
               });
            }, { rootMargin: '-40% 0px -40% 0px', threshold: 0.1 });
            frames.forEach(f => bObserver.observe(f));
         }
      }
   };

   setTimeout(initAura, 100);
}
