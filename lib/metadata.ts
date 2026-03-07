import type { Metadata } from "next";
import { absoluteUrl, siteConfig } from "@/lib/site";

export const baseMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  authors: [{ name: "Affinity Consulting" }],
  creator: "Affinity Consulting",
  keywords: [
    "healthcare transformation",
    "digital health",
    "healthcare consulting",
    "health and social care",
    "service redesign",
    "digital transformation",
  ],
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.name,
    description: siteConfig.description,
    images: [
      {
        url: absoluteUrl(siteConfig.ogImage),
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [absoluteUrl(siteConfig.ogImage)],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteConfig.url,
  },
};

/**
 * Create page-specific metadata with automatic title templating
 */
export function createPageMetadata(
  pageTitle: string,
  pageDescription: string,
  options?: {
    noIndex?: boolean;
    canonical?: string;
    og?: {
      image?: string;
      type?: string;
    };
  },
): Metadata {
  const canonical = options?.canonical;

  return {
    title: pageTitle,
    description: pageDescription,
    openGraph: {
      type: options?.og?.type === "article" ? "article" : "website",
      title: pageTitle,
      description: pageDescription,
      url: canonical,
      ...(options?.og?.image && {
        images: [
          {
            url: options.og.image,
            width: 1200,
            height: 630,
            alt: pageTitle,
          },
        ],
      }),
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: pageDescription,
      ...(options?.og?.image && {
        images: [options.og.image],
      }),
    },
    robots: options?.noIndex
      ? {
          index: false,
          follow: false,
        }
      : undefined,
    alternates: canonical
      ? {
          canonical,
        }
      : undefined,
  };
}
