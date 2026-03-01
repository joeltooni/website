// SPA-like Page Router
// Intercepts internal navigation to swap only <main> content,
// keeping header and footer persistent across page transitions.

(function () {
  'use strict';

  // Only handle internal same-origin links
  function isInternalLink(anchor) {
    if (!anchor || !anchor.href) return false;
    if (anchor.target === '_blank') return false;
    if (anchor.hasAttribute('download')) return false;
    if (anchor.origin !== window.location.origin) return false;
    // Only handle .html pages (or root /)
    const pathname = anchor.pathname;
    if (pathname && !pathname.endsWith('.html') && pathname !== '/') return false;
    return true;
  }

  // Get the current page's base depth (0 = root, 1 = subdirectory)
  function getPageDepth(pathname) {
    const parts = pathname.split('/').filter(Boolean);
    // E.g. /research/indoor-exploration.html → depth 2, but we care about directory depth
    // If path has more than 1 part (dir + file), depth is 1+
    return parts.length > 1 ? 1 : 0;
  }

  // Fetch a page and extract its <main> content and <title>
  async function fetchPageContent(url) {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`Failed to fetch ${url}`);
    const html = await response.text();
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');

    const main = doc.querySelector('main');
    const title = doc.querySelector('title');
    // Extract any inline <script> tags inside <main> or after it (for page-specific JS)
    const scripts = doc.querySelectorAll('main script, main ~ script:not([src*="footer-loader"])');

    return {
      mainHTML: main ? main.innerHTML : null,
      title: title ? title.textContent : document.title,
      scripts: Array.from(scripts),
    };
  }

  // Update the active nav highlight
  function updateActiveNav() {
    const path = window.location.pathname;
    const pageName = path.split('/').pop().replace('.html', '') || 'home';

    document.querySelectorAll('.nav-item[data-page]').forEach((item) => {
      item.classList.toggle('active', item.getAttribute('data-page') === pageName);
    });

    // Also update mobile menu items
    document.querySelectorAll('.simple-menu-item').forEach((item) => {
      const href = item.getAttribute('href') || '';
      const linkPage = href.split('/').pop().replace('.html', '');
      if (linkPage === pageName) {
        item.style.background = 'rgba(255, 255, 255, 0.3)';
        item.style.color = '#ffffff';
      } else {
        item.style.background = '';
        item.style.color = '';
      }
    });

    // Close mobile menu after navigation
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenu) {
      mobileMenu.classList.remove('active');
    }
  }

  // Re-execute inline scripts that came with the new page content
  function executeScripts(scriptElements) {
    scriptElements.forEach((oldScript) => {
      // Only handle inline scripts (page-specific logic like sliders)
      if (oldScript.src) return;
      const newScript = document.createElement('script');
      newScript.textContent = oldScript.textContent;
      document.body.appendChild(newScript);
      // Clean up immediately
      document.body.removeChild(newScript);
    });
  }

  // Navigate to a new page via content swap
  async function navigateTo(url, pushState = true) {
    try {
      const { mainHTML, title, scripts } = await fetchPageContent(url);

      if (mainHTML === null) {
        // Fallback: full page load if no <main> found
        window.location.href = url;
        return;
      }

      // Swap content
      const main = document.querySelector('main');
      if (main) {
        main.innerHTML = mainHTML;
        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'instant' });
      }

      // Update title
      document.title = title;

      // Update URL
      if (pushState) {
        history.pushState({ url: url }, title, url);
      }

      // Update nav highlights
      updateActiveNav();

      // Execute any page-specific inline scripts
      executeScripts(scripts);
    } catch (error) {
      console.error('Router error, falling back to full navigation:', error);
      window.location.href = url;
    }
  }

  // Intercept clicks on internal links
  document.addEventListener('click', function (e) {
    // Find the closest <a> tag
    const anchor = e.target.closest('a');
    if (!anchor) return;
    if (!isInternalLink(anchor)) return;

    e.preventDefault();

    // Don't navigate if we're already on this page
    if (anchor.href === window.location.href) return;

    navigateTo(anchor.href);
  });

  // Handle browser back/forward buttons
  window.addEventListener('popstate', function (e) {
    const url = e.state?.url || window.location.href;
    navigateTo(url, false);
  });

  // Store initial state
  history.replaceState({ url: window.location.href }, document.title, window.location.href);
})();
