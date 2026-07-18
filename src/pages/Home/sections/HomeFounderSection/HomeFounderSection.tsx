import { useEffect, useRef, useState } from 'react'
import CTAButton from '../../../../components/CTAButton/CTAButton'
import Container from '../../../../components/Container/Container'
import founderImage from '../../../../assets/images/home/home-idealizador.png'
import './HomeFounderSection.css'

const founderDescription = 'Fernando Rabelo é maestro, trompetista e idealizador da Fera Proart. Fundou e regeu diversas corporações musicais e, em 2004, transformou sua vivência na música e na confecção em uma empresa especializada no universo de bandas e fanfarras.'

function SendIcon() {
  return (
    <svg className="home-founder-section__cta-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
      <path d="M4 12L20 4L16 20L12.5 13.5L4 12Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M12.5 13.5L20 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  )
}

function HomeFounderSection() {
  const sectionRef = useRef<HTMLElement | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const section = sectionRef.current

    if (!section || isVisible) {
      return undefined
    }

    if (!('IntersectionObserver' in window)) {
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
      {
        root: null,
        rootMargin: '0px 0px -12% 0px',
        threshold: 0.2,
      },
    )

    observer.observe(section)

    return () => observer.disconnect()
  }, [isVisible])

  return (
    <section
      ref={sectionRef}
      className={`home-founder-section${isVisible ? ' home-founder-section--visible' : ''}`}
      aria-labelledby="home-founder-section-title"
    >
      <Container className="home-founder-section__container">
        <h2 id="home-founder-section-title" className="home-founder-section__title">
          <span className="home-founder-section__title-main">Conheça o nosso</span>
          <span className="home-founder-section__title-script highlight-font">idealizador</span>
        </h2>

        <div className="home-founder-section__portrait-wrap">
          <img
            className="home-founder-section__portrait"
            src={founderImage}
            alt="Fernando Rabelo, maestro e idealizador da Fera Proart"
          />
        </div>

        <div className="home-founder-section__content">
          <p className="home-founder-section__description">{founderDescription}</p>
          <CTAButton href="/idealizador" variant="primary" className="home-founder-section__cta" icon={<SendIcon />}>
            Quero saber mais
          </CTAButton>
        </div>
      </Container>
    </section>
  )
}

export default HomeFounderSection
