'use client'

import { useEffect } from "react"
import { Navbar } from "./components/Navbar"
import { HeroSection } from "./components/HeroSection"
import { OpportunitySection } from "./components/OpportunitySection"
import { CapabilitiesSection } from "./components/CapabilitiesSection"
import { HowItWorksSection } from "./components/HowItWorksSection"
import { ContentQualitySection } from "./components/ContentQualitySection"
import { ContentTypesSection } from "./components/ContentTypesSection"
import { ResearchSection } from "./components/ResearchSection"
import { PricingSection } from "./components/PricingSection"
import { TestimonialSection } from "./components/TestimonialSection"
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
        <CapabilitiesSection />
        <TestimonialSection />
        <OpportunitySection />
        <HowItWorksSection />
        <ContentQualitySection />
        <ContentTypesSection />
        <ResearchSection />
        <PricingSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
