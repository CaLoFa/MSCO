export function renderDesert(root) {
  root.innerHTML = `
    <div style="background: #0a0a0b; color: #f4f4f4; min-height: 100vh; font-family: 'Playfair Display', serif; display: flex; flex-direction: column; overflow-x: hidden;">
      
      <!-- Sanctuary Header -->
      <header style="padding: 50px 10%; display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid rgba(197, 160, 89, 0.2);">
        <div style="font-size: 2rem; letter-spacing: 12px; font-weight: normal; color: #fff;">MCSO</div>
        <nav style="display: flex; gap: 40px; font-size: 0.7rem; letter-spacing: 3px; text-transform: uppercase; font-family: 'Inter', sans-serif;">
          <a href="#" style="color: #fff; text-decoration: none;">Heritage</a>
          <a href="#" style="color: #fff; text-decoration: none;">Services</a>
          <a href="#" style="color: #c5a059; text-decoration: none; border-bottom: 2px solid #c5a059; padding-bottom: 8px;">Connect</a>
        </nav>
      </header>

      <main style="flex: 1;">
        <!-- Immersive Minimal Hero -->
        <section style="padding: 150px 10%; text-align: center; position: relative;">
          <div style="position: absolute; inset: 0; background: radial-gradient(circle at center, rgba(197, 160, 89, 0.03) 0%, transparent 60%);"></div>
          
          <div style="font-family: 'Inter', sans-serif; font-size: 0.75rem; letter-spacing: 6px; text-transform: uppercase; color: #c5a059; margin-bottom: 40px; font-weight: 500;">Bespoke Risk Management</div>
          
          <h1 style="font-size: 5rem; font-weight: 400; line-height: 1.1; margin-bottom: 50px;">
            The Art of <br>
            <span style="font-style: italic; color: #fff;">Invisible Defense.</span>
          </h1>
          
          <p style="font-family: 'Inter', sans-serif; font-size: 1.1rem; color: #777; line-height: 2; margin-bottom: 80px; max-width: 800px; margin-left: auto; margin-right: auto; font-weight: 300;">
            Michael Colon, retired NYPD Lieutenant and Navy Veteran, brings a heritage of discipline to high-stakes physical security. We establish the perimeter so you can exist without interruption.
          </p>

          <div style="width: 100%; height: 500px; background: url('/assets/fleet_sedan_side_1769556143358.png') center/cover; opacity: 0.6; filter: grayscale(100%) brightness(0.8); border: 1px solid rgba(197, 160, 89, 0.2);"></div>
        </section>

        <!-- Symmetric Estate-style Services -->
        <section style="background: rgba(255,255,255,0.02); padding: 120px 10%; display: grid; grid-template-columns: repeat(3, 1fr); gap: 60px;">
           <div style="text-align: center;">
              <h4 style="font-size: 1.6rem; font-weight: 400; margin-bottom: 20px; color: #c5a059;">Executive Protection</h4>
              <p style="font-family: 'Inter', sans-serif; font-size: 0.9rem; color: #777; line-height: 1.8;">Close-quarter discrete protection that seamlessly aligns with high-net-worth lifestyles without imposing friction.</p>
           </div>
           <div style="text-align: center;">
              <h4 style="font-size: 1.6rem; font-weight: 400; margin-bottom: 20px; color: #c5a059;">Estate Advisory</h4>
              <p style="font-family: 'Inter', sans-serif; font-size: 0.9rem; color: #777; line-height: 1.8;">Strategic architectural vulnerability reviews and sustained perimeter defense for luxury residential campuses.</p>
           </div>
           <div style="text-align: center;">
              <h4 style="font-size: 1.6rem; font-weight: 400; margin-bottom: 20px; color: #c5a059;">Asset Logistics</h4>
              <p style="font-family: 'Inter', sans-serif; font-size: 0.9rem; color: #777; line-height: 1.8;">Secure, low-profile and armored mobility networks for high-value transits across complex metropolitan zones.</p>
           </div>
        </section>
      </main>
    </div>
  `;
}
