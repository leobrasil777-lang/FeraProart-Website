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

const clamp = (value: number) => Math.min(Math.max(value, 0), 1)

function IdealizadorTimelineSection() {
  const trackRef = useRef<HTMLDivElement | null>(null)
  const animationFrameRef = useRef<number | null>(null)

  const [timelineProgress, setTimelineProgress] = useState(0)
  const [activeIndex, setActiveIndex] = useState(-1)

  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')

    const updateTimelineProgress = () => {
      animationFrameRef.current = null

      const track = trackRef.current

      if (!track) {
        return
      }

      if (reducedMotion.matches) {
        setTimelineProgress(1)
        setActiveIndex(timelineMilestones.length - 1)
        return
      }

      const rect = track.getBoundingClientRect()

      const startPoint = window.innerHeight * 1.3
      const endPoint = window.innerHeight * 0.80

      const totalDistance = rect.height + startPoint - endPoint
      const progress = clamp((startPoint - rect.top) / totalDistance)

      setTimelineProgress(progress)

      const nextActiveIndex =
        progress <= 0
          ? -1
          : Math.min(timelineMilestones.length - 1, Math.ceil(progress * timelineMilestones.length) - 1)

      setActiveIndex(nextActiveIndex)
    }

    const requestTimelineUpdate = () => {
      if (animationFrameRef.current === null) {
        animationFrameRef.current = window.requestAnimationFrame(updateTimelineProgress)
      }
    }

    updateTimelineProgress()

    window.addEventListener('scroll', requestTimelineUpdate, { passive: true })
    window.addEventListener('resize', requestTimelineUpdate)

    return () => {
      window.removeEventListener('scroll', requestTimelineUpdate)
      window.removeEventListener('resize', requestTimelineUpdate)

      if (animationFrameRef.current !== null) {
        window.cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [])

  return (
    <section
      className="idealizador-timeline"
      aria-labelledby="idealizador-timeline-title"
      style={{ '--timeline-progress': timelineProgress } as CSSProperties}
    >
      <Container className="idealizador-timeline__container">
        <header className="idealizador-timeline__header">
          <h2 className="idealizador-timeline__title" id="idealizador-timeline-title">
            <span className="idealizador-timeline__title-main">A jornada do</span>{' '}
            <span className="idealizador-timeline__title-highlight highlight-font">maestro</span>
          </h2>
          <p className="idealizador-timeline__subtitle">Os Principais Marcos dessa História</p>
        </header>

        <div
          className="idealizador-timeline__track"
          aria-label="Linha do tempo da trajetória de Fernando Rabelo"
          ref={trackRef}
        >
          <div className="idealizador-timeline__line" aria-hidden="true" />
          <ol className="idealizador-timeline__list">
            {timelineMilestones.map((milestone, index) => {
              const isVisible = index <= activeIndex

              const cardClassName = [
                'idealizador-timeline__card',
                milestone.isWide ? 'idealizador-timeline__card--wide' : '',
                isVisible ? 'idealizador-timeline__card--visible' : '',
              ]
                .filter(Boolean)
                .join(' ')

              return (
                <li
                  className={`idealizador-timeline__item idealizador-timeline__item--${milestone.position}${
                    isVisible ? ' idealizador-timeline__item--visible' : ''
                  }`}
                  key={`${milestone.label}-${milestone.description}`}
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