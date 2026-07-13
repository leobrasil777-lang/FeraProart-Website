import CTAButton from '../components/CTAButton/CTAButton'
import Container from '../components/Container/Container'
import HeroSection from '../components/HeroSection/HeroSection'
import SectionTitle from '../components/SectionTitle/SectionTitle'
import HomeServicesSection from '../components/HomeServicesSection/HomeServicesSection'
import HomeBiddingSection from '../components/HomeBiddingSection/HomeBiddingSection'
import heroBanner from '../assets/images/home/hero-banner.png'
import logoApae from '../assets/icons/home/logo-apae.svg'
import logoGoias from '../assets/icons/home/logo-goias.svg'
import logoEinsten from '../assets/icons/home/logo-einsten.svg'
import './Home.css'

const institutions = [
  { name: 'APAE', image: logoApae, alt: 'Logo APAE' },
  { name: 'Goiás', image: logoGoias, alt: 'Logo Governo de Goiás' },
  { name: 'Einstein', image: logoEinsten, alt: 'Logo Einstein' },
]

const institutionCarouselItems = [...institutions, ...institutions]

const impactNumbers = [
  { value: '+20', label: 'anos de experiência' },
  { value: '+100', label: 'instituições atendidas' },
  { value: 'BR', label: 'atuação nacional' },
]

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

      <section className="home-section home-section--institutions section-light">
        <Container>
          <SectionTitle
            eyebrow="Instituições"
            title="Atendimento para diferentes frentes institucionais"
            highlight="Tradição em movimento"
            align="center"
          />
          <div className="home-institution-carousel" aria-label="Instituições atendidas">
            <div className="home-institution-carousel__track">
              {institutionCarouselItems.map((institution, index) => (
                <div
                  className="home-institution-carousel__item"
                  key={`${institution.name}-${index}`}
                  aria-hidden={index >= institutions.length}
                >
                  <img src={institution.image} alt={institution.alt} />
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="home-section home-section--founder section-dark">
        <Container className="home-founder">
          <div className="home-founder__portrait" aria-label="Placeholder de imagem do idealizador" />
          <div className="home-founder__content">
            <SectionTitle
              eyebrow="Idealizador"
              title="Uma visão criada para elevar apresentações oficiais"
              subtitle="Espaço preparado para receber o retrato e a narrativa do idealizador, preservando a composição vertical e elegante da referência."
            />
            <CTAButton href="/idealizador" variant="secondary">
              Conhecer idealizador
            </CTAButton>
          </div>
        </Container>
      </section>

      <section className="home-section home-section--impact section-light">
        <Container>
          <SectionTitle
            eyebrow="Impacto"
            title="Números que ajudam a apresentar a dimensão da marca"
            align="center"
          />
          <div className="home-impact-grid">
            {impactNumbers.map((item) => (
              <article className="home-impact-card" key={item.label}>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </article>
            ))}
          </div>
        </Container>
      </section>

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
