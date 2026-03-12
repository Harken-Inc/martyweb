"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Check, Sparkles, Star } from "lucide-react";

const tiers = [
  {
    name: "Launch",
    monthlyPrice: 49,
    annualPrice: 37,
    standardPrice: 99,
    articles: "20",
    updates: "5",
    features: [
      "AI-powered research",
      "SEO optimization",
      "ChatGPT & Google AI tracking",
      "API access",
    ],
    cta: "Get Started",
    highlighted: false,
  },
  {
    name: "Lead",
    monthlyPrice: 149,
    annualPrice: 112,
    standardPrice: 249,
    articles: "75",
    updates: "20",
    features: [
      "Everything in Launch",
      "Claude & Perplexity tracking",
      "Up to 10 competitors",
      "Priority support",
    ],
    cta: "Get Started",
    highlighted: true,
    badge: "Recommended",
  },
  {
    name: "Scale",
    monthlyPrice: 349,
    annualPrice: 262,
    standardPrice: 549,
    articles: "200",
    updates: "50",
    features: [
      "Everything in Lead",
      "Unlimited competitors",
      "AEO Expert Onboarding call",
    ],
    cta: "Get Started",
    highlighted: false,
  },
];

const getAppUrl = () => {
  return process.env.NODE_ENV === "development"
    ? "http://localhost:5173"
    : "https://app.cakewalk.ai";
};

export const PricingTiersSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <section id="pricing" ref={ref} className="py-24 md:py-32 relative overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, hsl(195 100% 50% / 0.05), transparent 70%)",
        }}
      />

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">
              Founding Member Pricing — Limited Spots
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-foreground">Simple, </span>
            <span className="gradient-text">Transparent Pricing</span>
          </h2>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Start with a free 7-day trial. No credit card required.
          </p>

          {/* Monthly / Annual Toggle */}
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className={`text-sm ${!isAnnual ? 'text-foreground font-medium' : 'text-muted-foreground'}`}>Monthly</span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className={`relative w-12 h-6 rounded-full transition-colors ${isAnnual ? 'bg-primary' : 'bg-white/20'}`}
            >
              <div className={`absolute top-0.5 w-5 h-5 rounded-full bg-white transition-transform ${isAnnual ? 'translate-x-6' : 'translate-x-0.5'}`} />
            </button>
            <span className={`text-sm ${isAnnual ? 'text-foreground font-medium' : 'text-muted-foreground'}`}>
              Annual
            </span>
            <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-0.5 rounded-full">
              Save 25%
            </span>
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative rounded-2xl p-6 md:p-8 border backdrop-blur-sm ${
                tier.highlighted
                  ? "border-primary/50 bg-primary/5"
                  : "border-white/10 bg-white/[0.02]"
              }`}
              style={!tier.highlighted ? { backgroundColor: "hsl(220 20% 6% / 0.6)" } : undefined}
            >
              {tier.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <div className="flex items-center gap-1 px-3 py-1 rounded-full bg-primary text-white text-xs font-semibold">
                    <Star className="w-3 h-3" />
                    {tier.badge}
                  </div>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-foreground mb-1">{tier.name}</h3>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl font-bold gradient-text">
                    ${isAnnual ? tier.annualPrice : tier.monthlyPrice}
                  </span>
                  <span className="text-muted-foreground">/mo</span>
                </div>
                {isAnnual && (
                  <p className="text-xs text-muted-foreground mt-1">
                    <span className="line-through">${tier.monthlyPrice}/mo</span> billed annually
                  </p>
                )}
                {!isAnnual && (
                  <p className="text-xs text-muted-foreground mt-1">
                    <span className="line-through">${tier.standardPrice}/mo</span> founding price
                  </p>
                )}
              </div>

              <div className="space-y-3 mb-6 text-sm">
                <div className="flex items-center justify-between py-2 border-b border-white/5">
                  <span className="text-muted-foreground">Articles/mo</span>
                  <span className="text-foreground font-semibold">{tier.articles}</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-white/5">
                  <span className="text-muted-foreground">Updates/mo</span>
                  <span className="text-foreground font-semibold">{tier.updates}</span>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm">
                    <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href={`${getAppUrl()}/get-started`}
                className={`block w-full text-center py-3 rounded-lg font-semibold transition-colors text-sm ${
                  tier.highlighted
                    ? "bg-primary text-white hover:bg-primary/90"
                    : "bg-white/10 text-foreground hover:bg-white/20"
                }`}
              >
                {tier.cta}
              </a>
            </motion.div>
          ))}
        </div>

        {/* All Plans Include */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center"
        >
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-primary" />
              <span>Cancel anytime</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-primary" />
            <span>Free 7-day trial</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-primary" />
              <span>Results in weeks</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
