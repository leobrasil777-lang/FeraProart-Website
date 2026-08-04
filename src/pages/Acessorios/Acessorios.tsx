import ctaAcessorios from '../../assets/images/acessorios/cta-acessorios.png'
import AccessoriesShowcaseSection, {
  type AccessoriesShowcaseItem,
} from '../../components/AccessoriesShowcaseSection'
import FinalItemCTA from '../../components/FinalItemCTA'
import AcessoriosHeroSection from './sections/AcessoriosHeroSection'

const corpoCoreograficoItems: AccessoriesShowcaseItem[] = [
  { id: 'airblades', label: 'Airblades' },
  { id: 'bastao-led', label: 'Bastão de LED' },
  {
    id: 'bandeiras-corpo-coreografico',
    label: 'Bandeiras para Corpo Coreográfico',
  },
  { id: 'bastao-com-bandeira', label: 'Bastão com Bandeira' },
]

const comandanteMorItems: AccessoriesShowcaseItem[] = [
  { id: 'bastao-mace', label: 'Bastão Mace' },
]

const acessoriosBalizaItems: AccessoriesShowcaseItem[] = [
  { id: 'bolas', label: 'Bolas' },
  { id: 'fitas', label: 'Fitas' },
  { id: 'massas', label: 'Massas' },
  { id: 'cordas', label: 'Cordas' },
]

function Acessorios() {
  return (
    <>
      <AcessoriosHeroSection />
      <AccessoriesShowcaseSection
        id="acessorios-corpo-coreografico"
        eyebrow="Acessórios"
        title="Corpo"
        highlight="Coreográfico"
        items={corpoCoreograficoItems}
        theme="dark"
        contentSide="left"
        ariaLabel="Acessórios para Corpo Coreográfico"
        initialItemId="airblades"
      />
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
      <AccessoriesShowcaseSection
        id="acessorios-baliza"
        title="Acessórios"
        highlight="Baliza"
        items={acessoriosBalizaItems}
        theme="dark"
        contentSide="right"
        ariaLabel="Acessórios para Baliza"
        initialItemId="bolas"
      />
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
