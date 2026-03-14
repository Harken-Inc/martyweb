'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function CTASection() {
  return (
    <section className="py-20 px-6 bg-[#0f172a]">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2
            className="text-3xl md:text-5xl font-bold text-white mb-6"
            style={{ fontFamily: 'var(--mw-sans)' }}
          >
            Stop Hiring.{' '}
            <span className="text-[#3b82f6]">Start Deploying.</span>
          </h2>
          <p className="text-[#94a3b8] text-lg mb-8 max-w-xl mx-auto font-light">
            Free consultation. No commitment required. Starting from $250/agent/month.*
          </p>
          <p className="text-[#64748b] text-xs mt-1">
            *Excludes AI API costs and third-party services. These are determined during setup.
          </p>
          <a
            href="https://cal.com/martinwells"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#3b82f6] text-white text-base font-medium rounded hover:bg-[#2563eb] transition-colors"
            style={{ fontFamily: 'var(--mw-sans)' }}
          >
            <ArrowRight size={18} />
            Book Your Strategy Call
          </a>
          <p
            className="text-sm text-[#64748b] mt-6"
            style={{ fontFamily: 'var(--mw-mono)' }}
          >
            Free setup &middot; Cancel anytime &middot; 48-hour launch
          </p>
        </motion.div>
      </div>
    </section>
  )
}
