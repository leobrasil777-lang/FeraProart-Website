import CTAButton from '../../../../components/CTAButton/CTAButton'
import Container from '../../../../components/Container/Container'
import './UniformesHeroSection.css'

function UniformesHeroSection() {
  return (
    <section className="uniformes-hero" aria-labelledby="uniformes-hero-title">
      <div className="uniformes-hero__main">
        <Container className="uniformes-hero__container">
          <div className="uniformes-hero__content">
            <h1 className="uniformes-hero__title" id="uniformes-hero-title">
              Uniformes
            </h1>
            <p className="uniformes-hero__description">
              Corpo Musical, Linha<br />
              de Frente e Baliza
            </p>
            <div className="uniformes-hero__actions" aria-label="Ações de Uniformes">
              <CTAButton
                href="/licitacao"
                className="uniformes-hero__button uniformes-hero__button--primary"
              >
                Solicitar orçamento
              </CTAButton>
              <CTAButton
                href="/uniformes"
                variant="secondary"
                className="uniformes-hero__button uniformes-hero__button--secondary"
              >
                Ver catálogo
              </CTAButton>
            </div>
          </div>
        </Container>
      </div>

      <div className="uniformes-hero__signature">
        A GRIFE DAS BANDAS E FANFARRAS DO BRASIL!
      </div>
    </section>
  )
}

export default UniformesHeroSection
