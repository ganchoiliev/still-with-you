import Link from "next/link";

export default function TermsPage() {
  return (
    <div className="flex-1 flex flex-col py-10 w-full animate-fade-in">
      <Link href="/" className="inline-flex items-center text-teal hover:text-brightwhite transition-colors text-sm uppercase tracking-wide mb-12 group">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 group-hover:-translate-x-1 transition-transform"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
        Back to home
      </Link>

      <h1 className="text-3xl md:text-4xl text-brightwhite font-medium mb-12">Terms of Service</h1>
      
      <div className="prose prose-invert prose-offwhite max-w-none space-y-8 text-offwhite/80 leading-relaxed">
        <section>
          <p className="font-medium text-offwhite/90">
            Welcome to Still With You. By accessing and using our website, you agree to these terms. If you do not agree with any part of these terms, please do not use our service.
          </p>
        </section>

        <section>
          <h2 className="text-xl text-brightwhite font-medium mb-4">1. Not Medical Advice</h2>
          <p className="px-4 py-3 border-l-2 border-teal bg-teal/5">
            <strong>Still With You is not a medical or clinical service.</strong> The information and guided paths provided on this site are for emotional support and informational purposes only. We do not provide medical diagnosis, treatment, or psychiatric advice. Always seek the advice of a qualified health provider with any questions you may have regarding a medical condition.
          </p>
          <p className="mt-4">
            If you are in immediate danger or experiencing a medical emergency, please call 999 or proceed to your nearest A&E. If you are in a mental health crisis and need to talk to someone, call Samaritans free on 116 123.
          </p>
        </section>

        <section>
          <h2 className="text-xl text-brightwhite font-medium mb-4">2. Use of Service</h2>
          <p>
            Still With You is provided free of charge as a resource for people navigating mental health challenges. You agree to use the site only for lawful purposes and in a way that does not infringe the rights of, restrict, or inhibit anyone else's use of the site.
          </p>
        </section>

        <section>
          <h2 className="text-xl text-brightwhite font-medium mb-4">3. Third-Party Links</h2>
          <p>
            Our resources page and paths contain links to third-party charities, NHS services, and organisations. We do not control these external sites and are not responsible for their content, policies, or the support they provide. Linking to them does not imply an endorsement of their views.
          </p>
        </section>

        <section>
          <h2 className="text-xl text-brightwhite font-medium mb-4">4. Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by law, Still With You shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your access to or use of, or inability to access or use, this service.
          </p>
        </section>
        
        <section>
          <h2 className="text-xl text-brightwhite font-medium mb-4">5. Contact</h2>
          <p>
            If you have any questions regarding these terms, contact <a href="mailto:hello@stillwithyou.app" className="text-teal hover:text-brightwhite underline underline-offset-4 decoration-teal/30">hello@stillwithyou.app</a>.
          </p>
        </section>
      </div>
    </div>
  );
}
