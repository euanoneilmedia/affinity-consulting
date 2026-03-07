# DESIGN.md - Design System & Visual Language

## Design Philosophy

The Affinity Consulting website embodies **modern professionalism, trust, and clarity**. The design is intentionally restrained—prioritizing whitespace, typography, and hierarchy over decoration. Every visual choice reinforces the brand promise of thoughtful, human-centred consulting.

**Key Principles:**

- Minimal, not sparse
- Spacious and breathing
- Sophisticated without being ornate
- Accessibility first
- Performance-conscious

## Color System

All colors are derived from the Affinity Consulting logo, creating a naturally harmonious palette.

### Brand Colors

#### Primary: Deep Teal

```
Brand Primary: #1b6b7b
Light variant: #2a8a9e
Dark variant: #0f4a57
```

**Usage:**

- Primary CTAs (buttons, links)
- Accent headings
- Icon backgrounds
- Navigation highlights
- Links in body text
- **Avoid:** Background fills (unless full-width)

#### Secondary: Coral/Orange

```
Brand Secondary: #d87e52
Light variant: #e89968
Dark variant: #c66838
```

**Usage:**

- Secondary CTAs
- Emphasis and highlights
- Icons on dark backgrounds
- Hover states on primary actions
- Accent borders
- **Avoid:** Large background areas

### Neutral Palette

Professional grayscale for text, backgrounds, and borders:

```
Neutral 50:  #f9fafb  (lightest background)
Neutral 100: #f3f4f6  (light section background)
Neutral 200: #e5e7eb  (borders, dividers)
Neutral 300: #d1d5db  (muted borders)
Neutral 400: #9ca3af  (disabled text, secondary labels)
Neutral 500: #6b7280  (secondary body text)
Neutral 600: #4b5563  (body text)
Neutral 700: #374151  (emphasis text)
Neutral 800: #1f2937  (headings, strong text)
Neutral 900: #111827  (deepest text, dark backgrounds)
```

**Hierarchy:**

- Headings: Neutral 900
- Body text: Neutral 600-700
- Secondary text: Neutral 500
- Muted text: Neutral 400
- Borders: Neutral 200-300
- Backgrounds: Neutral 50-100

### Gradient Usage

Minimal gradients for subtle depth:

```css
/* Light accent gradient */
background: linear-gradient(to bottom right, rgb(27, 107, 123, 0.1), rgb(216, 126, 82, 0.1));

/* Used in: Card backgrounds on hover, accent blocks */
```

**Rule:** Gradients are always very subtle (5-10% opacity). Avoid colorful gradients.

## Typography

**Font Family:** System stack (via Tailwind defaults)

```css
font-family:
  ui-sans-serif,
  system-ui,
  -apple-system,
  BlinkMacSystemFont,
  "Segoe UI",
  Roboto,
  "Helvetica Neue",
  Arial,
  "Noto Sans",
  sans-serif;
```

### Type Scale

Based on modular scale (1.125 ratio):

```
h1: 48px / 48px line-height (2xl)
h2: 36px / 40px line-height (xl)
h3: 24px / 32px line-height (lg)
h4: 20px / 28px line-height (base)
h5: 18px / 28px line-height (sm)
h6: 16px / 24px line-height (base)

Body: 16px / 24px line-height
Small: 14px / 20px line-height
Xs:    12px / 16px line-height
```

### Font Weights

```
Regular:   400  (body text, most content)
Medium:    500  (navigations, labels)
Semibold:  600  (card titles, subheadings)
Bold:      700  (h1, h2, emphasis)
```

### Heading Rules

- **h1:** Used once per page, at the top. Large, bold, lowercase preferred for body text
- **h2:** Section headings. Prominent, clear hierarchy
- **h3:** Subsection headings, card titles
- **h4+:** Minimal use; typically for small sections or lists
- **Never skip heading levels** (h1 > h2 > h3, not h1 > h3)
- **Color:** Headings use Neutral 900. Brand color only for emphasis
- **Line height:** Generous, never cramped

### Body Text

- **Color:** Neutral 600 (body), Neutral 700 (emphasis)
- **Line height:** 1.5 (24px for 16px base)
- **Line length:** Optimal is 50-75 characters; max-width: 65ch
- **Paragraph spacing:** 1.5em between paragraphs
- **Links:** Brand Primary with underline on hover

### Interactive Text

- **Buttons:** Always semibold or bold, all-caps is OK for small buttons
- **Links:** Inherit color from context, underline or color-change on hover
- **Form labels:** Small, semibold, Neutral 700
- **Placeholder text:** Neutral 400, italics OK for emphasis

## Spacing System

Tailwind's default spacing (0.25rem increments) with custom aliases:

```
0:    0
1:    0.25rem (4px)
2:    0.5rem  (8px)
3:    0.75rem (12px)
4:    1rem    (16px)
6:    1.5rem  (24px)
8:    2rem    (32px)
12:   3rem    (48px)
16:   4rem    (64px)
20:   5rem    (80px)
24:   6rem    (96px)
32:   8rem    (128px)
```

### Section Spacing

```
Small section:  py-12 sm:py-16 (48px / 64px)
Normal section: py-16 sm:py-24 lg:py-32 (64px / 96px / 128px)
Large section:  py-20 sm:py-32 lg:py-48 (80px / 128px / 192px)
```

### Component Spacing

```
Card padding:        p-6  (24px)
Card header padding: p-6 with bottom border
Button padding:      py-3 px-6 (medium) or py-4 px-8 (large)
Input padding:       py-3 px-4
List item gap:       gap-4 or gap-6
Grid gap:            gap-8 (desktop), responsive on mobile
```

## Borders & Corners

### Border Radius

```
Buttons & Cards:  rounded-lg  (0.5rem / 8px)
Inputs & Small:   rounded-md  (0.375rem / 6px)
Circles & Badges: rounded-full (9999px)
```

**Rule:** Subtle curves only. Modern and minimal, not playful.

### Border Width & Color

```
Thin borders:      border-1 (1px)
Button borders:    border-2 (2px)
Card borders:      border-1, neutral-200
Focus indicator:   border-2, brand-primary
Dividers:          border-1, neutral-200
```

## Shadows

Soft, minimal shadows only:

```
Subtle (cards):      0 1px 2px rgba(0, 0, 0, 0.04)
Medium (hover):      0 4px 6px rgba(0, 0, 0, 0.08)
Elevated (floating): 0 10px 15px rgba(0, 0, 0, 0.08)
Large (modals future) 0 20px 25px rgba(0, 0, 0, 0.08)
```

**Rules:**

- No dark, high-contrast shadows
- Shadows increase subtly on hover
- Shadows suggest depth, not drama
- Maximum opacity: 8%

## Button Styles

### Primary Button

```
Background: Brand Primary (#1b6b7b)
Color: White
Padding: py-3 px-6 (medium) or py-4 px-8 (large)
Border: None
Hover: Brand Primary Light (#2a8a9e)
Active: Brand Primary Dark (#0f4a57)
Disabled: Opacity 50%
```

### Secondary Button

```
Background: Transparent
Border: 2px solid Brand Secondary (#d87e52)
Color: Brand Secondary
Padding: py-3 px-6
Hover: Background becomes Brand Secondary, text white
```

### Outline Button

```
Background: Transparent
Border: 2px solid Neutral 300
Color: Neutral 900
Hover: Background Neutral 50, Border Neutral 400
```

### Ghost Button

```
Background: Transparent
Border: None
Color: Neutral 700
Hover: Background Neutral 100
```

### Button Sizing

```
Small (sm):  px-4 py-2, text-sm
Medium (md): px-6 py-3, text-base (default)
Large (lg):  px-8 py-4, text-lg
```

## Card Styles

### Standard Card

```
Background: White
Border: 1px solid Neutral 200
Padding: p-6
Border radius: rounded-lg
Box shadow: shadow-sm
Hover: box-shadow increases to shadow-md
```

### Elevated Card

```
Background: White
Border: None (transparent)
Box shadow: shadow-lg
Border radius: rounded-lg
Padding: p-6
Hover: box-shadow increases to shadow-xl
```

## Forms

### Input Styling

```
Background: White
Border: 1px solid Neutral 300
Border radius: rounded-md (slight curve)
Padding: py-3 px-4
Text color: Neutral 900
Placeholder: Neutral 400, italic
Focus: Border Brand Primary (2px), outline none
```

### Label Styling

```
Font size: text-sm
Font weight: font-medium
Color: Neutral 900
Margin bottom: mb-2
```

### Textarea

```
Same as input, but:
Rows: 6 by default
Resize: vertical only
font-family: sans-serif (not monospace)
```

## Layout Patterns

### Hero Section

- Full-width background with generous padding
- Two-column layout on desktop (content + accent image)
- Mobile-first: Stack vertically
- Large heading (h1): 48px+
- Subtitle in brand primary, small caps
- Description paragraph, max-width 65ch
- Two CTAs: Primary on left, secondary on right (or stack mobile)

### Feature/Service Grid

- Section header: h2 centered, with description
- Grid layout: 1 column mobile, 2 columns tablet, 3 columns desktop
- Card-based items with icon, title, description
- Cards hover with shadow increase
- Consistent spacing between items (gap-8)

### Trust Section

- Stats displayed as large numbers + labels
- 2-4 stat blocks depending on relevance
- Optional testimonial block below
- Center-aligned typography

### Call-to-Action Section

- Full-width colored background (brand primary or dark)
- White or light text
- Heading + optional description
- Primary CTA button
- Optional secondary CTA as outline button
- Generous padding and breathing room

### Contact Form Section

- Light background section
- Centered content, max-width 28rem (448px)
- Form fields stack vertically
- Full-width inputs
- Primary button full-width on mobile, auto on desktop

## Responsive Design

### Breakpoints (Tailwind)

```
Mobile:   0px  (default)
sm:       640px
md:       768px
lg:       1024px
xl:       1280px
2xl:      1536px
```

### Mobile-First Rules

- Design for mobile first, enhance for larger screens
- Touch targets minimum 44px × 44px
- Horizontal padding: min 16px (px-4) at all sizes
- Typography adjusts upward: base on mobile, lg on desktop
- Grids stack on mobile, expand on tablet/desktop
- Forms are full-width on mobile, contained on desktop

### Common Responsive Patterns

```tsx
// Hero grid
<div className="grid gap-12 lg:grid-cols-2">

// Services grid
<div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

// Text with images
<div className="grid md:grid-cols-2 gap-8">

// Navigation
<nav className="hidden md:flex"> {/* desktop only */}

// Padding
<section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
```

## Accessibility

### Color Contrast

- Minimum WCAG AA: 4.5:1 for body text
- Minimum WCAG AAA: 7:1 for headings (aim for this)
- Test all text + background combinations

### Focus States

```css
.focus-visible-ring {
  @apply focus-visible:outline-2 focus-visible:outline-offset-2 
    focus-visible:outline-brand-primary;
}
```

Apply to all interactive elements:

- Links
- Buttons
- Form inputs
- Navigation items

### Semantic HTML

- Use `<button>` for buttons, not `<div onclick>`
- Use `<a>` for navigation, not `<button>`
- Proper heading hierarchy: h1 > h2 > h3, no skipping
- Form inputs have associated `<label>` tags
- Images have descriptive `alt` text

### Motion

- Prefer `duration-200` transitions for interactive states
- Animations are smooth, not jarring
- Respect `prefers-reduced-motion` (can be added later)

## Visual Examples

### Common Component Combinations

**Hero with full-width background:**

```tsx
<section className="bg-neutral-50 py-32">
  <Container>{/* Hero content */}</Container>
</section>
```

**Feature cards grid:**

```tsx
<div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
  {features.map((feature) => (
    <Card key={feature.title} hoverable>
      <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
      <p className="text-neutral-600">{feature.description}</p>
    </Card>
  ))}
</div>
```

**Dark section with white text:**

```tsx
<Section variant="dark">
  <h2 className="text-white">Heading</h2>
  <p className="text-neutral-300">Description</p>
  <Button variant="primary">
    {" "}
    {/* Primary is readable on dark */}
    Action
  </Button>
</Section>
```

## Design Tokens Reference

All tokens are defined in `tailwind.config.js` and can be used directly:

```tsx
// Colors
className = "text-brand-primary bg-neutral-50";

// Spacing
className = "p-6 py-16 gap-8 mb-4";

// Typography
className = "text-3xl font-bold leading-tight";

// Rounded
className = "rounded-lg";

// Shadows
className = "shadow-md hover:shadow-lg";
```

**Never** use fixed colors or spacing outside the design system. Always refer back to `tailwind.config.js` for the current values.
