import type { Metadata } from 'next'
import { Navbar } from '@/components/marketing/navbar'

const TITLE = '회의 자동 요약·액션아이템 SaaS | 실행력 41% 향상 - FlowPilot'
const DESC = '회의는 줄이고 실행은 늘리세요. 회의 후 5분 안에 요약·책임자 지정·업무 툴 싱크까지 자동화합니다. Zoom·Meet·Teams 연동으로 후속 완료율을 높이세요. 14일 무료 체험으로 지금 시작하세요.'
const OG_IMAGE = '/og/flowpilot-landing.png'

export const metadata: Metadata = {
    title: TITLE,
    description: DESC,
    keywords: [
        '회의 자동화',
        '회의 요약',
        '액션아이템',
        '협업 SaaS',
        '생산성 향상',
        'Zoom 연동',
        'Google Meet',
        'Microsoft Teams',
        'Jira 연동',
        'Asana 연동',
        'CRM 싱크',
        '엔터프라이즈 보안'
    ],
    alternates: {
        canonical: '/'
    },
    openGraph: {
        title: '회의가 끝나면 실행이 시작됩니다. 요약·액션아이템·책임자 배포까지 자동으로 - FlowPilot',
        description: '회의 후속이 끝까지 가는 경험을 시작하세요. 자동 요약과 액션아이템으로 팀 실행력을 끌어올리세요. 14일 무료 체험으로 바로 확인하세요.',
        url: 'https://your-domain.com/',
        type: 'website',
        siteName: 'FlowPilot',
        images: [
            {
                url: OG_IMAGE,
                width: 1200,
                height: 630
            }
        ]
    },
    twitter: {
        card: 'summary_large_image',
        title: '회의가 끝나면 실행이 시작됩니다 - FlowPilot',
        description: '자동 요약·액션아이템으로 팀 실행력 향상. 지금 무료로 시작하세요.',
        images: [OG_IMAGE]
    }
}

export default function MarketingLayout({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <Navbar />
            {children}
        </>
    )
}
