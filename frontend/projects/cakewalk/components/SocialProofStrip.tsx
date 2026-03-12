"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  { value: "100+", label: "Websites Optimized" },
  { value: "2–4 Week", label: "Results Timeline" },
  { value: "6", label: "AI Platforms Tracked" },
];

export const SocialProofStrip = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section ref={ref} className="relative py-6" style={{ borderTop: '1px solid hsl(195 100% 50% / 0.1)', borderBottom: '1px solid hsl(195 100% 50% / 0.1)' }}>
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex items-center gap-3"
            >
              <span className="text-2xl md:text-3xl font-bold gradient-text">{stat.value}</span>
              <span className="text-sm text-muted-foreground">{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
