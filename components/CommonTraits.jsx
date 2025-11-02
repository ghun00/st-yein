import Image from 'next/image'
import SectionHeading from './SectionHeading'
import ScrollAnimate from './ScrollAnimate'

/**
 * 공통점 목록 섹션 컴포넌트
 * 주황색 배경에 성적 상승 학생들의 공통점을 카드 형태로 표시합니다.
 */
export default function CommonTraits() {
  const traits = [
    '계획보다 "루틴"을 먼저 만들어요',
    '실기와 학습의 균형을 지켜요',
    '양보다 \'지속\'을 선택해요',
  ]

  return (
    <section className="bg-brand-orange py-[96px] md:py-[128px] lg:py-[192px] relative overflow-hidden">
      <div className="w-full max-w-content mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <ScrollAnimate animationType="fadeInUp" delay={0}>
          <SectionHeading className="mb-8 md:mb-12 text-center text-[20px] md:text-[32px] lg:text-[48px] leading-[1.4]">
            전략 자료집에서 발견한<br />성적 상승하는 학생들의 공통점
          </SectionHeading>
        </ScrollAnimate>

        <div className="space-y-4 md:space-y-6">
          {traits.map((trait, index) => (
            <ScrollAnimate
              key={index}
              animationType="scaleIn"
              delay={index * 150}
            >
              <div
                className="group bg-white/10 backdrop-blur-md rounded-full px-6 md:px-8 py-5 md:py-6 border border-white/25 shadow-[inset_0_2px_12px_rgba(255,255,255,0.15),0_4px_20px_rgba(0,0,0,0.1)] hover:bg-white/15 hover:border-white/35 hover:shadow-[inset_0_2px_12px_rgba(255,255,255,0.2),0_8px_30px_rgba(0,0,0,0.15)] hover:scale-[1.02] transition-all duration-300"
              >
                <p className="text-white text-[20px] md:text-[24px] font-semibold tracking-tight text-center">{trait}</p>
              </div>
            </ScrollAnimate>
          ))}
        </div>
      </div>

      
    </section>
  )
}

