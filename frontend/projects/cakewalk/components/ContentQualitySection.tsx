"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  BookOpen,
  ShieldCheck,
  Search,
  CheckCircle2,
  Brain,
  FileCheck,
  AlertTriangle,
  Layers,
} from "lucide-react";

const qualityFeatures = [
  {
    icon: Search,
    title: "Deep Research Pipeline",
    description:
      "Every article begins with automated multi-source research across academic papers, industry reports, and authoritative sites.",
  },
  {
    icon: ShieldCheck,
    title: "Anti-Hallucination Engine",
    description:
      "Proprietary verification layer cross-references every claim against source material. Unsupported statements are flagged and removed.",
  },
  {
    icon: FileCheck,
    title: "Fact Verification System",
    description:
      "Multi-pass fact-checking validates statistics, dates, names, and claims before any content goes live.",
  },
  {
    icon: Brain,
    title: "Source Authority Scoring",
    description:
      "Our system evaluates and ranks sources by domain authority, recency, and credibility—prioritizing only the best.",
  },
];

const comparisonPoints = [
  {
    metric: "Research depth",
    human: "Thorough but time-intensive",
    cakewalk: "100+ sources, automated",
  },
  {
    metric: "Fact accuracy",
    human: "High with careful review",
    cakewalk: "Triple-verified systematically",
  },
  {
    metric: "Consistency",
    human: "Depends on the writer",
    cakewalk: "Reliably consistent",
  },
  {
    metric: "Scalability",
    human: "Limited by capacity",
    cakewalk: "Unlimited volume",
  },
  {
    metric: "Speed",
    human: "Days per article",
    cakewalk: "Minutes per article",
  },
];

export const ContentQualitySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 md:py-32 relative overflow-hidden">
      {/* Background gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 30% 50%, hsl(145 80% 40% / 0.08), transparent 60%)",
        }}
      />

      <div className="container mx-auto px-4 relative">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span className="text-sm font-medium text-emerald-400">
                Research-Grade Content
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-foreground">Content Quality That</span>
              <br />
              <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                Matches Expert Writers
              </span>
            </h2>

            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Automated doesn't mean lower quality. Our research and verification systems
              produce content that meets the same standards as experienced human writers—at scale.
            </p>
          </motion.div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-20">
            {qualityFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card p-6 rounded-xl border border-white/5 backdrop-blur-sm"
                style={{ backgroundColor: "hsl(220 20% 6% / 0.6)" }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
                    <feature.icon className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Verification Pipeline Visual */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-20"
          >
            <h3 className="text-xl font-semibold text-center mb-8 text-foreground">
              Every Piece of Content Goes Through
            </h3>
            <div className="flex flex-wrap justify-center items-center gap-3 md:gap-4">
              {[
                { icon: Search, label: "Research" },
                { icon: BookOpen, label: "Source Validation" },
                { icon: Brain, label: "AI Analysis" },
                { icon: AlertTriangle, label: "Hallucination Check" },
                { icon: FileCheck, label: "Fact Verification" },
                { icon: CheckCircle2, label: "Final QA" },
              ].map((step, index) => (
                <div key={step.label} className="flex items-center gap-3 md:gap-4">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10"
                  >
                    <step.icon className="w-4 h-4 text-primary" />
                    <span className="text-sm text-muted-foreground whitespace-nowrap">
                      {step.label}
                    </span>
                  </motion.div>
                  {index < 5 && (
                    <span className="text-primary/40 hidden md:block">→</span>
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Comparison Table */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="glass-card rounded-xl border border-white/5 overflow-hidden"
            style={{ backgroundColor: "hsl(220 20% 6% / 0.6)" }}
          >
            <div className="p-6 border-b border-white/5">
              <h3 className="text-xl font-semibold text-foreground text-center">
                Same Quality, Different Approach
              </h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/5">
                    <th className="px-6 py-4 text-left text-sm font-medium text-muted-foreground">
                      Metric
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-muted-foreground">
                      Human Writers
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-emerald-400">
                      Cakewalk
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonPoints.map((row, index) => (
                    <motion.tr
                      key={row.metric}
                      initial={{ opacity: 0, x: -10 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4, delay: 0.7 + index * 0.05 }}
                      className="border-b border-white/5 last:border-0"
                    >
                      <td className="px-6 py-4 text-sm font-medium text-foreground">
                        {row.metric}
                      </td>
                      <td className="px-6 py-4 text-sm text-muted-foreground">
                        {row.human}
                      </td>
                      <td className="px-6 py-4 text-sm text-emerald-400 font-medium">
                        {row.cakewalk}
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* Bottom Quote */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 1 }}
            className="text-center mt-12"
          >
            <p className="text-muted-foreground italic">
              "Expert-level research and verification—{" "}
              <span className="text-emerald-400 font-medium not-italic">
                automated
              </span>
              ."
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
