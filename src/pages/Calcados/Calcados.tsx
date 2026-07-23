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
        specifications={<p>Conteúdo técnico de mocassins pendente de aprovação.</p>}
      />
    </>
  )
}

export default Calcados
