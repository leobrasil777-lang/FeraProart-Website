import type { ReactNode } from 'react'
import './Container.css'

interface ContainerProps {
  children: ReactNode
  className?: string
}

function Container({ children, className = '' }: ContainerProps) {
  const classes = ['container', className].filter(Boolean).join(' ')

  return <div className={classes}>{children}</div>
}

export default Container
