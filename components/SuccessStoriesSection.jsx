'use client'

import { useEffect, useRef, useState } from 'react'
import SuccessCard from './SuccessCard'
import ScrollReveal from './ScrollReveal'

const successCases = [
  { scoreDelta: 66, name: '김00', university: '국민대학교 합격', gender: 'female' },
  { scoreDelta: 91, name: '전00', university: '서울과기대 합격', gender: 'female' },
  { scoreDelta: 167, name: '전00', university: '이화여자대학교 합격', gender: 'female' },
  { scoreDelta: 150, name: '박00', university: '이화여자대학교 합격', gender: 'female' },
  { scoreDelta: 65, name: '김00', university: '국민대학교 합격', gender: 'male' },
]

export default function SuccessStoriesSection() {
  const containerRef = useRef(null)
  const listRef = useRef(null)
  const [autoIndex, setAutoIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setAutoIndex((prev) => (prev + 1) % successCases.length)
    }, 4500)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    const container = containerRef.current
    const list = listRef.current
    if (!container || !list || !list.children.length) return

    const firstCard = list.children[0]
    const cardWidth = firstCard.getBoundingClientRect().width
    const gap = window.innerWidth >= 640 ? 24 : 16
    container.scrollTo({
      left: (cardWidth + gap) * autoIndex,
      behavior: 'smooth',
    })
  }, [autoIndex])

  return (
    <section className="bg-[#F3F6FF] py-14 sm:py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-10">
        <ScrollReveal className="text-center space-y-3">
          <h2 className="text-[28px] sm:text-[36px] font-bold text-[#0F1B3D]">
            예인과 함께라면 <br className="sm:hidden" /> 목표가 현실이 됩니다.
          </h2>
          
        </ScrollReveal>

        <div
          ref={containerRef}
          className="mt-6 overflow-x-auto scroll-smooth snap-x snap-mandatory no-scrollbar"
        >
          <div ref={listRef} className="flex gap-4 sm:gap-6">
            {successCases.map((item, index) => (
              <div key={`${item.name}-${index}`} data-card>
                <SuccessCard {...item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

