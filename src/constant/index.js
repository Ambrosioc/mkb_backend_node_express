const apiInfo = `
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>API MKB-Automobile - Documentation</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
      background: #f8fafc;
      color: #1e293b;
      display: flex;
      min-height: 100vh;
    }
    
    /* Sidebar */
    .sidebar {
      width: 280px;
      background: linear-gradient(180deg, #1e293b 0%, #0f172a 100%);
      color: white;
      position: fixed;
      height: 100vh;
      overflow-y: auto;
      z-index: 100;
      box-shadow: 2px 0 10px rgba(0,0,0,0.1);
    }
    
    .sidebar-header {
      padding: 24px 20px;
      border-bottom: 1px solid rgba(255,255,255,0.1);
    }
    
    .sidebar-header h1 {
      font-size: 1.5em;
      margin-bottom: 8px;
      display: flex;
      align-items: center;
      gap: 10px;
    }
    
    .sidebar-header p {
      font-size: 0.85em;
      opacity: 0.8;
      color: #cbd5e1;
    }
    
    .nav-section {
      padding: 16px 0;
      border-bottom: 1px solid rgba(255,255,255,0.1);
    }
    
    .nav-section-title {
      padding: 8px 20px;
      font-size: 0.75em;
      text-transform: uppercase;
      letter-spacing: 1px;
      color: #94a3b8;
      font-weight: 600;
    }
    
    .nav-item {
      display: block;
      padding: 12px 20px;
      color: #cbd5e1;
      text-decoration: none;
      transition: all 0.2s;
      cursor: pointer;
      border-left: 3px solid transparent;
    }
    
    .nav-item:hover {
      background: rgba(255,255,255,0.05);
      color: white;
      border-left-color: #667eea;
    }
    
    .nav-item.active {
      background: rgba(102, 126, 234, 0.2);
      color: white;
      border-left-color: #667eea;
      font-weight: 500;
    }
    
    /* Main Content */
    .main-content {
      margin-left: 280px;
      flex: 1;
      padding: 0;
    }
    
    .content-header {
      background: white;
      border-bottom: 1px solid #e2e8f0;
      padding: 24px 40px;
      position: sticky;
      top: 0;
      z-index: 10;
      box-shadow: 0 1px 3px rgba(0,0,0,0.05);
    }
    
    .content-header h2 {
      font-size: 2em;
      color: #1e293b;
    }
    
    .content-body {
      padding: 40px;
      max-width: 900px;
    }
    
    .section {
      margin-bottom: 48px;
      scroll-margin-top: 100px;
    }
    
    .section-title {
      font-size: 1.75em;
      color: #1e293b;
      margin-bottom: 16px;
      padding-bottom: 12px;
      border-bottom: 2px solid #e2e8f0;
    }
    
    .section-description {
      color: #64748b;
      line-height: 1.7;
      margin-bottom: 24px;
      font-size: 1.05em;
    }
    
    /* Endpoint Card */
    .endpoint-card {
      background: white;
      border: 1px solid #e2e8f0;
      border-radius: 12px;
      padding: 24px;
      margin-bottom: 32px;
      box-shadow: 0 1px 3px rgba(0,0,0,0.05);
      transition: box-shadow 0.2s;
    }
    
    .endpoint-card:hover {
      box-shadow: 0 4px 12px rgba(0,0,0,0.1);
    }
    
    .endpoint-header {
      display: flex;
      align-items: center;
      gap: 12px;
      margin-bottom: 16px;
    }
    
    .method-badge {
      padding: 6px 12px;
      border-radius: 6px;
      font-weight: 600;
      font-size: 0.85em;
      letter-spacing: 0.5px;
    }
    
    .method-badge.get {
      background: #10b981;
      color: white;
    }
    
    .method-badge.post {
      background: #3b82f6;
      color: white;
    }
    
    .method-badge.put {
      background: #f59e0b;
      color: white;
    }
    
    .method-badge.delete {
      background: #ef4444;
      color: white;
    }
    
    .endpoint-path {
      font-family: 'Courier New', monospace;
      font-size: 1.1em;
      color: #1e293b;
      font-weight: 600;
    }
    
    .endpoint-description {
      color: #64748b;
      line-height: 1.7;
      margin-bottom: 20px;
    }
    
    .subsection {
      margin-top: 24px;
      padding-top: 24px;
      border-top: 1px solid #e2e8f0;
    }
    
    .subsection-title {
      font-size: 1.1em;
      color: #334155;
      margin-bottom: 12px;
      font-weight: 600;
    }
    
    /* Code Blocks */
    .code-block {
      background: #1e293b;
      color: #e2e8f0;
      padding: 20px;
      border-radius: 8px;
      overflow-x: auto;
      font-family: 'Courier New', monospace;
      font-size: 0.9em;
      line-height: 1.6;
      margin: 16px 0;
    }
    
    .code-block pre {
      margin: 0;
      white-space: pre-wrap;
    }
    
    .code-keyword {
      color: #10b981;
    }
    
    .code-string {
      color: #3b82f6;
    }
    
    .code-comment {
      color: #64748b;
    }
    
    /* Info Boxes */
    .info-box {
      background: #f1f5f9;
      border-left: 4px solid #667eea;
      padding: 16px 20px;
      border-radius: 8px;
      margin: 20px 0;
    }
    
    .info-box strong {
      color: #1e293b;
    }
    
    .info-box p {
      margin: 0;
      color: #475569;
    }
    
    /* Response Example */
    .response-example {
      background: #f8fafc;
      border: 1px solid #e2e8f0;
      border-radius: 8px;
      padding: 20px;
      margin-top: 16px;
    }
    
    .response-example pre {
      margin: 0;
      font-family: 'Courier New', monospace;
      font-size: 0.9em;
      color: #1e293b;
      overflow-x: auto;
    }
    
    /* Test Interface */
    .test-section {
      margin-top: 32px;
      padding-top: 24px;
      border-top: 2px solid #e2e8f0;
    }
    
    .test-button {
      background: #667eea;
      color: white;
      border: none;
      padding: 12px 24px;
      border-radius: 8px;
      font-size: 1em;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s;
      margin-top: 16px;
    }
    
    .test-button:hover {
      background: #5568d3;
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
    }
    
    .test-button:disabled {
      background: #94a3b8;
      cursor: not-allowed;
      transform: none;
    }
    
    .test-result {
      margin-top: 20px;
      padding: 20px;
      border-radius: 8px;
      display: none;
    }
    
    .test-result.success {
      background: #f0fdf4;
      border: 1px solid #10b981;
    }
    
    .test-result.error {
      background: #fef2f2;
      border: 1px solid #ef4444;
    }
    
    .test-result-header {
      display: flex;
      align-items: center;
      gap: 8px;
      margin-bottom: 12px;
      font-weight: 600;
    }
    
    .test-result.success .test-result-header {
      color: #065f46;
    }
    
    .test-result.error .test-result-header {
      color: #991b1b;
    }
    
    .test-result-content {
      max-height: 400px;
      overflow-y: auto;
      font-family: 'Courier New', monospace;
      font-size: 0.9em;
      white-space: pre-wrap;
      word-break: break-word;
      background: white;
      padding: 16px;
      border-radius: 6px;
      border: 1px solid #e2e8f0;
    }
    
    .test-loading {
      display: inline-block;
      width: 16px;
      height: 16px;
      border: 2px solid #f3f4f6;
      border-top-color: #667eea;
      border-radius: 50%;
      animation: spin 0.8s linear infinite;
      margin-left: 8px;
    }
    
    @keyframes spin {
      to { transform: rotate(360deg); }
    }
    
    .test-input {
      width: 100%;
      padding: 12px;
      border: 1px solid #e2e8f0;
      border-radius: 6px;
      font-family: 'Courier New', monospace;
      font-size: 0.9em;
      margin-top: 8px;
      resize: vertical;
    }
    
    .test-input:focus {
      outline: none;
      border-color: #667eea;
      box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
    }
    
    .test-label {
      display: block;
      margin-top: 16px;
      margin-bottom: 8px;
      font-weight: 600;
      color: #334155;
    }
    
    /* Mobile Responsive */
    .mobile-menu-toggle {
      display: none;
      position: fixed;
      top: 20px;
      left: 20px;
      z-index: 101;
      background: #1e293b;
      color: white;
      border: none;
      padding: 12px;
      border-radius: 8px;
      cursor: pointer;
      font-size: 1.2em;
    }
    
    @media (max-width: 768px) {
      .sidebar {
        transform: translateX(-100%);
        transition: transform 0.3s;
      }
      
      .sidebar.open {
        transform: translateX(0);
      }
      
      .main-content {
        margin-left: 0;
      }
      
      .mobile-menu-toggle {
        display: block;
      }
      
      .content-body {
        padding: 24px 20px;
      }
      
      .content-header {
        padding: 20px;
      }
    }
  </style>
</head>
<body>
  <button class="mobile-menu-toggle" onclick="toggleSidebar()">☰</button>
  
  <!-- Sidebar -->
  <aside class="sidebar" id="sidebar">
    <div class="sidebar-header">
      <h1>🚗 MKB API</h1>
      <p>Documentation v1.0.0</p>
    </div>
    
    <nav>
      <div class="nav-section">
        <div class="nav-section-title">Général</div>
        <a href="#introduction" class="nav-item active" data-section="introduction">Introduction</a>
        <a href="#authentication" class="nav-item" data-section="authentication">Authentification</a>
      </div>
      
      <div class="nav-section">
        <div class="nav-section-title">Endpoints</div>
        <a href="#endpoint-home" class="nav-item" data-section="endpoint-home">GET /</a>
        <a href="#endpoint-cars" class="nav-item" data-section="endpoint-cars">GET /api</a>
        <a href="#endpoint-form" class="nav-item" data-section="endpoint-form">POST /api/form</a>
      </div>
      
      <div class="nav-section">
        <div class="nav-section-title">Ressources</div>
        <a href="#examples" class="nav-item" data-section="examples">Exemples</a>
        <a href="#errors" class="nav-item" data-section="errors">Codes d'erreur</a>
        <a href="#resources" class="nav-item" data-section="resources">Liens utiles</a>
      </div>
    </nav>
    
    <div style="padding: 20px; margin-top: auto; border-top: 1px solid rgba(255,255,255,0.1);">
      <p style="font-size: 0.85em; color: #94a3b8; margin-bottom: 12px;">Développé par</p>
      <p style="font-weight: 600; margin-bottom: 8px;">ACWeb Services</p>
      <a href="https://github.com/mkb-automobile/mkb-backend" target="_blank" style="color: #667eea; text-decoration: none; font-size: 0.9em;">📦 Voir sur GitHub</a>
    </div>
  </aside>
  
  <!-- Main Content -->
  <main class="main-content">
    <div class="content-header">
      <h2 id="page-title">Introduction</h2>
    </div>
    
    <div class="content-body">
      <!-- Introduction Section -->
      <section id="introduction" class="section">
        <h1 class="section-title">Introduction</h1>
        <div class="section-description">
          <p>Bienvenue dans la documentation de l'API MKB-Automobile. Cette API REST permet de gérer et récupérer des données automobiles depuis différentes sources externes.</p>
          <p style="margin-top: 16px;">L'API utilise Express.js et supporte les requêtes CORS pour une intégration facile avec vos applications frontend.</p>
          <p style="margin-top: 16px;">
            <a href="#resources" onclick="showSection('resources', event.target)" style="color: #667eea; text-decoration: none;">
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
              <li>Consultez la section <a href="#endpoint-cars" onclick="showSection('endpoint-cars', event.target)" style="color: #667eea;">Endpoints</a> pour voir les routes disponibles</li>
              <li>Testez les endpoints avec les exemples fournis dans la section <a href="#examples" onclick="showSection('examples', event.target)" style="color: #667eea;">Exemples</a></li>
              <li>Consultez les <a href="#errors" onclick="showSection('errors', event.target)" style="color: #667eea;">Codes d'erreur</a> pour comprendre les réponses</li>
              <li>Explorez les <a href="#resources" onclick="showSection('resources', event.target)" style="color: #667eea;">Ressources</a> pour des outils et tutoriels</li>
            </ol>
          </div>
        </div>
      </section>
      
      <!-- Authentication Section -->
      <section id="authentication" class="section" style="display: none;">
        <h1 class="section-title">Authentification</h1>
        <div class="section-description">
          <p>Actuellement, l'API ne nécessite pas d'authentification pour accéder aux endpoints publics. Les futures versions pourront inclure un système d'authentification JWT ou API Key.</p>
        </div>
      </section>
      
      <!-- GET / Endpoint -->
      <section id="endpoint-home" class="section" style="display: none;">
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
            <button class="test-button" onclick="testEndpoint('GET', '/', null)">
              Tester GET /
            </button>
            <div id="test-result-home" class="test-result"></div>
          </div>
        </div>
      </section>
      
      <!-- GET /api Endpoint -->
      <section id="endpoint-cars" class="section" style="display: none;">
        <h1 class="section-title">GET /api</h1>
        <div class="section-description">
          <p>Récupère les données des voitures depuis les sources externes (API SpiderVo). Les données sont converties de XML en JSON pour une utilisation plus facile.</p>
          <p style="margin-top: 12px;">
            <a href="#resources" onclick="showSection('resources', event.target)" style="color: #667eea; text-decoration: none;">
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
    "prix": "25000",
    // ... autres propriétés
  },
  // ... autres véhicules
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
              <a href="#examples" onclick="showSection('examples', event.target)" style="color: #667eea; text-decoration: none;">
                → Voir plus d'exemples d'utilisation
              </a>
            </p>
          </div>
          
          <div class="test-section">
            <div class="subsection-title">🧪 Tester l'endpoint</div>
            <p style="color: #64748b; margin-bottom: 16px;">Cliquez sur le bouton pour récupérer les données des voitures.</p>
            <button class="test-button" onclick="testEndpoint('GET', '/api', null)">
              Tester GET /api
            </button>
            <div id="test-result-cars" class="test-result"></div>
          </div>
        </div>
      </section>
      
      <!-- POST /api/form Endpoint -->
      <section id="endpoint-form" class="section" style="display: none;">
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
              <a href="#examples" onclick="showSection('examples', event.target)" style="color: #667eea;">
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
            <button class="test-button" onclick="testEndpoint('POST', '/api/form', document.getElementById('form-data-input').value)">
              Tester POST /api/form
            </button>
            <div id="test-result-form" class="test-result"></div>
          </div>
        </div>
      </section>
      
      <!-- Examples Section -->
      <section id="examples" class="section" style="display: none;">
        <h1 class="section-title">Exemples d'utilisation</h1>
        <div class="section-description">
          <p>Voici quelques exemples pratiques d'utilisation de l'API avec différents langages et frameworks.</p>
          <p style="margin-top: 12px;">
            <a href="#resources" onclick="showSection('resources', event.target)" style="color: #667eea; text-decoration: none;">
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
          <div class="subsection-title">Postman / Insomnia</div>
          <div class="subsection">
            <p>Pour tester l'API avec des outils graphiques :</p>
            <ul style="list-style: none; padding-left: 0; margin: 12px 0;">
              <li style="margin: 8px 0;">
                <a href="https://www.postman.com/" target="_blank" style="color: #667eea; text-decoration: none;">
                  → 📬 Télécharger Postman
                </a>
              </li>
              <li style="margin: 8px 0;">
                <a href="https://insomnia.rest/" target="_blank" style="color: #667eea; text-decoration: none;">
                  → 🔌 Télécharger Insomnia
                </a>
              </li>
            </ul>
            <p style="margin-top: 12px; font-size: 0.9em; color: #64748b;">
              Importez les endpoints dans ces outils pour tester facilement l'API.
            </p>
          </div>
        </div>
      </section>
      
      <!-- Errors Section -->
      <section id="errors" class="section" style="display: none;">
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
      
      <!-- Resources Section -->
      <section id="resources" class="section" style="display: none;">
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
                <a href="https://insomnia.rest/" target="_blank" style="color: #667eea; text-decoration: none;">
                  → Insomnia - Alternative à Postman
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
    </div>
  </main>
  
  <script>
    function showSection(sectionId, clickedElement) {
      // Hide all sections
      const sections = document.querySelectorAll('.section');
      sections.forEach(section => {
        section.style.display = 'none';
      });
      
      // Show selected section
      const selectedSection = document.getElementById(sectionId);
      if (selectedSection) {
        selectedSection.style.display = 'block';
      }
      
      // Update active nav item
      const navItems = document.querySelectorAll('.nav-item');
      navItems.forEach(item => {
        item.classList.remove('active');
      });
      
      if (clickedElement) {
        clickedElement.classList.add('active');
      } else {
        const navItem = document.querySelector(\`[data-section="\${sectionId}"]\`);
        if (navItem) {
          navItem.classList.add('active');
        }
      }
      
      // Update page title
      const titleMap = {
        'introduction': 'Introduction',
        'authentication': 'Authentification',
        'endpoint-home': 'GET /',
        'endpoint-cars': 'GET /api',
        'endpoint-form': 'POST /api/form',
        'examples': 'Exemples',
        'errors': 'Codes d\'erreur',
        'resources': 'Liens utiles'
      };
      document.getElementById('page-title').textContent = titleMap[sectionId] || 'Documentation';
      
      // Update URL hash
      window.location.hash = sectionId;
      
      // Close mobile menu
      if (window.innerWidth <= 768) {
        document.getElementById('sidebar').classList.remove('open');
      }
      
      // Scroll to top
      window.scrollTo(0, 0);
      
      // Prevent default link behavior
      return false;
    }
    
    function toggleSidebar() {
      document.getElementById('sidebar').classList.toggle('open');
    }
    
    // Add event listeners to nav items
    document.addEventListener('DOMContentLoaded', function() {
      const navItems = document.querySelectorAll('.nav-item');
      navItems.forEach(item => {
        item.addEventListener('click', function(e) {
          e.preventDefault();
          const sectionId = this.getAttribute('data-section');
          if (sectionId) {
            showSection(sectionId, this);
          }
        });
      });
      
      // Handle hash navigation on page load and hash change
      function handleHashNavigation() {
        const hash = window.location.hash.substring(1);
        if (hash) {
          const navItem = document.querySelector(\`[data-section="\${hash}"]\`);
          if (navItem) {
            showSection(hash, navItem);
          }
        } else {
          // Default to introduction
          const introItem = document.querySelector('[data-section="introduction"]');
          if (introItem) {
            showSection('introduction', introItem);
          }
        }
      }
      
      // Initial load
      handleHashNavigation();
      
      // Hash change
      window.addEventListener('hashchange', handleHashNavigation);
    });
    
    // Close sidebar when clicking outside on mobile
    document.addEventListener('click', function(event) {
      const sidebar = document.getElementById('sidebar');
      const toggle = document.querySelector('.mobile-menu-toggle');
      
      if (window.innerWidth <= 768 && 
          sidebar.classList.contains('open') &&
          !sidebar.contains(event.target) &&
          !toggle.contains(event.target)) {
        sidebar.classList.remove('open');
      }
    });
    
    // Test endpoint function
    async function testEndpoint(method, path, bodyData) {
      const resultId = {
        'GET /': 'test-result-home',
        'GET /api': 'test-result-cars',
        'POST /api/form': 'test-result-form'
      }[method + ' ' + path];
      
      if (!resultId) return;
      
      const resultDiv = document.getElementById(resultId);
      const button = event.target;
      const originalText = button.textContent;
      
      // Show loading state
      button.disabled = true;
      button.innerHTML = 'Test en cours... <span class="test-loading"></span>';
      resultDiv.style.display = 'none';
      
      try {
        const baseUrl = window.location.origin;
        const url = baseUrl + path;
        
        const options = {
          method: method,
          headers: {
            'Content-Type': 'application/json'
          }
        };
        
        if (bodyData && method === 'POST') {
          try {
            // Validate JSON
            JSON.parse(bodyData);
            options.body = bodyData;
          } catch (e) {
            throw new Error('JSON invalide : ' + e.message);
          }
        }
        
        const startTime = Date.now();
        const response = await fetch(url, options);
        const endTime = Date.now();
        const duration = endTime - startTime;
        
        let responseData;
        const contentType = response.headers.get('content-type');
        
        if (contentType && contentType.includes('application/json')) {
          responseData = await response.json();
        } else {
          responseData = await response.text();
        }
        
        // Format response
        let formattedResponse;
        if (typeof responseData === 'object') {
          formattedResponse = JSON.stringify(responseData, null, 2);
        } else {
          formattedResponse = responseData;
        }
        
        // Show success result
        resultDiv.className = 'test-result success';
        resultDiv.innerHTML = \`
          <div class="test-result-header">
            <span>✅ Succès</span>
            <span style="font-size: 0.85em; font-weight: normal; color: #64748b;">
              (Status: \${response.status} \${response.statusText} | Temps: \${duration}ms)
            </span>
          </div>
          <div class="test-result-content">\${formattedResponse}</div>
        \`;
        resultDiv.style.display = 'block';
        
        // Scroll to result
        resultDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        
      } catch (error) {
        // Show error result
        resultDiv.className = 'test-result error';
        resultDiv.innerHTML = \`
          <div class="test-result-header">
            <span>❌ Erreur</span>
          </div>
          <div class="test-result-content">\${error.message || 'Une erreur est survenue lors de la requête'}</div>
        \`;
        resultDiv.style.display = 'block';
        
        // Scroll to result
        resultDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      } finally {
        // Restore button
        button.disabled = false;
        button.textContent = originalText;
      }
    }
  </script>
</body>
</html>
  `;

export default apiInfo;
