# ST-예인 SEO 점검 체크리스트

## 1. 검색 엔진 등록/검증 (필수)

- [ ] **Google Search Console**
  - https://search.google.com/search-console
  - 메타 태그 검증 완료 (`google-site-verification`)
  - Sitemap 제출: `https://[도메인]/sitemap.xml`
  - URL 검사로 색인 요청

- [ ] **네이버 서치어드바이저** (권장)
  - https://searchadvisor.naver.com/
  - 메타 태그 검증 완료 (`naver-site-verification`)

- [ ] **Bing Webmaster Tools** (선택)
  - https://www.bing.com/webmasters

---

## 2. OG/공유 미리보기 검증

- [ ] **페이스북 Sharing Debugger**
  - https://developers.facebook.com/tools/debug/
  - URL 입력 후 title/description/이미지 확인
  - 캐시 새로고침 시 변경사항 반영

- [ ] **트위터 카드 검사기**
  - https://cards-dev.twitter.com/validator

- [ ] **카카오톡** (공유 시)
  - 25자 이내 title, 50자 이내 description 권장
  - 이미지 1200x630px 절대경로 사용

- [ ] **네이버** (블로그/카페 공유)
  - OG 태그 자동 수집 확인

---

## 3. 도메인/환경 설정

- [ ] `NEXT_PUBLIC_SITE_URL` 환경변수 설정
  - 예: `https://www.st-yein.com` (실제 도메인으로 교체)
  - `.env.local` 또는 배포 환경에 추가

- [ ] OG 이미지 자체 호스팅 (권장)
  - `public/images/og-1200x630.jpg` (1200x630) 추가
  - `public/images/og-600x600.jpg` (정방형) 추가
  - `lib/seo.js`의 `getOgImages()`에서 `OG_IMAGE_PRIMARY`, `OG_IMAGE_SQUARE` 사용하도록 수정
  - 현재는 네이버 블로그 썸네일(OG_IMAGE_FALLBACK) 사용 중

- [ ] 로고 추가
  - `public/images/logo.png` 추가 시 JSON-LD Organization 스키마에 반영됨
  - `components/SeoJsonLd.jsx`의 `logo` URL 확인

---

## 4. JSON-LD / 구조화 데이터

- [ ] `components/SeoJsonLd.jsx` - sameAs 배열
  - 인스타그램, 네이버 블로그 등 SNS URL 추가
  - 현재 TODO로 비어 있음

- [ ] Google Rich Results Test
  - https://search.google.com/test/rich-results
  - Organization, WebSite, WebPage 스키마 검증

---

## 5. 성능 기반 SEO (권장)

- [ ] **LCP 개선**
  - Hero 이미지 `priority` 적용됨 (이미 적용)
  - above-the-fold 이미지는 `priority`, 나머지는 lazy

- [ ] **폰트 최적화**
  - 현재: Pretendard CDN (`globals.css`)
  - 권장: `next/font` 로컬 호스팅으로 전환 시 FOUT 감소, 성능 향상

- [ ] **이미지**
  - `next/image` 사용 중 (적용됨)
  - `sizes` 속성으로 반응형 최적화 확인
  - WebP/AVIF 변환은 Next.js Image 최적화에 포함

- [ ] **스크립트**
  - GA: `strategy="afterInteractive"` 적용됨
  - 불필요한 외부 스크립트 최소화

---

## 6. 공유 텍스트 길이 가이드

| 플랫폼   | title  | description |
|----------|--------|-------------|
| 카카오   | ~25자  | ~50자       |
| 페이스북 | ~60자  | ~150자      |
| 트위터   | ~70자  | ~200자      |
| 일반 OG  | 50–60자 | 120–150자  |

현재 기본 title 약 45자, description 약 70자 → 대부분 플랫폼에서 잘림 없이 표시 가능.
