import './SectionTitle.css'

interface SectionTitleProps {
  eyebrow?: string
  title: string
  subtitle?: string
  align?: 'left' | 'center'
  highlight?: string
}

function SectionTitle({
  eyebrow,
  title,
  subtitle,
  align = 'left',
  highlight,
}: SectionTitleProps) {
  return (
    <div className={`section-title section-title--${align}`}>
      {eyebrow && <span className="section-title__eyebrow">{eyebrow}</span>}
      <h2 className="section-title__heading">{title}</h2>
      {highlight && <span className="section-title__highlight">{highlight}</span>}
      {subtitle && <p className="section-title__subtitle">{subtitle}</p>}
    </div>
  )
}

export default SectionTitle
