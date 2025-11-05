import { getBaseLayout } from '../layout/base.js';

export function getExamplesPage() {
  const content = `
    <section id="examples" class="section">
      <h1 class="section-title">Exemples d'utilisation</h1>
      <div class="section-description">
        <p>Voici quelques exemples pratiques d'utilisation de l'API avec différents langages et frameworks.</p>
        <p style="margin-top: 12px;">
          <a href="/docs/resources" style="color: #667eea; text-decoration: none;">
            📚 Trouver plus d'outils et tutoriels →
          </a>
        </p>
      </div>
      
      <div class="endpoint-card">
        <div class="subsection-title">JavaScript / Fetch API</div>
        <div class="code-block">
          <pre><span class="code-comment">// Récupérer les données des voitures</span>
<span class="code-keyword">const</span> getCars = <span class="code-keyword">async</span> () => {
  <span class="code-keyword">try</span> {
    <span class="code-keyword">const</span> response = <span class="code-keyword">await</span> <span class="code-keyword">fetch</span>(<span class="code-string">'http://localhost:5000/api'</span>);
    <span class="code-keyword">const</span> cars = <span class="code-keyword">await</span> response.<span class="code-keyword">json</span>();
    <span class="code-keyword">console</span>.<span class="code-keyword">log</span>(cars);
  } <span class="code-keyword">catch</span> (error) {
    <span class="code-keyword">console</span>.<span class="code-keyword">error</span>(<span class="code-string">'Erreur:'</span>, error);
  }
};</pre>
        </div>
        <p style="margin-top: 12px; font-size: 0.9em; color: #64748b;">
          <a href="https://developer.mozilla.org/fr/docs/Web/API/Fetch_API/Using_Fetch" target="_blank" style="color: #667eea;">
            → Guide complet Fetch API (MDN)
          </a> |
          <a href="https://javascript.info/fetch" target="_blank" style="color: #667eea;">
            → Tutoriel JavaScript.info
          </a>
        </p>
      </div>
      
      <div class="endpoint-card">
        <div class="subsection-title">cURL</div>
        <div class="code-block">
          <pre><span class="code-comment"># Récupérer les données des voitures</span>
curl -X GET http://localhost:5000/api

<span class="code-comment"># Soumettre un formulaire</span>
curl -X POST http://localhost:5000/api/form \\
  -H "Content-Type: application/json" \\
  -d '{"nom":"Dupont","email":"dupont@example.com"}'</pre>
        </div>
        <p style="margin-top: 12px; font-size: 0.9em; color: #64748b;">
          <a href="https://curl.se/docs/" target="_blank" style="color: #667eea;">
            → Documentation cURL
          </a> |
          <a href="https://httpie.io/" target="_blank" style="color: #667eea;">
            → Alternative moderne : HTTPie
          </a>
        </p>
      </div>
      
      <div class="endpoint-card">
        <div class="subsection-title">Postman</div>
        <div class="subsection">
          <p>Pour tester l'API avec un outil graphique :</p>
          <ul style="list-style: none; padding-left: 0; margin: 12px 0;">
            <li style="margin: 8px 0;">
              <a href="https://www.postman.com/" target="_blank" style="color: #667eea; text-decoration: none;">
                → 📬 Télécharger Postman
              </a>
            </li>
          </ul>
          <p style="margin-top: 12px; font-size: 0.9em; color: #64748b;">
            Importez les endpoints dans cet outil pour tester facilement l'API.
          </p>
        </div>
      </div>
    </section>
  `;
  
  return getBaseLayout('Exemples', content, 'examples');
}

