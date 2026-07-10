import { Route, Routes } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Acessorios from './pages/Acessorios'
import BarretinasQuepes from './pages/BarretinasQuepes'
import Calcados from './pages/Calcados'
import Home from './pages/Home'
import Idealizador from './pages/Idealizador'
import Licitacao from './pages/Licitacao'
import Uniformes from './pages/Uniformes'

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="idealizador" element={<Idealizador />} />
        <Route path="uniformes" element={<Uniformes />} />
        <Route path="calcados" element={<Calcados />} />
        <Route path="acessorios" element={<Acessorios />} />
        <Route path="barretinas-e-quepes" element={<BarretinasQuepes />} />
        <Route path="licitacao" element={<Licitacao />} />
      </Route>
    </Routes>
  )
}

export default App
