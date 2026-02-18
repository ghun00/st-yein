'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import ScrollReveal from './ScrollReveal'

const TAB_CONTENTS = [
  {
    id: 'routine',
    label: '루틴 설계',
    title: '예체능 입시생에게는 ‘루틴’이 성적을 만듭니다',
    content:
      '예체능 입시생은 절대적인 공부 시간이 부족합니다. 그래서 수업을 듣는 것만으로는 성적이 오르지 않습니다. ST예인은 아침 단어 암기부터 과목별 학습법, 복습 포인트, 주간 테스트까지 학생 스스로 공부할 수 있는 자기주도학습 능력을 만들어주는 데 집중합니다.',
    image: '/images/score1.png',
  },
  {
    id: 'qa',
    label: 'Q&A 기반 학습 개선',
    title: '질문을 쌓지 않는 학습 구조가 성적을 바꿉니다',
    content:
      '수업과 자기주도학습 과정에서 생긴 의문점을 메모하고, 질문 신청표를 통해 매일 질문하며 해결하는 것이 ST예인의 기본 흐름입니다. 단순히 ‘답을 알려주는 질문’이 아니라, 학생 스스로 모르고 있던 취약 부분을 밝히고 개선하는 과정입니다.',
    image: '/images/score2.png',
  },
  {
    id: 'solution',
    label: '1:1 ST-Solution',
    title: '개인별 전략 설계, 1:1이라서 가능한 변화입니다',
    content:
      '예체능 입시생은 공부 시간이 짧고, 스스로 공부를 설계하기 어려운 경우가 많습니다. ST-Solution은 진단 평가로 파악한 취약 부분을 바탕으로 학생에게 필요한 학습 전략을 1:1로 맞춤 설계하는 시스템입니다.',
    image: '/images/score3.png',
  },
]

const IMPROVEMENT_CASES = [
  {
    defaultSrc: '/images/examples/example1_default.png',
    hoverSrc: '/images/examples/example1_open.png',
    label: '예체능 입시 성적 향상 사례 1',
  },
  {
    defaultSrc: '/images/examples/example2_default.png',
    hoverSrc: '/images/examples/example2_open.png',
    label: '예체능 입시 성적 향상 사례 2',
  },
  {
    defaultSrc: '/images/examples/example3_default.png',
    hoverSrc: '/images/examples/example3_open.png',
    label: '예체능 입시 성적 향상 사례 3',
  },
]

export default function ScoreSection() {
  const [activeTab, setActiveTab] = useState(TAB_CONTENTS[0].id)
  const currentTab = TAB_CONTENTS.find((tab) => tab.id === activeTab)
  const [isTouchDevice, setIsTouchDevice] = useState(false)
  const [activeTouchCard, setActiveTouchCard] = useState(null)

  useEffect(() => {
    if (typeof window === 'undefined') return
    const mq = window.matchMedia('(hover: none)')
    const update = () => setIsTouchDevice(mq.matches)
    update()
    mq.addEventListener('change', update)
    return () => mq.removeEventListener('change', update)
  }, [])

  const handleCardToggle = (index) => {
    if (!isTouchDevice) return
    setActiveTouchCard((prev) => (prev === index ? null : index))
  }

  return (
    <section className="bg-[#F3F6FF] py-16 sm:py-24">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-0 space-y-10">
        <ScrollReveal className="text-center space-y-4">
          <p className="text-[#0F1B3D] text-[28px] sm:text-[48px] font-extrabold">
            성적 향상, 이유가 있습니다
          </p>
          <p className="text-[#4A5570] sm:leading-[1.5] font-semibold text-base text-xl sm:text-3xl leading-relaxed max-w-3xl mx-auto">
            예체능 입시생에게 필요한 건 ‘양치기 공부’가 아니라 제대로 방향 잡힌 학습 루틴과 개인별 전략입니다.
          </p>
        </ScrollReveal>

        <ScrollReveal
          className="flex gap-2 sm:gap-3 overflow-x-auto justify-start sm:justify-center scrollbar-hide"
          delay={120}
        >
          {TAB_CONTENTS.map((tab) => {
            const isActive = tab.id === activeTab
            return (
              <button
                key={tab.id}
                type="button"
                aria-pressed={isActive}
                onClick={() => setActiveTab(tab.id)}
                className={`whitespace-nowrap rounded-full px-5 sm:px-6 py-3 text-sm sm:text-base font-semibold transition-all duration-200 ${
                  isActive
                    ? 'bg-[#1F57FF] text-white shadow-[0_15px_40px_rgba(31,87,255,0.35)]'
                    : 'bg-white text-[#1E1E1E] border border-[#DFE5FF] hover:border-[#B9C9FF]'
                }`}
              >
                {tab.label}
              </button>
            )
          })}
        </ScrollReveal>

        <ScrollReveal
          key={currentTab.id}
          className="bg-white rounded-[28px] sm:rounded-[36px] shadow-[0_30px_100px_rgba(12,38,94,0.12)] p-6 sm:p-12 space-y-8"
          delay={200}
        >
          <div className="space-y-4">
            <h3 className="text-[22px] sm:text-[28px] font-bold text-[#0F1B3D]">
              {currentTab.title}
            </h3>
            <p className="text-[#4A5570] text-base sm:text-2xl sm:leading-[1.5]">
              {currentTab.content}
            </p>
          </div>

          <div className="rounded-[24px] bg-transparent h-[220px] sm:h-[300px] p-4 sm:p-6 flex justify-center items-center">
            <div className="relative w-full h-full overflow-hidden rounded-[16px] flex items-center justify-center">
              <Image
                src={currentTab.image}
                alt={`예체능 재수·체대·미대 입시생 ${currentTab.label} - ${currentTab.title}`}
                // width/height 대신 fill + object-contain 사용
                fill
                className="object-contain"
                priority={activeTab === 'routine'}
              />
            </div>
          </div>

        </ScrollReveal>

        <ScrollReveal delay={260} className="space-y-4">
          <div className="flex flex-col gap-4 sm:gap-6">
            {IMPROVEMENT_CASES.map((card, index) => (
              <div
                key={card.label}
                className="group relative w-full overflow-hidden rounded-[24px] aspect-[4/1] shadow-[0_20px_40px_rgba(0,0,0,0.08)]"
                onClick={() => handleCardToggle(index)}
              >
                <Image
                  src={card.defaultSrc}
                  alt={`${card.label} 기본`}
                  fill
                  className={`object-cover transition-opacity duration-300 ease-out ${
                    isTouchDevice && activeTouchCard === index ? 'opacity-0' : 'opacity-100'
                  } group-hover:opacity-0`}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 70vw, 720px"
                  priority={index === 0}
                />
                <Image
                  src={card.hoverSrc}
                  alt={`${card.label} 후기`}
                  fill
                  className={`object-cover transition-opacity duration-300 ease-out ${
                    isTouchDevice && activeTouchCard === index ? 'opacity-100' : 'opacity-0'
                  } group-hover:opacity-100`}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 70vw, 720px"
                  priority={index === 0}
                />
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

