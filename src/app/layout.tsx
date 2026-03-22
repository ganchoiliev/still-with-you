import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header } from "@/components/Header";
import { CrisisFooter } from "@/components/CrisisFooter";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Still With You",
  description: "A free, gentle guide for anyone navigating mental health in the UK.",
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
      </body>
    </html>
  );
}
