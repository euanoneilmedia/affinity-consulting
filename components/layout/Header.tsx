"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMobileNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="bg-brand-primary py-2.5 md:hidden">
        <div className="container-max text-center">
          <a
            href="#contact"
            className="text-sm font-medium text-white transition-opacity hover:opacity-90"
          >
            Get in touch
          </a>
        </div>
      </div>

      <div className="container-max">
        <nav className="flex items-center justify-between py-4 sm:py-6">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logos/Affinity-Consulting-Logo-Colour-Black-Text-No-Bg.png"
              alt="Affinity Consulting"
              width={250}
              height={84}
              className="h-10 w-auto"
            />
            <span className="sr-only">Affinity Consulting</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-text-secondary transition-colors hover:text-brand-primary"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden items-center gap-2 md:flex">
            <Button size="sm" variant="primary" href="#contact">
              Get in Touch
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="rounded-md p-2 text-text-secondary transition-colors hover:text-brand-primary md:hidden"
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-nav"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </nav>

        <div
          id="mobile-nav"
          className={`overflow-hidden transition-all duration-300 ease-out md:hidden ${
            mobileMenuOpen ? "max-h-72 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="border-t border-neutral-200 bg-white py-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleMobileNavClick}
                className="block px-3 py-2 text-sm font-medium text-text-secondary transition-colors hover:text-brand-primary"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
