// ═══════════════════════════════════════════════
// COMPONENT LOADER — Nav & Footer (inline, no fetch)
// ═══════════════════════════════════════════════
(function () {

  // ── NAV ──────────────────────────────────────
  const NAV_HTML = `
<nav>
  <div class="nav-inner">

    <div class="nav-left">
      <button class="nav-menu-btn" id="navBurger" type="button"
              aria-label="Toggle menu" aria-expanded="false">
        <span class="nmb-lines"><span></span><span></span></span>
        ទំព័រ
      </button>
    </div>

    <div class="nav-center">
      <a href="index.html" class="nav-logo">យប់<span>.</span>ឌីជីថល</a>
    </div>

    <div class="nav-right">
      <a href="contact.html" class="nav-chat-link">
        សាកសួរបាន <i class="fas fa-arrow-right"></i>
      </a>
    </div>

  </div>
</nav>`;

  // ── FULLSCREEN OVERLAY ────────────────────────
  const OVERLAY_HTML = `
<div class="nav-overlay" id="navOverlay">
  <div class="nol-top">
    <button class="nol-close" id="navOverlayClose">
      <i class="fas fa-times"></i> បិទ
    </button>
    <a href="index.html" class="nav-logo">យប់<span>.</span>ឌីជីថល</a>
    <a href="contact.html" class="nav-chat-link nol-chat">
      សាកសួរបាន <i class="fas fa-arrow-right"></i>
    </a>
  </div>

  <div class="nol-nav">
    <a href="index.html"      class="nol-link" data-page="index">ទំព័រដើម</a>
    <a href="yobservice.html"  class="nol-link" data-page="yobservice">សេវាកម្ម</a>
    <a href="yobacademy.html"  class="nol-link" data-page="yobacademy">សាលារៀន</a>
    <a href="shop.html"        class="nol-link" data-page="shop">តូបឌីជីថល</a>
    <a href="about.html"       class="nol-link" data-page="about">អំពី YOB</a>
  </div>

  <div class="nol-bottom">
    <span class="nol-contact-label">ទំនាក់ទំនង</span>
    <a href="mailto:yobdigital.assistant@gmail.com" class="nol-contact-link">yobdigital.assistant@gmail.com</a>
  </div>
</div>`;

  // ── FOOTER ───────────────────────────────────
  const FOOTER_HTML = `
<footer class="ft">
  <div class="ft-inner">
    <a href="index.html" class="ft-logo-big">យប់<span>.</span>ឌីជីថល</a>
    <p class="ft-tagline">"យប់ មានតម្លៃ ដូចពន្លឺ"</p>
    <div class="ft-socials">
      <a href="https://web.facebook.com/yobdigitals" class="ft-soc" target="_blank" rel="noopener" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
      <a href="https://t.me/yobdigital" class="ft-soc" target="_blank" rel="noopener" aria-label="Telegram"><i class="fab fa-telegram-plane"></i></a>
      <a href="https://www.linkedin.com/company/yobdigital/" class="ft-soc" target="_blank" rel="noopener" aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
      <a href="https://youtube.com/@yobdigital" class="ft-soc" target="_blank" rel="noopener" aria-label="YouTube"><i class="fab fa-youtube"></i></a>
    </div>
    <div class="ft-bottom">
      <span class="ft-made">Made with <i class="fas fa-heart"></i></span>
      <span class="ft-sep">·</span>
      <span class="ft-copy">© 2026 YOB Digital</span>
      <span class="ft-sep">·</span>
      <a href="privacy.html"  class="ft-legal">Privacy</a>
      <span class="ft-sep">·</span>
      <a href="terms.html"    class="ft-legal">Terms</a>
      <span class="ft-sep">·</span>
      <a href="about.html"    class="ft-legal">About</a>
      <span class="ft-sep">·</span>
      <a href="contact.html"  class="ft-legal">Contact</a>
      <span class="ft-sep">·</span>
      <a href="sitemap.html"  class="ft-legal">Sitemap</a>
      <span class="ft-sep">·</span>
      <a href="portfolio.html" class="ft-legal">Portfolio</a>
    </div>
  </div>
</footer>`;

  // ── INJECT ───────────────────────────────────
  const navEl = document.getElementById("nav-placeholder");
  if (navEl) navEl.outerHTML = NAV_HTML;

  const footerEl = document.getElementById("footer-placeholder");
  if (footerEl) footerEl.outerHTML = FOOTER_HTML;

  // Inject overlay into body (after nav)
  document.body.insertAdjacentHTML("afterbegin", OVERLAY_HTML);

  // ── ACTIVE STATE ─────────────────────────────
  const seg = location.pathname.split("/").pop().replace(/\.html$/i, "") || "index";
  document.querySelectorAll(".nol-link[data-page]").forEach((a) => {
    if (a.dataset.page === seg) a.classList.add("active");
  });

  // ── OVERLAY OPEN / CLOSE ─────────────────────
  const burger      = document.getElementById("navBurger");
  const overlay     = document.getElementById("navOverlay");
  const overlayClose = document.getElementById("navOverlayClose");

  function openOverlay() {
    overlay.classList.add("open");
    if (burger) { burger.classList.add("open"); burger.setAttribute("aria-expanded", "true"); }
    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
  }
  function closeOverlay() {
    overlay.classList.remove("open");
    if (burger) { burger.classList.remove("open"); burger.setAttribute("aria-expanded", "false"); }
    document.documentElement.style.overflow = "";
    document.body.style.overflow = "";
  }

  if (burger) {
    burger.addEventListener("click", () =>
      overlay && overlay.classList.contains("open") ? closeOverlay() : openOverlay()
    );
  }

  // Event delegation — handles clicks on icon children inside buttons/links
  if (overlay) {
    overlay.addEventListener("click", (e) => {
      if (e.target.closest(".nol-close")) closeOverlay();
      if (e.target.closest(".nol-link")) closeOverlay();
    });
  }

  document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeOverlay(); });

  // ── NAV SCROLL ───────────────────────────────
  const nav = document.querySelector("nav");
  if (nav) {
    window.addEventListener("scroll", () => {
      nav.classList.toggle("nav-scrolled", window.scrollY > 60);
    }, { passive: true });
  }

})();
