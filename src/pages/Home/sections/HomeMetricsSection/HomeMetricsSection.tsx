import Container from '../../../../components/Container/Container'
import './HomeMetricsSection.css'

type Metric = {
  value: string
  label: string
  accessibleLabel: string
}

const metrics: Metric[] = [
  {
    value: '+2000',
    label: 'clientes atendidos',
    accessibleLabel: 'Mais de 2000 clientes atendidos',
  },
  {
    value: '+140k',
    label: 'de peças produzidas',
    accessibleLabel: 'Mais de 140 mil peças produzidas',
  },
  {
    value: '+20',
    label: 'anos de atuação',
    accessibleLabel: 'Mais de 20 anos de atuação',
  },
]

function MetricItem({ value, label, accessibleLabel }: Metric) {
  return (
    <div className="home-metrics-section__item" aria-label={accessibleLabel}>
      <dt className="home-metrics-section__value">{value}</dt>
      <dd className="home-metrics-section__label">{label}</dd>
    </div>
  )
}

function HomeMetricsSection() {
  return (
    <section className="home-metrics-section" aria-label="Fera Proart em números">
      <Container className="home-metrics-section__container">
        <dl className="home-metrics-section__list">
          {metrics.map((metric) => (
            <MetricItem key={metric.label} {...metric} />
          ))}
        </dl>
      </Container>
    </section>
  )
}

export default HomeMetricsSection
