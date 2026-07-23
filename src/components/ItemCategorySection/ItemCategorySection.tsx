import { useEffect, useId, useRef, useState, type ReactNode } from 'react'
import { Link } from 'react-router-dom'
import Container from '../Container/Container'
import './ItemCategorySection.css'

export type ItemCategorySectionTheme = 'light' | 'dark'
export type ItemCategorySectionContentSide = 'left' | 'right'

export interface ItemCategorySectionImage {
  src: string
  alt: string
}

export interface ItemCategorySectionProps {
  id: string
  theme: ItemCategorySectionTheme
  contentSide: ItemCategorySectionContentSide
  title: string
  highlight: string
  description: string
  images: ItemCategorySectionImage[]
  ctaLabel?: string
  ctaHref?: string
  specificationsLabel?: string
  specifications?: ReactNode
  className?: string
}

const getVisibleCount = (width: number) => {
  if (width >= 760) return 3
  if (width >= 520) return 2
  return 1
}

function ItemCategorySection({
  id,
  theme,
  contentSide,
  title,
  highlight,
  description,
  images,
  ctaLabel,
  ctaHref,
  specificationsLabel = 'Ver especificações técnicas',
  specifications,
  className = '',
}: ItemCategorySectionProps) {
  const reactId = useId()
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isSpecificationsOpen, setIsSpecificationsOpen] = useState(false)
  const [visibleCount, setVisibleCount] = useState(3)
  const viewportRef = useRef<HTMLDivElement>(null)
  const panelId = `${id}-${reactId.replace(/:/g, '')}-specifications-panel`
  const triggerId = `${id}-${reactId.replace(/:/g, '')}-specifications-trigger`
  const maxIndex = Math.max(images.length - visibleCount, 0)
  const hasPrevious = currentIndex > 0
  const hasNext = currentIndex < maxIndex

  useEffect(() => {
    const viewport = viewportRef.current
    if (!viewport) return

    const updateVisibleCount = () => {
      setVisibleCount(getVisibleCount(viewport.offsetWidth))
    }

    updateVisibleCount()
    const observer = new ResizeObserver(updateVisibleCount)
    observer.observe(viewport)

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    setCurrentIndex((index) => Math.min(index, maxIndex))
  }, [maxIndex])

  const classes = [
    'item-category-section',
    `item-category-section--${theme}`,
    `item-category-section--content-${contentSide}`,
    className,
  ]
    .filter(Boolean)
    .join(' ')

  const cta = ctaLabel && ctaHref && (ctaHref.startsWith('/') ? (
    <Link className="item-category-section__cta" to={ctaHref}>
      {ctaLabel}
    </Link>
  ) : (
    <a className="item-category-section__cta" href={ctaHref}>
      {ctaLabel}
    </a>
  ))

  return (
    <section className={classes} id={id} aria-labelledby={`${id}-title`}>
      <Container className="item-category-section__container">
        <div className="item-category-section__gallery" aria-label={`Galeria de ${title} ${highlight}`}>
          <div className="item-category-section__viewport" ref={viewportRef}>
            <div
              className="item-category-section__track"
              style={{ transform: `translateX(calc(-${currentIndex} * (var(--item-card-width) + var(--item-card-gap))))` }}
            >
              {images.map((image) => (
                <figure className="item-category-section__image-card" key={`${image.src}-${image.alt}`}>
                  <img src={image.src} alt={image.alt} loading="lazy" decoding="async" />
                </figure>
              ))}
            </div>
          </div>

          <div className="item-category-section__gallery-footer">
            {specifications && (
              <button id={triggerId} className="item-category-section__specifications-trigger" type="button" aria-expanded={isSpecificationsOpen} aria-controls={panelId} onClick={() => setIsSpecificationsOpen((isOpen) => !isOpen)}>
                <span className="item-category-section__specifications-symbol" aria-hidden="true">{isSpecificationsOpen ? '−' : '+'}</span>
                <span>{specificationsLabel}</span>
              </button>
            )}

            <div className="item-category-section__controls" aria-label="Controles da galeria">
              <button className="item-category-section__control" type="button" aria-label="Imagem anterior" aria-disabled={!hasPrevious} disabled={!hasPrevious} onClick={() => setCurrentIndex((index) => Math.max(index - 1, 0))}>
                <span className="item-category-section__arrow item-category-section__arrow--previous" aria-hidden="true" />
              </button>
              <button className="item-category-section__control" type="button" aria-label="Próxima imagem" aria-disabled={!hasNext} disabled={!hasNext} onClick={() => setCurrentIndex((index) => Math.min(index + 1, maxIndex))}>
                <span className="item-category-section__arrow item-category-section__arrow--next" aria-hidden="true" />
              </button>
            </div>
          </div>

          {specifications && (
            <div id={panelId} className="item-category-section__specifications-panel" role="region" aria-labelledby={triggerId} hidden={!isSpecificationsOpen}>
              <div className="item-category-section__specifications-content">{specifications}</div>
            </div>
          )}
        </div>

        <div className="item-category-section__content">
          <h2 className="item-category-section__title" id={`${id}-title`}>
            <span className="item-category-section__title-main">{title}</span>
            <span className="item-category-section__title-highlight">{highlight}</span>
          </h2>
          <p className="item-category-section__description">{description}</p>
          {cta}
        </div>
      </Container>
    </section>
  )
}

export default ItemCategorySection
