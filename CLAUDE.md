# YOB DIGITAL — Claude Code Project Memory
> Auto-loaded by Claude Code on every session. DO NOT delete this file.
> Last updated: 2026-03-27 | Site: https://yobdigital.netlify.app

---

## 🏢 PROJECT OVERVIEW

**Project:** YOB Digital — AI & Digital Skills for Cambodia
**Owner:** Yeun Savuth (Babu)
**Brand:** YOB.DIGITAL — "យប់ មានតម្លៃ ដូចពន្លឺ"
**Deploy:** GitHub (Savuthyeun/yob-digital-website) → Netlify (yob-digital-kh)
**Stack:** Vanilla HTML + CSS + JS — NO framework, NO npm build step

---

## 📁 SITE STRUCTURE — ALL PAGES

```
yob-digital-website/
├── CLAUDE.md                    ← You are here
├── index.html                   ← Homepage (main)
├── grow.html                    ← Growth Roadmap
├── fonts.html                   ← Khmer Font Shop
├── docs.html                    ← Documentation (has own sidebar nav — no shared nav)
├── about.html                   ← About YOB
├── case-studies.html            ← Case Studies
├── resources.html               ← Free Resources / Content Hub
├── yob-learning.html            ← Learning Hub (courses) — Eternity Version
├── css/
│   └── style.css                ← ALL shared styles (~97KB)
├── js/
│   ├── main.js                  ← Cursor, constellation, scroll reveal, drawer
│   └── load-components.js       ← Injects nav into id="nav-placeholder"
├── components/
│   ├── nav.html                 ← Shared nav (injected by load-components.js)
│   └── footer.html              ← Shared footer (injected by load-components.js)
└── images/
    ├── favicon.png
    └── og-cover.jpg
```

### Page Titles Pattern
```
index.html        → YOB Digital — AI & Digital Skills for Cambodia
grow.html         → Grow with YOB — Your Digital Growth Roadmap
fonts.html        → Khmer Font Shop — YOB Digital
docs.html         → Documentation — YOB Digital
about.html        → YOB Digital | យប់មានតម្លៃដូចពន្លឺ
case-studies.html → Case Studies — YOB Digital
resources.html    → YOB Content Hub — Free Resources & Templates
yob-learning.html → YOB Learning — AI & Digital Skills for Cambodia
```

### Nav Drawer Links (MASTER — must match in ALL pages)
```
Grow with Yob → grow.html
Learn ▾
  Tutorial      → index.html#videos
  YOB Learning  → yob-learning.html   ← ADDED
  Documentation → docs.html
  Case Studies  → case-studies.html
Products ▾
  Yob Fonts     → fonts.html
  Free Resources→ resources.html
About YOB     → about.html
ទំនាក់ទំនង  → #contact (same page) or index.html#contact
```

---

## 🎨 BRAND — COLORS & FONTS

### CSS Variables (defined in css/style.css :root)
```css
--dark:        #080b10   /* Main background — DARKEST */
--dark2:       #0d1117   /* Card background */
--dark3:       #161b22   /* Subtle borders/bg */
--gold:        #e52c67   /* ★ YOB PINK — primary accent. NEVER use actual gold/yellow */
--gold-glow:   rgba(229, 44, 103, 0.2)
--gray:        #8b949e   /* Secondary text */
--white:       #ffffff   /* Primary text */
--border:      rgba(255, 255, 255, 0.08)
--border2:     rgba(255, 255, 255, 0.14)
--moon-size:   340px     /* Moon / singularity-wrapper size */
--fh:          "Bebas Neue", "Kantumruy Pro", "Hanuman", serif    /* Display/heading */
--fk:          "Kantumruy Pro", "Hanuman", serif                  /* Khmer body */
--fb:          "Kantumruy Pro", "Hanuman", "DM Sans", sans-serif  /* Body */
--radius:      16px
--radius-btn:  50px
--t:           0.3s cubic-bezier(0.4, 0, 0.2, 1)
--smooth:      0.6s cubic-bezier(0.16, 1, 0.3, 1)
--max:         1200px
```

### ⚠️ CRITICAL COLOR RULES
- `--gold: #e52c67` = YOB PINK/MAGENTA. This is NOT gold/yellow.
- ALWAYS use `var(--gold)` — never hardcode `#e52c67` in HTML
- NEVER use actual gold/yellow (#C8A456, #E8C47A, #F8DFA0) — breaks branding
- If integrating external page with `--gold: #C8A456` → change to `#e52c67`
- Font colors: always `var(--white)`, `var(--gray)`, `var(--gold)` — no hardcoded hex

---

## 📐 HTML TEMPLATE — EVERY PAGE MUST FOLLOW THIS

### `<head>` Template (copy exactly)
```html
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>[PAGE NAME] — YOB Digital</title>
  <meta name="description" content="[Khmer/English description 150 chars max]" />

  <!-- SEO -->
  <link rel="canonical" href="https://yobdigital.netlify.app/[page].html" />
  <link rel="icon" type="image/png" href="images/favicon.png" />
  <link rel="apple-touch-icon" href="images/favicon.png" />

  <!-- Open Graph -->
  <meta property="og:title" content="[PAGE NAME] — YOB Digital" />
  <meta property="og:description" content="[description]" />
  <meta property="og:image" content="https://yobdigital.netlify.app/images/og-cover.jpg" />
  <meta property="og:url" content="https://yobdigital.netlify.app/[page].html" />
  <meta property="og:type" content="website" />

  <!-- DNS Prefetch -->
  <link rel="dns-prefetch" href="https://cdnjs.cloudflare.com" />
  <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
  <link rel="dns-prefetch" href="https://fonts.gstatic.com" />

  <!-- Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Hanuman:wght@400;700;900&family=Bebas+Neue&family=DM+Sans:wght@300;400;500;600;700&family=Kantumruy+Pro:wght@400;500;700&display=swap" rel="stylesheet" />

  <!-- Font Awesome (async load) -->
  <link rel="preload" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" as="style" onload="this.onload=null;this.rel='stylesheet'" />
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" />

  <!-- GSAP (defer — non-blocking) -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js" defer></script>

  <!-- YOB Shared Styles — ALWAYS LAST -->
  <link rel="stylesheet" href="css/style.css" />

  <!-- Page-specific styles (only if needed) -->
  <style>
    /* Page-specific CSS here — use var() for ALL colors */
  </style>
</head>
```

### `<body>` Opening (copy exactly — NEVER skip any element)
```html
<body>
  <!-- Custom Cursor -->
  <div class="cursor-dot"></div>
  <div class="cursor-outline"></div>

  <!-- Background Blobs -->
  <div class="blob blob-1"></div>
  <div class="blob blob-2"></div>

  <!-- Nav injected here by load-components.js — DO NOT put nav HTML here -->
  <div id="nav-placeholder"></div>

  <!-- Mobile Drawer — copy full block from index.html, update links if new page added -->
  <div class="mobile-drawer" id="mobileDrawer">
    <button class="drawer-close" id="drawerClose">
      <i class="fas fa-times"></i>
    </button>
    <a href="grow.html" onclick="closeDrawer()">Grow with Yob</a>
    <div class="drawer-group">
      <button class="drawer-group-toggle">
        Learn <i class="fas fa-chevron-down"></i>
      </button>
      <div class="drawer-group-items">
        <a href="index.html#videos" onclick="closeDrawer()">Tutorial</a>
        <a href="yob-learning.html" onclick="closeDrawer()">YOB Learning</a>
        <a href="docs.html" onclick="closeDrawer()">Documentation</a>
        <a href="case-studies.html" onclick="closeDrawer()">Case Studies</a>
      </div>
    </div>
    <div class="drawer-group">
      <button class="drawer-group-toggle">
        Products <i class="fas fa-chevron-down"></i>
      </button>
      <div class="drawer-group-items">
        <a href="fonts.html" onclick="closeDrawer()">Yob Fonts</a>
        <a href="resources.html" onclick="closeDrawer()">Free Resources</a>
      </div>
    </div>
    <a href="about.html" onclick="closeDrawer()">About YOB</a>
    <a href="index.html#contact" onclick="closeDrawer()" class="d-cta">ទំនាក់ទំនង</a>
  </div>

  <!-- PAGE CONTENT HERE -->

```

### `<body>` Closing (copy exactly — always last 2 lines before </body>)
```html
  <script src="js/load-components.js"></script>
  <script src="js/main.js" defer></script>
</body>
</html>
```

---

## 🧱 SECTION PATTERN

Every section MUST follow this structure:
```html
<section id="[unique-id]" class="[section-class]">
  <div class="container">

    <div class="section-header reveal">
      <span class="section-tag">[Eyebrow tag — short Khmer/English]</span>
      <h2 class="section-title">
        [Title] <span class="gradient-text">[Accent word]</span>
      </h2>
      <!-- Optional background watermark: -->
      <span class="section-bg-num">[SHORT]</span>
    </div>

    <!-- Content blocks — ALL need class="reveal" for scroll animation -->
    <div class="[content-class] reveal">
      ...
    </div>

  </div>
</section>
```

### Section Classes Available
```
(no class)          → default dark background var(--dark)
section-dark-alt    → slightly lighter background var(--dark3) + subtle border-top
```

### Scroll Animation
- Add `class="reveal"` to ANY element that should animate on scroll
- `main.js` handles IntersectionObserver automatically — no extra JS needed
- Do NOT manually write scroll JS — `reveal` class is enough

---

## 🔘 BUTTONS

```html
<!-- Primary (pink gradient) -->
<a href="..." class="btn-primary">Button Text</a>

<!-- Outline (transparent + pink border) -->
<a href="..." class="btn-outline">Button Text</a>

<!-- With icon -->
<a href="..." class="btn-primary">
  <i class="fas fa-paper-plane"></i> ចាប់ផ្ដើម Free
</a>
```

**DO NOT** create custom button classes. Use only `btn-primary` and `btn-outline`.

---

## 🖼️ IMAGES

```html
<!-- ALL images MUST have loading="lazy" and alt -->
<img src="..." alt="[description]" loading="lazy" />

<!-- Hero/above-fold image (exception — no lazy) -->
<img src="..." alt="[description]" />
```

---

## 🏠 INDEX.HTML — SECTION ORDER & SPECIAL FEATURES

### Current Section Order
```
1. #hero              — Moon singularity + YEVA + orbiting float cards + star canvas
2. .what-is-yob-section — "តើយប់ឌីជីថលគឺជាអ្វី?"
3. #ecosystem         — Black Hole Marvel animation (YOB Ecosystem)
4. #how-it-works      — 4-step timeline
5. #typography        — Font teaser (3 cards)
6. #portfolio         — Case studies
7. #testimonials      — Client testimonials
8. #pricing           — HIDDEN (display:none) — not needed yet
9. #videos            — Video tutorials
10. #resources        — Free resources
11. #contact          — Contact form
12. Footer
```

### Hero Section Special Features

**Moon / Singularity Wrapper** (`.singularity-wrapper`, `--moon-size: 340px`):
- Sacred aura SVG rings
- Moon body with neural mesh + scan line + white hole + moon core
- **YEVA Holographic Face** — AI assistant face that appears on scroll
  - Scroll phases: `moon-phase-1` (>70px), `moon-phase-2` (>220px), `moon-phase-3` (>480px)
  - Pupils follow mouse position (JS)
  - Click in phase-3 → blink animation
- **JARVIS Audio** — Web Audio API (no audio files needed)
  - First CLICK unlocks AudioContext (browser autoplay policy)
  - HOVER → 3-layer tech ping (sine sweep + triangle sparkle + deep pulse)
  - CLICK → ping + Khmer SpeechSynthesis voice "សួស្ដី"

**Orbit Float Cards** (inside `.singularity-wrapper`):
- 4 cards orbit the moon using CSS `orbit-arm` + counter-rotation technique
- Classes: `.orbit-arm .oa-1/2/3/4` — 20s orbit, evenly staggered by 5s
- Cards: ⚡ 10x Productivity | 📈 3.8x ROAS | 👥 500+ SMEs | 🇰🇭 100% Khmer
- **Hidden on mobile** (≤900px) — `display: none`
- CSS technique: arm rotates via `@keyframes orbitSpin`, card counter-rotates via `@keyframes counterSpin` to stay upright

**Marquee:** Hidden (`<!-- ══ MARQUEE ══ (hidden) -->`) — can restore if needed

### Ecosystem Section (`#ecosystem`)
- **Black Hole Marvel design** with Canvas particle system
- HTML canvas: 140 pink/purple particles spiral into event horizon
- 3 accretion disk rings (`conic-gradient` + `scaleY` ellipse trick, speeds: 5s/9s/15s)
- Photon ring with pulsing glow
- Event horizon void with "YOB / DIGITAL" branding
- SVG animated dashed beam lines to 4 orbital nodes
- 4 glass morphism orbital nodes: LEARN / GROW / PRODUCTS / CONNECT
- Mobile (≤640px): collapses to 2×2 grid, canvas/disks hidden
- Canvas JS: Black Hole Canvas Particles script before `</body>`

---

## 🚦 KNOWN ISSUES (Updated)

| File | Issue | Status |
|------|-------|--------|
| `docs.html` | Has own sidebar nav — shared nav/drawer intentionally hidden via CSS | ⚠️ By design, needs full restructure eventually |
| `style.css` | `will-change` missing on `.track-card`, `.pillar` | Pending |
| Video cards in `#videos` | `href="#"` placeholder links — need real YouTube URLs | Pending |

### Previously Fixed ✅
- All pages: canonical, og:title, og:image, nav-placeholder, mobile-drawer
- `yob-learning.html` added to mobile drawer (all 8 pages)
- `style.css`: `will-change: transform` added to `.hero-float-card`
- `style.css`: `prefers-reduced-motion` media query added
- `style.css`: `border-top` added to `.section-dark-alt` for section separation
- `#ecosystem`: `padding: 100px 0` added
- `.section-sub`: centered with `margin: auto` + `text-align: center`
- `.yeva-sublabel`: `monospace` → `var(--fb)`
- `.testi-qmark`: `Georgia` → `var(--fh)`

---

## ⛔ RULES — NEVER DO THIS

```
❌ Hardcode nav HTML in body — use id="nav-placeholder" ONLY
❌ Use --gold as actual yellow/gold color — it is #e52c67 (PINK)
❌ Hardcode hex colors in HTML style="" attributes — use var()
❌ Use font-family directly — use var(--fh), var(--fk), var(--fb)
❌ Forget cursor-dot / cursor-outline / blob-1 / blob-2 in body
❌ Forget mobile drawer in new pages
❌ Forget load-components.js + main.js at body close
❌ Add defer to load-components.js — it must run SYNCHRONOUSLY
❌ Skip class="reveal" on content blocks — scroll animation breaks
❌ Use absolute URLs for internal links — use relative paths only
❌ Create new CSS variables that duplicate existing ones
❌ Integrate external CSS with --gold: #C8A456 — change to #e52c67
❌ Add <nav> HTML directly — nav is injected by JS automatically
❌ Use PowerShell Set-Content / Get-Content on HTML files — breaks UTF-8 Khmer encoding
❌ Put orbit cards outside .singularity-wrapper — they must be children of it
```

---

## ✅ RULES — ALWAYS DO THIS

```
✅ css/style.css link LAST in <head> (after fonts)
✅ GSAP with defer attribute
✅ All external CDN scripts with defer or async (except load-components.js)
✅ class="reveal" on every animated section block
✅ loading="lazy" on all images except above-fold
✅ All new pages: add link to mobile drawer in ALL existing pages
✅ Page title format: "[Name] — YOB Digital"
✅ Use gradient-text class for accent words in h2 headings
✅ Test on mobile after every change
✅ All internal links: relative paths (grow.html NOT /grow.html)
✅ When editing HTML files with PowerShell: use [System.IO.File]::ReadAllText / WriteAllText with UTF-8 encoding — never Get-Content / Set-Content
```

---

## 🛠️ COMMON TASKS — QUICK REFERENCE

### Add a new page
1. Copy `<head>` template from above → update title, description, canonical, og tags
2. Copy `<body>` opening exactly (cursor + blobs + nav-placeholder + full drawer)
3. Add your sections using section pattern above
4. Copy `<body>` closing exactly
5. Add new page link to drawer in ALL existing .html files (Learn or Products group)

### Fix a broken page
1. Check for missing: nav-placeholder, cursor-dot, blob-1, load-components.js
2. Check CSS: brace balance `{` = `}`, no orphan `}`, no comment text without `/* */`
3. Check --gold value: must be `#e52c67` NOT `#C8A456`
4. Check load-components.js has NO defer attribute

### Add section to existing page
1. Give section a unique `id` attribute
2. Use `section > .container > .section-header.reveal` structure
3. Add `class="reveal"` to all content blocks
4. Use `var(--gold)` for accents, `var(--fh)` for headings

### Update nav links across all pages
Update mobile drawer in ALL these files simultaneously:
`index.html`, `grow.html`, `fonts.html`, `docs.html`, `about.html`,
`case-studies.html`, `resources.html`, `yob-learning.html`

### Show/hide a section
- Hide: add `style="display:none"` to the `<section>` tag
- Show: remove `style="display:none"`
- Currently hidden: `#pricing`, Marquee strip

---

## 📊 CSS FILE MAP (style.css — ~97KB)

Key sections in order:
```
:root variables (incl. --moon-size: 340px)
Global reset + typography (Khmer-safe)
Nav + Dropdown + Mobile Drawer
Hero section — Moon singularity, orbit cards (@keyframes orbitSpin/counterSpin)
What is YOB section (wiy-*)
Services / Tracks section
Typography / Font Shop section (f-card)
Portfolio / Case Studies
Testimonials (gradient avatar, rating bar)
Pricing section
Videos section
Resources section
About section (animated border, mini stats)
Contact / Form section
Footer (grid, social links)
Keyframes (pulse, float, scrollDot, borderPulse, floatCard, spinSlow, orbitSpin, counterSpin, bhSpin, bhPhoton, bhBeam)
Back-to-top button
Sticky CTA bar
Moon / Singularity Wrapper + YEVA face CSS
Performance: will-change, prefers-reduced-motion
Responsive breakpoints (main: 900px + 600px)
```

---

## 🔗 EXTERNAL DEPENDENCIES (exact versions — do not upgrade without testing)

```
Google Fonts:  Hanuman 400/700/900 + Bebas Neue + DM Sans 300-700 + Kantumruy Pro 400/500/700
Font Awesome:  6.5.0 (cdnjs.cloudflare.com)
GSAP:          3.12.2 (cdnjs.cloudflare.com) — defer
```

---

## 💬 SOCIAL LINKS (consistent across all pages)

```
Facebook:  https://facebook.com/yobdigital
Telegram:  https://t.me/yobdigital
LinkedIn:  https://linkedin.com/in/yobdigital
YouTube:   https://youtube.com/@yobdigital
```

---

## 📝 WHEN CLAUDE CODE STARTS A NEW TASK

Before writing any code, read this file and confirm:
1. Which file(s) are being modified?
2. Does the task require updating ALL pages' mobile drawers?
3. Are we adding CSS? → append to css/style.css, never inline in HTML
4. Are we adding a new page? → follow full template above
5. Is there a --gold color conflict in external code? → fix to #e52c67
6. Does the task touch index.html Hero? → be careful not to break YEVA scroll phases or orbit cards

---

*YOB.DIGITAL — Built by Yeun Savuth (Babu) | yobdigital.netlify.app*
