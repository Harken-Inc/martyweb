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
    const baseUrl = process.env.NEXT_PUBLIC_CHATWOOT_BASE_URL
    const token = process.env.NEXT_PUBLIC_CHATWOOT_WEBSITE_TOKEN
    if (!baseUrl || !token) return

    const script = document.createElement('script')
    script.src = `${baseUrl}/packs/js/sdk.js`
    script.async = true
    script.onload = () => {
      (window as any).chatwootSDK.run({
        websiteToken: token,
        baseUrl: baseUrl,
      })
    }
    document.body.appendChild(script)

    return () => {
      script.remove()
    }
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
