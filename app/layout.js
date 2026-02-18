import Script from 'next/script'
import './globals.css'
import { SITE_URL, SITE_NAME, DEFAULT_TITLE, DEFAULT_DESCRIPTION, getOgImages } from '../lib/seo'
import SeoJsonLd from '../components/SeoJsonLd'

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: DEFAULT_TITLE,
    template: `%s | ${SITE_NAME}`,
  },
  description: DEFAULT_DESCRIPTION,
  keywords: [
    '예체능 재수',
    '예체능 재수학원',
    '예체능 재수 종합반',
    '체대입시 재수',
    '미대입시 재수',
    '대치동 재수',
    '예체능 입시',
    '체대 입시',
    '미대 입시',
    'ST-예인',
  ],
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: SITE_URL, // 페이지별 metadata.alternates.canonical로 오버라이드
  },
  verification: {
    google: 'iAgdtusVBFPtzgs0tlR3aS00icHzmK1dbdxHOuG_V2E',
  },
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: SITE_URL,
    siteName: SITE_NAME,
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: getOgImages(),
  },
  twitter: {
    card: 'summary_large_image',
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: getOgImages().map((img) => img.url),
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <head>
        <meta name="naver-site-verification" content="f85b4d44bd5cbcd9e59a4af75ed635dec0863d0a" />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-399SGJW9CX"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-399SGJW9CX');
          `}
        </Script>
      </head>
      <body>
        <SeoJsonLd />
        {children}
      </body>
    </html>
  )
}
