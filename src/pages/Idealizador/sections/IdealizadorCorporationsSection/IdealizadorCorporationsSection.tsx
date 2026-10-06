import { useEffect, useRef, useState } from 'react'
import Container from '../../../../components/Container/Container'
import './IdealizadorCorporationsSection.css'

interface Corporation {
  name: string
}

const corporations: Corporation[] = [
  { name: 'BAMASO - Banda Marcial de Sorocaba' },
  { name: 'Banda Sinfônica de Osasco' },
  { name: 'Banda Marcial de Piraporinha - Piedade' },
  { name: 'Banda Sinfônica da UFMG' },
  { name: 'Banda Laurinda Cardoso - Mogi das Cruzes' },
  { name: 'Banda Marcial de Águas de Santa Bárbara' },
]

const FIRST_ROW_TRIGGER = 0.30
const SECOND_ROW_TRIGGER = 0.009

function IdealizadorCorporationsSection() {
  const sectionRef = useRef<HTMLElement | null>(null)
  const animationFrameRef = useRef<number | null>(null)

  const [visibleGroup, setVisibleGroup] = useState(0)

  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')

    const updateVisibleGroup = () => {
      animationFrameRef.current = null

      if (reducedMotion.matches) {
        setVisibleGroup(2)
        return
      }

      const section = sectionRef.current

      if (!section) {
        return
      }

      const rect = section.getBoundingClientRect()

      let nextVisibleGroup = 0

      if (rect.top <= window.innerHeight * FIRST_ROW_TRIGGER) {
        nextVisibleGroup = 1
      }

      if (rect.top <= window.innerHeight * SECOND_ROW_TRIGGER) {
        nextVisibleGroup = 2
      }

      setVisibleGroup((currentGroup) => Math.max(currentGroup, nextVisibleGroup))
    }

    const requestUpdate = () => {
      if (animationFrameRef.current === null) {
        animationFrameRef.current = window.requestAnimationFrame(updateVisibleGroup)
      }
    }

    updateVisibleGroup()

    window.addEventListener('scroll', requestUpdate, { passive: true })
    window.addEventListener('resize', requestUpdate)

    return () => {
      window.removeEventListener('scroll', requestUpdate)
      window.removeEventListener('resize', requestUpdate)

      if (animationFrameRef.current !== null) {
        window.cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [])

  const visibleCardsCount = visibleGroup * 3

  return (
    <section
      className="idealizador-corporations"
      aria-labelledby="idealizador-corporations-title"
      ref={sectionRef}
    >
      <Container className="idealizador-corporations__container">
        <h2 className="idealizador-corporations__title" id="idealizador-corporations-title">
          <span className="idealizador-corporations__title-line">
            <span className="idealizador-corporations__title-presence highlight-font">Presença</span>{' '}
            <span className="idealizador-corporations__title-em">em</span>
          </span>
          <span className="idealizador-corporations__title-line idealizador-corporations__title-line--corporations">
            diversas corporações
          </span>
        </h2>

        <p className="idealizador-corporations__description">
          Ao longo de sua trajetória, o Maestro Fernando Rabelo regeu diversas instituições acumulando experiência prática em música e fanfarras.
        </p>

        <ol className="idealizador-corporations__list" aria-label="Corporações musicais ligadas à trajetória de Fernando Rabelo">
          {corporations.map((corporation, index) => {
            const isVisible = index < visibleCardsCount
            const delayClassName = `idealizador-corporations__item--delay-${index % 3}`

            return (
              <li
                className={[
                  'idealizador-corporations__item',
                  delayClassName,
                  isVisible ? 'idealizador-corporations__item--visible' : '',
                ]
                  .filter(Boolean)
                  .join(' ')}
                key={corporation.name}
              >
                <article className="idealizador-corporations__card">
                  <span className="idealizador-corporations__number" aria-hidden="true">
                    {index + 1}
                  </span>
                  <span className="idealizador-corporations__divider" aria-hidden="true" />
                  <p className="idealizador-corporations__name">{corporation.name}</p>
                </article>
              </li>
            )
          })}
        </ol>
      </Container>
    </section>
  )
}

export default IdealizadorCorporationsSection