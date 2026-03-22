export function CrisisFooter() {
  return (
    <footer className="w-full border-t border-charcoal/50 bg-navy mt-auto py-8">
      <div className="max-w-screen-md mx-auto px-6 text-center">
        <p className="text-sm text-offwhite/50 leading-relaxed">
          If you&apos;re in crisis right now:{' '}
          <span className="block sm:inline mt-3 sm:mt-0 font-medium text-offwhite/70">
            <a href="tel:116123" className="hover:text-brightwhite transition-colors underline underline-offset-4 decoration-offwhite/20 hover:decoration-offwhite/50 p-2 sm:p-0">Samaritans 116 123</a>
            <span className="hidden sm:inline mx-3 opacity-30">|</span>
            <span className="block sm:inline mt-4 sm:mt-0">
              <a href="tel:111" className="hover:text-brightwhite transition-colors underline underline-offset-4 decoration-offwhite/20 hover:decoration-offwhite/50 p-2 sm:p-0">NHS 111</a> (option 2)
            </span>
            <span className="hidden sm:inline mx-3 opacity-30">|</span>
            <span className="block sm:inline mt-4 sm:mt-0">
              <a href="tel:999" className="hover:text-brightwhite transition-colors underline underline-offset-4 decoration-offwhite/20 hover:decoration-offwhite/50 p-2 sm:p-0">Emergency 999</a>
            </span>
          </span>
        </p>
      </div>
    </footer>
  );
}
