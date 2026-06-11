import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from '../constants';
//ovo nam je da znamo gde ide na server i sta treba da osvezi

const baseQuery = fetchBaseQuery({ baseUrl: BASE_URL });
//uvek zovi ovu adresu kad nesto trazis

export const apiSlice = createApi({
  baseQuery,
  tagTypes: ['Product', 'Order', 'User'], // sta treba da osveži podatke.
  endpoints: () => ({}),
});
