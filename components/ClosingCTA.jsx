import Image from 'next/image'

/**
 * 클로징 CTA 섹션 컴포넌트
 * 검은색 배경에 최종 메시지와 CTA 버튼을 표시합니다.
 */
export default function ClosingCTA() {
  return (
    <section className="bg-ink py-[96px] md:py-[128px] lg:py-[192px] relative overflow-hidden">
      {/* 미묘한 그라데이션 오버레이 */}
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink to-[#050505]" />
      
      <div className="w-full max-w-content mx-auto px-4 md:px-6 lg:px-8 text-center space-y-10 md:space-y-12 relative z-10 font-semibold">
        <div className="space-y-5 md:space-y-7 text-white/95 text-[24px] md:text-[32px] leading-relaxed animate-fade-in-up font-semibold">
          <p>
            <span className="inline md:hidden">
              겨울방학은 1년 중 <br />가장 큰 격차가 벌어지는 시기입니다.
            </span>
            <span className="hidden md:inline">
              겨울방학은 1년 중 가장 큰 격차가 벌어지는 시기입니다.
            </span>
          </p>
          <p>
            <span className="inline md:hidden">
              준비하는 학생은 앞서가고,<br />쉬는 학생은 그대로 남습니다.
            </span>
            <span className="hidden md:inline">
              준비하는 학생은 앞서가고, 쉬는 학생은 그대로 남습니다.
            </span>
          </p>
          <p className="text-white">
            &apos;대치동 컨설턴트 전략집&apos;이 <br />여러분의 겨울방학을 역전의 기회로 만들기를 바랍니다.
          </p>
        </div>

        <div className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <a
            href="https://tally.so/r/3jdE9R"
            target="_blank"
            rel="noopener noreferrer"
            role="button"
            className="group inline-block bg-brand-orange text-paper px-8 md:px-10 py-4 md:py-5 rounded-full font-semibold text-[16px] md:text-[18px] shadow-premium-orange hover:shadow-[0_20px_60px_rgba(235,90,20,0.4)] hover:scale-[1.02] transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-brand-orange/30 focus:ring-offset-2 focus:ring-offset-ink"
          >
            <span className="relative z-10">예체능 입시생 전략집 무료로 받기</span>
          </a>
        </div>
      </div>

      
    </section>
  )
}

