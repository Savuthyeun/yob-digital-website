// ═══════════════════════════════════════════════
// COMPONENT LOADER — Nav & Footer (inline, no fetch)
// ═══════════════════════════════════════════════
(function () {
  const NAV_HTML = `
<nav>
  <div class="nav-inner">
    <a href="/" class="nav-logo">យប់<span>.</span>ឌីជីថល</a>
    <ul class="nav-links">
      <li><a href="/grow" data-page="grow">Yob ដើម្បីអ្នក</a></li>
      <li class="nav-has-dropdown">
        <a href="#" class="dropdown-trigger" aria-haspopup="true" aria-expanded="false">រៀនជាមួយ Yob <i class="fas fa-chevron-down"></i></a>
        <ul class="nav-dropdown">
          <li><a href="/yob-learning" data-page="yob-learning"><i class="fas fa-graduation-cap"></i> ជំនាញឌីជីថល</a></li>
          <li><a href="/docs" data-page="docs"><i class="fas fa-book"></i> ឯកសារមេរៀន</a></li>
          <li><a href="/case-studies" data-page="case-studies"><i class="fas fa-briefcase"></i> កម្រងស្នាដៃ</a></li>
        </ul>
      </li>
      <li class="nav-has-dropdown">
        <a href="#" class="dropdown-trigger" aria-haspopup="true" aria-expanded="false">តូបឌីជីថល <i class="fas fa-chevron-down"></i></a>
        <ul class="nav-dropdown">
          <li><a href="/fonts" data-page="fonts"><i class="fas fa-font"></i> YOB អក្ខរា</a></li>
          <li><a href="/resources" data-page="resources"><i class="fas fa-toolbox"></i> កាដូឌីជីថល</a></li>
        </ul>
      </li>
      <li>
        <a href="/contact" class="nav-cta">សាកសួរ
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
        <p>ដៃគូ Digital &amp; AI ដ៏ទុកចិត្ត សម្រាប់ Mអ្នក — Practical, Khmer Context, Results Driven។</p>
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
          <li><a href="/case-studies">កងកម្លាំង AI</a></li>
          <li><a href="/case-studies">អ្នកនាំផ្លូវទីផ្សារ</a></li>
          <li><a href="/case-studies">ប្រព័ន្ធ Web & Systems</a></li>
          <li><a href="/case-studies">វិស្វករពុម្ពអក្សរខ្មែរ</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>រៀនជាមួយ YOB</h4>
        <ul>
          <li><a href="/yob-learning">សិល្បៈបញ្ជា AI</a></li>
          <li><a href="/yob-learning">ក្បួនវាយលុកទីផ្សារ</a></li>
          <li><a href="/yob-learning">ស្ថាបត្យកម្ម Web</a></li>
          <li><a href="/yob-learning">កាដូ</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>តូបឌីជីថល</h4>
        <ul>
          <li><a href="/fonts">Yob អក្ខរា</a></li>
          <li><a href="/resources">កូដបញ្ជា AI</a></li>
          <li><a href="/resources">ពុម្ពគំរូការងារ</a></li>
          <li><a href="/resources">ក្រាហ្វិក</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>ទីបញ្ជាការ YOB</h4>
        <ul>
          <li><a href="/about">សារបានកម្មករឌីជីថល</a></li>
          <li><a href="/contact">បណ្ដាញទំនាក់ទំនង</a></li>
          <li><a href="/docs">ឯកសារប្រតិបត្តិការ</a></li>
          <li><a href="/sitemap">ផែនទីរុករក</a></li>
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
        ចូលរួមឥតគិតថ្លៃ <i class="fas fa-arrow-right"></i>
      </a>
    </div>
    <div class="footer-bottom">
      <div class="footer-copy">© 2026 <span>YOB.DIGITAL</span> — All rights reserved.</div>
      <div class="footer-legal">
        <a href="/privacy">Privacy</a>
        <span class="footer-dot">·</span>
        <a href="/terms">Terms</a>
        <span class="footer-dot">·</span>
        <a href="/about">About</a>
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
  const mobileDrawer = document.getElementById("mobileDrawer");
  if (hamburger && navLinks) {
    hamburger.setAttribute("aria-expanded", "false");
    // Fallback only: when a page has no shared mobile drawer.
    if (!mobileDrawer) {
      hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("open");
        navLinks.classList.toggle("open");
        hamburger.setAttribute(
          "aria-expanded",
          hamburger.classList.contains("open") ? "true" : "false",
        );
      });
    }
  }

  // Mobile dropdown
  document.querySelectorAll(".dropdown-trigger").forEach((trigger) => {
    trigger.addEventListener("click", (e) => {
      if (window.innerWidth <= 768) {
        e.preventDefault();
        const parent = trigger.closest(".nav-has-dropdown");
        const isOpen = parent.classList.toggle("open");
        trigger.setAttribute("aria-expanded", isOpen ? "true" : "false");
      }
    });
  });
})();
