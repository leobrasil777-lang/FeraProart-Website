import LicitacaoHeroSection from './sections/LicitacaoHeroSection/LicitacaoHeroSection'
import LicitacaoProcessSection from './sections/LicitacaoProcessSection/LicitacaoProcessSection'
import LicitacaoAgilitySection from './sections/LicitacaoAgilitySection/LicitacaoAgilitySection'
import LicitacaoContactSection from './sections/LicitacaoContactSection/LicitacaoContactSection'
import LicitacaoProcessComparisonSection from './sections/LicitacaoProcessComparisonSection/LicitacaoProcessComparisonSection'

function Licitacao() {
  return (
    <>
      <LicitacaoHeroSection />
      <LicitacaoProcessSection />
      <LicitacaoAgilitySection />
      <LicitacaoProcessComparisonSection />
      <LicitacaoContactSection />
    </>
  )
}

export default Licitacao
