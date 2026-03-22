import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
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
            When you're struggling, the last thing you want is to be tracked, targeted, or sold to. 
            Still With You is built on the belief that your mental health search history belongs entirely to you.
          </p>
        </section>

        <section>
          <h2 className="text-xl text-brightwhite font-medium mb-4">No tracking. No accounts. No cookies.</h2>
          <p>
            At this stage, we do not require you to create an account to use the guided paths or access resources. 
            There is no database attached to this site collecting your personal information, your IP address, or the paths you click on.
          </p>
          <p className="mt-4">
            We do not use cookies. You will not see a cookie banner because there is nothing to consent to. 
            We do not use tracking pixels, Google Analytics, or any third-party advertising SDKs.
          </p>
        </section>

        <section>
          <h2 className="text-xl text-brightwhite font-medium mb-4">Anonymous Analytics</h2>
          <p>
            To understand if people are actually finding the site and whether they return to it, we use <strong>Plausible Analytics</strong>. 
            Plausible is a privacy-first, cookieless analytics tool. It only gives us aggregated totals (e.g. &quot;50 people visited today&quot;), 
            and explicitly does not track or identify individual users. It is fully compliant with GDPR, CCPA, and PECR out of the box.
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
