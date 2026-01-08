import Link from 'next/link'
import { getProjectConfig } from '../../../shared/utils/markdown'
import BackgroundQueries from '../../../shared/components/BackgroundQueries'

export default function HightailHome() {
  const config = getProjectConfig()

  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section bg-gradient-to-br from-purple-900 via-purple-800 to-purple-700 text-white relative overflow-hidden">
        {/* Background Icons */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Map pins scattered around */}
          <div className="absolute top-20 left-10 w-6 h-6 bg-white opacity-10 rounded-full"></div>
          <div className="absolute top-32 right-20 w-4 h-4 bg-white opacity-8 rounded-full"></div>
          <div className="absolute bottom-40 left-1/4 w-5 h-5 bg-white opacity-12 rounded-full"></div>
          <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-white opacity-10 rounded-full"></div>
          <div className="absolute bottom-20 right-10 w-6 h-6 bg-white opacity-8 rounded-full"></div>
          <div className="absolute top-2/3 left-20 w-4 h-4 bg-white opacity-10 rounded-full"></div>

          {/* Search/location icons as simple shapes */}
          <div className="absolute top-16 right-1/4 w-8 h-8 border-2 border-white opacity-8 rounded-lg"></div>
          <div className="absolute bottom-32 left-1/3 w-6 h-6 border border-white opacity-6 rounded-md"></div>
          <div className="absolute top-1/2 left-10 w-10 h-6 border border-white opacity-8 rounded-full"></div>
          <div className="absolute bottom-16 right-1/3 w-12 h-8 border-2 border-white opacity-10 rounded-lg"></div>

          {/* Additional scattered elements */}
          <div className="absolute top-24 left-1/3 w-2 h-2 bg-white opacity-15"></div>
          <div className="absolute bottom-1/3 right-16 w-3 h-3 bg-white opacity-12 transform rotate-45"></div>
          <div className="absolute top-40 right-12 w-2 h-8 bg-white opacity-8"></div>
          <div className="absolute bottom-24 left-16 w-8 h-2 bg-white opacity-10"></div>
        </div>

        {/* Animated Typing Queries in Background */}
        <BackgroundQueries />

        <div className="relative max-w-7xl mx-auto px-4 py-20">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              {config.tagline}
            </h1>
            <p className="text-xl md:text-2xl text-purple-100 mb-8 max-w-4xl mx-auto leading-relaxed">
              {config.subheadline}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link
                href="/audit"
                className="btn-primary bg-slate-800 hover:bg-slate-900 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
              >
                {config.cta?.secondary || 'Get Started'}
              </Link>
              <Link
                href="/demo"
                className="btn-secondary border-2 border-white text-white hover:bg-white hover:text-purple-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
              >
                Watch 2-Min Demo
              </Link>
            </div>

            {/* Trust Bar */}
            <div className="flex flex-wrap justify-center gap-6 text-purple-200">
              <div className="flex items-center gap-2">
                <span className="text-green-400">✓</span>
                <span>Free audit included</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-400">✓</span>
                <span>Results in 60 seconds</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-400">✓</span>
                <span>Works for any local business</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is AI Search Optimization */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              What is AI Search Optimization?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              AI Search Optimization helps local businesses get recommended by AI engines like ChatGPT, Google AI Mode, and Perplexity when customers ask for services "near me."
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">How It's Different from SEO</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2" style={{ backgroundColor: 'var(--color-primary)' }}></div>
                  <span className="text-gray-700"><strong>Traditional SEO</strong> focuses on ranking in Google search results</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2" style={{ backgroundColor: 'var(--color-primary)' }}></div>
                  <span className="text-gray-700"><strong>AI Search Optimization</strong> ensures your business gets mentioned when AI answers customer questions</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2" style={{ backgroundColor: 'var(--color-primary)' }}></div>
                  <span className="text-gray-700">AI engines use different sources like <strong>Yelp, reviews, and local directories</strong> — not just websites</span>
                </div>
              </div>
            </div>

            <div className="card bg-gray-50 rounded-xl p-6">
              <h4 className="font-bold text-gray-900 mb-4">Example AI Search Query</h4>
              <div className="bg-white rounded-lg p-4 border-l-4 border-primary" style={{ borderColor: 'var(--color-primary)' }}>
                <p className="text-sm text-gray-600 mb-2">Customer asks ChatGPT:</p>
                <p className="font-medium text-gray-900 mb-3">"What's the best plumber near me for emergency repairs?"</p>
                <p className="text-sm text-gray-600 mb-2">AI Response includes:</p>
                <div className="space-y-1 text-sm">
                  <div className="flex items-center gap-2">
                    <span className="w-1 h-1 bg-green-500 rounded-full"></span>
                    <span>Business name and contact info</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1 h-1 bg-green-500 rounded-full"></span>
                    <span>Why they're recommended</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1 h-1 bg-green-500 rounded-full"></span>
                    <span>Customer reviews and ratings</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg text-gray-600 mb-6">
              <strong>The opportunity:</strong> Most local businesses aren't optimized for AI search yet. Early movers gain a significant competitive advantage.
            </p>
            <Link
              href="/audit"
              className="btn-primary bg-slate-800 hover:bg-slate-900 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              Check Your AI Visibility Now →
            </Link>
          </div>
        </div>
      </section>

      {/* Solution Preview */}
      <section className="bg-purple-50 py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Finally, AI Visibility Built for Local Businesses
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            We don't simulate responses or guess at locations. We track from real browsers, in real places, with real results.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: 'var(--color-primary)' }}>
                <span className="text-white text-2xl">📍</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Real Browser Locations</h3>
              <p className="text-gray-600">
                When We Track 'Near Me,' We're Actually There. 91% more accurate than API-based tracking.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🔗</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Every AI Engine That Matters</h3>
              <p className="text-gray-600">
                ChatGPT, Claude, Perplexity, Gemini, Google AI Mode, and Bing Copilot. Complete coverage.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: 'var(--color-primary)' }}>
                <span className="text-white text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Built for Service Areas</h3>
              <p className="text-gray-600">
                Track every city, every service, every combination. Average agency tracks 23 locations per client.
              </p>
            </div>
          </div>

          <div className="mt-12">
            <Link
              href="/features"
              className="btn-primary bg-primary hover:opacity-90 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
              style={{ backgroundColor: 'var(--color-primary)' }}
            >
              Explore All Features
            </Link>
          </div>
        </div>
      </section>

      {/* Free Audit CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            See Any Local Business's AI Visibility — Free
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            Enter a website to instantly discover how it ranks across AI search engines. Use it in sales calls to show prospects what they're missing.
          </p>

          <div className="card bg-white border-2 border-gray-200 rounded-xl p-8 max-w-2xl mx-auto">
            <div className="space-y-4 mb-6">
              <input
                type="url"
                placeholder="www.seattleplumbing.com"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-lg"
              />
              <div className="grid grid-cols-2 gap-4">
                <select className="px-4 py-3 border border-gray-300 rounded-lg text-lg">
                  <option>Primary Service</option>
                  <option>Plumber</option>
                  <option>HVAC</option>
                  <option>Dentist</option>
                  <option>Lawyer</option>
                  <option>Roofer</option>
                  <option>Electrician</option>
                  <option>Other</option>
                </select>
                <input
                  type="text"
                  placeholder="Seattle, WA"
                  className="px-4 py-3 border border-gray-300 rounded-lg text-lg"
                />
              </div>
            </div>

            <button className="btn-primary w-full bg-slate-800 hover:bg-slate-900 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors mb-6">
              Get Free Visibility Report
            </button>

            <div className="text-left space-y-3 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                <span><strong>AI Visibility Score</strong> - Overall rating across all 6 AI engines</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                <span><strong>Engine Breakdown</strong> - See performance on ChatGPT, Perplexity, Claude, etc.</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                <span><strong>Competitor Detection</strong> - Discover who's being recommended instead</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                <span><strong>3 Quick Wins</strong> - Immediate actions to improve visibility</span>
              </div>
            </div>
          </div>

          <p className="text-gray-500 mt-6">
            Turn cold prospects into warm leads with data they've never seen
          </p>
        </div>
      </section>
    </div>
  )
}
