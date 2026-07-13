import Container from '../Container/Container'
import SectionTitle from '../SectionTitle/SectionTitle'
import logoApae from '../../assets/icons/home/logo-apae.svg'
import logoGoias from '../../assets/icons/home/logo-goias.svg'
import logoEinsten from '../../assets/icons/home/logo-einsten.svg'
import logoBamaso from '../../assets/icons/home/logo-bamaso.svg'
import logoBotucatu from '../../assets/icons/home/logo-botucatu.svg'
import logoItu from '../../assets/icons/home/logo-itu.svg'
import logoPompeia from '../../assets/icons/home/logo-pompeia.svg'
import logoSaquarema from '../../assets/icons/home/logo-saquarema.svg'
import './HomeInstitutionsSection.css'

const institutions = [
  { name: 'APAE', image: logoApae, alt: 'Logo APAE' },
  { name: 'Goiás', image: logoGoias, alt: 'Logo Governo de Goiás' },
  { name: 'Einstein', image: logoEinsten, alt: 'Logo Einstein' },
  { name: 'Bamaso', image: logoBamaso, alt: 'Logo Bamaso' },
  { name: 'Botucatu', image: logoBotucatu, alt: 'Logo Botucatu' },
  { name: 'Itu', image: logoItu, alt: 'Logo Itu' },
  { name: 'Pompeia', image: logoPompeia, alt: 'Logo Pompeia' },
  { name: 'Saquarema', image: logoSaquarema, alt: 'Logo Saquarema' },
]

const carouselItems = [...institutions, ...institutions]

function HomeInstitutionsSection() {
  return (
    <section className="home-institutions-section section-light">
      <Container>
        <SectionTitle
          eyebrow="Instituições"
          title="Atendimento para diferentes frentes institucionais"
          highlight="Tradição em movimento"
          subtitle="Marcas públicas, sociais e educacionais que contam com a Fera Proart para uniformes, padronização e presença institucional."
          align="center"
        />

        <div className="home-institutions-section__carousel" aria-label="Instituições atendidas">
          <div className="home-institutions-section__track">
            {carouselItems.map((institution, index) => (
              <div
                className="home-institutions-section__logo-card"
                key={`${institution.name}-${index}`}
                aria-hidden={index >= institutions.length}
              >
                <img
                  className="home-institutions-section__logo"
                  src={institution.image}
                  alt={index < institutions.length ? institution.alt : ''}
                />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}

export default HomeInstitutionsSection
