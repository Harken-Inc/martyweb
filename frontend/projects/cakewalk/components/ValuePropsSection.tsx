import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Bot, Sparkles, Brain } from "lucide-react";

const valueProps = [
  {
    icon: Bot,
    title: "Fully Automated",
    description: "No briefs. No writers. No waiting. The system researches, creates, publishes, tracks, and optimizes—24/7.",
  },
  {
    icon: Sparkles,
    title: "AI-First Optimization",
    description: "Built for the new search landscape. Get cited by AI where competition is low and results are fast. Google rankings included.",
  },
  {
    icon: Brain,
    title: "Self-Learning",
    description: "Tracks its own results. Improves automatically. Every piece of content gets smarter over time.",
  },
];

export const ValuePropsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 md:py-32 relative">
      <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, transparent, hsl(195 100% 50% / 0.03), transparent)' }} />
      
      <div className="container mx-auto px-4 relative">
        <div className="grid md:grid-cols-3 gap-8">
          {valueProps.map((prop, index) => (
            <motion.div
              key={prop.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative group"
            >
              <div className="glass-card rounded-2xl p-8 h-full border border-border/50 hover:border-primary/40 transition-all duration-300 hover:glow-box">
                {/* Icon with glow */}
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full scale-150 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/10 text-primary">
                    <prop.icon className="w-7 h-7" />
                  </div>
                </div>

                <h3 className="text-xl font-semibold mb-3 text-foreground">{prop.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{prop.description}</p>

                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden rounded-tr-2xl">
                  <div className="absolute top-2 right-2 w-8 h-8 border-t border-r border-primary/20 rounded-tr-lg" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
