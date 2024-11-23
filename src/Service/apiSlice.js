// src/services/apiSlice.js
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
  endpoints: (builder) => ({
    submitCardDetails: builder.mutation({
      query: (cardDetails) => ({
        url: '/card-details',
        method: 'POST',
        body: cardDetails,
      }),
    }),
    submitCarDetails: builder.mutation({
      query: (carDetails) => ({
        url: '/car-maintenance',
        method: 'POST',
        body: carDetails,
      }),
    }),
  }),
});

export const {
  useSubmitCardDetailsMutation,
  useSubmitCarDetailsMutation,
} = apiSlice;
