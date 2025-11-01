# SaaS Starter Kit

Next.js 16 기반 SaaS 서비스 개발을 위한 스타터 킷입니다.

## 기술 스택

-   **Framework**: Next.js 16 (App Router)
-   **Language**: TypeScript
-   **Styling**: Tailwind CSS v4
-   **UI Components**: ShadCN UI
-   **Package Manager**: pnpm

## 프로젝트 구조

```
saas-starter-kit/
├── app/
│   ├── (marketing)/          # 마케팅 페이지 (랜딩, 가격, 소개)
│   │   ├── page.tsx          # 메인 랜딩 페이지
│   │   └── layout.tsx
│   ├── components/
│   │   ├── marketing/        # 마케팅 관련 컴포넌트
│   │   └── ui/               # ShadCN UI 컴포넌트
│   ├── globals.css
│   └── layout.tsx            # 루트 레이아웃
├── lib/                      # 유틸리티 함수 & 비즈니스 로직
├── config/                   # 설정 파일
├── docs/                     # 문서 저장소
├── .cursor/
│   ├── commands/             # AI 커맨드
│   │   └── create-landing-page-copy.md
│   └── rules/                # AI 규칙
│       └── saas-development.mdc
└── components.json           # ShadCN UI 설정
```

## 시작하기

### 1. 의존성 설치

```bash
pnpm install
```

### 2. 개발 서버 실행

```bash
pnpm dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 결과를 확인하세요.

### 3. 빌드

```bash
pnpm build
```

## AI 규칙 및 커맨드

이 프로젝트는 개발 생산성을 높이기 위한 AI 규칙과 커맨드를 포함하고 있습니다.

### `.cursor/rules/saas-development.mdc`

SaaS 개발을 위한 기본 규칙과 베스트 프랙티스가 정의되어 있습니다:

-   Next.js App Router 사용
-   Tailwind CSS 스타일링 규칙
-   ShadCN UI 컴포넌트 활용
-   모바일 퍼스트 반응형 디자인
-   접근성 및 성능 최적화

### `.cursor/commands/create-landing-page-copy.md`

랜딩 페이지 카피라이팅 문서를 자동으로 생성하는 커맨드입니다.

사용 방법:

1. 제품/서비스 정보 입력
2. AI가 전환율 최적화된 랜딩 페이지 카피 생성
3. `docs/` 디렉토리에 마크다운 문서로 저장

## ShadCN UI 컴포넌트 추가

필요한 UI 컴포넌트를 추가하려면:

```bash
pnpm dlx shadcn@latest add [component-name]
```

예시:

```bash
pnpm dlx shadcn@latest add button
pnpm dlx shadcn@latest add dialog
pnpm dlx shadcn@latest add card
```

## 다음 단계

### 인증 추가 (선택)

```
app/
  (auth)/
    login/
      page.tsx
    signup/
      page.tsx
```

### 대시보드 추가 (선택)

```
app/
  (dashboard)/
    page.tsx
    layout.tsx
```

## 디렉토리 규칙

-   `(marketing)`: 공개 마케팅 페이지
-   `(auth)`: 인증 관련 페이지 (로그인, 회원가입)
-   `(dashboard)`: 로그인 후 대시보드 영역
-   `api/`: API 라우트
-   `components/`: 재사용 가능한 컴포넌트
-   `lib/`: 유틸리티 함수
-   `config/`: 설정 파일

## 스타일링 가이드

-   **모바일 퍼스트**: 작은 화면부터 설계
-   **Tailwind 브레이크포인트**: `sm:`, `md:`, `lg:`, `xl:`, `2xl:`
-   **일관된 spacing**: 4, 8, 12, 16, 24, 32, 48, 64, 96, 128
-   **접근성**: WCAG AA 이상 준수

## 배포 후 체크리스트

### 환경 변수 설정

-   [ ] 프로덕션 환경 변수 설정 (`.env.production`)
-   [ ] API 엔드포인트 URL 확인
-   [ ] 외부 서비스 API 키 확인 (필요시)
-   [ ] 데이터베이스 연결 정보 확인

### 기본 기능 확인

-   [ ] 랜딩 페이지 로딩 확인
-   [ ] 반응형 디자인 확인 (모바일, 태블릿, 데스크톱)
-   [ ] 모든 링크 작동 확인
-   [ ] 이미지 로딩 확인
-   [ ] 폼 제출 테스트 (필요시)

### SEO 최적화

-   [ ] 모든 `https://your-domain.com`을 실제 도메인으로 변경
    -   `app/layout.tsx`의 `metadataBase`
    -   `app/(marketing)/layout.tsx`의 모든 URL
    -   `app/(marketing)/page.tsx`의 JSON-LD
    -   `app/sitemap.ts`의 URL
    -   `app/robots.ts`의 sitemap/host
-   [ ] `public/og/flowpilot-landing.png` 이미지 추가 (1200×630px, 2MB 이하)
-   [ ] 페이지 소스에서 Meta 태그 확인 (`<title>`, `<meta name="description">`)
-   [ ] Open Graph 태그 확인 (`og:title`, `og:description`, `og:image`)
-   [ ] Twitter Card 태그 확인
-   [ ] JSON-LD 스크립트 확인
-   [ ] `https://your-domain.com/robots.txt` 접근 확인
-   [ ] `https://your-domain.com/sitemap.xml` 접근 확인

### 소셜 미디어 미리보기

-   [ ] [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)에서 OG 이미지 확인
-   [ ] [Twitter Card Validator](https://cards-dev.twitter.com/validator)에서 카드 확인
-   [ ] [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/)에서 미리보기 확인

### Google Search Console 설정

1.  [Google Search Console](https://search.google.com/search-console)에 사이트 등록
2.  HTML 태그 또는 DNS 레코드로 소유권 확인
3.  사이트맵 제출: `https://your-domain.com/sitemap.xml`
4.  URL 검사 도구로 루트 페이지 색인 요청
5.  커버리지 리포트에서 오류 모니터링

### 성능 및 보안

-   [ ] HTTPS 설정 확인
-   [ ] SSL 인증서 유효성 확인
-   [ ] 페이지 속도 테스트 (Lighthouse)
-   [ ] Core Web Vitals 확인
-   [ ] 보안 헤더 설정 확인 (필요시)
-   [ ] CORS 설정 확인 (필요시)

### 모니터링 설정

-   [ ] 에러 로깅 도구 설정 (Sentry, 등)
-   [ ] 애널리틱스 설정 (Google Analytics 4)
-   [ ] 구글 태그 매니저 설정 (필요시)
-   [ ] 업타임 모니터링 설정 (필요시)

### 추가 확인사항

-   [ ] 도메인 DNS 설정 확인
-   [ ] CDN 설정 확인 (필요시)
-   [ ] 백업 전략 수립
-   [ ] 배포 롤백 계획 수립

자세한 SEO 체크리스트는 [`docs/seo/SEO_CHECKLIST.md`](docs/seo/SEO_CHECKLIST.md)를 참고하세요.

## 라이센스

MIT
