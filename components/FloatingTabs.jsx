'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { sendGAEvent } from '../lib/ga'

const TABS = [
  { path: '/freebook', label: '무료 전략 자료집' },
  { path: '/winter', label: '윈터 스쿨' },
  { path: '/repeat', label: '재수 종합반' },
]

/**
 * 플로팅 탭 컴포넌트
 * 플로팅 버튼 형태로 화면 상단에 위치하며, 클릭 시 해당 페이지로 이동합니다.
 */
export default function FloatingTabs() {
  const pathname = usePathname()

  return (
    <nav className="fixed top-[40px] sm:top-[50px] md:top-[60px] left-1/2 transform -translate-x-1/2 z-50 animate-fade-in">
      <div 
        className="flex gap-1 sm:gap-2 rounded-full px-2 sm:px-3 py-1.5 sm:py-2 md:py-2.5 shadow-premium border border-white/10 backdrop-blur-xl"
        style={{ backgroundColor: '#B4410480' }}
      >
        {TABS.map((tab) => {
          const isActive = pathname === tab.path
          return (
            <Link
              key={tab.path}
              href={tab.path}
              onClick={() => {
                sendGAEvent('floating_tab_click', {
                  tab_id: tab.path.replace('/', '') || 'home',
                  tab_label: tab.label,
                })
              }}
              className={`
                whitespace-nowrap px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 md:py-2.5 rounded-full text-[12px] sm:text-[14px] md:text-[16px] font-medium transition-all duration-300
                ${
                  isActive
                    ? 'bg-ink/95 text-paper font-bold shadow-lg scale-105'
                    : 'text-white/95 hover:text-white hover:bg-white/15 hover:scale-105'
                }
                focus:outline-none focus:ring-2 focus:ring-brand-orange/50 focus:ring-offset-2
              `}
            >
              {tab.label}
            </Link>
          )
        })}
      </div>
    </nav>
  )
}

