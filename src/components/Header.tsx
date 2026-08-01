import { useEffect, useRef, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import CTAButton from './CTAButton/CTAButton'
import logoFeraProart from '../assets/images/logo-feraproart.png'
import './Header.css'

const navigation = [
  { label: 'Home', to: '/' },
  { label: 'Licitação', to: '/licitacao' },
  { label: 'Sobre', to: '/idealizador' },
]

const itemNavigation = [
  { label: 'Acessórios', to: '/acessorios' },
  { label: 'Uniformes', to: '/uniformes' },
  { label: 'Calçados', to: '/calcados' },
  { label: 'Quepes e Barretinas', to: '/barretinas-e-quepes' },
]

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isItemsOpen, setIsItemsOpen] = useState(false)
  const headerRef = useRef<HTMLElement>(null)
  const itemsButtonRef = useRef<HTMLButtonElement>(null)
  const location = useLocation()
  const isItemPage = itemNavigation.some(({ to }) => to === location.pathname)

  const closeMenus = () => {
    setIsItemsOpen(false)
    setIsMenuOpen(false)
  }

  useEffect(() => {
    const closeOnOutsideClick = (event: PointerEvent) => {
      if (!headerRef.current?.contains(event.target as Node)) closeMenus()
    }

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') return
      setIsItemsOpen(false)
      itemsButtonRef.current?.focus()
    }

    document.addEventListener('pointerdown', closeOnOutsideClick)
    document.addEventListener('keydown', closeOnEscape)

    return () => {
      document.removeEventListener('pointerdown', closeOnOutsideClick)
      document.removeEventListener('keydown', closeOnEscape)
    }
  }, [])

  return (
    <header className="site-header" ref={headerRef}>
      <nav className="site-header__nav" data-open={isMenuOpen} aria-label="Navegação principal">
        <NavLink
          className="site-header__logo"
          to="/"
          end
          onClick={closeMenus}
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
            <NavLink key={to} to={to} end={to === '/'} onClick={closeMenus}>
              {label}
            </NavLink>
          ))}
          <div
            className="site-header__items"
            data-open={isItemsOpen}
            onMouseEnter={() => setIsItemsOpen(true)}
            onMouseLeave={() => setIsItemsOpen(false)}
          >
            <button
              ref={itemsButtonRef}
              className="site-header__items-trigger"
              data-active={isItemPage}
              type="button"
              aria-expanded={isItemsOpen}
              aria-haspopup="menu"
              aria-controls="items-dropdown"
              onClick={() => setIsItemsOpen((value) => !value)}
              onFocus={() => setIsItemsOpen(true)}
            >
              Itens
              <span className="site-header__items-arrow" aria-hidden="true" />
            </button>
            <div
              className="site-header__dropdown"
              id="items-dropdown"
              role="menu"
              aria-hidden={!isItemsOpen}
            >
              {itemNavigation.map(({ label, to }) => (
                <NavLink key={to} to={to} role="menuitem" onClick={closeMenus}>
                  {label}
                </NavLink>
              ))}
            </div>
          </div>
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
          onClick={() => {
            setIsMenuOpen((value) => !value)
            setIsItemsOpen(false)
          }}
        >
          ☰
        </button>
      </nav>
    </header>
  )
}

export default Header
