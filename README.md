# NoirCraft — Portfolio

## Live Demo
[Deployed URL will be added after Netlify deployment]

## Project Overview
**NoirCraft** is a design portfolio and studio site showcasing UI/UX work with a dark, bold aesthetic and orange accents. The layout follows a strict grid and spacing system derived from the provided reference design.

## Brand Identity
**Brand name:** NoirCraft

**Tagline:** Bold UI, thoughtful UX

**Value proposition:** We design polished interfaces and strategic experiences that help product teams ship with confidence.

**Target audience:** Early-stage startups and product teams looking for design-driven growth.

**Brand voice:** Confident, concise, and crafted — professional yet approachable.

### Color System
- **Primary:** #ff6a00 (bold orange — action & CTAs)
- **Secondary:** #0b1220 (deep neutral background)
- **Accent:** #ff8a3d (soft orange for highlights)
- **Neutral dark:** #e6e6e9 (light text on dark)
- **Neutral light:** #0b0b0b (page background)

_Color rationale:_ Orange conveys energy, confidence and warmth while deep neutrals provide contrast that keeps focus on visual work and CTAs. This palette is designed to meet WCAG AA contrast for body and large text.

### Typography
- **Font stack:** Inter, system-ui, Segoe UI, Roboto, Arial
- **Weights:** 400 (regular), 600 (semibold), 700 (bold)
- **Scale:** Consistent scaling across breakpoints for headings, subheadings and body text.

## Content & Structure
Sections included:
- Hero with headline, intro, and CTAs
- Services (3+ cards)
- About with bio and skills
- Portfolio gallery with filters
- Contact form and contact details

All content is original and written to reflect NoirCraft's value proposition.

## Images & Credits
All images used in the site are sourced from Unsplash and are included in `src/assets/images`. Below are the primary image credits (more images are included and attributed in the project):

- `hero-1920.jpg` — Unsplash: https://unsplash.com/photos/1494790108377
- `portrait.jpg` — Unsplash: https://unsplash.com/photos/1544005313-94ddf0286df2
- `project-1.jpg` ... `project-9.jpg` — Unsplash collection used for portfolio thumbnails

Please see the `assets/images` folder for each file and the original Unsplash page for photographer attribution.

## How to run (development)
1. Clone the repository
2. Install dependencies: `npm install`
3. Start the dev server: `npm run dev`
4. Build for production: `npm run build`

## Deployment (Netlify)
This project includes `netlify.toml` and is ready to deploy to Netlify. Setup steps:
1. Connect the repository on Netlify
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Add environment variables in Netlify (if needed)

## Performance & Accessibility
- Lazy loading for images via `ResponsiveImage`
- Focus-visible and skip link support
- Semantic HTML and ARIA attributes for navigation
- Intended Lighthouse targets: Performance >= 85, Accessibility >= 95, Best Practices >= 90, SEO >= 90

## Contributing
- Create a branch for your change (example: `feature/my-change`)
- Run `npm install` and `npm run dev` locally
- Open a PR describing your changes and link to any design references

---

If you'd like, I can now: (A) replace the placeholder portfolio items with curated imagery and captions, (B) run Lighthouse and tune for the target scores, and (C) open a PR and prepare Netlify deployment instructions with environment suggestions. Let me know which of these you'd like next.
