import { Link, useParams } from 'react-router'
import { useGetProductsByIdQuery } from '../../store/api/productsApi'
import ProductGallery from '../../components/ProductGallery/ProductGallery'
import PageTitle from '../../shared/ui/PageTitle/PageTitle'
import StatusMessage from '../../shared/ui/StatusMessage/StatusMessage'
import { ROUTES } from '../../shared/config/routes'
import './ProductPage.css'

const getOldPrice = (price, discountPercentage) => {
  return (price / (1 - discountPercentage / 100)).toFixed(2)
}

const ProductPage = () => {
  const { slug, id } = useParams()
  const {
    data: product,
    isLoading,
    isError,
    error,
  } = useGetProductsByIdQuery(id)

  if (isLoading) return <StatusMessage>Загрузка товара...</StatusMessage>
  if (isError) {
    return (
      <StatusMessage>
        {error?.status === 404
          ? 'Товар не найден.'
          : 'Не удалось загрузить товар.'}
      </StatusMessage>
    )
  }

  const images = product.images?.length
    ? product.images
    : [product.thumbnail].filter(Boolean)
  const hasDiscount = product.discountPercentage > 0
  const details = [
    ['Бренд', product.brand],
    ['Артикул', product.sku],
    ['Гарантия', product.warrantyInformation],
    ['Доставка', product.shippingInformation],
    ['Возврат', product.returnPolicy],
  ].filter(([, value]) => value)

  return (
    <>
      <Link className="product-page__back" to={ROUTES.category(slug)}>
        Назад к товарам
      </Link>

      <div className="product-page__content">
        <ProductGallery
          key={product.id}
          images={images}
          title={product.title}
        />

        <div className="product-page__info">
          <PageTitle>{product.title}</PageTitle>

          <p className="product-page__rating">★ {product.rating}</p>

          <div className="product-page__price">
            <span className="product-page__price-current">
              ${product.price}
            </span>
            {hasDiscount && (
              <>
                <span className="product-page__price-old">
                  ${getOldPrice(product.price, product.discountPercentage)}
                </span>
                <span className="product-page__discount">
                  −{Math.round(product.discountPercentage)}%
                </span>
              </>
            )}
          </div>

          <p className="product-page__stock">
            {product.availabilityStatus ?? 'В наличии'}: {product.stock} шт.
          </p>

          <p className="product-page__description">{product.description}</p>

          {details.length > 0 && (
            <div className="product-page__details">
              {details.map(([label, value]) => (
                <div className="product-page__detail" key={label}>
                  <span className="product-page__detail-label">{label}</span>
                  <span className="product-page__detail-value">{value}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {product.reviews?.length > 0 && (
        <section className="product-page__reviews">
          <h2 className="product-page__reviews-title">Отзывы</h2>
          <ul className="product-page__reviews-list">
            {product.reviews.map((review) => (
              <li
                className="product-page__review"
                key={`${review.reviewerEmail}-${review.date}`}
              >
                <div className="product-page__review-header">
                  <span className="product-page__review-author">
                    {review.reviewerName}
                  </span>
                  <span>★ {review.rating}</span>
                </div>
                <p className="product-page__review-text">{review.comment}</p>
              </li>
            ))}
          </ul>
        </section>
      )}
    </>
  )
}

export default ProductPage
