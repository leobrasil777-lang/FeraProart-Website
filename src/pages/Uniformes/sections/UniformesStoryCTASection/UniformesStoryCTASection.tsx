import { useEffect, useRef } from 'react'
import { openWhatsApp } from '../../../../utils/whatsapp'
import './UniformesStoryCTASection.css'

const whatsappMessage = 'Olá, vim pela página de Uniformes da Fera Proart e gostaria de falar com um especialista para vestir essa história.'

function UniformesStoryCTASection() {
  const sectionRef = useRef<HTMLElement | null>(null)
  const contentRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const section = sectionRef.current
    const content = contentRef.current

    if (!section || !content) {
      return undefined
    }

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')

    const setFinalState = () => {
      content.style.filter = 'blur(0)'
      content.style.opacity = '1'
      content.style.transform = 'translateY(0)'
    }

    if (reducedMotion.matches) {
      setFinalState()
      return undefined
    }

    let animationFrameId = 0

    const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max)

    const updateScrollProgress = () => {
      animationFrameId = 0

      const rect = section.getBoundingClientRect()
      const viewportHeight = window.innerHeight || document.documentElement.clientHeight
      const start = viewportHeight * 0.95
      const end = viewportHeight * 0.2
      const progress = clamp((start - rect.top) / (start - end), 0, 1)
      const easedProgress = 1 - Math.pow(1 - progress, 2)

      const blur = 14 * (1 - easedProgress)
      const opacity = 0.15 + 0.85 * easedProgress
      const translateY = 50 * (1 - easedProgress)

      content.style.filter = `blur(${blur.toFixed(2)}px)`
      content.style.opacity = opacity.toFixed(3)
      content.style.transform = `translateY(${translateY.toFixed(2)}px)`
    }

    const requestTick = () => {
      if (animationFrameId === 0) {
        animationFrameId = window.requestAnimationFrame(updateScrollProgress)
      }
    }

    updateScrollProgress()
    window.addEventListener('scroll', requestTick, { passive: true })
    window.addEventListener('resize', requestTick)

    return () => {
      window.removeEventListener('scroll', requestTick)
      window.removeEventListener('resize', requestTick)

      if (animationFrameId !== 0) {
        window.cancelAnimationFrame(animationFrameId)
      }
    }
  }, [])

  return (
    <section className="uniformes-story-cta" ref={sectionRef} aria-labelledby="uniformes-story-cta-title">
      <div className="uniformes-story-cta__content" ref={contentRef}>
        <h2 className="uniformes-story-cta__title" id="uniformes-story-cta-title">
          Vista essa história
        </h2>
        <p className="uniformes-story-cta__description">
          Fale com a Fera Proart agora e venha vestir também esta história
        </p>
        <button
          className="uniformes-story-cta__button"
          type="button"
          onClick={() => openWhatsApp(whatsappMessage)}
        >
          Fale com um especialista
        </button>
      </div>
    </section>
  )
}

export default UniformesStoryCTASection
