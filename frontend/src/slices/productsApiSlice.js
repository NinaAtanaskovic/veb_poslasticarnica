// MOCK verzija — ne poziva backend, vraća lokalne podatke



import { createSlice } from '@reduxjs/toolkit';
import products from '../mock/products_list';

//drzi pocetno stanje proizvoda
const productsSlice = createSlice({
  name: 'products',
  initialState: { list: products, loading: false, error: null },
  reducers: {},
}); //ne menja stanje jer nema reducera

export default productsSlice.reducer;

//vraca sve 
export const useGetProductsQuery = () => ({ 
  data: products,
  isLoading: false,
  error: null,
});
//vraca detalje sa odredjenim idijem
export const useGetProductDetailsQuery = (id) => ({
  data: products.find((p) => p._id === id) || null,
  isLoading: false,
  error: null,
});