import { useParams } from 'react-router'
import { useGetProductsByCategoryQuery } from '../../store/api/productsApi'
import ProductCard from '../../components/ProductCard/ProductCard'
import PageTitle from '../../shared/ui/PageTitle/PageTitle'
import StatusMessage from '../../shared/ui/StatusMessage/StatusMessage'
import './CategoryProductsPage.css'

const CategoryProductsPage = () => {
  const { slug } = useParams()
  const { data, isLoading, isError } = useGetProductsByCategoryQuery(slug)

  if (isLoading) return <StatusMessage>Загрузка товаров...</StatusMessage>
  if (isError)
    return <StatusMessage>Не удалось загрузить товары.</StatusMessage>

  const products = data?.products ?? []

  return (
    <>
      <PageTitle>Категория: {slug}</PageTitle>

      {products.length === 0 ? (
        <StatusMessage>В этой категории пока нет товаров.</StatusMessage>
      ) : (
        <ul className="category-products-page__list">
          {products.map((product) => (
            <li className="category-products-page__item" key={product.id}>
              <ProductCard product={product} />
            </li>
          ))}
        </ul>
      )}
    </>
  )
}

export default CategoryProductsPage
