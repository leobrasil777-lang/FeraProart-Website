import logoApae from '../../../../assets/icons/home/logo-apae.svg'
import logoGoias from '../../../../assets/icons/home/logo-goias.svg'
import logoEinsten from '../../../../assets/icons/home/logo-einsten.svg'
import logoBotuactu from '../../../../assets/icons/home/logo-botucatu.svg'
import logoBamaso from '../../../../assets/icons/home/logo-bamaso.svg'
import logoHalley from '../../../../assets/icons/home/logo-halley.svg'
import logoSaquarema from '../../../../assets/icons/home/logo-saquarema.svg'
import './HomeInstitutionsSection.css'

const institutions = [
  {
    name: 'APAE',
    image: logoApae,
    alt: 'Logo APAE',
  },
  {
    name: 'Goiás',
    image: logoGoias,
    alt: 'Logo Goiás',
  },
  {
    name: 'Einsten',
    image: logoEinsten,
    alt: 'Logo Einsten',
  },
  {
    name: 'Bamaso',
    image: logoBamaso,
    alt: 'Logo Bamaso',
  },
  {
    name: 'Botucatu',
    image: logoBotuactu,
    alt: 'Logo Botucatu',
  },
  {
    name: 'Halley',
    image: logoHalley,
    alt: 'Logo Halley',
  },
  {
    name: 'Saquarema',
    image: logoSaquarema,
    alt: 'Logo Saquarema',
  },
]

const carouselItems = [...institutions, ...institutions]

function HomeInstitutionsSection() {
  return (
    <section className="home-institutions-section" aria-labelledby="home-institutions-section-title">
      <div className="home-institutions-section__inner">
        <h2 className="home-institutions-section__title" id="home-institutions-section-title">
          <span className="home-institutions-section__title-text">Instituições</span>
          <span className="home-institutions-section__title-script">atendidas</span>
        </h2>

        <p className="home-institutions-section__subtitle">
          Empresas, escolas, prefeituras e instituições que já confiaram na Fera Proart.
        </p>

        <div className="home-institutions-section__carousel" aria-label="Logos de instituições atendidas">
          <div className="home-institutions-section__track">
            {carouselItems.map((institution, index) => (
              <div
                className="home-institutions-section__item"
                key={`${institution.name}-${index}`}
                aria-hidden={index >= institutions.length}
              >
                <img
                  className="home-institutions-section__logo"
                  src={institution.image}
                  alt={index < institutions.length ? institution.alt : ''}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeInstitutionsSection
