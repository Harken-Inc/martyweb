export default function FeaturesPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-900 to-purple-700 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 hero-bg-pattern"></div>
        <div className="absolute inset-0 bg-grid-pattern"></div>
        <div className="relative max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">
            Complete AI Search Tracking for Local Businesses
          </h1>
          <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
            Purpose-built tracking for how local businesses actually appear in AI search engines. 
            Real locations, real results, real competitive advantage.
          </p>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="bg-white py-8 border-b">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-8">
            <button className="text-blue-600 border-b-2 border-blue-600 pb-2 font-semibold">Location Intelligence</button>
            <button className="text-gray-600 hover:text-blue-600 pb-2 font-semibold">Prompt Tracking</button>
            <button className="text-gray-600 hover:text-blue-600 pb-2 font-semibold">Competitive Analysis</button>
            <button className="text-gray-600 hover:text-blue-600 pb-2 font-semibold">Agency Tools</button>
            <button className="text-gray-600 hover:text-blue-600 pb-2 font-semibold">AI Engine Coverage</button>
          </div>
        </div>
      </section>

      {/* Location Intelligence Tab */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Track Every Service Area Like a Local
            </h2>
            <p className="text-xl text-gray-600">
              Real browser sessions positioned at actual geographic coordinates
            </p>
          </div>

          {/* Feature 1: Real Browser Geolocation */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Actual Locations, Not City Name Hacks
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                When someone in Ballard asks "plumber near me," they get different results than someone in Capitol Hill. 
                We position real browser sessions at actual coordinates — so you see exactly what customers in each neighborhood see.
              </p>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold">1.</span>
                  <span className="text-gray-700">Set your client's service area</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold">2.</span>
                  <span className="text-gray-700">We deploy browser sessions across that geography</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold">3.</span>
                  <span className="text-gray-700">Track "near me" queries from each real location</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold">4.</span>
                  <span className="text-gray-700">See results that match what actual customers experience</span>
                </div>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <span className="text-green-700 font-semibold">More accurate than API-based tracking</span>
              </div>
            </div>

            <div className="bg-gray-100 rounded-xl p-8">
              <div className="bg-white rounded-lg p-6">
                <h4 className="font-bold mb-4">Seattle Service Area Tracking</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span>📍 Ballard</span>
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">ABC Plumbing #1</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>📍 Capitol Hill</span>
                    <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-sm">ABC Plumbing #3</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>📍 Queen Anne</span>
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">ABC Plumbing #1</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>📍 Fremont</span>
                    <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-sm">Not mentioned</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Feature 2: Automatic Service Area Expansion */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="order-2 lg:order-1 bg-gray-100 rounded-xl p-8">
              <div className="bg-white rounded-lg p-6">
                <h4 className="font-bold mb-4">Before vs After</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl mb-2">📍</div>
                    <div className="text-sm text-gray-600">BEFORE</div>
                    <div className="font-semibold">1 location tracked</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl mb-2">🗺️</div>
                    <div className="text-sm text-gray-600">AFTER</div>
                    <div className="font-semibold">47 locations tracked</div>
                  </div>
                </div>
                <div className="mt-4 text-xs text-gray-500">
                  Seattle, Bellevue, Tacoma, Kirkland, Redmond, Renton, Kent, Auburn...
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                One Click to Track Every Surrounding City
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                Don't manually add 50 cities. Enter your client's primary location and we'll automatically detect 
                and suggest every city, town, and neighborhood within their service radius. Go from 1 location to 47 in seconds.
              </p>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold">1.</span>
                  <span className="text-gray-700">Enter primary business location</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold">2.</span>
                  <span className="text-gray-700">Set service radius (10, 25, 50 miles)</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold">3.</span>
                  <span className="text-gray-700">We detect all cities, towns, and neighborhoods</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold">4.</span>
                  <span className="text-gray-700">One click to add them all to tracking</span>
                </div>
              </div>
            </div>
          </div>

          {/* Feature 3: Service × Location Matrix */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Track Every Combination That Matters
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                "Emergency plumber Seattle" is different from "water heater repair Bellevue" is different from 
                "drain cleaning Tacoma." Create one template and automatically expand it across every service and location combination.
              </p>
              
              <div className="bg-gray-900 text-white p-4 rounded-lg mb-6 font-mono text-sm">
                <div className="text-green-400 mb-2">Template: "best {`{service}`} in {`{location}`}"</div>
                <div className="mb-2">
                  <span className="text-yellow-400">Services:</span> plumber, emergency plumber, water heater repair, drain cleaning, pipe repair
                </div>
                <div className="mb-2">
                  <span className="text-yellow-400">Locations:</span> Seattle, Bellevue, Tacoma, Kirkland, Redmond (47 total)
                </div>
                <div className="text-blue-400">= 235 unique prompts tracked automatically</div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <span className="text-blue-700 font-semibold">Average agency tracks 23 locations per client</span>
              </div>
            </div>

            <div className="bg-gray-100 rounded-xl p-8">
              <div className="bg-white rounded-lg p-6">
                <h4 className="font-bold mb-4">Service × Location Matrix</h4>
                <div className="grid grid-cols-4 gap-2 text-xs">
                  <div className="font-semibold">Service/Location</div>
                  <div className="font-semibold">Seattle</div>
                  <div className="font-semibold">Bellevue</div>
                  <div className="font-semibold">Tacoma</div>
                  
                  <div className="text-gray-600">plumber</div>
                  <div className="bg-green-100 text-green-800 text-center py-1 rounded">78%</div>
                  <div className="bg-yellow-100 text-yellow-800 text-center py-1 rounded">45%</div>
                  <div className="bg-green-100 text-green-800 text-center py-1 rounded">82%</div>
                  
                  <div className="text-gray-600">emergency plumber</div>
                  <div className="bg-green-100 text-green-800 text-center py-1 rounded">92%</div>
                  <div className="bg-red-100 text-red-800 text-center py-1 rounded">23%</div>
                  <div className="bg-yellow-100 text-yellow-800 text-center py-1 rounded">56%</div>
                  
                  <div className="text-gray-600">water heater repair</div>
                  <div className="bg-yellow-100 text-yellow-800 text-center py-1 rounded">34%</div>
                  <div className="bg-green-100 text-green-800 text-center py-1 rounded">67%</div>
                  <div className="bg-green-100 text-green-800 text-center py-1 rounded">71%</div>
                </div>
              </div>
            </div>
          </div>

          {/* Feature 4: Multi-Location Heatmaps */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 bg-gray-100 rounded-xl p-8">
              <div className="bg-white rounded-lg p-6">
                <h4 className="font-bold mb-4">Seattle Metro AI Visibility Heatmap</h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-4 h-4 bg-green-600 rounded"></div>
                    <span className="text-sm">Dominating (80%+ visibility)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-4 h-4 bg-green-400 rounded"></div>
                    <span className="text-sm">Strong (60-80%)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-4 h-4 bg-yellow-400 rounded"></div>
                    <span className="text-sm">Moderate (40-60%)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-4 h-4 bg-orange-400 rounded"></div>
                    <span className="text-sm">Weak (20-40%)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-4 h-4 bg-red-400 rounded"></div>
                    <span className="text-sm">Invisible (&lt;20%)</span>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-red-50 rounded">
                  <div className="text-sm font-semibold text-red-800">Priority Areas:</div>
                  <div className="text-sm text-red-600">Renton (18%), Kent (22%), Auburn (25%)</div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                See Weak Spots Before They Cost Customers
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                Instantly visualize where your client dominates and where they're invisible. Color-coded heatmaps show 
                AI visibility across the entire service area — so you know exactly where to focus optimization efforts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* AI Engine Coverage Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Every AI Engine Your Clients' Customers Use
            </h2>
            <p className="text-xl text-gray-600">
              Complete coverage across all platforms that matter for local search
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* ChatGPT */}
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold">ChatGPT</h3>
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">✅ Full Coverage</span>
              </div>
              <p className="text-gray-600 mb-4">
                Web browsing mode tracked, real-time results captured. 180M+ weekly users asking for local recommendations.
              </p>
              <div className="text-sm text-gray-500">
                Special Features: Web browsing mode tracked, real-time results captured
              </div>
            </div>

            {/* Google AI Mode */}
            <div className="bg-white rounded-xl p-6 border border-blue-200 ring-2 ring-blue-100">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold">Google AI Mode</h3>
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">✅ Exclusive</span>
              </div>
              <p className="text-gray-600 mb-4">
                The new AI Overviews replacement. We're one of the few platforms tracking this. Massive impact on local search.
              </p>
              <div className="text-sm text-blue-600 font-semibold">
                🆕 Google AI Mode Tracking — Ready when it rolls out to all users
              </div>
            </div>

            {/* Perplexity */}
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold">Perplexity</h3>
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">✅ Full Coverage</span>
              </div>
              <p className="text-gray-600 mb-4">
                Fastest-growing AI search engine. Heavy citation usage makes optimization clearer.
              </p>
              <div className="text-sm text-gray-500">
                Special Features: Citation source mapping shows exactly where Perplexity pulls information
              </div>
            </div>

            {/* Claude */}
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold">Claude</h3>
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">✅ Full Coverage</span>
              </div>
              <p className="text-gray-600 mb-4">
                Increasingly used for research and recommendations. Growing user base.
              </p>
              <div className="text-sm text-gray-500">
                Special Features: All model versions tracked (Opus, Sonnet, Haiku)
              </div>
            </div>

            {/* Gemini */}
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold">Gemini</h3>
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">✅ Full Coverage</span>
              </div>
              <p className="text-gray-600 mb-4">
                Deep Google integration. Android users get Gemini by default.
              </p>
              <div className="text-sm text-gray-500">
                Special Features: Includes Gemini Advanced tracking
              </div>
            </div>

            {/* Bing Copilot */}
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold">Bing Copilot</h3>
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">✅ Full Coverage</span>
              </div>
              <p className="text-gray-600 mb-4">
                Default on Windows, Edge, and Microsoft 365. Enterprise user base.
              </p>
              <div className="text-sm text-gray-500">
                Special Features: Microsoft's AI search with Bing integration
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Ready to Track AI Visibility for Your Clients?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Start your 14-day free trial. No credit card required.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/trial"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              Start Free Trial
            </a>
            <a
              href="/audit"
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              Get Free Audit
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-gray-500 mt-6">
            <div className="flex items-center gap-2">
              <span className="text-green-500">✓</span>
              <span>14-day free trial</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-500">✓</span>
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-500">✓</span>
              <span>Cancel anytime</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}