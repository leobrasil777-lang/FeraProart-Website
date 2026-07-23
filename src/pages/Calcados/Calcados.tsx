import ItemCategorySection, { type ItemCategorySectionImage } from '../../components/ItemCategorySection'
import CalcadosHeroSection from './sections/CalcadosHeroSection/CalcadosHeroSection'
import mocassinoBranco from '../../assets/images/calcados/mocassino-branco.png'
import mocassinoVermelho from '../../assets/images/calcados/mocassino-vermelho.png'
import mocassinoClassico from '../../assets/images/calcados/mocassino-classico.png'
import mocassinoBrilhante from '../../assets/images/calcados/mocassino-brilhante.png'
import mocassinoComCadarco from '../../assets/images/calcados/mocassino-com-cadarco.png'
import botaCanoCurtoPretaSemCadarco from '../../assets/images/calcados/bota-canocurto-preta2.png'
import botaCanoCurtoPreta from '../../assets/images/calcados/bota-canocurto-preta.png'
import botaCanoCurtoBranca from '../../assets/images/calcados/bota-canocurto-branca.png'

const mocassinsImages: ItemCategorySectionImage[] = [
  {
    src: mocassinoBranco,
    alt: 'Par de mocassins brancos com interior preto.',
  },
  {
    src: mocassinoVermelho,
    alt: 'Par de mocassins pretos com detalhes vermelhos.',
  },
  {
    src: mocassinoClassico,
    alt: 'Par de mocassins pretos clássicos.',
  },
  {
    src: mocassinoBrilhante,
    alt: 'Par de mocassins pretos com acabamento brilhante.',
  },
  {
    src: mocassinoComCadarco,
    alt: 'Par de mocassins pretos com cadarço.',
  },
]

const botasCanoCurtoImages: ItemCategorySectionImage[] = [
  {
    src: botaCanoCurtoPretaSemCadarco,
    alt: 'Par de calçados pretos de cano curto sem cadarço.',
  },
  {
    src: botaCanoCurtoPreta,
    alt: 'Par de botas pretas de cano curto com cadarço.',
  },
  {
    src: botaCanoCurtoBranca,
    alt: 'Par de botas brancas de cano curto com cadarço.',
  },
]

const conteudoTecnicoBotasCanoCurto = (
  <p>Conteúdo técnico de botas de cano curto pendente de aprovação.</p>
)

function Calcados() {
  return (
    <>
      <CalcadosHeroSection />
      <ItemCategorySection
        id="calcados-mocassins"
        theme="dark"
        contentSide="right"
        title="Calçados"
        highlight="mocassins"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        images={mocassinsImages}
        ctaLabel="Quero um orçamento"
        ctaHref="/licitacao"
        specificationsLabel="Ver especificações técnicas"
        specifications={
          <p>
            Sapato Mocassim em cor a definir, totalmente forrado internamente,
            modelo clássico, em couro ecológico, com salto rebaixado na parte
            traseira específico para marcha, com atenuação de impacto ao marchar,
            solado injetado em TR microporoso antiderrapante, palmilha com
            tratamento bactericida. Tamanhos: do 33 ao 48. Bag para transporte.
          </p>
        }
      />
      <ItemCategorySection
        id="botas-cano-curto"
        theme="light"
        contentSide="left"
        title="Botas"
        highlight="cano curto"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        images={botasCanoCurtoImages}
        ctaLabel="Quero um orçamento"
        ctaHref="/licitacao"
        specificationsLabel="Ver especificações técnicas"
        specifications={conteudoTecnicoBotasCanoCurto}
      />
    </>
  )
}

export default Calcados
