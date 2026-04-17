class Footer extends HTMLElement {
  connectedCallback() {
    const basePath = this.getAttribute('base-path') || '.';
    const isHomePage = window.location.pathname.endsWith('index.html') || window.location.pathname.endsWith('/');

    const getLink = (hash) => {
        if (hash.startsWith('#')) {
            return isHomePage ? hash : `${basePath}/index.html${hash}`;
        }
        return hash;
    };

    this.innerHTML = `
    <footer class="footer">
      <div class="container">
        <div class="footer__content">
          <div class="footer__section">
            <h4 class="footer__title">Sabal Academy</h4>
            <p class="footer__text">
              Transforming lives through quality education and expert coaching
              since 2015.
            </p>
            <div class="footer__social">
              <a href="https://facebook.com" class="footer__social-link" title="Facebook" aria-label="Facebook">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="https://twitter.com" class="footer__social-link" title="Twitter" aria-label="Twitter">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.953 4.57a10 10 0 002.856-3.515 9.953 9.953 0 01-2.828.856 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              <a href="https://linkedin.com" class="footer__social-link" title="LinkedIn" aria-label="LinkedIn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/>
                </svg>
              </a>
              <a href="https://instagram.com" class="footer__social-link" title="Instagram" aria-label="Instagram">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="currentColor" stroke-width="2"/>
                  <path d="M12 7a5 5 0 100 10 5 5 0 000-10z" fill="none" stroke="currentColor" stroke-width="2"/>
                  <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" />
                </svg>
              </a>
            </div>
          </div>

          <div class="footer__section">
            <h4 class="footer__title">Courses</h4>
            <ul class="footer__list">
              <li><a href="${getLink('#courses')}">JEE Main & Advanced</a></li>
              <li><a href="${getLink('#courses')}">NEET Preparation</a></li>
              <li><a href="${getLink('#courses')}">Foundation Programme</a></li>
              <li><a href="${getLink('#courses')}">CUET & Olympiad</a></li>
            </ul>
          </div>

          <div class="footer__section">
            <h4 class="footer__title">Quick Links</h4>
            <ul class="footer__list">
              <li><a href="${getLink('#about')}">About Us</a></li>
              <li><a href="${getLink('#contact')}">Contact</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms & Conditions</a></li>
            </ul>
          </div>

          <div class="footer__section">
            <h4 class="footer__title">Contact</h4>
            <p class="footer__text">📞 +91 PHONE - 9654619822</p>
            <p class="footer__text">✉️ info@sabalisacademy.com</p>
            <p class="footer__text">
              📍 Address: Sector - 3, ROHINI, NEW DELHI
            </p>
          </div>
        </div>

        <div class="footer__bottom">
          <p>
            &copy; <span id="year">${new Date().getFullYear()}</span> Sabal Academy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
    `;
  }
}

customElements.define('sabal-footer', Footer);
