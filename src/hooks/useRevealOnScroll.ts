import { useLayoutEffect, useRef, useState, type RefObject } from 'react'

type RevealState = 'idle' | 'hidden' | 'visible'

export interface UseRevealOnScrollOptions {
  threshold?: number
  rootMargin?: string
  once?: boolean
}

export interface UseRevealOnScrollResult<T extends HTMLElement> {
  ref: RefObject<T | null>
  isVisible: boolean
  isRevealReady: boolean
}

function useRevealOnScroll<T extends HTMLElement>({
  threshold = 0.2,
  rootMargin = '0px',
  once = true,
}: UseRevealOnScrollOptions = {}): UseRevealOnScrollResult<T> {
  const ref = useRef<T>(null)
  const [revealState, setRevealState] = useState<RevealState>('idle')

  useLayoutEffect(() => {
    const element = ref.current

    if (!element) {
      return
    }

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (prefersReducedMotion || !('IntersectionObserver' in window)) {
      setRevealState('visible')
      return
    }

    let observer: IntersectionObserver | null = null

    const reveal = () => {
      setRevealState('visible')

      if (once) {
        observer?.disconnect()
      }
    }

    try {
      observer = new IntersectionObserver(
        ([entry]) => {
          if (entry?.isIntersecting) {
            reveal()
          } else if (!once) {
            setRevealState('hidden')
          }
        },
        { threshold, rootMargin },
      )

      observer.observe(element)

      const bounds = element.getBoundingClientRect()
      const visibleHeight = Math.max(
        0,
        Math.min(bounds.bottom, window.innerHeight) - Math.max(bounds.top, 0),
      )
      const initialIntersectionRatio = bounds.height > 0 ? visibleHeight / bounds.height : 0

      if (initialIntersectionRatio >= threshold) {
        reveal()
      } else {
        setRevealState('hidden')
      }
    } catch {
      observer?.disconnect()
      setRevealState('visible')
    }

    return () => observer?.disconnect()
  }, [once, rootMargin, threshold])

  return {
    ref,
    isVisible: revealState !== 'hidden',
    isRevealReady: revealState !== 'idle',
  }
}

export default useRevealOnScroll
