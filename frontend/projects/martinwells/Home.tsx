'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Calendar, Mail, BookOpen, Menu, X } from 'lucide-react'
import './styles.css'

const NAV_LINKS = [
  { label: 'The Book', href: '#book' },
  { label: 'Track Record', href: '#proof' },
  { label: 'The Assessment', href: '#offer' },
  { label: 'Contact', href: '#contact' },
]

const CAL_URL = 'https://cal.com/martinwells'
const BOOK_URL = 'https://www.amazon.com/dp/B0GZ8M8Y7H'
const EMAIL = 'martin@martinwells.com'

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
  const [open, setOpen] = useState(false)
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/85 backdrop-blur-md border-b border-[var(--mw-border)]">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="/" className="text-lg font-semibold text-[var(--mw-foreground)] mw-serif tracking-tight">
          Martin Wells
        </a>
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(link => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-[var(--mw-muted)] hover:text-[var(--mw-foreground)] transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href={CAL_URL}
            className="text-sm font-semibold text-white bg-[var(--mw-foreground)] hover:bg-[#0a1a31] px-4 py-2 rounded-md transition-colors"
          >
            Book a Call
          </a>
        </div>
        <button
          className="md:hidden text-[var(--mw-foreground)]"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-white border-t border-[var(--mw-border)] px-6 py-4 space-y-3">
          {NAV_LINKS.map(link => (
            <a
              key={link.href}
              href={link.href}
              className="block text-sm text-[var(--mw-muted)]"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href={CAL_URL}
            className="inline-block text-sm font-semibold text-white bg-[var(--mw-foreground)] px-4 py-2 rounded-md"
          >
            Book a Call
          </a>
        </div>
      )}
    </nav>
  )
}

function HeroSection() {
  return (
    <section id="book" className="relative pt-28 pb-20 md:pt-32 md:pb-28 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto grid md:grid-cols-[1.2fr_1fr] gap-12 md:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="order-2 md:order-1"
        >
          <p className="text-xs tracking-[0.2em] uppercase text-[var(--mw-accent)] mb-5 font-semibold">
            New from Martin Wells
          </p>
          <h1 className="mw-serif text-4xl md:text-6xl font-bold text-[var(--mw-foreground)] leading-[1.05] tracking-tight">
            I help PE-backed companies turn AI into EBITDA.
          </h1>
          <p className="mt-6 text-lg md:text-xl text-[var(--mw-muted)] leading-relaxed max-w-xl">
            A 3-week diagnostic identifies exactly where AI moves margin in your portfolio companies. Then I help you capture it.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a
              href={CAL_URL}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[var(--mw-foreground)] text-white font-semibold text-sm rounded-md hover:bg-[#0a1a31] transition-colors"
            >
              <Calendar size={16} />
              Book a Call
            </a>
            <a
              href={BOOK_URL}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-[var(--mw-foreground)] text-[var(--mw-foreground)] font-semibold text-sm rounded-md hover:bg-[var(--mw-surface)] transition-colors"
            >
              <BookOpen size={16} />
              Get the Book
            </a>
          </div>
          <p className="mt-8 text-sm text-[var(--mw-muted)] leading-relaxed max-w-xl">
            Three operator exits. Advisor and technical co-founder to companies acquired by Meta, Sony, and AOL. $250M+ raised.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="order-1 md:order-2 flex justify-center md:justify-end"
        >
          <img
            src="/projects/martinwells/alpha-book-cover.jpg"
            alt="AI Alpha — How PE Firms Find and Capture the Hidden AI Value in Every Portfolio Company"
            className="w-56 md:w-80 mw-cover-shadow rounded-sm"
          />
        </motion.div>
      </div>
    </section>
  )
}

function ProofSection() {
  const proof = [
    { metric: '0 → 2M users in 9 months', detail: 'Media company — acquired' },
    { metric: 'Built and scaled a gaming platform', detail: 'Acquired by Sony' },
    { metric: '#1 grossing iOS app across 25 countries', detail: 'Backed by a16z' },
  ]
  return (
    <section id="proof" className="py-20 md:py-24 px-6 bg-[var(--mw-surface)]">
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <p className="text-xs tracking-[0.2em] uppercase text-[var(--mw-accent)] mb-3 font-semibold text-center">
            Track Record
          </p>
          <h2 className="mw-serif text-3xl md:text-4xl font-bold text-[var(--mw-foreground)] text-center mb-12 md:mb-16">
            Three operator exits. Four building decades.
          </h2>
        </FadeIn>
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {proof.map((p, i) => (
            <FadeIn key={p.metric} delay={i * 0.1}>
              <div className="bg-white border border-[var(--mw-border)] rounded-lg p-6 md:p-8 h-full">
                <p className="mw-serif text-xl md:text-2xl font-bold text-[var(--mw-foreground)] leading-tight mb-2">
                  {p.metric}
                </p>
                <p className="text-sm text-[var(--mw-muted)] leading-relaxed">{p.detail}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}

function OfferSection() {
  const deliverables = [
    'Executive summary your IC or board can read in 5 minutes',
    'Prioritized list of 5–7 AI initiatives, ranked by EBITDA impact',
    'Quick-wins section — actions for the first 30 days using existing resources',
    '6-month execution roadmap with required investment per initiative',
    '60-minute executive briefing to walk through findings',
  ]
  const audience = [
    'PE operating partners and value creation teams running AI strategy across portfolio companies',
    'CEOs of PE-backed companies ($10M–$100M revenue) who own the AI agenda directly',
    'Boards weighing the AI investment thesis on a deal already in motion',
  ]
  return (
    <section id="offer" className="py-20 md:py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <FadeIn>
          <p className="text-xs tracking-[0.2em] uppercase text-[var(--mw-accent)] mb-3 font-semibold">
            The Offer
          </p>
          <h2 className="mw-serif text-3xl md:text-5xl font-bold text-[var(--mw-foreground)] leading-tight tracking-tight">
            The AI Readiness Assessment
          </h2>
        </FadeIn>

        <div className="mt-8 md:mt-10 space-y-5 text-base md:text-lg text-[var(--mw-muted)] leading-relaxed">
          <FadeIn delay={0.05}>
            <p>
              Most mid-market AI initiatives don&apos;t fail in the technology — they fail in the diagnosis. The result: $40K/month in tools nobody uses, pilots that never ship, and an EBITDA gap that nobody can quantify.
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p>
              The AI Readiness Assessment is a 3-week engagement. I interview your CEO, CTO, and 3 department heads. I audit the tech stack, data infrastructure, and current AI spend. You get a 15-page report with a prioritized roadmap — 90 days, 6 months, 12 months — every initiative ranked by EBITDA impact, with the math.
            </p>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-[var(--mw-foreground)] font-medium">
              Fixed fee. Fixed scope. Fixed timeline. If the roadmap doesn&apos;t earn back 10× the assessment cost in year one, we shake hands and part friends.
            </p>
          </FadeIn>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 mt-14 md:mt-16">
          <FadeIn delay={0.2}>
            <h3 className="mw-serif text-xl md:text-2xl font-bold text-[var(--mw-foreground)] mb-5">
              What you get
            </h3>
            <ul className="space-y-3">
              {deliverables.map(item => (
                <li key={item} className="flex gap-3 text-sm md:text-base text-[var(--mw-muted)] leading-relaxed">
                  <span className="text-[var(--mw-accent)] font-bold mt-0.5">›</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </FadeIn>
          <FadeIn delay={0.25}>
            <h3 className="mw-serif text-xl md:text-2xl font-bold text-[var(--mw-foreground)] mb-5">
              Who it&apos;s for
            </h3>
            <ul className="space-y-3">
              {audience.map(item => (
                <li key={item} className="flex gap-3 text-sm md:text-base text-[var(--mw-muted)] leading-relaxed">
                  <span className="text-[var(--mw-accent)] font-bold mt-0.5">›</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}

function ContactSection() {
  return (
    <section id="contact" className="py-20 md:py-28 px-6 bg-[var(--mw-foreground)] text-white">
      <div className="max-w-3xl mx-auto text-center">
        <FadeIn>
          <p className="text-xs tracking-[0.2em] uppercase text-[var(--mw-accent)] mb-3 font-semibold">
            Get In Touch
          </p>
          <h2 className="mw-serif text-3xl md:text-5xl font-bold leading-tight tracking-tight mb-8">
            Let&apos;s talk.
          </h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mt-10">
            <a
              href={CAL_URL}
              className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-[var(--mw-accent)] text-[var(--mw-foreground)] font-semibold text-sm rounded-md hover:bg-[#f1a55c] transition-colors"
            >
              <Calendar size={16} />
              Book 30 Minutes
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="inline-flex items-center justify-center gap-2 px-7 py-4 border border-white/30 text-white font-semibold text-sm rounded-md hover:bg-white/10 transition-colors"
            >
              <Mail size={16} />
              {EMAIL}
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="bg-[var(--mw-foreground)] text-white/60 border-t border-white/10 py-8 px-6">
      <div className="max-w-5xl mx-auto text-center text-sm leading-relaxed">
        © {new Date().getFullYear()} Martin Wells. Author of{' '}
        <em className="text-white/80">AI Alpha: How PE Firms Find and Capture the Hidden AI Value in Every Portfolio Company.</em>
      </div>
    </footer>
  )
}

export default function MartinWellsHome() {
  return (
    <div className="min-h-screen bg-[var(--mw-background)]" style={{ fontFamily: 'var(--mw-sans)' }}>
      <Navbar />
      <main>
        <HeroSection />
        <ProofSection />
        <OfferSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
