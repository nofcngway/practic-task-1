import { Link } from 'react-router'
import './Header.css'

function Header() {
  return (
    <header className="header">
      <div className="header__inner">
        <Link to="/" className="header__logo">
          StoreForFun
        </Link>

        <nav className="header__nav">
          <Link to="/" className="header__link">
            Категории
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default Header
