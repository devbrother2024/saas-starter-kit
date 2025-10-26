import { HeroSection } from '@/components/marketing/hero-section'
import { SocialProofSection } from '@/components/marketing/social-proof-section'
import { ProblemSection } from '@/components/marketing/problem-section'
import { SolutionSection } from '@/components/marketing/solution-section'
import { PricingSection } from '@/components/marketing/pricing-section'
import { FAQSection } from '@/components/marketing/faq-section'
import { FinalCTASection } from '@/components/marketing/final-cta-section'

export default function Home() {
    return (
        <div className="min-h-screen bg-white">
            <HeroSection />
            <SocialProofSection />
            <ProblemSection />
            <div id="features">
                <SolutionSection />
            </div>
            <div id="pricing">
                <PricingSection />
            </div>
            <div id="faq">
                <FAQSection />
            </div>
            <FinalCTASection />
        </div>
    )
}
