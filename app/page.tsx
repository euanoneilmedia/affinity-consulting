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
  },
  {
    title: "Digital Care Model Design",
    description:
      "Shape practical digital-enabled care pathways that improve access, quality, and system flow.",
  },
  {
    title: "Programme Delivery Leadership",
    description:
      "Translate strategy into governed implementation plans, milestones, and measurable outcomes.",
  },
  {
    title: "Implementation in Complex Systems",
    description:
      "Navigate real-world constraints across organisations to deliver sustainable transformation.",
  },
];

export default function Home() {
  return (
    <>
      <HeroSection
        title={
          <>
            Designing and{" "}
            <span className="bg-gradient-to-r from-brand-primary-light to-brand-primary bg-clip-text text-transparent">
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
          <DarkCard className="grid gap-10 border-neutral-700 lg:grid-cols-[1fr_1fr] lg:gap-14">
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
          </DarkCard>
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

      <Section id="approach" variant="dark" size="sm" className="text-white">
        <Container size="xl">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
            <DarkCard className="border-neutral-700">
              <div className="mb-3">
                <Eyebrow variant="accent">Our Approach</Eyebrow>
              </div>
              <h2 className="text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl">
                Structured, collaborative, and delivery-focused.
              </h2>
              <p className="mt-5 max-w-md text-base leading-8 text-text-secondary">
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
                  <DarkCard hover className="border-neutral-700">
                    <div className="mb-2">
                      <Eyebrow className="!bg-background-primary !text-text-muted">
                        {String(index + 1).padStart(2, "0")}
                      </Eyebrow>
                    </div>
                    <h3 className="mb-2 text-xl font-semibold tracking-tight text-text-primary">
                      {step.title}
                    </h3>
                    <p className="text-sm leading-7 text-text-secondary sm:text-base">
                      {step.body}
                    </p>
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
