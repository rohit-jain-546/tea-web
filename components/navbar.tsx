import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "#collection", label: "Collection" },
  { href: "#craft", label: "Craft" },
  { href: "#voices", label: "Voices" },
];

export function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line/50 bg-bg/75 backdrop-blur-xl">
      <div className="section-shell flex h-20 items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-3 font-serif text-xl tracking-[0.08em] text-forest transition-opacity duration-500 hover:opacity-75"
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
        <Link
          href={`/products/imperial-matcha-reserve`}
          className="rounded-full border border-line bg-white/75 px-5 py-2 text-xs tracking-[0.09em] text-ink transition-all duration-500 hover:border-gold hover:text-forest"
        >
          VIEW SIGNATURE
        </Link>
      </div>
    </header>
  );
}
