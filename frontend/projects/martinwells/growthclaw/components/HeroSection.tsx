'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Clock, Sparkles, XCircle } from 'lucide-react'
import OrgChart from './OrgChart'

const TRUST_INDICATORS = [
  { icon: Clock, text: 'Setup in 48 hours' },
  { icon: Sparkles, text: 'No technical skills needed' },
  { icon: XCircle, text: 'Cancel anytime' },
]

export default function HeroSection() {
  return (
    <section className="pt-32 pb-20 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-16">
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
            OpenClaw Marketing
          </p>
          <h1
            className="text-4xl md:text-6xl font-bold text-[#0f172a] leading-[1.1] mb-6"
            style={{ fontFamily: 'var(--mw-sans)' }}
          >
            Your AI Marketing Team.{' '}
            <span className="text-[#3b82f6]">Powered by OpenClaw.</span>
          </h1>
          <p
            className="text-xl text-[#64748b] max-w-xl leading-relaxed font-light mb-8"
            style={{ fontFamily: 'var(--mw-sans)' }}
          >
            We deploy and manage a team of AI marketing agents for your business — so you get the output of a full marketing department without the headcount.
          </p>

          <div className="flex flex-wrap gap-4 mb-8">
            {TRUST_INDICATORS.map((item, i) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.text}
                  className="flex items-center gap-2 text-sm text-[#64748b]"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.1, duration: 0.4 }}
                  style={{ fontFamily: 'var(--mw-mono)' }}
                >
                  <Icon size={14} className="text-[#3b82f6]" />
                  {item.text}
                </motion.div>
              )
            })}
          </div>

          <a
            href="https://cal.com/martinwells"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#0f172a] text-white text-sm font-medium rounded hover:bg-[#1e293b] transition-colors"
            style={{ fontFamily: 'var(--mw-sans)' }}
          >
            <ArrowRight size={16} />
            Book a Strategy Call
          </a>
        </motion.div>

        <motion.div
          className="shrink-0 w-full md:w-auto"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <OrgChart />
        </motion.div>
      </div>
    </section>
  )
}
