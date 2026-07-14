import CTAButton from '../components/CTAButton/CTAButton'
import Container from '../components/Container/Container'
import HeroSection from '../components/HeroSection/HeroSection'
import HomeServicesSection from '../components/HomeServicesSection/HomeServicesSection'
import HomeBiddingSection from '../components/HomeBiddingSection/HomeBiddingSection'
import HomeInstitutionsSection from '../components/HomeInstitutionsSection/HomeInstitutionsSection'
import HomeFounderSection from '../components/HomeFounderSection/HomeFounderSection'
import HomeMetricsSection from '../components/HomeMetricsSection/HomeMetricsSection'
import heroBanner from '../assets/images/home/hero-banner.png'
import './Home.css'


function Home() {
  return (
    <>
      <div className="home-hero-shell">
        <HeroSection
          className="hero-section--home"
          backgroundImage={heroBanner}
          title="Vista sua identidade com quem vive a música."
          titleContent={(
            <>
              <span className="hero-section__title-line hero-section__title-line--primary">
                <span>Vista sua</span>
                <span className="hero-section__identity highlight-font">identidade</span>
              </span>
              <span className="hero-section__title-line">com quem vive a música</span>
            </>
          )}
          primaryButtonLabel="Solicitar orçamento"
          primaryButtonHref="/licitacao"
          primaryButtonClassName="hero-section__button hero-section__button--primary"
          secondaryButtonLabel="Ver catálogo"
          secondaryButtonHref="/uniformes"
          secondaryButtonClassName="hero-section__button hero-section__button--secondary"
        />
      </div>

      <HomeServicesSection />

      <HomeBiddingSection />

      <HomeInstitutionsSection />

      <HomeFounderSection />

      <HomeMetricsSection />

      <section className="home-section home-section--final-cta section-dark">
        <Container className="home-final-cta">
          <span className="home-final-cta__script highlight-font">Fera Proart</span>
          <h2>Vamos iniciar a composição da sua instituição?</h2>
          <p>Converse com a equipe e organize os próximos passos para produtos, padronização ou licitação.</p>
          <CTAButton href="/licitacao">Solicitar atendimento</CTAButton>
        </Container>
      </section>
    </>
  )
}

export default Home
