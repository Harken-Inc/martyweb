import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export const ProblemStrip = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent" />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-4"
      >
        <p className="text-xl md:text-2xl lg:text-3xl text-center font-medium leading-relaxed max-w-4xl mx-auto">
          <span className="text-muted-foreground">SEO takes forever. AI search is exploding. You don't have time to figure out both. </span>
          <span className="text-primary font-semibold">Now you don't have to.</span>
        </p>
      </motion.div>
    </section>
  );
};
