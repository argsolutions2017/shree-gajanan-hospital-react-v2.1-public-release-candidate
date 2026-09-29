# V2.1 Public Release Candidate

## Patient-facing content
- Removed brochure/development wording from Services, Facilities and Patient Education.
- Reworded appointment privacy text for patients.
- Expanded the Privacy Notice to explain the WhatsApp handoff and sensitive-information limitations.

## Verified details
- Doctor names, qualifications and registration numbers retained from the supplied hospital brochure.
- OPD hours retained as 11:00 AM–4:00 PM and 6:00 PM–9:00 PM from the supplied hospital brochure.
- 24×7 emergency-care message retained from the supplied hospital brochure.
- Phone retained as +91 95270 59133.
- Address clarified as C/o Arihant Hospital, Dr. Rupali Jain Clinic, Pandhurna Chowk, Warud, Dist. Amravati, Maharashtra 444906.
- Google Maps links now target the exact public hospital listing using its Google place ID.

## SEO
- Canonical URL added.
- Open Graph metadata added.
- Structured data refined.
- sitemap.xml added.
- robots.txt now references the sitemap.
- Canonical/title/description/Open Graph URL update dynamically for `/privacy`.

## Accessibility and mobile UX
- Pink accent darkened from #E61E63 to #D7195A for stronger contrast.
- Doctor registration text now uses the accessible muted text color.
- Anchor scroll offset added for the sticky header.
- Fixed mobile Call / WhatsApp action bar added.

## Performance
- Doctor photos converted to WebP.
- Gajanan Maharaj image resized/compressed to WebP.
- Hero hospital logo converted to WebP for display.
- Image dimensions and lazy loading added where appropriate.

## Security
- Content-Security-Policy added to Netlify headers.
- Existing frame, MIME sniffing, referrer, permissions and cross-origin protections retained.

## Build
- `tsconfig.node.json` includes `noEmit: true` so `npm run build` works with `allowImportingTsExtensions`.
