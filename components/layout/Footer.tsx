interface FooterLink {
  label: string;
  href: string;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

const footerSections: FooterSection[] = [
  {
    title: "Company",
    links: [
      { label: "About", href: "#about" },
      { label: "Services", href: "#services" },
      { label: "Approach", href: "#approach" },
    ],
  },
  {
    title: "Work",
    links: [
      { label: "Capabilities", href: "#services" },
      { label: "Trust", href: "#trust" },
      { label: "Contact", href: "#contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
      { label: "Contact", href: "#contact" },
    ],
  },
];

/**
 * Site footer with navigation and contact information
 */
export function Footer() {
  const currentYear = new Date().getFullYear();
  const businessEmail = process.env.NEXT_PUBLIC_BUSINESS_EMAIL || "hello@affinity-consulting.com";
  const businessAddress = process.env.NEXT_PUBLIC_BUSINESS_ADDRESS || "London, United Kingdom";

  return (
    <footer className="border-t border-neutral-700 bg-background-primary text-text-secondary">
      <div className="container-max py-16 sm:py-24">
        {/* Footer content grid */}
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {/* Brand info */}
          <div>
            <div className="mb-6 flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-primary">
                <span className="text-sm font-bold text-white">AC</span>
              </div>
              <span className="font-semibold text-text-primary">Affinity Consulting</span>
            </div>
            <p className="text-sm leading-relaxed text-text-muted">
              Specialist consulting focused on digitally-enabled, reimagined health and care.
            </p>
          </div>

          {/* Footer sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="mb-4 text-sm font-semibold text-text-primary">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-sm transition-colors hover:text-text-primary"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact info */}
        <div className="my-12 border-t border-neutral-700 py-12">
          <div className="grid gap-8 sm:grid-cols-2">
            <div>
              <h4 className="mb-2 text-sm font-semibold text-text-primary">Email</h4>
              <a
                href={`mailto:${businessEmail}`}
                className="text-sm transition-colors hover:text-text-primary"
              >
                {businessEmail}
              </a>
            </div>
            <div>
              <h4 className="mb-2 text-sm font-semibold text-text-primary">Location</h4>
              <p className="text-sm text-text-secondary">{businessAddress}</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-neutral-700 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 text-center text-sm sm:flex-row sm:text-left">
            <p className="text-text-muted">
              © {currentYear} Affinity Consulting. All rights reserved.
            </p>
            <a href="#contact" className="transition-colors hover:text-text-primary">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
