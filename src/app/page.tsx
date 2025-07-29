"use client";

import { Navigation } from "@/components/layout/navigation";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/sections/hero-section";
import { SocialProofSection } from "@/components/sections/social-proof-section";
import { ProblemSection } from "@/components/sections/problem-section";
import { IntroSolutionSection } from "@/components/sections/intro-solution-section";
import { FeaturesSection } from "@/components/sections/features-section";
import { CapabilitiesSection } from "@/components/sections/capabilities-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { PricingSection } from "@/components/sections/pricing-section";
import { FAQSection } from "@/components/sections/faq-section";
import { CTASection } from "@/components/sections/cta-section";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Navigation />
      <HeroSection />
      <SocialProofSection />
      <ProblemSection />
      <IntroSolutionSection />
      <FeaturesSection />
      <CapabilitiesSection />
      <TestimonialsSection />
      <PricingSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </div>
  );
}
