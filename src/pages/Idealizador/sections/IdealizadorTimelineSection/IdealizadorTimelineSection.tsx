import Container from '../../../../components/Container/Container'
import './IdealizadorTimelineSection.css'

type TimelinePosition = 'top' | 'bottom'

interface TimelineMilestone {
  label: string
  description: string
  position: TimelinePosition
  isCurrent?: boolean
}

const timelineMilestones: TimelineMilestone[] = [
  {
    label: '1963',
    description: 'Nascimento do Maestro em São Paulo',
    position: 'top',
  },
  {
    label: '1973',
    description: 'Inicia sua trajetória musical e profissional.',
    position: 'bottom',
  },
  {
    label: '1900',
    description: 'Formação: Trompete na faculdade de Marcelo Tuinambá.',
    position: 'top',
  },
  {
    label: '1900',
    description: 'Regência de importantes corporações',
    position: 'bottom',
  },
  {
    label: '2004',
    description: 'Fundação da Fera Proart',
    position: 'top',
  },
  {
    label: 'ATUAL',
    description: 'Direção da Fera Proart e regente da Bamaso',
    position: 'bottom',
    isCurrent: true,
  },
]

function IdealizadorTimelineSection() {
  return (
    <section className="idealizador-timeline" aria-labelledby="idealizador-timeline-title">
      <Container className="idealizador-timeline__container">
        <header className="idealizador-timeline__header">
          <h2 className="idealizador-timeline__title" id="idealizador-timeline-title">
            <span className="idealizador-timeline__title-main">A jornada do</span>{' '}
            <span className="idealizador-timeline__title-highlight highlight-font">maestro</span>
          </h2>
          <p className="idealizador-timeline__subtitle">Os Principais Marcos dessa História</p>
        </header>

        <div className="idealizador-timeline__track" aria-label="Linha do tempo da trajetória de Fernando Rabelo">
          <div className="idealizador-timeline__line" aria-hidden="true" />
          <ol className="idealizador-timeline__list">
            {timelineMilestones.map((milestone) => (
              <li
                className={`idealizador-timeline__item idealizador-timeline__item--${milestone.position}`}
                key={`${milestone.label}-${milestone.description}`}
              >
                <article className="idealizador-timeline__card">
                  {milestone.isCurrent ? (
                    <span className="idealizador-timeline__year">{milestone.label}</span>
                  ) : (
                    <time className="idealizador-timeline__year" dateTime={milestone.label}>
                      {milestone.label}
                    </time>
                  )}
                  <p className="idealizador-timeline__description">{milestone.description}</p>
                </article>
                <span className="idealizador-timeline__marker" aria-hidden="true" />
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  )
}

export default IdealizadorTimelineSection
