import Container from '../../../../components/Container/Container'
import bureaucraticProcessImage from '../../../../assets/images/licitacao/licitacao-processo-ruim.png'
import feraProartProcessIcon from '../../../../assets/icons/licitacao/licitacao-processo-bom.svg'
import './LicitacaoProcessComparisonSection.css'

type FeraProartStep = {
  title: string
  description: string
}

const feraProartSteps: FeraProartStep[] = [
  {
    title: 'Consulta à Ata',
    description: 'Você consulta os objetos disponíveis nas nossas Atas vigentes.',
  },
  {
    title: 'Adesão (Carona)',
    description:
      'Processo de adesão simplificado de acordo com a legislação. Documentação reduzida.',
  },
  {
    title: 'Recebimento Rápido',
    description: 'Ordem de fornecimento e entrega ágil dos materiais necessários.',
  },
]

function LicitacaoProcessComparisonSection() {
  return (
    <section
      className="licitacao-process-comparison"
      aria-labelledby="licitacao-process-comparison-title"
    >
      <Container className="licitacao-process-comparison__container">
        <h2 className="licitacao-process-comparison__title" id="licitacao-process-comparison-title">
          <span>Como a Fera Proart</span>
          <span>diminui a sua</span>
          <span className="licitacao-process-comparison__title-highlight highlight-font">
            burocracia?
          </span>
        </h2>

        <div className="licitacao-process-comparison__panels">
          <article className="licitacao-process-comparison__panel">
            <header className="licitacao-process-comparison__panel-header">
              <h3>PROCESSO BUROCRÁTICO PADRÃO:</h3>
            </header>
            <div className="licitacao-process-comparison__panel-body licitacao-process-comparison__panel-body--image">
              <figure className="licitacao-process-comparison__figure">
                <img
                  src={bureaucraticProcessImage}
                  alt="Representação de um processo burocrático com várias etapas e conexões desorganizadas."
                  width="1994"
                  height="789"
                  loading="lazy"
                />
              </figure>
            </div>
          </article>

          <article className="licitacao-process-comparison__panel">
            <header className="licitacao-process-comparison__panel-header">
              <h3>PROCESSO FERA PROART:</h3>
            </header>
            <div className="licitacao-process-comparison__panel-body licitacao-process-comparison__panel-body--steps">
              <div className="licitacao-process-comparison__flow-wrapper">
                <img
                  className="licitacao-process-comparison__flow-image"
                  src={feraProartProcessIcon}
                  alt=""
                  aria-hidden="true"
                  width="980"
                  height="230"
                  loading="lazy"
                />

                <ol className="licitacao-process-comparison__steps">
                  {feraProartSteps.map((step) => (
                    <li className="licitacao-process-comparison__step" key={step.title}>
                      <h4>{step.title}</h4>
                      <p>{step.description}</p>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </article>
        </div>
      </Container>
    </section>
  )
}

export default LicitacaoProcessComparisonSection
