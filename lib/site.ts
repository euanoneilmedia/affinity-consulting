export const siteConfig = {
  name: process.env.NEXT_PUBLIC_SITE_NAME || "Affinity Consulting",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://affinity-consulting.com",
  description:
    process.env.NEXT_PUBLIC_SITE_DESCRIPTION ||
    "Specialist digital health and transformation consultancy for health and care organisations.",
  locale: "en_GB",
  email: process.env.NEXT_PUBLIC_BUSINESS_EMAIL || "hello@affinity-consulting.com",
  phone: process.env.NEXT_PUBLIC_BUSINESS_PHONE || "+44 (0) 20 XXXX XXXX",
  address: process.env.NEXT_PUBLIC_BUSINESS_ADDRESS || "London, United Kingdom",
  ogImage: "/og-image.png",
};

export function absoluteUrl(path = "/"): string {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${siteConfig.url}${normalizedPath}`;
}
