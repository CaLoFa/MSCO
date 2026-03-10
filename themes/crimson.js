export function renderCrimson(root) {
  root.innerHTML = `
    <div style="background: #111111; color: #ffffff; min-height: 100vh; font-family: 'Inter', sans-serif; display: flex; flex-direction: column; overflow-x: hidden;">
      
      <!-- Sovereign Multi-Element Header -->
      <header style="padding: 30px 60px; display: flex; justify-content: space-between; align-items: flex-end; border-bottom: 2px solid #e5c158;">
        <div style="font-weight: 900; font-size: 2.2rem; letter-spacing: -2px; line-height: 1;">MCSO<span style="font-weight: 300; font-size: 0.8rem; letter-spacing: 5px; font-family: 'Playfair Display', serif; color: #c5a059;"> SOVEREIGN</span></div>
        <nav style="display: flex; gap: 40px; font-size: 0.75rem; letter-spacing: 3px; text-transform: uppercase;">
          <a href="#" style="color: #fff; text-decoration: none;">Heritage</a>
          <a href="#" style="color: #fff; text-decoration: none;">Services</a>
          <a href="#" style="color: #c5a059; text-decoration: none; border-bottom: 1px solid #c5a059; padding-bottom: 5px;">Reserve</a>
        </nav>
      </header>

      <main style="flex: 1;">
        <!-- Immersive Hybrid Hero -->
        <section style="display: grid; grid-template-columns: 1fr 1fr; border-bottom: 1px solid rgba(255,255,255,0.03);">
          <!-- Left Content -->
          <div style="padding: 120px 60px; flex: 1; display: flex; flex-direction: column; justify-content: center; border-right: 1px solid rgba(255,255,255,0.03); background: #0a0a0b;">
             <div style="font-size: 0.75rem; color: #c5a059; letter-spacing: 5px; text-transform: uppercase; margin-bottom: 40px; font-weight: 500;">Private Intelligence. Physical Force.</div>
             <h1 style="font-size: 5.5rem; font-weight: 900; line-height: 0.9; margin: 0 0 60px 0; letter-spacing: -3px;">
                THE <br> SILENT <br> ADVISORY.
             </h1>
             <p style="font-size: 1.1rem; color: #666; line-height: 1.8; margin-bottom: 40px; max-width: 450px; font-weight: 300; font-family: 'Playfair Display', serif; font-style: italic;">
                Blending retired NYPD Lieutenant strategy with Navy discipline. We provide the structural integrity required for elite security operations.
             </p>
             <button style="align-self: flex-start; background: #c5a059; color: #000; border: none; padding: 25px 60px; font-size: 0.9rem; font-weight: 800; text-transform: uppercase; letter-spacing: 3px; cursor: pointer; border-radius: 2px;">Retain The Firm</button>
          </div>
          
          <!-- Right Stats Grid -->
          <div style="display: grid; grid-template-rows: 1.5fr 1fr;">
             <div style="background: url('/assets/fleet_sedan_side_1769556143358.png') center/cover; filter: grayscale(100%) contrast(1.1);"></div>
             <div style="display: grid; grid-template-columns: 1fr 1fr; background: #111;">
                <div style="padding: 60px; border-right: 1px solid rgba(255,255,255,0.03); border-bottom: 1px solid rgba(255,255,255,0.03);">
                   <div style="font-size: 4rem; font-weight: 900; color: #e5c158; line-height: 1;">15+</div>
                   <div style="font-size: 0.7rem; color: #888; letter-spacing: 2px; text-transform: uppercase; margin-top: 10px;">Years Mastery</div>
                </div>
                <div style="padding: 60px; border-bottom: 1px solid rgba(255,255,255,0.03);">
                   <div style="font-size: 4rem; font-weight: 900; color: #ffffff; line-height: 1;">500+</div>
                   <div style="font-size: 0.7rem; color: #888; letter-spacing: 2px; text-transform: uppercase; margin-top: 10px;">Escorts Secured</div>
                </div>
             </div>
          </div>
        </section>

        <!-- Symmetric Hybrid Services -->
        <section style="padding: 120px 60px;">
           <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 80px;">
              <div style="text-align: left;">
                 <h4 style="font-size: 1.5rem; font-weight: 700; margin-bottom: 25px; color: #fff;">Concierge Protection</h4>
                 <p style="font-size: 1rem; color: #666; line-height: 1.8; font-weight: 300;">Discreet personal defence that aligns with luxury lifestyles.</p>
              </div>
              <div style="text-align: left;">
                 <h4 style="font-size: 1.5rem; font-weight: 700; margin-bottom: 25px; color: #fff;">Estate Strategy</h4>
                 <p style="font-size: 1rem; color: #666; line-height: 1.8; font-weight: 300;">Sustained perimeter mappings for private compounds.</p>
              </div>
              <div style="text-align: left;">
                 <h4 style="font-size: 1.5rem; font-weight: 700; margin-bottom: 25px; color: #fff;">B6 Mobility</h4>
                 <p style="font-size: 1rem; color: #666; line-height: 1.8; font-weight: 300;">Choreographed transit through high-risk environments.</p>
              </div>
           </div>
        </section>
      </main>
    </div>
  `;
}
