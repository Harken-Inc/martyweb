'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const FAQS = [
  {
    question: 'What is OpenClaw?',
    answer: 'OpenClaw is an open-source AI agent framework with 191K+ GitHub stars. It allows you to build teams of AI agents that work together autonomously. OpenClaw Marketing uses OpenClaw to deploy marketing-specific agent teams for your business.',
  },
  {
    question: 'How is this different from a marketing agency?',
    answer: "Agencies charge $5K-$20K/month retainers, move slowly, and have multiple clients competing for their attention. OpenClaw Marketing agents work exclusively for you, 24/7, at a fraction of the cost. They execute faster, don't take vacations, and scale instantly.",
  },
  {
    question: 'What if I already have a marketing team?',
    answer: "OpenClaw Marketing complements your existing team. Your agents handle the repetitive execution — scheduling posts, optimizing ads, writing drafts, tracking analytics — so your human team can focus on strategy and creative work.",
  },
  {
    question: 'How technical do I need to be?',
    answer: "Not at all. We handle all the technical setup, configuration, and ongoing management. You just tell us your goals and approve the strategy. Think of us as your outsourced AI marketing ops team.",
  },
  {
    question: 'What tools and platforms do you integrate with?',
    answer: 'OpenClaw supports 50+ integrations including Google Ads, Meta Ads, LinkedIn, Twitter/X, Instagram, Mailchimp, SendGrid, Google Analytics, HubSpot, WordPress, Shopify, and many more. If your tools have an API, we can likely connect them.',
  },
  {
    question: 'How do you maintain quality and brand voice?',
    answer: "During setup, we train your agents on your brand guidelines, tone of voice, and content standards. Every agent has guardrails and approval workflows. You maintain full control — nothing goes live without your review process in place.",
  },
  {
    question: 'What does it cost?',
    answer: 'Starting from $250/agent/month.* Free setup. No long-term contracts. Book a strategy call and we\'ll design a package based on your specific needs and channels. *Price excludes AI API costs and third-party services, which are determined during setup.',
  },
  {
    question: 'Can I start with just one or two agents?',
    answer: "Absolutely. Many clients start with 2-3 agents on their highest-priority channels and expand from there. The Marketing Director agent is always included to coordinate your team.",
  },
]

function FAQItem({ faq, index }: { faq: typeof FAQS[0]; index: number }) {
  const [open, setOpen] = useState(false)

  return (
    <motion.div
      className="border-b border-[#e2e8f0]"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, duration: 0.4 }}
    >
      <button
        className="w-full py-5 flex items-center justify-between text-left"
        onClick={() => setOpen(!open)}
      >
        <span
          className="text-base font-medium text-[#0f172a] pr-4"
          style={{ fontFamily: 'var(--mw-sans)' }}
        >
          {faq.question}
        </span>
        <ChevronDown
          size={18}
          className={`text-[#94a3b8] shrink-0 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-sm text-[#64748b] leading-relaxed max-w-3xl">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function FAQSection() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <p
          className="text-sm tracking-widest uppercase text-[#3b82f6] mb-4"
          style={{ fontFamily: 'var(--mw-mono)' }}
        >
          FAQ
        </p>
        <h2
          className="text-3xl md:text-4xl font-bold text-[#0f172a] mb-12"
          style={{ fontFamily: 'var(--mw-sans)' }}
        >
          Frequently Asked Questions
        </h2>

        <div>
          {FAQS.map((faq, i) => (
            <FAQItem key={faq.question} faq={faq} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
