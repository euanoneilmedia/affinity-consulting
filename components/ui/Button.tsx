import { ReactNode } from "react";
import { cn } from "@/lib/cn";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  asChild?: boolean;
  href?: string;
  [key: string]: unknown;
}

/**
 * Reusable Button component
 * Supports multiple variants and sizes
 * Can be rendered as either button or link
 */
export function Button({
  children,
  variant = "primary",
  size = "md",
  className,
  type = "button",
  disabled = false,
  href,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 ease-smooth focus-visible-ring";

  const variants = {
    primary:
      "bg-brand-primary text-white hover:bg-brand-primary-light hover:text-white focus:text-white active:bg-brand-primary-dark active:text-white shadow-sm hover:shadow-md disabled:opacity-50 disabled:cursor-not-allowed",
    secondary:
      "border-2 border-brand-secondary bg-transparent text-brand-secondary hover:bg-brand-secondary hover:text-white shadow-sm disabled:opacity-50 disabled:cursor-not-allowed",
    outline:
      "border-2 border-neutral-300 bg-transparent text-text-primary hover:border-brand-primary hover:text-brand-primary disabled:opacity-50 disabled:cursor-not-allowed",
    ghost:
      "bg-transparent text-text-secondary hover:bg-neutral-100 disabled:opacity-50 disabled:cursor-not-allowed",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const buttonClass = cn(baseStyles, variants[variant], sizes[size], className);

  if (href) {
    return (
      <a href={href} className={buttonClass} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} disabled={disabled} className={buttonClass} {...props}>
      {children}
    </button>
  );
}
