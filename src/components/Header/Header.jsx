import { Link } from 'react-router'
import './Header.css'

function Header() {
  return (
    <header className="header">
      <Link to="/" className="header__logo">
        Store For Fun
      </Link>

      <nav className="header__nav">
        <Link to="/">Каталог</Link>
      </nav>
    </header>
  )
}

export default Header
