import { useEffect, useRef, useState } from 'react'
import Container from '../../../../components/Container/Container'
import founderTermoformacao from '../../../../assets/images/idealizador/founder-termoformacao.png'
import founderAirblade from '../../../../assets/images/idealizador/founder-airblade.png'
import founderQuepe from '../../../../assets/images/idealizador/founder-quepe.png'
import founderBastao from '../../../../assets/images/idealizador/founder-bastao.png'
import './IdealizadorInnovationsSection.css'

type Innovation = {
  number: string
  title: string
  description: string
  image: string
  alt: string
}

const innovations: Innovation[] = [
  {
    number: '01',
    title: 'TERMOFORMAÇÕES',
    description:
      'Trouxe dos EUA uma estrutura com melhor caimento, acabamento e resistência para as barretinas usadas por bandas e fanfarras',
    image: founderTermoformacao,
    alt: 'Barretina termoformada prateada com pluma branca.',
  },
  {
    number: '02',
    title: 'AIRBLADES',
    description:
      'Nacionalizou um acessório desejado por linhas de frente, com investimento pesado com moldes próprios e 1.500kg de aço usinado',
    image: founderAirblade,
    alt: 'Airblade branco sobre fundo preto.',
  },
  {
    number: '03',
    title: 'MOLDES PRÓPRIOS',
    description:
      'Aumentou o padrão de produção deixando as peças mais uniformes, duráveis e elegantes, além de permitir maior escala e menor custo ao cliente final.',
    image: founderQuepe,
    alt: 'Quepe preto e amarelo produzido com moldes próprios.',
  },
  {
    number: '04',
    title: 'BASTÕES DE LED',
    description:
      'Criado em 2010 para o corpo da BAMASO, trouxe impacto visual e inovação cênica para apresentações',
    image: founderBastao,
    alt: 'Bastão de LED aceso em posição diagonal.',
  },
]

function InnovationCard({ innovation }: { innovation: Innovation }) {
  return (
    <li className="idealizador-innovations__item">
      <article className="idealizador-innovations__card">
        <img
          className="idealizador-innovations__image"
          src={innovation.image}
          alt={innovation.alt}
          loading="lazy"
        />
        <div className="idealizador-innovations__content">
          <span className="idealizador-innovations__number" aria-hidden="true">
            {innovation.number}
          </span>
          <span className="idealizador-innovations__divider" aria-hidden="true" />
          <h3 className="idealizador-innovations__card-title">{innovation.title}</h3>
          <p className="idealizador-innovations__description">{innovation.description}</p>
        </div>
      </article>
    </li>
  )
}

function IdealizadorInnovationsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const section = sectionRef.current

    if (!section || isVisible) {
      return undefined
    }

    const isMobile = window.matchMedia('(max-width: 37.4375rem)').matches

    if (isMobile) {
      setIsVisible(true)
      return undefined
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      {
        threshold: 0.45,
        rootMargin: '0px 0px -12% 0px',
      },
    )

    observer.observe(section)

    return () => observer.disconnect()
  }, [isVisible])

  return (
    <section
      ref={sectionRef}
      className={`idealizador-innovations${isVisible ? ' idealizador-innovations--visible' : ''}`}
      aria-labelledby="idealizador-innovations-title"
    >
      <Container className="idealizador-innovations__container">
        <header className="idealizador-innovations__header">
          <h2 className="idealizador-innovations__title" id="idealizador-innovations-title">
            <span className="idealizador-innovations__title-highlight highlight-font">Inovações</span>{' '}
            <span className="idealizador-innovations__title-main">que marcaram.</span>
          </h2>
          <p className="idealizador-innovations__subtitle">
            Ao longo de sua trajetória, o Maestro Fernando Rabelo trouxe ao Brasil soluções que transformaram o universo das bandas e fanfarras.
          </p>
        </header>

        <ol className="idealizador-innovations__list">
          {innovations.map((innovation) => (
            <InnovationCard innovation={innovation} key={innovation.number} />
          ))}
        </ol>
      </Container>
    </section>
  )
}

export default IdealizadorInnovationsSection
