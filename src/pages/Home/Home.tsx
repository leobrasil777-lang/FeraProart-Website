import HeroSection from '../../components/HeroSection/HeroSection'
import HomeServicesSection from './sections/HomeServicesSection/HomeServicesSection'
import HomeBiddingSection from './sections/HomeBiddingSection/HomeBiddingSection'
import HomeInstitutionsSection from './sections/HomeInstitutionsSection/HomeInstitutionsSection'
import HomeFounderSection from './sections/HomeFounderSection/HomeFounderSection'
import HomeStatsSection from './sections/HomeStatsSection/HomeStatsSection'
import HomeFinalCTASection from './sections/HomeFinalCTASection/HomeFinalCTASection'
import heroBanner from '../../assets/images/home/hero-banner.png'
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
              <span className="hero-section__title-line">com quem vive a</span>
              <span className="hero-section__title-line">música.</span>
            </>
          )}
          primaryButtonLabel="Solicitar orçamento"
          primaryButtonHref="/licitacao"
          primaryButtonWhatsappMessage="Olá, vim pelo site da Fera Proart e gostaria de solicitar um orçamento."
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

      <HomeStatsSection />

      <HomeFinalCTASection />
    </>
  )
}

export default Home
