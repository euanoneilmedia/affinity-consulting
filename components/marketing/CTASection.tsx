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
    <Section variant="light" size="sm">
      <Container size="lg">
        <DarkCard
          variant="default"
          className="border-white/20 bg-gradient-to-br from-brand-primary-dark via-brand-primary to-brand-primary-light p-8 text-center shadow-xl sm:p-12"
        >
          {eyebrow && (
            <div className="mb-4">
              <Eyebrow variant="onDark">{eyebrow}</Eyebrow>
            </div>
          )}
          <h2 className="mb-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            {title}
          </h2>
          {description && (
            <p className="mx-auto mb-8 max-w-2xl text-base leading-8 text-white/90 sm:text-lg">
              {description}
            </p>
          )}
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
            <Button
              variant="primary"
              size="md"
              href={primaryCta.href}
              className="!bg-white !text-brand-primary hover:!bg-white/90 hover:!text-brand-primary-dark active:!bg-white/80"
            >
              {primaryCta.label}
            </Button>
            {secondaryCta && (
              <Button
                variant="secondary"
                size="md"
                href={secondaryCta.href}
                className="!border-white !text-white hover:!bg-white/10 hover:!text-white"
              >
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
