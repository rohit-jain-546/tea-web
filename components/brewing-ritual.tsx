"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const steps = [
  {
    label: "Water",
    description: "Pure water at the ideal temperature builds clarity in the cup.",
    liquid: "from-[#dce4e2] via-[#edf1ef] to-white",
  },
  {
    label: "Leaves",
    description: "Whole leaves unfurl slowly, releasing layered aroma and body.",
    liquid: "from-[#8ba188] via-[#a8b59f] to-[#d8decf]",
  },
  {
    label: "Infusion",
    description: "Color deepens into a balanced brew with lasting complexity.",
    liquid: "from-[#ad7d48] via-[#bf955c] to-[#dfc38e]",
  },
];

export function BrewingRitual() {
  const [activeStep, setActiveStep] = useState(0);
  const active = steps[activeStep];

  return (
    <section className="section-space">
      <div className="section-shell rounded-[2rem] border border-line/75 bg-white/75 p-8 sm:p-12">
        <p className="text-xs tracking-[0.18em] text-gold">INTERACTIVE BREWING</p>
        <h2 className="mt-4 font-serif text-[clamp(2rem,4.5vw,3.4rem)] text-ink">
          Watch the cup transform
        </h2>
        <p className="mt-4 max-w-2xl text-muted">{active.description}</p>

        <div className="mt-10 grid items-center gap-8 lg:grid-cols-[1fr_1.2fr]">
          <div className="flex flex-wrap justify-center gap-3 lg:justify-start">
            {steps.map((step, index) => (
              <button
                key={step.label}
                type="button"
                onClick={() => setActiveStep(index)}
                className={`rounded-full border px-5 py-2 text-xs tracking-[0.13em] transition-all duration-500 ${
                  activeStep === index
                    ? "border-forest bg-forest text-cream"
                    : "border-line bg-white text-muted hover:border-gold hover:text-ink"
                }`}
              >
                {step.label}
              </button>
            ))}
          </div>

          <div className="relative mx-auto h-72 w-full max-w-sm flex items-center justify-center">
             <motion.img
                key={activeStep}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: "easeInOut" }}
                src={activeStep === 0 ? "/images/brewing-realistic.png" : activeStep === 1 ? "/images/tea-leaves-realistic.png" : "/images/teacup-realistic.png"}
                alt={active.label}
                className="h-64 w-64 rounded-full object-cover shadow-2xl"
             />
          </div>
        </div>
      </div>
    </section>
  );
}
