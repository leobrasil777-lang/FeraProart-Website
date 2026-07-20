import IdealizadorOriginSection from './sections/IdealizadorOriginSection/IdealizadorOriginSection'
import IdealizadorHeroSection from './sections/IdealizadorHeroSection/IdealizadorHeroSection'
import IdealizadorCorporationsSection from './sections/IdealizadorCorporationsSection/IdealizadorCorporationsSection'
import IdealizadorTimelineSection from './sections/IdealizadorTimelineSection/IdealizadorTimelineSection'
import IdealizadorMaestroQuoteSection from './sections/IdealizadorMaestroQuoteSection/IdealizadorMaestroQuoteSection'
import IdealizadorInnovationsSection from './sections/IdealizadorInnovationsSection/IdealizadorInnovationsSection'
import './Idealizador.css'

function Idealizador() {
  return (
    <div className="idealizador-page">
      <IdealizadorHeroSection />
      <IdealizadorMaestroQuoteSection />
      <IdealizadorTimelineSection />
      <IdealizadorCorporationsSection />
      <IdealizadorOriginSection />
      <IdealizadorInnovationsSection />
    </div>
  )
}

export default Idealizador
