// Shared Tailwind CSS Configuration
// This file contains the common Tailwind configuration for all pages

window.TAILWIND_CONFIG = {
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'georgia': ['Georgia', 'serif']
      },
      colors: {
        // Custom brand colors if needed in the future
      }
    }
  }
};

// Apply configuration immediately
if (typeof tailwind !== 'undefined') {
  tailwind.config = window.TAILWIND_CONFIG;
}
