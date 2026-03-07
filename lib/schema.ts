/**
 * JSON-LD Schema helpers for structured data
 * Supports common schema types for professional services and organizations
 */

interface Organization {
  "@context": string;
  "@type": string;
  name: string;
  url: string;
  description?: string;
  logo?: string;
  address?: {
    "@type": string;
    streetAddress?: string;
    addressLocality: string;
    addressCountry: string;
  };
  telephone?: string;
  email?: string;
  sameAs?: string[];
}

interface LocalBusiness extends Organization {
  "@type": "LocalBusiness" | "ProfessionalService";
  image?: string;
}

interface BreadcrumbItem {
  "@type": string;
  position: number;
  name: string;
  item?: string;
}

interface BreadcrumbList {
  "@context": string;
  "@type": string;
  itemListElement: BreadcrumbItem[];
}

export interface JsonLdObject {
  [key: string]: unknown;
}

/**
 * Create organization schema
 */
export function createOrganizationSchema(options: {
  name: string;
  description: string;
  url: string;
  logo?: string;
  address?: {
    locality: string;
    country: string;
    street?: string;
  };
  contact?: {
    phone?: string;
    email?: string;
  };
  social?: string[];
}): Organization {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: options.name,
    url: options.url,
    description: options.description,
    ...(options.logo && { logo: options.logo }),
    ...(options.address && {
      address: {
        "@type": "PostalAddress",
        addressLocality: options.address.locality,
        addressCountry: options.address.country,
        ...(options.address.street && { streetAddress: options.address.street }),
      },
    }),
    ...(options.contact?.phone && { telephone: options.contact.phone }),
    ...(options.contact?.email && { email: options.contact.email }),
    ...(options.social && { sameAs: options.social }),
  };
}

/**
 * Create local business / professional service schema
 */
export function createServiceSchema(options: {
  name: string;
  description: string;
  url: string;
  logo?: string;
  image?: string;
  address: {
    locality: string;
    country: string;
  };
  contact: {
    phone: string;
    email: string;
  };
  social?: string[];
}): LocalBusiness {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: options.name,
    url: options.url,
    description: options.description,
    ...(options.logo && { logo: options.logo }),
    ...(options.image && { image: options.image }),
    address: {
      "@type": "PostalAddress",
      addressLocality: options.address.locality,
      addressCountry: options.address.country,
    },
    telephone: options.contact.phone,
    email: options.contact.email,
    ...(options.social && { sameAs: options.social }),
  };
}

/**
 * Create breadcrumb schema
 */
export function createBreadcrumbSchema(
  items: Array<{ name: string; url?: string }>,
): BreadcrumbList {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      ...(item.url && { item: item.url }),
    })),
  };
}

/**
 * Create FAQ schema
 */
export function createFaqSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

/**
 * Create organization schema using site defaults for global layout usage.
 */
export function createDefaultOrganizationSchema(options: {
  name: string;
  url: string;
  description: string;
  logo?: string;
  locality?: string;
  country?: string;
  email?: string;
  phone?: string;
}): Organization {
  return createOrganizationSchema({
    name: options.name,
    url: options.url,
    description: options.description,
    ...(options.logo && { logo: options.logo }),
    address:
      options.locality && options.country
        ? {
            locality: options.locality,
            country: options.country,
          }
        : undefined,
    contact: {
      ...(options.email && { email: options.email }),
      ...(options.phone && { phone: options.phone }),
    },
  });
}
