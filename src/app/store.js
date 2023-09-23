import { configureStore } from "@reduxjs/toolkit";
import { cryptoApi } from "../services/cryptoAPI";
import { cryptoNewsApi } from "../services/cryptoNewsApi";

export default configureStore({
    reducer: {
        [cryptoApi.reducerPath]: cryptoApi.reducer,
        [cryptoNewsApi.reducerPath]: cryptoNewsApi.reducer,
    },
    // Adding the api middleware enables caching, invalidation, polling,
    // and other useful features of `rtk-query`.
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat(cryptoApi.middleware)
            .concat(cryptoNewsApi.middleware),
}); 