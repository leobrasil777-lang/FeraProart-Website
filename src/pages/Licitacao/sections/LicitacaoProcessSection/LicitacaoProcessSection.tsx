import Container from '../../../../components/Container/Container'
import './LicitacaoProcessSection.css'

type ProcessStep = {
  number: number
  title: string
  description: string
}

const processSteps: ProcessStep[] = [
  {
    number: 1,
    title: 'Elaboração de Descritivos Técnicos Certificados',
    description:
      'Criamos especificações detalhadas, claras e sem direcionamentos, em total conformidade com a Nova Lei de Licitações (Lei n° 14.133/21). Evite impugnações com descritivos precisos de materiais, gramaturas, composições e engenharia do produto.',
  },
  {
    number: 2,
    title: 'Suporte no Termo de Referência (TR)',
    description:
      'Auxiliamos na estruturação do TR, fornecendo subsídios técnicos fundamentados, estudos de viabilidade e critérios de aceitabilidade que garantem a qualidade do objeto a ser contratado.',
  },
  {
    number: 3,
    title: 'Mostruários e Amostras de Alta Qualidade',
    description:
      'Disponibilizamos mockups, amostras físicas e protótipos detalhados para que a comissão de licitação possa avaliar a conformidade técnica, o acabamento e a durabilidade antes ou durante a fase de julgamento.',
  },
]

function ProcessStepCard({ number, title, description }: ProcessStep) {
  return (
    <li className="licitacao-process__item">
      <article className="licitacao-process__card">
        <div className="licitacao-process__card-heading">
          <span className="licitacao-process__number highlight-font" aria-hidden="true">
            {number}.
          </span>
          <h3 className="licitacao-process__card-title">{title}</h3>
        </div>

        <p className="licitacao-process__card-description">{description}</p>
      </article>
    </li>
  )
}

function LicitacaoProcessSection() {
  return (
    <section className="licitacao-process" aria-labelledby="licitacao-process-title">
      <Container className="licitacao-process__container">
        <h2 className="licitacao-process__title" id="licitacao-process-title">
          <span className="licitacao-process__title-line licitacao-process__title-line--first">
            <span>Como</span>
            <span className="licitacao-process__title-highlight highlight-font">facilitamos</span>
          </span>
          <span className="licitacao-process__title-line">seu processo?</span>
        </h2>

        <p className="licitacao-process__intro">
          Sabemos que a construção de um processo licitatório exige rigor técnico, clareza e segurança jurídica. Nossa equipe de especialistas apoia o poder público em todas as etapas da fase preparatória, garantindo ampla competitividade e a escolha do melhor produto.
        </p>

        <ol className="licitacao-process__list">
          {processSteps.map((step) => (
            <ProcessStepCard key={step.number} {...step} />
          ))}
        </ol>
      </Container>
    </section>
  )
}

export default LicitacaoProcessSection
