export function renderStark(root) {
  root.innerHTML = `
    <div style="background: #fdfcf9; color: #1c1c1c; min-height: 100vh; font-family: 'Playfair Display', serif; display: flex; flex-direction: column;">
      
      <!-- Heritage Header -->
      <header style="padding: 60px 10%; display: flex; flex-direction: column; align-items: center; gap: 30px; border-bottom: 1px solid #e8e4db;">
        <div style="font-size: 2.2rem; font-weight: normal; letter-spacing: 8px; text-transform: uppercase; color: #1c1c1c;">
          MCSO
        </div>
        <div style="height: 1px; width: 60px; background: #c5a059;"></div>
        <nav style="display: flex; gap: 40px; font-family: 'Inter', sans-serif; font-size: 0.7rem; letter-spacing: 3px; text-transform: uppercase; font-weight: 500;">
          <a href="#" style="color: #8a8a8a; text-decoration: none;">The Heritage</a>
          <a href="#" style="color: #8a8a8a; text-decoration: none;">Client Services</a>
          <a href="#" style="color: #1c1c1c; text-decoration: none;">Inquiry</a>
        </nav>
      </header>

      <main style="flex: 1;">
        
        <!-- Symmetric Hero -->
        <section style="padding: 100px 10%; max-width: 1200px; margin: 0 auto; text-align: center;">
          <div style="font-family: 'Inter', sans-serif; font-size: 0.8rem; letter-spacing: 4px; text-transform: uppercase; color: #c5a059; margin-bottom: 40px;">
            The Private Client Group
          </div>
          
          <h1 style="font-size: 4.5rem; line-height: 1.1; margin-bottom: 50px; font-weight: 400; color: #1c1c1c;">
            Refining the Art of<br>
            <span style="font-style: italic;">Discreet Defense.</span>
          </h1>
          
          <div style="width: 100%; height: 600px; background: url('/assets/fleet_sedan_side_1769556143358.png') center/cover; margin-bottom: 80px; box-shadow: 0 40px 100px rgba(0,0,0,0.05);"></div>
          
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 100px; text-align: left; padding: 0 50px;">
             <div>
                <p style="font-size: 1.4rem; line-height: 1.6; color: #1c1c1c; margin-bottom: 30px;">
                   "True security is not seen; it is felt. We curate an environment of absolute tranquility for the principal."
                </p>
                <div style="font-family: 'Inter', sans-serif; font-size: 0.8rem; letter-spacing: 2px; text-transform: uppercase; color: #c5a059;">
                   Michael Colon, Founder
                </div>
             </div>
             <div>
                <p style="font-family: 'Inter', sans-serif; font-size: 1.05rem; color: #666; line-height: 2; font-weight: 300;">
                   Leveraging a career defined by the United States Navy and the NYPD, Michael Colon brings a boutique sensibility to physical security. MCSO specializes in bespoke protective architectures for luxury compounds and high-profile individuals.
                </p>
             </div>
          </div>
        </section>

        <!-- Centered Services -->
        <section style="background: #faf9f6; padding: 120px 10%; border-top: 1px solid #e8e4db;">
           <div style="max-width: 1400px; margin: 0 auto; display: grid; grid-template-columns: repeat(3, 1fr); gap: 80px;">
              <div style="text-align: center;">
                 <h4 style="font-size: 1.5rem; margin-bottom: 20px; font-weight: 400;">Concierge Protection</h4>
                 <p style="font-family: 'Inter', sans-serif; font-size: 0.9rem; color: #666; line-height: 1.8;">Close-quarter personal safety agents who integrate seamlessly into exclusive daily routines.</p>
              </div>
              <div style="text-align: center;">
                 <h4 style="font-size: 1.5rem; margin-bottom: 20px; font-weight: 400;">Estate Management</h4>
                 <p style="font-family: 'Inter', sans-serif; font-size: 0.9rem; color: #666; line-height: 1.8;">Full-spectrum perimeter defense and vulnerability mapping for sprawling luxury estates.</p>
              </div>
              <div style="text-align: center;">
                 <h4 style="font-size: 1.5rem; margin-bottom: 20px; font-weight: 400;">Global Logistics</h4>
                 <p style="font-family: 'Inter', sans-serif; font-size: 0.9rem; color: #666; line-height: 1.8;">Choreographed travel and mobility solutions utilizing armored and luxury mobility assets.</p>
              </div>
           </div>
        </section>
      </main>
    </div>
  `;
}
