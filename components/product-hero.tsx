"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { TeaProduct } from "@/data/products";

type ProductHeroProps = {
  product: TeaProduct;
};

export function ProductHero({ product }: ProductHeroProps) {
  return (
    <section className="pt-36">
      <div className="section-shell grid items-center gap-12 lg:grid-cols-[1fr_1fr]">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="relative rounded-[2rem] border border-line/70 bg-surface p-8"
        >
          <div className="absolute left-8 top-8 h-14 w-14 rounded-full bg-gold/25 blur-xl" />
          <Image
            src={product.image}
            alt={product.name}
            width={1000}
            height={1000}
            priority
            className="mx-auto drop-shadow-[0_25px_35px_rgba(17,17,17,0.2)]"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.12, ease: "easeInOut" }}
          className="space-y-6"
        >
          <p className="text-xs tracking-[0.18em] text-gold">{product.origin}</p>
          <h1 className="font-serif text-[clamp(2.3rem,4.6vw,4.2rem)] leading-tight text-ink">
            {product.name}
          </h1>
          <p className="text-lg leading-relaxed text-muted">{product.longDescription}</p>
          <div className="flex flex-wrap gap-2">
            {product.tones.map((tone) => (
              <span
                key={tone}
                className="rounded-full border border-line bg-white/85 px-4 py-1.5 text-xs tracking-[0.12em] text-muted"
              >
                {tone}
              </span>
            ))}
          </div>
          <div className="divider-line" />
          <p className="font-serif text-4xl text-forest">{product.price}</p>
          <button
            type="button"
            className="rounded-full bg-forest px-7 py-3 text-xs tracking-[0.15em] text-cream transition-all duration-500 hover:bg-[#244e3d]"
          >
            ADD TO RITUAL
          </button>
        </motion.div>
      </div>
    </section>
  );
}
