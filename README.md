# Affinity Consulting Website

Production-ready marketing website for Affinity Consulting, a digital health & transformation consulting firm.

Built with **Next.js 15**, **TypeScript**, **Tailwind CSS**, and modern web standards. Designed for performance, SEO, and long-term maintainability.

## Quick Start

### Prerequisites

- Node.js 18+ (check with `node --version`)
- npm 9+ (check with `npm --version`)

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd affinity-consulting

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. The site will reload on file changes.

## Development

### Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server (after build)
npm start

# Run ESLint
npm run lint

# Fix linting issues automatically
npm run lint:fix
```

### Project Structure

```
affinity-consulting/
├── /app                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout (Header, Footer)
│   ├── page.tsx           # Homepage
│   └── api/               # API routes (future)
├── /components            # Reusable React components
│   ├── /ui                # Primitive components (Button, Card)
│   ├── /layout            # Layout components (Header, Footer, Container)
│   └── /marketing         # Page sections (Hero, Features, etc.)
├── /lib                   # Utility functions
│   ├── cn.ts              # Classname utility
│   ├── metadata.ts        # SEO metadata helpers
│   └── schema.ts          # JSON-LD schema generators
├── /styles                # Global styles
├── /public                # Static assets
├── /agent                 # Project documentation
└── Configuration files    # tsconfig, tailwind, next.config, etc.
```

## Architecture

### Server Components by Default

All components are **server components** by default for better performance and security:

```tsx
// app/page.tsx
export default function Home() {
  return <Hero title="..." />;
}

// components/marketing/Hero.tsx (server component)
export function Hero({ title }: Props) {
  return <h1>{title}</h1>;
}
```

Use `'use client'` only when you need React hooks, event handlers, or browser APIs:

```tsx
// components/marketing/ContactSection.tsx (client component)
"use client";

import { useState } from "react";

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  // ...
}
```

### Design System

All styling uses **Tailwind CSS** with tokens defined in `tailwind.config.js`:

```tsx
// Colors from Affinity logo
<button className="bg-brand-primary text-white">...</button>

// Spacing scale
<section className="py-16 sm:py-24 lg:py-32">...</section>

// Component layer classes
<div className="section section-lg">...</div>
```

Never use inline styles or hardcoded colors.

### Components

- **UI Components** (`/components/ui`) - Reusable primitives (Button, Card)
- **Layout Components** (`/components/layout`) - Site structure (Header, Footer, Container)
- **Marketing Components** (`/components/marketing`) - Page sections (Hero, Features, CTA)

## Styling

This project uses **Tailwind CSS** exclusively for styling. No additional CSS files or CSS-in-JS runtime.

### Color System

Colors are derived from the Affinity Consulting logo:

```
Brand Primary (teal):    #1b6b7b
Brand Secondary (coral): #d87e52
Neutrals:                #f9fafb to #111827
```

Use classes from `tailwind.config.js`:

```tsx
<div className="text-brand-primary bg-neutral-50">...</div>
```

### Responsive Design

Mobile-first approach with Tailwind breakpoints:

```tsx
<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
  {/* Stacks on mobile, 2 cols on tablet, 3 cols on desktop */}
</div>
```

Learn more in `agent/DESIGN.md`.

## SEO & Metadata

Every page has proper metadata using Next.js Metadata API:

```tsx
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata(
  "Page Title | Affinity Consulting",
  "Page description for search results",
);
```

JSON-LD structured data is generated with schema helpers:

```tsx
import { createOrganizationSchema } from "@/lib/schema";

const schema = createOrganizationSchema({
  name: "Affinity Consulting",
  // ...
});
```

See `agent/SEO.md` for complete SEO strategy.

## Deployment

### Build & Deploy

```bash
# Create production build
npm run build

# Test production build locally
npm start

# Open http://localhost:3000
```

### Hosting Options

- **Vercel** (Recommended) - Zero-config, Next.js native
- **Netlify** - Supported with minor configuration
- **AWS Amplify** - Full featured hosting
- **Self-hosted** - Works on any Node.js server

### Environment Variables

Configure in `.env.local` (create from `.env.example`):

```
NEXT_PUBLIC_SITE_URL=https://affinity-consulting.com
NEXT_PUBLIC_BUSINESS_EMAIL=hello@affinity-consulting.com
NEXT_PUBLIC_BUSINESS_PHONE=+44 (0) 20 XXXX XXXX
NEXT_PUBLIC_BUSINESS_ADDRESS="London, United Kingdom"
```

## Performance

- **Lighthouse Score:** Target 90+ on all pages
- **Largest Contentful Paint (LCP):** < 2.5 seconds
- **First Input Delay (FID):** < 100ms
- **Cumulative Layout Shift (CLS):** < 0.1

Built-in optimizations:

- Server components reduce JavaScript
- Automatic code splitting per route
- Image optimization with Next.js Image
- CSS Tailwind purging (only includes used utilities)

## TypeScript

Full TypeScript support with strict mode enabled:

```tsx
interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary";
  disabled?: boolean;
}

export function Button({ children, variant = "primary", ...props }: ButtonProps) {
  // Type-safe component
}
```

Check for TypeScript errors:

```bash
npx tsc --noEmit
```

## ESLint

Code quality rules configured:

```bash
npm run lint      # Check for issues
npm run lint:fix  # Auto-fix issues
```

## Content Management

Content is managed directly in component files as data objects:

```tsx
// app/page.tsx
const services = [
  {
    title: "Service Redesign",
    description: "Reimagine your services...",
    icon: "🎯",
  },
  // ...
];
```

Future: Integrate with **Contentful**, **Strapi**, or headless CMS without major refactoring.

## Adding Features

### Adding a New Page

1. Create file in `/app/[slug]/page.tsx`
2. Export `metadata` with SEO details
3. Use layout components for structure
4. Import marketing components for sections

```tsx
// app/about/page.tsx
import { createPageMetadata } from '@/lib/metadata';
import { Hero, Features } from '@/components/marketing';

export const metadata = createPageMetadata(
  'About Us | Affinity Consulting',
  'Learn about our approach to transformation...'
);

export default function About() {
  return (
    <>
      <Hero title="Our Approach" />
      <Features ... />
    </>
  );
}
```

### Adding a Component

1. Determine type: UI (primitive), Layout (structural), or Marketing (page-specific)
2. Create in appropriate folder
3. Export from folder's `index.ts`
4. Use TypeScript interfaces for all props

```tsx
// components/ui/Badge.tsx
interface BadgeProps {
  children: ReactNode;
  variant?: "primary" | "secondary";
}

export function Badge({ children, variant = "primary" }: BadgeProps) {
  return <span className={`badge badge-${variant}`}>{children}</span>;
}

// components/ui/index.ts
export { Badge } from "./Badge";
```

### Adding Styles

Update `tailwind.config.js` for design tokens, or add layer components to `styles/globals.css`:

```css
@layer components {
  .my-component {
    @apply flex items-center gap-4 rounded-lg p-4;
  }
}
```

Never use inline styles or CSS files outside Tailwind.

## Documentation

Comprehensive project documentation in `/agent`:

- **[AGENT.md](./agent/AGENT.md)** - Architecture and project rules
- **[DESIGN.md](./agent/DESIGN.md)** - Design system and visual language
- **[SEO.md](./agent/SEO.md)** - SEO strategy and implementation
- **[CONTENT.md](./agent/CONTENT.md)** - Content voice and copy guidelines
- **[STACK.md](./agent/STACK.md)** - Tech stack decisions
- **[README.md](./agent/README.md)** - Quick reference guide

Read `/agent/README.md` for a quick orientation to project documentation.

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari 14+, Chrome Android 90+)

Fully responsive design tested at:

- Mobile: 375px (iPhone SE)
- Tablet: 768px (iPad)
- Desktop: 1024px+ (standard monitors)

## Accessibility

Built with accessibility as default:

- Semantic HTML (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`)
- Proper heading hierarchy
- Focus visible states on interactive elements
- Image alt text guidance and requirements
- Form labels and error messages
- WCAG AA color contrast compliance

Test with:

- Keyboard navigation (Tab key)
- Screen reader (NVDA, JAWS, Safari VoiceOver)
- Axe DevTools browser extension

## Contributing

1. Read `/agent/AGENT.md` for project principles
2. Follow code patterns in existing components
3. Test locally: `npm run dev`
4. Run linting: `npm run lint`
5. Build and test: `npm run build && npm start`
6. Ensure Lighthouse score 90+ on affected pages

See `/agent/README.md` for detailed contributing guidelines.

## Troubleshooting

### Port 3000 already in use

```bash
# Use different port
npm run dev -- -p 3001
```

### Module not found errors

```bash
# Rebuild node_modules
rm -rf node_modules package-lock.json
npm install
```

### TypeScript errors

```bash
# Check for errors
npx tsc --noEmit

# Rebuild project
npm run build
```

### Components not updating

Next.js should auto-refresh. If not:

- Hard refresh browser (Ctrl+Shift+R)
- Restart dev server (Ctrl+C and `npm run dev`)

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript 5.6
- **Styling:** Tailwind CSS 3.4
- **Build:** SWC (built into Next.js)
- **Linting:** ESLint 8.56

See `package.json` for all dependencies. Intentionally minimal.

## Performance Checklist

Before deploying:

- [ ] `npm run build` succeeds with no errors
- [ ] `npm run lint` shows no warnings
- [ ] TypeScript check passes
- [ ] Lighthouse score 90+ on all pages
- [ ] Core Web Vitals green
- [ ] Links and forms tested
- [ ] Mobile responsive verified
- [ ] SEO metadata validated

## License

Copyright © 2026 Affinity Consulting. All rights reserved.

## Support

For questions about the codebase, read the docs in `/agent`:

- Architecture questions → `AGENT.md`
- Design/styling questions → `DESIGN.md`
- SEO questions → `SEO.md`
- Content questions → `CONTENT.md`
- Tech stack questions → `STACK.md`

---

**Built with Next.js. Optimized for performance and SEO. Designed for growth.**
