import ctaAcessorios from '../../assets/images/acessorios/cta-acessorios.png'
import AccessoriesShowcaseSection, {
  type AccessoriesShowcaseItem,
} from '../../components/AccessoriesShowcaseSection'
import FinalItemCTA from '../../components/FinalItemCTA'
import AcessoriosBalizaSection from './sections/AcessoriosBalizaSection'
import AcessoriosHeroSection from './sections/AcessoriosHeroSection'
import CorpoCoreograficoSection from './sections/CorpoCoreograficoSection'

const comandanteMorItems: AccessoriesShowcaseItem[] = [
  { id: 'bastao-mace', label: 'Bastão Mace' },
]

function Acessorios() {
  return (
    <>
      <AcessoriosHeroSection />
      <CorpoCoreograficoSection />
      <AccessoriesShowcaseSection
        id="acessorios-comandante-mor"
        eyebrow="Acessórios"
        title="Comandante"
        highlight="Mór"
        items={comandanteMorItems}
        theme="dark"
        contentSide="left"
        ariaLabel="Acessórios para Comandante Mór"
        initialItemId="bastao-mace"
      />
      <AcessoriosBalizaSection />
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
