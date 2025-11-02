import SectionHeading from './SectionHeading'

/**
 * 테스티모니얼 섹션 컴포넌트
 * 고객 후기 표시
 */
export default function Testimonials() {
  const testimonials = [
    {
      quote: '의사결정의 기준이 되는 지표들이 잘 정리되어 있어 좋았습니다.',
      author: '김*영',
      role: '고2 예체능 학생 학부모'
    },
    {
      quote: '시중에는 해외 자료가 대부분이라 국내 예체능 입시 자료를 찾기 어려웠었는데 두고두고 참고할 수 있는 정보가 많았습니다!',
      author: '이*민',
      role: '고1 예체능 학생 학부모'
    },
    {
      quote: '예체능 입시생 전체적인 학습 전략을 설계하는 입장에서 고민이 많았는데 감을 잡아가기 시작했습니다.',
      author: '박*현',
      role: '재수 학부모'
    },
    {
      quote: '바로 활용하고 싶을 만큼 알찹니다. 막연하게만 추측했던 부분들이 수치로 보여서 도움이 됩니다.',
      author: '최*수',
      role: '고2 예체능 학생 학부모'
    },
  ]

  return (
    <section className="bg-ink py-section-mobile md:py-section-tablet lg:py-section-desktop relative overflow-hidden">
      {/* 미묘한 그라데이션 오버레이 */}
      <div className="absolute inset-0 bg-gradient-to-b from-ink via-ink to-[#050505]" />
      
      <div className="w-full max-w-content mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 md:mb-16 animate-fade-in-up">
          <SectionHeading className="text-white mb-4">
            전략 자료집을 먼저 만난 사람들:
          </SectionHeading>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <p className="text-white text-[16px] md:text-[18px] leading-relaxed mb-6">
                &quot;{testimonial.quote}&quot;
              </p>
              <div className="border-t border-white/10 pt-4">
                <div className="text-white font-semibold text-[16px] mb-1">
                  {testimonial.author}님
                </div>
                <div className="text-white/70 text-[14px]">
                  {testimonial.role}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

