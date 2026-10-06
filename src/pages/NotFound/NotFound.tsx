import { Link } from 'react-router-dom'
import logoFeraProart from '../../assets/images/logo-feraproart.png'
import './NotFound.css'

function NotFound() {
  return (
    <main className="not-found-page">
      <div className="not-found-page__content">
        <img
          className="not-found-page__logo"
          src={logoFeraProart}
          alt="Fera Proart"
        />

        <h1 className="not-found-page__title">oops!</h1>

        <p className="not-found-page__status">
          404 - PÁGINA NÃO ENCONTRADA
        </p>

        <p className="not-found-page__description">
          A página que você está procurando pode ter sido
          <br className="not-found-page__description-break" /> movida,
          removida ou está temporariamente indisponível.
        </p>

        <Link className="not-found-page__link" to="/">
          <span>VOLTAR PARA O INÍCIO</span>
          <span className="not-found-page__arrow" aria-hidden="true">
            →
          </span>
        </Link>
      </div>
    </main>
  )
}

export default NotFound
