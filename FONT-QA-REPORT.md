# Font QA Report

Date: 2026-04-19
Scope: Enforce and verify Kantumruy Pro for English + Khmer across all pages.

## Summary

Status: PASS

- Global hard-lock is active in shared CSS.
- All HTML pages import Kantumruy Pro.
- No legacy font references found in workspace source (Bebas Neue, DM Sans, Hanuman, bebasneue, dmsans).
- Runtime checks on key pages return computed font as Kantumruy Pro.

## Implemented Enforcement

1. Added global text font lock in css/style.css.
2. Synced equivalent override in css/style.min.css.
3. Removed obsolete Bebas preload from yob-learning.html.

## Source Validation

### A) Legacy font reference scan

Result: PASS (no matches)

Pattern checked:
- Bebas Neue
- DM Sans
- Hanuman
- bebasneue
- dmsans

### B) Kantumruy import per HTML file

Result: PASS (14/14 pages)

- 404.html: True
- about.html: True
- case-studies.html: True
- contact.html: True
- docs.html: True
- fonts.html: True
- grow.html: True
- index.html: True
- privacy.html: True
- resources.html: True
- sitemap.html: True
- terms.html: True
- under-construction.html: True
- yob-learning.html: True

## Runtime Validation (Computed Style)

Result: PASS

Checked pages and body font-family:
- grow.html -> "Kantumruy Pro", sans-serif
- index.html -> "Kantumruy Pro", sans-serif
- contact.html -> "Kantumruy Pro", sans-serif
- resources.html -> "Kantumruy Pro", sans-serif
- yob-learning.html -> "Kantumruy Pro", sans-serif
- sitemap.html -> "Kantumruy Pro", sans-serif
- case-studies.html (local file) -> "Kantumruy Pro", sans-serif

## Files Touched in This Font Standardization Sequence

- css/style.css
- css/style.min.css
- yob-learning.html

## Follow-up: Script Defer Safety (2026-04-19)

Additional non-visual performance hardening was validated after this report:

- `js/form-utils.js` switched to deferred loading on:
	- `index.html`
	- `grow.html`
	- `contact.html`
	- `resources.html`
	- `fonts.html`
	- `under-construction.html`

Runtime smoke checks confirmed `window.YOBFormUtils` remained available and submit/track flows still executed.

## Notes

- A non-font 404 may still appear from other assets in browser console; this report only validates typography standardization.
- If a new page is added later, apply the same font import and shared CSS usage to remain compliant.
