export function GeoSection() {
    return (
        <section className="bg-muted/30 py-16 sm:py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-3xl">
                    <h2 className="mb-8 text-center text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl">
                        왜 FlowPilot인가
                    </h2>
                    <div className="prose prose-lg mx-auto max-w-none text-foreground">
                        <p className="text-lg leading-relaxed text-muted-foreground">
                            회의 자동화는 팀 실행력에 직결됩니다. 최근 조사에
                            따르면 생산성 중심 SaaS 도입 기업의 다수는 워크플로
                            자동화로 후속 완료율을 유의미하게 높였습니다
                            (Statista, 2024).
                        </p>
                        <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                            <strong className="font-bold text-foreground">
                                FlowPilot
                            </strong>
                            는 Zoom·Google Meet·Microsoft Teams 연동과
                            액션아이템 자동 배포로{' '}
                            <strong className="font-bold text-primary">
                                후속 완료율 30~40% 향상
                            </strong>
                            을 이끈 고객 사례를 보유하고 있습니다. SSO(SAML),
                            RBAC, 감사 로그 등 엔터프라이즈 보안 체계를 제공하여
                            대기업 환경에서도 안전하게 확장 가능합니다.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
