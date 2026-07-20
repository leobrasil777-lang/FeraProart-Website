import IdealizadorOriginSection from './sections/IdealizadorOriginSection/IdealizadorOriginSection'
import IdealizadorHeroSection from './sections/IdealizadorHeroSection/IdealizadorHeroSection'
import IdealizadorCorporationsSection from './sections/IdealizadorCorporationsSection/IdealizadorCorporationsSection'
import IdealizadorTimelineSection from './sections/IdealizadorTimelineSection/IdealizadorTimelineSection'
import './Idealizador.css'

function Idealizador() {
  return (
    <div className="idealizador-page">
      <IdealizadorHeroSection />
      <IdealizadorOriginSection />
      <IdealizadorTimelineSection />
      <IdealizadorCorporationsSection />
    </div>
  )
}

export default Idealizador
