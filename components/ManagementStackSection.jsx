'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { AnimatePresence, motion } from 'framer-motion'
import ScrollReveal from './ScrollReveal'

const stackCards = [
  {
    title: '3중 담임 시스템이 하루의 리듬을 잡습니다',
    description:
      '반담임·교과 선생님·운영진이 함께 생활·학습·출결을 동시에 관리합니다. 안정적인 하루를 만들기 위해 매일 리듬을 점검합니다.',
    keywords: ['출결 관리', '생활 리듬', '3중 체제'],
  },
  {
    title: '집중을 방해하는 모든 요소를 원천 차단합니다',
    description:
      "원내 전 구역 대화 금지, 졸음·휴대폰 통제, 규칙 운영을 통해 학생이 흐트러지지 않는 '집중 환경'을 유지합니다.",
    keywords: ['집중 환경', '생활 규칙', '실시간 모니터링'],
    cta: '예인의 하루 보기',
  },
  {
    title: '계획이 아닌, 실행이 되도록 만드는 1:1 코칭',
    description:
      '월·주·일간 학습 계획을 함께 작성하고, 실행 루틴을 유지하도록 습관을 교정합니다.',
    keywords: ['학습 계획', '습관 코칭', '실행 루틴'],
  },
  {
    title: '멘탈 관리가 흔들리면 성적도 흔들립니다',
    description:
      '전문 심리상담사가 슬럼프·불안을 함께 분석하고, 집중력 회복과 감정 안정 전략을 제공합니다.',
    keywords: ['슬럼프 해결', '감정 안정', '심리 관리'],
  },
  {
    title: '입시는 방향이 80%입니다',
    description:
      '성적·실기·학생부를 기반으로 개인별 최적의 수시·정시 전략과 면접·서류 로드맵을 제시합니다.',
    keywords: ['입시 전략', '면접/서류', '진학 로드맵'],
  },
]

const dailyTimeline = [
  '06:50 기상 문자',
  '07:50 등원 / 출결 인증 / 휴대폰 OFF 제출',
  '08:00 단어 테스트',
  '09:20 수업 시작',
  '12:00 점심 / 관리',
  '17:00 자기주도학습 + 질의응답',
  '22:00 귀가 / 플래너 인증',
]

const keywordClass =
  'text-sm sm:text-base rounded-full px-3 sm:px-4 py-1 bg-[#EEF2FF] text-[#1F57FF] font-semibold'

const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 200 : -200,
    opacity: 0,
    scale: 0.96,
  }),
  center: { x: 0, opacity: 1, scale: 1 },
  exit: (direction) => ({
    x: direction > 0 ? -200 : 200,
    opacity: 0,
    scale: 0.96,
  }),
}

export default function ManagementStackSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [direction, setDirection] = useState(1)
  const [showModal, setShowModal] = useState(false)
  const sliderRef = useRef(null)
  const wheelLock = useRef(false)
  const touchStartRef = useRef(null)

  const goToIndex = useCallback(
    (nextIndex) => {
      const total = stackCards.length
      const wrapped = (nextIndex + total) % total
      setDirection(nextIndex > activeIndex ? 1 : -1)
      setActiveIndex(wrapped)
    },
    [activeIndex]
  )

  const handleWheel = useCallback(
    (event) => {
      if (!sliderRef.current?.contains(event.target)) return
      event.preventDefault()
      if (wheelLock.current) return

      if (event.deltaY > 40) {
        goToIndex(activeIndex + 1)
      } else if (event.deltaY < -40) {
        goToIndex(activeIndex - 1)
      }

      wheelLock.current = true
      setTimeout(() => {
        wheelLock.current = false
      }, 350)
    },
    [activeIndex, goToIndex]
  )

  useEffect(() => {
    window.addEventListener('wheel', handleWheel, { passive: false })
    return () => window.removeEventListener('wheel', handleWheel)
  }, [handleWheel])

  const handleTouchStart = useCallback((event) => {
    touchStartRef.current = event.touches[0].clientX
  }, [])

  const handleTouchEnd = useCallback(
    (event) => {
      if (touchStartRef.current == null) return
      const delta = event.changedTouches[0].clientX - touchStartRef.current
      if (Math.abs(delta) > 50) {
        goToIndex(delta < 0 ? activeIndex + 1 : activeIndex - 1)
      }
      touchStartRef.current = null
    },
    [activeIndex, goToIndex]
  )

  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-0 space-y-12">
        <ScrollReveal className="text-center space-y-4">
          <p className="text-[#1F57FF] text-sm tracking-[0.1em] uppercase font-semibold">
            MANAGEMENT SYSTEM
          </p>
          <h2 className="text-[32px] sm:text-[48px] font-extrabold text-[#0F1B3D] leading-tight">
            관리를 관리에 더하다
            <br className="sm:hidden" />
          </h2>
          <p className="text-[#4A5570] text-md sm:text-2xl sm:leading-[1.5] font-semibold max-w-3xl mx-auto">
            성적이 오르는 학생들은 단 하나의 공통점이 있습니다.<br className="sm:hidden" /> 생활 리듬·학습·멘탈·전략이 모두
            안정적이라는 것. <br className="sm:hidden" />대치ST예인은 이 모든 것을 관리합니다.
          </p>
        </ScrollReveal>

        <div
          ref={sliderRef}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          className="relative overflow-hidden"
        >
          <div className="absolute inset-y-0 right-0 w-24 hidden sm:block pointer-events-none bg-gradient-to-l from-white via-transparent to-transparent" />
          <div className="absolute inset-y-0 left-0 w-16 hidden sm:block pointer-events-none bg-gradient-to-r from-white via-transparent to-transparent" />

          <button
            type="button"
            onClick={() => goToIndex(activeIndex - 1)}
            className="hidden sm:flex absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-[#D8E0FF] text-[#1F57FF] font-bold text-lg bg-white/80 hover:bg-[#F0F4FF] shadow-md items-center justify-center"
            aria-label="이전 카드"
          >
            ‹
          </button>
          <button
            type="button"
            onClick={() => goToIndex(activeIndex + 1)}
            className="hidden sm:flex absolute right-0 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-[#D8E0FF] text-[#1F57FF] font-bold text-lg bg-white/80 hover:bg-[#F0F4FF] shadow-md items-center justify-center"
            aria-label="다음 카드"
          >
            ›
          </button>
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={activeIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ type: 'spring', stiffness: 120, damping: 20 }}
              className="mx-auto w-full sm:w-[60%] bg-white rounded-[32px] border border-[#E4EAFF] p-6 sm:p-12 space-y-6"
            >
              <div className="space-y-6 text-left">
                <p className="text-[#1F57FF] text-sm font-semibold">{`0${activeIndex + 1}`}</p>
                <h3 className="text-[28px] sm:text-[32px] font-bold text-[#0F1B3D] leading-snug">
                  {stackCards[activeIndex].title}
                </h3>
                <p className="text-[#4A5570] text-base sm:text-2xl sm:leading-[1.4]">
                  {stackCards[activeIndex].description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {stackCards[activeIndex].keywords.map((keyword) => (
                    <span key={keyword} className={keywordClass}>
                      {keyword}
                    </span>
                  ))}
                </div>
              </div>

              {stackCards[activeIndex].cta && (
                <button
                  type="button"
                  onClick={() => setShowModal(true)}
                  className="w-full rounded-full bg-[#1F57FF] text-white px-6 py-3 font-semibold shadow-[0_15px_40px_rgba(31,87,255,0.35)] hover:-translate-y-0.5 transition-transform"
                >
                  {stackCards[activeIndex].cta}
                </button>
              )}
            </motion.div>
          </AnimatePresence>

          <div className="mt-10 flex items-center justify-center gap-2">
            {stackCards.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => goToIndex(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  idx === activeIndex ? 'w-8 bg-[#1F57FF]' : 'w-3 bg-[#D8E0FF]'
                }`}
                aria-label={`슬라이드 ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
          <motion.div
            className="absolute inset-0 bg-black/60"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowModal(false)}
          />
          <motion.div
            initial={{ scale: 0.92, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.92, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 210, damping: 24 }}
            className="relative bg-white rounded-[28px] shadow-[0_30px_120px_rgba(0,0,0,0.25)] max-w-[560px] w-full p-6 sm:p-10 space-y-6 z-10"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-semibold text-[#1F57FF] tracking-[0.3em] uppercase">
                  Routine
                </p>
                <h3 className="text-[28px] font-extrabold text-[#0F1B3D]">예인의 하루</h3>
              </div>
              <button
                type="button"
                onClick={() => setShowModal(false)}
                className="text-[#4A5570] hover:text-[#0F1B3D]"
              >
                ✕
              </button>
            </div>

            <div className="space-y-4">
              {dailyTimeline.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-[16px] bg-[#F6F8FF] px-4 py-3 text-[#0F1B3D] font-semibold"
                >
                  <span className="w-2 h-2 rounded-full bg-[#1F57FF]" />
                  {item}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      )}
    </section>
  )
}

