import { Outlet } from 'react-router'
import Header from '../Header/Header'
import './Layout.css'

const Layout = () => {
  return (
    <>
      <Header />
      <main className="layout">
        <Outlet />
      </main>
    </>
  )
}

export default Layout
