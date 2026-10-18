export const ROUTES = {
  home: '/',
  categories: '/categories',
  category: (slug) => `/categories/${slug}`,
  product: (slug, id) => `/categories/${slug}/${id}`,
}
