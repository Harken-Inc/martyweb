'use client'

import { motion } from 'framer-motion'
import { ShieldCheck, Eye, RotateCcw, SlidersHorizontal, AlertTriangle, KeyRound } from 'lucide-react'

const SAFEGUARDS = [
  {
    icon: Eye,
    title: 'Human-in-the-Loop',
    description: 'Nothing goes live without your approval. Set review gates on any action — posts, emails, ad spend — so you always have final say.',
  },
  {
    icon: SlidersHorizontal,
    title: 'Configurable Guardrails',
    description: 'Define spending limits, topic boundaries, tone constraints, and banned phrases. Agents operate strictly within your rules.',
  },
  {
    icon: AlertTriangle,
    title: 'Anomaly Detection',
    description: 'Agents flag unusual activity — sudden spend spikes, off-brand content, or unexpected engagement drops — before taking action.',
  },
  {
    icon: RotateCcw,
    title: 'Instant Rollback',
    description: 'Every action is logged with full history. Undo any change or revert to a previous state with a single command.',
  },
  {
    icon: KeyRound,
    title: 'Scoped Permissions',
    description: 'Each agent only has access to the platforms and actions it needs. No agent can exceed its defined scope.',
  },
  {
    icon: ShieldCheck,
    title: 'Brand Voice Lock',
    description: 'Your brand guidelines, tone, and messaging rules are enforced at the system level. Agents can\'t drift from your voice.',
  },
]

export default function SafetySection() {
  return (
    <section className="py-20 px-6 bg-[#f8fafc]">
      <div className="max-w-6xl mx-auto">
        <p
          className="text-sm tracking-widest uppercase text-[#3b82f6] mb-4"
          style={{ fontFamily: 'var(--mw-mono)' }}
        >
          Safety
        </p>
        <h2
          className="text-3xl md:text-4xl font-bold text-[#0f172a] mb-4"
          style={{ fontFamily: 'var(--mw-sans)' }}
        >
          Built-in Guardrails. Zero Surprises.
        </h2>
        <p className="text-[#64748b] text-lg mb-12 max-w-2xl font-light">
          AI agents are powerful — but only when you can trust them. Every agent ships with safety defaults you can tighten or loosen to match your comfort level.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SAFEGUARDS.map((item, i) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.title}
                className="bg-white border border-[#e2e8f0] rounded-lg p-6 hover:border-[#3b82f6]/30 transition-colors"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
              >
                <div className="w-10 h-10 rounded-md bg-[#3b82f6]/10 flex items-center justify-center mb-4">
                  <Icon size={20} className="text-[#3b82f6]" />
                </div>
                <h3
                  className="text-base font-semibold text-[#0f172a] mb-2"
                  style={{ fontFamily: 'var(--mw-sans)' }}
                >
                  {item.title}
                </h3>
                <p className="text-sm text-[#64748b] leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
