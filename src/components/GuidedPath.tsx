"use client";

import { useState } from "react";

export type PathScreen = {
  mainMessage: string;
  supportingText?: string;
  nextStep?: string;
  resourceLink?: { label: string; href: string };
};

export function GuidedPath({ screens }: { screens: PathScreen[] }) {
  const [currentStep, setCurrentStep] = useState(0);
  
  const screen = screens[currentStep];
  const isLast = currentStep === screens.length - 1;

  const handleNext = () => {
    if (!isLast) setCurrentStep(prev => prev + 1);
  };
  
  const handleBack = () => {
    if (currentStep > 0) setCurrentStep(prev => prev - 1);
  };

  return (
    <div className="flex-1 flex flex-col justify-center">
      <div 
        key={currentStep} 
        className="flex-1 flex flex-col justify-center min-h-[50vh] animate-fade-in py-10"
      >
        <h1 className="text-2xl md:text-3xl lg:text-4xl text-brightwhite font-medium leading-[1.3] mb-8">
          {screen.mainMessage}
        </h1>
        
        {screen.supportingText && (
          <p className="text-lg md:text-xl text-offwhite/80 leading-relaxed mb-8">
            {screen.supportingText}
          </p>
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
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-teal text-navy font-medium hover:bg-brightwhite hover:text-navy transition-colors"
               >
                <span>{screen.resourceLink.label}</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </a>
            )}
          </div>
        )}
      </div>

      <div className="mt-12 pb-8 flex items-center justify-between">
        <button 
          onClick={handleBack}
          disabled={currentStep === 0}
          className={`px-6 py-4 -ml-6 text-offwhite/50 hover:text-brightwhite transition-colors duration-300 ${currentStep === 0 ? 'opacity-0 pointer-events-none' : ''}`}
        >
          Back
        </button>
        
        <div className="flex items-center gap-3">
          {screens.map((_, i) => (
            <div 
              key={i} 
              className={`h-1.5 rounded-full transition-all duration-500 ease-out ${i === currentStep ? 'w-8 bg-teal' : 'w-2 bg-offwhite/20'}`}
              aria-label={i === currentStep ? `Current step ${i + 1} of ${screens.length}` : `Step ${i + 1}`}
            />
          ))}
        </div>
        
        {!isLast ? (
          <button 
            onClick={handleNext}
            className="px-8 py-3 rounded-full bg-charcoal text-offwhite font-medium hover:bg-charcoal/80 hover:text-brightwhite transition-colors duration-300"
          >
            Next
          </button>
        ) : (
          <div className="w-[110px]" /> /* Spacer to keep dots centered */
        )}
      </div>
      
      {isLast && (
        <p className="mt-8 mb-4 text-center text-offwhite/40 italic">
          Come back whenever you need to. We&apos;re still with you.
        </p>
      )}
    </div>
  );
}
