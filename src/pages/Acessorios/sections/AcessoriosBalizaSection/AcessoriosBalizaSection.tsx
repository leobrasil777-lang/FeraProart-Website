import { useState } from 'react'
import Container from '../../../../components/Container/Container'
import VerticalTabsCard from '../../../../components/VerticalTabsCard/VerticalTabsCard'
import './AcessoriosBalizaSection.css'

type AcessoriosBalizaItem = {
  id: string
  label: string
  image?: string
  alt?: string
}

const acessoriosBalizaItems: AcessoriosBalizaItem[] = [
  {
    id: 'bolas',
    label: 'Bolas',
  },
  {
    id: 'fitas',
    label: 'Fitas',
  },
  {
    id: 'massas',
    label: 'Massas',
  },
  {
    id: 'cordas',
    label: 'Cordas',
  },
]

function AcessoriosBalizaSection() {
  const [activeItemId, setActiveItemId] = useState(
    acessoriosBalizaItems[0].id,
  )
  const activeItem =
    acessoriosBalizaItems.find((item) => item.id === activeItemId) ??
    acessoriosBalizaItems[0]

  return (
    <section
      className="acessorios-baliza-section"
      aria-labelledby="acessorios-baliza-title"
    >
      <Container className="acessorios-baliza-section__container">
        <div className="acessorios-baliza-section__layout">
          <div
            className="acessorios-baliza-section__viewer"
            id="acessorios-baliza-viewer"
            role="tabpanel"
            aria-labelledby={`acessorios-baliza-tab-${activeItem.id}`}
          >
            {activeItem.image ? (
              <img
                className="acessorios-baliza-section__image"
                src={activeItem.image}
                alt={activeItem.alt ?? activeItem.label}
              />
            ) : (
              <div className="acessorios-baliza-section__placeholder">
                <span className="acessorios-baliza-section__placeholder-label">
                  {activeItem.label}
                </span>
                <span className="acessorios-baliza-section__placeholder-text">
                  Imagem será adicionada posteriormente
                </span>
              </div>
            )}
          </div>

          <div className="acessorios-baliza-section__content">
            <header className="acessorios-baliza-section__header">
              <h2
                className="acessorios-baliza-section__title"
                id="acessorios-baliza-title"
              >
                <span className="acessorios-baliza-section__title-main">
                  Acessórios
                </span>
                <span className="acessorios-baliza-section__title-highlight">
                  Baliza
                </span>
              </h2>
            </header>

            <VerticalTabsCard
              className="acessorios-baliza-section__tabs-card"
              items={acessoriosBalizaItems}
              activeItemId={activeItem.id}
              onItemChange={setActiveItemId}
              ariaLabel="Acessórios para Baliza"
              controlsId="acessorios-baliza-viewer"
              idPrefix="acessorios-baliza"
            />
          </div>
        </div>
      </Container>
    </section>
  )
}

export default AcessoriosBalizaSection
