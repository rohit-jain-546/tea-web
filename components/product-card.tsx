"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { TeaProduct } from "@/data/products";

type ProductCardProps = {
  product: TeaProduct;
};

export function ProductCard({ product }: ProductCardProps) {
  return (
    <motion.article
      whileHover={{ y: -8, scale: 1.01 }}
      transition={{ duration: 0.7, ease: "easeInOut" }}
      className="group rounded-[2rem] border border-line/70 bg-white/80 p-7 shadow-[0_22px_50px_rgba(17,17,17,0.08)]"
    >
      <Link href={`/products/${product.slug}`} className="block">
        <div className="relative mb-6 overflow-hidden rounded-[1.6rem] bg-surface p-5">
          <motion.div
            whileHover={{ scale: 1.06 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <Image
              src={product.image}
              alt={product.name}
              width={700}
              height={700}
              className="mx-auto drop-shadow-[0_20px_35px_rgba(17,17,17,0.16)]"
            />
          </motion.div>
        </div>

        <p className="mb-3 text-xs tracking-[0.15em] text-gold">{product.origin}</p>
        <h3 className="font-serif text-3xl leading-tight text-ink">{product.name}</h3>
        <p className="mt-2 text-sm text-muted">{product.subtitle}</p>
        <p className="mt-4 leading-relaxed text-muted">{product.shortDescription}</p>

        <div className="mt-7 flex items-center justify-between border-t border-line/70 pt-5">
          <span className="font-serif text-2xl text-forest">{product.price}</span>
          <span className="text-xs tracking-[0.14em] text-ink transition-colors duration-500 group-hover:text-forest">
            VIEW DETAILS
          </span>
        </div>
      </Link>
    </motion.article>
  );
}
