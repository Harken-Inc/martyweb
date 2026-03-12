'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Menu, X, ArrowRight, Mail, Linkedin, ExternalLink, ChevronRight, Zap, Map, Clock, Users } from 'lucide-react'
import './styles.css'

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Clients', href: '#clients' },
  { label: 'Team', href: '#team' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '#contact' },
]

function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b border-white/10" style={{ backgroundColor: 'rgba(15, 10, 26, 0.8)' }}>
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="/">
          <img src="/projects/harken/logo.png" alt="Harken" className="h-8" />
        </a>
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(link => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-[#94a3b8] hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="text-sm font-medium px-4 py-2 rounded-lg hk-gradient-bg text-white hover:opacity-90 transition-opacity"
          >
            Get in Touch
          </a>
        </div>
        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-b border-white/10 px-6 pb-4" style={{ backgroundColor: 'rgba(15, 10, 26, 0.95)' }}>
          {NAV_LINKS.map(link => (
            <a
              key={link.href}
              href={link.href}
              className="block py-2 text-sm text-[#94a3b8] hover:text-white"
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
    <section className="pt-32 pb-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at center top, rgba(124, 58, 237, 0.15), transparent 70%)' }} />
      <div className="max-w-6xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-[1.1] mb-6">
            Accelerate your business{' '}
            <span className="hk-gradient-text">into Tomorrow.</span>
          </h1>
          <p className="text-xl md:text-2xl text-[#94a3b8] max-w-2xl mx-auto leading-relaxed font-light mb-10">
            Bring AI to life with world-class data-science, AI and automation.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg hk-gradient-bg text-white font-semibold hover:opacity-90 transition-opacity text-lg"
            >
              Get in Touch
              <ArrowRight size={20} />
            </a>
          </div>
          <p className="mt-4 text-sm text-[#64748b]">
            Book a call with an AI Solutions Specialist to talk about your idea.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

const CLIENTS = [
  { name: 'IAG', src: '/projects/martinwells/logos/iag.png' },
  { name: 'Channel 7', src: '/projects/martinwells/logos/channel7.png' },
  { name: 'Mirvac', src: '/projects/martinwells/logos/mirvac.png', invert: true },
  { name: 'Raiz', src: '/projects/martinwells/logos/raiz.webp' },
  { name: 'Rethink', src: '/projects/martinwells/logos/rethink.png' },
  { name: 'Asset Future', src: '/projects/martinwells/logos/assetfuture.webp' },
]

function ClientsSection() {
  return (
    <section id="clients" className="py-16 px-6 border-y border-white/10">
      <div className="max-w-6xl mx-auto">
        <p className="text-xs tracking-widest uppercase text-[#64748b] text-center mb-8">
          Trusted by Great Companies
        </p>
        <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16">
          {CLIENTS.map(logo => (
            <img
              key={logo.name}
              src={logo.src}
              alt={logo.name}
              className="h-8 md:h-10 object-contain opacity-60 hover:opacity-90 transition-opacity brightness-0 invert"
              style={logo.invert ? { filter: 'brightness(0) invert(1)' } : { filter: 'brightness(0) invert(1)' }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

const SERVICES = [
  {
    icon: <Zap size={28} />,
    title: 'Leverage AI Effectively',
    description: 'Identify key areas within your business where AI can enhance efficiency, automate repetitive tasks, or provide valuable insights. We help you choose the right tools and platforms aligned with your goals.',
    items: ['Identify high-impact AI opportunities', 'Select the right tools and platforms', 'Automate workflows and unlock insights'],
  },
  {
    icon: <Map size={28} />,
    title: 'AI Roadmap',
    description: 'AI is a fundamental business shift. We help you invest strategically in AI infrastructure — data systems, workflows, and team development — to capitalize on AI both immediately and long-term.',
    items: ['Strategic AI infrastructure planning', 'Data systems and workflow design', 'Team training and development'],
  },
  {
    icon: <Clock size={28} />,
    title: 'Zero to AI in 3 Weeks',
    description: 'We achieve average 3-week deployment timelines using established use-case playbooks and proven technology platforms that deliver immediate high-impact results.',
    items: ['Proven use-case playbooks', 'Rapid 3-week average deployment', 'Immediate measurable results'],
  },
]

function ServicesSection() {
  return (
    <section id="services" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm tracking-widest uppercase text-[#7C3AED] mb-4">What We Do</p>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            AI Solutions That <span className="hk-gradient-text">Deliver</span>
          </h2>
          <p className="text-lg text-[#94a3b8] max-w-2xl mx-auto">
            From strategy to deployment, we bring AI to life in your business.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.title}
              className="rounded-xl p-8 border border-white/10 hover:border-[#7C3AED]/40 transition-colors hk-glow"
              style={{ backgroundColor: 'rgba(26, 16, 37, 0.6)' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <div className="text-[#7C3AED] mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
              <p className="text-[#94a3b8] text-sm leading-relaxed mb-5">{service.description}</p>
              <ul className="space-y-2">
                {service.items.map(item => (
                  <li key={item} className="text-sm text-[#64748b] flex items-center gap-2">
                    <ChevronRight size={14} className="text-[#7C3AED]" /> {item}
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

function TeamSection() {
  return (
    <section id="team" className="py-24 px-6" style={{ backgroundColor: 'rgba(26, 16, 37, 0.4)' }}>
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm tracking-widest uppercase text-[#7C3AED] mb-4">Your Secret Weapon</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              World-class <span className="hk-gradient-text">AI talent</span>
            </h2>
            <p className="text-[#94a3b8] leading-relaxed mb-6">
              Our team comprises experienced professionals from Meta, Google, and Uber. Senior Product Managers, Designers, Machine Learning PhDs, Data Engineers, Data Scientists, and Solution Architects — a specialized unit with a demonstrated track record.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-[#7C3AED] font-medium hover:text-[#8B5CF6] transition-colors"
            >
              Meet the team <ArrowRight size={16} />
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {['Meta', 'Google', 'Uber'].map((company, i) => (
              <div
                key={company}
                className={`rounded-xl p-6 border border-white/10 text-center ${i === 2 ? 'col-span-2' : ''}`}
                style={{ backgroundColor: 'rgba(26, 16, 37, 0.6)' }}
              >
                <p className="text-2xl font-bold text-white mb-1">{company}</p>
                <p className="text-xs text-[#64748b]">Alumni</p>
              </div>
            ))}
            <div className="col-span-2 grid grid-cols-3 gap-4">
              {['ML PhDs', 'Data Engineers', 'Solution Architects'].map(role => (
                <div
                  key={role}
                  className="rounded-xl p-4 border border-white/10 text-center"
                  style={{ backgroundColor: 'rgba(26, 16, 37, 0.6)' }}
                >
                  <p className="text-xs text-[#94a3b8]">{role}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

const TESTIMONIALS = [
  {
    quote: 'The team at Harken were brilliant at helping us refine our offering using AI in construction.',
    name: 'Kristian',
    title: 'Founder & CEO, Build AI',
  },
  {
    quote: 'Foundational to leveraging AI is how well your business knows its digital processes and data.',
    name: 'Martin Wells',
    title: 'Founder & CEO, Harken Group',
  },
  {
    quote: "Leveraging Harken's use case playbooks and automations means extremely rapid deployments.",
    name: 'Peter Hanna',
    title: 'GM, Harken AI',
  },
]

function TestimonialsSection() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm tracking-widest uppercase text-[#7C3AED] mb-4">Testimonials</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            What people are <span className="hk-gradient-text">saying</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.name}
              className="rounded-xl p-8 border border-white/10"
              style={{ backgroundColor: 'rgba(26, 16, 37, 0.6)' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <p className="text-[#E2E8F0] leading-relaxed mb-6 italic">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div>
                <p className="text-white font-semibold text-sm">{t.name}</p>
                <p className="text-[#64748b] text-xs">{t.title}</p>
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
    <section id="contact" className="py-24 px-6" style={{ backgroundColor: 'rgba(26, 16, 37, 0.4)' }}>
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-sm tracking-widest uppercase text-[#7C3AED] mb-4">Get In Touch</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to bring AI to your business?
          </h2>
          <p className="text-[#94a3b8] text-lg leading-relaxed mb-10">
            Book a call with an AI Solutions Specialist to talk about your idea. We&apos;ll help you find the fastest path from concept to deployment.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <a
              href="mailto:sales@harken.ai"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg hk-gradient-bg text-white font-medium hover:opacity-90 transition-opacity"
            >
              <Mail size={18} />
              sales@harken.ai
            </a>
            <a
              href="https://www.linkedin.com/company/harken-ai"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-white/10 text-white font-medium hover:border-[#7C3AED]/40 transition-colors"
            >
              <Linkedin size={18} />
              LinkedIn
              <ExternalLink size={14} className="text-[#64748b]" />
            </a>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-[#64748b]">
            <span>USA: +1 408 966-1763</span>
            <span className="hidden sm:inline">|</span>
            <span>Australia: +61 466 837-800</span>
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="border-t border-white/10 py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="text-sm text-[#64748b]">
          &copy; {new Date().getFullYear()} Harken, Inc
        </span>
        <div className="flex items-center gap-6">
          <a href="mailto:sales@harken.ai" className="text-sm text-[#64748b] hover:text-white transition-colors">
            sales@harken.ai
          </a>
          <a
            href="https://www.linkedin.com/company/harken-ai"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#64748b] hover:text-white transition-colors"
          >
            <Linkedin size={16} />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default function HarkenHome() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--hk-dark)' }}>
      <Navbar />
      <main>
        <HeroSection />
        <ClientsSection />
        <ServicesSection />
        <TeamSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
