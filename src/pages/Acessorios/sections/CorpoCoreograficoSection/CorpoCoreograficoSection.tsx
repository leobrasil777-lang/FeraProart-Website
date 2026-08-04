import { useEffect, useRef, useState, type KeyboardEvent } from 'react'
import Container from '../../../../components/Container/Container'
import airbladeAcessorios from '../../../../assets/images/acessorios/acessorios-airblade.png'
import bandeiraCorpoAcessorios from '../../../../assets/images/acessorios/acessorios-bandeira-corpo2.png'
import bandeiraLedAcessorios from '../../../../assets/images/acessorios/acessorios-bandeira-led.png'
import bastaoLedAcessorios from '../../../../assets/images/acessorios/acessorios-bastao-de-led.png'
import './CorpoCoreograficoSection.css'

type CorpoCoreograficoSectionImage = {
  src: string
  alt: string
}

type CorpoCoreograficoSectionItem = {
  id: string
  label: string
  images?: CorpoCoreograficoSectionImage[]
}

const sectionId = 'acessorios-corpo-coreografico'

const items: CorpoCoreograficoSectionItem[] = [
  {
    id: 'airblades', label: 'Airblades',
    images: [{ src: airbladeAcessorios, alt: 'Airblade branco para apresentações de corpo coreográfico.' }],
  },
  {
    id: 'bastao-led', label: 'Bastão de LED',
    images: [{ src: bastaoLedAcessorios, alt: 'Bastão de LED para apresentações.' }],
  },
  {
    id: 'bandeira-led', label: 'Bandeira de LED',
    images: [{ src: bandeiraLedAcessorios, alt: 'Bandeira com iluminação de LED.' }],
  },
  {
    id: 'bandeiras-corpo-coreografico',
    label: 'Bandeiras para Corpo Coreográfico',
    images: [{ src: bandeiraCorpoAcessorios, alt: 'Bandeira para apresentações de corpo coreográfico.' }],
  },
]

function CorpoCoreograficoSection() {
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([])
  const [activeItemId, setActiveItemId] = useState('airblades')
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
    <section className="corpo-coreografico-section" aria-labelledby={`${sectionId}-title`}>
      <Container className="corpo-coreografico-section__container">
        <div className="corpo-coreografico-section__layout">
          <div className="corpo-coreografico-section__content">
            <header className="corpo-coreografico-section__header">
              <span className="corpo-coreografico-section__eyebrow">Acessórios</span>

              <h2 className="corpo-coreografico-section__title" id={`${sectionId}-title`}>
                <span className="corpo-coreografico-section__title-main">Corpo</span>
                <span className="corpo-coreografico-section__title-highlight">Coreográfico</span>
              </h2>
            </header>

            <div
              className="corpo-coreografico-section__tabs corpo-coreografico-section__tabs-card"
              role="tablist"
              aria-label="Acessórios para Corpo Coreográfico"
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
                    className={`corpo-coreografico-section__tab${
                      isActive ? ' corpo-coreografico-section__tab--active' : ''
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
            className="corpo-coreografico-section__viewer"
            id={`${sectionId}-viewer`}
            role="tabpanel"
            aria-labelledby={
              activeItem ? `${sectionId}-tab-${activeItem.id}` : undefined
            }
          >
            {activeImage ? (
              <>
                <div className="corpo-coreografico-section__image-frame">
                  <img
                    key={activeImage.src}
                    className="corpo-coreografico-section__image"
                    src={activeImage.src}
                    alt={activeImage.alt}
                  />
                </div>
                {activeImages.length > 1 && activeItem && (
                  <div
                    className="corpo-coreografico-section__gallery-controls"
                    aria-label={`Galeria de ${activeItem.label}`}
                  >
                    <button
                      type="button"
                      className="corpo-coreografico-section__gallery-button corpo-coreografico-section__gallery-button--previous"
                      aria-label={`Imagem anterior de ${activeItem.label}`}
                      onClick={handlePreviousImage}
                      disabled={activeImageIndex === 0}
                    >
                      <span aria-hidden="true">←</span>
                    </button>
                    <span className="corpo-coreografico-section__gallery-counter" aria-live="polite">
                      {activeImageIndex + 1} / {activeImages.length}
                    </span>
                    <button
                      type="button"
                      className="corpo-coreografico-section__gallery-button corpo-coreografico-section__gallery-button--next"
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
              <div className="corpo-coreografico-section__placeholder">
                <span className="corpo-coreografico-section__placeholder-label">
                  {activeItem?.label}
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
