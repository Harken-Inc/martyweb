'use client'

import { Navbar } from "./components/Navbar"
import { HeroSection } from "./components/HeroSection"
import { AIPlatformsSection } from "./components/AIPlatformsSection"
import { ProblemStrip } from "./components/ProblemStrip"
import { OpportunitySection } from "./components/OpportunitySection"
import { ValuePropsSection } from "./components/ValuePropsSection"
import { HowItWorksSection } from "./components/HowItWorksSection"
import { AutomatedAgentSection } from "./components/AutomatedAgentSection"
import { ComparisonSection } from "./components/ComparisonSection"
import { SelfLearningSection } from "./components/SelfLearningSection"
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
        <AIPlatformsSection />
        <ProblemStrip />
        <OpportunitySection />
        <ValuePropsSection />
        <HowItWorksSection />
        <AutomatedAgentSection />
        <ComparisonSection />
        <SelfLearningSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
