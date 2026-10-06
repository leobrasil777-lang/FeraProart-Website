import FinalItemCTA from '../../components/FinalItemCTA'
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
import sapatilhaBaliza from '../../assets/images/calcados/sapatilha-baliza.png'
import sapatilhaBipartida from '../../assets/images/calcados/sapatilha-bipartida.png'
import botilhaBranca from '../../assets/images/calcados/botilha-branca.png'
import botilhaBranca2 from '../../assets/images/calcados/botilha-branca2.png'
import botaCanoLongoPreta from '../../assets/images/calcados/bota-canolongo-preta.png'
import botaCanoLongoBranca from '../../assets/images/calcados/bota-canolongo-branca.png'
import botaCanoLongoPreta2 from '../../assets/images/calcados/bota-canolongo-preta2.png'
import botaCanoLongoBranca2 from '../../assets/images/calcados/bota-canolongo-branca2.png'
import botaCanoLongoPreta3 from '../../assets/images/calcados/bota-canolongo-preta3.png'
import botaCanoLongoBranca3 from '../../assets/images/calcados/bota-canolongo-branca3.png'
import botaCanoLongoPreta4 from '../../assets/images/calcados/bota-canolongo-preta4.png'
import botaCanoCurtoPreta3 from '../../assets/images/calcados/bota-canocurto-preto3.png'
import botaCanoCurtoPreta4 from '../../assets/images/calcados/bota-canocurto-preto4.png'
import botaCanoCurtoPreta5 from '../../assets/images/calcados/bota-canocurto-preto5.png'
import botaCanoCurtoBranca2 from '../../assets/images/calcados/bota-canocurto-branca2.png'
import ctaCalcados from '../../assets/images/calcados/cta-calcados.png'

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
  {  
    src: botaCanoCurtoBranca2,
    alt: 'Par de botas brancas de cano curto sem cadarço.',
  },
  {
      src: botaCanoCurtoPreta3,
    alt: 'Par de botas pretas de cano curto sem cadarço.',
   },
  {
    src: botaCanoCurtoPreta4,
    alt: 'Par de botas pretas de cano curto sem cadarço.',
  },
  {
    src: botaCanoCurtoPreta5,
    alt: 'Par de botas pretas de cano curto sem cadarço.',
  },
]

const calcadosBalizaImages: ItemCategorySectionImage[] = [
  {
    src: sapatilhaBaliza,
    alt: 'Par de sapatilhas pretas para baliza sem cadarço.',
  },
  {
    src: sapatilhaBipartida,
    alt: 'Par de sapatilhas pretas para baliza visto pelo solado marrom, sem cadarço.',
  },
  {
    src: botilhaBranca,
    alt: 'Par de botilhas brancas para baliza com cadarço e zíper lateral.',
  },
  {
    src: botilhaBranca2,
    alt: 'Par de botilhas brancas para baliza com cadarço, visto de frente.',
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
  <p>Bota em cor a ser definida, com zíper lateral, cano curto, totalmente forrada internamente, modelo clássico, em couro ecológico, com salto rebaixado na parte traseira específico para marcha (atenuação de impacto ao marchar), solado injetado em TR microporoso antiderrapante, palmilha com tratamento bactericida. Tamanhos: do 33 ao 48. Bag para transporte.</p>
)

const conteudoTecnicoCalcadosBaliza = (
  <p>Sapatilha de jazz, cano longo, confeccionada em couro ecológico na cor preta, solado bipartido e bag para transporte.</p>
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
        description="Modelo clássico, confortável e discreto. Uma opção resistente para cerimônias, apresentações e atividades institucionais."
        images={mocassinsImages}
        ctaLabel="Quero um orçamento"
        ctaHref="/licitacao"
        whatsappMessage="Olá, vim pela página de Calçados da Fera Proart e gostaria de solicitar um orçamento para mocassins."
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
        description="Conforto, firmeza e facilidade de movimento. Produzidas para o uso frequente, com acabamento que mantém o padrão do uniforme."
        images={botasCanoCurtoImages}
        ctaLabel="Quero um orçamento"
        ctaHref="/licitacao"
        whatsappMessage="Olá, vim pela página de Calçados da Fera Proart e gostaria de solicitar um orçamento para botas de cano curto."
        specificationsLabel="Ver especificações técnicas"
        specifications={conteudoTecnicoBotasCanoCurto}
      />
      <ItemCategorySection
        id="botas-cano-longo"
        theme="dark"
        contentSide="right"
        title="Botas"
        highlight="cano longo"
        description="Modelo tradicional, estrutura firme e presença visual. Indicado para desfiles e apresentações que exigem elegância e padronização."
        images={botasCanoLongoImages}
        ctaLabel="Quero um orçamento"
        ctaHref="/licitacao"
        whatsappMessage="Olá, vim pela página de Calçados da Fera Proart e gostaria de solicitar um orçamento para botas de cano longo."
        specificationsLabel="Ver especificações técnicas"
        specifications={conteudoTecnicoBotasCanoLongo}
      />
      <ItemCategorySection
        id="calcados-baliza"
        theme="light"
        contentSide="left"
        title="Calçados"
        highlight="Baliza"
        description="Sapatilhas bipartidas e botilhas desenvolvidas para acompanhar os movimentos da baliza. Leves, firmes e resistentes para ensaios e apresentações."
        images={calcadosBalizaImages}
        ctaLabel="Quero um orçamento"
        ctaHref="/licitacao"
        whatsappMessage="Olá, vim pela página de Calçados da Fera Proart e gostaria de solicitar um orçamento para calçados de baliza."
        specificationsLabel="Ver especificações técnicas"
        specifications={conteudoTecnicoCalcadosBaliza}
      />
      <FinalItemCTA
        id="cta-final-calcados"
        image={ctaCalcados}
        imageAlt="Calçados apresentados sobre fundo cinza."
        hideImageOnMobile
        title="Confie na"
        highlight="tradição"
        description="Conte com quem entende de uniformes, acessórios e soluções personalizadas para bandas, fanfarras e instituições."
        ctaLabel="Quero um orçamento"
        ctaHref="/licitacao"
        whatsappMessage="Olá, vim pela página de Calçados da Fera Proart e gostaria de solicitar um orçamento."
        />
    </>
  )
}

export default Calcados
