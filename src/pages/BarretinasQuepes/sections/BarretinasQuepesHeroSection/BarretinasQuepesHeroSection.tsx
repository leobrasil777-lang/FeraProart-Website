import CTAButton from '../../../../components/CTAButton/CTAButton'
import bannerBarretinas from '../../../../assets/images/barretinas-e-quepes/barretinas/banner-barretinas.png'
import './BarretinasQuepesHeroSection.css'

function BarretinasQuepesHeroSection() {
  return (
    <section className="barretinas-hero" aria-labelledby="barretinas-hero-title">
      <div className="barretinas-hero__main">
        <img
          className="barretinas-hero__image"
          src={bannerBarretinas}
          alt=""
          aria-hidden="true"
          width="1600"
          height="983"
          loading="eager"
          fetchPriority="high"
          decoding="async"
        />

        <div className="container barretinas-hero__container">
          <div className="barretinas-hero__content">
            <h1 className="barretinas-hero__title" id="barretinas-hero-title">
              <span className="barretinas-hero__title-main">Quepes e</span>
              <span className="barretinas-hero__title-highlight">Barretinas</span>
            </h1>
            <p className="barretinas-hero__description">
              Barretinas padrão americano (Marching Band), Quepes Militares e tipo Casquete.
            </p>
            <div className="barretinas-hero__actions" aria-label="Ações de Barretinas e Quepes">
              <CTAButton href="/licitacao" className="barretinas-hero__button barretinas-hero__button--primary">
                Solicitar orçamento
              </CTAButton>
              <CTAButton
                href="/uniformes"
                variant="secondary"
                className="barretinas-hero__button barretinas-hero__button--secondary"
              >
                Ver catálogo
              </CTAButton>
            </div>
          </div>
        </div>
      </div>

      <div className="barretinas-hero__signature">
        A GRIFE DAS BANDAS E FANFARRAS DO BRASIL!
      </div>
    </section>
  )
}

export default BarretinasQuepesHeroSection
