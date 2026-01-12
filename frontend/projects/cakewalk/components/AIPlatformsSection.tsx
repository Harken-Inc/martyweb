import { motion } from "framer-motion";

const platforms = [
  {
    name: "ChatGPT",
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
        <path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 7.896a4.485 4.485 0 0 1 2.366-1.973V11.6a.766.766 0 0 0 .388.676l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071 0l-4.83-2.786A4.504 4.504 0 0 1 2.34 7.896zm16.597 3.855l-5.833-3.387L15.119 7.2a.076.076 0 0 1 .071 0l4.83 2.791a4.494 4.494 0 0 1-.676 8.105v-5.678a.79.79 0 0 0-.407-.667zm2.01-3.023l-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.409 9.23V6.897a.066.066 0 0 1 .028-.061l4.83-2.787a4.5 4.5 0 0 1 6.68 4.66zm-12.64 4.135l-2.02-1.164a.08.08 0 0 1-.038-.057V6.075a4.5 4.5 0 0 1 7.375-3.453l-.142.08L8.704 5.46a.795.795 0 0 0-.393.681zm1.097-2.365l2.602-1.5 2.607 1.5v2.999l-2.597 1.5-2.607-1.5z" />
      </svg>
    ),
  },
  {
    name: "Perplexity",
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
        <path d="M12 0L8.5 6H4l4 6-4 6h4.5L12 24l3.5-6H20l-4-6 4-6h-4.5L12 0zm0 4.5L14 8h-4l2-3.5zM7 8h2.5l2.5 4-2.5 4H7l2.5-4L7 8zm10 0l-2.5 4 2.5 4h-2.5L12 12l2.5-4H17zm-5 4l2 3.5h-4L12 12z" />
      </svg>
    ),
  },
  {
    name: "Gemini",
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2a10 10 0 0 1 10 10c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm0 3a7 7 0 0 0-7 7 7 7 0 0 0 7 7c.553 0 1-.447 1-1s-.447-1-1-1a5 5 0 0 1-5-5 5 5 0 0 1 5-5c.553 0 1-.447 1-1s-.447-1-1-1zm0 4a3 3 0 0 0-3 3 3 3 0 0 0 3 3c.553 0 1-.447 1-1s-.447-1-1-1a1 1 0 0 1-1-1 1 1 0 0 1 1-1c.553 0 1-.447 1-1s-.447-1-1-1z" />
      </svg>
    ),
  },
  {
    name: "Google",
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
      </svg>
    ),
  },
];

export const AIPlatformsSection = () => {
  return (
    <section className="py-12 relative overflow-hidden">
      {/* Floating background effect */}
      <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, transparent, hsl(195 100% 50% / 0.05), transparent)' }} />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center text-muted-foreground text-xs uppercase tracking-widest mb-6"
        >
          Get cited across major AI platforms
        </motion.p>
        
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12">
          {platforms.map((platform, index) => (
            <motion.div
              key={platform.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              {/* Floating animation wrapper */}
              <motion.div
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.5,
                  ease: "easeInOut",
                }}
                className="flex flex-col items-center gap-3"
              >
                {/* Glow effect behind icon */}
                <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Icon container */}
                <div className="relative p-3 rounded-xl border border-primary/20 backdrop-blur-sm group-hover:border-primary/50 group-hover:bg-primary/10 transition-all duration-300" style={{ backgroundColor: 'hsl(220 20% 4% / 0.5)' }}>
                  <div className="text-muted-foreground group-hover:text-primary transition-colors duration-300">
                    {platform.icon}
                  </div>
                  
                  {/* Scanning line effect */}
                  <div className="absolute inset-0 rounded-xl overflow-hidden">
                    <motion.div
                      className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"
                      animate={{
                        top: ["0%", "100%", "0%"],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        delay: index * 0.3,
                        ease: "linear",
                      }}
                    />
                  </div>
                </div>
                
                {/* Platform name */}
                <span className="text-xs font-medium text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                  {platform.name}
                </span>
              </motion.div>
            </motion.div>
          ))}
        </div>
        
        {/* Connection lines */}
        <div className="hidden md:block absolute inset-0 pointer-events-none">
          <svg className="w-full h-full" preserveAspectRatio="none">
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0" />
                <stop offset="50%" stopColor="hsl(var(--primary))" stopOpacity="0.3" />
                <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
              </linearGradient>
            </defs>
            <motion.line
              x1="20%"
              y1="50%"
              x2="80%"
              y2="50%"
              stroke="url(#lineGradient)"
              strokeWidth="1"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.5 }}
            />
          </svg>
        </div>
      </div>
    </section>
  );
};
