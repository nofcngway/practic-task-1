import { Link } from 'react-router'
import { ROUTES } from '../../shared/config/routes'
import './ProductCard.css'

const ProductCard = ({ product }) => {
  return (
    <Link
      className="product-card"
      to={ROUTES.product(product.category, product.id)}
    >
      <img
        className="product-card__image"
        src={product.thumbnail}
        alt={product.title}
        loading="lazy"
      />
      <div className="product-card__body">
        <span className="product-card__title">{product.title}</span>
        <span className="product-card__price">${product.price}</span>
      </div>
    </Link>
  )
}

export default ProductCard
