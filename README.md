# Shree Gajanan Hospital — V2.1 Public Release Candidate

Professional static hospital website built with:

- React 18
- TypeScript
- Tailwind CSS
- Vite
- Netlify / Cloudflare Pages
- WhatsApp appointment integration

## V2.1 release changes

- Removed brochure/development wording from patient-facing sections.
- Rechecked doctor names, qualifications, registration numbers, OPD timings, emergency availability, phone and address against the supplied hospital material.
- Updated the address with PIN code `444906` and linked the exact public Google Maps hospital listing.
- Strengthened the privacy notice and WhatsApp consent wording.
- Added canonical URL, Open Graph metadata, structured-data refinements, `sitemap.xml`, and sitemap discovery in `robots.txt`.
- Improved accessibility contrast by using a darker pink accent and stronger registration-number text.
- Added a fixed mobile Call / WhatsApp action bar.
- Converted doctor, Gajanan Maharaj and hero-logo display assets to WebP and added image dimensions/lazy loading where appropriate.
- Added a Content Security Policy to the Netlify security headers.
- Retained the TypeScript `noEmit` fix required for the production build.

## Local setup

Requirements: Node.js 20+ and npm.

```bash
npm install
npm run dev
```

Open the local Vite URL shown in the terminal, normally `http://localhost:5173`.

## Production build

```bash
npm run build
npm run preview
```

The production output is generated in `dist/`.

## Netlify deployment

Build command:

```text
npm run build
```

Publish directory:

```text
dist
```

`netlify.toml`, SPA redirects, security headers, robots.txt and sitemap.xml are included.

## Cloudflare Pages deployment

- Framework preset: Vite
- Build command: `npm run build`
- Build output directory: `dist`

## Appointment flow

The site does not save appointment-form data to its own database. The patient reviews and sends the prepared appointment request through WhatsApp to:

`+91 95270 59133`

Shared hospital constants, WhatsApp number and the exact Maps link are centralized in:

`src/data/content.ts`

## Optimized website images

Display assets are under `public/images/`:

- `gajanan-maharaj.webp`
- `dr-kunal-bijwe.webp`
- `dr-ashwini-bijwe.webp`
- `hospital-logo-brochure.webp`
- `heartbeat-accent.png`

`hospital-logo-brochure.png` is retained for Open Graph/social sharing compatibility.

## Before final public promotion

The medical and operational details should remain under hospital control. If OPD timings, services, doctor credentials, hospital address, phone number or emergency availability change, update the website promptly and redeploy.
