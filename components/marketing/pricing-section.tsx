"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "$0",
    period: "팀/월",
    description: "소규모 팀/파일럿",
    features: [
      "캘린더 연동",
      "기본 요약",
      "최대 5명",
      "커뮤니티 지원",
    ],
    cta: "무료로 시작하기",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$19",
    period: "사용자/월",
    description: "프로젝트 중심 팀, 스타트업",
    features: [
      "액션아이템 자동화",
      "PM/CRM 연동",
      "SSO 인증",
      "우선 지원",
      "무제한 사용자",
    ],
    cta: "Pro로 시작하기",
    highlighted: true,
  },
  {
    name: "Business",
    price: "$49",
    period: "사용자/월",
    description: "성장 단계/중견 엔터프라이즈",
    features: [
      "고급 보안·감사",
      "사용자 지정 워크플로",
      "전용 CSM",
      "SLA 보장",
      "온보딩 지원",
    ],
    cta: "Business 문의하기",
    highlighted: false,
  },
];

export function PricingSection() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="break-words text-3xl font-bold leading-tight tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
            팀 규모에 맞는 요금제
          </h2>
          <p className="mt-6 break-words text-lg leading-relaxed text-gray-600">
            14일 무료 체험, 언제든 해지 가능, 연간 결제 시 할인
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={`relative flex flex-col ${
                plan.highlighted
                  ? "border-2 border-blue-600 shadow-2xl"
                  : "border border-gray-200 shadow-lg"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-5 left-0 right-0 mx-auto w-32 rounded-full bg-blue-600 px-3 py-1 text-center text-sm font-semibold text-white">
                  인기
                </div>
              )}
              <CardHeader className="text-center">
                <CardTitle className="break-words text-2xl leading-tight">{plan.name}</CardTitle>
                <CardDescription className="mt-2 break-words">
                  {plan.description}
                </CardDescription>
                <div className="mt-6">
                  <span className="text-5xl font-bold text-gray-900">
                    {plan.price}
                  </span>
                  <span className="ml-2 break-words text-gray-600">/ {plan.period}</span>
                </div>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-600" />
                      <span className="break-words text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      className={`w-full ${
                        plan.highlighted
                          ? "bg-blue-600 hover:bg-blue-700"
                          : "bg-gray-900 hover:bg-gray-800"
                      }`}
                      size="lg"
                    >
                      {plan.cta}
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-md">
                    <DialogHeader>
                      <DialogTitle>{plan.name} 플랜 시작하기</DialogTitle>
                      <DialogDescription>
                        14일 무료 체험으로 시작하세요. 신용카드 정보 없이 가능합니다.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4 py-4">
                      <p className="text-sm text-gray-600">
                        곧 회원가입 기능이 추가됩니다.
                      </p>
                    </div>
                  </DialogContent>
                </Dialog>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* FUD 감소 문구 */}
        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500">
            💳 신용카드 정보 없이 시작 · 🔒 언제든 해지 가능 · 💰 연간 결제 시
            20% 할인
          </p>
        </div>
      </div>
    </section>
  );
}

