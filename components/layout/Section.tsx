import { ReactNode } from "react";
import { cn } from "@/lib/cn";

type SectionVariant = "light" | "white" | "dark";
type SectionSize = "sm" | "md" | "lg";

interface SectionProps {
  children: ReactNode;
  className?: string;
  variant?: SectionVariant;
  size?: SectionSize;
  id?: string;
}

/**
 * Section wrapper for major content blocks
 * Provides consistent spacing and background styling
 */
export function Section({ children, className, variant = "white", size = "md", id }: SectionProps) {
  const variants = {
    light: "bg-background-card",
    white: "bg-white",
    dark: "bg-background-accent text-white",
  };

  const sizes = {
    sm: "py-16 lg:py-20",
    md: "py-24 lg:py-32",
    lg: "py-32 lg:py-40",
  };

  return (
    <section id={id} className={cn(variants[variant], sizes[size], className)}>
      {children}
    </section>
  );
}
