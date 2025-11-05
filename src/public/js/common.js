function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  if (sidebar) {
    sidebar.classList.toggle('open');
  }
}

document.addEventListener('DOMContentLoaded', function() {
  document.addEventListener('click', function(event) {
    const sidebar = document.getElementById('sidebar');
    const toggle = document.querySelector('.mobile-menu-toggle');
    
    if (window.innerWidth <= 768 && 
        sidebar && sidebar.classList.contains('open') &&
        !sidebar.contains(event.target) &&
        toggle && !toggle.contains(event.target)) {
      sidebar.classList.remove('open');
    }
  });
});

async function testEndpoint(method, path, bodyData, resultId) {
  const resultDiv = document.getElementById(resultId);
  if (!resultDiv) return;
  
  const button = event.target;
  const originalText = button.textContent;
  
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
    
    let formattedResponse;
    if (typeof responseData === 'object') {
      formattedResponse = JSON.stringify(responseData, null, 2);
    } else {
      formattedResponse = responseData;
    }
    
    resultDiv.className = 'test-result success';
    resultDiv.innerHTML = `
      <div class="test-result-header">
        <span>✅ Succès</span>
        <span style="font-size: 0.85em; font-weight: normal; color: #64748b;">
          (Status: ${response.status} ${response.statusText} | Temps: ${duration}ms)
        </span>
      </div>
      <div class="test-result-content">${formattedResponse}</div>
    `;
    resultDiv.style.display = 'block';
    
    resultDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    
  } catch (error) {
    resultDiv.className = 'test-result error';
    resultDiv.innerHTML = `
      <div class="test-result-header">
        <span>❌ Erreur</span>
      </div>
      <div class="test-result-content">${error.message || 'Une erreur est survenue lors de la requête'}</div>
    `;
    resultDiv.style.display = 'block';
    
    resultDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  } finally {
    button.disabled = false;
    button.textContent = originalText;
  }
}

