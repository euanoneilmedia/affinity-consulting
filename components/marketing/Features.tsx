import { Container, Section } from "@/components/layout";
import { Eyebrow, MarketingCard } from "@/components/ui";

interface ServiceItem {
  title: string;
  description: string;
  outcome?: string;
  actionLabel?: string;
}

interface ServicesSectionProps {
  eyebrow?: string;
  title: string;
  description?: string;
  services: ServiceItem[];
  columns?: 2 | 3 | 4;
}

/**
 * ServicesSection renders core capabilities in a clear, conversion-friendly grid.
 */
export function ServicesSection({
  eyebrow,
  title,
  description,
  services,
  columns = 3,
}: ServicesSectionProps) {
  const gridClasses = {
    2: "sm:grid-cols-2",
    3: "sm:grid-cols-2 lg:grid-cols-3",
    4: "sm:grid-cols-2 lg:grid-cols-4",
  };

  return (
    <Section variant="light" id="services" size="md">
      <Container size="xl">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          {eyebrow && (
            <div className="mb-3">
              <Eyebrow>{eyebrow}</Eyebrow>
            </div>
          )}
          <h2 className="mb-5 text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl">
            {title}
          </h2>
          {description && (
            <p className="mx-auto max-w-2xl text-base leading-8 text-text-secondary sm:text-lg">
              {description}
            </p>
          )}
        </div>

        <div className={`grid gap-6 ${gridClasses[columns]}`}>
          {services.map((service, index) => (
            <MarketingCard
              key={service.title}
              variant="service"
              indexLabel={String(index + 1).padStart(2, "0")}
              badgeLabel={service.actionLabel || "Explore"}
              title={service.title}
              description={service.description}
              footerText={service.outcome}
              numberTone="muted"
              hoverStyle="boldTeal"
              className="min-h-[320px]"
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}

export function Features({
  title,
  description,
  features,
  columns = 3,
}: {
  title: string;
  description?: string;
  features: Array<{ title: string; description: string; actionLabel?: string }>;
  columns?: 2 | 3 | 4;
}) {
  return (
    <ServicesSection
      title={title}
      description={description}
      services={features.map((item) => ({
        title: item.title,
        description: item.description,
        actionLabel: item.actionLabel,
      }))}
      columns={columns}
    />
  );
}
