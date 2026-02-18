'use client'

import Link from 'next/link'
import { useRef } from 'react'
import { useSectionViewTracking } from '../lib/useSectionViewTracking'

/**
 * 브랜드 소개 섹션 - SEO용 키워드 풍부 본문 (300~600자)
 * 예체능 재수 전문 종합반, 체대/미대 입시 등 자연스럽게 포함
 */
export default function BrandIntroSection() {
  const sectionRef = useRef(null)

  useSectionViewTracking({
    targetRef: sectionRef,
    eventName: 'view_brand_intro',
    eventParams: { section_id: 'brand_intro' },
  })

  return (
    <section
      ref={sectionRef}
      className="bg-ink/95 text-white/90 py-16 md:py-20 px-4 md:px-6 lg:px-8"
      aria-labelledby="brand-intro-heading"
    >
      <div className="max-w-content mx-auto">
        <h2
          id="brand-intro-heading"
          className="text-xl md:text-2xl font-bold text-white mb-6 md:mb-8"
        >
          예체능 재수 전문 종합반, 체대·미대 입시생을 위한 ST-예인
        </h2>
        <div className="space-y-4 text-base md:text-lg leading-relaxed">
          <p>
            ST-예인은 예체능 재수학원으로, 체대입시 재수·미대입시 재수를 준비하는
            학생들을 위한 전문 종합반을 운영합니다. 예체능 입시는 실기와 학업의
            균형이 중요하며, 제한된 시간 안에 효율적인 관리가 성과를 좌우합니다.
          </p>
          <p>
            대치동 근처에서 예체능 재수 컨설팅 경험을 쌓아온 팀이, 학생별 상황에
            맞는 학습 전략과 루틴 설계를 지원합니다. 겨울방학 전략 자료집, 윈터스쿨,
            재수 종합반 프로그램을 통해 체대·미대 입시생이 목표에 한 걸음 더
            다가설 수 있도록 돕습니다.
          </p>
          <p>
            <Link
              href="/repeat"
              className="text-brand-orange font-semibold underline underline-offset-2 hover:no-underline"
            >
              예체능 재수 종합반
            </Link>
            과{' '}
            <Link
              href="/freebook"
              className="text-brand-orange font-semibold underline underline-offset-2 hover:no-underline"
            >
              무료 전략 자료집
            </Link>
            ,{' '}
            <Link
              href="/winter"
              className="text-brand-orange font-semibold underline underline-offset-2 hover:no-underline"
            >
              윈터스쿨
            </Link>
            에서 상세 내용을 확인하실 수 있습니다.
          </p>
        </div>
      </div>
    </section>
  )
}
