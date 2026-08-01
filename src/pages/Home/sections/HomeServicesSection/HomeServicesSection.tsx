import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import './HomeServicesSection.css'
import uniformeHome from "../../../../assets/images/home/uniforme-home.png";
import barretinaHome from "../../../../assets/images/home/barretinas-home.png";
import airbladeHome from "../../../../assets/images/home/airblade-home.png";
import calcadosHome from "../../../../assets/images/home/calcados-home.png";

type ServiceCategory = {
  title: string
  description: string
  to: string
  image: string
}

const DEFAULT_ACTIVE_CATEGORY = 'Quepes e Barretinas'

const serviceCategories: ServiceCategory[] = [
  {
    title: 'Uniformes',
    description: 'Fardamentos sob medida para bandas, fanfarras, escolas e equipes institucionais.',
    to: '/uniformes',
    image: uniformeHome,
  },
  {
    title: 'Calçados',
    description: 'Botas, sapatos e modelos de apoio para apresentações, desfiles e rotinas oficiais.',
    to: '/calcados',
    image: calcadosHome,
  },
  {
    title: 'Quepes e Barretinas',
    description: 'Peças de impacto para cerimônias, regências, balizas e apresentações formais.',
    to: '/barretinas-e-quepes',
    image: barretinaHome,
  },
  {
    title: 'Acessórios em geral',
    description: 'Complementos que padronizam a composição visual com acabamento elegante.',
    to: '/acessorios',
    image: airbladeHome,
  },
]

function HomeServicesSection() {
  const [activeCategory, setActiveCategory] = useState(DEFAULT_ACTIVE_CATEGORY)
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement | null>(null)
  const activeService =
    serviceCategories.find((category) => category.title === activeCategory) ?? serviceCategories[1]

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
      onMouseLeave={() => setActiveCategory(DEFAULT_ACTIVE_CATEGORY)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
          setActiveCategory(DEFAULT_ACTIVE_CATEGORY)
        }
      }}
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
            className={[
              'home-services-section__image',
              activeService.to === '/acessorios'
                ? 'home-services-section__image--acessorios'
                : '',
            ]
              .filter(Boolean)
              .join(' ')}
            src={activeService.image}
            alt=""
          />
        </div>

        <div className="home-services-section__cards" aria-label="Categorias de produtos">
          {serviceCategories.map((category) => {
            const isActive = category.title === activeCategory

            return (
              <Link
                className={[
                  'service-category-card',
                  isActive ? 'service-category-card--active' : '',
                ]
                  .filter(Boolean)
                  .join(' ')}
                to={category.to}
                key={category.title}
                onMouseEnter={() => setActiveCategory(category.title)}
                onFocus={() => setActiveCategory(category.title)}
                aria-current={isActive ? 'true' : undefined}
              >
                <h3>{category.title}</h3>
                <p>{category.description}</p>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default HomeServicesSection
