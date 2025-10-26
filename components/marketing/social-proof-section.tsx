import { Star } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Separator } from '@/components/ui/separator'
import Image from 'next/image'

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
                                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&q=80"
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
                                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop&q=80"
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
                                    src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&h=100&fit=crop&q=80"
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
                    <div className="grid grid-cols-2 gap-8 opacity-70 grayscale hover:grayscale-0 transition-all duration-300 md:grid-cols-4">
                        {/* Google */}
                        <div className="flex items-center justify-center rounded-lg bg-card p-8 hover:opacity-100 transition-opacity">
                            <div className="relative w-32 h-10">
                                <Image
                                    src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
                                    alt="Google"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </div>
                        {/* Microsoft */}
                        <div className="flex items-center justify-center rounded-lg bg-card p-8 hover:opacity-100 transition-opacity">
                            <div className="relative w-32 h-10">
                                <Image
                                    src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1Mu3b?ver=5c31"
                                    alt="Microsoft"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </div>
                        {/* Salesforce */}
                        <div className="flex items-center justify-center rounded-lg bg-card p-8 hover:opacity-100 transition-opacity">
                            <div className="relative w-32 h-10">
                                <Image
                                    src="https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg"
                                    alt="Salesforce"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </div>
                        {/* Slack */}
                        <div className="flex items-center justify-center rounded-lg bg-card p-8 hover:opacity-100 transition-opacity">
                            <div className="relative w-32 h-10">
                                <Image
                                    src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Slack_icon_2019.svg"
                                    alt="Slack"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
