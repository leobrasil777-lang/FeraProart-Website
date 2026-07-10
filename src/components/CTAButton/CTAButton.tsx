import type { ReactNode } from 'react'
import './CTAButton.css'

interface CTAButtonProps {
  children: ReactNode
  href?: string
  variant?: 'primary' | 'secondary' | 'outline'
  className?: string
}

function CTAButton({
  children,
  href,
  variant = 'primary',
  className = '',
}: CTAButtonProps) {
  const classes = ['cta-button', `cta-button--${variant}`, className]
    .filter(Boolean)
    .join(' ')

  if (href) {
    return (
      <a className={classes} href={href}>
        {children}
      </a>
    )
  }

  return (
    <button className={classes} type="button">
      {children}
    </button>
  )
}

export default CTAButton
