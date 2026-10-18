import { Link } from 'react-router'
import { ROUTES } from '../../shared/config/routes'
import './Header.css'

const Header = () => {
  return (
    <header className="header">
      <div className="header__inner">
        <Link to={ROUTES.home} className="header__logo">
          StoreForFun
        </Link>

        <nav className="header__nav">
          <Link to={ROUTES.categories} className="header__link">
            Категории
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default Header
