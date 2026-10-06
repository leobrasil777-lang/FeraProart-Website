import Container from '../../../../components/Container/Container'
import founderMaestro from '../../../../assets/images/idealizador/founder-maestro.png'
import './IdealizadorMaestroQuoteSection.css'

function IdealizadorMaestroQuoteSection() {
  return (
    <section className="idealizador-maestro-quote" aria-labelledby="idealizador-maestro-quote-title">
      <Container className="idealizador-maestro-quote__container">
        <div className="idealizador-maestro-quote__banner">
          <img
            className="idealizador-maestro-quote__image"
            src={founderMaestro}
            alt="Maestro Fernando Rabelo regendo uma banda, visto de costas."
            width="1151"
            height="393"
            loading="lazy"
            decoding="async"
          />

          <div className="idealizador-maestro-quote__content">
            <h2 className="idealizador-maestro-quote__title" id="idealizador-maestro-quote-title">
              <span className="idealizador-maestro-quote__title-line">
                Quem vive o <span className="idealizador-maestro-quote__title-highlight">meio,</span>
              </span>
              <span className="idealizador-maestro-quote__title-line">entende a</span>
              <span className="idealizador-maestro-quote__title-line">necessidade real.</span>
            </h2>

            <blockquote className="idealizador-maestro-quote__quote">
              <span className="idealizador-maestro-quote__quote-mark" aria-hidden="true">
                “
              </span>
              <p className="idealizador-maestro-quote__quote-text">
                Vista sua<br />
                identidade<br />
                com quem<br />
                vive a música
              </p>
              <footer className="idealizador-maestro-quote__quote-footer">
                <cite className="idealizador-maestro-quote__cite">
                  Fernando<br />
                  Rabelo
                </cite>
              </footer>
            </blockquote>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default IdealizadorMaestroQuoteSection
