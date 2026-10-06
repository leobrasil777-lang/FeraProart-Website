import Container from '../../../../components/Container/Container'
import biddingImage from '../../../../assets/images/home/home-licitacao.png'
import supplierImage from '../../../../assets/icons/home/beneficio-fornecedor-completo.svg'
import standardImage from '../../../../assets/icons/home/beneficio-padronizacao-visual.svg'
import simplePurchaseImage from '../../../../assets/icons/home/compra-simples.svg'
import whatsappIcon from '../../../../assets/icons/home/whatsapp.svg'
import { openWhatsApp } from '../../../../utils/whatsapp'
import './HomeBiddingSection.css'

type BiddingBenefitProps = {
  image: string
  title: string
  description: string
}

const benefits: BiddingBenefitProps[] = [
  {
    image: supplierImage,
    title: 'Fornecedor Completo',
    description: 'Tudo o que sua corporação precisa em um só lugar.',
  },
  {
    image: standardImage,
    title: 'Padronização Visual',
    description: 'Uniformes e acessórios seguindo a mesma identidade.',
  },
  {
    image: simplePurchaseImage,
    title: 'Compra Mais Simples',
    description: 'Menos fornecedores, menos etapas e mais organização.',
  },
]

function BiddingBenefit({ image, title, description }: BiddingBenefitProps) {
  return (
    <article className="bidding-benefit">
      <img className="bidding-benefit__image" src={image} alt="" aria-hidden="true" />
      <div className="bidding-benefit__content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </article>
  )
}

function HomeBiddingSection() {
  return (
    <section className="home-bidding-section" aria-labelledby="home-bidding-title">
      <Container className="home-bidding-section__container">
        <div className="home-bidding-section__copy">
          <h2 id="home-bidding-title" className="home-bidding-section__title">
            <span className="home-bidding-section__title-main">Trabalhamos</span>
            <span className="home-bidding-section__title-line">
              <span className="home-bidding-section__title-main">com</span>
              <span className="home-bidding-section__title-script highlight-font">licitação</span>
            </span>
          </h2>

          <div className="home-bidding-section__description">
            <p>
              A Fera Proart atende instituições públicas, escolas, prefeituras e secretarias em processos de licitação para bandas, fanfarras e corporações musicais.
            </p>
            <p>
              Centralize em um só fornecedor uniformes, quepes, barretinas, calçados e acessórios.
            </p>
          </div>

          <button
            className="home-bidding-section__cta"
            type="button"
            onClick={() => openWhatsApp('Olá, vim pelo site da Fera Proart e gostaria de falar com um especialista sobre licitações.')}
          >
            <img src={whatsappIcon} alt="" aria-hidden="true" />
            <span>Falar com um especialista</span>
          </button>
        </div>

        <div className="home-bidding-section__benefits" aria-label="Benefícios para licitações">
          {benefits.map((benefit) => (
            <BiddingBenefit key={benefit.title} {...benefit} />
          ))}
        </div>
      </Container>

      <div className="home-bidding-section__image-wrap">
        <img
          className="home-bidding-section__image"
          src={biddingImage}
          alt="Martelo de juiz representando processos de licitação"
          loading="lazy"
          decoding="async"
        />
      </div>
    </section>
  )
}

export default HomeBiddingSection
