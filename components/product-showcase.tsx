import type { TeaProduct } from "@/data/products";
import { ProductCard } from "./product-card";

type ProductShowcaseProps = {
  products: TeaProduct[];
};

export function ProductShowcase({ products }: ProductShowcaseProps) {
  return (
    <section id="collection" className="section-space">
      <div className="section-shell">
        <p className="mb-4 text-xs tracking-[0.18em] text-gold">COLLECTION</p>
        <div className="mb-6 divider-line" />
        <h2 className="max-w-2xl font-serif text-[clamp(2.2rem,5vw,4.2rem)] leading-tight text-ink">
          Curated leaves for modern rituals
        </h2>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted">
          A balanced edit of rare greens, expressive blacks, and luminous
          oolongs selected for clarity, structure, and elegance in the cup.
        </p>

        <div className="mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
