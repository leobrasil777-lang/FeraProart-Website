import { Link } from 'react-router-dom'
import whatsappIcon from '../../assets/icons/home/whatsapp.svg'
import instagramIcon from '../../assets/icons/footer/logo-instagram.svg'
import facebookIcon from '../../assets/icons/footer/logo-facebook.svg'
import footerLogo from '../../assets/images/logo-rodape.png'
import { CATALOG_WHATSAPP_MESSAGE, openWhatsApp } from '../../utils/whatsapp'
import './Footer.css'

type QuickLink =
  | { label: string; to: string }
  | { label: string; whatsappMessage: string }

const quickLinks: QuickLink[] = [
  { label: 'Uniformes', to: '/uniformes' },
  { label: 'Quepes e barretinas', to: '/barretinas-e-quepes' },
  { label: 'Acessórios', to: '/acessorios' },
  { label: 'Calçados', to: '/calcados' },
  { label: 'Sobre', to: '/idealizador' },
  { label: 'Orçamento', whatsappMessage: 'Olá, vim pelo site da Fera Proart e gostaria de solicitar um orçamento.' },
  { label: 'Catálogo', whatsappMessage: CATALOG_WHATSAPP_MESSAGE },
]

const contactLinks = [
  { label: '+55 15 99799-2549', href: 'whatsapp', icon: 'whatsapp' },
  { label: '+55 15 99842-3339', href: 'tel:+5515998423339', icon: 'phone' },
  { label: 'feraproart@yahoo.com', href: 'mailto:feraproart@yahoo.com', icon: 'mail' },
]

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M3.75 6.75h16.5v10.5H3.75V6.75Z" />
      <path d="m4.5 7.5 7.5 5.25 7.5-5.25" />
    </svg>
  )
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M6.6 4.8 8.7 3l3.15 4.2-1.95 1.65c.87 1.8 2.25 3.18 4.05 4.05l1.65-1.95 4.2 3.15-1.8 2.1c-.75.87-2.04 1.08-3.09.6-4.56-2.07-7.65-5.16-9.72-9.72-.48-1.05-.27-2.34.6-3.09Z" />
    </svg>
  )
}

function Footer() {
  return (
    <footer className="site-footer" aria-label="Rodapé da Fera Proart">
      <div className="site-footer__inner">
        <div className="site-footer__content">
          <div className="site-footer__column site-footer__column--left">
            <Link className="site-footer__brand" to="/" aria-label="Fera Proart - Home">
              <img
                className="site-footer__brand-logo"
                src={footerLogo}
                alt="Logo Fera Proart"
              />
            </Link>

            <nav className="site-footer__group" aria-labelledby="footer-quick-links">
              <h2 id="footer-quick-links" className="site-footer__title">Acesso Rápido</h2>
              <ul className="site-footer__list">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    {'whatsappMessage' in link ? (
                      <button className="site-footer__link" type="button" onClick={() => openWhatsApp(link.whatsappMessage)}>
                        {link.label}
                      </button>
                    ) : (
                      <Link className="site-footer__link" to={link.to}>{link.label}</Link>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="site-footer__column site-footer__column--right">
            <div className="site-footer__group site-footer__group--contact">
              <h2 className="site-footer__title">Contato</h2>
              <ul className="site-footer__list site-footer__contact-list">
                {contactLinks.map((link) => (
                  <li key={link.href}>
                    {link.icon === 'whatsapp' ? (
                      <button className="site-footer__link site-footer__contact-link" type="button" onClick={() => openWhatsApp('Olá, vim pelo site da Fera Proart e gostaria de mais informações.')}>
                        <span className="site-footer__contact-icon" aria-hidden="true">
                          <img src={whatsappIcon} alt="" />
                        </span>
                        <span>{link.label}</span>
                      </button>
                    ) : (
                    <a className="site-footer__link site-footer__contact-link" href={link.href}>
                      <span className="site-footer__contact-icon" aria-hidden="true">
                        {link.icon === 'phone' && <PhoneIcon />}
                        {link.icon === 'mail' && <MailIcon />}
                      </span>
                      <span>{link.label}</span>
                    </a>
                    )}
                  </li>
                ))}
              </ul>

              <div className="site-footer__social" aria-labelledby="footer-social-title">
                <h2 id="footer-social-title" className="site-footer__title">Nos acompanhe</h2>
                <div className="site-footer__social-list" aria-label="Redes sociais">
                  <a className="site-footer__social-item" href="https://www.facebook.com/fera.proart/" target="_blank" rel="noreferrer" aria-label="Facebook">
                    <img className="site-footer__social-icon" src={facebookIcon} alt="" aria-hidden="true" />
                  </a>
                  <a className="site-footer__social-item" href="https://www.instagram.com/fera.proart/" target="_blank" rel="noreferrer" aria-label="Instagram">
                    <img className="site-footer__social-icon" src={instagramIcon} alt="" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>

            <address className="site-footer__group site-footer__address">
              <h2 className="site-footer__title">Localização</h2>
              <p>Sorocaba - 18108-800,</p>
              <p>Estrada do Inhayba, 37.</p>
            </address>
          </div>
        </div>

        <div className="site-footer__divider" />
        <p className="site-footer__copyright">© 2026 Fera Proart. Todos os direitos reservados.</p>
      </div>
    </footer>
  )
}

export default Footer
