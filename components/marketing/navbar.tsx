'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from '@/components/ui/dialog'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

export function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-white/70 dark:bg-zinc-900/70 backdrop-blur-md supports-[backdrop-filter]:bg-white/50 dark:supports-[backdrop-filter]:bg-zinc-900/50">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    {/* 로고 */}
                    <div className="flex items-center">
                        <Link
                            href="/"
                            className="text-xl font-bold text-foreground hover:text-primary transition-colors"
                        >
                            FlowPilot
                        </Link>
                    </div>

                    {/* 데스크톱 메뉴 */}
                    <div className="hidden md:flex md:items-center md:gap-8">
                        <Link
                            href="#features"
                            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                        >
                            기능
                        </Link>
                        <Link
                            href="#pricing"
                            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                        >
                            요금제
                        </Link>
                        <Link
                            href="#faq"
                            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                        >
                            FAQ
                        </Link>
                    </div>

                    {/* CTA 버튼 */}
                    <div className="hidden md:flex md:items-center md:gap-4">
                        <Dialog>
                            <DialogTrigger asChild>
                                <Button variant="ghost" size="sm">
                                    로그인
                                </Button>
                            </DialogTrigger>
                            <DialogContent className="sm:max-w-md">
                                <DialogHeader>
                                    <DialogTitle>로그인</DialogTitle>
                                    <DialogDescription>
                                        곧 로그인 기능이 추가됩니다.
                                    </DialogDescription>
                                </DialogHeader>
                            </DialogContent>
                        </Dialog>
                        <Dialog>
                            <DialogTrigger asChild>
                                <Button size="sm">무료 체험</Button>
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

                    {/* 모바일 메뉴 버튼 */}
                    <div className="flex md:hidden">
                        <button
                            type="button"
                            className="inline-flex items-center justify-center rounded-md p-2 text-muted-foreground hover:bg-accent hover:text-foreground"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        >
                            <span className="sr-only">메뉴 열기</span>
                            {mobileMenuOpen ? (
                                <X className="h-6 w-6" />
                            ) : (
                                <Menu className="h-6 w-6" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* 모바일 메뉴 */}
            {mobileMenuOpen && (
                <div className="md:hidden border-t border-border">
                    <div className="space-y-1 px-4 pb-3 pt-2">
                        <Link
                            href="#features"
                            className="block rounded-md px-3 py-2 text-base font-medium text-muted-foreground hover:bg-accent hover:text-foreground"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            기능
                        </Link>
                        <Link
                            href="#pricing"
                            className="block rounded-md px-3 py-2 text-base font-medium text-muted-foreground hover:bg-accent hover:text-foreground"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            요금제
                        </Link>
                        <Link
                            href="#faq"
                            className="block rounded-md px-3 py-2 text-base font-medium text-muted-foreground hover:bg-accent hover:text-foreground"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            FAQ
                        </Link>
                        <div className="mt-4 flex flex-col gap-2 px-3">
                            <Dialog>
                                <DialogTrigger asChild>
                                    <Button
                                        variant="ghost"
                                        className="w-full justify-start"
                                    >
                                        로그인
                                    </Button>
                                </DialogTrigger>
                                <DialogContent className="sm:max-w-md">
                                    <DialogHeader>
                                        <DialogTitle>로그인</DialogTitle>
                                        <DialogDescription>
                                            곧 로그인 기능이 추가됩니다.
                                        </DialogDescription>
                                    </DialogHeader>
                                </DialogContent>
                            </Dialog>
                            <Dialog>
                                <DialogTrigger asChild>
                                    <Button className="w-full">
                                        무료 체험
                                    </Button>
                                </DialogTrigger>
                                <DialogContent className="sm:max-w-md">
                                    <DialogHeader>
                                        <DialogTitle>
                                            무료로 시작하기
                                        </DialogTitle>
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
                    </div>
                </div>
            )}
        </nav>
    )
}
