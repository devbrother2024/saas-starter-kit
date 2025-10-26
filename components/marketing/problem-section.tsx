import Image from 'next/image'
import { AlertCircle, Calendar, Users } from 'lucide-react'
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle
} from '@/components/ui/card'

export function ProblemSection() {
    return (
        <section className="bg-gradient-to-b from-muted/50 to-background py-16 sm:py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-3xl text-center">
                    <h2 className="break-words text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl md:text-5xl">
                        회의는 많은데, 남는 건 탭과 기억뿐
                    </h2>
                    <p className="mt-6 break-words text-lg leading-relaxed text-muted-foreground sm:text-xl">
                        회의록 정리와 공유에 시간을 쓰지만, 실행은 자주 지연되고
                        누락됩니다.
                    </p>
                </div>

                <div className="mt-16 grid gap-8 md:grid-cols-3">
                    <Card className="transition-all duration-300 hover:shadow-xl">
                        <CardHeader>
                            <div className="mb-2 inline-flex rounded-lg bg-destructive/10 p-3 w-fit">
                                <AlertCircle className="h-8 w-8 flex-shrink-0 text-destructive" />
                            </div>
                            <CardTitle className="text-xl leading-tight">
                                실행은 자주 지연
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <CardDescription className="break-words text-base">
                                회의록 정리와 공유에 시간을 쓰지만, 실행은 자주
                                지연되고 누락됩니다.
                            </CardDescription>
                        </CardContent>
                    </Card>

                    <Card className="transition-all duration-300 hover:shadow-xl">
                        <CardHeader>
                            <div className="mb-2 inline-flex rounded-lg bg-accent p-3 w-fit">
                                <Users className="h-8 w-8 flex-shrink-0 text-accent-foreground" />
                            </div>
                            <CardTitle className="text-xl leading-tight">
                                후속 조치가 흐려짐
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <CardDescription className="break-words text-base">
                                누가 무엇을 언제까지 할지 명확하지 않아 후속
                                조치가 흐려집니다.
                            </CardDescription>
                        </CardContent>
                    </Card>

                    <Card className="transition-all duration-300 hover:shadow-xl">
                        <CardHeader>
                            <div className="mb-2 inline-flex rounded-lg bg-muted p-3 w-fit">
                                <Calendar className="h-8 w-8 flex-shrink-0 text-muted-foreground" />
                            </div>
                            <CardTitle className="text-xl leading-tight">
                                자동화 부족
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <CardDescription className="break-words text-base">
                                기존 솔루션은 기록에 머물러,{' '}
                                <strong className="font-semibold text-foreground">
                                    실행으로 연결되는 자동화
                                </strong>
                                가 부족했습니다.
                            </CardDescription>
                        </CardContent>
                    </Card>
                </div>

                {/* 문제 상황 이미지 */}
                <div className="mt-16">
                    <div className="relative h-96 overflow-hidden rounded-2xl shadow-2xl md:h-[32rem]">
                        <Image
                            src="/checklist.png"
                            alt="분주한 회의 후 흩어진 메모와 미완료 체크리스트"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
