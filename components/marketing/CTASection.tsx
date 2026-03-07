import { Container, Section } from "@/components/layout";
import { DarkCard, Eyebrow } from "@/components/ui";

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
  variant?: "primary" | "dark";
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
  variant = "primary",
}: CTASectionProps) {
  const variantStyles = {
    primary: {
      textColor: "text-text-primary",
      secondaryBtn:
        "border-2 border-neutral-600 bg-transparent text-text-primary hover:border-neutral-500 hover:bg-background-elevated",
    },
    dark: {
      textColor: "text-text-primary",
      secondaryBtn:
        "border-2 border-neutral-600 bg-transparent text-text-primary hover:border-neutral-500 hover:bg-background-elevated",
    },
  };

  const styles = variantStyles[variant];

  return (
    <Section size="sm">
      <Container size="lg">
        <DarkCard variant="gradient" className="border border-neutral-700 p-8 text-center sm:p-12">
          {eyebrow && (
            <div className="mb-4">
              <Eyebrow className="!bg-background-card">{eyebrow}</Eyebrow>
            </div>
          )}
          <h2
            className={`mb-4 text-3xl font-semibold tracking-tight sm:text-4xl ${styles.textColor}`}
          >
            {title}
          </h2>
          {description && (
            <p
              className={`mx-auto mb-8 max-w-2xl text-base leading-8 opacity-90 sm:text-lg ${styles.textColor}`}
            >
              {description}
            </p>
          )}
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
            <a
              href={primaryCta.href}
              className="inline-flex items-center justify-center rounded-card bg-brand-primary px-6 py-3 text-sm font-medium text-white shadow-card transition-colors duration-200 hover:bg-brand-primary-light"
            >
              {primaryCta.label}
            </a>
            {secondaryCta && (
              <a
                href={secondaryCta.href}
                className={`inline-flex items-center justify-center rounded-card px-6 py-3 text-sm font-medium transition-colors duration-200 ${styles.secondaryBtn}`}
              >
                {secondaryCta.label}
              </a>
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
