import { cn } from "@/lib/cn";

interface EyebrowProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "light" | "dark" | "onDark" | "accent";
}

/**
 * Eyebrow text component with subtle badge styling.
 * Used for section labels and category tags.
 */
export function Eyebrow({ children, className, variant = "default" }: EyebrowProps) {
  const variantStyles = {
    default:
      "border-brand-primary/30 bg-brand-primary/5 text-brand-primary hover:bg-brand-primary/10",
    light: "border-neutral-300 bg-neutral-50 text-text-secondary hover:bg-neutral-100",
    dark: "border-neutral-600 bg-neutral-700 text-neutral-200 hover:bg-neutral-600",
    onDark: "border-white/25 bg-white/10 text-white hover:bg-white/15",
    accent:
      "border-brand-secondary/30 bg-brand-secondary/5 text-brand-secondary hover:bg-brand-secondary/10",
  };

  return (
    <span
      className={cn(
        "inline-block rounded-md border px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] transition-colors duration-200",
        variantStyles[variant],
        className,
      )}
    >
      {children}
    </span>
  );
}
