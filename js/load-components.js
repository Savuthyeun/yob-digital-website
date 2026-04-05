// ═══════════════════════════════════════════════
// COMPONENT LOADER — Nav & Footer (inline, no fetch)
// ═══════════════════════════════════════════════
(function () {
  const NAV_HTML = `
<nav>
  <div class="nav-inner">
    <a href="index.html" class="nav-logo">យប់<span>.</span>ឌីជីថល</a>
    <ul class="nav-links">
      <li><a href="grow.html" data-page="grow">Yob ដើម្បីអាជីវកម្ម</a></li>
      <li class="nav-has-dropdown">
        <a href="#" class="dropdown-trigger">រៀនជាមួយ Yob <i class="fas fa-chevron-down"></i></a>
        <ul class="nav-dropdown">
          <li><a href="yob-learning.html" data-page="yob-learning"><i class="fas fa-graduation-cap"></i> ជំនាញឌីជីថល</a></li>
          <li><a href="docs.html" data-page="docs"><i class="fas fa-book"></i> ឯកសារមេរៀន</a></li>
          <li><a href="case-studies.html" data-page="case-studies"><i class="fas fa-briefcase"></i> កម្រងស្នាដៃ</a></li>
        </ul>
      </li>
      <li class="nav-has-dropdown">
        <a href="#" class="dropdown-trigger">តូបឌីជីថល <i class="fas fa-chevron-down"></i></a>
        <ul class="nav-dropdown">
          <li><a href="fonts.html" data-page="fonts"><i class="fas fa-font"></i> YOB អក្ខរា</a></li>
          <li><a href="resources.html" data-page="resources"><i class="fas fa-toolbox"></i> កាដូឌីជីថល</a></li>
        </ul>
      </li>
      <li>
        <a href="contact.html" class="nav-cta">សាកសួរ
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
        <div class="f-logo">យប់.ឌីជីថល</div>
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
        <h4>ប្រតិបត្តិការ YOB</h4>
        <ul>
          <li><a href="case-studies.html">កងកម្លាំង AI</a></li>
          <li><a href="case-studies.html">អ្នកនាំផ្លូវទីផ្សារ</a></li>
          <li><a href="case-studies.html">ប្រព័ន្ធ Web & Systems</a></li>
          <li><a href="case-studies.html">វិស្វករពុម្ពអក្សរខ្មែរ</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>រៀនជាមួយ YOB</h4>
        <ul>
          <li><a href="yob-learning.html">សិល្បៈបញ្ជា AI</a></li>
          <li><a href="yob-learning.html">ក្បួនវាយលុកទីផ្សារ</a></li>
          <li><a href="yob-learning.html">ស្ថាបត្យកម្ម Web</a></li>
          <li><a href="yob-learning.html">កាដូ</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>តូបឌីជីថល</h4>
        <ul>
          <li><a href="fonts.html">Yob អក្ខរា</a></li>
          <li><a href="resources.html">កូដបញ្ជា AI</a></li>
          <li><a href="resources.html">ពុម្ពគំរូការងារ</a></li>
          <li><a href="resources.html">ក្រាហ្វិក</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>ទីបញ្ជាការ YOB</h4>
        <ul>
          <li><a href="about.html">សារបានកម្មករឌីជីថល</a></li>
          <li><a href="contact.html">បណ្ដាញទំនាក់ទំនង</a></li>
          <li><a href="docs.html">ឯកសារប្រតិបត្តិការ</a></li>
          <li><a href="sitemap.html">ផែនទីរុករក</a></li>
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
        <a href="privacy.html">Privacy</a>
        <span class="footer-dot">·</span>
        <a href="terms.html">Terms</a>
        <span class="footer-dot">·</span>
        <a href="about.html">About</a>
      </div>
      <div class="footer-made"><i class="fas fa-heart"></i> Made in Cambodia 🇰🇭</div>
    </div>
  </div>
</footer>`;

  // Inject Nav
  const navEl = document.getElementById("nav-placeholder");
  if (navEl) navEl.outerHTML = NAV_HTML;

  // Inject Footer
  const footerEl = document.getElementById("footer-placeholder");
  if (footerEl) footerEl.outerHTML = FOOTER_HTML;

  // Set active nav link
  const page =
    location.pathname.split("/").pop().replace(".html", "") || "index";
  document.querySelectorAll(".nav-links a[data-page]").forEach((a) => {
    if (a.dataset.page === page) a.classList.add("active");
  });

  // Hamburger menu
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.querySelector(".nav-links");
  if (hamburger && navLinks) {
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("open");
      navLinks.classList.toggle("open");
    });
  }

  // Mobile dropdown
  document.querySelectorAll(".dropdown-trigger").forEach((trigger) => {
    trigger.addEventListener("click", (e) => {
      if (window.innerWidth <= 768) {
        e.preventDefault();
        trigger.closest(".nav-has-dropdown").classList.toggle("open");
      }
    });
  });
})();
