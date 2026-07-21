import type { FormEvent } from 'react'
import { useState } from 'react'
import Container from '../../../../components/Container/Container'
import licitacaoCtaImage from '../../../../assets/images/licitacao/licitacao-cta.png'
import './LicitacaoContactSection.css'

const contactFields = [
  {
    id: 'licitacao-contact-name',
    label: 'Nome',
    name: 'name',
    autoComplete: 'name',
    placeholder: 'Nome',
  },
  {
    id: 'licitacao-contact-organization',
    label: 'Órgão / Instituição',
    name: 'organization',
    autoComplete: 'organization',
    placeholder: 'Órgão / Instituição',
  },
  {
    id: 'licitacao-contact-role',
    label: 'Cargo/Setor',
    name: 'role',
    autoComplete: 'organization-title',
    placeholder: 'Cargo/Setor',
  },
  {
    id: 'licitacao-contact-location',
    label: 'Localização',
    name: 'location',
    autoComplete: 'address-level2',
    placeholder: 'Localização',
  },
]

function LicitacaoContactSection() {
  const [formNotice, setFormNotice] = useState('')

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setFormNotice(
      'Destino do formulário pendente de integração. Os dados não foram enviados.',
    )
  }

  return (
    <section className="licitacao-contact" aria-labelledby="licitacao-contact-title">
      <Container className="licitacao-contact__container">
        <div className="licitacao-contact__card">
          <div className="licitacao-contact__copy">
            <h2 id="licitacao-contact-title" className="licitacao-contact__title">
              <span className="licitacao-contact__title-main">Precisando de</span>
              <span className="licitacao-contact__title-main">apoio para</span>
              <span className="licitacao-contact__title-script highlight-font">licitação?</span>
            </h2>

            <p className="licitacao-contact__description">
              Nossa equipe espera seu contato para simplificar seu processo de licitação com segurança e agilidade.
            </p>
          </div>

          <div className="licitacao-contact__media">
            <img
              className="licitacao-contact__image"
              src={licitacaoCtaImage}
              alt="Caderno e caneta com a marca Fera Proart."
              width="1159"
              height="746"
              loading="lazy"
              decoding="async"
            />
          </div>

          <form className="licitacao-contact__form" onSubmit={handleSubmit} noValidate={false}>
            <p className="licitacao-contact__form-intro">
              Preencha os dados abaixo para<br />
              entrar em contato
            </p>

            <div className="licitacao-contact__fields">
              {contactFields.map((field) => (
                <div className="licitacao-contact__field" key={field.name}>
                  <label className="licitacao-contact__sr-only" htmlFor={field.id}>
                    {field.label}
                  </label>
                  <input
                    id={field.id}
                    name={field.name}
                    autoComplete={field.autoComplete}
                    placeholder={field.placeholder}
                    required
                  />
                </div>
              ))}
            </div>

            <button className="licitacao-contact__submit" type="submit">
              Falar com um especialista
            </button>

            <p className="licitacao-contact__notice" aria-live="polite">
              {formNotice}
            </p>
          </form>
        </div>
      </Container>
    </section>
  )
}

export default LicitacaoContactSection
