import { getBaseLayout } from '../layout/base.js';

export function getEndpointCarsPage() {
  const content = `
    <section id="endpoint-cars" class="section">
      <h1 class="section-title">GET /api</h1>
      <div class="section-description">
        <p>Récupère les données des voitures depuis les sources externes (API SpiderVo). Les données sont converties de XML en JSON pour une utilisation plus facile.</p>
        <p style="margin-top: 12px;">
          <a href="/docs/resources" style="color: #667eea; text-decoration: none;">
            📚 Voir les ressources utiles pour les APIs REST →
          </a>
        </p>
      </div>
      
      <div class="endpoint-card">
        <div class="endpoint-header">
          <span class="method-badge get">GET</span>
          <span class="endpoint-path">/api</span>
        </div>
        <div class="endpoint-description">
          Récupère la liste complète des véhicules disponibles depuis l'API externe SpiderVo. Les données XML sont automatiquement converties en format JSON.
        </div>
        
        <div class="subsection">
          <div class="subsection-title">Exemple de requête</div>
          <div class="code-block">
            <pre><span class="code-keyword">fetch</span>(<span class="code-string">'http://localhost:5000/api'</span>)
  .<span class="code-keyword">then</span>(response => response.<span class="code-keyword">json</span>())
  .<span class="code-keyword">then</span>(data => <span class="code-keyword">console</span>.<span class="code-keyword">log</span>(data))
  .<span class="code-keyword">catch</span>(error => <span class="code-keyword">console</span>.<span class="code-keyword">error</span>(<span class="code-string">'Error:'</span>, error));</pre>
          </div>
          <p style="margin-top: 12px; font-size: 0.9em; color: #64748b;">
            <a href="https://developer.mozilla.org/fr/docs/Web/API/Fetch_API/Using_Fetch" target="_blank" style="color: #667eea;">
              → En savoir plus sur Fetch API (MDN)
            </a>
          </p>
        </div>
        
        <div class="subsection">
          <div class="subsection-title">Réponse (200 OK)</div>
          <div class="response-example">
            <pre>[
  {
    "id": "123",
    "marque": "Toyota",
    "modele": "Corolla",
    "prix": "25000"
  }
]</pre>
          </div>
          <p style="margin-top: 12px; font-size: 0.9em; color: #64748b;">
            <a href="https://developer.mozilla.org/fr/docs/Learn/JavaScript/Objects/JSON" target="_blank" style="color: #667eea;">
              → Comprendre le format JSON (MDN)
            </a>
          </p>
        </div>
        
        <div class="info-box">
          <p><strong>Note:</strong> Les données proviennent d'une API externe (SpiderVo).</p>
          <p style="margin-top: 8px;">
            <a href="/docs/examples" style="color: #667eea; text-decoration: none;">
              → Voir plus d'exemples d'utilisation
            </a>
          </p>
        </div>
        
        <div class="test-section">
          <div class="subsection-title">🧪 Tester l'endpoint</div>
          <p style="color: #64748b; margin-bottom: 16px;">Cliquez sur le bouton pour récupérer les données des voitures.</p>
          <button class="test-button" onclick="testEndpoint('GET', '/api', null, 'test-result-cars')">
            Tester GET /api
          </button>
          <div id="test-result-cars" class="test-result"></div>
        </div>
      </div>
    </section>
  `;
  
  return getBaseLayout('GET /api', content, 'endpoint-cars');
}

