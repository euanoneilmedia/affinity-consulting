import { cn } from "@/lib/cn";

interface EyebrowProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "light" | "dark" | "accent";
}

/**
 * Eyebrow text component with subtle badge styling.
 * Used for section labels and category tags.
 */
export function Eyebrow({ children, className, variant = "default" }: EyebrowProps) {
  return (
    <span
      className={cn(
        "inline-block rounded-md border px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] transition-colors duration-200",
        {
          "border-brand-primary/30 bg-brand-primary/5 text-brand-primary hover:bg-brand-primary/10":
            variant === "default",
          "border-neutral-300 bg-neutral-50 text-text-secondary hover:bg-neutral-100":
            variant === "light",
          "border-neutral-600 bg-neutral-700 text-neutral-200 hover:bg-neutral-600":
            variant === "dark",
          "border-brand-secondary/30 bg-brand-secondary/5 text-brand-secondary hover:bg-brand-secondary/10":
            variant === "accent",
        },
        className,
      )}
    >
      {children}
    </span>
  );
}
