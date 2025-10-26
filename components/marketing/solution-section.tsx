'use client'

import { CheckCircle2, Lock, Zap } from 'lucide-react'
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger
} from '@/components/ui/tooltip'
import Image from 'next/image'

export function SolutionSection() {
    return (
        <section className="bg-gradient-to-b from-background to-muted/50 py-16 sm:py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <TooltipProvider>
                    <div className="mx-auto max-w-3xl text-center">
                        <h2 className="break-words text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl md:text-5xl">
                            한 번의 연동으로 회의의 전 과정을 자동화
                        </h2>
                    </div>

                    <div className="mt-16 grid gap-8 lg:grid-cols-3">
                        {/* 핵심 이점 1 */}
                        <div className="group relative flex">
                            <div className="relative flex flex-col rounded-2xl bg-card p-8 shadow-lg border border-border hover:shadow-xl hover:border-primary/50 transition-all duration-300">
                                <div className="mb-6 inline-flex rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 p-4 w-fit">
                                    <CheckCircle2 className="h-8 w-8 flex-shrink-0 text-primary" />
                                </div>
                                <h3 className="mb-4 break-words text-2xl font-bold leading-tight text-card-foreground">
                                    자동 요약·액션아이템·책임자 지정
                                </h3>
                                <p className="mb-4 break-words text-muted-foreground">
                                    회의 종료 즉시 팀 채널과 이메일로 배포되어,
                                    베타 기준{' '}
                                    <strong className="font-bold text-primary">
                                        후속 완료율 41%↑
                                    </strong>
                                    .
                                </p>
                                <div className="mt-auto space-y-2 pt-4">
                                    <Tooltip>
                                        <TooltipTrigger asChild>
                                            <div className="flex items-center gap-2 text-sm text-muted-foreground cursor-help">
                                                <div className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary"></div>
                                                <span className="break-words">
                                                    실시간 자동 요약 생성
                                                </span>
                                            </div>
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p>
                                                AI가 회의 내용을 실시간으로
                                                분석하여 핵심 내용을 요약합니다
                                            </p>
                                        </TooltipContent>
                                    </Tooltip>
                                    <Tooltip>
                                        <TooltipTrigger asChild>
                                            <div className="flex items-center gap-2 text-sm text-muted-foreground cursor-help">
                                                <div className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary"></div>
                                                <span className="break-words">
                                                    액션아이템 자동 추출
                                                </span>
                                            </div>
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p>
                                                회의 중 논의된 모든 실행 항목을
                                                자동으로 식별하고 정리합니다
                                            </p>
                                        </TooltipContent>
                                    </Tooltip>
                                    <Tooltip>
                                        <TooltipTrigger asChild>
                                            <div className="flex items-center gap-2 text-sm text-muted-foreground cursor-help">
                                                <div className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary"></div>
                                                <span className="break-words">
                                                    책임자 자동 지정
                                                </span>
                                            </div>
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p>
                                                대화 맥락을 분석하여 각 작업의
                                                담당자를 자동으로 할당합니다
                                            </p>
                                        </TooltipContent>
                                    </Tooltip>
                                </div>
                            </div>
                        </div>

                        {/* 핵심 이점 2 */}
                        <div className="group relative flex">
                            <div className="relative flex flex-col rounded-2xl bg-card p-8 shadow-lg border border-border hover:shadow-xl hover:border-accent/50 transition-all duration-300">
                                <div className="mb-6 inline-flex rounded-2xl bg-gradient-to-br from-accent/20 to-accent/5 p-4 w-fit">
                                    <Zap className="h-8 w-8 flex-shrink-0 text-accent-foreground" />
                                </div>
                                <h3 className="mb-4 break-words text-2xl font-bold leading-tight text-card-foreground">
                                    업무 도구와 양방향 싱크
                                </h3>
                                <p className="mb-6 break-words text-muted-foreground">
                                    Jira, Asana, Linear, Notion, HubSpot,
                                    Salesforce에 자동 생성·업데이트.
                                </p>
                                <div className="mt-auto flex flex-wrap items-center gap-4 pt-4">
                                    {/* Jira */}
                                    <div className="group transition-opacity hover:opacity-70">
                                        <div className="relative w-8 h-8 flex-shrink-0">
                                            <Image
                                                src="https://cdn.simpleicons.org/jira/0052CC"
                                                alt="Jira"
                                                fill
                                                className="object-contain"
                                            />
                                        </div>
                                    </div>
                                    {/* Asana */}
                                    <div className="group transition-opacity hover:opacity-70">
                                        <div className="relative w-8 h-8 flex-shrink-0">
                                            <Image
                                                src="https://cdn.simpleicons.org/asana/F06A6A"
                                                alt="Asana"
                                                fill
                                                className="object-contain"
                                            />
                                        </div>
                                    </div>
                                    {/* Linear */}
                                    <div className="group transition-opacity hover:opacity-70">
                                        <div className="relative w-8 h-8 flex-shrink-0">
                                            <Image
                                                src="https://cdn.simpleicons.org/linear/5E6AD2"
                                                alt="Linear"
                                                fill
                                                className="object-contain"
                                            />
                                        </div>
                                    </div>
                                    {/* Notion */}
                                    <div className="group transition-opacity hover:opacity-70">
                                        <div className="relative w-8 h-8 flex-shrink-0">
                                            <Image
                                                src="https://cdn.simpleicons.org/notion/000000"
                                                alt="Notion"
                                                fill
                                                className="object-contain"
                                            />
                                        </div>
                                    </div>
                                    {/* HubSpot */}
                                    <div className="group transition-opacity hover:opacity-70">
                                        <div className="relative w-8 h-8 flex-shrink-0">
                                            <Image
                                                src="https://cdn.simpleicons.org/hubspot/FF7A59"
                                                alt="HubSpot"
                                                fill
                                                className="object-contain"
                                            />
                                        </div>
                                    </div>
                                    {/* Salesforce */}
                                    <div className="group transition-opacity hover:opacity-70">
                                        <div className="relative w-8 h-8 flex-shrink-0">
                                            <Image
                                                src="https://cdn.simpleicons.org/salesforce/00A1E0"
                                                alt="Salesforce"
                                                fill
                                                className="object-contain"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 핵심 이점 3 */}
                        <div className="group relative flex">
                            <div className="relative flex flex-col rounded-2xl bg-card p-8 shadow-lg border border-border hover:shadow-xl hover:border-purple-500/50 transition-all duration-300">
                                <div className="mb-6 inline-flex rounded-2xl bg-gradient-to-br from-purple-500/20 to-purple-500/5 p-4 w-fit">
                                    <Lock className="h-8 w-8 flex-shrink-0 text-purple-600" />
                                </div>
                                <h3 className="mb-4 break-words text-2xl font-bold leading-tight text-card-foreground">
                                    엔터프라이즈 보안·거버넌스
                                </h3>
                                <p className="mb-4 break-words text-muted-foreground">
                                    SSO(SAML), RBAC, 감사 로그, 키워드 기반
                                    DLP로 민감정보를 제어.
                                </p>
                                <div className="mt-auto space-y-2 pt-4">
                                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                        <div className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-secondary-foreground"></div>
                                        <span className="break-words">
                                            SSO(SAML) 지원
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                        <div className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-secondary-foreground"></div>
                                        <span className="break-words">
                                            역할 기반 접근 제어
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                        <div className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-secondary-foreground"></div>
                                        <span className="break-words">
                                            감사 로그 & DLP
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 데모 비디오 영역 */}
                    <div className="mt-16">
                        <div className="overflow-hidden rounded-2xl bg-gradient-to-br from-muted to-accent p-8 shadow-2xl">
                            <div className="aspect-video overflow-hidden rounded-lg shadow-lg">
                                <iframe
                                    width="100%"
                                    height="100%"
                                    src="https://www.youtube.com/embed/smW3raqdTv0"
                                    title="FlowPilot Demo"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen
                                    className="w-full h-full"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </TooltipProvider>
            </div>
        </section>
    )
}
