"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { featuredTea } from "@/data/products";

export function PremiumExperience() {
  return (
    <section id="craft" className="section-space">
      <div className="section-shell">
        <div className="mb-8 divider-line" />
        <div className="grid items-center gap-14 lg:grid-cols-[1.618fr_1fr]">
          <motion.div
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15% 0px -15% 0px" }}
            transition={{ duration: 0.9, ease: "easeInOut" }}
            className="rounded-[2.2rem] border border-line/70 bg-white/75 p-10"
          >
            <p className="text-xs tracking-[0.18em] text-gold">ORIGIN & CRAFT</p>
            <h2 className="mt-6 font-serif text-[clamp(2rem,4.2vw,3.5rem)] leading-tight text-ink">
              Crafted where altitude, climate, and patience meet
            </h2>
            <p className="mt-7 max-w-xl leading-relaxed text-muted">
              Our tea partners use traditional hand-finishing, selective
              withering, and low-intervention processing to preserve each
              garden&apos;s unique character. The result is tea with precision,
              depth, and grace.
            </p>
            <div className="my-8 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent" />
            <p className="text-sm leading-relaxed text-muted">
              Every lot is tasted and profiled in-house before release to ensure
              consistency, aromatic clarity, and a distinctly premium experience.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 48 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15% 0px -15% 0px" }}
            transition={{ duration: 1, ease: "easeInOut", delay: 0.08 }}
            className="relative rounded-[2rem] border border-line/70 bg-surface p-8"
          >
            <div className="absolute right-8 top-8 h-16 w-16 rounded-full border border-gold/60" />
            <Image
              src={featuredTea.image}
              alt="Tea craft visual"
              width={760}
              height={760}
              className="mx-auto drop-shadow-[0_24px_30px_rgba(17,17,17,0.16)]"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
