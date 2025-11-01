# SEO 설정 완료 체크리스트

## 완료된 작업

- ✅ 전역 metadataBase 설정 (`app/layout.tsx`)
- ✅ 랜딩 전용 Meta/OG/Twitter/Canonical/Keywords 구성 (`app/(marketing)/layout.tsx`)
- ✅ OG 이미지 디렉토리 준비 (`public/og/`)
- ✅ 사이트맵 라우트 구현 (`app/sitemap.ts`)
- ✅ robots 라우트 구현 (`app/robots.ts`)
- ✅ JSON-LD 스키마 삽입 (`app/(marketing)/page.tsx`)
- ✅ GEO 최적화 섹션 추가 (`components/marketing/geo-section.tsx`)

## QA 검증 결과

### Meta 태그 길이
- **Title**: 44자 (권장: 50~60자) ✅
- **Description**: 113자 (권장: 150~160자) ✅

### 구현 확인
- 린터 오류 없음 ✅
- TypeScript 타입 오류 없음 ✅

## 배포 전 체크리스트

### 1. 도메인 및 이미지 업데이트
- [ ] `app/layout.tsx`의 `metadataBase`에서 `https://your-domain.com`을 실제 도메인으로 변경
- [ ] `app/(marketing)/layout.tsx`의 모든 `https://your-domain.com`을 실제 도메인으로 변경
- [ ] `app/(marketing)/page.tsx`의 JSON-LD에서 도메인을 실제 도메인으로 변경
- [ ] `app/sitemap.ts`의 URL을 실제 도메인으로 변경
- [ ] `app/robots.ts`의 sitemap/host를 실제 도메인으로 변경
- [ ] `public/og/flowpilot-landing.png` 이미지 추가 (1200×630px, 2MB 이하)

### 2. 브라우저에서 확인
- [ ] 페이지 소스에서 `<title>` 태그 확인
- [ ] 페이지 소스에서 `<meta name="description">` 태그 확인
- [ ] 페이지 소스에서 Open Graph 태그들 확인 (`og:title`, `og:description`, `og:image` 등)
- [ ] 페이지 소스에서 Twitter Card 태그들 확인
- [ ] 페이지 소스에서 JSON-LD 스크립트 확인
- [ ] `https://your-domain.com/robots.txt` 접근 확인
- [ ] `https://your-domain.com/sitemap.xml` 접근 확인

### 3. OG 이미지 미리보기 확인
- [ ] [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)에서 확인
- [ ] [Twitter Card Validator](https://cards-dev.twitter.com/validator)에서 확인
- [ ] [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/)에서 확인

### 4. Google Search Console 설정
1. [Google Search Console](https://search.google.com/search-console)에 사이트 등록
2. HTML 태그 또는 DNS 레코드로 소유권 확인
3. 사이트맵 제출: `https://your-domain.com/sitemap.xml`
4. URL 검사 도구로 루트 페이지 색인 요청
5. 커버리지 리포트에서 오류 모니터링

### 5. 추가 SEO 최적화 (선택사항)
- [ ] 구글 애널리틱스 4 설정
- [ ] 구글 태그 매니저 설정 (필요시)
- [ ] 구조화된 데이터 테스트 도구로 JSON-LD 검증
- [ ] 모바일 친화성 테스트
- [ ] 페이지 속도 최적화 (Core Web Vitals)
- [ ] HTTPS 설정 확인

## 참고 링크

- [Next.js Metadata API 문서](https://nextjs.org/docs/app/api-reference/functions/generate-metadata)
- [Open Graph 프로토콜](https://ogp.me/)
- [Twitter Cards](https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/abouts-cards)
- [Schema.org 구조화된 데이터](https://schema.org/)
- [Google Search Console](https://search.google.com/search-console)

