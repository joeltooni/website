// Header Loader Script
// Dynamically loads the shared header component into pages

(function() {
  'use strict';

  function loadHeader() {
    const headerContainer = document.getElementById('header-container');
    if (!headerContainer) return;

    // Determine the correct path based on page depth
    const depth = headerContainer.getAttribute('data-depth') || '0';
    const prefix = depth === '1' ? '../' : '';
    const headerPath = prefix + 'header.html';

    fetch(headerPath)
      .then(response => {
        if (!response.ok) throw new Error('Header not found');
        return response.text();
      })
      .then(html => {
        // Replace {BASE} placeholder with correct path prefix
        html = html.replace(/\{BASE\}/g, prefix);
        headerContainer.innerHTML = html;
        
        // Set active nav item based on current page
        setActiveNavItem(prefix);
        
        // Initialize mobile menu and theme toggle after header loads
        initializeHeader();
      })
      .catch(error => {
        console.error('Error loading header:', error);
      });
  }

  function setActiveNavItem(prefix) {
    // Get current page name from URL
    const path = window.location.pathname;
    const pageName = path.split('/').pop().replace('.html', '') || 'home';
    
    // Find and mark the active nav item
    const navItems = document.querySelectorAll('.nav-item[data-page]');
    navItems.forEach(item => {
      if (item.getAttribute('data-page') === pageName) {
        item.classList.add('active');
      }
    });
  }

  function initializeHeader() {
    // Mobile menu toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuBtn && mobileMenu) {
      mobileMenuBtn.addEventListener('click', function() {
        mobileMenu.classList.toggle('active');
      });
    }

    // Theme toggle functionality
    const themeToggle = document.getElementById('checkbox');
    if (themeToggle) {
      // Set initial state based on current theme
      if (localStorage.getItem('theme') === 'dark' || document.documentElement.classList.contains('dark')) {
        themeToggle.checked = true;
      }

      themeToggle.addEventListener('change', function() {
        if (this.checked) {
          document.documentElement.classList.add('dark');
          localStorage.setItem('theme', 'dark');
        } else {
          document.documentElement.classList.remove('dark');
          localStorage.setItem('theme', 'light');
        }
      });
    }
  }

  // Load header when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadHeader);
  } else {
    loadHeader();
  }
})();
