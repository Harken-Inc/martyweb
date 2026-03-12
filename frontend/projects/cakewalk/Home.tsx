'use client'

import { useEffect } from "react"
import { Navbar } from "./components/Navbar"
import { HeroSection } from "./components/HeroSection"
import { SocialProofStrip } from "./components/SocialProofStrip"
import { ShiftExplainerSection } from "./components/ShiftExplainerSection"
import { OpportunitySection } from "./components/OpportunitySection"
import { HowItWorksSection } from "./components/HowItWorksSection"
import { CapabilitiesSection } from "./components/CapabilitiesSection"
import { TestimonialSection } from "./components/TestimonialSection"
import { PricingTiersSection } from "./components/PricingTiersSection"
import { FAQSection } from "./components/FAQSection"
import { CTASection } from "./components/CTASection"
import { Footer } from "./components/Footer"
import "./styles.css"

export default function CakewalkHome() {
  useEffect(() => {
    const serverUrl = process.env.NEXT_PUBLIC_CHATBOSS_URL
    const apiKey = process.env.NEXT_PUBLIC_CHATBOSS_CAKEWALK_KEY
    if (!serverUrl || !apiKey) return

    if (document.getElementById('chatboss-widget')) return

    const script = document.createElement('script')
    script.src = `${serverUrl}/widget/${apiKey}/chatboss.js`
    script.async = true
    document.body.appendChild(script)
  }, [])

  return (
    <div className="min-h-screen text-foreground" style={{ backgroundColor: 'hsl(220 20% 4%)' }}>
      <Navbar />
      <main className="pt-16">
        <HeroSection />
        <SocialProofStrip />
        <ShiftExplainerSection />
        <OpportunitySection />
        <HowItWorksSection />
        <CapabilitiesSection />
        <TestimonialSection />
        <PricingTiersSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
