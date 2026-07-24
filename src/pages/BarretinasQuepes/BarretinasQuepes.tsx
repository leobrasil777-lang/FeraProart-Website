import ItemCategorySection, { type ItemCategorySectionImage } from '../../components/ItemCategorySection'
import barretinaBrancaLisa from '../../assets/images/barretinas-e-quepes/barretinas/barretina-branca-lisa.png'
import barretinaAzulDourado from '../../assets/images/barretinas-e-quepes/barretinas/barretina-azul-dourado.png'
import barretinaPretaDourada from '../../assets/images/barretinas-e-quepes/barretinas/barretina-preta-dourada.png'
import barretinaPrata from '../../assets/images/barretinas-e-quepes/barretinas/barretina-prata.png'
import quepeMilitarAmarelo from '../../assets/images/barretinas-e-quepes/quepes militares/quepe-militar-amarelo.png'
import quepeMilitarAzul from '../../assets/images/barretinas-e-quepes/quepes militares/quepe-militar-azul.png'
import quepeMilitarAzul2 from '../../assets/images/barretinas-e-quepes/quepes militares/quepe-militar-azul2.png'
import quepeMilitarAzulMarinho from '../../assets/images/barretinas-e-quepes/quepes militares/quepe-militar-azulmarinho.png'
import quepeMilitarAzulMarinho2 from '../../assets/images/barretinas-e-quepes/quepes militares/quepe-militar-azulmarinho2.png'
import quepeMilitarAzulVermelho from '../../assets/images/barretinas-e-quepes/quepes militares/quepe-militar-azul-vermelho.png'
import quepeMilitarBrancoAzul from '../../assets/images/barretinas-e-quepes/quepes militares/quepe-militar-branco-azul.png'
import quepeMilitarDourado from '../../assets/images/barretinas-e-quepes/quepes militares/quepe-militar-dourado.png'
import quepeMilitarDourado2 from '../../assets/images/barretinas-e-quepes/quepes militares/quepe-militar-dourado2.png'
import quepeMilitarPretoVerde from '../../assets/images/barretinas-e-quepes/quepes militares/quepe-militar-preto-verde.png'
import quepeMilitarPretoVermelho from '../../assets/images/barretinas-e-quepes/quepes militares/quepe-militar-preto-vermelho.png'
import quepeMilitarPretoVermelho2 from '../../assets/images/barretinas-e-quepes/quepes militares/quepe-militar-preto-vermelho2.png'
import quepeMilitarVeludoAzul from '../../assets/images/barretinas-e-quepes/quepes militares/quepe-militar-veludo-azul.png'
import quepeMilitarVeludoAzul2 from '../../assets/images/barretinas-e-quepes/quepes militares/quepe-militar-veludo-azul2.png'
import quepeMilitarVeludoVermelho from '../../assets/images/barretinas-e-quepes/quepes militares/quepe-militar-veludo-vemelho.png'
import quepeMilitarVeludoVermelho2 from '../../assets/images/barretinas-e-quepes/quepes militares/quepe-militar-veludo-vemelho2.png'
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

const quepesMilitaresImages: ItemCategorySectionImage[] = [
  {
    src: quepeMilitarAmarelo,
    alt: 'Quepe militar amarelo com aba preta.',
  },
  {
    src: quepeMilitarAzul,
    alt: 'Quepe militar azul com aba preta.',
  },
  {
    src: quepeMilitarAzul2,
    alt: 'Quepe militar azul em vista alternativa.',
  },
  {
    src: quepeMilitarAzulMarinho,
    alt: 'Quepe militar azul-marinho com aba preta.',
  },
  {
    src: quepeMilitarAzulMarinho2,
    alt: 'Quepe militar azul-marinho em vista alternativa.',
  },
  {
    src: quepeMilitarAzulVermelho,
    alt: 'Quepe militar azul com detalhes vermelhos.',
  },
  {
    src: quepeMilitarBrancoAzul,
    alt: 'Quepe militar branco com detalhes azuis.',
  },
  {
    src: quepeMilitarDourado,
    alt: 'Quepe militar dourado com aba preta.',
  },
  {
    src: quepeMilitarDourado2,
    alt: 'Quepe militar dourado em vista alternativa.',
  },
  {
    src: quepeMilitarPretoVerde,
    alt: 'Quepe militar preto com detalhes verdes.',
  },
  {
    src: quepeMilitarPretoVermelho,
    alt: 'Quepe militar preto com detalhes vermelhos.',
  },
  {
    src: quepeMilitarPretoVermelho2,
    alt: 'Quepe militar preto com detalhes vermelhos em vista alternativa.',
  },
  {
    src: quepeMilitarVeludoAzul,
    alt: 'Quepe militar de veludo azul com aba preta.',
  },
  {
    src: quepeMilitarVeludoAzul2,
    alt: 'Quepe militar de veludo azul em vista alternativa.',
  },
  {
    src: quepeMilitarVeludoVermelho,
    alt: 'Quepe militar de veludo vermelho com aba preta.',
  },
  {
    src: quepeMilitarVeludoVermelho2,
    alt: 'Quepe militar de veludo vermelho em vista alternativa.',
  },
]

const conteudoTecnicoQuepesMilitares = (
  <p>Conteúdo técnico de quepes militares pendente de aprovação.</p>
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
      <ItemCategorySection
        id="quepes-militares"
        theme="dark"
        contentSide="right"
        title="Quepes"
        highlight="militares"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        images={quepesMilitaresImages}
        ctaLabel="Quero um orçamento"
        ctaHref="/licitacao"
        specificationsLabel="Ver especificações técnicas"
        specifications={conteudoTecnicoQuepesMilitares}
      />
    </>
  )
}

export default BarretinasQuepes
