import { Container, Section } from "@/components/layout";
import { Button, DarkCard, Eyebrow } from "@/components/ui";

interface CTASectionProps {
  eyebrow?: string;
  title: string;
  description?: string;
  primaryCta: {
    label: string;
    href: string;
  };
  secondaryCta?: {
    label: string;
    href: string;
  };
}

/**
 * Call-to-action section
 * Prominent section to drive conversion
 */
export function CtaSection({
  eyebrow,
  title,
  description,
  primaryCta,
  secondaryCta,
}: CTASectionProps) {
  return (
    <Section variant="dark" size="sm">
      <Container size="lg">
        <DarkCard variant="default" className="border-neutral-600 p-8 text-center sm:p-12">
          {eyebrow && (
            <div className="mb-4">
              <Eyebrow variant="dark">{eyebrow}</Eyebrow>
            </div>
          )}
          <h2 className="mb-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            {title}
          </h2>
          {description && (
            <p className="mx-auto mb-8 max-w-2xl text-base leading-8 text-neutral-200 sm:text-lg">
              {description}
            </p>
          )}
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
            <Button variant="primary" size="md" href={primaryCta.href}>
              {primaryCta.label}
            </Button>
            {secondaryCta && (
              <Button variant="secondary" size="md" href={secondaryCta.href}>
                {secondaryCta.label}
              </Button>
            )}
          </div>
        </DarkCard>
      </Container>
    </Section>
  );
}

export function CTASection(props: CTASectionProps) {
  return <CtaSection {...props} />;
}
