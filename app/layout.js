import Script from 'next/script'
import './globals.css'

const OG_IMAGE_URL = 'https://mblogthumb-phinf.pstatic.net/MjAyMDEyMjhfMTk3/MDAxNjA5MTQ1MjQ2Mzgy.sytEceYQyHf-r795IbeS4p9gSqKYbGw3wNW1JFg1j80g.4G1n7ZIFpuFlExCamAad107FJpkwIahko_j9_iZAAbwg.JPEG.jungwk2000/KakaoTalk_20201217_160250367.jpg?type=w800'

export const metadata = {
  title: 'ST-예인 | 예체능 입시생을 위한 최상의 학습 관리',
  description: '예체능 입시생을 위한 최상의 학습 관리를 ST-예인과 함께하세요!',
  openGraph: {
    title: 'ST-예인 | 예체능 입시생을 위한 최상의 학습 관리',
    description: '예체능 입시생을 위한 최상의 학습 관리를 ST-예인과 함께하세요!',
    images: [
      {
        url: OG_IMAGE_URL,
        width: 800,
        height: 400,
        alt: 'ST-예인',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ST-예인 | 예체능 입시생을 위한 최상의 학습 관리',
    description: '예체능 입시생을 위한 최상의 학습 관리를 ST-예인과 함께하세요!',
    images: [OG_IMAGE_URL],
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <head>
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
      <body>{children}</body>
    </html>
  )
}


