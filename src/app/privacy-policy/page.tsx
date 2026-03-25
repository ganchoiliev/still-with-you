import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Still With You collects no personal data. No cookies, no tracking, no analytics, no accounts. Your privacy is absolute.",
  alternates: {
    canonical: "/privacy-policy",
  },
  openGraph: {
    title: "Privacy Policy",
    description: "Still With You collects no personal data. No cookies, no tracking, no analytics, no accounts. Your privacy is absolute.",
    url: "https://stillwithyou.app/privacy-policy",
    images: ["/opengraph-image.png"],
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="flex-1 flex flex-col py-10 w-full animate-fade-in">
      <Link href="/" className="inline-flex items-center text-teal hover:text-brightwhite transition-colors text-sm uppercase tracking-wide mb-12 group">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 group-hover:-translate-x-1 transition-transform"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
        Back to home
      </Link>

      <h1 className="text-3xl md:text-4xl text-brightwhite font-medium mb-12">Privacy Policy</h1>
      
      <div className="prose prose-invert prose-offwhite max-w-none space-y-8 text-offwhite/80 leading-relaxed">
        <section>
          <h2 className="text-xl text-brightwhite font-medium mb-4">You have a right to quiet</h2>
          <p>
            When you&apos;re struggling, the last thing you want is to be tracked, targeted, or sold to. 
            Still With You is built on the belief that your mental health search history belongs entirely to you.
          </p>
        </section>

        <section>
          <h2 className="text-xl text-brightwhite font-medium mb-4">No tracking. No accounts. No cookies.</h2>
          <p>
            This site does not use analytics of any kind. There are no tracking scripts, no cookies, 
            no pixels, and no third-party services collecting data about you or your visit.
          </p>
          <p className="mt-4">
            There is no database attached to this site. We do not collect your IP address, 
            your browsing behaviour, or which paths you click on. You will not see a cookie banner 
            because there is genuinely nothing to consent to.
          </p>
        </section>

        <section>
          <h2 className="text-xl text-brightwhite font-medium mb-4">What this means in practice</h2>
          <p>
            We cannot tell how many people visit this site. We cannot tell which pages are popular. 
            We accept that trade-off because your privacy matters more than our metrics.
          </p>
          <p className="mt-4">
            If we ever decide to add privacy-respecting analytics in the future (such as a cookieless, 
            GDPR-compliant tool like Plausible), we will update this policy first and be transparent about 
            exactly what is collected.
          </p>
        </section>

        <section>
          <h2 className="text-xl text-brightwhite font-medium mb-4">Future Changes</h2>
          <p>
            If we eventually add features that require logging in (such as a personal journal), we will introduce a new, 
            strict data policy covering exactly how that special category health data is encrypted and protected. 
            Until then, this site is a static, private space for you to read.
          </p>
        </section>
        
        <section>
          <h2 className="text-xl text-brightwhite font-medium mb-4">Contact</h2>
          <p>
            If you have any questions about this text, email <a href="mailto:hello@stillwithyou.app" className="text-teal hover:text-brightwhite underline underline-offset-4 decoration-teal/30">hello@stillwithyou.app</a>.
          </p>
        </section>
      </div>
    </div>
  );
}
