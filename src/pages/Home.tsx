import CTAButton from '../components/CTAButton/CTAButton'
import Container from '../components/Container/Container'
import HeroSection from '../components/HeroSection/HeroSection'
import SectionTitle from '../components/SectionTitle/SectionTitle'
import HomeServicesSection from '../components/HomeServicesSection/HomeServicesSection'
import heroBanner from '../assets/images/home/hero-banner.png'
import './Home.css'

const institutions = ['Bandas', 'Fanfarras', 'Escolas', 'Prefeituras']

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
              Vista sua <span className="hero-section__identity highlight-font">identidade</span> com quem vive a música.
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

      <section className="home-section home-section--bid section-dark">
        <Container className="home-split">
          <div className="home-split__content">
            <SectionTitle
              eyebrow="Licitação"
              title="Apoio para processos de compra pública"
              subtitle="Atendimento consultivo para orientar demandas, documentação e padronização de itens em compras institucionais."
            />
            <CTAButton href="/licitacao" variant="outline">
              Entender processo
            </CTAButton>
          </div>
          <div className="home-feature-card" aria-label="Resumo visual de licitação">
            <span>Documentação</span>
            <strong>Processo claro, técnico e institucional</strong>
          </div>
        </Container>
      </section>

      <section className="home-section home-section--institutions section-light">
        <Container>
          <SectionTitle
            eyebrow="Instituições"
            title="Atendimento para diferentes frentes institucionais"
            highlight="Tradição em movimento"
            align="center"
          />
          <div className="home-institution-list" aria-label="Instituições atendidas">
            {institutions.map((institution) => (
              <span key={institution}>{institution}</span>
            ))}
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
