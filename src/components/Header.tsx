import { useEffect, useRef, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import CTAButton from './CTAButton/CTAButton'
import logoFeraProart from '../assets/images/logo-feraproart.png'
import { CATALOG_WHATSAPP_MESSAGE } from '../utils/whatsapp'
import './Header.css'

const navigation = [
  { label: 'Home', to: '/', group: 'primary', desktopOrder: 1, mobileOrder: 1 },
  { label: 'Licitação', to: '/licitacao', group: 'primary', desktopOrder: 2, mobileOrder: 2 },
  { label: 'Sobre', to: '/idealizador', group: 'primary', desktopOrder: 3, mobileOrder: 3 },
  { label: 'Acessórios', to: '/acessorios', group: 'items', desktopOrder: 1, mobileOrder: 5 },
  { label: 'Uniformes', to: '/uniformes', group: 'items', desktopOrder: 2, mobileOrder: 4 },
  { label: 'Calçados', to: '/calcados', group: 'items', desktopOrder: 3, mobileOrder: 7 },
  {
    label: 'Quepes e Barretinas',
    mobileLabel: 'Quépes e Barretinas',
    to: '/barretinas-e-quepes',
    group: 'items',
    desktopOrder: 4,
    mobileOrder: 6,
  },
]

const primaryNavigation = navigation
  .filter(({ group }) => group === 'primary')
  .sort((first, second) => first.desktopOrder - second.desktopOrder)

const itemNavigation = navigation
  .filter(({ group }) => group === 'items')
  .sort((first, second) => first.desktopOrder - second.desktopOrder)

const mobileNavigation = [...navigation].sort(
  (first, second) => first.mobileOrder - second.mobileOrder,
)

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isItemsOpen, setIsItemsOpen] = useState(false)
  const headerRef = useRef<HTMLElement>(null)
  const itemsButtonRef = useRef<HTMLButtonElement>(null)
  const menuButtonRef = useRef<HTMLButtonElement>(null)
  const suppressItemsFocusOpenRef = useRef(false)
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

      if (isMenuOpen) {
        closeMenus()
        requestAnimationFrame(() => menuButtonRef.current?.focus())
        return
      }

      if (!isItemsOpen) return

      suppressItemsFocusOpenRef.current = true
      setIsItemsOpen(false)
      requestAnimationFrame(() => {
        itemsButtonRef.current?.focus()
        suppressItemsFocusOpenRef.current = false
      })
    }

    document.addEventListener('pointerdown', closeOnOutsideClick)
    document.addEventListener('keydown', closeOnEscape)

    return () => {
      document.removeEventListener('pointerdown', closeOnOutsideClick)
      document.removeEventListener('keydown', closeOnEscape)
    }
  }, [isItemsOpen, isMenuOpen])

  useEffect(() => {
    closeMenus()
  }, [location.pathname])

  useEffect(() => {
    if (!isMenuOpen) return

    const previousOverflow = document.body.style.overflow
    const previousPaddingRight = document.body.style.paddingRight
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth

    document.body.style.overflow = 'hidden'
    if (scrollbarWidth > 0) document.body.style.paddingRight = `${scrollbarWidth}px`

    return () => {
      document.body.style.overflow = previousOverflow
      document.body.style.paddingRight = previousPaddingRight
    }
  }, [isMenuOpen])

  useEffect(() => {
    const desktopQuery = window.matchMedia('(min-width: 68.0625rem)')
    const closeOnDesktop = (event: MediaQueryListEvent) => {
      if (event.matches) closeMenus()
    }

    desktopQuery.addEventListener('change', closeOnDesktop)
    return () => desktopQuery.removeEventListener('change', closeOnDesktop)
  }, [])

  return (
    <header className="site-header" ref={headerRef}>
      <nav className="site-header__nav" data-open={isMenuOpen} aria-label="Navegação principal">
        <div className="site-header__topbar">
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

          <button
            ref={menuButtonRef}
            className="site-header__menu-button"
            type="button"
            aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() => {
              setIsMenuOpen((value) => !value)
              setIsItemsOpen(false)
            }}
          >
            <span className="site-header__menu-icon" aria-hidden="true">
              {isMenuOpen ? '×' : '☰'}
            </span>
          </button>
        </div>

        <div className="site-header__links">
          {primaryNavigation.map(({ label, to }) => (
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
              onFocus={() => {
                if (!suppressItemsFocusOpenRef.current) setIsItemsOpen(true)
              }}
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
          <CTAButton whatsappMessage={CATALOG_WHATSAPP_MESSAGE} variant="outline" className="site-header__catalog">Catálogo</CTAButton>
          <CTAButton className="site-header__quote" whatsappMessage="Olá, vim pelo site da Fera Proart e gostaria de solicitar um orçamento.">Solicitar Orçamento</CTAButton>
        </div>

        <div
          className="site-header__mobile-menu"
          id="mobile-navigation"
          aria-hidden={!isMenuOpen}
        >
          <div className="site-header__mobile-links">
            {mobileNavigation.map(({ label, mobileLabel, to }) => (
              <NavLink
                key={to}
                className={({ isActive }) =>
                  `site-header__mobile-link${isActive ? ' is-active' : ''}`
                }
                to={to}
                end={to === '/'}
                onClick={closeMenus}
              >
                {mobileLabel ?? label}
              </NavLink>
            ))}
          </div>

          <div className="site-header__mobile-actions" onClick={closeMenus}>
            <CTAButton whatsappMessage={CATALOG_WHATSAPP_MESSAGE} variant="outline" className="site-header__catalog">
              Catálogo
            </CTAButton>
            <CTAButton
              className="site-header__quote"
              whatsappMessage="Olá, vim pelo site da Fera Proart e gostaria de solicitar um orçamento."
            >
              Solicitar Orçamento
            </CTAButton>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
