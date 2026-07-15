import CTAButton from '../CTAButton/CTAButton'
import Container from '../Container/Container'
import './HomeFinalCTASection.css'

const finalCtaHref = '/licitacao'

function HomeFinalCTASection() {
  return (
    <section className="home-final-cta-section" aria-labelledby="home-final-cta-title">
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
          <CTAButton href={finalCtaHref} className="home-final-cta-section__button">
            Quero saber mais
          </CTAButton>
        </div>
        <div className="home-final-cta-section__media" aria-hidden="true">
          <div className="home-final-cta-section__notebook-placeholder" />
        </div>
      </Container>
    </section>
  )
}

export default HomeFinalCTASection
