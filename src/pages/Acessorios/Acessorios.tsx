import ctaAcessorios from '../../assets/images/acessorios/cta-acessorios.png'
import FinalItemCTA from '../../components/FinalItemCTA'
import AcessoriosBalizaSection from './sections/AcessoriosBalizaSection'
import AcessoriosHeroSection from './sections/AcessoriosHeroSection'
import ComandanteMorSection from './sections/ComandanteMorSection'
import CorpoCoreograficoSection from './sections/CorpoCoreograficoSection'
import PavilhaoSection from './sections/PavilhaoSection'

function Acessorios() {
  return (
    <>
      <AcessoriosHeroSection />
      <CorpoCoreograficoSection />
      <AcessoriosBalizaSection />
      <ComandanteMorSection />
      <PavilhaoSection />
      <FinalItemCTA
        id="cta-final-acessorios"
        image={ctaAcessorios}
        imageAlt="Acessórios para bandas e fanfarras apresentados sobre fundo cinza."
        title="Confie na"
        highlight="tradição"
        description="Conte com quem entende de uniformes, acessórios e soluções personalizadas para bandas, fanfarras e instituições."
        ctaLabel="Quero um orçamento"
        ctaHref="/licitacao"
      />
    </>
  )
}

export default Acessorios
