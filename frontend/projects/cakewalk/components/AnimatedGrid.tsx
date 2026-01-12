import { motion } from "framer-motion";

export const AnimatedGrid = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Base grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent" />
      
      {/* Scanning line effect */}
      <motion.div
        className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"
        animate={{ y: ["0vh", "100vh"] }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      />
      
      {/* Floating orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/10 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-accent/10 blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      
      {/* Corner tech accents */}
      <svg className="absolute top-0 left-0 w-32 h-32 text-primary/20" viewBox="0 0 100 100">
        <path d="M0 50 L0 0 L50 0" fill="none" stroke="currentColor" strokeWidth="0.5" />
        <circle cx="0" cy="0" r="3" fill="currentColor" />
      </svg>
      <svg className="absolute top-0 right-0 w-32 h-32 text-primary/20" viewBox="0 0 100 100">
        <path d="M50 0 L100 0 L100 50" fill="none" stroke="currentColor" strokeWidth="0.5" />
        <circle cx="100" cy="0" r="3" fill="currentColor" />
      </svg>
      <svg className="absolute bottom-0 left-0 w-32 h-32 text-primary/20" viewBox="0 0 100 100">
        <path d="M0 50 L0 100 L50 100" fill="none" stroke="currentColor" strokeWidth="0.5" />
        <circle cx="0" cy="100" r="3" fill="currentColor" />
      </svg>
      <svg className="absolute bottom-0 right-0 w-32 h-32 text-primary/20" viewBox="0 0 100 100">
        <path d="M50 100 L100 100 L100 50" fill="none" stroke="currentColor" strokeWidth="0.5" />
        <circle cx="100" cy="100" r="3" fill="currentColor" />
      </svg>
    </div>
  );
};
