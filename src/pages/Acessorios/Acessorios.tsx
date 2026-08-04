import airbladeAcessorios from '../../assets/images/acessorios/acessorios-airblade.png'
import bandeiraCorpoAcessorios from '../../assets/images/acessorios/acessorios-bandeira-corpo2.png'
import bandeiraLedAcessorios from '../../assets/images/acessorios/acessorios-bandeira-led.png'
import bastaoLedAcessorios from '../../assets/images/acessorios/acessorios-bastao-de-led.png'
import bastaoMaceAcessorios from '../../assets/images/acessorios/acessorios-bastao-mace.png'
import bastaoMaceAcessorios2 from '../../assets/images/acessorios/acessorios-bastao-mace2.jpg'
import bastaoMaceAcessorios3 from '../../assets/images/acessorios/acessorios-bastao-mace3.jpg'
import bastaoMaceAcessorios4 from '../../assets/images/acessorios/acessorios-bastao-mace4.jpg'
import bastaoMaceAcessorios5 from '../../assets/images/acessorios/acessorios-bastao-mace5.jpg'
import arcoAcessorios from '../../assets/images/acessorios/acessorios-arco.png'
import bastaoAcessorios from '../../assets/images/acessorios/acessorios-bastao.png'
import bolasAcessorios from '../../assets/images/acessorios/acessorios-bolas.png'
import cordasAcessorios from '../../assets/images/acessorios/acessorios-cordas.png'
import fitasAcessorios from '../../assets/images/acessorios/acessorios-fitas.png'
import macasAcessorios from '../../assets/images/acessorios/acessorios-macas.png'
import bandeirasAcessorios from '../../assets/images/acessorios/acessorios-bandeiras.png'
import rosetaAcessorios from '../../assets/images/acessorios/acessorios-roseta.png'
import talabarteAcessorios from '../../assets/images/acessorios/acessorios-talabarte.png'
import ctaAcessorios from '../../assets/images/acessorios/cta-acessorios.png'
import estandarte1 from '../../assets/images/acessorios/estandarte1.png'
import estandarte2 from '../../assets/images/acessorios/estandarte2.png'
import estandarte3 from '../../assets/images/acessorios/estandarte3.png'
import estandarte4 from '../../assets/images/acessorios/estandarte4.png'
import estandarte5 from '../../assets/images/acessorios/estandarte5.png'
import estandarte6 from '../../assets/images/acessorios/estandarte6.png'
import estandarte7 from '../../assets/images/acessorios/estandarte7.png'
import estandarte8 from '../../assets/images/acessorios/estandarte8.png'
import estandarte9 from '../../assets/images/acessorios/estandarte9.png'
import estandarte10 from '../../assets/images/acessorios/estandarte10.png'
import estandarte11 from '../../assets/images/acessorios/estandarte11.png'
import AccessoriesShowcaseSection, {
  type AccessoriesShowcaseItem,
} from '../../components/AccessoriesShowcaseSection'
import FinalItemCTA from '../../components/FinalItemCTA'
import AcessoriosHeroSection from './sections/AcessoriosHeroSection'

const corpoCoreograficoItems: AccessoriesShowcaseItem[] = [
  {
    id: 'airblades', label: 'Airblades',
    images: [{ src: airbladeAcessorios, alt: 'Airblade branco para apresentações de corpo coreográfico.' }],
  },
  {
    id: 'bastao-led', label: 'Bastão de LED',
    images: [{ src: bastaoLedAcessorios, alt: 'Bastão de LED para apresentações.' }],
  },
  {
    id: 'bandeira-led', label: 'Bandeira de LED',
    images: [{ src: bandeiraLedAcessorios, alt: 'Bandeira com iluminação de LED.' }],
  },
  {
    id: 'bandeiras-corpo-coreografico',
    label: 'Bandeiras para Corpo Coreográfico',
    images: [{ src: bandeiraCorpoAcessorios, alt: 'Bandeira para apresentações de corpo coreográfico.' }],
  },
]

const comandanteMorItems: AccessoriesShowcaseItem[] = [
  {
    id: 'bastao-mace', label: 'Bastão Mace',
    images: [
      { src: bastaoMaceAcessorios, alt: 'Bastão Mace em vista completa.' },
      { src: bastaoMaceAcessorios2, alt: 'Detalhe superior do Bastão Mace.' },
      { src: bastaoMaceAcessorios3, alt: 'Detalhe lateral do Bastão Mace.' },
      { src: bastaoMaceAcessorios4, alt: 'Detalhe do acabamento do Bastão Mace.' },
      { src: bastaoMaceAcessorios5, alt: 'Bastão Mace em outro ângulo.' },
    ],
  },
]

const acessoriosBalizaItems: AccessoriesShowcaseItem[] = [
  { id: 'bolas', label: 'Bolas', images: [{ src: bolasAcessorios, alt: 'Conjunto de bolas para apresentações de baliza.' }] },
  { id: 'fitas', label: 'Fitas', images: [{ src: fitasAcessorios, alt: 'Conjunto de fitas para apresentações de baliza.' }] },
  { id: 'maças', label: 'Maças', images: [{ src: macasAcessorios, alt: 'Conjunto de maças para apresentações de baliza.' }] },
  { id: 'cordas', label: 'Cordas', images: [{ src: cordasAcessorios, alt: 'Conjunto de cordas para apresentações de baliza.' }] },
  { id: 'bastao', label: 'Bastão', images: [{ src: bastaoAcessorios, alt: 'Bastão para apresentações.' }] },
  { id: 'arco', label: 'Arco', images: [{ src: arcoAcessorios, alt: 'Arco para apresentações.' }] },
]

const acessoriosPavilhaoItems: AccessoriesShowcaseItem[] = [
  {
    id: 'estandartes', label: 'Estandartes',
    images: [
      { src: estandarte1, alt: 'Estandarte institucional, modelo 1.' },
      { src: estandarte2, alt: 'Estandarte institucional, modelo 2.' },
      { src: estandarte3, alt: 'Estandarte institucional, modelo 3.' },
      { src: estandarte4, alt: 'Estandarte institucional, modelo 4.' },
      { src: estandarte5, alt: 'Estandarte institucional, modelo 5.' },
      { src: estandarte6, alt: 'Estandarte institucional, modelo 6.' },
      { src: estandarte7, alt: 'Estandarte institucional, modelo 7.' },
      { src: estandarte8, alt: 'Estandarte institucional, modelo 8.' },
      { src: estandarte9, alt: 'Estandarte institucional, modelo 9.' },
      { src: estandarte10, alt: 'Estandarte institucional, modelo 10.' },
      { src: estandarte11, alt: 'Estandarte institucional, modelo 11.' },
    ],
  },
  { id: 'bandeiras', label: 'Bandeiras', images: [{ src: bandeirasAcessorios, alt: 'Bandeira do Brasil para uso institucional.' }] },
  { id: 'talabarte', label: 'Talabartes', images: [{ src: talabarteAcessorios, alt: 'Talabarte institucional.' }] },
  { id: 'rosetas', label: 'Rosetas', images: [{ src: rosetaAcessorios, alt: 'Roseta institucional.' }] },
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
        initialItemId="estandartes"
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
