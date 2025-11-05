import { getBaseLayout } from '../layout/base.js';

export function getEndpointFormPage() {
  const content = `
    <section id="endpoint-form" class="section">
      <h1 class="section-title">POST /api/form</h1>
      <div class="section-description">
        <p>Soumet un formulaire avec les données fournies. Les données sont reçues et traitées côté serveur.</p>
        <p style="margin-top: 12px;">
          <a href="https://developer.mozilla.org/fr/docs/Web/HTTP/Methods/POST" target="_blank" style="color: #667eea; text-decoration: none;">
            📚 En savoir plus sur la méthode POST →
          </a>
        </p>
      </div>
      
      <div class="endpoint-card">
        <div class="endpoint-header">
          <span class="method-badge post">POST</span>
          <span class="endpoint-path">/api/form</span>
        </div>
        <div class="endpoint-description">
          Envoie les données d'un formulaire au serveur pour traitement. Accepte les données JSON dans le body de la requête.
        </div>
        
        <div class="subsection">
          <div class="subsection-title">Paramètres</div>
          <div class="info-box">
            <p><strong>Body (JSON):</strong> Les données du formulaire au format JSON.</p>
            <p style="margin-top: 8px;">
              <a href="https://developer.mozilla.org/fr/docs/Web/HTTP/Methods/POST" target="_blank" style="color: #667eea; font-size: 0.9em;">
                → Documentation POST (MDN)
              </a>
            </p>
          </div>
        </div>
        
        <div class="subsection">
          <div class="subsection-title">Exemple de requête</div>
          <div class="code-block">
            <pre><span class="code-keyword">fetch</span>(<span class="code-string">'http://localhost:5000/api/form'</span>, {
  <span class="code-keyword">method</span>: <span class="code-string">'POST'</span>,
  <span class="code-keyword">headers</span>: {
    <span class="code-string">'Content-Type'</span>: <span class="code-string">'application/json'</span>
  },
  <span class="code-keyword">body</span>: <span class="code-keyword">JSON</span>.<span class="code-keyword">stringify</span>({
    <span class="code-keyword">nom</span>: <span class="code-string">'Dupont'</span>,
    <span class="code-keyword">email</span>: <span class="code-string">'dupont@example.com'</span>,
    <span class="code-keyword">message</span>: <span class="code-string">'Votre message ici'</span>
  })
})
  .<span class="code-keyword">then</span>(response => response.<span class="code-keyword">text</span>())
  .<span class="code-keyword">then</span>(data => <span class="code-keyword">console</span>.<span class="code-keyword">log</span>(data));</pre>
          </div>
          <p style="margin-top: 12px; font-size: 0.9em; color: #64748b;">
            <a href="/docs/examples" style="color: #667eea;">
              → Voir plus d'exemples avec POST
            </a>
          </p>
        </div>
        
        <div class="subsection">
          <div class="subsection-title">Réponse (200 OK)</div>
          <div class="response-example">
            <pre>"POST request to the homepage"</pre>
          </div>
        </div>
        
        <div class="test-section">
          <div class="subsection-title">🧪 Tester l'endpoint</div>
          <p style="color: #64748b; margin-bottom: 16px;">Testez l'envoi d'un formulaire avec des données JSON.</p>
          <label class="test-label">Données JSON à envoyer :</label>
          <textarea id="form-data-input" class="test-input" rows="6" placeholder='{"nom":"Dupont","email":"dupont@example.com","message":"Votre message ici"}'>{
  "nom": "Dupont",
  "email": "dupont@example.com",
  "message": "Votre message ici"
}</textarea>
          <button class="test-button" onclick="testEndpoint('POST', '/api/form', document.getElementById('form-data-input').value, 'test-result-form')">
            Tester POST /api/form
          </button>
          <div id="test-result-form" class="test-result"></div>
        </div>
      </div>
    </section>
  `;
  
  return getBaseLayout('POST /api/form', content, 'endpoint-form');
}

