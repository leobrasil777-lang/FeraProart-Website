import './ProductCard.css'

interface ProductCardProps {
  title: string
  description?: string
  image?: string
  href?: string
  label?: string
}

function ProductCard({ title, description, image, href, label }: ProductCardProps) {
  const content = (
    <>
      {image && (
        <div className="product-card__media">
          <img className="product-card__image" src={image} alt="" />
        </div>
      )}
      <div className="product-card__content">
        {label && <span className="product-card__label">{label}</span>}
        <h3 className="product-card__title">{title}</h3>
        {description && <p className="product-card__description">{description}</p>}
      </div>
    </>
  )

  if (href) {
    return (
      <a className="product-card product-card--link" href={href}>
        {content}
      </a>
    )
  }

  return <article className="product-card">{content}</article>
}

export default ProductCard
