import apiService from "../apiService";

export const productApi = apiService.injectEndpoints({
    endpoints: builder => ({
        searchProducts: builder.query({
            query: (params) => ({
                url: 'products/search',
                method: 'GET',
                params,
            }),
        }),
    }),
});

export const {
    useSearchProductsQuery,
} = productApi;
