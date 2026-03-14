'use client'

import { motion } from 'framer-motion'
import { Phone, Settings, Rocket, TrendingUp } from 'lucide-react'

const STEPS = [
  {
    icon: Phone,
    step: '01',
    title: 'Strategy Call',
    description: '30-minute call to understand your business, goals, and channels. We design your agent team.',
  },
  {
    icon: Settings,
    step: '02',
    title: 'Agent Setup',
    description: 'We configure your AI agents, connect your tools, set your brand voice, and define KPIs.',
  },
  {
    icon: Rocket,
    step: '03',
    title: 'Launch',
    description: 'Your team goes live within 48 hours. Agents start executing across all assigned channels.',
  },
  {
    icon: TrendingUp,
    step: '04',
    title: 'Optimize',
    description: 'We monitor performance, tune strategies, and scale what works. You get weekly reports.',
  },
]

export default function HowItWorksSection() {
  return (
    <section className="py-20 px-6 bg-[#f8fafc]">
      <div className="max-w-6xl mx-auto">
        <p
          className="text-sm tracking-widest uppercase text-[#3b82f6] mb-4"
          style={{ fontFamily: 'var(--mw-mono)' }}
        >
          Process
        </p>
        <h2
          className="text-3xl md:text-4xl font-bold text-[#0f172a] mb-12"
          style={{ fontFamily: 'var(--mw-sans)' }}
        >
          How It Works
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {STEPS.map((step, i) => {
            const Icon = step.icon
            return (
              <motion.div
                key={step.step}
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-md bg-[#3b82f6]/10 flex items-center justify-center">
                    <Icon size={20} className="text-[#3b82f6]" />
                  </div>
                  <span
                    className="text-xs text-[#94a3b8] tracking-wider"
                    style={{ fontFamily: 'var(--mw-mono)' }}
                  >
                    Step {step.step}
                  </span>
                </div>
                <h3
                  className="text-lg font-semibold text-[#0f172a] mb-2"
                  style={{ fontFamily: 'var(--mw-sans)' }}
                >
                  {step.title}
                </h3>
                <p className="text-sm text-[#64748b] leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
