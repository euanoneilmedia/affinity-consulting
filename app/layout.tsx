import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { baseMetadata } from "@/lib/metadata";
import { createDefaultOrganizationSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site";
import { Header, Footer } from "@/components/layout";
import "@/styles/globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

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
    <html lang="en" className={inter.variable}>
      <body className={inter.className}>
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
