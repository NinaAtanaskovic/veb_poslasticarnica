import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from './slices/apiSlice.js';
import cartSliceReducer from './slices/cartSlice';
import authSliceReducer from './slices/authSlice';
//centralno mesto gde cuvamo stanje app
//reducer-funkcija koja menja stanje, svaki slice ima svoj reducer
const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,  //deo za server,podaci sa servera, loading stanje, cache

    cart: cartSliceReducer,
    auth: authSliceReducer,
  },
  middleware: (getDefaultMiddleware) =>  //prati sta se desava i salje te zahteve po potrebi bez njega ne moze
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
});

export default store;