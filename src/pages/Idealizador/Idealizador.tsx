import IdealizadorIntroduction from '../../components/IdealizadorIntroduction/IdealizadorIntroduction'
import IdealizadorHeroSection from './sections/IdealizadorHeroSection/IdealizadorHeroSection'
import './Idealizador.css'

function Idealizador() {
  return (
    <div className="idealizador-page">
      <IdealizadorHeroSection />
      <IdealizadorIntroduction />
    </div>
  )
}

export default Idealizador
