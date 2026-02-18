import { SITE_URL } from '../lib/seo'

/**
 * sitemap.xml 동적 생성
 * Next.js App Router: app/sitemap.js → /sitemap.xml
 */
export default function sitemap() {
  const baseUrl = SITE_URL

  const routes = [
    { path: '', priority: 1, changeFrequency: 'weekly' },
    { path: '/freebook', priority: 0.9, changeFrequency: 'weekly' },
    { path: '/winter', priority: 0.9, changeFrequency: 'weekly' },
    { path: '/repeat', priority: 0.9, changeFrequency: 'weekly' },
    { path: '/artDownload', priority: 0.5, changeFrequency: 'monthly' },
    { path: '/art2026Download', priority: 0.5, changeFrequency: 'monthly' },
    { path: '/freebookDownload', priority: 0.5, changeFrequency: 'monthly' },
    { path: '/retrySuccessDownload', priority: 0.5, changeFrequency: 'monthly' },
    { path: '/winterStrategyDownload', priority: 0.5, changeFrequency: 'monthly' },
    { path: '/naScheduleDownload', priority: 0.5, changeFrequency: 'monthly' },
  ]

  return routes.map(({ path, priority, changeFrequency }) => ({
    url: `${baseUrl}${path || ''}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }))
}
