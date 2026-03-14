'use client'

import { useState } from 'react'
import { Menu, X, ArrowRight, Linkedin } from 'lucide-react'
import '../styles.css'

import HeroSection from './components/HeroSection'
import PainPointSection from './components/PainPointSection'
import AgentTeamSection from './components/AgentTeamSection'
import HowItWorksSection from './components/HowItWorksSection'
import ComparisonSection from './components/ComparisonSection'
import OpenClawSection from './components/OpenClawSection'
import YourSystemSection from './components/YourSystemSection'
import SafetySection from './components/SafetySection'
import FAQSection from './components/FAQSection'
import CTASection from './components/CTASection'

const NAV_LINKS = [
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Your Team', href: '#your-team' },
  { label: 'FAQ', href: '#faq' },
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
          <a
            href="https://cal.com/martinwells"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#0f172a] text-white text-sm font-medium rounded hover:bg-[#1e293b] transition-colors"
            style={{ fontFamily: 'var(--mw-sans)' }}
          >
            <ArrowRight size={14} />
            Book a Call
          </a>
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
          <a
            href="https://cal.com/martinwells"
            target="_blank"
            rel="noopener noreferrer"
            className="block py-2 text-sm text-[#3b82f6] font-medium"
            onClick={() => setOpen(false)}
          >
            Book a Call
          </a>
        </div>
      )}
    </nav>
  )
}

function Footer() {
  return (
    <footer className="border-t border-[#e2e8f0] py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <span
            className="text-sm text-[#94a3b8]"
            style={{ fontFamily: 'var(--mw-mono)' }}
          >
            &copy; {new Date().getFullYear()} Martin Wells
          </span>
          <a
            href="/"
            className="text-sm text-[#94a3b8] hover:text-[#0f172a] transition-colors"
            style={{ fontFamily: 'var(--mw-mono)' }}
          >
            martinwells.com
          </a>
        </div>
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

export default function GrowthClawPage() {
  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: 'var(--mw-sans)' }}>
      <Navbar />
      <main>
        <HeroSection />
        <PainPointSection />
        <div id="your-team">
          <AgentTeamSection />
        </div>
        <div id="how-it-works">
          <HowItWorksSection />
        </div>
        <ComparisonSection />
        <OpenClawSection />
        <YourSystemSection />
        <SafetySection />
        <div id="faq">
          <FAQSection />
        </div>
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
