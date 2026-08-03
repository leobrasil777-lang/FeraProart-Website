import { useState } from 'react'
import Container from '../../../../components/Container/Container'
import VerticalTabsCard from '../../../../components/VerticalTabsCard/VerticalTabsCard'
import './CorpoCoreograficoSection.css'

type CorpoCoreograficoItem = {
  id: string
  label: string
  image?: string
  alt?: string
}

const corpoCoreograficoItems: CorpoCoreograficoItem[] = [
  {
    id: 'airblades',
    label: 'Airblades',
  },
  {
    id: 'bastao-led',
    label: 'Bastão de LED',
  },
  {
    id: 'bandeiras-corpo-coreografico',
    label: 'Bandeiras para Corpo Coreográfico',
  },
  {
    id: 'bastao-com-bandeira',
    label: 'Bastão com Bandeira',
  },
]

function CorpoCoreograficoSection() {
  const [activeItemId, setActiveItemId] = useState(
    corpoCoreograficoItems[0].id,
  )
  const activeItem =
    corpoCoreograficoItems.find((item) => item.id === activeItemId) ??
    corpoCoreograficoItems[0]

  return (
    <section
      className="corpo-coreografico-section"
      aria-labelledby="corpo-coreografico-title"
    >
      <Container className="corpo-coreografico-section__container">
        <div className="corpo-coreografico-section__layout">
          <div className="corpo-coreografico-section__content">
            <header className="corpo-coreografico-section__header">
              <span className="corpo-coreografico-section__eyebrow">
                ACESSÓRIOS
              </span>

              <h2
                className="corpo-coreografico-section__title"
                id="corpo-coreografico-title"
              >
                <span className="corpo-coreografico-section__title-main">
                  Corpo
                </span>
                <span className="corpo-coreografico-section__title-highlight">
                  Coreográfico
                </span>
              </h2>
            </header>

            <VerticalTabsCard
              className="corpo-coreografico-section__tabs-card"
              items={corpoCoreograficoItems}
              activeItemId={activeItem.id}
              onItemChange={setActiveItemId}
              ariaLabel="Acessórios para Corpo Coreográfico"
              controlsId="corpo-coreografico-viewer"
              idPrefix="corpo-coreografico"
            />
          </div>

          <div
            className="corpo-coreografico-section__viewer"
            id="corpo-coreografico-viewer"
            role="tabpanel"
            aria-labelledby={`corpo-coreografico-tab-${activeItem.id}`}
          >
            {activeItem.image ? (
              <img
                className="corpo-coreografico-section__image"
                src={activeItem.image}
                alt={activeItem.alt ?? activeItem.label}
              />
            ) : (
              <div className="corpo-coreografico-section__placeholder">
                <span className="corpo-coreografico-section__placeholder-label">
                  {activeItem.label}
                </span>
                <span className="corpo-coreografico-section__placeholder-text">
                  Imagem será adicionada posteriormente
                </span>
              </div>
            )}
          </div>
        </div>
      </Container>
    </section>
  )
}

export default CorpoCoreograficoSection
