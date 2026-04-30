import type { TeaProduct } from "@/data/products";
import { ProductCard } from "./product-card";

type RelatedProductsProps = {
  currentSlug: string;
  products: TeaProduct[];
};

export function RelatedProducts({ currentSlug, products }: RelatedProductsProps) {
  const related = products.filter((product) => product.slug !== currentSlug).slice(0, 3);

  return (
    <section className="section-space">
      <div className="section-shell">
        <p className="mb-4 text-xs tracking-[0.18em] text-gold">RELATED TEAS</p>
        <h2 className="font-serif text-[clamp(1.9rem,4vw,3.2rem)] text-ink">
          Continue your tasting journey
        </h2>
        <div className="mt-10 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {related.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
