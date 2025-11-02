import Image from 'next/image'

/**
 * 히어로 섹션 컴포넌트
 * 주황색 배경에 메인 메시지와 책 이미지를 표시합니다.
 */
export default function Hero() {
  return (
    <section className="bg-brand-orange min-h-screen flex items-center pt-[120px] sm:pt-[140px] md:pt-16 pb-16 md:py-24 relative overflow-hidden">
      {/* 그라데이션 오버레이 */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-orange via-brand-orange to-[#D9541A] opacity-100" />
      
      <div className="w-full max-w-content mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        {/* 텍스트 영역 - 중앙 정렬 */}
        <div className="text-ink space-y-6 lg:space-y-8 text-center max-w-3xl mx-auto animate-fade-in-up">
          {/* 제목 (하나의 h1로 통합) */}
          <h1 className="text-[36px] md:text-[56px] font-extrabold leading-[1.4] tracking-[-0.02em] text-ink drop-shadow-[0_2px_4px_rgba(0,0,0,0.1)]">
            곧 다가오는 겨울방학,<br />
            지금 바로 써먹을 수 있는 겨울방학 전략 자료집
          </h1>

          {/* 부제목 (2줄) */}
          <div className="text-[18px] md:text-[24px] leading-[1.6] space-y-1 font-semibold">
            <p>대치동 예체능 재수 종합 학원 학습 관리 컨설턴트가</p>
            <p>10년의 경험을 녹여낸</p>
          </div>

          {/* 본문 */}
          <div className="text-[18px] md:text-[24px] font-semibold leading-relaxed">
            <p>늘 궁금했지만 어디서도 얻을 수 없었던</p>
            <p>겨울방학 학습 전략법을 녹여냈습니다.</p>
          </div>

          {/* CTA 버튼 */}
          <div className="flex justify-center pt-2">
            <a
              href="https://tally.so/r/3jdE9R"
              target="_blank"
              rel="noopener noreferrer"
              role="button"
              className="group inline-block bg-ink text-paper px-8 md:px-10 py-4 md:py-5 rounded-full font-semibold text-[16px] md:text-[18px] shadow-premium hover:shadow-premium-orange hover:scale-[1.02] transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-ink/20 focus:ring-offset-2 focus:ring-offset-brand-orange"
            >
              <span className="relative z-10">예체능 입시생 전략집 무료로 받기</span>
            </a>
          </div>
        </div>
      </div>

      {/* 책 이미지 - 우측 하단에 absolute로 배치 (오른쪽 일부가 잘리도록) */}
      <div className="absolute bottom-[-100px] right-[-200px] w-[600px] md:w-[600px] lg:w-[900px] h-[600px] md:h-[600px] lg:h-[900px] opacity-30 transform rotate-[-8deg] translate-y-[25%] pointer-events-none animate-float">
        <div className="relative w-full h-full filter drop-shadow-[0_20px_40px_rgba(0,0,0,0.3)]">
          <Image
            src="/images/book_cover.png"
            alt="겨울방학 전략 자료집 책 이미지"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>
    </section>
  )
}
