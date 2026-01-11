import Link from 'next/link'
import { getProjectConfig } from '../../../shared/utils/markdown'

export default function CakewalkHome() {
  const config = getProjectConfig()

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-white">
            {config.name}
          </Link>
          <div className="hidden md:flex items-center gap-8">
            {config.navigation?.map((item: { label: string; path: string }, index: number) => (
              <Link
                key={index}
                href={item.path}
                className="text-gray-400 hover:text-white transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="#cta"
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
            >
              {config.cta?.primary || 'Get Started'}
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 pt-20 bg-gradient-to-b from-indigo-950/50 to-black">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight bg-gradient-to-r from-white via-indigo-200 to-cyan-200 bg-clip-text text-transparent">
            {config.hero?.headline || config.tagline}
          </h1>
          <p className="text-2xl md:text-3xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            {config.hero?.subheadline || config.subheadline}
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              href="#cta"
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-10 py-5 rounded-xl font-bold text-xl transition-all hover:scale-105"
            >
              {config.cta?.primary || 'Start Free Trial'}
            </Link>
            <Link
              href="#how-it-works"
              className="border-2 border-white/30 hover:border-cyan-400 text-white hover:text-cyan-400 px-10 py-5 rounded-xl font-bold text-xl transition-all"
            >
              {config.cta?.secondary || 'See It In Action'} &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Problem Strip */}
      <section className="py-8 bg-gradient-to-r from-indigo-600 to-cyan-500">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-2xl md:text-3xl font-semibold text-white">
            {config.problemStrip}
          </p>
        </div>
      </section>

      {/* The Opportunity */}
      <section className="py-24 px-6 bg-black">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold mb-8 text-center">
            {config.opportunity?.headline}
          </h2>
          <p className="text-2xl text-gray-400 mb-12 text-center max-w-4xl mx-auto">
            {config.opportunity?.description}
          </p>
          <div className="space-y-6 max-w-2xl mx-auto mb-12">
            {config.opportunity?.points?.map((point: string, index: number) => (
              <div key={index} className="flex items-center gap-4">
                <span className="text-cyan-400 text-3xl">&#10003;</span>
                <span className="text-2xl text-gray-200">{point}</span>
              </div>
            ))}
          </div>
          <p className="text-2xl text-indigo-400 text-center font-semibold">
            {config.opportunity?.cta}
          </p>
        </div>
      </section>

      {/* Core Value Props */}
      <section className="py-24 px-6 bg-gradient-to-b from-black to-indigo-950/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {config.valueProps?.map((prop: { title: string; description: string }, index: number) => (
              <div
                key={index}
                className="bg-white/5 border border-white/10 rounded-2xl p-10 hover:border-indigo-500/50 transition-all"
              >
                <h3 className="text-3xl font-bold mb-6 text-cyan-400">{prop.title}</h3>
                <p className="text-xl text-gray-300 leading-relaxed">{prop.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-24 px-6 bg-black">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold mb-16 text-center">How It Works</h2>
          <div className="space-y-12">
            {config.howItWorks?.map((step: { step: number; title: string; description: string }, index: number) => (
              <div key={index} className="flex items-start gap-8">
                <div className="w-20 h-20 bg-gradient-to-br from-indigo-600 to-cyan-500 rounded-full flex items-center justify-center text-4xl font-bold shrink-0">
                  {step.step}
                </div>
                <div>
                  <h3 className="text-3xl font-bold mb-3">{step.title}</h3>
                  <p className="text-2xl text-gray-400">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Full Process */}
      <section className="py-24 px-6 bg-indigo-950/30">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 text-center">
            {config.automatedProcess?.headline}
          </h2>
          <p className="text-2xl text-gray-400 mb-16 text-center">
            {config.automatedProcess?.subheadline}
          </p>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {config.automatedProcess?.steps?.map((step: { title: string; description: string }, index: number) => (
              <div key={index} className="bg-black/50 border border-white/10 rounded-xl p-8">
                <h3 className="text-2xl font-bold mb-4 text-indigo-400">{step.title}</h3>
                <p className="text-xl text-gray-400">{step.description}</p>
              </div>
            ))}
          </div>
          <p className="text-3xl text-center text-cyan-400 font-semibold">
            {config.automatedProcess?.footer}
          </p>
        </div>
      </section>

      {/* Comparison Table - SEO vs AEO */}
      <section className="py-24 px-6 bg-black">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 text-center">
            {config.comparison?.headline}
          </h2>
          <p className="text-3xl text-gray-400 mb-16 text-center">
            {config.comparison?.subheadline}
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-xl">
              <thead>
                <tr className="border-b border-white/20">
                  <th className="py-6 px-4 text-left text-gray-500 font-normal text-2xl"></th>
                  <th className="py-6 px-4 text-left text-gray-500 font-normal text-2xl">Traditional SEO</th>
                  <th className="py-6 px-4 text-left text-cyan-400 font-bold text-2xl">Cakewalk AEO</th>
                </tr>
              </thead>
              <tbody>
                {config.comparison?.rows?.map((row: { metric: string; traditional: string; cakewalk: string }, index: number) => (
                  <tr key={index} className="border-b border-white/10">
                    <td className="py-6 px-4 text-gray-300 font-semibold text-xl">{row.metric}</td>
                    <td className="py-6 px-4 text-gray-500 text-xl">{row.traditional}</td>
                    <td className="py-6 px-4 text-white font-semibold text-xl">{row.cakewalk}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-2xl text-gray-400 mt-12 text-center">
            {config.comparison?.footer}
          </p>
        </div>
      </section>

      {/* Self-Learning */}
      <section className="py-24 px-6 bg-gradient-to-b from-indigo-950/30 to-black">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold mb-8 text-center">
            {config.selfLearning?.headline}
          </h2>
          <p className="text-2xl text-gray-400 mb-8 text-center max-w-3xl mx-auto">
            {config.selfLearning?.description}
          </p>
          <p className="text-2xl text-white mb-8 text-center">
            {config.selfLearning?.subheadline}
          </p>
          <div className="space-y-4 max-w-2xl mx-auto mb-12">
            {config.selfLearning?.points?.map((point: string, index: number) => (
              <div key={index} className="flex items-center gap-4">
                <span className="text-indigo-400 text-2xl">&#10003;</span>
                <span className="text-xl text-gray-300">{point}</span>
              </div>
            ))}
          </div>
          <p className="text-3xl text-cyan-400 text-center font-semibold">
            {config.selfLearning?.footer}
          </p>
        </div>
      </section>

      {/* Collective Knowledge */}
      <section className="py-24 px-6 bg-black">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold mb-8 text-center">
            {config.collectiveKnowledge?.headline}
          </h2>
          <p className="text-2xl text-gray-400 mb-12 text-center">
            {config.collectiveKnowledge?.description}
          </p>
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {config.collectiveKnowledge?.points?.map((point: string, index: number) => (
              <div key={index} className="flex items-center gap-4 bg-white/5 rounded-xl p-6">
                <span className="text-cyan-400 text-2xl">&#10003;</span>
                <span className="text-xl text-gray-200">{point}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Human vs Cakewalk Comparison */}
      <section className="py-24 px-6 bg-indigo-950/30">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold mb-16 text-center">
            {config.humanComparison?.headline}
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-xl">
              <thead>
                <tr className="border-b border-white/20">
                  <th className="py-6 px-4 text-left text-gray-500 font-normal text-2xl"></th>
                  <th className="py-6 px-4 text-left text-gray-500 font-normal text-2xl">Human Team</th>
                  <th className="py-6 px-4 text-left text-cyan-400 font-bold text-2xl">Cakewalk</th>
                </tr>
              </thead>
              <tbody>
                {config.humanComparison?.rows?.map((row: { metric: string; human: string; cakewalk: string }, index: number) => (
                  <tr key={index} className="border-b border-white/10">
                    <td className="py-6 px-4 text-gray-300 font-semibold text-xl">{row.metric}</td>
                    <td className="py-6 px-4 text-gray-500 text-xl">{row.human}</td>
                    <td className="py-6 px-4 text-white font-semibold text-xl">{row.cakewalk}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Set and Forget */}
      <section className="py-24 px-6 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-8">
            {config.setAndForget?.headline}
          </h2>
          <p className="text-2xl text-gray-400 mb-12">
            {config.setAndForget?.description}
          </p>
          <div className="space-y-6">
            {config.setAndForget?.points?.map((point: string, index: number) => (
              <p key={index} className="text-2xl text-gray-300">{point}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6 bg-indigo-950/30">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {config.testimonials?.map((testimonial: { quote: string; author: string }, index: number) => (
              <div
                key={index}
                className="bg-black/50 border-l-4 border-indigo-500 rounded-r-xl p-10"
              >
                <p className="text-2xl text-white italic mb-4">"{testimonial.quote}"</p>
                {testimonial.author && (
                  <p className="text-lg text-gray-400">— {testimonial.author}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24 px-6 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-16">
            {config.pricing?.headline}
          </h2>
          <div className="bg-white/5 border border-indigo-500/50 rounded-2xl p-12 mb-12">
            <h3 className="text-3xl font-bold mb-8 text-white">The math:</h3>
            <div className="space-y-4 text-left max-w-lg mx-auto">
              {config.pricing?.comparison?.map((item: string, index: number) => (
                <p key={index} className="text-xl text-gray-300">
                  {index < 2 ? (
                    <span className="text-gray-500 line-through">{item}</span>
                  ) : (
                    <span className="text-cyan-400 font-semibold">{item}</span>
                  )}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24 px-6 bg-indigo-950/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold mb-16 text-center">FAQ</h2>
          <div className="space-y-8">
            {config.faq?.map((item: { question: string; answer: string }, index: number) => (
              <div key={index} className="border-b border-white/10 pb-8">
                <h3 className="text-2xl font-bold mb-4 text-white">{item.question}</h3>
                <p className="text-xl text-gray-400">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="cta" className="py-24 px-6 bg-gradient-to-r from-indigo-600 to-indigo-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-8">
            {config.finalCta?.headline}
          </h2>
          <p className="text-2xl text-indigo-100 mb-12">
            {config.finalCta?.description}
          </p>
          <Link
            href="#"
            className="inline-block bg-white text-indigo-600 hover:bg-gray-100 px-12 py-6 rounded-xl font-bold text-2xl transition-all hover:scale-105"
          >
            {config.finalCta?.button}
          </Link>
          <p className="text-xl text-indigo-200 mt-8">
            {config.finalCta?.subtext}
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-black border-t border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <span className="text-2xl font-bold text-white">{config.name}</span>
          <nav className="flex items-center gap-8">
            {config.navigation?.map((item: { label: string; path: string }, index: number) => (
              <Link
                key={index}
                href={item.path}
                className="text-gray-400 hover:text-white transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <span className="text-gray-500">&copy; 2026 {config.name}</span>
        </div>
      </footer>
    </div>
  )
}
