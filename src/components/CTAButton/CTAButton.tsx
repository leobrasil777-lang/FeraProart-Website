import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { openWhatsApp } from '../../utils/whatsapp'
import './CTAButton.css'

interface CTAButtonProps {
  children: ReactNode
  href?: string
  variant?: 'primary' | 'secondary' | 'outline'
  className?: string
  icon?: ReactNode
  whatsappMessage?: string
}

function CTAButton({
  children,
  href,
  variant = 'primary',
  className = '',
  icon,
  whatsappMessage,
}: CTAButtonProps) {
  const classes = ['cta-button', `cta-button--${variant}`, className]
    .filter(Boolean)
    .join(' ')

  const content = (
    <>
      <span className="cta-button__label">{children}</span>
      {icon}
    </>
  )

  if (whatsappMessage) {
    return (
      <button className={classes} type="button" onClick={() => openWhatsApp(whatsappMessage)}>
        {content}
      </button>
    )
  }

  if (href) {
    if (href.startsWith('/')) {
      return (
        <Link className={classes} to={href}>
          {content}
        </Link>
      )
    }

    return (
      <a className={classes} href={href}>
        {content}
      </a>
    )
  }

  return (
    <button className={classes} type="button">
      {content}
    </button>
  )
}

export default CTAButton
