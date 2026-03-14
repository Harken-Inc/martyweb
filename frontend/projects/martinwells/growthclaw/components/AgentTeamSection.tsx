'use client'

import { motion } from 'framer-motion'
import { Share2, Target, Newspaper, FileSearch, Mail, BarChart3, Crown } from 'lucide-react'

const TOP_ROW = [
  {
    icon: Share2,
    title: 'Social Media Manager',
    color: '#3b82f6',
    capabilities: ['Content creation', 'Scheduling & posting', 'Engagement monitoring', 'Trend analysis'],
  },
  {
    icon: Target,
    title: 'Ads Manager',
    color: '#8b5cf6',
    capabilities: ['Campaign setup', 'Creative assets', 'Budget optimization', 'A/B testing'],
  },
  {
    icon: Newspaper,
    title: 'PR Manager',
    color: '#06b6d4',
    capabilities: ['Press releases', 'Media outreach', 'Coverage tracking', 'Crisis monitoring'],
  },
]

const BOTTOM_ROW = [
  {
    icon: FileSearch,
    title: 'Content/SEO Manager',
    color: '#10b981',
    capabilities: ['Blog posts', 'Keyword strategy', 'Organic growth', 'Technical SEO'],
  },
  {
    icon: Mail,
    title: 'Email Marketing Manager',
    color: '#f59e0b',
    capabilities: ['Drip campaigns', 'Newsletters', 'Segmentation', 'Deliverability'],
  },
  {
    icon: BarChart3,
    title: 'Analytics Manager',
    color: '#ef4444',
    capabilities: ['Dashboards', 'Attribution', 'ROI reporting', 'Predictive insights'],
  },
]

function AgentCard({ agent, index }: { agent: typeof TOP_ROW[0]; index: number }) {
  const Icon = agent.icon
  return (
    <motion.div
      className="bg-white border border-[#e2e8f0] rounded-lg p-5 hover:border-[#3b82f6]/30 transition-colors w-full"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.5 }}
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div
            className="w-10 h-10 rounded-md flex items-center justify-center"
            style={{ backgroundColor: `${agent.color}10` }}
          >
            <Icon size={20} style={{ color: agent.color }} />
          </div>
          <h3
            className="text-base font-semibold text-[#0f172a]"
            style={{ fontFamily: 'var(--mw-sans)' }}
          >
            {agent.title}
          </h3>
        </div>
        <span className="flex items-center gap-1.5">
          <span className="w-2 h-2 bg-green-400 rounded-full" />
          <span className="text-[10px] text-[#94a3b8]" style={{ fontFamily: 'var(--mw-mono)' }}>Active</span>
        </span>
      </div>
      <ul className="space-y-1.5">
        {agent.capabilities.map(cap => (
          <li
            key={cap}
            className="text-sm text-[#64748b] flex items-center gap-2"
            style={{ fontFamily: 'var(--mw-mono)' }}
          >
            <span style={{ color: agent.color }}>&rsaquo;</span> {cap}
          </li>
        ))}
      </ul>
    </motion.div>
  )
}

export default function AgentTeamSection() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <p
          className="text-sm tracking-widest uppercase text-[#3b82f6] mb-4"
          style={{ fontFamily: 'var(--mw-mono)' }}
        >
          Your Team
        </p>
        <h2
          className="text-3xl md:text-4xl font-bold text-[#0f172a] mb-4"
          style={{ fontFamily: 'var(--mw-sans)' }}
        >
          7 AI Agents. One Mission.
        </h2>
        <p className="text-[#64748b] text-lg mb-12 max-w-2xl font-light">
          A Marketing Director orchestrating six specialist agents — each focused on a single channel, working 24/7.
        </p>

        {/* Org Chart */}
        <div className="flex flex-col items-center">
          {/* Director Card — centered */}
          <motion.div
            className="bg-[#0f172a] text-white rounded-lg p-6 flex items-center gap-4 w-full max-w-md"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-12 h-12 rounded-lg bg-[#3b82f6]/20 flex items-center justify-center shrink-0">
              <Crown size={24} className="text-[#3b82f6]" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-3">
                <h3 className="text-lg font-semibold" style={{ fontFamily: 'var(--mw-sans)' }}>
                  Marketing Director
                </h3>
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 bg-green-400 rounded-full" />
                  <span className="text-xs text-[#94a3b8]" style={{ fontFamily: 'var(--mw-mono)' }}>Active</span>
                </span>
              </div>
              <p className="text-sm text-[#94a3b8] mt-1">
                Coordinates all agents, sets strategy, allocates budget, and reports results.
              </p>
            </div>
          </motion.div>

          {/* Trunk: vertical line → label → vertical line */}
          <div className="w-px h-6 bg-[#cbd5e1]" />
          <span
            className="text-[10px] text-[#94a3b8] px-3 py-1 border border-[#e2e8f0] rounded-full bg-white"
            style={{ fontFamily: 'var(--mw-mono)' }}
          >
            orchestrates
          </span>
          <div className="w-px h-6 bg-[#cbd5e1]" />

          {/* === Desktop (lg): 3-column layout with branch lines === */}
          <div className="hidden lg:block w-full">
            {/* Horizontal branch line */}
            <div className="relative mx-auto" style={{ width: 'calc(100% - 33.333%)' }}>
              <div className="h-px bg-[#cbd5e1] w-full" />
            </div>

            {/* Top row: 3 drop lines + cards */}
            <div className="grid grid-cols-3 gap-6 w-full">
              {TOP_ROW.map((agent, i) => (
                <div key={agent.title} className="flex flex-col items-center">
                  <div className="w-px h-6 bg-[#cbd5e1]" />
                  <AgentCard agent={agent} index={i} />
                </div>
              ))}
            </div>

            {/* Connector between rows: 3 vertical lines from bottom of top cards to top of bottom cards */}
            <div className="grid grid-cols-3 gap-6 w-full">
              {[0, 1, 2].map(i => (
                <div key={i} className="flex justify-center">
                  <div className="w-px h-6 bg-[#cbd5e1]" />
                </div>
              ))}
            </div>

            {/* Bottom row: cards */}
            <div className="grid grid-cols-3 gap-6 w-full">
              {BOTTOM_ROW.map((agent, i) => (
                <div key={agent.title} className="flex flex-col items-center">
                  <AgentCard agent={agent} index={i + 3} />
                </div>
              ))}
            </div>
          </div>

          {/* === Tablet (md): 2-column layout === */}
          <div className="hidden md:block lg:hidden w-full">
            <div className="grid grid-cols-2 gap-4">
              {[...TOP_ROW, ...BOTTOM_ROW].map((agent, i) => (
                <div key={agent.title} className="flex flex-col items-center">
                  <div className="w-px h-5 bg-[#cbd5e1]" />
                  <AgentCard agent={agent} index={i} />
                </div>
              ))}
            </div>
          </div>

          {/* === Mobile: single column === */}
          <div className="block md:hidden w-full">
            {[...TOP_ROW, ...BOTTOM_ROW].map((agent, i) => (
              <div key={agent.title} className="flex flex-col items-center">
                <div className="w-px h-5 bg-[#cbd5e1]" />
                <AgentCard agent={agent} index={i} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
