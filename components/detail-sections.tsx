"use client";

import { motion } from "framer-motion";
import type { TeaProduct } from "@/data/products";

type DetailSectionsProps = {
  product: TeaProduct;
};

export function DetailSections({ product }: DetailSectionsProps) {
  return (
    <section className="section-space">
      <div className="section-shell grid gap-8 lg:grid-cols-3">
        <motion.article
          initial={{ opacity: 0, y: 34 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: "easeInOut" }}
          className="rounded-[1.8rem] border border-line/70 bg-white/75 p-8"
        >
          <h3 className="font-serif text-3xl text-ink">Ingredients</h3>
          <ul className="mt-5 space-y-3 text-muted">
            {product.ingredients.map((ingredient) => (
              <li key={ingredient} className="leading-relaxed">
                {ingredient}
              </li>
            ))}
          </ul>
        </motion.article>

        <motion.article
          initial={{ opacity: 0, y: 34 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: "easeInOut", delay: 0.08 }}
          className="rounded-[1.8rem] border border-line/70 bg-white/75 p-8"
        >
          <h3 className="font-serif text-3xl text-ink">Brewing Guide</h3>
          <ol className="mt-5 space-y-4 text-muted">
            {product.brewingGuide.map((step) => (
              <li key={step.title} className="leading-relaxed">
                <p className="text-sm tracking-[0.12em] text-gold">{step.title}</p>
                <p className="mt-1">{step.description}</p>
              </li>
            ))}
          </ol>
        </motion.article>

        <motion.article
          initial={{ opacity: 0, y: 34 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: "easeInOut", delay: 0.16 }}
          className="rounded-[1.8rem] border border-line/70 bg-white/75 p-8"
        >
          <h3 className="font-serif text-3xl text-ink">Origin Story</h3>
          <p className="mt-5 leading-relaxed text-muted">{product.longDescription}</p>
          <p className="mt-5 text-sm tracking-[0.14em] text-forest">{product.origin}</p>
        </motion.article>
      </div>
    </section>
  );
}
