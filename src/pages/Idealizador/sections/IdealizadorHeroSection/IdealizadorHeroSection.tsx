import founderHero from '../../../../assets/images/idealizador/founder-hero.png'
import './IdealizadorHeroSection.css'

function IdealizadorHeroSection() {
  return (
    <section className="idealizador-hero" aria-labelledby="idealizador-hero-title">
      <img
        className="idealizador-hero__image"
        src={founderHero}
        alt="Maestro Fernando Rabelo, idealizador da Fera Proart"
      />
      <div className="idealizador-hero__overlay" aria-hidden="true" />
      <div className="idealizador-hero__content">
        <p className="idealizador-hero__eyebrow highlight-font">Maestro</p>
        <h1 className="idealizador-hero__title" id="idealizador-hero-title">
          Fernando Rabelo
        </h1>
        <p className="idealizador-hero__description">
          Uma trajetória dedicada à música, bandas e fanfarras. Conheça o idealizador por trás da Fera Proart.
        </p>
      </div>
    </section>
  )
}

export default IdealizadorHeroSection
