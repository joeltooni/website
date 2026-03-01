// Shared Theme Initialization
// This script runs immediately to prevent flash of incorrect theme

(function() {
  'use strict';
  
  // Initialize theme based on localStorage or system preference
  function initializeTheme() {
    const theme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (theme === 'dark' || (!theme && prefersDark)) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }
  
  // Run immediately
  initializeTheme();
  
  // Re-run when storage changes (for cross-tab sync)
  window.addEventListener('storage', function(e) {
    if (e.key === 'theme') {
      initializeTheme();
    }
  });
})();
