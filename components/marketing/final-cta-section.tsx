'use client'

import { Button } from '@/components/ui/button'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from '@/components/ui/dialog'
import { ArrowRight, Shield } from 'lucide-react'

export function FinalCTASection() {
    return (
        <section className="relative overflow-hidden bg-gradient-to-b from-background to-muted/30 py-16 sm:py-24">
            {/* 부드러운 배경 그라데이션 */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-transparent"></div>

            <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="break-words text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl md:text-5xl lg:text-6xl">
                        지금 바로 체험하기
                    </h2>
                    <p className="mt-6 break-words text-lg leading-relaxed text-muted-foreground sm:text-xl">
                        회의의 모든 후속 조치를 자동화하고,
                        <br className="hidden sm:block" />
                        팀의 실행력을 높여보세요.
                    </p>

                    <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-6">
                        <Dialog>
                            <DialogTrigger asChild>
                                <Button
                                    size="lg"
                                    variant="default"
                                    className="group w-full gap-2 px-8 py-6 text-lg font-semibold sm:w-auto"
                                >
                                    지금 무료로 시작하기
                                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                                </Button>
                            </DialogTrigger>
                            <DialogContent className="sm:max-w-md">
                                <DialogHeader>
                                    <DialogTitle>무료로 시작하기</DialogTitle>
                                    <DialogDescription>
                                        신용카드 정보 없이 14일 무료 체험을
                                        시작하세요.
                                    </DialogDescription>
                                </DialogHeader>
                                <div className="space-y-4 py-4">
                                    <p className="text-sm text-muted-foreground">
                                        곧 회원가입 기능이 추가됩니다.
                                    </p>
                                </div>
                            </DialogContent>
                        </Dialog>
                    </div>

                    {/* FUD 감소 문구 */}
                    <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-8">
                        <div className="flex items-center gap-2 text-muted-foreground">
                            <Shield className="h-5 w-5 text-primary" />
                            <span className="text-sm font-medium">
                                언제든 해지 가능
                            </span>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                            <Shield className="h-5 w-5 text-primary" />
                            <span className="text-sm font-medium">
                                데이터는 안전하게 보호됩니다
                            </span>
                        </div>
                    </div>

                    {/* 추가 신뢰 지표 */}
                    <div className="mt-12 grid gap-8 border-t border-border pt-12 sm:grid-cols-3">
                        <div className="text-center">
                            <div className="text-3xl font-bold text-foreground">
                                1,200+
                            </div>
                            <div className="mt-1 text-sm text-muted-foreground">
                                팀이 사용 중
                            </div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-foreground">
                                4.8/5
                            </div>
                            <div className="mt-1 text-sm text-muted-foreground">
                                평균 만족도
                            </div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-foreground">
                                SOC 2
                            </div>
                            <div className="mt-1 text-sm text-muted-foreground">
                                보안 인증
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
