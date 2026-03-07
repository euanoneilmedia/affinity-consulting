# /agent - Project Guidance & Documentation

This folder contains comprehensive documentation for the Affinity Consulting website project. Use these files as references for:

- **Architectural decisions** and why they were made
- **Design system** for visual consistency
- **SEO strategy** and implementation
- **Content guidelines** for tones and copy
- **Technology stack** and dependencies

## Files Overview

### [AGENT.md](./AGENT.md)

**Main reference for project structure and principles**

Contains:

- Project purpose and architecture principles
- Folder structure and file organization rules
- Component design patterns and best practices
- SEO and schema approach
- How future contributors should safely extend the project
- Quality gates and performance expectations

**When to read:** Starting a new task, unsure about project conventions, adding a new page or component

### [DESIGN.md](./DESIGN.md)

**Visual language and design system**

Contains:

- Brand color palette (primary teal, secondary coral, neutrals)
- Typography scale and usage
- Spacing and layout grid
- Border radius and shadow rules
- Reusable component styles (buttons, cards, etc.)
- Responsive design patterns
- Accessibility guidelines

**When to read:** Building UI components, updating styling, checking design token values

### [SEO.md](./SEO.md)

**Search engine optimization strategy**

Contains:

- Metadata conventions and implementation
- Page SEO checklist
- Schema/structured data strategy
- URL structure guidance
- Image alt text and internal linking guidelines
- Performance and crawlability best practices
- Keyword and targeting approach

**When to read:** Creating a new page, setting up metadata, adding structured data

### [STACK.md](./STACK.md)

**Technology stack and architecture decisions**

Contains:

- Dependencies and why they were chosen (and not chosen)
- Next.js App Router details
- TypeScript configuration
- Styling approach with Tailwind
- Component architecture layers (UI, Layout, Marketing)
- Utilities and helpers (`cn`, `metadata`, `schema`)
- Future integration points
- How to add new dependencies safely

**When to read:** Adding a feature, integrating a library, understanding tech decisions

### [CONTENT.md](./CONTENT.md)

**Content strategy and copy guidelines**

Contains:

- Brand voice and tone guidelines
- Homepage structure and copy
- Heading, body, and link text guidelines
- Form and CTA copy templates
- Service description patterns
- How to update content
- Copy checklist before publishing
- Content maintenance schedule

**When to read:** Writing copy, updating homepage, creating new pages, reviewing content

## Quick Reference

### I need to...

**Add a new page**

1. Read: [AGENT.md](./AGENT.md) - Folder structure section
2. Read: [SEO.md](./SEO.md) - Page SEO checklist
3. Read: [CONTENT.md](./CONTENT.md) - Copy guidelines

**Build a new component**

1. Read: [AGENT.md](./AGENT.md) - Component rules section
2. Read: [DESIGN.md](./DESIGN.md) - Design system
3. Use the design tokens from `tailwind.config.js`

**Update styling**

1. Read: [DESIGN.md](./DESIGN.md) - Color and spacing sections
2. Check: `tailwind.config.js` - Current token values
3. Update: `globals.css` - If adding layer components

**Integrate a new tool/library**

1. Read: [STACK.md](./STACK.md) - "Adding Dependencies Safely"
2. Check: Type definitions and browser support
3. Document: Why it was added in this file

**Fix a bug or improve performance**

1. Read: [STACK.md](./STACK.md) - Performance optimization section
2. Test: `npm run build` and check bundle impacts
3. Validate: Lighthouse score on affected pages

**Write or update content**

1. Read: [CONTENT.md](./CONTENT.md) - Tone and copy guidelines
2. Reference: Brand voice examples
3. Use: Copy checklist before publishing

## Project Principles (Summary)

If you only read one section, read [AGENT.md](./AGENT.md). Here's the essence:

1. **Server Components First** - Use React Server Components by default
2. **Minimal Dependencies** - Add packages only when necessary
3. **Design Token System** - All styling flows from `tailwind.config.js`
4. **Content-Driven** - Content separate from presentation
5. **SEO Ready** - Metadata and schema built-in from day one
6. **Accessible** - Semantic HTML and WCAG compliance by default

## Current Homepage Blueprint

The current homepage uses a deliberate conversion hierarchy:

1. `HeroSection` - positioning and immediate CTA
2. About section - context and credibility
3. `ServicesSection` - capabilities and outcomes
4. `TrustSection` - proof and testimonial
5. Approach section - methodology
6. `CtaSection` - conversion prompt
7. `ContactSection` - contact capture

When extending the page, preserve this flow unless there is a clear business rationale.

## Important Files

These configuration files work together with this documentation:

- **`package.json`** - Dependencies (minimal by design)
- **`tsconfig.json`** - TypeScript strict mode
- **`tailwind.config.js`** - Design tokens (colors, spacing, typography)
- **`next.config.js`** - Next.js settings for performance and SEO
- **`components.json`** - Configuration for future shadcn/ui components
- **`.eslintrc.json`** - Linting rules for code quality
- **`app/layout.tsx`** - Sitewide organization JSON-LD injection

## Contributing Guidelines

### Before Making Changes

1. Read the relevant guide in `/agent`
2. Ensure your change follows established patterns
3. Check that TypeScript and ESLint pass: `npm run lint`
4. Test at mobile, tablet, and desktop breakpoints

### When You Complete Work

1. Update relevant `/agent` files if architecture changed
2. Ensure: `npm run build` succeeds
3. Ensure: `npm run lint` shows no warnings
4. Test: Lighthouse score 90+ on affected pages
5. Validate: Metadata and schema with online tools

### Code Review Checklist

Before submitting a PR:

- [ ] TypeScript: No errors
- [ ] ESLint: No warnings
- [ ] Components: Follow architecture (UI, Layout, Marketing)
- [ ] Styling: Uses design tokens only
- [ ] Responsive: Tested mobile/tablet/desktop
- [ ] Accessibility: Semantic HTML, focus states, alt text
- [ ] SEO: Metadata updated, schema valid
- [ ] Performance: No unnecessary dependencies
- [ ] Documentation: `/agent` files updated if needed

## Questions?

For any architectural or technical questions:

1. **Check the relevant `/agent` file** - It probably has your answer
2. **Search the codebase** - See how similar things are done elsewhere
3. **Check existing components** - Copy and adapt proven patterns
4. **Ask in PR comments** - Document decisions for future reference

## History & Evolution

This is a long-term foundation, not a demo. As the site grows:

- Update guides in `/agent` to reflect new patterns
- Document decisions that weren't obvious initially
- Archive outdated approaches
- Keep documentation current with code

The goal is that 6 months from now, a new team member can read `/agent` and understand how everything works.

---

**Last Updated:** March 2026  
**Project:** Affinity Consulting Website  
**Version:** 1.0.0 - Production Ready
