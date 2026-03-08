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
        "inline-block rounded-md border border-brand-primary/20 bg-white/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] shadow-[0_0_14px_rgba(10,122,140,0.14)] backdrop-blur-sm transition-[box-shadow,border-color,background-color,color] duration-200 hover:shadow-[0_0_22px_rgba(10,122,140,0.30)]",
        {
          "border-brand-primary/30 bg-white/10 text-brand-primary-light shadow-[0_0_16px_rgba(10,122,140,0.18)] hover:border-brand-primary/50 hover:bg-white/15 hover:shadow-[0_0_24px_rgba(10,122,140,0.34)]":
            variant === "default",
          "border-brand-primary/25 bg-white/10 text-white shadow-[0_0_14px_rgba(10,122,140,0.12)] hover:border-brand-primary/45 hover:bg-white/15 hover:shadow-[0_0_22px_rgba(10,122,140,0.30)]":
            variant === "light",
          "border-brand-primary/25 bg-neutral-900/20 text-neutral-300 shadow-[0_0_12px_rgba(10,122,140,0.12)] hover:border-brand-primary/45 hover:bg-neutral-900/30 hover:shadow-[0_0_20px_rgba(10,122,140,0.28)]":
            variant === "dark",
          "border-brand-secondary/30 bg-brand-secondary/10 text-brand-secondary shadow-[0_0_14px_rgba(216,126,82,0.12)] hover:border-brand-secondary/50 hover:bg-brand-secondary/15 hover:shadow-[0_0_22px_rgba(216,126,82,0.28)]":
            variant === "accent",
        },
        className,
      )}
    >
      {children}
    </span>
  );
}
