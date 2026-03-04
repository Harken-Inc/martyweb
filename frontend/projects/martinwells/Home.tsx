'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Menu, X, ArrowRight, Mail, Linkedin, ExternalLink } from 'lucide-react'
import './styles.css'

const NAV_LINKS = [
  { label: 'Services', href: '#services' },
  { label: 'Track Record', href: '#track-record' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-[#e2e8f0]">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="/" className="text-lg font-semibold text-[#0f172a]" style={{ fontFamily: 'var(--mw-sans)' }}>
          martin<span className="text-[#3b82f6]">wells</span>
        </a>
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(link => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-[#64748b] hover:text-[#0f172a] transition-colors"
              style={{ fontFamily: 'var(--mw-sans)' }}
            >
              {link.label}
            </a>
          ))}
        </div>
        <button
          className="md:hidden text-[#0f172a]"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-white border-b border-[#e2e8f0] px-6 pb-4">
          {NAV_LINKS.map(link => (
            <a
              key={link.href}
              href={link.href}
              className="block py-2 text-sm text-[#64748b] hover:text-[#0f172a]"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}

function HeroSection() {
  return (
    <section className="pt-32 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p
            className="text-sm tracking-widest uppercase text-[#3b82f6] mb-6"
            style={{ fontFamily: 'var(--mw-mono)' }}
          >
            Seattle, WA
          </p>
          <h1
            className="text-5xl md:text-7xl font-bold text-[#0f172a] leading-[1.1] mb-6"
            style={{ fontFamily: 'var(--mw-sans)' }}
          >
            Martin Wells
          </h1>
          <div className="flex flex-wrap gap-3 mb-8">
            {['Fractional CTO', 'Board Advisor', 'AI Consultant', 'Author'].map(role => (
              <span
                key={role}
                className="px-3 py-1.5 text-sm border border-[#e2e8f0] text-[#64748b] rounded"
                style={{ fontFamily: 'var(--mw-mono)' }}
              >
                {role}
              </span>
            ))}
          </div>
          <p
            className="text-xl md:text-2xl text-[#64748b] max-w-2xl leading-relaxed font-light"
            style={{ fontFamily: 'var(--mw-sans)' }}
          >
            I help startups grow fast. From architecting scalable AI products to
            fixing vibe-coded messes, I turn technical complexity into competitive advantage.
          </p>
        </motion.div>
        <motion.div
          className="mt-12 flex items-center gap-1 text-sm text-[#94a3b8]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          style={{ fontFamily: 'var(--mw-mono)' }}
        >
          <span className="inline-block w-2 h-2 bg-green-400 rounded-full mr-2" />
          Available for new engagements
        </motion.div>
      </div>
    </section>
  )
}

const SERVICES = [
  {
    title: 'Fractional CTO',
    description: 'Technical leadership for startups that need senior engineering guidance without the full-time commitment. I embed with your team to architect, build, and ship.',
    items: ['Technical architecture & roadmaps', 'Team building & mentorship', 'Infrastructure audits', 'Dev process optimization'],
  },
  {
    title: 'Board Advisor',
    description: 'Strategic technology guidance at the board level. I help companies and investors evaluate technical risk, opportunity, and execution.',
    items: ['Technical due diligence', 'M&A evaluation', 'Technology strategy', 'AI readiness assessment'],
  },
  {
    title: 'AI Consultant',
    description: 'Hands-on AI/ML expertise from RAG architectures to computer vision pipelines. I help teams adopt AI that actually works in production.',
    items: ['AI product architecture', 'LLM integration & RAG systems', 'ML pipeline design', 'AI-assisted dev workflows'],
  },
  {
    title: 'Author',
    description: 'Writing about the intersection of technology, AI, and building companies. Sharing hard-won lessons from two decades of shipping products.',
    items: ['Technical leadership', 'AI strategy', 'Startup engineering', 'Product development'],
  },
]

function ServicesSection() {
  return (
    <section id="services" className="py-20 px-6 bg-[#f8fafc]">
      <div className="max-w-6xl mx-auto">
        <p
          className="text-sm tracking-widest uppercase text-[#3b82f6] mb-4"
          style={{ fontFamily: 'var(--mw-mono)' }}
        >
          What I Do
        </p>
        <h2
          className="text-3xl md:text-4xl font-bold text-[#0f172a] mb-12"
          style={{ fontFamily: 'var(--mw-sans)' }}
        >
          Services
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.title}
              className="bg-white border border-[#e2e8f0] rounded-lg p-8 hover:border-[#3b82f6]/30 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <h3
                className="text-lg font-semibold text-[#0f172a] mb-3"
                style={{ fontFamily: 'var(--mw-sans)' }}
              >
                {service.title}
              </h3>
              <p className="text-[#64748b] text-sm leading-relaxed mb-4">
                {service.description}
              </p>
              <ul className="space-y-1.5">
                {service.items.map(item => (
                  <li
                    key={item}
                    className="text-sm text-[#94a3b8] flex items-center gap-2"
                    style={{ fontFamily: 'var(--mw-mono)' }}
                  >
                    <span className="text-[#3b82f6]">&rsaquo;</span> {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

const STATS = [
  { value: '30+', label: 'Companies Advised' },
  { value: '$600M+', label: 'Funding Raised' },
  { value: '10', label: 'Acquisitions' },
  { value: '50+', label: 'Engineers Led' },
]

const ACQUIRERS = ['Meta', 'Zynga', 'Sony', 'AOL']

function TrackRecordSection() {
  return (
    <section id="track-record" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <p
          className="text-sm tracking-widest uppercase text-[#3b82f6] mb-4"
          style={{ fontFamily: 'var(--mw-mono)' }}
        >
          Results
        </p>
        <h2
          className="text-3xl md:text-4xl font-bold text-[#0f172a] mb-12"
          style={{ fontFamily: 'var(--mw-sans)' }}
        >
          Track Record
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <div
                className="text-4xl md:text-5xl font-bold text-[#0f172a] mb-2"
                style={{ fontFamily: 'var(--mw-sans)' }}
              >
                {stat.value}
              </div>
              <div
                className="text-sm text-[#64748b]"
                style={{ fontFamily: 'var(--mw-mono)' }}
              >
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
        <div className="border border-[#e2e8f0] rounded-lg p-8 bg-[#f8fafc]">
          <p
            className="text-sm text-[#94a3b8] mb-4"
            style={{ fontFamily: 'var(--mw-mono)' }}
          >
            Facilitated acquisitions to
          </p>
          <div className="flex flex-wrap gap-4">
            {ACQUIRERS.map(name => (
              <span
                key={name}
                className="text-xl md:text-2xl font-semibold text-[#0f172a]/70"
                style={{ fontFamily: 'var(--mw-sans)' }}
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

const EXPERIENCE = [
  {
    role: 'Fractional CTO',
    company: 'Harken',
    period: '2018 - Present',
    description: 'AI product leadership across RAG systems, computer vision pipelines, and enterprise AI transformation. Built team of 20+ ML engineers.',
  },
  {
    role: 'Director',
    company: 'BuildAI',
    period: '2019 - Present',
    description: 'Building AI tools and products.',
  },
  {
    role: 'Fractional CTO',
    company: 'Raiz Invest',
    period: '2024 - 2025',
    description: 'Technical leadership for ASX-listed fintech investment platform.',
  },
  {
    role: 'Fractional CTO',
    company: 'Seven Network',
    period: '2022 - 2023',
    description: 'Led end-to-end delivery of Streamer.com.au. 2M+ users, 500K+ concurrent, 30+ person team, greenfield to production in 9 months.',
  },
  {
    role: 'Director',
    company: 'Repeat.gg',
    period: '2020 - 2022',
    description: 'Gaming platform. Acquired by Sony.',
  },
  {
    role: 'CTO',
    company: 'Mino Games (YC / a16z)',
    period: '2013 - 2015',
    description: '#1 grossing iOS game in 25 countries. 15M downloads. Backed by Andreessen Horowitz.',
  },
  {
    role: 'Founder & CEO',
    company: 'Playcraft Labs',
    period: '2011 - 2014',
    description: 'JavaScript game engine used by 15,000+ developers. Founded and managed to acquisition.',
  },
  {
    role: 'VP Engineering',
    company: 'Simraceway',
    period: '2009 - 2011',
    description: '25+ person engineering team. 3D racing simulation. Shipped retail game and racing service.',
  },
]

function ExperienceSection() {
  return (
    <section id="experience" className="py-20 px-6 bg-[#f8fafc]">
      <div className="max-w-6xl mx-auto">
        <p
          className="text-sm tracking-widest uppercase text-[#3b82f6] mb-4"
          style={{ fontFamily: 'var(--mw-mono)' }}
        >
          Background
        </p>
        <h2
          className="text-3xl md:text-4xl font-bold text-[#0f172a] mb-12"
          style={{ fontFamily: 'var(--mw-sans)' }}
        >
          Experience
        </h2>
        <div className="space-y-0">
          {EXPERIENCE.map((exp, i) => (
            <motion.div
              key={`${exp.company}-${exp.role}`}
              className="border-b border-[#e2e8f0] py-6 first:pt-0 last:border-b-0 flex flex-col md:flex-row md:items-start gap-2 md:gap-8"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
            >
              <div
                className="text-sm text-[#94a3b8] md:w-36 shrink-0"
                style={{ fontFamily: 'var(--mw-mono)' }}
              >
                {exp.period}
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-baseline gap-2 mb-1">
                  <h3
                    className="text-base font-semibold text-[#0f172a]"
                    style={{ fontFamily: 'var(--mw-sans)' }}
                  >
                    {exp.role}
                  </h3>
                  <span className="text-[#64748b] text-sm">{exp.company}</span>
                </div>
                <p className="text-sm text-[#94a3b8] leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ContactSection() {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl">
          <p
            className="text-sm tracking-widest uppercase text-[#3b82f6] mb-4"
            style={{ fontFamily: 'var(--mw-mono)' }}
          >
            Get In Touch
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold text-[#0f172a] mb-6"
            style={{ fontFamily: 'var(--mw-sans)' }}
          >
            Let&apos;s talk about your next move.
          </h2>
          <p className="text-[#64748b] text-lg leading-relaxed mb-8">
            Whether you need a fractional CTO, board-level technical guidance, or
            help navigating AI strategy, I&apos;d like to hear what you&apos;re building.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="mailto:martin.wells@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#0f172a] text-white text-sm font-medium rounded hover:bg-[#1e293b] transition-colors"
              style={{ fontFamily: 'var(--mw-sans)' }}
            >
              <Mail size={16} />
              martin.wells@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/martinjwells"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border border-[#e2e8f0] text-[#0f172a] text-sm font-medium rounded hover:border-[#3b82f6]/30 transition-colors"
              style={{ fontFamily: 'var(--mw-sans)' }}
            >
              <Linkedin size={16} />
              LinkedIn
              <ExternalLink size={12} className="text-[#94a3b8]" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="border-t border-[#e2e8f0] py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <span
          className="text-sm text-[#94a3b8]"
          style={{ fontFamily: 'var(--mw-mono)' }}
        >
          &copy; {new Date().getFullYear()} Martin Wells
        </span>
        <div className="flex items-center gap-6">
          <a
            href="https://cakewalk.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-[#94a3b8] hover:text-[#0f172a] transition-colors"
            style={{ fontFamily: 'var(--mw-mono)' }}
          >
            cakewalk.ai
          </a>
          <a
            href="https://www.linkedin.com/in/martinjwells"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-[#94a3b8] hover:text-[#0f172a] transition-colors"
          >
            <Linkedin size={16} />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default function MartinWellsHome() {
  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: 'var(--mw-sans)' }}>
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <TrackRecordSection />
        <ExperienceSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
