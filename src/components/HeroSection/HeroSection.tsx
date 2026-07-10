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
}: HeroSectionProps) {
  const background = backgroundImage
    ? `linear-gradient(rgba(10, 10, 10, 0.72), rgba(10, 10, 10, 0.82)), url("${backgroundImage}")`
    : undefined

  return (
    <section
      className={`hero-section hero-section--${align}`}
      style={background ? { backgroundImage: background } : undefined}
    >
      <Container>
        <div className="hero-section__content">
          {eyebrow && <span className="hero-section__eyebrow">{eyebrow}</span>}
          <h1 className="hero-section__title">{title}</h1>
          {subtitle && <p className="hero-section__subtitle">{subtitle}</p>}
          {(primaryButtonLabel || secondaryButtonLabel) && (
            <div className="hero-section__actions">
              {primaryButtonLabel && (
                <CTAButton href={primaryButtonHref}>{primaryButtonLabel}</CTAButton>
              )}
              {secondaryButtonLabel && (
                <CTAButton href={secondaryButtonHref} variant="outline">
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
