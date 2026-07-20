import Container from '../../../../components/Container/Container'
import './IdealizadorCorporationsSection.css'

interface Corporation {
  name: string
}

const corporations: Corporation[] = [
  { name: 'BAMASO - Banda Marcial de Sorocaba' },
  { name: 'Banda Sinfônica de Osasco' },
  { name: 'Banda Marcial de Piraporinha - Piedade' },
  { name: 'Banda Sinfônica da UFMG' },
  { name: 'Banda Laurinda Cardoso - Mogi das Cruzes' },
  { name: 'Banda Marcial de Águas de Santa Bárbara' },
]

function IdealizadorCorporationsSection() {
  return (
    <section className="idealizador-corporations" aria-labelledby="idealizador-corporations-title">
      <Container className="idealizador-corporations__container">
        <h2 className="idealizador-corporations__title" id="idealizador-corporations-title">
          <span className="idealizador-corporations__title-line">
            <span className="idealizador-corporations__title-presence highlight-font">Presença</span>{' '}
            <span className="idealizador-corporations__title-em">em</span>
          </span>
          <span className="idealizador-corporations__title-line idealizador-corporations__title-line--corporations">
            diversas corporações
          </span>
        </h2>

        <p className="idealizador-corporations__description">
          Ao longo de sua trajetória, o Maestro Fernando Rabelo regeu diversas instituições acumulando experiência prática em música e fanfarras.
        </p>

        <ol className="idealizador-corporations__list" aria-label="Corporações musicais ligadas à trajetória de Fernando Rabelo">
          {corporations.map((corporation, index) => (
            <li className="idealizador-corporations__item" key={corporation.name}>
              <article className="idealizador-corporations__card">
                <span className="idealizador-corporations__number" aria-hidden="true">
                  {index + 1}
                </span>
                <span className="idealizador-corporations__divider" aria-hidden="true" />
                <p className="idealizador-corporations__name">{corporation.name}</p>
              </article>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  )
}

export default IdealizadorCorporationsSection
