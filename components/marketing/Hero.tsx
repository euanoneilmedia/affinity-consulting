import { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Container } from "@/components/layout";
import { Eyebrow } from "@/components/ui";
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
 * HeroSection is the lead conversion block (dark mode).
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
    <section className={cn("relative overflow-hidden pt-24 lg:pt-32", className)}>
      <Container size="xl">
        <div className="rounded-card-lg border border-neutral-700/70 bg-background-card/70 p-6 shadow-card backdrop-blur-sm sm:p-8 lg:p-10">
          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
            <div className="max-w-2xl">
              {eyebrow && (
                <div className="mb-5">
                  <Eyebrow>{eyebrow}</Eyebrow>
                </div>
              )}
              <h1 className="mb-6 text-4xl font-semibold tracking-tight text-text-primary sm:text-5xl lg:text-6xl">
                {title}
              </h1>
              {description && (
                <p className="mb-9 max-w-xl text-lg leading-8 text-text-secondary">{description}</p>
              )}

              {(cta || secondaryCta) && (
                <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center">
                  {cta && (
                    <a
                      href={cta.href}
                      className="inline-flex items-center justify-center rounded-card bg-brand-primary px-8 py-3.5 text-base font-semibold text-white shadow-card transition-all duration-200 hover:bg-brand-primary-light hover:shadow-card-hover"
                    >
                      {cta.label}
                    </a>
                  )}
                  {secondaryCta && (
                    <a
                      href={secondaryCta.href}
                      className="inline-flex items-center justify-center rounded-card border-2 border-neutral-600 px-8 py-3.5 text-base font-semibold text-text-primary transition-all duration-200 hover:border-neutral-500 hover:bg-background-card"
                    >
                      {secondaryCta.label}
                    </a>
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
