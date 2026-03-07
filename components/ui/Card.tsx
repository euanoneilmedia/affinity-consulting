import { ReactNode } from "react";
import { cn } from "@/lib/cn";

interface CardProps {
  children: ReactNode;
  className?: string;
  elevated?: boolean;
  hoverable?: boolean;
}

/**
 * Card component for content blocks
 */
export function Card({ children, className, elevated = false, hoverable = true }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-lg border bg-white p-6 transition-shadow duration-200",
        elevated
          ? "border-transparent shadow-lg hover:shadow-xl"
          : "border-neutral-200 shadow-sm hover:shadow-md",
        !hoverable && "hover:shadow-sm",
        className,
      )}
    >
      {children}
    </div>
  );
}

/**
 * Card header for consistent heading styling
 */
export function CardHeader({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn("mb-4 pb-4 border-b border-neutral-200", className)}>{children}</div>;
}

/**
 * Card content wrapper
 */
export function CardContent({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn("", className)}>{children}</div>;
}

/**
 * Card footer for action items
 */
export function CardFooter({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={cn(
        "mt-6 flex items-center justify-between border-t border-neutral-200 pt-4",
        className,
      )}
    >
      {children}
    </div>
  );
}
