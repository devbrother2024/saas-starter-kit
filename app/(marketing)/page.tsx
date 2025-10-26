import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
    return (
        <div className="min-h-screen bg-linear-to-b from-white to-gray-50">
            {/* Hero Section */}
            <section className="container mx-auto px-4 py-24 md:py-32">
                <div className="mx-auto max-w-6xl">
                    <div className="grid items-center gap-12 lg:grid-cols-2">
                        {/* Left: Text Content */}
                        <div className="text-center lg:text-left">
                            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                                당신의 SaaS 여정을
                                <span className="block text-blue-600">
                                    빠르게 시작하세요
                                </span>
                            </h1>

                            <p className="mt-6 text-lg text-gray-600 sm:text-xl">
                                Next.js 16과 ShadCN UI 기반의 모던 스타터 킷으로
                                아이디어를 빠르게 제품으로 만들어보세요.
                            </p>

                            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
                                <Link
                                    href="#"
                                    className="inline-flex h-12 items-center justify-center rounded-lg bg-blue-600 px-8 text-base font-medium text-white transition-all hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                                >
                                    지금 시작하기
                                </Link>
                                <Link
                                    href="#"
                                    className="inline-flex h-12 items-center justify-center rounded-lg border border-gray-300 bg-white px-8 text-base font-medium text-gray-700 transition-all hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                                >
                                    문서 보기
                                </Link>
                            </div>

                            <p className="mt-6 text-sm text-gray-500">
                                신용카드 정보 없이 시작 가능 • 언제든 취소 가능
                            </p>
                        </div>

                        {/* Right: Hero Image */}
                        <div className="relative">
                            <div className="relative h-[400px] w-full overflow-hidden rounded-2xl shadow-2xl md:h-[500px]">
                                <Image
                                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop"
                                    alt="SaaS Dashboard Preview"
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>
                            {/* Decorative elements */}
                            <div className="absolute -right-4 -top-4 -z-10 h-72 w-72 rounded-full bg-blue-200 opacity-20 blur-3xl" />
                            <div className="absolute -bottom-4 -left-4 -z-10 h-72 w-72 rounded-full bg-purple-200 opacity-20 blur-3xl" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section - 샘플 */}
            <section className="container mx-auto px-4 py-16">
                <div className="mx-auto max-w-5xl">
                    <h2 className="mb-12 text-center text-3xl font-bold text-gray-900">
                        포함된 기능
                    </h2>

                    <div className="grid gap-8 md:grid-cols-3">
                        <div className="rounded-lg border border-gray-200 bg-white p-6">
                            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
                                <svg
                                    className="h-6 w-6 text-blue-600"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M13 10V3L4 14h7v7l9-11h-7z"
                                    />
                                </svg>
                            </div>
                            <h3 className="mb-2 text-xl font-semibold text-gray-900">
                                빠른 시작
                            </h3>
                            <p className="text-gray-600">
                                Next.js 16과 App Router로 최신 웹 애플리케이션을
                                빠르게 구축하세요.
                            </p>
                        </div>

                        <div className="rounded-lg border border-gray-200 bg-white p-6">
                            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-green-100">
                                <svg
                                    className="h-6 w-6 text-green-600"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                                    />
                                </svg>
                            </div>
                            <h3 className="mb-2 text-xl font-semibold text-gray-900">
                                모던 UI
                            </h3>
                            <p className="text-gray-600">
                                ShadCN UI와 Tailwind CSS로 아름다운 인터페이스를
                                쉽게 만드세요.
                            </p>
                        </div>

                        <div className="rounded-lg border border-gray-200 bg-white p-6">
                            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100">
                                <svg
                                    className="h-6 w-6 text-purple-600"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                                    />
                                </svg>
                            </div>
                            <h3 className="mb-2 text-xl font-semibold text-gray-900">
                                타입 세이프
                            </h3>
                            <p className="text-gray-600">
                                TypeScript로 안정적이고 확장 가능한 코드베이스를
                                유지하세요.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Product Showcase Section */}
            <section className="container mx-auto px-4 py-16 md:py-24">
                <div className="mx-auto max-w-6xl">
                    <div className="grid items-center gap-12 lg:grid-cols-2">
                        {/* Left: Image */}
                        <div className="order-2 lg:order-1">
                            <div className="relative h-[400px] w-full overflow-hidden rounded-xl shadow-xl">
                                <Image
                                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop"
                                    alt="Analytics Dashboard"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>

                        {/* Right: Content */}
                        <div className="order-1 lg:order-2">
                            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                                강력한 분석 도구
                            </h2>
                            <p className="mt-4 text-lg text-gray-600">
                                실시간 데이터 분석으로 비즈니스 인사이트를
                                얻으세요. 사용자 행동, 매출, 전환율을 한눈에
                                파악할 수 있습니다.
                            </p>
                            <ul className="mt-6 space-y-3">
                                <li className="flex items-start">
                                    <svg
                                        className="mr-3 h-6 w-6 shrink-0 text-green-500"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M5 13l4 4L19 7"
                                        />
                                    </svg>
                                    <span className="text-gray-700">
                                        실시간 데이터 업데이트
                                    </span>
                                </li>
                                <li className="flex items-start">
                                    <svg
                                        className="mr-3 h-6 w-6 shrink-0 text-green-500"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M5 13l4 4L19 7"
                                        />
                                    </svg>
                                    <span className="text-gray-700">
                                        커스터마이징 가능한 대시보드
                                    </span>
                                </li>
                                <li className="flex items-start">
                                    <svg
                                        className="mr-3 h-6 w-6 shrink-0 text-green-500"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M5 13l4 4L19 7"
                                        />
                                    </svg>
                                    <span className="text-gray-700">
                                        고급 필터링 및 세그멘테이션
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Collaboration Section */}
            <section className="bg-gray-50 py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <div className="mx-auto max-w-6xl">
                        <div className="grid items-center gap-12 lg:grid-cols-2">
                            {/* Left: Content */}
                            <div>
                                <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                                    팀 협업을 위한 최적화
                                </h2>
                                <p className="mt-4 text-lg text-gray-600">
                                    팀원들과 실시간으로 협업하고 소통하세요.
                                    프로젝트 관리부터 피드백까지 모든 것을 한
                                    곳에서 처리할 수 있습니다.
                                </p>
                                <div className="mt-8 space-y-4">
                                    <div className="flex items-start">
                                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-100">
                                            <svg
                                                className="h-5 w-5 text-blue-600"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                                                />
                                            </svg>
                                        </div>
                                        <div className="ml-4">
                                            <h3 className="font-semibold text-gray-900">
                                                실시간 메시징
                                            </h3>
                                            <p className="mt-1 text-gray-600">
                                                팀원들과 즉시 소통하고 파일을
                                                공유하세요.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-purple-100">
                                            <svg
                                                className="h-5 w-5 text-purple-600"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                                                />
                                            </svg>
                                        </div>
                                        <div className="ml-4">
                                            <h3 className="font-semibold text-gray-900">
                                                작업 관리
                                            </h3>
                                            <p className="mt-1 text-gray-600">
                                                프로젝트 진행 상황을 추적하고
                                                관리하세요.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Right: Image */}
                            <div>
                                <div className="relative h-[400px] w-full overflow-hidden rounded-xl shadow-xl">
                                    <Image
                                        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
                                        alt="Team Collaboration"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Gallery Section */}
            <section className="container mx-auto px-4 py-16 md:py-24">
                <div className="mx-auto max-w-6xl">
                    <div className="mb-12 text-center">
                        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                            모든 디바이스에서 완벽하게
                        </h2>
                        <p className="mt-4 text-lg text-gray-600">
                            데스크톱, 태블릿, 모바일 어디서든 동일한 경험을
                            제공합니다.
                        </p>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        <div className="relative h-64 overflow-hidden rounded-xl shadow-lg transition-transform duration-300 hover:scale-105">
                            <Image
                                src="https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&h=400&fit=crop"
                                alt="Mobile Development"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="relative h-64 overflow-hidden rounded-xl shadow-lg transition-transform duration-300 hover:scale-105">
                            <Image
                                src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop"
                                alt="Code Editor"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="relative h-64 overflow-hidden rounded-xl shadow-lg transition-transform duration-300 hover:scale-105">
                            <Image
                                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop"
                                alt="Workspace"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-linear-to-r from-blue-600 to-blue-700 py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <div className="mx-auto max-w-4xl text-center">
                        <h2 className="text-3xl font-bold text-white sm:text-4xl md:text-5xl">
                            지금 바로 시작하세요
                        </h2>
                        <p className="mt-6 text-lg text-blue-100 sm:text-xl">
                            수천 개의 팀이 이미 사용하고 있습니다. 당신의
                            프로젝트를 다음 레벨로 올려보세요.
                        </p>
                        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                            <Link
                                href="#"
                                className="inline-flex h-12 items-center justify-center rounded-lg bg-white px-8 text-base font-medium text-blue-600 transition-all hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600"
                            >
                                무료로 시작하기
                            </Link>
                            <Link
                                href="#"
                                className="inline-flex h-12 items-center justify-center rounded-lg border-2 border-white bg-transparent px-8 text-base font-medium text-white transition-all hover:bg-white hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600"
                            >
                                데모 보기
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
