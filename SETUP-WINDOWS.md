# Windows local run

From PowerShell:

```powershell
cd path\to\shree-gajanan-hospital-react-v2
node --version
npm --version
npm install
npm run dev
```

Open the Vite URL shown in PowerShell (normally `http://localhost:5173`).

## Build production files

```powershell
npm run build
npm run preview
```

The deployable output is in `dist`.

## GitHub + Netlify

```powershell
git init
git add .
git commit -m "Shree Gajanan Hospital React V2"
```

Push to GitHub, then configure Netlify:

- Build command: `npm run build`
- Publish directory: `dist`

## Cloudflare Pages

Use the same GitHub repository:

- Framework: Vite
- Build command: `npm run build`
- Output: `dist`

No database or backend is required for this version.
