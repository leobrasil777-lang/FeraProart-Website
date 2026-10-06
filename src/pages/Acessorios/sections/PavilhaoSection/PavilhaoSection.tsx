import { useEffect, useRef, useState, type KeyboardEvent } from 'react'
import Container from '../../../../components/Container/Container'
import bandeirasAcessorios from '../../../../assets/images/acessorios/acessorios-bandeiras.png'
import rosetaAcessorios from '../../../../assets/images/acessorios/acessorios-roseta.webp'
import talabarteAcessorios from '../../../../assets/images/acessorios/acessorios-talabarte.png'
import estandarte1 from '../../../../assets/images/acessorios/estandarte1.png'
import estandarte2 from '../../../../assets/images/acessorios/estandarte2.png'
import estandarte3 from '../../../../assets/images/acessorios/estandarte3.png'
import estandarte4 from '../../../../assets/images/acessorios/estandarte4.png'
import estandarte5 from '../../../../assets/images/acessorios/estandarte5.webp'
import estandarte6 from '../../../../assets/images/acessorios/estandarte6.webp'
import estandarte7 from '../../../../assets/images/acessorios/estandarte7.png'
import estandarte8 from '../../../../assets/images/acessorios/estandarte8.png'
import estandarte9 from '../../../../assets/images/acessorios/estandarte9.webp'
import estandarte10 from '../../../../assets/images/acessorios/estandarte10.png'
import estandarte11 from '../../../../assets/images/acessorios/estandarte11.png'
import './PavilhaoSection.css'

type PavilhaoSectionImage = {
  src: string
  alt: string
}

type PavilhaoSectionItem = {
  id: string
  label: string
  images?: PavilhaoSectionImage[]
}

const sectionId = 'acessorios-pavilhao'

const items: PavilhaoSectionItem[] = [
  {
    id: 'estandartes', label: 'Estandartes',
    images: [
      { src: estandarte1, alt: 'Estandarte institucional, modelo 1.' },
      { src: estandarte2, alt: 'Estandarte institucional, modelo 2.' },
      { src: estandarte3, alt: 'Estandarte institucional, modelo 3.' },
      { src: estandarte4, alt: 'Estandarte institucional, modelo 4.' },
      { src: estandarte5, alt: 'Estandarte institucional, modelo 5.' },
      { src: estandarte6, alt: 'Estandarte institucional, modelo 6.' },
      { src: estandarte7, alt: 'Estandarte institucional, modelo 7.' },
      { src: estandarte8, alt: 'Estandarte institucional, modelo 8.' },
      { src: estandarte9, alt: 'Estandarte institucional, modelo 9.' },
      { src: estandarte10, alt: 'Estandarte institucional, modelo 10.' },
      { src: estandarte11, alt: 'Estandarte institucional, modelo 11.' },
    ],
  },
  { id: 'bandeiras', label: 'Bandeiras', images: [{ src: bandeirasAcessorios, alt: 'Bandeira do Brasil para uso institucional.' }] },
  { id: 'talabarte', label: 'Talabartes', images: [{ src: talabarteAcessorios, alt: 'Talabarte institucional.' }] },
  { id: 'rosetas', label: 'Rosetas', images: [{ src: rosetaAcessorios, alt: 'Roseta institucional.' }] },
]

function PavilhaoSection() {
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([])
  const [activeItemId, setActiveItemId] = useState('estandartes')
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
    <section className="pavilhao-section" aria-labelledby={`${sectionId}-title`}>
      <Container className="pavilhao-section__container">
        <div className="pavilhao-section__layout">
          <div className="pavilhao-section__content">
            <header className="pavilhao-section__header">
              <span className="pavilhao-section__eyebrow">Acessórios</span>

              <h2 className="pavilhao-section__title" id={`${sectionId}-title`}>
                <span className="pavilhao-section__title-main">Pavilhão e Pavilhão</span>
                <span className="pavilhao-section__title-highlight">Cívico</span>
              </h2>
            </header>

            <div
              className="pavilhao-section__tabs pavilhao-section__tabs-card"
              role="tablist"
              aria-label="Acessórios para Pavilhão e Pavilhão Cívico"
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
                    className={`pavilhao-section__tab${
                      isActive ? ' pavilhao-section__tab--active' : ''
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
            className="pavilhao-section__viewer"
            id={`${sectionId}-viewer`}
            role="tabpanel"
            aria-labelledby={
              activeItem ? `${sectionId}-tab-${activeItem.id}` : undefined
            }
          >
            {activeImage ? (
              <>
                <div className="pavilhao-section__image-frame">
                  <img
                    key={activeImage.src}
                    className="pavilhao-section__image"
                    src={activeImage.src}
                    alt={activeImage.alt}
                  />
                </div>
                {activeImages.length > 1 && activeItem && (
                  <div
                    className="pavilhao-section__gallery-controls"
                    aria-label={`Galeria de ${activeItem.label}`}
                  >
                    <button
                      type="button"
                      className="pavilhao-section__gallery-button pavilhao-section__gallery-button--previous"
                      aria-label={`Imagem anterior de ${activeItem.label}`}
                      onClick={handlePreviousImage}
                      disabled={activeImageIndex === 0}
                    >
                      <span aria-hidden="true">←</span>
                    </button>
                    <span className="pavilhao-section__gallery-counter" aria-live="polite">
                      {activeImageIndex + 1} / {activeImages.length}
                    </span>
                    <button
                      type="button"
                      className="pavilhao-section__gallery-button pavilhao-section__gallery-button--next"
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
              <div className="pavilhao-section__placeholder">
                <span className="pavilhao-section__placeholder-label">
                  {activeItem?.label}
                </span>
                <span className="pavilhao-section__placeholder-text">
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

export default PavilhaoSection
