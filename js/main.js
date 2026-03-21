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
        hamburger.classList.add("open");
        mobileDrawer.classList.add("open");
        document.body.style.overflow = "hidden";
      }
      function closeDrawer() {
        hamburger.classList.remove("open");
        mobileDrawer.classList.remove("open");
        document.body.style.overflow = "";
      }
      hamburger.addEventListener("click", () =>
        hamburger.classList.contains("open") ? closeDrawer() : openDrawer(),
      );
      drawerClose.addEventListener("click", closeDrawer);
      mobileDrawer.addEventListener("click", (e) => {
        if (e.target === mobileDrawer) closeDrawer();
      });

      // ✅ Back to Top
      const backTop = document.getElementById("backTop");
      window.addEventListener("scroll", () =>
        backTop.classList.toggle("show", window.scrollY > 400),
      );

      // --- Custom Cursor Logic (Pro Interaction) ---
      const cursorDot = document.querySelector(".cursor-dot");
      const cursorOutline = document.querySelector(".cursor-outline");

      // Only run on non-touch devices
      if (window.matchMedia("(pointer: fine)").matches) {
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
      // NIGHT SKY — YOB Digital Hero
      // យប់ ពន្លឺព្រះច័ន្ទ #e52c67
      // ═══════════════════════════════════════════════
      (function () {
        const canvas = document.getElementById("night-canvas");
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        const hero = document.getElementById("hero");

        let W,
          H,
          stars = [];
        let moon = { x: 0, y: 0, r: 0 };
        let mouse = { x: -9999, y: -9999 };

        // ── RESIZE ──
        function resize() {
          const rect = hero.getBoundingClientRect();
          W = canvas.width = rect.width;
          H = canvas.height = rect.height;
          moon.r = Math.min(W, H) * 0.11;
          moon.x = W * 0.82;
          moon.y = H * 0.22;
          buildStars();
        }

        // ── BUILD STARS ──
        function buildStars() {
          stars = [];
          const n = Math.floor((W * H) / 1600);
          for (let i = 0; i < n; i++) {
            const x = Math.random() * W;
            const y = Math.random() * H;
            const dx = x - moon.x,
              dy = y - moon.y;
            if (Math.sqrt(dx * dx + dy * dy) < moon.r * 1.5) continue;
            stars.push({
              x,
              y,
              r: Math.random() * 1.3 + 0.2,
              a: Math.random() * 0.75 + 0.15,
              speed: Math.random() * 0.7 + 0.2,
              phase: Math.random() * Math.PI * 2,
              pink: Math.random() < 0.12,
            });
          }
        }

        // ── DRAW LOOP ──
        function draw(ts) {
          const t = ts * 0.001;
          ctx.clearRect(0, 0, W, H);

          // Deep night sky
          const sky = ctx.createLinearGradient(0, 0, 0, H);
          sky.addColorStop(0, "#000000");
          sky.addColorStop(0.45, "#050108");
          sky.addColorStop(1, "#0a020e");
          ctx.fillStyle = sky;
          ctx.fillRect(0, 0, W, H);

          // Pink nebula atmosphere
          const neb = ctx.createRadialGradient(
            moon.x,
            moon.y,
            0,
            moon.x,
            moon.y,
            W * 0.5,
          );
          neb.addColorStop(0, "rgba(229,44,103,0.10)");
          neb.addColorStop(0.45, "rgba(140,15,65,0.04)");
          neb.addColorStop(1, "transparent");
          ctx.fillStyle = neb;
          ctx.fillRect(0, 0, W, H);

          // Secondary nebula bottom-left
          const neb2 = ctx.createRadialGradient(
            W * 0.1,
            H * 0.8,
            0,
            W * 0.1,
            H * 0.8,
            W * 0.3,
          );
          neb2.addColorStop(0, "rgba(80,5,50,0.07)");
          neb2.addColorStop(1, "transparent");
          ctx.fillStyle = neb2;
          ctx.fillRect(0, 0, W, H);

          // ── MOON GLOW LAYERS ──
          for (let i = 4; i > 0; i--) {
            const gr = ctx.createRadialGradient(
              moon.x,
              moon.y,
              0,
              moon.x,
              moon.y,
              moon.r * (1 + i * 0.45),
            );
            gr.addColorStop(0, `rgba(229,44,103,${0.08 / i})`);
            gr.addColorStop(0.5, `rgba(180,20,75,${0.03 / i})`);
            gr.addColorStop(1, "transparent");
            ctx.fillStyle = gr;
            ctx.beginPath();
            ctx.arc(moon.x, moon.y, moon.r * (1 + i * 0.45), 0, Math.PI * 2);
            ctx.fill();
          }

          // ── MOON BODY ──
          const mg = ctx.createRadialGradient(
            moon.x - moon.r * 0.28,
            moon.y - moon.r * 0.22,
            moon.r * 0.04,
            moon.x,
            moon.y,
            moon.r,
          );
          mg.addColorStop(0, "#fff5f8");
          mg.addColorStop(0.28, "#ffd0df");
          mg.addColorStop(0.6, "#e52c67");
          mg.addColorStop(0.82, "#8b1040");
          mg.addColorStop(1, "#2e0416");
          ctx.beginPath();
          ctx.arc(moon.x, moon.y, moon.r, 0, Math.PI * 2);
          ctx.fillStyle = mg;
          ctx.fill();

          // Moon craters
          [
            [-0.3, -0.25, 0.11],
            [0.22, 0.1, 0.07],
            [-0.1, 0.32, 0.09],
            [0.33, -0.18, 0.05],
          ].forEach(([cx, cy, cr]) => {
            const cg = ctx.createRadialGradient(
              moon.x + cx * moon.r,
              moon.y + cy * moon.r,
              0,
              moon.x + cx * moon.r,
              moon.y + cy * moon.r,
              cr * moon.r,
            );
            cg.addColorStop(0, "rgba(100,5,40,0.4)");
            cg.addColorStop(1, "transparent");
            ctx.beginPath();
            ctx.arc(
              moon.x + cx * moon.r,
              moon.y + cy * moon.r,
              cr * moon.r,
              0,
              Math.PI * 2,
            );
            ctx.fillStyle = cg;
            ctx.fill();
          });

          // Moon rim shimmer
          ctx.beginPath();
          ctx.arc(moon.x, moon.y, moon.r, 0, Math.PI * 2);
          const rim = ctx.createLinearGradient(
            moon.x - moon.r,
            moon.y - moon.r,
            moon.x + moon.r,
            moon.y + moon.r,
          );
          rim.addColorStop(0, "rgba(255,210,225,0.5)");
          rim.addColorStop(0.5, "transparent");
          rim.addColorStop(1, "rgba(229,44,103,0.2)");
          ctx.strokeStyle = rim;
          ctx.lineWidth = 1.5;
          ctx.stroke();

          // Moonlight beam to ground
          const ray = ctx.createLinearGradient(
            moon.x,
            moon.y + moon.r,
            moon.x,
            H,
          );
          ray.addColorStop(0, "rgba(229,44,103,0.07)");
          ray.addColorStop(1, "transparent");
          ctx.beginPath();
          ctx.moveTo(moon.x - moon.r * 1.8, H);
          ctx.lineTo(moon.x, moon.y + moon.r);
          ctx.lineTo(moon.x + moon.r * 1.8, H);
          ctx.closePath();
          ctx.fillStyle = ray;
          ctx.fill();

          // ── STARS ──
          stars.forEach((s) => {
            const twinkle = Math.sin(t * s.speed + s.phase) * 0.4 + 0.6;
            const dx = mouse.x - s.x,
              dy = mouse.y - s.y;
            const di = Math.sqrt(dx * dx + dy * dy);
            const prox = 110;
            let alpha = s.a * twinkle;
            let r = s.r;

            if (di < prox) {
              const f = 1 - di / prox;
              alpha = Math.min(1, alpha + f * 0.85);
              r = s.r * (1 + f * 1.8);
            }

            if (s.pink) {
              ctx.beginPath();
              ctx.arc(s.x, s.y, r * 1.1, 0, Math.PI * 2);
              ctx.fillStyle = `rgba(229,44,103,${alpha * 0.9})`;
              ctx.fill();
              if (alpha > 0.5) {
                const sg = ctx.createRadialGradient(
                  s.x,
                  s.y,
                  0,
                  s.x,
                  s.y,
                  r * 5,
                );
                sg.addColorStop(0, `rgba(229,44,103,${alpha * 0.25})`);
                sg.addColorStop(1, "transparent");
                ctx.beginPath();
                ctx.arc(s.x, s.y, r * 5, 0, Math.PI * 2);
                ctx.fillStyle = sg;
                ctx.fill();
              }
            } else {
              ctx.beginPath();
              ctx.arc(s.x, s.y, r, 0, Math.PI * 2);
              ctx.fillStyle = `rgba(255,240,248,${alpha})`;
              ctx.fill();
            }
          });

          // ── SHOOTING STAR ──
          const cycle = (t * 0.12) % 1;
          if (cycle < 0.07) {
            const p = cycle / 0.07;
            const sx = W * 0.55 + p * W * 0.3;
            const sy = H * 0.04 + p * H * 0.18;
            const tail = ctx.createLinearGradient(
              sx - 100 * p,
              sy - 50 * p,
              sx,
              sy,
            );
            tail.addColorStop(0, "transparent");
            tail.addColorStop(1, `rgba(229,44,103,${0.9 * (1 - p * 0.3)})`);
            ctx.beginPath();
            ctx.moveTo(sx - 100, sy - 50);
            ctx.lineTo(sx, sy);
            ctx.strokeStyle = tail;
            ctx.lineWidth = 1.5;
            ctx.stroke();
            const hg = ctx.createRadialGradient(sx, sy, 0, sx, sy, 6);
            hg.addColorStop(0, "rgba(255,190,215,0.95)");
            hg.addColorStop(1, "transparent");
            ctx.beginPath();
            ctx.arc(sx, sy, 6, 0, Math.PI * 2);
            ctx.fillStyle = hg;
            ctx.fill();
          }

          requestAnimationFrame(draw);
        }

        // Mouse tracking
        document.addEventListener("mousemove", (e) => {
          const rect = hero.getBoundingClientRect();
          mouse.x = e.clientX - rect.left;
          mouse.y = e.clientY - rect.top;
        });

        let rTimer;
        window.addEventListener("resize", () => {
          clearTimeout(rTimer);
          rTimer = setTimeout(resize, 150);
        });

        resize();
        requestAnimationFrame(draw);
      })();