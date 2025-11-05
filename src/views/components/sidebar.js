export function getSidebar(currentSection = 'introduction') {
  return `
    <aside class="sidebar" id="sidebar">
      <div class="sidebar-header">
        <h1>🚗 MKB API</h1>
        <p>Documentation v1.0.0</p>
      </div>
      
      <nav>
        <div class="nav-section">
          <div class="nav-section-title">Général</div>
          <a href="/docs/introduction" class="nav-item ${currentSection === 'introduction' ? 'active' : ''}">Introduction</a>
          <a href="/docs/authentication" class="nav-item ${currentSection === 'authentication' ? 'active' : ''}">Authentification</a>
        </div>
        
        <div class="nav-section">
          <div class="nav-section-title">Endpoints</div>
          <a href="/docs/endpoint/home" class="nav-item ${currentSection === 'endpoint-home' ? 'active' : ''}">GET /</a>
          <a href="/docs/endpoint/cars" class="nav-item ${currentSection === 'endpoint-cars' ? 'active' : ''}">GET /api</a>
          <a href="/docs/endpoint/form" class="nav-item ${currentSection === 'endpoint-form' ? 'active' : ''}">POST /api/form</a>
        </div>
        
        <div class="nav-section">
          <div class="nav-section-title">Ressources</div>
          <a href="/docs/examples" class="nav-item ${currentSection === 'examples' ? 'active' : ''}">Exemples</a>
          <a href="/docs/errors" class="nav-item ${currentSection === 'errors' ? 'active' : ''}">Codes d'erreur</a>
          <a href="/docs/resources" class="nav-item ${currentSection === 'resources' ? 'active' : ''}">Liens utiles</a>
        </div>
      </nav>
      
      <div style="padding: 20px; margin-top: auto; border-top: 1px solid rgba(255,255,255,0.1);">
        <p style="font-size: 0.85em; color: #94a3b8; margin-bottom: 12px;">Développé par</p>
        <p style="font-weight: 600; margin-bottom: 8px;">ACWeb Services</p>
        <a href="https://github.com/mkb-automobile/mkb-backend" target="_blank" style="color: #667eea; text-decoration: none; font-size: 0.9em;">📦 Voir sur GitHub</a>
      </div>
    </aside>
  `;
}

