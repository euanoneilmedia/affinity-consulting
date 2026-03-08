import { cn } from "@/lib/cn";

type MarketingCardVariant = "service" | "capability" | "stat";
type NumberTone = "teal" | "muted" | "white";
type NumberStyle = "text" | "circle";
type ContentAlign = "top" | "bottom";

interface MarketingCardProps {
  variant?: MarketingCardVariant;
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
  className?: string;
}

/**
 * Reusable marketing card used across services, capabilities, and trust stats.
 */
export function MarketingCard({
  variant = "service",
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
  className,
}: MarketingCardProps) {
  const toneClasses = {
    teal: "text-brand-primary-light",
    muted: "text-text-muted",
    white: "text-text-primary",
  };

  const shouldShowFooterDivider =
    showFooterDivider !== undefined ? showFooterDivider : Boolean(footerText);

  return (
    <article
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-card border border-neutral-700/90 bg-background-card p-6 shadow-card transition-all duration-200 md:p-8",
        hover && "hover:-translate-y-1 hover:shadow-card-hover",
        className,
      )}
    >
      {variant === "service" && (
        <div className="pointer-events-none absolute inset-0 z-0 rounded-card bg-gradient-to-br from-brand-primary/10 via-transparent to-brand-secondary/10 opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
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
          {(indexLabel || badgeLabel) && (
            <div className="relative z-10 flex items-center justify-between">
              {indexLabel ? (
                numberStyle === "circle" ? (
                  <span
                    className={cn(
                      "inline-flex h-12 w-12 items-center justify-center rounded-full bg-brand-primary/20 text-sm font-semibold shadow-[0_0_18px_rgba(10,122,140,0.25)]",
                      toneClasses[numberTone],
                    )}
                  >
                    {indexLabel}
                  </span>
                ) : (
                  <p
                    className={cn("text-3xl font-semibold tracking-tight", toneClasses[numberTone])}
                  >
                    {indexLabel}
                  </p>
                )
              ) : (
                <span />
              )}

              {badgeLabel && (
                <span className="inline-flex items-center rounded-full border border-neutral-600 px-4 py-1 text-sm font-medium text-text-secondary">
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
                "mb-3 font-semibold tracking-tight text-text-primary",
                variant === "service" ? "text-3xl" : "text-2xl",
              )}
            >
              {title}
            </h3>
            {description && (
              <p className="text-base leading-8 text-text-secondary">{description}</p>
            )}
          </div>

          {footerText && (
            <div
              className={cn(
                "relative z-10 mt-6",
                shouldShowFooterDivider && "border-t border-neutral-700 pt-5",
              )}
            >
              <p className="text-sm leading-7 text-text-muted">{footerText}</p>
            </div>
          )}
        </>
      )}
    </article>
  );
}
