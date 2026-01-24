'use client'

import { Navbar } from "./components/Navbar"
import { HeroSection } from "./components/HeroSection"
import { OpportunitySection } from "./components/OpportunitySection"
import { CapabilitiesSection } from "./components/CapabilitiesSection"
import { HowItWorksSection } from "./components/HowItWorksSection"
import { ContentQualitySection } from "./components/ContentQualitySection"
import { ComparisonSection } from "./components/ComparisonSection"
import { FAQSection } from "./components/FAQSection"
import { CTASection } from "./components/CTASection"
import { Footer } from "./components/Footer"
import "./styles.css"

export default function CakewalkHome() {
  return (
    <div className="min-h-screen text-foreground" style={{ backgroundColor: 'hsl(220 20% 4%)' }}>
      <Navbar />
      <main className="pt-16">
        <HeroSection />
        <CapabilitiesSection />
        <OpportunitySection />
        <HowItWorksSection />
        <ContentQualitySection />
        <ComparisonSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
