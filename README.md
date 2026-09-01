# HeartFirst Surat

Website for Dr. Atul D. Abhyankar, Interventional Cardiologist, Surat.

## Stack

- Vite + React 19 + TypeScript
- `react-router` v7 (declarative) — clean URLs (`/about`, `/career-highlights`, …);
  old `.html` paths redirect to the clean URL (301-style stub + client redirect)
- Tailwind CSS v4 (`@tailwindcss/vite`), design tokens in `src/styles/index.css`
- Custom SSR + prerender: every route is emitted as static HTML in `dist/` so
  crawlers and no-JS clients get full content
- Per-page SEO (`src/seo/`): title, meta description, canonical, Open Graph,
  Twitter card, and `Physician` JSON-LD on the home page

## Commands

```bash
pnpm dev       # dev server
pnpm test      # vitest
pnpm lint      # eslint
pnpm build     # tsc + client build + ssr build + prerender -> dist/
pnpm preview   # serve dist/
```

Deploy: serve `dist/` as static files with an SPA fallback to `index.html`.
Each route is emitted as both `dist/<seg>.html` and `dist/<seg>/index.html`, so
`/about`, `/about/` and `/about.html` all resolve on any static host. Old paths
(`/career-Hightlight.html`, `/trials.html`, …) are redirect stubs to the clean URL.

## Content

All page copy is transcribed verbatim from the eight live pages of
heartfirstsurat.com and lives in typed modules under `src/content/`.
The publications list and the multicentre-trials table are generated from the
captured source pages in `scripts/source-pages/`:

```bash
node scripts/extract-publications.mjs   # -> src/content/publications.ts
node scripts/extract-trials.mjs         # -> src/content/trials.ts
node scripts/make-og.mjs                # -> public/og-cover.png
```

`src/content/cv.ts`, `about.ts`, `facilities.ts`, `services.ts`, `research.ts`
and `home.ts` are hand-transcribed from the same sources.
