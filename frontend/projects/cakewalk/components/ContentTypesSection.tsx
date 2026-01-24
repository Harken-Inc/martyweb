"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  FileText,
  Link2,
  Video,
  Network,
  BookOpen,
  HelpCircle,
  BarChart3,
  ListOrdered,
  Users,
  Layers,
  ArrowRight,
  ExternalLink,
  Clock,
} from "lucide-react";

const contentTypes = [
  {
    icon: BookOpen,
    title: "In-Depth Guides",
    description: "Comprehensive long-form content that AI models love to cite as authoritative sources.",
  },
  {
    icon: HelpCircle,
    title: "Q&A / FAQ Content",
    description: "Directly matches how users query AI—structured answers that get recommended.",
  },
  {
    icon: BarChart3,
    title: "Comparison Articles",
    description: "\"A vs B\" content that AI frequently references when users ask for recommendations.",
  },
  {
    icon: ListOrdered,
    title: "Ranked Listicles",
    description: "\"Top 10\" and \"Best of\" content with clear structure AI can easily parse and cite.",
  },
  {
    icon: FileText,
    title: "How-To Tutorials",
    description: "Step-by-step guides that answer specific questions with actionable instructions.",
  },
  {
    icon: Users,
    title: "Expert Roundups",
    description: "Curated perspectives and insights that establish topical authority.",
  },
];

const contentFeatures = [
  {
    icon: ExternalLink,
    title: "Thoroughly Researched",
    subtitle: "With External Citations",
    description:
      "Every article includes verified external links to authoritative sources—academic papers, industry reports, and trusted publications. This signals credibility to AI models.",
    highlight: "50+ sources evaluated per article",
  },
  {
    icon: Video,
    title: "Rich Media Integration",
    subtitle: "Embedded Videos & Visuals",
    description:
      "Content enhanced with relevant YouTube embeds, custom graphics, and structured data. Multi-format content increases engagement and time on page.",
    highlight: "2-3x longer session duration",
  },
  {
    icon: Network,
    title: "Pillar-Cluster Architecture",
    subtitle: "Strategic Internal Linking",
    description:
      "Comprehensive pillar pages surrounded by supporting cluster articles. This hub-and-spoke model builds topical authority and keeps visitors exploring your site.",
    highlight: "40% higher time on site",
  },
];

export const ContentTypesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 md:py-32 relative overflow-hidden">
      {/* Background gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 70% 50%, hsl(260 80% 50% / 0.08), transparent 60%)",
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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 mb-6">
              <Layers className="w-4 h-4 text-violet-400" />
              <span className="text-sm font-medium text-violet-400">
                Content Architecture
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-foreground">What Type of Content</span>
              <br />
              <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
                Gets Generated
              </span>
            </h2>

            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Not just articles—complete content ecosystems designed to dominate AI recommendations
              and keep visitors engaged.
            </p>
          </motion.div>

          {/* Content Types Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-20"
          >
            <h3 className="text-xl font-semibold text-center mb-8 text-foreground">
              Content Formats That AI Models Prefer
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {contentTypes.map((type, index) => (
                <motion.div
                  key={type.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
                  className="p-5 rounded-xl border border-white/5 backdrop-blur-sm hover:border-violet-500/30 transition-colors"
                  style={{ backgroundColor: "hsl(220 20% 6% / 0.4)" }}
                >
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-violet-500/10 border border-violet-500/20">
                      <type.icon className="w-4 h-4 text-violet-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">
                        {type.title}
                      </h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {type.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Key Features - Larger Cards */}
          <div className="space-y-6">
            {contentFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.15 }}
                className="glass-card p-6 md:p-8 rounded-2xl border border-white/5"
                style={{ backgroundColor: "hsl(220 20% 6% / 0.6)" }}
              >
                <div className="flex flex-col md:flex-row md:items-center gap-6">
                  <div className="flex-shrink-0">
                    <div className="p-4 rounded-xl bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20 border border-violet-500/30">
                      <feature.icon className="w-8 h-8 text-violet-400" />
                    </div>
                  </div>
                  <div className="flex-grow">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                      <div>
                        <h3 className="text-xl font-bold text-foreground">
                          {feature.title}
                        </h3>
                        <p className="text-violet-400 text-sm font-medium">
                          {feature.subtitle}
                        </p>
                      </div>
                      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20">
                        <Clock className="w-3 h-3 text-violet-400" />
                        <span className="text-xs font-medium text-violet-300">
                          {feature.highlight}
                        </span>
                      </div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Pillar-Cluster Visual */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="mt-16 text-center"
          >
            <div
              className="inline-block p-8 rounded-2xl border border-white/5"
              style={{ backgroundColor: "hsl(220 20% 6% / 0.4)" }}
            >
              <h4 className="text-lg font-semibold text-foreground mb-6">
                How Pillar-Cluster Architecture Works
              </h4>
              <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
                <div className="flex flex-col items-center gap-2">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center">
                    <BookOpen className="w-8 h-8 text-white" />
                  </div>
                  <span className="text-sm font-medium text-foreground">Pillar Page</span>
                  <span className="text-xs text-muted-foreground">Comprehensive Guide</span>
                </div>

                <div className="flex flex-col gap-2 md:flex-row md:gap-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="flex items-center gap-2">
                      <ArrowRight className="w-4 h-4 text-violet-400 hidden md:block" />
                      <div className="flex flex-col items-center gap-1">
                        <div className="w-12 h-12 rounded-full bg-violet-500/20 border border-violet-500/30 flex items-center justify-center">
                          <Link2 className="w-5 h-5 text-violet-400" />
                        </div>
                        <span className="text-xs text-muted-foreground">Cluster {i}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <p className="text-sm text-muted-foreground mt-6 max-w-md mx-auto">
                Cluster articles link back to the pillar, building topical authority and creating natural pathways for visitors to explore.
              </p>
            </div>
          </motion.div>

          {/* Bottom Note */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 1.1 }}
            className="text-center mt-12"
          >
            <p className="text-muted-foreground">
              Every content piece is{" "}
              <span className="text-violet-400 font-medium">
                strategically interconnected
              </span>
              —not just published and forgotten.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
