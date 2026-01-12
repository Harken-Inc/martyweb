import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Activity, BarChart3, RefreshCw, Layers } from "lucide-react";

const features = [
  { icon: Activity, text: "Tracks every piece across AI platforms and Google" },
  { icon: BarChart3, text: "Identifies what's working" },
  { icon: RefreshCw, text: "Auto-optimizes underperforming content" },
  { icon: Layers, text: "Learns patterns across all users" },
];

export const SelfLearningSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 md:py-32 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="gradient-text">Gets Smarter Every Day.</span>
                <br />
                <span className="text-foreground">Without You.</span>
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Most tools show you data. You figure out what to do. Then you wait months to see if it worked.
                <br /><br />
                <span className="text-foreground font-medium">Cakewalk closes the loop automatically:</span>
              </p>

              <ul className="space-y-4">
                {features.map((feature, index) => (
                  <motion.li
                    key={feature.text}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                      <feature.icon className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-foreground">{feature.text}</span>
                  </motion.li>
                ))}
              </ul>

              <motion.p
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="mt-8 text-lg text-muted-foreground"
              >
                The longer it runs, <span className="text-primary font-medium">the better it gets.</span>
              </motion.p>
            </motion.div>

            {/* Right visualization */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative"
            >
              <div className="glass-card rounded-2xl p-8 relative overflow-hidden" style={{ border: '1px solid hsl(195 100% 50% / 0.3)' }}>
                {/* Animated brain/network visualization */}
                <svg className="w-full h-64 md:h-80" viewBox="0 0 200 200">
                  {/* Connection lines */}
                  <motion.g
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    {[...Array(12)].map((_, i) => {
                      const angle1 = (i * 30 * Math.PI) / 180;
                      const angle2 = ((i + 3) * 30 * Math.PI) / 180;
                      const r1 = 60;
                      const r2 = 60;
                      return (
                        <motion.line
                          key={i}
                          x1={100 + r1 * Math.cos(angle1)}
                          y1={100 + r1 * Math.sin(angle1)}
                          x2={100 + r2 * Math.cos(angle2)}
                          y2={100 + r2 * Math.sin(angle2)}
                          stroke="hsl(195 100% 50%)"
                          strokeWidth="0.5"
                          strokeOpacity="0.3"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 1.5, delay: 0.5 + i * 0.05 }}
                        />
                      );
                    })}
                  </motion.g>

                  {/* Nodes */}
                  {[...Array(12)].map((_, i) => {
                    const angle = (i * 30 * Math.PI) / 180;
                    const r = 60;
                    return (
                      <motion.circle
                        key={i}
                        cx={100 + r * Math.cos(angle)}
                        cy={100 + r * Math.sin(angle)}
                        r="6"
                        fill="hsl(195 100% 50%)"
                        fillOpacity="0.3"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.3, delay: 0.8 + i * 0.05 }}
                      >
                        <animate
                          attributeName="fill-opacity"
                          values="0.3;0.7;0.3"
                          dur={`${2 + i * 0.2}s`}
                          repeatCount="indefinite"
                        />
                      </motion.circle>
                    );
                  })}

                  {/* Center node */}
                  <motion.circle
                    cx="100"
                    cy="100"
                    r="20"
                    fill="hsl(195 100% 50%)"
                    fillOpacity="0.2"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  />
                  <motion.circle
                    cx="100"
                    cy="100"
                    r="10"
                    fill="hsl(195 100% 50%)"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    <animate
                      attributeName="r"
                      values="10;12;10"
                      dur="2s"
                      repeatCount="indefinite"
                    />
                  </motion.circle>
                </svg>

                {/* Gradient overlay */}
                <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(circle, transparent, transparent, hsl(220 20% 7%))' }} />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
