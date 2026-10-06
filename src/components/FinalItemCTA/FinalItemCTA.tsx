import type { Ref } from 'react'
import { Link } from 'react-router-dom'
import Container from '../Container/Container'
import { openWhatsApp } from '../../utils/whatsapp'
import './FinalItemCTA.css'

export interface FinalItemCTAProps {
  id?: string
  image: string
  imageAlt: string
  title: string
  highlight: string
  description: string
  ctaLabel?: string
  ctaHref: string
  whatsappMessage?: string
  imagePosition?: string
  hideImageOnMobile?: boolean
  className?: string
  sectionRef?: Ref<HTMLElement>
}

function FinalItemCTA({
  id,
  image,
  imageAlt,
  title,
  highlight,
  description,
  ctaLabel = 'Saiba mais',
  ctaHref,
  whatsappMessage,
  imagePosition = 'right bottom',
  hideImageOnMobile = false,
  className = '',
  sectionRef,
}: FinalItemCTAProps) {
  const classes = [
    'final-item-cta',
    hideImageOnMobile ? 'final-item-cta--hide-image-mobile' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <section ref={sectionRef} className={classes} id={id} aria-labelledby={id ? `${id}-title` : undefined}>
      <Container className="final-item-cta__container">
        <div className="final-item-cta__content">
          <h2 className="final-item-cta__title" id={id ? `${id}-title` : undefined}>
            <span className="final-item-cta__title-main">{title}</span>
            <span className="final-item-cta__title-highlight">{highlight}</span>
          </h2>

          <p className="final-item-cta__description">{description}</p>

          {whatsappMessage ? (
            <button className="final-item-cta__link" type="button" onClick={() => openWhatsApp(whatsappMessage)}>
              {ctaLabel}
            </button>
          ) : (
            <Link className="final-item-cta__link" to={ctaHref}>
              {ctaLabel}
            </Link>
          )}
        </div>

        <div className="final-item-cta__visual">
          <img
            className="final-item-cta__image"
            src={image}
            alt={imageAlt}
            style={{ objectPosition: imagePosition }}
            loading="lazy"
            decoding="async"
          />
        </div>
      </Container>
    </section>
  )
}

export default FinalItemCTA
