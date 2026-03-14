'use client'

import { motion } from 'framer-motion'
import { Github, Puzzle, Shield, Zap } from 'lucide-react'

const HIGHLIGHTS = [
  { icon: Github, label: '191K+ GitHub Stars', description: 'One of the most popular open-source AI frameworks' },
  { icon: Puzzle, label: '50+ Integrations', description: 'Connects to every major marketing platform' },
  { icon: Shield, label: 'Open Source', description: 'Transparent, auditable, community-driven' },
  { icon: Zap, label: 'Battle-Tested', description: 'Used by thousands of companies in production' },
]

export default function OpenClawSection() {
  return (
    <section className="py-20 px-6 bg-[#f8fafc]">
      <div className="max-w-6xl mx-auto">
        <p
          className="text-sm tracking-widest uppercase text-[#3b82f6] mb-4"
          style={{ fontFamily: 'var(--mw-mono)' }}
        >
          The Foundation
        </p>
        <h2
          className="text-3xl md:text-4xl font-bold text-[#0f172a] mb-4"
          style={{ fontFamily: 'var(--mw-sans)' }}
        >
          Built on OpenClaw
        </h2>
        <p className="text-[#64748b] text-lg mb-12 max-w-2xl font-light">
          OpenClaw is the leading open-source framework for building AI agent teams. OpenClaw Marketing deploys and manages OpenClaw agents so you don&apos;t have to.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {HIGHLIGHTS.map((item, i) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.label}
                className="bg-white border border-[#e2e8f0] rounded-lg p-6 hover:border-[#3b82f6]/30 transition-colors"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <div className="w-10 h-10 rounded-md bg-[#3b82f6]/10 flex items-center justify-center mb-4">
                  <Icon size={20} className="text-[#3b82f6]" />
                </div>
                <h3
                  className="text-base font-semibold text-[#0f172a] mb-1"
                  style={{ fontFamily: 'var(--mw-sans)' }}
                >
                  {item.label}
                </h3>
                <p className="text-sm text-[#64748b]">{item.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
