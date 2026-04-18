# YOB Digital CTA Map (Simple)

Goal: help users move fast between Learn -> Trust -> Buy/Contact with clear CTA paths.

## 1) Home (`index.html`)
Primary CTA:
- ទាញយក Toolkit ឥតគិតថ្លៃ -> `resources.html` (Cross-page)

Secondary CTA:
- ស្នើសុំការពិគ្រោះឥតគិតថ្លៃ -> `#contact` (In-page)
- មើល Font ទាំងអស់ -> `fonts.html` (Cross-page)

## 2) Grow (`grow.html`)
Primary CTA:
- ចាប់ផ្តើម Free / Strategy Call -> `index.html#contact` (Cross-page)

Secondary CTA:
- Free resources / toolkit -> `resources.html` (Cross-page)
- Learn hub -> `yob-learning.html` (Cross-page)

## 3) Fonts (`fonts.html`)
Primary CTA:
- ទិញ Font / Buy Now -> payment/contact action (In-page button flow)

Secondary CTA:
- ទាញយក Free Font -> in-page card action (In-page)
- Need help choosing font -> `index.html#contact` (Cross-page)
- See proof/results -> `case-studies.html` (Cross-page)

Font buyer flow:
1. Discover font -> 2. Preview -> 3. Buy/Download -> 4. Need custom support -> `index.html#contact`

## 4) Resources (`resources.html`)
Primary CTA:
- ទាញយកឥតគិតថ្លៃ -> in-page download button (In-page)

Secondary CTA:
- Apply with guidance -> `index.html#contact` (Cross-page)
- Learn deeper -> `docs.html` or `yob-learning.html` (Cross-page)

## 5) Learning (`yob-learning.html`)
Primary CTA:
- រៀនវគ្គឥតគិតថ្លៃ -> in-page course start (In-page)

Secondary CTA:
- Tools Hub -> `resources.html` (Cross-page)
- Need business strategy -> `index.html#contact` (Cross-page)

## 6) Case Studies (`case-studies.html`)
Primary CTA:
- ស្នើសុំការពិគ្រោះយុទ្ធសាស្ត្រ -> `index.html#contact` (Cross-page)

Secondary CTA:
- Read documentation -> `docs.html` (Cross-page)
- Explore fonts/products -> `fonts.html` / `resources.html` (Cross-page)

## 7) Docs (`docs.html`)
Primary CTA:
- ទាញយក Toolkit ឥតគិតថ្លៃ -> `index.html#resources` or `resources.html` (Cross-page)

Secondary CTA:
- ស្នើសុំការពិគ្រោះ 30 នាទីឥតគិតថ្លៃ -> `index.html#contact` (Cross-page)

## Routing rule (easy)
- Same intent, same page -> use In-page link (`#section`)
- New intent, new action -> use Cross-page link (`page.html`)

## Font-specific UX rules
- For Khmer labels/buttons/headings: do not use uppercase and avoid positive letter-spacing.
- Keep line-height at least 1.35 for headings and 1.5+ for body/preview text.
- Keep CTA labels short (2-6 words) for cleaner wrapping on mobile.
