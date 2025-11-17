'use client'

import Image from 'next/image'
import { useEffect } from 'react'
import FloatingTabs from '../../components/FloatingTabs'

const timeline = [
  {
    label: '개강 일자',
    value: '2026년 1월 1일',
  },
  {
    label: '운영 기간',
    value: '2026년 2월 28일까지',
  },
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

      <section className="relative min-h-screen flex items-center justify-center pt-[0px] sm:pt-[120px] pb-24 sm:pb-28">
        {/* 배경 이미지 */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/winter_bg.png')" }}
          aria-hidden="true"
        />

        <div
          className="relative z-10 w-full mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-10"
          style={{ maxWidth: '1100px' }}
        >
          <div className="text-white font-bold tracking-[0.12em] space-y-2">
            <p className="text-xl sm:hidden leading-snug">
              예체능 입시생을 위한
              <br />
              <span className="text-[#ffffff]">ST-예인의 최상의 겨울 학습 관리</span>
            </p>
            <p className="hidden sm:block text-2xl sm:text-4xl">
              예체능 입시생을 위한 최상의 겨울 학습 관리
            </p>
          </div>

          <div className="flex flex-col items-center gap-6">
            <div className="hidden sm:block w-full">
              <Image
                src="/images/winterTitle_pc.png"
                alt="ST-예인 2026 윈터스쿨"
                width={2200}
                height={840}
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

          <div className="flex flex-col items-center gap-3 sm:gap-4 w-full">
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

      <div className="fixed bottom-10 inset-x-0 flex justify-center px-4 sm:px-0 z-40 pointer-events-none">
        <button
          type="button"
          className="pointer-events-auto inline-flex w-full max-w-[420px] items-center justify-center rounded-full bg-gradient-to-r from-[#ffdd83] via-[#ffb347] to-[#ff8650] px-10 py-4 text-base sm:text-lg font-bold text-[#492400] shadow-[0_24px_60px_rgba(255,149,64,0.55)] hover:-translate-y-1 transition-transform"
        >
          선착순 마감 전 신청 →
        </button>
      </div>
    </main>
  )
}
