import FinalItemCTA from '../../../../components/FinalItemCTA'
import homeNotebookImage from '../../../../assets/images/home/home-notebook.png'
import useRevealOnScroll from '../../../../hooks/useRevealOnScroll'
import './HomeFinalCTASection.css'

function HomeFinalCTASection() {
  const { ref, isVisible, isRevealReady } = useRevealOnScroll<HTMLElement>({ threshold: 0.2 })
  const className = [
    'home-final-cta',
    isRevealReady ? 'home-final-cta--reveal-ready' : '',
    isRevealReady && isVisible ? 'home-final-cta--visible' : '',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <FinalItemCTA
      sectionRef={ref}
      className={className}
      id="home-final-cta"
      image={homeNotebookImage}
      imageAlt=""
      imagePosition="right bottom"
      hideImageOnMobile
      title="Vamos"
      highlight="conversar?"
      description="Nossa equipe te aguarda para entender sua situação e facilitar seu processo de compra e licitação"
      ctaLabel="Quero saber mais"
      ctaHref="/licitacao"
      whatsappMessage="Olá, vim pelo site da Fera Proart e gostaria de conversar sobre um processo de compra ou licitação."
    />
  )
}

export default HomeFinalCTASection
