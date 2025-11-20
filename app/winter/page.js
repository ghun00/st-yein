'use client'

import Image from 'next/image'
import { useEffect } from 'react'
import FloatingTabs from '../../components/FloatingTabs'
import ScoreSection from '../../components/ScoreSection'
import ScrollReveal from '../../components/ScrollReveal'
import ManagementStackSection from '../../components/ManagementStackSection'
import SuccessStoriesSection from '../../components/SuccessStoriesSection'
import WinterAdmissionSection from '../../components/WinterAdmissionSection'
import WinterBrochureSection from '../../components/WinterBrochureSection'

const timeline = [
  {
    label: '개강 일자',
    value: '2026년 1월 2일',
  },
  {
    label: '운영 기간',
    value: '2026년 2월 28일까지',
  },
]

const fiveToolTop = [
  { label: '관리 전략' },
  { label: '학습 전략' },
]

const fiveToolBottom = [
  { label: '시험 전략' },
  { label: '멘탈케어' },
  { label: '입시컨설팅' },
]

export default function WinterPage() {
  useEffect(() => {
    document.body.classList.add('winter-scrollbar')
    return () => {
      document.body.classList.remove('winter-scrollbar')
    }
  }, [])

  return (
    <main className="min-h-screen bg-[#050a1f] text-white pb-32 sm:pb-0">
      <FloatingTabs />

      <section className="relative min-h-screen flex items-center justify-center pt-[24px] sm:pt-[120px] pb-24 sm:pb-28 overflow-hidden">
        {/* 배경 이미지 */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/winter_bg.png')" }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 pointer-events-none opacity-60 mix-blend-screen animate-snow" aria-hidden="true" />
        <div className="absolute inset-[-20%] blur-3xl bg-[radial-gradient(circle_at_top,_rgba(120,169,255,0.35),_transparent_60%)] animate-aurora" aria-hidden="true" />

        <div
          className="relative z-10 w-full mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-10"
          style={{ maxWidth: '1300px' }}
        >
          <div className="text-white font-bold tracking-[0.12em] space-y-2 animate-hero">
            <p className="text-xl sm:hidden leading-snug">
              예체능 입시생을 위한
              <br />
              <span className="text-[#ffffff]">ST-예인의 최상의 겨울 학습 관리</span>
            </p>
            <p className="hidden sm:block text-2xl sm:text-4xl">
              예체능 입시생을 위한 최상의 겨울 학습 관리
            </p>
          </div>

          <div className="flex flex-col items-center gap-6 animate-hero-delay-1">
            <div className="hidden sm:block w-full">
              <Image
                src="/images/winterTitle_pc.png"
                alt="ST-예인 2026 윈터스쿨"
                width={2860}
                height={1092}
                priority
                className="w-full h-auto"
              />
            </div>
            <div className="sm:hidden flex justify-center">
              <Image
                src="/images/winterTitle_mo.png"
                alt="ST-예인 2026 윈터스쿨"
                width={480}
                height={360}
                priority
                className="w-full max-w-[360px] h-auto"
              />
            </div>
          </div>

          <div className="flex flex-col items-center gap-3 sm:gap-4 w-full animate-hero-delay-2">
            {timeline.map((item) => (
              <div
                key={item.label}
                className="w-fit min-w-[240px] max-w-[88vw] sm:max-w-[420px] lg:max-w-[460px] rounded-[28px] px-6 py-4 bg-gradient-to-r from-[#133c96]/90 via-[#1646b5]/90 to-[#277bff]/90 border border-white/20 shadow-[0_20px_45px_rgba(18,57,150,0.35)] backdrop-blur-3xl"
              >
                <div className="flex flex-row justify-between items-center gap-6 whitespace-nowrap">
                  <span className="text-base sm:text-lg text-white font-bold">
                    {item.label}
                  </span>
                  <span className="text-base sm:text-lg text-white font-bold inline-flex justify-center items-center min-w-[150px] sm:min-w-[180px]">
                    {item.value}
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      <section className="relative bg-[#0044FF] text-white py-16 sm:py-24 px-4 sm:px-6 lg:px-0">
        <div className="max-w-[1100px] mx-auto text-center space-y-10">
          <ScrollReveal className="space-y-8">
            <p className="text-[#B7D3FF] text-sm sm:text-base tracking-[0.32em] uppercase">
              ONLY WINTER
            </p>
            <h2 className="text-[28px] sm:text-[48px] leading-tight font-extrabold">
              예체능 입시생의 성적, 겨울방학에서 갈라집니다
            </h2>
            <p className="text-xl font-bold sm:text-3xl leading-relaxed sm:leading-[1.5] text-white max-w-3xl mx-auto">
              몇 안 되는 골든타임, 겨울방학. <br />어떻게 관리하느냐에 따라,<br />
              3월 이후 성적 곡선이 완전히 달라집니다.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={150}>
            <div className="bg-white text-ink rounded-[32px] sm:rounded-[36px] px-6 sm:px-12 py-10 sm:py-14 space-y-10 shadow-[0_30px_120px_rgba(0,34,102,0.25)]">
              <h3 className="text-[20px] sm:text-[28px] font-bold">
                대치ST예인의 성적 향상 5-TOOL
              </h3>

              <div className="space-y-4 sm:space-y-6">
                <div className="flex justify-center gap-4 sm:gap-6">
                  {fiveToolTop.map((item) => (
                    <div
                      key={item.label}
                      className="w-[150px] sm:w-[220px] aspect-square rounded-full bg-[#E4F0FF] flex items-center justify-center text-[20px] sm:text-[36px] font-bold text-[#003B8E] shadow-[0_15px_30px_rgba(0,59,142,0.25)] border border-white/60 transition-transform hover:-translate-y-1"
                    >
                      {item.label}
                    </div>
                  ))}
                </div>
                <div className="flex justify-center gap-4 sm:gap-6">
                  {fiveToolBottom.map((item) => (
                    <div
                      key={item.label}
                      className="w-[120px] sm:w-[180px] aspect-square rounded-full bg-[#E4F0FF] flex items-center justify-center text-[18px] sm:text-[32px] font-bold text-[#003B8E] shadow-[0_15px_30px_rgba(0,59,142,0.25)] border border-white/60 transition-transform hover:-translate-y-1"
                    >
                      {item.label}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={250}>
            <p className="text-2xl sm:text-3xl font-extrabold">
              겨울방학이 유일한 역전 타이밍입니다
            </p>
          </ScrollReveal>
        </div>
      </section>

      <ScoreSection />
      <ManagementStackSection />
      <SuccessStoriesSection />
      <WinterAdmissionSection />
      <WinterBrochureSection />

      <div className="fixed bottom-10 inset-x-0 flex justify-center px-4 sm:px-0 z-40 pointer-events-none">
        <button
          type="button"
          onClick={() => window.open('https://naver.me/GbDRJ5zY', '_blank')}
          className="pointer-events-auto inline-flex w-full max-w-[420px] items-center justify-center rounded-full bg-gradient-to-r from-[#ffdd83] via-[#ffb347] to-[#ff8650] px-10 py-4 text-base sm:text-lg font-bold text-[#492400] shadow-[0_24px_60px_rgba(255,149,64,0.55)] hover:-translate-y-1 transition-transform"
        >
          선착순 마감 전 신청 →
        </button>
      </div>
    </main>
  )
}
