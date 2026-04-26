// Merge Google Khmer Fonts rendering into main grid only once
if (window.location.pathname.includes("fonts")) {
  const googleKhmerFamilies = [
    "Angkor",
    "Battambang",
    "Bayon",
    "Bokor",
    "Chenla",
    "Content",
    "Dangrek",
    "Fasthand",
    "Freehand",
    "Google Sans",
    "Kantumruy Pro",
    "Kdam Thmor Pro",
    "Khmer",
    "Koh Santepheap",
    "Konkhmer Sleokchher",
    "Koulen",
    "Metal",
    "Moul",
    "Moulpali",
    "Nokora",
    "Noto Sans Khmer",
    "Noto Serif Khmer",
    "Odor Mean Chey",
    "Preahvihear",
    "Siemreap",
    "Suwannaphum",
    "Taprom",
  ];
  const fontsGrid = document.getElementById("fonts-grid");
  const googleKhmerCssUrl =
    "https://fonts.googleapis.com/css2?" +
    googleKhmerFamilies
      .map((f) => "family=" + encodeURIComponent(f).replace(/%20/g, "+"))
      .join("&") +
    "&display=swap";
  let googleKhmerFontsLoaded = false;
  function loadGoogleKhmerFonts() {
    if (googleKhmerFontsLoaded) return;
    googleKhmerFontsLoaded = true;
    const link = document.createElement("link");
    link.rel = "preload";
    link.as = "style";
    link.href = googleKhmerCssUrl;
    link.onload = function () {
      this.onload = null;
      this.rel = "stylesheet";
    };
    document.head.appendChild(link);
  }
  function renderGoogleKhmerCards() {
    if (!fontsGrid) return;
    // Prevent duplicate rendering
    if (fontsGrid.dataset.googleRendered === "1") return;
    googleKhmerFamilies.forEach((family) => {
      const card = document.createElement("div");
      card.className = "font-card reveal";
      card.setAttribute("data-category", "free google");
      card.setAttribute("data-source", "google");
      card.innerHTML = `
        <div class="font-preview-area" tabindex="0" style="cursor:pointer" data-letter="ក">
          <div class="preview-text style-sans" style="font-family:'${family}', var(--fk), sans-serif;">អក្សរខ្មែរ</div>
        </div>
        <div class="font-info">
          <div class="font-info-top">
            <div class="font-name">${family}</div>
            <span class="font-cat">Google Free</span>
          </div>
          <div class="font-meta">Khmer Unicode • Google Fonts</div>
          <div class="font-tags"><span class="font-tag">Google</span></div>
          <div class="font-footer">
            <div class="font-price free-price">FREE</div>
            <button class="btn-outline btn-copy-css" data-font-css="font-family: '${family}', var(--fk), sans-serif;">Copy CSS</button>
            <button class="btn-outline btn-compare" aria-label="Add to compare" data-font-name="${family}"><i class="fas fa-balance-scale"></i> Compare</button>
            <a class="btn-free" href="https://fonts.google.com/specimen/${encodeURIComponent(family).replace(/%20/g, "+")}?preview.script=Khmr&preview.lang=km_Khmr" target="_blank"><i class="fas fa-download"></i> ទាញយក</a>
          </div>
        </div>
      `;
      fontsGrid.appendChild(card);
    });
    fontsGrid.dataset.googleRendered = "1";
    loadGoogleKhmerFonts();
  }
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", renderGoogleKhmerCards);
  } else {
    renderGoogleKhmerCards();
  }
}
// ═══════════════════════════════════════════════
// FONTS PAGE — Compare Drawer, Copy CSS, Enlarge Preview, Accessibility
// ═══════════════════════════════════════════════
(function () {
  // Only run on fonts.html
  if (!document.body || !document.getElementById("fonts-grid")) return;

  // Compare Drawer logic
  const compareDrawer = document.getElementById("compareDrawer");
  const compareList = document.getElementById("compareList");
  const compareClose = document.getElementById("compareDrawerClose");
  let compareFonts = [];

  function renderCompareDrawer() {
    if (!compareDrawer || !compareList) return;
    compareList.innerHTML = "";
    if (!compareFonts.length) {
      compareList.innerHTML =
        '<div style="color:var(--gray);padding:24px;text-align:center">No fonts selected for compare.<br>Click <b>Compare</b> on any font card.</div>';
      compareDrawer.classList.remove("show");
      return;
    }
    compareDrawer.classList.add("show");
    compareFonts.forEach((font) => {
      const div = document.createElement("div");
      div.className = "compare-item";
      div.innerHTML = `
        <div class="compare-font-name">${font.name}</div>
        <div class="compare-preview" style="font-family:${font.css};font-size:2.1rem;">${font.preview}</div>
        <div class="compare-meta">${font.price}</div>
        <button class="compare-remove" data-remove="${font.name}" aria-label="Remove from compare"><i class="fas fa-times"></i></button>
      `;
      compareList.appendChild(div);
    });
  }

  document.body.addEventListener("click", function (e) {
    // Add to compare
    if (e.target.closest(".btn-compare")) {
      const btn = e.target.closest(".btn-compare");
      const card = btn.closest(".font-card");
      const name = btn.getAttribute("data-font-name");
      const css =
        card.querySelector(".btn-copy-css")?.getAttribute("data-font-css") ||
        "";
      const preview =
        card.querySelector(".preview-text")?.textContent || "សិល្បៈឌីជីថល";
      const price = card.querySelector(".font-price")?.textContent || "";
      if (!compareFonts.some((f) => f.name === name)) {
        compareFonts.push({ name, css, preview, price });
        renderCompareDrawer();
      }
      compareDrawer.focus();
    }
    // Remove from compare
    if (e.target.closest(".compare-remove")) {
      const btn = e.target.closest(".compare-remove");
      const name = btn.getAttribute("data-remove");
      compareFonts = compareFonts.filter((f) => f.name !== name);
      renderCompareDrawer();
      compareDrawer.focus();
    }
    // Copy CSS
    if (e.target.closest(".btn-copy-css")) {
      const btn = e.target.closest(".btn-copy-css");
      const css = btn.getAttribute("data-font-css");
      if (css) {
        navigator.clipboard.writeText(css).then(() => {
          btn.textContent = "Copied!";
          setTimeout(() => {
            btn.textContent = "Copy CSS";
          }, 1200);
        });
      }
    }
    // Enlarge preview
    if (e.target.closest(".font-preview-area")) {
      const area = e.target.closest(".font-preview-area");
      area.classList.toggle("enlarge");
      setTimeout(() => {
        area.focus();
      }, 10);
    }
  });

  // Close compare drawer
  if (compareClose) {
    compareClose.addEventListener("click", () => {
      compareDrawer.classList.remove("show");
      compareDrawer.blur();
    });
  }
  // ESC to close compare
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && compareDrawer.classList.contains("show")) {
      compareDrawer.classList.remove("show");
      compareDrawer.blur();
    }
  });
  // Accessibility: tab focus
  if (compareDrawer) {
    compareDrawer.addEventListener("keydown", (e) => {
      if (e.key === "Tab") {
        const focusable = compareDrawer.querySelectorAll(
          'button, [tabindex]:not([tabindex="-1"])',
        );
        if (!focusable.length) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    });
  }
})();
/* ═══════════════════════════════════════
   YOB Digital — Main JavaScript
   Author: Yeun Savuth (Babu)
   Version: 9.0
═══════════════════════════════════════ */

// ✅ Hamburger Menu
const hamburger = document.getElementById("hamburger");
const mobileDrawer = document.getElementById("mobileDrawer");
const drawerClose = document.getElementById("drawerClose");
let lastFocusedBeforeDrawer = null;

function openDrawer() {
  lastFocusedBeforeDrawer = document.activeElement;
  if (hamburger) hamburger.classList.add("open");
  if (mobileDrawer) mobileDrawer.classList.add("open");
  if (hamburger) hamburger.setAttribute("aria-expanded", "true");
  if (mobileDrawer) mobileDrawer.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  if (drawerClose) drawerClose.focus();
}
function closeDrawer() {
  if (hamburger) hamburger.classList.remove("open");
  if (mobileDrawer) mobileDrawer.classList.remove("open");
  if (hamburger) hamburger.setAttribute("aria-expanded", "false");
  if (mobileDrawer) mobileDrawer.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
  if (
    lastFocusedBeforeDrawer &&
    typeof lastFocusedBeforeDrawer.focus === "function"
  ) {
    lastFocusedBeforeDrawer.focus();
  }
}

if (hamburger && mobileDrawer && drawerClose) {
  hamburger.setAttribute("aria-expanded", "false");
  mobileDrawer.setAttribute("aria-hidden", "true");
  hamburger.addEventListener("click", () =>
    hamburger.classList.contains("open") ? closeDrawer() : openDrawer(),
  );
  drawerClose.addEventListener("click", closeDrawer);
  // Backdrop click to close (click on drawer background)
  mobileDrawer.addEventListener("click", (e) => {
    if (e.target === mobileDrawer) closeDrawer();
  });
  // ESC key to close drawer
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && mobileDrawer.classList.contains("open")) {
      closeDrawer();
    }
  });
}

// ✅ Mobile Drawer Accordion
document.querySelectorAll(".drawer-group-toggle").forEach((btn) => {
  btn.setAttribute("aria-expanded", "false");
  btn.addEventListener("click", () => {
    const items = btn.nextElementSibling;
    const isOpen = items.classList.contains("open");
    document
      .querySelectorAll(".drawer-group-items")
      .forEach((el) => el.classList.remove("open"));
    document.querySelectorAll(".drawer-group-toggle").forEach((el) => {
      el.classList.remove("open");
      el.setAttribute("aria-expanded", "false");
    });
    if (!isOpen) {
      items.classList.add("open");
      btn.classList.add("open");
      btn.setAttribute("aria-expanded", "true");
    }
  });
});

// ✅ Back to Top
const backTop = document.getElementById("backTop");
if (backTop) {
  window.addEventListener("scroll", () =>
    backTop.classList.toggle("show", window.scrollY > 400),
  );
}

// --- Custom Cursor Logic (Pro Interaction) ---
const cursorDot = document.querySelector(".cursor-dot");
const cursorOutline = document.querySelector(".cursor-outline");

// Only run on non-touch devices with cursor elements present
if (
  cursorDot &&
  cursorOutline &&
  window.matchMedia("(pointer: fine)").matches
) {
  window.addEventListener("mousemove", function (e) {
    const posX = e.clientX;
    const posY = e.clientY;

    cursorDot.style.left = `${posX}px`;
    cursorDot.style.top = `${posY}px`;

    // Use animation for a smoother dragging effect on the outline
    cursorOutline.animate(
      {
        left: `${posX}px`,
        top: `${posY}px`,
      },
      { duration: 500, fill: "forwards" },
    );
  });

  // Expand cursor when hovering over interactive elements
  const interactives = document.querySelectorAll(
    "a, button, input, textarea, .track-card, .f-card, .portfolio-card, .video-card",
  );
  interactives.forEach((el) => {
    el.addEventListener("mouseenter", () => {
      cursorOutline.style.width = "60px";
      cursorOutline.style.height = "60px";
      cursorOutline.style.backgroundColor = "rgba(229, 44, 103, 0.1)";
    });
    el.addEventListener("mouseleave", () => {
      cursorOutline.style.width = "40px";
      cursorOutline.style.height = "40px";
      cursorOutline.style.backgroundColor = "transparent";
    });
  });
}

// --- Scroll Reveal Animation ---
const reveals = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.1 },
);
reveals.forEach((el) => observer.observe(el));

// ═══════════════════════════════════════════════
// CONSTELLATION — YOB Digital Hero
// Connected star network · Pink #e52c67
// ═══════════════════════════════════════════════
(function () {
  const canvas = document.getElementById("night-canvas");
  if (!canvas) return;
  const reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;
  const ctx = canvas.getContext("2d");
  const hero = document.getElementById("hero");

  let W,
    H,
    nodes = [];
  let mouse = { x: -9999, y: -9999 };

  // ── BUILD NODES ──
  function build() {
    const rect = hero.getBoundingClientRect();
    W = canvas.width = rect.width;
    H = canvas.height = rect.height;
    nodes = [];
    const n = Math.min(90, Math.floor((W * H) / 9000));
    for (let i = 0; i < n; i++) {
      nodes.push({
        x: Math.random() * W,
        y: Math.random() * H,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.28,
        r: Math.random() * 2 + 0.5,
        a: Math.random() * 0.65 + 0.2,
        pink: Math.random() < 0.28,
        pulse: Math.random() * Math.PI * 2,
      });
    }

    // Initialize subtle background particles
    particles = [];
    const pCount = Math.min(150, Math.floor((W * H) / 15000)); // Adjust count based on screen size
    for (let i = 0; i < pCount; i++) {
      particles.push({
        x: Math.random() * W,
        y: Math.random() * H,
        vx: (Math.random() - 0.5) * 0.05, // Very slow movement
        vy: (Math.random() - 0.5) * 0.05,
        r: Math.random() * 0.8 + 0.2, // Very small radius
        a: Math.random() * 0.1 + 0.05, // Very faint opacity
      });
    }
  }

  // ── DRAW LOOP ──
  function draw(ts) {
    const t = ts * 0.001;
    ctx.clearRect(0, 0, W, H);

    // Deep background
    const bg = ctx.createLinearGradient(0, 0, 0, H);
    bg.addColorStop(0, "#000000");
    bg.addColorStop(0.45, "#050108");
    bg.addColorStop(1, "#0a020e");
    ctx.fillStyle = bg;
    ctx.fillRect(0, 0, W, H);

    // Subtle pink center glow
    const cg = ctx.createRadialGradient(
      W * 0.5,
      H * 0.45,
      0,
      W * 0.5,
      H * 0.45,
      W * 0.55,
    );
    cg.addColorStop(0, "rgba(229,44,103,.07)");
    cg.addColorStop(0.5, "rgba(140,15,65,.03)");
    cg.addColorStop(1, "transparent");
    ctx.fillStyle = cg;
    ctx.fillRect(0, 0, W, H);

    // --- Draw and update Particles ---
    particles.forEach((p) => {
      p.x += p.vx;
      p.y += p.vy;

      // Wrap particles around the screen
      if (p.x < 0) p.x = W;
      if (p.x > W) p.x = 0;
      if (p.y < 0) p.y = H;
      if (p.y > H) p.y = 0;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255, 255, 255, ${p.a})`; // White, very faint
      ctx.fill();
    });

    // Update positions
    nodes.forEach((n) => {
      n.x += n.vx;
      n.y += n.vy;
      if (n.x < 0 || n.x > W) n.vx *= -1;
      if (n.y < 0 || n.y > H) n.vy *= -1;

      // Cursor soft attract
      const di = Math.hypot(mouse.x - n.x, mouse.y - n.y);
      if (di < 160) {
        const f = (1 - di / 160) * 0.45;
        n.x += (mouse.x - n.x) * f * 0.025;
        n.y += (mouse.y - n.y) * f * 0.025;
      }
    });

    // Draw edges between close nodes
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const d = Math.hypot(nodes[i].x - nodes[j].x, nodes[i].y - nodes[j].y);
        if (d < 115) {
          const a = (1 - d / 115) * 0.3;
          const isPink = nodes[i].pink || nodes[j].pink;
          ctx.beginPath();
          ctx.moveTo(nodes[i].x, nodes[i].y);
          ctx.lineTo(nodes[j].x, nodes[j].y);
          ctx.strokeStyle = isPink
            ? `rgba(229,44,103,${a * 1.2})`
            : `rgba(200,180,220,${a * 0.7})`;
          ctx.lineWidth = isPink ? 1 : 0.6;
          ctx.stroke();
        }
      }
    }

    // Draw edges from cursor to nearby nodes
    nodes.forEach((n) => {
      const d = Math.hypot(mouse.x - n.x, mouse.y - n.y);
      if (d < 170) {
        ctx.beginPath();
        ctx.moveTo(mouse.x, mouse.y);
        ctx.lineTo(n.x, n.y);
        ctx.strokeStyle = `rgba(229,44,103,${(1 - d / 170) * 0.55})`;
        ctx.lineWidth = 0.9;
        ctx.stroke();
      }
    });

    // Draw nodes
    nodes.forEach((n) => {
      const di = Math.hypot(mouse.x - n.x, mouse.y - n.y);
      const prox = di < 170 ? 1 - di / 170 : 0;
      const pulse = Math.sin(t * 1.2 + n.pulse) * 0.15 + 0.85;
      const alpha = Math.min(1, n.a * pulse + prox * 0.5);
      const radius = n.r * (1 + prox * 1.6);

      // Glow for pink nodes
      if (n.pink) {
        const glow = ctx.createRadialGradient(
          n.x,
          n.y,
          0,
          n.x,
          n.y,
          radius * 5,
        );
        glow.addColorStop(0, `rgba(229,44,103,${alpha * 0.3})`);
        glow.addColorStop(1, "transparent");
        ctx.beginPath();
        ctx.arc(n.x, n.y, radius * 5, 0, Math.PI * 2);
        ctx.fillStyle = glow;
        ctx.fill();
      }

      ctx.beginPath();
      ctx.arc(n.x, n.y, radius, 0, Math.PI * 2);
      ctx.fillStyle = n.pink
        ? `rgba(229,44,103,${alpha})`
        : `rgba(220,200,240,${alpha * 0.85})`;
      ctx.fill();
    });

    // Cursor glow dot
    if (mouse.x > 0 && mouse.x < W) {
      const curGlow = ctx.createRadialGradient(
        mouse.x,
        mouse.y,
        0,
        mouse.x,
        mouse.y,
        40,
      );
      curGlow.addColorStop(0, "rgba(229,44,103,.35)");
      curGlow.addColorStop(1, "transparent");
      ctx.beginPath();
      ctx.arc(mouse.x, mouse.y, 40, 0, Math.PI * 2);
      ctx.fillStyle = curGlow;
      ctx.fill();
    }

    if (!reduceMotion) requestAnimationFrame(draw);
  }

  // Mouse tracking
  if (!reduceMotion) {
    document.addEventListener("mousemove", (e) => {
      const rect = hero.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    });
  }

  // Click — shockwave repel nodes
  if (!reduceMotion) {
    hero.addEventListener("click", (e) => {
      const rect = hero.getBoundingClientRect();
      const cx = e.clientX - rect.left;
      const cy = e.clientY - rect.top;
      nodes.forEach((n) => {
        const d = Math.hypot(cx - n.x, cy - n.y);
        if (d < 220) {
          const f = (1 - d / 220) * 3.5;
          const a = Math.atan2(n.y - cy, n.x - cx);
          n.vx += Math.cos(a) * f;
          n.vy += Math.sin(a) * f;
        }
      });
    });
  }

  // Resize
  let rTimer;
  window.addEventListener("resize", () => {
    clearTimeout(rTimer);
    rTimer = setTimeout(build, 150);
  });

  build();
  if (reduceMotion) {
    draw(0);
  } else {
    requestAnimationFrame(draw);
  }
})();

// ═══════════════════════════════════════════════
// COUNTER ANIMATION — Hero Stats
// ═══════════════════════════════════════════════
(function () {
  const statsBlock = document.getElementById("heroStats");
  if (!statsBlock) return;

  function toKhmerNum(n) {
    return String(n).replace(/[0-9]/g, (d) => "០១២៣៤៥៦៧៨៩"[d]);
  }

  function animateCount(el, target, duration) {
    const start = performance.now();
    function step(now) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      el.textContent = toKhmerNum(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(step);
      else el.textContent = toKhmerNum(target);
    }
    requestAnimationFrame(step);
  }

  let animated = false;
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting && !animated) {
          animated = true;
          statsBlock
            .querySelectorAll(".stat-num[data-target]")
            .forEach((num) => {
              const target = parseInt(num.dataset.target, 10);
              const countEl = num.querySelector(".count-num");
              if (countEl) animateCount(countEl, target, 1800);
            });
        }
      });
    },
    { threshold: 0.4 },
  );
  observer.observe(statsBlock);
})();

// ═══════════════════════════════════════════════
// SERVICE CHIP SELECTOR — Contact Form
// ═══════════════════════════════════════════════
(function () {
  const chips = document.querySelectorAll(".svc-chip");
  const serviceInput = document.getElementById("serviceInput");
  if (!chips.length || !serviceInput) return;

  chips.forEach((chip) => {
    chip.addEventListener("click", () => {
      chips.forEach((c) => c.classList.remove("active"));
      chip.classList.add("active");
      serviceInput.value = chip.dataset.value || chip.textContent.trim();
    });
  });
})();

// ═══════════════════════════════════════════════
// STICKY MOBILE CTA
// ═══════════════════════════════════════════════
(function () {
  const cta = document.getElementById("stickyCta");
  const closeBtn = document.getElementById("stickyCtaClose");
  if (!cta) return;

  let dismissed = false;

  function checkScroll() {
    if (dismissed) return;
    if (window.scrollY > 400) {
      cta.classList.add("visible");
    } else {
      cta.classList.remove("visible");
    }
  }

  window.addEventListener("scroll", checkScroll, { passive: true });

  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      dismissed = true;
      cta.classList.remove("visible");
    });
  }
})();
