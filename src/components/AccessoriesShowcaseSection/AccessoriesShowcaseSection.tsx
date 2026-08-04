import { useEffect, useState } from 'react'
import Container from '../Container/Container'
import VerticalTabsCard from '../VerticalTabsCard/VerticalTabsCard'
import './AccessoriesShowcaseSection.css'

export type AccessoriesShowcaseItem = {
  id: string
  label: string
  images?: AccessoriesShowcaseImage[]
}

export type AccessoriesShowcaseImage = {
  src: string
  alt: string
}

export interface AccessoriesShowcaseSectionProps {
  id: string
  eyebrow?: string
  title: string
  highlight: string
  items: AccessoriesShowcaseItem[]
  theme?: 'light' | 'dark'
  contentSide?: 'left' | 'right'
  ariaLabel: string
  initialItemId?: string
  className?: string
}

function AccessoriesShowcaseSection({
  id,
  eyebrow,
  title,
  highlight,
  items,
  theme = 'light',
  contentSide = 'left',
  ariaLabel,
  initialItemId,
  className,
}: AccessoriesShowcaseSectionProps) {
  const initialId = initialItemId ?? items[0]?.id ?? ''
  const [activeItemId, setActiveItemId] = useState(initialId)
  const [activeImageIndex, setActiveImageIndex] = useState(0)
  const activeItem =
    items.find((item) => item.id === activeItemId) ?? items[0]
  const activeImages = activeItem?.images ?? []
  const activeImage = activeImages[activeImageIndex]

  useEffect(() => {
    if (!items.some((item) => item.id === activeItemId)) {
      setActiveItemId(items[0]?.id ?? '')
      setActiveImageIndex(0)
    }
  }, [activeItemId, items])

  useEffect(() => {
    if (activeImageIndex >= activeImages.length) {
      setActiveImageIndex(0)
    }
  }, [activeImageIndex, activeImages.length])

  const handleItemChange = (itemId: string) => {
    setActiveItemId(itemId)
    setActiveImageIndex(0)
  }

  const handlePreviousImage = () => {
    setActiveImageIndex((currentIndex) => Math.max(0, currentIndex - 1))
  }

  const handleNextImage = () => {
    setActiveImageIndex((currentIndex) =>
      Math.min(activeImages.length - 1, currentIndex + 1),
    )
  }

  const sectionClassName = [
    'accessories-showcase-section',
    `accessories-showcase-section--${theme}`,
    `accessories-showcase-section--content-${contentSide}`,
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <section
      className={sectionClassName}
      aria-labelledby={`${id}-title`}
    >
      <Container className="accessories-showcase-section__container">
        <div className="accessories-showcase-section__layout">
          <div className="accessories-showcase-section__content">
            <header className="accessories-showcase-section__header">
              {eyebrow && (
                <span className="accessories-showcase-section__eyebrow">
                  {eyebrow}
                </span>
              )}

              <h2
                className="accessories-showcase-section__title"
                id={`${id}-title`}
              >
                <span className="accessories-showcase-section__title-main">
                  {title}
                </span>
                <span className="accessories-showcase-section__title-highlight">
                  {highlight}
                </span>
              </h2>
            </header>

            <VerticalTabsCard
              className="accessories-showcase-section__tabs-card"
              items={items}
              activeItemId={activeItem?.id ?? ''}
              onItemChange={handleItemChange}
              ariaLabel={ariaLabel}
              controlsId={`${id}-viewer`}
              idPrefix={id}
            />
          </div>

          <div
            className="accessories-showcase-section__viewer"
            id={`${id}-viewer`}
            role="tabpanel"
            aria-labelledby={
              activeItem ? `${id}-tab-${activeItem.id}` : undefined
            }
          >
            {activeImage ? (
              <>
                <div className="accessories-showcase-section__image-frame">
                  <img
                    key={activeImage.src}
                    className="accessories-showcase-section__image"
                    src={activeImage.src}
                    alt={activeImage.alt}
                  />
                </div>
                {activeImages.length > 1 && activeItem && (
                  <div
                    className="accessories-showcase-section__gallery-controls"
                    aria-label={`Galeria de ${activeItem.label}`}
                  >
                    <button
                      type="button"
                      className="accessories-showcase-section__gallery-button accessories-showcase-section__gallery-button--previous"
                      aria-label={`Imagem anterior de ${activeItem.label}`}
                      onClick={handlePreviousImage}
                      disabled={activeImageIndex === 0}
                    >
                      <span aria-hidden="true">←</span>
                    </button>
                    <span
                      className="accessories-showcase-section__gallery-counter"
                      aria-live="polite"
                    >
                      {activeImageIndex + 1} / {activeImages.length}
                    </span>
                    <button
                      type="button"
                      className="accessories-showcase-section__gallery-button accessories-showcase-section__gallery-button--next"
                      aria-label={`Próxima imagem de ${activeItem.label}`}
                      onClick={handleNextImage}
                      disabled={activeImageIndex === activeImages.length - 1}
                    >
                      <span aria-hidden="true">→</span>
                    </button>
                  </div>
                )}
              </>
            ) : (
              <div className="accessories-showcase-section__placeholder">
                <span className="accessories-showcase-section__placeholder-label">
                  {activeItem?.label}
                </span>
                <span className="accessories-showcase-section__placeholder-text">
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

export default AccessoriesShowcaseSection
