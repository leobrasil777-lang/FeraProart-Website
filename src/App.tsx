import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import SEOManager from './components/SEOManager'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'

const Acessorios = lazy(() => import('./pages/Acessorios'))
const BarretinasQuepes = lazy(() => import('./pages/BarretinasQuepes'))
const Calcados = lazy(() => import('./pages/Calcados'))
const Idealizador = lazy(() => import('./pages/Idealizador'))
const Licitacao = lazy(() => import('./pages/Licitacao'))
const NotFound = lazy(() => import('./pages/NotFound/NotFound'))
const Uniformes = lazy(() => import('./pages/Uniformes'))

function App() {
  return (
    <>
      <SEOManager />

      <Suspense fallback={null}>
        <Routes>
          <Route element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="idealizador" element={<Idealizador />} />
            <Route path="uniformes" element={<Uniformes />} />
            <Route path="calcados" element={<Calcados />} />
            <Route path="acessorios" element={<Acessorios />} />
            <Route
              path="barretinas-e-quepes"
              element={<BarretinasQuepes />}
            />
            <Route path="licitacao" element={<Licitacao />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
  )
}

export default App