"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Search, MessageSquare, ArrowRight, Globe } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    label: "People ask AI",
    description: "Millions now use ChatGPT, Perplexity, and Google AI Mode instead of traditional search.",
  },
  {
    icon: Search,
    label: "AI finds answers",
    description: "AI reads websites, evaluates quality, and picks the best sources to answer questions.",
  },
  {
    icon: Globe,
    label: "Your site gets cited",
    description: "When AI cites your content, it sends high-intent traffic directly to you—a new channel most businesses aren't using yet.",
  },
];

export const ShiftExplainerSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 md:py-28 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-foreground">Search Has Changed.</span>
            <br />
            <span className="gradient-text">Your Strategy Should Too.</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            People don't just Google things anymore. They ask AI—and AI decides which websites to recommend. This is the new SEO.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={step.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.15 }}
              className="relative text-center"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 mb-4">
                <step.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{step.label}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>

              {index < 2 && (
                <ArrowRight className="hidden md:block absolute top-8 -right-3 w-5 h-5 text-primary/30" />
              )}
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-center mt-10 text-muted-foreground"
        >
          This is called <span className="text-primary font-medium">AI search optimization</span>—and Cakewalk does it for you, automatically.
        </motion.p>
      </div>
    </section>
  );
};
