import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ICurrenciesCollection } from './interfaces';

export const currencyApi = createApi({
  reducerPath: 'currencyApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.coinbase.com/v2/',
    headers: {
      'Content-Type': 'application/json',
    },
  }),
  endpoints: (builder) => ({
    getCurrency: builder.query<ICurrenciesCollection, void>({
      query: () => 'currencies',
    }),
  }),
});

export const { useGetCurrencyQuery } = currencyApi;
