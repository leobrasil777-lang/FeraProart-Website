import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import './CTAButton.css'

interface CTAButtonProps {
  children: ReactNode
  href?: string
  variant?: 'primary' | 'secondary' | 'outline'
  className?: string
  icon?: ReactNode
}

function CTAButton({
  children,
  href,
  variant = 'primary',
  className = '',
  icon,
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
