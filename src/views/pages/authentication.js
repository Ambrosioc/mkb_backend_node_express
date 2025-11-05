import { getBaseLayout } from '../layout/base.js';

export function getAuthenticationPage() {
  const content = `
    <section id="authentication" class="section">
      <h1 class="section-title">Authentification</h1>
      <div class="section-description">
        <p>Actuellement, l'API ne nécessite pas d'authentification pour accéder aux endpoints publics. Les futures versions pourront inclure un système d'authentification JWT ou API Key.</p>
      </div>
      
      <div class="endpoint-card">
        <div class="subsection-title">État actuel</div>
        <div class="subsection">
          <p>Tous les endpoints sont actuellement accessibles sans authentification. Cela permet une utilisation simple et rapide de l'API pour le développement et les tests.</p>
        </div>
      </div>
      
      <div class="endpoint-card">
        <div class="subsection-title">Futures améliorations</div>
        <div class="subsection">
          <p>Les prochaines versions de l'API pourront inclure :</p>
          <ul style="padding-left: 20px; margin-top: 12px; line-height: 1.8;">
            <li>Authentification par API Key</li>
            <li>JWT (JSON Web Tokens) pour les sessions utilisateur</li>
            <li>OAuth 2.0 pour l'authentification tierce</li>
            <li>Rate limiting basé sur les clés API</li>
          </ul>
        </div>
      </div>
    </section>
  `;
  
  return getBaseLayout('Authentification', content, 'authentication');
}

