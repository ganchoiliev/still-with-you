import Link from "next/link";

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
        
        <div className="mt-8 pt-6 border-t border-charcoal/30 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-xs text-offwhite/40">
          <Link href="/privacy-policy" className="hover:text-offwhite/80 transition-colors">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-offwhite/80 transition-colors">Terms of Service</Link>
          <span className="hidden sm:inline opacity-30">|</span>
          <p>&copy; {new Date().getFullYear()} Still With You</p>
        </div>
      </div>
    </footer>
  );
}
