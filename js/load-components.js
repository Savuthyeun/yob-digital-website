// ═══════════════════════════════════════════════
// COMPONENT LOADER — Nav & Footer (inline, no fetch)
// ═══════════════════════════════════════════════
(function () {
  const NAV_HTML = `
<nav>
  <div class="nav-inner">
    <a href="/" class="nav-logo">យប់<span>.</span>ឌីជីថល</a>
    <ul class="nav-links">
      <li><a href="/yob-learning" data-page="yob-learning">ជំនាញឌីជីថល</a></li>
      <li><a href="/docs" data-page="docs">ឯកសារមេរៀន</a></li>
      <li><a href="/case-studies" data-page="case-studies">កម្រងស្នាដៃ</a></li>
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
<footer class="ft">
  <div class="ft-fall-wrap" id="ftFallWrap" aria-hidden="true"></div>
  <div class="ft-inner">
    <div class="ft-left">
      <a href="/" class="ft-logo">យប់<span>.</span>ឌីជីថល</a>
      <p class="ft-tagline">"យប់ មានតម្លៃ ដូចពន្លឺ"</p>
      <p class="ft-copy">© 2026 YOB Digital</p>
    </div>
    <div class="ft-links">
      <a href="/sitemap">ផែនទីរុករក</a>
      <a href="/contact">បណ្ដាញទំនាក់ទំនង</a>
      <a href="/about">សារបានកម្មករឌីជីថល</a>
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

  // ── Footer Falling Text (Matter.js physics) ──
  (function () {
    var wrap = document.getElementById("ftFallWrap");
    if (!wrap) return;

    function loadMatter(cb) {
      if (window.Matter) { cb(); return; }
      var s = document.createElement("script");
      s.src = "https://cdnjs.cloudflare.com/ajax/libs/matter-js/0.19.0/matter.min.js";
      s.onload = cb;
      document.head.appendChild(s);
    }

    function boot() {
      var M   = Matter;
      var W   = wrap.offsetWidth  || 1200;
      var H   = wrap.offsetHeight || 160;

      var WORDS = [
        { text: "យប់",      color: "rgba(255,255,255,0.55)" },
        { text: "មានតម្លៃ", color: "#e52c67"                },
        { text: "ដូចពន្លឺ", color: "rgba(255,255,255,0.55)" }
      ];

      // Create + measure DOM words
      var items = WORDS.map(function (w) {
        var el = document.createElement("span");
        el.className   = "ft-fall-word";
        el.textContent = w.text;
        el.style.color      = w.color;
        el.style.visibility = "hidden";
        el.style.left = "0px";
        el.style.top  = "0px";
        wrap.appendChild(el);
        return { el: el };
      });

      var sizes = items.map(function (item) {
        return {
          w: Math.max(item.el.offsetWidth,  40) + 18,
          h: Math.max(item.el.offsetHeight, 28) + 10
        };
      });

      items.forEach(function (item) { item.el.style.visibility = "visible"; });

      // Physics engine
      var engine = M.Engine.create({ gravity: { y: 1.1 } });

      var bods = items.map(function (item, i) {
        var x = (W / (items.length + 1)) * (i + 1);
        var y = -sizes[i].h - i * 55;
        var b = M.Bodies.rectangle(x, y, sizes[i].w, sizes[i].h, {
          restitution: 0.5,
          frictionAir: 0.018,
          friction: 0.3
        });
        M.Body.setVelocity(b, { x: (Math.random() - 0.5) * 4, y: 0 });
        M.Body.setAngularVelocity(b, (Math.random() - 0.5) * 0.08);
        return { b: b, el: item.el, hw: sizes[i].w / 2, hh: sizes[i].h / 2 };
      });

      var floor = M.Bodies.rectangle(W / 2,    H + 30,  W + 200, 60, { isStatic: true });
      var wL    = M.Bodies.rectangle(-30,       H / 2,   60, H * 3,  { isStatic: true });
      var wR    = M.Bodies.rectangle(W + 30,    H / 2,   60, H * 3,  { isStatic: true });

      M.Composite.add(engine.world, bods.map(function (d) { return d.b; }).concat([floor, wL, wR]));

      // Mouse drag
      var mouse = M.Mouse.create(wrap);
      var mc    = M.MouseConstraint.create(engine, {
        mouse: mouse,
        constraint: { stiffness: 0.2, render: { visible: false } }
      });
      M.Composite.add(engine.world, mc);
      mouse.element.removeEventListener("mousewheel",     mouse.mousewheel);
      mouse.element.removeEventListener("DOMMouseScroll", mouse.mousewheel);

      // Render loop
      function tick() {
        M.Engine.update(engine, 1000 / 60);
        bods.forEach(function (d) {
          d.el.style.left      = (d.b.position.x - d.hw) + "px";
          d.el.style.top       = (d.b.position.y - d.hh) + "px";
          d.el.style.transform = "rotate(" + d.b.angle + "rad)";
        });
        requestAnimationFrame(tick);
      }
      tick();
    }

    // Lazy-load Matter.js on scroll into view
    var obs = new IntersectionObserver(function (entries) {
      if (entries[0].isIntersecting) {
        obs.disconnect();
        loadMatter(boot);
      }
    }, { threshold: 0.05 });
    obs.observe(wrap);
  })();
})();
