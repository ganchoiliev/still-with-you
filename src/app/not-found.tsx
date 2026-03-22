import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Page Not Found',
};

export default function NotFound() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center py-20 text-center animate-fade-in w-full">
      <h1 className="text-3xl md:text-4xl text-brightwhite font-medium mb-6">
        We couldn't find that page.
      </h1>
      
      <p className="text-lg text-offwhite/80 leading-relaxed max-w-lg mx-auto mb-12">
        It looks like the link you followed might be broken, or the page has moved. That's okay, let's get you back to familiar ground.
      </p>
      
      <Link 
        href="/"
        className="inline-flex items-center min-h-[44px] justify-center gap-3 px-8 py-4 rounded-full bg-teal text-navy font-medium hover:bg-brightwhite hover:text-navy transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white transform active:scale-95"
      >
        <span>Back to homepage</span>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="5" y1="12" x2="19" y2="12"></line>
          <polyline points="12 5 19 12 12 19"></polyline>
        </svg>
      </Link>
    </div>
  );
}
