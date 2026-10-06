import { useEffect, useRef, useState, type KeyboardEvent } from 'react'
import Container from '../../../../components/Container/Container'
import bastaoMaceAcessorios from '../../../../assets/images/acessorios/acessorios-bastao-mace.png'
import bastaoMaceAcessorios2 from '../../../../assets/images/acessorios/acessorios-bastao-mace2.png'
import bastaoMaceAcessorios3 from '../../../../assets/images/acessorios/acessorios-bastao-mace3.png'
import bastaoMaceAcessorios4 from '../../../../assets/images/acessorios/acessorios-bastao-mace4.png'
import bastaoMaceAcessorios5 from '../../../../assets/images/acessorios/acessorios-bastao-mace5.png'
import './ComandanteMorSection.css'

type ComandanteMorSectionImage = {
  src: string
  alt: string
}

type ComandanteMorSectionItem = {
  id: string
  label: string
  images?: ComandanteMorSectionImage[]
}

const sectionId = 'acessorios-comandante-mor'

const items: ComandanteMorSectionItem[] = [
  {
    id: 'bastao-mace', label: 'Bastão Mace',
    images: [
      { src: bastaoMaceAcessorios, alt: 'Bastão Mace em vista completa.' },
      { src: bastaoMaceAcessorios2, alt: 'Detalhe superior do Bastão Mace.' },
      { src: bastaoMaceAcessorios3, alt: 'Detalhe lateral do Bastão Mace.' },
      { src: bastaoMaceAcessorios4, alt: 'Detalhe do acabamento do Bastão Mace.' },
      { src: bastaoMaceAcessorios5, alt: 'Bastão Mace em outro ângulo.' },
    ],
  },
]

function ComandanteMorSection() {
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([])
  const [activeItemId, setActiveItemId] = useState('bastao-mace')
  const [activeImageIndex, setActiveImageIndex] = useState(0)
  const activeItem = items.find((item) => item.id === activeItemId) ?? items[0]
  const activeImages = activeItem?.images ?? []
  const activeImage = activeImages[activeImageIndex]

  useEffect(() => {
    if (!items.some((item) => item.id === activeItemId)) {
      setActiveItemId(items[0]?.id ?? '')
      setActiveImageIndex(0)
    }
  }, [activeItemId])

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

  const handleTabKeyDown = (
    event: KeyboardEvent<HTMLButtonElement>,
    currentIndex: number,
  ) => {
    if (items.length === 0) return

    let nextIndex: number

    switch (event.key) {
      case 'ArrowDown':
        nextIndex = (currentIndex + 1) % items.length
        break
      case 'ArrowUp':
        nextIndex = (currentIndex - 1 + items.length) % items.length
        break
      case 'Home':
        nextIndex = 0
        break
      case 'End':
        nextIndex = items.length - 1
        break
      default:
        return
    }

    event.preventDefault()
    handleItemChange(items[nextIndex].id)
    tabRefs.current[nextIndex]?.focus()
  }

  return (
    <section className="comandante-mor-section" aria-labelledby={`${sectionId}-title`}>
      <Container className="comandante-mor-section__container">
        <div className="comandante-mor-section__layout">
          <div className="comandante-mor-section__content">
            <header className="comandante-mor-section__header">
              <span className="comandante-mor-section__eyebrow">Acessórios</span>

              <h2 className="comandante-mor-section__title" id={`${sectionId}-title`}>
                <span className="comandante-mor-section__title-main">Comandante</span>
                <span className="comandante-mor-section__title-highlight">Mór</span>
              </h2>
            </header>

            <div
              className="comandante-mor-section__tabs comandante-mor-section__tabs-card"
              role="tablist"
              aria-label="Acessórios para Comandante Mór"
              aria-orientation="vertical"
            >
              {items.map((item, index) => {
                const isActive = item.id === activeItem?.id

                return (
                  <button
                    key={item.id}
                    ref={(element) => {
                      tabRefs.current[index] = element
                    }}
                    id={`${sectionId}-tab-${item.id}`}
                    className={`comandante-mor-section__tab${
                      isActive ? ' comandante-mor-section__tab--active' : ''
                    }`}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    aria-controls={`${sectionId}-viewer`}
                    tabIndex={isActive ? 0 : -1}
                    onClick={() => handleItemChange(item.id)}
                    onKeyDown={(event) => handleTabKeyDown(event, index)}
                  >
                    {item.label}
                  </button>
                )
              })}
            </div>
          </div>

          <div
            className="comandante-mor-section__viewer"
            id={`${sectionId}-viewer`}
            role="tabpanel"
            aria-labelledby={
              activeItem ? `${sectionId}-tab-${activeItem.id}` : undefined
            }
          >
            {activeImage ? (
              <>
                <div className="comandante-mor-section__image-frame">
                  <img
                    key={activeImage.src}
                    className="comandante-mor-section__image"
                    src={activeImage.src}
                    alt={activeImage.alt}
                  />
                </div>
                {activeImages.length > 1 && activeItem && (
                  <div
                    className="comandante-mor-section__gallery-controls"
                    aria-label={`Galeria de ${activeItem.label}`}
                  >
                    <button
                      type="button"
                      className="comandante-mor-section__gallery-button comandante-mor-section__gallery-button--previous"
                      aria-label={`Imagem anterior de ${activeItem.label}`}
                      onClick={handlePreviousImage}
                      disabled={activeImageIndex === 0}
                    >
                      <span aria-hidden="true">←</span>
                    </button>
                    <span className="comandante-mor-section__gallery-counter" aria-live="polite">
                      {activeImageIndex + 1} / {activeImages.length}
                    </span>
                    <button
                      type="button"
                      className="comandante-mor-section__gallery-button comandante-mor-section__gallery-button--next"
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
              <div className="comandante-mor-section__placeholder">
                <span className="comandante-mor-section__placeholder-label">
                  {activeItem?.label}
                </span>
                <span className="comandante-mor-section__placeholder-text">
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

export default ComandanteMorSection
