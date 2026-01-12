import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Check, X, Clock, Users, Eye, Settings } from "lucide-react";

const comparisons = [
  {
    icon: Clock,
    metric: "Time to results",
    seo: "6-12 months",
    aeo: "Weeks",
    seoNegative: true,
  },
  {
    icon: Users,
    metric: "Competition",
    seo: "Millions of pages",
    aeo: "Open opportunity",
    seoNegative: true,
  },
  {
    icon: Eye,
    metric: "Visibility per win",
    seo: "One of 10 blue links",
    aeo: "Often the only source cited",
    seoNegative: true,
  },
  {
    icon: Settings,
    metric: "Effort",
    seo: "Constant",
    aeo: "Set and forget",
    seoNegative: true,
  },
];

export const ComparisonSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 md:py-32 relative">
      <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, transparent, hsl(220 20% 7% / 0.5), transparent)' }} />
      
      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Why AEO Is Faster</span>
          </h2>
          <p className="text-xl text-foreground font-medium">Weeks to Results. Not Months.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="glass-card rounded-2xl overflow-hidden" style={{ border: '1px solid hsl(195 100% 50% / 0.3)' }}>
            {/* Header */}
            <div className="grid grid-cols-3" style={{ backgroundColor: 'hsl(220 15% 15% / 0.3)' }}>
              <div className="p-4 md:p-6 font-medium text-muted-foreground" />
              <div className="p-4 md:p-6 text-center font-semibold text-muted-foreground" style={{ borderLeft: '1px solid hsl(195 100% 50% / 0.3)' }}>
                Traditional SEO
              </div>
              <div className="p-4 md:p-6 text-center font-semibold gradient-text" style={{ borderLeft: '1px solid hsl(195 100% 50% / 0.3)' }}>
                Cakewalk AEO
              </div>
            </div>

            {/* Rows */}
            {comparisons.map((row, index) => (
              <motion.div
                key={row.metric}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                className="grid grid-cols-3 hover:bg-muted/10 transition-colors"
                style={{ borderTop: '1px solid hsl(195 100% 50% / 0.3)' }}
              >
                <div className="p-4 md:p-6 flex items-center gap-3">
                  <row.icon className="w-5 h-5 text-primary hidden sm:block" />
                  <span className="font-medium text-foreground text-sm md:text-base">{row.metric}</span>
                </div>
                <div className="p-4 md:p-6 text-center text-muted-foreground flex items-center justify-center gap-2 text-sm md:text-base" style={{ borderLeft: '1px solid hsl(195 100% 50% / 0.3)' }}>
                  <X className="w-4 h-4 text-destructive hidden sm:block" />
                  {row.seo}
                </div>
                <div className="p-4 md:p-6 text-center text-primary flex items-center justify-center gap-2 font-medium text-sm md:text-base" style={{ borderLeft: '1px solid hsl(195 100% 50% / 0.3)' }}>
                  <Check className="w-4 h-4 hidden sm:block" />
                  {row.aeo}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center mt-8 text-muted-foreground"
          >
            SEO still matters—we do that too. But <span className="text-primary font-medium">AEO is where the fast wins are.</span>
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};
