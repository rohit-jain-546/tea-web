"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { testimonials } from "@/data/products";

export function TestimonialCarousel() {
  const items = useMemo(() => testimonials, []);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((prev) => (prev + 1) % items.length);
    }, 5200);
    return () => window.clearInterval(id);
  }, [items.length]);

  const active = items[index];

  return (
    <section id="voices" className="section-space">
      <div className="section-shell">
        <p className="mb-4 text-xs tracking-[0.18em] text-gold">
          SOCIAL PROOF
        </p>
        <div className="rounded-[2rem] border border-line/70 bg-white/80 p-10 sm:p-14">
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={active.author}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.9, ease: "easeInOut" }}
              className="space-y-6"
            >
              <p className="font-serif text-[clamp(1.5rem,3vw,2.4rem)] leading-relaxed text-ink">
                &ldquo;{active.quote}&rdquo;
              </p>
              <footer>
                <p className="text-sm tracking-[0.14em] text-forest">{active.author}</p>
                <p className="mt-1 text-xs tracking-[0.14em] text-muted">{active.role}</p>
              </footer>
            </motion.blockquote>
          </AnimatePresence>

          <div className="mt-10 flex gap-3">
            {items.map((item, dotIndex) => (
              <button
                key={item.author}
                type="button"
                aria-label={`Show testimonial ${dotIndex + 1}`}
                onClick={() => setIndex(dotIndex)}
                className={`h-2.5 rounded-full transition-all duration-500 ${
                  dotIndex === index ? "w-10 bg-forest" : "w-2.5 bg-line"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
