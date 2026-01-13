import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export const Navbar = () => {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md" style={{ backgroundColor: 'hsl(220 20% 4% / 0.3)' }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="relative">
              <div className="absolute inset-0 rounded-lg blur-md" style={{ backgroundColor: 'hsl(195 100% 50% / 0.5)' }} />
              <img src="/projects/cakewalk/cakewalk-white.png" alt="Cakewalk" width={20} height={20} className="rounded relative" />
            </div>
            <span className="font-semibold text-foreground">Cakewalk</span>
            <span className="text-xs font-mono text-primary bg-primary/10 px-2 py-0.5 rounded">AEO</span>
          </div>

          {/* Navigation */}
          <div className="flex items-center gap-6">
            <a href="/blog" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Blog
            </a>
            <a href="https://cal.com/martin-wells-plxzqv" target="_blank" rel="noopener noreferrer">
              <Button variant="glow" size="sm">
                Book a Demo
              </Button>
            </a>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};
