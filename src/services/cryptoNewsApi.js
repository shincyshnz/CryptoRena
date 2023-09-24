import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoNewsHeaders = {
    'X-BingApis-SDK': 'true',
    'X-RapidAPI-Key': import.meta.env.VITE_CRYPTO_RAPID_API_KEY,
    'X-RapidAPI-Host': import.meta.env.VITE_CRYPTO_RAPID_NEWS_API_HOST,
};

const createRequest = (url) => ({
    url,
    headers: cryptoNewsHeaders,
});

export const cryptoNewsApi = createApi({
    reducerPath: 'cryptoNewsApi',
    baseQuery: fetchBaseQuery({ baseUrl:import.meta.env.VITE_CRYPTO_RAPID_NEWS_API_BASE_URL }),
    endpoints: (builder) => ({
        getCryptoNews: builder.query({
            query: ({newsCategory,count}) => createRequest(`/news/search?q=${newsCategory}&safeSearch=off&textFormat=Raw&freshness=Day&count=${count}`),
        })
    })
}); 

export const { useGetCryptoNewsQuery } = cryptoNewsApi;