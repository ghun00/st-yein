import { SITE_URL } from '../lib/seo'

/**
 * robots.txt 동적 생성
 * Next.js App Router: app/robots.js → /robots.txt
 */
export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/_next/',
          '/private/',
          // 폼 제출 후 리다이렉트 등 검색 노출 불필요 페이지 (필요 시 추가)
        ].filter(Boolean),
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: ['/api/', '/_next/', '/private/'].filter(Boolean),
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  }
}
