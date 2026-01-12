import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { TrendingUp, Zap, Target } from "lucide-react";

const opportunities = [
  {
    icon: Target,
    title: "Almost nobody is optimizing for AI citations yet",
  },
  {
    icon: Zap,
    title: "Results can happen in days, not months",
  },
  {
    icon: TrendingUp,
    title: "One citation can outperform a page-one Google ranking",
  },
];

const aiModeStats = {
  users: "100M+",
  growth: "357%",
  description: "Google AI Mode users in the US alone—and AI referral traffic grew 357% YoY",
};

export const OpportunitySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 md:py-32 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">AI Search Is Wide Open.</span>
            <br />
            <span className="gradient-text">And Nobody's Optimizing For It.</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Millions now ask ChatGPT, Perplexity, and Gemini instead of Google. When AI answers, it cites sources—and that traffic goes somewhere.
          </p>
        </motion.div>

        {/* AI Mode Stats Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="max-w-3xl mx-auto mb-12"
        >
          <div className="glass-card rounded-xl p-6 border border-primary/30 bg-primary/5">
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
              <div className="text-center">
                <p className="text-3xl md:text-4xl font-bold gradient-text">{aiModeStats.users}</p>
                <p className="text-xs text-muted-foreground uppercase tracking-wider mt-1">AI Mode Users</p>
              </div>
              <div className="hidden md:block w-px h-12 bg-primary/30" />
              <div className="text-center">
                <p className="text-3xl md:text-4xl font-bold gradient-text">{aiModeStats.growth}</p>
                <p className="text-xs text-muted-foreground uppercase tracking-wider mt-1">YoY Growth</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground text-center mt-4">
              {aiModeStats.description}
            </p>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
          {opportunities.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className="glass-card rounded-xl p-6 text-center group hover:border-primary/50 transition-colors"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary mb-4 group-hover:scale-110 transition-transform">
                <item.icon className="w-6 h-6" />
              </div>
              <p className="font-medium text-foreground">{item.title}</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center text-lg text-muted-foreground"
        >
          Cakewalk finds these opportunities and captures them for you. <span className="text-primary font-medium">Automatically.</span>
        </motion.p>
      </div>
    </section>
  );
};
