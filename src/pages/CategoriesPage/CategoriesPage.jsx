import { useGetCategoriesQuery } from '../../store/api/productsApi'
import CategoryCard from '../../components/CategoryCard/CategoryCard'
import PageTitle from '../../shared/ui/PageTitle/PageTitle'
import StatusMessage from '../../shared/ui/StatusMessage/StatusMessage'
import './CategoriesPage.css'

const CategoriesPage = () => {
  const { data, isLoading, isError } = useGetCategoriesQuery()

  if (isLoading) return <StatusMessage>Загрузка...</StatusMessage>
  if (isError) {
    return <StatusMessage>Не удалось загрузить категории.</StatusMessage>
  }

  return (
    <>
      <PageTitle>Категории товаров</PageTitle>

      <ul className="categories-page__list">
        {data?.map((category) => (
          <li className="categories-page__item" key={category.slug}>
            <CategoryCard category={category} />
          </li>
        ))}
      </ul>
    </>
  )
}

export default CategoriesPage
