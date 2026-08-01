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
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        ctaLabel="Quero um orçamento"
        ctaHref="/licitacao"
      />
    </>
  )
}

export default Acessorios
