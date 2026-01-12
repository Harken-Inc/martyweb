import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Link2, Search, Rocket, TrendingUp } from "lucide-react";

const steps = [
  {
    icon: Link2,
    number: "01",
    title: "Connect",
    description: "Link your site and analytics (2 minutes)",
  },
  {
    icon: Search,
    number: "02",
    title: "Discover",
    description: "We find AI prompts and keywords in your space",
  },
  {
    icon: Rocket,
    number: "03",
    title: "Deploy",
    description: "The agent creates content optimized to get cited and ranked",
  },
  {
    icon: TrendingUp,
    number: "04",
    title: "Grow",
    description: "Traffic increases while you do other things",
  },
];

export const HowItWorksSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 md:py-32 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">How It Works</span>
          </h2>
          <p className="text-muted-foreground text-lg">Four simple steps to automated traffic growth</p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          {/* Connection line */}
          <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent hidden md:block" />

          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative text-center"
              >
                {/* Step indicator */}
                <div className="relative z-10 mb-6">
                  <div className="mx-auto w-16 h-16 rounded-full border-2 border-primary/50 flex items-center justify-center group hover:border-primary transition-colors" style={{ backgroundColor: 'hsl(220 20% 4%)' }}>
                    <step.icon className="w-7 h-7 text-primary" />
                  </div>
                  <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs font-bold px-2 py-1 rounded-full font-mono">
                    {step.number}
                  </span>
                </div>

                <h3 className="text-xl font-semibold mb-2 text-foreground">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>

                {/* Arrow for desktop */}
                {index < steps.length - 1 && (
                  <div className="absolute top-8 -right-4 hidden md:block">
                    <svg className="w-8 h-8 text-primary/30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
