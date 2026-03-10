export function renderCyber(root) {
  root.innerHTML = `
    <div style="background: #ffffff; color: #111111; min-height: 100vh; font-family: 'Inter', sans-serif; display: flex; flex-direction: column; overflow-x: hidden;">
      
      <!-- Monolith + Estate Header -->
      <header style="padding: 30px 60px; display: flex; justify-content: space-between; align-items: flex-end; border-bottom: 2px solid #111;">
        <div style="font-weight: 900; font-size: 2rem; letter-spacing: -2px; line-height: 1;">MCSO<span style="font-weight: 300; font-size: 0.8rem; letter-spacing: 5px; font-family: 'Playfair Display', serif;"> HERITAGE</span></div>
        <nav style="display: flex; gap: 40px; font-size: 0.75rem; letter-spacing: 3px; text-transform: uppercase;">
          <a href="#" style="color: #888; text-decoration: none;">Heritage</a>
          <a href="#" style="color: #888; text-decoration: none;">Advisory</a>
          <a href="#" style="color: #111; text-decoration: none; border-bottom: 1px solid #111; padding-bottom: 5px;">Inquire</a>
        </nav>
      </header>

      <main style="flex: 1;">
        <!-- Clean, Sharp Portfolio Block -->
        <section style="display: grid; grid-template-columns: 1fr 1fr; border-bottom: 2px solid #111;">
          <div style="padding: 120px 60px; display: flex; flex-direction: column; justify-content: center; border-right: 2px solid #111;">
            <div style="font-size: 0.75rem; color: #c5a059; letter-spacing: 5px; text-transform: uppercase; margin-bottom: 40px; font-weight: 600;">The Commander's Record</div>
            <h1 style="font-size: 5rem; font-weight: 900; line-height: 0.85; margin: 0 0 60px 0; letter-spacing: -3px;">
              DISCREET <br> ADVISORY.
            </h1>
            <p style="font-size: 1.1rem; color: #666; line-height: 1.8; margin-bottom: 40px; max-width: 450px; font-weight: 300;">
              Blending retired NYPD Lieutenant strategy with Navy discipline. We provide the structural integrity required for elite security operations.
            </p>
            <div style="display: flex; gap: 40px;">
               <div>
                  <div style="font-size: 2.5rem; font-weight: 900;">15+</div>
                  <div style="font-size: 0.65rem; color: #c5a059; letter-spacing: 2px; text-transform: uppercase;">Yrs Mastery</div>
               </div>
               <div>
                  <div style="font-size: 2.5rem; font-weight: 900;">500+</div>
                  <div style="font-size: 0.65rem; color: #c5a059; letter-spacing: 2px; text-transform: uppercase;">Deployments</div>
               </div>
            </div>
          </div>
          <div style="background: url('/assets/fleet_suv_front_1769556132620.png') center/cover; filter: grayscale(100%);"></div>
        </section>

        <!-- Symmetric Heritage Services -->
        <section style="padding: 100px 60px; background: #fafafa;">
           <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 80px;">
              <div style="text-align: center;">
                 <h4 style="font-size: 1.5rem; font-weight: 700; margin-bottom: 20px; font-family: 'Playfair Display', serif;">Concierge Protection</h4>
                 <p style="font-size: 0.95rem; color: #666; line-height: 1.8;">Close-quarter personal defense crafting tranquil perimeters for the principal.</p>
              </div>
              <div style="text-align: center; border-left: 1px solid #ddd; border-right: 1px solid #ddd; padding: 0 40px;">
                 <h4 style="font-size: 1.5rem; font-weight: 700; margin-bottom: 20px; font-family: 'Playfair Display', serif;">Estate Strategy</h4>
                 <p style="font-size: 0.95rem; color: #666; line-height: 1.8;">Strategic architectural vulnerability reviews for high-net-worth real estate.</p>
              </div>
              <div style="text-align: center;">
                 <h4 style="font-size: 1.5rem; font-weight: 700; margin-bottom: 20px; font-family: 'Playfair Display', serif;">Secure Logistics</h4>
                 <p style="font-size: 0.95rem; color: #666; line-height: 1.8;">Choreographed B6 mobility assets ensuring safe passage through risk environments.</p>
              </div>
           </div>
        </section>
      </main>
    </div>
  `;
}
