'use client'

import { useEffect, useState } from 'react'

/**
 * IntersectionObserver를 사용하여 현재 뷰포트에 있는 섹션을 감지합니다.
 * @param {string[]} sectionIds - 감지할 섹션 ID 배열 (예: ['guide', 'winter', 'repeat'])
 * @param {number} threshold - IntersectionObserver threshold (기본값: 0.5)
 * @returns {string|null} 현재 활성화된 섹션 ID
 */
export function useActiveSection(sectionIds, threshold = 0.5) {
  const [activeSection, setActiveSection] = useState(sectionIds[0] || null)

  useEffect(() => {
    const observers = []

    sectionIds.forEach((id) => {
      const element = document.getElementById(id)
      if (!element) return

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && entry.intersectionRatio >= threshold) {
              setActiveSection(id)
            }
          })
        },
        {
          threshold,
          rootMargin: '-20% 0px -20% 0px', // 섹션의 50%가 뷰포트에 보일 때 활성화
        }
      )

      observer.observe(element)
      observers.push({ observer, element })
    })

    return () => {
      observers.forEach(({ observer, element }) => {
        observer.unobserve(element)
      })
    }
  }, [sectionIds, threshold])

  return activeSection
}


