import { ReactNode } from "react";
import { Container, Section } from "@/components/layout";
import { Eyebrow, MarketingCard } from "@/components/ui";

interface CapabilityItem {
  title: string;
  description: string;
  icon: ReactNode;
}

interface CoreCapabilitiesSectionProps {
  eyebrow?: string;
  title: string;
  description?: string;
  capabilities: CapabilityItem[];
}

/**
 * Dedicated section for core capabilities in a 4-card row layout.
 */
export function CoreCapabilitiesSection({
  eyebrow = "Core Capabilities",
  title,
  description,
  capabilities,
}: CoreCapabilitiesSectionProps) {
  return (
    <Section variant="dark" size="sm" id="capabilities">
      <Container size="xl">
        <div className="mb-10 max-w-3xl">
          <div className="mb-4">
            <Eyebrow>{eyebrow}</Eyebrow>
          </div>
          <h2 className="mb-4 text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl">
            {title}
          </h2>
          {description && (
            <p className="text-base leading-8 text-text-secondary sm:text-lg">{description}</p>
          )}
        </div>

        <div className="grid gap-6 grid-cols-2">
          {capabilities.slice(0, 4).map((item) => (
            <MarketingCard
              key={item.title}
              variant="service"
              icon={item.icon}
              numberStyle="circle"
              title={item.title}
              description={item.description}
              contentAlign="top"
              className="h-full min-h-[320px] border-neutral-700/80 bg-background-card/80"
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}
