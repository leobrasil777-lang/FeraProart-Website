import CTAButton from '../../../../components/CTAButton/CTAButton'
import bannerCalcados from '../../../../assets/images/calcados/banner-calcados.png'
import { CATALOG_WHATSAPP_MESSAGE } from '../../../../utils/whatsapp'
import './CalcadosHeroSection.css'

function CalcadosHeroSection() {
  return (
    <section className="calcados-hero" aria-labelledby="calcados-hero-title">
      <div className="calcados-hero__main">
        <img
          className="calcados-hero__image"
          src={bannerCalcados}
          alt="Par de botas pretas de cano alto para bandas e fanfarras."
          width="1322"
          height="879"
          loading="eager"
          fetchPriority="high"
          decoding="async"
        />

        <div className="container calcados-hero__container">
          <div className="calcados-hero__content">
            <h1 className="calcados-hero__title" id="calcados-hero-title">
              Calçados
            </h1>
            <p className="calcados-hero__description">
              Mocassins, Sapatilhas, Botilhas, Botas Cano Curto e Botas Cano Alto.
            </p>
            <div className="calcados-hero__actions" aria-label="Ações de Calçados">
              <CTAButton href="/licitacao"
                whatsappMessage="Olá, vim pela página de Calçados da Fera Proart e gostaria de solicitar um orçamento." className="calcados-hero__button calcados-hero__button--primary">
                Solicitar orçamento
              </CTAButton>
              <CTAButton
                whatsappMessage={CATALOG_WHATSAPP_MESSAGE}
                variant="secondary"
                className="calcados-hero__button calcados-hero__button--secondary"
              >
                Ver catálogo
              </CTAButton>
            </div>
          </div>
        </div>
      </div>

      <p className="calcados-hero__tagline">A GRIFE DAS BANDAS E FANFARRAS DO BRASIL!</p>
    </section>
  )
}

export default CalcadosHeroSection
