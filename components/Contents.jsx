import Image from 'next/image'
import ScrollAnimate from './ScrollAnimate'

/**
 * 내용 목록 섹션 컴포넌트
 * 검은색 배경에 전략 자료집의 내용을 PART 구조로 표시합니다.
 */
export default function Contents() {
  const parts = [
    {
      title: '왜 겨울방학이 성적 격차를 벌릴까요?',
    },
    {
      title: '어떻게 학습 시간을 관리해야할까요?',
    },
    {
      title: '의욕만 앞선다면..',
    },
    {
      title: '고1, 고2 각각 집중해야할 요소',
    },
    {
      title: '부모님의 역할',
    },
  ]

  return (
    <section id="guide" className="bg-ink relative overflow-hidden py-[96px] md:py-[128px] lg:py-[192px]">
      {/* 미묘한 그라데이션 오버레이 */}
      <div className="absolute inset-0 bg-gradient-to-b from-ink via-ink to-[#050505]" />
      
      <div className="w-full max-w-content mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        {/* 모바일: 세로 배치 */}
        <div className="block md:hidden">
          {/* 제목 섹션 */}
          <ScrollAnimate animationType="fadeInUp" delay={0}>
            <div className="text-center mb-16">
              <h2 className="text-white text-[24px] md:text-[40px] font-bold leading-[1.6]">
                전략 자료집에는
                <br className="inline md:hidden" />
                이런 내용이 포함되어 있어요
              </h2>
            </div>
          </ScrollAnimate>

          {/* PART 구조 */}
          <div className="space-y-12">
            {parts.map((part, partIndex) => (
              <ScrollAnimate
                key={partIndex}
                animationType="fadeInUp"
                delay={partIndex * 100}
              >
                {/* PART 제목 */}
                <div>
                  <span className="text-brand-orange text-[20px] font-bold mr-3">
                    PART {partIndex + 1}.
                  </span>
                  <span className="text-white text-[20px] font-bold">
                    {part.title}
                  </span>
                </div>
              </ScrollAnimate>
            ))}
          </div>
        </div>

        {/* 태블릿 및 PC: 좌우 분할 레이아웃 */}
        <div className="hidden md:grid md:grid-cols-2 md:gap-12 lg:gap-16">
          {/* 왼쪽: 타이틀 */}
          <ScrollAnimate animationType="fadeInLeft" delay={0}>
            <div className="flex items-start">
              <h2 className="text-white text-[24px] md:text-[32px] lg:text-[48px] font-bold leading-tight">
                전략 자료집에는<br />이런 내용이<br />포함되어 있어요
              </h2>
            </div>
          </ScrollAnimate>

          {/* 오른쪽: PART 구조 */}
          <div className="space-y-12 md:space-y-16 lg:space-y-20">
            {parts.map((part, partIndex) => (
              <ScrollAnimate
                key={partIndex}
                animationType="fadeInRight"
                delay={partIndex * 100}
              >
                {/* PART 제목 */}
                <div>
                  <span className="text-brand-orange text-[20px] md:text-[24px] lg:text-[28px] font-bold mr-3">
                    PART {partIndex + 1}.
                  </span>
                  <span className="text-white text-[20px] md:text-[24px] lg:text-[28px] font-bold">
                    {part.title}
                  </span>
                </div>
              </ScrollAnimate>
            ))}
          </div>
        </div>
      </div>

      
    </section>
  )
}

