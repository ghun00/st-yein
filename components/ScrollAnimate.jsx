'use client'

import { useEffect, useRef, useState } from 'react'

/**
 * 스크롤 애니메이션 래퍼 컴포넌트
 * 자식 요소가 뷰포트에 들어올 때 애니메이션을 트리거합니다.
 */
export default function ScrollAnimate({
  children,
  animationType = 'fadeInUp',
  delay = 0,
  className = '',
  threshold = 0.1,
}) {
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
            if (elementRef.current) {
              observer.unobserve(elementRef.current)
            }
          }
        })
      },
      {
        threshold,
        rootMargin: '0px 0px -50px 0px',
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

  const getHiddenClass = () => {
    switch (animationType) {
      case 'fadeInLeft':
        return 'scroll-hidden-left'
      case 'fadeInRight':
        return 'scroll-hidden-right'
      case 'scaleIn':
        return 'scroll-hidden-scale'
      default:
        return 'scroll-hidden'
    }
  }

  const getAnimateClass = () => {
    switch (animationType) {
      case 'fadeInLeft':
        return 'animate-fadeInLeft'
      case 'fadeInRight':
        return 'animate-fadeInRight'
      case 'scaleIn':
        return 'animate-scaleIn'
      case 'slideUp':
        return 'animate-slideUp'
      default:
        return 'animate-fadeInUp'
    }
  }

  return (
    <div
      ref={elementRef}
      className={`scroll-animate ${isVisible ? getAnimateClass() : getHiddenClass()} ${className}`}
    >
      {children}
    </div>
  )
}

