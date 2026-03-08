import { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Container } from "@/components/layout";
import { Button, Eyebrow } from "@/components/ui";
import { HeroAnimation } from "./HeroAnimation";

interface HeroProps {
  title: ReactNode;
  eyebrow?: ReactNode;
  description?: string;
  cta?: {
    label: string;
    href: string;
  };
  secondaryCta?: {
    label: string;
    href: string;
  };
  className?: string;
}

/**
 * HeroSection is the lead conversion block (light theme with subtle depth).
 */
export function HeroSection({
  title,
  eyebrow,
  description,
  cta,
  secondaryCta,
  className,
}: HeroProps) {
  return (
    <section
      className={cn(
        "relative overflow-hidden bg-background-card pt-24 pb-8 lg:pt-32 lg:pb-12",
        className,
      )}
    >
      <Container size="xl">
        <div className="rounded-card-lg border border-neutral-200 bg-white p-6 shadow-lg sm:p-8 lg:p-10">
          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
            <div className="max-w-2xl">
              {eyebrow && (
                <div className="mb-5">
                  <Eyebrow>{eyebrow}</Eyebrow>
                </div>
              )}
              <h1 className="mb-6 text-4xl font-semibold tracking-tight text-text-primary sm:text-5xl">
                {title}
              </h1>
              {description && (
                <p className="mb-9 max-w-xl text-lg leading-8 text-text-secondary">{description}</p>
              )}

              {(cta || secondaryCta) && (
                <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center">
                  {cta && (
                    <Button variant="primary" size="lg" href={cta.href}>
                      {cta.label}
                    </Button>
                  )}
                  {secondaryCta && (
                    <Button
                      variant="secondary"
                      size="lg"
                      href={secondaryCta.href}
                      className="!border-brand-primary !text-brand-primary hover:!bg-brand-primary/10 hover:!text-brand-primary-dark"
                    >
                      {secondaryCta.label}
                    </Button>
                  )}
                </div>
              )}
            </div>

            <div className="relative ml-auto w-full max-w-lg">
              <HeroAnimation />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export function Hero(props: HeroProps) {
  return <HeroSection {...props} />;
}
