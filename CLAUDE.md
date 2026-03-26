# YOB DIGITAL — Claude Code Project Memory
> Auto-loaded by Claude Code on every session. DO NOT delete this file.
> Last updated: 2026 | Site: https://yobdigital.netlify.app

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
├── docs.html                    ← Documentation
├── about.html                   ← About YOB
├── case-studies.html            ← Case Studies
├── resources.html               ← Free Resources / Content Hub
├── yob-learning.html            ← Learning Hub (courses)
├── css/
│   └── style.css                ← ALL shared styles (96KB)
├── js/
│   ├── main.js                  ← Cursor, constellation, scroll reveal, drawer
│   └── load-components.js       ← Injects nav into id="nav-placeholder"
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
  Tutorial      → #videos (index only) or index.html#videos
  Documentation → docs.html
  Case Studies  → case-studies.html
Products ▾
  Yob Fonts     → fonts.html
  Free Resources→ resources.html
ទំនាក់ទំនង    → #contact (same page) or index.html#contact
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
section-dark-alt    → slightly lighter background var(--dark2)
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

## 🚦 KNOWN ISSUES TO FIX (Priority)

| File | Issue | Fix |
|------|-------|-----|
| `index.html` | Missing `<meta name="description">` | Add description meta tag |
| `grow.html` | Missing canonical + og:title | Add SEO meta tags |
| `fonts.html` | Missing canonical + og:title | Add SEO meta tags |
| `docs.html` | ❌ Missing nav-placeholder, cursor, blob, load-components.js, style.css | Full restructure needed |
| `about.html` | Missing canonical | Add canonical link |
| `case-studies.html` | Missing canonical + og:title | Add SEO meta tags |
| `yob-learning.html` | Missing canonical + og:title + og:image + nav-placeholder | Fix head + nav |
| `resources.html` | Missing canonical + og:title | Add SEO meta tags |
| `style.css` | Missing `prefers-reduced-motion` media query | Add at end of file |
| `style.css` | Missing `will-change: transform` on animated elements | Add to float cards, pillar, track-card |

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

---

## 📊 CSS FILE MAP (style.css — 96KB)

Key sections in order:
```
:root variables
Global reset + typography (Khmer-safe)
Nav + Dropdown + Mobile Drawer
Hero section (float cards, scroll indicator)
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
Keyframes (marquee, pulse, float, scrollDot, borderPulse, floatCard, spinSlow)
Back-to-top button
Sticky CTA bar
Responsive breakpoints (18 media queries, main: 900px + 600px)
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

---

*YOB.DIGITAL — Built by Yeun Savuth (Babu) | yobdigital.netlify.app*
