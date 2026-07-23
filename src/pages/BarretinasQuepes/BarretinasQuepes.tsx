import ItemCategorySection, { type ItemCategorySectionImage } from '../../components/ItemCategorySection'
import barretinaBrancaLisa from '../../assets/images/barretinas-e-quepes/barretinas/barretina-branca-lisa.png'
import barretinaAzulDourado from '../../assets/images/barretinas-e-quepes/barretinas/barretina-azul-dourado.png'
import barretinaPretaDourada from '../../assets/images/barretinas-e-quepes/barretinas/barretina-preta-dourada.png'
import barretinaPrata from '../../assets/images/barretinas-e-quepes/barretinas/barretina-prata.png'
import BarretinasQuepesHeroSection from './sections/BarretinasQuepesHeroSection/BarretinasQuepesHeroSection'

const barretinasPadraoAmericanoImages: ItemCategorySectionImage[] = [
  {
    src: barretinaBrancaLisa,
    alt: 'Barretina padrão americano branca.',
  },
  {
    src: barretinaAzulDourado,
    alt: 'Barretina padrão americano azul com detalhes dourados.',
  },
  {
    src: barretinaPretaDourada,
    alt: 'Barretina padrão americano preta com detalhes dourados.',
  },
  {
    src: barretinaPrata,
    alt: 'Barretina padrão americano prateada.',
  },
]

const conteudoTecnicoBarretinasPadraoAmericano = (
  <p>Conteúdo técnico de barretinas padrão americano pendente de aprovação.</p>
)

function BarretinasQuepes() {
  return (
    <>
      <BarretinasQuepesHeroSection />
      <ItemCategorySection
        id="barretinas-padrao-americano"
        theme="light"
        contentSide="left"
        title="Barretinas padrão"
        highlight="americano"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        images={barretinasPadraoAmericanoImages}
        ctaLabel="Quero um orçamento"
        ctaHref="/licitacao"
        specificationsLabel="Ver especificações técnicas"
        specifications={conteudoTecnicoBarretinasPadraoAmericano}
      />
    </>
  )
}

export default BarretinasQuepes
