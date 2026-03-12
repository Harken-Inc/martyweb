"use client";

import { Navbar } from "@projects/cakewalk/components/Navbar";
import { Footer } from "@projects/cakewalk/components/Footer";
import { ContentQualitySection } from "@projects/cakewalk/components/ContentQualitySection";
import { ContentTypesSection } from "@projects/cakewalk/components/ContentTypesSection";
import { ResearchSection } from "@projects/cakewalk/components/ResearchSection";
import { CTAButton } from "@projects/cakewalk/components/CTAButton";
import "@projects/cakewalk/styles.css";

export default function CakewalkContentPage() {
  return (
    <div
      className="min-h-screen text-foreground"
      style={{ backgroundColor: "hsl(220 20% 4%)" }}
    >
      <Navbar />
      <main className="pt-16">
        {/* Hero */}
        <section className="py-20 text-center">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              <span className="text-foreground">Research-Grade Content, </span>
              <span className="gradient-text glow-text">At Scale</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              See how Cakewalk produces expert-level, fact-verified content that AI platforms love to cite.
            </p>
          </div>
        </section>

        <ContentQualitySection />
        <ContentTypesSection />
        <ResearchSection />

        {/* Bottom CTA */}
        <section className="py-20 text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-foreground">Ready to Scale Your Content?</span>
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Let Cakewalk handle research, writing, and optimization — so you can focus on growing your business.
            </p>
            <CTAButton className="text-lg px-8 py-6" />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
