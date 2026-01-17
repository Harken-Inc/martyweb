'use client'

import { motion } from "framer-motion"
import { Navbar } from "./Navbar"
import { Footer } from "./Footer"
import { AnimatedGrid } from "./AnimatedGrid"
import "../styles.css"

interface LegalPageProps {
  title: string
  content: string
}

export function LegalPage({ title, content }: LegalPageProps) {
  return (
    <div className="min-h-screen text-foreground" style={{ backgroundColor: 'hsl(220 20% 4%)' }}>
      <Navbar />
      <main className="pt-20 pb-20">
        <div className="relative">
          <AnimatedGrid />

          <div className="container mx-auto px-6 md:px-12 lg:px-16 relative z-10">
            <article className="max-w-3xl mx-auto">
              {/* Content */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="glass-card rounded-xl p-6 md:p-10 border border-primary/20"
              >
                <div
                  className="cakewalk-prose"
                  dangerouslySetInnerHTML={{ __html: content }}
                />
              </motion.div>
            </article>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
