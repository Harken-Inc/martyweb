'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Mail } from 'lucide-react'
import './styles.css'

type Book = {
  id: string
  series: string
  title: string
  cover: string
  blurb: string[]
  status: string
}

const BOOKS: Book[] = [
  {
    id: 'outlands',
    series: 'Controllers · Book 1',
    title: 'OUTLANDS',
    cover: '/projects/martinjamesworld/outlands-cover.jpg',
    status: 'Available May 15, 2026',
    blurb: [
      'Kade Mercer takes a hazard-pay escort contract into the Vulcore volcanic Outlands — escort a CCU field assessor deep into Renegade territory to find out why a rogue collective expanded beyond its borders.',
      'The further they push in, the more obviously the mission isn’t what the briefing said. The crystalline substrate inside Renegade bots matches artifacts buried in Scaven clan tombs. A Phoenix Collective fortress manufactures machines to a design no CCU database has ever seen. And then they encounter the Terminus — a bot so large Kade’s tactical systems can’t classify it.',
      'A freelance bot operator. A mission built on a lie. And technology with origins nobody is willing to admit.',
    ],
  },
  {
    id: 'sonara',
    series: 'Controllers · Book 2',
    title: 'SONARA',
    cover: '/projects/martinjamesworld/sonara-cover.jpg',
    status: 'Available June 15, 2026',
    blurb: [
      'A wounded fourteen-year-old boy arrives at Kade Mercer’s workshop carrying a name and a plea. Daren’s cell has been destroyed. Kade walks away from the contract of a lifetime and returns to the Outlands.',
      'He discovers the Sonara: thousands of resonance-sensitive Controllers hidden across the frontier for 175 years since the great betrayal. Their cells are being hunted by Major Linden and the Accord — and drawn out by the Phoenix Collective’s instinctive response to sonite activation.',
      'Kade trains through five trials in dark tunnels. Failure. Humiliation. Breakthrough. When the Pegasus and the Scaven Storm Chasers break the Phoenix offensive, the Sonara chant his name.',
    ],
  },
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
          MARTIN JAMES
        </a>
        <div className="flex items-center gap-6">
          <a href="#books" className="text-sm text-white/50 hover:text-white/90 transition-colors">
            The Books
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
    <section className="min-h-[70vh] flex items-center justify-center px-6 pt-14 mwio-stars">
      <div className="max-w-4xl mx-auto w-full text-center py-20">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-sm tracking-[0.2em] uppercase text-[var(--mwio-cyan)] mb-4"
        >
          The Controllers Series
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-5xl md:text-7xl font-black text-white leading-tight mb-6 mwio-glow"
        >
          CYBOTS
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-white/60 font-light max-w-2xl mx-auto"
        >
          Military science fiction by Martin James. A freelance bot operator. Warring factions on a frontier. And technology nobody is willing to admit the origins of.
        </motion.p>
      </div>
    </section>
  )
}

function BookCard({ book, index }: { book: Book; index: number }) {
  const reverse = index % 2 === 1
  return (
    <FadeIn>
      <div
        className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-10 md:gap-16 py-12`}
      >
        <div className="shrink-0">
          <img
            src={book.cover}
            alt={`${book.title} — ${book.series}`}
            className="w-56 md:w-72 rounded-lg shadow-2xl shadow-black/60"
            style={{ filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.6))' }}
          />
        </div>
        <div className={`flex-1 ${reverse ? 'md:text-right' : 'md:text-left'} text-center`}>
          <p className="text-xs tracking-[0.2em] uppercase text-[var(--mwio-cyan)] mb-3">
            {book.series}
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-white leading-none mb-3 mwio-glow">
            {book.title}
          </h2>
          <p className="text-xs tracking-[0.15em] uppercase text-[var(--mwio-cyan)]/70 mb-5">
            {book.status}
          </p>
          <div className={`space-y-4 ${reverse ? 'md:border-r-2 md:pr-6 md:border-l-0 md:pl-0' : 'md:border-l-2 md:pl-6'} border-[var(--mwio-cyan)]/30`}>
            {book.blurb.map((para, i) => (
              <p
                key={i}
                className={`text-base leading-relaxed ${
                  i === book.blurb.length - 1 ? 'text-white font-medium italic' : 'text-white/70'
                }`}
              >
                {para}
              </p>
            ))}
          </div>
        </div>
      </div>
    </FadeIn>
  )
}

function BooksSection() {
  return (
    <section id="books" className="py-16 px-6 bg-[var(--mwio-bg)]">
      <div className="max-w-5xl mx-auto">
        {BOOKS.map((book, i) => (
          <BookCard key={book.id} book={book} index={i} />
        ))}
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
              Join the Reader List
            </h2>
            <p className="text-base text-white/60 leading-relaxed mb-8">
              New releases, bonus chapters, and early access to the next book in the Controllers series.
            </p>
            <a
              href="https://mailer.martinjames.world/subscribe/martin-james"
              className="inline-flex items-center justify-center gap-2 w-full px-7 py-4 bg-[var(--mwio-cyan)] text-[#0a0a0a] font-semibold text-base rounded-lg hover:brightness-110 transition mwio-btn-glow"
            >
              <Mail size={18} />
              Subscribe
            </a>
            <p className="text-xs text-white/30 mt-5">
              No spam, ever.
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
          &copy; {new Date().getFullYear()} Martin James
        </span>
      </div>
    </footer>
  )
}

export default function MartinJamesWorldHome() {
  return (
    <div className="min-h-screen bg-[var(--mwio-bg)] text-white" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
      <Navbar />
      <main>
        <HeroSection />
        <BooksSection />
        <SignupSection />
      </main>
      <Footer />
    </div>
  )
}
