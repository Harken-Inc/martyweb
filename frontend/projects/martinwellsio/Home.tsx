'use client'

import { useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Mail } from 'lucide-react'
import './styles.css'

const BLURB = [
  'In 2033, a research station in the outer solar system detects biological material drifting inward from deep space. It is complex, organized, and when introduced to terrestrial proteins, it begins restructuring them.',
  'The source is a single object on a 25-million-year orbit, approaching the sun for the first time in recorded history. A crew is sent to assess the threat before the material reaches Earth.',
  'What they find beneath the surface is not what anyone prepared for. A world of living ice. Subsurface chambers built by biology, not geology. And beings whose existence raises a question the crew\u2019s mission was never designed to answer.',
  'They were sent to contain a threat. What they found is far more complicated.',
]

function FadeIn({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-[#1a1a1a]">
      <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
        <a href="/" className="text-sm font-semibold tracking-wide text-white/90">
          MARTIN WELLS
        </a>
        <div className="flex items-center gap-6">
          <a href="#book" className="text-sm text-white/50 hover:text-white/90 transition-colors">
            The Book
          </a>
          <a
            href="#signup"
            className="text-sm text-[var(--mwio-cyan)] hover:text-white transition-colors"
          >
            Join the List
          </a>
        </div>
      </div>
    </nav>
  )
}

function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-14 mwio-stars">
      <div className="max-w-5xl mx-auto w-full flex flex-col md:flex-row items-center gap-12 md:gap-16 py-20">
        <motion.div
          className="shrink-0"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="/projects/martinwellsio/impact-cover.png?v=4"
            alt="Impact — Book 1 of The Remnant Series"
            className="w-64 md:w-80 rounded-lg shadow-2xl shadow-black/60"
            style={{
              filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.6))',
            }}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center md:text-left"
        >
          <p className="text-sm tracking-[0.2em] uppercase text-[var(--mwio-cyan)] mb-4">
            Book 1 &middot; The Remnant Series
          </p>
          <h1 className="text-6xl md:text-8xl font-black text-white leading-none mb-4 mwio-glow">
            IMPACT
          </h1>
          <p className="text-xl md:text-2xl text-white/60 font-light mb-2">
            by Martin Wells
          </p>
          <p className="text-base text-white/40 mt-6 max-w-md">
            Hard science fiction. First contact. A crew sent to contain a threat finds something far more complicated.
          </p>
          <a
            href="#signup"
            className="inline-flex items-center gap-2 mt-8 px-7 py-3.5 bg-[var(--mwio-cyan)] text-[#0a0a0a] font-semibold text-sm rounded-lg hover:brightness-110 transition mwio-btn-glow"
          >
            <Mail size={16} />
            Join the Mailing List
          </a>
          <p className="text-sm text-white/40 mt-3">
            Get the first three chapters free, plus exclusive updates.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

function BlurbSection() {
  return (
    <section id="book" className="py-24 px-6 bg-[var(--mwio-bg)]">
      <div className="max-w-2xl mx-auto">
        <FadeIn>
          <p className="text-xs tracking-[0.2em] uppercase text-[var(--mwio-cyan)] mb-8 text-center">
            The Story
          </p>
        </FadeIn>
        <div className="space-y-6 border-l-2 border-[var(--mwio-cyan)]/30 pl-8">
          {BLURB.map((para, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <p
                className={`text-lg leading-relaxed ${
                  i === BLURB.length - 1
                    ? 'text-white font-medium italic'
                    : 'text-white/70'
                }`}
              >
                {para}
              </p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}

function SignupSection() {
  return (
    <section id="signup" className="py-24 px-6 mwio-stars">
      <div className="max-w-lg mx-auto text-center">
        <FadeIn>
          <div className="bg-[var(--mwio-card)] border border-[var(--mwio-border)] rounded-2xl p-10 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Join the Mailing List
            </h2>
            <p className="text-base text-white/60 leading-relaxed mb-8">
              Get the first three chapters of Impact free, plus exclusive updates on The Remnant Series.
            </p>
            <a
              href="https://mailer.martinwells.io/subscribe/martin-wells"
              className="inline-flex items-center justify-center gap-2 w-full px-7 py-4 bg-[var(--mwio-cyan)] text-[#0a0a0a] font-semibold text-base rounded-lg hover:brightness-110 transition mwio-btn-glow"
            >
              <Mail size={18} />
              Join the List
            </a>
            <p className="text-xs text-white/30 mt-5">
              No spam, ever. Unsubscribe anytime.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="border-t border-[var(--mwio-border)] py-8 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <span className="text-sm text-white/30">
          &copy; {new Date().getFullYear()} Martin Wells
        </span>
      </div>
    </footer>
  )
}

export default function MartinWellsIOHome() {
  return (
    <div className="min-h-screen bg-[var(--mwio-bg)] text-white" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
      <Navbar />
      <main>
        <HeroSection />
        <BlurbSection />
        <SignupSection />
      </main>
      <Footer />
    </div>
  )
}
