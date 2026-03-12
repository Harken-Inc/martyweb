"use client";

import { Navbar } from "@projects/cakewalk/components/Navbar";
import { Footer } from "@projects/cakewalk/components/Footer";
import { PricingTiersSection } from "@projects/cakewalk/components/PricingTiersSection";
import { CTAButton } from "@projects/cakewalk/components/CTAButton";
import { FAQSection } from "@projects/cakewalk/components/FAQSection";
import "@projects/cakewalk/styles.css";

export default function CakewalkPricingPage() {
  return (
    <div
      className="min-h-screen text-foreground"
      style={{ backgroundColor: "hsl(220 20% 4%)" }}
    >
      <Navbar />
      <main className="pt-16">
        <PricingTiersSection />

        {/* Feature Comparison Table */}
        <section className="py-16 relative">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
              <span className="gradient-text">Compare Plans</span>
            </h2>
            <div className="max-w-4xl mx-auto overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr style={{ borderBottom: "1px solid hsl(195 100% 50% / 0.2)" }}>
                    <th className="text-left py-3 px-4 text-muted-foreground font-medium">Feature</th>
                    <th className="text-center py-3 px-4 text-foreground font-semibold">Launch</th>
                    <th className="text-center py-3 px-4 text-primary font-semibold">Lead</th>
                    <th className="text-center py-3 px-4 text-foreground font-semibold">Scale</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { feature: "Articles per month", launch: "20", lead: "75", scale: "200" },
                    { feature: "Content updates per month", launch: "5", lead: "20", scale: "50" },
                    { feature: "AI-powered research", launch: "✓", lead: "✓", scale: "✓" },
                    { feature: "SEO optimization", launch: "✓", lead: "✓", scale: "✓" },
                    { feature: "ChatGPT tracking", launch: "✓", lead: "✓", scale: "✓" },
                    { feature: "Google AI tracking", launch: "✓", lead: "✓", scale: "✓" },
                    { feature: "Claude tracking", launch: "—", lead: "✓", scale: "✓" },
                    { feature: "Perplexity tracking", launch: "—", lead: "✓", scale: "✓" },
                    { feature: "Competitor tracking", launch: "—", lead: "Up to 10", scale: "Unlimited" },
                    { feature: "API access", launch: "✓", lead: "✓", scale: "✓" },
                    { feature: "Priority support", launch: "—", lead: "✓", scale: "✓" },
                    { feature: "AEO Expert Onboarding", launch: "—", lead: "—", scale: "✓" },
                  ].map((row) => (
                    <tr key={row.feature} style={{ borderBottom: "1px solid hsl(195 100% 50% / 0.1)" }}>
                      <td className="py-3 px-4 text-muted-foreground">{row.feature}</td>
                      <td className="py-3 px-4 text-center text-foreground">{row.launch}</td>
                      <td className="py-3 px-4 text-center text-primary font-medium">{row.lead}</td>
                      <td className="py-3 px-4 text-center text-foreground">{row.scale}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <FAQSection />

        {/* Bottom CTA */}
        <section className="py-20 text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-foreground">Ready to Get Started?</span>
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              No credit card required. See results in weeks, not months.
            </p>
            <CTAButton className="text-lg px-8 py-6" />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
