import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  TrendingUp, 
  Search, 
  Link2, 
  MessageSquare, 
  GitBranch, 
  Trophy,
  FileText,
  BarChart3,
  RefreshCw
} from "lucide-react";

const features = [
  {
    icon: TrendingUp,
    title: "Keyword Gap Analysis",
    description: "Find untapped keyword opportunities your competitors are missing"
  },
  {
    icon: Search,
    title: "Competitor Detection",
    description: "Track and outmaneuver your competition automatically"
  },
  {
    icon: Link2,
    title: "Backlink Tracking",
    description: "Monitor and build authority-boosting backlinks"
  },
  {
    icon: MessageSquare,
    title: "AI Search Mention Rates",
    description: "Track how often AI platforms cite your content"
  },
  {
    icon: GitBranch,
    title: "Fan Out Queries",
    description: "Discover related queries to dominate your niche"
  },
  {
    icon: Trophy,
    title: "Winning Content Styles",
    description: "Learn what formats get cited and ranked"
  },
  {
    icon: FileText,
    title: "Smart Content Types",
    description: "Articles, guides, FAQs, comparisons—automatically matched to intent"
  },
  {
    icon: BarChart3,
    title: "Analytics Integration",
    description: "Track content performance with real-time insights and metrics"
  },
  {
    icon: RefreshCw,
    title: "Auto-Refresh & Optimize",
    description: "Continuous updates keep your content fresh and competitive"
  },
];

export const AutomatedAgentSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, hsl(220 20% 4%), hsl(195 100% 50% / 0.05), hsl(220 20% 4%))' }} />
      <div className="absolute inset-0 grid-pattern opacity-30" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Problem statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <p className="text-xs uppercase tracking-widest text-primary mb-4 font-mono">
            The Problem
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6">
            <span className="text-muted-foreground">SEO takes months. AEO is complex.</span>{" "}
            <span className="gradient-text">Both require expensive consultants.</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            Cakewalk is a fully automated, self-learning agent that creates{" "}
            <span className="text-foreground font-medium">high-intent</span>,{" "}
            <span className="text-foreground font-medium">highly-cited</span>, and{" "}
            <span className="text-foreground font-medium">keyword-optimized</span> traffic—without the overhead.
          </p>
        </motion.div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="glass-card p-5 h-full rounded-xl border border-primary/10 hover:border-primary/30 transition-all duration-300 hover:bg-primary/5">
                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <div className="flex-shrink-0 p-2.5 rounded-lg bg-primary/10 border border-primary/20 group-hover:bg-primary/20 transition-colors duration-300">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  
                  {/* Content */}
                  <div>
                    <h3 className="text-sm font-semibold text-foreground mb-1 group-hover:text-primary transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom accent */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"
        />
      </div>
    </section>
  );
};
