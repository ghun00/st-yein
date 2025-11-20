'use client'

import ScrollReveal from './ScrollReveal'

export default function WinterBrochureSection() {
  return (
    <section className="bg-[#020824] py-12 sm:py-36 relative overflow-hidden">
      {/* 배경 그라데이션 오버레이 */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#1F57FF]/20 via-[#6236FF]/20 to-[#FF5B37]/20 pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        <ScrollReveal>
          <div className="bg-gradient-to-r from-[#0B1220] via-[#101826] to-[#0B1220] border border-white/10 rounded-3xl px-6 sm:px-10 py-8 sm:py-10 shadow-[0_24px_80px_rgba(0,0,0,0.55)] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
            <div>
              <p className="text-lg sm:text-2xl font-bold text-white">
                더 자세한 사항은 브로셔를 확인해주세요!
              </p>
              <p className="mt-4 text-md sm:text-lg text-white/80 max-w-md">
                커리큘럼, 세부 시간표, 등록 안내를 한눈에 볼 수 있어요
              </p>
            </div>

            <a
              href="/st-yein-winter.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-white text-[#111827] text-sm sm:text-base font-semibold px-6 sm:px-8 py-3 shadow-[0_18px_40px_rgba(0,0,0,0.35)] hover:bg-[#F3F4FF] hover:-translate-y-0.5 transition-all duration-200 whitespace-nowrap"
            >
              브로셔 다운 받기
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

