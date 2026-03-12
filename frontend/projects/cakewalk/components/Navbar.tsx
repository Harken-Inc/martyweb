"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CTAButton } from "./CTAButton";

const getAppUrl = () => {
  return process.env.NODE_ENV === "development"
    ? "http://localhost:5173"
    : "https://app.cakewalk.ai";
};

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

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
          <a href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <div className="relative">
              <div className="absolute inset-0 rounded-lg blur-md" style={{ backgroundColor: 'hsl(195 100% 50% / 0.5)' }} />
              <img src="/projects/cakewalk/cakewalk-glow.png" alt="Cakewalk" width={20} height={20} className="rounded relative" />
            </div>
            <span className="font-semibold text-foreground">Cakewalk</span>
            <span className="text-xs font-mono text-primary bg-primary/10 px-2 py-0.5 rounded">AI</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <a href="/pricing" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Pricing
            </a>
            <a href="/content" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Content
            </a>
            <a href="/blog" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Blog
            </a>
            <a href={`${getAppUrl()}/login`} className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Login
            </a>
            <CTAButton size="sm" />
          </div>

          {/* Mobile: CTA + Burger */}
          <div className="flex md:hidden items-center gap-3">
            <CTAButton size="sm" />
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 text-muted-foreground hover:text-primary transition-colors"
              aria-label="Toggle menu"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                {menuOpen ? (
                  <>
                    <line x1="4" y1="4" x2="16" y2="16" />
                    <line x1="16" y1="4" x2="4" y2="16" />
                  </>
                ) : (
                  <>
                    <line x1="3" y1="5" x2="17" y2="5" />
                    <line x1="3" y1="10" x2="17" y2="10" />
                    <line x1="3" y1="15" x2="17" y2="15" />
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className="md:hidden border-t border-white/10 backdrop-blur-md"
          style={{ backgroundColor: 'hsl(220 20% 4% / 0.8)' }}
        >
          <div className="container mx-auto px-4 py-3 flex flex-col gap-3">
            <a href="/pricing" className="text-sm text-muted-foreground hover:text-primary transition-colors py-1">
              Pricing
            </a>
            <a href="/content" className="text-sm text-muted-foreground hover:text-primary transition-colors py-1">
              Content
            </a>
            <a href="/blog" className="text-sm text-muted-foreground hover:text-primary transition-colors py-1">
              Blog
            </a>
            <a href={`${getAppUrl()}/login`} className="text-sm text-muted-foreground hover:text-primary transition-colors py-1">
              Login
            </a>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};
