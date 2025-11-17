'use client'

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
    <main className="min-h-screen bg-[#050a1f] text-white">
      <FloatingTabs />

      <section className="relative min-h-screen flex items-center justify-center pt-[100px] sm:pt-[180px] pb-20 sm:pb-28">
        {/* 배경 이미지 */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/winter_bg.png')" }}
          aria-hidden="true"
        />

        <div className="relative z-10 w-full max-w-[960px] mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-10">
          <p className="text-white text-xl sm:text-4xl tracking-[0.12em] font-bold">
            예체능 입시생을 위한
            <br className="inline sm:hidden" />
            <span className="sm:ml-2">최상의 겨울 학습 관리</span>
          </p>

          <div className="flex flex-col items-center gap-6">
            <section className="w-full flex justify-center">
              <div
                className="font-climate text-[clamp(48px,8vw,120px)] tracking-[-0.03em] drop-shadow-[0_8px_30px_rgba(0,0,0,0.35)]"
                style={{
                  lineHeight: '120%',
                  background: 'linear-gradient(90deg, #fff 10%, #c6e1ff 45%, #e6f2ff 90%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  textFillColor: 'transparent',
                }}
              >
                ST-예인
              </div>
            </section>
            <section className="w-full flex justify-center">
              <div
                className="
                  font-climate 
                  text-[clamp(62px,12vw,150px)] 
                  sm:text-[clamp(52px,9vw,132px)] 
                  tracking-[-0.035em] 
                  drop-shadow-[0_8px_30px_rgba(0,0,0,0.35)] 
                  whitespace-nowrap 
                  pb-6 
                  sm:pb-8
                "
                style={{
                  lineHeight: '120%',
                  background: 'linear-gradient(90deg, #fff 15%, #b3d9ff 40%, #e6f2ff 90%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  textFillColor: 'transparent',
                }}
              >
                2026
                <span className="sm:hidden">
                  <br />
                </span>
                윈터스쿨
              </div>
            </section>
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

          <div className="pt-4">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#ffdd83] via-[#ffb347] to-[#ff8650] px-10 py-4 text-base sm:text-lg font-bold text-[#492400] shadow-[0_20px_45px_rgba(255,149,64,0.45)] hover:translate-y-[-3px] hover:shadow-[0_25px_55px_rgba(255,149,64,0.55)] transition-all"
            >
              선착순 마감 전 신청 →
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}
