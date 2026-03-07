import { Container, Section } from "@/components/layout";
import { Eyebrow, MarketingCard } from "@/components/ui";

interface TrustItem {
  label: string;
  value: string;
  description?: string;
}

interface TrustSectionProps {
  eyebrow?: string;
  title: string;
  description?: string;
  items: TrustItem[];
  trustedBy?: string[];
}

/**
 * Trust and credibility section
 * Displays social proof and stats with teal background
 */
export function TrustSection({ eyebrow, title, description, items, trustedBy }: TrustSectionProps) {
  return (
    <Section variant="white" id="trust" size="md">
      <Container size="xl">
        <div className="mb-14 max-w-3xl">
          {eyebrow && (
            <div className="mb-3">
              <Eyebrow>{eyebrow}</Eyebrow>
            </div>
          )}
          <h2 className="mb-5 text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl">
            {title}
          </h2>
          {description && (
            <p className="max-w-2xl text-base leading-8 text-text-secondary sm:text-lg">
              {description}
            </p>
          )}
        </div>

        {trustedBy && trustedBy.length > 0 && (
          <div className="mb-12 border-y border-neutral-800 py-6">
            <div className="mb-4">
              <Eyebrow className="!bg-background-card">Trusted by</Eyebrow>
            </div>
            <div className="flex flex-wrap items-center gap-x-8 gap-y-3 text-sm font-semibold text-text-secondary">
              {trustedBy.map((name) => (
                <span key={name}>{name}</span>
              ))}
            </div>
          </div>
        )}

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, index) => (
            <MarketingCard
              key={index}
              variant="stat"
              valueText={item.value}
              title={item.label}
              description={item.description}
              numberTone="teal"
              className="min-h-[220px] border-neutral-700"
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}
