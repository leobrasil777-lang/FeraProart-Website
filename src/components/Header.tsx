import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import CTAButton from './CTAButton/CTAButton'
import logoFeraProart from '../assets/images/logo-feraproart.png'
import './Header.css'

const navigation = [
  { label: 'Home', to: '/' },
  { label: 'Licitação', to: '/licitacao' },
  { label: 'Sobre', to: '/idealizador' },
  { label: 'Itens', to: '/uniformes' },
]

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="site-header">
      <nav className="site-header__nav" data-open={isMenuOpen} aria-label="Navegação principal">
        <NavLink
        className="site-header__logo"
        to="/"
        end
        onClick={() => setIsMenuOpen(false)}
        aria-label="Fera Proart - Home"
      >
        <img
          src={logoFeraProart}
          alt="Fera Proart"
          className="site-header__logo-image"
        />
      </NavLink>
        <div className="site-header__links">
          {navigation.map(({ label, to }) => (
            <NavLink key={to} to={to} end={to === '/'} onClick={() => setIsMenuOpen(false)}>
              {label}
            </NavLink>
          ))}
        </div>
        <div className="site-header__actions">
          <CTAButton href="/uniformes" variant="outline" className="site-header__catalog">Catálogo</CTAButton>
          <CTAButton href="/licitacao" className="site-header__quote">Solicitar Orçamento</CTAButton>
        </div>
        <button
          className="site-header__menu-button"
          type="button"
          aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((value) => !value)}
        >
          ☰
        </button>
      </nav>
    </header>
  )
}

export default Header
