import { useEffect, useRef, useState, type CSSProperties } from 'react'
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

const DESKTOP_QUERY = '(min-width: 62rem)'
const REDUCED_MOTION_QUERY = '(prefers-reduced-motion: reduce)'
const REVEAL_START = 0.1
const REVEAL_END = 0.92

const clamp = (value: number, min = 0, max = 1) => Math.min(Math.max(value, min), max)

function IdealizadorTimelineSection() {
  const sectionRef = useRef<HTMLElement | null>(null)
  const itemRefs = useRef<(HTMLLIElement | null)[]>([])
  const animationFrameRef = useRef<number | null>(null)
  const [activeIndex, setActiveIndex] = useState(-1)
  const [visibleItems, setVisibleItems] = useState(() => timelineMilestones.map(() => false))
  const [timelineProgress, setTimelineProgress] = useState(0)
  const [isReducedMotion, setIsReducedMotion] = useState(false)

  useEffect(() => {
    const desktopMedia = window.matchMedia(DESKTOP_QUERY)
    const reducedMotionMedia = window.matchMedia(REDUCED_MOTION_QUERY)

    const revealAll = () => {
      setActiveIndex(timelineMilestones.length - 1)
      setVisibleItems(timelineMilestones.map(() => true))
      setTimelineProgress(1)
    }

    const resetTimeline = () => {
      setActiveIndex(-1)
      setVisibleItems(timelineMilestones.map(() => false))
      setTimelineProgress(0)
    }

    const updateDesktopProgress = () => {
      animationFrameRef.current = null

      if (!sectionRef.current) {
        return
      }

      const section = sectionRef.current
      const scrollableDistance = Math.max(section.offsetHeight - window.innerHeight, 1)
      const progress = clamp(-section.getBoundingClientRect().top / scrollableDistance)
      const normalizedProgress = clamp((progress - REVEAL_START) / (REVEAL_END - REVEAL_START))
      const nextActiveIndex =
        normalizedProgress <= 0
          ? -1
          : Math.min(timelineMilestones.length - 1, Math.floor(normalizedProgress * timelineMilestones.length))

      setTimelineProgress(progress)
      setActiveIndex(nextActiveIndex)
      setVisibleItems(timelineMilestones.map((_, index) => index <= nextActiveIndex))
    }

    const requestDesktopUpdate = () => {
      if (animationFrameRef.current === null) {
        animationFrameRef.current = window.requestAnimationFrame(updateDesktopProgress)
      }
    }

    let observer: IntersectionObserver | null = null

    const setupMode = () => {
      if (animationFrameRef.current !== null) {
        window.cancelAnimationFrame(animationFrameRef.current)
        animationFrameRef.current = null
      }

      observer?.disconnect()
      observer = null
      setIsReducedMotion(reducedMotionMedia.matches)

      window.removeEventListener('scroll', requestDesktopUpdate)
      window.removeEventListener('resize', requestDesktopUpdate)

      if (reducedMotionMedia.matches) {
        revealAll()
        return
      }

      if (desktopMedia.matches) {
        resetTimeline()
        requestDesktopUpdate()
        window.addEventListener('scroll', requestDesktopUpdate, { passive: true })
        window.addEventListener('resize', requestDesktopUpdate)
        return
      }

      resetTimeline()
      observer = new IntersectionObserver(
        (entries) => {
          setVisibleItems((currentItems) => {
            const nextItems = [...currentItems]
            let hasChanged = false

            entries.forEach((entry) => {
              if (!entry.isIntersecting) {
                return
              }

              const itemIndex = Number((entry.target as HTMLElement).dataset.timelineIndex)

              if (!Number.isNaN(itemIndex) && !nextItems[itemIndex]) {
                nextItems[itemIndex] = true
                hasChanged = true
              }
            })

            if (hasChanged) {
              const nextActiveIndex = nextItems.reduce((lastVisibleIndex, isVisible, index) => {
                return isVisible ? index : lastVisibleIndex
              }, -1)

              setActiveIndex(nextActiveIndex)
              setTimelineProgress(nextActiveIndex < 0 ? 0 : (nextActiveIndex + 1) / timelineMilestones.length)
            }

            return hasChanged ? nextItems : currentItems
          })
        },
        { rootMargin: '0px 0px -18% 0px', threshold: 0.28 },
      )

      itemRefs.current.forEach((item) => {
        if (item) {
          observer?.observe(item)
        }
      })
    }

    setupMode()
    desktopMedia.addEventListener('change', setupMode)
    reducedMotionMedia.addEventListener('change', setupMode)

    return () => {
      window.removeEventListener('scroll', requestDesktopUpdate)
      window.removeEventListener('resize', requestDesktopUpdate)
      desktopMedia.removeEventListener('change', setupMode)
      reducedMotionMedia.removeEventListener('change', setupMode)
      observer?.disconnect()

      if (animationFrameRef.current !== null) {
        window.cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [])

  return (
    <section
      className={`idealizador-timeline${isReducedMotion ? ' idealizador-timeline--reduced-motion' : ''}`}
      style={{ '--timeline-progress': timelineProgress } as CSSProperties}
      aria-labelledby="idealizador-timeline-title"
      ref={sectionRef}
    >
      <div className="idealizador-timeline__sticky">
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
                const isActive = activeIndex === index
                const cardClassName = [
                  'idealizador-timeline__card',
                  milestone.isWide ? 'idealizador-timeline__card--wide' : '',
                  isVisible ? 'idealizador-timeline__card--visible' : '',
                  isActive ? 'idealizador-timeline__card--active' : '',
                ]
                  .filter(Boolean)
                  .join(' ')

                return (
                  <li
                    className={`idealizador-timeline__item idealizador-timeline__item--${milestone.position}${
                      isVisible ? ' idealizador-timeline__item--visible' : ''
                    }${isActive ? ' idealizador-timeline__item--active' : ''}`}
                    key={`${milestone.label}-${milestone.description}`}
                    data-timeline-index={index}
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
      </div>
    </section>
  )
}

export default IdealizadorTimelineSection
