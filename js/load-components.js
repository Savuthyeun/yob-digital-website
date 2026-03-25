// ═══════════════════════════════════════════════
// COMPONENT LOADER — Nav & Footer (inline, no fetch)
// ═══════════════════════════════════════════════
(function () {

  const NAV_HTML = `
<nav>
  <div class="nav-inner">
    <a href="index.html" class="nav-logo">YOB<span>.</span>DIGITAL</a>
    <ul class="nav-links">
      <li><a href="grow.html" data-page="grow">Grow with Yob</a></li>
      <li class="nav-has-dropdown">
        <a href="#" class="dropdown-trigger">Learn <i class="fas fa-chevron-down"></i></a>
        <ul class="nav-dropdown">
          <li><a href="yob-learning.html" data-page="yob-learning"><i class="fas fa-graduation-cap"></i> Yob Skills</a></li>
          <li><a href="docs.html" data-page="docs"><i class="fas fa-book"></i> Documentation</a></li>
          <li><a href="case-studies.html" data-page="case-studies"><i class="fas fa-briefcase"></i> Case Studies</a></li>
        </ul>
      </li>
      <li class="nav-has-dropdown">
        <a href="#" class="dropdown-trigger">Products <i class="fas fa-chevron-down"></i></a>
        <ul class="nav-dropdown">
          <li><a href="fonts.html" data-page="fonts"><i class="fas fa-font"></i> Yob Fonts</a></li>
          <li><a href="resources.html" data-page="resources"><i class="fas fa-toolbox"></i> Free Toolkit</a></li>
        </ul>
      </li>
      <li>
        <a href="index.html#contact" class="nav-cta">ទំនាក់ទំនង
          <i class="fas fa-paper-plane" style="margin-left:5px"></i>
        </a>
      </li>
    </ul>
    <button class="hamburger" id="hamburger" aria-label="Toggle menu">
      <span></span><span></span><span></span>
    </button>
  </div>
</nav>`;

  const FOOTER_HTML = `
<footer>
  <div class="footer-topbar"></div>
  <div class="container">
    <div class="footer-grid">
      <div class="footer-brand">
        <div class="f-logo">YOB.DIGITAL</div>
        <p>ដៃគូ Digital &amp; AI ដ៏ទុកចិត្ត សម្រាប់ MSMEs ខ្មែរ — Practical, Khmer Context, Results Driven។</p>
        <div class="footer-socials">
          <a href="https://facebook.com/yobdigital" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
          <a href="https://t.me/yobdigital" aria-label="Telegram"><i class="fab fa-telegram-plane"></i></a>
          <a href="https://youtube.com/@yobdigital" aria-label="YouTube"><i class="fab fa-youtube"></i></a>
          <a href="https://linkedin.com/in/yobdigital" aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
        </div>
        <div class="footer-tagline-brand">
          <span class="footer-quote-mark">"</span>យប់ មានតម្លៃ ដូចពន្លឺ<span class="footer-quote-mark">"</span>
        </div>
      </div>
      <div class="footer-col">
        <h4>Services</h4>
        <ul>
          <li><a href="index.html#tracks">AI Tools Mastery</a></li>
          <li><a href="index.html#tracks">Digital Strategy</a></li>
          <li><a href="index.html#tracks">Web &amp; System Setup</a></li>
          <li><a href="index.html#pricing">Workshop &amp; Training</a></li>
          <li><a href="index.html#pricing">1-on-1 Consulting</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Learn</h4>
        <ul>
          <li><a href="yob-learning.html">Yob Skills</a></li>
          <li><a href="docs.html">Documentation</a></li>
          <li><a href="case-studies.html">Case Studies</a></li>
          <li><a href="resources.html">Free Toolkit</a></li>
          <li><a href="grow.html">Growth Roadmap</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Products</h4>
        <ul>
          <li><a href="fonts.html">Khmer Font Shop</a></li>
          <li><a href="resources.html">AI Content Bible</a></li>
          <li><a href="fonts.html">YOB Bold Pro</a></li>
          <li><a href="fonts.html">YOB Sans Light</a></li>
          <li><a href="fonts.html">YOB Starter (Free)</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Company</h4>
        <ul>
          <li><a href="about.html">About YOB</a></li>
          <li><a href="grow.html">Our Mission</a></li>
          <li><a href="index.html#contact">Contact Us</a></li>
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Terms of Service</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-subscribe">
      <div class="footer-sub-left">
        <div class="footer-sub-icon"><i class="fab fa-telegram-plane"></i></div>
        <div>
          <strong>ចូលរួម Telegram Channel</strong>
          <p>ទទួល Tips Digital Marketing + AI Strategy ឥតគិតថ្លៃ ជារៀងរាល់សប្ដាហ៍</p>
        </div>
      </div>
      <a href="https://t.me/yobdigital" target="_blank" rel="noopener" class="footer-sub-btn">
        Join Free <i class="fas fa-arrow-right"></i>
      </a>
    </div>
    <div class="footer-bottom">
      <div class="footer-copy">© 2026 <span>YOB.DIGITAL</span> — All rights reserved.</div>
      <div class="footer-legal">
        <a href="#">Privacy</a>
        <span class="footer-dot">·</span>
        <a href="#">Terms</a>
        <span class="footer-dot">·</span>
        <a href="about.html">About</a>
      </div>
      <div class="footer-made"><i class="fas fa-heart"></i> Made in Cambodia 🇰🇭</div>
    </div>
  </div>
</footer>`;

  // Inject Nav
  const navEl = document.getElementById('nav-placeholder');
  if (navEl) navEl.outerHTML = NAV_HTML;

  // Inject Footer
  const footerEl = document.getElementById('footer-placeholder');
  if (footerEl) footerEl.outerHTML = FOOTER_HTML;

  // Set active nav link
  const page = location.pathname.split('/').pop().replace('.html', '') || 'index';
  document.querySelectorAll('.nav-links a[data-page]').forEach(a => {
    if (a.dataset.page === page) a.classList.add('active');
  });

  // Hamburger menu
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.querySelector('.nav-links');
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('open');
      navLinks.classList.toggle('open');
    });
  }

  // Mobile dropdown
  document.querySelectorAll('.dropdown-trigger').forEach(trigger => {
    trigger.addEventListener('click', e => {
      if (window.innerWidth <= 768) {
        e.preventDefault();
        trigger.closest('.nav-has-dropdown').classList.toggle('open');
      }
    });
  });

})();
