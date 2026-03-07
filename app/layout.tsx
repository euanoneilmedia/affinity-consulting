import type { Metadata } from "next";
import { baseMetadata } from "@/lib/metadata";
import { createDefaultOrganizationSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site";
import { Header, Footer } from "@/components/layout";
import "@/styles/globals.css";

export const metadata: Metadata = baseMetadata;

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

const organizationSchema = createDefaultOrganizationSchema({
  name: siteConfig.name,
  url: siteConfig.url,
  description: siteConfig.description,
  logo: `${siteConfig.url}/logo-mark.png`,
  locality: "London",
  country: "United Kingdom",
  email: siteConfig.email,
  phone: siteConfig.phone,
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
