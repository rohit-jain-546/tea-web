import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-line/80 py-10">
      <div className="section-shell flex flex-col gap-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <p className="tracking-[0.08em]">AURELIA TEA HOUSE</p>
        <div className="flex items-center gap-7 text-xs tracking-[0.15em]">
          <Link href="#" className="transition-colors duration-500 hover:text-forest">
            JOURNAL
          </Link>
          <Link href="#" className="transition-colors duration-500 hover:text-forest">
            SOURCING
          </Link>
          <Link href="#" className="transition-colors duration-500 hover:text-forest">
            CONTACT
          </Link>
        </div>
      </div>
    </footer>
  );
}
