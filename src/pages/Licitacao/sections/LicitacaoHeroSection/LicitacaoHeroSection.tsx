import Container from '../../../../components/Container/Container'
import licitacaoBanner from '../../../../assets/images/licitacao/licitacao-banner.png'
import './LicitacaoHeroSection.css'

function LicitacaoHeroSection() {
  return (
    <section className="licitacao-hero" aria-labelledby="licitacao-hero-title">
      <img
        className="licitacao-hero__image"
        src={licitacaoBanner}
        alt=""
        width="1322"
        height="838"
        loading="eager"
        decoding="async"
        fetchPriority="high"
      />

      <Container className="licitacao-hero__container">
        <div className="licitacao-hero__content">
          <h1 className="licitacao-hero__title" id="licitacao-hero-title">
            <span className="licitacao-hero__title-main">Parceria e Soluções</span>
            <span className="licitacao-hero__title-highlight highlight-font">Públicas</span>
          </h1>

          <p className="licitacao-hero__description">
            Especialistas no atendimento a órgãos públicos, oferecemos suporte técnico completo, da elaboração do Termo de Referência à entrega, com Atas de Registro de Preços vigentes para agilizar sua contratação.
          </p>
        </div>
      </Container>
    </section>
  )
}

export default LicitacaoHeroSection
