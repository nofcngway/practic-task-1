import { BrowserRouter, Routes, Route } from 'react-router'
import NotFoundPage from './pages/NotFoundPage/NotFoundPage'
import Header from './components/Header/Header'
import CategoriesPage from './pages/CategoriesPage/CategoriesPage'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<CategoriesPage />} /> {/* мб сделать редирект тут через Navigate, чтобы основная страница была /categories*/}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
