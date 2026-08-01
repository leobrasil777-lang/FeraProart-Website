import bannerAcessorios from '../../../../assets/images/acessorios/banner-acessorios.png'
import Container from '../../../../components/Container/Container'
import CTAButton from '../../../../components/CTAButton/CTAButton'
import './AcessoriosHeroSection.css'

function AcessoriosHeroSection() {
  return (
    <section className="acessorios-hero" aria-labelledby="acessorios-hero-title">
      <div className="acessorios-hero__main">
        <img
          className="acessorios-hero__image"
          src={bannerAcessorios}
          alt=""
          aria-hidden="true"
          width="1322"
          height="881"
          loading="eager"
          fetchPriority="high"
          decoding="async"
        />

        <Container className="acessorios-hero__container">
          <div className="acessorios-hero__content">
            <h1 className="acessorios-hero__title" id="acessorios-hero-title">
              Acessórios
            </h1>
            <p className="acessorios-hero__description">
              Acessórios para Balizas, Corpo Coreográfico, Comandante Mór e Pavilhão.
            </p>
            <div className="acessorios-hero__actions" aria-label="Ações de Acessórios">
              <CTAButton
                href="/licitacao"
                className="acessorios-hero__button acessorios-hero__button--primary"
              >
                Solicitar orçamento
              </CTAButton>
              <CTAButton
                href="/acessorios"
                variant="secondary"
                className="acessorios-hero__button acessorios-hero__button--secondary"
              >
                Ver catálogo
              </CTAButton>
            </div>
          </div>
        </Container>
      </div>

      <div className="acessorios-hero__signature">
        A GRIFE DAS BANDAS E FANFARRAS DO BRASIL!
      </div>
    </section>
  )
}

export default AcessoriosHeroSection
