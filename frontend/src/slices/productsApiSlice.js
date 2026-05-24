// MOCK verzija — ne poziva backend, vraća lokalne podatke



import { createSlice } from '@reduxjs/toolkit';
import products from '../mock/products_list';


const productsSlice = createSlice({
  name: 'products',
  initialState: { list: products, loading: false, error: null },
  reducers: {},
});

export default productsSlice.reducer;


export const useGetProductsQuery = () => ({
  data: products,
  isLoading: false,
  error: null,
});

export const useGetProductDetailsQuery = (id) => ({
  data: products.find((p) => p._id === id) || null,
  isLoading: false,
  error: null,
});