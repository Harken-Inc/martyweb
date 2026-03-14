'use client'

import { motion } from 'framer-motion'
import { Share2, Target, Newspaper, FileSearch, Mail, BarChart3, Crown } from 'lucide-react'

const AGENTS = [
  { icon: Share2, title: 'Social Media', color: '#3b82f6' },
  { icon: Target, title: 'Ads', color: '#8b5cf6' },
  { icon: Newspaper, title: 'PR', color: '#06b6d4' },
  { icon: FileSearch, title: 'Content/SEO', color: '#10b981' },
  { icon: Mail, title: 'Email', color: '#f59e0b' },
  { icon: BarChart3, title: 'Analytics', color: '#ef4444' },
]

export default function OrgChart() {
  return (
    <div className="relative w-full max-w-[400px] mx-auto md:mx-0">
      {/* SVG connection lines */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 400 340"
        fill="none"
        preserveAspectRatio="xMidYMid meet"
      >
        {AGENTS.map((agent, i) => {
          const col = i % 3
          const row = Math.floor(i / 3)
          const endX = 67 + col * 133
          const endY = 170 + row * 110
          return (
            <motion.line
              key={agent.title}
              x1="200"
              y1="60"
              x2={endX}
              y2={endY}
              stroke="#e2e8f0"
              strokeWidth="1.5"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ delay: 0.4 + i * 0.1, duration: 0.5 }}
            />
          )
        })}
      </svg>

      {/* Director node */}
      <motion.div
        className="relative flex justify-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="bg-[#0f172a] text-white px-5 py-3 rounded-lg flex items-center gap-3 shadow-lg">
          <Crown size={18} className="text-[#3b82f6]" />
          <div>
            <div className="text-xs text-[#94a3b8] uppercase tracking-wider" style={{ fontFamily: 'var(--mw-mono)' }}>
              AI Agent
            </div>
            <div className="text-sm font-semibold" style={{ fontFamily: 'var(--mw-sans)' }}>
              Marketing Director
            </div>
          </div>
          <span className="w-2 h-2 bg-green-400 rounded-full ml-2" />
        </div>
      </motion.div>

      {/* Specialist nodes */}
      <div className="relative grid grid-cols-3 gap-3">
        {AGENTS.map((agent, i) => {
          const Icon = agent.icon
          return (
            <motion.div
              key={agent.title}
              className="bg-white border border-[#e2e8f0] rounded-lg p-3 text-center hover:border-[#3b82f6]/30 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + i * 0.1, duration: 0.4 }}
            >
              <div
                className="w-8 h-8 rounded-md flex items-center justify-center mx-auto mb-2"
                style={{ backgroundColor: `${agent.color}10` }}
              >
                <Icon size={16} style={{ color: agent.color }} />
              </div>
              <div className="text-xs font-medium text-[#0f172a]" style={{ fontFamily: 'var(--mw-sans)' }}>
                {agent.title}
              </div>
              <div className="flex items-center justify-center gap-1 mt-1.5">
                <span className="w-1.5 h-1.5 bg-green-400 rounded-full" />
                <span className="text-[10px] text-[#94a3b8]" style={{ fontFamily: 'var(--mw-mono)' }}>Active</span>
              </div>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
