# NoirCraft — Portfolio

## Live Demo
[Deployed URL placeholder — add deployed site URL here]

---

## Project Overview
**NoirCraft** is a polished design portfolio and studio site that showcases UI/UX work with a dark, bold aesthetic and energetic orange accents. The site is built with React and Tailwind CSS and follows a strict grid and spacing system derived from the provided reference design.

### Purpose
- Showcase curated work and case studies
- Communicate brand & process
- Provide a simple contact flow for prospective clients

---

## Brand Identity
**Brand name:** NoirCraft

**Tagline:** Bold UI, thoughtful UX

**Value proposition:** We design polished interfaces and strategic experiences that help product teams ship with confidence.

**Brand voice:** Confident, concise, crafted.

### Contact

**Email:** hello@noircraft.studio

### Color System
Colors are defined in `tailwind.config.js` and used consistently across components.
- **Primary:** `#ff6a00` — Main brand orange used for CTAs and active states (high visibility, warm).
- **Accent:** `#ff8a3d` — Secondary orange used for highlights and subtle emphasis.
- **Secondary / Background:** `#0b1220` — Deep neutral background to preserve contrast and focus.
- **Surface:** `#0f1724` — Cards and surface panels.
- **Neutral dark (text on dark):** `#e6e6e9` — Text and lighter UI elements.
- **Muted:** `#9aa0a6` — Secondary text and subdued UI.

**Color rationale:** The palette emphasizes high contrast and a strong focal color (orange) to communicate craft and confidence while deep neutrals maintain legibility and visual weight.

### Typography
- **Primary font:** Inter (with system fallbacks) — chosen for its neutral, readable shapes and variable weights that work well across headings and body text.
- **Weights used:** 400 (regular), 600 (semibold), 700 (bold)
- **Scale:** Headings and body sizes are defined in a consistent scale (see `tailwind.config.js` font sizes) to ensure rhythm across breakpoints.

---

## Design Decisions
### Layout Adherence
- Spacing and layout were measured using a consistent 4px/8px spacing system and aligned to a 12-column grid for desktop to maintain consistent gutters and alignment.
- Tailwind utilities are used to ensure spacing parity and easy adjustments.
- Fonts and scaling were checked across SM / MD / LG breakpoints for visual parity.

### Creative Departures
- Content emphasis favors portfolio thumbnails and concise case descriptors; verbose case studies are intentionally omitted for a cleaner showcase.
- The color palette was tuned to meet the source screenshot’s vibe, while increasing contrast for accessibility.

---

## Component Architecture
Structure (high-level):
- `src/components/layout` — `Header`, `Navigation`, `Footer`
- `src/components/common` — reusable primitives: `Button`, `Card`, `ResponsiveImage`, `Section`
- `src/components/sections` — page sections: `Hero`, `Features`, `About`, `Portfolio`, `Contact`

Reusability strategy:
- Small focused components with clear props and minimal side effects
- `ResponsiveImage` centralizes responsive `img` logic, `srcset` generation and lazy loading
- `Section` component standardizes spacing and visual rhythm

---

## Performance Optimizations
- Production builds with Vite (minified, code-split ESM bundles)
- Tailwind CSS tree-shaking (content paths) to keep CSS small
- Responsive images with lazy loading (via `loading="lazy"`) and `srcset` where appropriate
- Preconnect to Google Fonts for faster font fetch
- Small bundle size kept by preferring static imports and avoiding heavy runtime requires

---

## Image Credits
All images are included in `src/assets/images`. Primary credits:
- `hero-1920.jpg` — Unsplash — https://unsplash.com/photos/1494790108377
- `portrait.jpg` — Unsplash — https://unsplash.com/photos/1544005313-94ddf0286df2
- `project-1.jpg` ... `project-9.jpg` — Unsplash collection used for portfolio thumbnails

If you reuse any assets, please follow the original Unsplash license and attribute photographers where required.

---

## Installation & Setup
1. Clone the repo:
   - `git clone https://github.com/<owner>/CSS-styling.git`
   - `cd CSS-styling`
2. Install dependencies: `npm install`
3. Local dev server: `npm run dev` (visit `http://localhost:5173`)
4. Build for production: `npm run build`
5. Preview production build (optional): `npm run preview` or serve the `dist/` folder with a static server

Notes:
- Remove debug `console.log` entries before final submission (see TODOs in source)

---

## Technologies Used
- React ^19.2.0
- Vite ^7.2.x
- Tailwind CSS ^4.1.x
- PostCSS / Autoprefixer
- ESLint for linting
- jsdom for headless debugging
- Puppeteer (dev) for headless capture, when environment allows

---

## Challenges & Solutions
1. **Runtime `require()` errors in production** — Some legacy `require()` calls caused `ReferenceError` in ESM bundles. Solution: replaced with static `import` or `import.meta.glob` patterns and rebuilt.
2. **`import.meta.globEager` not available at runtime** — Bundler did not transform a dynamic glob in one case leading to `TypeError`. Solution: replaced with `import.meta.glob('/path/*', { eager: true })` and added a runtime guard to surface clear diagnostics.
3. **Headless Chromium not launching in environment** — Missing system libraries and no apt permissions prevented Puppeteer headless runs. Solution: added `scripts/run-jsdom.cjs` to execute built bundles in `jsdom` and created an inline runtime overlay to surface runtime errors visually.

---

## Future Improvements
- Add unit/integration tests with Vitest + React Testing Library and wire them into CI
- Add automated Lighthouse checks in CI and tune to meet targets
- Add a staging+production Netlify deploy flow with environment previews
- Improve portfolio data model and add case study pages with detailed layouts and SEO metadata
- Audit and fix accessibility issues discovered by manual testing and tools

---

## Submission & Repository Requirements
Please ensure the following before final submission:
- Public GitHub repo with a clear commit history and meaningful commit messages
- `.gitignore` excludes `node_modules` and `dist`/build artifacts
- ESLint configured and no console logs present in production code
- Screenshots included in `/screenshots` (see below)

Deliverables checklist:
- Live deployed URL (add above)
- GitHub repository link
- `README.md` (this file) with the requested sections
- `/screenshots` folder with:
  - `lg-breakpoint.png` (showing LG layout)
  - `md-breakpoint.png` (showing MD layout)
  - `sm-breakpoint.png` (showing SM layout)
  - `lighthouse-report.png`


---

## Git Commit History Requirements
- Make frequent, incremental commits reflecting real development progress (recommended 3–4 commits/week)
- Keep changes scoped per commit (e.g., "Add Header component", "Implement responsive navigation")
- Avoid single massive commits containing unrelated changes
- Document decisions in commit messages to show your development process

**Academic Integrity Warning**
- Irregular commit patterns (e.g., entire project in 1–3 commits near deadline) or evidence of plagiarism may result in review and penalties (reduced grade, requirement to explain development in person, or more severe consequences). Maintain honest, verifiable work history.

---

## Final notes & TODOs
- TODO: Remove development `console.log` debug messages (search for `MAIN_MODULE_EXECUTED`, `INLINE_OVERLAY_LOADED`, `RENDER_DIAG`, etc.) before final submission.
- TODO: Add Vitest test suite and GitHub Actions to run lint/build/test and Lighthouse.

---

If you'd like, I can: run a local Lighthouse audit and attach the report, add a test suite + CI workflow, or open a PR with these changes and a summary for review — tell me which you'd like me to do next.
