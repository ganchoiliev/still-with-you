import Link from "next/link";

export function Header() {
  return (
    <header className="w-full pt-8 pb-4 md:pt-12 md:pb-8 flex justify-center">
      <div className="w-full max-w-screen-sm px-6 text-center sm:text-left">
        <Link 
          href="/" 
          className="inline-block text-xl font-medium text-offwhite hover:text-brightwhite transition-colors tracking-wide opacity-80 hover:opacity-100"
        >
          Still With You
        </Link>
      </div>
    </header>
  );
}
