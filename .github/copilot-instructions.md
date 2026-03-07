# copilot-instructions.md

This file provides guidance for AI assistants (GitHub Copilot, Claude, etc.) working on the Affinity Consulting website codebase.

## Project Context

**Affinity Consulting Website** is a production-ready marketing site for a digital health & transformation consulting firm. It's built on modern Next.js best practices and designed for long-term maintainability.

**Technology:** Next.js 15 (App Router), TypeScript, Tailwind CSS, minimal dependencies

**Goal:** Maintain a clean, scalable, performant marketing website with strong SEO foundations.

## Architecture Principles

Read `/agent/AGENT.md` for complete project rules. Key principles:

1. **Server Components First** - All components are server components unless `'use client'` is needed
2. **Minimal Dependencies** - No package bloat; use Tailwind and Next.js built-ins
3. **Design Token System** - All colors, spacing, typography defined in `tailwind.config.js`
4. **Content-Driven** - Content separate from presentation logic
5. **SEO-Ready** - Metadata and schema built-in from day one

## Folder Structure

```
/app                    → Next.js pages and routes
/components
  /ui                   → Reusable primitives (Button, Card)
  /layout               → Site structure (Header, Footer, Container)
  /marketing            → Page sections (Hero, Features, CTA)
/lib                    → Utilities (cn, metadata, schema)
/styles                 → Global CSS and layer components
/public                 → Static assets
/agent                  → Project documentation
```

## Code Standards

### TypeScript

- **Strict mode enabled** - Type everything
- **No `any` types** - Use proper interfaces
- All component props use TypeScript interfaces
- Example:

```tsx
interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
}

export function Button({ children, variant = "primary", ...props }: ButtonProps) {
  // Implementation
}
```

### Components

**Three-tier architecture:**

1. **UI Components** (`/components/ui`)
   - Generic, reusable, stateless
   - Examples: Button, Card
   - No business logic or data fetching

2. **Layout Components** (`/components/layout`)
   - Site structure and containers
   - Examples: Header, Footer, Container, Section
   - Can be interactive but no data fetching

3. **Marketing Components** (`/components/marketing`)
   - Page-specific sections with content
   - Examples: Hero, Features, CTASection
   - Accept data props for content

**Rule:** Keep components small, focused, and reusable. Use composition over props.

### Styling

- **Tailwind CSS only** - No CSS files, no inline styles
- **Design tokens from config** - Check `tailwind.config.js` for colors, spacing
- **Layer components for patterns** - In `globals.css` `@layer components`
- **Classes from tokens** - Use `cn()` utility for conditional classes

```tsx
// ✅ Good
<div className={cn('flex gap-4 p-6 rounded-lg', disabled && 'opacity-50')}>

// ❌ Avoid
<div style={{ gap: '16px', padding: '24px' }}>
<div className="flex gap-4" style={{ color: '#FF5500' }}>
```

### File Organization

- One component per file
- Use `index.ts` for barrel exports from folders
- Keep components under 200 lines (split if larger)
- Use clear, descriptive names: `ContactForm`, not `Form` or `FormComp`

## When Working on Tasks

### Adding a New Page

1. Create in `/app/[slug]/page.tsx`
2. Export `metadata` using `createPageMetadata()` from `@/lib/metadata`
3. Use layout components (Container, Section) for structure
4. Import marketing components for page sections
5. Validate metadata with ogp.me and schema.org

### Adding a Component

1. Determine type: UI (primitive), Layout (structural), or Marketing (page-specific)
2. Create in appropriate folder with TypeScript interface for props
3. Export from folder's `index.ts`
4. Use Tailwind classes + `cn()` for styling
5. Keep to single responsibility

### Updating Styling

1. Update `tailwind.config.js` for design tokens
2. Add layer components to `globals.css` for reusable patterns
3. Use `cn()` utility for conditional styles
4. Never add CSS files outside Tailwind system

### Writing Copy/Content

- Read `/agent/CONTENT.md` for voice, tone, and guidelines
- Content should be benefit-driven, not feature-driven
- Headings should be specific and frontload keywords
- Body copy: 2-4 sentences per paragraph
- CTAs should be action-oriented and specific
- Links should be descriptive (not "click here")

## Important Don'ts

❌ **Don't add new dependencies** without strong justification  
❌ **Don't use inline styles or CSS modules**  
❌ **Don't create client components unless necessary**  
❌ **Don't import from node_modules for styling** (use Tailwind)  
❌ **Don't put business logic in presentation components**  
❌ **Don't skip TypeScript interfaces**  
❌ **Don't use `any` type**  
❌ **Don't hardcode colors or spacing values**

## Important Do's

✅ **Use server components by default**  
✅ **Export TypeScript interfaces for all props**  
✅ **Use `cn()` utility for conditional classes**  
✅ **Reference colors/spacing from `tailwind.config.js`**  
✅ **Keep components reusable and focused**  
✅ **Use composition instead of complex props**  
✅ **Use semantic HTML everywhere**  
✅ **Write copy in place, not in separate files**

## URLs and Routing

Current routes:

- `/` - Homepage
- `/privacy` - Privacy policy (create as needed)
- `/terms` - Terms of service (create as needed)

Future routes:

- `/about` - About page
- `/services/[slug]` - Individual service pages
- `/insights` - Blog/resources landing
- `/insights/[slug]` - Individual articles
- `/contact` - Contact page

**URL structure:** Lowercase with hyphens, no trailing slashes, no file extensions.

## SEO Requirements

Every page needs:

1. **Metadata**

```tsx
export const metadata = createPageMetadata(
  "Page Title | Affinity Consulting",
  "Concise description for search results.",
);
```

2. **Proper heading hierarchy**
   - One `<h1>` per page
   - Semantic HTML headings (not styled divs)
   - Hierarchy: h1 → h2 → h3 (no skipping)

3. **Image alt text**
   - Descriptive alt text on images
   - Not "image" or "photo"
   - Include context when relevant

4. **Internal links**
   - Use descriptive anchor text
   - Not "click here" or "read more"

5. **Page structure**
   - Intro paragraph summarizing topic
   - Clear sections with subheadings
   - Logical content flow

See `/agent/SEO.md` for complete SEO strategy.

## Testing Before Commit

Always run before committing:

```bash
npm run lint        # Check for linting issues
npm run build       # Ensures TypeScript passes
npm run dev         # Test locally
```

Check:

- [ ] TypeScript: zero errors
- [ ] ESLint: zero warnings
- [ ] Lighthouse: 90+ on affected pages
- [ ] Responsive: tested on mobile/tablet/desktop
- [ ] Links: no broken links
- [ ] Forms: working properly

## Database & Content

Currently **no database**. Content is:

- Hardcoded in component files as data objects
- Future: Can integrate Contentful, Strapi, or headless CMS

When adding content, create data objects at top of component/page and pass to presentation components:

```tsx
// Good: Data separate from presentation
const services = [
  { title: '...', description: '...' },
];

// In component
<Features services={services} />

// Bad: Data mixed in component
<Features>
  <FeatureCard>...</FeatureCard>
</Features>
```

## Environment Variables

Available in `.env.local` (from `.env.example`):

```
NEXT_PUBLIC_SITE_URL
NEXT_PUBLIC_SITE_NAME
NEXT_PUBLIC_SITE_DESCRIPTION
NEXT_PUBLIC_BUSINESS_EMAIL
NEXT_PUBLIC_BUSINESS_PHONE
NEXT_PUBLIC_BUSINESS_ADDRESS
```

`NEXT_PUBLIC_*` variables are available in browser. Non-public variables are server-only.

## Performance Goals

- **Lighthouse:** 90+ on all pages
- **LCP (Largest Contentful Paint):** < 2.5s
- **FID/INP (Interaction):** < 100ms
- **CLS (Layout Shift):** < 0.1

Achieved through:

- Server components reducing JS
- Automatic code splitting
- Tailwind CSS optimization
- Image optimization with Next.js Image

## Design System Reference

See `/agent/DESIGN.md` for complete design system. Quick reference:

**Colors:**

- Brand Primary: `text-brand-primary` (#1b6b7b teal)
- Brand Secondary: `text-brand-secondary` (#d87e52 coral)
- Neutrals: `text-neutral-50` through `text-neutral-900`

**Spacing:**

- `py-12`, `py-16`, `py-24` for section spacing
- `gap-6`, `gap-8` for component spacing
- `p-4`, `p-6`, `p-8` for padding

**Typography:**

- Headings: `h1`, `h2`, `h3`, etc. (semantic HTML)
- Body: `text-base` or `text-lg`
- Small: `text-sm`, `text-xs`

**Components:**

- `<Button>` - Buttons with variants
- `<Card>` - Content containers
- `<Container>` - Responsive width wrapper
- `<Section>` - Spacing and background wrapper

## Git & Commits

- Write clear commit messages
- Keep commits focused and atomic
- Update `/agent` documentation if architecture changes
- No breaking changes without discussion

## When Stuck

1. Check `/agent` documentation - It probably has your answer
2. Look at existing code - Copy patterns from similar implementations
3. Check TypeScript errors - They're usually helpful
4. Run `npm run build` - Ensures no breaking changes
5. Test in browser - Always verify visually

## Documentation to Maintain

- `/agent/AGENT.md` - Architecture and rules
- `/agent/DESIGN.md` - Design system
- `/agent/SEO.md` - SEO approach
- `/agent/CONTENT.md` - Copy voice and guidelines
- `/agent/STACK.md` - Tech decisions
- `/agent/README.md` - Quick reference
- Root `README.md` - Project overview
- Code comments - For non-obvious logic

Update documentation when:

- Adding new patterns or conventions
- Changing architecture decisions
- Integrating new tools
- Discovering important lessons

---

**This project is built for the long term. Clean code, clear documentation, and thoughtful architecture matter more than speed. Take time to understand the patterns, follow the guidelines, and maintain the foundation for future developers.**
