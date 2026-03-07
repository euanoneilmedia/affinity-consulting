# SEO.md - Search Engine Optimization Strategy

## Metadata Conventions

### Page Metadata Setup

Every page must export metadata using Next.js App Router `Metadata` API:

```tsx
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata(
  "Page Title | Affinity Consulting",
  "Concise description of page content, 150-160 characters.",
  {
    canonical: "https://affinity-consulting.com/page-slug",
  },
);
```

### Title Tag Guidelines

- **Format:** `Page Title | Affinity Consulting` (use site name at end)
- **Length:** 50-60 characters total (including site name)
- **Content:** Front-load keywords, make it unique per page
- **Avoid:** Keyword stuffing, clickbait, duplicate titles

**Examples:**

- ✅ `Service Redesign Consulting | Health Care | Affinity Consulting`
- ❌ `Best Healthcare Consulting Company | Digital Transformation | Services | Affinity Consulting` (too long)

### Meta Description Guidelines

- **Length:** 150-160 characters (Google displays ~155 on desktop)
- **Content:** Compelling summary of page, includes primary keyword once
- **Call to action:** Optional but recommended (e.g., "Learn how", "Discover")
- **Avoid:** Duplicate descriptions, keyword stuffing

**Examples:**

- ✅ `Affinity Consulting specializes in health and care transformation. Discover our service redesign, digital care models, and strategic alignment services.`
- ❌ `Health and care consulting. We provide consulting services for health care digital transformation. Call today!` (choppy, repetitive)

### Open Graph (Social Media) Tags

Configured globally in `/lib/metadata.ts`. Per-page overrides:

```tsx
export const metadata = createPageMetadata("Page Title", "Description", {
  og: {
    image: "https://affinity-consulting.com/og-service-page.png",
    type: "website",
  },
});
```

**OG Image Requirements:**

- **Size:** 1200×630px (16:9 aspect ratio)
- **Format:** PNG or JPG
- **Content:** Page heading, brand logo, relevant visual
- **Readability:** Must be readable at small thumbnail size

### Twitter Card Tags

Configured globally; inherits from OG tags. For custom:

```tsx
// In layout or page metadata
twitter: {
  card: 'summary_large_image',
  title: 'Page Title',
  description: 'Page description',
}
```

### Canonical URLs

Set globally in `/lib/metadata.ts` with `NEXT_PUBLIC_SITE_URL`. Override per page:

```tsx
export const metadata = createPageMetadata("Title", "Description", {
  canonical: "https://affinity-consulting.com/specific-page",
});
```

**Rules:**

- Always use full absolute URL (including https://)
- Prevent duplicate content issues
- Point to the "main" version of page (no trailing slash inconsistency)

## Page SEO Checklist

Use this checklist for every new page:

- [ ] **Title Tag**
  - [ ] 50-60 characters total
  - [ ] Primary keyword in title
  - [ ] Include site name
  - [ ] Unique from other pages
- [ ] **Meta Description**
  - [ ] 150-160 characters
  - [ ] Compelling summary
  - [ ] Primary keyword mentioned once
  - [ ] Call to action or benefit statement
- [ ] **Heading Hierarchy**
  - [ ] One `<h1>` per page
  - [ ] `<h1>` is first heading on page
  - [ ] Subsequent headings follow hierarchy (no skipping h2>h3)
  - [ ] All headings are semantic HTML tags, not styled divs
- [ ] **Content Structure**
  - [ ] Introductory paragraph summarizes page topic
  - [ ] Content organized into clear sections
  - [ ] Subheadings break up content (one per 200-300 words)
  - [ ] Internal links use descriptive anchor text
- [ ] **Images & Media**
  - [ ] All images have descriptive `alt` text (not "image" or "photo")
  - [ ] Large content images have associated captions if helpful
  - [ ] Images are optimized (using Next.js `Image` component)
  - [ ] No text in images as primary content (Google can't read it)
- [ ] **Links**
  - [ ] Internal links use descriptive text, not "click here"
  - [ ] External links to authority sources (if applicable)
  - [ ] Links open in same tab (unless noted)
  - [ ] No broken links
- [ ] **Technical SEO**
  - [ ] Page loads in <2 seconds
  - [ ] Mobile-responsive and tested on mobile
  - [ ] Core Web Vitals all green
  - [ ] No console errors
- [ ] **Structured Data / Schema**
  - [ ] Organization schema in layout (global)
  - [ ] Page-specific schema added if relevant
  - [ ] Schema validated with schema.org validator
  - [ ] JSON-LD `<script>` included in page

## Schema Strategy

### Organization Schema (Global)

Located in **root layout** or **Footer component**:

```tsx
import { createOrganizationSchema } from "@/lib/schema";
import { renderSchemaScript } from "@/lib/schema";

const schema = createOrganizationSchema({
  name: "Affinity Consulting",
  description: "Digital health and care transformation consulting",
  url: "https://affinity-consulting.com",
  logo: "https://affinity-consulting.com/logo.png",
  address: {
    locality: "London",
    country: "United Kingdom",
  },
  contact: {
    phone: "+44 (0) 20 XXXX XXXX",
    email: "hello@affinity-consulting.com",
  },
  social: [
    "https://linkedin.com/company/affinity-consulting",
    "https://twitter.com/affinityconsult",
  ],
});

// In a client component:
<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
```

### Professional Service Schema (Per-Page)

For service landing pages:

```tsx
import { createServiceSchema } from "@/lib/schema";

const serviceSchema = createServiceSchema({
  name: "Service Redesign Consulting",
  description: "Reimagine your services...",
  url: "https://affinity-consulting.com/services/redesign",
  address: {
    locality: "London",
    country: "United Kingdom",
  },
  contact: {
    phone: "+44 (0) 20 XXXX XXXX",
    email: "hello@affinity-consulting.com",
  },
});
```

### Breadcrumb Schema

For multi-level pages (future blog/resources):

```tsx
import { createBreadcrumbSchema } from "@/lib/schema";

const breadcrumbs = createBreadcrumbSchema([
  { name: "Home", url: "https://affinity-consulting.com" },
  { name: "Insights", url: "https://affinity-consulting.com/insights" },
  { name: "Article Title" }, // Current page, no URL
]);
```

### FAQ Schema

For pages with FAQs (if added):

```tsx
import { createFaqSchema } from "@/lib/schema";

const faqSchema = createFaqSchema([
  {
    question: "What is service redesign?",
    answer: "Service redesign is...",
  },
  {
    question: "How long does it take?",
    answer: "Timelines vary...",
  },
]);
```

## URL Structure Guidance

### Naming Convention

- All lowercase, no spaces
- Hyphens separate words: `/service-redesign`
- No trailing slashes
- No file extensions (.html, .php)
- No query parameters in main URLs

### Current Structure

```
/ ......................... Homepage
/about ..................... About page (future)
/services .................. Services overview (future)
/services/[slug] ........... Individual service page (future)
/insights .................. Blog/resources landing (future)
/insights/[slug] ........... Individual article (future)
/contact ................... Contact page (future)
/privacy ................... Privacy policy
/terms ..................... Terms of service
/api/contact ............... API endpoint for contact form
```

**Rules:**

- Keep URLs simple and descriptive
- Make URLs user-readable (not: `/s/xyz123`)
- Never change URLs once published (redirect 301 if you must)
- Use hyphens, not underscores

## Image Alt Text Guidance

### Alt Text Purpose

Alt text describes images for:

- Screen reader users (accessibility)
- Visually impaired users
- Image search indexing
- Context when images don't load

### Writing Good Alt Text

**For descriptive images (e.g., team photo):**

```html
<!-- ✅ Good -->
<img src="team.jpg" alt="Affinity Consulting leadership team in London office" />

<!-- ❌ Bad -->
<img src="team.jpg" alt="team" />
<img src="team.jpg" alt="image" />
<img src="team.jpg" alt="" />
<!-- Missing alt -->
```

**For icons:**

```html
<!-- ✅ Good (icon conveys meaning) -->
<img src="checkmark.svg" alt="Completed" />

<!-- ✅ Good (icon is decorative, hidden from screen readers) -->
<img src="decorative-line.svg" alt="" aria-hidden="true" />
```

**For screenshots/diagrams:**

```html
<!-- ✅ Good -->
<img
  src="service-flow.png"
  alt="Service redesign process: 1) Research, 2) Design, 3) Testing, 4) Implementation"
/>

<!-- ❌ Bad -->
<img src="service-flow.png" alt="Screenshot" />
```

**For logos:**

```html
<!-- ✅ Good -->
<img src="nhs-logo.png" alt="NHS England" />

<!-- ❌ Bad -->
<img src="nhs-logo.png" alt="Logo" />
```

### Alt Text Length

- **Ideal:** 125 characters or less
- **Maximum:** 250 characters before truncation
- **Avoid:** Redundancy (don't write "Image of X" or "Photo of X")

## Internal Linking Guidance

### Anchor Text Best Practices

**Good anchor text (descriptive):**

```html
<!-- ✅ Good -->
<a href="/services/redesign">Service redesign consulting</a>
<a href="/about">Learn about our approach</a>
<a href="/insights/digital-care">Digital care models: a guide</a>

<!-- ❌ Poor -->
<a href="/services/redesign">Click here</a>
<a href="/about">Read more</a>
<a href="/insights/digital-care">Link</a>
```

### Internal Link Strategy

- **From Homepage:** Link to main service pages, key insights
- **From Service Pages:** Link to related services, relevant insights
- **From Articles:** Link to relevant service pages, other articles
- **Avoid:** Linking to every page from every page (dilutes PageRank)

### Link Placement

```tsx
// In body content (most valuable)
<p>
  We specialize in <a href="/services/redesign">service redesign</a>
  across NHS and social care organizations.
</p>

// In navigation (good for main pages)
<nav>
  <a href="/">Home</a>
  <a href="/services">Services</a>
</nav>

// In footer (lower value but helps crawlability)
<footer>
  <a href="/privacy">Privacy Policy</a>
</footer>
```

## Performance & Crawlability

### Page Speed

All pages must achieve:

- **Largest Contentful Paint (LCP):** < 2.5 seconds
- **First Input Delay (FID):** < 100ms
- **Cumulative Layout Shift (CLS):** < 0.1

**How to optimize:**

- Use Next.js `Image` component for all images
- Lazy load below-the-fold content
- Minimize JavaScript bundles
- Use CSS Grid/Flexbox, not heavy frameworks

### Mobile Friendliness

- Tested and responsive on mobile devices
- Touch targets minimum 44×44 pixels
- No flash or pop-ups that block content
- Viewports properly configured (_already done_)

### Crawlability

- `robots.txt` allows Googlebot and other crawlers (default: allowed)
- No important content blocked by CSS or JavaScript
- Sitemap auto-generated by Next.js (at `/sitemap.xml`)
- No redirect chains (A→B→C should be A→C)

### Core Web Vitals Tracking

Once deployed, monitor via:

- **Google Search Console** - Actual user data
- **PageSpeed Insights** - Lab + field data
- **Lighthouse** - Lab data (run locally: `npm run build` then test)

## SEO Monitoring & Maintenance

### Regular Checks

**Monthly:**

- Run Lighthouse on key pages (target: 90+)
- Check Google Search Console for errors
- Validate schema with schema.org validator

**Quarterly:**

- Review page rankings for target keywords
- Check for broken links (use a tool like Screaming Frog)
- Update content for freshness

**Yearly:**

- Full content audit and refresh
- Competitive analysis
- URL structure review (consider content expansion)

### Tools

- **Google Search Console** - Free, essential
- **SEMrush / Ahrefs** - Paid, competitor analysis
- **Lighthouse** - Built into Chrome DevTools
- **schema.org validator** - Free, schema validation
- **ogp.me** - Free, OG image validation

## Future Expansion: Blog/Insights

When adding blog/insights section:

```
/insights ..................... Blog landing
/insights/[slug] .............. Article page
```

Each article should have:

- Unique metadata and OG image
- Byline with author and date (JSON-LD ArticleSchema)
- Category/topic tags
- Related articles links
- Minimum 1000-1200 words
- Internal links to service pages (naturally)

**Article Metadata Example:**

```tsx
export const metadata = createPageMetadata(
  "How to Redesign Your Health Service | Affinity Insights",
  "A practical guide to reimagining service delivery through human-centred design and digital enablement. Read our insights on service redesign.",
);
```

## Keywords & Targeting

### Primary Keywords (Homepage)

- Health and care transformation
- Digital health consulting
- Service redesign
- Healthcare digital transformation
- NHS consulting

### Secondary Keywords (Services)

- Service redesign consulting
- Digital care models
- Healthcare strategy
- Change management health
- Patient experience design

### Keyword Usage Rules

- **Title/H1:** Primary keyword once
- **Meta description:** Primary keyword once
- **Body content:** Natural frequency (1-2% keyword density)
- **Avoid:** Keyword stuffing, over-optimization
- **Prefer:** Semantic variants and long-tail phrases

**Example (Target: "Service Redesign Consulting"):**

```
Natural usage:
- "Our service redesign consulting approach combines..."
- "Service redesign for NHS trusts requires..."
- "Healthcare service redesign is most effective when..."

Forced/poor:
- "Service redesign consulting for service redesign consulting"
- "Service redesign is our main service redesign service"
```

## Accessibility & SEO

Good accessibility = better SEO:

- **Semantic HTML** - Use proper heading tags, not divs
- **Alt text on images** - Search engines index images better
- **Proper color contrast** - Readable for all users
- **Descriptive link text** - Search engines understand context better
- **Keyboard navigation** - All interactions keyboard-accessible

This creates a better experience for both humans and search engines.
