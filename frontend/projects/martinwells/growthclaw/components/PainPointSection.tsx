'use client'

import { motion } from 'framer-motion'
import { User, Users } from 'lucide-react'

const PAIN_POINTS = [
  {
    icon: User,
    audience: 'Founders',
    headline: "You can't afford a marketing team.",
    points: [
      'Hiring a marketing director costs $150K+/year',
      'Agencies charge retainers and deliver PowerPoints',
      "You're doing it yourself — and it shows",
    ],
  },
  {
    icon: Users,
    audience: 'Marketing Managers',
    headline: "You're drowning in channels.",
    points: [
      'Social, ads, email, SEO, PR — all on your plate',
      'Every tool has a learning curve and a monthly bill',
      "You're executing, not strategizing",
    ],
  },
]

export default function PainPointSection() {
  return (
    <section className="py-20 px-6 bg-[#f8fafc]">
      <div className="max-w-6xl mx-auto">
        <p
          className="text-sm tracking-widest uppercase text-[#3b82f6] mb-4"
          style={{ fontFamily: 'var(--mw-mono)' }}
        >
          The Problem
        </p>
        <h2
          className="text-3xl md:text-4xl font-bold text-[#0f172a] mb-12"
          style={{ fontFamily: 'var(--mw-sans)' }}
        >
          Sound familiar?
        </h2>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {PAIN_POINTS.map((point, i) => {
            const Icon = point.icon
            return (
              <motion.div
                key={point.audience}
                className="bg-white border border-[#e2e8f0] rounded-lg p-8 hover:border-[#3b82f6]/30 transition-colors"
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
                    className="text-xs tracking-wider uppercase text-[#3b82f6]"
                    style={{ fontFamily: 'var(--mw-mono)' }}
                  >
                    For {point.audience}
                  </span>
                </div>
                <h3
                  className="text-lg font-semibold text-[#0f172a] mb-4"
                  style={{ fontFamily: 'var(--mw-sans)' }}
                >
                  {point.headline}
                </h3>
                <ul className="space-y-2">
                  {point.points.map(p => (
                    <li
                      key={p}
                      className="text-sm text-[#64748b] flex items-start gap-2"
                    >
                      <span className="text-[#3b82f6] mt-0.5">&rsaquo;</span> {p}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )
          })}
        </div>

        <motion.p
          className="text-center text-lg text-[#64748b] font-light"
          style={{ fontFamily: 'var(--mw-sans)' }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          Either way, you need a team that <span className="text-[#0f172a] font-medium">never sleeps</span>.
        </motion.p>
      </div>
    </section>
  )
}
