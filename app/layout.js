import Script from 'next/script'
import './globals.css'

export const metadata = {
  title: '예체능 입시생을 위한 최상의 학습 관리',
  description: '예체능 입시생을 위한 최상의 학습 관리를 ST-예인과 함께하세요!',
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


