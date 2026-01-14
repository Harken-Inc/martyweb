import { motion } from "framer-motion";
import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="py-12" style={{ borderTop: '1px solid hsl(195 100% 50% / 0.2)' }}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2"
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-lg blur-md" style={{ backgroundColor: 'hsl(195 100% 50% / 0.5)' }} />
              <img src="/projects/cakewalk/cakewalk-glow.png" alt="Cakewalk" width={20} height={20} className="rounded relative" />
            </div>
            <span className="font-semibold text-foreground">Cakewalk</span>
            <span className="text-muted-foreground">AEO</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-8 text-sm text-muted-foreground"
          >
            <a href="#" className="hover:text-primary transition-colors">Privacy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms</a>
            <a href="#" className="hover:text-primary transition-colors">Contact</a>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-sm text-muted-foreground"
          >
            © 2025 Cakewalk. All rights reserved.
          </motion.p>
        </div>
      </div>
    </footer>
  );
};
