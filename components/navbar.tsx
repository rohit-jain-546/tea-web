"use client";

import Link from "next/link";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "#collection", label: "Collection" },
  { href: "#craft", label: "Craft" },
  { href: "#voices", label: "Voices" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line/50 bg-[#fdfbf7]/75 backdrop-blur-xl">
      <div className="section-shell flex h-20 items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-3 font-serif text-xl tracking-[0.08em] text-forest transition-opacity duration-500 hover:opacity-75 relative z-50"
          onClick={() => setIsOpen(false)}
        >
          <img src="/images/logo-realistic.png" alt="Aurelia Logo" className="h-10 w-10 rounded-full object-cover mix-blend-multiply" />
          AURELIA
        </Link>
        <nav className="hidden items-center gap-10 text-sm text-muted md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors duration-500 hover:text-forest"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <Link
            href={`/products/imperial-matcha-reserve`}
            className="hidden sm:inline-flex rounded-full border border-line bg-white/75 px-5 py-2 text-xs tracking-[0.09em] text-ink transition-all duration-500 hover:border-gold hover:text-forest relative z-50"
          >
            VIEW SIGNATURE
          </Link>
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden relative z-50 p-2 text-forest focus:outline-none"
            aria-label="Toggle menu"
          >
            <div className="flex flex-col gap-1.5 w-6">
              <span className={`h-[2px] w-full bg-current transition-all duration-300 ${isOpen ? "rotate-45 translate-y-[8px]" : ""}`} />
              <span className={`h-[2px] w-full bg-current transition-all duration-300 ${isOpen ? "opacity-0" : ""}`} />
              <span className={`h-[2px] w-full bg-current transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-[8px]" : ""}`} />
            </div>
          </button>
        </div>
      </div>
      
      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-[#fdfbf7] transition-all duration-500 md:hidden ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      >
        <div className="absolute inset-0 bg-[#fdfbf7]/80 backdrop-blur-2xl" />
        <nav className="relative flex h-full flex-col items-center justify-center gap-12 text-center">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`font-serif text-4xl text-ink transition-all duration-500 delay-100 hover:text-forest ${isOpen ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href={`/products/imperial-matcha-reserve`}
            onClick={() => setIsOpen(false)}
            className={`mt-8 rounded-full border border-forest bg-forest px-8 py-4 text-sm tracking-[0.1em] text-cream transition-all duration-500 delay-300 ${isOpen ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
          >
            VIEW SIGNATURE
          </Link>
        </nav>
      </div>
    </header>
  );
}
