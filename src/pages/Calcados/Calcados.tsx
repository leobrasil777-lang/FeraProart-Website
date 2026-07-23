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
import botaCanoLongoPreta from '../../assets/images/calcados/bota-canolongo-preta.png'
import botaCanoLongoBranca from '../../assets/images/calcados/bota-canolongo-branca.png'
import botaCanoLongoPreta2 from '../../assets/images/calcados/bota-canolongo-preta2.png'
import botaCanoLongoBranca2 from '../../assets/images/calcados/bota-canolongo-branca2.png'
import botaCanoLongoPreta3 from '../../assets/images/calcados/bota-canolongo-preta3.png'
import botaCanoLongoBranca3 from '../../assets/images/calcados/bota-canolongo-branca3.png'
import botaCanoLongoPreta4 from '../../assets/images/calcados/bota-canolongo-preta4.png'

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

const botasCanoLongoImages: ItemCategorySectionImage[] = [
  {
    src: botaCanoLongoPreta,
    alt: 'Par de botas pretas de cano longo em couro ecológico.',
  },
  {
    src: botaCanoLongoBranca,
    alt: 'Par de botas brancas de cano longo em couro ecológico.',
  },
  {
    src: botaCanoLongoPreta2,
    alt: 'Par de botas pretas de cano longo com zíper lateral.',
  },
  {
    src: botaCanoLongoBranca2,
    alt: 'Par de botas brancas de cano longo com zíper lateral.',
  },
  {
    src: botaCanoLongoPreta3,
    alt: 'Par de botas pretas de cano longo com solado antiderrapante.',
  },
  {
    src: botaCanoLongoBranca3,
    alt: 'Par de botas brancas de cano longo com solado antiderrapante.',
  },
  {
    src: botaCanoLongoPreta4,
    alt: 'Par de botas pretas de cano longo modelo clássico.',
  },
]

const conteudoTecnicoBotasCanoCurto = (
  <p>Conteúdo técnico de botas de cano curto pendente de aprovação.</p>
)

const conteudoTecnicoBotasCanoLongo = (
  <p>
    Bota com cano alto em cor a escolher, confeccionada em couro ecológico,
    totalmente forrada internamente, modelo clássico, com salto rebaixado na
    parte traseira específico para marcha (atenuação de impacto ao marchar),
    zíper lateral que vai do solado até o final do cabedal, solado injetado em
    TR microporoso antiderrapante, palmilha com tratamento bactericida.
    Tamanhos: do 54 ao 62. Bag para transport
  </p>
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
      <ItemCategorySection
        id="botas-cano-longo"
        theme="dark"
        contentSide="right"
        title="Botas"
        highlight="cano longo"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
        images={botasCanoLongoImages}
        ctaLabel="Quero um orçamento"
        ctaHref="/licitacao"
        specificationsLabel="Ver especificações técnicas"
        specifications={conteudoTecnicoBotasCanoLongo}
      />
    </>
  )
}

export default Calcados
