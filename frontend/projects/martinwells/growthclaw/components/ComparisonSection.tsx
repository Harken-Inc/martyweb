'use client'

import { motion } from 'framer-motion'
import { Check, X, Minus } from 'lucide-react'

const ROWS = [
  { label: 'Setup Time', diy: 'Weeks', team: '2-3 months', openclaw: '48 hours' },
  { label: 'Monthly Cost', diy: '$0 (your time)', team: '$15K-$50K+', openclaw: 'From $250/agent*' },
  { label: 'Technical Skills', diy: 'Required', team: 'Not needed', openclaw: 'Not needed' },
  { label: 'Scaling', diy: 'Manual', team: 'Hire more people', openclaw: 'Add more agents' },
  { label: 'Availability', diy: 'Your hours', team: 'Business hours', openclaw: '24/7' },
  { label: 'Coordination', diy: 'Just you', team: 'Meetings & overhead', openclaw: 'AI-orchestrated' },
]

export default function ComparisonSection() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <p
          className="text-sm tracking-widest uppercase text-[#3b82f6] mb-4"
          style={{ fontFamily: 'var(--mw-mono)' }}
        >
          Compare
        </p>
        <h2
          className="text-3xl md:text-4xl font-bold text-[#0f172a] mb-12"
          style={{ fontFamily: 'var(--mw-sans)' }}
        >
          Why OpenClaw Marketing?
        </h2>

        <motion.div
          className="overflow-x-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <table className="w-full min-w-[600px]">
            <thead>
              <tr>
                <th
                  className="text-left text-sm font-medium text-[#94a3b8] pb-4 pr-4"
                  style={{ fontFamily: 'var(--mw-mono)' }}
                />
                <th
                  className="text-left text-sm font-medium text-[#94a3b8] pb-4 px-4"
                  style={{ fontFamily: 'var(--mw-mono)' }}
                >
                  DIY OpenClaw
                </th>
                <th
                  className="text-left text-sm font-medium text-[#94a3b8] pb-4 px-4"
                  style={{ fontFamily: 'var(--mw-mono)' }}
                >
                  Full Marketing Team
                </th>
                <th
                  className="text-left text-sm font-medium text-[#0f172a] pb-4 px-4 border-b-2 border-[#3b82f6]"
                  style={{ fontFamily: 'var(--mw-mono)' }}
                >
                  OpenClaw Marketing
                </th>
              </tr>
            </thead>
            <tbody>
              {ROWS.map((row, i) => (
                <tr key={row.label} className="border-b border-[#e2e8f0]">
                  <td
                    className="py-4 pr-4 text-sm font-medium text-[#0f172a]"
                    style={{ fontFamily: 'var(--mw-sans)' }}
                  >
                    {row.label}
                  </td>
                  <td className="py-4 px-4 text-sm text-[#94a3b8]">{row.diy}</td>
                  <td className="py-4 px-4 text-sm text-[#94a3b8]">{row.team}</td>
                  <td className="py-4 px-4 text-sm text-[#0f172a] font-medium bg-[#3b82f6]/5">
                    {row.openclaw}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="text-xs text-[#94a3b8] mt-4" style={{ fontFamily: 'var(--mw-mono)' }}>
            *Excludes AI API costs and third-party services. These are determined during setup.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
