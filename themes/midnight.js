export function renderMidnight(root) {
   root.innerHTML = `
    <div id="msco-aura" style="background: #0a0a0c; color: #ffffff; min-height: 100vh; font-family: 'Inter', 'Helvetica Neue', Arial, sans-serif; display: flex; flex-direction: column; overflow-x: hidden;">
      
      <!-- Progress Bar -->
      <div id="scroll-progress" style="position: fixed; top: 0; left: 0; height: 3px; background: #e5c158; width: 0%; z-index: 1001; transition: width 0.1s;"></div>

      <!-- Minimal Sticky Header -->
      <header style="padding: 30px 60px; display: flex; justify-content: space-between; align-items: center; position: fixed; width: 100%; box-sizing: border-box; z-index: 1000; background: rgba(10, 10, 12, 0.8); backdrop-filter: blur(20px); border-bottom: 1px solid rgba(255, 255, 255, 0.05);">
        <div style="font-size: 1.4rem; font-weight: 300; letter-spacing: 5px; text-transform: uppercase; cursor: pointer;" onclick="window.scrollTo({top: 0, behavior: 'smooth'})">
          MCSO
        </div>
        <nav id="main-nav" style="display: flex; gap: 40px; font-size: 0.75rem; letter-spacing: 2px; text-transform: uppercase; font-weight: 500;">
          <a href="#about" class="nav-link" style="color: #fff; text-decoration: none; opacity: 0.6; transition: all 0.3s; position: relative;">The Owner</a>
          <a href="#pathways" class="nav-link" style="color: #fff; text-decoration: none; opacity: 0.6; transition: all 0.3s; position: relative;">Services</a>
          <a href="#lookbook" class="nav-link" style="color: #fff; text-decoration: none; opacity: 0.6; transition: all 0.3s; position: relative;">Gallery</a>
          <a href="#contact" class="nav-link" style="color: #e5c158; text-decoration: none; border: 1px solid #e5c158; padding: 10px 25px; border-radius: 2px; margin-top: -8px; transition: all 0.3s;">Consultation</a>
        </nav>
      </header>

      <main style="flex: 1;">
        <!-- Immersive Hero Section -->
        <section id="hero" style="position: relative; height: 100vh; display: flex; align-items: center; justify-content: center; overflow: hidden;">
          <div style="position: absolute; inset: 0; background: url('/assets/fleet_sedan_side_1769556143358.png') center/cover; opacity: 0.25; filter: grayscale(100%); transition: transform 10s ease-out; transform: scale(1.1); animation: heroZoom 20s infinite alternate;"></div>
          <style>
            @keyframes heroZoom { from { transform: scale(1.1); } to { transform: scale(1.2); } }
            @keyframes fadeInUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
            .nav-link.active { opacity: 1 !important; color: #e5c158 !important; }
            .nav-link.active::after { content: ''; position: absolute; bottom: -5px; left: 0; width: 100%; height: 1px; background: #e5c158; }
            
            .service-card.active .service-drawer { max-height: 1200px; padding-top: 30px; }
            .service-card.active .expand-icon { transform: rotate(45deg); }
            
            .impact-marker:hover { border-color: #e5c158 !important; background: rgba(229, 193, 88, 0.05) !important; }
            
            .pathway-card:hover { background: rgba(255,255,255,0.05) !important; border-color: #e5c158 !important; }
            .pathway-card:hover h3 { color: #e5c158; }

            .floating-cta { position: fixed; bottom: 40px; right: 40px; z-index: 999; width: 60px; height: 60px; background: #e5c158; border-radius: 50%; display: flex; align-items: center; justify-content: center; cursor: pointer; box-shadow: 0 10px 30px rgba(0,0,0,0.5); transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275); overflow: hidden; }
            .floating-cta:hover { width: 220px; border-radius: 30px; }
            .cta-text { white-space: nowrap; opacity: 0; margin-left: 10px; font-weight: 800; font-size: 0.75rem; letter-spacing: 2px; text-transform: uppercase; color: #0a0a0c; transition: opacity 0.2s; pointer-events: none; }
            .floating-cta:hover .cta-text { opacity: 1; }
          </style>
          
          <div style="position: absolute; inset: 0; background: radial-gradient(circle at center, rgba(10, 10, 12, 0.4) 0%, rgba(10, 10, 12, 1) 100%);"></div>
          
          <div style="position: relative; z-index: 2; text-align: center; padding: 0 40px; max-width: 1000px;">
            <div style="color: #e5c158; font-size: 0.8rem; letter-spacing: 6px; text-transform: uppercase; margin-bottom: 40px; font-weight: 600; opacity: 0; animation: fadeInUp 1s forwards 0.5s;">
               Property Protection & Security Services
            </div>
            <h1 style="font-size: 5.5rem; font-weight: 200; line-height: 1; margin-bottom: 40px; letter-spacing: -3px; opacity: 0; animation: fadeInUp 1s forwards 0.8s;">
              The Standard of <br>
              <span style="font-style: italic; font-family: 'Playfair Display', serif; color: #e5c158; font-weight: 400;">Elite Security.</span>
            </h1>
            <p style="font-size: 1.25rem; color: #a0a0a0; line-height: 2; margin-bottom: 60px; font-weight: 300; max-width: 750px; margin-left: auto; margin-right: auto; opacity: 0; animation: fadeInUp 1s forwards 1.1s;">
              Retired NYPD Lieutenant & Navy Veteran Owned. We fix the critical missing elements in private security through absolute attention to detail and unwavering client commitment.
            </p>
            <div style="opacity: 0; animation: fadeInUp 1s forwards 1.4s; display: flex; gap: 20px; justify-content: center;">
              <a href="#pathways" style="background: #e5c158; color: #0a0a0c; border: 1px solid #e5c158; padding: 22px 50px; font-size: 0.9rem; letter-spacing: 3px; text-transform: uppercase; font-weight: 800; cursor: pointer; text-decoration: none; transition: all 0.4s ease; display: inline-block;">
                Explore Sectors
              </a>
              <a href="#about" style="background: transparent; color: #fff; border: 1px solid rgba(255,255,255,0.2); padding: 22px 50px; font-size: 0.9rem; letter-spacing: 3px; text-transform: uppercase; cursor: pointer; text-decoration: none; transition: all 0.4s ease; display: inline-block;">
                Watch The Legacy
              </a>
            </div>
          </div>
        </section>

        <!-- Scannable Legacy Section -->
        <section id="about" style="padding: 180px 10%; background: #0a0a0c; border-bottom: 1px solid rgba(255,255,255,0.03);">
          <div style="max-width: 1200px; margin: 0 auto;">
             <div style="color: #e5c158; font-size: 0.75rem; letter-spacing: 4px; text-transform: uppercase; margin-bottom: 30px; font-weight: 600;">The Foundation</div>
             <h2 style="font-size: 4rem; font-weight: 200; line-height: 1.1; margin-bottom: 80px; letter-spacing: -1px;">Scrutiny by <span style="font-style: italic; font-family: 'Playfair Display', serif; color: #e5c158;">Design.</span></h2>
             
             <!-- Impact Markers (Scannable Cards) -->
             <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 30px; margin-bottom: 100px;">
                <div class="impact-marker" style="padding: 50px; border: 1px solid rgba(255,255,255,0.05); transition: all 0.4s; background: rgba(255,255,255,0.01);">
                   <div style="font-size: 0.75rem; color: #e5c158; letter-spacing: 2px; text-transform: uppercase; margin-bottom: 20px;">01 // US Navy</div>
                   <h3 style="font-size: 1.8rem; font-weight: 300; margin-bottom: 20px;">Veteran Foundation</h3>
                   <p style="color: #666; font-size: 0.95rem; line-height: 1.8;">Established the bedrock of discipline and global logistics at age 19.</p>
                </div>
                <div class="impact-marker" style="padding: 50px; border: 1px solid rgba(255,255,255,0.05); transition: all 0.4s; background: rgba(255,255,255,0.01);">
                   <div style="font-size: 0.75rem; color: #e5c158; letter-spacing: 2px; text-transform: uppercase; margin-bottom: 20px;">02 // NYPD Command</div>
                   <h3 style="font-size: 1.8rem; font-weight: 300; margin-bottom: 20px;">Police Lieutenant</h3>
                   <p style="color: #666; font-size: 0.95rem; line-height: 1.8;">Executive Officer for Aux patrol, Manhattan North's 23rd Precinct.</p>
                </div>
                <div class="impact-marker" style="padding: 50px; border: 1px solid rgba(255,255,255,0.05); transition: all 0.4s; background: rgba(255,255,255,0.01);">
                   <div style="font-size: 0.75rem; color: #e5c158; letter-spacing: 2px; text-transform: uppercase; margin-bottom: 20px;">03 // MCSO Era</div>
                   <h3 style="font-size: 1.8rem; font-weight: 300; margin-bottom: 20px;">Private Principal</h3>
                   <p style="color: #666; font-size: 0.95rem; line-height: 1.8;">Founded in 2022 to fix the service gap in elite private protection.</p>
                </div>
             </div>

             <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 100px; align-items: flex-start;">
                <div style="position: relative;">
                   <div style="background: url('/assets/about_nypd_1769556377163.png') center/cover; height: 600px; filter: grayscale(100%) contrast(1.1); border: 1px solid rgba(255,255,255,0.1);"></div>
                   <div style="position: absolute; bottom: -30px; right: -30px; background: #e5c158; padding: 40px; color: #0a0a0c; max-width: 300px; font-weight: 800; font-size: 0.8rem; letter-spacing: 2px; text-transform: uppercase;">
                      "Be the example, stand by your word and keep your promises."
                   </div>
                </div>
                <div style="padding-top: 40px;">
                   <p style="font-size: 1.2rem; color: #888; line-height: 2; margin-bottom: 40px; font-weight: 300;">
                      Michael Colon's professional trajectory focuses on high-profile Executive Protection. His unique background—spanning the United States Navy and the NYPD's Aux Division—provides a dual-lens of military discipline and strategic law enforcement command.
                   </p>
                   <p style="font-size: 1.2rem; color: #888; line-height: 2; margin-bottom: 40px; font-weight: 300;">
                      After years managing 33-armed security officers for high-end residential communities and retail corporate campuses, Michael recognized the critical missing elements in today's private security market: **Attention to detail** and **Elite Client Service**.
                   </p>
                </div>
             </div>
          </div>
        </section>

        <!-- Directional Pathways Entry -->
        <section id="pathways" style="padding: 180px 10%; background: #0d0d0f; text-align: center; border-bottom: 1px solid rgba(255,255,255,0.03);">
           <div style="max-width: 800px; margin: 0 auto 100px auto;">
              <div style="color: #e5c158; font-size: 0.75rem; letter-spacing: 4px; text-transform: uppercase; margin-bottom: 30px; font-weight: 600;">Service Selector</div>
              <h2 style="font-size: 4rem; font-weight: 200; line-height: 1.1; margin-bottom: 40px; letter-spacing: -1px;">Tailored <span style="font-style: italic; font-family: 'Playfair Display', serif; color: #e5c158;">Access.</span></h2>
              <p style="font-size: 1.15rem; color: #666; line-height: 1.8; font-weight: 400;">Select the pathway that aligns with your specific protection requirements.</p>
           </div>
           
           <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 30px; max-width: 1200px; margin: 0 auto;">
              <!-- Pathway: Private -->
              <div class="pathway-card" style="padding: 80px 40px; border: 1px solid rgba(255,255,255,0.05); background: rgba(255,255,255,0.01); transition: all 0.4s; cursor: pointer; text-align: left;" onclick="document.getElementById('residential-anchor').scrollIntoView({behavior: 'smooth'})">
                 <div style="font-size: 0.75rem; color: #e5c158; letter-spacing: 4px; text-transform: uppercase; margin-bottom: 30px; font-weight: 600;">Personal // High-Net-Worth</div>
                 <h3 style="font-size: 2.5rem; font-weight: 300; margin-bottom: 30px; transition: color 0.3s;">Private Principal</h3>
                 <p style="color: #666; line-height: 1.8; margin-bottom: 40px; font-size: 1.1rem;">Bespoke residential protection, close-quarter body guarding, and family sanctuary governance.</p>
                 <div style="font-size: 0.8rem; font-weight: 800; color: #e5c158; letter-spacing: 2px;">SECURE THE PERIMETER &rarr;</div>
              </div>
              <!-- Pathway: Corporate -->
              <div class="pathway-card" style="padding: 80px 40px; border: 1px solid rgba(255,255,255,0.05); background: rgba(255,255,255,0.01); transition: all 0.4s; cursor: pointer; text-align: left;" onclick="document.getElementById('commercial-anchor').scrollIntoView({behavior: 'smooth'})">
                 <div style="font-size: 0.75rem; color: #e5c158; letter-spacing: 4px; text-transform: uppercase; margin-bottom: 30px; font-weight: 600;">Retail // Institutional // Enterprise</div>
                 <h3 style="font-size: 2.5rem; font-weight: 300; margin-bottom: 30px; transition: color 0.3s;">Corporate Asset</h3>
                 <p style="color: #666; line-height: 1.8; margin-bottom: 40px; font-size: 1.1rem;">Securing corporate campuses, high-end retail, financial institutions, and specialized logistics.</p>
                 <div style="font-size: 0.8rem; font-weight: 800; color: #e5c158; letter-spacing: 2px;">ESTABLISH SITE CONTROL &rarr;</div>
              </div>
           </div>
        </section>

        <!-- Services with Detail Drawers -->
        <section id="services" style="padding: 180px 10%; background: #0a0a0c;">
           <div id="residential-anchor" style="margin-bottom: 20px;"></div>
           <div class="service-card" style="padding: 60px; background: rgba(255,255,255,0.01); border: 1px solid rgba(255,255,255,0.05); cursor: pointer; margin-bottom: 30px; transition: all 0.3s;" onclick="this.classList.toggle('active')">
              <div style="display: flex; justify-content: space-between; align-items: center;">
                 <div style="display: flex; align-items: center; gap: 40px;">
                    <div style="font-size: 2rem; font-weight: 100; color: #e5c158; opacity: 0.5;">RPP</div>
                    <h3 style="font-size: 2.5rem; font-weight: 200;">Residential Protection</h3>
                 </div>
                 <div class="expand-icon" style="font-size: 2.5rem; color: #e5c158; transition: transform 0.4s;">+</div>
              </div>
              <div class="service-drawer" style="max-height: 0; overflow: hidden; transition: max-height 0.6s ease, padding 0.6s ease;">
                 <div style="display: grid; grid-template-columns: 1.5fr 1fr; gap: 80px; padding-top: 40px; border-top: 1px solid rgba(255,255,255,0.05);">
                    <div style="color: #888; line-height: 2; font-size: 1.15rem;">
                       Michael Colon's team specializes in close-quarter, one-on-one executive protection. Our clients range from executive professionals and celebrities to families receiving personal threats.
                       <br><br>
                       Our residential security officers promote absolute attention to detail and exceptional drive to ensure your residence remains a sanctuary of peace while on the property.
                    </div>
                    <div style="background: url('/assets/fleet_suv_front_1769556132620.png') center/cover; height: 350px; filter: grayscale(100%);"></div>
                 </div>
              </div>
           </div>

           <div id="commercial-anchor" style="margin-bottom: 20px;"></div>
           <div class="service-card" style="padding: 60px; background: rgba(255,255,255,0.01); border: 1px solid rgba(255,255,255,0.05); cursor: pointer; transition: all 0.3s;" onclick="this.classList.toggle('active')">
              <div style="display: flex; justify-content: space-between; align-items: center;">
                 <div style="display: flex; align-items: center; gap: 40px;">
                    <div style="font-size: 2rem; font-weight: 100; color: #e5c158; opacity: 0.5;">CPC</div>
                    <h3 style="font-size: 2.5rem; font-weight: 200;">Commercial Risk Control</h3>
                 </div>
                 <div class="expand-icon" style="font-size: 2.5rem; color: #e5c158; transition: transform 0.4s;">+</div>
              </div>
              <div class="service-drawer" style="max-height: 0; overflow: hidden; transition: max-height 0.6s ease, padding 0.6s ease;">
                 <div style="display: grid; grid-template-columns: 1fr 1.5fr; gap: 80px; padding-top: 40px; border-top: 1px solid rgba(255,255,255,0.05);">
                    <div style="background: url('/assets/fleet_convoy_1769556157064.png') center/cover; height: 400px; filter: grayscale(100%);"></div>
                    <div style="color: #888; line-height: 2; font-size: 1.15rem;">
                       Having a physical security presence at your place of business creates a sense of safety and drives a positive overall perception of your company.
                       <br><br>
                       <strong>Operational Domains:</strong>
                       <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-top: 30px; color: #e5c158; font-size: 1rem;">
                          <div>• Hospitals</div>
                          <div>• Corporate Centers</div>
                          <div>• Schools & Campuses</div>
                          <div>• Financial Institutions</div>
                          <div>• Shopping Centers</div>
                          <div>• High-End Luxury Goods</div>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </section>

        <!-- Operation Lookbook Section -->
        <section id="lookbook" style="padding: 100px 0; background: #0a0a0c; border-bottom: 1px solid rgba(255,255,255,0.03);">
           <div style="padding: 0 10%; margin-bottom: 60px;">
              <h2 style="font-size: 3rem; font-weight: 200; letter-spacing: -1px;">Operational <span style="font-style: italic; font-family: 'Playfair Display', serif; color: #e5c158;">Assets.</span></h2>
           </div>
           
           <div style="display: flex; overflow-x: auto; gap: 30px; padding: 0 10% 40px 10%; scrollbar-width: none;">
              <div class="lookbook-item" style="flex: 0 0 600px; height: 400px; overflow: hidden; border: 1px solid rgba(255,255,255,0.05); position: relative;">
                 <img src="/assets/fleet_convoy_1769556157064.png" style="width: 100%; height: 100%; object-fit: cover; transition: transform 0.8s; filter: grayscale(100%);">
              </div>
              <div class="lookbook-item" style="flex: 0 0 400px; height: 400px; overflow: hidden; border: 1px solid rgba(255,255,255,0.05); position: relative;">
                 <img src="/assets/about_navy_1769556364610.png" style="width: 100%; height: 100%; object-fit: cover; transition: transform 0.8s; filter: grayscale(100%);">
              </div>
              <div class="lookbook-item" style="flex: 0 0 600px; height: 400px; overflow: hidden; border: 1px solid rgba(255,255,255,0.05); position: relative;">
                 <img src="/assets/fleet_suv_front_1769556132620.png" style="width: 100%; height: 100%; object-fit: cover; transition: transform 0.8s; filter: grayscale(100%);">
              </div>
           </div>
        </section>

        <!-- Contact Section -->
        <section id="contact" style="padding: 180px 10%; background: #0d0d0f; position: relative; overflow: hidden;">
           <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 120px; position: relative; z-index: 2;">
              <div>
                 <h2 style="font-size: 4.5rem; font-weight: 200; line-height: 1; margin-bottom: 40px; letter-spacing: -2px;">Secure <br><span style="font-style: italic; font-family: 'Playfair Display', serif; color: #e5c158; font-weight: 400;">Dialogue.</span></h2>
                 <p style="font-size: 1.25rem; color: #666; line-height: 1.8; margin-bottom: 60px;">
                    Contact Michael Colon for a free quote and professional security assessment.
                 </p>
                 <div style="font-size: 2.2rem; font-weight: 300; color: #fff; margin-bottom: 20px;">561-722-2209</div>
                 <div style="font-size: 1.2rem; color: #e5c158; letter-spacing: 4px; text-transform: uppercase;">Boynton Beach, FL</div>
              </div>
              
              <div style="background: rgba(255,255,255,0.01); border: 1px solid rgba(255,255,255,0.05); padding: 60px; border-radius: 4px;">
                 <input type="text" placeholder="FULL NAME" style="width: 100%; background: transparent; border: none; border-bottom: 1px solid #333; color: #fff; padding: 20px 0; font-size: 0.9rem; margin-bottom: 40px; outline: none; letter-spacing: 2px;">
                 <input type="email" placeholder="SECURE EMAIL" style="width: 100%; background: transparent; border: none; border-bottom: 1px solid #333; color: #fff; padding: 20px 0; font-size: 0.9rem; margin-bottom: 40px; outline: none; letter-spacing: 2px;">
                 <textarea placeholder="INQUIRY DETAILS" style="width: 100%; background: transparent; border: none; border-bottom: 1px solid #333; color: #fff; padding: 20px 0; font-size: 0.9rem; margin-bottom: 60px; outline: none; height: 100px; resize: none; letter-spacing: 2px;"></textarea>
                 <button style="width: 100%; background: #e5c158; color: #0a0a0c; border: none; padding: 25px; font-size: 0.9rem; font-weight: 800; letter-spacing: 4px; text-transform: uppercase; cursor: pointer;">Submit Request</button>
              </div>
           </div>
        </section>
      </main>

      <!-- Floating CTA -->
      <div class="floating-cta" onclick="document.getElementById('contact').scrollIntoView({behavior: 'smooth'})">
         <div style="color: #0a0a0c; font-size: 1.5rem; font-weight: 900;">+</div>
         <span class="cta-text">Rapid Consultation</span>
      </div>

      <!-- Footer -->
      <footer style="padding: 100px 10% 60px 10%; border-top: 1px solid rgba(255,255,255,0.03); background: #0a0a0c;">
         <div style="font-size: 2.2rem; font-weight: 200; letter-spacing: 12px; margin-bottom: 30px;">MCSO</div>
         <p style="color: #444; font-size: 0.75rem; letter-spacing: 2px; text-transform: uppercase;">Integrity // Trust // Honor // Respect</p>
         <p style="color: #222; font-size: 0.7rem; letter-spacing: 1px; margin-top: 40px;">&copy; 2026 MICHAEL COLON SECURITY ORGANIZATION LLC // US MILITARY VETERAN OWNED.</p>
      </footer>

      <!-- Global Behavior & Interactions -->
      <script>
        // Setup Logic for In-Theme Interactivity
        const initAura = () => {
          const sections = document.querySelectorAll('section');
          const navLinks = document.querySelectorAll('.nav-link');
          const progressBar = document.getElementById('scroll-progress');

          // 1. Progress Bar Logic
          window.addEventListener('scroll', () => {
            const windist = window.pageYOffset;
            const docHeight = document.documentElement.scrollHeight;
            const winHeight = window.innerHeight;
            const scrollPercent = (windist / (docHeight - winHeight)) * 100;
            progressBar.style.width = scrollPercent + '%';
          });

          // 2. Active Link Logic (Intersection Observer)
          const observerOptions = {
            threshold: 0.3
          };

          const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
              if (entry.isIntersecting) {
                navLinks.forEach(link => {
                  link.classList.remove('active');
                  if (link.getAttribute('href').substring(1) === entry.target.id) {
                    link.classList.add('active');
                  }
                });
              }
            });
          }, observerOptions);

          sections.forEach(section => observer.observe(section));
        };

        // Inject the logic after a tick
        setTimeout(initAura, 100);
      </script>
    </div>
  `;

   // Explicitly trigger the scroll logic since it's inside innerHTML
   const setupScripts = () => {
      const sections = root.querySelectorAll('section');
      const navLinks = root.querySelectorAll('.nav-link');
      const progressBar = root.querySelector('#scroll-progress');

      window.onscroll = () => {
         const windist = window.pageYOffset;
         const docHeight = document.documentElement.scrollHeight;
         const winHeight = window.innerHeight;
         const scrollPercent = (windist / (docHeight - winHeight)) * 100;
         if (progressBar) progressBar.style.width = scrollPercent + '%';

         // Active Section Manual Check
         let current = '';
         sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= sectionTop - 200) {
               current = section.getAttribute('id');
            }
         });

         navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === current) {
               link.classList.add('active');
            }
         });
      };
   };

   setTimeout(setupScripts, 50);
}
