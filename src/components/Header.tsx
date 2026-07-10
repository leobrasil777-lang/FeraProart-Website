import { NavLink } from 'react-router-dom'

const navigation = [
  { label: 'Home', to: '/' },
  { label: 'Idealizador', to: '/idealizador' },
  { label: 'Uniformes', to: '/uniformes' },
  { label: 'Calçados', to: '/calcados' },
  { label: 'Acessórios', to: '/acessorios' },
  { label: 'Barretinas e Quepes', to: '/barretinas-e-quepes' },
  { label: 'Licitação', to: '/licitacao' },
]

function Header() {
  return (
    <header>
      <nav aria-label="Navegação principal">
        {navigation.map(({ label, to }) => (
          <NavLink key={to} to={to} end={to === '/'}>
            {label}
          </NavLink>
        ))}
      </nav>
    </header>
  )
}

export default Header
