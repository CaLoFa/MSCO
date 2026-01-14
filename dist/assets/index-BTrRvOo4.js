(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(e){if(e.ep)return;e.ep=!0;const s=r(e);fetch(e.href,s)}})();document.querySelector("#app").innerHTML=`
  <main>
    <nav class="glass-nav">
      <div class="logo">MCSO SECURITY GROUP</div>
      <div class="nav-links">
        <a href="#services">Services</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>

    <section id="hero" class="hero-section">
      <div class="hero-content">
        <div class="badge">United States Military Veteran Owned</div>
        <h1>ELITE PROTECTION <br><span class="accent-text">BEYOND EXPECTATIONS</span></h1>
        <p>The Michael Colon Security Organization provides specialized security solutions custom-tailored to your unique needs.</p>
        <div class="hero-actions">
          <a href="#contact" class="btn btn-primary">Free Consultation</a>
          <a href="#services" class="btn btn-secondary">Our Services</a>
        </div>
      </div>
      <div class="hero-visual">
        <div class="glass-card main-card">
          <div class="card-glow"></div>
          <div class="card-content">
            <h3>MCSO STANDARD</h3>
            <p>"Be the example, stand by your word and keep your promises."</p>
            <div class="signature">— Michael Colon, Founder</div>
          </div>
        </div>
      </div>
    </section>

    <section id="services" class="services-section">
      <div class="section-header">
        <h2>Specialized Security Services</h2>
        <p>Comprehensive protection for residential and commercial environments.</p>
      </div>
      <div class="services-grid">
        <div class="service-card glass">
          <div class="icon">🛡️</div>
          <h3>Residential Protection</h3>
          <p>Close quarter one on one executive protection and body guarding services for professionals and celebrities.</p>
        </div>
        <div class="service-card glass">
          <div class="icon">🏢</div>
          <h3>Commercial Security</h3>
          <p>Staff safety and physical security presence for hospitals, schools, corporate centers, and luxury establishments.</p>
        </div>
        <div class="service-card glass">
          <div class="icon">🚓</div>
          <h3>Mobile Escorts</h3>
          <p>Secure transportation and high-level surveillance for VIPs and sensitive assets.</p>
        </div>
      </div>
    </section>

    <section id="about" class="about-section">
      <div class="about-grid">
        <div class="about-visual reveal">
          <div class="stats glass">
            <div class="stat-item">
              <span class="stat-number">10+</span>
              <span class="stat-label">Years Experience</span>
            </div>
            <div class="stat-item">
              <span class="stat-number">33+</span>
              <span class="stat-label">Armed Officers</span>
            </div>
          </div>
        </div>
        <div class="about-content reveal">
          <div class="badge">Veteran Leadership</div>
          <h2>MEET THE OWNER <br><span class="accent-text">MICHAEL COLON</span></h2>
          <p>
            Michael Colon, a United States Navy Veteran and former NYPD Sergeant/Lieutenant, brings a unique blend of military discipline and law enforcement expertise to the private security industry.
          </p>
          <div class="about-details">
            <p>After honorably serving our country, Michael transitioned to high-profile Executive Protection and Law Enforcement. Having managed large-scale security operations for corporate campuses and high-end residential communities, he founded MCSO in 2022 to address critical missing elements in today's security market: <strong>attention to detail and exceptional client service.</strong></p>
          </div>
          <div class="quote glass">
            "Be the example, stand by your word and keep your promises to your employees, partners and clients."
          </div>
        </div>
      </div>
    </section>

    <section id="testimonials" class="testimonials-section">
      <div class="section-header reveal">
        <h2>Professional Recognition</h2>
      </div>
      <div class="testimonial-card glass reveal">
        <p>"Whenever we need assistance in the highest levels of executive-vip surveillance transportation and protection, we can always count on Michael and his team to deliverer the best of service. Integrity, Trust, Honor and Respect."</p>
        <div class="testimonial-author">
          <strong>Anthony Malsaro</strong>
          <span>Executive Protection Group Miami</span>
        </div>
      </div>
    </section>

    <section id="contact" class="contact-section">
      <div class="contact-container glass reveal">
        <div class="contact-info">
          <h2>Get a Free Security <br><span class="accent-text">Consultation</span></h2>
          <p>Ready to elevate your security? Contact us today for a comprehensive assessment of your property or personal protection needs.</p>
          <div class="contact-methods">
            <div class="method">
              <strong>Email</strong>
              <span>MCSOGROUP@GMAIL.COM</span>
            </div>
            <div class="method">
              <strong>Phone</strong>
              <span>561-722-2209</span>
            </div>
          </div>
        </div>
        <form class="contact-form">
          <input type="text" placeholder="Full Name" required>
          <input type="email" placeholder="Email Address" required>
          <textarea placeholder="Tell us about your security needs" rows="4" required></textarea>
          <button type="submit" class="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>

    <footer class="glass-footer">
      <div class="footer-grid">
        <div class="footer-info">
          <h3>MCSO</h3>
          <p>Dedicated to excellence in security and property protection.</p>
        </div>
        <div class="footer-contact">
          <p>Email: mcso@mcsogroup.com</p>
          <p>Phone: 561-722-2209</p>
        </div>
      </div>
      <div class="footer-bottom">
        &copy; 2026 MCSO Security Group. Proudly Veteran Owned.
      </div>
    </footer>
  </main>
`;const l={threshold:.1},v=new IntersectionObserver(i=>{i.forEach(t=>{t.isIntersecting&&t.target.classList.add("active")})},l);document.querySelectorAll(".reveal").forEach(i=>v.observe(i));const n=document.querySelector(".glass-card");n&&window.addEventListener("mousemove",i=>{const{clientX:t,clientY:r}=i,{left:o,top:e,width:s,height:a}=n.getBoundingClientRect(),c=(t-o-s/2)/20,d=(r-e-a/2)/20;n.style.transform=`perspective(1000px) rotateY(${c}deg) rotateX(${-d}deg)`});
