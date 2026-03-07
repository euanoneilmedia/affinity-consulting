import { ReactNode } from "react";
import { cn } from "@/lib/cn";

interface DarkCardProps {
  children: ReactNode;
  className?: string;
  variant?: "default" | "elevated" | "gradient";
  hover?: boolean;
}

/**
 * DarkCard component for card-based dark layout.
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
        "rounded-card p-6 shadow-card transition-all duration-200 md:p-8",
        variant === "default" && "border border-neutral-700 bg-background-card",
        variant === "elevated" && "bg-background-card shadow-card-hover",
        variant === "gradient" &&
          "bg-gradient-to-br from-brand-primary/20 to-brand-secondary/20 backdrop-blur-sm",
        hover && "hover:-translate-y-1 hover:shadow-card-hover",
        className,
      )}
    >
      {children}
    </div>
  );
}
