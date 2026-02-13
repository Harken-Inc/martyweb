"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export const PricingSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="pricing"
      ref={ref}
      className="py-24 md:py-32 relative overflow-hidden"
    >
      {/* Background gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, hsl(195 100% 50% / 0.05), transparent 70%)",
        }}
      />

      <div className="container mx-auto px-4 relative">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">
                Limited Time Founding Member Pricing
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-foreground">Starting at just </span>
              <span className="gradient-text">$37/month</span>
            </h2>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
              Find out how visible your brand is to AI assistants—and what you can do to improve it.
            </p>

            <a
              href="https://cal.com/martin-wells-plxzqv"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                className="group text-lg px-8 py-6"
                variant="glow"
                size="lg"
              >
                See How AI Sees Your Brand
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </a>

            <p className="text-sm text-muted-foreground mt-6">
              Billed annually. Cancel anytime.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
