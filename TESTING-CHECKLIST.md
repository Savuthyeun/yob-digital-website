# YOB Digital — 3-Week Production Checklist

**Timeline:** April 13-May 4, 2026  
**Goal:** Launch production-ready website with confidence

---

## **WEEK 1: TESTING (Apr 13-19)**

### **Phase 1A: Responsive Breakpoint Validation** ✓

Use Chrome DevTools to simulate devices

**1. Hero Section Padding Check**

- [ ] Desktop (1200px): Hero padding ~120px top/bottom
- [ ] Tablet (768px): Hero padding ~70-100px (scales via clamp)
- [ ] Mid-tablet (720px): Smooth transition, no jank
- [ ] Mobile (600px): Hero padding ~50-80px
- **Expected:** Smooth scaling, no sudden jumps

**2. Section Grid Stacking**

- [ ] Desktop (1200px): Grids showing 3-column layout
- [ ] Tablet (768px): Grids collapse to 1-column
- [ ] Mobile (600px): Single column confirmed
- **Expected:** Clean stacking, proper alignment

**3. Form Inputs**

- [ ] Desktop: Input height 48px
- [ ] Tablet (768px): Input height 44px
- [ ] Mobile (600px): Input height 40px
- **Expected:** Accessible touch targets on all devices

**4. Images & Borders** (index.html)

- [ ] Desktop: Image border inset -20px
- [ ] Tablet (768px): Border inset -15px
- [ ] Mobile (600px): Border inset -10px
- **Expected:** No text overlap, responsive scaling

### **Phase 1B: Cross-Browser Testing** ✓

Test on: Chrome, Firefox, Safari (if available), Edge

**Per Browser:**

- [ ] All 8 pages load without errors
- [ ] Navigation drawer opens/closes smoothly
- [ ] Hover states work (buttons, links)
- [ ] Mobile menu responsive
- [ ] Fonts render correctly (Khmer + English)
- [ ] No console errors

**Pages to Test:**

- [ ] index.html
- [ ] 
- [ ] yob-learning.html
- [ ] yobfont.html
- [ ] about.html
- [ ] case-studies.html
- [ ] resources.html
- [ ] docs.html

### **Phase 1C: Lighthouse Performance Audit** ✓

Chrome DevTools → Lighthouse → Analyze Page Load

**Target Scores:**

- [ ] Performance: ≥80
- [ ] Accessibility: ≥90
- [ ] Best Practices: ≥80
- [ ] SEO: ≥90

**If scores < targets:**

- Run report
- Identify blocking issues
- Fix high-priority items (see OPTIMIZATION-PLAN.md)

### **Phase 1D: Mobile Device Testing** (Physical if available)

**Test on:**

- [ ] iPhone (375px viewport)
- [ ] iPad (768px viewport)
- [ ] Android tablet (720px viewport)

**Actions:**

- Tap all buttons, verify no lag
- Scroll sections, check animations smooth
- Open forms, test inputs
- Test custom cursor (should fallback gracefully)

---

## **WEEK 2: DEPLOYMENT (Apr 20-26)**

### **Phase 2A: GitHub Preparation**

- [ ] All files committed and pushed
- [ ] No untracked files in git status
- [ ] Latest changes on `main` branch
- [ ] No merge conflicts

### **Phase 2B: Netlify Deploy**

- [ ] Connect GitHub to Netlify
- [ ] Configure build settings (no build step needed)
- [ ] Set publish directory: `/` (root)
- [ ] Deploy to production
- [ ] Verify all 8 pages accessible live

### **Phase 2C: Post-Deploy Verification**

- [ ] www.yobdigital.netlify.app loads
- [ ] All pages accessible via URL
- [ ] Navigation drawer works live
- [ ] Forms submit correctly
- [ ] Custom cursor functional
- [ ] 404.html shows for bad URLs

### **Phase 2D: Live Device Testing**

- [ ] Test on live Netlify URL (not localhost)
- [ ] Verify mobile view on real device
- [ ] Check page load speed on 4G
- [ ] Verify Khmer text renders

---

## **WEEK 3: OPTIMIZATION (Apr 27-May 4)**

### **Phase 3A: Image Optimization**

- [ ] Convert PNG/JPG to WebP format
- [ ] Add `loading="lazy"` to all images below fold
- [ ] Set `srcset` for responsive images
- [ ] Verify og-cover.jpg optimized (< 200KB)

### **Phase 3B: CSS/JS Minification**

- [ ] Minify css/style.css → css/style.min.css (already done)
- [ ] Review for dead code
- [ ] Check for unused CSS variables
- [ ] Verify js/main.js optimized

### **Phase 3C: Analytics Setup**

- [ ] Create Google Analytics 4 property
- [ ] Add tracking ID to all pages
- [ ] Set up events (button clicks, form submissions)
- [ ] Verify data flowing in GA dashboard

### **Phase 3D: SEO Final Check**

- [ ] All `<title>` tags descriptive
- [ ] All `og:` meta tags present
- [ ] robots.txt configured
- [ ] sitemap.xml linked in robots.txt
- [ ] Structured data (if applicable)

### **Phase 3E: Performance Optimization**

- [ ] Rerun Lighthouse (should see improvements)
- [ ] Check LCP (Largest Contentful Paint) < 2.5s
- [ ] Check CLS (Cumulative Layout Shift) < 0.1
- [ ] Monitor Core Web Vitals

---

## **✅ FINAL LAUNCH CHECKLIST**

Before going fully public:

- [ ] Test on 3+ browsers
- [ ] Test on 3+ devices
- [ ] Lighthouse scores all ≥80
- [ ] No console errors
- [ ] All pages live and accessible
- [ ] Forms working
- [ ] Analytics tracking
- [ ] Custom domain (future: buy yobdigital.kh or .com)

---

## **📊 Weekly Tracking**

**Week 1 Status:** ****\_\_\_**** (%)  
**Week 2 Status:** ****\_\_\_**** (%)  
**Week 3 Status:** ****\_\_\_**** (%)

**Launch Date:** May 4, 2026 ✅

---

**Notes:**

- Use Chrome DevTools responsive design mode for 768px/720px testing
- Toggle Device Toolbar: `Ctrl+Shift+M` (Windows) or `Cmd+Shift+M` (Mac)
- Document any bugs on GitHub Issues
- Screenshot issues for reference
