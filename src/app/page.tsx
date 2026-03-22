import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col w-full flex-1">
      {/* Hero section */}
      <section className="flex flex-col justify-center relative min-h-[calc(100svh-160px)] pb-24">
        <h1 className="text-4xl md:text-5xl lg:text-5xl font-medium text-brightwhite mb-8 leading-[1.2]">
          You don&apos;t have to figure this out alone.
        </h1>
        <p className="text-xl md:text-2xl text-offwhite/80 leading-relaxed max-w-xl">
          Still With You is a free, gentle guide for anyone navigating mental health in the UK. No sign-up. No judgement. Just a next step, whenever you&apos;re ready.
        </p>
        
        {/* Subtle downward scroll indicator */}
        <a 
          href="#prompt" 
          className="absolute bottom-4 left-0 opacity-50 flex items-center gap-3 text-sm uppercase tracking-widest text-teal hover:opacity-100 transition-opacity"
          aria-label="Scroll down to begin"
        >
          <span>Begin</span>
          <svg className="animate-bounce" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </a>
      </section>

      {/* The Prompt */}
      <section id="prompt" className="pt-24 pb-20 min-h-[80vh] flex flex-col justify-center">
        <h2 className="text-2xl md:text-3xl font-medium text-brightwhite mb-10">What brought you here today?</h2>
        
        <div className="flex flex-col gap-6">
          <PathCard href="/path/diagnosed" title="I've just been diagnosed with something" />
          <PathCard href="/path/discharged" title="I've left hospital and don't know what's next" />
          <PathCard href="/path/not-sure" title="I think I might need help but I'm not sure" />
          <PathCard href="/path/supporting" title="I'm supporting someone I care about" />
          <PathCard href="/path/alone" title="I just need to feel less alone right now" />
        </div>
      </section>

      {/* Quiet Reassurance Block */}
      <section className="py-16 border-t border-charcoal/40">
        <p className="text-lg text-offwhite/70 leading-relaxed mb-8 max-w-lg">
          Not sure where to start? That&apos;s okay. You can also browse our resources or read about why we built this.
        </p>
        <div className="flex flex-wrap gap-8">
          <Link href="/resources" className="text-teal hover:text-brightwhite transition-colors underline underline-offset-8 decoration-teal/20 hover:decoration-teal/80">
            Browse resources
          </Link>
          <Link href="/about" className="text-teal hover:text-brightwhite transition-colors underline underline-offset-8 decoration-teal/20 hover:decoration-teal/80">
            Read our story
          </Link>
        </div>
      </section>
    </div>
  );
}

function PathCard({ href, title }: { href: string; title: string }) {
  return (
    <Link 
      href={href}
      className="block w-full p-6 sm:p-8 rounded-2xl bg-charcoal/30 hover:bg-charcoal/60 transition-all duration-500 border border-offwhite/5 hover:border-teal/30 group"
    >
      <span className="text-lg md:text-xl text-offwhite/90 group-hover:text-brightwhite transition-colors">
        {title}
      </span>
    </Link>
  );
}
