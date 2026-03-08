import { createPageMetadata } from "@/lib/metadata";
import { Container, Section } from "@/components/layout";
import { DarkCard, Eyebrow } from "@/components/ui";
import {
  HeroSection,
  TrustedBySection,
  CoreCapabilitiesSection,
  ServicesSection,
  TrustSection,
  CtaSection,
  ContactSection,
} from "@/components/marketing";

export const metadata = createPageMetadata(
  "Digital Health and Transformation Consultancy",
  "Affinity Consulting helps health and care organisations redesign services, deliver digital care models, and implement transformation with confidence.",
);

const services = [
  {
    title: "Service Redesign",
    description:
      "Redesign pathways and operating models around user needs, measurable outcomes, and implementation feasibility.",
    outcome: "Clearer service models and reduced delivery risk",
    actionLabel: "Discover",
  },
  {
    title: "Digital Care Models",
    description:
      "Shape pragmatic digital-enabled care models that improve access, quality, and flow across care settings.",
    outcome: "Improved access and better experience across channels",
    actionLabel: "Review",
  },
  {
    title: "Strategic Alignment",
    description:
      "Align clinical, operational, digital, and leadership teams around one clear transformation direction.",
    outcome: "Shared direction and faster decision-making",
    actionLabel: "Align",
  },
  {
    title: "Programme Delivery",
    description:
      "Translate strategy into delivery through robust governance, milestone planning, and implementation support.",
    outcome: "Programmes that progress with confidence",
    actionLabel: "Plan",
  },
  {
    title: "Human-Centred Research",
    description:
      "Bring staff, service users, and communities into design decisions through practical research and testing.",
    outcome: "Solutions grounded in real-world needs",
    actionLabel: "Research",
  },
  {
    title: "Capability Enablement",
    description:
      "Build internal capability so organisations can sustain transformation long after delivery support ends.",
    outcome: "Stronger internal ownership and long-term sustainability",
    actionLabel: "Enable",
  },
];

const trustItems = [
  {
    value: "50+",
    label: "Programmes Delivered",
    description: "Across NHS, ICS, and partner organisations",
  },
  {
    value: "15+",
    label: "Years in Sector",
    description: "Dedicated to health and care transformation",
  },
  {
    value: "8",
    label: "Core Service Areas",
    description: "From research and design to implementation",
  },
  {
    value: "100%",
    label: "Sector Focused",
    description: "Digital health and service transformation",
  },
];

const coreCapabilities = [
  {
    title: "Human-Centred Research",
    description:
      "Understand staff and service user needs before committing to service design and delivery decisions.",
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
        <circle cx="8" cy="8" r="2" />
        <circle cx="16" cy="8" r="2" />
        <path d="M8 10c-2 0-4 1-4 3v2h8v-2c0-2-2-3-4-3z" />
        <path d="M16 10c-2 0-4 1-4 3v2h8v-2c0-2-2-3-4-3z" />
        <circle cx="12" cy="20" r="1" />
        <path d="M11 18c0 0-2 1-2 2s1 2 1 2s1 0 1 0 0-1 1-2 0-2 0-2" />
      </svg>
    ),
  },
  {
    title: "Digital Care Model Design",
    description:
      "Shape practical digital-enabled care pathways that improve access, quality, and system flow.",
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2c-5.5 0-10 4.5-10 10s4.5 10 10 10 10-4.5 10-10-4.5-10-10-10zm0 18c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8z" />
        <path d="M12 6c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-2.7-6-6-6zm0 10c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4z" />
        <path d="M13 8h-2v4h4v-2h-2z" />
      </svg>
    ),
  },
  {
    title: "Programme Delivery Leadership",
    description:
      "Translate strategy into governed implementation plans, milestones, and measurable outcomes.",
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M3 13h2v8H3zm4-8h2v16H7zm4-2h2v18h-2zm4 4h2v14h-2zm4-4h2v18h-2z" />
      </svg>
    ),
  },
  {
    title: "Implementation in Complex Systems",
    description:
      "Navigate real-world constraints across organisations to deliver sustainable transformation.",
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
        <circle cx="6" cy="6" r="2" />
        <circle cx="18" cy="6" r="2" />
        <circle cx="6" cy="18" r="2" />
        <circle cx="18" cy="18" r="2" />
        <path
          d="M6 8v4M8 6h4M16 8v4M18 10h-4M8 16v2M6 18h4M16 16v2M18 18h-4"
          stroke="currentColor"
          strokeWidth="1"
          fill="none"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
];

export default function Home() {
  return (
    <>
      <HeroSection
        title={
          <>
            Designing and{" "}
            <span className="bg-gradient-to-r from-brand-primary to-brand-primary-light bg-clip-text text-transparent">
              delivering better
            </span>{" "}
            health and care.
          </>
        }
        eyebrow="Digital Health and Transformation"
        description="We help health and care organisations move from ambition to delivery through insight-led strategy, practical service design, and implementation support."
        cta={{
          label: "Start a conversation",
          href: "#contact",
        }}
        secondaryCta={{
          label: "Explore services",
          href: "#services",
        }}
      />

      <TrustedBySection />

      <CoreCapabilitiesSection
        eyebrow="Core Capabilities"
        title="From insight to implementation in four core disciplines"
        description="Our teams combine research, design, and delivery expertise to help health and care organisations move with confidence."
        capabilities={coreCapabilities}
      />

      <Section id="about" variant="white" size="sm">
        <Container size="xl">
          <div className="grid gap-10 rounded-card-lg border border-neutral-200 bg-white p-8 shadow-lg lg:grid-cols-[1fr_1fr] lg:gap-14 lg:p-10">
            <div>
              <div className="mb-3">
                <Eyebrow>Who We Are</Eyebrow>
              </div>
              <h2 className="text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl">
                A specialist consultancy focused on digitally enabled, reimagined care.
              </h2>
            </div>
            <div className="space-y-5 text-base leading-8 text-text-secondary">
              <p>
                We bring together service design, user research, and programme delivery to help
                organisations move from strategy into implementation.
              </p>
              <p>
                Our work is grounded in real health and care contexts. We understand operational
                constraints and design practical solutions that can be delivered and sustained.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <ServicesSection
        eyebrow="What We Do"
        title="Comprehensive transformation support"
        description="From discovery through implementation, we work with your teams to design and deliver measurable service improvement."
        services={services}
        columns={3}
      />

      <TrustSection
        eyebrow="Why Affinity"
        title="Insight generated. Change delivered."
        description="Our approach combines research, co-design, and disciplined delivery to create transformation that lasts."
        items={trustItems}
      />

      <Section id="approach" variant="dark" size="sm">
        <Container size="xl">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
            <DarkCard className="border-neutral-600">
              <div className="mb-3">
                <Eyebrow variant="dark">Our Approach</Eyebrow>
              </div>
              <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Structured, collaborative, and delivery-focused.
              </h2>
              <p className="mt-5 max-w-md text-base leading-8 text-neutral-200">
                We combine clinical, operational, digital, and leadership perspectives to co-create
                solutions that are realistic and resilient.
              </p>
            </DarkCard>
            <ol className="space-y-5">
              {[
                {
                  title: "Human-Centred Research",
                  body: "Understand needs, constraints, and opportunities with teams and communities before designing solutions.",
                },
                {
                  title: "Collaborative Service Design",
                  body: "Co-design future services and care models with the people responsible for delivering them.",
                },
                {
                  title: "Programme Implementation",
                  body: "Translate strategy into clear delivery plans, governance, and measurable implementation outcomes.",
                },
              ].map((step, index) => (
                <li key={step.title}>
                  <DarkCard hover className="border-neutral-600">
                    <div className="mb-2">
                      <Eyebrow variant="dark" className="!bg-neutral-700 !text-neutral-300">
                        {String(index + 1).padStart(2, "0")}
                      </Eyebrow>
                    </div>
                    <h3 className="mb-2 text-xl font-semibold tracking-tight text-white">
                      {step.title}
                    </h3>
                    <p className="text-sm leading-7 text-neutral-200 sm:text-base">{step.body}</p>
                  </DarkCard>
                </li>
              ))}
            </ol>
          </div>
        </Container>
      </Section>

      <CtaSection
        eyebrow="Let's Talk"
        title="Ready to transform your services?"
        description="If you are shaping strategy, redesigning services, or delivering major change, we can help you move with clarity and confidence."
        primaryCta={{
          label: "Send a message",
          href: "#contact",
        }}
        secondaryCta={{
          label: "View approach",
          href: "#approach",
        }}
      />

      <ContactSection />
    </>
  );
}
