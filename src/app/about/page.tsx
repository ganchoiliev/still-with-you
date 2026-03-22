import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Why This Exists",
  description: "The personal story behind Still With You - built from experience, not market research, for people the mental health system forgot.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "Why This Exists",
    description: "The personal story behind Still With You - built from experience, not market research, for people the mental health system forgot.",
    url: "https://stillwithyou.app/about",
    images: ["/opengraph-image.png"],
  },
};

export default function AboutPage() {
  return (
    <div className="flex-1 flex flex-col py-10 w-full animate-fade-in">
      <Link href="/" className="inline-flex items-center text-teal hover:text-brightwhite transition-colors text-sm uppercase tracking-wide mb-12 group">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 group-hover:-translate-x-1 transition-transform"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
        Back to home
      </Link>

      <h1 className="text-3xl md:text-4xl text-brightwhite font-medium mb-12">Why this exists</h1>
      
      <section className="prose prose-invert prose-lg max-w-none mb-16 space-y-6 text-offwhite/90 leading-relaxed">
        <p>
          There&apos;s a specific kind of quiet that happens when you&apos;re discharged from a hospital or walk out of a clinic with a new mental health diagnosis. It&apos;s a loud, ringing quiet. You are handed a bag of pills, maybe a photocopied leaflet, and you are sent home.
        </p>
        <p>
          When it happened to me, I sat on my bed and stared at the medication. I didn&apos;t know what to expect. I didn&apos;t know what the next day would look like. I just felt an overwhelming sense of being entirely alone in a system that had processed me, but hadn&apos;t actually <em>held</em> me.
        </p>
        <p>
          The system is built for crisis intervention and clinical treatment. It is terrible at the space in between. 
        </p>
        <p>
          I learned the hard way that recovery doesn&apos;t start with a prescription. It starts with self-compassion, with human connection, and with small, manageable steps. It starts with having someone, or something, look you in the eye and say, &quot;I know you are terrified. But you are not broken.&quot;
        </p>
      </section>

      <section className="mb-16">
        <h2 className="text-xl md:text-2xl text-brightwhite font-medium mb-6">Our Mission</h2>
        <div className="p-6 md:p-8 rounded-2xl bg-charcoal/40 border border-teal/10">
          <p className="text-lg text-offwhite/90 leading-relaxed font-medium">
            We believe that mental health support should start with being heard, not being prescribed. Still With You exists to help people take their first steps at their own pace, with no pressure, and no judgement.
          </p>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-xl md:text-2xl text-brightwhite font-medium mb-6">What this is not</h2>
        <div className="p-6 rounded-2xl border border-charcoal bg-navy">
          <p className="text-offwhite/80 leading-relaxed mb-4">
            Still With You is not a substitute for professional medical care. We don&apos;t diagnose, prescribe, or treat. 
          </p>
          <p className="text-offwhite/80 leading-relaxed">
            If you&apos;re in crisis, please contact Samaritans (116 123), NHS 111, or call 999. What we do is help you understand your options, feel less alone, and take one small step forward.
          </p>
        </div>
      </section>

      <section className="pt-8 border-t border-charcoal/50">
        <h2 className="text-xl text-brightwhite font-medium mb-4">Get in touch</h2>
        <p className="text-offwhite/80 leading-relaxed">
          If you have feedback, suggestions, or just want to say hello, you can reach me at{' '}
          <a href="mailto:hello@stillwithyou.app" className="text-teal hover:text-brightwhite transition-colors underline underline-offset-4 decoration-teal/30">hello@stillwithyou.app</a>.
        </p>
      </section>
    </div>
  );
}
