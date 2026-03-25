/* ═══════════════════════════════════════
   YOB Digital — Main JavaScript
   Author: Yeun Savuth (Babu)
   Version: 9.0
═══════════════════════════════════════ */

// ✅ Hamburger Menu
      const hamburger = document.getElementById("hamburger");
      const mobileDrawer = document.getElementById("mobileDrawer");
      const drawerClose = document.getElementById("drawerClose");

      function openDrawer() {
        if (hamburger) hamburger.classList.add("open");
        if (mobileDrawer) mobileDrawer.classList.add("open");
        document.body.style.overflow = "hidden";
      }
      function closeDrawer() {
        if (hamburger) hamburger.classList.remove("open");
        if (mobileDrawer) mobileDrawer.classList.remove("open");
        document.body.style.overflow = "";
      }

      if (hamburger && mobileDrawer && drawerClose) {
        hamburger.addEventListener("click", () =>
          hamburger.classList.contains("open") ? closeDrawer() : openDrawer(),
        );
        drawerClose.addEventListener("click", closeDrawer);
        mobileDrawer.addEventListener("click", (e) => {
          if (e.target === mobileDrawer) closeDrawer();
        });
      }

      // ✅ Mobile Drawer Accordion
      document.querySelectorAll('.drawer-group-toggle').forEach(btn => {
        btn.addEventListener('click', () => {
          const items = btn.nextElementSibling;
          const isOpen = items.classList.contains('open');
          document.querySelectorAll('.drawer-group-items').forEach(el => el.classList.remove('open'));
          document.querySelectorAll('.drawer-group-toggle').forEach(el => el.classList.remove('open'));
          if (!isOpen) {
            items.classList.add('open');
            btn.classList.add('open');
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
      if (cursorDot && cursorOutline && window.matchMedia("(pointer: fine)").matches) {
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
        const ctx  = canvas.getContext("2d");
        const hero = document.getElementById("hero");

        let W, H, nodes = [];
        let mouse = { x: -9999, y: -9999 };

        // ── BUILD NODES ──
        function build() {
          const rect = hero.getBoundingClientRect();
          W = canvas.width  = rect.width;
          H = canvas.height = rect.height;
          nodes = [];
          const n = Math.min(90, Math.floor(W * H / 9000));
          for (let i = 0; i < n; i++) {
            nodes.push({
              x:    Math.random() * W,
              y:    Math.random() * H,
              vx:   (Math.random() - .5) * .35,
              vy:   (Math.random() - .5) * .28,
              r:    Math.random() * 2 + .5,
              a:    Math.random() * .65 + .2,
              pink: Math.random() < .28,
              pulse: Math.random() * Math.PI * 2,
            });
          }
        }

        // ── DRAW LOOP ──
        function draw(ts) {
          const t = ts * .001;
          ctx.clearRect(0, 0, W, H);

          // Deep background
          const bg = ctx.createLinearGradient(0, 0, 0, H);
          bg.addColorStop(0,   "#000000");
          bg.addColorStop(.45, "#050108");
          bg.addColorStop(1,   "#0a020e");
          ctx.fillStyle = bg;
          ctx.fillRect(0, 0, W, H);

          // Subtle pink center glow
          const cg = ctx.createRadialGradient(W * .5, H * .45, 0, W * .5, H * .45, W * .55);
          cg.addColorStop(0,   "rgba(229,44,103,.07)");
          cg.addColorStop(.5,  "rgba(140,15,65,.03)");
          cg.addColorStop(1,   "transparent");
          ctx.fillStyle = cg;
          ctx.fillRect(0, 0, W, H);

          // Update positions
          nodes.forEach(n => {
            n.x += n.vx;
            n.y += n.vy;
            if (n.x < 0 || n.x > W) n.vx *= -1;
            if (n.y < 0 || n.y > H) n.vy *= -1;

            // Cursor soft attract
            const di = Math.hypot(mouse.x - n.x, mouse.y - n.y);
            if (di < 160) {
              const f = (1 - di / 160) * .45;
              n.x += (mouse.x - n.x) * f * .025;
              n.y += (mouse.y - n.y) * f * .025;
            }
          });

          // Draw edges between close nodes
          for (let i = 0; i < nodes.length; i++) {
            for (let j = i + 1; j < nodes.length; j++) {
              const d = Math.hypot(nodes[i].x - nodes[j].x, nodes[i].y - nodes[j].y);
              if (d < 115) {
                const a = (1 - d / 115) * .3;
                const isPink = nodes[i].pink || nodes[j].pink;
                ctx.beginPath();
                ctx.moveTo(nodes[i].x, nodes[i].y);
                ctx.lineTo(nodes[j].x, nodes[j].y);
                ctx.strokeStyle = isPink
                  ? `rgba(229,44,103,${a * 1.2})`
                  : `rgba(200,180,220,${a * .7})`;
                ctx.lineWidth = isPink ? 1 : .6;
                ctx.stroke();
              }
            }
          }

          // Draw edges from cursor to nearby nodes
          nodes.forEach(n => {
            const d = Math.hypot(mouse.x - n.x, mouse.y - n.y);
            if (d < 170) {
              ctx.beginPath();
              ctx.moveTo(mouse.x, mouse.y);
              ctx.lineTo(n.x, n.y);
              ctx.strokeStyle = `rgba(229,44,103,${(1 - d / 170) * .55})`;
              ctx.lineWidth = .9;
              ctx.stroke();
            }
          });

          // Draw nodes
          nodes.forEach(n => {
            const di  = Math.hypot(mouse.x - n.x, mouse.y - n.y);
            const prox = di < 170 ? (1 - di / 170) : 0;
            const pulse = Math.sin(t * 1.2 + n.pulse) * .15 + .85;
            const alpha = Math.min(1, n.a * pulse + prox * .5);
            const radius = n.r * (1 + prox * 1.6);

            // Glow for pink nodes
            if (n.pink) {
              const glow = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, radius * 5);
              glow.addColorStop(0, `rgba(229,44,103,${alpha * .3})`);
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
              : `rgba(220,200,240,${alpha * .85})`;
            ctx.fill();
          });

          // Cursor glow dot
          if (mouse.x > 0 && mouse.x < W) {
            const curGlow = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, 40);
            curGlow.addColorStop(0, "rgba(229,44,103,.35)");
            curGlow.addColorStop(1, "transparent");
            ctx.beginPath();
            ctx.arc(mouse.x, mouse.y, 40, 0, Math.PI * 2);
            ctx.fillStyle = curGlow;
            ctx.fill();
          }

          requestAnimationFrame(draw);
        }

        // Mouse tracking
        document.addEventListener("mousemove", e => {
          const rect = hero.getBoundingClientRect();
          mouse.x = e.clientX - rect.left;
          mouse.y = e.clientY - rect.top;
        });

        // Click — shockwave repel nodes
        hero.addEventListener("click", e => {
          const rect = hero.getBoundingClientRect();
          const cx = e.clientX - rect.left;
          const cy = e.clientY - rect.top;
          nodes.forEach(n => {
            const d = Math.hypot(cx - n.x, cy - n.y);
            if (d < 220) {
              const f = (1 - d / 220) * 3.5;
              const a = Math.atan2(n.y - cy, n.x - cx);
              n.vx += Math.cos(a) * f;
              n.vy += Math.sin(a) * f;
            }
          });
        });

        // Resize
        let rTimer;
        window.addEventListener("resize", () => {
          clearTimeout(rTimer);
          rTimer = setTimeout(build, 150);
        });

        build();
        requestAnimationFrame(draw);
      })();

// ═══════════════════════════════════════════════
// COUNTER ANIMATION — Hero Stats
// ═══════════════════════════════════════════════
(function () {
  const statsBlock = document.getElementById("heroStats");
  if (!statsBlock) return;

  function toKhmerNum(n) {
    return String(n).replace(/[0-9]/g, d => '០១២៣៤៥៦៧៨៩'[d]);
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
          statsBlock.querySelectorAll(".stat-num[data-target]").forEach((num) => {
            const target = parseInt(num.dataset.target, 10);
            const countEl = num.querySelector(".count-num");
            if (countEl) animateCount(countEl, target, 1800);
          });
        }
      });
    },
    { threshold: 0.4 }
  );
  observer.observe(statsBlock);
})();

// ═══════════════════════════════════════════════
// SERVICE CHIP SELECTOR — Contact Form
// ═══════════════════════════════════════════════
(function () {
  const chips = document.querySelectorAll('.svc-chip');
  const serviceInput = document.getElementById('serviceInput');
  if (!chips.length || !serviceInput) return;

  chips.forEach(chip => {
    chip.addEventListener('click', () => {
      chips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
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