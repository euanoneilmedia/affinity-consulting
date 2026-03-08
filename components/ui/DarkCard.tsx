import { ReactNode } from "react";
import { cn } from "@/lib/cn";

interface DarkCardProps {
  children: ReactNode;
  className?: string;
  variant?: "default" | "elevated" | "gradient";
  hover?: boolean;
}

/**
 * DarkCard component for card-based layout in dark accent sections.
 * Used in footer and other dark-background sections.
 * Provides consistent card styling with elevation and hover states.
 */
export function DarkCard({
  children,
  className,
  variant = "default",
  hover = false,
}: DarkCardProps) {
  return (
    <div
      className={cn(
        "rounded-card p-6 shadow-md transition-all duration-200 md:p-8",
        variant === "default" && "border border-neutral-600 bg-background-accent-card",
        variant === "elevated" && "bg-background-accent-card shadow-lg",
        variant === "gradient" && "bg-background-accent-card border border-neutral-600",
        hover && "hover:-translate-y-1 hover:shadow-lg",
        className,
      )}
    >
      {children}
    </div>
  );
}
