import { useEffect, useRef, useState } from 'react'
import Container from '../../../../components/Container/Container'
import './LicitacaoProcessSection.css'

type ProcessStep = {
  number: number
  title: string
  description: string
}

const processSteps: ProcessStep[] = [
  {
    number: 1,
    title: '1. Elaboração de Descritivos Técnicos Certificados',
    description:
      'Criamos especificações detalhadas, claras e sem direcionamentos, em total conformidade com a Nova Lei de Licitações (Lei n° 14.133/21). Evite impugnações com descritivos precisos de materiais, gramaturas, composições e engenharia do produto.',
  },
  {
    number: 2,
    title: '2. Suporte no Termo de Referência (TR)',
    description:
      'Auxiliamos na estruturação do TR, fornecendo subsídios técnicos fundamentados, estudos de viabilidade e critérios de aceitabilidade que garantem a qualidade do objeto a ser contratado.',
  },
  {
    number: 3,
    title: '3. Mostruários e Amostras de Alta Qualidade',
    description:
      'Disponibilizamos mockups, amostras físicas e protótipos detalhados para que a comissão de licitação possa avaliar a conformidade técnica, o acabamento e a durabilidade antes ou durante a fase de julgamento.',
  },
]

type ProcessStepCardProps = ProcessStep & {
  isVisible: boolean
  direction: 'left' | 'right'
}

function ProcessStepCard({ number, title, description, isVisible, direction }: ProcessStepCardProps) {
  const itemClassName = [
    'licitacao-process__item',
    `licitacao-process__item--from-${direction}`,
    isVisible ? 'licitacao-process__item--visible' : '',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <li className={itemClassName}>
      <article className="licitacao-process__card">
        <div className="licitacao-process__card-heading">
          <h3 className="licitacao-process__card-title">{title}</h3>
        </div>

        <p className="licitacao-process__card-description">{description}</p>
      </article>
    </li>
  )
}

function LicitacaoProcessSection() {
  const listRef = useRef<HTMLOListElement>(null)
  const [visibleCardsCount, setVisibleCardsCount] = useState(0)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (prefersReducedMotion) {
      setVisibleCardsCount(processSteps.length)
      return
    }

    let animationFrameId = 0

    const updateVisibleCards = () => {
      const listElement = listRef.current

      if (!listElement) {
        return
      }

      const listTop = listElement.getBoundingClientRect().top
      const viewportHeight = window.innerHeight
      const nextVisibleCardsCount = [0.58, 0.30, 0.10].filter(
        (threshold) => listTop <= viewportHeight * threshold,
      ).length

      if (nextVisibleCardsCount > 0) {
        setVisibleCardsCount((currentCount) => Math.max(currentCount, nextVisibleCardsCount))
      }
    }

    const handleScroll = () => {
      window.cancelAnimationFrame(animationFrameId)
      animationFrameId = window.requestAnimationFrame(updateVisibleCards)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleScroll)

    return () => {
      window.cancelAnimationFrame(animationFrameId)
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    }
  }, [])

  return (
    <section className="licitacao-process" aria-labelledby="licitacao-process-title">
      <Container className="licitacao-process__container">
        <h2 className="licitacao-process__title" id="licitacao-process-title">
          <span className="licitacao-process__title-line licitacao-process__title-line--first">
            <span>Como</span>
            <span className="licitacao-process__title-highlight highlight-font">facilitamos</span>
          </span>
          <span className="licitacao-process__title-line">seu processo?</span>
        </h2>

        <p className="licitacao-process__intro">
          Sabemos que a construção de um processo licitatório exige rigor técnico, clareza e segurança jurídica. Nossa equipe de especialistas apoia o poder público em todas as etapas da fase preparatória, garantindo ampla competitividade e a escolha do melhor produto.
        </p>

        <ol className="licitacao-process__list" ref={listRef}>
          {processSteps.map((step, index) => (
            <ProcessStepCard
              key={step.number}
              {...step}
              direction={index === 1 ? 'right' : 'left'}
              isVisible={index < visibleCardsCount}
            />
          ))}
        </ol>
      </Container>
    </section>
  )
}

export default LicitacaoProcessSection
