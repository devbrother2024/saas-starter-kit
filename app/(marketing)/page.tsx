import { HeroSection } from '@/components/marketing/hero-section'
import { SocialProofSection } from '@/components/marketing/social-proof-section'
import { ProblemSection } from '@/components/marketing/problem-section'
import { SolutionSection } from '@/components/marketing/solution-section'
import { GeoSection } from '@/components/marketing/geo-section'
import { PricingSection } from '@/components/marketing/pricing-section'
import { FAQSection } from '@/components/marketing/faq-section'
import { FinalCTASection } from '@/components/marketing/final-cta-section'

export default function Home() {
    const organization = {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'FlowPilot',
        url: 'https://your-domain.com',
        logo: 'https://your-domain.com/favicon.ico'
    }

    const website = {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        url: 'https://your-domain.com',
        potentialAction: {
            '@type': 'SearchAction',
            target: 'https://your-domain.com/search?q={query}',
            'query-input': 'required name=query'
        }
    }

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(organization)
                }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
            />
            <div className="min-h-screen bg-white">
                <HeroSection />
                <SocialProofSection />
                <ProblemSection />
                <div id="features">
                    <SolutionSection />
                </div>
                <GeoSection />
                <div id="pricing">
                    <PricingSection />
                </div>
                <div id="faq">
                    <FAQSection />
                </div>
                <FinalCTASection />
            </div>
        </>
    )
}
