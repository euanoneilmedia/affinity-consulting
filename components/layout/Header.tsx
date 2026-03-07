"use client";

import Link from "next/link";
import { Button } from "@/components/ui";

interface NavLink {
  label: string;
  href: string;
}

const navLinks: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Approach", href: "#approach" },
  { label: "Contact", href: "#contact" },
];

/**
 * Site header and navigation
 */
export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-neutral-800/50 bg-background-primary/95 backdrop-blur-sm">
      <div className="container-max">
        <nav className="flex items-center justify-between py-4 sm:py-6">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-card bg-brand-primary shadow-card">
              <span className="text-lg font-bold text-white">AC</span>
            </div>
            <span className="hidden font-semibold text-text-primary sm:inline">Affinity</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-text-secondary transition-colors hover:text-brand-primary-light"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="flex items-center gap-2">
            <Button size="sm" variant="primary" href="#contact">
              Get in Touch
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}
