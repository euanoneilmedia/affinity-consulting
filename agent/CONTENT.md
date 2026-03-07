# CONTENT.md - Content Strategy & Copy Guidelines

## Brand Voice

Affinity Consulting's voice is:

- **Professional** - Authoritative expertise, not casual
- **Confident** - In solutions, not arrogant
- **Clear** - Jargon when needed, always explained
- **Human** - Real examples and tangible benefits
- **Forward-looking** - Transformation and improvement focus

### Tone Matrix

| Context          | Tone                           |
| ---------------- | ------------------------------ |
| Headings         | Bold, clear, benefit-driven    |
| Body copy        | Warm, expert, explanatory      |
| CTAs             | Action-oriented, clear benefit |
| Error messages   | Helpful, not blaming           |
| Success messages | Warm, affirming                |

### Examples

**Voice ✅:**

- "Reimagine your service delivery with human-centred design"
- "We help NHS trusts move from process improvement to transformation"
- "50+ organizations across health and social care trust us"

**Not-voice ❌:**

- "We are an amazing consulting firm that you should hire" (vague, self-focused)
- "Synergistic digital paradigm shift leveraging core competencies" (buzzwords)
- "Best consultants in the world" (unsubstantiated)
- "click here" (weak call-to-action)

## Homepage Structure & Copy

### Hero Section

**Purpose:** Immediately communicate what we do and value proposition

**Copy structure:**

1. **Headline** (h1) - Problem statement or transformation promise
2. **Subtitle** - Who we serve or what we specialize in
3. **Description** - 2-3 sentences on benefits
4. **CTAs** - Primary (start journey) + secondary (learn more)

**Current copy:**

```
Headline: "Designing and delivering better health and care."
Subtitle: "DIGITAL TRANSFORMATION CONSULTING"
Description: "We help health and care organizations design and deliver
improved services through digital transformation and human-centred reimagining."
CTA: "Let's work together" / "Explore our services"
```

**Guidelines:**

- Headline: 6-10 words, benefit-driven
- Subtitle: 2-4 words, lowercase preferred
- Description: 2 sentences max, short paragraphs
- **Avoid:** Superlatives, buzzwords, jargon not explained

### Services/Features Section

**Purpose:** Show expertise across multiple areas

**For each service:**

```
Icon + Title (3-5 words)
+ Description (1-2 sentences, concrete benefit)
```

**Example:**

```
🎯 Service Redesign
"Reimagine your health and care services with human-centred design
principles and digital-first thinking."
```

**Writing each service description:**

1. Start with action verb (Reimagine, Design, Align, Navigate)
2. Include specific domain (health, care, NHS)
3. End with method/approach
4. Keep to 15-20 words

### Trust/Credibility Section

**Purpose:** Build confidence with social proof

**Format:**

```
Large number (stat)
+ Label (what the number means)
+ Optional: Brief description
```

**Example:**

```
50+
Organizations Served
"Across NHS, social care, and private sector"
```

**Stat writing:**

- Use round, impressive numbers (50+ not 47)
- Label is concrete noun (not "of expertise")
- Description is brief 5-8 words max
- Testimonial quote: 2-3 sentences, specific example

### CTA Section

**Purpose:** Final conversion push with specific opportunity

**Components:**

1. **Heading** - Benefit statement, not generic
2. **Description** - Optional, 1 sentence max
3. **Primary CTA** - Clear action
4. **Secondary CTA** - Alternative path

**Example:**

```
"Ready to transform your services?"
"Let's discuss how we can help your organization."
[Primary CTA: "Send a message"]
[Secondary CTA: "Learn more"]
```

### Contact Section

**Purpose:** Easy way to get in touch

**Form fields:** Name, Email, Message
**Copy:** Brief intro explaining next steps

```
"Ready to transform your services?
Get in touch to discuss how we can help your organization."
```

## Content Guidelines

### Headings

**Rule:** Front-load keywords, be specific

```
✅ "Service Redesign for NHS Trusts"
✅ "Digital Care Models That Improve Outcomes"
✅ "How We Approach Transformation"

❌ "Our Services"
❌ "Learn More"
❌ "Good Stuff We Do"
```

**Heading hierarchy:**

- `h1`: One per page, problem or transformation promise
- `h2`: Section headings, describe section content
- `h3+`: Subsection headings, keep hierarchy

### Body Copy

**Paragraph length:** 2-4 sentences (40-80 words)

```
✅ "Service redesign isn't about technology first—it's about
understanding what your users actually need. We combine
human-centred research with digital enablement to reimagine
how care is delivered."

❌ "Our approach to service transformation involves a
comprehensive assessment of your current service delivery
mechanisms, stakeholder consultation frameworks, and the
identification of digital enablement opportunities to optimize
operational efficiency across your organization." (one 59-word sentence!)
```

**Formula for feature descriptions:**

1. **Action verb** - "Redesign", "Implement", "Navigate"
2. **What/who** - "your service", "your team", "organizational change"
3. **Benefit** - "improve outcomes", "reduce cost", "increase satisfaction"

```
Pattern: "[Verb] [What] [Benefit]"

✅ "Design patient-centred workflows that reduce wait times"
✅ "Implement digital models that increase staff satisfaction"
✅ "Navigate change with confidence through structured management"

❌ "We provide comprehensive consulting services"
❌ "Our team has expertise"
```

### Link Text

Links should be descriptive, not "click here":

```
✅ <a href="/services/redesign">Service redesign consulting</a>
✅ <a href="/about">Our approach to transformation</a>
✅ <a href="/contact">Get in touch</a>

❌ <a href="/services/redesign">click here</a>
❌ <a href="/about">read more</a>
❌ <a href="/contact">contact us</a>
```

### Form Labels & Placeholders

Clear, concise, present tense:

```
Labels:
✅ "Full name"
✅ "Email address"
✅ "How can we help?"

Placeholders:
✅ "John Smith"
✅ "you@example.com"
✅ "Tell us about your project..."
```

### Error & Validation Messages

Helpful, not blaming:

```
✅ "Please enter a valid email address"
✅ "This field is required"
✅ "Password must be at least 8 characters"

❌ "INVALID EMAIL ERROR"
❌ "Why didn't you fill this in?"
❌ "You messed up the password"
```

### Calls to Action

Specific, benefit-driven, action-oriented:

```
✅ "Get a consultation"
✅ "Explore our services"
✅ "Send us your brief"
✅ "Talk to a specialist"

❌ "Click here"
❌ "Submit"
❌ "Go"
❌ "Learn more" (too vague)
```

## Service/Capability Descriptions

When adding new services, use this template:

```
Title (3-5 words, clear)
"[Action verb] your [domain] [method/approach] for [benefit]"

Example:
Title: "Strategic Alignment"
Description: "Align your organization around transformational
change with clear vision, strategy, and implementation plans."
```

**Service description rules:**

1. Lead with action (Design, Implement, Align, Navigate, Build)
2. Include specific domain (health, care, organizations)
3. Mention approach or method (human-centred, digital, structured)
4. End with tangible benefit
5. Keep to 15-25 words

## Updating Content

### Homepage Copy

Located in `/app/page.tsx`:

```tsx
// Services data
const services = [
  {
    title: "Service Redesign",
    description: "Reimagine your...",
    icon: "🎯",
  },
  // ...
];

// Trust items
const trustItems = [
  {
    value: "50+",
    label: "Organizations Served",
    // ...
  },
];

// Testimonial
const testimonial = {
  quote: "...",
  author: "Name",
  role: "Title",
  organization: "Company",
};
```

**To update:** Edit these objects directly in `page.tsx`. No separate content file needed.

### Adding a New Service/Feature

1. Add object to `services` array in `page.tsx`:

```tsx
{
  title: 'New Service',
  description: '[Verb] [what] [benefit]',
  icon: '📊',
}
```

2. Follow copy guidelines above
3. Test at mobile breakpoint
4. Validate with `npm run build`

## Tone Examples by Section

### Hero Section

**Professional, aspirational:**

```
"Designing and delivering better health and care."
"We help health and care organizations design and deliver
improved services through digital transformation and
human-centred reimagining."
```

### Services

**Concrete, benefit-focused:**

```
"Service Redesign"
"Reimagine your health and care services with human-centred
design principles and digital-first thinking."

"Digital Care Models"
"Design and implement new digital-enabled care delivery models
that improve outcomes and reduce costs."
```

### Trust Section

**Credible, specific:**

```
"50+ Organizations Served"
"Across NHS, social care, and private sector"

Testimonial: "Affinity Consulting helped us reimagine our
service delivery model. Their human-centred approach and deep
sector knowledge made all the difference."
```

### CTA Section

**Warm, inviting:**

```
"Ready to transform your services?"
"Let's discuss how we can help your organization."
```

### Contact Form

**Clear, encouraging:**

```
Labels: "Full name", "Email address", "How can we help?"
Placeholder: "Tell us about your project..."
Button: "Send message"
Success: "Thank you! We'll be in touch soon."
```

## Future Content Pages

### About Page (`/about`)

Should answer:

- Who are we?
- What's our background?
- What makes us different?
- Who do we serve?

**Structure:**

```
Hero: "Our approach to transformation"

About section:
- Brief history/background
- Mission statement
- Core values

Team section:
- Team members with photos
- Bios

Approach section:
- 3-4 core beliefs or principles
- How we work with clients

CTA: Contact section
```

### Individual Service Pages (`/services/[slug]`)

**Template:**

```
Hero: [Service name] with description

Problem: What challenges clients face
Solution: How we approach it
Process: Our methodology
Results: Case study or example
CTA: Get started
```

### Blog/Insights (`/insights`)

**Posts should:**

- Target 1000-1200 words minimum
- Have a clear thesis
- Include 2-3 internal links to services
- Have a clear call-to-action at end

**Topics to consider:**

- "The Future of Digital Health" with link to services
- "How to Approach Service Transformation" with methodology
- "Lessons from 50+ Health Care Projects" with case study

## Copy Checklist

Before publishing any page:

- [ ] No jargon without explanation
- [ ] Headings are specific, benefit-driven
- [ ] Body copy is 2-4 sentences per paragraph
- [ ] All links are descriptive (not "click here")
- [ ] CTAs are specific and action-oriented
- [ ] Form labels are clear
- [ ] No superlatives ("best", "amazing", "revolutionary") without proof
- [ ] Voice is professional but human
- [ ] Numbers are round and impressive (50+ not 48)
- [ ] Benefit statement in headers (not feature)
- [ ] Typos and grammar checked
- [ ] Read aloud test (flows naturally?)

## Analytics & Measurement

Track these content metrics (add analytics later):

- **Bounce rate by page** - Is content engaging?
- **Time on page** - Is content valuable?
- **Click-through rate on CTAs** - Are CTAs compelling?
- **Form completion rate** - Is form friction low?

A/B test CTA copy, headlines, and form field labels once there's traffic.

## Content Maintenance Schedule

- **Monthly:** Verify no broken links, check for typos
- **Quarterly:** Update stats (50+ organizations served, etc.)
- **Yearly:** Refresh copy, remove outdated examples, add new case studies
