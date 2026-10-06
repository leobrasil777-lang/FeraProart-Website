import type { ReactNode } from 'react'
import { preload } from 'react-dom'
import CTAButton from '../CTAButton/CTAButton'
import Container from '../Container/Container'
import './HeroSection.css'

interface HeroSectionProps {
  title: string
  subtitle?: string
  eyebrow?: string
  backgroundImage?: string
  primaryButtonLabel?: string
  primaryButtonHref?: string
  secondaryButtonLabel?: string
  secondaryButtonHref?: string
  align?: 'left' | 'center'
  className?: string
  titleContent?: ReactNode
  primaryButtonClassName?: string
  secondaryButtonClassName?: string
  primaryButtonWhatsappMessage?: string
  secondaryButtonWhatsappMessage?: string
  prioritizeBackgroundImage?: boolean
}

function HeroSection({
  title,
  subtitle,
  eyebrow,
  backgroundImage,
  primaryButtonLabel,
  primaryButtonHref,
  secondaryButtonLabel,
  secondaryButtonHref,
  align = 'left',
  className = '',
  titleContent,
  primaryButtonClassName = '',
  secondaryButtonClassName = '',
  primaryButtonWhatsappMessage,
  secondaryButtonWhatsappMessage,
  prioritizeBackgroundImage = false,
}: HeroSectionProps) {
  if (backgroundImage && prioritizeBackgroundImage) {
  preload(backgroundImage, {
    as: 'image',
    fetchPriority: 'high',
  })
}
  const background = backgroundImage
    ? `linear-gradient(rgba(10, 10, 10, 0.72), rgba(10, 10, 10, 0.82)), url("${backgroundImage}")`
    : undefined

  return (
    <section
      className={[`hero-section hero-section--${align}`, className].filter(Boolean).join(' ')}
      style={background ? { backgroundImage: background } : undefined}
    >
      <Container>
        <div className="hero-section__content">
          {eyebrow && <span className="hero-section__eyebrow">{eyebrow}</span>}
          <h1 className="hero-section__title" aria-label={title}>{titleContent ?? title}</h1>
          {subtitle && <p className="hero-section__subtitle">{subtitle}</p>}
          {(primaryButtonLabel || secondaryButtonLabel) && (
            <div className="hero-section__actions">
              {primaryButtonLabel && (
                <CTAButton href={primaryButtonHref} className={primaryButtonClassName} whatsappMessage={primaryButtonWhatsappMessage}>{primaryButtonLabel}</CTAButton>
              )}
              {secondaryButtonLabel && (
                <CTAButton href={secondaryButtonHref} variant="outline" className={secondaryButtonClassName} whatsappMessage={secondaryButtonWhatsappMessage}>
                  {secondaryButtonLabel}
                </CTAButton>
              )}
            </div>
          )}
        </div>
      </Container>
    </section>
  )
}

export default HeroSection
