import ctaAcessorios from '../../assets/images/acessorios/cta-acessorios.png'
import FinalItemCTA from '../../components/FinalItemCTA'
import AcessoriosHeroSection from './sections/AcessoriosHeroSection'

function Acessorios() {
  return (
    <>
      <AcessoriosHeroSection />
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
