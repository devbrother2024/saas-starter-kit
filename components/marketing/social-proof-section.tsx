import { Star } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Separator } from '@/components/ui/separator'

export function SocialProofSection() {
    return (
        <section className="bg-background py-16 sm:py-24 relative overflow-hidden">
            {/* 배경 그라데이션 */}
            <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background"></div>

            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
                {/* 통계 */}
                <div className="mb-16 grid gap-8 sm:grid-cols-3">
                    <div className="text-center group">
                        <div className="text-5xl font-bold text-primary sm:text-6xl gradient-text transition-transform duration-300 group-hover:scale-110">
                            41%
                        </div>
                        <div className="mt-3 text-lg font-semibold text-foreground">
                            후속 완료율 증가
                        </div>
                        <div className="mt-2 text-sm text-muted-foreground">
                            287개 팀 베타 테스트 결과
                        </div>
                    </div>
                    <div className="text-center group">
                        <div className="text-5xl font-bold text-primary sm:text-6xl gradient-text transition-transform duration-300 group-hover:scale-110">
                            4시간
                        </div>
                        <div className="mt-3 text-lg font-semibold text-foreground">
                            주당 시간 절약
                        </div>
                        <div className="mt-2 text-sm text-muted-foreground">
                            평균 사용자 기준
                        </div>
                    </div>
                    <div className="text-center group">
                        <div className="text-5xl font-bold text-primary sm:text-6xl gradient-text transition-transform duration-300 group-hover:scale-110">
                            1,200+
                        </div>
                        <div className="mt-3 text-lg font-semibold text-foreground">
                            팀이 사용 중
                        </div>
                        <div className="mt-2 text-sm text-muted-foreground">
                            만족도 4.8/5
                        </div>
                    </div>
                </div>

                <Separator className="my-16" />

                {/* 고객 후기 */}
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    <div className="group rounded-2xl bg-card border border-border hover:border-primary/50 p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
                        <div className="mb-4 flex gap-1">
                            {[...Array(5)].map((_, i) => (
                                <Star
                                    key={i}
                                    className="h-5 w-5 fill-chart-4 text-chart-4"
                                />
                            ))}
                        </div>
                        <blockquote className="break-words text-lg leading-relaxed text-foreground">
                            &ldquo;FlowPilot 도입 후 회의 후속 완료율이{' '}
                            <strong className="font-bold text-primary">
                                41%
                            </strong>{' '}
                            증가했습니다.&rdquo;
                        </blockquote>
                        <div className="mt-6 flex items-center gap-3">
                            <Avatar>
                                <AvatarImage
                                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop"
                                    alt="베타 테스트 참가자"
                                />
                                <AvatarFallback>BT</AvatarFallback>
                            </Avatar>
                            <div className="text-sm text-muted-foreground">
                                <div className="font-semibold text-foreground">
                                    베타 테스트 참가 기업
                                </div>
                                <div>Fortune 500 기업</div>
                            </div>
                        </div>
                    </div>

                    <div className="group rounded-2xl bg-card border border-border hover:border-primary/50 p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
                        <div className="mb-4 flex gap-1">
                            {[...Array(5)].map((_, i) => (
                                <Star
                                    key={i}
                                    className="h-5 w-5 fill-chart-4 text-chart-4"
                                />
                            ))}
                        </div>
                        <blockquote className="break-words text-lg leading-relaxed text-foreground">
                            &ldquo;주당{' '}
                            <strong className="font-bold text-primary">
                                4시간
                            </strong>
                            을 회수했고, 액션아이템 누락이 사실상
                            사라졌습니다.&rdquo;
                        </blockquote>
                        <div className="mt-6 flex items-center gap-3">
                            <Avatar>
                                <AvatarImage
                                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
                                    alt="김서연"
                                />
                                <AvatarFallback>김서</AvatarFallback>
                            </Avatar>
                            <div className="text-sm text-muted-foreground">
                                <div className="font-semibold text-foreground">
                                    김서연
                                </div>
                                <div>PM, Acme Corp</div>
                            </div>
                        </div>
                    </div>

                    <div className="group rounded-2xl bg-card border border-border hover:border-primary/50 p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
                        <div className="mb-4 flex gap-1">
                            {[...Array(5)].map((_, i) => (
                                <Star
                                    key={i}
                                    className="h-5 w-5 fill-chart-4 text-chart-4"
                                />
                            ))}
                        </div>
                        <blockquote className="break-words text-lg leading-relaxed text-foreground">
                            &ldquo;회의록 정리 시간이{' '}
                            <strong className="font-bold text-primary">
                                90%
                            </strong>{' '}
                            단축되고, 팀 협업이 훨씬 매끄러워졌어요.&rdquo;
                        </blockquote>
                        <div className="mt-6 flex items-center gap-3">
                            <Avatar>
                                <AvatarImage
                                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop"
                                    alt="박민준"
                                />
                                <AvatarFallback>박민</AvatarFallback>
                            </Avatar>
                            <div className="text-sm text-muted-foreground">
                                <div className="font-semibold text-foreground">
                                    박민준
                                </div>
                                <div>CTO, TechFlow</div>
                            </div>
                        </div>
                    </div>
                </div>

                <Separator className="my-16" />

                {/* 고객사 로고 */}
                <div>
                    <p className="mb-8 text-center text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                        신뢰받는 기업들이 사용하고 있습니다
                    </p>
                    <div className="grid grid-cols-2 gap-8 opacity-70 grayscale md:grid-cols-4">
                        {/* 삼성 */}
                        <div className="flex items-center justify-center rounded-lg bg-card p-8">
                            <svg
                                className="h-10 w-auto"
                                viewBox="0 0 200 60"
                                fill="currentColor"
                            >
                                <text
                                    x="50%"
                                    y="50%"
                                    dominantBaseline="middle"
                                    textAnchor="middle"
                                    className="text-3xl font-bold"
                                >
                                    SAMSUNG
                                </text>
                            </svg>
                        </div>
                        {/* 네이버 */}
                        <div className="flex items-center justify-center rounded-lg bg-card p-8">
                            <svg
                                className="h-10 w-auto"
                                viewBox="0 0 200 60"
                                fill="currentColor"
                            >
                                <text
                                    x="50%"
                                    y="50%"
                                    dominantBaseline="middle"
                                    textAnchor="middle"
                                    className="text-3xl font-bold"
                                >
                                    NAVER
                                </text>
                            </svg>
                        </div>
                        {/* 카카오 */}
                        <div className="flex items-center justify-center rounded-lg bg-card p-8">
                            <svg
                                className="h-10 w-auto"
                                viewBox="0 0 200 60"
                                fill="currentColor"
                            >
                                <text
                                    x="50%"
                                    y="50%"
                                    dominantBaseline="middle"
                                    textAnchor="middle"
                                    className="text-3xl font-bold"
                                >
                                    Kakao
                                </text>
                            </svg>
                        </div>
                        {/* 쿠팡 */}
                        <div className="flex items-center justify-center rounded-lg bg-card p-8">
                            <svg
                                className="h-10 w-auto"
                                viewBox="0 0 200 60"
                                fill="currentColor"
                            >
                                <text
                                    x="50%"
                                    y="50%"
                                    dominantBaseline="middle"
                                    textAnchor="middle"
                                    className="text-3xl font-bold"
                                >
                                    Coupang
                                </text>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
