'use client'

import { WebGLShader } from '@/components/ui/web-gl-shader'
import { LiquidButton } from '@/components/ui/liquid-glass-button'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from '@/components/ui/dialog'

export function HeroSection() {
    return (
        <section className="relative flex w-full flex-col items-center justify-center overflow-hidden min-h-screen bg-black">
            {/* WebGL Background */}
            <div className="absolute inset-0 w-full h-full">
                <WebGLShader />
            </div>

            {/* Content */}
            <div className="relative z-10 border border-[#27272a] p-2 w-full mx-auto max-w-3xl">
                <main className="relative border border-[#27272a] py-10 overflow-hidden">
                    {/* Headline */}
                    <h1 className="mb-3 text-white text-center text-5xl font-extrabold tracking-tighter md:text-[clamp(3rem,8vw,7rem)] lg:text-7xl">
                        회의는 줄이고 실행은 늘리세요
                    </h1>

                    {/* Subheadline */}
                    <p className="text-white/60 px-6 text-center text-xs md:text-sm lg:text-lg">
                        캘린더·Zoom·Google Meet·Microsoft Teams와 연동해 자동
                        요약, 책임자 지정 액션아이템, CRM/프로젝트 툴 싱크까지
                        한 번에
                    </p>

                    {/* Status Badge */}
                    <div className="my-8 flex items-center justify-center gap-1">
                        <span className="relative flex h-3 w-3 items-center justify-center">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75"></span>
                            <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
                        </span>
                        <p className="text-xs text-green-500">
                            14일 무료 체험 가능
                        </p>
                    </div>

                    {/* CTA Button */}
                    <div className="flex justify-center">
                        <Dialog>
                            <DialogTrigger asChild>
                                <LiquidButton
                                    className="text-white border rounded-full"
                                    size="xl"
                                >
                                    지금 시작하기
                                </LiquidButton>
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
                </main>
            </div>
        </section>
    )
}
