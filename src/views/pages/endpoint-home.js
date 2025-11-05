import { getBaseLayout } from '../layout/base.js';

export function getEndpointHomePage() {
  const content = `
    <section id="endpoint-home" class="section">
      <h1 class="section-title">GET /</h1>
      <div class="section-description">
        <p>Récupère la page d'accueil avec la documentation de l'API.</p>
      </div>
      
      <div class="endpoint-card">
        <div class="endpoint-header">
          <span class="method-badge get">GET</span>
          <span class="endpoint-path">/</span>
        </div>
        <div class="endpoint-description">
          Retourne la page HTML de documentation interactive de l'API.
        </div>
        
        <div class="subsection">
          <div class="subsection-title">Exemple de requête</div>
          <div class="code-block">
            <pre>fetch('http://localhost:5000/')
  .then(response => response.text())
  .then(html => console.log(html));</pre>
          </div>
        </div>
        
        <div class="subsection">
          <div class="subsection-title">Réponse</div>
          <div class="response-example">
            <pre>HTML (200 OK)
Page de documentation complète</pre>
          </div>
        </div>
        
        <div class="test-section">
          <div class="subsection-title">🧪 Tester l'endpoint</div>
          <p style="color: #64748b; margin-bottom: 16px;">Cliquez sur le bouton pour tester cet endpoint directement depuis cette page.</p>
          <button class="test-button" onclick="testEndpoint('GET', '/', null, 'test-result-home')">
            Tester GET /
          </button>
          <div id="test-result-home" class="test-result"></div>
        </div>
      </div>
    </section>
  `;
  
  return getBaseLayout('GET /', content, 'endpoint-home');
}

