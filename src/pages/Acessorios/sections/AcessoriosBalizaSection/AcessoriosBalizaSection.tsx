import { useRef, useState, type KeyboardEvent } from 'react'
import Container from '../../../../components/Container/Container'
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
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([])

  const activeItem =
    acessoriosBalizaItems.find((item) => item.id === activeItemId) ??
    acessoriosBalizaItems[0]

  const handleTabKeyDown = (
    event: KeyboardEvent<HTMLButtonElement>,
    currentIndex: number,
  ) => {
    let nextIndex: number | undefined

    switch (event.key) {
      case 'ArrowDown':
        nextIndex = (currentIndex + 1) % acessoriosBalizaItems.length
        break
      case 'ArrowUp':
        nextIndex =
          (currentIndex - 1 + acessoriosBalizaItems.length) %
          acessoriosBalizaItems.length
        break
      case 'Home':
        nextIndex = 0
        break
      case 'End':
        nextIndex = acessoriosBalizaItems.length - 1
        break
      default:
        return
    }

    event.preventDefault()
    setActiveItemId(acessoriosBalizaItems[nextIndex].id)
    tabRefs.current[nextIndex]?.focus()
  }

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

            <div
              className="acessorios-baliza-section__tabs"
              role="tablist"
              aria-label="Acessórios para Baliza"
              aria-orientation="vertical"
            >
              {acessoriosBalizaItems.map((item, index) => {
                const isActive = activeItem.id === item.id

                return (
                  <button
                    key={item.id}
                    ref={(element) => {
                      tabRefs.current[index] = element
                    }}
                    id={`acessorios-baliza-tab-${item.id}`}
                    className={`acessorios-baliza-section__tab ${
                      isActive
                        ? 'acessorios-baliza-section__tab--active'
                        : ''
                    }`}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    aria-controls="acessorios-baliza-viewer"
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
        </div>
      </Container>
    </section>
  )
}

export default AcessoriosBalizaSection
