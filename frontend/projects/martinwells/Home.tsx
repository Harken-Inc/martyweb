'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Calendar, Mail, BookOpen, ArrowUpRight, Menu, X } from 'lucide-react'
import './styles.css'

const NAV_LINKS = [
  { label: 'Track Record', href: '#proof' },
  { label: 'The Engagement', href: '#offer' },
  { label: 'The Summit', href: '#summit' },
  { label: 'The Book', href: '#book' },
  { label: 'Contact', href: '#contact' },
]

const CAL_URL = 'https://cal.com/martinwells'
const BOOK_URL = 'https://www.amazon.com/dp/B0GZ8M8Y7H'
const SUMMIT_URL = 'https://innovatorsystems.com/'
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
    <section className="relative pt-28 pb-20 md:pt-32 md:pb-28 px-6 overflow-hidden">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-xs tracking-[0.2em] uppercase text-[var(--mw-accent)] mb-5 font-semibold">
            Fractional CTO &middot; AI Advisor
          </p>
          <h1 className="mw-serif text-4xl md:text-6xl font-bold text-[var(--mw-foreground)] leading-[1.05] tracking-tight">
            Senior technical leadership, without the full-time hire.
          </h1>
          <p className="mt-6 text-lg md:text-xl text-[var(--mw-muted)] leading-relaxed">
            I work alongside founders at YC, Series A, and Series B startups — owning architecture, hiring, AI integration, and the calls only a seasoned operator gets right.
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
              href="#offer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-[var(--mw-foreground)] text-[var(--mw-foreground)] font-semibold text-sm rounded-md hover:bg-[var(--mw-surface)] transition-colors"
            >
              See the Engagement
            </a>
          </div>
          <p className="mt-8 text-sm text-[var(--mw-muted)] leading-relaxed">
            Three operator exits. Advisor to 30+ founders. 25 years building.
          </p>
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
            Three operator exits. 25 years building.
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
    'Weekly architecture and roadmap review with your founders or product lead',
    'Hands-on hiring help — JDs, sourcing, technical interviews, offer calls',
    'Code-level mentorship for your senior engineers',
    'Vendor, infrastructure, and build-vs-buy calls',
    'AI integration strategy — what to ship, what to skip, what to defer',
  ]
  const audience = [
    'Pre-seed and seed founders without a CTO who need someone in the room before the wrong architectural call gets baked in',
    'Series A and B teams whose first technical hire needs a senior counterweight',
    'Growth-stage companies adding AI to existing product and deciding what good looks like',
  ]
  return (
    <section id="offer" className="py-20 md:py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <FadeIn>
          <p className="text-xs tracking-[0.2em] uppercase text-[var(--mw-accent)] mb-3 font-semibold">
            The Engagement
          </p>
          <h2 className="mw-serif text-3xl md:text-5xl font-bold text-[var(--mw-foreground)] leading-tight tracking-tight">
            Fractional CTO, embedded in your team.
          </h2>
        </FadeIn>

        <div className="mt-8 md:mt-10 space-y-5 text-base md:text-lg text-[var(--mw-muted)] leading-relaxed">
          <FadeIn delay={0.05}>
            <p>
              Most early-stage teams need a CTO long before they can afford one. I fill that gap. I sit alongside your founders and product team, own the technical calls a senior operator should own, and unblock the ones your engineers can&apos;t make alone.
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p>
              Typical engagement: 8–12 hours per week, three-month minimum. I&apos;m in your standups, your slack, your hiring loop, and your architecture decisions. You get a senior technologist&apos;s judgement without the $400K salary, equity grant, or recruiting cycle.
            </p>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-[var(--mw-foreground)] font-medium">
              Capped engagements. I take a small handful at a time so the founders I work with get my full attention.
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

function SummitSection() {
  const details = [
    { label: 'When', value: '27\u201330 September 2026' },
    { label: 'Where', value: 'San Francisco and the Valley' },
    { label: 'Who', value: 'Australian founders and CXOs, two per company' },
  ]
  return (
    <section id="summit" className="py-20 md:py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <FadeIn>
          <p className="text-xs tracking-[0.2em] uppercase text-[var(--mw-accent)] mb-3 font-semibold">
            The Summit
          </p>
          <h2 className="mw-serif text-3xl md:text-5xl font-bold text-[var(--mw-foreground)] leading-tight tracking-tight">
            Innovator Summit 2026
          </h2>
        </FadeIn>

        <div className="mt-8 md:mt-10 space-y-5 text-base md:text-lg text-[var(--mw-muted)] leading-relaxed max-w-2xl">
          <FadeIn delay={0.05}>
            <p>
              I run a four-day, closed-door program in Silicon Valley for Australian founders and CXOs taking their company into the US, held the week before SF Tech Week.
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p>
              No keynotes. Working sessions with one operator on one problem, roundtables under Chatham House rule, and long dinners where the useful things get said. Go-to-market, US fundraising, enterprise BD, pricing for America, your first US hire, and flipping the cap table.
            </p>
          </FadeIn>
        </div>

        <FadeIn delay={0.15}>
          <div className="mt-10 grid sm:grid-cols-3 gap-6 md:gap-8 border-t border-[var(--mw-border)] pt-8">
            {details.map(d => (
              <div key={d.label}>
                <p className="text-xs tracking-[0.2em] uppercase text-[var(--mw-accent)] mb-2 font-semibold">
                  {d.label}
                </p>
                <p className="text-sm md:text-base text-[var(--mw-foreground)] leading-relaxed">{d.value}</p>
              </div>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <a
            href={SUMMIT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex items-center gap-2 text-sm font-semibold text-[var(--mw-foreground)] underline decoration-[var(--mw-accent)] decoration-2 underline-offset-4 hover:text-[var(--mw-accent)] transition-colors"
          >
            Apply at innovatorsystems.com
            <ArrowUpRight size={14} />
          </a>
        </FadeIn>
      </div>
    </section>
  )
}

function BookSection() {
  return (
    <section id="book" className="py-16 md:py-20 px-6 bg-[var(--mw-surface)]">
      <div className="max-w-4xl mx-auto grid md:grid-cols-[auto_1fr] gap-8 md:gap-12 items-center">
        <FadeIn>
          <a href={BOOK_URL} aria-label="AI Alpha on Amazon" className="block md:flex-shrink-0">
            <img
              src="/projects/martinwells/alpha-book-cover.jpg"
              alt="AI Alpha"
              className="w-40 mx-auto md:mx-0 mw-cover-shadow rounded-sm"
            />
          </a>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p className="text-xs tracking-[0.2em] uppercase text-[var(--mw-accent)] mb-3 font-semibold">
            The Book
          </p>
          <h2 className="mw-serif text-2xl md:text-3xl font-bold text-[var(--mw-foreground)] leading-tight tracking-tight mb-4">
            AI Alpha
          </h2>
          <p className="text-base md:text-lg text-[var(--mw-muted)] leading-relaxed mb-6 max-w-xl">
            <em>How PE Firms Find and Capture the Hidden AI Value in Every Portfolio Company.</em> Written for operators and investors who need to move from AI theatre to AI EBITDA. The diagnostic framework works just as well inside a startup.
          </p>
          <a
            href={BOOK_URL}
            className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--mw-foreground)] underline decoration-[var(--mw-accent)] decoration-2 underline-offset-4 hover:text-[var(--mw-accent)] transition-colors"
          >
            <BookOpen size={14} />
            Get the book on Amazon
          </a>
        </FadeIn>
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
        © {new Date().getFullYear()} Martin Wells. Fractional CTO and AI advisor.
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
        <SummitSection />
        <BookSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
