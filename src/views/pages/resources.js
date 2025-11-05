import { getBaseLayout } from '../layout/base.js';

export function getResourcesPage() {
  const content = `
    <section id="resources" class="section">
      <h1 class="section-title">Ressources et liens utiles</h1>
      <div class="section-description">
        <p>Voici une collection de ressources utiles pour travailler avec cette API et les APIs REST en général.</p>
      </div>
      
      <div class="endpoint-card">
        <div class="subsection-title">📚 Documentation et guides</div>
        <div class="subsection">
          <p style="margin-bottom: 8px;"><strong>REST API</strong></p>
          <ul style="list-style: none; padding-left: 0; margin: 8px 0;">
            <li style="margin: 6px 0;">
              <a href="https://developer.mozilla.org/fr/docs/Glossary/REST" target="_blank" style="color: #667eea; text-decoration: none;">
                → Qu'est-ce qu'une API REST ? (MDN)
              </a>
            </li>
            <li style="margin: 6px 0;">
              <a href="https://restfulapi.net/" target="_blank" style="color: #667eea; text-decoration: none;">
                → REST API Tutorial
              </a>
            </li>
            <li style="margin: 6px 0;">
              <a href="https://developer.mozilla.org/fr/docs/Web/HTTP/Methods" target="_blank" style="color: #667eea; text-decoration: none;">
                → Méthodes HTTP (GET, POST, PUT, DELETE)
              </a>
            </li>
          </ul>
        </div>
        
        <div class="subsection">
          <p style="margin-bottom: 8px;"><strong>JSON</strong></p>
          <ul style="list-style: none; padding-left: 0; margin: 8px 0;">
            <li style="margin: 6px 0;">
              <a href="https://developer.mozilla.org/fr/docs/Learn/JavaScript/Objects/JSON" target="_blank" style="color: #667eea; text-decoration: none;">
                → Introduction à JSON (MDN)
              </a>
            </li>
            <li style="margin: 6px 0;">
              <a href="https://www.json.org/json-fr.html" target="_blank" style="color: #667eea; text-decoration: none;">
                → Spécification JSON officielle
              </a>
            </li>
          </ul>
        </div>
        
        <div class="subsection">
          <p style="margin-bottom: 8px;"><strong>Express.js</strong></p>
          <ul style="list-style: none; padding-left: 0; margin: 8px 0;">
            <li style="margin: 6px 0;">
              <a href="https://expressjs.com/" target="_blank" style="color: #667eea; text-decoration: none;">
                → Documentation Express.js officielle
              </a>
            </li>
            <li style="margin: 6px 0;">
              <a href="https://expressjs.com/fr/guide/routing.html" target="_blank" style="color: #667eea; text-decoration: none;">
                → Guide de routage Express.js
              </a>
            </li>
          </ul>
        </div>
      </div>
      
      <div class="endpoint-card">
        <div class="subsection-title">🛠️ Outils de test d'API</div>
        <div class="subsection">
          <p style="margin-bottom: 8px;"><strong>Clients HTTP</strong></p>
          <ul style="list-style: none; padding-left: 0; margin: 8px 0;">
            <li style="margin: 6px 0;">
              <a href="https://www.postman.com/" target="_blank" style="color: #667eea; text-decoration: none;">
                → Postman - Client API complet
              </a>
            </li>
            <li style="margin: 6px 0;">
              <a href="https://httpie.io/" target="_blank" style="color: #667eea; text-decoration: none;">
                → HTTPie - Client HTTP en ligne de commande
              </a>
            </li>
            <li style="margin: 6px 0;">
              <a href="https://curl.se/" target="_blank" style="color: #667eea; text-decoration: none;">
                → cURL - Outil en ligne de commande
              </a>
            </li>
          </ul>
        </div>
        
        <div class="subsection">
          <p style="margin-bottom: 8px;"><strong>Test dans le navigateur</strong></p>
          <ul style="list-style: none; padding-left: 0; margin: 8px 0;">
            <li style="margin: 6px 0;">
              <a href="https://developer.mozilla.org/fr/docs/Web/API/Fetch_API" target="_blank" style="color: #667eea; text-decoration: none;">
                → Fetch API (MDN)
              </a>
            </li>
            <li style="margin: 6px 0;">
              <a href="https://developer.mozilla.org/fr/docs/Web/API/XMLHttpRequest" target="_blank" style="color: #667eea; text-decoration: none;">
                → XMLHttpRequest (MDN)
              </a>
            </li>
          </ul>
        </div>
      </div>
      
      <div class="endpoint-card">
        <div class="subsection-title">🔗 Liens du projet</div>
        <div class="subsection">
          <ul style="list-style: none; padding-left: 0; margin: 8px 0;">
            <li style="margin: 6px 0;">
              <a href="https://github.com/mkb-automobile/mkb-backend" target="_blank" style="color: #667eea; text-decoration: none;">
                → 📦 Code source sur GitHub
              </a>
            </li>
            <li style="margin: 6px 0;">
              <a href="https://nodejs.org/" target="_blank" style="color: #667eea; text-decoration: none;">
                → Node.js - Runtime JavaScript
              </a>
            </li>
            <li style="margin: 6px 0;">
              <a href="https://www.npmjs.com/" target="_blank" style="color: #667eea; text-decoration: none;">
                → npm - Gestionnaire de paquets
              </a>
            </li>
          </ul>
        </div>
      </div>
      
      <div class="endpoint-card">
        <div class="subsection-title">📖 Tutoriels et apprentissage</div>
        <div class="subsection">
          <ul style="list-style: none; padding-left: 0; margin: 8px 0;">
            <li style="margin: 6px 0;">
              <a href="https://developer.mozilla.org/fr/docs/Web/API/Fetch_API/Using_Fetch" target="_blank" style="color: #667eea; text-decoration: none;">
                → Utiliser l'API Fetch (MDN)
              </a>
            </li>
            <li style="margin: 6px 0;">
              <a href="https://javascript.info/fetch" target="_blank" style="color: #667eea; text-decoration: none;">
                → Fetch API Tutorial (JavaScript.info)
              </a>
            </li>
            <li style="margin: 6px 0;">
              <a href="https://expressjs.com/fr/starter/installing.html" target="_blank" style="color: #667eea; text-decoration: none;">
                → Guide de démarrage Express.js
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  `;
  
  return getBaseLayout('Liens utiles', content, 'resources');
}

