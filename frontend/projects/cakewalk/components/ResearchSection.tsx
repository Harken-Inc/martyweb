import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { FlaskConical, ArrowRight } from "lucide-react";

const researchHighlight = {
  title: "How ChatGPT Actually Searches the Web",
  subtitle: "What 1,000 prompts reveal about the biggest SEO opportunity in years",
  url: "/blog/how-chatgpt-actually-searches-the-web-what-1-000-prompts-reveal-about-the-biggest-seo-opportunity-in-years",
  stats: [
    { value: "994", label: "Prompts Analyzed" },
    { value: "10", label: "Industries Studied" },
    { value: "19.7%", label: "Trigger Web Search" },
    { value: "2.3x", label: "More Citations for Pricing Content" },
  ],
  insight: "AI only searches the web 19.7% of the time—but those queries represent the highest-intent, highest-value traffic. We identified the exact patterns that trigger citations.",
};

export const ResearchSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 md:py-32 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-6">
            <FlaskConical className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-medium">Original Research</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">Built on Data From</span>
            <br />
            <span className="gradient-text">Hundreds of Clients, Thousands of Posts</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We don't guess what works—we study it. Our strategies are informed by continuous research into how AI platforms actually discover and cite content.
          </p>
        </motion.div>

        {/* Featured Research Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <a
            href={researchHighlight.url}
            className="block glass-card rounded-2xl p-8 md:p-10 border border-primary/30 hover:border-primary/50 transition-all duration-300 group"
          >
            <div className="flex flex-col md:flex-row md:items-start gap-8">
              <div className="flex-1">
                <p className="text-xs text-primary uppercase tracking-widest mb-3">Featured Study</p>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {researchHighlight.title}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {researchHighlight.subtitle}
                </p>
                <p className="text-foreground/80 leading-relaxed mb-6">
                  {researchHighlight.insight}
                </p>
                <span className="inline-flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all">
                  Read the full study <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-8 border-t border-primary/20">
              {researchHighlight.stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  className="text-center"
                >
                  <p className="text-2xl md:text-3xl font-bold gradient-text">{stat.value}</p>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  );
};
