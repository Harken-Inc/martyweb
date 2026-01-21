"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Target,
  TrendingUp,
  Users,
  FileSearch,
  BarChart3,
  Zap,
  RefreshCw,
  Shield,
} from "lucide-react";

const capabilities = [
  { icon: FileSearch, label: "Gap Analysis" },
  { icon: TrendingUp, label: "Keyword Rankings" },
  { icon: Users, label: "Competitor Research" },
  { icon: Target, label: "Topic Clustering" },
  { icon: BarChart3, label: "Performance Tracking" },
  { icon: RefreshCw, label: "Auto-Optimization" },
  { icon: Shield, label: "Brand Monitoring" },
  { icon: Zap, label: "Real-Time Insights" },
];

export const CapabilitiesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 md:py-32 relative overflow-hidden">
      {/* Background gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, hsl(195 100% 50% / 0.05), transparent 70%)",
        }}
      />

      <div className="container mx-auto px-4 relative">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Zap className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">
                Industry First
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-foreground">The First </span>
              <span className="gradient-text">Self-Learning</span>
              <span className="text-foreground">, </span>
              <span className="gradient-text">Self-Optimizing</span>
              <br />
              <span className="text-foreground">AEO & SEO Platform</span>
            </h2>

            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Imagine an army of expert SEO/AEO agents constantly working to
              improve traffic to your site.
            </p>
          </motion.div>

          {/* Capabilities Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {capabilities.map((capability, index) => (
              <motion.div
                key={capability.label}
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="flex items-center gap-3"
              >
                <capability.icon className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-sm text-muted-foreground">
                  {capability.label}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Bottom tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center mt-12 text-muted-foreground"
          >
            All working together.{" "}
            <span className="text-primary font-medium">All automated.</span>{" "}
            All getting smarter.
          </motion.p>
        </div>
      </div>
    </section>
  );
};
