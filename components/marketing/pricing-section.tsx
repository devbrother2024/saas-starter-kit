'use client'

import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle
} from '@/components/ui/card'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from '@/components/ui/dialog'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Check } from 'lucide-react'

const monthlyPlans = [
    {
        name: 'Starter',
        price: '$0',
        period: '팀/월',
        description: '소규모 팀/파일럿',
        features: ['캘린더 연동', '기본 요약', '최대 5명', '커뮤니티 지원'],
        cta: '무료로 시작하기',
        highlighted: false,
        originalPrice: undefined as string | undefined
    },
    {
        name: 'Pro',
        price: '$19',
        period: '사용자/월',
        description: '프로젝트 중심 팀, 스타트업',
        features: [
            '액션아이템 자동화',
            'PM/CRM 연동',
            'SSO 인증',
            '우선 지원',
            '무제한 사용자'
        ],
        cta: 'Pro로 시작하기',
        highlighted: true,
        originalPrice: undefined as string | undefined
    },
    {
        name: 'Business',
        price: '$49',
        period: '사용자/월',
        description: '성장 단계/중견 엔터프라이즈',
        features: [
            '고급 보안·감사',
            '사용자 지정 워크플로',
            '전용 CSM',
            'SLA 보장',
            '온보딩 지원'
        ],
        cta: 'Business 문의하기',
        highlighted: false,
        originalPrice: undefined as string | undefined
    }
]

const yearlyPlans = [
    {
        name: 'Starter',
        price: '$0',
        period: '팀/연',
        description: '소규모 팀/파일럿',
        features: ['캘린더 연동', '기본 요약', '최대 5명', '커뮤니티 지원'],
        cta: '무료로 시작하기',
        highlighted: false
    },
    {
        name: 'Pro',
        price: '$182',
        period: '사용자/연',
        originalPrice: '$228',
        description: '프로젝트 중심 팀, 스타트업',
        features: [
            '액션아이템 자동화',
            'PM/CRM 연동',
            'SSO 인증',
            '우선 지원',
            '무제한 사용자'
        ],
        cta: 'Pro로 시작하기',
        highlighted: true
    },
    {
        name: 'Business',
        price: '$470',
        period: '사용자/연',
        originalPrice: '$588',
        description: '성장 단계/중견 엔터프라이즈',
        features: [
            '고급 보안·감사',
            '사용자 지정 워크플로',
            '전용 CSM',
            'SLA 보장',
            '온보딩 지원'
        ],
        cta: 'Business 문의하기',
        highlighted: false
    }
]

export function PricingSection() {
    return (
        <section className="bg-background py-16 sm:py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-3xl text-center">
                    <h2 className="break-words text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl md:text-5xl">
                        팀 규모에 맞는 요금제
                    </h2>
                    <p className="mt-6 break-words text-lg leading-relaxed text-muted-foreground">
                        14일 무료 체험, 언제든 해지 가능
                    </p>
                </div>

                <Tabs defaultValue="monthly" className="mt-12">
                    <TabsList className="mx-auto grid w-full max-w-md grid-cols-2">
                        <TabsTrigger value="monthly">월간 결제</TabsTrigger>
                        <TabsTrigger value="yearly">
                            <span className="flex items-center gap-2">
                                연간 결제
                                <Badge variant="secondary" className="text-xs">
                                    20% 할인
                                </Badge>
                            </span>
                        </TabsTrigger>
                    </TabsList>

                    <TabsContent value="monthly" className="mt-8">
                        <div className="grid gap-8 lg:grid-cols-3">
                            {monthlyPlans.map(plan => (
                                <Card
                                    key={plan.name}
                                    className={`relative flex flex-col ${
                                        plan.highlighted
                                            ? 'border-2 border-primary shadow-2xl'
                                            : 'border border-border shadow-lg'
                                    }`}
                                >
                                    {plan.highlighted && (
                                        <Badge className="absolute -top-3 left-1/2 -translate-x-1/2">
                                            인기
                                        </Badge>
                                    )}
                                    <CardHeader className="text-center">
                                        <CardTitle className="break-words text-2xl leading-tight">
                                            {plan.name}
                                        </CardTitle>
                                        <CardDescription className="mt-2 break-words">
                                            {plan.description}
                                        </CardDescription>
                                        <div className="mt-6">
                                            {plan.originalPrice && (
                                                <div className="mb-2 text-sm text-muted-foreground line-through">
                                                    {plan.originalPrice}
                                                </div>
                                            )}
                                            <span className="text-5xl font-bold text-foreground">
                                                {plan.price}
                                            </span>
                                            <span className="ml-2 break-words text-muted-foreground">
                                                / {plan.period}
                                            </span>
                                        </div>
                                    </CardHeader>
                                    <CardContent className="flex-1">
                                        <ul className="space-y-4">
                                            {plan.features.map(feature => (
                                                <li
                                                    key={feature}
                                                    className="flex items-start gap-3"
                                                >
                                                    <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                                                    <span className="break-words text-muted-foreground">
                                                        {feature}
                                                    </span>
                                                </li>
                                            ))}
                                        </ul>
                                    </CardContent>
                                    <CardFooter>
                                        <Dialog>
                                            <DialogTrigger asChild>
                                                <Button
                                                    className="w-full"
                                                    variant={
                                                        plan.highlighted
                                                            ? 'default'
                                                            : 'secondary'
                                                    }
                                                    size="lg"
                                                >
                                                    {plan.cta}
                                                </Button>
                                            </DialogTrigger>
                                            <DialogContent className="sm:max-w-md">
                                                <DialogHeader>
                                                    <DialogTitle>
                                                        {plan.name} 플랜
                                                        시작하기
                                                    </DialogTitle>
                                                    <DialogDescription>
                                                        14일 무료 체험으로
                                                        시작하세요. 신용카드
                                                        정보 없이 가능합니다.
                                                    </DialogDescription>
                                                </DialogHeader>
                                                <div className="space-y-4 py-4">
                                                    <p className="text-sm text-muted-foreground">
                                                        곧 회원가입 기능이
                                                        추가됩니다.
                                                    </p>
                                                </div>
                                            </DialogContent>
                                        </Dialog>
                                    </CardFooter>
                                </Card>
                            ))}
                        </div>
                    </TabsContent>

                    <TabsContent value="yearly" className="mt-8">
                        <div className="grid gap-8 lg:grid-cols-3">
                            {yearlyPlans.map(plan => (
                                <Card
                                    key={plan.name}
                                    className={`relative flex flex-col ${
                                        plan.highlighted
                                            ? 'border-2 border-primary shadow-2xl'
                                            : 'border border-border shadow-lg'
                                    }`}
                                >
                                    {plan.highlighted && (
                                        <Badge className="absolute -top-3 left-1/2 -translate-x-1/2">
                                            인기
                                        </Badge>
                                    )}
                                    <CardHeader className="text-center">
                                        <CardTitle className="break-words text-2xl leading-tight">
                                            {plan.name}
                                        </CardTitle>
                                        <CardDescription className="mt-2 break-words">
                                            {plan.description}
                                        </CardDescription>
                                        <div className="mt-6">
                                            {plan.originalPrice && (
                                                <div className="mb-2 text-sm text-muted-foreground line-through">
                                                    {plan.originalPrice}
                                                </div>
                                            )}
                                            <span className="text-5xl font-bold text-foreground">
                                                {plan.price}
                                            </span>
                                            <span className="ml-2 break-words text-muted-foreground">
                                                / {plan.period}
                                            </span>
                                        </div>
                                    </CardHeader>
                                    <CardContent className="flex-1">
                                        <ul className="space-y-4">
                                            {plan.features.map(feature => (
                                                <li
                                                    key={feature}
                                                    className="flex items-start gap-3"
                                                >
                                                    <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                                                    <span className="break-words text-muted-foreground">
                                                        {feature}
                                                    </span>
                                                </li>
                                            ))}
                                        </ul>
                                    </CardContent>
                                    <CardFooter>
                                        <Dialog>
                                            <DialogTrigger asChild>
                                                <Button
                                                    className="w-full"
                                                    variant={
                                                        plan.highlighted
                                                            ? 'default'
                                                            : 'secondary'
                                                    }
                                                    size="lg"
                                                >
                                                    {plan.cta}
                                                </Button>
                                            </DialogTrigger>
                                            <DialogContent className="sm:max-w-md">
                                                <DialogHeader>
                                                    <DialogTitle>
                                                        {plan.name} 플랜
                                                        시작하기
                                                    </DialogTitle>
                                                    <DialogDescription>
                                                        14일 무료 체험으로
                                                        시작하세요. 신용카드
                                                        정보 없이 가능합니다.
                                                    </DialogDescription>
                                                </DialogHeader>
                                                <div className="space-y-4 py-4">
                                                    <p className="text-sm text-muted-foreground">
                                                        곧 회원가입 기능이
                                                        추가됩니다.
                                                    </p>
                                                </div>
                                            </DialogContent>
                                        </Dialog>
                                    </CardFooter>
                                </Card>
                            ))}
                        </div>
                    </TabsContent>
                </Tabs>

                {/* FUD 감소 문구 */}
                <div className="mt-12 text-center">
                    <p className="text-sm text-muted-foreground">
                        💳 신용카드 정보 없이 시작 · 🔒 언제든 해지 가능
                    </p>
                </div>
            </div>
        </section>
    )
}
