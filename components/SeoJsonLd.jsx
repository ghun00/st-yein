'use client'

import { usePathname } from 'next/navigation'
import { SITE_URL, SITE_NAME, DEFAULT_DESCRIPTION } from '../lib/seo'

/**
 * Organization JSON-LD 스키마
 * 검색 엔진에 사이트/기업 정보 제공
 */
function OrganizationSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/images/logo.png`,
    description: DEFAULT_DESCRIPTION,
    sameAs: [
      // TODO: 인스타그램, 블로그 등 SNS URL 추가
      // 'https://www.instagram.com/...',
      // 'https://blog.naver.com/...',
    ].filter(Boolean),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

/**
 * WebSite JSON-LD 스키마 (선택)
 * 사이트 내 검색이 없어 SearchAction 생략
 */
function WebSiteSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    url: SITE_URL,
    publisher: {
      '@type': 'EducationalOrganization',
      name: SITE_NAME,
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

/**
 * WebPage + BreadcrumbList (페이지별)
 * 라우팅이 단순하여 홈만 적용
 */
function WebPageSchema({ path }) {
  const isHome = path === '/' || !path
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    url: `${SITE_URL}${path || '/'}`,
    name: SITE_NAME,
    isPartOf: {
      '@type': 'WebSite',
      name: SITE_NAME,
      url: SITE_URL,
    },
  }

  if (!isHome) {
    const segments = path.split('/').filter(Boolean)
    schema.breadcrumb = {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: '홈', item: SITE_URL },
        ...segments.map((seg, i) => ({
          '@type': 'ListItem',
          position: i + 2,
          name: seg,
          item: `${SITE_URL}/${segments.slice(0, i + 1).join('/')}`,
        })),
      ],
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export default function SeoJsonLd() {
  const pathname = usePathname() || '/'

  return (
    <>
      <OrganizationSchema />
      <WebSiteSchema />
      <WebPageSchema path={pathname} />
    </>
  )
}
