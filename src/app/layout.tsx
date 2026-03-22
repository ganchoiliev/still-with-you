import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header } from "@/components/Header";
import { CrisisFooter } from "@/components/CrisisFooter";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Still With You",
    default: "Still With You — Mental Health First Steps | UK",
  },
  description: "A free, gentle guide for anyone navigating mental health in the UK. No sign-up. No judgement. Just a next step, whenever you're ready.",
  openGraph: {
    title: "Still With You — Mental Health First Steps | UK",
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
  return (
    <html lang="en" className={`${inter.className} antialiased selection:bg-teal/30 selection:text-brightwhite`} suppressHydrationWarning>
      <body className="min-h-screen flex flex-col" suppressHydrationWarning>
        <Header />
        <main className="flex-1 flex flex-col items-center">
          <div className="w-full max-w-screen-sm px-6 pb-12 md:pb-20 flex flex-col flex-1">
            {children}
          </div>
        </main>
        <CrisisFooter />
        <Analytics />
      </body>
    </html>
  );
}
