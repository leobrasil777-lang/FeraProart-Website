import ItemCategorySection, { type ItemCategorySectionImage } from '../../components/ItemCategorySection'
import CalcadosHeroSection from './sections/CalcadosHeroSection/CalcadosHeroSection'
import mocassinoBranco from '../../assets/images/calcados/mocassino-branco.png'
import mocassinoVermelho from '../../assets/images/calcados/mocassino-vermelho.png'
import mocassinoClassico from '../../assets/images/calcados/mocassino-classico.png'
import mocassinoBrilhante from '../../assets/images/calcados/mocassino-brilhante.png'
import mocassinoComCadarco from '../../assets/images/calcados/mocassino-com-cadarco.png'

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
        specifications={<p> Sapato Mocassim em cor a definir totalmente forrada internamente, modelo clássico, em couro ecológico, com salto rebaixado na parte traseira específico para marcha (atenuação de impacto ao marchar), solado injetado em TR microporoso antiderrapante, palmilha com tratamento bactericida. Tamanhos: do 33 ao 48. Bag para transporte.</p>}
      />
    </>
  )
}

export default Calcados
