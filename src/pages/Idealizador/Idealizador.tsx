import IdealizadorIntroduction from '../../components/IdealizadorIntroduction/IdealizadorIntroduction'
import IdealizadorHeroSection from './sections/IdealizadorHeroSection/IdealizadorHeroSection'
import IdealizadorTimelineSection from './sections/IdealizadorTimelineSection/IdealizadorTimelineSection'
import './Idealizador.css'

function Idealizador() {
  return (
    <div className="idealizador-page">
      <IdealizadorHeroSection />
      <IdealizadorIntroduction />
      <IdealizadorTimelineSection />
    </div>
  )
}

export default Idealizador
