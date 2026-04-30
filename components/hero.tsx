"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { featuredTea } from "@/data/products";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 110,
    damping: 24,
    mass: 0.55,
  });

  const imageY = useTransform(smoothProgress, [0, 1], [0, -90]);
  const bgY = useTransform(smoothProgress, [0, 1], [0, -60]);
  const bgScale = useTransform(smoothProgress, [0, 1], [1, 1.07]);

  return (
    <section
      ref={ref}
      className="relative flex min-h-screen items-center overflow-hidden pt-24"
    >
      <motion.div
        style={{ y: bgY, scale: bgScale }}
        className="leaf-pattern absolute inset-0"
      />

      <div className="section-shell relative grid items-center gap-14 lg:grid-cols-[1.618fr_1fr]">
        <motion.div
          initial={{ opacity: 0, y: 48 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="max-w-2xl"
        >
          <p className="mb-6 text-xs tracking-[0.22em] text-gold">
            A PRIVATE TEA HOUSE EXPERIENCE
          </p>
          <h1 className="font-serif text-[clamp(2.65rem,7.8vw,6rem)] leading-[1.03] text-ink">
            Tea, Refined to Its Purest Form
          </h1>
          <p className="mt-8 max-w-lg text-lg leading-relaxed text-muted">
            We source micro-harvest leaves from storied estates and shape each
            blend around stillness, precision, and ritual.
          </p>
          <div className="mt-12 flex items-center gap-5">
            <Link
              href="#collection"
              className="rounded-full bg-forest px-8 py-4 text-xs tracking-[0.15em] text-cream transition-all duration-500 hover:bg-[#244e3d] hover:shadow-[0_16px_35px_rgba(27,67,50,0.25)]"
            >
              EXPLORE COLLECTION
            </Link>
            <span className="text-xs tracking-[0.15em] text-muted">
              {featuredTea.origin}
            </span>
          </div>
        </motion.div>

        <motion.div
          style={{ y: imageY }}
          initial={{ opacity: 0, y: 52 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.2, ease: "easeInOut" }}
          className="relative mx-auto w-full max-w-[430px]"
        >
          <div className="absolute -left-8 top-3 h-28 w-28 rounded-full bg-gold/20 blur-2xl" />
          <div className="absolute -right-12 bottom-2 h-32 w-32 rounded-full bg-forest/20 blur-2xl" />
          <div className="relative">
            <span className="steam absolute right-[4.5rem] top-6 h-20 w-6 rounded-full bg-gradient-to-t from-transparent via-white/70 to-transparent blur-sm" />
            <span className="steam absolute right-[6.3rem] top-5 h-16 w-5 rounded-full bg-gradient-to-t from-transparent via-white/60 to-transparent blur-sm [animation-delay:1.2s]" />
            <Image
              src={featuredTea.image}
              alt={featuredTea.name}
              width={960}
              height={960}
              priority
              className="drift drop-shadow-[0_45px_55px_rgba(17,17,17,0.2)]"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
