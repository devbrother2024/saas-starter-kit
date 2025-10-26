'use client'

import { motion } from 'framer-motion'
import { AuroraBackground } from '@/components/ui/aurora-background'
import { Button } from '@/components/ui/button'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from '@/components/ui/dialog'
import { ArrowRight, Sparkles } from 'lucide-react'

export function HeroSection() {
    return (
        <AuroraBackground>
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    delay: 0.2,
                    duration: 0.8,
                    ease: 'easeInOut'
                }}
                className="relative flex flex-col gap-6 items-center justify-center px-4 max-w-5xl mx-auto"
            >
                {/* Status Badge */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 dark:bg-primary/20 border border-primary/20 dark:border-primary/30 backdrop-blur-sm"
                >
                    <Sparkles className="h-4 w-4 text-primary animate-pulse" />
                    <span className="text-sm font-medium text-primary dark:text-primary">
                        14일 무료 체험 가능
                    </span>
                </motion.div>

                {/* Headline */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-center tracking-tight dark:text-white text-gray-900"
                >
                    회의는 줄이고{' '}
                    <span className="gradient-text">실행은 늘리세요</span>
                </motion.h1>

                {/* Subheadline */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="text-base sm:text-lg md:text-xl lg:text-2xl text-center max-w-3xl text-gray-600 dark:text-gray-300 leading-relaxed"
                >
                    캘린더·Zoom·Google Meet·Microsoft Teams와 연동해{' '}
                    <span className="font-semibold text-gray-900 dark:text-white">
                        자동 요약, 책임자 지정 액션아이템, CRM/프로젝트 툴 싱크
                    </span>
                    까지 한 번에
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    className="flex flex-col sm:flex-row gap-4 mt-4"
                >
                    <Dialog>
                        <DialogTrigger asChild>
                            <Button
                                size="lg"
                                variant="glow"
                                className="group text-base font-semibold"
                            >
                                지금 무료로 시작하기
                                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
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

                    <Dialog>
                        <DialogTrigger asChild>
                            <Button
                                size="lg"
                                variant="outline"
                                className="text-base font-semibold"
                            >
                                데모 보기
                            </Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-3xl">
                            <DialogHeader>
                                <DialogTitle>FlowPilot 데모</DialogTitle>
                                <DialogDescription>
                                    FlowPilot이 어떻게 회의를 자동화하는지
                                    확인하세요.
                                </DialogDescription>
                            </DialogHeader>
                            <div className="aspect-video bg-muted rounded-lg">
                                <div className="flex h-full items-center justify-center text-muted-foreground">
                                    데모 영상 영역
                                </div>
                            </div>
                        </DialogContent>
                    </Dialog>
                </motion.div>

                {/* Trust Indicators */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                    className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 mt-8 text-sm text-gray-500 dark:text-gray-400"
                >
                    <div className="flex items-center gap-2">
                        <svg
                            className="h-5 w-5 text-green-500"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                        >
                            <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clipRule="evenodd"
                            />
                        </svg>
                        <span>신용카드 불필요</span>
                    </div>
                    <div className="hidden sm:block w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-600"></div>
                    <div className="flex items-center gap-2">
                        <svg
                            className="h-5 w-5 text-green-500"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                        >
                            <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clipRule="evenodd"
                            />
                        </svg>
                        <span>5분 내 설치 완료</span>
                    </div>
                    <div className="hidden sm:block w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-600"></div>
                    <div className="flex items-center gap-2">
                        <svg
                            className="h-5 w-5 text-green-500"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                        >
                            <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clipRule="evenodd"
                            />
                        </svg>
                        <span>언제든지 취소 가능</span>
                    </div>
                </motion.div>
            </motion.div>
        </AuroraBackground>
    )
}
