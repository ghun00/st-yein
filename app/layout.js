import './globals.css'

export const metadata = {
  title: '예체능 입시생을 위한 겨울방학 전략 자료집 | 대치동 컨설턴트',
  description: '대치동 예체능 재수 종합 학원 학습 관리 컨설턴트가 10년의 경험을 녹여낸 겨울방학 학습 전략법을 무료로 받아보세요.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  )
}


