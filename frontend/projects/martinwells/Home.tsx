'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X, ArrowRight, Mail, Linkedin, ExternalLink, Download } from 'lucide-react'
import './styles.css'

const NAV_LINKS = [
  { label: 'Services', href: '#services' },
  { label: 'Resources', href: '#resources' },
  { label: 'Blog', href: '/blog' },
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
      <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row md:items-start md:justify-between gap-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex-1"
        >
          <p
            className="text-sm tracking-widest uppercase text-[#3b82f6] mb-6"
            style={{ fontFamily: 'var(--mw-mono)' }}
          >
            San Francisco & Sydney
          </p>
          <h1
            className="text-5xl md:text-7xl font-bold text-[#0f172a] leading-[1.1] mb-6"
            style={{ fontFamily: 'var(--mw-sans)' }}
          >
            I help companies ship faster and scale smarter.
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
            30+ companies advised. $250M+ in funding raised. 10 acquisitions to Meta, Sony, Zynga, and AOL. I bring the technical leadership that gets startups from zero to exit.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href="https://cal.com/martinwells"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#0f172a] text-white text-sm font-medium rounded hover:bg-[#1e293b] transition-colors"
              style={{ fontFamily: 'var(--mw-sans)' }}
            >
              <ArrowRight size={16} />
              Book a Call
            </a>
            <a
              href="https://superworknow.substack.com/subscribe"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-[#e2e8f0] text-[#0f172a] text-sm font-medium rounded hover:border-[#3b82f6]/30 transition-colors"
              style={{ fontFamily: 'var(--mw-sans)' }}
            >
              <Mail size={16} />
              Subscribe to Newsletter
            </a>
          </div>
          <div className="mt-6 flex items-center gap-1 text-sm text-[#94a3b8]" style={{ fontFamily: 'var(--mw-mono)' }}>
            <span className="inline-block w-2 h-2 bg-green-400 rounded-full mr-2" />
            Available for new engagements
          </div>
        </motion.div>
        <motion.div
          className="shrink-0"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <img
            src="/projects/martinwells/profile.jpeg"
            alt="Martin Wells"
            className="w-48 h-48 md:w-64 md:h-64 rounded-2xl object-cover shadow-lg"
          />
        </motion.div>
      </div>
    </section>
  )
}

const CLIENT_LOGOS = [
  { name: 'IAG', src: '/projects/martinwells/logos/iag.png' },
  { name: 'Channel 7', src: '/projects/martinwells/logos/channel7.png' },
  { name: 'Mirvac', src: '/projects/martinwells/logos/mirvac.png', invert: true },
  { name: 'Raiz', src: '/projects/martinwells/logos/raiz.webp' },
  { name: 'Rethink', src: '/projects/martinwells/logos/rethink.png' },
  { name: 'Asset Future', src: '/projects/martinwells/logos/assetfuture.webp' },
]

function ClientLogosSection() {
  return (
    <section className="py-12 px-6 border-b border-[#e2e8f0]">
      <div className="max-w-6xl mx-auto">
        <p
          className="text-xs tracking-widest uppercase text-[#94a3b8] text-center mb-8"
          style={{ fontFamily: 'var(--mw-mono)' }}
        >
          Trusted by
        </p>
        <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16">
          {CLIENT_LOGOS.map(logo => (
            <img
              key={logo.name}
              src={logo.src}
              alt={logo.name}
              className="h-8 md:h-10 object-contain opacity-50 hover:opacity-80 transition-opacity grayscale"
              style={logo.invert ? { filter: 'grayscale(100%) invert(1) brightness(0)' } : undefined}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

const SERVICES = [
  {
    title: 'Fractional CTO',
    description: 'Get a seasoned technical co-founder without the equity cost. Your team ships faster, your architecture scales, and your investors sleep better.',
    items: ['Technical architecture & roadmaps', 'Team building & mentorship', 'Infrastructure audits', 'Dev process optimization'],
  },
  {
    title: 'Board Advisor',
    description: 'Make smarter technology bets at the board level. I help founders and investors separate real technical risk from noise before it costs millions.',
    items: ['Technical due diligence', 'M&A evaluation', 'Technology strategy', 'AI readiness assessment'],
  },
  {
    title: 'AI Consultant',
    description: 'Skip the 6-month AI experiment that goes nowhere. I design and ship production AI systems — RAG, computer vision, LLM pipelines — that deliver measurable ROI.',
    items: ['AI product architecture', 'LLM integration & RAG systems', 'ML pipeline design', 'AI-assisted dev workflows'],
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
              <ul className="space-y-1.5 mb-6">
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
              <a
                href="https://cal.com/martinwells"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-[#3b82f6] hover:text-[#2563eb] transition-colors"
                style={{ fontFamily: 'var(--mw-sans)' }}
              >
                Book a call <ArrowRight size={14} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

const CURRENT_WORKS = [
  {
    title: 'Cakewalk AI',
    description: 'An AI agent that grows your website traffic. It gets your content cited by ChatGPT, Perplexity, and Gemini—and ranked on Google.',
    href: 'https://cakewalk.ai',
    tag: 'AI Product',
    image: '/projects/martinwells/cakewalk.png',
  },
{
    title: 'AgentHound',
    description: 'A pytest-native testing framework for AI agent workflows. Record real sessions, replay them deterministically, and assert on behavior with zero API calls.',
    href: 'https://agenthound.ai',
    tag: 'Open Source',
    image: '/projects/martinwells/agenthound-screenshot.jpg',
  },
  {
    title: 'Superwork',
    description: 'A newsletter about the future of work, AI, and building things that matter.',
    href: 'https://superworknow.substack.com/subscribe',
    tag: 'Newsletter',
    image: '/projects/martinwells/superwork.png',
  },
]

function CurrentWorksSection() {
  return (
    <section id="current-works" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <p
          className="text-sm tracking-widest uppercase text-[#3b82f6] mb-4"
          style={{ fontFamily: 'var(--mw-mono)' }}
        >
          What I&apos;m Working On
        </p>
        <h2
          className="text-3xl md:text-4xl font-bold text-[#0f172a] mb-12"
          style={{ fontFamily: 'var(--mw-sans)' }}
        >
          Current Works
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {CURRENT_WORKS.map((work, i) => {
            const isExternal = work.href.startsWith('http')
            return (
            <motion.a
              key={work.title}
              href={work.href}
              {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              className="group bg-white border border-[#e2e8f0] rounded-lg p-8 hover:border-[#3b82f6]/30 transition-colors flex gap-6 items-start"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              {work.image && (
                <img
                  src={work.image}
                  alt={work.title}
                  className="w-20 h-20 rounded-lg object-cover shrink-0"
                />
              )}
              <div>
                <span
                  className="inline-block px-2 py-1 text-xs tracking-wider uppercase text-[#3b82f6] border border-[#3b82f6]/20 rounded mb-4"
                  style={{ fontFamily: 'var(--mw-mono)' }}
                >
                  {work.tag}
                </span>
                <h3
                  className="text-lg font-semibold text-[#0f172a] mb-3 flex items-center gap-2"
                  style={{ fontFamily: 'var(--mw-sans)' }}
                >
                  {work.title}
                  {isExternal && <ExternalLink size={14} className="text-[#94a3b8] group-hover:text-[#3b82f6] transition-colors" />}
                  {!isExternal && <ArrowRight size={14} className="text-[#94a3b8] group-hover:text-[#3b82f6] transition-colors" />}
                </h3>
                <p className="text-[#64748b] text-sm leading-relaxed">
                  {work.description}
                </p>
              </div>
            </motion.a>
            )
          })}
        </div>
      </div>
    </section>
  )
}

const STATS = [
  { value: '30+', label: 'Companies Advised' },
  { value: '$250M+', label: 'Funding Raised' },
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
    company: 'Martin Wells',
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

const RESOURCES = [
  {
    title: 'Claude Code Infra-Ops Skill',
    description: 'A Claude Code skill for infrastructure operations — automates common DevOps tasks like deployments, monitoring, and cloud management.',
    href: '/projects/martinwells/infra-ops.skill',
    tag: 'Claude Code Skill',
    download: true,
  },
]

function ResourcesSection() {
  return (
    <section id="resources" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <p
          className="text-sm tracking-widest uppercase text-[#3b82f6] mb-4"
          style={{ fontFamily: 'var(--mw-mono)' }}
        >
          Free Downloads
        </p>
        <h2
          className="text-3xl md:text-4xl font-bold text-[#0f172a] mb-12"
          style={{ fontFamily: 'var(--mw-sans)' }}
        >
          Resources
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {RESOURCES.map((resource, i) => (
            <motion.a
              key={resource.title}
              href={resource.href}
              download={resource.download}
              className="group bg-white border border-[#e2e8f0] rounded-lg p-8 hover:border-[#3b82f6]/30 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <span
                className="inline-block px-2 py-1 text-xs tracking-wider uppercase text-[#3b82f6] border border-[#3b82f6]/20 rounded mb-4"
                style={{ fontFamily: 'var(--mw-mono)' }}
              >
                {resource.tag}
              </span>
              <h3
                className="text-lg font-semibold text-[#0f172a] mb-3 flex items-center gap-2"
                style={{ fontFamily: 'var(--mw-sans)' }}
              >
                {resource.title}
                <Download size={14} className="text-[#94a3b8] group-hover:text-[#3b82f6] transition-colors" />
              </h3>
              <p className="text-[#64748b] text-sm leading-relaxed">
                {resource.description}
              </p>
            </motion.a>
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
              href="https://cal.com/martinwells"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#0f172a] text-white text-sm font-medium rounded hover:bg-[#1e293b] transition-colors"
              style={{ fontFamily: 'var(--mw-sans)' }}
            >
              <ArrowRight size={16} />
              Book a Call
            </a>
            <a
              href="mailto:martin.wells@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3 border border-[#e2e8f0] text-[#0f172a] text-sm font-medium rounded hover:border-[#3b82f6]/30 transition-colors"
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
  useEffect(() => {
    const serverUrl = process.env.NEXT_PUBLIC_CHATBOSS_URL
    const apiKey = process.env.NEXT_PUBLIC_CHATBOSS_API_KEY
    if (!serverUrl || !apiKey) return

    // Don't add if already loaded
    if (document.getElementById('chatboss-widget')) return

    const script = document.createElement('script')
    script.src = `${serverUrl}/widget/${apiKey}/chatboss.js`
    script.async = true
    document.body.appendChild(script)
  }, [])

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: 'var(--mw-sans)' }}>
      <Navbar />
      <main>
        <HeroSection />
        <ClientLogosSection />
        <ServicesSection />
        <TrackRecordSection />
        <ExperienceSection />
        <CurrentWorksSection />
        <ResourcesSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
