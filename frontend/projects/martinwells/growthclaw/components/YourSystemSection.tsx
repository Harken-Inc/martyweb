'use client'

import { motion } from 'framer-motion'
import { Server, Lock, Terminal, MessageSquare } from 'lucide-react'

const OWNERSHIP_POINTS = [
  {
    icon: Server,
    title: 'Your VPS, Your Data',
    description: 'We set up the entire system on a VPS that you own. Your data never touches our servers.',
  },
  {
    icon: Lock,
    title: 'Full Control',
    description: 'SSH access, admin credentials, API keys — everything is yours. We configure it, you own it.',
  },
  {
    icon: Terminal,
    title: 'Direct Access',
    description: 'Talk to your agents directly. Assign tasks, ask questions, get reports — on your terms.',
  },
]

const EXAMPLE_CONVERSATIONS = [
  {
    type: 'task' as const,
    prompt: 'Write 3 LinkedIn posts about our new API launch targeting CTOs',
    response: 'Done. I\'ve drafted 3 posts with different angles: technical deep-dive, business impact, and customer story. Each is under 1300 characters with a hook and CTA. Ready for your review.',
  },
  {
    type: 'question' as const,
    prompt: 'What content performed best this week?',
    response: 'Your Tuesday post on developer experience got 3.2x your average engagement. The audience segment that drove it was mid-level engineering managers. I\'d recommend doubling down on that topic.',
  },
  {
    type: 'task' as const,
    prompt: 'Research our top 5 competitors and summarize their messaging',
    response: 'Report ready. Key finding: 3 of 5 competitors lead with pricing, while your strongest differentiator is ownership and control. I\'ve included a positioning matrix and suggested angles.',
  },
]

export default function YourSystemSection() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <p
          className="text-sm tracking-widest uppercase text-[#3b82f6] mb-4"
          style={{ fontFamily: 'var(--mw-mono)' }}
        >
          Ownership
        </p>
        <h2
          className="text-3xl md:text-4xl font-bold text-[#0f172a] mb-4"
          style={{ fontFamily: 'var(--mw-sans)' }}
        >
          A System You Own and Control
        </h2>
        <p className="text-[#64748b] text-lg mb-12 max-w-2xl font-light">
          This isn&apos;t automation. These are employees you can talk to — deployed on a VPS you own, with credentials only you hold. We set it up, you run the show.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {OWNERSHIP_POINTS.map((point, i) => {
            const Icon = point.icon
            return (
              <motion.div
                key={point.title}
                className="bg-[#f8fafc] border border-[#e2e8f0] rounded-lg p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <div className="w-10 h-10 rounded-md bg-[#3b82f6]/10 flex items-center justify-center mb-4">
                  <Icon size={20} className="text-[#3b82f6]" />
                </div>
                <h3
                  className="text-lg font-semibold text-[#0f172a] mb-2"
                  style={{ fontFamily: 'var(--mw-sans)' }}
                >
                  {point.title}
                </h3>
                <p className="text-sm text-[#64748b] leading-relaxed">
                  {point.description}
                </p>
              </motion.div>
            )
          })}
        </div>

        <div>
          <h3
            className="text-2xl md:text-3xl font-bold text-[#0f172a] mb-3"
            style={{ fontFamily: 'var(--mw-sans)' }}
          >
            Talk to Your Team Like You Would Any Employee
          </h3>
          <p className="text-[#64748b] text-lg mb-8 max-w-2xl font-light">
            These aren&apos;t workflows or triggers. They&apos;re team members you can message, brief, and ask questions — and they respond with context and judgment.
          </p>

          <div className="space-y-6">
            {EXAMPLE_CONVERSATIONS.map((convo, i) => (
              <motion.div
                key={i}
                className="bg-[#f8fafc] border border-[#e2e8f0] rounded-lg overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <div className="flex items-start gap-3 p-5 border-b border-[#e2e8f0] bg-white">
                  <div className="w-8 h-8 rounded-full bg-[#0f172a] flex items-center justify-center shrink-0 mt-0.5">
                    {convo.type === 'task' ? (
                      <Terminal size={14} className="text-white" />
                    ) : (
                      <MessageSquare size={14} className="text-white" />
                    )}
                  </div>
                  <div>
                    <span
                      className="text-xs text-[#94a3b8] block mb-1"
                      style={{ fontFamily: 'var(--mw-mono)' }}
                    >
                      You
                    </span>
                    <p className="text-sm text-[#0f172a] leading-relaxed">{convo.prompt}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-5">
                  <div className="w-8 h-8 rounded-full bg-[#3b82f6] flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-white text-xs font-bold">AI</span>
                  </div>
                  <div>
                    <span
                      className="text-xs text-[#94a3b8] block mb-1"
                      style={{ fontFamily: 'var(--mw-mono)' }}
                    >
                      Your Agent
                    </span>
                    <p className="text-sm text-[#64748b] leading-relaxed">{convo.response}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
