import { Link } from 'react-router'
import { useGetCategoriesQuery } from '../../store/api/productsApi'
import './CategoriesPage.css'

const CategoriesPage = () => {
  const { data, isLoading, isError } = useGetCategoriesQuery()

  if (isLoading) {
    return <div className="categories-page__status">Загрузка...</div>
  }

  if (isError) {
    return (
      <div className="categories-page__status">
        Не удалось загрузить категории.
      </div>
    )
  }

  return (
    <main className="categories-page">
      <h1 className="categories-page__title">Категории товаров</h1>

      <ul className="categories-page__list">
        {data?.map((category) => (
          <li className="categories-page__item" key={category.slug}>
            <Link
              className="categories-page__card"
              to={`/categories/${category.slug}`}
            >
              <span className="categories-page__card-title">
                {category.name}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  )
}

export default CategoriesPage
