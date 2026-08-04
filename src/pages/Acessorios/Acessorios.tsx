import ctaAcessorios from '../../assets/images/acessorios/cta-acessorios.png'
import AccessoriesShowcaseSection, {
  type AccessoriesShowcaseItem,
} from '../../components/AccessoriesShowcaseSection'
import FinalItemCTA from '../../components/FinalItemCTA'
import AcessoriosHeroSection from './sections/AcessoriosHeroSection'

const corpoCoreograficoItems: AccessoriesShowcaseItem[] = [
  { id: 'airblades', label: 'Airblades' },
  { id: 'bastao-led', label: 'Bastão de LED' },
  { id: 'bandeira-led', label: 'Bandeira de LED' },
  {
    id: 'bandeiras-corpo-coreografico',
    label: 'Bandeiras para Corpo Coreográfico',
  },
]

const comandanteMorItems: AccessoriesShowcaseItem[] = [
  { id: 'bastao-mace', label: 'Bastão Mace' },
]

const acessoriosBalizaItems: AccessoriesShowcaseItem[] = [
  { id: 'bolas', label: 'Bolas' },
  { id: 'fitas', label: 'Fitas' },
  { id: 'maças', label: 'Maças' },
  { id: 'cordas', label: 'Cordas' },
  { id: 'bastao', label: 'Bastão' },
  { id: 'arco', label: 'Arco' },
]

const acessoriosPavilhaoItems: AccessoriesShowcaseItem[] = [
  { id: 'estandartes', label: 'Estandartes' },  
  { id: 'bandeiras', label: 'Bandeiras' },
  { id: 'talabarte', label: 'Talabartes' },
  { id: 'rosetas', label: 'Rosetas' },
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
        id="acessorios-baliza"
        title="Acessórios"
        highlight="Baliza"
        items={acessoriosBalizaItems}
        theme="light"
        contentSide="right"
        ariaLabel="Acessórios para Baliza"
        initialItemId="bolas"
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
        id="acessorios-pavilhao"
        eyebrow="Acessórios"
        title="Pavilhão e Pavilhão"
        highlight="Cívico"
        items={acessoriosPavilhaoItems}
        theme="light"
        contentSide="right"
        ariaLabel="Acessórios para Pavilhão e Pavilhão Cívico"
        initialItemId="bastao-mace"
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
