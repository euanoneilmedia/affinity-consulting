# AGENT.md - Affinity Consulting Website Project Guidance

## Project Purpose

This is a **production-ready marketing website** for Affinity Consulting, a digital health & transformation consulting firm. It is built as a long-term foundation for business growth, not a throwaway prototype.

**Core Mission:** Establish a professional, modern, SEO-optimized digital presence that communicates expertise in health and care transformation while converting visitors into leads.

## Architecture Principles

### 1. Server Components First

- Use React Server Components (RSC) by default for all pages and layouts
- Move to client components only when necessary (forms, interactions, real-time updates)
- This improves performance, security, and SEO

### 2. Minimal Dependencies

- Extend Tailwind CSS rather than adding component libraries when possible
- Use Next.js built-in features (Image, Link, Metadata API) extensively
- Avoid installing packages without deliberate consideration

### 3. Design Token System

- All styling flows from a defined token system in `tailwind.config.js`
- Brand colors are derived from the Affinity Consulting logo (teal + coral)
- Maintain consistent spacing, typography, and sizing across all components

### 4. Content-Driven Architecture

- Separate content from presentation
- Use data objects for features, services, testimonials
- Make it trivial to update copy, add services, or change messaging

### 5. SEO & Schema Ready

- Every page has proper metadata using Next.js Metadata API
- JSON-LD schema helpers are in place for future expansion
- Semantic HTML and proper heading hierarchy throughout
- Canonical URLs and Open Graph configured

## Folder Structure Rules

```
affinity-consulting/
├── /app                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout with Header/Footer
│   ├── page.tsx           # Homepage
│   └── api/               # API routes (future)
├── /components            # Reusable React components
│   ├── /ui                # Primitive UI components (Button, Card, etc.)
│   ├── /layout            # Layout components (Header, Footer, Container)
│   └── /marketing         # Page-specific components (Hero, Features, etc.)
├── /lib                   # Utility functions & helpers
│   ├── cn.ts              # Classname utility
│   ├── metadata.ts        # Metadata helpers
│   └── schema.ts          # JSON-LD schema generators
├── /styles                # CSS files
│   └── globals.css        # Global styles + Tailwind directives
├── /public                # Static assets
├── /agent                 # Project documentation
└── Configuration files (tsconfig, tailwind, next.config, etc.)
```

**Rules:**

- `/app` contains all routes and page-specific layout
- `/components` is organized by purpose (ui, layout, marketing, etc.)
- Each component has one clear responsibility
- Use index.ts files for barrel exports from subdirectories
- No logic beyond presentation in components

## Component Rules

### UI Components (`/components/ui`)

These are generic, reusable primitives with no business logic:

- `Button` - Stylable button with variants (primary, secondary, outline, ghost)
- `Card` - Content container with optional elevation and hover states
- Keep these **stateless** and **composable**
- No domain-specific knowledge

### Layout Components (`/components/layout`)

These provide site structure:

- `Header` - Navigation and branding (minimal, sticky)
- `Footer` - Links, contact info, copyright
- `Container` - Responsive max-width wrapper
- `Section` - Spacing and background wrapper for content blocks
- Keep layout components simple and domain-agnostic

### Marketing Components (`/components/marketing`)

These are page-specific, content-rich sections:

- `HeroSection` - Landing hero with positioning, CTA, and trust highlights
- `ServicesSection` - Service/capability grid
- `TrustSection` - Stats and social proof
- `CtaSection` - Full-width call-to-action
- `ContactSection` - Simple contact form
- These can contain business logic (forms, conditional rendering)
- Accept data props for easy content changes

### Naming Convention

- Marketing components should use `*Section` naming for consistency.
- If a legacy name exists (`Hero`, `Features`, `CTASection`), keep compatibility exports while preferring `HeroSection`, `ServicesSection`, and `CtaSection` in new code.
- Keep file names aligned with primary export where practical.

### Homepage Information Architecture

The homepage should preserve this order unless there is a clear business reason to change it:

1. HeroSection (positioning + primary CTA)
2. About section (who we are / context)
3. ServicesSection (capabilities)
4. TrustSection (proof + testimonial)
5. Approach section (method)
6. CtaSection (conversion prompt)
7. ContactSection (form)

This hierarchy improves scannability and conversion intent while keeping the page concise.

### Component Guidelines

- Keep components small and focused (one responsibility each)
- Use TypeScript interfaces for all props
- Prefer composition over complexity
- Avoid prop drilling; use layout composition instead
- Document complex props with JSDoc comments
- Server components by default, client only when needed

## Styling Rules

### Colors

All colors come from the design system in `tailwind.config.js`:

- **Brand Primary:** `#1b6b7b` (deep teal) - Use for CTAs, links, highlights
- **Brand Secondary:** `#d87e52` (coral) - Use for accents, emphasis
- **Neutrals:** Full scale from 50 to 900 for text, borders, backgrounds

### Using Colors

```tsx
// Use Tailwind classes directly
<div className="bg-brand-primary text-white">Primary</div>
<button className="border-2 border-brand-secondary">Secondary</button>
<p className="text-neutral-600">Body text</p>
```

### Typography

Follow the scale defined in `tailwind.config.js`:

- `prose` class for article/rich text content
- Headings: `h1` (48px), `h2` (36px), `h3` (24px), etc.
- Body: `base` (16px/24px line-height)
- Use semantic HTML tags (`h1`, `h2`, `p`, etc.)

### Spacing

Use Tailwind's spacing scale consistently:

- `py-12`, `py-16`, `py-24` for section vertical spacing
- `gap-6`, `gap-8` for grid/flex spacing
- `mb-4`, `mt-6` for component-level spacing
- Define major sections using `Section` component

### Shadows

Minimal, soft shadows only:

- `shadow-sm` for subtle elevation
- `shadow-md` for card hover states
- `shadow-lg` for larger elevated content
- Avoid decorated, decorative shadows

### Rounded Corners

Subtle, modern curves:

- `rounded-lg` for cards and containers (0.5rem)
- `rounded-md` for form inputs (0.375rem)
- `rounded-full` only for badges/pills
- Avoid over-rounding

### Responsive Design

Mobile-first approach:

- Base styles are mobile
- Use `sm:`, `md:`, `lg:` breakpoints
- Test all content blocks on mobile
- Ensure touch targets are ≥44px

## SEO Expectations

### Page Metadata

Every page must have:

- Unique, descriptive title (50-60 chars)
- Meta description (150-160 chars)
- Open Graph image (1200×630px)
- Canonical URL (handled globally)

### URL Structure

```
/ - Homepage
/about - About us
/services/[service] - Individual service pages (future)
/insights - Blog/articles (future)
/contact - Contact page (future)
```

### Semantic HTML

- Use `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>` properly
- Use `<h1>` once per page, in correct hierarchy
- Link text should be descriptive, not "click here"
- Use `alt` text on all images

### Performance

- All pages should achieve 90+ Lighthouse score
- Use Next.js Image for all images (optimization)
- Minimize external scripts
- Lazy load below-the-fold content

## Schema Approach

JSON-LD schema helpers in `/lib/schema.ts` support:

- **Organization schema** - Injected site-wide from `app/layout.tsx`
- **LocalBusiness/ProfessionalService schema** - For service pages
- **BreadcrumbList** - For navigation
- **FAQ schema** - For content pages (future)

**Implementation:**

- Wrap schema script in `<Script>` component with `strategy="afterInteractive"`
- Include in page or layout where relevant
- Use TypeScript interfaces for schema validation
- Keep schema in sync with actual content

## Documentation Rules

### Code Comments

- JSDoc comments for exported functions/components with complex props
- Inline comments only for non-obvious logic
- Keep comments current; remove outdated comments

### File Structure Comments

```tsx
/**
 * Brief description of component
 * @param children - What this does
 * @returns Rendered component
 */
export function ComponentName({ children }: Props) {
```

### Documentation Files

- Keep `/agent` files current and concise
- Update when architecture changes
- Use markdown for readability
- Include examples for complex patterns

## How Future Contributors Should Safely Extend

### Adding a New Page

1. Create file in `/app/[page]/page.tsx`
2. Import `createPageMetadata` from `@/lib/metadata`
3. Set metadata at top of file
4. Use existing layout components (`Container`, `Section`)
5. Use existing marketing components or create new ones in `/components/marketing`
6. No CSS files; use Tailwind utility classes
7. Test metadata with ogp.me and schema.org validators

### Adding a New Component

1. Determine: is it UI primitive, layout, or marketing-specific?
2. Create in appropriate `/components/*` folder
3. Export from folder's `index.ts`
4. Use TypeScript interfaces for all props
5. Use `cn()` utility for conditional classes
6. Keep styling in Tailwind classes or `globals.css` layer components
7. Test at multiple breakpoints

### Updating Styling

1. Update `tailwind.config.js` for design tokens
2. Add layer components to `globals.css` for reusable patterns
3. Never use inline styles or CSS-in-JS
4. Test changes across all pages

### Adding a Feature

1. Plan: where does it belong (component, page, API)?
2. Create necessary components and utilities
3. Update relevant metadata/schema helpers
4. Test SEO impact (metadata, schema validation)
5. Update `/agent` documentation if architecture changes
6. Add TypeScript types from the start

### Maintaining Quality

- Run `npm run lint` before commits
- Ensure TypeScript has zero errors (`npm run build`)
- Test forms locally (API routes return 200)
- Validate metadata with structural data tools
- Keep file sizes reasonable (<200 lines per component)
- Use meaningful variable and function names

## Performance & Quality Gates

- Lighthouse score: **90+** across all pages
- Core Web Vitals: All green
- TypeScript: Zero errors
- ESLint: Zero warnings
- No console errors in production
- Build time: <30 seconds
- Page load: <2 seconds on 4G

## Future Integration Points

The foundation is prepared for:

- **CMS Integration:** Add Contentful/Strapi without major refactoring
- **Analytics:** Placeholder ready in `.env.example`
- **Email Collection:** Contact form hooked to API
- **Blog/Insights:** Add `/insights` route with proper metadata
- **Multi-language:** i18n setup with existing structure
- **Team Pages:** Add team member cards alongside services
- **Case Studies:** Add service-specific showcase pages

## Review Checklist for PRs/Changes

- [ ] TypeScript: No errors, proper typing
- [ ] ESLint: No warnings
- [ ] Components: Single responsibility, reusable
- [ ] Styling: Uses design tokens, Tailwind only
- [ ] Metadata: Updated if page/routes changed
- [ ] Responsive: Tested at mobile, tablet, desktop
- [ ] Accessibility: Semantic HTML, focus states, alt text
- [ ] Performance: No unnecessary dependencies added
- [ ] Documentation: `/agent` files updated if needed
