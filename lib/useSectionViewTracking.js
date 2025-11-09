'use client'

import { useEffect, useRef } from 'react'
import { sendGAEvent } from './ga'

export function useSectionViewTracking({
  targetRef,
  eventName,
  eventParams = {},
  threshold = 0.4,
  once = true,
}) {
  const paramsRef = useRef(eventParams)

  useEffect(() => {
    paramsRef.current = eventParams
  }, [eventParams])

  useEffect(() => {
    const element = targetRef?.current
    if (!element || typeof IntersectionObserver === 'undefined') {
      return
    }

    let hasTracked = false

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return
          }

          if (!once || !hasTracked) {
            sendGAEvent(eventName, paramsRef.current)
            hasTracked = true
            if (once) {
              observer.disconnect()
            }
          }
        })
      },
      {
        threshold,
      }
    )

    observer.observe(element)

    return () => {
      observer.disconnect()
    }
  }, [targetRef, eventName, threshold, once])
}

