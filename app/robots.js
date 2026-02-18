import { SITE_URL } from '../lib/seo'

/**
 * robots.txt 동적 생성
 * Next.js App Router: app/robots.js → /robots.txt
 */
export default function robots() {
  const disallowPaths = ['/api/', '/_next/']
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: disallowPaths,
      },
      {
        userAgent: 'Yeti',
        allow: '/',
        disallow: disallowPaths,
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: disallowPaths,
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  }
}
