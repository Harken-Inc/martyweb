"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Search,
  Target,
  TrendingUp,
  Users,
  FileSearch,
  BarChart3,
  Layers,
  Compass,
  Zap,
  Globe,
  BookOpen,
  Link2,
  PieChart,
  Lightbulb,
  RefreshCw,
  Shield,
} from "lucide-react";

const capabilities = [
  { icon: FileSearch, label: "Gap Analysis" },
  { icon: TrendingUp, label: "Keyword Rankings" },
  { icon: Users, label: "Competitor Research" },
  { icon: Layers, label: "Authority Pillars" },
  { icon: Target, label: "Topic Clustering" },
  { icon: Compass, label: "Content Strategy" },
  { icon: Search, label: "SERP Analysis" },
  { icon: BarChart3, label: "Performance Tracking" },
  { icon: Link2, label: "Backlink Monitoring" },
  { icon: BookOpen, label: "Content Optimization" },
  { icon: Globe, label: "Multi-Platform Reach" },
  { icon: PieChart, label: "Traffic Analytics" },
  { icon: Lightbulb, label: "Opportunity Detection" },
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
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {capabilities.map((capability, index) => (
              <motion.div
                key={capability.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group"
              >
                <div className="glass-card rounded-xl p-4 h-full border border-border/50 hover:border-primary/40 transition-all duration-300 hover:glow-box flex flex-col items-center text-center gap-3">
                  <div className="relative">
                    <div className="absolute inset-0 bg-primary/20 blur-lg rounded-full scale-150 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="relative w-10 h-10 rounded-lg bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center">
                      <capability.icon className="w-5 h-5 text-primary" />
                    </div>
                  </div>
                  <span className="text-sm font-medium text-foreground">
                    {capability.label}
                  </span>
                </div>
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
