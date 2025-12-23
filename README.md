# EcoTech Solutions

## Live Demo
[Deployed URL will be added after deployment]

## Project Overview
EcoTech Solutions is a landing page for a sustainable technology company that offers eco-friendly innovations to reduce carbon footprint and promote environmental responsibility. The website showcases our commitment to green technology through modern design and compelling content.

## Brand Identity
### Color System
- Primary: #16a34a (Green - represents sustainability and growth)
- Secondary: #2563eb (Blue - symbolizes trust and technology)
- Accent: #ea580c (Orange - conveys energy and innovation)
- Neutral Dark: #111827 (Dark gray - for text and strong contrast)
- Neutral Light: #f3f4f6 (Light gray - for backgrounds and subtle elements)

### Typography
- Headings: Inter font family (clean, modern, and highly readable)
- Body: Inter font family (consistent with headings for brand cohesion)
- Font weights: 300 (light), 400 (regular), 500 (medium), 600 (semibold), 700 (bold)

## Design Decisions
### Layout Adherence
The layout maintains consistent spacing using Tailwind's spacing utilities. Components are structured with a 16px base grid, ensuring visual harmony across all breakpoints. The hero section uses a 2-column grid on large screens, stacking vertically on smaller devices.

### Creative Departures
For the MD breakpoint (641px - 1023px), the layout adapts by reducing padding and adjusting grid columns to 2 for features, ensuring optimal use of tablet screen real estate while maintaining readability. The SM breakpoint stacks all elements vertically with increased padding for touch-friendly interactions.

## Component Architecture
The application follows a modular component structure with reusable elements:
- Common components (Button, Card, Section, ResponsiveImage) handle shared functionality
- Layout components (Header, Footer, Navigation) provide consistent structure
- Section components (Hero, Features, About, Contact) contain page-specific content

This architecture promotes maintainability and scalability, allowing easy addition of new sections or modification of existing ones.

## Performance Optimizations
- Lazy loading implemented for all images using the ResponsiveImage component
- React.memo used on Card and Button components to prevent unnecessary re-renders
- Tailwind CSS provides optimized, utility-first styling with minimal CSS output
- Semantic HTML structure for better accessibility and SEO

## Image Credits
- Hero image: Photo by [Author] on Unsplash (https://unsplash.com/photos/...)
- Features images: Various photos from Unsplash
- About image: Photo by [Author] on Unsplash

## Installation & Setup
1. Clone the repository
2. Install dependencies: `npm install`
3. Start development server: `npm run dev`
4. Build for production: `npm run build`

## Deployment
This project is configured for deployment on Vercel, Netlify, or similar platforms. Simply connect your repository and the build command will be `npm run build` with the output directory as `dist`.

## Technologies Used
- React v18.3.1
- Vite v7.3.0
- Tailwind CSS v3.4.1
- Additional packages: prop-types for component validation

## Challenges & Solutions
1. **Responsive Design Consistency**: Ensured consistent spacing and layout across breakpoints by using Tailwind's responsive utilities and custom grid systems.
2. **Image Optimization**: Implemented lazy loading and proper alt text to improve performance and accessibility.
3. **Color Contrast**: Verified all color combinations meet WCAG AA standards using online contrast checkers.

## Future Improvements
1. Add dark mode toggle functionality
2. Implement contact form with backend integration
3. Add animation library for enhanced user experience
4. Integrate with CMS for dynamic content management

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
