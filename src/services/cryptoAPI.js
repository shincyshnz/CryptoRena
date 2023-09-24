import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoApiHeaders = {
    'X-RapidAPI-Key': import.meta.env.VITE_CRYPTO_RAPID_API_KEY,
    'X-RapidAPI-Host': import.meta.env.VITE_CRYPTO_RAPID_API_HOST,
};


const createRequest = (url) => ({
    url,
    headers: cryptoApiHeaders
});

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({ baseUrl : import.meta.env.VITE_CRYPTO_RAPID_API_BASE_URL }),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: (count) => createRequest(`/coins?limit=${count}`),
        }),
        getCryptoDetails: builder.query({
            query: (coinId) => createRequest(`/coin/${coinId}`),
        }),
        getCryptoHistory: builder.query({
            query: ({coinId, timePeriod}) => createRequest(`/coin/${coinId}/history?timePeriod=${timePeriod}`),
        }),
        getExchanges: builder.query({
            query: (coinId) => createRequest(`/coin/Qwsogvtv82FCd/exchanges?q=referenceCurrencyUuid=yhjMzLPhuIDl&limit=50&offset=0&orderBy=24hVolume&orderDirection=desc`),
        }),
    })
});

export const {
    useGetCryptosQuery,
    useGetCryptoDetailsQuery,
    useGetCryptoHistoryQuery,
    useGetExchangesQuery,
} = cryptoApi;