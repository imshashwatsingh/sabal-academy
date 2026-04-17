class Navbar extends HTMLElement {
  connectedCallback() {
    const basePath = this.getAttribute('base-path') || '.';
    const isHomePage = window.location.pathname.endsWith('index.html') || window.location.pathname.endsWith('/');
    
    // Helper to generate correct links. If on homepage, just use hash for smooth scroll,
    // otherwise point back to index.html with the hash
    const getLink = (hash) => {
        if (hash === '#contact' || hash === '#about' || hash === '#courses' || hash === '#why-us' || hash === '#school-integration' || hash === '#testimonials' || hash === '#enquiry' || hash === '#home') {
            return isHomePage ? hash : `${basePath}/index.html${hash}`;
        }
        return `${basePath}/${hash}`;
    };

    // Inject favicon dynamically (DRY Principle)
    let favicon = document.querySelector("link[rel~='icon']");
    if (!favicon) {
        favicon = document.createElement('link');
        favicon.rel = 'icon';
        document.head.appendChild(favicon);
    }
    favicon.href = `${basePath}/assets/images/logo-white.jpeg`;

    this.innerHTML = `
      <nav class="navbar" id="navbar">
        <div class="navbar__container">
          <a href="${getLink('#home')}" class="navbar__logo" style="text-decoration: none;" aria-label="Sabal Academy Home">
            <img src="${basePath}/assets/images/logo-white.jpeg" alt="Sabal Academy Logo" style="height: 70px; width: auto; object-fit: contain; mix-blend-mode: multiply;" />
            <span class="navbar__logo-text">Sabal Academy</span>
          </a>

          <button
            class="navbar__toggle"
            id="navbarToggle"
            aria-label="Toggle menu"
          >
            <span class="navbar__toggle-line"></span>
            <span class="navbar__toggle-line"></span>
            <span class="navbar__toggle-line"></span>
          </button>

          <ul class="navbar__menu" id="navbarMenu">
            <li class="navbar__item">
              <a href="${getLink('#home')}" class="navbar__link">Home</a>
            </li>
            <li class="navbar__item">
              <a href="${getLink('#about')}" class="navbar__link">About</a>
            </li>
            <li class="navbar__item">
              <a href="${getLink('#courses')}" class="navbar__link">Courses</a>
            </li>
            <li class="navbar__item">
              <a href="${getLink('#why-us')}" class="navbar__link">Why Us</a>
            </li>
            <li class="navbar__item">
              <a href="${getLink('#school-integration')}" class="navbar__link">School Integration</a>
            </li>
            <li class="navbar__item">
              <a href="${getLink('#testimonials')}" class="navbar__link">Testimonials</a>
            </li>
            <li class="navbar__item">
              <a href="${getLink('#contact')}" class="navbar__link">Contact</a>
            </li>
            <li class="navbar__item navbar__item--cta">
              <a href="${getLink('#enquiry')}" class="navbar__link navbar__link--cta">Enquire Now</a>
            </li>
          </ul>
        </div>
      </nav>
    `;

    this.initScripts();
  }

  initScripts() {
    const navbar = this.querySelector('#navbar');
    const navbarToggle = this.querySelector('#navbarToggle');
    const navbarMenu = this.querySelector('#navbarMenu');
    const navbarLinks = this.querySelectorAll('.navbar__link');

    // Mobile menu toggle
    if (navbarToggle && navbarMenu) {
        navbarToggle.addEventListener('click', () => {
        navbarToggle.classList.toggle('active');
        navbarMenu.classList.toggle('active');
        });

        // Close mobile menu when a link is clicked
        navbarLinks.forEach(link => {
        link.addEventListener('click', () => {
            navbarToggle.classList.remove('active');
            navbarMenu.classList.remove('active');
        });
        });

        // Close mobile menu on Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                navbarToggle.classList.remove('active');
                navbarMenu.classList.remove('active');
            }
        });
    }

    // Add shadow to navbar on scroll safely debounce
    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    const updateNavbarShadow = debounce(() => {
        if (window.scrollY > 50) {
            navbar.classList.add('navbar--scrolled');
        } else {
            navbar.classList.remove('navbar--scrolled');
        }
    }, 10);

    // Initial check
    if (window.scrollY > 50) {
        navbar.classList.add('navbar--scrolled');
    }

    window.addEventListener('scroll', updateNavbarShadow, { passive: true });
  }
}

customElements.define('sabal-navbar', Navbar);
