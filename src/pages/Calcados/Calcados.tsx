import ItemCategorySection, { type ItemCategorySectionImage } from '../../components/ItemCategorySection'
import CalcadosHeroSection from './sections/CalcadosHeroSection/CalcadosHeroSection'

const mocassinsImages: ItemCategorySectionImage[] = []

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
