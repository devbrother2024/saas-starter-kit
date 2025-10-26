"use client";

import Image from "next/image";
import { CheckCircle2, Lock, Zap } from "lucide-react";

export function SolutionSection() {
  return (
    <section className="bg-linear-to-b from-white to-blue-50 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="break-words text-3xl font-bold leading-tight tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
            한 번의 연동으로 회의의 전 과정을 자동화
          </h2>
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-3">
          {/* 핵심 이점 1 */}
          <div className="group relative flex">
            <div className="absolute -inset-1 rounded-2xl bg-linear-to-r from-blue-600 to-purple-600 opacity-25 blur transition duration-300 group-hover:opacity-75"></div>
            <div className="relative flex flex-col rounded-2xl bg-white p-8 shadow-lg">
              <div className="mb-6 inline-flex rounded-lg bg-blue-100 p-4">
                <CheckCircle2 className="h-10 w-10 flex-shrink-0 text-blue-600" />
              </div>
              <h3 className="mb-4 break-words text-2xl font-bold leading-tight text-gray-900">
                자동 요약·액션아이템·책임자 지정
              </h3>
              <p className="mb-4 break-words text-gray-600">
                회의 종료 즉시 팀 채널과 이메일로 배포되어, 베타 기준{" "}
                <strong className="font-bold text-blue-600">
                  후속 완료율 41%↑
                </strong>
                .
              </p>
              <div className="mt-auto space-y-2 pt-4">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <div className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-600"></div>
                  <span className="break-words">실시간 자동 요약 생성</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <div className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-600"></div>
                  <span className="break-words">액션아이템 자동 추출</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <div className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-600"></div>
                  <span className="break-words">책임자 자동 지정</span>
                </div>
              </div>
            </div>
          </div>

          {/* 핵심 이점 2 */}
          <div className="group relative flex">
            <div className="absolute -inset-1 rounded-2xl bg-linear-to-r from-purple-600 to-pink-600 opacity-25 blur transition duration-300 group-hover:opacity-75"></div>
            <div className="relative flex flex-col rounded-2xl bg-white p-8 shadow-lg">
              <div className="mb-6 inline-flex rounded-lg bg-purple-100 p-4">
                <Zap className="h-10 w-10 flex-shrink-0 text-purple-600" />
              </div>
              <h3 className="mb-4 break-words text-2xl font-bold leading-tight text-gray-900">
                업무 도구와 양방향 싱크
              </h3>
              <p className="mb-4 break-words text-gray-600">
                Jira, Asana, Linear, Notion, HubSpot, Salesforce에 자동
                생성·업데이트.
              </p>
              <div className="mt-auto grid grid-cols-2 gap-3 pt-4">
                {["Jira", "Asana", "Linear", "Notion", "HubSpot", "Salesforce"].map(
                  (tool) => (
                    <div
                      key={tool}
                      className="break-words rounded-lg bg-gray-50 px-3 py-2 text-center text-sm font-medium text-gray-700"
                    >
                      {tool}
                    </div>
                  )
                )}
              </div>
            </div>
          </div>

          {/* 핵심 이점 3 */}
          <div className="group relative flex">
            <div className="absolute -inset-1 rounded-2xl bg-linear-to-r from-pink-600 to-red-600 opacity-25 blur transition duration-300 group-hover:opacity-75"></div>
            <div className="relative flex flex-col rounded-2xl bg-white p-8 shadow-lg">
              <div className="mb-6 inline-flex rounded-lg bg-pink-100 p-4">
                <Lock className="h-10 w-10 flex-shrink-0 text-pink-600" />
              </div>
              <h3 className="mb-4 break-words text-2xl font-bold leading-tight text-gray-900">
                엔터프라이즈 보안·거버넌스
              </h3>
              <p className="mb-4 break-words text-gray-600">
                SSO(SAML), RBAC, 감사 로그, 키워드 기반 DLP로 민감정보를
                제어.
              </p>
              <div className="mt-auto space-y-2 pt-4">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <div className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-pink-600"></div>
                  <span className="break-words">SSO(SAML) 지원</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <div className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-pink-600"></div>
                  <span className="break-words">역할 기반 접근 제어</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <div className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-pink-600"></div>
                  <span className="break-words">감사 로그 & DLP</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 데모 비디오 영역 */}
        <div className="mt-16">
          <div className="overflow-hidden rounded-2xl bg-linear-to-br from-blue-100 to-purple-100 p-8 shadow-2xl">
            <div className="aspect-video overflow-hidden rounded-lg bg-gray-900 shadow-lg">
              <div className="flex h-full items-center justify-center text-white">
                <div className="text-center">
                  <div className="mb-4 text-6xl">▶</div>
                  <p className="text-lg">
                    Zoom/Meet 실사용 데모 — 라이브 캡션→요약→액션아이템→툴 싱크
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

