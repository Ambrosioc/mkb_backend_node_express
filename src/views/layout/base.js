import { getSidebar } from '../components/sidebar.js';

export function getBaseLayout(title, content, currentSection = 'introduction') {
  return `
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title} - API MKB-Automobile</title>
  <link rel="stylesheet" href="/css/styles.css">
</head>
<body>
  <button class="mobile-menu-toggle" onclick="toggleSidebar()">☰</button>
  
  ${getSidebar(currentSection)}
  
  <main class="main-content">
    <div class="content-header">
      <h2 id="page-title">${title}</h2>
    </div>
    
    <div class="content-body">
      ${content}
    </div>
  </main>
  
  <script src="/js/common.js"></script>
</body>
</html>
  `;
}

