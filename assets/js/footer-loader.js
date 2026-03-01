// Footer Loader Script
// Dynamically loads the shared footer component into pages

(function() {
  'use strict';

  function loadFooter() {
    const footerContainer = document.getElementById('footer-container');
    if (!footerContainer) return;

    // Determine the correct path to footer.html based on page depth
    const depth = footerContainer.getAttribute('data-depth') || '0';
    const prefix = depth === '1' ? '../' : '';
    const footerPath = prefix + 'footer.html';

    fetch(footerPath)
      .then(response => {
        if (!response.ok) throw new Error('Footer not found');
        return response.text();
      })
      .then(html => {
        footerContainer.innerHTML = html;
      })
      .catch(error => {
        console.error('Error loading footer:', error);
      });
  }

  // Load footer when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadFooter);
  } else {
    loadFooter();
  }
})();
