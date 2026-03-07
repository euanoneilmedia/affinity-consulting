/**
 * Utility to conditionally combine classnames
 * Simpler alternative to clsx for minimal dependencies
 */
export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(" ").trim();
}
