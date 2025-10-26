import Link from 'next/link'

export default function Home() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
            {/* Hero Section */}
            <section className="container mx-auto px-4 py-24 md:py-32">
                <div className="mx-auto max-w-4xl text-center">
                    <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                        당신의 SaaS 여정을
                        <span className="block text-blue-600">
                            빠르게 시작하세요
                        </span>
                    </h1>

                    <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600 sm:text-xl">
                        Next.js 16과 ShadCN UI 기반의 모던 스타터 킷으로
                        아이디어를 빠르게 제품으로 만들어보세요.
                    </p>

                    <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
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
        </div>
    )
}
