import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { AnimatedGrid } from "./AnimatedGrid";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

const terminalLogs = [
  { text: "Checking for website updates...", type: "normal" },
  { text: "Crawling website...", type: "normal" },
  { text: "Extracted ", highlight: "4,874", suffix: " characters of content", type: "highlight" },
  { text: "New mention for prompt - ranked #1!", type: "success" },
  { text: "Reviewing competitor content...", type: "normal" },
  { text: "Loaded ", highlight: "353", suffix: " keywords for content planning", type: "highlight" },
  { text: "Measuring keyword and prompt volume...", type: "normal" },
  { text: "Checking AI visibility...", type: "normal" },
  { text: "Analyzing keywords...", type: "normal" },
  { text: "Traffic growth for all posts up 12.1%", type: "success" },
  { text: "Optimizing for ", highlight: "12", suffix: " AI platforms", type: "highlight" },
  { text: "Generating content post #137", type: "success" },
];

const TypewriterText = ({
  text,
  highlight,
  suffix,
  type,
  onComplete
}: {
  text: string;
  highlight?: string;
  suffix?: string;
  type: string;
  onComplete: () => void;
}) => {
  const fullText = type === "normal" ? text : `${text}${highlight || ""}${suffix || ""}`;
  const [displayedText, setDisplayedText] = useState("");
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    let currentIndex = 0;
    let timeoutId: NodeJS.Timeout;

    const typeNextChar = () => {
      if (currentIndex <= fullText.length) {
        setDisplayedText(fullText.slice(0, currentIndex));
        currentIndex++;

        // Randomized delay for human-like typing
        const char = fullText[currentIndex - 1];
        let delay = 25 + Math.random() * 50; // Base: 25-75ms

        // Longer pauses after punctuation
        if (char === '.' || char === ',' || char === '…') {
          delay += 150 + Math.random() * 200;
        }
        // Slight pause after spaces (like thinking)
        else if (char === ' ') {
          delay += Math.random() * 40;
        }
        // Occasional "burst" of fast typing
        else if (Math.random() < 0.1) {
          delay = 15 + Math.random() * 20;
        }
        // Occasional hesitation
        else if (Math.random() < 0.05) {
          delay += 100 + Math.random() * 150;
        }

        timeoutId = setTimeout(typeNextChar, delay);
      } else {
        setIsComplete(true);
        onComplete();
      }
    };

    // Initial delay before starting
    timeoutId = setTimeout(typeNextChar, 100 + Math.random() * 200);

    return () => clearTimeout(timeoutId);
  }, [fullText, onComplete]);

  const getColoredText = () => {
    if (type === "normal") {
      return <span className="text-muted-foreground">{displayedText}</span>;
    }

    if (type === "highlight") {
      const textLen = text.length;
      const highlightLen = (highlight || "").length;

      return (
        <span className="text-muted-foreground">
          {displayedText.slice(0, textLen)}
          <span className="text-primary font-semibold">
            {displayedText.slice(textLen, textLen + highlightLen)}
          </span>
          {displayedText.slice(textLen + highlightLen)}
        </span>
      );
    }

    if (type === "success") {
      const textLen = text.length;
      const highlightLen = (highlight || "").length;

      return (
        <span className="text-white">
          {displayedText.slice(0, textLen)}
          <span className="font-semibold">
            {displayedText.slice(textLen, textLen + highlightLen)}
          </span>
          {displayedText.slice(textLen + highlightLen)}
        </span>
      );
    }

    return <span>{displayedText}</span>;
  };

  return (
    <div className="flex items-center">
      {getColoredText()}
      {!isComplete && (
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.4, repeat: Infinity }}
          className="inline-block w-2 h-4 bg-primary ml-0.5"
        />
      )}
    </div>
  );
};

const TerminalLog = () => {
  const [currentLine, setCurrentLine] = useState(0);
  const [completedLines, setCompletedLines] = useState<number[]>([]);

  const handleLineComplete = (lineIndex: number) => {
    setCompletedLines((prev) => [...prev, lineIndex]);

    setTimeout(() => {
      if (lineIndex < terminalLogs.length - 1) {
        setCurrentLine(lineIndex + 1);
      } else {
        // Reset after all lines complete
        setTimeout(() => {
          setCurrentLine(0);
          setCompletedLines([]);
        }, 3000);
      }
    }, 600); // Pause between lines
  };

  return (
    <div className="glass-card rounded-xl p-4 md:p-6 font-mono text-sm border border-primary/20 backdrop-blur-sm overflow-hidden" style={{ backgroundColor: 'hsl(220 20% 4% / 0.8)' }}>
      <div className="flex items-center gap-2 mb-4 pb-3 border-b border-primary/10">
        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
        <span className="text-xs text-muted-foreground">cakewalk-agent</span>
      </div>
      <div className="space-y-1.5 h-[280px] overflow-hidden">
        {terminalLogs.map((log, index) => {
          const isCompleted = completedLines.includes(index);
          const isCurrent = index === currentLine;
          const shouldShow = isCompleted || isCurrent;

          if (!shouldShow) return null;

          if (isCompleted) {
            // Render completed lines statically
            return (
              <div key={index} className="flex items-center">
                {log.type === "normal" && (
                  <span className="text-muted-foreground">{log.text}</span>
                )}
                {log.type === "highlight" && (
                  <span className="text-muted-foreground">
                    {log.text}
                    <span className="text-primary font-semibold">{log.highlight}</span>
                    {log.suffix}
                  </span>
                )}
                {log.type === "success" && (
                  <span className="text-white">
                    {log.text}
                    <span className="font-semibold">{log.highlight}</span>
                    {log.suffix}
                  </span>
                )}
              </div>
            );
          }

          // Render current line with typewriter
          return (
            <TypewriterText
              key={`typing-${index}-${currentLine}`}
              text={log.text}
              highlight={log.highlight}
              suffix={log.suffix}
              type={log.type}
              onComplete={() => handleLineComplete(index)}
            />
          );
        })}
      </div>
    </div>
  );
};

export const HeroSection = () => {
  return (
    <section className="relative overflow-hidden">
      <AnimatedGrid />

      <div className="container mx-auto relative z-10 px-6 md:px-12 lg:px-16 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            {/* Main headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-5"
            >
              <span className="text-foreground">Traffic to Your Site.</span>
              <br />
              <span className="gradient-text glow-text">On Autopilot.</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed"
            >
              The AI agent that replaces an entire SEO team. Competitor analysis, keyword gaps, AI citations, reputation tracking, content calendars, writing—
              <span className="text-foreground font-medium">while you sleep.</span>
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4"
            >
              <a href="https://cal.com/martin-wells-plxzqv" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="glow" className="group">
                  Book a Demo
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </a>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="mt-10 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-muted-foreground text-sm"
            >
              <div className="flex items-center gap-2">
                <div className="w-1 h-1 rounded-full bg-primary" />
                <span>Set and forget</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1 h-1 rounded-full bg-primary" />
                <span>Results in days</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1 h-1 rounded-full bg-primary" />
                <span>Cancel anytime</span>
              </div>
            </motion.div>

            {/* Mobile Terminal */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="mt-10 lg:hidden"
            >
              <TerminalLog />
            </motion.div>
          </motion.div>

          {/* Right Column - Terminal (Desktop) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="hidden lg:block"
          >
            <TerminalLog />
          </motion.div>
        </div>

        {/* Floating tech elements */}
        <motion.div
          className="absolute top-20 left-10 text-primary/20 font-mono text-xs hidden lg:block"
          animate={{ opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          {"<ai:optimize />"}
        </motion.div>
        <motion.div
          className="absolute bottom-40 right-10 text-primary/20 font-mono text-xs hidden lg:block"
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 5, repeat: Infinity }}
        >
          {"agent.deploy()"}
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32" style={{ background: 'linear-gradient(to top, hsl(220 20% 4%), transparent)' }} />
    </section>
  );
};
