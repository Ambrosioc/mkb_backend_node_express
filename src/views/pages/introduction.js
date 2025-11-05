import { getBaseLayout } from '../layout/base.js';

export function getIntroductionPage() {
  const content = `
    <section id="introduction" class="section">
      <h1 class="section-title">Introduction</h1>
      <div class="section-description">
        <p>Bienvenue dans la documentation de l'API MKB-Automobile. Cette API REST permet de gérer et récupérer des données automobiles depuis différentes sources externes.</p>
        <p style="margin-top: 16px;">L'API utilise Express.js et supporte les requêtes CORS pour une intégration facile avec vos applications frontend.</p>
        <p style="margin-top: 16px;">
          <a href="/docs/resources" style="color: #667eea; text-decoration: none;">
            📚 Découvrir les ressources et outils utiles →
          </a>
        </p>
      </div>
      
      <div class="info-box">
        <p><strong>Base URL:</strong> <code>http://localhost:5000</code></p>
        <p style="margin-top: 8px;"><strong>Format de réponse:</strong> JSON (sauf indication contraire)</p>
        <p style="margin-top: 8px;">
          <a href="https://developer.mozilla.org/fr/docs/Glossary/REST" target="_blank" style="color: #667eea; font-size: 0.9em;">
            → Qu'est-ce qu'une API REST ? (MDN)
          </a>
        </p>
      </div>
      
      <div class="endpoint-card" style="margin-top: 24px;">
        <div class="subsection-title">🚀 Démarrage rapide</div>
        <div class="subsection">
          <p style="margin-bottom: 12px;">Pour commencer à utiliser l'API :</p>
          <ol style="padding-left: 20px; line-height: 1.8;">
            <li>Consultez la section <a href="/docs/endpoint/cars" style="color: #667eea;">Endpoints</a> pour voir les routes disponibles</li>
            <li>Testez les endpoints avec les exemples fournis dans la section <a href="/docs/examples" style="color: #667eea;">Exemples</a></li>
            <li>Consultez les <a href="/docs/errors" style="color: #667eea;">Codes d'erreur</a> pour comprendre les réponses</li>
            <li>Explorez les <a href="/docs/resources" style="color: #667eea;">Ressources</a> pour des outils et tutoriels</li>
          </ol>
        </div>
      </div>
    </section>
  `;
  
  return getBaseLayout('Introduction', content, 'introduction');
}

