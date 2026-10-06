import { useEffect, useRef, useState } from 'react'
import Container from '../../../../components/Container/Container'
import alarmIcon from '../../../../assets/icons/licitacao/alarm.svg'
import checkIcon from '../../../../assets/icons/licitacao/check.svg'
import filesIcon from '../../../../assets/icons/licitacao/folder.svg'
import atasImage from '../../../../assets/images/licitacao/licitacao-atas.png'
import './LicitacaoAgilitySection.css'

type AgilityBenefit = {
  icon: string
  text: string
}

const benefits: AgilityBenefit[] = [
  {
    icon: alarmIcon,
    text: 'Redução do tempo de contratação.',
  },
  {
    icon: checkIcon,
    text: 'Preços já auditados e julgados.',
  },
  {
    icon: filesIcon,
    text: 'Processo simplificado e homologado.',
  },
]

function LicitacaoAgilitySection() {
  const sectionRef = useRef<HTMLElement | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const section = sectionRef.current

    if (!section) {
      return undefined
    }

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (prefersReducedMotion) {
      setIsVisible(true)
      return undefined
    }

    const isMobile = window.matchMedia('(max-width: 43.75rem)').matches

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      {
        threshold: isMobile ? 0.1 : 0.35,
        rootMargin: isMobile ? '0px 0px -5% 0px' : '0px 0px -18% 0px',
      },
    )

    observer.observe(section)

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className={`licitacao-agility${isVisible ? ' licitacao-agility--visible' : ''}`}
      aria-labelledby="licitacao-agility-title"
    >
      <Container className="licitacao-agility__container">
        <div className="licitacao-agility__grid">
          <div className="licitacao-agility__content">
            <h2 className="licitacao-agility__title" id="licitacao-agility-title" aria-label="Agilidade máxima:">
              <span className="licitacao-agility__title-main">Agilidade</span>
              <span className="licitacao-agility__title-highlight highlight-font" aria-hidden="true">
                máxima:
              </span>
            </h2>

            <h3 className="licitacao-agility__subtitle">
              ATAS DE REGISTRO DE PREÇOS <span>(ARP) VIGENTES</span>
            </h3>

            <p className="licitacao-agility__description">
              Sua instituição tem urgência? Evite a burocracia de um processo do zero. Dispomos de Atas de Registro de Preços vigentes prontas para adesão (carona), alternativa 100% legal e segura para otimizar o orçamento público e garantir a entrega rápida.
            </p>

            <h3 className="licitacao-agility__benefits-title">
              VANTAGENS DA CARONA EM <span>NOSSAS ARPS:</span>
            </h3>

            <ul className="licitacao-agility__benefits">
              {benefits.map((benefit) => (
                <li className="licitacao-agility__benefit" key={benefit.text}>
                  <img
                    className="licitacao-agility__benefit-icon"
                    src={benefit.icon}
                    alt=""
                    aria-hidden="true"
                    width="45"
                    height="45"
                    loading="lazy"
                    decoding="async"
                  />
                  <span>{benefit.text}</span>
                </li>
              ))}
            </ul>
          </div>

          <figure className="licitacao-agility__media">
            <img
              className="licitacao-agility__image"
              src={atasImage}
              alt="Pastas de Atas de Registro de Preços vigentes da Fera Proart."
              width="567"
              height="845"
              loading="lazy"
              decoding="async"
            />
          </figure>
        </div>
      </Container>
    </section>
  )
}

export default LicitacaoAgilitySection
