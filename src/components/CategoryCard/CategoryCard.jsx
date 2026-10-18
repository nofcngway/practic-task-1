import { Link } from 'react-router'
import { ROUTES } from '../../shared/config/routes'
import './CategoryCard.css'

const CategoryCard = ({ category }) => {
  return (
    <Link className="category-card" to={ROUTES.category(category.slug)}>
      <span className="category-card__title">{category.name}</span>
    </Link>
  )
}

export default CategoryCard
