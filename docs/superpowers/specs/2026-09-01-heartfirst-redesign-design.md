# HeartFirst Surat — Full Redesign Design Spec

Date: 2026-09-01
Status: Approved (visual direction + scope). Pending: implementation plan.

## 1. Goal

Replace the current homepage/inner-page design with a new, cohesive visual system
("The Index"), convert all remaining raw-HTML content into real React components,
make every page responsive from 320px up, and add proper per-page SEO with static
prerendering. **No content is removed** — the site must contain the union of:

- what the current React app renders, and
- everything on the eight live pages of https://heartfirstsurat.com/.

## 2. Visual direction — "The Index"

Editorial / architectural. Light only, full-bleed (no page gutters).

- **Typography**
  - Display: **Fraunces** (light weights 300–400, italic used for indigo accent words).
  - UI / labels / nav: **Inter** (500–600, wide letter-spacing for micro-labels).
  - Long-form body (citations, CV prose): **Newsreader** serif.
  - Fluid type scale; display headline ~clamp(2rem, 6vw, 4rem).
- **Colour tokens**
  - `--paper` `#ffffff` primary canvas.
  - `--indigo` `#3f51b5` — headings detail, active nav, full-bleed section bands, appointment bar.
  - `--indigo-deep` `#31408f` — hover/pressed on indigo.
  - `--yellow` `#ffea00` — accent ONLY: the nav/eyebrow dot, one headline underline, a single CTA per band. Never a background for large areas.
  - `--ink` `#1a1c2b` text; `--mute` `#5c5e6d` secondary; `--line` `#dcdce4` hairlines.
- **Signature elements**
  - Left vertical navigation = a "table of contents": wordmark, then items `01`–`08`
    with page numbers, active item bold + indigo number.
  - Each page opens with a **masthead**: micro eyebrow (yellow dot + label), Fraunces
    headline with one italic indigo word, and an oversized ghosted numeral (page number)
    behind the text.
  - Hairline rules separate every section; generous vertical rhythm.
  - Full-bleed indigo **appointment bar** repeated at the foot of every page
    (consultation hours + one yellow "Book appointment" CTA), then the footer.
- **Imagery**: doctor portrait rendered as a duotone-indigo treatment; clinic and
  procedure photos full-bleed within their section, with hairline captions.

## 3. Information architecture — 8 routes

Legacy `.html` paths are preserved so existing inbound/indexed links keep working.
`/index.html` and `/home.html` redirect to `/`.

| # | Route | Nav label | Content (verbatim where it is data) |
|---|-------|-----------|--------------------------------------|
| 01 | `/` | Home | Masthead hero: "Dr. Atul D. Abhyankar", credential line `MD, DM, FACC, FSCAI, FAPSIC, FCSI, FISE — Interventional Cardiologist`; tagline "South Gujarat's Most Senior & Experienced Interventional Cardiologist"; stat band (31+ years, 17,000+ interventions, 105+ publications, 25+ international trials); quick-access links (Know your Doctor, Clinic Information & Facilities, Hospital Attachments & Procedures, Academic Activities/Research/Education, Information & Videos for Patients, Appointments & Emergency, Recent Cases & CMEs); chapter index linking all 7 inner pages; contact strip (phones 98241-45738 / 90992-31122, email atulda@hotmail.com). |
| 02 | `/about.html` | About the Doctor | Profile summary + philosophy quote; the "Know About Dr Atul Abhyankar" resource list (short career video, short CV & career highlights, academic & medical education activities / industry collaborations, civilian honours/awards/felicitations, full curriculum vitae, scientific publications/books/editorial activities, clinical research, philanthropy & editorial); qualifications & fellowships grid. Links into pages 03/04/07 for the deep content. |
| 03 | `/career-Hightlight.html` | Career Highlights | **Career Highlights** bullet list (14 items incl. DM Mumbai, FSCAI, FACC, 31 yrs / 17,000+ interventions, 50+ faculty invitations, Course Director 6 conferences, 105+ publications & 2 best-paper awards, editorial consultant to 7 journals, PI 2 first-in-man + 10 phase-4 stent trials, PI 25+ international trials, DNB superspecialty teacher, India Live 2019 live-case operator, PACT ×3, SECT ×3). **Full CV**: name / permanent & hospital address / phones / fax / email / present designation / DOB / nationality; Qualifications (MBBS, MD, DM, FSCAI, FACC, FAPSIC, FCSI, FISE); Academic Achievements (7); Best Paper Awards (2); Other Awards (7); Scholarships/Fellowships (4); Educational Detail (7 entries w/ subjects & awards); Residency Training table (6 rows, teaching-post note); Professional Experience (5 roles w/ clinical/academic/administrative responsibilities and Sydney / Muscat / Mahavir detail); Positions Held (3); Fellowships (6); Memberships (EAPACI); Extracurricular & Organisational Experience (16); Interventional Experience & Special Skills (angioplasty >17,000, mitral valvuloplasty >1,000, congenital ~200, radial >5,000, carotid/renal denervation, ASD closure, diagnostic cath >30,000, with published-technique notes); Research Projects & Clinical Investigations (dissertation, STAT trial, ICUS via coronary sinus, FFR/vascular-reactivity/LAST protocols); PI First-in-Man stent trials (2); PI Phase-4 stent trials/registries (5); **Multicentre National & Global Trials table** (~22 rows: molecule/device, clinical condition, sponsor, research organization); Editorial Consultant / Reviewer positions (7 journals). |
| 04 | `/scientific-publications.html` | Scientific Publications | All **102** publications / abstracts / book chapters, numbered `01…102`, newest→oldest (2020→1986), each with authors, title, and journal/DOI/conference metadata. Intro line: "102 peer-reviewed papers, abstracts & chapters — 1986–2020". |
| 05 | `/facilities.html` | Facilities | Clinic description ("spacious, elegant and efficient clinic at a convenient central location"); address `201 Milestone Leone, Athwagate Circle, Surat 395001, Gujarat, India`; timings `Monday–Saturday · 10:00 AM–12:00 Noon & 6:00 PM–9:00 PM`; appointment contacts `+91 90992 31122`, `+91 261 2472211`, `+91 98241 45738`, web appointment, `atulda@hotmail.com`; Google Map link; facilities list (Cardiology consultation / angio CD review, ECG, Treadmill exercise test, 2D echo & colour Doppler, Complete cardiac check-up, On-site pathology collection, On-site pharmacy); clinic photos (Picture4.jpg, Picture5.jpg). |
| 06 | `/services.html` | Services | Heading "Hospital Attachments & Procedures Performed". Attachments: Director Interventional Cardiology — Mahavir Heart Institute, Ring Road, Athwagate, Surat; Senior Visiting Consultant — Tristar Hospital (Nanpura), Sunshine Global Hospital (Dumas Road), Shalby Hospital, United Green Hospital. "Procedures Performed" image gallery — slide1–slide8.png. Expertise areas (interventional cardiology, coronary angiography, angioplasty & stenting, complex/rotablation coronary care, peripheral/renal/carotid interventions, preventive cardiology). Mahavir Heart Institute contact `+91 261 2290000`. |
| 07 | `/research.html` | Research & Education | Sections folding in the source sub-pages: Clinical Research (PI for multicentre national & global trials, first-in-man & phase-4); Multicentre National & Global Trials (cross-link / condensed table); Original Research; Academic Activities; Teaching Programs & Workshops (preceptorships, conferences, PACT, SECT, cath-lab technician skill programs); Student Dissertations (guidance on MI, PCI outcomes, ventricular remodelling); Editorial & Publication. Trial metrics band (25+ international, 10 phase-4, 2 first-in-man). |
| 08 | `/reach-us.html` | Reach Us | Emergency block: "Call 9824145738 / 9825145738 any time for a genuine emergency"; "call 108 or reach Emergency Department, Mahavir Heart Institute, Ring Road, Athwagate, Surat". Outpatient appointments — At Clinic `+91 90992 31122`, `+91 261 2472211`, `+91 98241 45738`; At Mahavir Heart Institute `+91 261 2290000`, `+91 261 2290003`. Address, hours, email, Google Map link. Appointment-request form (name, phone, email, preferred date, message) with client-side success state (no backend — `mailto:` fallback or documented TODO). |

## 4. Technical architecture

Keep the existing stack; add routing + SSG.

- **Build**: Vite 8 + React 19 + TypeScript + Tailwind v4 (`@tailwindcss/vite`). Keep `lucide-react` for icons.
- **Routing**: `react-router` v7 (declarative mode). Route table for the 8 paths; a
  small redirect map (`/index.html`, `/home.html`, `/` all → Home).
- **Static prerender + SEO**: add **`vite-react-ssg`**.
  - Generates a static HTML file per route at build → crawlers and no-JS clients get
    full content.
  - Per-route head via `vite-react-ssg`'s `Head` (`@unhead/react`): `<title>`,
    `meta[name=description]`, `link[rel=canonical]`, Open Graph + Twitter Card tags,
    and JSON-LD structured data.
  - JSON-LD: a site-wide `Physician` / `MedicalClinic` node (name, medical specialty
    Cardiology, address, geo, telephone, `openingHoursSpecification`, `sameAs`) plus
    `BreadcrumbList` per page; `ItemList` for the publications page.
  - Emit `public/sitemap.xml`, `public/robots.txt`, favicon set, and an OG share image.
- **Content model**: typed data modules under `src/content/` — pages map over them.
  - `doctor.ts` — name, credentials, taglines, phones, email, addresses, hours, stats.
  - `navigation.ts` — the 8 nav items with numbers + paths.
  - `publications.ts` — `Publication[]` (`n`, `authors`, `title`, `meta`), all 102.
  - `cv.ts` — structured CV (each section as typed arrays/records).
  - `trials.ts` — `Trial[]` (`molecule`, `condition`, `sponsor`, `cro`).
  - `facilities.ts`, `services.ts` — lists + asset references.
  - Data is transcribed from `src/content/*.html` (the fullest existing source) and
    reconciled against the live pages; **verbatim** for citations, CV facts, phone
    numbers, addresses, timings.
- **Assets**: move the referenced images into `src/assets/` or `public/`
  (logo.jpeg, Picture1/3/4/5.jpg, slide1–8.png, portrait). Fix the broken
  `src="..."` / `src="images/..."` references.
- **Delete**: `src/SourcePages.tsx`, `src/content/*.html` (after transcription),
  `src/fidelity.css`, `src/source-final.css`, `src/source-fixes.css`,
  `src/source-pages.css`, the `?raw` HTML imports, all `dangerouslySetInnerHTML`.

### File structure (target)

```
src/
  main.tsx              # vite-react-ssg entry, exports createRoot / routes
  App.tsx               # layout shell (Rail + <Outlet/> + AppointmentBar + Footer)
  routes.tsx            # route table consumed by vite-react-ssg
  components/
    Rail.tsx            # numbered TOC nav + mobile drawer
    Masthead.tsx        # eyebrow + Fraunces headline + ghost numeral
    AppointmentBar.tsx
    StatBand.tsx
    Footer.tsx
    Seo.tsx             # <Head> wrapper: title/meta/OG/JSON-LD per page
    Section.tsx, Rule.tsx, DuotonePortrait.tsx, ...
  routes/
    Home.tsx About.tsx Career.tsx Publications.tsx
    Facilities.tsx Services.tsx Research.tsx ReachUs.tsx
  content/
    doctor.ts navigation.ts publications.ts cv.ts trials.ts
    facilities.ts services.ts seo.ts
  styles/
    index.css           # @import tailwind + fonts + :root tokens + a few base rules
```

## 5. Responsive design

Tailwind breakpoints (`sm 640 / md 768 / lg 1024 / xl 1280`).

- **≥ lg**: 220px left rail fixed; content in a single full-bleed column with
  section-level internal padding (`clamp(1.5rem, 5vw, 3.5rem)`).
- **md–lg**: rail narrows; multi-column CV / stat / trial-metric grids drop to 2-up.
- **< md**: rail becomes a top bar (wordmark + hamburger) with a slide-in drawer;
  all grids collapse to 1 column; the multicentre-trials table sits in an
  `overflow-x:auto` wrapper; ghost numerals hidden; headline scale steps down.
- Verified at 320 / 375 / 414 / 768 / 1024 / 1440; no horizontal overflow of `body`.

## 6. Error handling / edge cases

- Unknown route → a 404 page in the same shell with links back to the 8 pages;
  `vite-react-ssg` emits `404.html`.
- Appointment form has no backend: submit shows an inline success panel and also
  offers a `mailto:atulda@hotmail.com` link pre-filled with the entered details.
  (A real endpoint is out of scope — noted as a follow-up.)
- Missing image assets: every `<img>` gets meaningful `alt`; broken source
  references from the scrape are fixed or the image dropped, never left as `src="..."`.
- External links (Google Maps) open in a new tab with `rel="noreferrer"`.

## 7. Testing / verification

- `pnpm build` (tsc + vite + ssg) succeeds; `pnpm lint` clean.
- For each of the 8 routes, the prerendered HTML in `dist/` contains that page's real
  text with JS disabled — assert via grep on a known unique string per page
  (e.g. publication entry #102 text, a specific trials-table row, the clinic address).
- Publications page renders exactly 102 numbered entries; Career page renders every
  CV section listed in §3.
- Structured data validates (schema.org / Rich Results expectations); Lighthouse SEO
  score ~100 on Home and one inner page.
- Manual walkthrough of all 8 routes at 375px and 1440px: nav drawer, appointment
  bar, form success state, table scroll.

## 8. Out of scope

- A server/database or real form submission endpoint.
- CMS / content editing UI.
- Multi-language.
- Net-new copywriting beyond light connective phrasing; the doctor's clinical
  claims and numbers are used as published.

## 9. Follow-ups

- Real appointment-form backend (email service or form endpoint).
- High-resolution studio portrait with clean background for the hero.
- Confirm the exact procedure names behind slide1–8.png with the client.
