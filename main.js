import './style.css'

document.querySelector('#app').innerHTML = `
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
        <p>The Michael Colon Security Organization provides specialized security solutions custom-tailored to your unique needs. We prioritize integrity, trust, and exceptional service.</p>
        <div class="hero-actions">
          <a href="#contact" class="btn btn-primary">Free Consultation</a>
          <a href="#services" class="btn btn-secondary">Our Services</a>
        </div>
      </div>
      <div class="hero-visual">
        <div class="glass-card main-card">
          <div class="card-glow"></div>
          <div class="card-content">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color: var(--color-gold); margin-bottom: 20px;"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
            <h3>MCSO STANDARD</h3>
            <p>"Be the example, stand by your word and keep your promises."</p>
            <div class="signature">— Michael Colon, Founder</div>
          </div>
        </div>
      </div>
    </section>

    <div class="trust-bar">
      <div class="trust-item">LUXURY REAL ESTATE</div>
      <div class="trust-item">HEALTHCARE FACILITIES</div>
      <div class="trust-item">PRIVATE CORPORATE COUNCILS</div>
      <div class="trust-item">ELITE EDUCATIONAL INSTITUTIONS</div>
    </div>

    <section class="impact-section">
      <div class="impact-grid reveal">
        <div class="impact-item">
          <h2>15+</h2>
          <p>Years Excellence</p>
        </div>
        <div class="impact-item">
          <h2>500+</h2>
          <p>Secure Operations</p>
        </div>
        <div class="impact-item">
          <h2>24/7</h2>
          <p>Rapid Deployment</p>
        </div>
        <div class="impact-item">
          <h2>100%</h2>
          <p>Mission Success</p>
        </div>
      </div>
    </section>

    <section id="services" class="services-section">
      <div class="section-header">
        <div class="badge">Our Expertise</div>
        <h2>Specialized Security Services</h2>
        <p>Comprehensive protection for residential and commercial environments, delivered with military precision.</p>
      </div>
      <div class="services-grid">
        <div class="service-card glass">
          <div class="icon">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
          </div>
          <h3>Executive Protection</h3>
          <p>Close-quarter one-on-one protection for high-profile professionals, celebrities, and VIPs requiring absolute discretion.</p>
        </div>
        <div class="service-card glass">
          <div class="icon">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="9" y1="3" x2="9" y2="21"></line></svg>
          </div>
          <h3>Commercial Logistics</h3>
          <p>Elite physical security for hospitals, schools, and corporate campuses, ensuring the safety of staff and sensitive assets.</p>
        </div>
        <div class="service-card glass">
          <div class="icon">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle></svg>
          </div>
          <h3>Secure Logistics</h3>
          <p>High-level mobile escorts and asset protection for high-value shipments and sensitive VIP transportation.</p>
        </div>
      </div>
    </section>

    <section id="process" class="process-section">
      <div class="section-header reveal">
        <div class="badge">The Strategy</div>
        <h2>Our Strategic Process</h2>
        <p>A systematic approach to ensuring your absolute safety and peace of mind.</p>
      </div>
      <div class="process-steps">
        <div class="process-step reveal">
          <span class="step-number">01</span>
          <h3>Threat Assessment</h3>
          <p>We perform a deep-dive analysis of potential vulnerabilities in your current security posture.</p>
        </div>
        <div class="process-step reveal">
          <span class="step-number">02</span>
          <h3>Custom Strategy</h3>
          <p>Our team develops a tailored security plan specifically designed for your unique environment.</p>
        </div>
        <div class="process-step reveal">
          <span class="step-number">03</span>
          <h3>Elite Deployment</h3>
          <p>We deploy highly trained personnel equipped with the latest technology and protocols.</p>
        </div>
        <div class="process-step reveal">
          <span class="step-number">04</span>
          <h3>Active Oversight</h3>
          <p>Continuous monitoring and regular reporting ensure your protection remains ahead of evolving threats.</p>
        </div>
      </div>
    </section>

    <section id="about" class="about-section">
      <div class="about-grid">
        <div class="about-visual reveal">
          <div class="founder-card glass">
            <div class="founder-identity">
              <div class="founder-avatar">
                <span>MC</span>
              </div>
              <div class="founder-info">
                <h3>Michael Colon</h3>
                <span>Founder & President</span>
              </div>
            </div>
            <div class="credentials-grid">
              <div class="credential-item">
                <span class="icon">📍</span>
                <span class="label">NY & Florida</span>
              </div>
              <div class="credential-item">
                <span class="icon">⚓</span>
                <span class="label">Navy Veteran</span>
              </div>
              <div class="credential-item">
                <span class="icon">👮</span>
                <span class="label">NYPD Lieutenant</span>
              </div>
              <div class="credential-item">
                <span class="icon">🎖️</span>
                <span class="label">10+ Years Exp</span>
              </div>
            </div>

          </div>
        </div>
        <div class="about-content reveal">
          <div class="badge">Unmatched Expertise</div>
          <h2>DISCIPLINE-DRIVEN <br><span class="accent-text">PROTECTION</span></h2>
          
          <div class="bio-intro">
            <p><strong>Michael Colon</strong> brings a unique blend of military discipline and elite law enforcement expertise to the private security sector.</p>
          </div>

          <div class="bio-tabs">
            <div class="bio-block">
              <h3>Background</h3>
              <p>Former United States Navy Veteran and NYPD Sergeant/Lieutenant. Managed large-scale security operations for corporate campuses and high-end residential communities.</p>
            </div>
            <div class="bio-block">
              <h3>The Mission</h3>
              <p>Founded to address critical gaps in the market: <strong>uncompromising attention to detail</strong> and exceptional client service that standard firms often overlook.</p>
            </div>
          </div>
          
          <div class="quote glass">
            <p>"Be the example, stand by your word and keep your promises to your employees, partners and clients."</p>
          </div>
        </div>
      </div>
    </section>


    <section id="faq" class="faq-section">
      <div class="section-header reveal">
        <div class="badge">FAQ</div>
        <h2>Common Inquiries</h2>
      </div>
      <div class="faq-grid reveal">
        <div class="faq-item glass">
          <h3>What geographic areas do you cover?</h3>
          <div class="faq-content">
            We primarily serve the New York and Florida regions, but we can organize specialized security details for travel or specific operations globally.
          </div>
        </div>
        <div class="faq-item glass">
          <h3>Are your guards licensed and insured?</h3>
          <div class="faq-content">
            Yes, MCSO is fully licensed and insured, and all our personnel undergo rigorous background checks and continuous training.
          </div>
        </div>
        <div class="faq-item glass">
          <h3>How quickly can you deploy a security team?</h3>
          <div class="faq-content">
            We specialize in rapid response. Depending on the complexity, we can often deploy emergency security details within 24-48 hours.
          </div>
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
`

// Scroll Reveal Logic
const observerOptions = {
  threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
    }
  });
}, observerOptions);

document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

// FAQ Toggle Logic
document.querySelectorAll('.faq-item').forEach(item => {
  item.addEventListener('click', () => {
    const isActive = item.classList.contains('active');

    // Close other items
    document.querySelectorAll('.faq-item').forEach(el => el.classList.remove('active'));

    if (!isActive) {
      item.classList.add('active');
    }
  });
});

// Hero Card Paranormal Effect
const heroCard = document.querySelector('.main-card');
if (heroCard) {
  window.addEventListener('mousemove', (e) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } = heroCard.getBoundingClientRect();
    const x = (clientX - left - width / 2) / 30;
    const y = (clientY - top - height / 2) / 30;

    heroCard.style.transform = `perspective(1000px) rotateY(${x}deg) rotateX(${-y}deg)`;
  });
}
