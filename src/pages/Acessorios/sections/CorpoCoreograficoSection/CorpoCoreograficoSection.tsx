import { useRef, useState, type KeyboardEvent } from 'react'
import Container from '../../../../components/Container/Container'
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
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([])

  const activeItem =
    corpoCoreograficoItems.find((item) => item.id === activeItemId) ??
    corpoCoreograficoItems[0]

  const handleTabKeyDown = (
    event: KeyboardEvent<HTMLButtonElement>,
    currentIndex: number,
  ) => {
    let nextIndex: number | undefined

    switch (event.key) {
      case 'ArrowDown':
        nextIndex = (currentIndex + 1) % corpoCoreograficoItems.length
        break
      case 'ArrowUp':
        nextIndex =
          (currentIndex - 1 + corpoCoreograficoItems.length) %
          corpoCoreograficoItems.length
        break
      case 'Home':
        nextIndex = 0
        break
      case 'End':
        nextIndex = corpoCoreograficoItems.length - 1
        break
      default:
        return
    }

    event.preventDefault()
    setActiveItemId(corpoCoreograficoItems[nextIndex].id)
    tabRefs.current[nextIndex]?.focus()
  }

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

            <div
              className="corpo-coreografico-section__tabs"
              role="tablist"
              aria-label="Acessórios para Corpo Coreográfico"
              aria-orientation="vertical"
            >
              {corpoCoreograficoItems.map((item, index) => {
                const isActive = activeItem.id === item.id

                return (
                  <button
                    key={item.id}
                    ref={(element) => {
                      tabRefs.current[index] = element
                    }}
                    id={`corpo-coreografico-tab-${item.id}`}
                    className={`corpo-coreografico-section__tab ${
                      isActive
                        ? 'corpo-coreografico-section__tab--active'
                        : ''
                    }`}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    aria-controls="corpo-coreografico-viewer"
                    tabIndex={isActive ? 0 : -1}
                    onClick={() => setActiveItemId(item.id)}
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
