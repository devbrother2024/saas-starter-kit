import Image from "next/image";
import { Star } from "lucide-react";

export function SocialProofSection() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* 통계 */}
        <div className="mb-16 grid gap-8 sm:grid-cols-3">
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 sm:text-5xl">
              41%
            </div>
            <div className="mt-2 text-lg font-semibold text-gray-900">
              후속 완료율 증가
            </div>
            <div className="mt-1 text-sm text-gray-600">
              287개 팀 베타 테스트 결과
            </div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 sm:text-5xl">
              4시간
            </div>
            <div className="mt-2 text-lg font-semibold text-gray-900">
              주당 시간 절약
            </div>
            <div className="mt-1 text-sm text-gray-600">
              평균 사용자 기준
            </div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 sm:text-5xl">
              1,200+
            </div>
            <div className="mt-2 text-lg font-semibold text-gray-900">
              팀이 사용 중
            </div>
            <div className="mt-1 text-sm text-gray-600">
              만족도 4.8/5
            </div>
          </div>
        </div>

        {/* 고객 후기 */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-2xl bg-linear-to-br from-blue-50 to-purple-50 p-8 shadow-lg">
            <div className="mb-4 flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="h-5 w-5 fill-yellow-400 text-yellow-400"
                />
              ))}
            </div>
            <blockquote className="break-words text-lg leading-relaxed text-gray-900">
              "FlowPilot 도입 후 회의 후속 완료율이{" "}
              <strong className="font-bold text-blue-600">41%</strong>{" "}
              증가했습니다."
            </blockquote>
            <div className="mt-4 text-sm text-gray-600">
              — 베타 테스트 참가 기업
            </div>
          </div>

          <div className="rounded-2xl bg-linear-to-br from-purple-50 to-pink-50 p-8 shadow-lg">
            <div className="mb-4 flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="h-5 w-5 fill-yellow-400 text-yellow-400"
                />
              ))}
            </div>
            <blockquote className="break-words text-lg leading-relaxed text-gray-900">
              "주당 <strong className="font-bold text-blue-600">4시간</strong>을
              회수했고, 액션아이템 누락이 사실상 사라졌습니다."
            </blockquote>
            <div className="mt-4 text-sm text-gray-600">
              — 김서연, PM, Acme Corp
            </div>
          </div>

          <div className="rounded-2xl bg-linear-to-br from-pink-50 to-orange-50 p-8 shadow-lg">
            <div className="mb-4 flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="h-5 w-5 fill-yellow-400 text-yellow-400"
                />
              ))}
            </div>
            <blockquote className="break-words text-lg leading-relaxed text-gray-900">
              "회의록 정리 시간이 <strong className="font-bold text-blue-600">90%</strong> 단축되고, 팀 협업이 훨씬 매끄러워졌어요."
            </blockquote>
            <div className="mt-4 text-sm text-gray-600">
              — 박민준, CTO, TechFlow
            </div>
          </div>
        </div>

        {/* 고객사 로고 */}
        <div className="mt-16">
          <p className="mb-8 text-center text-sm font-semibold uppercase tracking-wider text-gray-500">
            신뢰받는 기업들이 사용하고 있습니다
          </p>
          <div className="grid grid-cols-2 gap-8 opacity-70 grayscale md:grid-cols-4">
            {/* 삼성 */}
            <div className="flex items-center justify-center rounded-lg bg-white p-8">
              <svg className="h-10 w-auto" viewBox="0 0 200 60" fill="currentColor">
                <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" className="text-3xl font-bold">
                  SAMSUNG
                </text>
              </svg>
            </div>
            {/* 네이버 */}
            <div className="flex items-center justify-center rounded-lg bg-white p-8">
              <svg className="h-10 w-auto" viewBox="0 0 200 60" fill="currentColor">
                <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" className="text-3xl font-bold">
                  NAVER
                </text>
              </svg>
            </div>
            {/* 카카오 */}
            <div className="flex items-center justify-center rounded-lg bg-white p-8">
              <svg className="h-10 w-auto" viewBox="0 0 200 60" fill="currentColor">
                <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" className="text-3xl font-bold">
                  Kakao
                </text>
              </svg>
            </div>
            {/* 쿠팡 */}
            <div className="flex items-center justify-center rounded-lg bg-white p-8">
              <svg className="h-10 w-auto" viewBox="0 0 200 60" fill="currentColor">
                <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" className="text-3xl font-bold">
                  Coupang
                </text>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

