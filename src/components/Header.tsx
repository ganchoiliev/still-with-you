import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";

export function Header() {
  return (
    <header className="w-full pt-8 pb-4 md:pt-12 md:pb-8 flex justify-center relative z-50">
      <div className="w-full max-w-screen-sm px-6 flex items-center justify-between">
        <Link 
          href="/" 
          className="inline-flex items-center min-h-[44px] text-xl font-medium text-offwhite hover:text-brightwhite transition-colors tracking-wide opacity-80 hover:opacity-100"
        >
          Still With You
        </Link>
        <ThemeToggle />
      </div>
    </header>
  );
}
