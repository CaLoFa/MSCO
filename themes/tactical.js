export function renderTactical(root) {
  root.innerHTML = `
    <div style="background: #0d0d0f; color: #ffffff; min-height: 100vh; font-family: 'Inter', sans-serif; display: flex; flex-direction: column;">
      
      <!-- Architectural Header -->
      <header style="padding: 40px 80px; display: flex; justify-content: space-between; align-items: flex-end; border-bottom: 1px solid rgba(255,255,255,0.05);">
        <div style="font-weight: 900; font-size: 1.5rem; letter-spacing: -1px; line-height: 1;">
          MCSO<br><span style="color: #555; font-size: 0.7rem; letter-spacing: 5px; font-weight: 400;">GROUP</span>
        </div>
        <nav style="display: flex; gap: 60px; font-size: 0.75rem; letter-spacing: 3px; text-transform: uppercase; font-weight: 500; color: #888;">
          <a href="#" style="color: inherit; text-decoration: none;">Projects</a>
          <a href="#" style="color: inherit; text-decoration: none;">Philosophy</a>
          <a href="#" style="color: #fff; text-decoration: none;">Retain</a>
        </nav>
      </header>

      <main style="flex: 1; display: flex; flex-direction: column;">
        
        <!-- Structural Hero -->
        <section style="padding: 100px 80px; flex: 1; display: grid; grid-template-columns: 1fr 1.5fr; gap: 100px; align-items: start;">
           <div style="position: sticky; top: 150px;">
             <div style="width: 40px; height: 2px; background: #fff; margin-bottom: 40px;"></div>
             <h1 style="font-size: 5rem; font-weight: 800; line-height: 0.9; letter-spacing: -3px; margin-bottom: 40px;">
               THE<br>SILENT<br>PILLAR.
             </h1>
             <p style="font-size: 1.1rem; color: #666; line-height: 1.8; max-width: 350px; font-weight: 300;">
               Architecting absolute defense for the private sector. We provide the structural integrity required for elite security operations.
             </p>
           </div>
           
           <div style="display: flex; flex-direction: column; gap: 100px;">
              <div style="aspect-ratio: 16/9; background: url('/assets/fleet_suv_front_1769556132620.png') center/cover; filter: contrast(1.1) grayscale(100%); border: 1px solid rgba(255,255,255,0.1);"></div>
              
              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 40px;">
                 <div style="border-top: 1px solid #333; padding-top: 20px;">
                    <h3 style="font-size: 1rem; letter-spacing: 2px; text-transform: uppercase; margin-bottom: 20px;">01 // Personal</h3>
                    <p style="color: #666; font-size: 0.95rem; line-height: 1.6;">High-stakes close protection. We operate as the shadow to your daily routine, providing unyielding safety without visual friction.</p>
                 </div>
                 <div style="border-top: 1px solid #333; padding-top: 20px;">
                    <h3 style="font-size: 1rem; letter-spacing: 2px; text-transform: uppercase; margin-bottom: 20px;">02 // Logistic</h3>
                    <p style="color: #666; font-size: 0.95rem; line-height: 1.6;">B6-Armored mobility fleets. Choreographed transit protocols for high-value principals moving through high-risk environments.</p>
                 </div>
              </div>

              <div style="border: 1px solid rgba(255,255,255,0.1); padding: 80px; background: #111;">
                 <h2 style="font-size: 3rem; font-weight: 200; margin-bottom: 30px; letter-spacing: -1px;">Leadership in <span style="font-style: italic; color: #888;">Shadow.</span></h2>
                 <p style="font-size: 1.1rem; color: #888; line-height: 1.8; margin-bottom: 40px;">
                    Michael Colon bridges the gap between military service and elite private consultation. A Navy Veteran and retired NYPD Lieutenant, he has spent over a decade perfecting the "Silent Pillar" methodology.
                 </p>
                 <div style="display: flex; gap: 60px;">
                    <div>
                      <div style="font-size: 3rem; font-weight: 800;">100%</div>
                      <div style="font-size: 0.7rem; letter-spacing: 2px; text-transform: uppercase; color: #555;">Clear Record</div>
                    </div>
                    <div>
                      <div style="font-size: 3rem; font-weight: 800;">15+</div>
                      <div style="font-size: 0.7rem; letter-spacing: 2px; text-transform: uppercase; color: #555;">Years Mastery</div>
                    </div>
                 </div>
              </div>
           </div>
        </section>

      </main>
    </div>
  `;
}
