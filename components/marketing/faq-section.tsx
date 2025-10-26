import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger
} from '@/components/ui/accordion'

const faqs = [
    {
        question: '우리 툴들과 연동되나요?',
        answer: 'Google/Microsoft 캘린더와 Zoom/Meet/Teams를 기본 지원하며, Jira/Asana/Linear/Notion/HubSpot/Salesforce 연동을 제공합니다.'
    },
    {
        question: '한국어 회의도 정확히 요약되나요?',
        answer: '다국어 STT·요약 모델을 사용해 한국어/영어 혼용 회의도 안정적으로 처리합니다.'
    },
    {
        question: '보안은 어떻게 보장하나요?',
        answer: 'SOC 2 기준으로 운영하며, SSO·RBAC·데이터 암호화 및 지역 데이터 레지던시를 제공합니다.'
    }
]

export function FAQSection() {
    return (
        <section className="bg-gradient-to-b from-muted/50 to-background py-16 sm:py-24">
            <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="break-words text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl md:text-5xl">
                        자주 묻는 질문
                    </h2>
                    <p className="mt-6 break-words text-lg leading-relaxed text-muted-foreground">
                        FlowPilot에 대해 궁금하신 점을 확인하세요
                    </p>
                </div>

                <div className="mt-12">
                    <Accordion type="single" collapsible className="space-y-4">
                        {faqs.map((faq, index) => (
                            <AccordionItem
                                key={index}
                                value={`item-${index}`}
                                className="rounded-lg border border-border bg-card px-6 shadow-sm"
                            >
                                <AccordionTrigger className="break-words text-left text-lg font-semibold leading-tight text-card-foreground hover:text-primary hover:no-underline">
                                    {faq.question}
                                </AccordionTrigger>
                                <AccordionContent className="break-words leading-relaxed text-muted-foreground">
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </section>
    )
}
