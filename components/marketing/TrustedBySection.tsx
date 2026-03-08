import Image from "next/image";
import { Container, Section } from "@/components/layout";

interface TrustedLogo {
  name: string;
  src: string;
  width: number;
  height: number;
}

const trustedLogos: TrustedLogo[] = [
  {
    name: "NHS",
    src: "/logos/nhs-logo-white.png",
    width: 150,
    height: 56,
  },
  {
    name: "Department of Health and Social Care",
    src: "/logos/department-for-health-and-social-care-logo-white.png",
    width: 168,
    height: 74,
  },
  {
    name: "UKHSA",
    src: "/logos/ukhsa-logo-white.png",
    width: 122,
    height: 122,
  },
  {
    name: "NICE",
    src: "/logos/nice-logo-white.png",
    width: 170,
    height: 60,
  },
];

const logoTintFilter =
  "brightness(0) saturate(100%) invert(24%) sepia(31%) saturate(984%) hue-rotate(139deg) brightness(93%) contrast(90%)";

/**
 * Trust strip placed high on the page so credibility appears above the fold.
 * Features an infinite ticker animation for smooth logo scrolling.
 */
export function TrustedBySection() {
  return (
    <Section variant="light" size="sm" className="sm:py-10">
      <Container size="xl">
        <div className="relative overflow-hidden">
          {/* Gradient overlays for fade effect */}
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16 bg-gradient-to-r from-background-card to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 bg-gradient-to-l from-background-card to-transparent" />

          {/* Ticker container */}
          <div className="flex animate-scroll-left items-center">
            {/* First set of logos */}
            {trustedLogos.map((logo, index) => (
              <div
                key={`logo-1-${index}`}
                className="flex h-16 shrink-0 items-center justify-center px-8"
              >
                <Image
                  src={logo.src}
                  alt={logo.name}
                  width={logo.width}
                  height={logo.height}
                  className="max-h-10 w-auto object-contain opacity-75 transition duration-300 hover:opacity-100 sm:max-h-12"
                  style={{ filter: logoTintFilter }}
                />
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {trustedLogos.map((logo, index) => (
              <div
                key={`logo-2-${index}`}
                className="flex h-16 shrink-0 items-center justify-center px-8"
              >
                <Image
                  src={logo.src}
                  alt={logo.name}
                  width={logo.width}
                  height={logo.height}
                  className="max-h-10 w-auto object-contain opacity-75 transition duration-300 hover:opacity-100 sm:max-h-12"
                  style={{ filter: logoTintFilter }}
                />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
