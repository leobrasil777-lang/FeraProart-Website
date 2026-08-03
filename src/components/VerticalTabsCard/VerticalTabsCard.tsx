import { useRef, type KeyboardEvent } from 'react'
import './VerticalTabsCard.css'

export type VerticalTabsCardItem = {
  id: string
  label: string
}

export interface VerticalTabsCardProps {
  items: VerticalTabsCardItem[]
  activeItemId: string
  onItemChange: (itemId: string) => void
  ariaLabel: string
  controlsId: string
  idPrefix: string
  className?: string
}

function VerticalTabsCard({
  items,
  activeItemId,
  onItemChange,
  ariaLabel,
  controlsId,
  idPrefix,
  className,
}: VerticalTabsCardProps) {
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([])

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
    onItemChange(items[nextIndex].id)
    tabRefs.current[nextIndex]?.focus()
  }

  const cardClassName = ['vertical-tabs-card', className]
    .filter(Boolean)
    .join(' ')

  return (
    <div
      className={cardClassName}
      role="tablist"
      aria-label={ariaLabel}
      aria-orientation="vertical"
    >
      {items.map((item, index) => {
        const isActive = item.id === activeItemId

        return (
          <button
            key={item.id}
            ref={(element) => {
              tabRefs.current[index] = element
            }}
            id={`${idPrefix}-tab-${item.id}`}
            className={`vertical-tabs-card__tab${
              isActive ? ' vertical-tabs-card__tab--active' : ''
            }`}
            type="button"
            role="tab"
            aria-selected={isActive}
            aria-controls={controlsId}
            tabIndex={isActive ? 0 : -1}
            onClick={() => onItemChange(item.id)}
            onKeyDown={(event) => handleTabKeyDown(event, index)}
          >
            {item.label}
          </button>
        )
      })}
    </div>
  )
}

export default VerticalTabsCard
