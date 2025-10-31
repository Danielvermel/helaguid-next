# HealGuid (Next.js)

A static-exported website built with Next.js (Pages Router), Tailwind CSS, and Firebase (client-only, lazy-loaded) for newsletter submissions. The project is configured to export a fully static site to the `out` directory.

## Tech stack
- Next.js (Pages Router) — `src/pages/*`
- React 18
- Tailwind CSS 3
- Firebase (client SDK, lazy-loaded when needed)
- Swiper.js (carousels)
- next-image-export-optimizer (works with static export)

## Prerequisites
- Node.js 18+ recommended
- npm (or pnpm/yarn/bun)

No environment variables are required for a basic local run. Firebase config is embedded for client-side, on-demand usage.

## Getting started
1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the dev server (Turbopack enabled):
   ```bash
   npm run dev
   ```
3. Open http://localhost:3000

You can edit pages under `src/pages`. For example, the homepage is `src/pages/index.jsx`.

## Available scripts
- `npm run dev` — start development server
- `npm run build` — production build (also used by export)
- `npm run start` — start the production server (for SSR; not used when exporting)
- `npm run export` — static export to `out/`

## Project structure (high level)
```
/ public                # Static assets
/ src
  /components           # UI building blocks and sections
  /constants            # Static data (e.g., posts, faq, general)
  /pages                # Next.js Pages Router (index, blog, faq, etc.)
  /utils                # Utilities (e.g., lazy Firebase loader)
next.config.js          # Next.js config (static export, images, exportPathMap)
package.json            # Scripts and dependencies
README.md
```

Notable routes (see `next.config.js > exportPathMap`):
- `/` — Home
- `/blog` — Blog index (also dynamic post pages if configured)
- `/faq`, `/partners`, `/privacy-policy`, `/thank-you`, and others

## Static export & deployment
This project is configured for static export:
- `next.config.js` sets `output: "export"` and `images.unoptimized: true`.
- Run `npm run export` to generate a static site in `out/`.

You can deploy the `out/` folder to any static hosting provider:
- Vercel (as a static site)
- Netlify
- GitHub Pages
- Cloudflare Pages
- Any S3/Blob static hosting

If you prefer SSR on Vercel/Node (not static), remove or adjust `output: "export"` and review any Firebase/browser-only code paths accordingly.

## Images
Images are configured as unoptimized for export (`images.unoptimized: true`). Use `next/image` or plain `<img>` depending on your needs. The project includes `next-image-export-optimizer` to aid static export compatibility.

## Firebase (client-only, lazy)
Firebase is only loaded when needed to keep the initial bundle small:
- See `src/utils/lazyFirebase.js` for dynamic imports and lightweight Firestore usage.
- Some components (e.g., Newsletter, Footer, Hero) import `submitToFirestore` on demand.

No server-side Firebase usage is included by default. Ensure any Firebase interactions are guarded to run only in the browser.

## Styling
- Tailwind CSS is preconfigured. Update `tailwind.config.js` and `postcss.config.js` as needed.
- Utility classes are used throughout components and pages.

## Development tips
- Pages Router is used, not the App Router. Edit files in `src/pages/*` (e.g., `src/pages/index.jsx`, `src/pages/blog/index.jsx`).
- If you see references to `app/page.js` in older docs, ignore them — this project does not use the `app/` directory.
- Turbopack is enabled in dev for faster HMR (`next dev --turbopack`).

## Troubleshooting
- Dev server issues: delete `.next/` if present and restart.
- Static export issues: ensure every route you need is either static or included in `exportPathMap` in `next.config.js`.
- Images not loading after export: confirm `images.unoptimized: true` and correct paths under `public/`.

## Contributing
- Use conventional, clear commit messages.
- Keep components small and reusable.
- Follow the existing coding style and directory conventions.

## License
No license file is present. Add one (e.g., MIT) if you plan to open-source.
