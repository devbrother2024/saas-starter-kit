'use client'

import Image from 'next/image'
import { Button } from '@/components/ui/button'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from '@/components/ui/dialog'
import { Play } from 'lucide-react'

export function HeroSection() {
    return (
        <section className="relative overflow-hidden bg-linear-to-b from-blue-50 to-white py-20 sm:py-32">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-3xl text-center">
                    {/* Headline */}
                    <h1 className="break-words text-4xl font-bold leading-tight tracking-tight text-gray-900 sm:text-5xl md:text-6xl lg:text-7xl">
                        회의는 줄이고 실행은 늘리세요.{' '}
                        <span className="text-blue-600">
                            회의 후 5분 안에 요약·액션아이템이 팀에 배포됩니다.
                        </span>
                    </h1>

                    {/* Subheadline */}
                    <p className="mt-6 break-words text-lg leading-relaxed text-gray-600 sm:text-xl md:text-2xl">
                        캘린더·Zoom·Google Meet·Microsoft Teams와 연동해{' '}
                        <span className="font-semibold text-gray-900">
                            자동 요약, 책임자 지정 액션아이템, CRM/프로젝트 툴
                            싱크
                        </span>
                        까지 한 번에.
                    </p>

                    {/* CTA Buttons */}
                    <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-6">
                        <Dialog>
                            <DialogTrigger asChild>
                                <Button
                                    size="lg"
                                    className="w-full bg-blue-600 px-8 py-6 text-lg font-semibold hover:bg-blue-700 sm:w-auto"
                                >
                                    지금 무료로 시작하기
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
                                    <p className="text-sm text-gray-600">
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
                                    className="w-full gap-2 border-2 border-gray-300 px-8 py-6 text-lg font-semibold hover:bg-gray-50 sm:w-auto"
                                >
                                    <Play className="h-5 w-5" />
                                    데모 영상 보기
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
                                <div className="aspect-video bg-gray-200">
                                    <div className="flex h-full items-center justify-center text-gray-500">
                                        데모 영상 영역
                                    </div>
                                </div>
                            </DialogContent>
                        </Dialog>
                    </div>

                    {/* FUD 감소 문구 */}
                    <p className="mt-6 text-sm text-gray-500">
                        신용카드 정보 없이 시작 가능, 14일 무료 체험
                    </p>

                    {/* Hero 이미지 */}
                    <div className="mt-16 rounded-2xl bg-linear-to-br from-blue-100 to-purple-100 p-8 shadow-2xl">
                        <div className="relative h-64 overflow-hidden rounded-lg bg-white shadow-lg md:h-80 lg:h-96">
                            <Image
                                src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=1600&h=900&fit=crop"
                                alt="캘린더/화상회의 연동 후 자동으로 생성되는 요약·액션아이템 화면"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
