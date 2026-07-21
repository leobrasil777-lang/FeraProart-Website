import LicitacaoHeroSection from './Licitacao/sections/LicitacaoHeroSection/LicitacaoHeroSection'
import LicitacaoProcessSection from './Licitacao/sections/LicitacaoProcessSection/LicitacaoProcessSection'
import LicitacaoAgilitySection from './Licitacao/sections/LicitacaoAgilitySection/LicitacaoAgilitySection'
import LicitacaoProcessComparisonSection from './Licitacao/sections/LicitacaoProcessComparisonSection/LicitacaoProcessComparisonSection'

function Licitacao() {
  return (
    <>
      <LicitacaoHeroSection />
      <LicitacaoProcessSection />
      <LicitacaoProcessComparisonSection />
      <LicitacaoAgilitySection />
    </>
  )
}

export default Licitacao
