import CTAButton from '../components/CTAButton/CTAButton'
import Container from '../components/Container/Container'
import './Licitacao.css'

const documents = [
  'Memorial descritivo e referência visual da instituição',
  'Quantidade estimada por item e grade de tamanhos',
  'Prazos, local de entrega e critérios de aprovação',
]

const steps = [
  {
    title: 'Briefing técnico',
    description: 'Organizamos modelos, materiais, medidas e padrões visuais para que o edital nasça claro.',
  },
  {
    title: 'Proposta completa',
    description: 'Preparamos orçamento detalhado com escopo, prazos e especificações de fabricação.',
  },
  {
    title: 'Acompanhamento',
    description: 'A equipe acompanha ajustes, amostras e produção até a entrega dos itens aprovados.',
  },
]

function Licitacao() {
  return (
    <main className="bidding-page">
      <section className="bidding-hero section-dark">
        <Container className="bidding-hero__container">
          <div className="bidding-hero__content">
            <span className="bidding-hero__eyebrow">Licitação e atendimento institucional</span>
            <h1>
              Padronização sob medida para bandas, fanfarras e corporações.
            </h1>
            <p>
              A Fera Proart apoia instituições públicas e privadas com orientação técnica, orçamento e produção de uniformes, calçados, barretinas, quepes e acessórios para processos de compra.
            </p>
            <div className="bidding-hero__actions">
              <CTAButton href="mailto:contato@feraproart.com.br" className="bidding-hero__button">
                Falar com consultor
              </CTAButton>
              <CTAButton href="/uniformes" variant="outline" className="bidding-hero__button bidding-hero__button--outline">
                Ver itens disponíveis
              </CTAButton>
            </div>
          </div>
          <aside className="bidding-hero__panel" aria-label="Resumo do atendimento para licitação">
            <span className="bidding-hero__script highlight-font">Fera Proart</span>
            <strong>Equipe especializada em processos de compra</strong>
            <p>Documentação, especificações e suporte comercial reunidos para facilitar a tomada de decisão da sua instituição.</p>
          </aside>
        </Container>
      </section>

      <section className="bidding-section bidding-section--light">
        <Container className="bidding-grid">
          <div className="bidding-section__intro">
            <span className="bidding-section__number">01</span>
            <h2>O que enviamos para montar seu orçamento</h2>
            <p>Com as informações certas, transformamos o pedido em uma proposta objetiva e alinhada ao padrão visual da instituição.</p>
          </div>
          <ul className="bidding-checklist" aria-label="Documentos e informações para orçamento">
            {documents.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="bidding-section bidding-section--dark section-dark">
        <Container>
          <div className="bidding-section__header">
            <span className="bidding-section__number">02</span>
            <div>
              <h2>Fluxo simples para compras institucionais</h2>
              <p>Do primeiro contato à entrega, cada etapa é conduzida com clareza para reduzir retrabalho e acelerar aprovações.</p>
            </div>
          </div>
          <div className="bidding-steps">
            {steps.map((step, index) => (
              <article className="bidding-step" key={step.title}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bidding-final">
        <Container className="bidding-final__card">
          <span className="highlight-font">Pronto para começar?</span>
          <h2>Solicite uma proposta técnica para sua instituição.</h2>
          <p>Informe itens, quantidades e prazos desejados. Nossa equipe retorna com os próximos passos para orçamento ou licitação.</p>
          <CTAButton href="mailto:contato@feraproart.com.br">Enviar briefing por e-mail</CTAButton>
        </Container>
      </section>
    </main>
  )
}

export default Licitacao
