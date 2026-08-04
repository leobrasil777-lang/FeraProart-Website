import { useEffect, useRef, useState, type KeyboardEvent } from 'react'
import Container from '../../../../components/Container/Container'
import arcoAcessorios from '../../../../assets/images/acessorios/acessorios-arco.png'
import bastaoAcessorios from '../../../../assets/images/acessorios/acessorios-bastao.png'
import bolasAcessorios from '../../../../assets/images/acessorios/acessorios-bolas.png'
import cordasAcessorios from '../../../../assets/images/acessorios/acessorios-cordas.png'
import fitasAcessorios from '../../../../assets/images/acessorios/acessorios-fitas.png'
import macasAcessorios from '../../../../assets/images/acessorios/acessorios-macas.png'
import './AcessoriosBalizaSection.css'

type AcessoriosBalizaSectionImage = {
  src: string
  alt: string
}

type AcessoriosBalizaSectionItem = {
  id: string
  label: string
  images?: AcessoriosBalizaSectionImage[]
}

const sectionId = 'acessorios-baliza'

const items: AcessoriosBalizaSectionItem[] = [
  { id: 'bolas', label: 'Bolas', images: [{ src: bolasAcessorios, alt: 'Conjunto de bolas para apresentações de baliza.' }] },
  { id: 'fitas', label: 'Fitas', images: [{ src: fitasAcessorios, alt: 'Conjunto de fitas para apresentações de baliza.' }] },
  { id: 'maças', label: 'Maças', images: [{ src: macasAcessorios, alt: 'Conjunto de maças para apresentações de baliza.' }] },
  { id: 'cordas', label: 'Cordas', images: [{ src: cordasAcessorios, alt: 'Conjunto de cordas para apresentações de baliza.' }] },
  { id: 'bastao', label: 'Bastão', images: [{ src: bastaoAcessorios, alt: 'Bastão para apresentações.' }] },
  { id: 'arco', label: 'Arco', images: [{ src: arcoAcessorios, alt: 'Arco para apresentações.' }] },
]

function AcessoriosBalizaSection() {
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([])
  const [activeItemId, setActiveItemId] = useState('bolas')
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
    <section className="acessorios-baliza-section" aria-labelledby={`${sectionId}-title`}>
      <Container className="acessorios-baliza-section__container">
        <div className="acessorios-baliza-section__layout">
          <div className="acessorios-baliza-section__content">
            <header className="acessorios-baliza-section__header">

              <h2 className="acessorios-baliza-section__title" id={`${sectionId}-title`}>
                <span className="acessorios-baliza-section__title-main">Acessórios</span>
                <span className="acessorios-baliza-section__title-highlight">Baliza</span>
              </h2>
            </header>

            <div
              className="acessorios-baliza-section__tabs acessorios-baliza-section__tabs-card"
              role="tablist"
              aria-label="Acessórios para Baliza"
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
                    className={`acessorios-baliza-section__tab${
                      isActive ? ' acessorios-baliza-section__tab--active' : ''
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
            className="acessorios-baliza-section__viewer"
            id={`${sectionId}-viewer`}
            role="tabpanel"
            aria-labelledby={
              activeItem ? `${sectionId}-tab-${activeItem.id}` : undefined
            }
          >
            {activeImage ? (
              <>
                <div className="acessorios-baliza-section__image-frame">
                  <img
                    key={activeImage.src}
                    className="acessorios-baliza-section__image"
                    src={activeImage.src}
                    alt={activeImage.alt}
                  />
                </div>
                {activeImages.length > 1 && activeItem && (
                  <div
                    className="acessorios-baliza-section__gallery-controls"
                    aria-label={`Galeria de ${activeItem.label}`}
                  >
                    <button
                      type="button"
                      className="acessorios-baliza-section__gallery-button acessorios-baliza-section__gallery-button--previous"
                      aria-label={`Imagem anterior de ${activeItem.label}`}
                      onClick={handlePreviousImage}
                      disabled={activeImageIndex === 0}
                    >
                      <span aria-hidden="true">←</span>
                    </button>
                    <span className="acessorios-baliza-section__gallery-counter" aria-live="polite">
                      {activeImageIndex + 1} / {activeImages.length}
                    </span>
                    <button
                      type="button"
                      className="acessorios-baliza-section__gallery-button acessorios-baliza-section__gallery-button--next"
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
              <div className="acessorios-baliza-section__placeholder">
                <span className="acessorios-baliza-section__placeholder-label">
                  {activeItem?.label}
                </span>
                <span className="acessorios-baliza-section__placeholder-text">
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

export default AcessoriosBalizaSection
