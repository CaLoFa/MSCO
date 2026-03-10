export function renderEmerald(root) {
  root.innerHTML = `
    <div style="background: #050505; color: #ffffff; min-height: 100vh; font-family: 'Inter', sans-serif; display: flex; flex-direction: column; overflow-x: hidden;">
      
      <!-- Obsidian Header -->
      <header style="padding: 40px 60px; display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid rgba(255,255,255,0.03);">
        <div style="font-weight: 900; font-size: 1.2rem; letter-spacing: 2px;">MCSO</div>
        <nav style="display: flex; gap: 40px; font-size: 0.7rem; letter-spacing: 4px; text-transform: uppercase; color: #555;">
          <a href="#" style="color: #fff; text-decoration: none;">Advisement</a>
          <a href="#" style="color: inherit; text-decoration: none;">Intelligence</a>
          <a href="#" style="color: inherit; text-decoration: none;">Inquiry</a>
        </nav>
      </header>

      <main style="flex: 1; display: flex; flex-direction: column;">
        <!-- Immersive Split Hero -->
        <section style="display: grid; grid-template-columns: 1fr 1fr; min-height: 80vh; border-bottom: 1px solid rgba(255,255,255,0.03);">
          <div style="padding: 100px 60px; display: flex; flex-direction: column; justify-content: center; border-right: 1px solid rgba(255,255,255,0.03);">
            <div style="font-size: 0.7rem; letter-spacing: 5px; text-transform: uppercase; color: #e5c158; margin-bottom: 20px;">Elite Private Protection</div>
            <h1 style="font-size: 6rem; font-weight: 800; line-height: 0.85; letter-spacing: -4px; margin-bottom: 40px;">
              SILENT <br> FORCE.
            </h1>
            <p style="font-size: 1.1rem; color: #444; line-height: 1.8; max-width: 400px; font-weight: 300;">
              Blending the architectural strength of the NYPD with the stealth of the Navy. We architect absolute defense.
            </p>
          </div>
          <div style="background: url('/assets/fleet_sedan_side_1769556143358.png') center/cover; filter: grayscale(100%) contrast(1.2);">
            <div style="width: 100%; height: 100%; background: linear-gradient(90deg, #050505 0%, transparent 20%);"></div>
          </div>
        </section>

        <!-- Dynamic Service List -->
        <section style="display: grid; grid-template-columns: repeat(3, 1fr);">
          <div style="padding: 60px; border-right: 1px solid rgba(255,255,255,0.03); transition: background 0.3s;" onmouseover="this.style.background='rgba(255,255,255,0.02)';" onmouseout="this.style.background='transparent';">
            <div style="font-size: 0.7rem; color: #e5c158; margin-bottom: 20px;">01</div>
            <h3 style="font-size: 1.5rem; font-weight: 600; margin-bottom: 20px;">Executive Protection</h3>
            <p style="color: #444; font-size: 0.9rem; line-height: 1.6;">Invisible physical defense for high-profile principals.</p>
          </div>
          <div style="padding: 60px; border-right: 1px solid rgba(255,255,255,0.03); transition: background 0.3s;" onmouseover="this.style.background='rgba(255,255,255,0.02)';" onmouseout="this.style.background='transparent';">
            <div style="font-size: 0.7rem; color: #e5c158; margin-bottom: 20px;">02</div>
            <h3 style="font-size: 1.5rem; font-weight: 600; margin-bottom: 20px;">Asset Logistics</h3>
            <p style="color: #444; font-size: 0.9rem; line-height: 1.6;">Secured B6 mobility networks for high-risk transits.</p>
          </div>
          <div style="padding: 60px; transition: background 0.3s;" onmouseover="this.style.background='rgba(255,255,255,0.02)';" onmouseout="this.style.background='transparent';">
            <div style="font-size: 0.7rem; color: #e5c158; margin-bottom: 20px;">03</div>
            <h3 style="font-size: 1.5rem; font-weight: 600; margin-bottom: 20px;">Estate Defense</h3>
            <p style="color: #444; font-size: 0.9rem; line-height: 1.6;">Full-spectrum perimeter mapping for luxury compounds.</p>
          </div>
        </section>
      </main>
    </div>
  `;
}
