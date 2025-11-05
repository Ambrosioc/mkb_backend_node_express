import { getBaseLayout } from '../layout/base.js';

export function getErrorsPage() {
  const content = `
    <section id="errors" class="section">
      <h1 class="section-title">Codes d'erreur HTTP</h1>
      <div class="section-description">
        <p>L'API utilise les codes de statut HTTP standard pour indiquer le succès ou l'échec d'une requête.</p>
        <p style="margin-top: 12px;">
          <a href="https://developer.mozilla.org/fr/docs/Web/HTTP/Status" target="_blank" style="color: #667eea; text-decoration: none;">
            📚 En savoir plus sur les codes HTTP →
          </a>
        </p>
      </div>
      
      <div class="endpoint-card">
        <div class="subsection">
          <div class="subsection-title">200 OK</div>
          <p>La requête a réussi. Les données demandées sont retournées dans la réponse.</p>
          <p style="margin-top: 8px; font-size: 0.9em; color: #64748b;">
            <a href="https://developer.mozilla.org/fr/docs/Web/HTTP/Status/200" target="_blank" style="color: #667eea;">Documentation MDN →</a>
          </p>
        </div>
        
        <div class="subsection">
          <div class="subsection-title">400 Bad Request</div>
          <p>La requête est mal formée ou contient des paramètres invalides.</p>
          <p style="margin-top: 8px; font-size: 0.9em; color: #64748b;">
            <a href="https://developer.mozilla.org/fr/docs/Web/HTTP/Status/400" target="_blank" style="color: #667eea;">Documentation MDN →</a>
          </p>
        </div>
        
        <div class="subsection">
          <div class="subsection-title">404 Not Found</div>
          <p>La ressource demandée n'a pas été trouvée.</p>
          <p style="margin-top: 8px; font-size: 0.9em; color: #64748b;">
            <a href="https://developer.mozilla.org/fr/docs/Web/HTTP/Status/404" target="_blank" style="color: #667eea;">Documentation MDN →</a>
          </p>
        </div>
        
        <div class="subsection">
          <div class="subsection-title">500 Internal Server Error</div>
          <p>Une erreur serveur s'est produite. Cela peut être dû à un problème avec l'API externe ou à une erreur de traitement des données.</p>
          <p style="margin-top: 8px; font-size: 0.9em; color: #64748b;">
            <a href="https://developer.mozilla.org/fr/docs/Web/HTTP/Status/500" target="_blank" style="color: #667eea;">Documentation MDN →</a>
          </p>
        </div>
        
        <div class="subsection">
          <div class="subsection-title">502 Bad Gateway</div>
          <p>Erreur de communication avec l'API externe (SpiderVo).</p>
          <p style="margin-top: 8px; font-size: 0.9em; color: #64748b;">
            <a href="https://developer.mozilla.org/fr/docs/Web/HTTP/Status/502" target="_blank" style="color: #667eea;">Documentation MDN →</a>
          </p>
        </div>
        
        <div class="subsection">
          <div class="subsection-title">503 Service Unavailable</div>
          <p>Le service est temporairement indisponible ou mal configuré.</p>
          <p style="margin-top: 8px; font-size: 0.9em; color: #64748b;">
            <a href="https://developer.mozilla.org/fr/docs/Web/HTTP/Status/503" target="_blank" style="color: #667eea;">Documentation MDN →</a>
          </p>
        </div>
      </div>
    </section>
  `;
  
  return getBaseLayout('Codes d\'erreur', content, 'errors');
}

