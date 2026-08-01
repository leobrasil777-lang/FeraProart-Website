import { useEffect, useRef, useState } from 'react'
import CTAButton from '../../../../components/CTAButton/CTAButton'
import Container from '../../../../components/Container/Container'
import homeNotebookImage from '../../../../assets/images/home/home-notebook.png'
import './HomeFinalCTASection.css'

function HomeFinalCTASection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const section = sectionRef.current

    if (!section) {
      return
    }

    if (!('IntersectionObserver' in window)) {
      setIsVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      {
        threshold: 0.6,
      },
    )

    observer.observe(section)

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className={`home-final-cta-section${isVisible ? ' home-final-cta-section--visible' : ''}`}
      aria-labelledby="home-final-cta-title"
    >
      <div className="home-final-cta-section__background" aria-hidden="true" />
      <Container className="home-final-cta-section__container">
        <div className="home-final-cta-section__content">
          <h2 id="home-final-cta-title" className="home-final-cta-section__title">
            <span className="home-final-cta-section__title-main">Vamos</span>{' '}
            <span className="home-final-cta-section__title-script">conversar?</span>
          </h2>
          <p className="home-final-cta-section__description">
            Nossa equipe te aguarda para entender sua situação e facilitar seu processo de compra e licitação
          </p>
          <CTAButton className="home-final-cta-section__button" whatsappMessage="Olá, vim pelo site da Fera Proart e gostaria de conversar sobre um processo de compra ou licitação.">
            Quero saber mais
          </CTAButton>
        </div>
        <div className="home-final-cta-section__media" aria-hidden="true">
          <img
            className="home-final-cta-section__notebook"
            src={homeNotebookImage}
            alt=""
            draggable="false"
          />
        </div>
      </Container>
    </section>
  )
}

export default HomeFinalCTASection
