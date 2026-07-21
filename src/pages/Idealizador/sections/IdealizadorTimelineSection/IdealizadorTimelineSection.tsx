import { useEffect, useRef, useState } from 'react'
import Container from '../../../../components/Container/Container'
import './IdealizadorTimelineSection.css'

type TimelinePosition = 'top' | 'bottom'

interface TimelineMilestone {
  label: string
  description: string
  position: TimelinePosition
  isCurrent?: boolean
  isWide?: boolean
}

const timelineMilestones: TimelineMilestone[] = [
  {
    label: '1963',
    description: 'Nascimento do Maestro em São Paulo',
    position: 'top',
  },
  {
    label: '1973',
    description: 'Inicia sua trajetória musical e profissional.',
    position: 'bottom',
  },
  {
    label: '1900',
    description: 'Formação: Trompete na faculdade de Marcelo Tuinambá.',
    position: 'top',
    isWide: true,
  },
  {
    label: '1900',
    description: 'Regência de importantes corporações',
    position: 'bottom',
  },
  {
    label: '2004',
    description: 'Fundação da Fera Proart',
    position: 'top',
  },
  {
    label: 'ATUAL',
    description: 'Direção da Fera Proart e regente da Bamaso',
    position: 'bottom',
    isCurrent: true,
  },
]

const desktopMediaQuery = '(min-width: 62rem)'
const reducedMotionMediaQuery = '(prefers-reduced-motion: reduce)'

function clampProgress(value: number) {
  return Math.min(Math.max(value, 0), 1)
}

function IdealizadorTimelineSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const itemRefs = useRef<Array<HTMLLIElement | null>>([])
  const animationFrameRef = useRef<number | null>(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [isDesktopPinned, setIsDesktopPinned] = useState(false)
  const [visibleItems, setVisibleItems] = useState<boolean[]>(() => timelineMilestones.map(() => false))

  useEffect(() => {
    const desktopQuery = window.matchMedia(desktopMediaQuery)
    const reducedMotionQuery = window.matchMedia(reducedMotionMediaQuery)

    const syncMode = () => {
      const shouldPin = desktopQuery.matches && !reducedMotionQuery.matches

      setIsDesktopPinned(shouldPin)

      if (reducedMotionQuery.matches) {
        setActiveIndex(timelineMilestones.length - 1)
        setScrollProgress(1)
        setVisibleItems(timelineMilestones.map(() => true))
        return
      }

      if (!shouldPin) {
        setScrollProgress(0)
        setActiveIndex(0)
      }
    }

    syncMode()
    desktopQuery.addEventListener('change', syncMode)
    reducedMotionQuery.addEventListener('change', syncMode)

    return () => {
      desktopQuery.removeEventListener('change', syncMode)
      reducedMotionQuery.removeEventListener('change', syncMode)
    }
  }, [])

  useEffect(() => {
    if (!isDesktopPinned) {
      return undefined
    }

    const updateTimelineProgress = () => {
      animationFrameRef.current = null

      const section = sectionRef.current

      if (!section) {
        return
      }

      const rect = section.getBoundingClientRect()
      const scrollableDistance = section.offsetHeight - window.innerHeight
      const nextProgress = scrollableDistance > 0 ? clampProgress(-rect.top / scrollableDistance) : 1
      const nextActiveIndex = Math.min(
        timelineMilestones.length - 1,
        Math.floor(nextProgress * timelineMilestones.length),
      )

      setScrollProgress(nextProgress)
      setActiveIndex(nextActiveIndex)
      setVisibleItems(timelineMilestones.map((_, index) => index <= nextActiveIndex))
    }

    const requestProgressUpdate = () => {
      if (animationFrameRef.current === null) {
        animationFrameRef.current = window.requestAnimationFrame(updateTimelineProgress)
      }
    }

    updateTimelineProgress()
    window.addEventListener('scroll', requestProgressUpdate, { passive: true })
    window.addEventListener('resize', requestProgressUpdate)

    return () => {
      window.removeEventListener('scroll', requestProgressUpdate)
      window.removeEventListener('resize', requestProgressUpdate)

      if (animationFrameRef.current !== null) {
        window.cancelAnimationFrame(animationFrameRef.current)
        animationFrameRef.current = null
      }
    }
  }, [isDesktopPinned])

  useEffect(() => {
    if (isDesktopPinned) {
      return undefined
    }

    const reducedMotionQuery = window.matchMedia(reducedMotionMediaQuery)

    if (reducedMotionQuery.matches) {
      setVisibleItems(timelineMilestones.map(() => true))
      return undefined
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return
          }

          const itemIndex = Number((entry.target as HTMLElement).dataset.timelineIndex)

          if (Number.isNaN(itemIndex)) {
            return
          }

          setVisibleItems((currentItems) => {
            if (currentItems[itemIndex]) {
              return currentItems
            }

            const nextItems = [...currentItems]
            nextItems[itemIndex] = true
            return nextItems
          })
        })
      },
      { rootMargin: '0px 0px -16% 0px', threshold: 0.25 },
    )

    itemRefs.current.forEach((item) => {
      if (item) {
        observer.observe(item)
      }
    })

    return () => observer.disconnect()
  }, [isDesktopPinned])

  return (
    <section
      className={`idealizador-timeline${isDesktopPinned ? ' idealizador-timeline--pinned' : ''}`}
      aria-labelledby="idealizador-timeline-title"
      ref={sectionRef}
      style={{ '--timeline-progress': scrollProgress } as React.CSSProperties}
    >
      <Container className="idealizador-timeline__container">
        <header className="idealizador-timeline__header">
          <h2 className="idealizador-timeline__title" id="idealizador-timeline-title">
            <span className="idealizador-timeline__title-main">A jornada do</span>{' '}
            <span className="idealizador-timeline__title-highlight highlight-font">maestro</span>
          </h2>
          <p className="idealizador-timeline__subtitle">Os Principais Marcos dessa História</p>
        </header>

        <div className="idealizador-timeline__track" aria-label="Linha do tempo da trajetória de Fernando Rabelo">
          <div className="idealizador-timeline__line" aria-hidden="true" />
          <ol className="idealizador-timeline__list">
            {timelineMilestones.map((milestone, index) => {
              const isVisible = visibleItems[index]
              const isActive = isDesktopPinned && index === activeIndex
              const cardClassName = [
                'idealizador-timeline__card',
                milestone.isWide ? 'idealizador-timeline__card--wide' : '',
              ]
                .filter(Boolean)
                .join(' ')

              return (
                <li
                  className={`idealizador-timeline__item idealizador-timeline__item--${milestone.position}${
                    isVisible ? ' idealizador-timeline__item--visible' : ''
                  }${isActive ? ' idealizador-timeline__item--active' : ''}`}
                  data-timeline-index={index}
                  key={`${milestone.label}-${milestone.description}`}
                  ref={(element) => {
                    itemRefs.current[index] = element
                  }}
                >
                  <article className={cardClassName}>
                    {milestone.isCurrent ? (
                      <span className="idealizador-timeline__year">{milestone.label}</span>
                    ) : (
                      <time className="idealizador-timeline__year" dateTime={milestone.label}>
                        {milestone.label}
                      </time>
                    )}
                    <p className="idealizador-timeline__description">{milestone.description}</p>
                  </article>
                  <span className="idealizador-timeline__marker" aria-hidden="true" />
                </li>
              )
            })}
          </ol>
        </div>
      </Container>
    </section>
  )
}

export default IdealizadorTimelineSection
