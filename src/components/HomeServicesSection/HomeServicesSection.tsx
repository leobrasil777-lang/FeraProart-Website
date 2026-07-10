import './HomeServicesSection.css'
import barretinaImage from '../../assets/images/barretina-services-placeholder.svg'

const serviceCategories = [
  {
    title: 'Uniformes',
    description: 'Fardamentos sob medida para bandas, fanfarras, escolas e equipes institucionais.',
  },
  {
    title: 'Quepes e Barretinas',
    description: 'Peças de impacto para cerimônias, regências, balizas e apresentações formais.',
    active: true,
  },
  {
    title: 'Calçados',
    description: 'Botas, sapatos e modelos de apoio para apresentações, desfiles e rotinas oficiais.',
  },
  {
    title: 'Acessórios em geral',
    description: 'Complementos que padronizam a composição visual com acabamento elegante.',
  },
]

function HomeServicesSection() {
  return (
    <section className="home-services-section" aria-labelledby="home-services-title">
      <div className="home-services-section__inner">
        <header className="home-services-section__header">
          <h2 id="home-services-title" className="home-services-section__title">
            Tudo o que sua banda precisa,
          </h2>
          <span className="home-services-section__script highlight-font">em um só lugar</span>
        </header>

        <div className="home-services-section__visual" aria-hidden="true">
          <img src={barretinaImage} alt="" />
        </div>

        <div className="home-services-section__cards" aria-label="Categorias de produtos">
          {serviceCategories.map((category) => (
            <article
              className={[
                'service-category-card',
                category.active ? 'service-category-card--active' : '',
              ]
                .filter(Boolean)
                .join(' ')}
              key={category.title}
            >
              <h3>{category.title}</h3>
              <p>{category.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HomeServicesSection
