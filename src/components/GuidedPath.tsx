"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export type PathScreen = {
  mainMessage: string;
  supportingText?: string;
  nextStep?: string;
  resourceLink?: { label: string; href: string };
  internalResourceLink?: { label: string; href: string };
};

export function GuidedPath({ screens, showEmergencyContact }: { screens: PathScreen[], showEmergencyContact?: boolean }) {
  const [currentStep, setCurrentStep] = useState(0);
  const [displayStep, setDisplayStep] = useState(0);
  const [isFading, setIsFading] = useState(false);
  
  const screen = screens[displayStep];
  const isLast = displayStep === screens.length - 1;

  const [copied, setCopied] = useState(false);
  const [isReturning, setIsReturning] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined" && window.location.search.includes("return=")) {
      setIsReturning(true);
    }
  }, []);

  const navigateTo = (newStep: number) => {
    if (newStep === displayStep || isFading) return;
    setIsFading(true);
    setCurrentStep(newStep);
    
    setTimeout(() => {
      setDisplayStep(newStep);
      setIsFading(false);
    }, 300);
  };

  const handleNext = () => {
    if (displayStep < screens.length - 1) navigateTo(displayStep + 1);
  };
  
  const handleBack = () => {
    if (displayStep > 0) navigateTo(displayStep - 1);
  };

  return (
    <div className="flex-1 flex flex-col justify-center">
      <noscript>
        <style>{`
          .js-only-content { display: none !important; }
        `}</style>
        <div className="flex-1 flex flex-col py-10 space-y-24">
          {showEmergencyContact && (
            <div className="p-5 md:p-6 rounded-2xl bg-teal/5 border border-teal/20 backdrop-blur-sm">
              <h3 className="text-teal font-medium mb-3 text-sm uppercase tracking-wider flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
                If you need help right now
              </h3>
              <p className="text-offwhite/80 text-sm md:text-base leading-relaxed space-y-2">
                <span className="block">Samaritans: <a href="tel:116123" className="text-brightwhite font-medium hover:text-teal transition-colors underline underline-offset-4 decoration-teal/40 hover:decoration-teal">116 123</a> (24/7, free)</span>
                <span className="block">NHS: <a href="tel:111" className="text-brightwhite font-medium hover:text-teal transition-colors underline underline-offset-4 decoration-teal/40 hover:decoration-teal">111</a> (Option 2)</span>
                <span className="block">Emergency: <a href="tel:999" className="text-brightwhite font-medium hover:text-teal transition-colors underline underline-offset-4 decoration-teal/40 hover:decoration-teal">999</a></span>
              </p>
            </div>
          )}
          
          <div className="space-y-24">
            {screens.map((s, i) => (
              <div key={i} className="flex flex-col">
                <h2 className="text-2xl md:text-3xl lg:text-4xl text-brightwhite font-medium leading-[1.3] mb-6">
                  {s.mainMessage}
                </h2>
                
                {s.supportingText && (
                  <p className="text-lg md:text-xl text-offwhite/80 leading-relaxed mb-6">
                    {s.supportingText}
                  </p>
                )}

                {(i === screens.length - 1 && s.nextStep) && (
                  <div className="mt-8 p-6 md:p-8 rounded-2xl bg-charcoal/50 border border-teal/10">
                    <h3 className="text-brightwhite font-medium mb-4 tracking-wide text-sm uppercase">One step you can take today</h3>
                    <p className="text-offwhite/90 leading-relaxed text-lg mb-8">{s.nextStep}</p>
                    
                    <div className="flex flex-col sm:flex-row gap-4">
                      {s.resourceLink && (
                        <a 
                          href={s.resourceLink.href} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-teal text-navy font-medium hover:bg-brightwhite hover:text-navy transition-colors text-center w-full sm:w-auto"
                         >
                          <span>{s.resourceLink.label}</span>
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                        </a>
                      )}

                      {s.internalResourceLink && (
                        <a 
                          href={s.internalResourceLink.href}
                          className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-charcoal/80 border border-teal/30 text-brightwhite font-medium hover:bg-teal hover:text-navy hover:border-teal transition-colors text-center w-full sm:w-auto"
                        >
                          <span>{s.internalResourceLink.label}</span>
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                        </a>
                      )}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
          
          <p className="mt-16 pt-8 text-center text-offwhite/40 italic">
            Come back whenever you need to. We're still with you.
          </p>
        </div>
      </noscript>

      <div className="js-only-content flex-1 flex flex-col justify-center">
        <div 
          className={`flex-1 flex flex-col justify-center min-h-[50vh] py-10 transition-opacity duration-300 ease-in-out ${isFading ? 'opacity-0' : 'opacity-100'}`}
        >
          <h1 className="text-2xl md:text-3xl lg:text-4xl text-brightwhite font-medium leading-[1.3] mb-8">
            {screen.mainMessage}
          </h1>
          
          {screen.supportingText && (
            <p className="text-lg md:text-xl text-offwhite/80 leading-relaxed mb-8">
              {screen.supportingText}
            </p>
          )}

          {showEmergencyContact && (
            <div className="mt-2 mb-8 p-5 md:p-6 rounded-2xl bg-teal/5 border border-teal/20 backdrop-blur-sm">
              <h3 className="text-teal font-medium mb-3 text-sm uppercase tracking-wider flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
                If you need help right now
              </h3>
              <p className="text-offwhite/80 text-sm md:text-base leading-relaxed space-y-2">
                <span className="block">Samaritans: <a href="tel:116123" className="text-brightwhite font-medium hover:text-teal transition-colors underline underline-offset-4 decoration-teal/40 hover:decoration-teal">116 123</a> (24/7, free)</span>
                <span className="block">NHS: <a href="tel:111" className="text-brightwhite font-medium hover:text-teal transition-colors underline underline-offset-4 decoration-teal/40 hover:decoration-teal">111</a> (Option 2)</span>
                <span className="block">Emergency: <a href="tel:999" className="text-brightwhite font-medium hover:text-teal transition-colors underline underline-offset-4 decoration-teal/40 hover:decoration-teal">999</a></span>
              </p>
            </div>
          )}

          {isReturning && displayStep === 0 && (
            <div className="mt-2 mb-8 p-4 rounded-xl bg-charcoal/40 border border-teal/20 text-teal flex items-center gap-3">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
              <p className="text-sm font-medium">Welcome back. Take all the time you need today.</p>
            </div>
          )}

          {isLast && screen.nextStep && (
            <div className="mt-12 p-6 md:p-8 rounded-2xl bg-charcoal/50 border border-teal/10">
              <h3 className="text-brightwhite font-medium mb-4 tracking-wide text-sm uppercase">One step you can take today</h3>
              <p className="text-offwhite/90 leading-relaxed text-lg mb-8">{screen.nextStep}</p>
              
              {screen.resourceLink && (
                <a 
                  href={screen.resourceLink.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-teal text-navy font-medium hover:bg-brightwhite hover:text-navy transition-colors mb-4 w-full sm:w-auto"
                 >
                  <span>{screen.resourceLink.label}</span>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                </a>
              )}

              {screen.internalResourceLink && (
                <Link 
                  href={screen.internalResourceLink.href}
                  className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-charcoal/80 border border-teal/30 text-brightwhite font-medium hover:bg-teal hover:text-navy hover:border-teal transition-colors w-full sm:w-auto"
                >
                  <span>{screen.internalResourceLink.label}</span>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                </Link>
              )}
            </div>
          )}
        </div>

        <div className="mt-12 pb-8 flex items-center justify-between overflow-hidden">
          <button 
            onClick={handleBack}
            disabled={currentStep === 0}
            aria-label="Go to previous step"
            className={`px-4 py-4 -ml-4 text-offwhite/50 hover:text-brightwhite transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal/60 focus-visible:rounded-lg ${currentStep === 0 ? 'opacity-0 pointer-events-none' : ''}`}
          >
            Back
          </button>
          
          <div className="flex items-center justify-center flex-1 min-w-0" role="tablist" aria-label="Progress">
            {screens.map((_, i) => (
              <button
                key={i}
                onClick={() => i < displayStep && navigateTo(i)}
                disabled={i >= displayStep}
                aria-label={i === displayStep ? `Current step ${i + 1} of ${screens.length}` : i < displayStep ? `Go back to step ${i + 1}` : `Step ${i + 1} (upcoming)`}
                aria-current={i === displayStep ? 'step' : undefined}
                className={`group flex items-center justify-center flex-1 min-h-[44px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal/60 rounded-full ${i < displayStep ? 'cursor-pointer' : 'cursor-default'}`}
              >
                <span
                  className={`block rounded-full transition-all duration-500 ease-out ${
                    i === displayStep
                      ? 'w-2.5 h-2.5 bg-teal scale-125'
                      : i < displayStep
                      ? 'w-2 h-2 bg-teal/45 group-hover:bg-teal/70'
                      : 'w-2 h-2 bg-offwhite/20'
                  }`}
                />
              </button>
            ))}
          </div>
          
          {!isLast ? (
            <button 
              onClick={handleNext}
              aria-label="Go to next step"
              className="px-6 py-3 rounded-full bg-charcoal text-offwhite font-medium hover:bg-charcoal/80 hover:text-brightwhite transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal/60"
            >
              Next
            </button>
          ) : (
            <div className="w-[86px]" /> /* Spacer to keep dots centered */
          )}
        </div>
        
        {isLast && (
          <div className="mt-8 mb-4 flex flex-col items-center gap-6">
            <p className="text-center text-offwhite/40 italic">
              Come back whenever you need to. We're still with you.
            </p>
            <button 
              onClick={() => {
                const url = new URL(window.location.href);
                url.searchParams.set('return', 'true');
                navigator.clipboard.writeText(url.toString());
                setCopied(true);
                setTimeout(() => setCopied(false), 3000);
              }}
              className="text-sm px-6 py-2.5 rounded-full border border-teal/20 hover:border-teal/50 text-teal hover:text-brightwhite hover:bg-teal/5 transition-all duration-300 flex items-center gap-2"
              aria-label="Copy a link to return tomorrow"
            >
              {copied ? (
                <>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  <span>Link copied</span>
                </>
              ) : (
                <>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
                  <span>Save a link for tomorrow</span>
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
