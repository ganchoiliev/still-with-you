import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header } from "@/components/Header";
import { CrisisFooter } from "@/components/CrisisFooter";
import { Analytics } from "@vercel/analytics/next";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://stillwithyou.app"),
  title: {
    template: "%s | Still With You",
    default: "Still With You - Mental Health First Steps | UK",
  },
  description: "A free, gentle guide for anyone navigating mental health in the UK. No sign-up. No judgement. Just a next step, whenever you're ready.",
  openGraph: {
    title: "Still With You - Mental Health First Steps | UK",
    description: "A free, gentle guide for anyone navigating mental health in the UK. No sign-up. No judgement. Just a next step.",
    url: "https://stillwithyou.app",
    siteName: "Still With You",
    locale: "en_GB",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://stillwithyou.app/#website",
        "url": "https://stillwithyou.app/",
        "name": "Still With You",
        "description": "A free, gentle guide for anyone navigating mental health in the UK. No sign-up. No judgement.",
        "inLanguage": "en-GB"
      },
      {
        "@type": "Organization",
        "@id": "https://stillwithyou.app/#organization",
        "name": "Still With You",
        "url": "https://stillwithyou.app/",
        "logo": {
          "@type": "ImageObject",
          "url": "https://stillwithyou.app/opengraph-image.png"
        }
      }
    ]
  };

  return (
    <html lang="en" className={`${inter.className} antialiased selection:bg-teal/30 selection:text-brightwhite`} suppressHydrationWarning>
      <body className="min-h-screen flex flex-col text-[16px] md:text-[18px] leading-[1.75]" suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:rounded-lg focus:bg-teal focus:text-navy focus:font-medium focus:outline-none focus:ring-2 focus:ring-brightwhite"
          >
            Skip to content
          </a>
          <Header />
          <main id="main-content" className="flex-1 flex flex-col items-center">
            <div className="w-full max-w-screen-sm px-6 pb-12 md:pb-20 flex flex-col flex-1">
              {children}
            </div>
          </main>
          <CrisisFooter />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
