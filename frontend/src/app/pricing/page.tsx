export default function PricingPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">
            Transparent Pricing That Scales With Your Agency
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Pay for client capacity, not per-seat. Add unlimited team members free.
          </p>
        </div>
      </section>

      {/* Pricing Table */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {/* Starter Plan */}
            <div className="bg-white border-2 border-gray-200 rounded-xl p-8 relative">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Starter</h3>
                <div className="text-4xl font-bold text-gray-900 mb-2">$299<span className="text-lg font-normal text-gray-600">/mo</span></div>
                <p className="text-gray-600">Perfect for small agencies</p>
              </div>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <span className="text-green-500">✓</span>
                  <span>Up to <strong>10 clients</strong></span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-green-500">✓</span>
                  <span><strong>50 prompts</strong> per client</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-green-500">✓</span>
                  <span><strong>10 locations</strong> per client</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-green-500">✓</span>
                  <span>All <strong>6 AI engines</strong></span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-green-500">✓</span>
                  <span><strong>Unlimited</strong> team members</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-green-500">✓</span>
                  <span>Basic white-label reports</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-gray-400">—</span>
                  <span className="text-gray-500">Client portals</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-gray-400">—</span>
                  <span className="text-gray-500">API access</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-green-500">✓</span>
                  <span>Email support</span>
                </li>
              </ul>
              
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors">
                Start Free Trial
              </button>
            </div>

            {/* Growth Plan - Popular */}
            <div className="bg-white border-2 border-blue-500 rounded-xl p-8 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">Most Popular</span>
              </div>
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Growth</h3>
                <div className="text-4xl font-bold text-gray-900 mb-2">$499<span className="text-lg font-normal text-gray-600">/mo</span></div>
                <p className="text-gray-600">For growing agencies</p>
              </div>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <span className="text-green-500">✓</span>
                  <span>Up to <strong>25 clients</strong></span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-green-500">✓</span>
                  <span><strong>100 prompts</strong> per client</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-green-500">✓</span>
                  <span><strong>25 locations</strong> per client</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-green-500">✓</span>
                  <span>All <strong>6 AI engines</strong></span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-green-500">✓</span>
                  <span><strong>Unlimited</strong> team members</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-green-500">✓</span>
                  <span>Full customization reports</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-green-500">✓</span>
                  <span>Client portals</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-green-500">✓</span>
                  <span>Bulk operations</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-green-500">✓</span>
                  <span>Priority email support</span>
                </li>
              </ul>
              
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors">
                Start Free Trial
              </button>
            </div>

            {/* Scale Plan */}
            <div className="bg-white border-2 border-gray-200 rounded-xl p-8 relative">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Scale</h3>
                <div className="text-4xl font-bold text-gray-900 mb-2">$799<span className="text-lg font-normal text-gray-600">/mo</span></div>
                <p className="text-gray-600">For established agencies</p>
              </div>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <span className="text-green-500">✓</span>
                  <span>Up to <strong>50 clients</strong></span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-green-500">✓</span>
                  <span><strong>200 prompts</strong> per client</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-green-500">✓</span>
                  <span><strong>50 locations</strong> per client</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-green-500">✓</span>
                  <span>All <strong>6 AI engines</strong></span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-green-500">✓</span>
                  <span><strong>Unlimited</strong> team members</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-green-500">✓</span>
                  <span>Full customization reports</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-green-500">✓</span>
                  <span>Client portals</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-green-500">✓</span>
                  <span>API access</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-green-500">✓</span>
                  <span>Priority + Slack support</span>
                </li>
              </ul>
              
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors">
                Start Free Trial
              </button>
            </div>
          </div>

          {/* Enterprise */}
          <div className="text-center mb-16">
            <p className="text-lg text-gray-600">
              <strong>Enterprise:</strong> Need more than 50 clients? <a href="/contact" className="text-blue-600 hover:underline">Contact us →</a>
            </p>
          </div>
        </div>
      </section>

      {/* All Plans Include */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">All Plans Include</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-center gap-3">
              <span className="text-green-500">✓</span>
              <span>Real browser geolocation (not API simulation)</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-green-500">✓</span>
              <span>All 6 AI engines including Google AI Mode</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-green-500">✓</span>
              <span>Automatic competitor detection</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-green-500">✓</span>
              <span>Smart prompt templates with location expansion</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-green-500">✓</span>
              <span>Free audit tool for lead generation</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-green-500">✓</span>
              <span>14-day free trial</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-green-500">✓</span>
              <span>No credit card required to start</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-green-500">✓</span>
              <span>Cancel anytime</span>
            </div>
          </div>
        </div>
      </section>

      {/* Founding Agency Program */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white text-center">
            <div className="text-4xl mb-4">🚀</div>
            <h2 className="text-3xl font-bold mb-4">Founding Agency Program: 50% Off for 6 Months</h2>
            <p className="text-xl text-blue-100 mb-6">
              We're looking for 20 agencies to help shape the future of Hightail. In exchange for feedback and a case study, you'll get:
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="flex items-center gap-3">
                <span className="text-yellow-400">✓</span>
                <span>50% off any plan for 6 months</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-yellow-400">✓</span>
                <span>Direct access to founders</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-yellow-400">✓</span>
                <span>Input on product roadmap</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-yellow-400">✓</span>
                <span>Featured in case studies (optional)</span>
              </div>
            </div>
            
            <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors mb-4">
              Apply for Founding Program →
            </button>
            
            <p className="text-sm text-blue-200">
              Only 8 spots remaining
            </p>
          </div>
        </div>
      </section>

      {/* ROI Calculator */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              See What AI Search Optimization Could Add to Your Agency Revenue
            </h2>
          </div>
          
          <div className="bg-white rounded-xl p-8 border border-gray-200">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Current Clients</label>
                <input type="range" min="10" max="100" defaultValue="25" className="w-full" />
                <div className="text-center text-lg font-bold text-gray-900 mt-2">25</div>
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">% Who Would Pay for AI Optimization</label>
                <input type="range" min="20" max="60" defaultValue="40" className="w-full" />
                <div className="text-center text-lg font-bold text-gray-900 mt-2">40%</div>
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Monthly AI Optimization Fee</label>
                <input type="range" min="200" max="500" defaultValue="300" className="w-full" />
                <div className="text-center text-lg font-bold text-gray-900 mt-2">$300</div>
              </div>
            </div>
            
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">$3,000</div>
              <div className="text-xl text-gray-600 mb-2">Potential monthly revenue</div>
              <div className="text-lg text-gray-500">
                That's a <strong className="text-green-600">6:1 ROI</strong> on your Hightail subscription
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Money-Back Guarantee */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="bg-green-50 border border-green-200 rounded-xl p-8">
            <div className="text-4xl mb-4">💰</div>
            <h3 className="text-2xl font-bold text-green-800 mb-2">30-Day Money-Back Guarantee</h3>
            <p className="text-green-700">
              If you don't see value in the first month, we'll refund you — no questions asked.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Ready to Start Tracking AI Visibility?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join 150+ agencies already using Hightail to deliver measurable AI visibility improvements.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
              Start Your Free Trial
            </button>
            <a
              href="/audit"
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              Get Free Audit First
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-gray-500">
            <div className="flex items-center gap-2">
              <span className="text-green-500">✓</span>
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-500">✓</span>
              <span>14-day free trial</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-500">✓</span>
              <span>30-day money-back guarantee</span>
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