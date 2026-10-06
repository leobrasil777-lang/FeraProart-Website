import { useId, useState, type ReactNode } from 'react'
import './Accordion.css'

export interface AccordionItem {
  title: string
  content: ReactNode
}

interface AccordionProps {
  items: AccordionItem[]
}

function Accordion({ items }: AccordionProps) {
  const [openIndexes, setOpenIndexes] = useState<number[]>([])
  const id = useId()

  const toggleItem = (index: number) => {
    setOpenIndexes((current) =>
      current.includes(index)
        ? current.filter((itemIndex) => itemIndex !== index)
        : [...current, index],
    )
  }

  return (
    <div className="accordion">
      {items.map((item, index) => {
        const isOpen = openIndexes.includes(index)
        const triggerId = `${id}-trigger-${index}`
        const panelId = `${id}-panel-${index}`

        return (
          <div className={`accordion__item${isOpen ? ' accordion__item--open' : ''}`} key={`${item.title}-${index}`}>
            <h3 className="accordion__heading">
              <button
                id={triggerId}
                className="accordion__trigger"
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggleItem(index)}
              >
                <span>{item.title}</span>
                <span className="accordion__icon" aria-hidden="true" />
              </button>
            </h3>
            <div
              id={panelId}
              className="accordion__panel"
              role="region"
              aria-labelledby={triggerId}
              hidden={!isOpen}
            >
              <div className="accordion__content">{item.content}</div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Accordion
