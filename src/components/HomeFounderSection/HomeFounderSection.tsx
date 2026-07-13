import CTAButton from '../CTAButton/CTAButton'
import Container from '../Container/Container'
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
  return (
    <section className="home-founder-section" aria-labelledby="home-founder-section-title">
      <Container className="home-founder-section__container">
        <h2 id="home-founder-section-title" className="home-founder-section__title">
          <span className="home-founder-section__title-main">Conheça o nosso</span>
          <span className="home-founder-section__title-script highlight-font">idealizador</span>
        </h2>

        <div className="home-founder-section__portrait-wrap">
          <div
            className="home-founder-section__portrait-placeholder"
            role="img"
            aria-label="Fernando Rabelo, maestro e idealizador da Fera Proart"
          >
            <span>Retrato de Fernando Rabelo pendente</span>
          </div>
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
