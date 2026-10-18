import { BrowserRouter, Routes, Route, Navigate } from 'react-router'
import Layout from '../components/Layout/Layout'
import CategoriesPage from '../pages/CategoriesPage/CategoriesPage'
import CategoryProductsPage from '../pages/CategoryProductsPage/CategoryProductsPage'
import ProductPage from '../pages/ProductPage/ProductPage'
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage'
import { ROUTES } from '../shared/config/routes'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Navigate to={ROUTES.categories} replace />} />
          <Route path="categories" element={<CategoriesPage />} />
          <Route path="categories/:slug" element={<CategoryProductsPage />} />
          <Route path="categories/:slug/:id" element={<ProductPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
