import CTAButton from '../components/CTAButton/CTAButton'
import Container from '../components/Container/Container'
import HeroSection from '../components/HeroSection/HeroSection'
import ProductCard from '../components/ProductCard/ProductCard'
import SectionTitle from '../components/SectionTitle/SectionTitle'
import './Home.css'

const categories = [
  {
    title: 'Uniformes',
    description: 'Fardamentos sob medida para bandas, fanfarras, escolas e equipes institucionais.',
    href: '/uniformes',
    label: 'Linha têxtil',
  },
  {
    title: 'Calçados',
    description: 'Botas, sapatos e modelos de apoio para apresentações, desfiles e rotinas oficiais.',
    href: '/calcados',
    label: 'Linha operacional',
  },
  {
    title: 'Acessórios',
    description: 'Complementos que padronizam a composição visual com acabamento elegante.',
    href: '/acessorios',
    label: 'Linha complementar',
  },
  {
    title: 'Barretinas e Quepes',
    description: 'Peças de impacto para cerimônias, regências, balizas e apresentações formais.',
    href: '/barretinas-e-quepes',
    label: 'Linha cerimonial',
  },
]

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
          eyebrow="Fera Proart"
          title="Presença institucional para grandes apresentações."
          subtitle="Uniformes, calçados e acessórios desenvolvidos para bandas, fanfarras e instituições que valorizam tradição, elegância e excelência."
          primaryButtonLabel="Conhecer produtos"
          primaryButtonHref="/uniformes"
          secondaryButtonLabel="Falar sobre licitação"
          secondaryButtonHref="/licitacao"
        />
      </div>

      <section className="home-section home-section--products section-light">
        <Container>
          <div className="home-section-heading-row">
            <SectionTitle
              eyebrow="Produtos"
              title="Categorias para compor a identidade da sua instituição"
              subtitle="Linhas organizadas para apresentar a Fera Proart com a mesma leitura premium e institucional do protótipo."
            />
            <span className="home-section-number" aria-hidden="true">01</span>
          </div>
          <div className="home-product-grid">
            {categories.map((category, index) => (
              <ProductCard key={category.title} {...category} mediaLabel={`Placeholder visual: produto ${index + 1}`} />
            ))}
          </div>
        </Container>
      </section>

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
