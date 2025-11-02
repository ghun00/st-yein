'use client'

import { useEffect, useRef, useState } from 'react'

/**
 * 스크롤 기반 애니메이션 훅
 * 요소가 뷰포트에 들어올 때 애니메이션을 트리거합니다.
 * @param {Object} options - 애니메이션 옵션
 * @param {number} options.threshold - IntersectionObserver threshold (기본값: 0.1)
 * @param {string} options.animationType - 애니메이션 타입 (fadeInUp, fadeInLeft, fadeInRight, scale)
 * @param {number} options.delay - 애니메이션 딜레이 (ms)
 */
export function useScrollAnimation(options = {}) {
  const { threshold = 0.1, animationType = 'fadeInUp', delay = 0 } = options
  const [isVisible, setIsVisible] = useState(false)
  const elementRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setIsVisible(true)
            }, delay)
            // 한 번만 트리거하기 위해 관찰 중지
            if (elementRef.current) {
              observer.unobserve(elementRef.current)
            }
          }
        })
      },
      {
        threshold,
        rootMargin: '0px 0px -50px 0px', // 요소가 조금 들어와도 트리거
      }
    )

    if (elementRef.current) {
      observer.observe(elementRef.current)
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current)
      }
    }
  }, [threshold, delay])

  return {
    ref: elementRef,
    isVisible,
    animationClass: isVisible ? `animate-${animationType}` : 'opacity-0',
  }
}

/**
 * 여러 요소를 순차적으로 애니메이션하는 훅
 */
export function useStaggeredAnimation(itemCount, options = {}) {
  const { threshold = 0.1, staggerDelay = 100 } = options
  const [visibleItems, setVisibleItems] = useState([])
  const containerRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // 각 아이템을 순차적으로 표시
            for (let i = 0; i < itemCount; i++) {
              setTimeout(() => {
                setVisibleItems((prev) => {
                  if (!prev.includes(i)) {
                    return [...prev, i]
                  }
                  return prev
                })
              }, i * staggerDelay)
            }
            if (containerRef.current) {
              observer.unobserve(containerRef.current)
            }
          }
        })
      },
      {
        threshold,
        rootMargin: '0px 0px -50px 0px',
      }
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current)
      }
    }
  }, [itemCount, threshold, staggerDelay])

  return {
    ref: containerRef,
    visibleItems,
  }
}

