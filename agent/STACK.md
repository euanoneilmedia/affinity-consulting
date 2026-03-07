# STACK.md - Technology Stack & Architecture Decisions

## Overview

Affinity Consulting's website is built on a modern, minimal tech stack optimized for:

- **Performance:** Fast page loads, high Lighthouse scores
- **Maintainability:** Clean code, minimal dependencies
- **Scalability:** Easy to extend with new features
- **SEO:** Server rendering, semantic HTML, metadata API
- **Developer Experience:** TypeScript, ESLint, Tailwind CSS

## Core Dependencies

### Runtime

```json
{
  "react": "^19.0.0",
  "react-dom": "^19.0.0",
  "next": "^15.0.0"
}
```

### Development

```json
{
  "typescript": "^5.6.0",
  "@types/node": "^20.0.0",
  "@types/react": "^19.0.0",
  "@types/react-dom": "^19.0.0",
  "tailwindcss": "^3.4.0",
  "autoprefixer": "^10.4.0",
  "postcss": "^8.4.0",
  "eslint": "^8.56.0",
  "eslint-config-next": "^15.0.0"
}
```

**No other dependencies by default.** Avoid adding packages without strong justification.

## Framework: Next.js 15

### Why Next.js?

- **Server Components by default** - Better performance, automatic code-splitting
- **App Router** - Modern routing, built-in layouts, grouped routes
- **Metadata API** - SEO-ready, no extra packages needed
- **Built-in Image optimization** - Automatic WebP, lazy loading
- **Edge Functions** - Deploy API routes globally
- **Edge Middleware** - Redirects, rewrites without separate service
- **Rapid updates** - Community-driven, well-documented

### Not a factor: We don't need

- Pages Router (deprecated, using App Router)
- API routes (initially; can be added)
- Middleware for auth (not needed yet)
- ISR (Static + Revalidation) - Not needed for marketing site content

### App Router Details

```
/app
  layout.tsx ..................... Root layout (Header, Footer wrapper)
  page.tsx ....................... Homepage
  /(marketing) ................... Group for marketing pages
  /api .......................... API routes (future)
```

**Key features being used:**

- Server components by default (all `.tsx` files are server components)
- Client components only with `'use client'` directive
- Metadata export at page level
- Automatic layout nesting

### When to Use Client Components

```tsx
// Client component example
"use client";

import { useState } from "react";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  // ...
}
```

**Use client component when:**

- Need React hooks (useState, useEffect, useContext)
- Need event handlers (onClick, onSubmit)
- Need browser APIs (localStorage, geolocation)
- Need real-time updates

**Stay server component when:**

- Just rendering static content
- Fetching data (server components handle async)
- Using sensitive data (API keys, secrets)

## Styling: Tailwind CSS 3

### Why Tailwind?

- **Utility-first** - No context switching between CSS files and components
- **Minimal bundle** - Only includes used utilities
- **Design system** - All tokens defined in config, not scattered
- **High performance** - Work in `globals.css`, no runtime
- **Responsive** - Mobile-first breakpoints built-in
- **Dark mode** - Supported out of box (not used yet)

### Not including: Styling alternatives

❌ **No CSS Modules** - Would fragment styling logic  
❌ **No CSS-in-JS** - Unnecessary runtime overhead  
❌ **No CSS files** - Keep styling co-located in Tailwind  
❌ **No component libraries** - Build our own with Tailwind

### Configuration

Colors, spacing, and typography are in `/tailwind.config.js`:

```js
theme: {
  extend: {
    colors: { ... },        // Brand colors + neutral palette
    spacing: { ... },       // Custom spacing aliases
    typography: { ... },    // prose plugin for rich text
    fontSize: { ... },      // Type scale
  }
}
```

Update this file when design tokens change. **Never use hardcoded colors or spacing outside Tailwind.**

### Layer Components

Common patterns are abstracted to `globals.css` `@layer components`:

```css
@layer components {
  .btn { ... }
  .card { ... }
  .section { ... }
}
```

Use these classes for consistency:

```tsx
// Good
<div className="section section-lg bg-light">

// Avoid
<div style={{ padding: '20px', backgroundColor: '#f0f0f0' }}>
```

## TypeScript

### Configuration

TypeScript is **strict** by default (`"strict": true` in `tsconfig.json`):

- `noImplicitAny: true` - Must annotate types
- `strictNullChecks: true` - Null handling explicit
- `strictFunctionTypes: true` - Function parameters strictly typed
- `noUnusedLocals: true` - Flag unused variables

### Interface Patterns

All component props use TypeScript interfaces:

```tsx
interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
  disabled?: boolean;
  [key: string]: unknown; // Allow spreading HTML attributes
}

export function Button({ children, variant = "primary", ...props }: ButtonProps) {
  // ...
}
```

### No `any` Type

```tsx
// ❌ Avoid
const data: any = fetchSomething();

// ✅ Preferred
interface FetchResult {
  name: string;
  email: string;
}
const data: FetchResult = fetchSomething();
```

## Component Architecture

### Three-Tier System

#### 1. UI Components (`/components/ui`)

Primitive, reusable, stateless:

- `Button` - Stylable button with variants
- `Card` - Content container
- No business logic, no data fetching
- Accept style variants and HTML props

```tsx
// UI Component: generic and reusable
<Button variant="primary">Click me</Button>
```

#### 2. Layout Components (`/components/layout`)

Structural, site-wide:

- `Header` - Navigation and branding
- `Footer` - Links and info
- `Container` - Responsive width wrapper
- `Section` - Spacing and background wrapper
- Can be interactive (Header navigation) but no data fetching

```tsx
// Layout Component: site structure
<Section variant="light" id="services">
  <Container>{/* Content */}</Container>
</Section>
```

#### 3. Marketing Components (`/components/marketing`)

Page-specific, content-rich:

- `Hero` - Landing hero section
- `Features` - Service grid
- `TrustSection` - Stats and social proof
- `ContactSection` - Form section
- Accept data props for content
- Can contain client components inside

```tsx
// Marketing Component: page-specific
<Features title="Our Services" features={servicesData} />
```

### Component Design Patterns

**Composition over Props:**

```tsx
// ❌ Avoid prop drilling
<Hero
  title="..."
  titleColor="..."
  titleSize="..."
  subtitle="..."
  subtitleColor="..."
  // 20 more props
/>

// ✅ Preferred: Compose with layout
<Hero title="..." subtitle="...">
  <HeroContent />
</Hero>
```

**Props for Variants, Not Logic:**

```tsx
// ❌ Avoid
<Card isLoading={isLoading} loadingComponent={<Spinner />} errorComponent={<Error />} />;

// ✅ Preferred: Handle at parent level
{
  isLoading && <Spinner />;
}
{
  error && <Error />;
}
{
  data && <Card data={data} />;
}
```

**JSDoc for Complex Components:**

```tsx
/**
 * Hero section with customizable title and CTAs
 * @param title - Main heading (h1)
 * @param description - Subheading text
 * @param cta - Primary call-to-action button
 * @returns Rendered hero section
 */
export function Hero({ title, description, cta }: HeroProps) {
```

## Utilities & Helpers

### `/lib/cn.ts` - Classname Utility

Conditionally combine Tailwind classes:

```tsx
import { cn } from "@/lib/cn";

// Instead of template strings
const buttonClass = cn(
  "base-styles",
  variant === "primary" && "primary-styles",
  disabled && "disabled-styles",
  className,
);
```

Why not clsx? Simpler & no extra dependency.

### `/lib/metadata.ts` - SEO Metadata

Create page-specific metadata:

```tsx
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata("Page Title", "Page description", {
  canonical: "https://...",
});
```

Handles title template, OG tags, Twitter cards, robots directives.

### `/lib/schema.ts` - Structured Data

Generate JSON-LD schemas:

```tsx
import { createOrganizationSchema } from "@/lib/schema";

const schema = createOrganizationSchema({
  name: "...",
  url: "...",
  // ...
});
```

Helpers for:

- Organization schema (global)
- Service schema (per service)
- Breadcrumb schema (for navigation)
- FAQ schema (for content)

## Future Integration Points

### Adding Form Handling

When contact form is connected to backend:

```tsx
// API route
// /app/api/contact/route.ts
export async function POST(request: Request) {
  const data = await request.json();
  // Validate, store, or send email
  return Response.json({ success: true });
}

// Client component
("use client");
const response = await fetch("/api/contact", {
  method: "POST",
  body: JSON.stringify(data),
});
```

### Adding a CMS

With Contentful or similar:

1. Create a `/lib/cms.ts` with fetch functions
2. Use in server components to fetch content
3. Render fetched data with presentation components
4. ISR (Incremental Static Regeneration) can be added for caching

### Adding Authentication

If newsletter signup or member area needed:

1. Use Next.js middleware for auth checks
2. Create auth-gated API routes
3. Use client components for auth UI
4. Store tokens in HttpOnly cookies (server-side logic)

### Adding Analytics

Add tracking script (Google Analytics, Mixpanel, etc.):

```tsx
// /app/layout.tsx
import Script from 'next/script';

<Script
  src="https://www.googletagmanager.com/gtag/js?id=G_ID"
  strategy="afterInteractive"
/>
<Script id="gtag">
  {`window.dataLayer = window.dataLayer || []; ...`}
</Script>
```

### Adding Internationalization

Use `next-intl` for multi-language:

```
/app
  /en
    page.tsx
  /de
    page.tsx
```

## Performance Optimization

### Image Handling

Always use Next.js `Image` component:

```tsx
import Image from "next/image";

<Image
  src="/path/to/image.jpg"
  alt="Descriptive alt text"
  width={1200}
  height={600}
  priority={false} // Set true for above-the-fold
/>;
```

Benefits:

- Automatic WebP/AVIF conversion
- Responsive srcset
- Lazy loading by default
- Prevents layout shift

### Code Splitting

Next.js automatically splits code by route. For lazy-loaded components:

```tsx
import dynamic from "next/dynamic";

const HeavyComponent = dynamic(() => import("@/components/Heavy"), {
  stitching: <Skeleton />,
});

// Use in page
<HeavyComponent />;
```

### Bundle Analysis

Check what's being bundled:

```bash
# Install analyzer
npm install --save-dev @next/bundle-analyzer

# Create next.config.js wrapper and run
ANALYZE=true npm run build
```

## Deployment Considerations

### Build Output

```bash
npm run build  # Creates .next/ folder
npm start      # Serves built site
```

**No server-side rendering needed** - Static site generates fully.

### Environment Variables

Use `.env.example` as template:

```bash
# .env.local (not committed)
NEXT_PUBLIC_SITE_URL=https://affinity-consulting.com
NEXT_PUBLIC_BUSINESS_EMAIL=hello@affinity-consulting.com

# Build-time used in metadata
# Public: available in browser
```

### Deployment Platforms

Works on any Node.js-compatible host:

- **Vercel** - Next.js native, zero config, recommended
- **Netlify** - Supported with minor config
- **AWS Amplify** - Full featured
- **Self-hosted** - Docker or Node.js server

### Pre-deployment Checklist

- [ ] `npm run build` succeeds with no errors
- [ ] `npm run lint` shows no warnings
- [ ] TypeScript: `tsc --noEmit` has zero errors
- [ ] Lighthouse scores 90+ on key pages
- [ ] Metadata validated (ogp.me, schema.org)
- [ ] Links checked for accuracy
- [ ] Environment variables configured
- [ ] Analytics tracking verified (if added)

## Decision Log

### Why not Next.js Turbopack?

Turbopack is in beta. Using SWC (current default) for stability.

### Why not Jest + RTL?

Adding testing: `npm install --save-dev jest @testing-library/react @testing-library/jest-dom`

Components are simple enough for manual testing initially. Add test coverage as site grows.

### Why not Storybook?

Components are sufficiently simple and co-located with usage. Add Storybook if component library becomes large.

### Why not GraphQL?

No need yet. REST/direct fetches in server components are adequate.

### Why not Prisma + Database?

Content is simple enough for hardcoded data + future CMS. Add database layer when needed.

### Why not tRPC?

Only adding API integration without type-safe RPC needs currently.

## Adding Dependencies Safely

Before installing a package, ask:

1. **Is it necessary?** Can Tailwind, Next.js, or React Hooks solve this?
2. **Is it maintained?** Check recent release dates and issue resolution
3. **What's the bundle impact?** Check npm package size and tree-shaking support
4. **Will it lock us in?** Is it replaceable later?

Bad reasons to add a package:

- "Everyone uses it"
- Slightly shorter syntax
- "We might need it"

Good reasons:

- Solves a real, complex problem
- Well-maintained and battle-tested
- Small bundle impact
- No reasonable built-in alternative

Examples of justified packages:

- `react-hook-form` (form state is complex)
- `contentful` (if using Contentful CMS)
- `date-fns` (date handling is genuinely complex)

Examples of unjustified packages:

- `lodash` (use native JS)
- `moment` (use native Date or smaller alternative)
- `class-variance-authority` (use Tailwind + cn utility)
