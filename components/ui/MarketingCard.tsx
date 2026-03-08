import { cn } from "@/lib/cn";

import { ReactNode } from "react";

type MarketingCardVariant = "service" | "capability" | "stat";
type NumberTone = "teal" | "muted" | "white";
type NumberStyle = "text" | "circle";
type ContentAlign = "top" | "bottom";

interface MarketingCardProps {
  variant?: MarketingCardVariant;
  icon?: ReactNode;
  indexLabel?: string;
  badgeLabel?: string;
  title: string;
  description?: string;
  valueText?: string;
  footerText?: string;
  showFooterDivider?: boolean;
  numberTone?: NumberTone;
  numberStyle?: NumberStyle;
  contentAlign?: ContentAlign;
  hover?: boolean;
  hoverStyle?: "default" | "boldTeal";
  className?: string;
}

/**
 * Reusable marketing card used across services, capabilities, and trust stats.
 */
export function MarketingCard({
  variant = "service",
  icon,
  indexLabel,
  badgeLabel,
  title,
  description,
  valueText,
  footerText,
  showFooterDivider,
  numberTone = "muted",
  numberStyle = variant === "capability" ? "circle" : "text",
  contentAlign = "bottom",
  hover = true,
  hoverStyle = "default",
  className,
}: MarketingCardProps) {
  const toneClasses = {
    teal: "text-brand-primary-light",
    muted: "text-text-muted",
    white: "text-text-primary",
  };

  const shouldShowFooterDivider =
    showFooterDivider !== undefined ? showFooterDivider : Boolean(footerText);

  const isBoldTealService = variant === "service" && hoverStyle === "boldTeal";

  return (
    <article
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-card border border-neutral-200 bg-white p-6 shadow-card transition-all duration-200 md:p-8",
        hover && "hover:-translate-y-1 hover:shadow-lg",
        isBoldTealService && "hover:border-brand-primary/40",
        className,
      )}
    >
      {variant === "service" && (
        <div
          className={cn(
            "pointer-events-none absolute inset-0 z-0 rounded-card transition-opacity duration-300",
            isBoldTealService
              ? "bg-gradient-to-br from-brand-primary-dark via-brand-primary to-brand-primary-light opacity-0 group-hover:opacity-100"
              : "opacity-0",
          )}
        />
      )}

      {variant === "stat" ? (
        <>
          {valueText && (
            <p
              className={cn(
                "mb-2 text-4xl font-semibold tracking-tight sm:text-5xl",
                toneClasses[numberTone],
              )}
            >
              {valueText}
            </p>
          )}
          <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide text-text-primary">
            {title}
          </h3>
          {description && <p className="text-sm leading-7 text-text-muted">{description}</p>}
        </>
      ) : (
        <>
          {(indexLabel || badgeLabel || icon) && (
            <div className="relative z-10 flex items-center justify-between">
              {icon || indexLabel ? (
                numberStyle === "circle" ? (
                  <span
                    className={cn(
                      "inline-flex h-12 w-12 items-center justify-center rounded-full bg-brand-primary",
                      icon ? "text-white" : toneClasses[numberTone],
                    )}
                  >
                    {icon || indexLabel}
                  </span>
                ) : (
                  <p
                    className={cn(
                      "text-3xl font-semibold tracking-tight transition-colors duration-300",
                      toneClasses[numberTone],
                      isBoldTealService && "group-hover:text-white",
                    )}
                  >
                    {indexLabel}
                  </p>
                )
              ) : (
                <span />
              )}

              {badgeLabel && (
                <span
                  className={cn(
                    "inline-flex items-center rounded-full border border-neutral-300 bg-neutral-50 px-4 py-1 text-sm font-medium text-text-secondary transition-colors duration-300",
                    isBoldTealService &&
                      "group-hover:border-white/40 group-hover:bg-white/15 group-hover:text-white",
                  )}
                >
                  {badgeLabel}
                </span>
              )}
            </div>
          )}

          <div
            className={cn(
              "relative z-10",
              variant === "service" && contentAlign === "bottom" && "mt-auto pt-16",
              (variant !== "service" || contentAlign === "top") && "mt-6",
            )}
          >
            <h3
              className={cn(
                "mb-3 font-semibold tracking-tight text-text-primary transition-colors duration-300",
                variant === "service" ? "text-3xl" : "text-2xl",
                isBoldTealService && "group-hover:text-white",
              )}
            >
              {title}
            </h3>
            {description && (
              <p
                className={cn(
                  "text-base leading-8 text-text-secondary transition-colors duration-300",
                  isBoldTealService && "group-hover:text-neutral-100",
                )}
              >
                {description}
              </p>
            )}
          </div>

          {footerText && (
            <div
              className={cn(
                "relative z-10 mt-6",
                shouldShowFooterDivider && "border-t border-neutral-200 pt-5",
                isBoldTealService && shouldShowFooterDivider && "group-hover:border-white/25",
              )}
            >
              <p
                className={cn(
                  "text-sm leading-7 text-text-muted transition-colors duration-300",
                  isBoldTealService && "group-hover:text-neutral-100",
                )}
              >
                {footerText}
              </p>
            </div>
          )}
        </>
      )}
    </article>
  );
}
