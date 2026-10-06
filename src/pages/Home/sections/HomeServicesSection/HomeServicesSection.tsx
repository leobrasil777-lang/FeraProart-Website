import { useEffect, useRef, useState } from 'react'
import './HomeServicesSection.css'
import uniformeHome from "../../../../assets/images/home/uniforme-home.png";
import barretinaHome from "../../../../assets/images/home/barretinas-home.png";
import airbladeHome from "../../../../assets/images/home/airblade-home.png";
import calcadosHome from "../../../../assets/images/home/calcados-home.webp";

type ServiceCategory = {
  title: string
  description: string
  image: string
  imageClass: string
}

const serviceCategories: ServiceCategory[] = [
  {
    title: 'Uniformes',
    description: 'Fardamentos sob medida para bandas, fanfarras, escolas e equipes institucionais.',
    image: uniformeHome,
    imageClass: 'home-services-section__image--uniformes',
  },
  {
    title: 'Calçados',
    description: 'Botas, sapatos e modelos de apoio para apresentações, desfiles e rotinas oficiais.',
    image: calcadosHome,
    imageClass: 'home-services-section__image--calcados',
  },
  {
    title: 'Quepes e Barretinas',
    description: 'Peças de impacto para cerimônias, regências, balizas e apresentações formais.',
    image: barretinaHome,
    imageClass: 'home-services-section__image--barretinas',
  },
  {
    title: 'Acessórios em geral',
    description: 'Complementos que padronizam a composição visual com acabamento elegante.',
    image: airbladeHome,
    imageClass: 'home-services-section__image--acessorios',
  },
]

const DEFAULT_ACTIVE_CATEGORY = serviceCategories[2]!

function HomeServicesSection() {
  const [activeCategory, setActiveCategory] = useState<ServiceCategory>(DEFAULT_ACTIVE_CATEGORY)
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const section = sectionRef.current

    if (!section) {
      return undefined
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 },
    )

    observer.observe(section)

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className={[
        'home-services-section',
        isVisible ? 'home-services-section--visible' : '',
      ]
        .filter(Boolean)
        .join(' ')}
      aria-labelledby="home-services-title"
    >
      <div className="home-services-section__inner">
        <header className="home-services-section__header">
          <h2 id="home-services-title" className="home-services-section__title">
            Tudo o que sua banda precisa,
          </h2>
          <span className="home-services-section__script highlight-font">em um só lugar</span>
        </header>

        <div className="home-services-section__visual" aria-hidden="true">
          <img
            className={`home-services-section__image ${activeCategory.imageClass}`}
            src={activeCategory.image}
            alt=""
            loading="lazy"
            decoding="async"            
          />
        </div>

        <div className="home-services-section__cards" aria-label="Categorias de produtos">
          {serviceCategories.map((category) => {
            const isActive = category === activeCategory

            return (
              <button
                type="button"
                className={[
                  'service-category-card',
                  isActive ? 'service-category-card--active' : '',
                ]
                  .filter(Boolean)
                  .join(' ')}
                key={category.title}
                onClick={() => setActiveCategory(category)}
                onMouseEnter={() => setActiveCategory(category)}
                onFocus={() => setActiveCategory(category)}
                aria-pressed={isActive}
              >
                <h3>{category.title}</h3>
                <p>{category.description}</p>
              </button>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default HomeServicesSection
