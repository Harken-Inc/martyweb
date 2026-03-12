import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Sparkles } from "lucide-react";
import { CTAButton } from "./CTAButton";

export const CTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 md:py-32 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-transparent" />
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary/5 blur-3xl"
        animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-8"
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Start growing today</span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-foreground">Traffic That Grows</span>
            <br />
            <span className="gradient-text glow-text">While You Sleep.</span>
          </h2>

          <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
            The shift to AI search is happening now. Early movers will own their categories.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="flex flex-col items-center gap-4"
          >
            <p className="text-sm font-medium text-primary">
              Founding member pricing ends soon — only a few spots left
            </p>
            <CTAButton className="text-lg px-8 py-6" />
            <p className="text-sm text-muted-foreground">
              Free 7-day trial. No credit card required.
            </p>
            <a href="/pricing" className="text-sm text-primary hover:text-primary/80 transition-colors">
              Or explore our pricing →
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
