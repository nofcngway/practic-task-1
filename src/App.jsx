import { BrowserRouter, Routes, Route, Navigate } from 'react-router'
import NotFoundPage from './pages/NotFoundPage/NotFoundPage'
import Header from './components/Header/Header'
import CategoriesPage from './pages/CategoriesPage/CategoriesPage'
import CategoryProductsPage from './pages/CategoryProductsPage/CategoryProductsPage'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/categories" replace />} />
        <Route path="/categories" element={<CategoriesPage />} />
        <Route path="/categories/:slug" element={<CategoryProductsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
