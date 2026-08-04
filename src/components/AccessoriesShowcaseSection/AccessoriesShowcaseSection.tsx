import { useEffect, useState } from 'react'
import Container from '../Container/Container'
import VerticalTabsCard from '../VerticalTabsCard/VerticalTabsCard'
import './AccessoriesShowcaseSection.css'

export type AccessoriesShowcaseItem = {
  id: string
  label: string
  image?: string
  alt?: string
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
  const activeItem =
    items.find((item) => item.id === activeItemId) ?? items[0]

  useEffect(() => {
    if (!items.some((item) => item.id === activeItemId)) {
      setActiveItemId(items[0]?.id ?? '')
    }
  }, [activeItemId, items])

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
              onItemChange={setActiveItemId}
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
            {activeItem?.image ? (
              <img
                className="accessories-showcase-section__image"
                src={activeItem.image}
                alt={activeItem.alt ?? activeItem.label}
              />
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
