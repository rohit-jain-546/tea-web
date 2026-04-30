"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

const phases = [
  {
    title: "Leaf Selection",
    text: "Tender spring leaves are selected by hand for clarity and sweetness.",
    tone: "from-forest/20 to-transparent",
  },
  {
    title: "Brewing Precision",
    text: "Temperature, time, and vessel come together in quiet intention.",
    tone: "from-gold/25 to-transparent",
  },
  {
    title: "Final Cup",
    text: "A layered cup with depth, aroma, and a calm lingering finish.",
    tone: "from-forest/10 to-transparent",
  },
];

export function ScrollStory() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 110,
    damping: 24,
    mass: 0.5,
  });

  const leafScale = useTransform(smoothProgress, [0, 0.35], [1, 1.15]);
  const brewScale = useTransform(smoothProgress, [0.28, 0.68], [0.92, 1.08]);
  const cupScale = useTransform(smoothProgress, [0.62, 1], [0.9, 1.08]);

  const leafOpacity = useTransform(smoothProgress, [0, 0.24, 0.4], [1, 1, 0]);
  const brewOpacity = useTransform(
    smoothProgress,
    [0.24, 0.42, 0.64, 0.78],
    [0, 1, 1, 0],
  );
  const cupOpacity = useTransform(smoothProgress, [0.66, 0.84, 1], [0, 1, 1]);

  const leafY = useTransform(smoothProgress, [0, 0.4], [0, -12]);
  const brewY = useTransform(smoothProgress, [0.24, 0.78], [14, -10]);
  const cupY = useTransform(smoothProgress, [0.62, 1], [18, -8]);

  return (
    <section ref={ref} className="section-space">
      <div className="section-shell">
        <p className="mb-4 text-xs tracking-[0.18em] text-gold">SCROLL STORY</p>
        <div className="divider-line mb-8" />
      </div>

      <div className="section-shell grid min-h-[210vh] lg:grid-cols-[1.08fr_1fr] lg:gap-12">
        <div className="col-start-1 row-start-1 w-full lg:relative lg:h-full">
          <div className="sticky top-24 z-0 h-[45vh] w-full rounded-[2.2rem] border border-line/75 bg-white/55 p-8 lg:h-[68vh] lg:z-auto">
            <div className="absolute inset-0 rounded-[2.2rem] bg-gradient-to-b from-white/90 to-[#fdfbf7]/70" />

            <motion.div
              style={{ opacity: leafOpacity, scale: leafScale, y: leafY }}
              className="absolute inset-0 grid place-items-center"
            >
              <img
                src="/images/tea-leaves-realistic.png"
                alt="Tea Leaves"
                className="h-32 w-32 lg:h-48 lg:w-48 rounded-full object-cover shadow-[0_28px_42px_rgba(27,67,50,0.3)]"
              />
            </motion.div>

            <motion.div
              style={{ opacity: brewOpacity, scale: brewScale, y: brewY }}
              className="absolute inset-0 grid place-items-center"
            >
              <img
                src="/images/brewing-realistic.png"
                alt="Brewing Tea"
                className="h-40 w-40 lg:h-56 lg:w-56 rounded-full object-cover shadow-[0_28px_42px_rgba(27,67,50,0.3)]"
              />
            </motion.div>

            <motion.div
              style={{ opacity: cupOpacity, scale: cupScale, y: cupY }}
              className="absolute inset-0 grid place-items-center"
            >
              <img
                src="/images/teacup-realistic.png"
                alt="Tea Cup"
                className="h-36 w-36 lg:h-52 lg:w-52 rounded-full object-cover shadow-[0_28px_42px_rgba(27,67,50,0.3)]"
              />
            </motion.div>
          </div>
        </div>

        <div className="col-start-1 row-start-1 mt-[50vh] space-y-8 py-6 relative z-10 lg:col-start-2 lg:mt-0 lg:pt-16">
          {phases.map((phase, index) => (
            <article
              key={phase.title}
              className={`rounded-3xl border border-line/70 bg-white/90 p-8 shadow-xl backdrop-blur-md transition-all duration-700 lg:min-h-[42vh] lg:bg-white/65 lg:shadow-none lg:backdrop-blur-none ${
                index === 1 ? "lg:translate-x-6" : ""
              }`}
            >
              <div
                className={`mb-5 h-24 w-full rounded-2xl bg-gradient-to-r ${phase.tone}`}
              />
              <h3 className="font-serif text-3xl text-ink">{phase.title}</h3>
              <p className="mt-3 leading-relaxed text-muted">{phase.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
