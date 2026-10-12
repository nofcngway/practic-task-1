import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const productsApi = createApi({
  reducerPath: 'productsApi',

  baseQuery: fetchBaseQuery({
    baseUrl: 'https://dummyjson.com',
  }),

  endpoints: (builder) => ({
    getCategories: builder.query({
      query: () => '/products/categories',
    }),

    getProductsByCategory: builder.query({
      query: (slug) => `/products/category/${slug}`,
    }),

    getProductsById: builder.query({
      query: (id) => `/products/${id}`,
    }),
  }),
})

export const {
  useGetCategoriesQuery,
  useGetProductsByCategoryQuery,
  useGetProductByIdQuery,
} = productsApi
