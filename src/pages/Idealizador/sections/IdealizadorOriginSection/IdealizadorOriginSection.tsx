import { useEffect, useRef, useState } from 'react'
import Container from '../../../../components/Container/Container'
import founderBarretina from '../../../../assets/images/idealizador/founder-barretina.png'
import './IdealizadorOriginSection.css'

function IdealizadorOriginSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const section = sectionRef.current

    if (!section) {
      return undefined
    }

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (prefersReducedMotion) {
      setIsVisible(true)
      return undefined
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.55 },
    )

    observer.observe(section)

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className={`idealizador-origin${isVisible ? ' idealizador-origin--visible' : ''}`}
      aria-labelledby="idealizador-origin-title"
    >
      <Container className="idealizador-origin__container">
        <figure className="idealizador-origin__figure">
          <img
            className="idealizador-origin__image"
            src={founderBarretina}
            alt="Barretina da Fera Proart diante de músicos em uma apresentação noturna."
            width="543"
            height="798"
            loading="lazy"
          />
        </figure>

        <div className="idealizador-origin__content">
          <p className="idealizador-origin__eyebrow">A FERA PROART SURGIU DE</p>

          <h2 className="idealizador-origin__title" id="idealizador-origin-title">
            <span className="idealizador-origin__title-line">
              Uma <span className="idealizador-origin__title-script">necessidade</span>
            </span>
            <span className="idealizador-origin__title-line">vivida na prática</span>
          </h2>

          <div className="idealizador-origin__copy">
            <p>
              Foram anos de regência, competições e conquistas ao lado de centenas de músicos, balizas e maestros.
            </p>
            <p>
              E com essa vivência real do Maestro no mundo da música, Fernando Rabelo entendeu melhor que ninguém a necessidade desse universo.
            </p>
          </div>

          <p className="idealizador-origin__conclusion">
            <span>
              Foi assim que, em 2024, o Maestro dá vida à Fera Proart, a Grife das Bandas e Fanfarras.
            </span>
          </p>
        </div>
      </Container>
    </section>
  )
}

export default IdealizadorOriginSection
