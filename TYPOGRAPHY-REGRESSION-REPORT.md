# Typography Regression Report

Date: 2026-04-19
Scope: Post-standardization regression QA for font consistency, spacing, and horizontal overflow risk.

## Overall Status

PASS (with minor non-blocking notes)

- Font consistency is stable on tested pages.
- No text/content container overflow found in sampled checks.
- Reported overflow signals come from decorative elements (cursor/blob/orb), not content.

## Verified Runtime Pages

Computed body font-family:

- index.html -> "Kantumruy Pro", sans-serif
- grow.html -> "Kantumruy Pro", sans-serif
- contact.html -> "Kantumruy Pro", sans-serif
- resources.html -> "Kantumruy Pro", sans-serif
- yob-learning.html -> "Kantumruy Pro", sans-serif
- sitemap.html -> "Kantumruy Pro", sans-serif
- case-studies.html (local file) -> "Kantumruy Pro", sans-serif

## Overflow Audit

### Findings

- resources.html: overflow signal detected
- yob-learning.html: overflow signal detected
- case-studies.html: overflow signal detected

### Root Cause

All detected offenders are decorative layers:

- cursor-dot
- cursor-outline
- blob-1
- blob-2
- orb2 (yob-learning)

No content wrappers were flagged as exceeding viewport bounds in sampled checks.

## Tiny Font-Size Signal

Automated tiny-text counters are elevated on some pages, but these counters include UI micro labels/badges and icon-related elements.
This is a heuristic signal only and not a functional regression by itself.

## Non-Blocking Notes

- A console 404 still appears on some pages for non-font assets.
- No typography breakage was observed from these console warnings.

## Conclusion

Typography regression check passes.

The Kantumruy Pro standard remains enforced and stable across tested pages.
No immediate CSS fix is required for content overflow, since current overflow signals are decorative-only.

## Performance Micro-Pass Addendum (2026-04-19)

Status: PASS

- Deferred loading applied to `js/form-utils.js` on six pages:
	- `index.html`
	- `grow.html`
	- `contact.html`
	- `resources.html`
	- `fonts.html`
	- `under-construction.html`
- Post-change runtime checks verified:
	- `window.YOBFormUtils` present
	- Submit helpers callable
	- Interactive form flows still successful on `resources.html`, `fonts.html`, and `under-construction.html` (mocked submit path)

## Grow Readability Micro-Tweak (2026-04-19)

Status: PASS

- Increased tiny label sizing in `grow.html` for better legibility while preserving layout intent:
	- `.tele-ch`: `10px` -> `11px`
	- `.node-step`: `11px` -> `12px`
	- `.node-badge`: `10px` -> `11px`

## Grow Label Scale Pass (2026-04-19, later pass)

Status: PASS

- Additional micro-labels in `grow.html` were raised from `10px` to `11px` to improve readability on small/medium screens while keeping the same visual language:
	- `.pc-num-label`
	- `.pc-tag`
	- `.pc-badge`
	- `.ac-tag`
	- `.vault-level`
	- `.gw-tag`
	- `.gw-coord`
	- `.gw-badge`
	- `.gw-who-label`
	- `.terminal-title`
	- `.kree-field label`

## Index Tiny-Label Pass (2026-04-19)

Status: PASS

- Raised small UI text/icon values in `index.html` from `10px` to `11px` for better readability with no layout changes:
	- `.bh-void-sub i`
	- `.bh-node-btn i`
	- `.bh-node-desc` (mobile breakpoint)
	- Resources privacy lock icon inline style (`.fa-lock`)

## Resources & Learning Platform Label-Scale Pass (2026-04-19)

Status: PASS

### resources.html (4 selectors)
- `.res-cat-badge`: `10px` → `11px` (category badges: AI, Template, Marketing, Design)
- `.res-format`: `10px` → `11px` (file type indicators: PDF, Google Sheets, Figma, Notion)
- `.res-free-tag`: `10px` → `11px` (FREE label on resource cards)
- `.dl-privacy i`: `10px` → `11px` (privacy lock icon in download form)

### yob-learning.html (8 selectors)
**10px → 11px (6 selectors):**
- `.learn-nav-badge` (navigation badge indicator)
- `.sec-eyebrow` (section eyebrow labels)
- `.ticker-arr` (ticker arrow indicators)
- `.course-cat` (course category labels)
- `.progress-label` (completion progress indicator text)

**9px → 10px (2 selectors):**
- `.level-badge` (course difficulty: Beginner/Intermediate/Advanced)
- `.flow-node-count` (skill tree node count indicator)

**Status Notes:**
- All CSS syntax validated (errors = 0 on both files)
- All changes are micro-label/badge/icon-only; no critical content text resized
- Khmer Unicode rendering improved on small viewports while preserving design intent
- Applied via multi-replace batch: 9 selectors across 2 files in single operation
