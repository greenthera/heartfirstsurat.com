# HeartFirst Surat — Full Redesign Design Spec

Date: 2026-09-01
Status: Approved (visual direction + scope). Pending: implementation plan.

## 1. Goal

Replace the current homepage/inner-page design with a new, cohesive visual system
("The Index"), convert all raw-HTML content into real React components,
make every page responsive from 320px up, and add proper per-page SEO with static
prerendering.

**Content source of truth = the eight live pages the client supplied, and only those:**

- https://heartfirstsurat.com/
- https://heartfirstsurat.com/about.html
- https://heartfirstsurat.com/career-Hightlight.html
- https://heartfirstsurat.com/scientific-publications.html
- https://heartfirstsurat.com/facilities.html
- https://heartfirstsurat.com/services.html
- https://heartfirstsurat.com/research.html
- https://heartfirstsurat.com/reach-us.html

Every piece of text, every list item, every number, phone, address and image from
those eight pages must appear on the redesigned site — nothing dropped. Conversely,
the marketing copy the current React app invented (rewritten service blurbs,
paraphrased taglines, added "expertise" descriptions, philosophy quote, etc.) that
is **not** on those live pages is **not** carried over. Where the current app's copy
happens to match the live pages it is kept; where it embellishes, the live wording wins.
The fullest local capture of that source is `src/content/*.html`; it is reconciled
against the live pages before transcription.

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
  - Full-bleed indigo **contact bar** repeated at the foot of every page, built from
    real source data — clinic timing ("Mon–Sat · 10:00 AM–12:00 Noon & 6:00–9:00 PM"),
    phone 98241-45738 / 90992-31122, email atulda@hotmail.com, and one yellow
    "Reach us" link to page 08 — then the footer.
- **Imagery**: only the images that exist on the eight source pages —
  `logo.jpeg`, `Picture1.jpg` (home portrait), `Picture3.jpg` (about portrait),
  `Picture4.jpg` / `Picture5.jpg` (clinic), `slide1.png`–`slide8.png` (procedures).
  A portrait may be given a duotone-indigo treatment; clinic and procedure photos
  run full-bleed within their section with hairline captions. No stock or invented
  imagery is added.

## 3. Information architecture — 8 routes

Legacy `.html` paths are preserved so existing inbound/indexed links keep working.
`/index.html` and `/home.html` redirect to `/`. The redesign restyles this content
and lays it out in "The Index" system — it does **not** add sections, blurbs or
numbers that are absent from the source page. Items below are quoted/summarised
from the live pages; the exact wording is transcribed during implementation.

| # | Route | Nav label | Content (exactly what the source page carries) |
|---|-------|-----------|--------------------------------------|
| 01 | `/` | Home | Header block: "Dr. Atul D Abhyankar" · "MD, DM, FACC, FSCAI, FAPSIC, FCSI, FISE Interventional Cardiologist" · Phone 98241-45738 · Phone 90992-31122 · Email atulda@hotmail.com. Main heading: "South Gujarat's Most Senior & Experienced Interventional Cardiologist". The seven quick-access links exactly as worded: "Know about your Doctor", "Clinic Informations & Facilities", "Hospital attachments and Procedures Performed", "Academic Activities, Research and Education", "Information and Videos for Patients and Public", "For Appointment and Emergency Situations", "Recent Interesting Cases & CMEs for Medical Professionals". Images: logo.jpeg, Picture1.jpg. |
| 02 | `/about.html` | About the Doctor | Header block (as above). Heading "Know About Dr Atul Abhyankar" and its eight-item list exactly as worded: "Watch a short video about dr atul abhyankar's careers & achievements", "dr atul abhyankar's short CV and career highlights", "Academic & medical education activities industry collaborations", "civilian honours, awards & felicitations", "dr atul abhyankar's full curriculum vitae", "scientific publications books & editorial activities", "clinical research", "Philanthropy & Editorial". Image: Picture3.jpg. (List items link to the relevant inner pages / mailto where the source has no dedicated page.) |
| 03 | `/career-Hightlight.html` | Career Highlights | The **Career Highlights** bullet list (all items from the source: DM Cardiology – University of Mumbai; Fellow SCAI; Fellow ACC; "31 Years' Experience in Interventional Cardiology with more than 17000 interventions"; "Invited as Faculty to more than 50 international & national conferences/workshops"; "Course Director – 6 Clinical conferences"; "More than 105 Publications and abstracts, Two best paper awards"; Editorial Consultant to the 7 named journals; "PI – 2 First in Man and 10 Phase-4 Trials related to stents"; "PI – More than 25 international clinical trials"; "Superspecialty (Cardiology) Teacher for Diplomate of National Board"; "Live case operator for India Live 2019"; "Course Director – PACT … 3 Courses"; "Course Director – SECT … 3 Courses"). The **full Curriculum Vitae** exactly as on the source page: Name / Permanent Address / Hospital Address / Contact Tel. / Facsimile / E-mail / Present Designation / Date of Birth / Nationality; Qualifications (8); Academic Achievements (7); Best Paper Awards (2, with titles); Other Awards (7); Scholarships / Fellowships (4); Educational Detail (7 entries with subjects & awards); Residency Training table (6 rows + teaching-post note); Professional Experience (5 roles with the full clinical/academic/administrative responsibility text and the Sion / Sydney / Muscat / Mahavir / DNB detail); Positions Held (3); Fellowships (6); Memberships (EAPACI); Extracurricular Activities & Organisational Experience (16); Scientific Publications section as printed on this page; Interventional Experience, Special Skills & Contributions (all volume figures and published-technique notes); Research Projects and Experience in Clinical Investigations; PI First-in-Man Stent Trials (2); PI Phase-4 Trials / Registries (5); **Multicentre National & Global Trials table** (all rows: Trial-related molecules & devices, Clinical conditions, Sponsors, Research organizations); Editorial Consultant / Reviewer positions (7). Image: logo.jpeg. |
| 04 | `/scientific-publications.html` | Scientific Publications | Heading "Scientific Publications" and **every entry** exactly as printed (~102), in source order, each with its authors, title and journal / DOI / conference metadata and any "[Abstract]" marker. |
| 05 | `/facilities.html` | Facilities | "spacious, elegant and efficient clinic at convenient central location". Address: "201 milestone leone, athwagate circle, surat, 395001, gujarat, INDIA". Timing: "(Monday to Saturday) - 10.00 AM - 12:00 Noon & 6:00 PM - 9:00 PM". Appointment contacts: +91-9099231122, +91-261-2472211, +91-9824145738, "Web appointment available", atulda@hotmail.com. Facilities list: "Cardiology consultation/angio CD review", "Electrocardiogram ECG", "Treadmill exercise test", "2D echo & colour doppler", "Complete cardiac check-up", "On site pathology collection", "On site pharmacy". Images: logo.jpeg, Picture4.jpg, Picture5.jpg. |
| 06 | `/services.html` | Services | Heading "Hospital Attachment". Attachments exactly as worded: "Director inteventional cardiology. mahavir heart institute ring road athwagate, surat"; "Senior Visiting Consultant, Tristar Hospital, Opp T & TV School, Nanpura"; "Senior Visiting Consultant, Sunshine Global Hospital, Dumas Road"; "Senior Visiting Consultant, Shalby Hospital"; "Senior Visiting Consultant, United Green Hospital". "Procedures Performed" section — image gallery of slide1.png … slide8.png. Image: logo.jpeg. |
| 07 | `/research.html` | Clinical Research | The section headings exactly as on the source page — "Clinical Research", "multicenter national & Global trials", "Original research Research", "Academic activities", "student dissertations", "teaching programs & workshops" — with only the copy the source carries. These are presented as an index of the doctor's research/education activity; no invented descriptive paragraphs are added. Image: logo.jpeg. |
| 08 | `/reach-us.html` | Reach Us | "What to do in an Emergency Situation?" — "You can Call 9824145738/9825145738 at any time of day or night for genuine Emergency"; "call 108 or reach in your vehicle at the earliest to Emergency Department of Mahavir Heart Institute, Ring road, Athwagate, Surat". "Out Patient Appointments" — At Clinic: +91-9099231122, +91-261-2472211, +91-9824145738. At Mahavir Heart Institute: +91-261-2290000, +91-261-2290003. Image: logo.jpeg. |

Note: the source `reach-us.html` has **no contact form** — it is a phone/emergency
information page. The redesign keeps it as an information page (no form is added).

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
  - `doctor.ts` — name, credential line, main heading, phones, email, addresses,
    hours (all verbatim from the source header/pages).
  - `navigation.ts` — the 8 nav items with numbers + paths.
  - `publications.ts` — `Publication[]` (`n`, `authors`, `title`, `meta`), all 102.
  - `cv.ts` — structured CV (each section as typed arrays/records).
  - `trials.ts` — `Trial[]` (`molecule`, `condition`, `sponsor`, `cro`).
  - `facilities.ts`, `services.ts` — lists + asset references.
  - Data is transcribed from `src/content/*.html` (the fullest local capture) and
    reconciled line-by-line against the eight live pages before use; **verbatim**
    for citations, CV text, list items, phone numbers, addresses and timings.
  - Stat figures shown on Home/Career (31 years, 17,000+ interventions,
    105+ publications, 25+ international trials) are taken from the Career Highlights
    bullet list on the source — not invented.
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
  App.tsx               # layout shell (Rail + <Outlet/> + ContactBar + Footer)
  routes.tsx            # route table consumed by vite-react-ssg
  components/
    Rail.tsx            # numbered TOC nav + mobile drawer
    Masthead.tsx        # eyebrow + Fraunces headline + ghost numeral
    ContactBar.tsx
    StatBand.tsx
    Footer.tsx
    Seo.tsx             # <Head> wrapper: title/meta/OG/JSON-LD per page
    Section.tsx, Rule.tsx, DuotonePortrait.tsx, ...
  routes/
    Home.tsx About.tsx Career.tsx Publications.tsx
    Facilities.tsx Services.tsx Research.tsx ReachUs.tsx
  content/
    doctor.ts navigation.ts publications.ts cv.ts trials.ts
    facilities.ts services.ts research.ts seo.ts
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
- Missing image assets: every `<img>` gets meaningful `alt`; broken source
  references from the scrape (`src="..."`, `src="images/..."`) are repointed to the
  real asset or the image is dropped, never left broken.
- External links (Google Maps, appointment mailto, tel:) open appropriately;
  external ones use `target="_blank" rel="noreferrer"`.
- Long CV prose and the trials table must not cause horizontal overflow on mobile.

## 7. Testing / verification

- `pnpm build` (tsc + vite + ssg) succeeds; `pnpm lint` clean.
- For each of the 8 routes, the prerendered HTML in `dist/` contains that page's real
  text with JS disabled — assert via grep on a known unique string per page
  (e.g. publication entry #102 text, a specific trials-table row, the clinic address).
- Publications page renders every entry present on the source page (~102), numbered;
  Career page renders every CV section listed in §3.
- Structured data validates (schema.org / Rich Results expectations); Lighthouse SEO
  score ~100 on Home and one inner page.
- Manual walkthrough of all 8 routes at 375px and 1440px: nav drawer, contact
  bar, trials-table horizontal scroll.
- Content parity check: diff the rendered text of each route against the
  corresponding live page; every source line item is present.

## 8. Out of scope

- A server/database, contact form, or any backend.
- CMS / content editing UI.
- Multi-language.
- New copywriting. All text is transcribed from the eight source pages; only
  spelling/casing normalisation and the section labels needed by the layout
  ("The Index" eyebrows, nav labels) are authored.

## 9. Follow-ups

- High-resolution studio portrait with a clean background for the hero.
- Confirm the exact procedure names behind slide1–8.png with the client.
- Decide whether an appointment form / booking flow should be added later.
