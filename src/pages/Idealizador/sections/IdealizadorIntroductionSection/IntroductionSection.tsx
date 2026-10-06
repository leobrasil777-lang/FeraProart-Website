import Container from '../../../../components/Container/Container'
import portrait from '../../assets/images/idealizador/founder-rabelo.png'
import './IdealizadorIntroduction.css'

function IdealizadorIntroduction() {
  return (
    <section className="idealizador-introduction" aria-labelledby="idealizador-introduction-title">
      <Container className="idealizador-introduction__container">
        <div className="idealizador-introduction__portrait-wrap">
          <img
            className="idealizador-introduction__portrait"
            src={portrait}
            alt="Retrato do Maestro Fernando Rabelo com batuta"
          />
        </div>

        <div className="idealizador-introduction__content">
          <h2 className="idealizador-introduction__title" id="idealizador-introduction-title">
            <span className="idealizador-introduction__title-line">Uma história construída</span>
            <span className="idealizador-introduction__title-line idealizador-introduction__title-line--music">
              com a <span className="idealizador-introduction__music highlight-font">música</span>
            </span>
          </h2>

          <p className="idealizador-introduction__description">
            Fundador da Fera Proart, regente da BAMASO e presidente do IBBF, o Maestro Fernando Rabelo construiu sua trajetória unindo experiência musical e inovação.
          </p>

          <p className="idealizador-introduction__highlight">
            <span>Essa combinação deu origem à uma empresa que conhece a</span>
            <span>realidade das bandas por dentro.</span>
          </p>
        </div>
      </Container>
    </section>
  )
}

export default IdealizadorIntroduction