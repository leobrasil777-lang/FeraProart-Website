import { useEffect, useRef, useState } from 'react'
import Container from '../Container/Container'
import './HomeStatsSection.css'

type Stat = {
  finalValue: number
  label: string
  suffix?: string
  accessibleLabel: string
}

const ANIMATION_DURATION = 1400

const stats: Stat[] = [
  {
    finalValue: 2000,
    label: 'clientes atendidos',
    accessibleLabel: 'Mais de 2000 clientes atendidos',
  },
  {
    finalValue: 140,
    label: 'de peças produzidas',
    suffix: 'k',
    accessibleLabel: 'Mais de 140 mil peças produzidas',
  },
  {
    finalValue: 20,
    label: 'anos de atuação',
    accessibleLabel: 'Mais de 20 anos de atuação',
  },
]

function easeOutCubic(progress: number) {
  return 1 - Math.pow(1 - progress, 3)
}

function HomeStatsSection() {
  const sectionRef = useRef<HTMLElement | null>(null)
  const animationFrameRef = useRef<number | null>(null)
  const hasAnimatedRef = useRef(false)
  const [displayValues, setDisplayValues] = useState(() => stats.map(() => 0))

  useEffect(() => {
    const section = sectionRef.current

    if (!section) {
      return undefined
    }

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const finishAnimation = () => {
      hasAnimatedRef.current = true
      setDisplayValues(stats.map((stat) => stat.finalValue))
    }

    if (prefersReducedMotion || !('IntersectionObserver' in window)) {
      finishAnimation()
      return undefined
    }

    const startAnimation = () => {
      if (hasAnimatedRef.current) {
        return
      }

      hasAnimatedRef.current = true
      const startedAt = performance.now()

      const animate = (timestamp: number) => {
        const elapsed = timestamp - startedAt
        const progress = Math.min(elapsed / ANIMATION_DURATION, 1)
        const easedProgress = easeOutCubic(progress)

        setDisplayValues(
          stats.map((stat) => Math.round(stat.finalValue * easedProgress)),
        )

        if (progress < 1) {
          animationFrameRef.current = requestAnimationFrame(animate)
          return
        }

        setDisplayValues(stats.map((stat) => stat.finalValue))
        animationFrameRef.current = null
      }

      animationFrameRef.current = requestAnimationFrame(animate)
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          startAnimation()
          observer.disconnect()
        }
      },
      {
        root: null,
        rootMargin: '0px 0px -12% 0px',
        threshold: 0.25,
      },
    )

    observer.observe(section)

    return () => {
      observer.disconnect()

      if (animationFrameRef.current !== null) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      className="home-stats-section"
      aria-label="Fera Proart em números"
    >
      <Container className="home-stats-section__container">
        <dl className="home-stats-section__list">
          {stats.map((stat, index) => (
            <div
              className="home-stats-section__item"
              aria-label={stat.accessibleLabel}
              key={stat.label}
            >
              <dt className="home-stats-section__value">
                +{displayValues[index]}
                {stat.suffix}
              </dt>
              <dd className="home-stats-section__label">{stat.label}</dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  )
}

export default HomeStatsSection
